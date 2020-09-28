import { CancellationToken, editor, languages, Position } from 'monaco-editor';

export class FactualCompletionItemProvider implements languages.CompletionItemProvider {

  triggerCharacters?: string[];

  provideCompletionItems(model: editor.ITextModel, position: Position, context: languages.CompletionContext, token: CancellationToken): languages.ProviderResult<languages.CompletionList> {
    throw new Error("Method provideCompletionItems not implemented.");
  }

  resolveCompletionItem?(item: languages.CompletionItem, token: CancellationToken): languages.ProviderResult<languages.CompletionItem> {
    throw new Error("Method resolveCompletionItem not implemented.");
  }

}