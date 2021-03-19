import React from "react";
import {
  MatchContainer,
  MatchesContainer,
  TeamContainer,
} from "./scheduleElements";
import PropTypes from "prop-types";

const Schedule = ({ team1, logo1, team2, logo2 }) => {
  return (
    <>
      <MatchesContainer>
        <MatchContainer>
          <TeamContainer>
            <p>{team1}</p>
            <img src={logo1} alt={`Icon from ${team1}`} />
          </TeamContainer>
          <TeamContainer>
            <img src={logo2} alt={`Icon from ${team2}`} />
            <p>{team2}</p>
          </TeamContainer>
        </MatchContainer>
      </MatchesContainer>
    </>
  );
};

export default Schedule;

Schedule.propTypes = {
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
  logo1: PropTypes.string.isRequired,
  logo2: PropTypes.string.isRequired,
};
