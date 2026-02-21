import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin, faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faGithub, faLinkedin, faGooglePlay, faApple, faChevronDown, faEnvelope, faSun, faMoon);

import "./assets/main.css";

const app = createApp(App);
app.use(i18n);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
