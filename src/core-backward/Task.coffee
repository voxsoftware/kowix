
class Task extends Promise 

	@sleep: (timeout)->
		task= new Task()
		setTimeout task.finish.bind(task), timeout
		task 

	@get: ()->
		return new Task()

	constructor:(func)->
		def= {}
		callback= (resolve,reject)=>
			def.resolve= resolve 
			def.reject= reject 
			func?(resolve,reject)

		super(callback)
		@def= def 
	
	finish:()->
		if @exception
			return @def.reject @exception 
		else if arguments[0]
			value= arguments[0]
		else
			value= this.result 
		
		return @def.resolve value
	


export default Task 