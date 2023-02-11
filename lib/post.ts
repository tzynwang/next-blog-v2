import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { marked } from 'marked';
import hljs from 'highlight.js';
import timeFormat from '@Lib/time-format';
import type {
  TechPostIdTitleDateYearTagContents,
  TechPostIdDateYearTags,
  TechPostTocList,
} from '@Model/GeneralTypes';

type MatterResult = {
  title: string;
  date: Date;
  tag: string[];
};

type TechPost = MatterResult & {
  id: string;
  htmlContent: string;
};

const postsDirectory = path.join(process.cwd(), 'post');

function loadMdxContentById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  return fs.readFileSync(fullPath, 'utf8');
}

export function getContentById(id: string) {
  const fileContents = loadMdxContentById(id);
  return getPostData(fileContents);
}

export function getTitleById(id: string) {
  const fileContents = loadMdxContentById(id);
  return matter(fileContents).data.title as string;
}

export function getTagById(id: string) {
  const fileContents = loadMdxContentById(id);
  return matter(fileContents).data.tag as string[];
}

export function getTocById(id: string): TechPostTocList {
  const fileContents = loadMdxContentById(id);
  const result = marked
    .lexer(fileContents)
    .filter((token) => token.type === 'heading')
    // @ts-ignore
    .map((heading) => ({ depth: heading.depth, text: heading.text }));
  // INFO: 20230211 修復 packages dependency 問題後，需加上 .shift() 把陣列第一位的 md meta 區塊移除
  result.shift();
  return result;
}

/** 20230211 修復 packages dependency 問題後，需手動過濾 md meta 區塊 */
function isMdMetaBlock(text: string): boolean {
  if (text.includes('tag:')) {
    return true;
  }
  return false;
}

export function getPostData(contents: string) {
  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  });
  const renderer = {
    heading(text: string, level: number) {
      if (isMdMetaBlock(text)) {
        return '';
      }
      return `<h${level} id="${text}">${text}</h${level}>`;
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
        text.includes('tag')
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

export function sortPostByDate(raw: TechPost[]) {
  // INFO: new post to old post
  return raw.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsList(): TechPostIdTitleDateYearTagContents {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace('.md', '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${id}.md`);
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
      tag: typedMatterResult.tag.sort(),
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

export function getPostsYearAndTitle(): TechPostIdDateYearTags {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsYearAndTitle = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace('.md', '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      date: matterResult.data.date as Date,
      tag: matterResult.data.tag as string[],
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
