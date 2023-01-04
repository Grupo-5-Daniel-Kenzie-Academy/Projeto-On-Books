export interface IBooks {
  id: number;
  title: string;
  description: string;
  categories: string[];
  img: string;
}

export const ListBooks: IBooks[] = [
  {
    id: 1,
    title: "God of war",
    description:
      "Um homem ou um deus? God of war é a ascenção de um novo deus! um homem que que foi a guerra por sua nação e diante da derrota e de sua morte ele chama por Ares o deus da guerra para lhe salvar e derrotar seus inimigos, a voz de Kratos é ouvida pelo deus e foi consedido a ele 2 laminas, as laminas do caos, com elas Kratos massacrou seus inimigos no campo de batalha e saiu vitorioso, mas tudo tem um preço, ao voltar para casa cego pelo ódio emprementados pelo deus da guerra, Kratos mata sua mulher e sua filha, ao se deparar com os corpos de sua filha e esposa em seus braços, Kratos jura vingar-se contra Ares.",
    categories: ["ação", "Guerra", "Deuses", "Luta"],
    img: "https://i.pinimg.com/564x/db/2f/a5/db2fa58bb4aa25122aa7452b095cf85a.jpg",
  },
  {
    id: 2,
    title: "Harry Potter e a pedra filosofal",
    description:
      "Em um mundo de magia, e bruxaria, fora da vista dos humanos não mágicos, existem bruxos e o maior bruxo das trevas que já existiu lança sua magia para aquilar seus inimigos, até o dia que ele se depara com uma criança, um bebe inofensivo ao qual também tem o mesmo destino de   seus inimigos, o bruxo lança sua magia contra a criança que sai ilesa apenas com uma cicatriz na testa, o bruxo desaparece do mundo após isso, alguns dizem que ele morreu, outros dizem que ele      apenas está fraco demais para voltar, e o menino? há de crescer e descobrir a lenda que se tornou.",
    categories: ["ação", "Misterio", "Fantasia", "Magia"],
    img: "https://i.pinimg.com/564x/59/36/15/593615c1b82617e6c24f9c8d1b912e5d.jpg",
  },
  {
    id: 3,
    title: "Todo esse tempo",
    description:
      "Um romance que fala sobre a vida de Emily Jhoson, uma menina solitária que não tem muito sucesso em seus relacionamentos, um dia ela conhece um homem chamado Evan Halks, eles se apaixonagem imediatamente e começam um relacionamento, não muito tempo depois Evan morre em um acidente não previsto, esse acontecimento muda o tempo que agora começa a se comportar de maneira disforme, onde pessoas de mais de 300 anos estão vivas e andando normalmente nas suas, Emily reencontra Evan mas será que o tempo realmente fez o que era certo?",
    categories: ["Romance", "Fantasia", "Comedia"],
    img: "https://i.pinimg.com/564x/f2/5b/bf/f25bbf9fca611caddb66088e8af17598.jpg",
  },
  {
    id: 4,
    title: "O ladrão de raios",
    description:
      "Em um mundo de deuses e semi deuses onde o relacionamento entre humanos e deuses era comum, surgiu-se conflitos familiares, tantos que zeus decretou que os deuses abandonassem seus filhos semi deuses, agora, com a chegada de um ladrão e repersões de varios semi deuses abandonados que decidem fazer o caos, os deuses precisam da ajuda de seus filhos, aqueles que não sentem recentimento pelo oque aconteceu, para ajuda-los a controlar o caos entre os semi deuses, um deles com raiva, pelo decreto de zeus, rouba sua maior arma, o raio de zeus, que nas mãos erradas pode ser catastrófico.",
    categories: ["Fantasia", "Deuses"],
    img: "https://i.pinimg.com/236x/9a/9b/27/9a9b271b1ae625538978e9bb6763866c.jpg",
  },
  {
    id: 5,
    title: "Naked Heat",
    description:
      "Um jornalista que está fazendo uma matéria até que um amigo seu morre, uma detetive de homicidios vai investigar o caso, o escritor se encanta pela detetive, e com a ajudinha de seu amigo prefeito que sempre joga poker com ele todas as quintas, ele consegue ficar a par do caso e tem permição de auxiliar na investigação, a detetive não fica nada contente com a situação, porem trabalho é trabalho, o jornalista aproveita a situação pra investigar o caso e a detetive também.",
    categories: ["Investigação", "Romance", "Misterio"],
    img: "https://i.pinimg.com/236x/0c/d9/11/0cd9115f9755217afe9bb724297a90bd.jpg",
  },
  {
    id: 6,
    title: "A queda dos anjos",
    description:
      "Seguidos por Lúcifer vários anjos se rebelam contra deus e começam a cair, o banimento de deus sobre os anjos e suas quedas podem ter acontecido, mas não antes de uma boa guerra angelical.",
    categories: ["Guerra", "Religião", "Luta"],
    img: "https://i.pinimg.com/236x/04/f4/e2/04f4e24054df943dd3b52709c25d5cc0.jpg",
  },
  {
    id: 7,
    title: "caçadora",
    description:
      "Uma mulher bem treinada na arte de caçar criaturas um tanto quanto incomuns, Julie Jens é uma caçadora de vampiros, treinado desde muito jovem a art de caça, tanto uma flecha quanto um pedaço de maneira na mão de Julie podem ser letais, os vampiros não tem medo ao ouvir seu nome, até o dia dela matar pessoalmente o próprio Drácula.",
    categories: ["Fantasia", "ação", "Mitologia"],
    img: "https://i.pinimg.com/564x/bb/8d/9f/bb8d9ff71ee9d7e414f5f2680a2573bc.jpg",
  },
  {
    id: 8,
    title: "Sangue de Princesa",
    description:
      "Em um mundo de grandes influencias e poderes políticos, dinheiro e status sociais são muito valorizados, e quem tem mais status que uma rainha? ou nesse caso uma princesa, o sangue de uma princesa pode ter muito poder, ainda mais com seus contatos e recursos, aquele que se casar com a princesa um dia será rei, e que homem ganancioso não iria querer ter esse status para governar uma grande nação?",
    categories: ["Romance"],
    img: "https://i.pinimg.com/236x/66/fd/0f/66fd0f0a65729ca9a76dbba9efaac36c.jpg",
  },
  {
    id: 9,
    title: "A ladra do demônio",
    description:
      "Victoria Aveyard é um demônio que conseguiu se soltar do inferno, ela não quer fazer muito alarde para não ser detectada pelos anjos, também não quer dizer que ela vai ser boazinha, o demonio seu lider, manda Victoria roubar a exencia dos humanos e convertelos para ferir a maior criação de deus, o homem, porem apesar de servir seu mestre, Victoria não quer voltar para o inferno, então ela decide ter uma bela vida cheia de loucuras em Hollywood.",
    categories: ["Sexo", "Luta", "Ação", "Aventura", "Mitologia", "Deuses"],
    img: "https://i.pinimg.com/236x/2f/85/9d/2f859dc9464d0032b34f42e3cad484e6.jpg",
  },
  {
    id: 10,
    title: "Suntzu a Arte da Guerra",
    description:
      "Yang Jin foi um grande general chinês que recebeu o titulo de maior prestigio de deus país por ter vencido uma guerra de com apenas 2 mil homens contra um exercito de mais de 50 mil, ele escreveu um livro sobre a arte da guerra, e os metodos utilizados para vencer a batalha, agora traduzido para portugues, Yang Jin afirma que todos os métodos utilizados foram honrosos com seus inimigos.",
    categories: ["Guerra", "Estratégia"],
    img: "https://i.pinimg.com/236x/d5/91/18/d591188b2f307d3e32c7df85d48f2b0d.jpg",
  },
  {
    id: 11,
    title: "A garota do espelho de prata",
    description:
      "Em meio a uma guerra, com um corte enorme na teste e sem saber quem é, Anne acorda sozinha no meio de uma floresta, com ajuda de seu melhor amigo e de uma jovem médium, Anne terá que que sobreviver em meio ao caos instalado da guerra enquanto tenta descobrir quem ela é, sua única lembrança é de uma menina dentro de um espelho.",
    categories: ["Guerra", "Misterio", "Investigação", "Aventura"],
    img: "https://i.pinimg.com/564x/16/82/23/168223b397d0238f34a63234d0b6977d.jpg",
  },
  {
    id: 12,
    title: "Poseidon",
    description:
      "Grande parte do planeta é composto por agua, e quem acha que tem apenas agua nos oceanos engana-se! serias e tritões são criaturas que vivem escondidas da humanidade, porem não quer dizer elas não estão lá.",
    categories: ["Aventura", "Mitologia", "Misterio"],
    img: "https://i.pinimg.com/564x/dc/f5/be/dcf5be27c8378ee8e9aff5366caf7c41.jpg",
  },
  {
    id: 13,
    title: "A garota dos pesadelos",
    description:
      "Emily Thomas uma fotografa que começa a encontrar coisas estranhas nas suas fotografias, começa a ter pesadelos com uma menina de vestido com de sangue que não a deixa descançar, ela está sempre lá, a espreita, atormentando Emily, Emily terá de provar que não está enloquecendo e encontar uma forma de se livrar na menina da causa de seus pesadelos.",
    categories: ["Terror", "Investigação"],
    img: "https://i.pinimg.com/564x/e2/88/ec/e288eca0142ce84fa040f8f681be18ea.jpg",
  },
  {
    id: 14,
    title: "Mulheres que correm com os lobos",
    description:
      "Lobos sempre foram criaturas que representavam medo, principalmente em meninas, porém nem sempre foi assim onde lobos eram vistos como criaturas violentas, na Grécia antiga, Artêmis a caçadora, amamentava os herois, mas como chegou a isto? a natureza selvagem e instintiva de artemos foi ficando mais docil com o passar dos tempos, dizem que aqueles amamentados por ela se tornavam grandes guerreiros.",
    categories: ["Deuses", "Fantasia", "Mitologia"],
    img: "https://i.pinimg.com/564x/70/1e/8c/701e8cf386b43dbf049fc7b16995cb22.jpg",
  },
  {
    id: 15,
    title: "Assassins creed Renaissance",
    description:
      "O mundo foi divido em 3, entre os templários, pessoa que querem comandar o mundo através da religião, entre os assassinos, e a humanidade ignorante que não tem conhecimento sobre os lados, por gerações os assassinos vem caçando e matando os templarios para impedir os templarios de dominarem o mundo e nesta historia veremos um assino contando seus feitos para impedir a dominação dos templários.",
    categories: ["ação", "Luta", "Aventura"],
    img: "https://i.pinimg.com/564x/1c/a1/a6/1ca1a638344fee5cc5805824dbf7d46b.jpg",
  },
  {
    id: 16,
    title: "O último dos magos",
    description:
      "Era tudo lindo quando os magos viviam em harmonia, até a grande guerra, os magos foram caçados e acusados de crimes que não cometeram, magos eram muito harmoniosos e muitos morrerem na guerra e muitos dos que sobreviveram decidiram abolir a magia e acabaram morrendo logo após, mas ainda resta um, o ultimo mago, muitos acreditam que os magos estão extintos eras depois, mas ainda existe um mago esperando até o dia dele lançar suas magias novamente.",
    categories: ["Magia", "Misterio", "Fantasia"],
    img: "https://i.pinimg.com/564x/83/91/22/83912287061048b1f076a09ea39cd302.jpg",
  },
  {
    id: 17,
    title: "House of the dragon",
    description:
      "Um mundo onde o rei e a rainha comanda os 12 reinos, apenas uma coisa é mais aterrorizante que os reis, os dragões, símbolo de força e destruição os dragões não tem donos, um dia um homem resolve ir contra o regimento do rei anarquista e pra isso utiliza da força dos dragões para assumir o poder.",
    categories: ["ação", "Guerra", "Fantasia"],
    img: "https://i.pinimg.com/564x/bd/d2/05/bdd205d8f5c1b7094a4099ae1a23fb32.jpg",
  },
  {
    id: 18,
    title: "O hobbit",
    description:
      "Um pequenino que recebe uma missão de salvar o lar dos anões que está sendo até então servindo de abrigo para um dragão, pequenino se junto com um grupo de anões e um mago com a intenção de recuperar o lar dos anões e trazer prosperidade para eles novamente.",
    categories: ["Aventura", "Fantasia", "Ação"],
    img: "https://i.pinimg.com/236x/c7/c2/3d/c7c23d2efd0f1442748dd96e22c750fe.jpg",
  },
  {
    id: 19,
    title: "Christine",
    description:
      "Um adolescente excluído da sociedade que se apaixona por um carro, o carro abaca tendo uma reação controladora apartir do sentimento de seu dono, e seu ciúme faz com que o carro persiga seus amigos e pessoas perto do garoto para ele não se relacionar com mais ninguém além do carro.",
    categories: ["Fantasia", "Terror"],
    img: "https://i.pinimg.com/236x/48/06/2a/48062add6630b78bf88e10753c01dff5.jpg",
  },
  {
    id: 20,
    title: "A sociedade secreta",
    description:
      "Laura Sebastian, uma mulher que depois de muito tempo fazendo contatos e amigos com pessoas, misteriosas, finalmente consegue descobrir a existencia de uma sociedade secreta, a qual ela é convidada, Laura aceita o convite euforica sobre a grande descoberta porem não sabe exatamente oque é essa sociedade e o que eles fazem, Laura vai descobrir que pode ter entrado em um grande problema que não tem como sair.",
    categories: ["Misterio", "Investigação", "Ação", "Estratégia"],
    img: "https://i.pinimg.com/564x/f5/36/6d/f5366d64b47e8324263869c18432e5e4.jpg",
  },
];
