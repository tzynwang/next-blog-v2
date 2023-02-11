import tw from '@Lang/data/tw';
import { LangObject, LangList, LangKeys } from './types';

class I18n {
  public lang: string;

  public langDefault: LangObject;

  public langList: LangList;

  public langBase: LangObject;

  constructor(lang: string) {
    this.lang = lang;
    this.langDefault = tw;
    this.langList = [
      {
        lang: 'frontend.global.language.tw',
        value: 'tw',
      },
    ];
    switch (this.lang) {
      case 'tw':
        this.langBase = tw;
        break;
      default:
        this.langBase = tw;
    }
  }

  getSystemLang = (): string => {
    const lang = navigator.language.toLowerCase();
    switch (lang) {
      case 'en':
        return 'en';
      case 'zh-tw':
        return 'tw';
      default:
        return 'en';
    }
  };

  getLangList(): LangList {
    return this.langList;
  }

  t(key: LangKeys): string {
    return this.langBase[key] || this.langDefault[key] || '';
  }
}

export default I18n;
