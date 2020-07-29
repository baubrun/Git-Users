import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const AuthWrapper = ({ children }) => {
  const {error, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <Loader
          className="loading-img"
          type="Grid"
          color="#00BFFF"
          height={250}
          width={250}
        />
      </Wrapper>
    );
  }
  
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
