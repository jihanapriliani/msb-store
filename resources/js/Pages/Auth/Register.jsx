import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        fullname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="max-w-5xl mx-auto my-20">
                <div className="my-5">
                    <label
                        htmlFor="fullname"
                        className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Fullname
                    </label>
                    <TextInput
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={data.fullname}
                        autoComplete="username"
                        placeholder="John Doe"
                        className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        style={{ fontSize: "2rem" }}
                        isFocused={true}
                        onChange={(e) => setData("fullname", e.target.value)}
                        required
                    />

                    <InputError message={errors.fullname} className="mt-2" />
                </div>

                <div className="my-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Email
                    </label>
                    <TextInput
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        style={{ fontSize: "2rem" }}
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Password
                    </label>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*****"
                        style={{ fontSize: "2rem" }}
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password_confirmation"
                        className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Confirm Password
                    </label>
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*****"
                        style={{ fontSize: "2rem" }}
                        value={data.password_confirmation}
                        autoComplete="current-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm mr-5 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <button
                        type="submit"
                        className="px-12 py-4 rounded-lg bg-black text-white text-3xl"
                        disabled={processing}
                    >
                        Register
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
