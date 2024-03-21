import Logo from "@/components/Logo";
import Link from "next/link";

const ValidationPage = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            
            <Logo />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Valida tu cuenta
            </h2>

            <p className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
                Te hemos enviado un correo electrónico. Por favor, sigue 
                los pasos indicados en él para validar tu cuenta. Una vez completados, 
                <Link href='/login' className='ml-1 underline' replace>inicia sesión pulsando aquí.</Link>
            </p>
            
            <p className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm text-center">
                Si no encuentras el correo, recuerda revisar la carpeta de spam. Si no lo has recibido,
                escríbenos a soporte@foruni.es para ayudarte.
            </p>
            
        </div>
    )
}

export default ValidationPage;