import './App.css';
import Foot from './Components/Index/Foot';
import Ui from './Components/Index/Main'
import Nav from './Components/Index/Nav'
import List from './Components/Index/List'
import Cards from './Components/Department/Dept_be'
import Courses from './Components/Index/Courses'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dept_msc from "./Components/Department/Dept_msc"
import Button from '@material-ui/core/Button';
import Dept_bsc from './Components/Department/Dept_bsc'
import Dept_me from './Components/Department/Dept_me'
import Dept_mba from './Components/Department/dept_mba'
import Dept_mca from './Components/Department/Dept_mca'
import Dept_mtech from './Components/Department/Dept_mtech'
import Img_S_Msc from './Components/Index/S_Msc'
import S_CSE from './Components/Index/S_CSE'
import S_ECE from './Components/Index/S_ECE'
import S_Mtech_IT from './Components/Index/S_Mtech_IT' 
import S_Mtech_Chem from './Components/Index/S_Mtech_Chem'
import S_Mtech_Ft from './Components/Index/S_Mtech_Ft'
import S_mba from './Components/Index/S_mba'
import S_mca from './Components/Index/S_mca'

function App() {
  return (
  <Router>
            <div className="App">
           
                    <Nav/>
                    <br></br>
                    <div className="main">
                          <Switch>
                              <Route exact path="/">
                                  <Ui/>
                              </Route>
                              <Route path="/Courses">
                                  <Courses/>
                              </Route>
                              <Route path="/Dept_be">
                                  <Cards/>
                              </Route>
                              <Route path="/Dept_msc">
                                  <Dept_msc/>
                              </Route>
                              <Route path="/Dept_bsc">
                                  <Dept_bsc/>
                              </Route>
                              <Route path="/Dept_me">
                                  <Dept_me/>
                              </Route>
                              <Route path="/Dept_mca">
                                  <Dept_mca/>
                              </Route>
                              <Route path="/Dept_mtech">
                                  <Dept_mtech/>
                              </Route>
                              <Route path="/dept_mba">
                                  <Dept_mba/>
                              </Route>
                              {/*<Route path="/Img_S_Msc">
                                  <Img_S_Msc/>
                              </Route>
                              <Route path="/S_CSE">
                                  <S_CSE/>
                              </Route>
                              <Route path="/S_ECE">
                                  <S_ECE/>
                              </Route>
                              <Route path="/S_Mtech_IT">
                                  <S_Mtech_IT/>
                              </Route>
                              <Route path="/S_Mtech_Chem">
                                  <S_Mtech_Chem/>
                              </Route>
                              <Route path="/S_Mtech_Ft">
                                  <S_Mtech_Ft/>
                              </Route>
                              <Route path="/S_mba">
                                  <S_mba/>
                              </Route>
                              <Route path="/S_mca">
                                  <S_mca/>
                              </Route>*/}
                              </Switch>
                    </div>
                
                    <br></br>
                    <Foot/>
            </div>
  </Router>
  );
}

export default App;
