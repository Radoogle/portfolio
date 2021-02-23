// jshint esversion:6

const PROJECTS = [ 
    {
        name: 'eCommerce Website',
        link: 'https://radoogle.github.io/redStore/',
        className: 'tiles',
        imgSrc: 'images/eCommerce.jpg',
        category: ['All']
    },
    {
        name: 'Chat App Page',
        link: 'https://radoogle.github.io/chat-app/',
        className: 'tiles',
        imgSrc: 'images/chatAppPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Sign Up Page',
        link: 'https://radoogle.github.io/signup-page/',
        className: 'tiles',
        imgSrc: 'images/signUpPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Contact Me Page',
        link: 'https://radoogle.github.io/contact-me-page/',
        className: 'tiles',
        imgSrc: 'images/contactMePage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Blog Main Page',
        link: 'https://radoogle.github.io/blog-main-page/',
        className: 'tiles',
        imgSrc: 'images/blogPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Tic Tac Toe',
        link: 'https://radoogle.github.io/Tic-Tac-Toe/',
        className: 'tiles',
        imgSrc: 'images/TicTacToe.jpg',
        category: ['All', 'game']
    },
    {
        name: 'Tree Map (D3)',
        link: 'https://codepen.io/Radoogle/full/GRpPzVG',
        className: 'tiles',
        imgSrc: 'images/D3TreeMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Choropleth Map (D3)',
        link: 'https://codepen.io/Radoogle/full/xxwmWoz?',
        className: 'tiles',
        imgSrc: 'images/ChoroplethMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Pomodoro Clock (React)',
        link: 'https://codepen.io/Radoogle/pen/xxwYrjL?editors=0010',
        className: 'tiles',
        imgSrc: 'images/PomodoroClock.jpg',
        category: ['All', 'React', 'CodePen', 'fcc']
    },
    {
        name: 'Heat Map (D3)',
        link: 'https://codepen.io/Radoogle/pen/mdejBQb?editors=0010',
        className: 'tiles',
        imgSrc: 'images/HeatMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Scatter Plot (D3)',
        link: 'https://codepen.io/Radoogle/pen/VwvXoqR?editors=0010',
        className: 'tiles',
        imgSrc: 'images/D3ScatterPlot.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Calculator (React)',
        link: 'https://codepen.io/Radoogle/pen/mdewwgm?editors=0010',
        className: 'tiles',
        imgSrc: 'images/Calculator.jpg',
        category: ['All', 'React', 'CodePen']
    },
    {
        name: 'Drum Machine (React)',
        link: 'https://codepen.io/Radoogle/pen/XWmMKLK',
        className: 'tiles',
        imgSrc: 'images/drummachine.jpg',
        category: ['All', 'React', 'CodePen']
        
    },
    {
        name: 'Memory Game',
        link: 'https://radoogle.github.io/Memory-Game/',
        className: 'tiles',
        imgSrc: 'images/MemoryGame.jpg',
        category: ['All', 'game']
        
    },
    {
        name: 'Bar Chart (D3)',
        link: 'https://codepen.io/Radoogle/pen/BaowWqx?editors=0010',
        className: 'tiles',
        imgSrc: 'images/D3BarChart.jpg',
        category: ['All', 'D3', 'CodePen']
        
    },
    {
        name: 'Tribute Page',
        link: 'https://codepen.io/Radoogle/pen/GRJvMGy',
        className: 'tiles',
        imgSrc: 'images/tribute.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Survey Form',
        link: 'https://codepen.io/Radoogle/pen/mdJMXMw',
        className: 'tiles',
        imgSrc: 'images/survey.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Product Landing Page',
        link: 'https://codepen.io/Radoogle/pen/ExjvBZN',
        className: 'tiles',
        imgSrc: 'images/product.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Technical Documentation Page',
        link: 'https://codepen.io/Radoogle/pen/yLNzKBW',
        className: 'tiles',
        imgSrc: 'images/documentation.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Countdown Timer',
        link: 'https://radoogle.github.io/Countdown-timer/',
        className: 'tiles',
        imgSrc: 'images/countdown.jpg',
        category: ['All', 'github']
        
    },
    {
        name: 'Image Manipulation',
        link: 'https://radoogle.github.io/ImageManipulation/',
        className: 'tiles',
        imgSrc: 'images/manipulation.jpg',
        category: ['All', 'github']
        
    },
];

const displayProjects = (projects, filterValue) => {
  let result = "";
  
  projects.forEach( ({name, link, className, imgSrc, category}) => {
    if (category.includes(filterValue)) {
      result += `
        <a href="${link}" class="${className}" target="_blank">
          <img src="${imgSrc}" alt="${name}">
          <p><span class="code">&lt;</span>${name}<span class="code">/&gt;</span></p>
        </a>
      `;
    }
  });
  document.getElementById('project-tile').innerHTML = result;
};


document.addEventListener('DOMContentLoaded', function() {
    //const container = document.getElementById('project-tile');
    const filter = document.getElementById("filter");

    // first display all project, category === "All"
    displayProjects(PROJECTS, "All"); 

    // building the filter list options from the category in PROJECTS
    
      // 1. build an array with distinct category values
      let selectFilterValues = [];
      PROJECTS.forEach( ({category}) => {
        for (let cat of category) {
          if (!selectFilterValues.includes(cat)) {
            selectFilterValues.push(cat);
          }
        }
      });

      // 2. add the values from selectFilterValues to the dropdownlist
      let resultList = "";
      selectFilterValues.forEach( (value) => {
        resultList += `
          <option value="${value}">${value}</option>
        `;
      });
      filter.innerHTML = resultList;
      
    // every change in filter list will refresh the list of tiles.
    filter.addEventListener("change", () => {
      displayProjects(PROJECTS, filter.value);
    });

    const footerYear = document.getElementById("footerYear");
    footerYear.innerHTML = new Date().getFullYear();
});