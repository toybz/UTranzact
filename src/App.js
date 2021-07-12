import React, {Suspense} from "react"
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FullPageLoader from "./components/FullPageLoader";
import UseRedirectToHomePage from "./hooks/useRedirectToHomePage";
import TransactionDetail from "./components/TransactionDetails";


const Tabs = React.lazy(() => import("./pages/Tabs"))


function App() {


    // Todo: Remove this after fixing the Jquery issue
    UseRedirectToHomePage()


    return (

        <>
            <Suspense fallback={<><FullPageLoader/></>}>
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

            </Suspense>


        </>

    );
}

export default App;
