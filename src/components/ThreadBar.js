'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Disclosure } from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid'
import NewThreadForm from './NewThreadForm';
import readLocalStorage from '@/utils/readLocalStorage';

const filters = {
    price: [
        { value: '0', label: 'Grado', checked: false },
        { value: '25', label: 'Master', checked: false },
        { value: '50', label: 'Doctorado', checked: false },
        { value: '75', label: 'Investigación', checked: false },
        { value: '02', label: 'Alojamiento', checked: false },
        { value: '25asd', label: 'Erasmus', checked: false },
        { value: '5as0', label: 'TFG', checked: false },
        { value: '7asd5', label: 'SICUE', checked: false },
        { value: 'as0', label: 'Ingeniería', checked: false },
        { value: '2as5', label: 'Economía', checked: false },
        { value: '520', label: 'Emprendimiento', checked: false },
        { value: '75e', label: 'Deporte', checked: false },
    ]
}

const ThreadBar = () => {

    const router = useRouter();
    
    const [loggedUser, setLoggedUser] = useState({ isAuth: false });
    const [showThreadForm, setShowThreadForm] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        setLoggedUser(readLocalStorage());
    }, [readLocalStorage]);

    return (
        <Disclosure
            as="section"
            aria-labelledby="filter-heading"
        >
            <h2 id="filter-heading" className="sr-only">
                Temas
            </h2>

            {/* Botón de selección de etiquetas y de creacion de un nuevo post */}
            { 
                !showThreadForm && 
                <div className="flex flex-row justify-between items-center py-1 px-3 sm:px-0">
                    <div className="bg-white p-2 shadow rounded-lg flex max-w-7xl space-x-3 divide-x divide-gray-300 text-sm">
                        <div>
                            <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                                <FunnelIcon
                                    className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                Filtrar
                            </Disclosure.Button>
                        </div>
                        {
                            selectedFilters.length > 0 &&
                            <div className="pl-3">
                                <button type="button" className="text-gray-500">
                                    Quitar filtros
                                </button>
                            </div>
                        }
                    </div>
                    <button
                        type="button"
                        className="rounded-md bg-blue-600 px-3 py-2 sm:mr-0 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={ loggedUser.isAuth ? () => setShowThreadForm(true) : () => router.push('/login') }
                    >
                        Escribir
                    </button>
                </div>
            }

            { showThreadForm && <NewThreadForm handleClick={setShowThreadForm}/> }

            {/* Etiquetas disponibles */}
            <Disclosure.Panel className="flex flex-wrap mt-2 rounded shadow border-gray-200 px-5 pt-5 bg-white sm:rounded-lg">
            
                    {filters.price.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center text-base sm:text-sm mr-5 mb-5">
                        <input
                            id={`price-${optionIdx}`}
                            name="price[]"
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            defaultChecked={option.checked}
                        />
                        <label htmlFor={`price-${optionIdx}`} className="ml-2 min-w-0 flex-1 text-gray-600">
                            {option.label}
                        </label>
                        </div>
                    ))}

            </Disclosure.Panel>
        </Disclosure>
    )
}

export default ThreadBar;