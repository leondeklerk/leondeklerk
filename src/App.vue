<template>
	<div class="pb-2 max-w-4xl mx-auto">
		<div class="flex flex-col mx-auto p-10 text-center">
			<h1 class="uppercase pt-3 text-xl sm:text-4xl md:text-5xl text-zinc-600 dark:text-zinc-300">Leon de Klerk</h1>
			<div
				class="mt-12 mx-auto border bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-600 p-4 font-medium text-sm md:text-lg max-w-xl text-zinc-600 dark:text-zinc-300 text-center rounded-xl shadow-sm"
			>
				I'm Leon, a full-stack software engineer from the Netherlands 🇳🇱 🇪🇺. I build apps and other applications. Checkout my contact details
				and apps below.
			</div>

			<divider-component>Contact</divider-component>

			<div class="flex justify-center gap-2">
				<a
					v-for="(link, index) in links"
					:key="index"
					:href="link.url"
					:aria-label="link.text"
					class="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200"
				>
					<i :class="link.icon" />
				</a>
			</div>

			<divider-component>Apps</divider-component>

			<div class="flex flex-col md:flex-row justify-center gap-2">
				<div v-for="(app, index) in apps" :key="index" class="m-auto grow w-full md:w-full">
					<a
						:href="app.url"
						class="text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 p-2 whitespace-nowrap"
					>
						<img :src="app.icon" class="rounded-xl lg:w-14 lg:h-14 w-10 h-10 border shadow-sm mr-2 md:mr-3 dark:border-zinc-600" />
						<p class="">{{ app.title }}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import DividerComponent from "./components/DividerComponent.vue";

const links = [
	{
		url: "https://github.com/leondeklerk",
		icon: "fa-brands fa-github",
		text: "GitHub",
	},
	{
		url: "mailto:contact@leondeklerk.com",
		icon: "fa-regular fa-envelope",
		text: "E-mail",
	},
];

const apps = [
	{
		url: "https://play.google.com/store/apps/details?id=com.leondeklerk.scored",
		icon: "/scored.webp",
		title: "Scored",
	},
	{
		url: "https://play.google.com/store/apps/details?id=com.leondeklerk.wheremybike",
		icon: "/fietslocatie.webp",
		title: "Fiets locatie",
	},
	{
		url: "https://play.google.com/store/apps/details?id=nl.leontheclerk.gyroblock",
		icon: "/gyroblock.webp",
		title: "Gyroblock",
	},
	{
		url: "https://play.google.com/store/apps/details?id=nl.leontheclerk.when2leave",
		icon: "/w2l.webp",
		title: "When to Leave?",
	},
];
</script>
