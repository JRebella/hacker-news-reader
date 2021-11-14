import { Button } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import { StoryCategory } from "../api/hackerNews";
import ItemGrid from "../components/ItemGrid/ItemGrid";
import { useItemCategory } from "../hooks/useItemCategory";
import styles from "../styles/Home.module.scss";

const ITEMS_PER_PAGE = 20;

const Home: NextPage = () => {
  const {
    query: { category },
  } = useRouter();

  const [showAmount, setShowAmount] = useState(ITEMS_PER_PAGE);
  const { data: itemIds } = useItemCategory(category as StoryCategory);

  const fetchMore = () => {
    setShowAmount(showAmount + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    setShowAmount(ITEMS_PER_PAGE);
  }, [category]);
  return (
    <div className={styles.container}>
      <ItemGrid itemIds={itemIds?.slice(0, showAmount)} />

      <Button onClick={fetchMore}>Show more</Button>
    </div>
  );
};

export default Home;
