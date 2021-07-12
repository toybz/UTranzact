
export default function OperationItem({title, icon, modalId: id, bgColor, containerClass, iconStyle}) {
    return (
        <button type="button" className={`btn ${containerClass}`} data-toggle="modal" data-target={`#${id}`}>
            <div style={{"background-color": bgColor}} className={`icon bg-opacity-10`}>

                {/*     <Icon />*/}
                <i className={icon} style={iconStyle}></i>

            </div>
            <span>{title}</span>

        </button>
    )
}
