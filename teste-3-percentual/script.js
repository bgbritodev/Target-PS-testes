const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
  
  const percentuais = {};
  
  for (let estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    percentuais[estado] = percentual;
  }
  
  console.log(percentuais);

document.write(
    "<h2> SP:" + percentuais.SP + "<h2/> ", "<h2> ES:" + percentuais.ES + "<h2/>", "<h2> MG:" + percentuais.MG + "<h2/> ","<h2> RJ:" + percentuais.RJ + "<h2/> ", "<h2> Outros:" + percentuais.Outros + "<h2/> ")
  