function Auth(config, utils) {
	var self = Object.create(Auth.prototype)

	self.keys = config || {};

	return self;
}

Auth.prototype.authenticate = function(user, key, callback) {
	if (this.keys.hasOwnProperty(user) && this.keys[user] === key) {
		callback(null, [user])
	} else {
		callback(null, false);
	}
};

module.exports = Auth;