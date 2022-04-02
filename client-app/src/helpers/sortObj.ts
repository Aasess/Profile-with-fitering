const sourcePriority: any = {
  google: 1,
  linkedin: 2,
  facebook: 3,
  twitter: 4,
  office365: 5,
};

export function sortObj(nextValue: any, currentValue: any) {
  //if positive result is already sorted else reverse two values
  return sourcePriority[nextValue.source] - sourcePriority[currentValue.source];
}
