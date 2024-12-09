// import React, { useState } from "react";
// import "./App.css";
// import About from "./components/About.js";
// import Navbar from "./components/Navbar.js";
// import TextForm from "./components/TextForm.js";
// import Alert from "./components/Alert.js";

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link,
// } from "react-router-dom";

// function App(props) {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   };

//   const removeBodyClasses=()=>{
//     document.body.classList.remove('bg-light');
//     document.body.classList.remove('bg-dark');
//     document.body.classList.remove('bg-warning');
//     document.body.classList.remove('bg-danger');
//     document.body.classList.remove('bg-white');
//     document.body.classList.remove('bg-success');
//   }
//   const toggleMode = (cls) => {
//     removeBodyClasses();
//     console.log(cls)
//     document.body.classList.add('bg-'+cls)
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "grey";
//       showAlert("Dark mode has been enabled", "success");
//       // document.title = "TextUtils-Dark Mode";
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//       // document.title = "TextUtils-Light Mode";
//     }
//   };

//   return (
//     <>
//       {/* <Router> 
//       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert}/>
//       <div className="container my-3">

//       <Routes>
//         <Route path="/about" Component={<About/>}/> 
//         <Route path="/" Component={<TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />}/> 
//       </Routes>
//       </div>
//       </Router> */}

//       <Router>
//       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <Routes>
//         <Route path="/About" element={<About mode={mode}/>} />
//         {/* <About mode={mode}/> */}
//         <Route
//               path="/"
//               element={
//                 <TextForm
//                   showAlert={showAlert}
//                   heading="TextUtils - Word Counter, Character counter, Remove extra spaces"
//                   mode={mode}
//                 />
//               }
//             />
//         </Routes>

//       </div>
//       </Router>


      
//     </>
//   );
// }

// export default App;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});