const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("548229379889823758");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('dnd');
client.user.setGame("Clan ⌬", "https://www.twitch.tv/idk");
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
 // client.user.setActivity("Royal Orders.",{type: 'WATCHING'});
});


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });



//client.on('message', message => {
  //if (message.content.startsWith(prefix + "help")) {
  //message.channel('- **Command's**

//\`#\` **!use** لتفعيل كود
//\`#\` **!problem** لفتح تذكرة
//\`#\` **!hypixel** لعرض ملفك في سيرفر هآيبكسل
//\`#\` **!namemc** لرؤية ملفك في موقع نيم ام سي
//\`#\` **!server** لرؤية حآلة السيرفر في مآينكرافت
//\`#\` **!ping** لعرض سرعة أتصالك
//\`#\` **!avatar** لرؤية');
  //  }
//});




client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
});


var minecrafta = [
  "Test 1",
  "sss",
  "ssssa",
  "ssasd",
  "srij",
  "hfrie",
  "uierfhuier",
  "rifhe",
  "hueruire",
  "111",
];

client.on('message', message => {
 if (message.content.startsWith("!minecraft")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('Your Account Is : ' ,
`${minecrafta[Math.floor(Math.random() * minecrafta.length)]}`)
   message.author.sendEmbed(embed);
console.log('[minecrafta] Send By: ' + message.author.username)
  }
});


client.on('message', message => {
  var prefix ="!"
        if(message.content.startsWith(prefix + 'namemc')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("- **Please provide a Minecraft username.**");
            var link = (`https://namemc.com/${args}`);
            message.channel.send(link);
        }
    });



client.on('message', message => {
  var prefix = "!"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("- **Please provide a Minecraft username.**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });



client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user}, **Typing with Your Stats is Offline (:**`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});



//client.on("guildMemberAdd", function(member) {
  //  const wc = member.guild.channels.find("name", "chat")
    //    const embed = new Discord.RichEmbed()
      //  .setColor('RANDOM')
       // .setAuthor(member.user.tag, member.user.avatarURL)
      //  .setFooter("- Welcome to Warriors.")
     //   .setTimestamp()
       // return wc.sendEmbed(embed);
//});




client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('- **You dont have Permission.**');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('- **I dont have Permission.**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("- **يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`- **Cleared Message** **\`${args}\`**.`).then(messages => messages.delete(5000));
  }
  });



client.on('message', msg => {
    if(msg.content === '!team') {
        if (!msg.guild.member(msg.author).roles.has('548128401928486952')) return;
        if(!msg.channel.guild) return msg.reply(":x: **This is Command for Servers Only.**");
       
if (msg.author.bot) return;
  const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setFooter("\nإذا اسمك مو موجود كلم الإدارة")
            .setTitle("- **Tactics Team,**")
            .setDescription(`

» \`ReeeBeL\`
» \`Mr447\`
» \`wHybH\`
» \`Quixxyy\`
» \`1zull\`
» \`ImAbuSalem | AbuSalem\`
» \`1Hero_\`
» \`1Rakan\`
» \`1iSoCute\`
» \`-\`
» \`-\`
» \`-\`
» \`-\`
» \`-\`

`)


        msg.author.sendEmbed(embed)

    }

});






client.on('guildMemberUpdate', (o,n) => {
    if (n.user.bot) {
        if (o.roles !== n.roles) {
            n.roles.forEach(role => {
                if (!n.roles.find('id', role.id)) n.removeRole(role);
            });
        };
    };
});


const invites = {};

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "chat");
    logChannel.send(`**» Name : ${member} \n» Invite By : <@${inviter.id}>**`);
  });
});




client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'chat');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("WHITE")
    .setDescription(`» Join Discord in __${createdAt.toFixed(0)}__ Day.`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});





const devs = ["518113766915702789", "380307890235506698"]// ايدي الخاص بحسابك
 
const adminprefix = "!";//Narox
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



let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("548103774116380682");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("548103774116380682");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
}
});
client.on('message', Codes => {
  
  if(Codes.content === "!voice") {
      Codes.channel.send("- **Tactics Voice Now : \`"+rebel+"\`.**");
}
});




