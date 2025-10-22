import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export function formatDate(
  date: string,
  format: string = "YYYY/MM/DD"
): string {
  return dayjs.utc(date).tz().format(format);
}
