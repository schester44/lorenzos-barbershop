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

  .main-cta {
    background: rgba(237, 209, 129, 1);
    padding: 20px;
    border-radius: 4px;
    color: black;
    text-decoration: none;
    display: block;
    max-width: 320px;
    font-size: 18px;
    text-align: center;
    margin: 16px auto 0 auto;
  }
`;

const Hours = () => {
  return (
    <Section {...this.props} title="Hours">
      <Container>
        <div className="section">
          <h3>Appointments Only</h3>
          <h5>
            Open Tuesday thru Saturday by appointment only. See our NeverWait
            page for available times and to book an appointment.
          </h5>

          <a
            href="https://neverwait.app/l/lorenzo"
            target="new"
            title="Book Appointment"
            className="main-cta"
          >
            Book Appointment on NeverWait
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Hours;
