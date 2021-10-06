import Header from "../components/Header";
import Page from "./Page";
import {
  AirtimeMenuItem,
  CableMenuItem,
  CoPayMenuItem,
  DataMenuItem,
  FundCardMenuItem,
  PowerMenuItem,
  QrPayMenuItem,
  RequestMenuItem,
  TransferMenuItem,
} from "../components/operationsMenuIcons";

export default function Operations() {
  const operationsList = [
    {
      title: "Transfer",
      modalId: "transfer-modal",
      bgClass: "bg-primary",
      icon: TransferMenuItem,
    },
    {
      title: "Airtime",
      modalId: "airtime-modal",
      bgClass: "bg-purple",
      icon: AirtimeMenuItem,
    },
    {
      title: "Data",
      modalId: "data-modal",
      bgClass: "bg-pink",
      icon: DataMenuItem,
    },
    {
      title: "Power",
      modalId: "power-modal",
      bgClass: "bg-red",
      icon: PowerMenuItem,
    },
    {
      title: "Cable",
      modalId: "cable-modal",
      bgClass: "bg-red",
      icon: CableMenuItem,
    },
    {
      title: "Fund Card",
      modalId: "fund-modal",
      bgClass: "bg-green",
      icon: FundCardMenuItem,
    },
    {
      title: "Request",
      modalId: "request-modal",
      bgClass: "bg-yellow",
      icon: RequestMenuItem,
    },
    {
      title: "Qr Pay",
      modalId: "qr-modal",
      bgClass: "bg-orange",
      icon: QrPayMenuItem,
    },

    {
      title: "Co-Pay",
      modalId: "copay-modal",
      bgClass: "bg-yellow",
      icon: CoPayMenuItem,
    },
  ];

  return (
    <>
      <Page className="bg-snow">
        <Header pageTitle="Operations" />

        <section className="padding-t-80 swiperCards__wallet padding-b-30">
          <div
            className="emPage__blog"
            /*  style={{ paddingLeft: 0, paddingRight: 0 }}*/
          >
            <div
              className="item__card layer-lg"
              /*  style={{ background: "transparent" }}*/
            >
              <div className="cover_img">
                <img
                  src="/assets/img/transact.png"
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" em__bkOperationsWallet __page pt-0 pb-0">
          <div className="em__actions">
            <div className="group">
              {operationsList.map((item, index) => (
                <item.icon key={index} containerClass={"menu_item"} />
              ))}
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}
