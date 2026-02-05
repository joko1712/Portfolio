"use client";
import { Link } from "@heroui/link";
import { Avatar } from "@heroui/avatar";

import { siteConfig } from "@/config/site";
import { ResumeIcon } from "@/components/icons";
import Typewriter from "@/components/type-writer";
import SkillsSection from "@/components/skills";
import SpotifyEmbed from "@/components/spotify-embed";
import SwiperCertifications from "@/components/swiper-cert";
import ContactForm from "@/components/contactFrom";
import { GrArticle } from "react-icons/gr";
import FeaturedWork from "@/components/FeatureWork";
import PublicationsTalks from "@/components/PublicationsTalks";

export default function Home() {
    return (
        <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
            <div className='mt-[5%] inline-block max-w-xxl text-center justify-center'>
                <Typewriter />
                <SpotifyEmbed />

                <h3 className='text-Uni mt-6'>
                    Researcher @ NOVA.id.FCT — Building clinical
                    decision-support tools
                </h3>
                <h3 className='text-Uni mt-2'>
                    Co-creator of HYBpy — published + presented internationally
                </h3>
            </div>

            <div className='flex mt-8'>
                <Link
                    isExternal
                    className='resume-Button'
                    href={siteConfig.links.HYBpy_article}>
                    <GrArticle size={25} style={{ marginInline: "10px" }} />
                    Publication
                </Link>
            </div>

            <div className='flex mt-2'>
                <Link
                    isExternal
                    className='resume-Button'
                    href={siteConfig.links.resume}>
                    <ResumeIcon size={25} style={{ marginInline: "10px" }} />
                    Resume
                </Link>
            </div>

            <div className='mt-10 flex flex-col items-center mt-[15%]'>
                <span className='arrow-wave'>&darr;</span>
            </div>

            <div className='mt-[10%] inline-block max-w-[80%] text-center justify-center'>
                <h1 className='text-About font-bold mt-8'>About me</h1>
                <div className='mt-6'>
                    <div className='flex items-center gap-4 text-lg'>
                        <Avatar
                            className='w-24 h-24 flex-shrink-0'
                            src='/Images/fotoZe2.jpg'
                        />
                        <p className='text-description leading-snug'>
                            I’m a Computer Science researcher and software
                            engineer currently working as a Researcher at
                            NOVA.id.FCT. My work focuses on hybrid modeling,
                            machine learning, and full-stack development, with
                            an emphasis on building practical tools that support
                            real decision-making scenarios.
                        </p>
                    </div>
                    <div className='flex items-center gap-4 text-lg mt-8'>
                        <p className='text-description leading-snug'>
                            Alongside this, I’m the co-creator of HYBpy, an
                            open-source web-based framework for hybrid modeling
                            of biological systems, developed as part of my MSc
                            thesis and later published and presented
                            internationally, including at a conference in
                            Copenhagen and another in Lisbon. Previously, I
                            worked as a full-stack developer intern at Linde,
                            contributing to AI-driven web applications and
                            backend systems. I enjoy working at the intersection
                            of research and engineering, taking projects from
                            early ideas to usable, well-structured systems.
                        </p>
                        <Avatar
                            className='w-24 h-24 flex-shrink-0'
                            src='/puck.ico'
                            style={{
                                transform: "scaleX(-1)",
                            }}
                        />
                    </div>
                    <div className='flex items-center gap-4 text-lg mt-8'>
                        <Avatar
                            className='w-24 h-24 flex-shrink-0'
                            src='/Images/Saroo.jpg'
                        />
                        <p className='text-description leading-snug'>
                            Besides my academic and professional background, I
                            love spending time with my friends mainly playing
                            video games. I am a huge fan of Dota2. I also enjoy
                            listening to music mostly City-Pop and Hip-Hop.
                            Check out my Spotify playlist!
                        </p>
                    </div>
                </div>
            </div>

            <div
                className='mt-[10%] inline-block max-w-[95%] text-center justify-center'
                style={{ minBlockSize: "500px" }}>
                <h1 className='text-About font-bold mt-8'>Featured Work</h1>
                <FeaturedWork />
            </div>

            <div
                className='mt-[10%] inline-block max-w-[95%] text-center justify-center'
                style={{ minBlockSize: "500px" }}>
                <h1 className='text-About font-bold mt-8 mb-8'>Skills</h1>
                <SkillsSection />
            </div>

            <div
                className='mt-[10%] inline-block max-w-[95%] text-center justify-center'
                style={{ minBlockSize: "500px" }}>
                <h1 className='text-About font-bold mt-8 mb-8'>
                    Certifications
                </h1>
                <SwiperCertifications />
            </div>

            <div
                className='mt-[10%] inline-block max-w-[95%] text-center justify-center'
                style={{ minBlockSize: "500px" }}>
                <h1 className='text-About font-bold mt-8'>
                    Publications & Talks
                </h1>
                <PublicationsTalks />
            </div>

            <div
                className='mt-[10%] flex justify-center items-center w-full'
                style={{ minBlockSize: "500px" }}>
                <div className='w-full max-w-[95%]'>
                    <h1 className='text-About font-bold mt-8 mb-8 text-center'>
                        Contact Me
                    </h1>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
