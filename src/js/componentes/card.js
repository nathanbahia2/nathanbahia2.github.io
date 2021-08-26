class Card {
    constructor(titulo, descricao, imagem_url, tecnologias, github_link, projeto_link) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem_url = imagem_url;
        this.tecnologias = tecnologias;
        this.github_link = github_link;
        this.projeto_link = projeto_link;
    }

    get_tecnologias = () => {
        const techs = {
            "Python": "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
            "Django": "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
            "Javascript": "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "JQuery": "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
            "Bootstrap": "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
        }

        let img_techs = '<p>';
        let cache = [];

        this.tecnologias.map( el => {
            if (cache.indexOf(el) === -1) {
                img_techs += `<img src="${ techs[el] }" alt="">`;
                cache.push(el);
            }
        });

        img_techs += '</p>';

        return img_techs;
    }

    get_links = () => {
        let links = '';

        if (this.github_link !== "") {
            links += `<a href="${ this.github_link }"><i class="fab fa-github"></i></a>`;
        }

        if (this.projeto_link !== "") {
            links += `<a href="${ this.projeto_link }"><i class="fas fa-globe"></i></a>`;
        }

        if (links !== '') {
            return `<div class="projeto-link">${ links }</div>`;
        }

        return links
    }

    get_descricao = () => {
        let desc = this.descricao;

        if (this.descricao.length > 120) {
            desc = this.descricao.slice(0, 120) + '...';
        }

        return `<p class="mt-2">${ desc }</p>`;
    }

    get_imagem = () => {
        return `<img src="${ this.imagem_url }" alt="${ this.titulo }">`;
    }

    build = () => {
        const html = `
            <div class="col-12 col-md-3 mb-5">
                <div class="card h-100 p-2 shadow">
                    ${ this.titulo }
                    ${ this.get_imagem() }
                    ${ this.get_descricao() }
                    ${ this.get_tecnologias() }
                    ${ this.get_links() }
                </div>
            </div>
        `;

        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html').body.firstChild;
    }
}