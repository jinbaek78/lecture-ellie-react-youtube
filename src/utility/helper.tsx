export function convertTimeToDate(milliSeconds: number): string {
  let result = '';
  let time = milliSeconds;
  // milliseconds => seconds
  time = Math.floor(time / 1000);
  if (time < 60) {
    result = `${time} seconds ago`;
    return result;
  }
  // seconds => minutes
  time = Math.floor(time / 60);
  if (time < 60) {
    result = `${time} minutes ago'`;
    return result;
  }

  // minutes => hours
  time = Math.floor(time / 60);
  if (time < 24) {
    result = `${time} hours ago`;
    return result;
  }

  // hours => days
  time = Math.floor(time / 24);
  switch (time) {
    case 1: {
      result = `${time} day ago`;
      return result;
    }
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13: {
      result = `${time} days ago`;
      return result;
    }
  }

  //  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 .. ... days ....
  //  7days => weeks
  time = Math.floor(time / 7);
  switch (time) {
    case 2:
    case 3: {
      result = `${time} weeks ago`;
      return result;
    }
  }

  // 4weeks => month
  // 4weeks, 5, 6 7, 8, 9, 10, 12 ..
  time = Math.floor(time / 4);
  switch (time) {
    case 1: {
      result = `${time} month ago`;
      return result;
    }
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11: {
      result = `${time} months ago`;
      return result;
    }
  }

  // month => year (1year === 12weeks)
  // 12 month, 13, 14 ,15 ... months
  time = Math.floor(time / 12);
  switch (time) {
    case 1: {
      result = `${time} year ago`;
      return result;
    }
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12: {
      {
        result = `${time} years ago`;
        return result;
      }
    }
  }

  return `unSupported ${time} weeks, it had been more than 12 years`;
}

export function getTruncated(str: string): string {
  return str.length < 70 ? str : `${str.substring(0, 70)}...`;
}
