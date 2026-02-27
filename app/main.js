//TODO: Refatorar nomes de variáveis, melhor deixar tudo em inglês
'use strict'
import { getCourses } from "./api.js"
import { getCourse } from "./api.js"
import { getStudents } from "./api.js"
import { getStudent } from "./api.js"
import { renderLanding, renderCourseButton, renderStudentListElements, renderStudentCard, renderStudentProfile, renderGrade } from "./ui.js"
// import { renderLandingButton } from "./ui.js"

function init() {
    const lionLogo = document.getElementById('logo')
    lionLogo.addEventListener('click', () => loadPage(undefined, undefined))

}

function loadPage(pageLevel, query) {
    switch (pageLevel) {
        case 1://Lista de estudantes do curso
            loadStudentList(query);
            break;
        case 2: //Perfil de estudante
            loadStudentProfile(query);
            break;
        default: //Página inicial
            loadLanding();
            break;
    }
}

async function loadLanding() {
    //Requisição a API
    const courses = await getCourses()
    //Carregando elementos e recebendo container para inserção de botões de cursos
    const coursesContainer = renderLanding()
    courses.forEach(curso => {
        const courseButton = renderCourseButton(coursesContainer, curso)
        courseButton.addEventListener('click', () => loadPage(1, curso.id))
    });
}

async function loadStudentList(courseId) {
    //Verificando se é um id Válido
    if (!verifyId(courseId))
        return false
    
    //Requisição a API
    const course = await getCourse(courseId);
    const students = await getStudents(courseId);
    
    //Verificando resposta
    if (!course || !students)
        return 404

    //Carregando elementos e recebendo grid para inseração de estudantes
    const studentsGrid = renderStudentListElements(course.nome)
    students.forEach(estudante => {
        const studentCard = renderStudentCard(studentsGrid, estudante)
        studentCard.addEventListener('click', () => loadPage(2, estudante.id))
    });
    return true;
}

async function loadStudentProfile(studentId) {
    //Verificando se é um id Válido
    if (!verifyId(studentId))
        return false

    //Requisição a API
    const student = await getStudent(studentId);
    //Verificando resposta
    if (!student)
        return 404

    //Construindo perfil e recebendo container de notas
    const gradeContainer = renderStudentProfile(student);
    //Carregando notas
    const grades = student.desempenho;
    grades.forEach(nota => {
        const gradeStatus = checkGrade(nota.valor);
        renderGrade(gradeContainer, nota, gradeStatus)
    });
}
// .attention-grade.danger-grade.approved-grade

function checkGrade(grade){
    if(grade >= 61){
        return  'approved-grade';
    }
    else if(grade >= 50){
        return 'attention-grade';
    }
    else{
        return 'danger-grade'
    }
}

function verifyId (id){
    if (id == null || id == undefined || id == '' || id == isNaN)
        return false
    else
        return true
}


init();
await loadPage();
