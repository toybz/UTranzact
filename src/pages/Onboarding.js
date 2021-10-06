import { auth, database, DB_NODES, googleAuthProvider } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { DASHBOARD_LINK, LOGIN, REGISTER } from "../constant/pageRoutes";
import { showToast } from "../helpers/Utils";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function OnBoarding() {
  const history = useHistory();

  const [processingSignIn, setProcessingSignIn] = useState(false);

  const signInWIthGoogle = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        loginIsSuccessful(result);
      })
      .catch((error) => {
        loginFailed();
      });
  };

  const signInAsGuest = () => {
    setProcessingSignIn(true);
    auth
      .signInAnonymously()
      .then(async (result) => {
        await loginIsSuccessful(result);
        setProcessingSignIn(false);
      })
      .catch((error) => {
        loginFailed();
        setProcessingSignIn(false);
      });
  };

  const { createNewUser, isUserExists } = useAuth();

  const loginIsSuccessful = async (result) => {
    const { displayName, email, isAnonymous, uid } = result.user;

    const isExist = await isUserExists(uid);
    if (!isExist) {
      await createNewUser({ displayName, email, isAnonymous, uid });

      console.log("Create new wallet");
      const walletData = {
        balance: 0,
        cardDetails: {
          cvv: "992",
          expirationDate: "09/23",
          name: displayName,
          number: "2345156754321789",
        },
        name: "Default",
        uid: uid,
      };

      const operation = await database.ref(DB_NODES.WALLETS).push();

      operation.set({
        ...walletData,
        id: operation.key,
      });
    }

    history.push(DASHBOARD_LINK);
  };

  const loginFailed = (error) => {
    console.log(error);
    showToast("Login Failed", "error");
  };

  return (
    <>
      <div id="wrapper">
        <div id="content" className="bg-white full-height">
          <header className="main_haeder header-sticky multi_item d-lfex justify-content-end">
            <div className="em_side_right">
              {processingSignIn ? (
                <span className="link__forgot border-0 bg-white d-block size-14 color-text text-decoration-none hover:color-secondary transition-all">
                  Processing....
                </span>
              ) : (
                <button
                  onClick={signInAsGuest}
                  className="link__forgot border-0 bg-white d-block size-14 color-text text-decoration-none hover:color-secondary transition-all"
                >
                  Anonymous Sign In
                </button>
              )}
            </div>
          </header>
          <section className="npPage_introDefault padding-t-70 bg-white">
            <div className="cover">
              {/* <img src="/assets/img/icons/onboarding.png" alt="" />*/}

              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_klpqubkx.json"
                background="transparent"
                speed="1"
                style={{ height: "300px" }}
                hover
                loop
                controls
                autoplay
              ></lottie-player>
            </div>

            <div className="swiper-container swiper-intro-default swiper__text bg-white ">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="content_text">
                    <h2 className="txt_gradient">UTranzact </h2>
                    <p style={{ color: "#000000" }}>
                      A Demo ReactJS and Firebase Fintech App. Create Multi
                      Wallets, Transfer To Bank Accounts, Airtime Purchase,
                      Internet Data Purchase, Electricity and Cable Tv
                      Subscription and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="npButtons_networks env-pb margin-b-20 bg-white">
              <button
                className="btn rounded-pill border-snow"
                onClick={signInWIthGoogle}
              >
                <div className="icon">
                  <img
                    className="align-sub"
                    width="19"
                    height="19"
                    src="/assets/img/icon/google.svg"
                    alt=""
                  />
                </div>
                <span className="color-secondary">Continue with Google</span>
              </button>
              <Link to={LOGIN} className="btn rounded-pill bg-primary">
                <span className="color-white">Sign in with email</span>
              </Link>
              <p className="link__forgot d-block size-14 color-text text-decoration-none hover:color-secondary transition-all">
                New User?
              </p>
              <Link to={REGISTER} className="btn rounded-pill bg-primary">
                <span className="color-white">Register with email</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
