import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Recursive as FontCursive,
    Playpen_Sans as FontPlayfair,
} from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const fontCursive = FontCursive({
    subsets: ["latin"],
    variable: "--font-cursive",
});

export const fontPlayfair = FontPlayfair({
    subsets: ["latin"],
    variable: "--font-playfair",
});
