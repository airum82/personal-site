import React from 'react';

const Project = (props) => (
  <article>
    <h2>{props.name}</h2>
    <p>props.description</p>
    {/* <img src={props.img1} />
    <img src={props.img2} /> */}
  </article>
)

export default Project