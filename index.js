const header = document.querySelector('header')
const h1 = document.createElement('h1');
const a = document.createElement('a');

header.id = "header"
a.href = "./index.html";
h1.textContent = "Squirtle";

header.appendChild(a).appendChild(h1);

const nav = document.querySelector('nav');
const links = [
    { href: "#info-squirtle", text: "Informações sobre Squirtle" },
    { href: "#caracteristicas", text: "Características" },
    { href: "#curiosidades", text: "Curiosidades" },
    { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
    { href: "#recursos", text: "Recursos Adicionais" },
    { href: "#evolucao", text: "Evolução" },
]

const ul = document.createElement('ul');
nav.appendChild(ul);

links.forEach(link => {
    const li = document.createElement('li');
    const NavA = document.createElement('a');

    NavA.href = link.href;
    NavA.textContent = link.text;

    li.appendChild(NavA);
    ul.appendChild(li);
})

// INFO SQUIRTLE 
const main = document.querySelector('main')
const sectionInfoSquirtle = document.createElement('section')
const ariaLabelledbyInfo = "info-squirtle-label"
const h2InfoSquirtle = document.createElement('h2')

sectionInfoSquirtle.id = "info-squirtle"
sectionInfoSquirtle.setAttribute("aria-labelledby", ariaLabelledbyInfo)

h2InfoSquirtle.id = "info-squirtle-label"
h2InfoSquirtle.textContent = "Informações sobre Squirtle"

sectionInfoSquirtle.appendChild(h2InfoSquirtle)
main.appendChild(sectionInfoSquirtle)

const divInfoSquirtle = document.createElement('div')

const imageInfoSquirtle = [
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", nome: "Squirtle 1" },
    { src: "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png", nome: "Squirtle 2" },
]

sectionInfoSquirtle.appendChild(divInfoSquirtle)

imageInfoSquirtle.forEach(img => {
    const imgInfoSquirtle = document.createElement('img')


    imgInfoSquirtle.src = img.src;
    imgInfoSquirtle.alt = img.nome;

    divInfoSquirtle.appendChild(imgInfoSquirtle)
})

const pInfoSquirtle = document.createElement('p')
pInfoSquirtle.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle."

sectionInfoSquirtle.appendChild(pInfoSquirtle)

// SECTION CARACTERISTICAS

const sectionCaracteristica = document.createElement('section')
const ariaLabelCaracteristica = "caracteristicas-label"
const h2Caracteristica = document.createElement('h2')
const pCaracteristica = document.createElement('p')

sectionCaracteristica.id = "caracteristicas"
sectionCaracteristica.setAttribute("aria-labelledby",ariaLabelCaracteristica)
h2Caracteristica.id = "caracteristicas-label"
h2Caracteristica.textContent = "Características"
pCaracteristica.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."

main.appendChild(sectionCaracteristica).appendChild(h2Caracteristica)
sectionCaracteristica.appendChild(pCaracteristica)

// SECTION CURIOSIDADES

const sectionCuriosidades = document.createElement('section')
const ariaLabelCuriosidades = "curiosidades-label"
const h2Curiosidades = document.createElement('h2')
const ulCuriosidades = document.createElement('ul')
const liTexto = [
    { texto: "Squirtle é um dos Pokémon mais populares e adoráveis." },
    { texto: "Seu nome deriva das palavras 'squirrel' (esquilo) e 'turtle' (tartaruga)." },
    { texto: "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon." },
]

sectionCuriosidades.id = "curiosidades"
sectionCuriosidades.setAttribute("aria-labelledby", ariaLabelCuriosidades)
h2Curiosidades.id = "curiosidades-label"
h2Curiosidades.textContent = "Curiosidades"
main.appendChild(sectionCuriosidades).appendChild(h2Curiosidades)
sectionCuriosidades.appendChild(ulCuriosidades)

liTexto.forEach(text => {
    const liCuriosidades = document.createElement('li')


    liCuriosidades.textContent = text.texto;

    ulCuriosidades.appendChild(liCuriosidades)
})


// SECTION ARTICLE

const article = document.createElement('article')
const ariaLabelArticle = "artigo-squirtle-label"
const h2Article = document.createElement('h2')
const textArticle = [
    { text: "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes."},
    { text: "Sua concha nas costas não apenas oferece proteção, mas também é umsímbolo de resistência. Ao evoluir para Wartortle e, posteriormente,para Blastoise, Squirtle se transforma em uma força formidável,dominando ataques aquáticos que podem surpreender adversários embatalhas."},
    { text: "Além de suas habilidades de batalha, Squirtle é conhecido por seucarisma. Treinadores muitas vezes descrevem a relação com seu Squirtlecomo uma amizade profunda, tornando-o não apenas um companheiro delutas, mas um amigo leal ao longo de suas jornadas."}
]

article.id = "artigo-squirtle"
article.setAttribute("aria-labelledby", ariaLabelArticle)

h2Article.id = "artigo-squirtle-label"
h2Article.textContent = "Squirtle: O Amigo Aquático"
main.appendChild(article).appendChild(h2Article)

textArticle.forEach(paragrafo => {
    const pArticle = document.createElement('p')


    pArticle.textContent = paragrafo.text;

    article.appendChild(pArticle)
})

// SECTION RECURSOS

const sectionRecursos = document.createElement('section')
const ariaLabelRecursos = "recursos-label"
const h2Recursos = document.createElement('h2')
const ulRecursos = document.createElement('ul')
const recursosLink = [
    { href: "https://www.pokemon.com/br/pokedex/squirtle", target: "_blank", text: "Pokédex - Squirtle" },
    { href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)", target: "_blank", text: "Bulbapedia - Squirtle" },
]

sectionRecursos.id = "recursos"
sectionRecursos.setAttribute('aria-labelledby',ariaLabelRecursos)

h2Recursos.id = "recursos-label"
h2Recursos.textContent = "Recursos Adicionais"

main.appendChild(sectionRecursos).appendChild(h2Recursos)
sectionRecursos.appendChild(ulRecursos)

recursosLink.forEach(link => {
    const liRecursos = document.createElement('li');
    const aRecursos = document.createElement('a');

    aRecursos.href = link.href;
    aRecursos.target = link.target;
    aRecursos.textContent = link.text

    liRecursos.appendChild(aRecursos);
    ulRecursos.appendChild(liRecursos);
})


// SECTION EVOLUÇÃO

const sectionEvolucao = document.createElement('section')
const ariaLabelEvolucao = "recursos-label"
const h2Evolucao = document.createElement('h2')
const ulEvolucao = document.createElement('ul')


sectionEvolucao.id = "evolucao"
sectionEvolucao.setAttribute("aria-labelledby", ariaLabelEvolucao)

h2Evolucao.id = "evolucao-label"
h2Evolucao.textContent = "Evoluções"

main.appendChild(sectionEvolucao).appendChild(h2Evolucao)
const evolucaoList = [
    { src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", alt: "Squirtle", name: "1. Squirtle"},
    { src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png", alt: "Wartortle", name: "2. Wartortle" },
    { src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", alt: "Blastoise", name: "3. Blastoise" },
]

sectionEvolucao.appendChild(ulEvolucao)

evolucaoList.forEach(image => {
    const liEvolucao = document.createElement('li');
    const imageEvolucao = document.createElement('img')
    const figure = document.createElement('figure')
    const figcaption = document.createElement('figcaption')

    imageEvolucao.src = image.src;
    imageEvolucao.alt = image.alt;

    figcaption.textContent = image.name

    figure.appendChild(imageEvolucao)
    figure.appendChild(figcaption)
    liEvolucao.appendChild(figure)
    ulEvolucao.appendChild(liEvolucao)
})

// SECTION FOOTER

const footer = document.querySelector('footer')
const paragrafoFooter = document.createElement('p')
const ariaLabelFooter = "Copyright"
const footerLink = [
    { href: "#header", text:"Voltar para o topo"},
    { href: "mailto:contato@squirtlepage.com", text:"Contato via e-mail"},
    { href: "tel:+5555555555", text:"Telefone: (55) 5555-5555"},
]

paragrafoFooter.setAttribute("aria-label", ariaLabelFooter)
paragrafoFooter.textContent = "&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados."
footer.appendChild(paragrafoFooter)

footerLink.forEach(paragrafo => {
    const pFooter = document.createElement('p')
    const aFooter = document.createElement('a')

    aFooter.href = paragrafo.href
    aFooter.textContent = paragrafo.text
    
    pFooter.appendChild(aFooter)
    footer.appendChild(pFooter)
})



