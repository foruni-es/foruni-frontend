'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import APIConnection from '@/utils/APIConnection';
import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';

const SignupForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [loading, setLoading] = useState(false);
    const [ApiResponse, setApiResponse] = useState({ status: 200, message: null });

    const onSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        const response = await APIConnection('POST', '/users/register', {
            email,
            name,
            password,
            passwordConfirmation
        });
        setLoading(false);

        setApiResponse(response);   

        if (response.status === 200) router.replace('/validacion/completada');
    }

    return (
        <>
            { loading && <Spinner /> }

            <Alert status={ApiResponse.status} message={ApiResponse.message} />

            <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email universitario
                        </label>
                        {/* <div className="text-sm">
                            <Link 
                                href="#" 
                                className="font-semibold text-blue-600 hover:text-blue-500"
                            >
                                Ver emails válidos
                            </Link>
                        </div>  */}
                    </div>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre público
                    </label>                    
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Contraseña
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-6 text-gray-900">
                            Repite la contraseña
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            value={passwordConfirmation}
                            required
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Registrarme
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                ¿Ya tienes una cuenta?{' '}
                <Link href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                    Inicia sesión aquí.
                </Link>
            </p>
        </>
    )
}

export default SignupForm;