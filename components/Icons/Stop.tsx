import React from "react"

export const Stop = (props) => {
  const size = props.size || "25px"
  const color = props.color || "rgba(255,255,255,0.5)"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <clipPath id="clip-Stop-btn">
          <path d="M0 0H100V100H0z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-Stop-btn)">
        <path fill="rgba(0,0,0,0)" d="M0 0H100V100H0z"></path>
        <path
          fill={color}
          d="M113.6 8.177a49 49 0 1049 49 49 49 0 00-49-49m20.368 64.059a5.3 5.3 0 01-5.3 5.3H98.539a5.294 5.294 0 01-5.3-5.3V42.118a5.3 5.3 0 015.3-5.308h30.127a5.307 5.307 0 015.3 5.308z"
          data-name="Path 187"
          transform="translate(-63.598 -7.177)"
        ></path>
      </g>
    </svg>
  )
}
