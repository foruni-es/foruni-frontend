import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Suggentions = () => {

    return (
        <section aria-labelledby="trending-heading">
            <div className="rounded-lg bg-white shadow">
                <div className="p-6">
                    <h2 id="trending-heading" className="text-base font-bold text-gray-900">
                        Buzón de sugerencias
                    </h2>
                    <div className="mt-2 flow-root">
                        <ul role="list" className="-my-4 divide-y divide-gray-200">
                            <li className="flex space-x-3 py-4">
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-gray-800">
                                        ¿Que te gustaría cambiar o añadir a foruni? Tu opinión ayuda a mejorar la plataforma.
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
                            Responder
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Suggentions;