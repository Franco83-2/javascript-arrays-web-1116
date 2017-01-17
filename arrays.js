var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b) {
  a.unshift(b)
  return a
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a,b) {
  a.push(b)
  return a
}

function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b)
  return a
}

function accessElementInArray(a,b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift
}

function removeElementFromBeginningOfArray(a) {
  var b = a.slice(1)
  return b
}

function destructivelyRemoveElementFromEndOfArray(a) {
  array.pop()
  return a
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}
