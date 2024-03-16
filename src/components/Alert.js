import { XCircleIcon } from "@heroicons/react/20/solid";

const Alert = ({ status, message }) => {
    return (
        <>
        {
            status !== 200 &&
            <div className="rounded-md bg-red-50 p-4 mb-10">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                        
                        <h3 className="text-sm font-medium text-red-800">{ message }</h3>
                       
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Alert;