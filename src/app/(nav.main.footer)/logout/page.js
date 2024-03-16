'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import APIConnection from '@/utils/APIConnection';
import Loading from '@/components/Loading';
import Alert from '@/components/Alert';

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
        <Loading loading={loading}>
            <Alert status={ApiResponse.status} message={ApiResponse.message} />
        </Loading>
    )
}

export default LogoutPage;