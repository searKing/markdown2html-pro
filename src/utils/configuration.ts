import { defaults } from 'lodash';
import './utils/json';
// export type JSON = IDefaultOptions;

export interface IDefaultOptions {
  debug?: boolean;
  emoji?: boolean;
  expandTabs?: boolean;
  lazyHeaders?: boolean;
  taskLists?: boolean;
}
