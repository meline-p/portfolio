const projetsData =[
    {
        title: "Calculator",
        type: "Front-End",
        infos: "Hello mathematicians - HTML/CSS, Javascript",
        img: "img/Calculator-img.png",
        id: 32,
        urlCode: "https://github.com/meline-p/Calculator",
        urlSite : "https://meline-p.github.io/Calculator/" ,
        active: true
    },
    // {
    //     title: "Payment Card Form",
    //     type: "Front-End",
    //     infos: "Enter your card informations - HTML/CSS, Javascript",
    //     img: "img/Payment-Card-Form-img.png",
    //     id: 31,
    //     urlCode: "https://github.com/meline-p/Payment-Card-Form",
    //     urlSite : "https://www.youtube.com/watch?v=UfhWMG9hHJw" ,
    //     active: true
    // },
    {
        title: "Word Clock",
        type: "Front-End",
        infos: "Chic way to display the time - HTML/CSS, Javascript",
        img: "img/Word-Clock-img.png",
        id: 30,
        urlCode: "https://github.com/meline-p/WordClock",
        urlSite : "https://meline-p.github.io/WordClock/" ,
        active: true
    },
    {
        title: "Tea'kTak - Take a tea break",
        type: "CMS",
        infos: "(WIP) E-Commerce in Prestashop, hosted on LWS",
        img: "img/TeakTak-img.png",
        id: 29,
        urlCode: "",
        urlSite : "https://teaktak.site/" ,
        active: true
    },
    {
        title: "La Boutique Française",
        type: "Full-Stack",
        infos: "E-commerce PHP, Symfony, Xampp, Composer",
        img: "img/La-Boutique-Francaise-img.png",
        id: 28,
        urlCode: "https://github.com/meline-p/LaBoutiqueFrancaise/tree/master",
        urlSite : "https://youtu.be/3OTSZi2zv08",
        active: true
    },
    {
        title: "Landing Page Animations",
        type: "Front-End",
        infos: "Animations with Javascript and CSS, HTML/CSS, Javascript",
        img: "img/LandingPageAnimations-img.png",
        id: 27,
        urlCode: "https://github.com/meline-p/React-Animations",
        urlSite : "https://meline-p.github.io/LandingPageAnimations/" ,
        active: true
    },
    {
        title: "Weather App API",
        type: "Back-End",
        infos: "What is the weather at your place? - HTML/CSS, Javascript, Node.js, Express.js, APIs",
        img: "img/Weather-App-img.png",
        id: 26,
        urlCode: "https://github.com/meline-p/Weather-App-BackEnd/tree/master",
        urlSite : "" ,
        active: true
    },
    {
        title: "To Do List - Mongoose",
        type: "Full-Stack",
        infos: "Automated database hosted on Heroku and MongoDB Atlas - HTML/CSS, Javascript, Node.js, Express.js, EJS, MongoDB, Mongoose",
        img: "img/ToDoList-BackEnd-img.png",
        id: 25,
        urlCode: "https://github.com/meline-p/ToDoList-BackEnd/tree/master",
        urlSite : "https://www.youtube.com/watch?v=6KzAAghIGns" ,
        active: true
    },
    // {
    //     title: "Wiki App",
    //     type: "Back-End",
    //     infos: "Database Management with Studio 3T - HTML/CSS, Javascript, Node.js, Express.js, EJS, MongoDB, Mongoose",
    //     img: "https://www.beelights.gr/assets/images/empty-image.png",
    //     id: 24,
    //     urlCode: "https://github.com/meline-p/Wiki-API/tree/master",
    //     urlSite : "" ,
    //     active: true
    // },
    {
        title: "Newsletter SignUp",
        type: "Back-End",
        infos: "Hosted on Heroku, HTML/CSS, Bootstrap, Javascript, Node.js, Express.js, APIs",
        img: "img/Newsletter-SignUp-img.png",
        id: 23,
        urlCode: "https://github.com/meline-p/Newsletter-SignUp/tree/master",
        urlSite : "https://www.youtube.com/watch?v=54RG2HHmRXk" ,
        active: true
    },
    {
        title: "Movie App",
        type: "Front-End",
        infos: "Newest movies with filters - HTML/CSS, Javascript, APIs",
        img: "img/Movie-App-img.png",
        id: 22,
        urlCode: "https://github.com/meline-p/Movie-App",
        urlSite : "https://meline-p.github.io/Movie-App/" ,
        active: true
    },
    {
        title: "BMI-Calculator",
        type: "Back-End",
        infos: "HTML/CSS, Javascript, Node.js, Express.js",
        img: "https://www.beelights.gr/assets/images/empty-image.png",
        id: 21,
        urlCode: "https://github.com/meline-p/BMI-Calculator/",
        urlSite : "" ,
        active: true
    },
    {
        title: "The Simon Game",
        type: "Front-End",
        infos: "Memorize the combination as long as possible - HTML/CSS, Javascript, jQuery",
        img: "https://meline-p.github.io/Ressources/images/Pojets-img/TheSimonGame-img.png",
        id: 20,
        urlCode: "https://github.com/meline-p/The-Simon-Game",
        urlSite : "https://meline-p.github.io/The-Simon-Game/" ,
        active: true
    },
    {
        title: "Blog Website",
        type: "Back-End",
        infos: "Blogging, creation of publications - HTML/CSS, Javascript, Node.js, Express.js, EJS",
        img: "img/Blog-Website-img.png",
        id: 19,
        urlCode: "https://github.com/meline-p/Blog-Website/tree/master",
        urlSite : "https://www.youtube.com/watch?v=osQf2NwlIrQ" ,
        active: true
    },
    {
        title: "Chrono Pomodoro",
        type: "Front-End",
        infos: "Are you ready ? Let's go! - React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Chrono-Pomodoro-img.png",
        id: 18,
        urlCode: "https://github.com/meline-p/Chrono-Pomodoro",
        urlSite : "https://f5frcm.csb.app/" ,
        active: true
    },
    {
        title: "React Animations",
        type: "Front-End",
        infos: "Three different animations with React - React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/React-Animations-img.png",
        id: 17,
        urlCode: "https://github.com/meline-p/Chrono-Pomodoro",
        urlSite : "https://g4jflv.csb.app/" ,
        active: true
    },
    {
        title: "E-Commerce",
        type: "Front-End",
        infos: "Not enough code ? Drink it. - React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/E-Commerce-img.png",
        id: 16,
        urlCode: "https://github.com/meline-p/E-Commerce",
        urlSite : "https://exzire.csb.app/" ,
        active: true
    },
    {
        title: "Drum Kit",
        type: "Front-End",
        infos: "Make some noise! - HTML/CSS, Javascript",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Drum-Kit-img.png",
        id: 15,
        urlCode: "https://github.com/meline-p/Drum-Kit",
        urlSite : "https://meline-p.github.io/Drum-Kit/" ,
        active: true
    },
    {
        title: "Multi-Langs Website",
        type: "Front-End",
        infos: "How many languages ​​do you speak ? - React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Multi-Langs-Website-img.png",
        id: 14,
        urlCode: "https://github.com/meline-p/Multi-Langs-Website",
        urlSite : "https://5bft3n.csb.app/" ,
        active: true
    },
    {
        title: "Coworking Website",
        type: "Front-End",
        infos: "A place of work and sharing - HTML/CSS, Javascript",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Coworking-Website-img.png",
        id: 13,
        urlCode: "https://github.com/meline-p/Coworking-Website",
        urlSite : "https://meline-p.github.io/Coworking-Website/" ,
        active: true
    },
    {
        title: "Keeper App",
        type: "Front-End",
        infos: "Note all your thoughts - React, HTML/CSS, Javascript ES6, jsx",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Keeper-App-img.png",
        id: 12,
        urlCode: "https://github.com/meline-p/Keeper-App",
        urlSite : "https://z81be1.csb.app/" ,
        active: true
    },
    {
        title: "Snake",
        type: "Front-End",
        infos: "Try to reach 50 points! - HTML/CSS, Javascript",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Snake-img.png",
        id: 11,
        urlCode: "https://github.com/meline-p/Snake-Game",
        urlSite : "https://meline-p.github.io/Snake-Game/" ,
        active: true
    },
    {
        title: "To Do List",
        type: "Front-End",
        infos: "Did you buy the bread? - React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/To-Do-List-img.png",
        id: 10,
        urlCode: "https://github.com/meline-p/ToDoList",
        urlSite : "https://uf86si.csb.app/" ,
        active: true
    },
    {
        title: "Quizz App",
        type: "Front-End",
        infos: "So, did you get it right? - HTML/CSS, Javascript, DOM",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Quizz-App-img.png",
        id: 9,
        urlCode: "https://github.com/meline-p/Quizz-App",
        urlSite : "https://meline-p.github.io/Quizz-App/" ,
        active: true
    },
    {
        title: "Emojipedia",
        type: "Front-End",
        infos: "Emoji Librairy - React, HTML/CSS, Javascript ES6, jsx",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Emojipedia-img.png",
        id: 8,
        urlCode: "https://github.com/meline-p/Emojipedia",
        urlSite : "https://polr7z.csb.app/" ,
        active: true
    },
    {
        title: "Countdown Timer",
        type: "Front-End",
        infos: "Countdown to Christmas - HTML/CSS, Javascript, DOM",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Countdown-Timer-img.png",
        id: 7,
        urlCode: "https://github.com/meline-p/Countdown-Timer",
        urlSite : "https://meline-p.github.io/Countdown-Timer/" ,
        active: true
    },
    {
        title: "Analog App",
        type: "Front-End",
        infos: "What time is it? - HTML/CSS, Javascript, DOM",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Analog-App-img.png",
        id: 6,
        urlCode: "https://github.com/meline-p/Analog-App",
        urlSite : "https://meline-p.github.io/Analog-App/" ,
        active: true
    },
    {
        title: "Dicee Game",
        type: "Front-End",
        infos: "Refresh to see the winner ! - HTML/CSS, Javascript, DOM",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Dicee-Game-img.png",
        id: 5,
        urlCode: "https://github.com/meline-p/Dicee-Game",
        urlSite : "https://meline-p.github.io/Dicee-Game/" ,
        active: true
    },
    {
        title: "Secret Project",
        type: "Full-Stack",
        infos: "Project to learn more about Authentication and Security - HTML/CSS, Javascript, Node.js, Express.js, EJS, MongoDB, Mongoose",
        img: "img/Secrets-Projects-img.png",
        id: 4,
        urlCode: "https://github.com/meline-p/Secret-Project",
        urlSite : "https://www.youtube.com/watch?v=SDyl0P3C7ao" ,
        active: true
    },
    {
        title: "TinDog",
        type: "Front-End",
        infos: "Hot dogs nearby - HTML/CSS, Bootstrap",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Tindog-img.png",
        id: 3,
        urlCode: "https://github.com/meline-p/TinDog",
        urlSite : "https://meline-p.github.io/TinDog/" ,
        active: true
    },
    {
        title: "Travel Agency",
        type: "Front-End",
        infos: "Desire to escape ? - HTML/CSS",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Travel-Agency-img.png",
        id: 2,
        urlCode: "https://github.com/meline-p/Travel-Agency",
        urlSite : "https://meline-p.github.io/Travel-Agency/" ,
        active: true
    },
    {
        title: "Recipies",
        type: "Front-End",
        infos: "The best chocolate cake - HTML/CSS, Responsive design",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Recipies-img.png",
        id: 1,
        urlCode: "https://github.com/meline-p/Recipies",
        urlSite : "https://meline-p.github.io/Recipies/" ,
        active: true
    }
]

