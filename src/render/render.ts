'use strict';
export interface IMarkdownRender {
  renderToHtml(mdContent: string): string;
}

export interface IMarkdownRenderOptions {
  debug?: boolean;
  linkify?: boolean;
  emoji?: boolean;
  expandTabs?: boolean;
  lazyHeaders?: boolean;
  taskLists?: boolean;
}
// import {MarkdownIt } from "markdown-it";
// let taskLists = require('markdown-it-task-lists');
export class MarkdownRender implements IMarkdownRender {
  private modules: any;
  private options: IMarkdownRenderOptions;
  public constructor(options?: IMarkdownRenderOptions) {
    this.options = options || {};
    this.modules = {};
    return this;
  }
  public renderToHtml(mdContent: string): string {
    this.loadModules();
    const renderer = this.getRenderer();

    return renderer.render(mdContent);
  }
  private loadModules() {
    this.modules.MarkdownIt = require('markdown-it');
    if (this.options.taskLists) {
      this.modules.taskLists = require('markdown-it-task-lists');
    }
    if (this.options.lazyHeaders) {
      this.modules.lazyHeaders = require('markdown-it-lazy-headers');
    }
    if (this.options.emoji) {
      this.modules.emoji = require('markdown-it-emoji');
    }
    if (this.options.expandTabs) {
      this.modules.expandTabs = require('markdown-it-expand-tabs');
    }
  }
  private getRenderer(): any {
    const mdOptions = {
      html: true,
      langPrefix: 'highlight ',
      linkify: this.options.linkify,
    };
    const renderer = new this.modules.MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });
    if (this.options.taskLists) {
      renderer.use(this.modules.taskLists, { enabled: true, label: true });
    }
    if (this.options.lazyHeaders) {
      renderer.use(this.modules.lazyHeaders, {});
    }
    if (this.options.emoji) {
      renderer.use(this.modules.emoji, { shortcuts: {} });
    }
    if (this.options.expandTabs) {
      renderer.use(this.modules.expandTabs, { tabWidth: 4 });
    }

    return renderer;
  }
}
