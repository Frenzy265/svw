import styled from "styled-components/macro";
import PropTypes from "prop-types";

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

const Subline = styled.h2`
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
      <Headline>{title}</Headline>
      <br />
      <Subline>{subtitle}</Subline>
    </>
  );
};

Textbox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
