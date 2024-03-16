import SignupForm from "@/components/SignupForm";
import Logo from "@/components/Logo";

const SignupPage = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            
            <Logo />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Regístrate en foruni
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <SignupForm />
            </div>
            
        </div>
    )
}

export default SignupPage;