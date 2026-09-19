

const GEMINI_API_KEY ="   Put your NEW Gemini API key here. "
   



const GEMINI_MODEL =
    "gemini-3.6-flash";


const GEMINI_URL =
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;



/* =========================================================
   EDUCATION DATA
========================================================= */

const educationProfiles = {

    "12th": {

        careers: [
            ["frontend", "Frontend Developer"],
            ["fullstack", "Full Stack Developer"],
            ["data", "Data Analyst"],
            ["ai", "AI / ML Beginner"],
            ["cyber", "Cybersecurity"],
            ["uiux", "UI/UX Designer"]
        ],

        interests: [
            "Web Development",
            "Programming",
            "AI/ML",
            "Data Analytics",
            "UI/UX",
            "Cybersecurity"
        ],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Excel",
            "Communication"
        ]
    },


    "diploma": {

        careers: [
            ["frontend", "Frontend Developer"],
            ["backend", "Backend Developer"],
            ["fullstack", "Full Stack Developer"],
            ["data", "Data Analyst"],
            ["cyber", "Cybersecurity"],
            ["cloud", "Cloud Engineer"],
            ["uiux", "UI/UX Designer"]
        ],

        interests: [
            "Web Development",
            "Backend Development",
            "Data Analytics",
            "Cybersecurity",
            "Cloud Computing",
            "UI/UX"
        ],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "SQL",
            "Git & GitHub"
        ]
    },


    "graduation": {

        careers: [
            ["frontend", "Frontend Developer"],
            ["backend", "Backend Developer"],
            ["fullstack", "Full Stack Developer"],
            ["data", "Data Analyst"],
            ["ai", "AI / ML Engineer"],
            ["cyber", "Cybersecurity"],
            ["cloud", "Cloud Engineer"],
            ["uiux", "UI/UX Designer"]
        ],

        interests: [
            "Web Development",
            "Software Development",
            "AI/ML",
            "Data Analytics",
            "Cloud Computing",
            "Cybersecurity",
            "UI/UX"
        ],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "SQL",
            "Git & GitHub",
            "Excel"
        ]
    },


    "mca": {

        careers: [
            ["frontend", "Frontend Developer"],
            ["backend", "Backend Developer"],
            ["fullstack", "Full Stack Developer"],
            ["data", "Data Analyst"],
            ["ai", "AI / ML Engineer"],
            ["cyber", "Cybersecurity"],
            ["cloud", "Cloud Engineer"]
        ],

        interests: [
            "Web Development",
            "Software Development",
            "AI/ML",
            "Data Analytics",
            "Backend Development",
            "Cloud Computing",
            "Cybersecurity"
        ],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "SQL",
            "MongoDB",
            "Git & GitHub"
        ]
    },


    "mba": {

        careers: [
            ["business", "Business Analytics"],
            ["marketing", "Digital Marketing"],
            ["product", "Product Management"],
            ["finance", "Financial Analysis"],
            ["data", "Data Analyst"],
            ["uiux", "UI/UX Designer"]
        ],

        interests: [
            "Business Analytics",
            "Digital Marketing",
            "Product Management",
            "Finance",
            "Data Analytics",
            "Leadership",
            "Entrepreneurship"
        ],

        skills: [
            "Excel",
            "Power BI",
            "SQL",
            "Communication",
            "Presentation",
            "Digital Marketing",
            "Project Management"
        ]
    }

};



/* =========================================================
   SKILLS
========================================================= */

