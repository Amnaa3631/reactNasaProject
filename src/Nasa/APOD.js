import React from 'react'

export default function APOD({url, explaination}) {
    return (
      <div>
        <img src={url} alt={"fall back"}/>
        <p>{explaination}</p>
      </div>
    )
  }