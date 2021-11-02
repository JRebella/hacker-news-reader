import { useEffect, useState } from "react";
import { getStoryIds, StoryCategory } from "../api/hackerNews";
import { PartialRecord } from "../util/util";

export const useItemCategories = (category: StoryCategory = "top") => {
  const [itemIdsByCategory, setItemIds] = useState<PartialRecord<StoryCategory, number[]>>({});

  useEffect(() => {
    getStoryIds(category).then((itemIds) => {
      setItemIds({ ...itemIdsByCategory, [category]: itemIds });
    });
  }, [category]);

  return {
    itemIds: itemIdsByCategory[category],
  };
};
