#! /usr/bin/env node

var
	path = require('path'),
	modules = process.argv.slice(2);

var
	mj = require("./jasmine"),
	jasmine = mj.jasmine;

mj.extend(global, mj.jasmineInterface);

modules.forEach(function (module)
{
	module = path.resolve(module);
	require(module);
});

var
	jasmineEnv = jasmine.getEnv(),
	consoleReporter = new jasmine.ConsoleReporter(
	{
		showColors: true,
		print: console.log,
		timer: new jasmine.Timer()
	});

jasmineEnv.addReporter(consoleReporter);
jasmineEnv.execute();