const skillCatalog = {

    frontend: [
        ["JavaScript", "Programming", "🟨"],
        ["React.js", "Frontend", "⚛️"],
        ["Git & GitHub", "Development", "🔧"],
        ["Responsive Design", "UI/UX", "📱"],
        ["REST APIs", "API", "🔗"],
        ["TypeScript", "Programming", "🔷"]
    ],

    backend: [
        ["Node.js", "Backend", "🟢"],
        ["Express.js", "Backend", "🚀"],
        ["MongoDB", "Database", "🍃"],
        ["REST APIs", "Backend", "🔗"],
        ["Authentication", "Security", "🔐"],
        ["PostgreSQL", "Database", "🐘"]
    ],

    fullstack: [
        ["React.js", "Frontend", "⚛️"],
        ["Node.js", "Backend", "🟢"],
        ["MongoDB", "Database", "🍃"],
        ["REST APIs", "Backend", "🔗"],
        ["Git & GitHub", "Development", "🔧"],
        ["Authentication", "Security", "🔐"]
    ],

    data: [
        ["SQL", "Database", "🗄️"],
        ["Python", "Programming", "🐍"],
        ["Power BI", "Visualization", "📊"],
        ["Statistics", "Analytics", "📈"],
        ["Excel", "Business Tool", "📗"],
        ["Data Visualization", "Analytics", "📊"]
    ],

    ai: [
        ["Python", "Programming", "🐍"],
        ["Machine Learning", "AI", "🤖"],
        ["Deep Learning", "AI", "🧠"],
        ["Generative AI", "AI", "✨"],
        ["Statistics", "Analytics", "📈"],
        ["Data Preparation", "Data", "🗃️"]
    ],

    cyber: [
        ["Networking", "Network", "🌐"],
        ["Linux", "Operating System", "🐧"],
        ["Cybersecurity", "Security", "🔐"],
        ["Ethical Hacking", "Security", "🛡️"],
        ["Web Security", "Security", "🔒"],
        ["Security Monitoring", "Security", "📡"]
    ],

    cloud: [
        ["Linux", "System", "🐧"],
        ["AWS", "Cloud", "☁️"],
        ["Docker", "DevOps", "🐳"],
        ["CI/CD", "DevOps", "⚙️"],
        ["Networking", "Network", "🌐"],
        ["Cloud Security", "Security", "🔐"]
    ],

    uiux: [
        ["Figma", "Design", "🎨"],
        ["UI Design", "Design", "🖌️"],
        ["UX Research", "UX", "🔎"],
        ["Prototyping", "Design", "📱"],
        ["Design Systems", "UI/UX", "🧩"],
        ["Usability Testing", "UX", "🧪"]
    ],

    business: [
        ["Business Analytics", "Analytics", "📊"],
        ["Excel", "Business", "📗"],
        ["SQL", "Database", "🗄️"],
        ["Power BI", "Visualization", "📈"],
        ["Business Intelligence", "Analytics", "💼"],
        ["Data Visualization", "Analytics", "📊"]
    ],

    marketing: [
        ["Digital Marketing", "Marketing", "📱"],
        ["SEO", "Marketing", "🔎"],
        ["Content Strategy", "Marketing", "✍️"],
        ["Social Media Marketing", "Marketing", "📣"],
        ["Google Analytics", "Analytics", "📊"],
        ["Brand Strategy", "Marketing", "🏷️"]
    ],

    product: [
        ["Product Management", "Management", "🚀"],
        ["User Research", "Product", "🔎"],
        ["Product Strategy", "Management", "🧭"],
        ["Agile & Scrum", "Management", "🔄"],
        ["Wireframing", "Design", "🖼️"],
        ["Data Analysis", "Analytics", "📊"]
    ],

    finance: [
        ["Financial Analysis", "Finance", "💰"],
        ["Excel", "Business", "📗"],
        ["Financial Modeling", "Finance", "📈"],
        ["Business Analytics", "Analytics", "📊"],
        ["SQL", "Database", "🗄️"],
        ["Data Visualization", "Analytics", "📊"]
    ]

};



/* =========================================================
   COURSES
========================================================= */

