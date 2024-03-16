import APIConnection from '@/utils/APIConnection';
import Threads from '@/components/Threads';
import ThreadBar from '@/components/ThreadBar';
import AsyncHandler from '@/components/AsyncHandler';

const UniThreads = async ({ universityId }) => {
    
    const response = await APIConnection ('GET', `/threads?universityId=${universityId}`);

    return (
        <AsyncHandler response={response}>
            <ThreadBar />
            <Threads threads={response.threads} />
        </AsyncHandler>
    )
}

export default UniThreads;