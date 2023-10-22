import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import React from 'react';
import SignUp from '../pages/SignUpPage/SignUp';
import SignIn from '../pages/SignInPage/SignIn';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import CategoryPages from '../pages/CategoryPages/CategoryPages';
import MyTracks from '../pages/MyTracks/MyTracks';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useAuth = () => {
  const navigate = useNavigate();
  const isAuth = !localStorage.getItem('user');
  console.log(isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin');
    }
  }, [isAuth, navigate]);

  return isAuth;
};

export const AppRoutes = () => {
  const isAuth = useAuth();

  return (
    <Routes>
      {isAuth && <Route path="/" element={<MainPage />} />}
      {isAuth && <Route path="/category/:id" element={<CategoryPages />} />}
      {isAuth && <Route path="/favorites" element={<MyTracks />} />}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
