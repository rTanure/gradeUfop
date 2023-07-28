const data_ele = [
  [
    { id: "CEA038", nome: "QUIMICA GERAL", requisitos: [] },
    { id: "CEA039", nome: "QUIMICA GERAL EXPERIMENTAL", requisitos: [] },
    {
      id: "CEA049",
      nome: "GEOMETRIA ANALITICA E ALGEBRA LINEAR",
      requisitos: [],
    },
    {
      id: "CEA050",
      nome: "CALCULO DIFERENCIAL E INTEGRAL I",
      requisitos: [],
    },
    {
      id: "CEA204",
      nome: "INTRODUCAO A ENGENHARIA ELETRICA",
      requisitos: [],
    },
    { id: "CEA458", nome: "METODOLOGIA DA PESQUISA", requisitos: [] },
    {
      id: "CSI030",
      nome: "PROGRAMACAO DE COMPUTADORES I",
      requisitos: [],
    },
    { id: "EAD707", nome: "COMUNICACAO E EXPRESSAO", requisitos: [] },
  ],
  [
    { id: "CEA026", nome: "DESENHO COMPUTACIONAL", requisitos: [] },
    {
      id: "CEA051",
      nome: "CALCULO DIFERENCIAL E INTEGRAL II",
      requisitos: ["CEA049", "CEA050"],
    },
    {
      id: "CEA055",
      nome: "ESTATISTICA E PROBABILIDADE",
      requisitos: ["CEA050"],
    },
    {
      id: "CEA061",
      nome: "FISICA I",
      requisitos: ["CEA049", "CEA050"],
    },
    {
      id: "CSI488",
      nome: "ALGORITMOS E ESTRUTURA DE DADOS I",
      requisitos: ["CSI030"],
    },
  ],
  [
    {
      id: "CEA052",
      nome: "CALCULO DIFERENCIAL E INTEGRAL III",
      requisitos: ["CEA051"],
    },
    {
      id: "CEA056",
      nome: "INTRODUCAO AS EQUACOES DIFERENCIAIS ORDINARIAS",
      requisitos: ["CEA051"],
    },
    {
      id: "CEA062",
      nome: "FISICA II",
      requisitos: ["CEA038", "CEA039", "CEA051", "CEA061"],
    },
    {
      id: "CEA063",
      nome: "FISICA III",
      requisitos: ["CEA038", "CEA039", "CEA051", "CEA055", "CEA061"],
    },
    {
      id: "CEA341",
      nome: "PRINCIPIOS DE ELETRONICA DIGITAL",
      requisitos: ["CSI030"],
    },
  ],
  [
    {
      id: "CEA057",
      nome: "METODOS MATEMATICOS APLICADOS A ENGENHARIA ELETRICA",
      requisitos: ["CEA052", "CEA056"],
    },
    {
      id: "CEA064",
      nome: "FISICA IV",
      requisitos: ["CEA052", "CEA056", "CEA062", "CEA063"],
    },
    {
      id: "CEA552",
      nome: "CIRCUITOS ELETRICOS I",
      requisitos: ["CEA056", "CEA062"],
    },
    { id: "CSI148", nome: "ANALISE NUMERICA", requisitos: ["CSI030"] },
    {
      id: "CSI203",
      nome: "ORGANIZACAO E ARQUITETURA DE COMPUTADORES I",
      requisitos: ["CEA341", "CSI030"],
    },
  ],
  [
    {
      id: "CEA065",
      nome: "MECANICA QUANTICA APLICADA",
      requisitos: ["CEA057", "CEA064"],
    },
    {
      id: "CEA502",
      nome: "ELETROMAGNETISMO",
      requisitos: ["CEA052", "CEA063", "CEA552"],
    },
    {
      id: "CEA555",
      nome: "MODELAGEM E ANALISE DE SISTEMAS LINEARES",
      requisitos: ["CEA057", "CEA064", "CEA552", "CSI148"],
    },
    { id: "CEA562", nome: "SINAIS E SISTEMAS", requisitos: ["CEA056"] },
    {
      id: "CEA563",
      nome: "CIRCUITOS ELETRICOS II",
      requisitos: ["CEA064", "CEA552"],
    },
  ],
  [
    {
      id: "CEA550",
      nome: "MAQUINAS ELETRICAS I",
      requisitos: ["CEA502", "CEA563"],
    },
    { id: "CEA561", nome: "ELETRONICA I", requisitos: ["CEA552"] },
    {
      id: "CEA570",
      nome: "SISTEMAS DE CONTROLE I",
      requisitos: ["CEA555", "CEA562"],
    },
    {
      id: "CEA573",
      nome: "SISTEMAS DE POTENCIA I",
      requisitos: ["CEA563"],
    },
    {
      id: "CEA582",
      nome: "FUNDAMENTOS DE COMUNICACOES",
      requisitos: ["CEA562"],
    },
  ],
  [
    {
      id: "CEA560",
      nome: "MAQUINAS ELETRICAS II",
      requisitos: ["CEA550"],
    },
    {
      id: "CEA571",
      nome: "ELETRONICA II",
      requisitos: ["CEA065", "CEA555", "CEA561"],
    },
    {
      id: "CEA580",
      nome: "MICROPROCESSADORES E MICROCONTROLADORES",
      requisitos: ["CEA561", "CSI203"],
    },
    {
      id: "CEA583",
      nome: "SISTEMAS DE POTENCIA II",
      requisitos: ["CEA573"],
    },
  ],
  [
    {
      id: "CEA147",
      nome: "ELETRONICA EMBARCADA",
      requisitos: ["CEA580"],
    },
    {
      id: "CEA581",
      nome: "ELETRONICA DE POTENCIA",
      requisitos: ["CEA571"],
    },
    {
      id: "CEA671",
      nome: "PROCESSAMENTO DIGITAL DE SINAIS",
      requisitos: ["CEA562"],
    },
    { id: "EAD344", nome: "TEORIA DA ADMINISTRACAO I", requisitos: [] },
  ],
  [
    {
      id: "CEA572",
      nome: "INSTRUMENTACAO",
      requisitos: ["CEA561", "CEA570"],
    },
    {
      id: "CEA590",
      nome: "ACIONAMENTOS ELETRICOS",
      requisitos: ["CEA560", "CEA581"],
    },
    {
      id: "CEA598",
      nome: "PROJETO EM ENGENHARIA ELETRICA",
      requisitos: ["CEA458", "EAD707"],
    },
    {
      id: "CSI548",
      nome: "REDES DE COMPUTADORES I",
      requisitos: ["CSI488"],
    },
    { id: "EAD351", nome: "FILOSOFIA E ETICA", requisitos: [] },
  ],
  [
    {
      id: "CEA066",
      nome: "FUNDAMENTOS DE CIENCIA DO AMBIENTE",
      requisitos: ["CEA038", "CEA039", "CEA062", "CEA063"],
    },
    {
      id: "CEA593",
      nome: "MATERIAIS ELETRICOS",
      requisitos: ["CEA038", "CEA039", "CEA065", "CEA502"],
    },
    { id: "CEA594", nome: "PROJETO INTEGRADOR", requisitos: [] },
    {
      id: "CEA595",
      nome: "INFORMATICA INDUSTRIAL",
      requisitos: ["CSI030", "CSI548"],
    },
    {
      id: "CEA597",
      nome: "INSTALACOES ELETRICAS",
      requisitos: ["CEA563"],
    },
  ],
];
