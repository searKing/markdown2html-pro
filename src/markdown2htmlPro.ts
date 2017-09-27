import { defaults } from 'lodash';
import {
  IMarkdownRender,
  IMarkdownRenderOptions,
  MarkdownRender,
} from './render/render';
import { IDefaultOptions } from './utils/configuration';
import './utils/json';
import { Log } from './utils/log';

export interface IMarkdown2HtmlPro {
  markdown2html(markdown: string): string;
}
export class Markdown2HtmlPro implements IMarkdown2HtmlPro {
  private options: IDefaultOptions;
  // tslint:disable-next-line:member-ordering
  private defaultOptions: IDefaultOptions = {
    abbr: true,
    anchor: true,
    attrs: true,
    debug: false,
    deflist: true,
    emoji: true,
    expandTabs: true,
    footnote: true,
    highlightjs: true,
    ins: true,
    lazyHeaders: true,
    mark: true,
    sub: true,
    sup: true,
    taskLists: true,
  };

  constructor(options: IDefaultOptions = {}) {
    if (typeof options !== 'object') {
      throw Error('second argument must be an object');
    }
    options = options || {};
    defaults(options, this.defaultOptions);
    this.options = options;
    return this;
  }

  public markdown2html(markdown: string): string {
    let html: string = '';

    if (typeof markdown !== 'string') {
      throw Error('first argument must be a string');
    }

    this.log(this.banner());
    const markdownRenderOptions: IMarkdownRenderOptions = {
      emoji: this.options.emoji,
      expandTabs: this.options.expandTabs,
      lazyHeaders: this.options.lazyHeaders,
      taskLists: this.options.taskLists,
    };
    const render: IMarkdownRender = new MarkdownRender(markdownRenderOptions);
    html = render.renderToHtml(markdown);

    if (this.options.debug) {
      html = this.debugHeader() + '\n' + html;
    }

    return html;
  }
  private log(msg: string): void {
    if (this.options.debug) {
      Log.print(msg);
    }
  }
  private banner(): string {
    let banner: string = '\n\n' + 'markdown2html-pro';
    banner += 'Parse markdown into HTML and add syntax highlighting';
    return banner;
  }
  private debugHeader(): string {
    const info = require('../package.json') || {};
    const debugHeader: string =
      '<!--' +
      ' this HTML was generated using markdown2html-pro version ' +
      info.version +
      '.' +
      ' see an issue? file at ' +
      info.issuesUrl +
      '.' +
      ' please include the version in your issue. thanks for using markdown2html-pro!' +
      ' to learn more, visit ' +
      info.repositoryUrl +
      '.' +
      '  -->';

    return debugHeader;
  }
}
