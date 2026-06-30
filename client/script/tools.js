document.addEventListener("DOMContentLoaded", () => {    

    const myTools = [
    { title: "JavaScript", icon: "javascript" },
    { title: "HTML", icon: "html5" },
    { title: "CSS", icon: "css3" },

    { title: "TypeScript", icon: "typescript" },
    { title: "Node.js", icon: "nodedotjs" },
    { title: "React", icon: "react" },
    { title: "React Native", icon: "react" },

    { title: "Express", icon: "express" },
    { title: "Next.js", icon: "nextdotjs" },

    { title: "MongoDB", icon: "mongodb" },
    { title: "SQL", icon: "database" },
    { title: "MySQL", icon: "mysql" },
    { title: "PostgreSQL", icon: "postgresql" },

    { title: "Tailwind CSS", icon: "tailwindcss" },
    { title: "Mongoose", icon: "leaf" },

    { title: "Docker", icon: "docker" },
    { title: "Git", icon: "git" },

    { title: "AWS", icon: "amazonaws" },
    { title: "Cypress", icon: "cypress" },
    { title: "Azure", icon: "microsoftazure" },
    { title: "Jenkins", icon: "jenkins" },

    { title: "Figma", icon: "figma" },
    { title: "Photoshop", icon: "adobephotoshop" },
    { title: "Adobe", icon: "adobe" },

    { title: "REST API", icon: "fastapi" }
    ];

    const premiumTools = document.getElementById('premium-tools');

    const renderedTools = myTools.map(tool => `
        <div class="tool-card">
            <img 
            class="tool-icon"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg"
            alt="${tool.title}"
            />
            <span class="tool-title">${tool.title}</span>
        </div>
    `).join('');

    premiumTools.innerHTML = renderedTools;
})