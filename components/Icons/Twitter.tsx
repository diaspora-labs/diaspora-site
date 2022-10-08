import React from "react"

export function Twitter(props: { color?: string }) {
  const color = props.color ?? "#7233ff"
  // https://twitter.com/OurDiaspora
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16.597" height="13.488" viewBox="0 0 16.597 13.488">
      <g transform="translate(11.732 -1.721)">
        <g  transform="translate(-11.732 1.721)">
          <path
            fill={color}
            d="M16.6 1.6a6.806 6.806 0 01-1.956.536 3.415 3.415 0 001.5-1.884 6.817 6.817 0 01-2.162.826 3.408 3.408 0 00-5.8 3.106A9.667 9.667 0 011.155.623a3.409 3.409 0 001.054 4.546 3.391 3.391 0 01-1.542-.426v.043A3.407 3.407 0 003.4 8.125a3.414 3.414 0 01-1.538.058 3.409 3.409 0 003.181 2.365 6.832 6.832 0 01-4.231 1.458A6.927 6.927 0 010 11.958a9.638 9.638 0 005.22 1.53A9.622 9.622 0 0014.908 3.8q0-.221-.01-.44A6.92 6.92 0 0016.6 1.6"
          ></path>
        </g>
      </g>
    </svg>
  )
}
