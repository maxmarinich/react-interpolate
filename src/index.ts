import * as Utils from "./utils";

const PARAMS_TEST_PATTERN = /{(.*?)}/;
const PARAMS_MATCH_PATTERN = /{*[^{}]+}*/g;

export default (key: string, params: Array<any> = []) => {
  if (key && params && params.length && PARAMS_TEST_PATTERN.test(key)) {
    const values = key.match(PARAMS_MATCH_PATTERN) || [];

    return values.reduce((acc: Array<any>, item: any, i: number) => {
      const fragment: any = Utils.isMarker(item)
        ? Utils.createFragment(params, item, i)
        : item;

      if (acc.length && Utils.isPrimitive(fragment)) {
        Utils.mergeFragments(acc, fragment);
      } else {
        acc.push(fragment);
      }

      return acc;
    }, []);
  }

  return key;
};
