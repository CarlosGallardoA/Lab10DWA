import { Link } from "react-router-dom";
import styled from "styled-components";
const Navigation = () => {
  return (
    <>
      <Nav>
        <h1>
          <Link to="/contador" className="title_nav">
            Contador
          </Link>
        </h1>
        <Items>
          <Link to="/table" className="app">
            Tabla
          </Link>
        </Items>
        <Items>
          <Link to="/pokedex" className="app">
            Pokedex
          </Link>
        </Items>
      </Nav>
    </>
  );
};
const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .app {
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
    text-transform: uppercase;
    &:hover {
      color: #767474;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #000;
  color: #fff;
  height: 60px;
  align-items: center;
  .title_nav {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #767474;
    }
  }
`;
export default Navigation;
