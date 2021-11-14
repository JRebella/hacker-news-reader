import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { JobItem, PollItem, StoryItem } from "../../api/hackerNews";
import { ExpandedHNItem } from "../../components/Item/ExpandedItem";
import { useHNItem } from "../../hooks/useHNItem";
import styles from "../../styles/Item.module.scss";

const ItemPage: NextPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const itemId = parseInt(id as string);

  const { data: itemData } = useHNItem<StoryItem | JobItem | PollItem>(itemId, isReady);

  return (
    <div className={styles.container}>
      <ExpandedHNItem itemData={itemData} />
    </div>
  );
};

export default ItemPage;
