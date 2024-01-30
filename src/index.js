import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Skill from "./Skill";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="akaza">
      <img className="avatar" src="pp.jpg" alt="Mirza Ozcelik" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Mirza Ozcelik</h1>
      <p>
        Intern Front-End Web Developer and student at Atilim University. When
        not coding getting out from discipline, i feel uncomfortable and bad.
        Learning something is the most best therapy for me.
      </p>
    </div>
  );
}

const skills = [
  { skill: "HTML", color: "red ", level: "beginner" },
  { skill: "CSS", color: "orange", level: "beginner" },
  { skill: "JavaScript", color: " yellow", level: "beginner" },
  { skill: "React", color: "#61DBFB", level: "beginner" },
  // add more skills here...
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
