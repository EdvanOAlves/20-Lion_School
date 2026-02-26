'use strict'
import { renderLanding } from "./ui.js"
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
    
function loadLanding(){
    //Requisição a API

    //Carregando elementos
    const coursesContainer = renderLanding()
    // renderLandingButton(coursesContainer)

}

loadPage()