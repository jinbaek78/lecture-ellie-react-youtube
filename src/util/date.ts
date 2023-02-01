import { format, register } from 'timeago.js';

import koLocale from 'timeago.js/lib/lang/ko';
register('ko', koLocale);

export function formatAgo(
  date: string,
  lang: 'en_us' | 'ko' = 'en_us'
): string {
  return format(date, lang);
}
