import React from "react";
import './home.scss';
import Layout from "../components/layout/layout";
import WelcomeSection from "../components/welcome-section/welcome";
import About from "../components/about-section/about";
import ProjectsSection from "../components/projects-section/projects";
import Contact from "../components/contact-section/contact";


const PersonalPortfolio = () => {
  return (
    <main className="page-container">
      <Layout>
        <section className="welcome-section" id="welcome">
          <WelcomeSection />
        </section>
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="projects-section" id="projects">
          <ProjectsSection />
        </section>
        <section className="contact-section" id="contact">
          <Contact />
        </section>
      </Layout>
    </main>
  );
}

export default PersonalPortfolio;

