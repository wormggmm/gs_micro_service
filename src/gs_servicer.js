

class GSServicer {
    constructor(id){
        this.id = id;
        this.services = {};
    }
    registService(serviceName, serviceFunc){
        this.services[serviceName] = serviceFunc;
    }
    async callServiceAsync(serviceName, jsonData){
        if(this.services[serviceName]){
            return await this.services[serviceName](jsonData);
        }
    }
}
module.exports = GSServicer;