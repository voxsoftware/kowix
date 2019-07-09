import Moment from 'npm://moment-timezone@0.5.25'

export var kowixInvoke = function(local, body) {
	var d, moment, ref, ref1, timezone;
	timezone = (ref = body != null ? body.timezone : void 0) != null ? ref : "UTC";
	moment = Moment.utc();
	if (body != null ? body.timezone : void 0) {
		moment = moment.tz(body.timezone);
	}
	d = moment.toDate();
	return {
		unix: d.getTime(),
		formatted: moment.format((ref1 = body != null ? body.format : void 0) != null ? ref1 : "YYYY-MM-DD HH:mm:ss"),
		timezone: timezone,
		split: {
			year: moment.year(),
			month: moment.month(),
			day: moment.day(),
			hours: moment.hours(),
			minutes: moment.minutes(),
			seconds: moment.seconds(),
			milliseconds: moment.milliseconds()
		}
	};
};
