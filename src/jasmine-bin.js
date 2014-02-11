// the require("mod_jasmine") loads boot.js
var mj = require("./jasmine"),
jasmine = mj.jasmine;
// extending jasmineInterface funcs (describe(), it() ) onto global var
mj.extend(global, mj.jasmineInterface);
// load in specs
require("./../examples/test-spec.js");
// require("jasmine/spec/PlayerSpec.ds");
 
var jasmineEnv = jasmine.getEnv(),
consoleReporter = new jasmine.ConsoleReporter({
// print: function(str){output += str;},
print: console.log,
timer: new jasmine.Timer()
});
 
// run tests
jasmineEnv.addReporter(consoleReporter);
jasmineEnv.execute();