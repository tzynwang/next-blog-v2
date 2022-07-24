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
      return `<h${level} class="text-${4 - level}xl">${text}</h${level}>`;
    },
    image(href: string, title: string, altText: string) {
      return `<img src="${href}" alt="${altText}" class="img-custom-class">`;
    },
    link(href: string, title: string, text: string) {
      return `<a href="${href}" target="_blank" class="underline">${text}</a>`;
    },
    list(body: string, ordered: boolean) {
      if (ordered) {
        return `<ol class="list-decimal list-inside">${body}</ol>`;
      }
      return `<ul class="list-disc list-inside">${body}</ul>`;
    },
    paragraph(text: string) {
      if (text.startsWith('<img')) {
        return `<div class="img-container-custom-class">${text}</div>`;
      }
      return `<p class="text-base">${text}</p>`;
    },
  };
  marked.use({ renderer });
  return marked.parse(contents);
}

export function getPostsList() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames.map((folderName) => {
    // Remove ".md" from file name to get id

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${folderName}/index.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const typedMatterResult = matterResult.data as MatterResult;
    const htmlContent = getPostData(matterResult.content);

    // Combine the data with the id
    return {
      id: folderName,
      title: typedMatterResult.title,
      date: typedMatterResult.date,
      category: typedMatterResult.category.join(','),
      htmlContent,
    };
  });

  // Return result
  return allPostsData;
}
