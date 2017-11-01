
import React from 'react'
import classNames from 'classnames'

import '~assets/checkbox.scss'

export default function Checkbox(props) {
  return <div className={classNames(['checkbox', props.className])}>
    <input
      type="checkbox"
      id={props.id}
      checked={props.value}
      onChange={props.onChange} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
}
