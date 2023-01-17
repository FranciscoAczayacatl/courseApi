const Categories = require('../models/categories.models');
const Courses = require('../models/course.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');
const Videos = require('../models/videos.models');
const initModel = require('../models/init.models');
const db = require('../utils/database');

initModel();

const categories = [
  { name: 'programacion', courseId:  1}, //1
  { name: 'matematicas', courseId: 2}, // 2
  { name: 'musica', courseId: 3}, // 3
];

const courses = [
  {title: 'principios de javaScrip', description: 'una introducion al javaScrip', instructor: 'rodolfo el reno'},
  {title: 'c# al completo', description: 'este curso aprenderas c# desde 0 a experto', instructor: 'anita la huerfanita'},
  {title: 'redux en react.js', description: 'curso de redux en react.js', instructor: 'cricri'},
  {title: 'algebra ', description: '', instructor: 'julio el profe'},
  {title: 'trigonometria', description: 'trigonometria desde 0', instructor: 'julio el profe'},
  {title: 'calculo integral', description: 'introduccion al calculo integral', instructor: 'julio el profe'},
  {title: 'principios de guitarra', description: 'una introducion a la guitarra clasica', instructor: 'slash'},
  {title: 'piano al desnudo', description: 'conceptos basico y medios del piano', instructor: 'franz liszt'},
  {title: 'teoria musical', description: 'este curso es para musicos avansados', instructor: 'chopin'},
];

const users = [
  {first_name: "Terry", last_name: "Medhurst", email: "atuny0@gmail.com", password: "1234"}, //1
  {first_name: "Sheldon", last_name: "Quigley", email: "hbingley1@gmail.com", password: "1234"}, //2
  {first_name: "Terrill", last_name: "Hills", email: "rshawe2@gmail.com", password: "1234"}, //3
  {first_name: "Miles", last_name: "Cummerata", email: "yraigatt3@gmail.com", password: "1234"}, //4
  {first_name: "Mavis", last_name: "Schultz", email: "kmeus4@gmail.com", password: "1234",} //5
];

const userscourses = [
  {userId: 1, courseId:1},
  {userId: 1, courseId:2},
  {userId: 2, courseId:3},
  {userId: 2, courseId:4},
  {userId: 3, courseId:5},
  {userId: 3, courseId:6},
  {userId: 4, courseId:7},
  {userId: 4, courseId:8},
  {userId: 5, courseId:9},
];

const videos =[
  {title: 'tipos de variable' , url: './javascripcourse/video1', courseId: 1},
  {title: 'ciclo for' , url: './c#course/video1', courseId: 2},
  {title: 'tunks' , url: './redux/course/video1', courseId: 3},
  {title: 'notacion algebraica' , url: './algrbracouser/video1', courseId: 4},
  {title: 'funciones trigonometricas' , url: './trigonometriacourse/video1', courseId: 5},
  {title: 'intregrales definidas' , url: 'calculointegralcourse/video1', courseId: 6},
  {title: 'acordes' , url: 'guitarracourse/video1', courseId: 7},
  {title: 'octavas en piano' , url: 'pianocurse/video1', courseId: 8},
  {title: 'circulo de quitas' , url: 'pianocourse/video1', courseId: 9},
];

db.sync({ force: true })
  .then(() => {
		console.log("Iniciando la plantación de Información");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course)=> Courses.create(course))
    }, 100);
    setTimeout(() => {
      categories.forEach((categorie)=> Categories.create(categorie))
    }, 200);
    setTimeout(() => {
      userscourses.forEach((us)=> UsersCourses.create(us))
    }, 300);
    setTimeout(() => {
      videos.forEach((video)=> Videos.create(video))
    }, 400);
    
	})
	.catch((error) => console.log(error));