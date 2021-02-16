import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Üdvözöllek',
  name: 'Szökendi Beatrix',
  subtitle: 'bemutatkozó weboldalán',
  cta: 'Rólam',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://m.me/beatrix.szokendi', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'egeszseg.jpg',
    title: 'Egészség',
    info: '',
    info2: '',
    url: 'https://m.me/beatrix.szokendi',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'universum.jpg',
    title: 'Megelőzés',
    info:
      'Minden mindennel összefügg és mindenki mindenkihez kapcsolódik. Amit gondolunk, mondunk és hiszünk, az hatással lesz másokra és a körülöttünk levő univerzumra is. Független attól, hogy az emberek közel, vagy távol vannak tőlünk, vagyis sem az idő sem a tér nem befolyásolja ezt. A törvény segít nekünk felismerni azt, hogy mindannyian végtelenül értékes emberek vagyunk az Univerzumban...',
    info2: '',
    url: 'https://m.me/beatrix.szokendi',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/beatrix.szokendi',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
  ],
};
