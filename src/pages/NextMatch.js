import React from "react";
import { useQuery } from "react-query";
import Header from "../components/Header";
import { Menue } from "../components/Menue";
import Schedule from "../components/Schedule";
import { getNextMatch } from "../data/api";

const NextMatch = () => {
  const name = localStorage.getItem("Name");
  const { data: match, status } = useQuery("nextMatch", getNextMatch);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && (
        <>
          <Header>
            <div>
              <h1>{`${match.Group.GroupOrderID}. Spieltach!`}</h1>
              <h2>{`In ${name}'s zuhause.`}</h2>
            </div>
          </Header>

          <Schedule
            team1={match.Team1.ShortName}
            logo1={match.Team1.TeamIconUrl}
            team2={match.Team2.ShortName}
            logo2={match.Team2.TeamIconUrl}
          />
          <Menue path="/giphy" />
        </>
      )}
    </>
  );
};

export default NextMatch;
