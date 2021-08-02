import {BarLoader} from "react-spinners";


const style = {
    padding: '18px 20px',
    backgroundColor: 'white',
borderRadius: '10px',
marginBottom: '12px',
border: "1px solid #efeff6",
'WebkitBoxShadow':" 0px 0px 30px 0px rgb(41 46 52 / 2%)",
'MozBoxShadow':" 0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'OBoxShadow':" 0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'MsBoxShadow': "0px 0px 30px 0px rgba(41, 46, 52, 0.02)",
'BoxShadow': "0px 0px 30px 0px rgb(41 46 52 / 2%)"

}

export default function LoadingCard() {

    return (
        <>
        <div  style={style}>
            {Array(6).fill(null).map((a, index)=>  <BarLoader key={index} color={'#bdbdc3'}   height={'12px'} width={'100%'} css="display: flex;margin-bottom: 10px " />)}
        </div>

    </> )
}
