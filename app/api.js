'use strict'

//ROTAS DISPONÍVEIS:
// /cursos      Lista todos os cursos disponíveis
// /alunos      Lista todos os alunos
// /alunos?curso_id=1   Filtra alunos por curso (1 = DS, 2 = REDES)
// /alunos/1    Detalhes de um aluno específico pelo ID


export async function getCourses() {
    const endPoint = `https://lion-school-backend.onrender.com/cursos`;
    const response = await fetch(endPoint);
    if (response.status == 404) //Caso o retorno esteja vazio
        response.status;
    if (!response)  //Caso a API esteja fora do ar
        return false;
    const courses = await response.json();
    return courses;
}

export async function getCourse(courseId) {
    const endPoint = `https://lion-school-phbo.onrender.com/cursos/${courseId}`;
    const response = await fetch(endPoint);
    if (response.status == 404) //Caso o retorno esteja vazio
        response.status;
    if (!response)  //Caso a API esteja fora do ar
        return false;
    const course = await response.json();
    return course;
}

export async function getStudents(courseId) {
    const endPoint = `https://lion-school-phbo.onrender.com/alunos?curso_id=${courseId}`;
    const response = await fetch(endPoint);
    if (response.status == 404) //Caso o retorno esteja vazio
        response.status;
    if (!response)  //Caso a API esteja fora do ar
        return false;
    const students = await response.json();
    return students;
}

export async function getStudent(studentId) {
    const endPoint = `https://lion-school-phbo.onrender.com/alunos/${studentId}`;
    const response = await fetch(endPoint);
    if (response.status == 404) //Caso o retorno esteja vazio
        response.status;
    if (!response)  //Caso a API esteja fora do ar
        return false;
    const student = await response.json();
    return student;
}