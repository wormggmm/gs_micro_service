const GSServicer = require("./gs_servicer");

class GSServicerMgr {
    constructor(config){
        this.timeoutSec = 10;
        if(config.timeoutSec){
            this.timeoutSec = config.timeoutSec;
        }

        this.servicers = {};
    }
    async init(){
    }
    _getServicer(id){
        let servicer = this.servicers[servicerId];
        if(!servicer){
            servicer = new GSServicer(servicerId);
        }
        this.servicers[servicerId] = servicer;
        return servicer;
    }
    // after offer all service, need call flushService to flush service in the net of servers.
    async offer(servicerId, serviceName, serviceFunc){
        let servicer = this._getServicer(servicerId);
        servicer.registService(serviceName, serviceFunc);
    }
    // publish all servicer and services to other servers.
    flushService(){
        
    }
    async need(serviceName){

    }
    async callService(serviceName, jsonData, servicerId){
        if(servicerId == null || servicerId == undefined){
            // pub servic
        }

    }
    async _heartbeat(){

    }
}
module.exports = GSServicerMgr;