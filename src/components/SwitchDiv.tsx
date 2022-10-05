import React from 'react';

import Switch from './UI/Switch/Switch';

function SwitchDiv({needParameters, handleIsCheckedParameters, spanText}: any) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <Switch 
          onChange={handleIsCheckedParameters} 
          checked={needParameters} 
        />
        <span style={{marginLeft: 5}}>{spanText}</span>
      </div>
  )
}

export default SwitchDiv;