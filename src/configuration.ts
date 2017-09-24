import { defaults } from 'lodash';
import './utils/json';

type JSON = IDefaultOptions;

export interface IDefaultOptions {
  debug?: boolean;
  enableHeadingLinkIcons?: boolean;
  headingAnchorClass?: string;
  headingSvgClass?: string[];
  highlightSyntax?: boolean;
  linkify?: boolean;
  package?: any;
  prefixHeadingIds?: boolean;
  sanitize?: boolean;
  serveImagesWithCDN?: boolean;
}

const defaultOptions: JSON = {
  debug: false,
  enableHeadingLinkIcons: true,
  headingAnchorClass: 'anchor',
  headingSvgClass: ['octicon', 'octicon-link'],
  highlightSyntax: true,
  linkify: true,
  package: null,
  prefixHeadingIds: true,
  sanitize: true,
  serveImagesWithCDN: false,
};

interface IA {
  member: string;
}

const marky = (markdown: string, options: JSON) => {
  let html: string = '';

  if (typeof markdown !== 'string') {
    throw Error('first argument must be a string');
  }

  if (typeof options === 'object') {
    throw Error('second argument must be an object');
  }

  options = options || {};
  options = defaultOptions;
  defaults(options, defaultOptions);

  const log = (msg: string) => {
    if (options.debug) {
      console.log('marky-markdown: ' + msg);
    }
  };

  log('\n\n' + 'markdown2html-pro' + '\n\n');

  log('Parse markdown into HTML and add syntax highlighting');
  // html = render(markdown, options);

  // if (options.sanitize) {
  //     log('Sanitize malicious or malformed HTML');
  //     html = sanitize(html, options);
  // }

  if (options.debug) {
    const info = require('../package.json');
    const debugHeader =
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

    html = debugHeader + '\n' + html;
  }

  return html;
};
