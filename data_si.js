const data_si = [
  [
    {
      id: "CEA059",
      nome: "FUNDAMENTOS DE GEOMETRIA ANALITICA E ALGEBRA\nLINEAR",
      requisitos: [],
    },
    { id: "CEA060", nome: "FUNDAMENTOS DE CALCULO", requisitos: [] },
    {
      id: "CSI101",
      nome: "PROGRAMACAO DE COMPUTADORES I",
      requisitos: [],
    },
    {
      id: "CSI601",
      nome: "FUNDAMENTOS DE SISTEMAS DE INFORMACAO",
      requisitos: [],
    },
    { id: "CSI901", nome: "INFORMATICA E SOCIEDADE", requisitos: [] },
    { id: "CSI902", nome: "METODOLOGIA DE PESQUISA", requisitos: [] },
  ],

  [
    { id: "CSI011", nome: "MATEMATICA DISCRETA", requisitos: [] },
    {
      id: "CSI102",
      nome: "PROGRAMACAO DE COMPUTADORES II",
      requisitos: ["CSI101"],
    },
    {
      id: "CSI103",
      nome: "ALGORITMOS E ESTRUTURAS DE DADOS I",
      requisitos: ["CSI101"],
    },
    { id: "CSI801", nome: "GESTAO DA INFORMACAO", requisitos: [] },
    {
      id: "ENP144",
      nome: "TEORIA GERAL DA ADMINISTRACAO",
      requisitos: [],
    },
  ],
  [
    {
      id: "CEA055",
      nome: "ESTATISTICA E PROBABILIDADE",
      requisitos: ["CEA060"],
    },
    {
      id: "CSI104",
      nome: "ALGORITMOS E ESTRUTURAS DE DADOS II",
      requisitos: ["CSI102", "CSI103"],
    },
    {
      id: "CSI105",
      nome: "ALGORITMOS E ESTRUTURAS DE DADOS III",
      requisitos: ["CSI011", "CSI103"],
    },
    {
      id: "CSI202",
      nome: "ORGANIZACAO E ARQUITETURA DE COMPUTADORES I",
      requisitos: [],
    },
    {
      id: "ENP473",
      nome: "COMPORTAMENTO ORGANIZACIONAL",
      requisitos: [],
    },
  ],
  [
    {
      id: "CSI204",
      nome: "SISTEMAS OPERACIONAIS",
      requisitos: ["CSI103", "CSI202"],
    },
    {
      id: "CSI403",
      nome: "ENGENHARIA DE SOFTWARE I",
      requisitos: ["CSI102", "CSI103"],
    },
    { id: "CSI602", nome: "BANCO DE DADOS I", requisitos: ["CSI103"] },
    {
      id: "ENP012",
      nome: "PROGRAMACAO LINEAR E INTEIRA",
      requisitos: ["CEA059", "CSI103"],
    },
    { id: "ENP150", nome: "ECONOMIA", requisitos: ["CEA060"] },
  ],
  [
    {
      id: "CSI106",
      nome: "FUNDAMENTOS TEORICOS DA COMPUTACAO",
      requisitos: ["CSI105"],
    },
    {
      id: "CSI301",
      nome: "REDES DE COMPUTADORES I",
      requisitos: ["CSI101", "CSI202"],
    },
    {
      id: "CSI404",
      nome: "ENGENHARIA DE SOFTWARE II",
      requisitos: ["CSI403"],
    },
    {
      id: "CSI603",
      nome: "BANCO DE DADOS II",
      requisitos: ["CSI104", "CSI602"],
    },
    {
      id: "CSI701",
      nome: "INTELIGENCIA ARTIFICIAL",
      requisitos: ["CSI105"],
    },
  ],
  [
    {
      id: "CSI107",
      nome: "LINGUAGENS DE PROGRAMACAO",
      requisitos: ["CSI106"],
    },
    {
      id: "CSI302",
      nome: "SISTEMAS DISTRIBUIDOS",
      requisitos: ["CSI204", "CSI301"],
    },
    {
      id: "CSI405",
      nome: "GERENCIA DE PROJETOS DE SOFTWARE",
      requisitos: ["CSI404"],
    },
    {
      id: "CSI504",
      nome: "INTERACAO HUMANO-COMPUTADOR",
      requisitos: ["CSI403"],
    },
    {
      id: "CSI606",
      nome: "SISTEMAS WEB I",
      requisitos: ["CSI403", "CSI602"],
    },
  ],
  [
    {
      id: "CSI802",
      nome: "GESTAO DA TECNOLOGIADA INFORMACAO",
      requisitos: ["CSI801"],
    },
    {
      id: "CSI998",
      nome: "TRABALHO DE CONCLUSAO DE CURSO I",
      requisitos: ["CSI902"],
    },
    {
      id: "ENP026",
      nome: "ADMINISTRACAO DE RECURSOS HUMANOS",
      requisitos: [],
    },
    {
      id: "ENP493",
      nome: "EMPREENDEDORISMO",
      requisitos: [],
    },
  ],
  [
    {
      id: "CSI303",
      nome: "SEGURANCA E AUDITORIA DE SISTEMAS",
      requisitos: ["CSI301"],
    },
    {
      id: "CSI605",
      nome: "SISTEMAS DE APOIO A DECISAO",
      requisitos: ["CSI601", "CSI602"],
    },
    {
      id: "CSI999",
      nome: "TRABALHO DE CONCLUSAO DE CURSO II",
      requisitos: ["CSI998"],
    },
  ],
];
