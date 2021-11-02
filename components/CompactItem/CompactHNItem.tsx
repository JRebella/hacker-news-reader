import { Skeleton } from "@mui/material";
import { JobItem, PollItem, StoryItem } from "../../api/hackerNews";
import { useHNItem } from "../../hooks/useHNItem";
import styles from "./_compactHNItem.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import URLParser from "url-parse";
import { useRouter } from "next/dist/client/router";
import { get } from "lodash";
import moment from "moment";
import { getTimeDifference } from "../../util/util";

type Props = {
  itemId: number;
};

export const CompactHNItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles["score-column"]}>
        <Skeleton variant="rectangular" height="100%" width="80%" />
      </div>
      <div className={styles["text-column"]}>
        <Skeleton width={600} />
        <Skeleton width="30%" />
      </div>
    </div>
  );
};

export const CompactHNItem = ({ itemId }: Props) => {
  const { isLoading, itemData } = useHNItem<StoryItem | JobItem | PollItem>(itemId);

  const { push } = useRouter();

  if (isLoading || !itemData) {
    return <CompactHNItemSkeleton />;
  }

  const onClickTitle = () => {
    const url = get(itemData, "url");
    if (url) {
      window.open(url, "_blank");
    } else {
      push(`/item/${itemData.id}`);
    }
  };

  return (
    <div className={`${styles.container} ${styles.loaded}`}>
      <div className={styles["score-column"]}>
        <ArrowDropUpIcon className={styles.icon} />
        <span className={styles.amount}>{itemData.score}</span>
      </div>
      <div className={styles["right-column"]}>
        <div className={styles.title}>
          <a onClick={onClickTitle}>{itemData.title}</a>{" "}
          {itemData.type !== "poll" && itemData.url && (
            <span className={styles["url-container"]}>
              (
              <a href={itemData.url} target="_blank" rel="noreferrer">
                {URLParser(itemData.url).hostname}
              </a>
              )
            </span>
          )}
        </div>

        <div className={styles.subtitles}>
          by{" "}
          <a href={`https://news.ycombinator.com/user?id=${itemData.by}`} target="_blank" rel="noreferrer">
            {itemData.by}
          </a>{" "}
          {itemData.type !== "job" && (
            <a
              onClick={() => {
                push(`/item/${itemData.id}`);
              }}
            >
              | {itemData.descendants} comments
            </a>
          )}{" "}
          | {getTimeDifference(moment.unix(itemData.time))}
        </div>
      </div>
    </div>
  );
};
