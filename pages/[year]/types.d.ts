import type { TechPostTocList, SeriesPosts } from '@Model/GeneralTypes';

export interface SinglePostPageProps {
  postTitle: string;
  postDate: string;
  postTag: string[];
  postContent: string;
  postToc: TechPostTocList;
  postSeries: SeriesPosts;
}

interface StaticPropsParams {
  params: {
    id: string;
    year: string;
  };
}
