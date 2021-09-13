import React, { Suspense } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FullPageLoader from "./components/FullPageLoader";
import UseRedirectToHomePage from "./hooks/useRedirectToHomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tabs = React.lazy(() => import("./pages/Tabs"));

const queryClient = new QueryClient();

//testimng 123
function App() {
  // Todo: Remove this after fixing the Jquery issue
  UseRedirectToHomePage();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <>
              <FullPageLoader />
            </>
          }
        >
          <Switch>
            <Route path="/~">
              <Tabs />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/" exact>
              <Redirect to="/~" />
            </Route>
          </Switch>
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
