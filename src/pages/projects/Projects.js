import React, { useEffect } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import './projects.scss';
import projectDetails from "../../utils/projectDetails";
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
            {
                projectDetails.map((project, idx) => {
                    return (
                        <Row image={project.image} desc={project.desc} key={idx} />
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Projects;
