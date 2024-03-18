'use client';
/* import { useRouter } from 'next/navigation'; */

import { HOME } from '@/constants';
import { BuildingLibraryIcon, HomeIcon } from '@heroicons/react/24/outline';

const UniHeader = ({ name, shortName }) => {

    /* const router = useRouter(); */

    return (
        <div className="bg-white shadow sm:rounded-lg p-4 mb-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {
                name === HOME ?
                <>  
                    <HomeIcon className="h-7 w-7 mr-2 mb-1.5 inline-block" aria-hidden="true" />
                    Inicio
                </>
                :
                <>
                    <BuildingLibraryIcon className="h-7 w-7 mr-1.5 mb-2 inline-block" aria-hidden="true" />
                    {`Foro ${shortName.toUpperCase()}`}
                </>
            }
            </h1>
            <p className="text-gray-500">
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