import { useEffect, useState } from "react";
import { getHNItem, HNItem } from "../api/hackerNews";

// Small hook to fetch and keep track of a Hacker News item

export type UseHNItem = <ExpectedItemIdType extends HNItem = HNItem>(
  itemId: number,
  isReady?: boolean
) => {
  itemData: ExpectedItemIdType | null;
  isLoading: boolean;
};

export const useHNItem: UseHNItem = <ItemType extends HNItem>(itemId: number, isReady?: boolean) => {
  const [itemData, setItemData] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isReady === false) return;
    getHNItem(itemId).then((item) => {
      setItemData(item as ItemType);
      setIsLoading(false);
    });
  }, [isReady]);

  return {
    itemData,
    isLoading,
  };
};
