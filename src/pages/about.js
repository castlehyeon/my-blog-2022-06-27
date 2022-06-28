import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image'
function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog2.jpeg"
      />
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;