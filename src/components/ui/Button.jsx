import React from "react";

export default function Button({
  value = "button",
  // bgYellow = "btn-yellow text-dark-blue",
  // bgBlue = "btn-blue-dark",
  color,
}) {
  return <button className={`btn px-3 py-2 fw-bold ${color}`}>{value}</button>;
}