client.on("message", message => {
  if(message.content.startsWith("!verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
        message.channel.send(`- **Please Type the Number :** __**\`${num}\`**__`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "- Members ♪.")); // اسم الرتبة
      }).catch(() => {
        m.edit(`- **Time End, Please Try Again.**`).then(m2 => m.delete(15000));
      });
    });
  }
});




client.on("message",msg =>{
    let limit = 50; // عدد الرسائل المسموح بها قبل التنضيف
    if(msg.channel.type !== "text") return;
    msg.channel.fetchMessages().then(mm=>{
        if(mm.size >= limit){
            msg.channel.bulkDelete(100).then(() => {
                const embed = new Discord.RichEmbed()
                  //  .setColor("")
                    .setDescription(`- **Automatic Cleared!**`)
                msg.channel.send({ embed }).then( z => z.delete(1600));
                }).catch(err=>msg.channel.send(err.message))
        }
    })
    });




client.on("message", (message) => {
    if(message.content.startsWith(prefix+"c.gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
});


client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}color`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
            }
            });






giftKeys = {};
//const devs = ["380307890235506698","518113766915702789"]; // تقدر تضيف ايدي ثالث نفس الفكره تسوي كذا let devs = ["ايديك","ايدي خويك او إي ادمن","ايدي خويك الثالث"];
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}gift`){
 // if (!msg.guild.member(msg.author).roles.has('548168263318765589')) return;
    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('- **You dont have Permission.**');
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(`**You don't have Permission.**`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(`- **Please Mention a Rank\n \`${prefix}gift <@admin-role>\`**`);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(`**Could't find**\n \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setTitle(`**Done , i Send Key in You'r DM.**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}use`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(`**Please Use the Command :**\n \`${prefix}use <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`- **جاري التحقق من الكود**`)
.setColor("#FFFFFF")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`- **You'r Ready have a rank\n** \`${giftKeys[args].name}\``)
    .setColor("#FFFFFF")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`- **Done ,** \`${giftKeys[args].name}\``)
    .setColor("#FFFFFF")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`- **Error.**`)
    .setColor("#FFFFFF")
    msgs.edit(embed)
  }});
};
});







client.on("message", msg => {
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";//البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);

if(cmd === `${p}repsaasort`){


    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("Couldn't find users.");
    let reason = args.join(" ").slice(22);


let reportembed = new Discord.RichEmbed()
.setDescription("Report Information :")
.setColor("WHITE")
.addField("» Report too", `${rUser}`)
.addField("» Report By", `${msg.author}`)
.addField("» Channel", msg.channel)
.addField("» Reason",`${reason}`)


let reportchannel = msg.guild.channels.find(`name`,"reports")
if(!reportchannel) return msg.channel.send("Couldn't find `reports` channel. ")

msg.delete().catch(O_o=>{});
reportchannel.send(reportembed);
    return;
}
});





client.on('message', async message => {
     let user = message.mentions.users.first() || message.author;
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === '!helssssp') {
message.author.send(`- مرحباََ بك في سيرفر رويآل للإصدار السادس\n\n1 - \`!server Server IP\` لرؤية حالة السيرفر في ماينكرافت\n2 - \`!id\` لرؤية معلومات حول حسابك\n3 - \`!report\` لتقديم الشكاوي\n4 - \`!use code\` لإستخدام كود الرتب`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send(`**يجب آن يكون الخاص لديك مفعل\nلأتمكن من إرسال اليك الرسائل عبر الخاص**\n${user}`);
});
}}});



client.on('message', message => {
    if (!message.guild) return;
    let em = client.emojis.find(e => e.name === "true");
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`:white_check_mark: **Check Your DM.**`)

      message.author.send(`**مدة الرابط : يـوم
 عدد استخدامات الرابط : 5 **`)
    }
});



//client.on("message", msg => {
//  var prefix = '!'//البركفس
//  if(msg.content.startsWith(prefix + 'account')){
//    let embed = new Discord.RichEmbed()
  //  .setColor("WHITE")
   // .addField("Year📆",msg.author.createdAt.getFullYear())
  //  .addField("Hour📆", msg.author.createdAt.getHours())
  //  .addField("Day📆", msg.author.createdAt.getDay())
//    .addField("Month📆", msg.author.createdAt.getMonth())
  //  .addField("Minutes📆", msg.author.createdAt.getMinutes())
  //  .addField("Seconds📆", msg.author.createdAt.getSeconds())
  //  .addField("Full📆", msg.author.createdAt.toLocaleString())
   // .setTimestamp()
 //   msg.channel.send(embed);
 // }
