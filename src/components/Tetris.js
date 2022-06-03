import React from 'react'

import Stage from './Stage'
import Display from './Display'
import Start from './Start'

const Tetris = () => {
  //NOTE: curly braces are used here because more complex logic will be used.
  // aside refers to the sidebar.
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
    </div>
  )
}
