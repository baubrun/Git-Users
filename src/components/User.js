import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";

const User = (props) => {
  // const { followers, following, public_gists, public_repos } = props.repoInfo;

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card userInfo={props.userInfo.value}/>
        <Followers followers={props.followers}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
