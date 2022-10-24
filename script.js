const app = {};

/*****************
 MOBILE NAVIGATION
 *****************/

// Mobile slide-out navigation 
const hamButton = document.querySelector(".hamButton");
const mobileNav = document.querySelector(".mobileNavContainer");
const navLinks = document.querySelectorAll('.mobileNavLink');

const toggleMobileNav = () => {
    mobileNav.classList.toggle('open');
  // trigger menu button animation (to become close button)
    hamButton.classList.toggle('active');
};

// close the menu if a link is clicked
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleMobileNav);
});

hamButton.addEventListener('click', toggleMobileNav);

/****************
PROJECTS
*****************/

// Populate projects into the Projects section

// 1. create an array of projects with all project elements we want to populate on the page 
// 2. create a method to populate each project onto the page
// 3. in the method, select the element we want to populate our data into
// 4. loop over the array of projects, create a section for each project, add the proper class and use innerHTML to add project properties 
// 5. append the project on the page

// 1. 
app.myProject = [
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
    },
    {
        image: "./assets/tastyPSDconversion.png",
        alt: "Image of Tasty, a PSD conversion",
        title: "Tasty, a PSD conversion",
        languages: "HTML | CSS",
        description: "Tasty is a PSD conversion project made using mockup pieces of a provided website design, featuring functional, responsible website elements.",
        live: "#",
        repo: "https://github.com/chaarz/Chaarz-Tasty-assignment01"
    },
    {
        image: "./assets/spaces.png",
        alt: "Image of project Spaces",
        title: "Spaces",
        languages: "HTML | CSS",
        description: "Spaces is a PSD conversion project made using mockup pieces of a provided website design, featuring functional, responsible website elements.",
        live: "https://spaces-cd.netlify.app/",
        repo: "#"
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
                <a href=${item.live} target="_blank">Live Site</a><span> | </span><a href=${item.repo} target="_blank">Git Repo</a>
            </div>
        </div>
        `
        // 5. append the projects on the page
        projListContainer.appendChild(projectContainer)
    })
}


app.init = function() {
    app.populateProjects();
}


app.init();