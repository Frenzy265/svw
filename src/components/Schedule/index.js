import React from "react";
import { MatchContainer, MatchResult, TeamContainer } from "./scheduleElements";
import PropTypes from "prop-types";

const Schedule = ({
  team1,
  logo1,
  team2,
  logo2,
  resultTeam1,
  resultTeam2,
  finished,
}) => {
  const highlight = false;

  return (
    <>
      <MatchContainer highlight={highlight}>
        <TeamContainer>
          <p>{team1}</p>
          <img src={logo1} alt={`Icon from ${team1}`} />
        </TeamContainer>
        <MatchResult>
          {finished ? <p>{`${resultTeam1} : ${resultTeam2}`}</p> : <p>vs.</p>}
        </MatchResult>
        <TeamContainer>
          <img src={logo2} alt={`Icon from ${team2}`} />
          <p>{team2}</p>
        </TeamContainer>
      </MatchContainer>
    </>
  );
};

export default Schedule;

Schedule.propTypes = {
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
  logo1: PropTypes.string.isRequired,
  logo2: PropTypes.string.isRequired,
  resultTeam1: PropTypes.number,
  resultTeam2: PropTypes.number,
  finished: PropTypes.bool,
};
