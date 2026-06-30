document.addEventListener("DOMContentLoaded", () => { 

    const myProjects = [
        {
            title: "My Portfolio",
            desc:`Designed and developed a responsive personal portfolio website to showcase projects, technical skills, 
                and professional experience. Implemented a dynamic contact form with email functionality, allowing visitors 
                and recruiters to send messages directly through the website.`,
            img: "images/Portfolio/Meshack.png",
            link: "https://chatbot-zuri.netlify.app/",
            previewLink: 'portfolio.html',
            category:'web'
        },

  
    ]

if(path.includes('/projects') || path.includes('/index')){
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
}

})