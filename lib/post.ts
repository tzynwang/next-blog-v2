import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { marked } from 'marked';

type MatterResult = {
  title: string;
  date: string;
  category: string[];
};

const postsDirectory = path.join(process.cwd(), 'post');

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

export function getPostsList() {
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
      category: typedMatterResult.category.sort(),
      htmlContent,
    };
  });

  // Return result
  return allPostsData;
}
