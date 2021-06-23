import {Route, Redirect, Switch, useRouteMatch} from "react-router-dom";
import Operations from "./Operations";
import VirtualCards from "./VirtualCards";
import TransactionsHistory from "./TransactionsHistory";
import Dashboard from "./Dashboard";

export default function Tabs() {
    let {path, url} = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${path}/dashboard`}>
                    <Dashboard/>
                </Route>

                <Route path={`${path}/operations`}>
                    <Operations/>
                </Route>

                <Route path={`${path}/virtual-cards`}>
                    <VirtualCards/>
                </Route>


                <Route path={`${path}/transaction-history`}>
                    <TransactionsHistory/>

                </Route>
                <Route path={path} exact>
                    <Redirect to={`${path}/dashboard`}/>
                </Route>

            </Switch>

            <footer className="em_main_footer ouline_footer with__text">
                <div className="em_body_navigation -active-links">
                    <div className="item_link">
                        <a href="app-pages.html" className="btn btn_navLink">
                            <div className="icon_current">
                                <svg id="Iconly_Curved_Document" data-name="Iconly/Curved/Document"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Document" transform="translate(3.61 2.75)">
                                        <path id="Stroke_1" data-name="Stroke 1" d="M7.22.5H0"
                                              transform="translate(4.766 12.446)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_2" data-name="Stroke 2" d="M7.22.5H0"
                                              transform="translate(4.766 8.686)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_3" data-name="Stroke 3" d="M2.755.5H0"
                                              transform="translate(4.766 4.927)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_4" data-name="Stroke 4"
                                              d="M0,9.25c0,6.937,2.1,9.25,8.391,9.25s8.391-2.313,8.391-9.25S14.685,0,8.391,0,0,2.313,0,9.25Z"
                                              transform="translate(0)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="txt__tile">Pages</div>
                        </a>
                    </div>
                    <div className="item_link">
                        <a href="app-components.html" className="btn btn_navLink">
                            <div className="icon_current">
                                <svg id="Iconly_Curved_More_Circle" data-name="Iconly/Curved/More Circle"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="More_Circle" data-name="More Circle" transform="translate(2 2)">
                                        <path id="Stroke_4" data-name="Stroke 4"
                                              d="M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z"
                                              transform="translate(0.75 0.75)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_11" data-name="Stroke 11" d="M.5.5H.5"
                                              transform="translate(12.709 11.4)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="2"></path>
                                        <path id="Stroke_13" data-name="Stroke 13" d="M.5.5H.5"
                                              transform="translate(9.709 7.4)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="2"></path>
                                        <path id="Stroke_15" data-name="Stroke 15" d="M.5.5H.5"
                                              transform="translate(6.7 11.4)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="2"></path>
                                    </g>
                                </svg>
                            </div>

                            <div className="txt__tile">Elements</div>
                        </a>
                    </div>
                    <div className="item_link">
                        <a href="index.html" className="btn btn_navLink without_active">
                            <button type="button" className="btn btnCircle_default rounded-10">
                                <svg id="Iconly_Curved_Home" data-name="Iconly/Curved/Home"
                                     xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="Home" transform="translate(2 1.667)">
                                        <path id="Stroke_1" data-name="Stroke 1" d="M0,.5H4.846"
                                              transform="translate(5.566 11.28)" fill="none" stroke="#fff"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_2" data-name="Stroke 2"
                                              d="M0,9.761C0,5.068.512,5.4,3.266,2.842,4.471,1.872,6.346,0,7.965,0S11.5,1.862,12.712,2.842c2.754,2.554,3.265,2.227,3.265,6.919,0,6.906-1.633,6.906-7.988,6.906S0,16.667,0,9.761Z"
                                              transform="translate(0)" fill="none" stroke="#fff" strokeLinecap="round"
                                              strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path>
                                    </g>
                                </svg>

                            </button>
                        </a>
                    </div>
                    <div className="item_link">
                        <a href="page-products-fullwidth.html" className="btn btn_navLink">
                            <div className="icon_current">
                                <svg id="Iconly_Curved_Bag" data-name="Iconly/Curved/Bag"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Bag" transform="translate(2.95 2.55)">
                                        <path id="Stroke_1" data-name="Stroke 1"
                                              d="M8.659,4.32A4.33,4.33,0,0,0,0,4.3V4.32" transform="translate(4.755 0)"
                                              fill="none" stroke="#9498ac" strokeLinecap="round"
                                              strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path>
                                        <path id="Stroke_3" data-name="Stroke 3" d="M.523.5H.477"
                                              transform="translate(11.5 8.324)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_5" data-name="Stroke 5" d="M.523.5H.477"
                                              transform="translate(5.669 8.324)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_7" data-name="Stroke 7"
                                              d="M9.084,14.934c-6.508,0-7.257-2.05-8.718-7.467C-1.1,2.033,1.841,0,9.084,0S19.268,2.033,17.8,7.467C16.341,12.884,15.592,14.934,9.084,14.934Z"
                                              transform="translate(0 4.006)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="items_basket_circle">2</div>
                            <div className="txt__tile">Shop</div>
                        </a>
                    </div>
                    <div className="item_link">
                        <a href="page-profile.html" className="btn btn_navLink">
                            <div className="icon_current">
                                <svg id="Iconly_Curved_Setting" data-name="Iconly/Curved/Setting"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Setting" transform="translate(3.5 2.5)">
                                        <path id="Stroke_1" data-name="Stroke 1"
                                              d="M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                              transform="translate(6 7)" fill="none" stroke="#9498ac"
                                              strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                              strokeWidth="1.5"></path>
                                        <path id="Stroke_3" data-name="Stroke 3"
                                              d="M16.668,4.75h0a2.464,2.464,0,0,0-3.379-.912,1.543,1.543,0,0,1-2.314-1.346A2.484,2.484,0,0,0,8.5,0h0A2.484,2.484,0,0,0,6.025,2.492,1.543,1.543,0,0,1,3.712,3.839a2.465,2.465,0,0,0-3.38.912,2.5,2.5,0,0,0,.906,3.4,1.56,1.56,0,0,1,0,2.692,2.5,2.5,0,0,0-.906,3.4,2.465,2.465,0,0,0,3.379.913h0a1.542,1.542,0,0,1,2.313,1.345h0A2.484,2.484,0,0,0,8.5,19h0a2.484,2.484,0,0,0,2.474-2.492h0a1.543,1.543,0,0,1,2.314-1.345,2.465,2.465,0,0,0,3.379-.913,2.5,2.5,0,0,0-.905-3.4h0a1.56,1.56,0,0,1,0-2.692A2.5,2.5,0,0,0,16.668,4.75Z"
                                              fill="none" stroke="#9498ac" strokeLinecap="round"
                                              strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path>
                                    </g>
                                </svg>

                            </div>

                            <div className="txt__tile">Settings</div>
                        </a>
                    </div>
                </div>
            </footer>


        </>

    )

}
