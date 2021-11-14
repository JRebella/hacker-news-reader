import { Skeleton } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { JobItem, PollItem, StoryItem } from "../api/hackerNews";
import { useHNItem } from "../hooks/useHNItem";
import styles from "../styles/Item.module.scss";

const ItemPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const itemId = parseInt(id as string);

  const { isLoading, data: itemData } = useHNItem<StoryItem | JobItem | PollItem>(itemId);

  if (isLoading || !itemData) {
    return <ItemPageSkeleton />;
  }

  return <div className={styles.container}>item page {itemId}</div>;
};

const ItemPageSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Skeleton width="100%" />
        <Skeleton variant="rectangular" height={120} width="100%" />
        <Skeleton width="30%" />
      </div>
    </div>
  );
};

export default ItemPage;
