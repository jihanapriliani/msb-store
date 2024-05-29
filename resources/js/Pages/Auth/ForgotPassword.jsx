import GuestLayout from "@/Layouts/GuestLayout/Index";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-3xl text-gray-600 max-w-5xl mx-auto my-20">
                Lupa kata sandi Anda? Tidak masalah. Cukup beri tahu kami alamat
                email Anda dan kami akan mengirimkan tautan untuk mengatur ulang
                kata sandi yang memungkinkan Anda memilih kata sandi baru.
            </div>

            {status && (
                <div className="mb-4 font-medium text-3xl text-green-600 max-w-5xl mx-auto my-20">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="max-w-5xl mx-auto my-20">
                <div className="my-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Email
                    </label>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        <p className="text-2xl p-4">
                            Email Password Reset Link
                        </p>
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
