export interface ILog {
  print(msg: string): void;
}
export class Log {
  public static print(msg: string): void {
    console.log(Log.TAG + msg);
  }
  private static TAG: string = 'markdown2html-pro:';
}
