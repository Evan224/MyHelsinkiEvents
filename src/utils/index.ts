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

function getStandardDate(date: string) {
  const dateCur = new Date(date);
  return {
    year: dateCur.getUTCFullYear(),
    month: dateCur.getUTCMonth(),
    day: dateCur.getUTCDate(),
    hour: dateCur.getUTCHours(),
  };
}

function formatEvent(data: any) {
  return data.map((event: any) => {
    const DateCur = new Date(event.Date);
    return {
      picture: event.ThumbnailUrl,
      title: event.Name,
      date: {
        month: DateCur.getUTCMonth(),
        day: DateCur.getUTCDate(),
      },
      description: event.Description,
      tags: event.Tags,
      ...event,
    };
  });
}

export { formatEvent, getMonthShortName, getStandardDate, shuffle };
