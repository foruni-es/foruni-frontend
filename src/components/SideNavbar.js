'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
    BookmarkIcon, 
    BuildingLibraryIcon, 
    HomeIcon, 
    PencilSquareIcon, 
    UserIcon 
} from '@heroicons/react/24/outline';

import addClassName from '@/utils/addClassName';
import { MAIN_URL } from '@/constants';
import readLocalStorage from '@/utils/readLocalStorage';

const INICIO = 'Inicio';
const MI_UNI = 'Mi uni';
const PUBLICADOS = 'Publicados';
const GUARDADOS = 'Guardados';
const MI_PERFIL = 'Mi perfil'

const navigation = [
    { name: INICIO, href: MAIN_URL, icon: HomeIcon, current: true },
    { name: MI_UNI, href: '#', icon: BuildingLibraryIcon, current: false },
    { name: PUBLICADOS, href: '#', icon: PencilSquareIcon, current: false },
    { name: GUARDADOS, href: '#', icon: BookmarkIcon, current: false },
    { name: MI_PERFIL, href: '#', icon: UserIcon, current: false }
]

const SideNavbar = () => {

    const pathname = usePathname();
    const router = useRouter();

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
        <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
            <div className="space-y-1 pb-8">
            {
                navigation.map((item) => (
                    <div
                        key={item.name}
                        href={item.href}
                        className={addClassName(
                            currentItem(item) ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                            'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer'
                        )}
                        aria-current={currentItem(item) ? 'page' : undefined}
                        onClick={ () => navigate(item) }
                    >
                        <item.icon
                            className={addClassName(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                            )}
                            aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                    </div>
                ))
            }
            </div>
        </nav>
    )
}

export default SideNavbar;