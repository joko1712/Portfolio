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
      `}
    >
      <div
        className="flex items-center justify-between p-2 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-sm">My Spotify Playlist</span>
        <button className="text-ld font-bold hover:opacity-100">
          {isOpen ? "▼" : "▲"}
        </button>
      </div>

      <div
        className="transition-all duration-300 bg-background rounded-xl overflow-hidden"
        style={{
          height: isOpen ? 152 : 0,
        }}
      >
        <iframe
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          frameBorder="0"
          height="152"
          src="https://open.spotify.com/embed/playlist/0YIJrgajqURMmdt8JXrOvI?utm_source=generator"
          style={{ borderRadius: "0 0 12px 12px" }}
          title="Spotify Player"
          width="100%"
        />
      </div>
    </div>
  );
}
