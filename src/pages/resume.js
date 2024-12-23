import React from "react";

function Resume() {
  return (
    <>
      <div className="container px-5 my-5" id="resume">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section*/}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                {/* Download resume button*/}
                {/* Note: Set the link href target to a PDF file within your project*/}
                <a className="btn btn-primary px-4 py-3" href="#!">
                  <div className="d-inline-block bi bi-download me-2" />
                  Download Resume
                </a>
              </div>
              {/* Experience Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          July 2023 - Dec 2023
                        </div>
                        <div className="small fw-bolder">
                          Front End Developer
                        </div>
                        <div className="small text-muted">
                          EnvisionTech Solutions
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        I worked as a trainee FD in one startup Envision Tech
                        for 6 months. In this trainee phase, I used to work on
                        leetcode problem to clear the JS concepts and logic.
                        This is available in git profile.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Education Section*/}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* Education Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2021 – 2023
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Btech</div>
                          <div className="small text-muted">
                            Computer Science
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>Yashoda Technical Campus, Satara</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2018 – 2020
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Diploma in</div>
                          <div className="small text-muted">
                            Information Technology
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Abhaysinhraje Bhonsle Institute of Technology, Satara
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Divider*/}
            <div className="pb-5" />
            {/* Skills Section*/}
            <section>
              {/* Skillset Card*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* Languages list*/}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash" />
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Languages
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          HTML
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          CSS
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          JavaScript
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          ReactJs
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Java
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Node.js
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
