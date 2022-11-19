import React from 'react'
import { Headings} from "./Features.css"
const Heading = (props) => {
  return (
    <Headings>
        <hr />
        <span>{props.name}</span>
        <hr />
    </Headings>
  )
}

export default Heading