import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/axon.png',
    title: 'Senior Information Developer',
    description: 'Created mirecosites and documentations from scratch for Developers',
    codeLink: '',
    liveLink: 'https://toolkit.axon.zetapay.tech/',
    techstack: ['API docs', 'Markdown', 'CI/CD', 'Kubernetes', 'Docker','Containers'],
  },
  {
    img: 'img/teams.png',
    title: 'Developer Document Specialist',
    description: 'Tested and documented Teams bots and servicers for Developers.',
    codeLink: 'https://github.com/MicrosoftDocs/msteams-docs/commits?author=v-tanmayirs',
    liveLink: 'https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/tool-sdk-overview',
    techstack: ['Toolkit', 'SDK docs'],
  },
  {
    img: 'img/simulator.png',
    title: 'Engineer I',
    description:'Documented API documentation, user guides, installation guides, admin guides for simulators.',
    codeLink: '',
    liveLink: 'https://success.myshn.net/Skyhigh_Cloud_Infrastructure_(CNAPP)/CSPM/CSPM_DLP_On-Demand_Scans/Create_a_DLP_On-Demand_Scan_for_GCP',
    techstack: ['API docs', 'Simulator'],
  },
  {
    img: 'img/tanmayi.png',
    title: 'Portfolio',
    description: 'Personal portfolio',
    codeLink: 'https://github.com/tanmayi1996',
    liveLink: 'https://tanmayi1996.github.io/portfolio-tanmayi/',
    techstack: ['ReactJS', 'TypeScript'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/zeta.png',
    jobTitle: 'Senior Information Developer',
    company: 'Zeta',
    date: 'July 2022 - Present',
    workLength: `${caculateWorkLength(new Date(2022, 1, 3), new Date())} mos`,
    location: 'Bengaluru On-site',
    tasks: ['Created mirecosites and documentations from scratch for Developers'],
    techstack: ['API docs', 'Markdown', 'CI/CD', 'Kubernetes', 'Docker','Containers'],
  },
  {
    img: 'img/microsoft.png',
    jobTitle: 'Developer Documention Specialist',
    company: 'Microsoft',
    date: 'March 2022 - July 2022',
    workLength: `5 mos`,
    location: 'Bengaluru Remote',
    tasks: ['Tested and documented Teams bots and servicers for Developers'
    ],
    techstack: ['Toolkit', 'SDK docs'],
  },
  {
    img: 'img/safran.png',
    jobTitle: 'Engineer I',
    company: 'Safran',
    date: 'Dec 2018 - March 2022',
    workLength: '3 years 4 mos',
    location: 'Bengaluru On-site',
    tasks: ['Documented API documentation, user guides, installation guides, admin guides for simulators.'],
    techstack: ['API docs', 'Simulator'],
  },
  
];

const education: Array<EducationType> = [
  {
    img: 'img/vtu.png',
    school: 'VTU',
    study: 'Bachelors of Engineering',
    date: '2014 - 2018',
  },
  {
    img: 'img/ais.png',
    school: 'Ananth Residentioal PU College',
    study: '11th + 12th',
    date: '2012 - 2014',
  },
  {
    img: 'img/st.png',
    school: 'St. Marys High School',
    study: '10th',
    date: '2012',
  },
];

export { experience, projects, education };
