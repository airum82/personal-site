import React from 'react';
import 'normalize.css';
import '../main.scss';
import Layout from '../components/Layout';
import Bio from '../components/Bio';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Bio /> 
  </Layout> 
)

export default IndexPage;
