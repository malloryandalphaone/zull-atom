const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);

client.on("ready", () => {
client.user.setStatus('dnd');
client.user.setGame("- Submit.", "https://www.twitch.tv/idk");
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
 // client.user.setActivity("Royal Orders.",{type: 'WATCHING'});
});

const devs = ["518113766915702789", "380307890235506698", "517697831969095690"]// ايدي الخاص بحسابك
 
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});


client.on("message",async msg => {
    var prefix = '!';
    if(msg.content.startsWith(prefix  + "submit")){
        var channel = msg.guild.channels.find("name", "submissions");
        if(!channel) return msg.reply("- **i find Channel `submissions`.**`")
    let em = client.emojis.find(e => e.name === "bot");
    let fltr = m => m.author.id === msg.author.id
    let name = '';
   await msg.channel.send('- :orange_book:**, Type Your Name?**.').then(e => {
msg.channel.awaitMessages(fltr, {
    time: 600000,
    max: 1
})
.then(co => {
    name = co.first().content
    co.first().delete()
    let age = '';
    e.edit(`- :green_book:**, Type Your Age?**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })  
     .then(co => {
     age = co.first().content
     co.first().delete();
     let from = '';
     e.edit(`- :closed_book:**, Type Name Of The Game?**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })
     .then(co => {
      from = co.first().content
      co.first().delete();
      e.edit("- **Are You Sure On Your Submit?**").then(o => {
          o.react("❌")
          .then(() => o.react('✅'))
            .then(() =>o.react('❌'))
            let react1 = (reacton, user) => reacton.emoji.name === '✅' && user.id === msg.author.id
            let react2 = (reacton, user) => reacton.emoji.name === '❌' && user.id === msg.author.id
            let cr1 = o.createReactionCollector(react1, { time: 12000 });
            let cr2 = o.createReactionCollector(react2, { time: 12000 });
            cr2.on("collect", r => {
                msg.reply("- **Done Your Submite Has Been Cancelled**").then(k => {
                    o.delete(2222);
                    k.delete(2222);
                 
                })
            })
            cr1.on("collect", r => {
                msg.reply("- **Done Your Submite Has Been Send**").then(b => {
                    o.delete(2222);
                    b.delete(2222);
                   let emb = new Discord.RichEmbed()
                   .setTitle("- Submit to Clan :")
                   .addField("**» Name :**", name)
                   .addField("**» Age :**", age)
                   .addField("**» Name Of The Game :**", from)
                   .addField("**- Submit by :**", msg.author)
                   .addField("**- ID Account :**", msg.author.id)
                   channel.send(emb);
                })
               
            })
      })
     })
     })
     })
    })
})
   })
    }
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('548208534618112020');
  let em = client.emojis.find(e => e.name === "no");
  if(message.content.startsWith(prefix + "Refussssal")) {
  if(message.guild.id !== '548103774116380682') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("- **Mention The member.**");

  acRoom.send(`» ${mention},\n» **Your unAcceptable for The Submit,** ${em}`)
  }
});
 
 
client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('548208534618112020');
  let em = client.emojis.find(e => e.name === "yes");
  if(message.content.startsWith(prefix + "acceptasssnce")) {
    if(message.guild.id !== '548103774116380682') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('- **Mention The member.**');
    if(!role) return message.reply('- **Type Name Rank.**');
    if(!mySupport) return message.reply('- **i Find The Rank.**');
    if(mention.roles.has(mySupport)) return message.reply('- **The Member has a ready have the rank.**');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`» ${mention},\n» **Your Acceptable for The Submit,** ${em}`);
    });
  }
});



client.login(process.env.BOT_TOKEN);
