import SkillCard from "./skillCard";

// A titled section containing a grid of SkillCards.
// `variant` alternates the section background ("white" | "dark"), like the Goals page.
function SkillCategory({ title, skills, variant = "white" }) {
  return (
    <section className={`skill-category ${variant}`}>
      <h2>{title}</h2>
      <ul className="skill-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </ul>
    </section>
  );
}

export default SkillCategory;
