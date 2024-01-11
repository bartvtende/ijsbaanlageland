import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import IjsbaanOpen from "../components/IjsbaanOpen";

const showBanner = new Date() < new Date("2024-01-12");

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg"
                          to="/contact">
                        Word lid
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="IJsbaan Lageland"
            description="IJsbaan Lageland-Hamweg - IJsbaan voor Lageland, Harkstede, Scharmer en Meerstad">
            {showBanner && <IjsbaanOpen/>}
            <HomepageHeader/>

            <div className="container container--fluid margin-vert--lg">
                <div
                    className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
                    <div className="col col--8">
                        <h2>Welkom</h2>
                        <p>IJsbaan Lageland-Hamweg gelegen aan de Hamweg in Lageland is voor schaatsers uit Lageland,
                            Harkstede, Scharmer, Meerstad en omstreken.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
