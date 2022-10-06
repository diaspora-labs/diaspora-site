import React from "react"

export function Closeinactive(props: { color?: string }) {
  const color = props.color ?? "#000"
  return (
    <svg
      width="26.379"
      height="26.379"
      viewBox="0 0 26.379 26.379"
      className="stroke-[#000] transition ease-in-out group-hover:stroke-green-hover">
        <g id="Group_240" data-name="Group 240" transform="translate(-1047.776 -1648.776)">
          <line 
            y2="35.306" 
            transform="translate(1073.448 1649.483) rotate(45)" 
            fill={color} 
            strokeLinecap="round" 
            strokeWidth="1"/>
          <line 
            y2="35.306" 
            transform="translate(1073.448 1674.448) rotate(135)" 
            fill={color} 
            strokeLinecap="round" 
            strokeWidth="1"/>
        </g>
    </svg>
  )
}


