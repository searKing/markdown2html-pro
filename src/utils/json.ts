function isJSON(jsonStr: string): boolean {
  if (typeof jsonStr === 'string') {
    try {
      const jsonObj = JSON.parse(jsonStr);
      if (jsonStr.indexOf('{') > -1) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  return false;
}
