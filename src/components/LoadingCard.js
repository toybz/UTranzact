import {BarLoader} from "react-spinners";


const style = {
    padding: '18px 20px',
    backgroundColor: 'white',
borderRadius: '10px',
marginBottom: '12px',
border: "1px solid #efeff6",
'-webkit-box-shadow':" 0px 0px 30px 0px rgb(41 46 52 / 2%)",
'-moz-box-shadow':" 0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'-o-box-shadow':" 0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'-ms-box-shadow': "0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'box-shadow': "0px 0px 30px 0px rgb(41 46 52 / 2%)"

}

export default function LoadingCard() {

    return (
        <>
        <div  style={style}>
            {Array(6).fill(null).map((a)=>  <BarLoader color={'#bdbdc3'}   height={'12'} width={'100%'} css="display: flex;margin-bottom: 10px " />)}
        </div>

    </> )
}
