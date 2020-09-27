import * as monaco from 'monaco-editor';
import '../stylesheets/main.scss';

const monacoEditor = monaco.editor.create(
  document.getElementById('container'), {
    value: 'console.log("Hello, world")',
    language: 'javascript'
  });

window.addEventListener('resize', () => {
  monacoEditor.layout();
});

export {}