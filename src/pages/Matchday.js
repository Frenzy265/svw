import React, { useState } from "react";
import { useQuery } from "react-query";
import Header from "../components/Header";
import { Menue } from "../components/Menue";
import Schedule from "../components/Schedule/index";
import { MatchesContainer } from "../components/Schedule/scheduleElements";
import { Selector } from "../components/Selector";
import * as IoIcon from "react-icons/io";

export const Matchday = () => {
  const [day, setDay] = useState("/");
  const name = localStorage.getItem("Name");
  const { data: matches, status } = useQuery(day);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && (
        <>
          <Header>
            <div>
              <h1>Spieltach!</h1>
              <h2>für {name}´s zuhause.</h2>
            </div>
          </Header>
          <Selector>
            <button
              onClick={() =>
                setDay(`/2022/${matches[0]?.Group.GroupOrderID - 1}`)
              }
            >
              <IoIcon.IoIosArrowDropleftCircle />
            </button>
            <p>{matches[0]?.Group.GroupOrderID}. Spieltach</p>
            <button
              onClick={() =>
                setDay(`/2022/${matches[0]?.Group.GroupOrderID + 1}`)
              }
            >
              <IoIcon.IoIosArrowDroprightCircle />
            </button>
          </Selector>

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
          <Menue path="/giphy" />
        </>
      )}
    </>
  );
};
