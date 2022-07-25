export type PostData = {
  id: string;
  title: string;
  date: string;
  category: string[];
  htmlContent: string;
};

export type AllPostsData = Array<PostData>;

export type HomeProps = {
  allPostsData: AllPostsData;
};
