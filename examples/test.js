--- MTRGEN ---
name: foo
filename: <% filename|lol:1,3 %>.js
path: ./folder
--- MTRGEN ---

var x = 1;

var <% test|asdf %>

function foo() {
  console.log(x);
  var x = 2;
}
