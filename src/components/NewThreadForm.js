'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Spinner from '@/components/Spinner';
import Alert from '@/components/Alert';
import APIConnection from '@/utils/APIConnection';
import readLocalStorage from '@/utils/readLocalStorage';

const NewThreadForm = ({ universityId }) => {

    const router = useRouter();
    
    const [loggedUser, setLoggedUser] = useState({ isAuth: false });
    const [showThreadForm, setShowThreadForm] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [loading, setLoading] = useState(false);
    const [ApiResponse, setApiResponse] = useState({ status: null, message: null });

    const onSubmit = async (e) => {

        e.preventDefault();
        
        setLoading(true);
        setApiResponse({ status: null, message: null });
        const response = await APIConnection('POST', '/threads', {
            title,
            content,
            universityId
        });
        setLoading(false); 
        console.log(response)
        setApiResponse(response); 
        
        if (ApiResponse.status === 200) {
            setTitle('');
            setContent('');
            setShowThreadForm(false);
        }
    }

    useEffect(() => {
        setLoggedUser(readLocalStorage());
    }, [readLocalStorage]);

    return (
        <>
        { 
            loading ?
            <Spinner additionalClass='my-3' /> 
            : ApiResponse.status === 200 ?
            <Alert 
                status={ApiResponse.status} 
                message={ApiResponse.message} 
                additionalClass="my-3" 
                showSuccessMessage={true}
            />
            : showThreadForm ?
            <>
                { 
                    (ApiResponse.status !== 200 && ApiResponse.status !== null) &&
                    <Alert 
                        status={ApiResponse.status} 
                        message={ApiResponse.message} 
                        additionalClass="my-3" 
                        showSuccessMessage={true}
                    />
                }

                <form onSubmit={onSubmit} className="relative mt-1">
                    <div className="overflow-hidden sm:rounded-lg border border-gray-300 shadow">

                        <label htmlFor="title" className="sr-only">Título</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            maxLength={256}
                            className="block resize-y w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
                            placeholder="Título"
                            required
                            value={title}
                            
                            onChange={ (e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="description" className="sr-only">Contenido</label>
                        <textarea
                            rows={4}
                            name="description"
                            id="description"
                            maxLength={4096}
                            className="block w-full resize-y border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Contenido (opcional)"
                            value={content}
                            onChange={ (e) => setContent(e.target.value)}
                        />

                        <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-3 sm:px-3">

                            <div className="flex-shrink-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-red-500 bg-white px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    onClick={ () => { setTitle(''); setContent(''); setApiResponse({ status: null, message: null }); setShowThreadForm(false)} }
                                >
                                    Cancelar
                                </button>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Publicar
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </>
            :
            <div className="flex flex-row justify-end items-center py-1 px-3 sm:px-0">
                <button
                    type="button"
                    className="rounded-md bg-blue-600 px-3 py-2 sm:mr-0 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={ loggedUser.isAuth ? () => setShowThreadForm(true) : () => router.push('/login') }
                >
                    Escribir
                </button>
            </div>        
        }
        </>
    )
}

export default NewThreadForm;
  