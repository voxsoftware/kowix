import Path from 'path'


config=
	name: 'kowix.d'
	id: 'kowix.d'
	cluster: [
		{
			# address to listen
			"address": "0.0.0.0:33016"
			"purpose": "default"
			"count": 'all'
		}
		{
			# address to listen
			"address": "0.0.0.0:44001"
			"purpose": "tasks"
			"count": 1
			"env":
				"CRON_ENABLED": 1
				"MEMSHARING": 1
		}
	]

	# per core
	"maxqueuecount": 30
	"maxconcurrent": 50000


	# folder for vhosts
	include: [
		"../*/app.config.*"
		"../sites*/*/app.config.*"
	]

if process.env.PROJECTS_DIR
	config.include= []
	config.include.push Path.join(process.env.PROJECTS_DIR, '*.kwa')
	config.include.push Path.join(process.env.PROJECTS_DIR, '/*/app.config.*')

if process.env.DHS_ADDRESS
	config.cluster[0].address= process.env.DHS_ADDRESS 
export default config
