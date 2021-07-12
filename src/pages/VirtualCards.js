import Header from "../components/Header";
import {Link} from "react-router-dom";
import {ADD_VIRTUAL_CARDS_LINK} from "../helpers/links";
import Page from "./Page";

export default function VirtualCards() {

    return (

        <>

        <Page className={'bg-snow'}>

      <Header pageTitle={'Virtual Cards'}
              rightItem={()=> (
                  <div className="em_side_right">
       <Link to={ADD_VIRTUAL_CARDS_LINK} className="size-14 white-onScroll color-primary hover:color-blue">
           + Add
       </Link>

                  </div>
              )}

      />

                    <section className="padding-t-80 padding-l-20 padding-r-20 emPage__myCards padding-b-30">

                        <div className="emBK__cards">

                            {/* ele__card*/}
                            <div className="ele__card margin-b-20">
                                <div className="bg_imgCard">
                                    <img className="cover_img" src="/assets/img/card00654.png" alt=""/>
                                    <div className="enContent_card">
                                        <div className="head">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/visa_light.svg" alt=""/>
                                                </div>
                                                <p className="ex_date">04/23</p>
                                            </div>
                                        </div>
                                        <div className="body">
                                            <div className="card_encr">
                                                <span>…. …. …. 3951</span>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <div
                                                className="sideLeft w-100 d-flex justify-content-between align-items-center">
                                                <div className="txt mr-auto">
                                                    <span className="name">Balance</span>
                                                    <p className="no_card">2,365,00 <span
                                                        className="size-12">USD</span></p>
                                                </div>
                                                <div className="dropdown dropleft default none-arrow">
                                                    <button className="btn btn-more dropdown-toggle rounded-8"
                                                            type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="tio-more_horizontal"></i>
                                                    </button>
                                                    <div className="dropdown-menu rounded-8"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <span className="dropdown-item">Edit</span>
                                                        <span className="dropdown-item">Update</span>
                                                        <div className="dropdown-divider"></div>
                                                        <span className="dropdown-item color-red">Remove</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .ele__card*/}

                            {/* ele__card*/}
                            <div className="ele__card margin-b-20">
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
                                        <div className="body">
                                            <div className="card_encr">
                                                <span>…. …. …. 0261</span>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <div
                                                className="sideLeft w-100 d-flex justify-content-between align-items-center">
                                                <div className="txt">
                                                    <span className="name">Balance</span>
                                                    <p className="no_card">1,365,00 <span
                                                        className="size-12">USD</span></p>
                                                </div>
                                                <div className="dropdown dropleft default none-arrow">
                                                    <button className="btn btn-more dropdown-toggle rounded-8"
                                                            type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="tio-more_horizontal"></i>
                                                    </button>
                                                    <div className="dropdown-menu rounded-8"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <span className="dropdown-item">Edit</span>
                                                        <span className="dropdown-item">Update</span>
                                                        <div className="dropdown-divider"></div>
                                                        <span className="dropdown-item color-red">Remove</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .ele__card*/}

                            {/* ele__card*/}
                            <div className="ele__card margin-b-20">
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
                                        <div className="body">
                                            <div className="card_encr">
                                                <span>…. …. …. 0679</span>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <div
                                                className="sideLeft w-100 d-flex justify-content-between align-items-center">
                                                <div className="txt">
                                                    <span className="name">Balance</span>
                                                    <p className="no_card">565,00 <span
                                                        className="size-12">USD</span></p>
                                                </div>
                                                <div className="dropdown dropleft default none-arrow">
                                                    <button className="btn btn-more dropdown-toggle rounded-8"
                                                            type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="tio-more_horizontal"></i>
                                                    </button>
                                                    <div className="dropdown-menu rounded-8"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <span className="dropdown-item">Edit</span>
                                                        <span className="dropdown-item">Update</span>
                                                        <div className="dropdown-divider"></div>
                                                        <span className="dropdown-item color-red">Remove</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .ele__card*/}

                        </div>

                    </section>


        </Page>
        </>

    )

}
