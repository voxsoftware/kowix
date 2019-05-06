import Moment from 'npm://moment-timezone@0.5.25'
export kowixInvoke= (local, body)->

	

	timezone= body?.timezone ? "UTC"
	moment= Moment.utc()
	if body?.timezone 
		moment= moment.tz(body.timezone)
	
	d= moment.toDate()
	return 
		unix: d.getTime()
		formatted: moment.format(body?.format ? "YYYY-MM-DD HH:mm:ss")
		timezone: timezone
		split: 
			year: moment.year()
			month: moment.month()
			day: moment.day()
			hours: moment.hours()
			minutes: moment.minutes()
			seconds: moment.seconds()
			milliseconds: moment.milliseconds()

			
