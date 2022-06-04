export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

// the stage will be a nested/multidimensional array with rows and columns
export function createStage() {
  //creating an array from the stage height. NOTE: this will begin as an empty array.
  //the inline function will fill the array
  Array.from(Array(STAGE_HEIGHT), () =>
    // for each row, we create a new array from the stage width, then FILL it with another array
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
}
