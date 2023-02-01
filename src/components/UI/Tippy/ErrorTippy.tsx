import React from 'react';

import ErrorSVG from '../../../assets/svg/ErrorSVG';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from './Tippy.module.scss';

function ErrorTippy({errorText, errorCount}: any) {
  return (
    <Tippy
        className={classes.TippyWrapper}
        content={
          <span 
            title={errorText}>
              {errorCount ? `Errors: ${errorCount}` : 'No problems'}
          </span>
        }
        interactive={true}
        hideOnClick={false}
        appendTo={document.body}
        animation='shift-away'
        trigger='mouseenter'
      >
        <div className={classes.Problems}>
          <ErrorSVG/>
          <span>{errorCount}</span>
        </div>
      </Tippy>
  )
}

export default ErrorTippy;