'use strict'
export async function getCourses(){
    const endPoint  = `https://lion-school-backend.onrender.com/cursos`
    const response = await fetch(endPoint);
    const courses = await response.json();
    return courses;
}