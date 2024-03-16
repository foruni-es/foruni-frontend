import APIConnection from '@/utils/APIConnection';
import UniHeader from '@/components/UniHeader';
import UniThreads from '@/components/UniThreads';
import AsyncHandler from '@/components/AsyncHandler';

const UniPage = async ({ params }) => {

    const response = await APIConnection ('GET', `/universities/${params.uniName}`);

    return (
        <AsyncHandler response={response}>
            <UniHeader name={response.university?.name} shortName={response.university?.shortName} />
            <UniThreads universityId={response.university?.id} />
        </AsyncHandler>
            
    )
}

export default UniPage;