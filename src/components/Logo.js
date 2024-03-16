import Link from "next/link";
import { MAIN_URL } from "@/constants";

const Logo = () => {

    return (
        <Link href={MAIN_URL} className='text-2xl font-bold bg-blue-600 px-3 py-0.5 text-white rounded mx-auto'>
            foruni
        </Link>
    )
}

export default Logo;