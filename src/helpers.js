function filtraOcorencias(paragrafo) {
  return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

export function montaSaidaArquivo(listaPalavras) {
  let textoFinal = '';
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorencias(paragrafo).join(', ');
      textoFinal += `Palavras duplicadas no paragrafo ${indice + 1}: ${duplicadas} \n`
  })
  return textoFinal;
}