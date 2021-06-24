import Header from "../components/Header";
import {useEffect} from "react";
import useCarousel from "../hooks/useCarousel";

export default function Operations() {
    useCarousel(".owl-carousel ")
    return (

        <>

            <div id="wrapper">
                <div id="content">

             <Header pageTitle='Operations'/>


                    <section className="padding-t-80 padding-l-20 swiperCards__wallet padding-b-30">
                        <div className="emBK__cards">
                            <div className="owl-carousel owl-theme owlCards">
                                <div className="item">

                                    {/* ele__card */}
                                    <div className="ele__card">
                                        <div className="bg_imgCard">
                                            <img className="cover_img" src="/assets/img/card0032.png" alt="" />
                                                <div className="enContent_card">
                                                    <div className="head">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className="icon">
                                                                <img src="/assets/img/icon/visa_light.svg" alt="" />
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
                                            <img className="cover_img" src="/assets/img/card000.png" alt="" />
                                                <div className="enContent_card">
                                                    <div className="head">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className="icon">
                                                                <img src="/assets/img/icon/mastercard-light.svg" alt="" />
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
                                            <img className="cover_img" src="/assets/img/card001.png" alt="" />
                                                <div className="enContent_card">
                                                    <div className="head">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className="icon">
                                                                <img src="/assets/img/icon/amircan-light.svg" alt="" />
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

   <section className=" em__bkOperationsWallet __page pt-0">
                <div className="em__actions">
                    <div className="group">
                        <button type="button" className="btn -send" data-toggle="modal" data-target="#mdllSend">
                            <div className="icon bg-green bg-opacity-10">
                                <svg id="Iconly_Bulk_Send" data-name="Iconly/Bulk/Send"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Send" transform="translate(1.833 1.833)">
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M17.808.53A1.777,1.777,0,0,0,16.039.072L1.29,4.333A1.754,1.754,0,0,0,.022,5.718,2.049,2.049,0,0,0,.941,7.634L5.553,10.45a1.2,1.2,0,0,0,1.475-.175l5.281-5.281a.674.674,0,0,1,.972,0,.692.692,0,0,1,0,.972L7.99,11.247a1.2,1.2,0,0,0-.177,1.475l2.818,4.629a1.835,1.835,0,0,0,1.751.852,1.782,1.782,0,0,0,1.494-1.265L18.248,2.3A1.781,1.781,0,0,0,17.808.53"
                                              transform="translate(0 0)" fill="#25c998"></path>
                                        <path id="Combined_Shape" data-name="Combined Shape"
                                              d="M4.367,6.99a.688.688,0,0,1,0-.972L5.619,4.766a.688.688,0,1,1,.973.973L5.339,6.99a.687.687,0,0,1-.972,0ZM3.649,3.518a.688.688,0,0,1,0-.972L4.9,1.294a.688.688,0,0,1,.973.973L4.621,3.518a.687.687,0,0,1-.972,0ZM.2,2.425a.688.688,0,0,1,0-.972L1.453.2a.688.688,0,1,1,.973.973L1.173,2.425a.687.687,0,0,1-.972,0Z"
                                              transform="translate(0.239 10.948)" fill="#25c998" opacity="0.4"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>Transfer</span>
                           {/* <p>+6 options</p>*/}
                        </button>
                        <button type="button" className="btn -withdraw" data-toggle="modal" data-target="#mdllWithdraw">
                            <div className="icon bg-blue bg-opacity-10">
                                <svg id="Iconly_Bulk_Arrow_-_Down_Square" data-name="Iconly/Bulk/Arrow - Down Square"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Arrow_-_Down_Square" data-name="Arrow - Down Square"
                                       transform="translate(1.833 1.833)">
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M0,5.423V12.91c0,3.244,2.086,5.423,5.193,5.423H13.14c3.107,0,5.193-2.179,5.193-5.423V5.423C18.333,2.18,16.246,0,13.139,0H5.193C2.086,0,0,2.18,0,5.423"
                                              transform="translate(0 0)" fill="#4a8cfd" opacity="0.4"></path>
                                        <path id="Fill_4" data-name="Fill 4"
                                              d="M.2,5.213,3.636,8.664a.708.708,0,0,0,.975,0L8.047,5.213a.688.688,0,0,0-.975-.971L4.81,6.513V.688a.688.688,0,0,0-1.375,0V6.513L1.175,4.242A.688.688,0,1,0,.2,5.213"
                                              transform="translate(5.044 4.738)" fill="#4a8cfd"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>Withdraw</span>
                            <p>3 options</p>
                        </button>
                        <a href="page-my-cards.html" className="btn -cards">
                            <div className="icon bg-red bg-opacity-10">
                                <svg id="Iconly_Bulk_Folder" data-name="Iconly/Bulk/Folder"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Folder" transform="translate(1.833 1.833)">
                                        <path id="Folder_2" data-name="Folder 2"
                                              d="M13.644,2.855h-2.7A2.227,2.227,0,0,1,9.21,2.042L8.322.814A2.17,2.17,0,0,0,6.594,0H4.687C1.263,0,0,2.009,0,5.426V9.118c0,.406,18.329.406,18.331,0V8.045C18.347,4.628,17.116,2.855,13.644,2.855Z"
                                              transform="translate(0 0)" fill="#ff3f3f" opacity="0.4"></path>
                                        <path id="Folder-2" data-name="Folder"
                                              d="M13.169,15.493h0c-.094,0-.19,0-.284-.007H5.437c-.093,0-.188.007-.281.007a5.516,5.516,0,0,1-3.729-1.447,4.113,4.113,0,0,1-.611-.813,5.319,5.319,0,0,1-.717-2A7.469,7.469,0,0,1,0,10.019V5.2A11.132,11.132,0,0,1,.065,4C.074,3.93.088,3.861.1,3.795a1.736,1.736,0,0,0,.045-.339A5.151,5.151,0,0,1,.595,2.064C1.241.685,2.574.014,4.67.014h8.965C13.758,0,13.882,0,14,0a4.8,4.8,0,0,1,2.957,1.023,2.548,2.548,0,0,1,.3.3,3.607,3.607,0,0,1,.668,1.163,7.8,7.8,0,0,1,.4,2.717v4.815a8.654,8.654,0,0,1-.09,1.212,5.465,5.465,0,0,1-.733,2,4.075,4.075,0,0,1-.62.813A5.484,5.484,0,0,1,13.169,15.493ZM4.556,8.059a.757.757,0,1,0,0,1.513h9.276a.757.757,0,0,0,.757-.733.681.681,0,0,0-.163-.488.723.723,0,0,0-.571-.293Z"
                                              transform="translate(0 2.841)" fill="#ff3f3f"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>Fund Card</span>
                           {/* <p>+4 Saved</p>*/}
                        </a>
                    </div>
                    <div className="group">
                        <button type="button" className="btn -exchange" data-toggle="modal" data-target="#mdllExchange">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Swap" data-name="Iconly/Bulk/Swap"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Swap" transform="translate(1.833 2.75)">
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M1.092,0A.862.862,0,0,0,.236.869L0,5.066A1.1,1.1,0,0,0,1.092,6.173,1.1,1.1,0,0,0,2.183,5.066L1.948.869A.862.862,0,0,0,1.092,0"
                                              transform="translate(3.221 9.066)" fill="#f5c02e" opacity="0.4"></path>
                                        <path id="Fill_3" data-name="Fill 3"
                                              d="M5.482.617a4.235,4.235,0,0,0-.4-.363A1.257,1.257,0,0,0,4.319,0,1.313,1.313,0,0,0,3.5.277c-.042.042-.22.2-.367.352A16.265,16.265,0,0,0,.24,4.969,3.591,3.591,0,0,0,0,5.852a1.492,1.492,0,0,0,.157.67,1.367,1.367,0,0,0,.65.6,6.778,6.778,0,0,0,.765.192,16.477,16.477,0,0,0,2.737.181A19.129,19.129,0,0,0,6.96,7.331a5.828,5.828,0,0,0,.954-.256,1.343,1.343,0,0,0,.713-1.18V5.852a3.779,3.779,0,0,0-.294-.99A16.263,16.263,0,0,0,5.482.617"
                                              transform="translate(0 0)" fill="#f5c02e"></path>
                                        <path id="Fill_6" data-name="Fill 6"
                                              d="M1.092,6.173A.862.862,0,0,0,1.948,5.3l.235-4.2A1.1,1.1,0,0,0,1.092,0,1.1,1.1,0,0,0,0,1.107L.236,5.3a.862.862,0,0,0,.856.869"
                                              transform="translate(12.928 1.26)" fill="#f5c02e" opacity="0.4"></path>
                                        <path id="Fill_8" data-name="Fill 8"
                                              d="M8.471.968a1.372,1.372,0,0,0-.65-.6A6.835,6.835,0,0,0,7.056.181,16.477,16.477,0,0,0,4.319,0,19.129,19.129,0,0,0,1.667.159,5.944,5.944,0,0,0,.713.415,1.341,1.341,0,0,0,0,1.6v.042a3.726,3.726,0,0,0,.294.989A16.219,16.219,0,0,0,3.145,6.872a4.123,4.123,0,0,0,.4.361,1.247,1.247,0,0,0,.766.256,1.314,1.314,0,0,0,.817-.277c.042-.042.22-.2.367-.351A16.3,16.3,0,0,0,8.386,2.522a3.558,3.558,0,0,0,.241-.883A1.493,1.493,0,0,0,8.471.968"
                                              transform="translate(9.706 9.01)" fill="#f5c02e"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>Airtime</span>
                          {/*  <p>+10 options</p>*/}
                        </button>
                        <button type="button" className="btn -transfer" data-toggle="modal" data-target="#mdllExchange">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Paper_Upload" data-name="Iconly/Bulk/Paper Upload"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Paper_Upload" data-name="Paper Upload" transform="translate(3.208 1.833)">
                                        <path id="Fill_3" data-name="Fill 3"
                                              d="M14.033,6.436c-.414,0-.962-.009-1.645-.009A3.058,3.058,0,0,1,9.355,3.369V.421A.418.418,0,0,0,8.94,0H4.092A4.115,4.115,0,0,0,0,4.133V14.01a4.3,4.3,0,0,0,4.28,4.323H11.5a4.1,4.1,0,0,0,4.083-4.123V6.848a.416.416,0,0,0-.416-.42c-.387,0-.852.007-1.135.007"
                                              fill="#ff833b" opacity="0.4"></path>
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M.753.135A.438.438,0,0,0,0,.441V2.859A1.857,1.857,0,0,0,1.848,4.707c.64.007,1.527.009,2.281.007a.437.437,0,0,0,.314-.741C3.476,2.968,1.744,1.165.753.135"
                                              transform="translate(10.783 0.385)" fill="#ff833b" opacity="0.4"></path>
                                        <path id="Fill_6" data-name="Fill 6"
                                              d="M6.412,3.8a.683.683,0,0,1-.966,0L3.989,2.336V6.76a.682.682,0,1,1-1.365,0V2.336L1.166,3.8A.683.683,0,0,1,.2,2.836L2.822.2h0A.683.683,0,0,1,3.57.053.69.69,0,0,1,3.788.2l0,0L6.414,2.836a.682.682,0,0,1,0,.965"
                                              transform="translate(4.226 6.175)" fill="#ff833b"></path>
                                    </g>
                                </svg>

                            </div>
                            <span>Data</span>
                          {/*  <p>+10 options</p>*/}
                        </button>
                        <button type="button" className="btn -report">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Paper" data-name="Iconly/Bulk/Paper"
                                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Paper" transform="translate(3.208 1.833)">
                                        <path id="Fill_3" data-name="Fill 3"
                                              d="M14.033,6.436c-.414,0-.962-.009-1.645-.009A3.058,3.058,0,0,1,9.355,3.369V.421A.418.418,0,0,0,8.94,0H4.092A4.115,4.115,0,0,0,0,4.133V14.01a4.3,4.3,0,0,0,4.28,4.323H11.5a4.1,4.1,0,0,0,4.083-4.123V6.848a.415.415,0,0,0-.415-.42c-.388,0-.852.007-1.135.007"
                                              fill="#694afd" opacity="0.4"></path>
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M.753.135A.438.438,0,0,0,0,.441V2.859A1.858,1.858,0,0,0,1.849,4.707c.639.007,1.526.009,2.28.007a.437.437,0,0,0,.314-.741C3.476,2.968,1.744,1.165.753.135"
                                              transform="translate(10.783 0.385)" fill="#694afd" opacity="0.4"></path>
                                        <path id="Combined_Shape" data-name="Combined Shape"
                                              d="M.682,5.943a.683.683,0,0,1,0-1.365h4.99a.683.683,0,0,1,0,1.365Zm0-4.579A.682.682,0,1,1,.682,0h3.1a.682.682,0,1,1,0,1.365Z"
                                              transform="translate(4.336 7.24)" fill="#694afd"></path>
                                    </g>
                                </svg>

                            </div>
                            <span>Cable</span>
                          {/*  <p>+30 Report</p>*/}
                        </button>
                    </div>
                    <div className="group">
                        <button type="button" className="btn -wallet">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Wallet" data-name="Iconly/Bulk/Wallet"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Wallet" transform="translate(2 3)">
                                        <path id="Fill_1" data-name="Fill 1"
                                              d="M14.517,18H5.484a5.633,5.633,0,0,1-4.034-1.413A5.332,5.332,0,0,1,0,12.654V5.338A5.32,5.32,0,0,1,1.449,1.409,5.641,5.641,0,0,1,5.484,0h9.03a5.639,5.639,0,0,1,4.034,1.409A5.321,5.321,0,0,1,20,5.338v.037H15.762a3.54,3.54,0,0,0-3.57,3.482,3.421,3.421,0,0,0,1.044,2.467,3.6,3.6,0,0,0,2.527,1.024H20v.306a5.333,5.333,0,0,1-1.449,3.933A5.632,5.632,0,0,1,14.517,18ZM4.739,3.875a.759.759,0,0,0-.761.744.731.731,0,0,0,.222.528.769.769,0,0,0,.54.221H10.39a.769.769,0,0,0,.54-.221.733.733,0,0,0,.222-.529.759.759,0,0,0-.767-.743Z"
                                              fill="#292e34"></path>
                                        <path id="Fill_4" data-name="Fill 4"
                                              d="M.037,2.4a2.018,2.018,0,0,0,2,1.6h3.25A.726.726,0,0,0,6,3.266V.734A.728.728,0,0,0,5.283,0H1.956A1.985,1.985,0,0,0,0,2.01,2.031,2.031,0,0,0,.037,2.4"
                                              transform="translate(14 6.9)" fill="#292e34" opacity="0.4"></path>
                                        <circle id="Oval" cx="1" cy="1" r="1" transform="translate(15 7.9)"
                                                fill="#292e34"></circle>
                                    </g>
                                </svg>

                            </div>
                            <span>Power</span>
                          {/*  <p>+10 options</p>*/}
                        </button>
                        <button type="button" className="btn -statistics">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Graph" data-name="Iconly/Bulk/Graph"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Graph" transform="translate(2 2)">
                                        <path id="Path"
                                              d="M8.153.644a1.06,1.06,0,0,1,.1.329l.278,4.14h0l.138,2.081a2.14,2.14,0,0,0,.1.631,1.043,1.043,0,0,0,1.005.631l6.657-.435a1.1,1.1,0,0,1,.774.3,1.06,1.06,0,0,1,.319.609l.012.14a8.682,8.682,0,0,1-6.884,7.818,8.856,8.856,0,0,1-9.592-4.263,8.214,8.214,0,0,1-1-3.146A6.018,6.018,0,0,1,0,8.491,8.7,8.7,0,0,1,6.984.013,1.091,1.091,0,0,1,8.153.644Z"
                                              transform="translate(0 2.911)" fill="#de4afd"></path>
                                        <path id="Path-2" data-name="Path"
                                              d="M.849,0a9.444,9.444,0,0,1,9.13,7.811l-.007.033h0l-.02.047,0,.13a.8.8,0,0,1-.192.472.827.827,0,0,1-.462.271l-.11.015-7.681.5a.917.917,0,0,1-.7-.227.884.884,0,0,1-.288-.537L.007.845a.122.122,0,0,1,0-.08A.785.785,0,0,1,.265.21.815.815,0,0,1,.849,0Z"
                                              transform="translate(10.021 0)" fill="#de4afd" opacity="0.4"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>Co-Pay</span>

                        {/*    <p>+10 options</p>*/}

                        </button>
                        <button type="button" className="btn -bills" data-toggle="modal" data-target="#mdllExchange">
                            <div className="icon bg-yellow bg-opacity-10">
                                <svg id="Iconly_Bulk_Document" data-name="Iconly/Bulk/Document"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Document" transform="translate(3 2)">
                                        <path id="Path"
                                              d="M13.191,0H4.81C1.77,0,0,1.78,0,4.83V15.16C0,18.26,1.77,20,4.81,20h8.381C16.28,20,18,18.26,18,15.16V4.83C18,1.78,16.28,0,13.191,0"
                                              fill="#20bbd3" opacity="0.4"></path>
                                        <path id="Combined_Shape" data-name="Combined Shape"
                                              d="M.12,10.3a.8.8,0,0,1,0-.84A.785.785,0,0,1,.87,9.09H8.71a.79.79,0,0,1,0,1.57H.87a.732.732,0,0,1-.1.007A.783.783,0,0,1,.12,10.3ZM.87,6.09a.781.781,0,0,1,0-1.562H8.71a.781.781,0,0,1,0,1.562Zm0-4.521A.78.78,0,1,1,.87.01V0H3.859a.785.785,0,0,1,0,1.57Z"
                                              transform="translate(4.21 4.65)" fill="#20bbd3"></path>
                                    </g>
                                </svg>
                            </div>
                            <span>QR Pay</span>
                           {/* <p>+30 Report</p>*/}
                        </button>
                    </div>
                </div>
            </section>

                </div>
            </div>
        </>
    )

}
