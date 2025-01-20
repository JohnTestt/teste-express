import { HashRouter as Router, Routes ,Route  } from "react-router-dom"
import { User } from "./pages/user/User"
import { Register } from "./pages/register/Register"

function App() {


  return (
    <>
       <Router>
        <Routes>
          
          <Route path="/pacientes" element= {<User/>}/>
          <Route path="/pacientes/register" element= {<Register/>}/>

        </Routes>
       </Router>
    </>
  )
}

export default App
