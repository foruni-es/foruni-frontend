import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

const LoginPage = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            
            <Logo />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Inicia sesión en foruni
            </h2>
            
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />
            </div>

        </div>
    )
}

export default LoginPage;