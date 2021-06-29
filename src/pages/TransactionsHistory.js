import Header from "../components/Header";
import Page from "./Page";

export default function TransactionsHistory() {

    return( <>
          <Page>
          <>
              <Header pageTitle={'History'}    />

              {/* Start emTransactions__page */}
              <section className="padding-t-80 padding-l-20 padding-r-20 emTransactions__page padding-b-30">
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
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans-2">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/persons/01.png" alt="" />
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
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans-3">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/persons/maxresdefault.jpg" alt="" />
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

                  <div className="border-text margin-b-30 margin-t-30">
                      <div className="lined">
                          <span className="text">Yesterday</span>
                      </div>
                  </div>
                  <div className="emBK__transactions">
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/persons/envato-logo-blue-black.png" alt="" />
                              </div>
                              <div className="media-body my-auto">
                                  <h4>Envato Market</h4>
                                  <p>Shopping</p>
                              </div>
                          </div>
                          <div className="sideRight">
                              <p>+ 59.00 <span>USD</span></p>
                          </div>
                      </div>
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans-2">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/person.png" alt="" />
                              </div>
                              <div className="media-body my-auto">
                                  <h4>Adam J. Staley</h4>
                                  <p>Transfer</p>
                              </div>
                          </div>
                          <div className="sideRight discount">
                              <p>- 10.00 <span>USD</span></p>
                          </div>
                      </div>

                  </div>

                  <div className="border-text margin-b-30 margin-t-30">
                      <div className="lined">
                          <span className="text">25 Jun</span>
                      </div>
                  </div>
                  <div className="emBK__transactions">
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans-3">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/persons/envato-logo-blue-black.png" alt="" />
                              </div>
                              <div className="media-body my-auto">
                                  <h4>Envato Market</h4>
                                  <p>Shopping</p>
                              </div>
                          </div>
                          <div className="sideRight">
                              <p>+ 59.00 <span>USD</span></p>
                          </div>
                      </div>
                      <div className="item_trans" data-toggle="modal" data-target="#mdllDetailsTrans">
                          <div className="media sideLeft">
                              <div className="icon_img">
                                  <img src="/assets/img/persons/16.png" alt="" />
                              </div>
                              <div className="media-body my-auto">
                                  <h4>Kathryn Knight</h4>
                                  <p>Transfer</p>
                              </div>
                          </div>
                          <div className="sideRight discount">
                              <p>- 10.00 <span>USD</span></p>
                          </div>
                      </div>

                  </div>

              </section>
              {/* End. emTransactions__page */}

              {/* Start spinner_loading */}
              <div className="padding-b-20">
                  <div className="spinner_loading">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                  </div>
              </div>



             {/* Modal details__transaction */}
              <div className="modal transition-bottom screenFull defaultModal details__transaction mdlladd__rate fade"
                   id="mdllDetailsTrans" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header border-0 padding-l-20 padding-r-20 justify-content-center">
                              <div className="itemProduct_sm">
                                  <h1 className="size-18 weight-600 color-secondary m-0">Payment Sent</h1>
                              </div>
                              <div className="absolute right-0 padding-r-20">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <i className="tio-clear"></i>
                                  </button>
                              </div>
                              <div className="icon absolute left-0 padding-l-20">
                                  <button type="button" className="btn p-0">
                                      <svg id="Iconly_Two-tone_Delete" data-name="Iconly/Two-tone/Delete"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <g id="Delete" transform="translate(3 2)">
                                              <path id="Stroke_1" data-name="Stroke 1"
                                                    d="M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0"
                                                    transform="translate(2.134 7.468)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" opacity="0.4" />
                                              <path id="Stroke_3" data-name="Stroke 3" d="M16.958.5H0"
                                                    transform="translate(0.75 3.74)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                              <path id="Stroke_5" data-name="Stroke 5"
                                                    d="M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489"
                                                    transform="translate(4.018 0.751)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                          </g>
                                      </svg>

                                  </button>
                              </div>
                          </div>
                          <div className="modal-body px-0">

                              <div className="bk_check">
                                 {/*
                                      You can change between the three classes
                                       sent
                                       withdraw
                                       Exchange
                                   */}
                                  <div className="icon sent">
                                      <svg id="Iconly_Bulk_Send" data-name="Iconly/Bulk/Send"
                                           xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                          <g id="Send" transform="translate(1.833 1.833)">
                                              <path id="Fill_1" data-name="Fill 1"
                                                    d="M17.808.53A1.777,1.777,0,0,0,16.039.072L1.29,4.333A1.754,1.754,0,0,0,.022,5.718,2.049,2.049,0,0,0,.941,7.634L5.553,10.45a1.2,1.2,0,0,0,1.475-.175l5.281-5.281a.674.674,0,0,1,.972,0,.692.692,0,0,1,0,.972L7.99,11.247a1.2,1.2,0,0,0-.177,1.475l2.818,4.629a1.835,1.835,0,0,0,1.751.852,1.782,1.782,0,0,0,1.494-1.265L18.248,2.3A1.781,1.781,0,0,0,17.808.53"
                                                    transform="translate(0 0)" fill="#25c998" />
                                              <path id="Combined_Shape" data-name="Combined Shape"
                                                    d="M4.367,6.99a.688.688,0,0,1,0-.972L5.619,4.766a.688.688,0,1,1,.973.973L5.339,6.99a.687.687,0,0,1-.972,0ZM3.649,3.518a.688.688,0,0,1,0-.972L4.9,1.294a.688.688,0,0,1,.973.973L4.621,3.518a.687.687,0,0,1-.972,0ZM.2,2.425a.688.688,0,0,1,0-.972L1.453.2a.688.688,0,1,1,.973.973L1.173,2.425a.687.687,0,0,1-.972,0Z"
                                                    transform="translate(0.239 10.948)" fill="#25c998" opacity="0.4" />
                                          </g>
                                      </svg>
                                  </div>
                              </div>

                              <table className="table table-striped">
                                  <tbody>
                                  <tr>
                                      <td><span>Status</span></td>
                                      <td><span className="success">Success</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>To</span></td>
                                      <td><span>Kathryn Knight</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Bank Name</span></td>
                                      <td><span>Orino Bank</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Transaction Category</span></td>
                                      <td><span>Shopping</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Receipt</span></td>
                                      <td><span>Yes</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Date</span></td>
                                      <td><span>Oct 29, 2021 12:35 PM</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Amount</span></td>
                                      <td><span className="weight-500 size-15">350.00 </span><span className="size-12">USD</span>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>

                      </div>
                  </div>
              </div>

             {/* Modal details__transaction */}
              <div className="modal transition-bottom screenFull defaultModal details__transaction mdlladd__rate fade"
                   id="mdllDetailsTrans-2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header border-0 padding-l-20 padding-r-20 justify-content-center">
                              <div className="itemProduct_sm">
                                  <h1 className="size-18 weight-600 color-secondary m-0">Payment withdrawn</h1>
                              </div>
                              <div className="absolute right-0 padding-r-20">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <i className="tio-clear"></i>
                                  </button>
                              </div>
                              <div className="icon absolute left-0 padding-l-20">
                                  <button type="button" className="btn p-0">
                                      <svg id="Iconly_Two-tone_Delete" data-name="Iconly/Two-tone/Delete"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <g id="Delete" transform="translate(3 2)">
                                              <path id="Stroke_1" data-name="Stroke 1"
                                                    d="M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0"
                                                    transform="translate(2.134 7.468)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" opacity="0.4" />
                                              <path id="Stroke_3" data-name="Stroke 3" d="M16.958.5H0"
                                                    transform="translate(0.75 3.74)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                              <path id="Stroke_5" data-name="Stroke 5"
                                                    d="M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489"
                                                    transform="translate(4.018 0.751)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                          </g>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div className="modal-body px-0">

                              <div className="bk_check">
                                 {/*
                                      You can change between the three classes
                                       sent
                                       withdraw
                                       Exchange
                                   */}
                                  <div className="icon withdraw">
                                      <svg id="Iconly_Bulk_Arrow_-_Down_Square" data-name="Iconly/Bulk/Arrow - Down Square"
                                           xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                          <g id="Arrow_-_Down_Square" data-name="Arrow - Down Square"
                                             transform="translate(1.833 1.833)">
                                              <path id="Fill_1" data-name="Fill 1"
                                                    d="M0,5.423V12.91c0,3.244,2.086,5.423,5.193,5.423H13.14c3.107,0,5.193-2.179,5.193-5.423V5.423C18.333,2.18,16.246,0,13.139,0H5.193C2.086,0,0,2.18,0,5.423"
                                                    transform="translate(0 0)" fill="#4a8cfd" opacity="0.4" />
                                              <path id="Fill_4" data-name="Fill 4"
                                                    d="M.2,5.213,3.636,8.664a.708.708,0,0,0,.975,0L8.047,5.213a.688.688,0,0,0-.975-.971L4.81,6.513V.688a.688.688,0,0,0-1.375,0V6.513L1.175,4.242A.688.688,0,1,0,.2,5.213"
                                                    transform="translate(5.044 4.738)" fill="#4a8cfd" />
                                          </g>
                                      </svg>
                                  </div>
                              </div>

                              <table className="table table-striped">
                                  <tbody>
                                  <tr>
                                      <td><span>Status</span></td>
                                      <td><span className="success">Success</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>To</span></td>
                                      <td><span>Kathryn Knight</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Bank Name</span></td>
                                      <td><span>Orino Bank</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Transaction Category</span></td>
                                      <td><span>Shopping</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Receipt</span></td>
                                      <td><span>Yes</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Date</span></td>
                                      <td><span>Oct 29, 2021 12:35 PM</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Amount</span></td>
                                      <td><span className="weight-500 size-15">350.00 </span><span className="size-12">USD</span>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>

                      </div>
                  </div>
              </div>

           {/* Modal details__transaction */}
              <div className="modal transition-bottom screenFull defaultModal details__transaction mdlladd__rate fade"
                   id="mdllDetailsTrans-3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header border-0 padding-l-20 padding-r-20 justify-content-center">
                              <div className="itemProduct_sm">
                                  <h1 className="size-18 weight-600 color-secondary m-0">Payment Transferred</h1>
                              </div>
                              <div className="absolute right-0 padding-r-20">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <i className="tio-clear"></i>
                                  </button>
                              </div>
                              <div className="icon absolute left-0 padding-l-20">
                                  <button type="button" className="btn p-0">
                                      <svg id="Iconly_Two-tone_Delete" data-name="Iconly/Two-tone/Delete"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <g id="Delete" transform="translate(3 2)">
                                              <path id="Stroke_1" data-name="Stroke 1"
                                                    d="M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0"
                                                    transform="translate(2.134 7.468)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" opacity="0.4" />
                                              <path id="Stroke_3" data-name="Stroke 3" d="M16.958.5H0"
                                                    transform="translate(0.75 3.74)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                              <path id="Stroke_5" data-name="Stroke 5"
                                                    d="M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489"
                                                    transform="translate(4.018 0.751)" fill="none" stroke="#ff3f3f"
                                                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                    strokeWidth="1.5" />
                                          </g>
                                      </svg>

                                  </button>
                              </div>
                          </div>
                          <div className="modal-body px-0">

                              <div className="bk_check">
                                 {/*
                                   You can change between the three classes
                                    sent
                                    withdraw
                                    exchange
                                */}
                                  <div className="icon exchange">
                                      <svg id="Iconly_Bulk_Swap" data-name="Iconly/Bulk/Swap"
                                           xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                          <g id="Swap" transform="translate(1.833 2.75)">
                                              <path id="Fill_1" data-name="Fill 1"
                                                    d="M1.092,0A.862.862,0,0,0,.236.869L0,5.066A1.1,1.1,0,0,0,1.092,6.173,1.1,1.1,0,0,0,2.183,5.066L1.948.869A.862.862,0,0,0,1.092,0"
                                                    transform="translate(3.221 9.066)" fill="#f5c02e" opacity="0.4" />
                                              <path id="Fill_3" data-name="Fill 3"
                                                    d="M5.482.617a4.235,4.235,0,0,0-.4-.363A1.257,1.257,0,0,0,4.319,0,1.313,1.313,0,0,0,3.5.277c-.042.042-.22.2-.367.352A16.265,16.265,0,0,0,.24,4.969,3.591,3.591,0,0,0,0,5.852a1.492,1.492,0,0,0,.157.67,1.367,1.367,0,0,0,.65.6,6.778,6.778,0,0,0,.765.192,16.477,16.477,0,0,0,2.737.181A19.129,19.129,0,0,0,6.96,7.331a5.828,5.828,0,0,0,.954-.256,1.343,1.343,0,0,0,.713-1.18V5.852a3.779,3.779,0,0,0-.294-.99A16.263,16.263,0,0,0,5.482.617"
                                                    transform="translate(0 0)" fill="#f5c02e" />
                                              <path id="Fill_6" data-name="Fill 6"
                                                    d="M1.092,6.173A.862.862,0,0,0,1.948,5.3l.235-4.2A1.1,1.1,0,0,0,1.092,0,1.1,1.1,0,0,0,0,1.107L.236,5.3a.862.862,0,0,0,.856.869"
                                                    transform="translate(12.928 1.26)" fill="#f5c02e" opacity="0.4" />
                                              <path id="Fill_8" data-name="Fill 8"
                                                    d="M8.471.968a1.372,1.372,0,0,0-.65-.6A6.835,6.835,0,0,0,7.056.181,16.477,16.477,0,0,0,4.319,0,19.129,19.129,0,0,0,1.667.159,5.944,5.944,0,0,0,.713.415,1.341,1.341,0,0,0,0,1.6v.042a3.726,3.726,0,0,0,.294.989A16.219,16.219,0,0,0,3.145,6.872a4.123,4.123,0,0,0,.4.361,1.247,1.247,0,0,0,.766.256,1.314,1.314,0,0,0,.817-.277c.042-.042.22-.2.367-.351A16.3,16.3,0,0,0,8.386,2.522a3.558,3.558,0,0,0,.241-.883A1.493,1.493,0,0,0,8.471.968"
                                                    transform="translate(9.706 9.01)" fill="#f5c02e" />
                                          </g>
                                      </svg>
                                  </div>
                              </div>

                              <table className="table table-striped">
                                  <tbody>
                                  <tr>
                                      <td><span>Status</span></td>
                                      <td><span className="success">Success</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>To</span></td>
                                      <td><span>Kathryn Knight</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Bank Name</span></td>
                                      <td><span>Orino Bank</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Transaction Category</span></td>
                                      <td><span>Shopping</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Receipt</span></td>
                                      <td><span>Yes</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Date</span></td>
                                      <td><span>Oct 29, 2021 12:35 PM</span></td>
                                  </tr>
                                  <tr>
                                      <td><span>Amount</span></td>
                                      <td><span className="weight-500 size-15">350.00 </span><span className="size-12">USD</span>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>

                      </div>
                  </div>
              </div>




          </>
          </Page>

            </>
            )


            }
