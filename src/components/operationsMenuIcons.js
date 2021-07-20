import OperationItem from "./OperationItem";
import {openTransferModal} from "./Ops_Transfer";
import {openQrPayModal} from "./Ops_QrPay";
import {openBuyAirtimeModal} from "./Ops_BuyAirtime";
import {openFundCardModal} from "./Ops_FundCard";
import {openBuyDataModal} from "./Ops_BuyData";
import {openBuyPayTvModal} from "./Ops_BuyCable";
import {openBuyPowerModal} from "./Ops_BuyPower";
import {openRequestFundModal} from "./Ops_Request";

export const TransferMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-send-plane-fill'} iconStyle={{color: "#42bd83", ...iconStyle}} bgColor={'#ecf8f2'}
                   onClick={openTransferModal}
                   title={'Transfer'}
                   containerClass={containerClass}/>
)

export const AirtimeMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-cellphone-fill'} iconStyle={{color: "#f79908", ...iconStyle}} bgColor={'#fef5e6'}
                   title={'Airtime'} onClick={openBuyAirtimeModal} containerClass={containerClass}/>
)
export const FundCardMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-bank-card-fill'} iconStyle={{color: "#f44041", ...iconStyle}} bgColor={'#fdecec'}
                   title={'Fund Card'}
                   onClick={openFundCardModal}
                   containerClass={containerClass}/>
)

export const QrPayMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{color: "#629cfd", ...iconStyle}} bgColor={'#edf6fe'}
                   onClick={openQrPayModal}
                   title={'Qr Pay'}  containerClass={containerClass}/>
)


export const DataMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{color: "#f79665", ...iconStyle}} bgColor={'#fef0e9'}
                   onClick={openBuyDataModal}
                   title={'Buy Data'} modalId={'data-modal'} containerClass={containerClass}/>
)

export const CableMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{color: "#baacfe", ...iconStyle}} bgColor={'#f0edff'}
                   onClick={openBuyPayTvModal}
                   title={'Cable'}  containerClass={containerClass}/>
)


export const PowerMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{color: "#0e132d", ...iconStyle}} bgColor={'#e6e7ea'}
                   title={'Power'}  onClick={openBuyPowerModal} containerClass={containerClass}/>
)

export const CoPayMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{
      color: "#de4afd", "font-size": "20px",
      "font-weight": "bold", ...iconStyle
    }} bgColor={'rgba(222, 74, 253, 0.1)'} title={'Co-Pay'} modalId={'copay-modal'} containerClass={containerClass}/>
)


export const RequestMenuItem = ({iconStyle, containerClass}) => (
    <OperationItem icon={'ri-qr-code-fill'} iconStyle={{color: "#42c4d9", ...iconStyle}}
                   bgColor={'rgba(32, 187, 211, 0.1)'} title={'Request'}  onClick={openRequestFundModal}
                   containerClass={containerClass}/>
)


