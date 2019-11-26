declare function moduleLib(options:moduleLib.options):void;

declare namespace moduleLib{
    const version:string
    function doSomething():void
    interface options{
        [Key:string]:any
    }
}

export = moduleLib