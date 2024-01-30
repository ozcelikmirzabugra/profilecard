const Skill = ({ skill, color, level }) => (
  <div className="skill" style={{ backgroundColor: color }}>
    <span>{skill}</span>
    <span>{level === "beginner" && "♪"}</span>
  </div>
);

export default Skill;
