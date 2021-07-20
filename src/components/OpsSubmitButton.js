export default function OpsSubmitButton({className, text, isProcessing, processingText, onClick}) {

    return (
        <button type="button" onClick={onClick}
         className={`btn btn- btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center ${className}`}
                disabled={isProcessing}>
            {
                isProcessing ?  ( <span>
                                     <span className="spinner-border spinner-border-sm color-white" role="status"  aria-hidden="true"> </span>
  &nbsp;&nbsp; {processingText || 'Processing...'}

               </span> ) : text }

        </button>
    )

}
