// import React from "react";
import React, { useState, useEffect } from "react";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating AJAX request to fetch project data
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Update state with the fetched projects
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }
  console.log(projects);
  return (
    <div className="projects-section" id="projects">
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Project Card 1*/}
              {projects.map((project) => (
                <div key={project.id} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        {/* //  <li key={project.id} className="project-item"> */}
                        <div key={project.id} className="project-item">
                          <h2 className="fw-bolder">{project.name}</h2>
                          <p>{project.description}</p>
                          <strong>Technologies:</strong>{" "}
                          <span>{project.technologies.join(", ")}</span>
                        </div>
                      </div>

                      <img
                        className="img-fluid project-img" 
                        src={project.thumbnail}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Project Card 2*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
