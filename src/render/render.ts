'use strict';
export interface IMarkdownRender {
  renderToHtml(mdContent: string): string;
}
export interface IMarkdownRenderOptions {
  debug?: boolean;
  linkify?: boolean;
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

    return renderer;
  }
}
