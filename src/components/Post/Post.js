import React, { Component } from "react";
import { render } from "react-dom";
import PostComment from "./PostComment";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 40px;
  background-color: #fff;
  width: 50%;
  flex-wrap: wrap;
  margin: 20px 0;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 11px -4px #000000;
  box-shadow: 0px 1px 11px -4px #000000;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const PostData = styled.span`
  color: #949494;
`;

const PostContent = styled.div`
  flex: 1 1 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 20px 0;
`;

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Avatar src={this.props.data.author.avatar}></Avatar>

        <div>
          <h4>{this.props.data.author.name}</h4>
          <PostData>{this.props.data.date}</PostData>
        </div>
        <PostContent>{this.props.data.content}</PostContent>
        {this.props.data.comments.map(comment => (
          <PostComment key={comment.id} data={comment} />
        ))}
      </Wrapper>
    );
  }
}

export default Post;
