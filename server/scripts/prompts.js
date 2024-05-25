export const SYSTEM_MESSAGE = `Please read through the resume carefully and extract all the relevant information needed to fill out the following JSON resume template, the "total_work_experience" should be counted based upon the experiences:

{
name: <Candidate name (string)>,
location: {
country: <ISO 3166-standard country code>,
state: <ISO 3166-stabdard>,
}
contact: {
phone: <Phone number (string)>
email: <Email ID (string)>
}
work_experience: [
{
company: <Company name (string)>,
location: <Location (string)>
job_title: <Title (string)>,
start_date: {
month: <Month (int)>,
year: <Year (int)>
},
end_date: {
month: <Month (int)>,
year: <Year (int)>
},
description: <Exact Description from resume (string)>
}
],
total_work_experience: <Years of experience (float)>,
education: {
degree: <Degree (string)>,
field: <Field (string)>,
institution: <Institution (string)>,
start_date: {
month: <Month (int)>,
year: <Year (int)>
},
end_date: {
month: <Month (int)>,
year: <Year (int)>
},
cgpa: {
score: <score (float)>,
scale: <Scale (float)>
}
},
skills: [(Array of strings)]
}`;

export const SAMPLE_SYSTEM_RESPONSE_TO_JSON_FORMAT =
  "Please provide the resume so I can read through it and extract the relevant information needed to fill out the JSON resume template.";

export const SAMPLE_USER_MESSAGE = `Skills Work History Lekhraj Saini Fullstack Engineer Jaipur, India 302012 8005563581 lekhrajsaini7000@gmail.com https://bold.pro/my/lekhraj- saini/702 Experienced Full-Stack Engineer with proven leadership skills and dedication. Known for building trust and delivering high-quality solutions through collaborative teamwork. Proficient in multiple programming languages and frameworks with expertise in frontend, backend, and database design. HTML, CSS/SASS/SCSS, Javascript, Bootstrap, MaterialUI Dev-Ops, SystemDesign React-Native, React.js, Reactstrap, Redux, Next.js C++, Dart , Flutter, Firebase MySQl, DynamoDB, NoSQL, MongoDB IONIC, AdobeXD, Figma Redux-Thunk, React Hooks Express.js, Node.js DSA, DAA Docker, AWS, GCP, CI/CD, Jenkins, es-lint NLP, RNN, CNN, AI, ML, MLops, Datascience Agile development methodologies, Continuous integration tools 2023-06 - Current Technical Lead Engineer Five Hotels And Resorts, Jaipur, India Led design of robust software architectures that facilitated seamless integration with existing systems, minimizing disruption during implementation. Improved cross-team collaboration by initiating regular knowledge-sharing sessions, fostering greater understanding of each team''s strengths and areas for improvement. Developed scalable and maintainable code using best practices in software engineering, contributing to more reliable product offering. Established strong relationships with external vendors, negotiating contracts that ensured cost-effective solutions were provided without compromising quality or functionality. Championed culture of continuous learning, fostering environment where team members felt encouraged to develop new skills and share knowledge with others. 2022-07 - 2024-03 Technical Consultant Apostrfy, Work From Home, Rajasthan Teamed up with project managers to best achievable but achievable coding goals for pre-release software project development. Agile methods and development best practices were taught to division to help them make better products. Created reusable, dependable code for usage in dispersed cloud settings. Technical and non-technical Architecture Project Management for Web and Mobile App Platforms Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements. Working on state of art tech -stack : Next.js, React.js, Nest.js, Node.js, Express, MongoDB, ReactNative, Mysql, Aws services, GCP, FCM ,Payment Gateway, OAuth 2.0, SSO etc. 2021-05 - 2023-06 Lead Full-stack Developer Uactiv technologies Pvt Limited , Jaipur, India Worked well independently and on team to solve problems. Served as friendly, hardworking, and punctual employee. Organized and prioritized work to complete assignments in timely, efficient manner. Worked on both front-end and back-end, as well as hosting of website and project's roll-out. Gained expertise in React-Native, React.js, Redux, Next.js, Nodejs, mongoDB, graphql, Dev-Ops, SystemDesign, AWS: EC2, kinesis, SNS, lambda, ECS, GCP, CI/CD, Jenkins, es-lint, Docker, CSS/SASS/SCSS, Javascript, Bootstrap, MaterialUI. 2020-03 - 2021-07 Technical Consultant & Lead Full-stackdeveloper AIVARA LPP, Jaipur, IN Presented business leaders with ROI estimations to drive project planning. Analyzed client business processes to propose optimal software applications for unique requirements. Developed diagrams to describe and lay out logical operational steps. AI for water quality system 2019-05 - 2021-05 Senior Tech Lead RedPositive service OPC Pvt Ltd, Jaipur, India Lead and conducted in-depth analysis of business performance versus business goals. Research Education Handled much of communication between clients and lead Graphic Designer. Gained expertise in React-Native, React.js, flutter, Next.js, Nodejs, mongoDB, graphql, Dev-Ops, SystemDesign, AWS: EC2, kinesis, SNS, lambda, ECS, GCP, CI/CD, Jenkins, es-lint, Docker, CSS/SASS/SCSS, Javascript, Bootstrap, MaterialUI. 2020-05 - 2020-12 CTO Foodifi Technologies, Jaipur, India Developed strong communication and organizational skills through working on group projects. Used strong analytical and problem-solving skills to develop effective solutions for challenging situations. Managed whole technical team and build MVP in Flutter with team Managed development cycle along with testing and roll out with regular update plans Excellent communication skills, both verbal and written Participated in team projects, demonstrating ability to work collaboratively and effectively 2018-02 - 2019-12 Technical Consulting Engineer Zimblyeat , Jaipur, India Managed engineering engagement risk by employing simulations and rapid prototyping to reduce initial outlay and prevent costly mistakes. Applied critical path method (CPM) to project planning, reducing dependencies and shortening overall completion timeframes. Implemented robust security measures, safeguarding sensitive data and preventing unauthorized access to client systems Streamlined project management processes for better workflow and increased productivity within team Designed and implemented custom software solutions tailored to meet specific client requirements IEEE Research Paper Nov 2022 : Language Identification System: Employing n-gram to improve accuracy and efficiency, DOI:10.1109/INCOFT55651.2022.10094547 IEEE Research Paper Jan 2023: Language Identification System: Employing ReLu for India's Regional Languages (ReLu), DOI:10.1109/ICONAT57137.2023.10080570 IEEE Research Paper Dec 2023: Bidirectional English-Marathi Translation using Pretrained Models: A Comparative Study of Different pre-trained Models, DOI: 10.1109/INCOFT60753.2023 Accomplishments Languages Additional Information 2021-05 - 2023-06 M.Tech.: Artificial Intelligence Defence Institute of Advance Technology - DU DRDO - Pune 2016-07 - 2020-12 B.tech: Computer Science And Engineering Govt. Engg. College - Ajmer 2019-05 - 2019-06 2021CCNA Training CCNA - Noida 2014-04 - 2015-05 12th: Science N.K. Public School - Jaipur, RJ 2012-04 - 2013-05 10th: Science N.K. Public School - Jaipur IIT Bombay Gate-2021 Qualify with a score of 468 IIT Delhi Gate-2020 Qualify with a score of 399 Letter of appreciation for Founding and running cybersecurity club in college. Hindi English Github one: https://github.com/lekhrajsaini01 Github two : https://github.com/lekhrajsaini0 Linkedin: https://www.linkedin.com/in/er-lekhraj-saini-28314a143/`;

