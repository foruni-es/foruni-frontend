'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/20/solid';
import { 
    Bars3Icon, 
    BookmarkIcon, 
    BuildingLibraryIcon, 
    HomeIcon, 
    PencilSquareIcon, 
    UserIcon, 
    XMarkIcon 
} from '@heroicons/react/24/outline';

import addClassName from '@/utils/addClassName';
import { MAIN_URL } from '@/constants';
import readLocalStorage from '@/utils/readLocalStorage';
import UniFinder from '@/components/UniFinder';
import Logo from '@/components/Logo';

const INICIO = 'Inicio';
const MI_UNI = 'Mi uni';
const PUBLICADOS = 'Mensajes publicados';
const GUARDADOS = 'Mensajes guardados';
const MI_PERFIL = 'Mi perfil'

const navigation = [
    { name: INICIO, href: MAIN_URL, icon: HomeIcon, current: true },
    { name: MI_UNI, href: '#', icon: BuildingLibraryIcon, current: false },
    { name: PUBLICADOS, href: '#', icon: PencilSquareIcon, current: false },
    { name: GUARDADOS, href: '#', icon: BookmarkIcon, current: false },
    { name: MI_PERFIL, href: '#', icon: UserIcon, current: false }
];

const Header = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [loggedUser, setLoggedUser] = useState({ isAuth: false });

    const navigate = (item) => {
        if (item.name === INICIO) router.push(item.href);
        else if (loggedUser.isAuth) {
            if (item.name === MI_UNI) router.push(`/${loggedUser.university.shortName}`);
            else router.push(item.href);
        } else router.push('/login');
    }

    const currentItem = (item) => {
        if (item.name === INICIO) 
            return pathname === item.href;
        else if (loggedUser.isAuth) {
            if (item.name === MI_UNI) return pathname === `/${loggedUser.university.shortName}`;
            else return item.href === pathname;
        } else return false;
    }

    useEffect(() => {
        setLoggedUser(readLocalStorage());
    }, [readLocalStorage]);

    return (
        <>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="header"
                className={({ open }) =>
                    addClassName(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'bg-white shadow-sm lg:static lg:overflow-y-visible'
                    )
                }
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Logo />
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 md:px-20 lg:px-0 xl:col-span-7 2xl:col-span-6">
                                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                        <div className="w-full">
                                            {/* <label htmlFor="search" className="sr-only">
                                                Buscar universidad
                                            </label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <p
                                                    className="block w-full rounded-md border bg-white py-1.5 pl-10 pr-3 text-gray-400"
                                                    onClick={ () => setOpenFinder(true) }
                                                >
                                                    Buscar universidad 
                                                </p>
                                            </div> */}
                                            <UniFinder /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                                {
                                    loggedUser.isAuth ? 
                                    <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open menu</span>
                                        {
                                            open ? 
                                            (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) 
                                            : 
                                            (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Popover.Button>
                                    :
                                    <div 
                                        className='rounded-md bg-blue-600 text-white p-2 hover:cursor-pointer'
                                        onClick={ () => router.push('/login') }
                                    >
                                        <ArrowRightEndOnRectangleIcon className="block h-6 w-6" aria-hidden="true" />
                                    </div>
                                }
                                </div>
                                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-3 2xl:col-span-4">
                                {
                                    loggedUser.isAuth ?
                                    <Link
                                        href="/logout"
                                        className="inline-flex items-center rounded-md border border-red-500 bg-white px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Cerrar sesión
                                    </Link>
                                    :
                                    <>
                                        <Link
                                            href="/signup"
                                            className="inline-flex items-center rounded-md border border-blue-500 bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                        >
                                            Regístrate
                                        </Link>
                                        <Link
                                            href="/login"
                                            className="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                        >
                                            Iniciar sesión
                                        </Link>
                                    </>
                                }
                                </div>
                            </div>
                        </div>

                        <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                            <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                                {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={
                                        addClassName(currentItem(item) ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    onClick={ () => navigate(item) }
                                >
                                    {item.name}
                                </div>
                                ))}
                            </div>

                            <div className="border-t mx-auto mt-3 max-w-3xl px-4 sm:px-6 py-8">
                                <Link
                                    href="/logout"
                                    className="flex w-full items-center justify-center rounded-md border border-red-500 bg-white px-4 py-2 text-base text-red-600 font-medium shadow-sm hover:bg-red-50"
                                >
                                    Cerrar sesión
                                </Link>

                               {/*  <div className="mt-6 flex justify-center">
                                    <a href="#" className="text-base font-medium text-gray-900 hover:underline">
                                        Contribuir
                                    </a>
                                </div> */}
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}

export default Header;