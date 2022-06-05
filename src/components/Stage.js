import React from 'react'
import Cell from './Cell'

// NOTE: proptype checking has not been added, so proptypes cannot be verified as of now.
// TODO: mapping through the stage props[erty] to create cells from the stage prop[erty].
// for each cell, we will render the cell component

const Stage = ({ stage }) => (
  <div>
    {stage?.map((row) =>
      row?.map((cell, x) => <Cell key={x} type={cell[0]} />)
    )}
  </div>
)

export default Stage
