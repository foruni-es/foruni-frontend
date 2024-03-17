'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { Combobox } from '@headlessui/react';

import APIConnection from '@/utils/APIConnection';

const UniFinder = () => {

    const router = useRouter();
    
    const [universities, setUniversities] = useState([]);

    const searchUni = async (name) => {

        const response = await APIConnection('GET', `/universities?search=${name}`);
        
        if (response.status === 200) setUniversities(response.universities);
        else setUniversities([]);
    }

    return (
        <Combobox as="div">
            <div className="relative border rounded-md">
                <MagnifyingGlassIcon
                    className="hidden lg:inline-block pointer-events-none absolute left-4 top-2.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                <Combobox.Input
                    className="h-10 w-full border-0 bg-transparent pl-4 lg:pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Buscar universidad"
                    onChange={(e) => searchUni(e.target.value) }
                />

                {
                    universities.length > 0 && 
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {
                        universities.map((university) => (
                            <Combobox.Option
                                key={university.shortName}
                                value={university.shortName}
                                className='relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-50'
                                onClick={ () => router.push(`/${university.shortName}`) }
                            >
                                <div className='flex justify-start items-center hover:cursor-pointer'>
                                    <div>
                                        <BuildingLibraryIcon className="mr-2 h-5 w-5 text-gray-400 inline" aria-hidden="true" />
                                    </div>
                                    <p className="inline">{university.name}</p>
                                </div>
                            </Combobox.Option>
                        ))
                    }
                    </Combobox.Options>
                }
            </div>
        </Combobox>
    )
}

export default UniFinder;