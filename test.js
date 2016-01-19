import test from 'ava';
import AuthPlugin from './index';
 
test('Is function', t => {
	t.same(typeof(AuthPlugin), 'function');
});

test('authenticate is function and can authenticate', t => {
	t.plan(3);

	var plugin = AuthPlugin({testUser: 'testPass'});
	t.same(typeof(plugin.authenticate), 'function');
	
	plugin.authenticate('testUser', 'testPass', (err, user) => {
		if (user[0] === 'testUser') {
			t.pass();
		}
	})
	plugin.authenticate('testUser', 'wrongPass', (err, user) => {
		if (user === false) {
			t.pass();
		}
	})
});