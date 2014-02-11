


var
	jasmineRequire = require('jasmine-core/lib/jasmine-core/jasmine.js'),
	jasmine = jasmineRequire.core(jasmineRequire);

var
	consoleFns = require('jasmine-core/lib/console/console.js');

extend(jasmineRequire, consoleFns);
jasmineRequire.console(jasmineRequire, jasmine);

var env = jasmine.getEnv();

var jasmineInterface =
{
	describe: function describe (description, specDefinitions)
	{
		return env.describe (description, specDefinitions);
	},

	xdescribe: function xdescribe (description, specDefinitions)
	{
		return env.xdescribe(description, specDefinitions);
	},

	it: function it (desc, func)
	{
		return env.it(desc, func);
	},

	xit: function xit (desc, func)
	{
		return env.xit(desc, func);
	},

	beforeEach: function beforeEach (beforeEachFunction)
	{
		return env.beforeEach(beforeEachFunction);
	},

	afterEach: function afterEach (afterEachFunction)
	{
		return env.afterEach(afterEachFunction);
	},

	expect: function expect (actual)
	{
		return env.expect(actual);
	},

	spyOn: function spyOn (obj, methodName)
	{
		return env.spyOn(obj, methodName);
	},

	jsApiReporter: new jasmine.JsApiReporter(
	{
		timer: new jasmine.Timer()
	})
};

jasmine.addCustomEqualityTester = function addCustomEqualityTester (tester)
{
	env.addCustomEqualityTester(tester);
};

jasmine.addMatchers = function addMatchers (matchers)
{
	return env.addMatchers(matchers);
};

jasmine.clock = function ()
{
	return env.clock;
};

exports.jasmine = jasmine;
exports.jasmineInterface = jasmineInterface;
exports.extend = extend;

function extend (destination, source)
{
	for (var property in source)
	{
		destination[property] = source[property];
	}
	return destination;
}
