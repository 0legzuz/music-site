import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage.jsx';
import Skeleton from './pages/SkeletonPage/Skeleton.jsx';
import SignIn from './components/SignIn.jsx';
// import SignUp from './pages/SignUp.js';
import * as G from './styles/global.jsx';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  window.innerWidth = screen.width;
  window.innerHeight = screen.height;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <G.GlobalStyle />
      {!isLogged ? (
        isLoading ? (
          <Skeleton />
        ) : (
          <MainPage />
        )
      ) : (
        <SignIn setLogged={setLogged} />
      )}
    </div>
  );
}

export default App;
