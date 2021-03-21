import React from "react";
import { useQuery } from "react-query";
import Header from "../components/Header";
import { Menue } from "../components/Menue";
import Schedule from "../components/Schedule/index";
import { MatchesContainer } from "../components/Schedule/scheduleElements";
import { getMatchday } from "../data/api";

export const Matchday = () => {
  const name = localStorage.getItem("Name");
  const { data: matches, status } = useQuery("matches", getMatchday);

  // console.log(matches);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && (
        <>
          <Header>
            <div>
              <h1>{matches[0]?.Group.GroupOrderID}. Spieltach!</h1>
              <h2>für {name}´s zuhause.</h2>
            </div>
          </Header>
          <MatchesContainer>
            {matches?.map((match, index) => (
              <Schedule
                key={index}
                team1={match.Team1.ShortName}
                logo1={match.Team1.TeamIconUrl}
                team2={match.Team2.ShortName}
                logo2={match.Team2.TeamIconUrl}
                finished={match.MatchIsFinished}
                resultTeam1={match.MatchResults[0]?.PointsTeam1}
                resultTeam2={match.MatchResults[0]?.PointsTeam2}
              />
            ))}
          </MatchesContainer>
          <Menue path="/nextmatch" />
        </>
      )}
    </>
  );
};
