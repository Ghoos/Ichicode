/* Resumes the song. */

exports.run = async (client, msg) => {
  if (!msg.guild.voiceConnection) throw 'I am not connected in a voice channel!';
  if (msg.guild.voiceConnection.dispatcher.paused === false) return msg.send('The stream is not paused!');
  msg.guild.voiceConnection.dispatcher.resume();
  return msg.send('Resumed!');
};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 2500,
  nsfw: false,
};

exports.help = {
  name: 'resume',
  description: 'Resumes the current song.',
  usage: '',
  usageDelim: '',
  extendedHelp: '',
};