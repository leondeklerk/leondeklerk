<template>
	<button
		:aria-label="$t('language')"
		class="h-10 gap-1.5 px-2.5 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md rounded-xl flex items-center justify-center border border-slate-200 dark:border-zinc-600 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
		@click="toggleLocale"
	>
		<img
			:src="locale === 'en' ? '/flags/nl.svg' : '/flags/gb.svg'"
			:alt="locale === 'en' ? 'Switch to Dutch' : 'Switch to English'"
			class="w-5 rounded-sm"
		/>
		<span class="text-xs font-semibold text-zinc-600 dark:text-zinc-300">{{ locale === "en" ? "NL" : "EN" }}</span>
	</button>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleLocale = () => {
	const next = locale.value === "en" ? "nl" : "en";
	locale.value = next;
	localStorage.setItem("locale", next);
	document.documentElement.lang = next;
};
</script>
