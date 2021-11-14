import { useQuery } from "react-query";
import { getStoryIds, StoryCategory } from "../api/hackerNews";

const HN_CATEGORY_QUERY_FRESH_TIME_IN_MILLISECONDS = 1 * 60 * 1000; // 1 minute

export const useItemCategory = (category: StoryCategory = "top") => {
  return useQuery<number[], Error>(category, () => getStoryIds(category), {
    staleTime: HN_CATEGORY_QUERY_FRESH_TIME_IN_MILLISECONDS,
  });
};
