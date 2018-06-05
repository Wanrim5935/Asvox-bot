const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("NDUzNTk5MzEyMjQ1NDI0MTM4.DfhPBw.Js6NDRSRgDKmlrHSeK7CbxZYDho");

client.on('message' , message => {

    if (message.content === "*bonjour"){
        message.reply("Bonjour à toi, jeune padawan ! Voici mes fonctions :")
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes commandes :D")
        .setDescription("Je suis un bot multifonction :D")
        .addField("*aide", "Affiche les commandes du bot !")
        .addField("*statistiques", "Le bot vous envoie des informations sur votre profile !")
        .addField("*config pc", "le bot te propose des configs !")
        .setFooter("Menu d'aide pour l'utilisation du bot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande *bonjour")
    }
});

client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("servir la communauté");
});

client.on('message' , message => {

    if (message.content === "*config pc"){
        message.reply("Salut ! Pour faire ta config, indique moi quelle est ton utilisation (jeu, stream, montage, encodage, bureautique... suivi de ton budget ( 350€, 400€, 450€, 500€, 550€, 600€, 650€, 700€, 750€, 800€, 850€, 900€, 950€, 1000€, 1050€, 1100€, 1150€, 1200€... Modèle : *config pc [utilisation] [budget]");  
    }
});

client.on('message' , message => {

    if (message.content === "*niveaux"){
        message.reply("Salut ! *Le panneau d'affichage de la* **Skytech Community** *est ici* ! https://mee6.xyz/leaderboard/406933528169938955.")  
    }
});

