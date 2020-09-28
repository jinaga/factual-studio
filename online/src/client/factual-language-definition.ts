import { languages } from 'monaco-editor';

interface MonarchLanguageConfiguration extends languages.IMonarchLanguage {
  keywords: string[];
}

export const factualLanguageDefinition: MonarchLanguageConfiguration = {
  defaultToken: 'invalid',
  keywords: [
    'fact', 'int',
  ],
  tokenizer: {
    root: [
      // identifiers and keywords
      [/[a-zA-Z_$][\w$]*/, {
        cases: {
          '@keywords': { token: 'keyword' },
          '@default': 'identifier'
        }
      }],
      // whitespace
      { include: '@whitespace' },
    ],
    whitespace: [
      [/[ \t\r\n]+/, ''],
    ]
  }
};
