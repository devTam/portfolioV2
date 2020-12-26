import React, { useEffect } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import './projects.scss';
import projectDetails from '../../utils/projectDetails';
import Row from '../../components/row/Row';

const Projects = () => {
  useEffect(() => {
    undoCanvas();
  }, []);

  return (
    <div className="projects">
      <div className="projects__container">
        <h1 className="projects__title">
          Projects<span>.</span>
        </h1>

        <div className="projects__display">
          {projectDetails.map((project, idx) => {
            return <Row image={project.image} desc={project.desc} key={idx} />;
          })}
        </div>
      </div>
      {/* <div className="blob1"></div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="projects__waves"
      >
        <path
          fill="#181102"
          fill-opacity=".7"
          d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,122.7C840,171,960,245,1080,261.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projects;
