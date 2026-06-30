document.addEventListener("DOMContentLoaded", () => {
/* ------------- MY SKILLS ------------- */

    const mySkills = [
    {
        title: "Problem-Solving",
        desc: "Able to break down complex issues into simple, practical solutions. Focused on debugging, optimizing, and delivering reliable results."
    },
    {
        title: "Communication",
        desc: "Clear and effective communication with teams and stakeholders to ensure alignment and smooth project execution."
    },
    {
        title: "Adaptability",
        desc: "Quick to learn new technologies and adjust to changing project requirements and environments."
    },
    {
        title: "Collaboration",
        desc: "Works well in team environments, contributing ideas and supporting shared project goals."
    },
    {
        title: "Continuous Learning",
        desc: "Consistently exploring new tools and technologies to improve skills and stay up to date with industry trends."
    }
    ];

    const renderedSkills = mySkills.map(skill => (
        ` <div class="projects-div">
        <div class="projects-section-two experience-level" id="experience">
            <h4 id="skills-header">${skill.title}</h4>
            <p>${skill.desc}</p>
        </div>
        </div>
        `
    ))

    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = renderedSkills.join('')
    
})