export interface SinglePostPageProps {
  postTitle: string;
  postContent: string;
}

interface StaticPropsParams {
  params: { year: string; id: string };
}
