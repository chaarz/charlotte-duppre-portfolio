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
        image: "./assets/refrigerationVersification.png",
        alt: "Image of Refrigeration Versification project",
        title: "Refrigeration Versification",
        languages: "HTML | Sass | JavaScript | React | REST API",
        description: "Remember the endless IRL fun that was Magnetic Poetry? We have recreated this experience in a web application built using React and leveraging Datamuse's API. Features include a drag & drop functionality, an offensive word filter and autocomplete. This agency-style group project was completed with three talented developers.",
        live: "https://refrigeration-versification-game.netlify.app/",
        repo: "https://github.com/inspiredGames/refrigerationVersification"
    },
    {
        image: "./assets/rhymify.png",
        alt: "Image of Rhymify Project",
        title: "Rhymify",
        languages: "React | REST API | HTML | CSS | SCSS",
        description: "Rhymify is word generator application that helps songwriters search for rhymes! The app was built with React, leveraging Datamuse's RESTful API, using asynchronous API calls and error handling. My first react solo project, created in one week.",
        live: "https://rhymify.netlify.app/",
        repo: "https://github.com/chaarz/Rhymify"
    },
    {
        image: "./assets/tastyTable.png",
        alt: "Image of project Tasty Table",
        title: "Tasty Table",
        languages: "HTML | Sass | JavaScript | REST API",
        description: "Tasty Table is food application leveraging Tasty's RESTful API and built with vanilla JavaScript. Features include an autocomplete and recipe generator using asynchronous API calls and error handling. This was a pair programming project completed with another developer.",
        live: "https://tasty-table.netlify.app/",
        repo: "https://github.com/tastyTable/tastyTableApp"
    },
    {
        image: "./assets/theRestaurantMall.png",
        alt: "Image of The Restaurant Mall Project",
        title: "The Restaurant Mall",
        languages: "HTML | Sass | JavaScript",
        description: "The Restaurant Mall is a multi-page PSD conversion made using mockup pieces of a provided website design, featuring a Home, Blog and Contact page. This is a fully responsive website (down to 320px), built with Sass, and adheres to accessibility best standards (including aria labels and proper structural elements like heading hierarchy).",
        live: "https://the-restaurant-mall-cd.netlify.app/",
        repo: "https://github.com/chaarz/Project-1-the-restaurant-mall"
    }
] 

// 2. create a method to populate each project onto the page
app.populateProjects = () => {
    // 3. define the element we want to populate our projects into
    const projListContainer = document.querySelector("#projects .wrapper")
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
            <p>${item.languages}</p>
            <p>${item.description}</p>
            <div>
                <a class="anchorUnderline" href=${item.live} target="_blank">Live Site</a><span> | </span><a class="anchorUnderline" href=${item.repo} target="_blank">Git Repo</a>
            </div>
        </div>
        `
        // 5. append the projects on the page
        projListContainer.appendChild(projectContainer)
    })
}


app.init = function() {
    app.profilePicHover();
    app.populateProjects();
    app.mobileSlideOutnav();
}

app.init();