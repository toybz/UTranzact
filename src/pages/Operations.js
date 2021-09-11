import Header from "../components/Header";
import useCarousel from "../hooks/useCarousel";
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
  useCarousel(".owl-carousel ");
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

        <section className="padding-t-80 padding-l-20 swiperCards__wallet padding-b-30">
          <div className="emBK__cards">
            <div className="owl-carousel owl-theme owlCards">
              <div className="item">
                {/* ele__card */}
                <div className="ele__card">
                  <div className="bg_imgCard">
                    <img
                      className="cover_img"
                      src="/assets/img/card0032.png"
                      alt=""
                    />
                    <div className="enContent_card">
                      <div className="head">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <img src="/assets/img/icon/visa_light.svg" alt="" />
                          </div>
                          <p className="ex_date">04/23</p>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="sideLeft d-flex justify-content-between align-items-center">
                          <div className="txt">
                            <span className="name">Credit Card</span>
                            <p className="no_card">…. 3951</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .ele__card */}
              </div>
              <div className="item">
                {/* ele__card */}
                <div className="ele__card">
                  <div className="bg_imgCard">
                    <img
                      className="cover_img"
                      src="/assets/img/card000.png"
                      alt=""
                    />
                    <div className="enContent_card">
                      <div className="head">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <img
                              src="/assets/img/icon/mastercard-light.svg"
                              alt=""
                            />
                          </div>
                          <p className="ex_date">02/30</p>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="sideLeft d-flex justify-content-between align-items-center">
                          <div className="txt">
                            <span className="name">Credit Card</span>
                            <p className="no_card">…. 0261</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .ele__card */}
              </div>
              <div className="item">
                {/* ele__card */}
                <div className="ele__card">
                  <div className="bg_imgCard">
                    <img
                      className="cover_img"
                      src="/assets/img/card001.png"
                      alt=""
                    />
                    <div className="enContent_card">
                      <div className="head">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <img
                              src="/assets/img/icon/amircan-light.svg"
                              alt=""
                            />
                          </div>
                          <p className="ex_date">01/26</p>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="sideLeft d-flex justify-content-between align-items-center">
                          <div className="txt">
                            <span className="name">Credit Card</span>
                            <p className="no_card">…. 1743</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .ele__card */}
              </div>
            </div>
          </div>
        </section>

        <section className=" em__bkOperationsWallet __page pt-0">
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
