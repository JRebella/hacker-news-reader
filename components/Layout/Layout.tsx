import Head from "next/head";
import React, { ReactNode } from "react";
import styles from "./_styles.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className={styles["app-layout"]}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={styles.body}>{children}</div>

      <footer className={styles.footer}>
        By Juan Rebella - <a href="https://github.com/JRebella">https://github.com/JRebella</a>
      </footer>
    </div>
  );
};

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <span className={styles["app-title"]}>Hacker News</span>
      <span className={styles["username"]}>Built with Next.js/React</span>
    </header>
  );
};

export default Layout;
