import React from 'react';
import train from '../assets/cartoon-train.gif';

const AnimationContainer = (props) => (
  <section className="animation">
    <img src={train} className="animation_img"/>
  </section>
);

export default AnimationContainer;