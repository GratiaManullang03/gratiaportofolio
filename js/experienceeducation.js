$(document).ready(function() {
    // Experience data
    const experienceData = [
        {
            period: "June - July 2023 | June - July 2024 | September 2024 - Present",
            title: "Internship",
            company: "PT Samanasoft Inovasi Persada, Indonesia",
            description: [
                "June - July 2023: Developed an AI ChatBot for a hospital system to streamline the process of booking doctor consultations",
                "June - July 2024: Created a Machine Learning model to provide medication dosage recommendations for patients",
                "September 2024 - Present: Developing new modules and features to enhance existing programs, contributing to ongoing software improvement and innovation",
            ]
        },
        {
            period: "30 October - 7 November 2024",
            title: "Talent Acquisition Representative",
            company: "Polytechnic Multimedia Nusantara , Indonesia",
            description: [
                "Represented the university at educational fairs in Pematang Siantar and Medan, North Sumatra",
                "Engaged with prospective students and promoted academic programs",
            ]
        },
        {
            period: "January - February 2023 | July - August 2023",
            title: "Campus Visit Committee",
            company: "Polytechnic Multimedia Nusantara , Indonesia",
            description: [
                "Educated high school students by guiding campus tours and promoting Polytechnic Multimedia Nusantara",
                "Conduct recruitment by inviting and communicating with high school students",
            ]
        },        
    ];

    // Education data
    const educationData = [
        {
            period: "2018 - 2021",
            title: "Science Major",
            institution: "Budi Mulia Pematangsiantar Senior High School",
            description: [
                "member of the Religious Division of the Student Organization (OSIS)"
            ]
        },
        {
            period: "2022 - Present",
            title: "E-Commerce",
            institution: "Polytechnic Multimedia Nusantara",
            description: [
                "Entered the university with a scholarship from Quipper Campus",
                "Current GPA: 3.94 out of 4.0",
                "President of the E-Commerce Logistics Student Association (January 2023 - June 2024)",
                "Head of the Event Division in Anagata 2023 (new student orientation event)",
                "Chairman of ECLIVAL 2024 (festival organized by the E-Commerce Logistics Student Association)",
                "Chairman and Show Director of Inaugurasi 2024 (senate session welcoming new students)",
                "Participated as part of team 'SquidWork' in the National Business Plan 2023 competition",
                "Achieved 1st Runner Up in the Podcast Competition category, competition organized by Politeknik Swasta Indonesia (PELITA)",
                "Participated in online and offline courses, seminars, and training sessions, including: Frappe, DQ Lab, Disaster Preparedness and Post-Disaster Resilience, Samsung Innovation Campus Batch 5 (2023/2024), International Training Centre",
                
            ]
        }
    ];

    // Function to create timeline items
    function createTimelineItem(data, type) {
        const descriptionList = data.description
            .map(item => `<li>${item}</li>`)
            .join('');

        return `
            <div class="timeline-item">
                <div class="timeline-date">${data.period}</div>
                <h3 class="timeline-title">${data.title}</h3>
                <p class="timeline-subtitle">${type === 'experience' ? data.company : data.institution}</p>
                <div class="timeline-description">
                    <ul class="description-list">
                        ${descriptionList}
                    </ul>
                </div>
            </div>
        `;
    }

    // Populate experience section
    function initExperience() {
        const experienceContainer = $('#experience .timeline-container');
        experienceData.forEach(item => {
            experienceContainer.append(createTimelineItem(item, 'experience'));
        });
    }

    // Populate education section
    function initEducation() {
        const educationContainer = $('#education .timeline-container');
        educationData.forEach(item => {
            educationContainer.append(createTimelineItem(item, 'education'));
        });
    }

    // Initialize both sections
    initExperience();
    initEducation();

    // Enhanced scroll animation
    $('.timeline-item').each(function(i) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)',
            'transition': 'all 0.5s ease'
        });
        
        const element = this;
        
        $(window).scroll(function() {
            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            const bottomOfObject = $(element).offset().top + $(element).outerHeight() * 0.3;
            
            if (bottomOfWindow > bottomOfObject) {
                $(element).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
});