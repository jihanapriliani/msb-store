import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
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
        clearErrors();
        post(route("register"));
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [passwordConfVisible, setPasswordConfVisible] = useState(false);

    const togglePasswordConfVisibility = () => {
        setPasswordConfVisible(!passwordVisible);
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
                        placeholder="Masukkan nama lengkap..."
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

                <div className="mb-5" style={{ position: "relative" }}>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                        >
                            Password
                        </label>
                        <TextInput
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            className="h-[50px]  bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="*****"
                            style={{ fontSize: "2rem" }}
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        style={{ position: "absolute", top: "2.5rem" }}
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

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-5" style={{ position: "relative" }}>
                    <div>
                        <label
                            htmlFor="password_confirmation"
                            className="block mb-2 font-medium text-gray-700 dark:text-white text-3xl"
                        >
                            Confirm Password
                        </label>
                        <TextInput
                            id="password_confirmation"
                            type={passwordConfVisible ? "text" : "password"}
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
                    </div>

                    <button
                        type="button"
                        onClick={togglePasswordConfVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        style={{ position: "absolute", top: "2.5rem" }}
                    >
                        {passwordConfVisible ? (
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

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex flex-col items-center justify-end mt-4">
                    <button
                        type="submit"
                        className="px-12 py-4 rounded-lg bg-black text-white text-3xl"
                        disabled={processing}
                    >
                        Register
                    </button>

                    <Link
                        href={route("login")}
                        className="mt-10 underline text-sm mr-5 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <p className="text-2xl">
                            Sudah punya akun? Login disini.
                        </p>
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
