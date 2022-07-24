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
