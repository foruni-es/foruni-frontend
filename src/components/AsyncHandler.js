import { Suspense } from 'react';
import Spinner from '@/components/Spinner';
import ErrorHandler from '@/components/ErrorHandler';

const AsyncHandler = ({ response, children }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <ErrorHandler response={response}>
                { children }
            </ErrorHandler>
        </Suspense>
    )
}

export default AsyncHandler;