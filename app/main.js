'use strict'
import { getCourses } from "./api.js"
import { getCourse } from "./api.js"
import { getStudents } from "./api.js"
import { renderLanding, renderCourseButton, renderStudentListElements, renderStudentCard } from "./ui.js"
// import { renderLandingButton } from "./ui.js"

function init(){
    const lionLogo = document.getElementById('logo')
    lionLogo.addEventListener('click',() => loadPage(undefined, undefined))
    
}

function loadPage(pageLevel, query){
    switch(pageLevel){
        case 1://Lista de estudantes do curso
            loadStudentList(query)
        case 2: //Perfil de estudante
            // loadStudentProfile(query)
        default: //Página inicial
            loadLanding()
        }
    }
    
async function loadLanding(){
    //Requisição a API
    const courses = await getCourses()
    //Carregando elementos
    const coursesContainer = renderLanding()
    courses.forEach(curso => {
        const courseButton = renderCourseButton(coursesContainer, curso)
        courseButton.addEventListener('click',() => loadPage(1, curso.id))
    });
}

async function loadStudentList(courseId){
    //Requisição a API
    const course = await getCourse(courseId);
    const students = await getStudents(courseId);
    //Carregando elementos
    const studentsGrid = renderStudentListElements(course.nome)
    students.forEach(estudante => {
        const studentCard = renderStudentCard(studentsGrid, estudante)
        studentCard.addEventListener('click',() => loadPage(2, estudante.id))
    });
}


init();
await loadPage();
