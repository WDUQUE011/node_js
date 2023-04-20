import pegaArquivo from "./index.js";  
import ler from "./leitura.js";
import extraiLinks from "./links.js";
import validarURL from "./http-validacao.js"; 
import chalk from "chalk";
const caminho = process.argv;


async function processaTexto(caminho){
    const resultado = await pegaArquivo(caminho[2])
    
    if(caminho[3] === 'valida'){
        console.log(chalk.cyan("LINKS VALIDADOS: "),await validarURL (resultado))
    }

    
    else if(caminho[3] === 'leitura'){
           await ler(caminho[2])
    }


    else if(caminho[3] === 'links'){
        const linkTexto="São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"
   
        extraiLinks(linkTexto)
    }
       
    else{
        console.log(chalk.red("Erro de programa: informe a função desejada corretamente"))
    }

}



processaTexto(caminho);