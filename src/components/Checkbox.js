
import React from 'react'

import '~assets/checkbox.scss'

export default function Checkbox(props) {
  console.log(props)
  return <div class="checkbox">
    <input type="checkbox" id={props.id} checked={props.value} onChange={props.onChange}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
}
