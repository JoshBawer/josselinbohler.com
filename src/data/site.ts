import type { Locale, ProjectStatus } from '../lib/types';

export const site = {
  name: 'Josselin Bohler',
  domain: 'josselinbohler.com',
  linkedin: 'https://www.linkedin.com/in/josselinbohler/',
  github: 'https://github.com/JoshBawer',
  email: 'josselinbohler@hotmail.com'
};

export const routes = {
  en: {
    home: '/', work: '/work', experience: '/experience', insight: '/insights/living-reliability',
    contact: '/contact', privacy: '/privacy', legal: '/legal', thanks: '/thanks'
  },
  fr: {
    home: '/fr', work: '/fr/projets', experience: '/fr/experience', insight: '/fr/idees/strategie-fiabilite-vivante',
    contact: '/fr/contact', privacy: '/fr/confidentialite', legal: '/fr/mentions-legales', thanks: '/fr/merci'
  }
} as const;

export const ui = {
  en: {
    nav: { home: 'Home', work: 'Work', experience: 'Experience', insight: 'Thinking', contact: 'Contact' },
    language: 'FR', menu: 'Menu', skip: 'Skip to content',
    status: 'Open to selected opportunities, projects and partnerships',
    contactCta: 'Start a conversation', viewWork: 'View selected work', fullExperience: 'Explore the full experience',
    readCase: 'Read case study', allWork: 'All work', close: 'Close',
    footerLine: 'Reliability engineering, industrial operations and field-grade AI.',
    legal: 'Legal notice', privacy: 'Privacy', rights: 'All rights reserved.'
  },
  fr: {
    nav: { home: 'Accueil', work: 'Projets', experience: 'Expérience', insight: 'Réflexion', contact: 'Contact' },
    language: 'EN', menu: 'Menu', skip: 'Aller au contenu',
    status: 'Ouvert aux opportunités, projets et partenariats à fort impact',
    contactCta: 'Échanger', viewWork: 'Voir les projets', fullExperience: 'Découvrir le parcours complet',
    readCase: 'Voir l’étude de cas', allWork: 'Tous les projets', close: 'Fermer',
    footerLine: 'Ingénierie de fiabilité, opérations industrielles et IA de terrain.',
    legal: 'Mentions légales', privacy: 'Confidentialité', rights: 'Tous droits réservés.'
  }
} as const;

export const statusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  en: { Published: 'Published', Prototype: 'Prototype', 'Internal tool': 'Internal tool', Archived: 'Archived' },
  fr: { Published: 'Publié', Prototype: 'Prototype', 'Internal tool': 'Outil interne', Archived: 'Archivé' }
};
