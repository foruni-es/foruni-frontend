'use client';
/* import { useRouter } from 'next/navigation'; */

import { HOME } from '@/constants';

const UniHeader = ({ name, shortName }) => {

    /* const router = useRouter(); */

    return (
        <div className="bg-white shadow sm:rounded-lg p-4 mb-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {
                name === HOME ?
                "Canal general"
                :
                `Canal ${shortName.toUpperCase()}`
            }
            </h1>
            <p className="text-gray-500">
            {
                name === HOME ?
                "Un canal compartido por todos los estudiantes, docentes e investigadores de las universidades españolas."
                :
                `El canal de todos los estudiantes, docentes e investigadores de la ${name}.`
            }
            </p>
        </div>
    )
}

export default UniHeader;