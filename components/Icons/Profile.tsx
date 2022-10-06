import React from "react"

export function Profile(props: { color?: string }) {
  const color = props.color ?? "#2D2A26"

  return (
    <svg
      width="25.044"
      height="25.044"
      viewBox="0 0 25.044 25.044"
      className="stroke-[#2d2a26] transition ease-in-out group-hover:stroke-green-hover"
    >
      <line y2="24.044" transform="translate(12.022)" fill="none" strokeLinecap="round" strokeWidth="1" />
      <line
        y2="24.044"
        transform="translate(24.044 12.022) rotate(90)"
        fill="none"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </svg>
  )
}