const courses = [

    {
        title: "JavaScript Complete Course",
        skill: "JavaScript",
        level: "Beginner to Advanced",
        platform: "Udemy",
        rating: "4.7",
        icon: "🟨",
        categories: ["frontend", "fullstack"],
        url: "https://www.udemy.com/topic/javascript/"
    },

    {
        title: "React - The Complete Guide",
        skill: "React.js",
        level: "Beginner to Advanced",
        platform: "Udemy",
        rating: "4.6",
        icon: "⚛️",
        categories: ["frontend", "fullstack"],
        url: "https://www.udemy.com/topic/react/"
    },

    {
        title: "Node.js - The Complete Guide",
        skill: "Node.js",
        level: "Beginner to Advanced",
        platform: "Udemy",
        rating: "4.5",
        icon: "🟢",
        categories: ["backend", "fullstack"],
        url: "https://www.udemy.com/topic/nodejs/"
    },

    {
        title: "MongoDB for Beginners",
        skill: "MongoDB",
        level: "Beginner",
        platform: "MongoDB",
        rating: "4.7",
        icon: "🍃",
        categories: ["backend", "fullstack"],
        url: "https://learn.mongodb.com/"
    },

    {
        title: "SQL for Data Analysis",
        skill: "SQL",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.6",
        icon: "🗄️",
        categories: ["data", "business", "finance"],
        url: "https://www.coursera.org/courses?query=sql"
    },

    {
        title: "Python for Everybody",
        skill: "Python",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.8",
        icon: "🐍",
        categories: ["data", "ai"],
        url: "https://www.coursera.org/specializations/python"
    },

    {
        title: "Machine Learning Fundamentals",
        skill: "Machine Learning",
        level: "Intermediate",
        platform: "Coursera",
        rating: "4.7",
        icon: "🤖",
        categories: ["ai"],
        url: "https://www.coursera.org/courses?query=machine%20learning"
    },

    {
        title: "Cybersecurity Fundamentals",
        skill: "Cybersecurity",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.6",
        icon: "🔐",
        categories: ["cyber"],
        url: "https://www.coursera.org/courses?query=cybersecurity"
    },

    {
        title: "AWS Cloud Fundamentals",
        skill: "AWS",
        level: "Beginner",
        platform: "AWS",
        rating: "4.6",
        icon: "☁️",
        categories: ["cloud"],
        url: "https://aws.amazon.com/training/"
    },

    {
        title: "Business Analytics",
        skill: "Business Analytics",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.7",
        icon: "📊",
        categories: ["business", "data"],
        url: "https://www.coursera.org/courses?query=business%20analytics"
    },

    {
        title: "Digital Marketing Fundamentals",
        skill: "Digital Marketing",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.6",
        icon: "📱",
        categories: ["marketing"],
        url: "https://www.coursera.org/courses?query=digital%20marketing"
    },

    {
        title: "Product Management Fundamentals",
        skill: "Product Management",
        level: "Beginner",
        platform: "Coursera",
        rating: "4.7",
        icon: "🚀",
        categories: ["product"],
        url: "https://www.coursera.org/courses?query=product%20management"
    },

    {
        title: "Financial Analysis",
        skill: "Financial Analysis",
        level: "Intermediate",
        platform: "Coursera",
        rating: "4.6",
        icon: "💰",
        categories: ["finance"],
        url: "https://www.coursera.org/courses?query=financial%20analysis"
    },

    {
        title: "Excel Skills for Business",
        skill: "Excel",
        level: "Beginner to Advanced",
        platform: "Coursera",
        rating: "4.8",
        icon: "📗",
        categories: ["business", "data", "finance"],
        url: "https://www.coursera.org/specializations/excel"
    }

];



/* =========================================================
   LEARNING PATH
========================================================= */

const learningPaths = {

    frontend: [
        "Learn JavaScript",
        "Learn React.js",
        "Build Projects",
        "Apply for Jobs"
    ],

    backend: [
        "Learn Node.js",
        "Learn Databases",
        "Build REST APIs",
        "Build Backend Projects"
    ],

    fullstack: [
        "Learn React.js",
        "Build Frontend",
        "Learn Node.js",
        "Build Full Stack Project"
    ],

    data: [
        "Learn Excel / SQL",
        "Learn Python",
        "Learn Power BI",
        "Build Data Projects"
    ],

    ai: [
        "Learn Python",
        "Learn ML Basics",
        "Learn Generative AI",
        "Build AI Projects"
    ],

    cyber: [
        "Learn Networking",
        "Learn Linux",
        "Learn Security",
        "Practice Security Labs"
    ],

    cloud: [
        "Learn Linux",
        "Learn AWS",
        "Learn Docker",
        "Deploy Applications"
    ],

    uiux: [
        "Learn UI Basics",
        "Learn Figma",
        "Create Prototypes",
        "Build Design Portfolio"
    ],

    business: [
        "Learn Excel",
        "Learn SQL",
        "Learn Business Analytics",
        "Build Analytics Projects"
    ],

    marketing: [
        "Learn Digital Marketing",
        "Learn SEO",
        "Study Analytics",
        "Build Marketing Portfolio"
    ],

    product: [
        "Learn Product Basics",
        "Learn User Research",
        "Learn Agile",
        "Build Case Studies"
    ],

    finance: [
        "Learn Excel",
        "Learn Financial Analysis",
        "Learn Financial Modeling",
        "Build Finance Projects"
    ]

};



