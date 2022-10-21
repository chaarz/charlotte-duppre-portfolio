const app = {};

// 1. write down all the elements we want to populate on the page
// 2. create a method to populate the data onto the page
// 3. in the method, select the element we want to populate our data in
// 4. loop over the data a create a section for each project
// 5. append the project on the page

// 1. 
app.myProject = [
    {
        image: "./assets/theRestaurantMall.png",
        alt: "Image of The Restaurant Mall",
        title: "The Restaurant Mall",
        languages: "HTML | CSS | Sass | JavaScript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit dolores non consequuntur voluptates odit? Autem doloribus voluptate nihil aut.",
        live: "https://the-restaurant-mall-cd.netlify.app/",
        repo: "https://github.com/chaarz/Project-1-the-restaurant-mall"
    },
    {
        image: "./assets/theRestaurantMall.png",
        alt: "Image of Project 2",
        title: "This is my project 2",
        languages: "HTML | CSS | Sass | JavaScript | REST API",
        description: "This is a pair project using an API call Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit dolores non consequuntur voluptates odit? Autem doloribus voluptate nihil aut.",
        live: "https://the-restaurant-mall-cd.netlify.app/",
        repo: "https://github.com/chaarz/Project-1-the-restaurant-mall"
    }
] 

// 2. create a method
app.populateProjects = () => {
    const projListContainer = document.querySelector("#projects .wrapper")
    // console.log(projListContainer)
    app.myProject.forEach((item) => {
        // create a projectContainer div
        const projectContainer = document.createElement("div");
        // add a class of projectContainer to the div
        projectContainer.classList.add("projectContainer");
        projectContainer.innerHTML = `
        <div class="projectImgContainer">
            <img src=${item.image} alt=${item.alt}>
        </div>
        <div class="projectDescription">
            <h3>${item.title}</h3>
            <p>${item.languages}</p>
            <p>${item.description}</p>
            <div>
                <a href=${item.live} target="_blank">Live Site</a><span> |</span><a href=${item.repo} target="_blank">Git Repo</a>
            </div>
        </div>
        `
        projListContainer.appendChild(projectContainer)
    })
}


app.init = function() {
    app.populateProjects();
}


app.init();