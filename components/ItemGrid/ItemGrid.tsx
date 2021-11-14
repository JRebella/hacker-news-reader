import { CompactHNItem, CompactHNItemSkeleton } from "../CompactItem/CompactItem";
import styles from "./_itemGrid.module.scss";

type Props = {
  itemIds?: number[];
};

const ItemGrid = ({ itemIds }: Props) => {
  return (
    <div className={styles.container}>
      {itemIds ? itemIds.map((id) => <CompactHNItem itemId={id} key={id} />) : <SkeletonGrid />}
    </div>
  );
};

const SkeletonGrid = () => {
  const items = [];

  for (let i = 0; i < 20; i++) {
    items.push(<CompactHNItemSkeleton key={i} />);
  }
  return <>{items}</>;
};

export default ItemGrid;
