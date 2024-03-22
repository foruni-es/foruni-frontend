'use client';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import APIConnection from '@/utils/APIConnection';

// Esta vista se lanza desde el email de verificación que recibe el usuario después de registrarse. 
// Se encarga de hacer una llamada a la API para verificar el email del usuario
const ValidationCompletedPage = () => {

    const searchParams = useSearchParams()
 
    const userId = searchParams.get('userId');
    const verificationCode = searchParams.get('verificationCode');

    const [loading, setLoading] = useState(true);
    const [ApiResponse, setApiResponse] = useState({ status: 200, message: null });

    useEffect(() => {

        const apiCall = async () => {

            setLoading(true);
            
            if (!userId || !verificationCode) 
                setApiResponse({ status: 400, message: 'No ha sido posible validar tu cuenta.'});
            else {
                const response = await APIConnection(
                    'GET', 
                    `/users/verification?userId=${userId}&verificationCode=${verificationCode}`
                );
                
                setApiResponse(response);   
            }

            setLoading(false);
        }

        apiCall();

    }, []);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            
            <Logo />

            {
                loading ? 
                <Spinner additionalClass='mt-10'/>
                :
                <>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        { ApiResponse.message }   
                    </h2>

                    <p className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    {
                        ApiResponse.status === 200 ? 
                        `¡Todo correcto! Ya puedes iniciar sesión en tu cuenta.`
                        :
                        `Parece que se ha producido un error al validar tu cuenta. Inténtalo de nuevo en unos instantes.
                        Si el error persiste contacta con soporte@foruni.es`
                    } 
                    </p>
                </>
            }
            
        </div>
    )
}

export default ValidationCompletedPage;