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
    margin-top: 16px;
    background: rgba(237, 209, 129, 1);
    padding: 10px 20px;
    border-radius: 10px;
    color: black;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.2);
  }
`;

const Hours = () => {
  return (
    <Section {...this.props} title="Hours">
      <Container>
        <div className="section">
          <h3>Appointments Only</h3>
          <h5>Open Tuesday thru Saturday</h5>

          <h5>
            All days are APPOINTMENT ONLY. Book an appointment with us on
            NeverWait. See our NeverWait page for available times.
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
