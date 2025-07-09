import { createContext, useState } from "react";

const globalContext=createContext([count,setcount]=useState(0));