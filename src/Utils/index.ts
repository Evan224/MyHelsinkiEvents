function shuffle(arr: any[]) {
  let m = arr.length;
  while (m > 1) {
    const index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]];
  }
  return arr;
}

export { shuffle };
