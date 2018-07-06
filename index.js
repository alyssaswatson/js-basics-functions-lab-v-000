// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location > 42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet (a, b) {
  if (a > b) {
    return (a - b) * 264;
  } else {
    return (b - a) * 264;
  }
}

function calculatesFarePrice (a , b) {
  if (function distanceTravelledInFeet(a, b) < 400) {
    
  }
}
