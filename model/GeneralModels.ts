import type {
  CategoryCountPairs,
  SeriesPosts,
  TableOfContents,
} from './GeneralTypes';

/** 若 i18n.t 中帶有需要動態替換的內容，以此符號標註替換位置 */
export const REPLACEMENT = `{$}`;

/** 根據此比例來判定元件 PostCard 要進入 RECTANGLE 或 SQUARE 狀態 */
export const POST_CARD_DIMENSION_RATIO = 1.75;

/** 設定 dayjs().format() 的日期格式 */
export const DATE_TIME_FORMAT = 'YYYY-MM-DD';

/** 元件 Breadcrumbs 預設的分隔符號 */
export const BREADCRUMBS_DIVIDER = '/';

/** 套件 react-syntax-highlighter 支援的語言選項清單 */
export const SYNTAX_HIGHLIGHTER_LANGUAGES = [
  'oneC',
  'abnf',
  'accesslog',
  'actionscript',
  'ada',
  'angelscript',
  'apache',
  'applescript',
  'arcade',
  'arduino',
  'armasm',
  'asciidoc',
  'aspectj',
  'autohotkey',
  'autoit',
  'avrasm',
  'awk',
  'axapta',
  'bash',
  'basic',
  'bnf',
  'brainfuck',
  'cLike',
  'c',
  'cal',
  'capnproto',
  'ceylon',
  'clean',
  'clojureRepl',
  'clojure',
  'cmake',
  'coffeescript',
  'coq',
  'cos',
  'cpp',
  'crmsh',
  'crystal',
  'csharp',
  'csp',
  'css',
  'd',
  'dart',
  'delphi',
  'diff',
  'django',
  'dns',
  'dockerfile',
  'dos',
  'dsconfig',
  'dts',
  'dust',
  'ebnf',
  'elixir',
  'elm',
  'erb',
  'erlangRepl',
  'erlang',
  'excel',
  'fix',
  'flix',
  'fortran',
  'fsharp',
  'gams',
  'gauss',
  'gcode',
  'gherkin',
  'glsl',
  'gml',
  'go',
  'golo',
  'gradle',
  'groovy',
  'haml',
  'handlebars',
  'haskell',
  'haxe',
  'hsp',
  'htmlbars',
  'http',
  'hy',
  'inform7',
  'ini',
  'irpf90',
  'isbl',
  'java',
  'javascript',
  'jbossCli',
  'json',
  'juliaRepl',
  'julia',
  'kotlin',
  'lasso',
  'latex',
  'ldif',
  'leaf',
  'less',
  'lisp',
  'livecodeserver',
  'livescript',
  'llvm',
  'lsl',
  'lua',
  'makefile',
  'markdown',
  'mathematica',
  'matlab',
  'maxima',
  'mel',
  'mercury',
  'mipsasm',
  'mizar',
  'mojolicious',
  'monkey',
  'moonscript',
  'n1ql',
  'nginx',
  'nim',
  'nix',
  'nodeRepl',
  'nsis',
  'objectivec',
  'ocaml',
  'openscad',
  'oxygene',
  'parser3',
  'perl',
  'pf',
  'pgsql',
  'phpTemplate',
  'php',
  'plaintext',
  'pony',
  'powershell',
  'processing',
  'profile',
  'prolog',
  'properties',
  'protobuf',
  'puppet',
  'purebasic',
  'pythonRepl',
  'python',
  'q',
  'qml',
  'r',
  'reasonml',
  'rib',
  'roboconf',
  'routeros',
  'rsl',
  'ruby',
  'ruleslanguage',
  'rust',
  'sas',
  'scala',
  'scheme',
  'scilab',
  'scss',
  'shell',
  'smali',
  'smalltalk',
  'sml',
  'sqf',
  'sql',
  'sqlMore',
  'stan',
  'stata',
  'step21',
  'stylus',
  'subunit',
  'swift',
  'taggerscript',
  'tap',
  'tcl',
  'thrift',
  'tp',
  'twig',
  'typescript',
  'vala',
  'vbnet',
  'vbscriptHtml',
  'vbscript',
  'verilog',
  'vhdl',
  'vim',
  'x86asm',
  'xl',
  'xml',
  'xquery',
  'yaml',
  'zephir',
] as const;

export enum ROUTE {
  HOME = '/',
  TECH_BLOG = '/archive',
  TECH_BLOG_CATEGORY = '/category',
  TECH_BLOG_SINGLE_POST = '/:year/:postTitle',
  SNIPPET = '/snippet',
  BLOG = '/bookshelf',
}

export const MOCK_COVER_IMAGE =
  'linear-gradient(45deg, rgba(120,119,126,1) 0%, rgba(112,112,177,1) 35%, rgba(143,196,207,1) 100%)';

export const MOCK_POST_TITLE =
  '(MOCK) 透過 compositionstart、compositionend 來暫停驗證輸入內容';

export const MOCK_POST_TITLE_1 =
  '(MOCK) Dialogs, modality and popovers seem similar. How are they different?';

export const MOCK_POST_TITLE_2 =
  '(MOCK) 鐵人賽 Modern Web 組「我們可以不要 component library 了嗎？」第 22 - 30 天';

export const MOCK_POST_CATEGORIES = ['MOCK_MaterialUI', 'MOCK_TypeScript'];

export const MOCK_POST_CATEGORIES_2 = ['MOCK_CSS', 'MOCK_JavaScript'];

export const MOCK_POST_CATEGORY_PAIRS: CategoryCountPairs =
  MOCK_POST_CATEGORIES.map((categoryName, index) => ({
    categoryName,
    count: index + 7,
  }));

export const MOCK_POST_CATEGORY_PAIRS_2: CategoryCountPairs =
  MOCK_POST_CATEGORIES_2.map((categoryName, index) => ({
    categoryName,
    count: index + 3,
  }));

export const MOCK_POST_DATE = new Date().toString();

export const MOCK_POST_LISTS = Array.from(Array(5).keys());

export const MOCK_SERIES_POSTS: SeriesPosts = Array.from(Array(4).keys()).map(
  () => ({
    postUrl: ROUTE.TECH_BLOG_SINGLE_POST,
    postTitle: MOCK_POST_TITLE_2,
  })
);

export const MOCK_TABLE_OF_CONTENTS: TableOfContents = Array.from(
  Array(4).keys()
).map((num) => ({
  to: `SUB_TITLE_ANCHOR_${num}`,
  postSubTitle: `POST_SUB_TITLE_${num}`,
}));

export const MOCK_CSS_CODE = `a {
  text-decoration: none;
  transition: text-decoration 0.2s ease;
}

a:hover {
  text-decoration: underline;
}`;

export const MOCK_JSON_CODE = `{
  "scripts": {
    "dev": "make dev",
    "build": "make build",
    "preview": "make preview",
    "deploy": "make deploy"
  }
}`;

export const MOCK_MAKEFILE_CODE = `include .env

# open vite dev server
.PHONY: dev
dev:
    npx vite

# build vite app with production setting
.PHONY: build
build:
    npx tsc && npx vite build

# preview build result locally
.PHONY: preview
preview:
    npx vite preview

# remove build folder and its content
.PHONY: clean
clean:
    rm -rf $(VITE_BUILD_OUTDIR)`;
