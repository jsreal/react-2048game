import { statesCell } from '../../utils/constants'
import addCell from '../addCell'

const updateMergedCells = (cells) => {
  let cloneCells = [...cells]
  let isMovingCells = false

  cloneCells = cloneCells.map((cell) => {
    if (cell.state === statesCell.ENLARGE || cell.state === statesCell.DESTROYING) {
      cell.value *= 2
    }

    if (cell.state === statesCell.MOVING || cell.state === statesCell.ENLARGE) {
      isMovingCells = true

      cell.state = statesCell.STANDING
    }

    return cell
  })

  return isMovingCells ? addCell(cloneCells) : cloneCells
}

export default updateMergedCells
