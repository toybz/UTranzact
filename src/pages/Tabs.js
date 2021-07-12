import React, {Suspense} from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import FullPageLoader from "../components/FullPageLoader";
import {
  DASHBOARD_LINK,
  HISTORY_LINK,
  OPERATIONS_LINK,
  VIRTUAL_CARDS_LINK,
} from "../helpers/links";
import {ConfirmTransaction} from "../components/modals/ConfirmTransaction";

const Dashboard = React.lazy(() => import("./Dashboard"));
const VirtualCards = React.lazy(() => import("./VirtualCards"));
const AddVirtualCard = React.lazy(() => import("./AddVirtualCard"));
const TransactionsHistory = React.lazy(() => import("./TransactionsHistory"));
const Operations = React.lazy(() => import("./Operations"));

export default function Tabs() {
  let {path} = useRouteMatch();

  return (
      <>
        <Suspense
            fallback={
              <>
                <FullPageLoader/>
              </>
            }
        >
          <Switch>
            <Route path={`${path}/dashboard`}>
              <Dashboard/>
            </Route>

            <Route path={`${path}/operations`}>
              <Operations/>
            </Route>

            <Route path={`${path}/virtual-cards`} exact>
              <VirtualCards/>
            </Route>
            <Route path={`${path}/virtual-cards/new`} exact>
              <AddVirtualCard/>
            </Route>

            <Route path={`${path}/transaction-history`}>
              <TransactionsHistory/>
            </Route>

            <Route path={path} exact>
              <Redirect to={`${path}/dashboard`}/>
            </Route>
          </Switch>
        </Suspense>

        <footer
            className="em_main_footer ouline_footer with__text"
            style={{zIndex: "9999"}}
        >
          <div className="em_body_navigation -active-links">
            <div className="item_link">
              <NavLink to={DASHBOARD_LINK} className="btn btn_navLink">
                <div className="icon_current icon">
                  <i className="ri-home-2-line "></i>
                </div>

                <div className="txt__tile">Dashboard</div>
              </NavLink>
            </div>
            <div className="item_link">
              <NavLink to={VIRTUAL_CARDS_LINK} className="btn btn_navLink">
                <div className="icon_current">
                  <i class="ri-bank-card-line"></i>
                </div>

                <div className="txt__tile">Cards</div>
              </NavLink>
            </div>
            <div className="item_link">
              <NavLink
                  to={OPERATIONS_LINK}
                  className="btn btn_navLink without_active"
              >
                <button
                    type="button"
                    className="btn btnCircle_default rounded-10"
                >
                  <i class="ri-dashboard-line"></i>
                </button>
              </NavLink>
            </div>
            <div className="item_link">
              <NavLink to={HISTORY_LINK} className="btn btn_navLink">
                <div className="icon_current">
                  <i class="ri-history-line"></i>
                </div>
                <div className="items_basket_circle">2</div>
                <div className="txt__tile">History</div>
              </NavLink>
            </div>
            <div className="item_link">
              <a href="/" className="btn btn_navLink">
                <div className="icon_current">
                  <i class="ri-settings-line"></i>
                </div>

                <div className="txt__tile">Settings</div>
              </a>
            </div>
          </div>
        </footer>

        <ConfirmTransaction/>
      </>
  );
}
