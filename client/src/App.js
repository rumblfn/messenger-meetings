import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from './components/hocs/PrivateRoute';
import Room from './components/Room/Room';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <PrivateRoute
            path="/:roomId"
            exact
          />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
`;

export default App;
