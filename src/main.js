import prettier from 'prettier/standalone';
import prettierParserBabel from 'prettier/parser-babel';
import prettierParserGraphql from 'prettier/parser-graphql';
import prettierParserAngular from 'prettier/parser-angular';
import prettierParserAspree from 'prettier/parser-espree';
import prettierParserFlow from 'prettier/parser-flow';
import prettierParserGlimmer from 'prettier/parser-glimmer';
import prettierParserHtml from 'prettier/parser-html';
import prettierParserMd from 'prettier/parser-markdown';
import prettierParserMeriyah from 'prettier/parser-meriyah';
import prettierParserPostcss from 'prettier/parser-postcss';
import prettierParserTypescript from 'prettier/parser-typescript';
import prettierParserYaml from 'prettier/parser-yaml';

const pluginId = 'acode.plugin.prettier';
const poluginList = [
  prettierParserBabel,
  prettierParserGraphql,
  prettierParserAngular,
  prettierParserAspree,
  prettierParserFlow,
  prettierParserGlimmer,
  prettierParserHtml,
  prettierParserMd,
  prettierParserMeriyah,
  prettierParserPostcss,
  prettierParserTypescript,
  prettierParserYaml,
];

class Prettier {

  async init() {
    const config = appSettings.value[pluginId];
  }

  async run() {
    const { editor, activeFile } = editorManager;
    const code = editor.getValue();
    const cursorPos = editor.getCursorPosition();
    const res = prettier.formatWithCursor(code, {
      cursorOffset: this.#cursorPosTocursorOffset(cursorPos),
      filepath: activeFile.name,
      plugins: poluginList,
    });
    editor.setValue(res.formatted);
    const { row, column } = this.#cursorOffsetTocursorPos(res.cursorOffset);
    setTimeout(() => {
      editor.gotoLine(row + 1, column - 1);
    }, 100);
  }

  destroy() {

  }

  #cursorPosTocursorOffset(cursorPos) {
    let { row, column } = cursorPos;
    const { editor } = editorManager;
    const lines = editor.getValue().split('\n');
    for (let i = 0; i < row - 1; i++) {
      column += lines[i].length;
    }
    return column;
  }

  #cursorOffsetTocursorPos(cursorOffset) {
    const { editor } = editorManager;
    const lines = editor.getValue().split('\n');
    let row = 0;
    let column = 0;
    for (let i = 0; i < lines.length; i++) {
      if (column + lines[i].length >= cursorOffset) {
        row = i;
        column = cursorOffset - column;
        break;
      }
      column += lines[i].length;
    }
    return {
      row,
      column,
    };
  }
}

if (window.acode) {
  const prettier = new Prettier();
  acode.setPluginInit(pluginId, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    prettier.baseUrl = baseUrl;
    prettier.init($page, cacheFile, cacheFileUrl);
    console.log('Python plugin initialized');
  });
  acode.setPluginUnmount(pluginId, () => {
    prettier.destroy();
    console.log('Python plugin unmounted');
  });
  const extensions = ['js', 'jsx', 'ts', 'tsx', 'css', 'scss', 'less', 'json', 'yml', 'yaml', 'xml', 'md'];
  // const extensions = ['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'scss', 'less', 'json', 'yml', 'yaml', 'xml', 'vue', 'hbs', 'ejs', 'md'];
  acode.registerFormatter(pluginId, extensions, prettier.run.bind(prettier));
}