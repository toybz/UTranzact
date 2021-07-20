
export default function OperationItem({title, icon, modalId: id, bgColor, containerClass, iconStyle, onClick}) {
    return (
        <button type="button" className={`btn ${containerClass}`}
 onClick={onClick}       >
            <div style={{"background-color": bgColor}} className={`icon bg-opacity-10`}>

                <i className={icon} style={iconStyle}></i>

            </div>
            <span>{title}</span>

        </button>
    )
}
