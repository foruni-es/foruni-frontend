import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const AboutForuni = () => {
    
    return (
        <section aria-labelledby="trending-heading">
            <div className="rounded-lg bg-white shadow">
                <div className="p-6">
                    <h2 id="trending-heading" className="text-base font-bold text-gray-900">
                        Sobre foruni
                    </h2>
                    <div className="mt-2 flow-root">
                        <ul role="list" className="-my-4 divide-y divide-gray-200">
                            <li className="flex space-x-3 py-4">
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-gray-800">
                                        foruni es una plataforma web gratuita, libre de publicidad y
                                        <a className="ml-1 underline" href='https://github.com/foruni-es' target="__black">
                                            de código abierto 
                                            <ArrowTopRightOnSquareIcon
                                                className="h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500 inline-block ml-1 pb-1"
                                                aria-hidden="true"
                                            />
                                        </a>
                                        , creada para establecer un nuevo canal de comunicación para la comunidad universitaria.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="#"
                            className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                            Saber más
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutForuni;