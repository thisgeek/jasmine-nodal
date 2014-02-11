// boot code for jasmine, require paths were customized for my env
// on my commonjs server, added boot.js as the main file of mod_jasmine, which is wrapping my copy of jasmine-core node package
var jasmineRequire = require('jasmine-core/lib/jasmine-core/jasmine.js');
var jasmine = jasmineRequire.core(jasmineRequire);
 
var consoleFns = require('jasmine-core/lib/console/console.js');
extend(jasmineRequire, consoleFns);
jasmineRequire.console(jasmineRequire, jasmine);
 
var env = jasmine.getEnv();
 
var jasmineInterface = {
describe: function(description, specDefinitions) {
return env.describe(description, specDefinitions);
},
 
xdescribe: function(description, specDefinitions) {
return env.xdescribe(description, specDefinitions);
},
 
it: function(desc, func) {
return env.it(desc, func);
},
 
xit: function(desc, func) {
return env.xit(desc, func);
},
 
beforeEach: function(beforeEachFunction) {
return env.beforeEach(beforeEachFunction);
},
 
afterEach: function(afterEachFunction) {
return env.afterEach(afterEachFunction);
},
 
expect: function(actual) {
return env.expect(actual);
},
 
spyOn: function(obj, methodName) {
return env.spyOn(obj, methodName);
},
 
jsApiReporter: new jasmine.JsApiReporter({
timer: new jasmine.Timer()
})
};
 
function extend(destination, source) {
for (var property in source) destination[property] = source[property];
return destination;
}
 
jasmine.addCustomEqualityTester = function(tester) {
env.addCustomEqualityTester(tester);
};
 
jasmine.addMatchers = function(matchers) {
return env.addMatchers(matchers);
};
 
jasmine.clock = function() {
return env.clock;
};
 
exports.jasmine = jasmine;
exports.jasmineInterface = jasmineInterface;
exports.extend = extend;
