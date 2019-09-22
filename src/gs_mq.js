
const amqp = require('amqplib');

class GSMQ{
    constructor(config){
        this.url = config.url;
        this.heartbeat = 10;
        this.serviceExchange = "_ms_ex_";
        this._pub_ch_ = null;
        this.connection = null;
        this.exchanges = {};
        if(config.serviceExchange){
            this.serviceExchange = config.serviceExchange;
        }
        if(config.heartbeat){
            this.heartbeat = config.heartbeat;
        }
    }
    async conn(){
        this.connection = await amqp.connect('amqp://worker:eQ3hpP0HujpjqfIw@18.162.92.140/oms_test');
        this._pub_ch_ = await this.connection.createChannel();
        await this._pub_ch_.assertExchange(this.serviceExchange, "topic")
        let q = await this._pub_ch_.assertQueue("_pub_");
        await this._pub_ch_.bindQueue("_pub_", this.serviceExchange);
        // console.log('bind q:', q.queue)
        await this._pub_ch_.consume("_pub_", this._pub_msg_.bind(this), {noAck: true});
    }
    async send(queueName, strData){
        await this._pub_ch_.sendToQueue(queueName, Buffer.from(strData));
    }
    _pub_msg_ (msg) {
        console.log(" [x] %s:'%s'",
                    msg.fields.routingKey,
                    msg.content.toString());
    }

    _hb(){

    }

    async _createChannel(channel){
        if(!this.connection){
            throw new Error("none connection!");
        }
        return await this.connection.createChannel();

    }
    async regist(serviceName){
        //b.replace(/\./g, "|");
        let ch = this.channels[channel];
        if(!ch){
            ch = await this._createChannel();
        }
        if(!ch){
            throw new Error("can't createChannel:"+channel);
        }
        let ex = await ch.assertExchange(exchange, "topic");
        if(!ex){
            throw new Error("can't assertExchange:"+exchange);
        }
        this.exchanges[exchange] = ex;
        // let ex = this.exchanges[exchange];
        // if(!ex){
        //     this._createExchange();
        // }

    }
}
module.exports = GSMQ;