import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { marked } from 'marked';
import timeFormat from '@Lib/time-format';
import type {
  TechPostIdTitleDateYearCategoryContents,
  TechPostIdDateYearCategories,
} from '@Model/GeneralTypes';

type MatterResult = {
  title: string;
  date: Date;
  category: string[];
};

type Post = MatterResult & {
  id: string;
  htmlContent: string;
};

const postsDirectory = path.join(process.cwd(), 'post');

export function getContentById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return getPostData(fileContents);
}

export function getTitleById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents).data.title as string;
}

export function getPostData(contents: string) {
  const renderer = {
    heading(text: string, level: number) {
      return `<h${level}>${text}</h${level}>`;
    },
    hr() {
      return '';
    },
    image(href: string, _title: string, altText: string) {
      return `<img src="${href}" alt="${altText}">`;
    },
    link(href: string, _title: string, text: string) {
      return `<a href="${href}" target="_blank" class="underline">${text}</a>`;
    },
    list(body: string, ordered: boolean) {
      if (ordered) {
        return `<ol>${body}</ol>`;
      }
      return `<ul>${body}</ul>`;
    },
    paragraph(text: string) {
      if (
        text.includes('title') &&
        text.includes('date') &&
        text.includes('category')
      ) {
        return '';
      }
      if (text.startsWith('<img')) {
        return text;
      }
      return `<p>${text}</p>`;
    },
  };
  marked.use({ renderer });
  return marked.parse(contents);
}

export function sortPostByDate(raw: Post[]) {
  // INFO: new post to old post
  return raw.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsList(): TechPostIdTitleDateYearCategoryContents {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace('.mdx', '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const htmlContent = getPostData(fileContents);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const typedMatterResult = matterResult.data as MatterResult;

    // Combine the data with the id
    return {
      id,
      title: typedMatterResult.title,
      date: typedMatterResult.date,
      category: typedMatterResult.category.sort(),
      htmlContent,
    };
  });

  // Return result
  return sortPostByDate(allPostsData).map((post) => ({
    ...post,
    date: timeFormat(post.date),
    year: dayjs(post.date).format('YYYY'),
  }));
}

export function getPostsYearAndTitle(): TechPostIdDateYearCategories {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsYearAndTitle = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace('.mdx', '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      date: matterResult.data.date as Date,
      category: matterResult.data.category as string[],
    };
  });

  // Return result
  return allPostsYearAndTitle
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) => ({
      ...p,
      date: timeFormat(p.date),
      year: dayjs(p.date).format('YYYY'),
    }));
}
