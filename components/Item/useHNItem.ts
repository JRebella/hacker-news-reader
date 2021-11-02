import { useEffect, useState } from "react";
import { getHNItem, HNItem } from "../../api/hackerNews";

// Small hook to fetch and keep track of a Hacker News item

export type UseHNItem = <ExpectedItemIdType extends HNItem = HNItem>(
  itemId: number
) => {
  itemData: ExpectedItemIdType | null;
  isLoading: boolean;
};

export const useHNItem: UseHNItem = <ItemType extends HNItem>(itemId: number) => {
  const [itemData, setItemData] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getHNItem(itemId).then((item) => {
      setItemData(item as ItemType);
      setIsLoading(false);
    });
  }, []);

  return {
    itemData,
    isLoading,
  };
};
