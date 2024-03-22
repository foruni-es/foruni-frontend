'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import APIConnection from '@/utils/APIConnection';
import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';

const LogoutPage = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [ApiResponse, setApiResponse] = useState({ status: 200, message: null });

    useEffect(() => {
       
        const logout = async () => {

            setLoading(true);
            const response = await APIConnection('GET', '/users/logout');
            setLoading(false);

            if (response.status === 200) {
                localStorage.removeItem('user');
                router.replace('/inicio');
            } 
        
            setApiResponse(response);   
        }

        logout()
        
    }, []);

    return (
        <>
        {
            loading ?
            <Spinner additionalClass="mt-10" />
            :
            <div className="container mx-auto mt-10 flex justify-center">
                <Alert status={ApiResponse.status} message={ApiResponse.message} />
            </div>
        }
        </>
    )
}

export default LogoutPage;