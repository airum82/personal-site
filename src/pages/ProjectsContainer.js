import React from 'react';
import Project from '../components/Project';
import { projectsList } from '../assets/projects';
import Layout from '../components/Layout';

const ProjectsContainer = ({ location }) => (
  <Layout location={location}>
    <section className="projects">
      {
        projectsList.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            description={project.description}
            img={project.img}
            url={project.url} 
          />
        ))
      }
    </section>
  </Layout>
)

export default ProjectsContainer;