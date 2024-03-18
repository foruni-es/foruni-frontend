import Link from "next/link";
import elapsedTime from "@/utils/elapsedTime";
import { 
    BookmarkIcon, 
    ChatBubbleLeftEllipsisIcon, 
    ExclamationTriangleIcon, 
    ShareIcon 
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const Threads = ({ threads }) => {
    return (
        <div className="mt-2">
                <h1 className="sr-only">Mensajes</h1>
                {
                    threads.length === 0 ?
                    <p className="mt-4 text-center">Sé el primero en escribir un mensaje.</p>
                    :
                    <ul role="list" className="space-y-4">
                        {
                            threads.map((thread) => (
                            <li key={thread.id} >
                                <article 
                                    aria-labelledby={'thread-title-' + thread.id}
                                    className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6 hover:cursor-pointer"
                                >
                                    <div>
                                        <div className="flex space-x-3">
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                                    <span className="text-lg font-medium leading-none text-white">{ thread.authorName[0].toUpperCase() }</span>
                                                </span>   
                                             </div>
                                            <div className="min-w-0 flex-1">
                                                {
                                                    !thread.authorVerifiedInfo ?
                                                    <Link href={`/${thread.authorUniURL}`} className="text-sm text-gray-900 font-medium">
                                                        {thread.authorName}, de la {thread.authorUni}
                                                    </Link>
                                                    :
                                                    <p className="text-sm text-gray-900 font-medium">
                                                        <a href="#">
                                                            <CheckBadgeIcon className="h-4 w-4 mb-0.5 inline-block text-blue-500 mr-0.5" aria-hidden="true" />{thread.authorName}, {thread.authorVerifiedInfo}
                                                        </a>
                                                    </p>
                                                }
                                                <p className="text-sm text-gray-500">
                                                    <a href="#">
                                                       Hace {elapsedTime(thread.publicationDatetime)}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <h2 id={'thread-title-' + thread.id} className="mt-4 text-base font-medium text-gray-900">
                                            {thread.title}
                                        </h2>
                                    </div>
                                    <div
                                        className="mt-2 space-y-4 text-sm text-gray-700"
                                        dangerouslySetInnerHTML={{ __html: thread.content }}
                                    />
                                    <div className="mt-6 flex justify-around space-x-8">
                                        <span className="inline-flex items-center text-sm">
                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                <ChatBubbleLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                                                <span className="font-medium text-gray-900">{0}</span>
                                                <span className="sr-only">replies</span>
                                            </button>
                                        </span>
                                        <span className="inline-flex items-center text-sm">
                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                <BookmarkIcon className="h-5 w-5" aria-hidden="true" />
                                                <span className="hidden sm:inline-block font-medium text-gray-900">Guardar</span>
                                                <span className="sr-only">likes</span>
                                            </button>
                                        </span>
                                        <span className="inline-flex items-center text-sm">
                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                                <span className="hidden sm:inline-block font-medium text-gray-900">Compartir</span>
                                            </button>
                                        </span>
                                        <span className="inline-flex items-center text-sm">
                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                <ExclamationTriangleIcon className="h-5 w-5" aria-hidden="true" />
                                                <span className="hidden sm:inline-block font font-medium text-gray-900">Denunciar</span>
                                                <span className="sr-only">views</span>
                                            </button>
                                        </span>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                }
        </div>
    )
}

export default Threads;