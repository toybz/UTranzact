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
import OnBoarding from "./pages/Onboarding";
import { DASHBOARD_LINK, LOGIN, ONBOARDING, REGISTER } from "./helpers/links";

const Tabs = React.lazy(() => import("./pages/Tabs"));

const queryClient = new QueryClient();

function App() {
  // Todo: Remove this after fixing the Jquery issue
  UseRedirectToHomePage();

  const isAuthUser = false;

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

            <Route path={REGISTER}>
              <Register />
            </Route>

            <Route path={LOGIN}>
              <Login />
            </Route>

            <Route path={ONBOARDING}>
              <OnBoarding />
            </Route>

            <Route path="/" exact>
              {isAuthUser ? (
                <Redirect to={DASHBOARD_LINK} />
              ) : (
                <Redirect to={ONBOARDING} />
              )}
            </Route>
          </Switch>
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
