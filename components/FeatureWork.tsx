import React from "react";
import styles from "./style/FeaturedWork.module.css";

type WorkLink = {
    label: string;
    href: string;
};

type FeaturedWorkItem = {
    title: string;
    subtitle?: string;
    role?: string;
    org?: string;
    period?: string;
    location?: string;
    description: string;
    bullets?: string[];
    tech?: string[];
    links?: WorkLink[];
    badge?: string;
};

const featuredWork: FeaturedWorkItem[] = [
    {
        title: "HYBpy",
        subtitle: "Hybrid Modeling Framework",
        badge: "Publication",
        role: "Co-creator / Lead Developer",
        description:
            "Open-source, web-based framework for hybrid modeling of biological systems, enabling the integration of mechanistic (first-principles) models with data-driven machine learning components through a guided and reproducible workflow.",
        bullets: [
            "Implements a structured pipeline for building, training, and evaluating hybrid models",
            "Supports integration of mechanistic models with ML components for biological and bioprocess systems",
            "Validated through literature-based case studies and published as a peer-reviewed journal article",
            "Developed as part of MSc thesis (final grade: 17/20); presented internationally, including conferences in Copenhagen and Lisbon",
        ],
        tech: [
            "Python",
            "TensorFlow",
            "Torch",
            "Docker",
            "Google Cloud",
            "Flask",
            "React",
            "Firebase",
            "Hybrid Modeling",
            "Mechanistic Modeling",
            "Machine Learning",
            "Optimization Methods",
            "Model Evaluation & Validation",
        ],
        links: [
            { label: "Website", href: "https://hybpy.com/" },
            {
                label: "Paper",
                href: "https://www.sciencedirect.com/science/article/pii/S2772508125000626",
            },
            { label: "GitHub", href: "https://github.com/joko1712/HYBpy" },
        ],
    },
    {
        title: "FRAIL NOVA ID",
        subtitle: "Clinical Decision Support System",
        badge: "Research",
        role: "Co-Developer / ML Integration",
        org: "NOVA School of Science and Technology",
        description:
            "Web-based clinical decision support system for frailty and fall risk prediction in elderly populations, integrating machine learning models with an interactive dashboard for real-time patient assessment.",
        bullets: [
            "Developed a full-stack application combining a Dash/Flask frontend with a FastAPI backend for serving ML predictions",
            "Built interactive risk visualizations including gauge charts and violin plots comparing patient data against population distributions",
            "Implemented secure authentication and sarcopenia assessment following EWGSOP2 guidelines",
        ],
        tech: [
            "Python",
            "Dash",
            "Flask",
            "FastAPI",
            "scikit-learn",
            "MLflow",
            "Plotly",
            "Docker",
            "Pandas",
            "XGBoost",
            "LightGBM",
        ],
    },
    {
        title: "Linde (AI Department)",
        subtitle: "Full-stack Internship",
        badge: "Internship",
        role: "Full-stack Developer Intern",
        period: "Dec 2022 – Dec 2023",
        description:
            "Contributed to production-grade web applications and backend systems in an AI-focused environment, including components for conversational agents.",
        bullets: [
            "Implemented and maintained frontend features across internal/client-facing apps",
            "Developed backend components for a conversational agent (API integration + persistence)",
        ],
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "JavaScript",
            "Python",
            "GO",
            "FastAPI",
            "PostgreSQL",
        ],
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

export default function FeaturedWork() {
    return (
        <section id='featured-work' style={ui.section}>
            <div style={ui.headerWrap}>
                {/*
                <p style={ui.sub}>
                    A few projects that best represent what I do across research
                    and production systems.
                </p>
                */}
            </div>

            <div style={ui.grid}>
                {featuredWork.map((item) => (
                    <article key={item.title} style={ui.card}>
                        <header style={ui.cardHeader}>
                            <div style={ui.titleRow}>
                                <h3 style={ui.h3}>{item.title}</h3>
                                {item.badge ? (
                                    <span style={ui.badge}>{item.badge}</span>
                                ) : null}
                            </div>

                            {item.subtitle ? (
                                <p style={ui.subtitle}>{item.subtitle}</p>
                            ) : null}

                            <div style={ui.meta}>
                                {item.role ? <span>{item.role}</span> : null}
                                {item.org ? <span> · {item.org}</span> : null}
                                {item.period ? (
                                    <span> · {item.period}</span>
                                ) : null}
                                {item.location ? (
                                    <span> · {item.location}</span>
                                ) : null}
                            </div>
                        </header>

                        <p style={ui.desc}>{item.description}</p>

                        {item.bullets?.length ? (
                            <ul style={ui.ul}>
                                {item.bullets.map((b) => (
                                    <li key={b} style={ui.li}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {item.tech?.length ? (
                            <div style={ui.techWrap}>
                                {item.tech.map((t) => (
                                    <span key={t} style={ui.techPill}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        {item.links?.length ? (
                            <div style={ui.links}>
                                {item.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={styles.rainbowBtn}>
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

function cxLink(styleObj: React.CSSProperties) {
    return styleObj;
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
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    h3: {
        fontSize: 18,
        margin: 0,
        letterSpacing: "-0.01em",
    },
    badge: {
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        opacity: 0.9,
        whiteSpace: "nowrap",
    },
    subtitle: {
        margin: "8px 0 6px",
        opacity: 0.85,
    },
    meta: {
        fontSize: 13,
        opacity: 0.75,
        lineHeight: 1.4,
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
    techWrap: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 6,
    },
    techPill: {
        fontSize: 12,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.14)",
        opacity: 0.9,
    },
    links: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 14,
    },
    linkBtn: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 12px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.18)",
        textDecoration: "none",
        fontSize: 13,
        opacity: 0.92,
    },
    footer: {
        marginTop: 18,
    },
    primaryCta: {
        display: "inline-block",
        marginTop: 10,
        textDecoration: "none",
        fontWeight: 600,
        opacity: 0.95,
    },
};