//});








////////


//// client.on("ready", () => { 
///    console.log('By : m7md'); client.user.setPresence({ 
//          status: 'online', 
//          game: { type: 0, name: 'Narox 🍷 , Road To 1K',
//          details: `https://discord.gg/29KpKJy`, 
//          url: 'http://twitch.tv/M7md_Salih', 
//          state: `Deving & Coding`, 
//         application_id: '532682436471947264', 
//   
//         assets: { 
//   small_image: `535061300569571329`, 
//   
//   small_text: 'Narox Devs', 
//   large_image: `535061300569571329`, large_text: `Road To 1K` } 
//   
//   } 
//   
//   }); 
//   });

////


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Mute .`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#FFFFFF')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnMute . `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Deafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnDeafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
  })
});





//client.on('message', message => {
//if(!message.channel.guild) return;
 // if(message.content.startsWith(prefix + 'rainbows')) {
 // if(!message.guild.member(message.author).hasPermission("8")) return message.reply("**You don't have Permission.**").then(msg => msg.delete(5000));;
    //  let role = message.guild.roles.find('name', '❃, VIP | RainBow.')
  //  if(role) return message.channel.send(`**The Rank is Already Created.**`)
//  if(!role){
  //  rainbow =  message.guild.createRole({
   //name: "❃, VIP | RainBow.",//اسم الرتبه
   //color: "#000000",//الون الاساسي للرنبو
  // permissions:[]//الرتبه المسموح بيها للرنبو  مثال MANAGE_ROLES ADMINISTRATOR  
 //نهايه الكود هنا
//})
 
//}
//message.channel.send(':white_check_mark: **The Rank RainBow has been Created.**')//if the step completed
//}})
 
//client.on('ready', () => {//لا تغير شي هنا
  //setInterval(function(){//Codes Server
//      client.guilds.forEach(g => {//Codes Server
            //      var role = g.roles.find('name', '❃, VIP | RainBow.');//اسم رتبه رنبو
          //        if (role) {//Codes Server
        //              role.edit({color : "RANDOM"});//Codes Server
      //            };
    //  });//Codes Server
  //}, 3200);//سرعه تغير الالوان
//})//Codes Server






