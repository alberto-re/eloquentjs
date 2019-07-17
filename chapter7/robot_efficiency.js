const { goalOrientedRobot, findRoute, roadGraph } = require('./robot')
const { compareRobots } = require('./measuring_a_robot')

function goalOrientedRobotImproved ({ place, parcels }, route) {
  if (route.length === 0) {
    // Pick the nearest, not the first
    let shortestRoute = null
    let minDistance = 999

    for (let parcel of parcels) {
      if (parcel.place !== place) {
        route = findRoute(roadGraph, place, parcel.place)
      } else {
        route = findRoute(roadGraph, place, parcel.address)
      }
      if (route.length < minDistance) {
        minDistance = route.length
        shortestRoute = route
      }
    }
    route = shortestRoute
  }
  return { direction: route[0], memory: route.slice(1) }
}

compareRobots([goalOrientedRobot, goalOrientedRobotImproved])
