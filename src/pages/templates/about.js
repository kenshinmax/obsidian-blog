import React from 'react';

const About = ({ pageContext }) => {
  return (
    <section>
      <h2>{pageContext.title}</h2>
       <div className="about-container">
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </div>
    </section>
  )
};

export default About;