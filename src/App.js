import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { history } from "./helpers/history";
import MainPage from "./Pages/MainPage"
import AirDrop from "./Pages/AirDrop"
import Header from './Component/Header'
import Footer from './Component/Footer'

import {Container} from './Utils/Container'
import {MainSection} from './Utils/Utils'
//import {Container} from 'reactstrap'
function App() {
  return (
    <BrowserRouter history={history}>
        <Container>
            <Header/>
            <MainSection>
              <Switch>
                <Route exact path="/airdrop" component={AirDrop} />
                <Route exact path="/" component={MainPage} />
              </Switch>
            </MainSection>
            <Footer/>
        </Container>
    </BrowserRouter>
  );
}

export default App;
