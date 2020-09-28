import { languages } from 'monaco-editor';

interface MonarchLanguageConfiguration extends languages.IMonarchLanguage {
  keywords: string[];
}

export const factualLanguageDefinition: MonarchLanguageConfiguration = {
  brackets: [
    { open: '{', close: '}', token: 'bracket' }
  ],
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
      // punctuation
      [/[{}]/, '@brackets'],
      // whitespace
      { include: '@whitespace' },
    ],

    comment: [
      [/[^\/*]+/, 'comment' ],
      [/\/\*/,    'comment', '@push' ],    // nested comment
      ["\\*/",    'comment', '@pop'  ],
      [/[\/*]/,   'comment' ]
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
      [/\/\*/,       'comment', '@comment' ],
      [/\/\/.*$/,    'comment'],
    ]
  }
};
