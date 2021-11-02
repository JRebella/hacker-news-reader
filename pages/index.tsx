import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { StoryCategory } from "../api/hackerNews";
import ItemGrid from "../components/ItemGrid/ItemGrid";
import { useItemCategories } from "../hooks/useItemCategories";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const {
    query: { category },
  } = useRouter();

  const { itemIds } = useItemCategories(category as StoryCategory);
  return (
    <div className={styles.container}>
      <ItemGrid itemIds={itemIds?.slice(0, 30)} />
    </div>
  );
};

export default Home;
