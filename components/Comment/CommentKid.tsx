import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Skeleton } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { CommentItem } from "../../api/hackerNews";
import { useHNItem } from "../../hooks/useHNItem";
import { getTimeDifference } from "../../util/util";
import styles from "./_comment.module.scss";

// To be used in item page below any items that contain kids, will add kids of this kid recursively

type Props = {
  itemId: number;
  depth: number;
};

export const CommentSkeleton = ({ isExpanded }: { isExpanded: boolean }) => {
  if (!isExpanded) {
    return (
      <div className={styles.container}>
        <Skeleton width="100%" />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Skeleton width="100%" />
      <Skeleton variant="rectangular" height={120} width="100%" />
      <Skeleton width="30%" />
    </div>
  );
};

export const CommentKid = ({ itemId, depth }: Props) => {
  const { data: itemData } = useHNItem<CommentItem>(itemId);

  const [isExpanded, setIsExpanded] = useState(depth < 2 ? true : false);

  if (!itemData) {
    return <CommentSkeleton isExpanded={isExpanded} />;
  }

  return (
    <div className={styles.container} style={{ marginLeft: depth > 0 ? "20px" : undefined }}>
      <div className={`${styles.header} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <IconButton className={styles["expand-button"]} onClick={() => setIsExpanded(!isExpanded)}>
          [{isExpanded ? <RemoveIcon /> : <AddIcon />}]
        </IconButton>
        {itemData.by} | {getTimeDifference(moment.unix(itemData.time))}
      </div>

      <div className={`${styles.body} ${isExpanded ? "" : styles.collapsed}`}>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: itemData.text }}></div>
        <div className={`${styles.kids}`}>
          {itemData.kids?.map((kidId, index) => {
            return <CommentKid key={index} itemId={kidId} depth={depth + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};
