import APIConnection from '@/utils/APIConnection';
import UniHeader from '@/components/UniHeader';
import UniThreads from '@/components/UniThreads';
import AsyncHandler from '@/components/AsyncHandler';

const HomePage = async () => {

    const response = await APIConnection ('GET', '/universities/inicio');

    return (
        <AsyncHandler response={response}>
            <UniHeader name={response.university?.name} shortName={response.university?.shortName} />
            <UniThreads universityId={response.university?.id} />
        </AsyncHandler>
            
    )
}

export default HomePage;