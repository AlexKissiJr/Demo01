
const events = {
	on(event, cb) {
		vidbaby.$(document).on(this.tansformEventName(event), cb);
	},
	trigger(event, data) {
		vidbaby.$(document).trigger(this.tansformEventName(event), data);
	},
	tansformEventName(name) {
		if(this.types[name]) {
			return this.types[name];
		} else {
			return name;
		}
	},
	types: {
		ask: 'na-ask.vidbaby'
	}
}

export default events;