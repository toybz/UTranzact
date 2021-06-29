

export default function Page({children, className}){

    return(
        <div id="wrapper" className={className}>
            <div id="content">
                {children}
            </div>
        </div>

    )


}
