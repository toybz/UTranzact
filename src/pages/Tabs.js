import React, { Suspense } from "react";
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
} from "../constant/pageRoutes";
import { ConfirmTransaction } from "../components/modals/ConfirmTransaction";
import FundCard from "../components/Ops_FundCard";

import Transfer from "../components/Ops_Transfer";
import QrPay from "../components/Ops_QrPay";
import BuyAirtime from "../components/Ops_BuyAirtime";
import TransactionDetail from "../components/TransactionDetails";
import BuyData from "../components/Ops_BuyData";
import BuyPower from "../components/Ops_BuyPower";
import BuyCable from "../components/Ops_BuyCable";
import RequestFunds from "../components/Ops_Request";

const Dashboard = React.lazy(() => import("./Dashboard"));
const VirtualCards = React.lazy(() => import("./VirtualCards"));
const PayWithCreditCard = React.lazy(() => import("./PayWithCreditCard"));
const TransactionsHistory = React.lazy(() => import("./TransactionsHistory"));
const Operations = React.lazy(() => import("./Operations"));

export default function Tabs() {
  let { path } = useRouteMatch();

  return (
    <>
      <Suspense
        fallback={
          <>
            <FullPageLoader />
          </>
        }
      >
        <Switch>
          <Route path={`${path}/dashboard`}>
            <Dashboard />
          </Route>

          <Route path={`${path}/operations`}>
            <Operations />
          </Route>

          <Route path={`${path}/virtual-cards`} exact>
            <VirtualCards />
          </Route>

          <Route path={`${path}/pay-with-new-credit-card`} exact>
            <PayWithCreditCard />
          </Route>

          <Route path={`${path}/transaction-history`}>
            <TransactionsHistory />
          </Route>

          <Route path={path} exact>
            <Redirect to={`${path}/dashboard`} />
          </Route>
        </Switch>
      </Suspense>

      <footer
        className="em_main_footer ouline_footer with__text"
        style={{ zIndex: "9999" }}
      >
        <div className="em_body_navigation -active-links">
          <div className="item_link">
            <NavLink to={DASHBOARD_LINK} className="btn btn_navLink">
              <div className="icon_current icon">
                <i className="ri-home-2-line tab_icon" />
              </div>

              <div className="txt__tile">Dashboard</div>
            </NavLink>
          </div>
          <div className="item_link">
            <NavLink to={VIRTUAL_CARDS_LINK} className="btn btn_navLink">
              <div className="icon_current">
                <i className="ri-bank-card-line tab_icon" />
              </div>

              <div className="txt__tile">Cards</div>
            </NavLink>
          </div>

          <div className="item_link">
            <NavLink to={OPERATIONS_LINK} className="btn btn_navLink">
              <div className="icon_current">
                <i className="ri-swap-box-line tab_icon " />
              </div>

              <div className="txt__tile">Tranzact</div>
            </NavLink>
          </div>

          <div className="item_link">
            <NavLink to={HISTORY_LINK} className="btn btn_navLink">
              <div className="icon_current">
                <i className="ri-history-line tab_icon" />
              </div>

              <div className="txt__tile">History</div>
            </NavLink>
          </div>
        </div>
      </footer>

      <FundCard />
      <Transfer />
      <QrPay />
      <ConfirmTransaction />
      <BuyAirtime />
      <BuyData />
      <TransactionDetail />
      <BuyPower />
      <BuyCable />
      <RequestFunds />
    </>
  );
}
