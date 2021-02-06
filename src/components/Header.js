import styled from "styled-components/macro";

const Header = styled.header`
  font-weight: bold;
  text-transform: uppercase;

  h1 {
    color: var(--tertiary-color);
    font-size: 45px;
    margin-bottom: 0;
  }

  h2 {
    color: var(--secondary-color);
    font-size: 25px;
    margin-top: 0;
  }
`;

export default Header;
