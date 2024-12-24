import React from "react";

function About() {
  return (
    <section className="bg-light py-5" id="about">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Me</span>
              </h2>
              <p className="lead fw-light mb-4">My name is Prasanna Ithape.</p>
              <p className="text-muted">
                A software developer with a passion for learning and creating
                websites and web applications..
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                
                <a
                  className="text-gradient"
                  href="https://www.linkedin.com/in/prasanna-ithape-a5659b197"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  className="text-gradient"
                  href="https://github.com/PrasannaIthape"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
