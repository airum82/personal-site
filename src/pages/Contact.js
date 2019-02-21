import React from 'react'
import Layout from '../components/Layout';

const Contact = ({ location }) => (
  <Layout location={location}>
    <section className="contact">
      <h2><a href="https://www.linkedin.com/in/arram-mandel/">Linkedin</a></h2>
      <h2><a href="https://github.com/airum82">Github</a></h2>
      <h2>Email: airum82@gmail.com</h2>
    </section>
  </Layout>
)

export default Contact
