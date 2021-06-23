import Header from "../components/Header";

export default function VirtualCards() {

    return (

        <>

            <div id="wrapper">
                <div id="content">
                    <Header pageTitle={'Virtual Cards'}/>

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
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Update</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item color-red" href="#">Remove</a>
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
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Update</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item color-red" href="#">Remove</a>
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
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Update</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item color-red" href="#">Remove</a>
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


                </div>

            </div>
        </>

    )

}
