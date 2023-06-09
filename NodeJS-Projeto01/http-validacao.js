import fetch from 'node-fetch';

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url =>{
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;
}

function gerarArrayDeURL(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())

}

async function validarURL(arrayLinks){
    const links = gerarArrayDeURL(arrayLinks);
    const statusLinks = await checaStatus(links);    
    return statusLinks;

}



export default validarURL;