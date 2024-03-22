import APIConnection from '@/utils/APIConnection';
import AsyncHandler from '@/components/AsyncHandler';
import NewThreadForm from '@/components/NewThreadForm';
import Threads from '@/components/Threads';

const UniThreads = async ({ universityId }) => {
    
    const response = await APIConnection ('GET', `/threads?universityId=${universityId}`);

    return (
        <AsyncHandler response={response}>
            <NewThreadForm universityId={universityId} />
            <Threads threads={response.threads} />
        </AsyncHandler>
    )
}

export default UniThreads;