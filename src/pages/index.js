import React from 'react';
import 'normalize.css';
import '../main.scss';
import Header from '../components/Header';
import Bio from '../components/Bio';
import AnimationContainer from '../components/AnimationContainer';

const IndexPage = () => (
  <div>
    <Header />
    <AnimationContainer />
    <Bio />  
  </div>
)

export default IndexPage;
