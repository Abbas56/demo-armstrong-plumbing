export const site = {
  name: 'Armstrong Plumbing',
  legalName: 'Armstrong Plumbing & Heating Ltd',
  tagline: 'Plumbing & heating in Leeds',
  description: 'Gas Safe registered plumbers in Leeds for boilers, bathrooms, emergencies and landlord gas safety certificates.',
  phone: '0113 496 7821',
  phoneTel: '+441134967821',
  email: 'hello@armstrongplumbing-demo.co.uk',
  address: {
    street: '14 Kirkstall Road',
    city: 'Leeds',
    region: 'West Yorkshire',
    postcode: 'LS5 3BL',
  },
  primaryCtaHref: '/contact/',
  primaryCtaLabel: 'Get a quote',
  formAction: 'https://formspree.io/f/demo-armstrong',
  nav: [
  {
    "label": "Services",
    "href": "/services/boiler-installation/"
  },
  {
    "label": "Areas",
    "href": "/areas/leeds/"
  },
  {
    "label": "About",
    "href": "/about/"
  },
  {
    "label": "Reviews",
    "href": "/reviews/"
  },
  {
    "label": "Contact",
    "href": "/contact/"
  }
],
  footerLinks: [
  {
    "label": "Boiler installation",
    "href": "/services/boiler-installation/"
  },
  {
    "label": "Emergency plumbing",
    "href": "/services/emergency-plumbing/"
  },
  {
    "label": "Leeds",
    "href": "/areas/leeds/"
  },
  {
    "label": "FAQ",
    "href": "/faq/"
  }
],
  trustItems: [{"label":"Gas Safe","text":"Registered engineers"},{"label":"Local","text":"Leeds & West Yorkshire"},{"label":"Transparent","text":"Written quotes before work"}],
} as const;