/* =========================================================
   NAME HELPERS
========================================================= */

const careerNames = {

    frontend: "Frontend Developer",
    backend: "Backend Developer",
    fullstack: "Full Stack Developer",
    data: "Data Analyst",
    ai: "AI / ML Engineer",
    cyber: "Cybersecurity",
    cloud: "Cloud Engineer",
    uiux: "UI/UX Designer",
    business: "Business Analytics",
    marketing: "Digital Marketing",
    product: "Product Management",
    finance: "Financial Analysis"

};



/* =========================================================
   DOM ELEMENTS
========================================================= */

let studentForm;
let studentName;
let education;
let careerGoal;
let interestBox;
let skillBox;
let experience;

let skillsContainer;
let coursesContainer;

let chatBox;
let chatInput;
let chatStatus;
let sendButton;

let formStatus;



/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        studentForm =
            document.getElementById(
                "studentForm"
            );

        studentName =
            document.getElementById(
                "studentName"
            );

        education =
            document.getElementById(
                "education"
            );

        careerGoal =
            document.getElementById(
                "careerGoal"
            );

        interestBox =
            document.getElementById(
                "interestBox"
            );

        skillBox =
            document.getElementById(
                "skillBox"
            );

        experience =
            document.getElementById(
                "experience"
            );

        skillsContainer =
            document.getElementById(
                "skillsContainer"
            );

        coursesContainer =
            document.getElementById(
                "coursesContainer"
            );

        chatBox =
            document.getElementById(
                "chatBox"
            );

        chatInput =
            document.getElementById(
                "chatInput"
            );

        chatStatus =
            document.getElementById(
                "chatStatus"
            );

        sendButton =
            document.getElementById(
                "sendButton"
            );

        formStatus =
            document.getElementById(
                "formStatus"
            );


        /*
           Education controls all the
           dependent choices.
        */

        education.addEventListener(
            "change",
            updateEducationOptions
        );


        /*
           Form.
        */

        studentForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                generateRecommendations();

            }
        );


        /*
           AI button.
        */

        sendButton.addEventListener(
            "click",
            sendMessage
        );


        /*
           Press Enter in chat.
        */

        chatInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );


        /*
           View all courses.
        */

        document
            .getElementById(
                "viewCoursesBtn"
            )
            .addEventListener(
                "click",
                showAllCourses
            );


        /*
           Initial clean state.
        */

        clearRecommendations();

    }
);



/* =========================================================
   EDUCATION CHANGE
========================================================= */

function updateEducationOptions() {

    const selectedEducation =
        education.value;


    careerGoal.innerHTML = `
        <option value="">
            Select career goal
        </option>
    `;


    interestBox.innerHTML = "";

    skillBox.innerHTML = "";


    clearRecommendations();


    if (!selectedEducation) {

        interestBox.innerHTML = `
            <span class="placeholder-text">
                Select education first
            </span>
        `;

        skillBox.innerHTML = `
            <span class="placeholder-text">
                Select education first
            </span>
        `;

        return;
    }


    const profile =
        educationProfiles[
            selectedEducation
        ];


    if (!profile) return;


    /*
       Career goals.
    */

    profile.careers.forEach(
        function (career) {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                career[0];

            option.textContent =
                career[1];

            careerGoal.appendChild(
                option
            );

        }
    );


    /*
       Interests.
    */

    createCheckboxes(
        interestBox,
        profile.interests,
        "interest"
    );


    /*
       Current skills.
    */

    createCheckboxes(
        skillBox,
        profile.skills,
        "skill"
    );

}



