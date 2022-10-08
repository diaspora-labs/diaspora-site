import React from "react"

export const Play = (props) => {
  const size = props.size || "25px"
  const color = props.color || "rgba(255,255,255,0.5)"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <clipPath id="clip-Play-btn">
          <path d="M0 0H100V100H0z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-Play-btn)">
        <path fill="rgba(0,0,0,0)" d="M0 0H100V100H0z"></path>
        <path
          fill={color}
          d="M63.45 8.177a49 49 0 1049 49 49 49 0 00-49-49M84.781 61.7L53.552 79.913a4.425 4.425 0 01-6.664-3.822v-36.44a4.431 4.431 0 016.664-3.83l31.229 18.22a4.435 4.435 0 010 7.66"
          data-name="Path 186"
          transform="translate(-13.45 -7.177)"
        ></path>
      </g>
    </svg>
  )
}
