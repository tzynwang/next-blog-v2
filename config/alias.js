import path from 'path';

const alias = {
  '@Asset': path.join(process.cwd(), 'asset'),
  '@Component': path.join(process.cwd(), 'component'),
  '@Hook': path.join(process.cwd(), 'hook'),
  '@Lang': path.join(process.cwd(), 'lang'),
  '@Lib': path.join(process.cwd(), 'lib'),
  '@Model': path.join(process.cwd(), 'model'),
  '@Style': path.join(process.cwd(), 'style'),
  '@Theme': path.join(process.cwd(), 'theme'),
};

export default alias;
