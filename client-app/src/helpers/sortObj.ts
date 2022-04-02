const sourcePriority: any = {
  google: 1,
  linkedin: 2,
  facebook: 3,
  twitter: 4,
  office365: 5,
};

export function sortObj(nextValue: any, currentValue: any) {
  //if positive result then swap two result and if negative values is already(i.e priority in descending order)
  return sourcePriority[currentValue.source] - sourcePriority[nextValue.source];
}
