import "./static/css/bootstrap-icons.css";
import "./static/css/bootstrap.min.css";
import "./static/css/tooplate-barista.css";
import "./static/css/vegas.min.css";
import "./fonts/bootstrap-icons.woff";
import "./fonts/bootstrap-icons.woff2";

import { createApp } from "https://unpkg.com/vue@next/dist/vue.esm-browser.js";
import { createI18n } from "https://unpkg.com/vue-i18n@next";
import App from "./App.vue";

const messages = {
  en: {
    //Navbar
    home: "Home",
    about: "About",
    categories: "Categories",
    myGallery: "My Gallery",
    contact: "Contact",
    //navbar
    //welcome
    welcomeMessage: "welcome to my portfolio",
    explore: "Explore the world through my ",
    lens: "lens",
    myStory: "My Story",
    myGallery: "My Gallery",
    //welcome
    /// O meni
    aboutMe: "About Me",
    aboutText1:
      "I'm Andy, a 20-year-old photographer, who likes to capture special moments through the camera lens. My love for photography started at a young age. Over time, it developed into a passion for visual storytelling and capturing emotions. With my work, I strive to illuminate the beauty of the world around us, highlight ordinary moments and celebrate the diversity of human experience.",
    aboutText2:
      "Additionally, I believe in the power of photography to drive positive change in society and advocate for important issues. Join me on this journey of discovery and creation! Contact me if you need photos or want to share ideas. Thank you for visiting!",

    // o meni

    //categories
    range: "Range of photo subjects",
    streets: "Streets",
    streetMessage: "Photos of streets",
    portraits: "Portraits",
    portraitsMessage: "Photos of people",
    landscapes: "Landscapes",
    landscapesMessage: "Photos of landscapes",
    //categories
    load: "Load more photos",
    //Kontakt
    hi: "Say Hello",
    name: "Name",
    namePlaceholder: "John",
    email: "Email Address",
    emailPlaceholder: "john\\@gmail.com",
    help: "How can I help you?",
    message: "Message",
    sendMessage: "Send Message",
    //Konakt
    //foter
    where: "Where to find me?",
    social: "Social Media",
    phone: "Phone",
    email: "Email",
    //foter
  },
  hr: {
    //Navbar
    home: "Početna",
    about: "O meni",
    categories: "Kategorije",
    myGallery: "Moja Galerija",
    contact: "Kontakt",
    //navbar
    //welcome
    welcomeMessage: "dobrodošli u moj portfolio",
    explore: "Istražite svijet kroz moj ",
    lens: "objektiv",
    myStory: "Moja Priča",
    myGallery: "Moja Galerija",
    //welcome
    /// o meni
    aboutMe: "O meni",
    aboutText1:
      "Ja sam Andy, 20-godišnji fotograf , koji voli uhvatiti posebne trenutke kroz objektiv kamere. Moja ljubav prema fotografiji počela je još u mladosti. S vremenom se razvila u strast prema vizualnom pričanju priča i snimanju emocija. Svojim radom težim osvijetliti ljepotu svijeta oko nas, istaknuti obične trenutke i slaviti raznolikost ljudskog iskustva. ",
    aboutText2:
      "Osim toga, vjerujem u moć fotografije da potakne pozitivne promjene u društvu i zagovara važna pitanja. Pridružite mi se na ovom putovanju otkrivanja i stvaranja! Kontaktirajte me ako trebate fotografije ili želite dijeliti ideje. Hvala vam na posjeti! ",
    /// o meni

    //categories
    range: "Spektar fotografskih motiva",
    streets: "Ulice",
    streetMessage: "Fotografije ulica",
    portraits: "Portreti",
    portraitsMessage: "Fotografije ljudi",
    landscapes: "Pejzaži",
    landscapesMessage: "Fotografije pejzaža",
    //categories
    load: "Učitaj više fotografija",
    //Kontakt
    hi: "Reci Pozdrav",
    name: "Ime",
    namePlaceholder: "Josip",
    email: "Email adresa",
    emailPlaceholder: "josip@gmail.com",
    help: "Kako Vam mogu pomoći?",
    message: "Poruka",
    sendMessage: "Pošalji poruku",
    //Kontakt
    //foter
    where: "Gdje me možete pronaći?",
    social: "Društvene mreže",
    phone: "Telefon",
    email: "Email",
    //foter
  },
  // other languages...
};

const i18n = createI18n({
  locale: "en", // default language
  messages,
});

createApp(App).use(i18n).mount("#app");
