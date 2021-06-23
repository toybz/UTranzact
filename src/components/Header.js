export default function Header({pageTitle, sticky = true}) {
    const colorClass = sticky ? '-sticky' : 'header-white'
    return (
        <header className={`main_haeder header-sticky multi_item  ${colorClass} `}>
            <div className="em_menu_sidebar">
                <button type="button" className="btn btn_menuSidebar item-show" data-toggle="modal"
                        data-target="#mdllSidebarMenu-background">
                    <i className="ri-menu-fill"></i>
                </button>
            </div>
            <div className="title_page">
                <h1 className="page_name">
                    {pageTitle}
                </h1>
            </div>
            <div className="em_side_right">
                <a href="page-wishlist.html" className="btn justify-content-center relative">
                    <svg id="Iconly_Two-tone_Notification" data-name="Iconly/Two-tone/Notification"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Notification" transform="translate(3.5 2)">
                            <path id="Path_425"
                                  d="M0,11.787v-.219A3.6,3.6,0,0,1,.6,9.75,4.87,4.87,0,0,0,1.8,7.436c0-.666,0-1.342.058-2.009C2.155,2.218,5.327,0,8.461,0h.078c3.134,0,6.306,2.218,6.617,5.427.058.666,0,1.342.049,2.009A4.955,4.955,0,0,0,16.4,9.759a3.506,3.506,0,0,1,.6,1.809v.209a3.566,3.566,0,0,1-.844,2.39A4.505,4.505,0,0,1,13.3,15.538a45.078,45.078,0,0,1-9.615,0A4.554,4.554,0,0,1,.835,14.167,3.6,3.6,0,0,1,0,11.787Z"
                                  transform="translate(0 0)" fill="none" stroke="#200e32" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path>
                            <path id="Path_421"
                                  d="M0,0A3.061,3.061,0,0,0,2.037,1.127,3.088,3.088,0,0,0,4.288.5,2.886,2.886,0,0,0,4.812,0"
                                  transform="translate(6.055 18.852)" fill="none" stroke="#200e32"
                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                  strokeWidth="1.5" opacity="0.4"></path>
                        </g>
                    </svg>
                    <span className="flashCircle"></span>
                </a>
            </div>
        </header>
    )

}
