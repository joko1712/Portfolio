"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        try {
            const response = await fetch("https://formspree.io/f/myzkppjz", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='.my-contact flex flex-col w-full p-6 rounded-xl space-y-4'>
            <input
                type='hidden'
                name='_subject'
                value='New Message from Portfolio'
            />
            <input type='hidden' name='_replyto' value={formData.email} />
            <input
                type='text'
                name='_gotcha'
                style={{ display: "none" }}
                tabIndex={-1}
            />{" "}
            {/* Honeypot Field */}
            <div>
                <label htmlFor='name' className='.my-contacttext block mb-1'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='.my-footer w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div>
                <label htmlFor='email' className='.my-contacttext block mb-1'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div>
                <label htmlFor='message' className='.my-contacttext block mb-1'>
                    Message
                </label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    rows={5}></textarea>
            </div>
            <button
                type='submit'
                className='skills-Button w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-purple-500 transition-colors'>
                Send Message
            </button>
            {status === "SUCCESS" && (
                <div className='mt-4 p-3 bg-green-500 text-white text-center rounded'>
                    Thank you for reaching out! I'll get back to you soon.
                </div>
            )}
            {status === "ERROR" && (
                <div className='mt-4 p-3 bg-red-500 text-white text-center rounded'>
                    Oops! Something went wrong. Please try again.
                </div>
            )}
        </form>
    );
}
