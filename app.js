'use strict'
//ROTAS DISPONÍVEIS:
// /cursos      Lista todos os cursos disponíveis
// /alunos      Lista todos os alunos
// /alunos?curso_id=1   Filtra alunos por curso (1 = DS, 2 = REDES)
// /alunos/1    Detalhes de um aluno específico pelo ID


const main = document.getElementById('main')

function loadPage(pageAddress, query){
    switch(pageAddress){
        case 1:
            loadStudentList(query)
        case 2:
            loadStudentProfile(query)
        default:
            loadLanding()
    }
}

function loadLanding(){
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
    studentImg.classList.add('student')


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

    loadCoursesButtons();
    landingContainer.append(coursesContainer);
}

function loadCoursesButtons(){


}

loadPage()