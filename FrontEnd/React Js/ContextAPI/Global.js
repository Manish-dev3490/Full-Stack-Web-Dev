import { createContext, useState } from "react";

// useContext kya hai - this is used to prevent our application from problems of props drilling in this we make a global store and add all data in that file and if any file or component needs that data import from global it prevent props drilling 
const globalContext = createContext("0");

export default globalContext;