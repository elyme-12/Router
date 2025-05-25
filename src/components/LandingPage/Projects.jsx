import proj1 from "../Image/proj1.png"
import proj2 from "../Image/proj2.png"
import proj3 from "../Image/proj3.png"
import proj4 from "../Image/proj4.png"
import proj5 from "../Image/proj5.png"
import proj6 from "../Image/proj6.png"
import proj7 from "../Image/proj7.png"

function Projects() {
    return (
        <section id="projects">
            <h2 className="project_heading">My Projects</h2>
            <div className="project_container">
                <div className="projects-box">
                    <img src={proj1} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Enrollment Form</h3>
                    <p className="project-description">Student Enrollment Form using HTML and CSS</p>
                    <div className="button-group">
                    <a href="https://elyme-12.github.io/student_enrollment_form/Enrollment_form" target="_blank" rel="noopener noreferrer" className="btn">
                        Visit Site
                    </a>
                    <a href="https://github.com/elyme-12/barlan_pelec" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj2} alt="Project 2" className="project-image" />
                    <h3 className="project-title">Responsive Webpage using Media Query</h3>
                    <p className="project-description">Responsive Webpage using HTML and CSS and Media Query</p>
                    <div className="button-group">
                    <a href="https://elyme-12.github.io/Assignment_1/ACTIVITY%201/assignment1.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/Assignment_1" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj3} alt="Project 3" className="project-image" />
                    <h3 className="project-title">Responsive Navbar & Cards</h3>
                    <p className="project-description">Responsive navbar & cards about Myself using Media Query </p>
                    <div className="button-group">
                    <a href="https://elyme-12.github.io/Assignment_2/ACTIVITY%202/assignment2.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/Assignment_2" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj4} alt="Project 4" className="project-image" />
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-description">A personal portfolio site built using React and CSS.</p>
                    <div className="button-group">
                    <a href="https://elybarlan.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/My_Portfolio" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj5} alt="Project 5" className="project-image" />
                    <h3 className="project-title">API Search Project</h3>
                    <p className="project-description">Advanced API that fetches books with search bar and pagination</p>
                    <div className="button-group">
                    <a href="https://fetchbook.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/fetch_" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj6} alt="Project 6" className="project-image" />
                    <h3 className="project-title">Responsive Portfolio website</h3>
                    <p className="project-description">Responsive One-Page Portfolio Website Using HTML and CSS</p>
                    <div className="button-group">
                    <a href="https://elyme-12.github.io/final_exam/web.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/final_exam" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={proj7} alt="Project 7" className="project-image" />
                    <h3 className="project-title">State Management</h3>
                    <p className="project-description">State Management and Redux Basics</p>
                    <div className="button-group">
                    <a href="https://state-management-barlan.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/elyme-12/spinner" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;

