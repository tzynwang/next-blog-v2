import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface MatterResultI {
  title: string;
  date: string;
  category: string[];
}

const postsDirectory = path.join(process.cwd(), 'post');

export function getPostData(contents: string) {
  return marked.parse(contents);
}

export function getPostsList() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const typedMatterResult = matterResult.data as MatterResultI;
    const htmlContent = getPostData(matterResult.content);

    // Combine the data with the id
    return {
      id,
      ...typedMatterResult,
      title: typedMatterResult.title,
      date: typedMatterResult.date,
      category: typedMatterResult.category.join(','),
      htmlContent,
    };
  });

  // Return result
  return allPostsData;
}
