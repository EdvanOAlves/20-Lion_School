'use strict'
import { getCourses } from "./api.js"
import { renderLanding, renderLandingButton } from "./ui.js"
// import { renderLandingButton } from "./ui.js"

//ROTAS DISPONÍVEIS:
// /cursos      Lista todos os cursos disponíveis
// /alunos      Lista todos os alunos
// /alunos?curso_id=1   Filtra alunos por curso (1 = DS, 2 = REDES)
// /alunos/1    Detalhes de um aluno específico pelo ID

function loadPage(pageLevel, query){
    console.log('aeee')
    switch(pageLevel){
        case 1:
            loadStudentList(query)
        case 2:
            loadStudentProfile(query)
        default:
            loadLanding()
        }
    }
    
async function loadLanding(){
    //Requisição a API
    const courses = await getCourses()
    //Carregando elementos
    const coursesContainer = renderLanding()
    courses.forEach(curso => {
        renderLandingButton(coursesContainer, curso)
    });

}

await loadPage()