import React from "react";
import styled from "styled-components";
import Section from "../components/Section";

const Container = styled("div")`
  h3 {
    margin-bottom: 0.5em;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5em;
  }

  .section {
    margin-bottom: 1em;
  }

  h5 {
    font-weight: 400;
    color: #999;
    font-size: 22px;
    text-align: center;
    line-height: 1.3;
  }
`;

const Hours = () => {
  return (
    <Section {...this.props} title="Hours">
      <Container>
        <div className="section">
          <h3>Appointments Only</h3>
          <h5>Tuesday, Thursday, Friday: 7am to 9am</h5>
          <h5>Wednesday: 7am to 6pm</h5>
        </div>
      </Container>
    </Section>
  );
};

export default Hours;
