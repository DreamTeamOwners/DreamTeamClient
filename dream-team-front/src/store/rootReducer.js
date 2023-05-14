import { combineReducers } from "@reduxjs/toolkit";
import { reducer as resumeReducer } from "./resume/resume.slice";
import {reducer as authReducer} from "./auth/auth.slice"

export const rootReducer = combineReducers({
    resume: resumeReducer,
    auth: authReducer,
})
