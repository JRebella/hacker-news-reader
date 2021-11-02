import { StoryCategory } from "../api/hackerNews";

const API_VERSION = "v0";
const BASE_URL = `https://hacker-news.firebaseio.com/${API_VERSION}`;

export const ROUTES = {
  GET_STORIES: (category: StoryCategory) => `${BASE_URL}/${storyCategoryURLMap[category]}.json`,

  GET_ITEM: (itemId: number) => `${BASE_URL}/item/${itemId}.json`,
};

const storyCategoryURLMap: Record<StoryCategory, string> = {
  ask: "askstories",
  best: "beststories",
  job: "jobstories",
  new: "newstories",
  show: "showstories",
  top: "topstories",
};
