"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const skillsData = [
    {
        category: "Development Languages",
        skills: [
            { name: "Python", icon: "/Icons/python.svg" },
            { name: "Java", icon: "/Icons/java.svg" },
            { name: "Go", icon: "/Icons/gopher.svg" },
            { name: "Javascript", icon: "/Icons/javascript.svg" },
            { name: "TypeScript", icon: "/Icons/typescript-icon.svg" },
            { name: "C#", icon: "/Icons/CCSharp.svg" },
            { name: "Kotlin", icon: "/Icons/kotlin-icon.svg" },
            { name: "R", icon: "/Icons/r-programming-language-icon.svg" },
        ],
    },
    {
        category: "Frontend, Backend Development, DataBases & Tools",
        skills: [
            { name: "HTML", icon: "/Icons/html-5.svg" },
            { name: "CSS", icon: "/Icons/css-3.svg" },
            { name: "Bootstrap", icon: "/Icons/bootstrap.svg" },
            { name: "React", icon: "/Icons/react.svg" },
            { name: "Next.js", icon: "/Icons/nextjs-icon.svg" },
            { name: "Expo", icon: "/Icons/expo-icon.svg" },
            { name: "Tailwind", icon: "/Icons/tailwindcss-icon.svg" },
            { name: "Node.js", icon: "/Icons/nodejs-icon-alt.svg" },
            { name: "Django", icon: "/Icons/django-icon.svg" },
            { name: "FastAPI", icon: "/Icons/fastapi-icon.svg" },
            { name: "MySQL", icon: "/Icons/mysql-icon.svg" },
            { name: "FireBase", icon: "/Icons/firebase.svg" },
            { name: "XAMPP", icon: "/Icons/xampp.svg" },
            { name: "Git", icon: "/Icons/git.svg" },
            { name: "GitHub", icon: "/Icons/github-icon.svg" },
        ],
    },
    {
        category: "Data Science, ML & Visualization",
        skills: [
            { name: "TensorFlow", icon: "/Icons/tensorflow.svg" },
            { name: "PyTorch", icon: "/Icons/pytorch-icon.svg" },
            { name: "MATLAB", icon: "/Icons/matlab-original.svg" },
            { name: "Power BI", icon: "/Icons/microsoft-power-bi.svg" },
            { name: "Tableau", icon: "/Icons/tableau-icon.svg" },
            { name: "Microsoft Azure", icon: "/Icons/microsoft-azure.svg" },
        ],
    },
    {
        category: "Game Development & 3D",
        skills: [
            { name: "Unity", icon: "/Icons/unity.svg" },
            { name: "Blender", icon: "/Icons/blender.svg" },
        ],
    },
];

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(skillsData[0].category);

    return (
        <div className='p-4 flex flex-row gap-4 justify-center'>
            <div className='w-1/4'>
                <ul className='list-none'>
                    {skillsData.map((category, index) => (
                        <li key={index} className='mb-2'>
                            <button
                                className={`w-full text-left p-2 rounded ${
                                    activeTab === category.category
                                        ? "skills-Button text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                                onClick={() => setActiveTab(category.category)}>
                                {category.category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {skillsData.map(
                    (category, index) =>
                        activeTab === category.category && (
                            <div key={index}>
                                <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className='flex flex-col items-center'>
                                                <div className='icon-wrapper'>
                                                    <Image
                                                        alt={skill.name}
                                                        width={50}
                                                        height={50}
                                                        src={skill.icon}
                                                        className='icon'
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
