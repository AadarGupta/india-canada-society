import * as fs from "fs";
import * as path from "path";

// NAVIGATION
export const NAV_LINKS = [
  { href: `/`, key: `home`, label: `Home` },
  { href: `/events`, key: `events`, label: `Events` },
  { href: `/contact-us`, key: `contact-us`, label: `Contact Us` },
  { href: `/gallery`, key: `gallery`, label: `Gallery` },
];

export const SLIDES = [
  { image: `/slides/slide1.JPG`, key: `img1` },
  { image: `/slides/slide2.jpg`, key: `img2` },
  { image: `/slides/slide3.JPG`, key: `img3` },
  { image: `/slides/slide4.jpg`, key: `img4` },
];

export const ABOUT_US = [
  {
    option: `Who Are We?`,
    content: `Founded in November 1973, the India-Canada Society is a secular non-profit organization devoted to upholding the rich social and culture heritage of Indians of South Asian origins, contribute to the enrichment of Canadian life and culture and championing the social and cultural interests of the Indo-Canadian community. 
    
    The Society is currently engaged in a number of activities in the domains of social causes, community engagement and member mobilization. A sample of these activities is highlighted below. 
    
    A copy of our constitution can be viewed `,
  },
  {
    option: `Universal Social Causes`,
    content: `India-Canada Society has a rich history of engaging actively both in policy making as well as public education, to promote such universal causes such as cultural diversity, community harmony, human rights, and nonviolence. For example, the Society played an active part in the establishment of a human rights committee during the mid-seventies. 
    
    This committee was the first of its kind in the country and it included representatives from the regional police, the church, community leaders and government. The committee's work and interest in the fight against racism generated significant civic awareness on the issue, eventually leading to the formation the Mayor's Race Relations Committee.`,
  },
  {
    option: `Community Engagement`,
    content: `With an explicit intention to contribute to the variety of Canadian life and experience, the Society has actively sought to facilitate mainstream dialogue around the rich Indian philosophy and culture. For example, over the last twenty-five years, the Society has cooperatively hosted major national and international speakers and has helped celebrate the work and life of such preminent Indian figures in arts, culture and philosophy. 
    
    These include: Gandhi, Tagore, Radhakrishnan, Vinoba Bhave, Ramanujan, Nehru, Aurobindo, Ravi Shankar, and Rukmini Devi Arundale. For this it has worked very closely with various departments at McMaster University (History, Music, Religion, Philosophy, Political Science, Women's Study, Peace Centre etc.). 
    
    The Society continually strives to remain engaged in issues of specific interest to the Indo-Canadian community by undertaking and supporting initiatives such as creating workgroups that focus on the special needs of community women, and youths. More recently the Society is actively participating in a grassroots effort to shape provincial health policy aimed at seniors “aging at home.”`,
  },
  {
    option: `Member Mobilization`,
    content: `The Society holds a number of events for its members. Among these are annual picnics, formal dinners and informal social get-togethers. It has also organized Indian language classes for children and cultural functions spanning music programs to major drama productions of such classics from Indian literature as “Meghadutam” (Cloud Messenger) written by Kalidasa.`,
  },
  {
    option: `Gandhi Peace Festival`,
    content: `India-Canada Society started the Annual Mahatma Gandhi Peace Festival in 1993, a year before Gandhi’s 125th birth anniversary. It is now a co-sponsor of the Festival with the Centre for Peace Studies, McMaster University. Over the years the Gandhi Peace Festival has grown to become a cultural icon of the city, drawing participants from various cultural backgrounds and walks of life. The Society feels privileged to be working together with many groups in the community to promote the culture of peace as a counterpoint to the culture of conflict.`,
  },
];

export const CURRENT_BOD = [
  { name: `Ritesh Ranjan`, role: `President`, image: `/currentBOD/pres.png` },
  {
    name: `Jose Kudiyate`,
    role: `Vice-President`,
    image: `/currentBOD/vice-pres.jpeg`,
  },
  {
    name: `Sowmya Shivaswamy`,
    role: `Secretary`,
    image: `/currentBOD/sec.png`,
  },
  {
    name: `Jay Parekh`,
    role: `Treasurer`,
    image: `/currentBOD/tresur.png`,
  },
  {
    name: `Roma Juneja`,
    role: `Director (Past President)`,
    image: `/currentBOD/direc-1.png`,
  },
  {
    name: `Akash Gupta`,
    role: `Director`,
    image: `/currentBOD/direc-2.png`,
  },
  {
    name: `Shushmita Gupta`,
    role: `Director`,
    image: `/currentBOD/direc-3.png`,
  },
  {
    name: `Meghavi Chaitania`,
    role: `Director`,
    image: `/currentBOD/direc-4.png`,
  },
  {
    name: `Madhuri Saha`,
    role: `Director`,
    image: ``,
  },
  {
    name: `Aadar Gupta`,
    role: `Web Engineer`,
    image: `/currentBOD/web.png`,
  },
];

export const PAST_EVENTS = [
  {
    name: `Musical Tribute to Bollywood`,
    date: `21st December 2019`,
    img: `/events/bollywoodnight2019.jpg`,
    link: `/events/21-dec-2019`,
    data: ``,
  },
  {
    name: `Odissi Recital`,
    date: `8th June 2019`,
    img: `/events/odissi-recital.png`,
    link: `/events/8-jun-2019`,
    data: ``,
  },
  {
    name: `Shakuntala`,
    date: `7th June 2014`,
    img: `/events/shakuntala.png`,
    link: `/events/7-jun-2014`,
    data: ``,
  },
  {
    name: `An Evening of Ghazals`,
    date: `3rd March 2012`,
    img: `/events/khalid-salim.png`,
    link: `/events/3-mar-2012`,
    data: ``,
  },
  {
    name: `Tanusree Shankar Dance`,
    date: `26th March 2011`,
    img: `/events/tanusree-shankar.png`,
    link: `/events/26-mar-2011`,
    data: ``,
  },
  {
    name: `Multilingual Musical Medley`,
    date: `22nd January 2010`,
    img: `/events/musical-medley.png`,
    link: `/events/22-jan-2010`,
    data: ``,
  },
  {
    name: `Diwali 2004`,
    date: `29th October 2004`,
    img: `/events/2004-diwali.png`,
    link: `/events/29-oct-2004`,
    data: ``,
  },
];

export const NEW_EVENTS = [];

export const GALLERY_FILES = Array.from({ length: 10 }, (_, i) => ({
  src: `gallery/img${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));
