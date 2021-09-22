import { DASHBOARD_LINK, ONBOARDING, REGISTER } from "../helpers/links";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { showToast } from "../helpers/Utils";
import OpsSubmitButton from "../components/OpsSubmitButton";

export default function Login() {
  const [email, setEmail] = useState("user2@mail.com");
  const [password, setPassword] = useState("123456");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = email && password;
  const history = useHistory();

  const login = () => {
    setIsSubmitting(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        setIsSubmitting(false);

        showToast("Login is Successful", "success");
        history.push(DASHBOARD_LINK);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        showToast("Login Failed " + error.message, "error");
      });
  };

  return (
    <>
      <div id="wrapper" className="bg-white">
        <div id="content ">
          <header className="main_haeder header-sticky multi_item">
            <div className="em_side_right">
              <Link
                to={ONBOARDING}
                className="rounded-circle d-flex align-items-center text-decoration-none"
              >
                <i className="tio-chevron_left size-24 color-text"></i>
                <span className="color-text size-14">Back</span>
              </Link>
            </div>

            <div className="em_side_right">
              <Link
                to={REGISTER}
                className="link__forgot d-block size-14 color-text text-decoration-none hover:color-secondary transition-all"
              >
                Sign Up
              </Link>
            </div>
          </header>

          <section className="em__signTypeOne typeTwo np__account padding-t-70 bg-white">
            <div className="em_titleSign">
              <h1>Let's Get Back In!</h1>
              <p>Login with your email address to continue</p>
            </div>
            <div className="em__body">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="padding-t-40"
              >
                <div className="margin-b-30">
                  <div className="form-group input-lined lined__iconed">
                    <div className="input_group">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="example@mail.com"
                        required=""
                      />
                      <div className="icon">
                        <svg
                          id="Iconly_Curved_Message"
                          data-name="Iconly/Curved/Message"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g id="Message" transform="translate(2.248 2.614)">
                            <path
                              id="Stroke_1"
                              data-name="Stroke 1"
                              d="M10.222,0S7.279,3.532,5.127,3.532,0,0,0,0"
                              transform="translate(3.613 5.653)"
                              fill="none"
                              stroke="#9498ac"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Stroke_3"
                              data-name="Stroke 3"
                              d="M0,8.357C0,2.089,2.183,0,8.73,0s8.73,2.089,8.73,8.357-2.183,8.357-8.73,8.357S0,14.624,0,8.357Z"
                              transform="translate(0 0)"
                              fill="none"
                              stroke="#9498ac"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                <div
                  className="form-group input-lined lined__iconed"
                  id="show_hide_password"
                >
                  <div className="input_group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="pass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="enter your password"
                      required=""
                    />
                    <div className="icon">
                      <svg
                        id="Iconly_Curved_Password"
                        data-name="Iconly/Curved/Password"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                      >
                        <g id="Password" transform="translate(2.521 2.521)">
                          <path
                            id="Stroke_1"
                            data-name="Stroke 1"
                            d="M3.4,1.7A1.7,1.7,0,1,1,1.7,0h0A1.7,1.7,0,0,1,3.4,1.7Z"
                            transform="translate(3.882 6.781)"
                            fill="none"
                            stroke="#9498ac"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke_3"
                            data-name="Stroke 3"
                            d="M0,0H5.792V1.7"
                            transform="translate(7.28 8.479)"
                            fill="none"
                            stroke="#9498ac"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke_5"
                            data-name="Stroke 5"
                            d="M.5,1.7V0"
                            transform="translate(9.979 8.479)"
                            fill="none"
                            stroke="#9498ac"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke_7"
                            data-name="Stroke 7"
                            d="M0,8.479C0,2.12,2.12,0,8.479,0s8.479,2.12,8.479,8.479-2.12,8.479-8.479,8.479S0,14.838,0,8.479Z"
                            fill="none"
                            stroke="#9498ac"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          />
                        </g>
                      </svg>
                    </div>
                    <button
                      onClick={() => setShowPassword((val) => !val)}
                      type="button"
                      className="btn hide_show icon_password"
                    >
                      <i className="tio-hidden_outlined"></i>
                    </button>
                  </div>

                  <label htmlFor="pass">Password</label>
                </div>

                <OpsSubmitButton
                  onClick={login}
                  text={"Login"}
                  processingText={"Processing..."}
                  isProcessing={isSubmitting}
                  disable={!canSubmit}
                />
              </form>
            </div>
          </section>
          {/* <!-- End. em__signTypeOne <!-- */}
        </div>
      </div>
    </>
  );
}
