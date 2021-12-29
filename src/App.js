// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar head="Learn" aboutUs="About Us"/>
      <TextArea heading="Grammerly" title="Enter your text here:"/>
    </>
  );
}

export default App;
