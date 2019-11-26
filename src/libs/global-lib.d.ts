declare function globalLib(options:globalLib.options): void

declare namespace globalLib{
    const version:string
    function doSomething():void
    interface options{
        [Key:string]:any
    }
}

