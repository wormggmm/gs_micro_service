let mq = require("../index");
let Servicer = mq.Servicer;

let config = {
    url:"amqp://worker:eQ3hpP0HujpjqfIw@18.162.92.140/oms_test"
};


async function main(){
    let servicer = new Servicer(config);
    await servicer.conn();
    setInterval(async function(){
        await _servicer(servicer);
    }, 1000);
    // setInterval(function(){
    //     await _consumer(servicer);
    // }, 2000);
}

async function _servicer(servicer){
    await servicer.send("_pub_", "hahahaahah");
}

async function _consumer(servicer){

}

main();