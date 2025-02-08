"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { ResumeIcon } from "@/components/icons";
import Typewriter from "@/components/type-writer";
import { Avatar } from "@heroui/avatar";
import SkillsSection from "@/components/skills";
import SpotifyEmbed from "@/components/spotify-embed";
import SwiperCertifications from "@/components/swiper-cert";
import ContactForm from "@/components/contactFrom";

export default function Home() {
    return (
        <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
            <div className='mt-[5%] inline-block max-w-xxl text-center justify-center'>
                <Typewriter />
                <SpotifyEmbed />

                <h3 className='text-Uni mt-6'>
                    Computer Science Bachelor @ Universidade Autónoma de Lisboa
                </h3>
                <h3 className='text-Uni mt-2'>
                    Computer Science Master @ NOVA School of Science and
                    Technology
                </h3>
            </div>

            <div className='flex mt-8'>
                <Link
                    isExternal
                    className='resume-Button'
                    href={siteConfig.links.resume}>
                    <ResumeIcon size={20} />
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
                            I am a Master's degree student in Computer Science
                            at NOVA School of Science and Technology. I am
                            passionate about technology and software
                            development. I am always looking for new challenges
                            and opportunities to learn and grow.
                        </p>
                    </div>
                    <div className='flex items-center gap-4 text-lg mt-8'>
                        <p className='text-description leading-snug'>
                            I compleated my Bachelor's degree in Computer
                            Science at Universidade Autónoma de Lisboa. In
                            addition to my academic background, I have
                            experience in software development, web development,
                            and data analysis. Notably, worked as a software
                            developer intern at Linde AI.
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
                            video games. I am a huge fan of Dota 2. I also enjoy
                            listening to music mostly City-Pop and Hip-Hop.
                            Check out my Spotify playlist!
                        </p>
                    </div>
                </div>
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
