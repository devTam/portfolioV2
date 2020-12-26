import React from 'react';
import "./socialIcons.scss";

const SocialIcons = () => {
    return (
        <div className="projects__socials">
      <a
              href="https://www.linkedin.com/in/tammy-batubo-4023b6119/"
              className="projects-icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>

            </a>
            <a
              href="https://twitter.com/dev_TamB"
              className="projects-icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="mailto:tammy.batubo@gmail.com" className="projects-icons">
              <i className="fab fa-google-plus-square"></i>
            </a>
      </div>
    )
}

export default SocialIcons