/* =========================================================
   CREATE CHECKBOXES
========================================================= */

function createCheckboxes(
    container,
    values,
    name
) {

    container.innerHTML = "";


    values.forEach(
        function (value, index) {

            const wrapper =
                document.createElement(
                    "div"
                );

            wrapper.className =
                "tag-option";


            const input =
                document.createElement(
                    "input"
                );

            input.type =
                "checkbox";

            input.id =
                `${name}-${index}`;

            input.name =
                name;

            input.value =
                value;


            const label =
                document.createElement(
                    "label"
                );

            label.htmlFor =
                input.id;

            label.textContent =
                value;


            wrapper.appendChild(
                input
            );

            wrapper.appendChild(
                label
            );


            container.appendChild(
                wrapper
            );

        }
    );

}



/* =========================================================
   GET CHECKBOX VALUES
========================================================= */

function getSelectedValues(
    name
) {

    return Array.from(
        document.querySelectorAll(
            `input[name="${name}"]:checked`
        )
    ).map(
        function (input) {

            return input.value;

        }
    );

}



/* =========================================================
   GET PROFILE
========================================================= */

function getStudentProfile() {

    return {

        name:
            studentName.value.trim(),

        education:
            education.value,

        career:
            careerGoal.value,

        interests:
            getSelectedValues(
                "interest"
            ),

        skills:
            getSelectedValues(
                "skill"
            ),

        experience:
            experience.value

    };

}



/* =========================================================
   GENERATE RECOMMENDATIONS
========================================================= */

function generateRecommendations() {

    const profile =
        getStudentProfile();


    if (!profile.name) {

        showFormStatus(
            "Please enter your name."
        );

        studentName.focus();

        return;
    }


    if (!profile.education) {

        showFormStatus(
            "Please select your education."
        );

        education.focus();

        return;
    }


    if (!profile.career) {

        showFormStatus(
            "Please select your career goal."
        );

        careerGoal.focus();

        return;
    }


    if (!profile.experience) {

        showFormStatus(
            "Please select your experience level."
        );

        experience.focus();

        return;
    }


    /*
       Get career skills.
    */

    let recommendedSkills = [
        ...(skillCatalog[
            profile.career
        ] || [])
    ];


    /*
       Remove skills the student already has.
    */

    const existingSkills =
        profile.skills.map(
            function (skill) {

                return skill
                    .toLowerCase();

            }
        );


    const seen =
        new Set();


    recommendedSkills =
        recommendedSkills.filter(
            function (skill) {

                const name =
                    skill[0].toLowerCase();


                if (
                    existingSkills.includes(
                        name
                    )
                ) {

                    return false;

                }


                if (
                    seen.has(name)
                ) {

                    return false;

                }


                seen.add(name);

                return true;

            }
        );


    recommendedSkills =
        recommendedSkills.slice(
            0,
            6
        );


    displaySkills(
        recommendedSkills
    );


    /*
       Courses.
    */

    let recommendedCourses =
        courses.filter(
            function (course) {

                return course.categories
                    .includes(
                        profile.career
                    );

            }
        );


    /*
       For MBA, include courses
       connected with interests.
    */

    if (
        profile.education === "mba"
    ) {

        const interestText =
            profile.interests
                .join(" ")
                .toLowerCase();


        const mbaCourses =
            courses.filter(
                function (course) {

                    return (
                        course.categories
                            .includes(
                                "business"
                            ) ||

                        course.categories
                            .includes(
                                "marketing"
                            ) ||

                        course.categories
                            .includes(
                                "product"
                            ) ||

                        course.categories
                            .includes(
                                "finance"
                            )
                    );

                }
            );


        recommendedCourses = [
            ...recommendedCourses,
            ...mbaCourses
        ];

    }


    /*
       Remove duplicate courses.
    */

    const uniqueCourses =
        [];

    const courseSeen =
        new Set();


    recommendedCourses.forEach(
        function (course) {

            if (
                !courseSeen.has(
                    course.title
                )
            ) {

                courseSeen.add(
                    course.title
                );

                uniqueCourses.push(
                    course
                );

            }

        }
    );


    displayCourses(
        uniqueCourses.slice(
            0,
            4
        )
    );


    /*
       Learning path.
    */

    updateLearningPath(
        learningPaths[
            profile.career
        ] || [
            "Choose a career",
            "Learn skills",
            "Build projects",
            "Prepare for jobs"
        ]
    );


    showFormStatus(
        "✓ Your recommendations are ready."
    );

}



