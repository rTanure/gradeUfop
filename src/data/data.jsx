const data = { 
    eng_de_computacao: [
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
    ],
    eng_eletrica: [
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
    ],
    sistemas_de_informacao: [
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
    ]
};

export default data;