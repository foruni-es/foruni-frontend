'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import APIConnection from '@/utils/APIConnection';
import Alert from '@/components/Alert';
import Spinner from './Spinner';

const LoginForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [ApiResponse, setApiResponse] = useState({ status: 200, message: null });

    const onSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setApiResponse({ status: 200, message: null });
        const response = await APIConnection('POST', '/users/login', {
            email,
            password
        });
        setLoading(false);

        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.user));
            router.push('/inicio');
        }
        
        setApiResponse(response);      
    }

    return (
        <>

            { loading && <Spinner /> }

            <Alert status={ApiResponse.status} message={ApiResponse.message} />

            <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Contraseña
                        </label>
                        {/*  
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                ¿Has olvidado la contraseña?
                            </a>
                        </div> 
                        */}
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Acceder
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                ¿No tienes una cuenta?{' '}
                <Link href="/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                    Regístrate aquí.
                </Link>
            </p>
        </>
    )
}

export default LoginForm;