/* =========================================================
   DISPLAY SKILLS
========================================================= */

function displaySkills(
    skills
) {

    if (!skills.length) {

        skillsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    ✓
                </div>

                <p>
                    You already selected the main
                    skills for this career.
                </p>
            </div>
        `;

        return;
    }


    skillsContainer.innerHTML = "";


    skills.forEach(
        function (skill) {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "skill-card";


            card.innerHTML = `

                <div class="skill-icon">
                    ${skill[2]}
                </div>

                <h4>
                    ${escapeHTML(
                        skill[0]
                    )}
                </h4>

                <p>
                    ${escapeHTML(
                        skill[1]
                    )}
                </p>

            `;


            skillsContainer.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   DISPLAY COURSES
========================================================= */

function displayCourses(
    courseList
) {

    if (!courseList.length) {

        coursesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    📚
                </div>

                <p>
                    No courses found for this
                    career path yet.
                </p>
            </div>
        `;

        return;
    }


    coursesContainer.innerHTML = "";


    courseList.forEach(
        function (course) {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "course-card";


            card.innerHTML = `

                <div class="course-icon">
                    ${course.icon}
                </div>

                <div class="course-info">

                    <h4>
                        ${escapeHTML(
                            course.title
                        )}
                    </h4>

                    <p>
                        ${escapeHTML(
                            course.skill
                        )}
                        ·
                        ${escapeHTML(
                            course.level
                        )}
                    </p>

                    <div class="course-meta">

                        <span class="platform">
                            ${escapeHTML(
                                course.platform
                            )}
                        </span>

                        <span class="rating">
                            ⭐ ${escapeHTML(
                                course.rating
                            )}
                        </span>

                    </div>

                </div>

                <button
                    class="course-button"
                    type="button"
                    onclick="openCourse('${course.url}')"
                >
                    View ↗
                </button>

            `;


            coursesContainer.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   VIEW ALL COURSES
========================================================= */

function showAllCourses() {

    const profile =
        getStudentProfile();


    if (
        !profile.education ||
        !profile.career
    ) {

        showFormStatus(
            "Select education and career first."
        );

        return;
    }


    const allCourses =
        courses.filter(
            function (course) {

                return course.categories
                    .includes(
                        profile.career
                    );

            }
        );


    displayCourses(
        allCourses
    );

}



/* =========================================================
   LEARNING PATH
========================================================= */

function updateLearningPath(
    path
) {

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const element =
            document.getElementById(
                `path${i + 1}`
            );


        if (element) {

            element.textContent =
                path[i] || "";

        }

    }

}



/* =========================================================
   CLEAR RECOMMENDATIONS
========================================================= */

function clearRecommendations() {

    if (
        !skillsContainer ||
        !coursesContainer
    ) {
        return;
    }


    skillsContainer.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                ✦
            </div>

            <p>
                Complete your profile and click
                <strong>
                    Get My Recommendations
                </strong>.
            </p>

        </div>

    `;


    coursesContainer.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                📚
            </div>

            <p>
                Your recommended courses
                will appear here.
            </p>

        </div>

    `;


    updateLearningPath([
        "Complete Profile",
        "Choose Goal",
        "Learn Skills",
        "Build Projects"
    ]);

}



/* =========================================================
   FORM STATUS
========================================================= */

function showFormStatus(
    message
) {

    formStatus.textContent =
        message;

}



/* =========================================================
   COURSE LINK
========================================================= */

function openCourse(
    url
) {

    window.open(
        url,
        "_blank"
    );

}



/* =========================================================
   GEMINI AI
========================================================= */

async function sendMessage() {

    const message =
        chatInput.value.trim();


    if (!message) {

        return;

    }


    /*
       Check API key.
    */

    if (
        !GEMINI_API_KEY ||
        GEMINI_API_KEY ===
        "PASTE_YOUR_NEW_GEMINI_API_KEY_HERE"
    ) {

        addAIMessage(
            "Please add your NEW Gemini API key inside script.js first."
        );

        return;

    }


    /*
       Add user message.
    */

    addUserMessage(
        message
    );


    chatInput.value = "";


    chatStatus.textContent =
        "Gemini is thinking...";


    addLoading();


    try {

        const answer =
            await askGemini(
                message
            );


        removeLoading();


        addAIMessage(
            answer
        );


        chatStatus.textContent =
            "Gemini response received.";

    }

    catch (error) {

        removeLoading();


        console.error(
            "Gemini Error:",
            error
        );


        addAIMessage(
            "Gemini error: " +
            error.message
        );


        chatStatus.textContent =
            "Gemini request failed.";

    }

}



/* =========================================================
   ASK GEMINI
========================================================= */
async function askGemini(userMessage) {
    const models = [
   
    "gemini-3.6-flash",
];

    const profile = getStudentProfile();

    const prompt = `
You are SkillPath AI, a friendly career guidance assistant for students.

Student Profile:
Name: ${profile.name}
Education: ${profile.education}
Career Goal: ${profile.careerGoal}
Interests: ${profile.interests.join(", ")}
Current Skills: ${profile.skills.join(", ")}
Experience: ${profile.experience}

Student Question:
${userMessage}

Give a simple, practical answer.
Consider the student's education, career goal, interests and current skills.
If recommending technologies or skills, explain briefly why they are useful.
Do not make the answer unnecessarily long.
`;

    let lastError = "";

    for (const model of models) {

        const url =
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

        try {

            const response = await fetch(url, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": GEMINI_API_KEY
                },

                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ],

                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 800
                    }
                })
            });

            const data = await response.json();

            if (response.ok) {

                const answer =
                    data?.candidates?.[0]?.content?.parts
                        ?.map(part => part.text || "")
                        .join("")
                        .trim();

                if (answer) {
                    return answer;
                }
            }

            lastError =
                data?.error?.message ||
                `Gemini request failed with status ${response.status}`;

            console.warn(`${model} failed:`, lastError);

            // If model is temporarily busy, try the next model
            if (response.status === 503) {
                continue;
            }

            // For other errors, stop immediately
            throw new Error(lastError);

        } catch (error) {

            lastError = error.message;

            console.warn(`${model} error:`, error);

            if (model === models[models.length - 1]) {
                throw error;
            }
        }
    }

    throw new Error(
        lastError ||
        "Gemini is temporarily unavailable. Please try again."
    );
}
/* =========================================================
   CHAT UI
========================================================= */

