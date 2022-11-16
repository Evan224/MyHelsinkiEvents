function shuffle(arr: any[]) {
  let m = arr.length;
  while (m > 1) {
    const index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]];
  }
  return arr;
}

function getMonthShortName(monthNo: number) {
  const date = new Date();
  date.setMonth(monthNo - 1);

  return date.toLocaleString("en-US", { month: "short" });
}

export { getMonthShortName, shuffle };
