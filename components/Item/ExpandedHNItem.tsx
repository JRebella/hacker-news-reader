import { Skeleton } from "@mui/material";
import { CommentItem, HNItem, JobItem, PollItem, PollOptionItem, StoryItem } from "../../api/hackerNews";
import styles from "./_expandedHNItem.module.scss";

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

// @TODO use an HTML purifier to clean the incoming data before using dangerouslySetInnerHTML
const TextItem = ({ itemData }: { itemData: JobItem | StoryItem }) => {
  return (
    <div>
      <h1>{itemData.title}</h1>
      <h5>By {itemData.by}</h5>

      {itemData.text && <div dangerouslySetInnerHTML={{ __html: itemData.text }} />}

      <a href={itemData.url} target="_blank" rel="noreferrer">
        {itemData.url}
      </a>
    </div>
  );
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
