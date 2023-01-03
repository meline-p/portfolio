const projetsData =[
    {
        title: "The Simon Game",
        type: "Front-End",
        infos: "Javascript Challenge Project",
        img: "https://meline-p.github.io/Ressources/images/Pojets-img/TheSimonGame-img.png",
        id: 20,
        url: "https://meline-p.github.io/The-Simon-Game/",
        active: true
    },
    {
        title: "Blog Website",
        type: "Back-End",
        infos: "React App",
        id: 19,
        url: "",
        active: true
    },
    {
        title: "Chrono Pomodoro",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Chrono-Pomodoro-img.png",
        id: 18,
        url: "https://f5frcm.csb.app/",
        active: true
    },
    {
        title: "React Animations",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/React-Animations-img.png",
        id: 17,
        url: "https://g4jflv.csb.app/",
        active: true
    },
    {
        title: "E-Commerce",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/E-Commerce-img.png",
        id: 16,
        url: "https://exzire.csb.app/",
        active: true
    },
    {
        title: "Drum Kit",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Drum-Kit-img.png",
        id: 15,
        url: "https://meline-p.github.io/Drum-Kit/",
        active: true
    },
    {
        title: "Multi-Langs Website",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Multi-Langs-Website-img.png",
        id: 14,
        url: "https://5bft3n.csb.app/",
        active: true
    },
    {
        title: "Coworking Website",
        type: "Front-End",
        infos: "",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Coworking-Website-img.png",
        id: 13,
        url: "https://meline-p.github.io/Coworking-Website/",
        active: true
    },
    {
        title: "Keeper App",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Keeper-App-img.png",
        id: 12,
        url: "https://z81be1.csb.app/",
        active: true
    },
    {
        title: "Snake",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Snake-img.png",
        id: 11,
        url: "https://meline-p.github.io/Snake-Game/",
        active: true
    },
    {
        title: "To Do List",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/To-Do-List-img.png",
        id: 10,
        url: "https://uf86si.csb.app/",
        active: true
    },
    {
        title: "Quizz App",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Quizz-App-img.png",
        id: 9,
        url: "https://meline-p.github.io/Quizz-App/",
        active: true
    },
    {
        title: "Emojipedia",
        type: "Front-End",
        infos: "React App",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Emojipedia-img.png",
        id: 8,
        url: "https://polr7z.csb.app/",
        active: true
    },
    {
        title: "Countdown Timer",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Countdown-Timer-img.png",
        id: 7,
        url: "https://meline-p.github.io/Countdown-Timer/",
        active: true
    },
    {
        title: "Analog App",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Analog-App-img.png",
        id: 6,
        url: "https://meline-p.github.io/Analog-App/",
        active: true
    },
    {
        title: "Dicee Game",
        type: "Front-End",
        infos: "Javascript Project Challenge",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Dicee-Game-img.png",
        id: 5,
        url: "https://meline-p.github.io/Dicee-Game/",
        active: true
    },
    {
        title: "Secret Project",
        type: "Full-Stack",
        infos: "",
        id: 4,
        url: "",
        active: true
    },
    {
        title: "TinDog",
        type: "Front-End",
        infos: "Project to practice Bootstrap",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Tindog-img.png",
        id: 3,
        url: "https://meline-p.github.io/TinDog/",
        active: true
    },
    {
        title: "Travel Agency",
        type: "Front-End",
        infos: "Landing Page with HTML/CSS",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Travel-Agency-img.png",
        id: 2,
        url: "https://meline-p.github.io/Travel-Agency/",
        active: true
    },
    {
        title: "Recipies",
        type: "Front-End",
        infos: "Get deeper into CSS",
        img:"https://meline-p.github.io/Ressources/images/Pojets-img/Recipies-img.png",
        id: 1,
        url: "https://meline-p.github.io/Recipies/",
        active: true
    }
]

var projectGroup = document.querySelector(".projects-group");

var projectItem = document.querySelector(".project-item");
var projectTitle = document.querySelector(".project-title");
var projectType = document.querySelector(".project-badge");
var projectInfos = document.querySelector(".project-description");
var projectIMG = document.querySelector(".project-img");
var projectURL = document.querySelector(".project-link");

var button = document.querySelectorAll("button")

var projectTypeFe = projetsData.filter(function (project) {
  return project.type === "Front-End"
})
var projectTypeBe  = projetsData.filter(function (project) {
  return project.type === "Back-End"
})
var projectTypeFs  = projetsData.filter(function (project) {
    return project.type === "Full-Stack"
  })

// Map pour tous les projets 
function spreadProjects() {
    projectGroup.innerHTML = '';
    projetsData.map(project => {
        const {title, type, infos, img, url, id} = project;
        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="${url}" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div class="project-badge">
                        <p style="background-color: ${type} === "Front-End" ? green : ${type} === "Back-End" ? yellow : blue">${type}</p>
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}

spreadProjects();


function handleClickFe() {
    projectGroup.innerHTML = '';
    projectTypeFe.map(project => {
        const {title, type, infos, img, url, id} = project;
        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="${url}" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div class="project-badge">
                        <p style="background-color: ${type} === "Front-End" ? green : ${type} === "Back-End" ? yellow : blue">${type}</p>
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}

function handleClickBe() {
    projectGroup.innerHTML = '';
    projectTypeBe.map(project => {
        const {title, type, infos, img, url, id} = project;
        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="${url}" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div class="project-badge">
                        <p style="background-color: ${type} === "Front-End" ? green : ${type} === "Back-End" ? yellow : blue">${type}</p>
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}

function handleClickFs() {
    projectGroup.innerHTML = '';
    projectTypeFs.map(project => {
        const {title, type, infos, img, url, id} = project;
        const projectEl = document.createElement('div');
        projectEl.classList.add("project-item");
        projectEl.innerHTML =`
        <a class="project-link" href="${url}" target="_blank">
            <div class="project-card">
                <img class="project-img" src="${img}" alt="img-${id}">
                <div class="project-card-info">
                    <h3 class="project-title">${title}</h3>
                    <div class="project-badge">
                        <p style="background-color: ${type} === "Front-End" ? green : ${type} === "Back-End" ? yellow : blue">${type}</p>
                    </div>
                    <p class="project-description">${infos}</p>
                </div>
            </div>
        </a>
        `
        projectGroup.appendChild(projectEl);
    });
}



