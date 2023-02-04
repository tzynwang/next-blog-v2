import { SYNTAX_HIGHLIGHTER_LANGUAGES } from './GeneralModels';

export interface CategoryCountPair {
  categoryName: string;
  count: number;
}

export type CategoryCountPairs = CategoryCountPair[];

export interface ParamsCategory {
  category: string;
}

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