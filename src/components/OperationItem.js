
export default function OperationItem({title, icon: Icon,modalId: id, bgClass }){
    return (
        <button type="button" className={`btn menu_item`} data-toggle="modal" data-target={`#${id}`}>
            <div className={`icon ${bgClass} bg-opacity-10`}>

               <Icon />


            </div>
            <span>{title}</span>

        </button>
    )
}
