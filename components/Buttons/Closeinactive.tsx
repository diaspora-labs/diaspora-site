import React from "react"

export const Closeinactive: React.FC<{ width?: string; height?: string }> = (props) => {
  const { width, height } = props

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "26.379"}
      height={height ?? "26.379"}
      viewBox={`0 0 26.379 26.379`}>
        <g id="Group_240" data-name="Group 240" transform="translate(-1047.776 -1648.776)">
          <line id="Line_7" data-name="Line 7" y2="35.306" transform="translate(1073.448 1649.483) rotate(45)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
          <line id="Line_8" data-name="Line 8" y2="35.306" transform="translate(1073.448 1674.448) rotate(135)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
        </g>
    </svg>

  )
}