client.on('message',message =>{
        var command = message.content.toLowerCase().split(" ")[0];
          var args = message.content.toLowerCase().split(" ");
          var userM = message.mentions.users.first()
          if(command == prefix + 'unban') {
              if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
              if(!args[1]) return  message.channel.send('-** Please type the ID of user.**');
              if(args[1].length < 16) return message.reply('-** This ID is not id user.**');
              message.guild.fetchBans().then(bans => {
                  var Found = bans.find(m => m.id === args[1]);
                  if(!Found) return message.channel.send(`-** <@${message.author.id}> This preson not have any ban from this server!**`);
                  message.guild.unban(args[1]);
                  message.channel.send(`:white_check_mark: **Successfully Unbanned <@${args[1]}> From the server!**`);
 
                  let banInfo = new Discord.RichEmbed()
                  .setTitle('**New Unbanned User !**')
                  .setThumbnail(message.author.avatarURL)
                  .setColor('RANDOM')
                  .setDescription(`**\n:airplane: Successfully Unbanned <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
                  .setTimestamp()
                  .setFooter(userM.user.tag, userM.user.avatarURL)
 
                  let incidentchannel = message.guild.channels.find(`name`, "log");
                  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
                  incidentchannel.send(banEmbed);
                  }
 
              )}
            })







client.on('message', message => { 
    var prefix = "!";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length)
    if (command == "add") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**You don't have Permission.**").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**hmmm..**").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let em = client.emojis.find(e => e.name === "true");
    if (message.mentions.users.size < 1) return message.channel.send('**Mention Any Members ..**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.channel.send("**Select Rank ..**").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.channel.send(':white_check_mark: **Done .**').then(msg => {msg.delete(10000)});
    }
    });





let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ AntiBots On Now !.**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        //antibots with ON , OFF ! RARE CODE
        //LIKE PLUSBOT !
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**:white_check_mark: AntiBots Off Now !.**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
client.on("guildMemberAdd", member => {
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {
onoff: 'Off'
}
  if(antibots[member.guild.id].onoff === 'Off') return;
if(member.user.bot) return member.kick()
})
 
fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
 
})







client.on("message", (message) => {
 
   if (message.content.startsWith("!problem")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "- Staff.")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "- Staff.");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **The ticket has been Created, [ #${c.name} ].**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`${message.author.username}!`, `**Please explain the problem in detail.**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`- **Are u Sure Close the ticket?\nType: !confirm**.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '!confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});











client.on('message', message => {
 
if (message.content === prefix + "muted") {
//if (!message.guild.member(message.author).roles.has('538051773089447987')) return;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t havepermissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
 
          }).then(() => {
              message.reply("**:white_check_mark: Channel has been muted !")
          });
}
 if (message.content === prefix + "unmuted") {
 //if (!message.guild.member(message.author).roles.has('538051773089447987')) return;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have permissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
 
          }).then(() => {
              message.reply("**:white_check_mark: Channel has been Unmuted !**")
          });
}
 
 
});


client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('!server')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("- **Write Server IP.**");
        let embed = new Discord.RichEmbed()
      //  .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("» 📜 Server NIP",`${args}`,true)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`» Warriors,`)
    message.channel.send(embed)      
}});



client.on("message", msg => { 
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '!'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(cmd === `${prefix}warn`){//الامر
if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send('**:x: You don\'t have Permission.**');
//  if (!msg.guild.member(msg.author).roles.has('538054323490521088')) return;

  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("**Mention Any Member ..**");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setTitle("Warning :")
    .setColor("RANDOM")
    .addField("» Warn User", `${rUser}`)
    .addField("» Warn By", `${msg.author}`)
    .addField("» Reason",`${reason}`)
    .setFooter("Please Respect the Rules.")
    
    
    let reportchannel = msg.guild.channels.find(`name`,"chat"); //حط هنا اسم الروم الي يوريك بعض المعلومات
    if(!reportchannel) return msg.channel.send("Couldn't find `royal` channel. "); //ط هنا اسم الروم الي يوريك بعض المعلومات
    
    msg.delete().catch(O_o=>{});
    reportchannel.send(reportembed);
    let role = msg.guild.roles.find(`name`, '# Warrning.'); //حط هنا اسم الرتبة
    if(!role) return msg.guild.channel.send("Could't find `chat` role."); //حط هنا اسم الرتبة
    rUser.addRole(role);
    
        return;
    }
    });




client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var RaYaN= new Discord.RichEmbed()
        .setColor('WHITE')
        .setTimestamp()
        .setTitle('`New Message in private`')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n${message.content}`)
        .setFooter(`- ${message.author.tag} | (${message.author.id}).`)
    client.channels.get("548195172975116298").send({embed:RaYaN});
    }
});




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`- **Welcome to Tactics :**

\`#\` يجب آلتأدب بالأداب العآمة وعدم التطرق للموآضيع السيآسية والدينية
\`#\` يجب عدم النشر بالخآص او آلمحآولة بأستدرآج الأعضاء الى التيم سبيك 
\`#\` يجب عليك التفآعل كعضو بالفريق لتجنب الإنذار والطرد من الفريق 

 ${member} :four_leaf_clover:.`) 
}).catch(console.error)
});




