import React from 'react';

const Project = (props) => (
  <article>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <p>{props.url}</p>
    <img className="project-img" src={props.img} />
  </article>
)

export default Project