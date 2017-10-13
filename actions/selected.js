export const SELECT_ROVER = "selectRover";

export function selectRover(rover) {
  return {
    type: SELECT_ROVER,
    rover
  }
}

export const SELECT_CAMERA = "selectCamera";

export function selectCamera(camera, date, sol, fetching, page) {
  return {
    type: SELECT_CAMERA,
    camera
  }
}