export function middleware(request) {

    const currentUser = request.cookies.get('user')?.value;
    
    if (!currentUser && request.nextUrl.pathname.startsWith('/publicados')) 
        return Response.redirect(new URL('/login', request.url));

    if (!currentUser && request.nextUrl.pathname.startsWith('/guardados')) 
        return Response.redirect(new URL('/login', request.url));

    if (!currentUser && request.nextUrl.pathname.startsWith('/perfil')) 
        return Response.redirect(new URL('/login', request.url));
}
   
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}