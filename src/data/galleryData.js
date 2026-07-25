import demodayImg from '../assets/demoday.png';
import panelImg from '../assets/panel.png';
import bootcampImg from '../assets/bootcamp.jpg';
import hackathonImg from '../assets/hackathon.jpg';
import competitionImg from '../assets/competition.png';

export const galleryCategories = ['All', 'Hackathons', 'Workshops', 'Events', 'Startup Expo', 'Bootcamp', 'Competitions'];

export const galleryData = [
  { 
    id: 1, 
    category: 'Events', 
    title: 'Panel Discussion at INCUB8', 
    src: panelImg, 
    height: 'tall' 
  },
  { 
    id: 2, 
    category: 'Workshops', 
    title: 'AI/ML Bootcamp', 
    src: bootcampImg, 
    height: 'medium' 
  },
  { 
    id: 3, 
    category: 'Hackathons', 
    title: 'Code Rush 2024', 
    src: hackathonImg, 
    height: 'short' 
  },
  { 
    id: 4, 
    category: 'Startup Expo', 
    title: 'Demo Day', 
    src: demodayImg, 
    height: 'tall' 
  },
  { 
    id: 5, 
    category: 'Competitions', 
    title: 'IdeaX Challenge', 
    src: competitionImg, 
    height: 'medium' 
  },
];

export const galleryGradients = [
  'from-blue-900 to-indigo-900',
  'from-violet-900 to-blue-900',
  'from-cyan-900 to-blue-900',
  'from-blue-900 to-slate-900',
  'from-indigo-900 to-violet-900',
];
