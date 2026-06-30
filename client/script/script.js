const mainHeaderBtn = document.getElementById("mainHeaderBtn")
const headerBtn = document.getElementById("headerBtn")

mainHeaderBtn.addEventListener("mousemove", () => {
  headerBtn.style.display = "block";
})

mainHeaderBtn.addEventListener("mouseout", () => {
  headerBtn.style.display = "none";
})


const myProjects = [
  {
    title: "My Portfolio",
    desc:`Designed and developed a responsive personal portfolio website to showcase projects, technical skills, 
          and professional experience. Implemented a dynamic contact form with email functionality, allowing visitors 
          and recruiters to send messages directly through the website.`,
    img: "images/Portfolio/Meshack.png",
    link: "https://chatbot-zuri.netlify.app/",
    previewLink: 'projects/portfolio.html',
    category:'web'
  },

  
]

  const myProjectsContainer = document.querySelector('.myProject')
  const renderedExperience = myProjects.map(project =>(
    ` 
      <div class="projects-div reveal project-section-bar myProject" id="move-up" data-category=${project.category}>
        <div class="projects-section" data-category=${project.category}>
          <a href=${project.link}><img src=${project.img} alt=${project.title}></a>
        </div>
        <div class="projects-section-two">
            <h4 id="check-up">${project.title}</h4>
            <p>${project.desc}</p>
            <div class="right-side-btn"><a href="${project.previewLink}"><i class="fa-solid fa-arrow-right"></i></a></div>
        </div>
      </div>
    `
  ))
  myProjectsContainer.innerHTML = renderedExperience.join('')


const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".projects-div");
const emptyContainer = document.querySelector(".empty-container"); 

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button
    filterButtons.forEach(btn => btn.classList.remove("filter-active"));
    button.classList.add("filter-active");

    const filter = button.dataset.filter;
    let visibleCount = 0;

    projects.forEach(project => {
      const category = project.dataset.category;

      if (filter === "all" || category === filter) {
        project.classList.remove("hide-project");
        visibleCount++;
      } else {
        project.classList.add("hide-project");
      }
    });

    emptyContainer.innerHTML = "";

    if (visibleCount === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty-div");
      emptyDiv.innerHTML = "<p>No projects available yet</p>";
      emptyContainer.appendChild(emptyDiv);
    }

  });
});


