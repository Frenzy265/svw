import styled from "styled-components/macro";
import Raute from "../assets/raute-transparent.gif";

const Image = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 130px;
`;

export const Menue = () => {
  return (
    <>
      <Image src={Raute} alt="Werder Raute" />
    </>
  );
};
