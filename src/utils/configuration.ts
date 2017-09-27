import { defaults } from 'lodash';
import './utils/json';
// export type JSON = IDefaultOptions;

export interface IDefaultOptions {
  debug?: boolean;
  emoji?: boolean;
  expandTabs?: boolean;
  lazyHeaders?: boolean;
  taskLists?: boolean;
  abbr?: boolean;
  anchor?: boolean;
  attrs?: boolean;
  container?: boolean;
  deflist?: boolean;
  footnote?: boolean;
  highlightjs?: boolean;
  ins?: boolean;
  mark?: boolean;
  sub?: boolean;
  sup?: boolean;
}
