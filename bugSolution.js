function foo(a) {
  if (a === undefined || a === null) {
    return 0; // or handle the undefined case appropriately
  }
  return a.length;
}