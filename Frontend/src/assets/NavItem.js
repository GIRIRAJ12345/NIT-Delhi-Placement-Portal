export const navbarItems=[
    {
        id:1,
        title:"Home",
        path:"/",
        submenu:false,
        sublink:[]
    },
    {
        id:2,
        title:"NIT DELHI",
        path:"/",
        submenu:true,
        sublink:[
        {
            id:1,
            title:"Academics",
            path:"/academics"
        },
        {
            id:2,
            title:"Students Achievements",
            path:"/achievements"
        },
        {
            id:3,
            title:"Research",
            path:"https://nitdelhi.irins.org/"
        },
        {
            id:4,
            title:"Department",
            path:"/department"
        },]
    },
    {
        id:3,
        title:"For Students",
        path:"/",
        submenu:true,
        sublink:[
            {
                id:1,
                title:"Student Login",
                path:"/studentlogin"
            },
            {
                id:2,
                title:"FAQ",
                path:"/faq"
            },
        ]
    },
    {
        id:4,
        title:"For Recruiters",
        path:"/",
        submenu:true,
        sublink:[{
            id:1,
            title:"Past Recruiters",
            path:"/recruiters"
        },
        {
            id:2,
            title:"Placement Statistics",
            path:"/statistics"
        },
        {
            id:3,
            title:"Recruitment Procedure",
            path:"/process"
        },
        {
            id:4,
            title:"Placement Brochure",
            path:"/brochure"
        }]
    },
    {
        id:5,
        title:"Alumni",
        path:"https://nitdelhi.ac.in/alumniportal/",
        submenu:false,
        sublink:[]
    },
    {
        id:6,
        title:"Team",
        path:"/",
        submenu:true,
        sublink:[
            {
                id:1,
                title:"Admin Login",
                path:"/adminlogin"
            },
            {
                id:2,
                title:"Administration",
                path:"/administration"
            },
            {
                id:3,
                title:"Student Team",
                path:"/acheivements"
            }
        ]
    },
]
