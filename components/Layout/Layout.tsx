import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { ReactNode } from "react";
import { StoryCategory } from "../../api/hackerNews";
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
  const {
    push,
    query: { category },
  } = useRouter();

  const onChangeCategory = (category?: StoryCategory) => () => {
    if (!category) {
      push({
        pathname: "/",
      });
    } else {
      push({
        pathname: "/",
        query: { category },
      });
    }
  };

  return (
    <header className={`${styles.header}`}>
      <span className={styles["app-title"]}>Hacker News</span>

      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={onChangeCategory()} variant={!category ? "contained" : undefined}>
            Top
          </Button>
          <Button onClick={onChangeCategory("new")} variant={category === "new" ? "contained" : undefined}>
            New
          </Button>
          <Button onClick={onChangeCategory("ask")} variant={category === "ask" ? "contained" : undefined}>
            Ask
          </Button>
          <Button onClick={onChangeCategory("best")} variant={category === "best" ? "contained" : undefined}>
            Best
          </Button>
          <Button onClick={onChangeCategory("job")} variant={category === "job" ? "contained" : undefined}>
            Job
          </Button>
          <Button onClick={onChangeCategory("show")} variant={category === "show" ? "contained" : undefined}>
            Show
          </Button>
        </ButtonGroup>
      </div>

      <span className={styles["username"]}>
        By Juan Rebella -{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/JRebella">
          JRebella
        </a>
      </span>
    </header>
  );
};

export default Layout;