var navHome = document.querySelector(".nav-home");
var navPortfolio = document.querySelector(".nav-portfolio");
var navProfil = document.querySelector(".nav-profil");

var projectGroup = document.querySelector(".projects-group");

var projectItem = document.querySelector(".project-item");
var projectTitle = document.querySelector(".project-title");
var projectType = document.querySelector(".project-badge");
var projectInfos = document.querySelector(".project-description");
var projectIMG = document.querySelector(".project-img");
var projectURL = document.querySelector(".project-link");

var button = document.querySelectorAll("button")

var allButton = document.querySelector(".all-btn");
var feButton = document.querySelector(".fe-btn");
var beButton = document.querySelector(".be-btn");
var fsButton = document.querySelector(".fs-btn");

var homeScroll = document.querySelector(".home-scroll");

var projectTypeFe = projetsData.filter(function (project) {
  return project.type === "Front-End"
})
var projectTypeBe  = projetsData.filter(function (project) {
  return project.type === "Back-End"
})
var projectTypeFs  = projetsData.filter(function (project) {
    return project.type === "Full-Stack"
})

feButton.addEventListener("click",() => {
    allButton.classList.remove("button-active");
    beButton.classList.remove("button-active");
    fsButton.classList.remove("button-active");
    feButton.classList.add("button-active");
})
beButton.addEventListener("click",() => {
    allButton.classList.remove("button-active");
    feButton.classList.remove("button-active");
    fsButton.classList.remove("button-active");
    beButton.classList.add("button-active");
})
fsButton.addEventListener("click",() => {
    allButton.classList.remove("button-active");
    beButton.classList.remove("button-active");
    feButton.classList.remove("button-active");
    fsButton.classList.add("button-active");
})
allButton.addEventListener("click",() => {
    feButton.classList.remove("button-active");
    beButton.classList.remove("button-active");
    fsButton.classList.remove("button-active");
    allButton.classList.add("button-active");
})



