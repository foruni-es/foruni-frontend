import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

// Cuando showSuccessMessage == true, el Alert muestra mensajes de exito
const Alert = ({ status, message, additionalClass = "", showSuccessMessage = false }) => {
    return (
        <>
        {
            (status !== 200 && status !== null) ?
            <div className={`rounded-md bg-red-50 p-4 ${additionalClass}`}>
                <div className="flex">
      
                    <div className="flex-shrink-0">
                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>

                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">{ message }</h3>
                    </div>

                </div>
            </div>
            : (status === 200 && showSuccessMessage) &&
            <div className={`rounded-md bg-green-50 p-4 ${additionalClass}`}>
                <div className="flex">
                
                        <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>

                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">{ message }</h3>
                        </div>
        
                </div>
            </div>
        }
        </>
        
    )
}

export default Alert;