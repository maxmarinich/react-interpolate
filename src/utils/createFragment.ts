import React from "react";

const MARKER_REPLACE_PATTERN = /[{}]/g;

export const createFragment = (params: Array<any>, item: string, key: any) => {
  const index: any = item.replace(MARKER_REPLACE_PATTERN, "");
  const fragment = params[index];

  if (React.isValidElement(fragment)) {
    return React.createElement(React.Fragment, { key }, fragment);
  }

  return fragment;
};
