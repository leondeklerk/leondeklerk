import { createI18n } from "vue-i18n";
import en from "./locales/en";
import nl from "./locales/nl";

const savedLocale = localStorage.getItem("locale") || (navigator.language.startsWith("nl") ? "nl" : "en");

const i18n = createI18n({
	legacy: false,
	locale: savedLocale,
	fallbackLocale: "en",
	messages: {
		en,
		nl,
	},
});

export default i18n;
