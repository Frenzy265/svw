import styled from "styled-components/macro";

const Header = styled.header`
  font-weight: bold;
  text-transform: uppercase;
  height: 120px;
  margin: 30px 20px 20px;
  place-items: center;

  h1 {
    color: var(--tertiary-color);
    font-size: 40px;
    margin: 0;
  }

  h2 {
    color: var(--secondary-color);
    font-size: 25px;
    margin: 0;
  }
`;

export default Header;
