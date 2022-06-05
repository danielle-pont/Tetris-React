import React from 'react'
import Cell from './Cell'

// NOTE: proptype checking has not been added, so proptypes cannot be verified as of now.

const Stage = ({ stage }) => (
  // TODO: mapping through the stage props[erty] to create cells from the stage prop[erty].
  // for each cell, we will render the cell component
  <>
    <div>
      {/* <Cell /> */}
      {stage?.map((row) => {
        return row?.map(function (cell, x) {
          return <Cell key={x} type={cell[0]} />
        })
      })}
    </div>
  </>
)

export default Stage
