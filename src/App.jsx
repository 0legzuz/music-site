// import React, { useState, useEffect } from 'react';
import React from 'react';
// import MainPage from './pages/MainPage/MainPage.jsx';
// import Skeleton from './pages/SkeletonPage/Skeleton.jsx';
// import SignIn from './pages/SignInPage/SignIn.jsx';
// import SignUp from './pages/SignUp.js';
import * as G from './styles/global.jsx';
import { AppRoutes } from './navigation/routes.jsx';

function App() {
  return (
    <div className="App">
      <G.GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
