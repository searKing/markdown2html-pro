import { defaults } from 'lodash';
import './utils/json';
// export type JSON = IDefaultOptions;

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
  supportTaskList?: boolean;
}
