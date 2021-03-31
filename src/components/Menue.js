import styled from "styled-components/macro";
import Raute from "../assets/raute-transparent.gif";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Image = styled.img`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 100px;
  width: 70px;
  background: none;
  border: none;
  animation: 2s infinite heartbeat;

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
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