client.on('message', message => {
    var prefix = "!";
    let em = client.emojis.find(e => e.name === "true");
    if(message.content.startsWith(prefix + 'move all')) {
   // if (!message.guild.member(message.author).roles.has('538054323662356502')) return;
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       //if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });





//client.on("message", message => {
//    var prefix = "!";
//    const command = message.content.split(" ")[0];

//    if(command == prefix+"vk"){
//      //    if (!message.guild.member(message.author).roles.has('⁎ Voice kick Access.')) return;
//if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
//            return message.reply('you do not have permission to perform this action!');
//        }

 //       var member = message.guild.members.get(message.mentions.users.array()[0].id);
  //      if(!message.mentions.users){
  //          message.reply("**Mention Any Member ..**")
   //         return;
   //     }

  //  if(!member.voiceChannel){
  //  message.reply("**i Can't ..**")
  //  return;
  //  }
         //     message.guild.createChannel('voicekick', 'voice').then(c => {
          //      member.setVoiceChannel(c).then(() => {
           //         c.delete(305).catch(console.log)
        


    
  //    });
  //   });
    
//});


client.on('message', msg => {

    if (msg.content == '!join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
});







client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});



client.on('message' , message => {
      var prefix = "!";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bcrole")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `$rolebc @role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });




client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!';
    
    let em = client.emojis.find(e => e.name === "true");
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === 'requests');
  
  
    if(command == prefix + 'rossssyal') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '# Royal.');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send('**- أنت بالفعل لديك رتبة الفريق.**');
        if(!subChannel) return message.channel.send('يجب أن يتوفر روم بأسم :: Requests');
       
        message.channel.send(':timer: | **أرسل، إسمك الحقيقي**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **قم بكتابة عمرك الأن**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **أكتب اسم دولتك**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك أكتب اسمك في اللعبه مع مراعاة الأحرف**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                        let em = client.emojis.find(e => e.name === "true");
                                        let embedS = new Discord.RichEmbed()
                                        .setDescription('**\n هل ترغب بإرسآل المعلومات ادناه الى الإدارة؟**')
                                        .setColor('WHITE')
                                        .addField('- الاسم :', name, true)
                                        .addField('- العمر :', age, true)
                                        .addField('- المدينة :', fromwhere, true)
                                        .addField('- اسمك في اللعبه :', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send('**- تم إرسآل طلب تقديمك للدخول الى الفريق**\nيجب أن تكون الرسائل الخاصة بك مفتوحة ليتمكن\nالبوت من إرسال النتيجة اليك.').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setColor('WHITE')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('**» The Name :**', name)
                                                .addField('**» The Age :**', age)
                                                .addField('**» The Country :**', fromwhere)
                                                .addField('**» The Name in Games :**', fa2dh)
                                                .addField('- Account :', message.author)
                                                .addField('- The ID :', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && ["380307890235506698", "518113766915702789", "529430974136844290", "530973700590141471"].includes(user.id);
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && ["380307890235506698", "518113766915702789", "529430974136844290", "530973700590141471"].includes(user.id);
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`**- تم قبول تقديمك للدخول الى فريق رويآل**\n\nيرجى التفاعل لتجنب الإنذارات والتي ستلحق بالطرد من الفريق.`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'requests').send(`<@${message.author.id}> :leaves: \n\n**The Member has accepting for join Clan** __Royal__.`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`**- عذراََ لقد تم رفض تقديمك للدخول الى فريق رويآل**\n\nللأستفسار حول رفضك يرجى مخاطبة الإدارة العليا.`);
                                                        message.guild.channels.find(r => r.name === 'requests').send(`<@${message.author.id}> :maple_leaf: \n\n**The Member is not accepting for join Clan** __Royal__.`);
                                                    }).catch();
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send('**- تم إلغاء تقديمك.**');// Alpha Codes
                                            });
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






//  client.on("message", message => {
  //  if(message.content.startsWith(".verify")) { // الامر
  //    let number = Math.floor((Math.random() * 4793) + 17); // تعريف الرقم بيكون عشوائي math.random + math.floor عشان مايكون فيه فواصل
  //  var Canvas = require('canvas') // تعريف الكانفاس لازم تشيله اذا كنت معرفه قبل
 // , Image = new Canvas.Image // صنع صورة جديدة
 // , canvas = Canvas.createCanvas(89, 50) // قياسات الصورة
 // , ctx = canvas.getContext('2d');
  //ctx.font = '25px Impact'; // الخط
  //let args = message.content.split(" ").slice(1); // تعريف ال args
 
//Image.src = canvas.toBuffer();
 
  //  console.log(Image);
//ctx.fillText(num,17, 35); // احداثيات الرقم
 
 
//ctx.beginPath();
//ctx.lineTo(50, 102);
//ctx.stroke();
  //    message.reply('**قم بكتابة الرقم الضاهر بالصورة**')
    //  let filter = m => m.author.id === message.author.id; // تعريف الفلتر
      //message.channel.sendFile(canvas.toBuffer()).then(m => { //يرسل الصورة
        //message.channel.awaitMessages(res => res.content == `${number}` && filter, { //  محتوى الرسالة الي لازم يكتبها + لازم يكتبها بس الكاتب اذا كتب الرقم شخص ثاني مايزبط ونلاحظ ذا من خلال تعريف الفلتر
          //max: 1,
          //time: 60000,
          //errors: ['time'],
       // }).then(collected => { // اذا كتب الرقم صح
        //  message.reply('**تم تفعيلكء**') // يرد على العضو
         // message.delete(); // يحذف الرسالة
         // m.delete();
         // message.member.addRole(message.guild.roles.find(c => c.name == "◈- Verified")); // الرتبة الي تبي البوت يعطيها للعضو
         // message.member.removeRole(message.guild.roles.find(c => c.name == "◈- Not Verified")); // (الرتبة الي تبي البوت يشيلها من العضو (يمديك تحذف ذا السطر
          // السطر الي فوق يمديك تشيله اذا كنت تبي  البوت مايشيل منه اي رتبة بس يعطيه رتبة
        //}).catch(() => {
          //m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