function addUserMessage(
    message
) {

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "user-message";


    wrapper.innerHTML = `

        <div class="message-content">
            ${escapeHTML(message)}
        </div>

    `;


    chatBox.appendChild(
        wrapper
    );


    scrollChat();

}



function addAIMessage(
    message
) {

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "ai-message";


    wrapper.innerHTML = `

        <div class="ai-avatar">
            ✦
        </div>

        <div class="message-content">
            ${formatAIText(message)}
        </div>

    `;


    chatBox.appendChild(
        wrapper
    );


    scrollChat();

}



function addLoading() {

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.id =
        "ai-loading";

    wrapper.className =
        "ai-message";


    wrapper.innerHTML = `

        <div class="ai-avatar">
            ✦
        </div>

        <div class="message-content">
            Thinking...
        </div>

    `;


    chatBox.appendChild(
        wrapper
    );


    scrollChat();

}



function removeLoading() {

    const loading =
        document.getElementById(
            "ai-loading"
        );


    if (loading) {

        loading.remove();

    }

}



function scrollChat() {

    chatBox.scrollTop =
        chatBox.scrollHeight;

}



/* =========================================================
   TEXT HELPERS
========================================================= */

function escapeHTML(
    text
) {

    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}



function formatAIText(
    text
) {

    return escapeHTML(
        text
    )

        .replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        )

        .replace(
            /\n/g,
            "<br>"
        );

}