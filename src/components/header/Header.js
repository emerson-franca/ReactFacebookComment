import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #4a90e2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

const Perfil = styled.div`
  display: flex;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-left: 5px;
`;

class Header extends Component {
  state = {
    titile: "Header"
  };

  render() {
    return (
      <Wrapper>
        <img src="https://i.imgur.com/KDIDiSE.png" />

        <Perfil>
          <h4>Meu Perfil</h4>
          <Icon className="material-icons">account_circle</Icon>
        </Perfil>
      </Wrapper>
    );
  }
}

export default Header;
