import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px !important;

  @media only screen and (max-width: 1439px){
    max-width: 988px;
  }
  @media only screen and (max-width: 1099px){
    margin: auto 32px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      메인 컨텐츠 영역
    </MainContainer>
  )
}

export default Main;