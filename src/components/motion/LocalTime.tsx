"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};

// Live clock in Dhaka time; renders a placeholder on the server.
export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, () => format.format(new Date()), () => "--:--:-- --");
  return <span className="tabular-nums">{time}</span>;
}
