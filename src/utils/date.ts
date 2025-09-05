// Lightweight day-delta (keeps time-of-day); may be off by 1 across DST.
/**
 * Lightweight day delta (keeps time-of-day); can be off by 1 across DST.
 */
export function calculateDaysBetweenDates(begin: Date | string | number, end: Date | string | number): number {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(begin);
  const secondDate = new Date(end);
  const diffInMs = Math.abs(secondDate.getTime() - firstDate.getTime());
  return Math.round(diffInMs / oneDay);
}

// DST-safe calendar-day delta using UTC midnights.
/**
 * DST-safe calendar-day delta using UTC midnights.
 */
export function calculateDaysBetweenDatesUTC(
  begin: Date | string | number,
  end: Date | string | number,
  opts: { inclusive?: boolean; absolute?: boolean } = {}
): number {
  const { inclusive = false, absolute = true } = opts;
  const a = new Date(begin);
  const b = new Date(end);
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) {
    throw new TypeError('Invalid date input. Use Date, ISO string, or epoch ms.');
  }
  const t1 = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
  const t2 = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate());
  let days = (t2 - t1) / 86400000;
  if (inclusive) days += days >= 0 ? 1 : -1;
  if (absolute) days = Math.abs(days);
  return days;
}