// Map pour tous les projets 
function spreadProjects() {
    projectGroup.innerHTML = '';
    projetsData.map(project => {
        const {title, type, infos, img, urlCode, urlSite, id} = project;

        function linkToSite(){
            if (urlSite != ''){
                return (`<a class="project-links-down" href="${urlSite}" target="_blank">Voir le site</a>`)
            } else {
                return (`<a class="disabled" >Voir le site</a>`)
            }
        }

        function linkToCode(){
            if (urlCode != ''){
                return (`<a class="project-links-down" href="${urlCode}" target="_blank"> Voir le code </a>`)
            } else {
                return (`<a class="disabled" >Voir le code</a>`)
            }
        }

        function whatType(){
            if (type === "Front-End"){
                return (`<p class="project-badge-fe">Front-End</p>`)
            } else if (type === "Back-End"){
                return (`<p class="project-badge-be">Back-End</p>`)
            } else if (type === "Full-Stack"){
                return (`<p class="project-badge-fs">Full-Stack</p>`)
            } else if (type === "CMS"){
                return (`<p class="project-badge">CMS</p>`)
            }
        }

        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div>
                        ${whatType()}
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
                <div class="project-card-info"> 
                    <p class="projects-links-down-p">  |  </p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}

spreadProjects();

// Map pour les projets front-end
function handleClickFe() {
    projectGroup.innerHTML = '';
    projectTypeFe.map(project => {
        const {title, type, infos, img, urlCode, urlSite, id} = project;

        function linkToSite(){
            if (urlSite != ''){
                return (`<a class="project-links-down" href="${urlSite}" target="_blank">Voir le site</a>`)
            } else {
                return (`<a class="disabled" >Voir le site</a>`)
            }
        }

        function linkToCode(){
            if (urlCode != ''){
                return (`<a class="project-links-down" href="${urlCode}" target="_blank"> Voir le code </a>`)
            } else {
                return (`<a class="disabled" >Voir le code</a>`)
            }
        }

        function whatType(){
            if (type === "Front-End"){
                return (`<p class="project-badge-fe">Front-End</p>`)
            } else if (type === "Back-End"){
                return (`<p class="project-badge-be">Back-End</p>`)
            } else if (type === "Full-Stack"){
                return (`<p class="project-badge-fs">Full-Stack</p>`)
            } else if (type === "CMS"){
                return (`<p class="project-badge">CMS</p>`)
            }
        }

        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div>
                        ${whatType()}
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
                <div class="project-card-info"> 
                    <p class="projects-links-down-p">  |  </p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}
// Map pour les projets back-end
function handleClickBe() {
    projectGroup.innerHTML = '';
    projectTypeBe.map(project => {
        const {title, type, infos, img, urlCode, urlSite, id} = project;
        function linkToSite(){
            if (urlSite != ''){
                return (`<a class="project-links-down" href="${urlSite}" target="_blank">Voir le site</a>`)
            } else {
                return (`<a class="disabled" >Voir le site</a>`)
            }
        }

        function linkToCode(){
            if (urlCode != ''){
                return (`<a class="project-links-down" href="${urlCode}" target="_blank"> Voir le code </a>`)
            } else {
                return (`<a class="disabled" >Voir le code</a>`)
            }
        }

        function whatType(){
            if (type === "Front-End"){
                return (`<p class="project-badge-fe">Front-End</p>`)
            } else if (type === "Back-End"){
                return (`<p class="project-badge-be">Back-End</p>`)
            } else if (type === "Full-Stack"){
                return (`<p class="project-badge-fs">Full-Stack</p>`)
            } else if (type === "CMS"){
                return (`<p class="project-badge">CMS</p>`)
            }
        }

        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div>
                        ${whatType()}
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
                <div class="project-card-info"> 
                    <p class="projects-links-down-p">  |  </p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}
// Map pour les projets full-stack
function handleClickFs() {
    projectGroup.innerHTML = '';
    projectTypeFs.map(project => {
        const {title, type, infos, img, urlCode, urlSite, id} = project;

        function linkToSite(){
            if (urlSite != ''){
                return (`<a class="project-links-down" href="${urlSite}" target="_blank">Voir le site</a>`)
            } else {
                return (`<a class="disabled" >Voir le site</a>`)
            }
        }

        function linkToCode(){
            if (urlCode != ''){
                return (`<a class="project-links-down" href="${urlCode}" target="_blank"> Voir le code </a>`)
            } else {
                return (`<a class="disabled" >Voir le code</a>`)
            }
        }

        function whatType(){
            if (type === "Front-End"){
                return (`<p class="project-badge-fe">Front-End</p>`)
            } else if (type === "Back-End"){
                return (`<p class="project-badge-be">Back-End</p>`)
            } else if (type === "Full-Stack"){
                return (`<p class="project-badge-fs">Full-Stack</p>`)
            } else if (type === "CMS"){
                return (`<p class="project-badge">CMS</p>`)
            }
        }

        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div>
                        ${whatType()}
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
                <div class="project-card-info"> 
                    <p class="projects-links-down-p">  | </p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}


// Responsive Navbar

function responsiveMainNav() {
    var x = document.getElementById("main-nav");
    if (x.className === "nav-link") {
      x.className += " responsive";
    } else {
      x.className = "nav-link";
    }
}

// document.querySelector(".nav-home").addEventListener("click", (event) => {
    // navPortfolio.classList.remove("nav-item-active");
    // navProfil.classList.remove("nav-item-active");
    // navHome.classList.add("nav-item-active");

// })
// navPortfolio.addEventListener("click", () => {
//     navHome.classList.remove("nav-item-active");
//     navProfil.classList.remove("nav-item-active");
//     navPortfolio.classList.add("nav-item-active");
// })
// navProfil.addEventListener("click", () => {
//     navHome.classList.remove("nav-item-active");
//     navPortfolio.classList.remove("nav-item-active");
//     navProfil.classList.add("nav-item-active");
// })