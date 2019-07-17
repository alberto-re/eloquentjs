const { VillageState, runRobot, randomRobot, routeRobot, goalOrientedRobot } = require('./robot')

function compareRobots (robots, iter = 100) {
  if (robots.length < 2) {
    throw new Error('Provide at least two robots to compare')
  }
  let turnsTaken = []
  for (let i = 0; i < robots.length; i++) {
    turnsTaken.push([])
  }
  for (let i = 0; i < iter; i++) {
    console.log('Iteration ', i)
    const initState = VillageState.random()
    for (let i = 0; i < robots.length; i++) {
      turnsTaken[i].push(runRobot(initState, robots[i], []))
    }
  }

  for (let i = 0; i < robots.length; i++) {
    console.log(robots[i], turnsTaken[i].reduce((m, n) => m + n, 0) / turnsTaken[i].length)
  }
}

compareRobots([randomRobot, routeRobot, goalOrientedRobot])

module.exports = {
  compareRobots: compareRobots
}
