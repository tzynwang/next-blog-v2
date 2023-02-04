import tw from '@Lang/data/tw';

export interface LangObject {
  [key: string]: string;
}

export interface LangListItem {
  lang: string;
  value: string;
}

export type LangList = LangListItem[];

export type LangKeys = keyof typeof tw | string;
