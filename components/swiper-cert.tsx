"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

const certificationsData = [
    {
        websiteIcon: "/Icons/coursera-seeklogo.svg",
        websiteIcon2: "/Icons/stanford-university-seeklogo.svg",
        title: "Game Theory",
        description:
            "Popularized by movies such as 'A Beautiful Mind,' game theory is the mathematical modeling of strategic interaction among rational (and irrational) agents. Beyond what we call `games' in common language, such as chess, poker, soccer, etc., it includes the modeling of conflict among nations, political campaigns, competition among firms, and trading behavior in markets such as the NYSE. How could you begin to model keyword auctions, and peer to peer file-sharing networks, without accounting for the incentives of the people using them? The course will provide the basics: representing games and strategies, the extensive form (which computer scientists call game trees), Bayesian games (modeling things like auctions), repeated and stochastic games, and more. We'll include a variety of examples including classic games and a few applications.",
        certLink:
            "https://www.coursera.org/account/accomplishments/certificate/58CXH7UUNV27",
    },
    {
        websiteIcon: "/Icons/coursera-seeklogo.svg",
        websiteIcon2: "/Icons/university-of-michigan-seeklogo.svg",
        title: "Introduction to Data Science in Python",
        description:
            "Data science is an ever-evolving field, using algorithms and scientific methods to parse complex data sets. Data scientists use a range of programming languages, such as Python and R, to harness and analyze data. This course focuses on using Python in data science. By the end of the course, you’ll have a fundamental understanding of machine learning models and basic concepts around Machine Learning (ML) and Artificial Intelligence (AI).  Using Python, learners will study regression models (Linear, Multilinear, and Polynomial) and classification models (kNN, Logistic), utilizing popular libraries such as sklearn, Pandas, matplotlib, and numPy. The course will cover key concepts of machine learning such as: picking the right complexity, preventing overfitting, regularization, assessing uncertainty, weighing trade-offs, and model evaluation. Participation in this course will build your confidence in using Python, preparing you for more advanced study in Machine Learning (ML) and Artificial Intelligence (AI), and advancement in your career.",
        certLink:
            "https://www.coursera.org/account/accomplishments/certificate/K968K2ZFES6T",
    },
    {
        websiteIcon: "/Icons/coursera-seeklogo.svg",
        websiteIcon2:
            "/Icons/university-of-california-davis-uc-davis-logo-vector.svg",
        title: "SQL for Data Science",
        description:
            "This course is designed to give you a primer in the fundamentals of SQL and working with data so that you can begin analyzing it for data science purposes. You will begin to ask the right questions and come up with good answers to deliver valuable insights for your organization. This course starts with the basics and assumes you do not have any knowledge or skills in SQL. It will build on that foundation and gradually have you write both simple and complex queries to help you select data from tables.  You'll start to work with different types of data like strings and numbers and discuss methods to filter and pare down your results. You will create new tables and be able to move data into them. You will learn common operators and how to combine the data. You will use case statements and concepts like data governance and profiling. You will discuss topics on data, and practice using real-world programming assignments. You will interpret the structure, meaning, and relationships in source data and use SQL as a professional to shape your data for targeted analysis purposes. ",
        certLink:
            "https://www.coursera.org/account/accomplishments/certificate/4SNTEC3CFUJC",
    },
    {
        websiteIcon: "/Icons/coursera-seeklogo.svg",
        websiteIcon2: "/Icons/DeepLearningAI.svg",
        websiteIcon3: "/Icons/stanford-university-seeklogo.svg",
        title: "Machine Learning Specialization",
        description:
            "The Machine Learning Specialization is a foundational online program created in collaboration between DeepLearning.AI and Stanford Online. This beginner-friendly program will teach you the fundamentals of machine learning and how to use these techniques to build real-world AI applications. This Specialization is taught by Andrew Ng, an AI visionary who has led critical research at Stanford University and groundbreaking work at Google Brain, Baidu, and Landing.AI to advance the AI field.",
        certLink:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/PUG365WJU8PF",
    },
    {
        websiteIcon: "/Icons/udemy-seeklogo.svg",
        title: "The Complete React Native + Hooks Course",
        description:
            "If you're tired of spinning your wheels learning Swift or Android, this is the course for you. Authentication? You will learn it.  Hooks? Included.  Navigation? Of course! This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.",
        certLink:
            "https://www.udemy.com/certificate/UC-aa8f1fb2-4654-4d5c-91f7-5afb439a9c38/",
    },
    {
        websiteIcon: "/Icons/idONf4qM5N_1738943506422.svg",
        title: "Become a Python Master",
        description:
            "Learn to code in Python—a beginner-friendly programming language used in data analysis, web development, task automation, and many other fields.",
        certLink:
            "https://programiz.pro/certificates/08da9fe7-62fc-4a12-8347-35fb8c0371fd",
    },
];

export default function CertificationsSection() {
    return (
        <div className='flex items-center justify-center'>
            <Swiper
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                modules={[EffectCoverflow, Navigation]}
                navigation={true}
                slidesPerView={"auto"}>
                {certificationsData.map((cert, index) => (
                    <SwiperSlide
                        key={index}
                        className='my-swiper flex items-center justify-center bg-gray-800 rounded-xl p-6 text-center max-w-xl h-[400px] relative'>
                        <div className='flex flex-col items-center w-full'>
                            <div className='flex space-x-4 mb-4'>
                                <Image
                                    alt='Certificate Icon'
                                    width={100}
                                    height={200}
                                    src={cert.websiteIcon}
                                    priority
                                />
                                {cert.websiteIcon2 && (
                                    <Image
                                        alt='Certificate Icon'
                                        width={100}
                                        height={200}
                                        src={cert.websiteIcon2}
                                        priority
                                    />
                                )}
                                {cert.websiteIcon3 && (
                                    <Image
                                        alt='Certificate Icon'
                                        width={100}
                                        height={200}
                                        src={cert.websiteIcon3}
                                        priority
                                    />
                                )}
                            </div>
                            <h3 className='text-2xl font-bold text-white'>
                                {cert.title}
                            </h3>
                            <p className='mb-4 text-md text-gray-300 overflow-hidden text-ellipsis max-h-24 w-full px-4 break-words line-clamp-3'>
                                {cert.description}
                            </p>
                            <a
                                className='skills-Button px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-500 transition-colors'
                                href={cert.certLink}
                                rel='noopener noreferrer'
                                target='_blank'>
                                View Certification
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
