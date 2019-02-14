import React from 'react';
import Project from '../components/Project';
import { projectsList } from '../assets/projects';
import Layout from '../components/Layout';

const ProjectsContainer = (props) => (
  <Layout>
    <section className="projects">
      {
        projectsList.map(project => (
          <Project
            name={project.name}
            description={project.description}
            img={project.img}
            url={props.url} 
          />
        ))
      }
    </section>
  </Layout>
)

export default ProjectsContainer;