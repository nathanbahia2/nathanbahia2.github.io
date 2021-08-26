function main () {
    const projeto_container = document.querySelector("#projetos");

    projetos.forEach( el => {
        const card = new Card(
            el['titulo'],
            el['descricao'],
            el['imagem_url'],
            el['tecnologias'],
            el['github_link'],
            el['projeto_link']
        ).build();
        projeto_container.appendChild(card);
    });
}

if (document.readyState) {
    main();
}
