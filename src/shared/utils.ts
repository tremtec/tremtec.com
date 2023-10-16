export function raise(err = new Error()) {
  throw err;
}

export function breakpoint() {
  // eslint-disable-next-line
  debugger;
}