//});
//})
//}
//})






  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  
  let em = client.emojis.find(e => e.name === "true");
  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
                // if (!message.guild.member(message.author).roles.has('⁎ Ban Access.')) return;
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send("**Mention any Members.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});



client.on('message', message => {
const prefix = "!";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  let em = client.emojis.find(e => e.name === "true");
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don't have Permission");
  //  if (!message.guild.member(message.author).roles.has('538051772342599690')) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**Mention Any Members.**");
  if(!reason) return message.channel.send("**Supply a Reason.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");

  message.guild.member(user).kick(7, user);

 message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});

client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
    //if (!message.guild.member(message.author).roles.has('⁎ Avatar.')) return;
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', async message =>{
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
let em = client.emojis.find(e => e.name === "true");
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I don't have permission** #1").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   //   if (!message.guild.member(message.author).roles.has('538054323460898847')) return;
     if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(':x: **You don\'t have permission.**');
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("- **Mention Any Member.**") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "- Muted.");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "- Muted.",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.channel.send(":x: **Supply Time.**");
 
    await(tomute.addRole(muterole.id));
message.channel.send(`**<@${tomute.id}> has been muted ! :zipper_mouth:**`); //${ms(ms(mutetime))}
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **Unmuted Timeout!**.`);
    }, ms(mutetime));
 
 
 
  }
  
  let esm = client.emojis.find(e => e.name === "true");
if(command === `unmute`) {
 // if (!message.guild.member(message.author).roles.has('538054323460898847')) return;
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You don't have permission.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I don't have permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: **Mention Any Members.**");
 
  let role = message.guild.roles.find (r => r.name === "- Muted.");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("** Already UnMuted!**")
 
  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: **Member has been unmute !**");
 
  return;
 
  }
 
});



client.on('message', msg => {
    if(!msg.guild) return;
    if(msg.channel.id === '543773596317777922') {
    msg.delete().then
        var channel = msg.guild.channels.get("543773977882001409")
        channel.send(msg.member + `\n\n` +msg.content)
    }
});


client.on('message',async message => {
  if(message.content === '!unbans') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: **You don\'t have permission.**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**Hmmm..**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setDescription(`**:white_check_mark: Done.**`)
  message.channel.sendEmbed(embed);
  guild.owner.send(`:white_check_mark: **has Been Unban By <@${message.author.id}> **`) 
  });
  });
  }
  });


//  client.on("message", message => {
// if(!message.channel.guild) return;  
//  if (message.author.bot) return;
 
//  let command = message.content.split(" ")[0];
 
 // if (message.content.split(" ")[0].toLowerCase() === prefix + "rainbow") {
//  if (!message.guild.member(message.author).roles.has('540554460536242176')) return;
//  if (!message.member.hasPermission('MANAGE_ROLES')) return;
//  let user = message.mentions.users.first();
//  let modlog = client.channels.find('name', 'system');
 // let muteRole = client.guilds.get(message.guild.id).roles.find('name', '❃, VIP | RainBow.');
 // if (!muteRole) return message.reply("**I Can't Find rank ..**").catch(console.error).then(message => message.delete(4000))
//  if (message.mentions.users.size < 1) return message.reply('**Mention Any Member ..**').catch(console.error).then(message => message.delete(4000))
 // if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
 // if (message.guild.member(user).addRole(muteRole.id)) {
  //    return message.channel.send(":white_check_mark: **User has given The Vastest Rank **").catch(console.error).then(message => message.delete(4000))
 // } else {
  //  message.guild.member(user).removeRole(muteRole).then(() => {
    //  return message.channel.send(":white_check_mark: **User has given The Vastest Rank **").catch(console.error).then(message => message.delete(4000))
  //  });
 // }
 
//};
 
//});


//if(!reeebel) {
  //  let reeebel = client;
//}
// client.on('message',async message => {
   // if(message.author.bot || message.channel.type === 'dm') return;
   // if(message.content.split(' ')[0] === `${prefix}uptime`) {
   // let uptime = client.uptime;
   // let days = Math.round(uptime * 1.1574E-8);
    // let hours = Math.round(uptime * 2.7778E-7);
    // let minutes = Math.round(uptime * 1.6667E-5);
  //  message.channel.send(`**- Uptime :**\n**${days} Day's ${hours} Hour's ${minutes} Minute's**`);
