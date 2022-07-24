import type { NextPage } from 'next';

export type AllPostsData = {
  htmlContent: string;
  title: string;
  date: string;
  category: string;
  id: string;
}[];

export type HomeProps = {
  allPostsDate: AllPostsData;
};

export { NextPage };
