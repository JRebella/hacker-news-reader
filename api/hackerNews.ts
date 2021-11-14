// Based on https://github.com/HackerNews/API

import { ROUTES } from "../config/routes";

export type ItemType = "story" | "job" | "comment" | "poll" | "pollopt";

// base properties shared across all item types - Hacker News Item
export type HNItem = StoryItem | CommentItem | JobItem | PollItem | PollOptionItem;

interface BaseItem {
  id: number;

  by: string;
  type: ItemType;

  time: number;
}

// Specific item types

export interface StoryItem extends BaseItem {
  type: "story";
  title: string;
  score: number;

  // Stories can either have an external URL link or a simple text
  text?: string;
  url?: string;

  kids?: number[];
  descendants: number;
}

export interface CommentItem extends BaseItem {
  type: "comment";
  text: string;

  parent: number;
  kids: number[];
}

export interface JobItem extends BaseItem {
  type: "job";
  title: string;
  score: number;

  // Jobs can either have an external URL link or a simple text
  text?: string;
  url?: string;
}

export interface PollItem extends BaseItem {
  type: "poll";
  score: number;
  title: string;

  parts: number[];
  descendants: number;
}

export interface PollOptionItem extends BaseItem {
  type: "pollopt";
  poll: number;
  text: string;
  score: number;
}

export type StoryCategory = "new" | "top" | "best" | "ask" | "show" | "job";

export const getStoryIds = (category: StoryCategory): Promise<number[]> => {
  return fetch(ROUTES.GET_STORIES(category)).then((response) => response.json?.());
};

export const getHNItem = <ItemType extends HNItem>(itemId: number): Promise<ItemType> => {
  return fetch(ROUTES.GET_ITEM(itemId)).then((response) => response.json?.());
};
