import ReactImage from './assets/react.svg'
import AppleContainer from './Components/AppleContainer';
import {Counter }from './Components/counter'
function App() {
  console.log("APp is rendred");
  
  return (
    <>
      <Counter></Counter>
      <AppleContainer />
    </>
  );
}

export default App;
