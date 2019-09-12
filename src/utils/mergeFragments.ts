import { isPrimitive } from "./isPrimitive";

export const mergeFragments = (fragments: Array<any> = [], current: any) => {
  const last = fragments.pop();

  if (isPrimitive(last)) {
    fragments.push(`${last}${current}`);
  } else {
    Array.prototype.push.apply(fragments, [last, current]);
  }
};
