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
