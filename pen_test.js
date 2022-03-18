const Kahoot = require("./kahoot-patched/index.js");
const fs = require('fs');
var prompt = require('prompt-sync')();
require('events').EventEmitter.defaultMaxListeners = Infinity;
var code = prompt("GameCode: ");
const tag_list = fs.readFileSync('./util/html_tags.txt', 'utf-8').split("\n");
async function join(code,name,pos){
    await new Promise(e=>setTimeout(e,pos*30));
    const client = new Kahoot();
    client.join(code, `<${name}>`);
    client.on("Joined", () => {
        console.log("Joined with name: " + name);
    });
}
for (var i = 0; i < tag_list.length;i++) {
   join(code,tag_list[i],i);
}