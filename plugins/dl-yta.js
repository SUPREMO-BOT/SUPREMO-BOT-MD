/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,command:r,text:l,args:i})=>{if(!l)return a.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+r} https://youtu.be/vbhVFqYwxLM`);if(!isUrl(i[0])&&!i[0].includes("youtu"))return reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let n;await a.reply(MultiNK.Proces(await t.getName(a.sender)));let o=encodeURIComponent(l);try{let d=await fetchJson(`https://latam-api.vercel.app/api/ytmp3?apikey=${MyApiKey}&q=${o}`);await getBuffer(d.logo),await t.sendMessage(a.chat,{document:{url:d.descarga},mimetype:"audio/mpeg",fileName:`${d.titulo}.mp3`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:a}).catch(e=>{a.reply(MultiNK.Error1())})}catch(u){a.reply(MultiNK.Error0())}};handler.help=["yta <link>"],handler.tags=["servicio"],handler.command=/^(yta)$/i,handler.limit=!0;export default handler;
