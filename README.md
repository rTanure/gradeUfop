# Grade UFOP
Aplicação desenvolvida em React com o intuito de facilitar a visualização de dependência entre as disciplinas dos cursos de Eng. Da Computação, Sistemas de Informação, Eng. Elétrica e Eng. de Produção.

## Como utilizar:
- Acessar o projeto em: https://gradeufop.richardytanure.com/
- Clicar na disciplina desejada e visualizar a dependência entre elas

## Tipos de dependência:
- <b>Requisito primário:  </b>
  - Disciplinas necessárias cursar a selecionada.
  - Cor: VERDE
- <b>Requisito secundário: </b>
  - Disciplinas necessárias cursar os requisitos primários da selecionada.
  - Cor: CIANO
- <b>continuação primaria:  </b>
  - Disciplinas que tem como requisito primário a selecionada.
  - Cor: VERMELHO
- <b>continuação secundaria: </b>
  - Disciplinas que tem como requisito primário as que tem como requisito a selecionada.
  - Cor: ROSA
