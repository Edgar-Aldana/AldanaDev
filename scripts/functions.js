const frameworks = {
    javascript: [
        { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'NextJS', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    ],
    python: [
        { name: 'Django', img: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
        { name: 'FastAPI', img: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
        { name: 'Streamlit', img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Streamlit-logo-primary-colormark-darktext.png' }
    ],
    vb: [
        { name: 'AutoIT', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Autoit-icon.png' },
        { name: 'UIPath', img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/UiPath_Logo.png' }
    ],
    sql: [
        { name: 'SQL Server', img: 'https://upload.wikimedia.org/wikipedia/en/d/d4/MySQL_Workbench_Logo.png' },
        { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'},
        { name: 'PL/SQL', img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/MongoDB_logo.svg' },
        { name: 'SQLite', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg' }
    ],
    css: [
        { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
    ],
    power_m: [
        { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' }
    ]
};

document.querySelectorAll('.lang').forEach(button => {
    button.addEventListener('mouseover', (event) => {
        const selectedLang = button.getAttribute('data-lang');
        const frameworksList = frameworks[selectedLang] || [];
        const tooltipContent = document.getElementById('frameworks-list');
        const tooltipContainer = document.querySelector('.tooltip-container');

        // Insertar frameworks dinámicamente
        tooltipContent.innerHTML = frameworksList.length > 0 
            ? frameworksList.map(fw => 
                `<div class="framework"><img src="${fw.img}" alt="${fw.name}"><span>${fw.name}</span></div>`
              ).join('')
            : '<p>N/A</p>';

        // Obtener la posición del botón clickeado
        const rect = button.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.bottom + window.scrollY}px`; 
        tooltipContainer.style.left = `${rect.left + rect.width / 2}px`;
        tooltipContainer.style.transform = "translateX(-50%)";
        tooltipContainer.style.display = 'block';
    });
});

// Cerrar tooltip al hacer clic fuera
document.addEventListener('click', (event) => {
    const tooltipContainer = document.querySelector('.tooltip-container');
    if (!event.target.closest('.lang') && !event.target.closest('.tooltip-container')) {
        tooltipContainer.style.display = 'none';
    }
});


date = new Date().getFullYear();

document.getElementById('mark').innerHTML = 'Copyright &copy; ' + date;