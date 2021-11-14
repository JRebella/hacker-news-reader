import { Skeleton } from "@mui/material";
import { CommentItem, HNItem, PollItem, PollOptionItem } from "../../api/hackerNews";
import TextItem from "./TextItem/TextItem";
import styles from "./_expandedItem.module.scss";

type Props = {
  itemData?: HNItem;
};

export const HNItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width="100%" />
      <Skeleton variant="rectangular" height={120} width="100%" />
      <Skeleton width="30%" />
    </div>
  );
};

export const ExpandedHNItem = ({ itemData }: Props) => {
  if (!itemData) {
    return <HNItemSkeleton />;
  }

  switch (itemData.type) {
    case "job":
      return <TextItem itemData={itemData} />;
    case "story":
      return <TextItem itemData={itemData} />;
    case "comment":
      return <Comment itemData={itemData} />;
    case "poll":
      return <Poll itemData={itemData} />;
    case "pollopt":
      return <PollOption itemData={itemData} />;
  }
};

//@TODO
const Comment = ({ itemData }: { itemData: CommentItem }) => {
  return <div>{itemData.text}</div>;
};

//@TODO
const Poll = ({ itemData }: { itemData: PollItem }) => {
  return <div>Unsupported item type</div>;
};

//@TODO
const PollOption = ({ itemData }: { itemData: PollOptionItem }) => {
  return <div>Unsupported item type</div>;
};
