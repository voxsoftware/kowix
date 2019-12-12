import * as DhsTypes from '/virtual/@kawix/dhs/src/typings'

export interface UserContext {
    require(name: string, version: string, file?: string): Promise<any>
    resolve(name: string, version: string, file?: string): Promise<string>
    getHomeDir(): string 
    setRequireMode(mode:number): UserContext
}




export interface UserFunction{
    invoke(body?: any): any 
    execute(body?:any): any 
    load(): this 
    isAvailable(): boolean
}



export interface  Exception {
    putCode?(code: string): Exception
    putMessage?(message: string): Exception 
    raise?(): void 
}

export interface Database{
    collection(name: string): any 
    table(name: string): any 
}

export interface SiteContext {
    
    addGlobal(name: string, value: any): any
    userFunction(name: string): UserFunction
    UserFunction?(name: string): UserFunction
    getSite(): DhsTypes.Site
    getSitesConfig(): any
    getSiteContext(id: string, timeout?: number): Promise<SiteContext>
    getHomeDir(): string
    IdSite: string
    idSite: string
    context: DhsTypes.Request
    uniqid(): string
    Exception: any
    constants: any
    UserContext: UserContext
    Database: Database
    publicContext: any
}

/*
declare module "./siteContext"{
    declare class SiteContext{
        static reuse(ctx: DhsContext, env: DhsEnvironment, reusable?: boolean ):SiteContext
        addGlobal(name: string, value: any): any 
        userFunction(name: string): UserFunction
        UserFunction?(name: string): UserFunction
        getSite(name: string): DhsSite 
        getSitesConfig(): any 
        getSiteContext(name: string): Promise<SiteContext>
        getHomeDir(): string 
        IdSite: string 
        idSite: string
        context: DhsEnvironment
        uniqid(): string 
        Exception: Exception
        constants: any 
        UserContext: UserContext 
        Database: Database
        publicContext: any 
    }

}
*/
