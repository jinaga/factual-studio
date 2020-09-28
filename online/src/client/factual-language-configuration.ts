import { languages } from 'monaco-editor';

export const factualLanguageConfiguration: languages.LanguageConfiguration = {
    brackets: [
        ['{', '}']
    ],
    surroundingPairs: [
        { open: '{', close: '}' }
    ],
    autoClosingPairs: [
        { open: '{', close: '}' }
    ],
}