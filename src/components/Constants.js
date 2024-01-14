import LogoJavascript from '../assets/Logos/icon-javascript.svg';
import LogoReact from '../assets/Logos/icon-react.svg';
import LogoTailwindcss from '../assets/Logos/icon-tailwindcss.svg'
import LogoGit from '../assets/Logos/icon-git.svg'
import LogoRedux from '../assets/Logos/icon-redux.svg'
import LogoHTML from '../assets/Logos/icon-html5.svg'
import LogoCSS from '../assets/Logos/icon-css3.svg'
import LogoFirebase from '../assets/Logos/icon-firebase.svg'
import LogoGitHub from '../assets/Logos/icon-github.svg'


import BlogZone from '../assets/Projects_img/project-blogzone.png'
import NetflixClone from '../assets/Projects_img/project-netflixclone.png'
import PortfolioImg from '../assets/Projects_img/project-portfolio.png'



export const TECHNOLOGIES = [
    {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },

    {
        label: 'React',
        logo: LogoReact,
        url: 'https://react.dev/',
    }, {
        label: 'Redux',
        logo: LogoRedux,
        url: 'https://redux.js.org/',
    },
    {
        label: 'Tailwindcss',
        logo: LogoTailwindcss,
        url: 'https://tailwindcss.com/',
    },
    {
        label: 'HTML',
        logo: LogoHTML,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        label: 'CSS',
        logo: LogoCSS,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        label: 'Firebase',
        logo: LogoFirebase,
        url: 'https://firebase.com/',
    },
    {
        label: 'Git',
        logo: LogoGit,
        url: 'https://git-scm.com/',
    },
    {
        label: 'GitHub',
        logo: LogoGitHub,
        url: 'https://github.com/Yogeshp21',
    },
];


export const PROJECTS = [
    {
        name: 'Blog Zone',
        description:
            'A platform for creating and reading blogs as well as auther can update and delete blogs.',
        url: 'https://blog-zones.netlify.app/',
        previewImage: BlogZone,
        technologies: [
            'React',
            'Tilwind CSS',
            'Redux Toolkit',
            'Appwrite',
            'Email JS',
            'Responsive UI',
        ],
    },
    {
        name: 'Netflix Clone',
        description:
            'Created an immersive Netflix Clone project using react. The real time information of movies is dynamically fetched using The Movies Data Base (TMDB) API.',
        url: 'https://netflix-clone-2100.netlify.app/',
        previewImage: NetflixClone,
        technologies: [
            'React',
            'CSS',
            'API Integration (TMDB)',
            'Redux Toolkit',
            'Responsive UI',
            'Firebase',
        ],
    },
    {
        name: 'Portfolio',
        description:
            'Personal portfolio website with responsive user interface and animation.',
        url: 'https://portfolio-yogeshp.netlify.app/',
        previewImage: PortfolioImg,
        technologies: [
            'React',
            'Tailwindcss',
            'Responsive UI',
            'Dark Theme'
        ],
    },
];
