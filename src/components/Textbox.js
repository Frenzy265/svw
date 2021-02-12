import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Inputfield } from "./Input";

const Background = styled.div`
  background-image: url("https://images.sportbuzzer.de/v1/photos/raw/04-05-2013-fussball-1-bundesliga-2012-2013-32-spieltag-sv-werder-bremen-ubersich/large-16-9");
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Headline = styled.h1`
  font-size: 100px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--tertiary-color);
  margin: 0;
  padding: 5px 20px;
  background: var(--primary-color);
  display: inline;
  line-height: 1.6;
  box-decoration-break: clone;
`;

const Span = styled.span`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--secondary-color);
  margin: 0;
  padding: 5px 20px;
  background: var(--primary-color);
  line-height: 1.6;
  display: inline;
  box-decoration-break: clone;
`;

export const Textbox = ({ title, subtitle }) => {
  return (
    <>
      <Background>
        <Headline>{title}</Headline>
        <br />
        <Span>{subtitle}</Span>
        <Inputfield />
      </Background>
    </>
  );
};

Textbox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
