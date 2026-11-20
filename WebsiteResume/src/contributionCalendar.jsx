import { useEffect, useRef } from "react";

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2026-11-20" -> local Date (avoids timezone shifts from new Date("2026-11-20"))
function parseDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(date) {
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
}

// Group days into week columns (Sunday first), padding the first week.
function buildWeeks(contributions) {
  const days = contributions.map((c) => ({ ...c, dateObj: parseDate(c.date) }));
  const padding = days.length ? days[0].dateObj.getDay() : 0;
  const cells = [...Array(padding).fill(null), ...days];

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

// A month label goes above the first week that contains a new month.
function buildMonthLabels(weeks) {
  const labels = [];
  let lastMonth = null;

  weeks.forEach((week, index) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;
    const month = firstDay.dateObj.getMonth();
    if (month !== lastMonth) {
      labels.push({ index, text: MONTHS[month] });
      lastMonth = month;
    }
  });

  // Drop the first label if it's squeezed against the second one.
  if (labels.length > 1 && labels[1].index - labels[0].index < 3) {
    labels.shift();
  }
  return labels;
}

function describe(day) {
  const count = day.count;
  const label = count === 0 ? "No contributions" : `${count} contribution${count === 1 ? "" : "s"}`;
  return `${label} on ${formatDate(day.dateObj)}`;
}

function ContributionCalendar({ contributions, total }) {
  const scrollRef = useRef(null);
  const weeks = buildWeeks(contributions);
  const monthLabels = buildMonthLabels(weeks);

  // On narrow screens, start scrolled to the most recent weeks.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [contributions]);

  return (
    <div className="calendar">
      <div className="calendar-scroll" ref={scrollRef} tabIndex={0} role="region" aria-label="Contribution calendar">
        <div
          className="calendar-grid"
          style={{ "--weeks": weeks.length }}
          role="img"
          aria-label={`${total} contributions in the last year`}
        >
          <div className="calendar-months" aria-hidden="true">
            {monthLabels.map((label) => (
              <span key={`${label.text}-${label.index}`} style={{ gridColumn: label.index + 1 }}>
                {label.text}
              </span>
            ))}
          </div>

          <div className="calendar-days" aria-hidden="true">
            {DAY_LABELS.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>

          <div className="calendar-weeks" aria-hidden="true">
            {weeks.map((week, w) => (
              <div className="calendar-week" key={w}>
                {week.map((day, d) =>
                  day ? (
                    <span
                      key={day.date}
                      className="calendar-cell"
                      data-level={day.level}
                      title={describe(day)}
                    />
                  ) : (
                    <span key={`empty-${d}`} className="calendar-cell empty" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="calendar-legend" aria-hidden="true">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className="calendar-cell" data-level={level} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default ContributionCalendar;
