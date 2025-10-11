import { createContext } from "react";


const globalStore = createContext({
    name: "manish",
    class: "12th",
    age: 22
})
export default globalStore