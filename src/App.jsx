import { HashRouter as Router, Routes ,Route  } from "react-router-dom"
import { User } from "./pages/user/User"
import { Register } from "./pages/register/Register"
import { Template } from "./partials/template/Template";

function App() {


  return (
    <>
       <Router>
        <Routes>
          
          <Route path="/" element= {<Template><User/></Template>}/>
          <Route path="/register" element= {<Register/>}/>

        </Routes>
       </Router>
    </>
  )
}

export default App;
