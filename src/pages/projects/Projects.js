import React, { useEffect, useRef } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import './projects.scss';
import projectDetails from '../../utils/projectDetails';
import Row from '../../components/row/Row';
import SocialIcons from '../../components/social-icons/SocialIcons';
import gsap from 'gsap';
import { projectsAnim } from '../../utils/animations';

const Projects = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  useEffect(() => {
    undoCanvas();

    const tl = gsap.timeline();
    projectsAnim(tl, headerRef, projectsRef);
  }, []);

  return (
    <div className="projects">
      <div className="projects__container">
        <h1 className="projects__title" ref={headerRef}>
          Projects<span>.</span>
        </h1>

        <div className="projects__display" ref={projectsRef}>
          {projectDetails.map((project, idx) => {
            return (
              <Row
                image={project.image}
                name={project.name}
                desc={project.desc}
                demo={project.demo}
                github={project.github}
                nogithub={project.nogithub}
                key={idx}
                displayRight={idx % 2 !== 0 ? true : false}
              />
            );
          })}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="projects__waves"
      >
        <path
          fill="#181102"
          fillOpacity=".7"
          d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,122.7C840,171,960,245,1080,261.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <SocialIcons />
    </div>
  );
};

export default Projects;
