export const SELECT_ROVER = "selectRover";

export function selectRover(rover) {
  return {
    type: SELECT_ROVER,
    rover
  }
}