import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FullPageLoader from "./components/FullPageLoader";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnBoarding from "./pages/Onboarding";
import {
  DASHBOARD_LINK,
  LOGIN,
  ONBOARDING,
  REGISTER,
} from "./constant/pageRoutes";
import { auth } from "./firebase";
import { fetchRecentTransactions } from "./firebase/recentTransactions";
import { useDispatch } from "react-redux";
import { setRecentTransactions } from "./store/recentTransactions";
import { setUser } from "./store/user";
import { setUserWallet } from "./store/userWallet";
import { fetchUserWallets } from "./firebase/userWallet";
import { fetchSavedTransactions } from "./firebase/savedTransactions";
import { setSavedTransactions } from "./store/savedTransactions";

const Tabs = React.lazy(() => import("./pages/Tabs"));

const queryClient = new QueryClient();

function App() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const updateRecentTransactions = (data) => {
      dispatch(setRecentTransactions(data));
    };

    const updateSavedTransactions = (data) => {
      dispatch(setSavedTransactions(data));
    };
    const updateUserDetails = (data) => {
      dispatch(setUser(data));
    };

    const updateUserWallets = (data) => {
      dispatch(setUserWallet(data));
    };
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, isAnonymous, uid, refreshToken } = user;

        updateUserDetails({
          displayName,
          email,
          isAnonymous,
          uid,
          refreshToken,
        });

        //    console.log("user state changed", user);

        fetchRecentTransactions(uid, updateRecentTransactions);

        fetchUserWallets(uid, updateUserWallets);

        fetchSavedTransactions(uid, updateSavedTransactions);

        history.push(DASHBOARD_LINK);
      } else {
        //  console.log("No user found");
        history.push(ONBOARDING);
      }
    });
  }, [history, dispatch]);

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
              <>
                <p>Loading...</p>
              </>
              {/*
              <Redirect to={ONBOARDING} />
*/}
            </Route>
          </Switch>
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
