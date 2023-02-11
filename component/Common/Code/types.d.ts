import type { PropsWithChildren } from 'react';
import type { SyntaxHighlighterLanguage } from '@/models/GeneralTypes';

export interface CodeProps extends PropsWithChildren {
  language?: SyntaxHighlighterLanguage;
}