client.on('message' , message => {

    if (message.content === "*config pc jeu 1000€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 1000€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 5 1500X (3.5 GHz)")
        .addField("Carte mère", "MSI B350 PC MATE")
        .addField("Mémoire", "DDR4 HyperX Fury, Noir, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "KFA2 GeForce GTX 1070 Ti EX, 8 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "Cooler Master MasterBox Lite 5")
        .addField("Alimentation", "Be Quiet ! Pure Power 10 CM, 600W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=lojihjBNyLxybiRF249YPDd2O1QiFaJ61yPF%2FRueyvo%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log('Un utilisateur a fait la commande config pc jeu 1000€');
      
    }
    
    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes commandes :D")
        .setDescription("Je suis un bot qui permet de faire des configs pc")
        .addField("*aide", "Affiche les commandes du bot !")
        .addField("*statistiques", "Le bot vous envoie des informations sur votre profile !")
        .setFooter("Menu d'aide pour l'utilisation du bot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande *aide")
    }

    if(message.content === prefix + "config pc jeu 800€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 800€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 5 1400 (3.2 GHz)")
        .addField("Carte mère", "MSI B350 GAMING PLUS")
        .addField("Mémoire", "DDR4 G.Skill Ripjaws V, Rouge, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "EVGA GeForce GTX 1060 SSC GAMING ACX 3.0, 6 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "Cooler Master MasterBox Lite 5")
        .addField("Alimentation", "Corsair CX450, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=bCnOannpxAos5onxuXoiVasXXC7v6l6xMYZLOgRW5Ps%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 800€")
    }

    if(message.content === prefix + "config pc jeu 750€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 750€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 1200 (3.1 GHz)")
        .addField("Carte mère", "MSI B350 GAMING PLUS")
        .addField("Mémoire", "DDR4 G.Skill Ripjaws V, Rouge, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "EVGA GeForce GTX 1060 SSC GAMING ACX 3.0, 6 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "Cooler Master MasterBox Lite 5")
        .addField("Alimentation", "Corsair CX450, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=GgBZ9METS1ZerYGQGkkZ6GVV6dHRi4XwVYb93uLw6qM%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 750€")
    }

    if(message.content === prefix + "config pc jeu 700€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 700€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 1200 (3.1 GHz)")
        .addField("Carte mère", "MSI B350M PRO-VDH")
        .addField("Mémoire", "DDR4 G.Skill Ripjaws V, Rouge, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "KFA2 GeForce GTX 1060 OC, 6 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "Cooler Master MasterBox Lite 5")
        .addField("Alimentation", "Corsair CX450, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=X87Nq3%2BbiNX298Or7KlMC1474n4RJc1c9SyEmJgkf9Y%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 700€")
    }

    if(message.content === prefix + "config pc jeu 650€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 650€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 1200 (3.1 GHz)")
        .addField("Carte mère", "Asus PRIME B350M-A")
        .addField("Mémoire", "DDR4 G.Skill Aegis, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "KFA2 GeForce GTX 1060 OC, 6 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "EVGA 450 BT, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=v3%2BKGbEk2RELscTkqkgggp62%2B3ze3PPJuDr6YkNhpdY%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 650€")
    }

    if(message.content === prefix + "config pc jeu 600€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 600€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 1200 (3.1 GHz)")
        .addField("Carte mère", "Asus PRIME B350M-A")
        .addField("Mémoire", "DDR4 G.Skill Aegis, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "Palit GeForce GTX 1060 DUAL, 3 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "EVGA 450 BT, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=ncvDmLJmY0zs%2Fk7K1qR%2BSOXtY%2BduQsvZexqubjtqiSY%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 600€")
    }

    if(message.content === prefix + "config pc jeu 500€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 500€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "Intel Pentium Gold G4560 (3.5 GHz)")
        .addField("Carte mère", "Gigabyte B250M-D2V")
        .addField("Mémoire", "DDR4 G.Skill Aegis, 8 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "KFA2 GeForce GTX 1050 Ti OC, 4 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "EVGA 450 BT, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=pDI%2FE%2FnEw%2FjNQXYLz3rD4ksvh0S7NiHRcNIG4pSnn18%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 500€")
    }

    if (message.content === "*config pc jeu 550€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 550€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 1200 (3.1 GHz)")
        .addField("Carte mère", "Asus PRIME B350M-A")
        .addField("Mémoire", "DDR4 G.Skill Aegis, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "MSI GeForce GTX 1050 Ti AERO ITX 4G OCV1, 4 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "EVGA 450 BT, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=htHqVlBWtIxDIVfLURtJgpIzYUsIt1fXzPpzLH5c8jE%3D")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log('Un utilisateur a fait la commande config pc jeu 450€');
      
    }

    if (message.content === "*config pc jeu 450€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 450€ :D")
        .setDescription("Mise à jour le 27/05/2018")
        .addField("Processeur", "Intel Pentium Gold G4560")
        .addField("Carte mère", "Gigabyte B250M-DS3H")
        .addField("Mémoire", "DDR4 G.Skill Ripjaws 4, Rouge, 2 x 4 Go, 2400 MHz, CAS 15")
        .addField("Carte graphique", "KFA2 GeForce GTX 1050 OC, 2 Go")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "EVGA 450 BT, 450W")
        .addField("Lien configomatic de chez @TopAchat", "https://www.topachat.com/pages/configomatic.php?c=KRKB%2BxGaJaHwhbuC%2FFaiOaYYdYrPN5%2BY82F3rQB1dco%3D")
        .setFooter("Configuration réalisée par @[ZPA] KAWANIKI#8793")
        message.channel.sendMessage(help_embed);
        console.log('Un utilisateur a fait la commande config pc jeu 350€');
      
    }

    if(message.content === prefix + "config pc jeu 350€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 350€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 3 2200G Wraith Stealth Edition (3.5 GHz)")
        .addField("Carte mère", "MSI A320M PRO-VD PLUS")
        .addField("Mémoire", "G.Skill Aegis 8 Go (1 x 8 Go) DDR4 2400 MHz CL17")
        .addField("Carte graphique", "Radeon Vega Graphics 8 CU")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "Corsair Builder Series VS450 80PLUS V2")
        .addField("Lien configurateur pc de chez @ShopHardware", "https://shop.hardware.fr/configurateur/4f9ca542f5ed11a035d9d09c52825db1")
        .addField("Attention ! La carte mère doit être mise à jour", "(LDLC et Shop.Hardware proposent de mettre les cartes mères A320, B350 et X370 à jour)")
        .setFooter("Configuration réalisée par @Wanrim le Shiba#0163")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 350€")
    }
    
    if(message.content === prefix + "config pc jeu 400€"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Configuration pc de jeu avec un budget de 400€ :D")
        .setDescription("Mise à jour le 06/05/2018")
        .addField("Processeur", "AMD Ryzen 5 2400G Wraith Stealth Edition (3.6 GHz)")
        .addField("Carte mère", "MSI A320M PRO-VD PLUS")
        .addField("Mémoire", "G.Skill Aegis 8 Go (1 x 8 Go) DDR4 2400 MHz CL15")
        .addField("Carte graphique", "Radeon Vega Graphics 11 CU")
        .addField("Disque dur", "Seagate BarraCuda, 1 To")
        .addField("Boitier", "BitFenix Nova, Noir")
        .addField("Alimentation", "Corsair Builder Series VS450 80PLUS V2")
        .addField("Lien configurateur pc de chez @ShopHardware", "https://shop.hardware.fr/configurateur/40d6453101c3ee692f20d247919844f2")
        .addField("Attention ! La carte mère doit être mise à jour", "(LDLC et Shop.Hardware proposent de mettre les cartes mères A320, B350 et X370 à jour)")
        .setFooter("Configuration réalisée par @🗡Lunardix VON desu ga!#2846")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande config pc jeu 400€")
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "statistiques":

        var userCreateDate = message.author.createdAt.toString().split (" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("FCDC12")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + " " + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés, tu viens de recevoir un message !")
        message.author.send({embed: stats_embed});
        break;
        case "ping":
        message.channel.sendMessage('Pas terrible tout sa ! `' + `${message.createdTimestamp - Date.now()}` + ' ms`')
        break;
        case "clear":
        if (message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.fetchMessages()
                .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur")})}
    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        });

}

});
