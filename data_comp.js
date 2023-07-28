const data_comp = [
  [
    {
      id: "CEA038",
      nome: "QUIMICA GERAL",
      requisitos: [],
    },
    {
      id: "CEA039",
      nome: "QUIMICA GERAL EXPERIMENTAL",
      requisitos: [],
    },
    {
      id: "CEA049",
      nome: "GEOMETRIA ANALITICA E ALGEBRA LINEAR",
      requisitos: [],
    },
    {
      id: "CEA050",
      nome: "CALCULO DIFERENCIAL E INTEGRAL 1",
      requisitos: [],
    },
    {
      id: "CSI030",
      nome: "PROGRAMACAO DE COMPUTADORES 1",
      requisitos: [],
    },
    {
      id: "CSI201",
      nome: "INTRODUCAO A ENGENHARIA DE COMPUTACAO",
      requisitos: [],
    },
    {
      id: "CSI427",
      nome: "METODOLOGIA DE PESQUISA APLICADA A COMPUTACAO",
      requisitos: [],
    },
    {
      id: "EAD707",
      nome: "COMUNICACAO E EXPRESSAO",
      requisitos: [],
    },
  ],
  [
    {
      id: "CEA051",
      nome: "CALCULO DIFERENCIAL E INTEGRAL 2",
      requisitos: ["CEA049", "CEA050"],
    },
    {
      id: "CEA055",
      nome: "ESTATISTICA E PROBABILIDADE",
      requisitos: ["CEA050"],
    },
    {
      id: "CEA061",
      nome: "FISICA 1",
      requisitos: ["CEA049", "CEA050"],
    },
    {
      id: "CSI032",
      nome: "PROGRAMACAO DE COMPUTADORES 2",
      requisitos: ["CSI030"],
    },
    {
      id: "CSI443",
      nome: "MATEMATICA DISCRETA",
      requisitos: [],
    },
  ],
  [
    {
      id: "CEA052",
      nome: "CALCULO DIFERENCIAL E INTEGRAL 3",
      requisitos: ["CEA051"],
    },
    {
      id: "CEA056",
      nome: "INTRODUCAO AS EQUACOES DIFERENCIAIS ORDINARIAS",
      requisitos: ["CEA051"],
    },
    {
      id: "CEA062",
      nome: "FISICA 2",
      requisitos: ["CEA038", "CEA039", "CEA051", "CEA061"],
    },
    {
      id: "CEA341",
      nome: "PRINCIPIOS DE ELETRONICA DIGITAL",
      requisitos: ["CSI030"],
    },
    {
      id: "CSI488",
      nome: "ALGORITMOS E ESTRUTURA DE DADOS 1",
      requisitos: ["CSI030"],
    },
  ],
  [
    {
      id: "CEA063",
      nome: "FISICA 3",
      requisitos: ["CEA038", "CEA039", "CEA051", "CEA055", "CEA061"],
    },
    {
      id: "CEA552",
      nome: "CIRCUITOS ELETRICOS 1",
      requisitos: ["CEA056", "CEA062"],
    },
    {
      id: "CEA562",
      nome: "SINAIS E SISTEMAS",
      requisitos: ["CEA056"],
    },
    {
      id: "CSI429",
      nome: "ALGORITMOS E ESTRUTURA DE DADOS 2",
      requisitos: ["CSI032", "CSI488"],
    },
    {
      id: "CSI466",
      nome: "TEORIA DOS GRAFOS",
      requisitos: ["CSI443", "CSI488"],
    },
  ],
  [
    {
      id: "CEA064",
      nome: "FISICA 4",
      requisitos: ["CEA052", "CEA056", "CEA062", "CEA063"],
    },
    {
      id: "CEA502",
      nome: "ELETROMAGNETISMO",
      requisitos: ["CEA052", "CEA063", "CEA552"],
    },
    {
      id: "CSI148",
      nome: "ANALISE NUMERICA",
      requisitos: ["CEA056", "CSI030"],
    },
    {
      id: "CSI203",
      nome: "ORGANIZACAO E ARQUITETURA DE COMPUTADORES 1",
      requisitos: ["CEA341", "CSI030"],
    },
    {
      id: "CSI485",
      nome: "ENGENHARIA DE SOFTWARE 1",
      requisitos: ["CSI032", "CSI488"],
    },
  ],
  [
    {
      id: "CEA561",
      nome: "ELETRONICA 1",
      requisitos: ["CEA552"],
    },
    {
      id: "CEA582",
      nome: "FUNDAMENTOS DE COMUNICACOES",
      requisitos: ["CEA562"],
    },
    {
      id: "CSI440",
      nome: "BANCO DE DADOS 1",
      requisitos: ["CSI488"],
    },
    {
      id: "CSI509",
      nome: "ORGANIZACAO E ARQUITETURA DE COMPUTADORES 2",
      requisitos: ["CSI203"],
    },
    {
      id: "CSI546",
      nome: "PROJETO E ANALISE DE ALGORITMO",
      requisitos: ["CSI466"],
    },
  ],
  [
    {
      id: "CEA551",
      nome: "MODELAGEM E ANALISE DE SISTEMAS LINEARES",
      requisitos: ["CEA064", "CEA552", "CSI148"],
    },
    {
      id: "CEA580",
      nome: "MICROPROCESSADORES E MICROCONTROLADORES",
      requisitos: ["CSI203"],
    },
    {
      id: "CSI437",
      nome: "SISTEMAS OPERACIONAIS",
      requisitos: ["CSI203", "CSI488"],
    },
    {
      id: "CSI476",
      nome: "FUNDAMENTOS TEORICOS DA COMPUTACAO",
      requisitos: ["CSI466"],
    },
    {
      id: "CSI508",
      nome: "COMPUTACAO GRAFICA",
      requisitos: ["CSI488"],
    },
  ],
  [
    {
      id: "CSI419",
      nome: "LINGUAGENS DE PROGRAMACAO",
      requisitos: ["CSI476"],
    },
    {
      id: "CSI450",
      nome: "INTERACAO HUMANO-COMPUTADOR",
      requisitos: ["CSI485"],
    },
    {
      id: "CSI457",
      nome: "INTELIGENCIA ARTIFICIAL",
      requisitos: ["CSI466"],
    },
    {
      id: "CSI548",
      nome: "REDES DE COMPUTADORES 1",
      requisitos: ["CSI488"],
    },
    {
      id: "EAD344",
      nome: "TEORIA DA ADMINISTRACAO 1",
      requisitos: [],
    },
  ],
  [
    {
      id: "CSI433",
      nome: "SISTEMAS DISTRIBUIDOS",
      requisitos: ["CSI548"],
    },
    {
      id: "CSI495",
      nome: "TRABALHO DE CONCLUSAO DE CURSO 1",
      requisitos: [],
    },
    {
      id: "CSI506",
      nome: "COMPILADORES 1",
      requisitos: ["CSI476"],
    },
    {
      id: "CSI510",
      nome: "REDES DE COMPUTADORES 2",
      requisitos: ["CSI548"],
    },
    {
      id: "EAD351",
      nome: "FILOSOFIA E ETICA",
      requisitos: [],
    },
  ],
  [
    {
      id: "CEA066",
      nome: "FUNDAMENTOS DE CIENCIA DO AMBIENTE",
      requisitos: ["CEA038", "CEA039", "CEA062", "CEA063"],
    },
    {
      id: "CSI491",
      nome: "INFORMATICA E SOCIEDADE",
      requisitos: [],
    },
    {
      id: "CSI496",
      nome: "TRABALHO DE CONCLUSAO DE CURSO 2",
      requisitos: ["CSI495"],
    },
    {
      id: "CSI693",
      nome: "AVALIACAO DE DESEMPENHO DE SISTEMAS",
      requisitos: ["CSI433"],
    },
  ],
];
