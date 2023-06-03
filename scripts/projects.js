console.log("loading projects");

const fetchProjects = async () => {
  const response = await fetch("https://portfolio-api-blg6.onrender.com/projects");
  const jsonData = await response.json();

  return jsonData;
};

(async function () {
  const projects = await fetchProjects();
  const projectsContainer = document.querySelector("#projects");
  projects.forEach(project => {
    // create the project's section
    const sectionProject = document.createElement("section");
    sectionProject.setAttribute("class", "project");

    // create the project's snapshot image
    const img = document.createElement("img");
    img.setAttribute("src", project.snapshot);

    // create the project header
    const h3 = document.createElement("h3");
    const h3Text = document.createTextNode(project.projectName);
    h3.appendChild(h3Text);

    // create the project's made with items
    const ul = document.createElement("ul");
    ul.setAttribute("class", "techs");

    if (project.madeWith) {
      project.madeWith.forEach(item => {
        const li = document.createElement("li");
        const liText = document.createTextNode(item);
        li.appendChild(liText);
        ul.appendChild(li);
      });
    }

    // create the description paragraph
    const descriptionPara = document.createElement("p");
    descriptionPara.setAttribute("class", "description");
    const descriptionText = document.createTextNode(project.description);
    descriptionPara.appendChild(descriptionText);

    // append the elements to the project's section
    sectionProject.appendChild(img);
    sectionProject.appendChild(h3);
    sectionProject.appendChild(ul);
    sectionProject.appendChild(descriptionPara);

    // append the a new project to the projects container
    projectsContainer.appendChild(sectionProject);
  });
})();
