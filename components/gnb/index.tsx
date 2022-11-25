import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  padding: 20px 32px;
  box-shadow: 0 0 1px 1px rgb(33 41 63 / 10%);

  position: sticky;
  top: 0;
  background-color: white;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      글로벌 네비게이션 영역
    </NavigationContainer>
  )
} 

export default Navigation;
