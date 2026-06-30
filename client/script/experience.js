document.addEventListener("DOMContentLoaded", () => { 
/* ------------- MY EXPERIENCE ------------- */

    const myExperience = [
    {
        year: "2020 – Present",
        title: "Freelance Web Developer",
        company: "",
        desc: "Delivering end-to-end web solutions for clients across multiple industries, focusing on scalable full-stack applications using modern JavaScript technologies.",
        keyContributions: [
        "Delivered end-to-end web development projects for clients across different industries",
        "Built responsive web applications using modern JavaScript frameworks and APIs",
        "Designed and implemented authentication systems, dashboards, and business websites",
        "Managed project lifecycle including requirements gathering, development, testing, and deployment",
        "Integrated third-party APIs and external services to extend application functionality",
        "Provided ongoing maintenance, updates, and technical support for deployed systems"
        ]
    },
    {
        year: "Jan 2023 – Oct 2025",
        title: "Junior Full-Stack Developer",
        company: "Revolution Net",
        desc: "Worked on building and maintaining scalable web applications, collaborating across teams to deliver production-ready solutions.",
        keyContributions: [
        "Developed and maintained full-stack web applications using React and Node.js in production environments",
        "Designed and implemented RESTful APIs to support scalable frontend-backend integration",
        "Improved application responsiveness and performance through UI optimization and API debugging",
        "Collaborated with cross-functional teams to deliver production releases on schedule",
        "Contributed to system enhancements and internal technical documentation",
        "Supported deployment workflows and production issue resolution"
        ]
    },
    {
        year: "Aug 2020 –  Nov 2022",
        title: "Junior Web Developer",
        company: "Ignite Media",
        desc: "Contributed to the development and maintenance of client-facing web applications.",
        keyContributions: [
        "Built and deployed production-ready web applications for client-facing platforms",
        "Managed end-to-end website deployment including hosting, DNS configuration, and server setup",
        "Improved application performance and user experience through frontend optimization",
        "Developed reusable components and maintained modular code structures",
        "Worked with backend systems including email services, cPanel management, and integrations",
        "Ensured security best practices across deployed applications"
        ]
    },
    {
        year: "Jul 2020 – Dec 2020",
        title: "Web Developer Intern",
        company: "Mzansi Hosting",
        desc: "Gained practical experience in real-world development environments and team workflows.",
        keyContributions: [
        "Assisted in building front-end components and backend endpoints",
        "Participated in debugging, API testing, and code reviews",
        "Learned version control, deployment processes, and agile practices",
        "Supported deployment processes and environment configuration"
        ]
    },
    {
        year: "Sept 2018 – Dec 2019",
        title: "Volunteer Web Developer",
        company: "Mzansi Hosting",
        desc: "Provided web development support for non-profit organizations.",
        keyContributions: [
        "Built and deployed websites including hosting setup",
        "Maintained and updated client websites",
        "Configured DNS, email, and cPanel hosting environments",
        "Improved site performance and stability"
        ]
    },
    {
        year: "2016 – 2018",
        title: "Self-Taught Web Development",
        company: "",
        desc: "Transitioned from business studies to software development, building a strong foundation in programming and web technologies."
    },
    {
        year: "2015",
        title: "Education",
        company: "",
        desc: "Completed Grade 12 (Diploma)."
    }
    ];

    const container = document.getElementById('experience-container');

    const rendered = myExperience.map(exp => `
        <div class="experience-card" id="yearsOfExperience">
        
        <div class="experience-header" >
            <span  style="color:grey; class="experience-year">${exp.year}</span>
            <h2 id="skills-header" class="experience-title">${exp.title}</h2>
            ${exp.company ? `<p style="color:grey; class="experience-company">${exp.company}</p>` : ""}
        </div>

        <p class="experience-desc">${exp.desc}</p>

        ${
            exp.keyContributions
            ? `
                <ul class="experience-list" style="margin-top: 10px; margin-left: 20px;">
                ${exp.keyContributions.map(item => `<li style="font-size:15px;">${item}</li>`).join("")}
                </ul>
                `
            : ""
        }

        </div>
    `).join("");

    container.innerHTML = rendered;
})