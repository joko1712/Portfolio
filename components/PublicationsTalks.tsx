import React from "react";
import styles from "./style/FeaturedWork.module.css";

type PubLink = { label: string; href: string };

type Publication = {
    title: string;
    venue: string;
    year: string;
    doi?: string;
    description: string;
    bullets?: string[];
    links?: PubLink[];
    badge?: string;
};

const publications: Publication[] = [
    {
        title: "HYBpy: A web-based framework for hybrid modeling of biological systems",
        venue: "Digital Chemical Engineering, Vol. 17",
        year: "2025",
        doi: "10.1016/j.dche.2025.100278",
        badge: "Publication",
        description:
            "Peer-reviewed journal article introducing HYBpy and demonstrating the framework through literature case studies in biological systems.",
        bullets: [
            "Peer-reviewed journal publication (first author)",
            "Demonstrated through case studies in biological systems",
            "Showcased at international conferences, including a lecture in Lisbon",
        ],
        links: [
            {
                label: "Paper",
                href: "https://www.sciencedirect.com/science/article/pii/S2772508125000626",
            },
        ],
    },
];

export default function PublicationsTalks() {
    return (
        <section id='publications-talks' style={ui.section}>
            <div style={ui.headerWrap}>
                <p style={ui.sub}>
                    Peer-reviewed work and selected conference presentations.
                </p>
            </div>

            <div style={ui.grid}>
                {publications.map((p) => (
                    <article key={p.title} style={ui.card}>
                        <header style={ui.cardHeader}>
                            <div style={ui.titleRow}>
                                <h3 style={ui.h3}>{p.title}</h3>
                                {p.badge ? (
                                    <span style={ui.badge}>{p.badge}</span>
                                ) : null}
                            </div>

                            <div style={ui.meta}>
                                <span>{p.venue}</span>
                                <span> · {p.year}</span>
                                {p.doi ? <span> · DOI: {p.doi}</span> : null}
                            </div>
                        </header>

                        <p style={ui.desc}>{p.description}</p>

                        {p.bullets?.length ? (
                            <ul style={ui.ul}>
                                {p.bullets.map((b) => (
                                    <li key={b} style={ui.li}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {p.links?.length ? (
                            <div style={ui.links}>
                                {p.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={styles.rainbowBtn}
                                        style={ui.linkBtn}>
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
}

const ui: Record<string, React.CSSProperties> = {
    section: {
        padding: "64px 16px",
        maxWidth: 1100,
        margin: "0 auto",
    },
    headerWrap: {
        marginBottom: 24,
    },
    h2: {
        fontSize: 28,
        margin: 0,
        letterSpacing: "-0.02em",
    },
    sub: {
        marginTop: 8,
        marginBottom: 0,
        opacity: 0.8,
        lineHeight: 1.5,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 16,
    },
    card: {
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 16,
        padding: 18,
        background: "rgba(255,255,255,0.03)",
    },
    cardHeader: {
        marginBottom: 10,
    },
    titleRow: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
    },
    h3: {
        fontSize: 18,
        margin: 0,
        letterSpacing: "-0.01em",
        lineHeight: 1.35,
    },
    badge: {
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        opacity: 0.9,
        whiteSpace: "nowrap",
        marginTop: 2,
    },
    meta: {
        fontSize: 13,
        opacity: 0.75,
        lineHeight: 1.4,
        marginTop: 10,
    },
    desc: {
        marginTop: 12,
        marginBottom: 10,
        lineHeight: 1.6,
        opacity: 0.9,
    },
    ul: {
        marginTop: 8,
        marginBottom: 12,
        paddingLeft: 18,
    },
    li: {
        marginBottom: 6,
        lineHeight: 1.5,
        opacity: 0.9,
    },
    links: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 14,
    },
    linkBtn: {
        padding: "8px 12px",
        borderRadius: 12,
        textDecoration: "none",
        fontSize: 13,
    },
};