export const SAMPLE_SYSTEM_RESPONSE = `{
    "name": "Lekhraj Saini",
    "location": {
      "country": "IN",
      "state": "RJ"
    },
    "contact": {
      "phone": "8005563581",
      "email": "lekhrajsaini7000@gmail.com"
    },
    "work_experience": [
      {
        "company": "Five Hotels And Resorts",
        "location": "Jaipur, India",
        "job_title": "Technical Lead Engineer",
        "start_date": {
          "month": 6,
          "year": 2023
        },
        "end_date": {
          "month": 1,
          "year": 2024
        },
        "description": "Led design of robust software architectures that facilitated seamless integration with existing systems, minimizing disruption during implementation. Improved cross-team collaboration by initiating regular knowledge-sharing sessions, fostering greater understanding of each team's strengths and areas for improvement. Developed scalable and maintainable code using best practices in software engineering, contributing to more reliable product offering. Established strong relationships with external vendors, negotiating contracts that ensured cost-effective solutions were provided without compromising quality or functionality. Championed culture of continuous learning, fostering environment where team members felt encouraged to develop new skills and share knowledge with others."
      },
      {
        "company": "Apostrfy",
        "location": "Work From Home, Rajasthan",
        "job_title": "Technical Consultant",
        "start_date": {
          "month": 7,
          "year": 2022
        },
        "end_date": {
          "month": 3,
          "year": 2024
        },
        "description": "Teamed up with project managers to best achievable but achievable coding goals for pre-release software project development. Agile methods and development best practices were taught to division to help them make better products. Created reusable, dependable code for usage in dispersed cloud settings. Technical and non-technical Architecture Project Management for Web and Mobile App Platforms. Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements. Working on state of art tech-stack: Next.js, React.js, Nest.js, Node.js, Express, MongoDB, ReactNative, Mysql, Aws services, GCP, FCM, Payment Gateway, OAuth 2.0, SSO etc."
      },
      {
        "company": "Uactiv technologies Pvt Limited",
        "location": "Jaipur, India",
        "job_title": "Lead Full-stack Developer",
        "start_date": {
          "month": 5,
          "year": 2021
        },
        "end_date": {
          "month": 6,
          "year": 2023
        },
        "description": "Worked well independently and on team to solve problems. Served as friendly, hardworking, and punctual employee. Organized and prioritized work to complete assignments in timely, efficient manner. Worked on both front-end and back-end, as well as hosting of website and project's roll-out. Gained expertise in React-Native, React.js, Redux, Next.js, Nodejs, mongoDB, graphql, Dev-Ops, SystemDesign, AWS: EC2, kinesis, SNS, lambda, ECS, GCP, CI/CD, Jenkins, es-lint, Docker, CSS/SASS/SCSS, Javascript, Bootstrap, MaterialUI."
      },
      {
        "company": "AIVARA LPP",
        "location": "Jaipur, IN",
        "job_title": "Technical Consultant & Lead Full-stackdeveloper",
        "start_date": {
          "month": 3,
          "year": 2020
        },
        "end_date": {
          "month": 7,
          "year": 2021
        },
        "description": "Presented business leaders with ROI estimations to drive project planning. Analyzed client business processes to propose optimal software applications for unique requirements. Developed diagrams to describe and lay out logical operational steps. AI for water quality system."
      },
      {
        "company": "RedPositive service OPC Pvt Ltd",
        "location": "Jaipur, India",
        "job_title": "Senior Tech Lead",
        "start_date": {
          "month": 5,
          "year": 2019
        },
        "end_date": {
          "month": 5,
          "year": 2021
        },
        "description": "Lead and conducted in-depth analysis of business performance versus business goals. Research Education Handled much of communication between clients and lead Graphic Designer. Gained expertise in React-Native, React.js, flutter, Next.js, Nodejs, mongoDB, graphql, Dev-Ops, SystemDesign, AWS: EC2, kinesis, SNS, lambda, ECS, GCP, CI/CD, Jenkins, es-lint, Docker, CSS/SASS/SCSS, Javascript, Bootstrap, MaterialUI."
      },
      {
        "company": "Foodifi Technologies",
        "location": "Jaipur, India",
        "job_title": "CTO",
        "start_date": {
          "month": 5,
          "year": 2020
        },
        "end_date": {
          "month": 12,
          "year": 2020
        },
        "description": "Developed strong communication and organizational skills through working on group projects. Used strong analytical and problem-solving skills to develop effective solutions for challenging situations. Managed whole technical team and build MVP in Flutter with team. Managed development cycle along with testing and roll out with regular update plans. Excellent communication skills, both verbal and written. Participated in team projects, demonstrating ability to work collaboratively and effectively."
      },
      {
        "company": "Zimblyeat",
        "location": "Jaipur, India",
        "job_title": "Technical Consulting Engineer",
        "start_date": {
          "month": 2,
          "year": 2018
        },
        "end_date": {
          "month": 12,
          "year": 2019
        },
        "description": "Managed engineering engagement risk by employing simulations and rapid prototyping to reduce initial outlay and prevent costly mistakes. Applied critical path method (CPM) to project planning, reducing dependencies and shortening overall completion timeframes. Implemented robust security measures, safeguarding sensitive data and preventing unauthorized access to client systems. Streamlined project management processes for better workflow and increased productivity within team. Designed and implemented custom software solutions tailored to meet specific client requirements."
      }
    ],
    "total_work_experience": 6.5,
    "education": {
      "degree": "M.Tech.",
      "field": "Artificial Intelligence",
      "institution": "Defence Institute of Advance Technology - DU DRDO",
      "start_date": {
        "month": 5,
        "year": 2021
      },
      "end_date": {
        "month": 6,
        "year": 2023
      },
      "cgpa": {
        "score": null,
        "scale": null
      }
    },
    "skills": [
      "HTML",
      "CSS/SASS/SCSS",
      "Javascript",
      "Bootstrap",
      "MaterialUI",
      "Dev-Ops",
      "SystemDesign",
      "React-Native",
      "React.js",
      "Reactstrap",
      "Redux",
      "Next.js",
      "C++",
      "Dart",
      "Flutter",
      "Firebase",
      "MySQL",
      "DynamoDB",
      "NoSQL",
      "MongoDB",
      "IONIC",
      "AdobeXD",
      "Figma",
      "Redux-Thunk",
      "React Hooks",
      "Express.js",
      "Node.js",
      "DSA",
      "DAA",
      "Docker",
      "AWS",
      "GCP",
      "CI/CD",
      "Jenkins",
      "es-lint",
      "NLP",
      "RNN",
      "CNN",
      "AI",
      "ML",
      "MLops",
      "Datascience",
      "Agile development methodologies",
      "Continuous integration tools"
    ]
}      
`;
