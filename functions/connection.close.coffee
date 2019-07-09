export kowixInvoke = (local,body)->
    conns = local.context.server._urlconns
    config = local.context.server.config.readCached()
    if config.adminpassword 
        if body.password isnt config.adminpassword
            return local.Exception.create("Access denied. Invalid password").putCode("ACCESS_DENIED")
    results = []
    if body.id 
        parts = body.id.split("-")
        initial = parseInt parts[0]
        if not parts[1]
            final = initial 
        else 
            final = parts[1]
        
        for i in [initial..final]
            con = conns[i]
            if con 
                await con.end()
                results.push 
                    id: i 
                    finished: yes 
    
    return results
