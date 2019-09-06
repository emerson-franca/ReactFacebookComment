import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;
const UserAvatar = styled.img`
  border-radius: 50%;
  align-self: flex-start;
`;

const UserComment = styled.div`
  background-color: #eeeeee;
  margin-left: 8px;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
`;

class PostComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <UserAvatar src={this.props.data.author.avatar}></UserAvatar>
        <UserComment>
          <p>{this.props.data.content}</p>
        </UserComment>
      </Wrapper>
    );
  }
}

export default PostComment;
