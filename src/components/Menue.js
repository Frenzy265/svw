import styled from "styled-components/macro";
import Raute from "../assets/raute-transparent.gif";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Image = styled.img`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 130px;
  width: 100px;
  background: none;
  border: none;
`;

export const Menue = ({ path }) => {
  return (
    <>
      <Link to={path}>
        <Image src={Raute} alt="Werder Raute" />
      </Link>
    </>
  );
};

Menue.propTypes = {
  path: PropTypes.string.isRequired,
};
