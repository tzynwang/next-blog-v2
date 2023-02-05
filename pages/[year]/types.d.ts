import type { TechPostTocList, SeriesPosts } from '@Model/GeneralTypes';

export interface SinglePostPageProps {
  postTitle: string;
  postContent: string;
  postTag: string[];
  postToc: TechPostTocList;
  postSeries: SeriesPosts;
}

interface StaticPropsParams {
  params: {
    id: string;
    year: string;
  };
}
