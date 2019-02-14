import React from 'react';
import { Link } from 'gatsby';
import Project from '../components/Project';
import { projectsList } from '../assets/projects';
import Layout from '../components/Layout';

const ProjectsContainer = (props) => (
  <div>
    <Layout>
    <Link to="/">Home</Link>
    <section className="projects">
      {
        projectsList.map(project => (
          <Project
            name={project.name}
            description={project.description}
            url={props.url} 
          />
        ))
      }
    </section>
    </Layout>
  </div>
)

export default ProjectsContainer;