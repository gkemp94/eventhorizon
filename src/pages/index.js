import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../images/eventhorizonlogo.svg';
import styled from 'styled-components';

const Splash = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Image = styled.img`
  height: 150px;
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <Splash>
      <Image src={Logo} />
    </Splash>
  </Layout>
);
