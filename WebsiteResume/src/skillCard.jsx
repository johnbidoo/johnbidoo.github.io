// A single skill: icon + name.
// `color` is the brand colour shown on hover; `lightColor` optionally overrides
// it in light mode (for brand colours that are too pale on a white card).
function SkillCard({ name, Icon, color, lightColor }) {
  const style = {};
  if (color) style["--brand"] = color;
  if (lightColor) style["--brand-light"] = lightColor;

  return (
    <li className="skill-card" style={style}>
      <span className="skill-icon">
        <Icon aria-hidden="true" focusable="false" />
      </span>
      <span className="skill-name">{name}</span>
    </li>
  );
}

export default SkillCard;
