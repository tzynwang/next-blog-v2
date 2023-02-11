import type { TechPostTocList, SeriesPosts } from '@Model/GeneralTypes';
import type { TechPost } from '@contentlayer/generated/types';

export interface SinglePostPageProps {
  postTitle: string;
  postContent: string;
  postTag: string[];
  postToc: TechPostTocList;
  postSeries: SeriesPosts;
  contentLayerPostContent: TechPost | undefined;
  contentMdx: string
}

export interface StaticPropsParams {
  params: {
    id: string;
    year: string;
  };
}

export type { TechPost };
