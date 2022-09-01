export const isNotEmpty = (value) =>
  value !== null && value !== "" && value !== undefined;

export const isComplete = (data) =>
  isNotEmpty(data?.name) &&
  isNotEmpty(data?.key) &&
  isNotEmpty(data?.description) &&
  isNotEmpty(data?.path) &&
  isNotEmpty(data?.publicPath);
