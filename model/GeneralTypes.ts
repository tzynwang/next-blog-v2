import { SYNTAX_HIGHLIGHTER_LANGUAGES } from './GeneralModels';

export interface TagCountPair {
  tagName: string;
  count: number;
}

export type TagCountPairs = TagCountPair[];

export interface SeriesPost {
  postUrl: string;
  postTitle: string;
}

export type SeriesPosts = SeriesPost[];

export interface TableOfContentItem {
  to: string;
  postSubTitle: string;
}

export type TableOfContents = TableOfContentItem[];

export type SyntaxHighlighterLanguage =
  typeof SYNTAX_HIGHLIGHTER_LANGUAGES[number];

export interface TechPostIdDateYearTag {
  id: string;
  date: string;
  year: string;
  tag: string[];
}

export type TechPostIdDateYearTags = TechPostIdDateYearTag[];

export interface TechPostIdTitleDateYearTagContent {
  id: string;
  title: string;
  date: string;
  year: string;
  tag: string[];
  htmlContent: string;
}

export type TechPostIdTitleDateYearTagContents =
  TechPostIdTitleDateYearTagContent[];

export type HomePageProps = {
  allPostsData: TechPostIdTitleDateYearTagContents;
};
