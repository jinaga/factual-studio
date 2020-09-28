import * as monaco from 'monaco-editor';
import  { factualLanguageDefinition } from './factual-language-definition';
// import { FactualCompletionItemProvider } from './factual-completion-item-provider';
import '../stylesheets/main.scss';

(window as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: string, label: string) {
      return 'scripts/editor.worker.js';
  }
}

monaco.languages.register({
  id: 'factual',
});

monaco.languages.setMonarchTokensProvider(
  'factual',
  factualLanguageDefinition
);

// monaco.languages.registerCompletionItemProvider(
//   'factual',
//   new FactualCompletionItemProvider()
// );

const monacoEditor = monaco.editor.create(
  document.getElementById('container'), {
    value: '',
    language: 'factual',
  });

window.addEventListener('resize', () => {
  monacoEditor.layout();
});

export {}