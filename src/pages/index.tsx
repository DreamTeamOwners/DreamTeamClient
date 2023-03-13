import { Route, Router, Routes } from 'react-router-dom';
import React, { ComponentType, lazy, LazyExoticComponent } from 'react';
import { HomePage } from './home';
import ResumePage from './resume';
import UserProfileEdit from './Profile';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/profile" element={<UserProfileEdit />} />
    </Routes>
  );
}
