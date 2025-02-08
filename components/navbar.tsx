"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { fontPlayfair } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";

import { Image } from "@heroui/image";

export const Navbar = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    // This is the cycle images to create a dynamic icon
    const icons = [
        "https://wikimon.net/images/f/f3/Crest_courage.png",
        "https://wikimon.net/images/8/88/Crest_friendship.png",
        "https://wikimon.net/images/1/11/Crest_love.png",
        "https://wikimon.net/images/7/7f/Crest_knowledge.png",
        "https://wikimon.net/images/1/1e/Crest_purity.png",
        "https://wikimon.net/images/e/e4/Crest_faith.png",
        "https://wikimon.net/images/d/da/Crest_hope.png",
        "https://wikimon.net/images/2/23/Crest_light.png",
        "https://wikimon.net/images/6/66/Crest_kindness.png",
    ];

    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navbarBgClass = theme === "dark" ? "bg-zinc-950" : "bg-zinc-100";

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 300);

        return () => clearInterval(intervalId);
    }, [icons.length]);

    return (
        <HeroUINavbar
            maxWidth='xl'
            position='sticky'
            shouldHideOnScroll
            className='my-navbar'>
            <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
                <NavbarBrand as='li' className='gap-3 max-w-fit'>
                    <NextLink
                        className='flex justify-start items-center gap-1'
                        href='/'>
                        <Image
                            src={icons[iconIndex]}
                            alt='Dynamic Crest'
                            width={45}
                            height={30}
                        />
                        <p className='font-bold text-inherit'>José Pedreira</p>
                    </NextLink>
                </NavbarBrand>
                <ul className='hidden lg:flex gap-4 justify-start ml-2'>
                    {siteConfig.navItems.map(
                        (item: { href: string; label: string }) => (
                            <NavbarItem key={item.href}>
                                <NextLink
                                    className={clsx(
                                        linkStyles({ color: "foreground" }),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                                    )}
                                    color='foreground'
                                    href={item.href}>
                                    {item.label}
                                </NextLink>
                            </NavbarItem>
                        )
                    )}
                </ul>
            </NavbarContent>

            <NavbarContent
                className='hidden sm:flex basis-1/5 sm:basis-full'
                justify='end'>
                <NavbarItem className='hidden sm:flex gap-2'>
                    <Link
                        isExternal
                        aria-label='Github'
                        href={siteConfig.links.github}>
                        <GithubIcon className='text-default-500' />
                    </Link>
                    <Link
                        isExternal
                        aria-label='LinkedIn'
                        href={siteConfig.links.linkedin}>
                        <LinkedInIcon className='text-default-500' />
                    </Link>
                    <ThemeSwitch />
                    <Avatar
                        src='/Images/fotoZe2.jpg'
                        style={{ transform: "scaleX(-1)" }}
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
                <Link
                    isExternal
                    aria-label='Github'
                    href={siteConfig.links.github}>
                    <GithubIcon className='text-default-500' />
                </Link>
                <Link
                    isExternal
                    aria-label='LinkedIn'
                    href={siteConfig.links.linkedin}>
                    <LinkedInIcon className='text-default-500' />
                </Link>
                <ThemeSwitch />
                <Avatar
                    src='/Images/fotoZe2.jpg'
                    style={{ transform: "scaleX(-1)" }}
                />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className='mx-4 mt-2 flex flex-col gap-2'>
                    {siteConfig.navMenuItems.map(
                        (item: { label: string }, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index ===
                                                siteConfig.navMenuItems.length -
                                                    1
                                              ? "danger"
                                              : "foreground"
                                    }
                                    href='#'
                                    size='lg'>
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        )
                    )}
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    );
};
