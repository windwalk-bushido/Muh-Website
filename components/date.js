import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-xl opacity-70" dateTime={dateString}>
      {format(date, "MMMM do, yyyy.")}
    </time>
  );
}
