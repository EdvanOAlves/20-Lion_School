'use strict'
//ROTAS DISPONÍVEIS:
// /cursos      Lista todos os cursos disponíveis
// /alunos      Lista todos os alunos
// /alunos?curso_id=1   Filtra alunos por curso (1 = DS, 2 = REDES)
// /alunos/1    Detalhes de um aluno específico pelo ID


const main = document.getElementById('main')

export function clearMain(){
    main.replaceChildren()
}


// PÁGINA 01: LANDING PAGE

//Carregamento de Elementos estáticos
export function renderLanding(){
    clearMain();
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
    landingContainer.appendChild(coursesContainer)

    return coursesContainer;
}

//Carregamento de botão para um curso
export function renderCourseButton(coursesContainer, curso){
    //Iniciando elemento
    const courseButton = document.createElement('button');
    const courseIcon = document.createElement('img');

    //Atribuindo classes
    courseButton.classList.add('course')

    //Carregando conteúdo
    courseIcon.src = (`./img/icon_${curso.sigla}.svg`)

    //Append
    courseButton.appendChild(courseIcon);
    courseButton.append(curso.sigla)
    coursesContainer.appendChild(courseButton)
    return courseButton
}

// PÁGINA 02: LISTA DE ESTUDANTES

//Carregamento de Elementos estáticos
export function renderStudentListElements(nomeCurso){
    clearMain();
    //Iniciando elementos
    const studentListContainer = document.createElement('div');
    const courseTitle = document.createElement('h2');
    const studentsGrid = document.createElement('div');

    //Atribuindo classes
    studentListContainer.classList.add('student-list');
    studentsGrid.classList.add('students-container');

    //Carregando conteúdo
    courseTitle.textContent = nomeCurso;

    //Append
    main.appendChild(studentListContainer);
    studentListContainer.appendChild(courseTitle);
    studentListContainer.appendChild(studentsGrid);
    return studentsGrid;
}
//Carregamento de card estudante
export function renderStudentCard(studentsGrid, estudante){
    //Iniciando elemento
    const studentCard = document.createElement('div');
    const studentPhoto = document.createElement('img');
    const studentName = document.createElement('span');

    //Atribuindo classes
    studentCard.classList.add('student-card');
    studentPhoto.classList.add('student-pfp');
    studentName.classList.add('student-name');

    //Carregando conteúdo
    studentPhoto.src = estudante.foto;
    studentName.textContent = String(estudante.nome).toUpperCase();

    //Append
    studentCard.appendChild(studentPhoto);
    studentCard.appendChild(studentName);
    studentsGrid.appendChild(studentCard);
    return studentCard;
}


// PÁGINA 03: DADOS ESTUDANTE
