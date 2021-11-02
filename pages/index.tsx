import type { NextPage } from "next";
import ItemGrid from "../components/ItemGrid/ItemGrid";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ItemGrid itemIds={[29082526, 29085640, 29079096, 29085301]} />
    </div>
  );
};

export default Home;
