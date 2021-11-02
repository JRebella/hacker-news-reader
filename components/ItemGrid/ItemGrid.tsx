import CompactHNItem from "../Item/CompactHNItem";
import styles from "./_itemGrid.module.scss";

type Props = {
  itemIds: number[];
};

const ItemGrid = ({ itemIds }: Props) => {
  return (
    <div className={styles.container}>
      {itemIds.map((id) => (
        <CompactHNItem itemId={id} key={id} />
      ))}
    </div>
  );
};

export default ItemGrid;
