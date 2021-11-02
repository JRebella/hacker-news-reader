import type { NextPage } from "next";
import ExampleComponent from "../components/Example/ExampleComponent";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ExampleComponent text="test" />
    </div>
  );
};

export default Home;
