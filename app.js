var redis = require("redis");
var client = redis.createClient(6378, "127.0.0.1");

client.on("connect", function() {
  console.log("You are now connected");
});

client.set("student", "Jun", function(err, reply) {
    console.log(reply);
  });

client.get('student', function(err, reply) {
console.log(reply)});