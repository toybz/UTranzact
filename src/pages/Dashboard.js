import Header from "../components/Header";
import {useEffect, useState} from "react";
import {page} from "./pageHelper";
import useCarousel from "../hooks/useCarousel";
import Page from "./Page";

function Dashboard() {
    useCarousel(".owl-carousel ")


    const pageTitle = "Dashboard"

    return (
        <>

       <Page className={'bg-snow'}>


         <Header pageTitle={pageTitle} sticky={false}   />



                    <section className="banner__wallet">
                        <div className="emhead d-flex align-items-center justify-content-between">
                            <div className="item__total">
                                <span>Total Balance</span>
                                <h2>1,650.00 <span>USD</span></h2>
                            </div>
                            <div className="side__right">
                                <button type="button" className="btn btn_balance" data-toggle="modal"
                                        data-target="#mdllAddBalance">+ Add Balance
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Start swiperCards__wallet */}
                    <section className="padding-t-10 padding-l-20 swiperCards__wallet padding-b-30">
                        {/* <div className="title d-flex justify-content-between align-items-center padding-b-30 padding-r-20">
                        <h3 className="size-18 weight-500 color-secondary m-0">My Cards</h3>
                        <a href="page-my-cards-wallet.html" className="d-block color-blue size-14 m-0 hover:color-blue">View
                            all</a>
                    </div>  */}

                        <div className="emBK__cards">
                            <div className="owl-carousel owl-theme owlCards">
                                <div className="item">

                                    {/* ele__card */}
                                    <div className="ele__card">
                                        <div className="bg_imgCard">
                                            <img className="cover_img" src="/assets/img/card0032.png" alt=""/>
                                            <div className="enContent_card">
                                                <div className="head">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/visa_light.svg" alt=""/>
                                                        </div>
                                                        <p className="ex_date">04/23</p>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <div
                                                        className="sideLeft d-flex justify-content-between align-items-center">
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
                                            <img className="cover_img" src="/assets/img/card000.png" alt=""/>
                                            <div className="enContent_card">
                                                <div className="head">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/mastercard-light.svg" alt=""/>
                                                        </div>
                                                        <p className="ex_date">02/30</p>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <div
                                                        className="sideLeft d-flex justify-content-between align-items-center">
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
                                            <img className="cover_img" src="/assets/img/card001.png" alt=""/>
                                            <div className="enContent_card">
                                                <div className="head">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/amircan-light.svg" alt=""/>
                                                        </div>
                                                        <p className="ex_date">01/26</p>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <div
                                                        className="sideLeft d-flex justify-content-between align-items-center">
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
                    {/* End. swiperCards__wallet */}


                    <main className="main_Wallet_index">

                        <section className="em__bkOperationsWallet">
                            <div className="em__actions">
                                <button type="button" className="btn" data-toggle="modal" data-target="#mdllSend">
                                    <div className="icon bg-green bg-opacity-10">
                                        <svg id="Iconly_Bulk_Send" data-name="Iconly/Bulk/Send"
                                             xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <g id="Send" transform="translate(1.833 1.833)">
                                                <path id="Fill_1" data-name="Fill 1"
                                                      d="M17.808.53A1.777,1.777,0,0,0,16.039.072L1.29,4.333A1.754,1.754,0,0,0,.022,5.718,2.049,2.049,0,0,0,.941,7.634L5.553,10.45a1.2,1.2,0,0,0,1.475-.175l5.281-5.281a.674.674,0,0,1,.972,0,.692.692,0,0,1,0,.972L7.99,11.247a1.2,1.2,0,0,0-.177,1.475l2.818,4.629a1.835,1.835,0,0,0,1.751.852,1.782,1.782,0,0,0,1.494-1.265L18.248,2.3A1.781,1.781,0,0,0,17.808.53"
                                                      transform="translate(0 0)" fill="#25c998"/>
                                                <path id="Combined_Shape" data-name="Combined Shape"
                                                      d="M4.367,6.99a.688.688,0,0,1,0-.972L5.619,4.766a.688.688,0,1,1,.973.973L5.339,6.99a.687.687,0,0,1-.972,0ZM3.649,3.518a.688.688,0,0,1,0-.972L4.9,1.294a.688.688,0,0,1,.973.973L4.621,3.518a.687.687,0,0,1-.972,0ZM.2,2.425a.688.688,0,0,1,0-.972L1.453.2a.688.688,0,1,1,.973.973L1.173,2.425a.687.687,0,0,1-.972,0Z"
                                                      transform="translate(0.239 10.948)" fill="#25c998" opacity="0.4"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span>Transfer</span>
                                </button>
                                <button type="button" className="btn" data-toggle="modal" data-target="#mdllWithdraw">
                                    <div className="icon bg-blue bg-opacity-10">
                                        <svg id="Iconly_Bulk_Arrow_-_Down_Square"
                                             data-name="Iconly/Bulk/Arrow - Down Square"
                                             xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <g id="Arrow_-_Down_Square" data-name="Arrow - Down Square"
                                               transform="translate(1.833 1.833)">
                                                <path id="Fill_1" data-name="Fill 1"
                                                      d="M0,5.423V12.91c0,3.244,2.086,5.423,5.193,5.423H13.14c3.107,0,5.193-2.179,5.193-5.423V5.423C18.333,2.18,16.246,0,13.139,0H5.193C2.086,0,0,2.18,0,5.423"
                                                      transform="translate(0 0)" fill="#4a8cfd" opacity="0.4"/>
                                                <path id="Fill_4" data-name="Fill 4"
                                                      d="M.2,5.213,3.636,8.664a.708.708,0,0,0,.975,0L8.047,5.213a.688.688,0,0,0-.975-.971L4.81,6.513V.688a.688.688,0,0,0-1.375,0V6.513L1.175,4.242A.688.688,0,1,0,.2,5.213"
                                                      transform="translate(5.044 4.738)" fill="#4a8cfd"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span>Request</span>
                                </button>

                                <button type="button" className="btn" data-toggle="modal" data-target="#mdllExchange">
                                    <div className="icon bg-yellow bg-opacity-10">
                                        <svg id="Iconly_Bulk_Swap" data-name="Iconly/Bulk/Swap"
                                             xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <g id="Swap" transform="translate(1.833 2.75)">
                                                <path id="Fill_1" data-name="Fill 1"
                                                      d="M1.092,0A.862.862,0,0,0,.236.869L0,5.066A1.1,1.1,0,0,0,1.092,6.173,1.1,1.1,0,0,0,2.183,5.066L1.948.869A.862.862,0,0,0,1.092,0"
                                                      transform="translate(3.221 9.066)" fill="#f5c02e" opacity="0.4"/>
                                                <path id="Fill_3" data-name="Fill 3"
                                                      d="M5.482.617a4.235,4.235,0,0,0-.4-.363A1.257,1.257,0,0,0,4.319,0,1.313,1.313,0,0,0,3.5.277c-.042.042-.22.2-.367.352A16.265,16.265,0,0,0,.24,4.969,3.591,3.591,0,0,0,0,5.852a1.492,1.492,0,0,0,.157.67,1.367,1.367,0,0,0,.65.6,6.778,6.778,0,0,0,.765.192,16.477,16.477,0,0,0,2.737.181A19.129,19.129,0,0,0,6.96,7.331a5.828,5.828,0,0,0,.954-.256,1.343,1.343,0,0,0,.713-1.18V5.852a3.779,3.779,0,0,0-.294-.99A16.263,16.263,0,0,0,5.482.617"
                                                      transform="translate(0 0)" fill="#f5c02e"/>
                                                <path id="Fill_6" data-name="Fill 6"
                                                      d="M1.092,6.173A.862.862,0,0,0,1.948,5.3l.235-4.2A1.1,1.1,0,0,0,1.092,0,1.1,1.1,0,0,0,0,1.107L.236,5.3a.862.862,0,0,0,.856.869"
                                                      transform="translate(12.928 1.26)" fill="#f5c02e" opacity="0.4"/>
                                                <path id="Fill_8" data-name="Fill 8"
                                                      d="M8.471.968a1.372,1.372,0,0,0-.65-.6A6.835,6.835,0,0,0,7.056.181,16.477,16.477,0,0,0,4.319,0,19.129,19.129,0,0,0,1.667.159,5.944,5.944,0,0,0,.713.415,1.341,1.341,0,0,0,0,1.6v.042a3.726,3.726,0,0,0,.294.989A16.219,16.219,0,0,0,3.145,6.872a4.123,4.123,0,0,0,.4.361,1.247,1.247,0,0,0,.766.256,1.314,1.314,0,0,0,.817-.277c.042-.042.22-.2.367-.351A16.3,16.3,0,0,0,8.386,2.522a3.558,3.558,0,0,0,.241-.883A1.493,1.493,0,0,0,8.471.968"
                                                      transform="translate(9.706 9.01)" fill="#f5c02e"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span>Exchange</span>
                                </button>
                                <a href="page-my-cards-wallet.html" className="btn">
                                    <div className="icon bg-red bg-opacity-10">
                                        <svg id="Iconly_Bulk_Folder" data-name="Iconly/Bulk/Folder"
                                             xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <g id="Folder" transform="translate(1.833 1.833)">
                                                <path id="Folder_2" data-name="Folder 2"
                                                      d="M13.644,2.855h-2.7A2.227,2.227,0,0,1,9.21,2.042L8.322.814A2.17,2.17,0,0,0,6.594,0H4.687C1.263,0,0,2.009,0,5.426V9.118c0,.406,18.329.406,18.331,0V8.045C18.347,4.628,17.116,2.855,13.644,2.855Z"
                                                      transform="translate(0 0)" fill="#ff3f3f" opacity="0.4"/>
                                                <path id="Folder-2" data-name="Folder"
                                                      d="M13.169,15.493h0c-.094,0-.19,0-.284-.007H5.437c-.093,0-.188.007-.281.007a5.516,5.516,0,0,1-3.729-1.447,4.113,4.113,0,0,1-.611-.813,5.319,5.319,0,0,1-.717-2A7.469,7.469,0,0,1,0,10.019V5.2A11.132,11.132,0,0,1,.065,4C.074,3.93.088,3.861.1,3.795a1.736,1.736,0,0,0,.045-.339A5.151,5.151,0,0,1,.595,2.064C1.241.685,2.574.014,4.67.014h8.965C13.758,0,13.882,0,14,0a4.8,4.8,0,0,1,2.957,1.023,2.548,2.548,0,0,1,.3.3,3.607,3.607,0,0,1,.668,1.163,7.8,7.8,0,0,1,.4,2.717v4.815a8.654,8.654,0,0,1-.09,1.212,5.465,5.465,0,0,1-.733,2,4.075,4.075,0,0,1-.62.813A5.484,5.484,0,0,1,13.169,15.493ZM4.556,8.059a.757.757,0,1,0,0,1.513h9.276a.757.757,0,0,0,.757-.733.681.681,0,0,0-.163-.488.723.723,0,0,0-.571-.293Z"
                                                      transform="translate(0 2.841)" fill="#ff3f3f"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span>Cards</span>
                                </a>
                            </div>
                        </section>


                        {/* Start dividar */}
                        <section className="padding-20 py-0">
                            <div className="dividar"></div>
                        </section>
                        {/* End. dividar */}

                        {/* Start emWallet__stats */}
                        <section className="emWallet__stats padding-l-20 padding-r-20 padding-t-30">

                            <div className="title d-flex justify-content-between align-items-center padding-b-30">
                                <h3 className="size-18 weight-500 color-secondary m-0">Quick Actions</h3>
                                <a href="page-transactions-wallet.html"
                                   className="d-block color-blue size-14 m-0 hover:color-blue">View all</a>
                            </div>

                            <div className="item_boxes">
                                <div className="row">
                                    <div className="col-6 pr-2">
                                        <div className="item">
                                            <div className="bk_head">
                                                <p>Airtel  Airtime 09043200</p>
                                            </div>
                                            <div className="price">500 <span>USD</span></div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2">
                                        <div className="item">
                                            <div className="bk_head">
                                                <p>Expenses</p>

                                            </div>
                                            <div className="price">20,162.09 <span>USD</span></div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2">
                                        <div className="item">
                                            <div className="bk_head">
                                                <p>Expenses</p>
                                                <div className="rate_no up">
                                                    <svg id="Iconly_Bulk_Arrow_-_Right_2"
                                                         data-name="Iconly/Bulk/Arrow - Right 2"
                                                         xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         viewBox="0 0 20 20">
                                                        <g id="Arrow_-_Right_2" data-name="Arrow - Right 2"
                                                           transform="translate(5.833 15) rotate(-90)">
                                                            <path id="Fill_1" data-name="Fill 1"
                                                                  d="M4.056.179,7.572,5.885A.362.362,0,0,1,7.55,6.3a10.881,10.881,0,0,1-1.2,1.35,4.475,4.475,0,0,1-.466.4,1.436,1.436,0,0,1-.883.288,1.546,1.546,0,0,1-.95-.307c-.048-.046-.257-.223-.428-.39A18.148,18.148,0,0,1,.275,2.785,3.741,3.741,0,0,1,0,1.8,1.615,1.615,0,0,1,.181,1.05,1.555,1.555,0,0,1,.931.391,7.726,7.726,0,0,1,1.823.178,14.726,14.726,0,0,1,3.714,0a.385.385,0,0,1,.342.178"
                                                                  transform="translate(0 0)" fill="#25c998"/>
                                                            <path id="Fill_4" data-name="Fill 4"
                                                                  d="M.054.556A.369.369,0,0,1,.4,0c.7.03,1.32.082,1.78.146a6.189,6.189,0,0,1,1.1.288A1.482,1.482,0,0,1,4.1,1.751V1.8a3.751,3.751,0,0,1-.342,1.1,11.507,11.507,0,0,1-.745,1.4.383.383,0,0,1-.648.006Z"
                                                                  transform="translate(5.895 0.004)" fill="#25c998"
                                                                  opacity="0.4"/>
                                                        </g>
                                                    </svg>
                                                    <span>0.42</span>
                                                </div>
                                            </div>
                                            <div className="price">7,980.04 <span>USD</span></div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2">
                                        <div className="item">
                                            <div className="bk_head">
                                                <p>Savings</p>
                                                <div className="rate_no down">
                                                    <svg id="Iconly_Bulk_Arrow_-_Left_2"
                                                         data-name="Iconly/Bulk/Arrow - Left 2"
                                                         xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         viewBox="0 0 20 20">
                                                        <g id="Arrow_-_Left_2" data-name="Arrow - Left 2"
                                                           transform="translate(14.167 5) rotate(90)">
                                                            <path id="Fill_1" data-name="Fill 1"
                                                                  d="M4.056.179,7.572,5.885A.362.362,0,0,1,7.55,6.3a10.881,10.881,0,0,1-1.2,1.35,4.475,4.475,0,0,1-.466.4,1.436,1.436,0,0,1-.883.288,1.546,1.546,0,0,1-.95-.307c-.048-.046-.257-.223-.428-.39A18.148,18.148,0,0,1,.275,2.785,3.741,3.741,0,0,1,0,1.8,1.615,1.615,0,0,1,.181,1.05,1.555,1.555,0,0,1,.931.391,7.726,7.726,0,0,1,1.823.178,14.726,14.726,0,0,1,3.714,0a.385.385,0,0,1,.342.178"
                                                                  transform="translate(0 0)" fill="#ff3f3f"/>
                                                            <path id="Fill_4" data-name="Fill 4"
                                                                  d="M.054.556A.369.369,0,0,1,.4,0c.7.03,1.32.082,1.78.146a6.189,6.189,0,0,1,1.1.288A1.482,1.482,0,0,1,4.1,1.751V1.8a3.751,3.751,0,0,1-.342,1.1,11.507,11.507,0,0,1-.745,1.4.383.383,0,0,1-.648.006Z"
                                                                  transform="translate(5.895 0.004)" fill="#ff3f3f"
                                                                  opacity="0.4"/>
                                                        </g>
                                                    </svg>
                                                    <span>1.42</span>
                                                </div>
                                            </div>
                                            <div className="price">3,952.03 <span>USD</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End. emWallet__stats */}


                        {/* Start emTransactions__page */}
                        <section className="padding-20 emTransactions__page">
                            <div className="title d-flex justify-content-between align-items-center padding-b-30">
                                <h3 className="size-18 weight-500 color-secondary m-0">Last Transactions</h3>
                                <a href="page-transactions-wallet.html"
                                   className="d-block color-blue size-14 m-0 hover:color-blue">View all</a>
                            </div>
                            <div className="border-text margin-b-30">
                                <div className="lined">
                                    <span className="text">Today</span>
                                </div>
                            </div>
                            <div className="emBK__transactions">
                                <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans">
                                    <div className="media sideLeft">
                                        <div className="icon_img bg-pink">
                                            <p className="color-white">B</p>
                                        </div>
                                        <div className="media-body my-auto">
                                            <h4>Beauty Salon</h4>
                                            <p>Transfer</p>
                                        </div>
                                    </div>
                                    <div className="sideRight">
                                        <p>+ 350.05 <span>USD</span></p>
                                    </div>
                                </div>
                                <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans">
                                    <div className="media sideLeft">
                                        <div className="icon_img">
                                            <img src="/assets/img/persons/01.png" alt=""/>
                                        </div>
                                        <div className="media-body my-auto">
                                            <h4>John Pennington</h4>
                                            <p>Transfer</p>
                                        </div>
                                    </div>
                                    <div className="sideRight">
                                        <p>+ 150.00 <span>USD</span></p>
                                    </div>
                                </div>
                                <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans">
                                    <div className="media sideLeft">
                                        <div className="icon_img">
                                            <img src="/assets/img/persons/maxresdefault.jpg" alt=""/>
                                        </div>
                                        <div className="media-body my-auto">
                                            <h4>Apple</h4>
                                            <p>App Store Purchase</p>
                                        </div>
                                    </div>
                                    <div className="sideRight discount">
                                        <p>- 20.00 <span>USD</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End. emTransactions__page */}


                    </main>


       </Page>
        </>

    )
}

export default Dashboard
