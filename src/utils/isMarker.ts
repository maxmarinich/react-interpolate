const MARKER_TEST_PATTERN = /{\d{1,}}/;

export const isMarker = (item: any) => {
  return MARKER_TEST_PATTERN.test(item);
};
