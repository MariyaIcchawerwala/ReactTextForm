import './App.css';
import { useState } from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState('light') //Wether darkmode is enabled or not
  const [classcolor, setclasscolor] = useState('dark')
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode= ()=>{
    if(mode === 'light')
    {
      setmode('dark');
      setclasscolor('light');
      document.body.style.backgroundColor = '#304666';
      showAlert("dark mode enabled","success")
    }
    else {
      setmode('light');
      setclasscolor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
  }
  return (
   <>
     <Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode} classcolor={classcolor}/>
        <Alert alert={alert}/>
     <div className="container my-3">
      <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
     </div>
   </>
  );
}

export default App;
