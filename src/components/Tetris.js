import React from 'react'

import Stage from './Stage'
import Display from './Display'
import Start from './Start'

import { createStage } from '../gameHelpers'

const Tetris = () => {
  //NOTE: curly braces are used here because more complex logic will be used.
  // aside refers to the sidebar.
  // envoking the createStage function within the Stage component.
  //TODO: Place stage in a custom hook.
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
      <Start />
    </div>
  )
}

export default Tetris
