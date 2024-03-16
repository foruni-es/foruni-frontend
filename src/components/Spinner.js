'use client';
import { useEffect, useState } from 'react';

const Spinner = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(true);
        }, 500);

        return () => clearTimeout(timer);

    }, []);
 
    return (
        <>
        { 
            visible && 
            <div className="loading-spinner block mx-auto mb-10"></div> 
        }
        </>
    )
};

export default Spinner;