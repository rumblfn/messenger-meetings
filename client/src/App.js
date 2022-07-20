import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Room from './components/Room/Room'
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path="/:username/:roomId" component={Room} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
`;

export default App;
