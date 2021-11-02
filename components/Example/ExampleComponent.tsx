import { Button } from "@mui/material";
import styles from "./_styles.module.scss";

type Props = {
  text: string;
};

const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <Button variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
};

export default ExampleComponent;
