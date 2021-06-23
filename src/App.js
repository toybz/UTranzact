import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Tabs from "./pages/Tabs";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (

        <>
            <Switch>

                <Route path="/~">
                    <Tabs/>
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/" exact>
                    <Redirect to='/~'/>
                </Route>

            </Switch>


        </>

    );
}

export default App;
