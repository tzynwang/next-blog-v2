import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const TechPost = defineDocumentType(() => ({
  name: 'TechPost',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (file) => `/post/${file._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'post',
  documentTypes: [TechPost],
});
