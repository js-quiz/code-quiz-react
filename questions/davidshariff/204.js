function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
}
alert(typeof bar());
