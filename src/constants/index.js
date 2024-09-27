
import project1 from "../assets/projects/cmsss.png";
import project2 from "../assets/projects/music.jpg";
import project3 from "../assets/projects/traffic.png";
import project4 from "../assets/projects/neuro.jpg";
import project5 from "../assets/projects/portfolio.png";

export const ABOUT_TEXT = `I'm an undergraduate student, currently pursuing my B.tech in Information Technology, graduating in 2025. I've done several interesting projects in Python. Dabbling with the 'why's' and 'how's' of the way things are allows me to never procrastinate.
                So, this is me working out a portfolio site to answer "Why do I do tech?" and "How do I improve doing tech?". Enjoy your walkthrough and feel free to reach out for questions and opportunities!`;

export const EXPERIENCES = [
  {
    year: "Upcoming 2025",
    role: "Full Stack Engineer",
    company: "Fidelity Investments",
    description: `Intern + FSE`,
    technologies: [],
  },
  {
    year: "June 2024 - August 2024",
    role: "FSE Intern",
    company: "Fidelity Investments",
    description: `Developed and trained Large Language Models (LLM) as a PoC (Proof of Concept).  Worked extensively as a team, engineering prompts and improving the output of the LLM. Presented to teams in both India and US.`,
    technologies: ["Python", "LangChain", "AWS", "LLM"],
  },
];

export const PROJECTS = [
  {
    title: "Study of Kinetic Disorders in Neurodegenerative Diseases",
    image: project4,
    link:"https://github.com/sanju179/fingertapping",
    description:
      "Funded Project · Final Year Project (Ongoing).",
    technologies: ["Machine Learning", "Computer Vision"],
  },
  {
    title: "Music Synthesizer A.I",
    image: project2,
    link:"https://github.com/sanju179/synthesizer-ai",
    description:
      "Developed an app that generates adaptive melodies using Genetic Algorithms, predicts user preferences with a Random Forest Classifier, and applies Gradient Descent to evaluate sequence fitness.",
    technologies: ["Python", "Flask", "Artificial Intelligence"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    link:"https://github.com/sanju179/portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Traffic Regulation",
    image: project3,
    link:"https://github.com/sanju179/traffic-regulation",
    description:
      "A web application using Flask framework, rerouting algorithms, and real-time traffic data APIs suggests optimal routes based on dataset, allowing users to find time-efficient routes.",
    technologies: ["Python", "Flask", "Graphs"],
  },
  {
    title: "Clinic Management System",
    image: project1,
    link:"https://github.com/sanju179/CMS",
    description:
      "A software developed in a scrum team, for small clinics simplifies registration, admits patients, and saves time and resources, with three user modes for admins, receptionists, and doctors.",
    technologies: ["Python", "TKinter", "Data Structures"],
  },
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu, 600058 ",
  phoneNo: "+91 8428706729",
  email: "sanjeevinir17@outlook.com",
};
