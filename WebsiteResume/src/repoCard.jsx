import { LuBookMarked } from "react-icons/lu";

// GitHub's colours for common languages; anything else uses the site accent.
const LANGUAGE_COLORS = {
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  TypeScript: "#3178c6",
};

const relativeTime = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function timeAgo(dateString) {
  const seconds = (new Date(dateString) - Date.now()) / 1000;
  const units = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) {
      return relativeTime.format(Math.round(seconds / size), unit);
    }
  }
  return "just now";
}

function RepoCard({ repo }) {
  const { name, description, language, html_url, updated_at } = repo;

  return (
    <a
      className="repo-card"
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} repository on GitHub (opens in a new tab)`}
    >
      <div className="repo-header">
        <LuBookMarked className="repo-icon" aria-hidden="true" focusable="false" />
        <h4 className="repo-name">{name}</h4>
      </div>

      <p className={`repo-description ${description ? "" : "empty"}`}>
        {description || "No description provided."}
      </p>

      <div className="repo-meta">
        {language && (
          <span className="repo-language">
            <span
              className="repo-language-dot"
              style={{ background: LANGUAGE_COLORS[language] || "var(--color-accent)" }}
              aria-hidden="true"
            />
            {language}
          </span>
        )}
        <span className="repo-updated">Updated {timeAgo(updated_at)}</span>
      </div>
    </a>
  );
}

export default RepoCard;
