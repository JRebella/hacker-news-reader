import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { JobItem, PollItem, StoryItem } from "../../api/hackerNews";
import { ExpandedHNItem } from "../../components/Item/ExpandedHNItem";
import { useHNItem } from "../../hooks/useHNItem";
import styles from "../../styles/Item.module.scss";

const ItemPage: NextPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const itemId = parseInt(id as string);

  const { itemData } = useHNItem<StoryItem | JobItem | PollItem>(itemId, isReady);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <ExpandedHNItem itemData={itemData} />
      </div>
    </div>
  );
};

export default ItemPage;
