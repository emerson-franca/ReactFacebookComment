import React, { Component } from "react";
import Post from "./Post/Post";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlia Alcantara",
          avatar: "https://i.pravatar.cc/60?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/40?img=5"
            },
            content:
              "Exemplo de conteúdo aleatório de comentários para testar o tamanho das linhas do texto"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Júlia Menezes",
          avatar: "https://i.pravatar.cc/60?img=2"
        },
        date: "04 Jun 2019",
        content: "Postagem Exemplo",
        comments: [
          {
            id: 2,
            author: {
              name: "Luiza Fernandes",
              avatar: "https://i.pravatar.cc/40?img=2"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/60?img=3"
        },
        date: "04 Jun 2019",
        content: "Bom dia!!",
        comments: [
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/40?img=2"
            },
            content: "Oi! Bom dia!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Wrapper>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} comment={post.comments} />
        ))}
      </Wrapper>
    );
  }
}

export default PostList;