//}
//});
 



//const prefix = "!";
client.on("message", function(message) {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if (command === "del") {
    message.channel.send("**قم بأختيار الروم المراد حذفه**")
      .then(() => {
        message.channel.awaitMessages(res => res.author.id == message.author.id , {
        max: 1,
        time: 30000,
        errors: ['time']
      })
        .then((collected) => {
          let mentionMessage = collected.first();
          let channel = mentionMessage.mentions.channels.first();
          mentionMessage.channel.send("**Select a time format/nwhere:**/n:one:  = second/n:two:  = minute/n:three:  = hour")
            .then(function(botMessage) {
              console.log(botMessage)
              botMessage.react("1⃣")
                .then(() => botMessage.react("2⃣") )
                .then(() => botMessage.react("3⃣") )
                .then(() => {
                  let filter = (reaction, user) => user.id === message.author.id
                  botMessage.awaitReactions(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                    .then(collected => {
                      var reaction = collected.first();              
                      if (reaction._emoji.name == "1⃣") {
                        message.channel.send("**أكتب عدد الثواني**")
                          .then(() => {
                            message.channel.awaitMessages(res => res.author.id == message.author.id , {
                              max: 1,
                              time: 30000,
                              errors: ['time']
                            })
                              .then((collected1) => {
                                let content = collected1.first().content;
                                message.channel.send("**سوف يتم حذف الروم بعد إنتهاء الوقت**")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + "**تم حذف روم**")
                                }, (1000*parseInt(content)))
                              }).catch(console.error)
                            }).catch(console.error)
                        } else if (reaction._emoji.name == "2⃣") {
                          message.channel.send("**اكتب عدد الدقائق**")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                            })
                              .then((collected2) => {
                                let content = collected2.first().content;
                                message.channel.send("** سوف يتم حذف الروم بعد انتهاء الوقت**")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + " **تم حذف روم**")
                                }, (60000*parseInt(content)))
                              }).catch(console.error)
                          }).catch(console.error)
                        } else if(reaction._emoji.name == "3⃣") {
                          message.channel.send("**اكتب عدد الساعات**")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                              })
                                .then((collected3) => {
                                  let content = collected3.first().content;
                                  message.channel.send("** سوف يتم حذف الروم بعد انتهاء الوقت**")
                                  setTimeout(function() {
                                    channel.delete()
                                    message.channel.send(channel.name + " **تم حذف روم**")
                                  }, (3600000*parseInt(content)))
                                }).catch(console.error)
                            }).catch(console.error)
                        }
                      }).catch(console.error);
                  }).catch(console.error)
              }).catch(console.error);
          }).catch(console.error);
      });
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


client.on('message', message => {
    if (message.content.startsWith(prefix + 'refusal')) {
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('- **You dont have Permission.**');
        if (message.author.bot) return;
        if (!message.guild) return;  
        let em = client.emojis.find(e => e.name === "no");
        let Room = message.guild.channels.find(`name`, 'results');
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()
        //.setColor('')
        .setAuthor(user.username,user.avatarURL)
        .setDescription(`» [ ${em} ] :: - \`تم رفض العضو .\``)
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'accept')) {
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('- **You dont have Permission.**');
        if (message.author.bot) return;
        if (!message.guild) return;  
        let em = client.emojis.find(e => e.name === "yes");
        let Room = message.guild.channels.find(`name`, 'results');
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()
        //.setColor('')
        .setAuthor(user.username,user.avatarURL)
        .setDescription(`» [ ${em} ] :: - \`تم قبول العضو .\``)
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});





client.login(process.env.BOT_TOKEN);
