console.log("loading projects");

const fetchProjects = async () => {
  const response = await fetch("https://portfolio-api-blg6.onrender.com/projects");
  const jsonData = await response.json();

  return jsonData;
};

(async function () {
  const projects = await fetchProjects();
  console.log(projects);
})();
