import { Chip } from "@mui/material";
import { JobItem, StoryItem } from "../../../api/hackerNews";
import { CommentKid } from "../../Comment/CommentKid";
import styles from "./_textItem.module.scss";

// @TODO use an HTML purifier to clean the incoming data before using dangerouslySetInnerHTML
const TextItem = ({ itemData }: { itemData: JobItem | StoryItem }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {itemData.score && <Chip className={styles.score} label={itemData.score} />}
        {itemData.title}
      </h1>
      {itemData.text && <div dangerouslySetInnerHTML={{ __html: itemData.text }} />}
      <a href={itemData.url} target="_blank" rel="noreferrer">
        {itemData.url}
      </a>
      <br />
      By{" "}
      <a href={`https://news.ycombinator.com/user?id=${itemData.by}`} target="_blank" rel="noreferrer">
        {itemData.by}
      </a>
      <hr />
      <h5>Comments</h5>
      {itemData.type === "story"
        ? itemData.kids?.map((kidId, index) => {
            return <CommentKid itemId={kidId} key={index} depth={0} />;
          })
        : null}
    </div>
  );
};

export default TextItem;
