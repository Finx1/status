var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(Welcome Bro ${client.user.tag}!);
});
var prefix = 'm!'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "533944821228896257") return;


  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(Watch Now: تم تغيير الحالة الي${argresult})
} 

 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(LISTENING Now: تم تغيير الحالة الي${argresult})
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(Username Changed To تم تغيير الاسم الي${argresult}**)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(Avatar Changed Successfully To تم تغييرالصورة الي${argresult}**);
}

if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13%22);
     console.log('test' + argresult);
    message.channel.sendMessage(Streaming: تم تغيير الحالة الي${argresult})
} 
if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(Playing: تم تغير الحالة الي${argresult})
} 



});


client.login(process.env.BOT_TOKEN);
