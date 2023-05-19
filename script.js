const app = {};

/*****************
PROFILE PIC
 *****************/
app.profilePicHover = () => {
    const profilePic = document.querySelector('.aboutImgContainer img');
    const grayScaleToggle = () => {
        profilePic.classList.toggle('grayScale');
    }
    profilePic.addEventListener('mouseover', grayScaleToggle);
    profilePic.addEventListener('mouseleave', grayScaleToggle);
}
/*****************
 MOBILE NAVIGATION
 *****************/

// Mobile slide-out navigation 
app.mobileSlideOutnav = () => {
    const hamButton = document.querySelector(".hamButton");
    const mobileNav = document.querySelector(".mobileNavContainer");
    const navLinks = document.querySelectorAll(".mobileNavLink");

    const toggleMobileNav = () => {
        mobileNav.classList.toggle('open');
        // trigger hamburger button animation (to become 'close' button)
        hamButton.classList.toggle('active');
    };

    // close the menu when a mobile nav link is clicked
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', toggleMobileNav);
    });

    hamButton.addEventListener('click', toggleMobileNav);
}

/****************
PROJECTS SECTION
*****************/

// Populate projects into the Projects section

// 1. Create an array of projects with all project elements we want to populate on the page 
app.myProject = [
    {
        image: "./assets/jobi-test2.png",
        alt: "Image of Jobi project",
        title: "Jobi job board",
        languages: ["HTML", "Sass", "React.js", "Firebase"],
        description: "Jobi is a job board application leveraging React that enables users to browse jobs stored in Firebase. This is a multi-page PSD conversion made using mockup pieces of a provided website design, featuring a Home, Job List and Individual Job pages. It is fully responsive (down to 320px) and accessible. 🚧 This is a work in progress. More features coming soon ! 🚧",
        live: "https://jobi-joba.netlify.app/",
        repo: "https://github.com/chaarz/Jobi"
    },
    {
        image: "./assets/refrigerationVersification.png",
        alt: "Image of Refrigeration Versification project",
        title: "Refrigeration Versification",
        languages: ["HTML", "Sass", "React.js", "REST API"],
        description: "Remember the endless IRL fun that was Magnetic Poetry? We have recreated this experience in a web application built using React and leveraging Datamuse's API. Features include a drag & drop functionality, an offensive word filter and autocomplete. This agency-style group project was completed with three talented developers.",
        live: "https://refrigeration-versification-game.netlify.app/",
        repo: "https://github.com/inspiredGames/refrigerationVersification"
    },
    {
        image: "./assets/rhymify.png",
        alt: "Image of Rhymify Project",
        title: "Rhymify",
        languages: ["React.js", "REST API", "HTML", "Sass"],
        description: "Rhymify is word generator application that helps songwriters search for rhymes! The app was built with React, leveraging Datamuse's RESTful API, using asynchronous API calls and error handling. My first react solo project, created in one week.",
        live: "https://rhymify.netlify.app/",
        repo: "https://github.com/chaarz/Rhymify"
    },
    {
        image: "./assets/tastyTable.png",
        alt: "Image of project Tasty Table",
        title: "Tasty Table",
        languages: ["HTML", "Sass", "JavaScript", "REST API"],
        description: "Tasty Table is food application leveraging Tasty's RESTful API and built with vanilla JavaScript. Features include an autocomplete and recipe generator using asynchronous API calls and error handling. This was a pair programming project completed with another developer.",
        live: "https://tasty-table.netlify.app/",
        repo: "https://github.com/tastyTable/tastyTableApp"
    },
    {
        image: "./assets/theRestaurantMall.png",
        alt: "Image of The Restaurant Mall Project",
        title: "The Restaurant Mall",
        languages: ["HTML", "CSS", "Sass", "JavaScript"],
        description: "The Restaurant Mall is a multi-page PSD conversion made using mockup pieces of a provided website design, featuring a Home, Blog and Contact page. This is a fully responsive website (down to 320px), built with Sass, and adheres to accessibility best standards (including aria labels and proper structural elements like heading hierarchy).",
        live: "https://the-restaurant-mall-cd.netlify.app/",
        repo: "https://github.com/chaarz/Project-1-the-restaurant-mall"
    }
]

// 2. create a method to populate each project onto the page
app.populateProjects = () => {
    // 3. define the element we want to populate our projects into
    const projListContainer = document.querySelector("#projects .projectList")
    // 4. loop over the array of projects 
    app.myProject.forEach((item) => {
        // a. create a projectContainer div for each project
        const projectContainer = document.createElement("div");
        // b. add a class of projectContainer to the div
        projectContainer.classList.add("projectContainer");
        // c. use innerHTML to add project properties
        projectContainer.innerHTML = `
        <div class="projectImgContainer">
            <img src=${item.image} alt=${item.alt}>
        </div>
        <div class="projectDescription">
            <h3>${item.title}</h3>
            <ul><li>${item.languages[0]}</li>
            <li>${item.languages[1]}</li>
            <li>${item.languages[2]}</li>
            <li>${item.languages[3]}</li></ul>
            <div class="desc">
                <p>${item.description}</p>
                <div class="projectLinks">
                    <a class="anchorUnderline" href=${item.live} target="_blank">Live Site</a><span> | </span><a class="anchorUnderline" href=${item.repo} target="_blank">Git Repo</a>
                </div>
            </div>
        </div>
        `
        // 5. append the projects on the page
        projListContainer.appendChild(projectContainer)
    })
}

/************************
CONTACT FORM REDIRECTION
************************/

app.contactForm = () => {
    var form = document.getElementById("myForm");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("myFormStatus");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.classList.add('success');
                status.innerHTML = "🎉 Message sent ! Thank you";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.classList.add('error');
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.classList.add('error');
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)
}

app.init = function () {
    app.profilePicHover();
    app.populateProjects();
    app.mobileSlideOutnav();
    app.contactForm();
}

app.init();