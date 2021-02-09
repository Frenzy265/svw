import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Inputfield } from "./Input";

const Background = styled.div`
  background-image: url("https://images.sportbuzzer.de/v1/photos/raw/04-05-2013-fussball-1-bundesliga-2012-2013-32-spieltag-sv-werder-bremen-ubersich/large-16-9");
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Textfield = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h1 {
    font-size: 100px;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--tertiary-color);
    margin: 0;
    text-shadow: 0.5px 0.5px var(--primary-color);
  }

  h2 {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--secondary-color);
    margin: 0;
    text-shadow: 0.5px 0.5px var(--primary-color);
  }
`;

export const Textbox = ({ title, subtitle }) => {
  return (
    <>
      <Background>
        <Textfield>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <Inputfield />
        </Textfield>
      </Background>
    </>
  );
};

Textbox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
