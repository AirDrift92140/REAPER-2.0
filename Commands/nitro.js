const Discord = module.require("discord.js");

module.exports = {
   name: "nitro",
   description: "Fake a nitro gift",
   run: async(client, message, args) => {
   function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   var images = [
   `https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg`,
   `https://cdn.discordapp.com/attachments/716917641209708647/748945228907413675/IMG_20200828_220208.jpg`
   ];
   const embed = new Discord.MessageEmbed()
   .setTitle("Here is your Nitro")
   .setDescription(`https://discord.gg/${makeid(10)}`)
   .setImage(images[Math.floor(Math.random()*images.length)])
   .setColor("RANDOM");
  message.channel.send(embed);
}
    }
}
