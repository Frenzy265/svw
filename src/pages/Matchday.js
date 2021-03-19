import React from "react";
import { useQuery } from "react-query";
import Header from "../components/Header";
import { Menue } from "../components/Menue";
import Schedule from "../components/Schedule/index";
import { getMatchday } from "../data/matchday";

export const Matchday = () => {
  const name = localStorage.getItem("Name");

  const { data: matches, status } = useQuery("matches", getMatchday);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && (
        <>
          <Header>
            <div>
              <h1>{matches[1]?.Group.GroupOrderID}. Spieltach!</h1>
              <h2>für {name}´s zuhause.</h2>
            </div>
          </Header>
          {matches?.map((match, index) => (
            <Schedule
              key={index}
              team1={match?.Team1.TeamName}
              logo1={match?.Team1.TeamIconUrl}
              team2={match?.Team2.TeamName}
              logo2={match?.Team2.TeamIconUrl}
            />
          ))}
          <Menue path="/giphy" />
        </>
      )}
    </>
  );
};
