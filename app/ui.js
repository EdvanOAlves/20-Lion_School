'use strict'
//ROTAS DISPONÍVEIS:
// /cursos      Lista todos os cursos disponíveis
// /alunos      Lista todos os alunos
// /alunos?curso_id=1   Filtra alunos por curso (1 = DS, 2 = REDES)
// /alunos/1    Detalhes de um aluno específico pelo ID


const main = document.getElementById('main')

//Carregamento de Elementos estáticos
export function renderLanding(){
    //Iniciando elementos
    const landingContainer = document.createElement('div');
    const hero = document.createElement('div');
    const heroContent = document.createElement('div');
    const heroText = document.createElement('h2');
    const heroCursos = document.createElement('span');
    const heroImg = document.createElement('img');
    const studentImg = document.createElement('img');
    const coursesContainer = document.createElement('div');

    //Atribuindo classes
    landingContainer.classList.add('landing');
    hero.classList.add('hero');
    heroContent.classList.add('hero-content');
    studentImg.classList.add('student');
    coursesContainer.classList.add('courses');


    //Carregando conteúdo
    heroCursos.textContent = "curso";
    heroText.append("Escolha um ");
    heroText.append(heroCursos);
    heroText.append(" para gerenciar");

    heroImg.src = "./img/devices.svg";
    studentImg.src = "./img/studant.svg";

    //Append
    main.appendChild(landingContainer);
    landingContainer.appendChild(hero);
    hero.appendChild(heroContent);
    heroContent.appendChild(heroText);
    heroContent.appendChild(heroImg);
    hero.appendChild(studentImg);
    hero.appendChild(coursesContainer)

    return landingContainer;
}

//Carregamento de botão para um curso
export function renderLandingButton(coursesContainer, curso){
    //Iniciando elemento
    // const landingContainer = document.createElement('div');
    const courseButton = document.createElement('button');
    const courseIcon = document.createElement('img');

    //Atribuindo classes
    courseButton.classList.add('course')

    //Carregando conteúdo
    courseIcon.src = (`./img/icon_${curso.sigla}.svg`)

    //Append
    // main.appendChild(landingContainer);
    courseButton.append(courseIcon);
    courseButton.append(curso.sigla)
    // landingContainer.appendChild(hero);
}
