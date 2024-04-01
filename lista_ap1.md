1)  

- Manter histórico de alteração
- Facilitar trabalho em equipe
- Facilitar a solução de conflitos de versão
- Possibilidade de recuperar versões antigas

2) git - é um sistema de versionamento distribuído muito popular
    github - é uma das plataformas que oferecem serviços baseados no git

3) HTML, CSS, JavaScript
- HTML – Conteúdo dos documentos da web, corpo do documento, marcação semântica e de layout;
- CSS – formatação da apresentação, layout e animações
- JavaScript – comportamento dinâmico, geração de conteúdo, comunicação e
manipulação dos elementos do documento em ”tempo de execução”.

4) 
- tag - definida pela linguagem para a marcação do texto (<p>)
- elemento - componentes das aplicações web construídos pelo conjunto formado por uma tag, o texto marcado (conteúdo) e seus atributos.
- atributos - parâmetros que definem característucas do elemento

5) não precisa de doctype (mínimo)
sempre tem q ter titulo

  <html>
  <head>
    <title> Minha Página</title>
    <meta charset = ‘utf-8’>
  </head>
  <body>
    <p>Estou por aqui</p>
  </body>
  </html>

6) organização lógica em camadas, baseadas em diferentes níveis de abstração, com a premissa de que a camada de baixo presta um serviço

7) TCP e UDP. A principal diferença é que o TCP é orientadoa conexão e o UDP não é.

8) Na arquitetura cliente-servidor existe uma separação de responsabilidades. O servidor está sempre no ar com um endereço IP permanente e responde aos clientes. Os clientes podem ter conexões intermitentes, podem ter endereços IP dinâmicos e não se comunicam entre si. Na arquitetura P2P não existe um servidor sempre ligado e os nós da aplicação cumprem os dois papéis, tanto de cliente quanto de servidor. Aplicações P2P são auto escaláveis e de gestão mais complicada.

9) Processos dão instâncias de programas rodando em computadores da rede. Eles são identificados para efeitos de comunicação pelo endereço IP do computador mais o número da porta.

10) Oferece encriptação, integridade dos dados e autenticação de usuários para conexões TCP. Está na camada de aplicação.

11)O nó raiz tem exatamente dois filhos. Um documento HTML tem como nó raiz o elemento html que possui como filhos o head e o elemento body, esses elementos não tem limite de filhos.

12) ver mozilla e apresentação da semana 3.

13) form

14) tag <a>

15) input - campos de entrada
    select - menus suspenso
    button - elemento interativo
    textarea - texto de varias linhas
    label - descrever elementos de um form

16) 
a) class - determina a quais conjuntos o elemento pertence
b) id - identificação unívoca do elemento
c) name - identifica valores dos elementos de formulario do lado do servidor, identifica elementos para leitura por agentes automáticos, possibilita identificação não unívoca
d) hidden - ocultador um elemento
e) style - aplicar CSS ao elemento
f) title - texto explicativo, identifica elementos para leitura por agentes automáticos, possibilita identificação não unívoca

17)  Princípio que baliza a capacidade da tecnologia da web de abrir mão de elementos e manter a coerência e o sentido dos documentos. Isso viabiliza o funcionamento da tecnologia em dispositivos de diferentes capacidades e a torna resiliente.

18) 
declaração: par chave-valor no qual uma propriedade (palavra-chave da linguagem) é associada a um valor. Ex. color: red, font-size: 2em ou background-color: #ffffff
seletor: usado para selecionar elementos HTML a serem estilizados. Ex: p, h1, .classe ou #titulo > span
regra: formado por um conjunto de declarações separadas por ponto e vírgula (;), delimitado por chaves, e um seletor

19) 
Seletor de classe - seleciona todos os elementos da classe. 
Ex.: .minhaClasse
Seletor de id - seleciona o elemento com o atributo id informado
Ex.: #meuElemento

20)
margin - espaço externo ao elemento
border - linha sólida que circunda o elemento
padding - é a distância do conteúdo do elemento até a sua borda

21) 
- static - posicionamento padrão.
- relative - movimentação em relação a posição padrão
(inclusive sobrepondo outros elementos).
- absolute - retira o elemento do fluxo normal e o
posiciona relativamente ao documento (ou ao seu
elemento pai).
- fixed - retira o elemento do fluxo normal e o posiciona
relativamente a viewport

22) com chaves

23) São todas formas de declaração de variáveis no JavaScript, com diferenças:

  var- escopo de função (uso desestimulado)
  let - escopo de bloco (uso recomendado)
  const - escopo de bloco, o nome não pode ser reatribuído
