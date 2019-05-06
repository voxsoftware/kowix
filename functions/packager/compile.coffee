F= (body={})->
    path= body.path 
    Packager= await F.global.userFunction("packager/class").invoke()
    pack= new Packager(path)
    
    pack.module= body.module if body.module  
    result= await pack.compile()
    if result.buffer 
        return 
            code: result.buffer
    e= 
        code: await pack.compile()
    
    
    
module.exports= (global)->
    F.global= global 
    F 