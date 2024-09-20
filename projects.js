// Array of project data
const projects = [
    {
        title: "Osu! - Beat Map Generator", 
        description: "Trained a beat map generator for rhythm game Osu! using Transformer model . Scraped and cleaned a dataset of 80k beat maps. Reproduced the multi-task multitrack music transcription model with MAESTRO dataset, and achieved 90% reported accuracy. Created a language representation for tokeizing Osu! object information, including time, object type, location, and length. Trained a multi-head MLP to predict the features of the next Osu! object. Trained a S4 model to predict Osu! beats from spectrogram.",
        sourceLink: "https://www.youtube.com/watch?v=vn7WfFkcoWk&t=616s",
        tools: "PyTorch, Transformer, OOP",
        image: "assets/img/osu.jpeg",
        date: "2023-05-01"
    },
    {
        title: "GNN-Based E-Commerce Recommender", 
        description: "Developed a Graph Neural Network (GNN)-based model to predict emerging trends for e-commerce businesses. Analyzed connections between hashtags used in social media using Word2Vec. Predicted undiscovered connections using GraphSAGE. Collected hashtags from a prominent brand (e.g., Nike), constructed a graph with 3,024 edges, and achieved a final accuracy of 68.14% for identifying potential popular hashtags. Evaluated ethical implications for responsible framework use.",
        sourceLink: "https://github.com/Soniazdp/GNNs-with-Social-Media-E-Commerce",
        tools: "PyTorch, NumPy, R",
        image: "assets/img/gnn.png",
        date: "2023-01-09"
    }
];

// Sort the projects array by date in descending order (most recent first)
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Variables to manage loading state
let projectsLoaded = 0;
const projectsPerLoad = 1;

// Function to display projects
function loadProjects() {
    const container = document.getElementById('projects-container');

    // Load the next set of projects
    for (let i = projectsLoaded; i < projectsLoaded + projectsPerLoad && i < projects.length; i++) {
        const project = projects[i];
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of ${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> ${project.tools}</li>
                </ul>
                <p>${project.description}</p>
                <div class="card-action">
                  <a aria-label="Visit ${project.title} website" href="${project.sourceLink}" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                </div>
              </div>
            </div>
        `;

        var sth = {
            
        }

        container.appendChild(projectDiv);
    }

    // Update the number of loaded projects
    projectsLoaded += projectsPerLoad;

    // Hide "Load More" button if all projects are loaded
    if (projectsLoaded >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

// Initial load of the latest project
document.addEventListener('DOMContentLoaded', function () {
    loadProjects();
});

// Load more projects on button click
document.getElementById('load-more').addEventListener('click', loadProjects);
