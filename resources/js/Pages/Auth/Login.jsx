import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            email: "",
            password: "",
            remember: false,
        });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route("login"));
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            {/* <form className="" onSubmit={submit}>
                <div>
                    <InputLabel htmlhtmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlhtmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}

            <form
                className="max-w-5xl mx-auto my-20 flex flex-col "
                onSubmit={submit}
                style={{ minHeight: "40vh" }}
            >
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

                <div className="">
                    <label
                        htmlFor="password"
                        className="block font-medium text-gray-700 dark:text-white text-3xl"
                    >
                        Password
                    </label>

                    <div style={{ position: "relative" }}>
                        <TextInput
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="*****"
                            style={{ fontSize: "2rem" }}
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {passwordVisible ? (
                                <HiEyeOff
                                    className="ml-2 h-6 w-6"
                                    style={{
                                        color: "gray",
                                        fontSize: "2rem",
                                        width: "2rem",
                                        height: "2rem",
                                        margin: "2rem 1rem",
                                    }}
                                />
                            ) : (
                                <HiEye
                                    className="ml-2 h-6 w-6"
                                    style={{
                                        color: "gray",
                                        fontSize: "2rem",
                                        width: "2rem",
                                        height: "2rem",
                                        margin: "2rem 1rem",
                                    }}
                                />
                            )}
                        </button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <p className="text-[1.5rem]  mt-2 text-end text-underline">
                    <Link href="/forgot-password">Lupa password?</Link>
                </p>

                <button
                    type="submit"
                    className="px-12 mt-12 py-4 rounded-xl bg-black text-white text-3xl"
                >
                    Log In
                </button>

                <Link
                    href={route("register")}
                    className="mt-10 underline text-sm mx-auto mr-5 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <p className="text-2xl">
                        Belum punya akun? Register disini.
                    </p>
                </Link>
            </form>
        </GuestLayout>
    );
}
