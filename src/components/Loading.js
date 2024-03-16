import Spinner from "@/components/Spinner";

const Loading = ({ loading = false, children }) => {
    return loading ? <Spinner/> : children;
}

export default Loading;