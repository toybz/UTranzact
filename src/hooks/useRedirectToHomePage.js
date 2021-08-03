import {useLocation} from "react-router-dom";
import {useEffect} from "react"


export default function UseRedirectToHomePage() {
    const location = useLocation();

    useEffect(() => {

        console.log("Inside the redirect hook")
        if (location.pathname !== '/') {
            console.log("Redirecting")
            window.location.href = "/"
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

}
