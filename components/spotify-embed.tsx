"use client";

import React, { useState } from "react";

export default function SpotifyEmbed() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`
        fixed bottom-8 right-4 z-50
        w-80
        bg-background rounded-xl
        shadow-xl border border-default-300
        overflow-hidden
        flex flex-col
        transition-all duration-300
        opacity-15 hover:opacity-100
      `}>
            <div
                className='flex items-center justify-between p-2 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}>
                <span className='font-semibold text-sm'>
                    My Spotify Playlist
                </span>
                <button className='text-ld font-bold hover:opacity-100'>
                    {isOpen ? "▼" : "▲"}
                </button>
            </div>

            <div
                className='transition-all duration-300 bg-background rounded-xl overflow-hidden'
                style={{
                    height: isOpen ? 152 : 0,
                }}>
                <iframe
                    style={{ borderRadius: "0 0 12px 12px" }}
                    src='https://open.spotify.com/embed/playlist/0YIJrgajqURMmdt8JXrOvI?utm_source=generator'
                    width='100%'
                    height='152'
                    frameBorder='0'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                />
            </div>
        </div>
    );
}
