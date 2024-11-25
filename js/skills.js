$(document).ready(function() {
    // Skills data
    const skillsData = [
        {
            name: "Python",
            icon: "source/image/skills/python.png",
            class: "python"
        },
        {
            name: "C++",
            icon: "source/image/skills/c++.png",
            class: "mongodb"
        },
        {
            name: "C",
            icon: "source/image/skills/c.png",
            class: "flexsim"
        },
        {
            name: "C#",
            icon: "source/image/skills/c-sharp.png",
            class: "csharp"
        },
        {
            name: "SQL",
            icon: "source/image/skills/database.png",
            class: "sql"
        },
        {
            name: "JavaScript",
            icon: "source/image/skills/java-script.png",
            class: "javascript"
        },
        {
            name: "React JS",
            icon: "source/image/skills/reactjs.png",
            class: "laravel"
        },
        {
            name: "PHP",
            icon: "source/image/skills/php.png",
            class: "mongodb"
        },
        {
            name: "Flutter",
            icon: "source/image/skills/flutter.png",
            class: "flutter"
        },
        {
            name: "Laravel",
            icon: "source/image/skills/laravel.png",
            class: "laravel"
        },        
        {
            name: "Frappe",
            icon: "source/image/skills/frappe.png",
            class: "laravel"
        },        
        {
            name: "Visual Studio",
            icon: "source/image/skills/visual-studio.png",
            class: "flexsim"
        },
        {
            name: "MongoDB",
            icon: "source/image/skills/mongodb.png",
            class: "mongodb"
        },
        {
            name: "RStudio",
            icon: "source/image/skills/r.png",
            class: "rstudio"
        },      
        {
            name: "IBM SPSS",
            icon: "source/image/skills/ibm-spss.png",
            class: "ibmspss"
        },
        {
            name: "Odoo",
            icon: "source/image/skills/odoo.png",
            class: "odoo"
        },
        {
            name: "SketchUp",
            icon: "source/image/skills/sketch-up.png",
            class: "sktechup"
        },  
        {
            name: "Flexsim",
            icon: "source/image/skills/flexsim.png",
            class: "flexsim"
        },
    ];

    // Function to create skill items
    function createSkillItem(skill) {
        return `
            <div class="skill-item">
                <img src="${skill.icon}" alt="${skill.name}" class="skill-icon ${skill.class}">
                <div class="skill-name">${skill.name}</div>
            </div>
        `;
    }

    // Initialize skills
    function initSkills() {
        const skillsGrid = $('.skills-grid');
        skillsData.forEach(skill => {
            skillsGrid.append(createSkillItem(skill));
        });
    }

    // Initialize
    initSkills();
});