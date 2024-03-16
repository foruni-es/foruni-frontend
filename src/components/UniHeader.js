'use client';
import { HOME } from "@/constants";

const UniHeader = ({ name, shortName }) => {

    /* const router = useRouter(); */

    return (
        <div className="bg-white shadow sm:rounded-lg p-4 mb-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            {
                name === HOME ?
                "Foro general"
                :
                <>
                    {`Foro ${shortName.toUpperCase()}`}
                    {/* <div className="flex flex-row justify-center items-center">  
                        <div 
                            className="p-2 inline-block mr-2 hover:cursor-pointer rounded-full hover:bg-gray-200"
                            onClick={ () => router.push(MAIN_URL) }
                        >
                            <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        foruni/{shortName.toUpperCase()}
                    </div> */}
                </>
            }
            </h1>
            <p className="text-gray-500 text-center">
            {
                name === HOME ?
                "El foro de todos los estudiantes, docentes e investigadores de las universidades españolas"
                :
                `El foro de todos los estudiantes, docentes e investigadores de la ${name}`
            }
            </p>
        </div>
    )
}

export default UniHeader;