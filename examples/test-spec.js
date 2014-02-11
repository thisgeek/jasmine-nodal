
describe('a test', function ()
{

	it('passes a test', function ()
	{
		expect(1).toBe(1);
	});

	it('passes async test', function (done)
	{
		expect(2).toBe(2);
		setTimeout(function ()
		{
			expect(3).toBe(3);
			done();
		}, 0);
	});

});
