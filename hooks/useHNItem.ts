import { useQuery } from "react-query";
import { getHNItem, HNItem } from "../api/hackerNews";

const HN_ITEM_QUERY_FRESH_TIME_IN_MILLISECONDS = 20 * 60 * 1000; // 20 minutes

export const useHNItem = <ItemType extends HNItem>(itemId: number, isReady?: boolean) => {
  return useQuery<ItemType, Error>("" + itemId + (isReady ? "r" : ""), () => getHNItem<ItemType>(itemId), {
    staleTime: HN_ITEM_QUERY_FRESH_TIME_IN_MILLISECONDS, // 20 minutes
  });
};
