import { Route,Router,Routes } from "react-router-dom"
import React, {ComponentType, lazy, LazyExoticComponent} from 'react';
import {HomePage} from "./home";
import { Auth} from "../features";
import User from '../features/auth/user'
import AuthPage from "./auth";
import ResumePage from "./resume";
export function Pages() {
  return (
    <Routes>
      <Route path="/"
          element={
            <HomePage/>
          } />
    {/*<Route path={Auth.routes.main} element={<HomePage/>} />*/}
    {/* <Route path={Auth.routes.login} element={<User/>} /> */}
      <Route path="/login" element={<AuthPage/>} />
      <Route path="/resume" element={<ResumePage/>} />
    </Routes>
  );
}