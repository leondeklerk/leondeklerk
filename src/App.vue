<template>
	<div
		class="pb-2 max-w-4xl mx-auto"
		@click="closeDropdowns"
	>
		<div class="flex flex-col mx-auto p-10 text-center">
			<h1 class="uppercase pt-3 text-xl sm:text-4xl md:text-5xl text-zinc-600 dark:text-zinc-300">Leon de Klerk</h1>
			<div
				class="mt-12 mx-auto border bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-600 p-4 font-medium text-sm md:text-lg max-w-xl text-zinc-600 dark:text-zinc-300 text-center rounded-xl shadow-sm"
			>
				I'm Leon, a full-stack software engineer from the Netherlands
				<img
					src="/flags/nl.svg"
					class="inline rounded-sm w-5 mr-1"
				/>
				<img
					src="/flags/eu.svg"
					class="inline w-5 rounded-sm"
				/>. I build apps and other applications. Checkout my contact details and apps below.
			</div>

			<divider-component>Contact</divider-component>

			<div class="flex justify-center gap-2">
				<a
					v-for="(link, index) in links"
					:key="index"
					:href="link.url"
					:aria-label="link.text"
					target="_blank"
					class="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200"
				>
					<i :class="link.icon" />
				</a>
			</div>

			<divider-component>Apps</divider-component>

			<div class="flex flex-col md:flex-row justify-center gap-2">
				<div
					v-for="(app, index) in apps"
					:key="index"
					class="m-auto grow w-full md:w-full"
				>
					<a
						v-if="app.stores.length === 1"
						:href="app.stores[0]?.url"
						target="_blank"
						class="text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 p-2 whitespace-nowrap"
					>
						<img
							:src="app.icon"
							class="rounded-xl lg:w-14 lg:h-14 w-10 h-10 border shadow-sm mr-2 md:mr-3 dark:border-zinc-600"
						/>
						<p class="">{{ app.title }}</p>
					</a>

					<div
						v-else
						class="relative"
						@click.stop
					>
						<button
							class="w-full text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center justify-between border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 p-2 whitespace-nowrap"
							@click="toggleDropdown(index)"
						>
							<div class="flex items-center">
								<img
									:src="app.icon"
									class="rounded-xl lg:w-14 lg:h-14 w-10 h-10 border shadow-sm mr-2 md:mr-3 dark:border-zinc-600"
								/>
								<p class="">{{ app.title }}</p>
							</div>
							<i
								class="fa-solid fa-chevron-down text-xs ml-2 transition-transform duration-200"
								:class="{ 'rotate-180': openDropdown === index }"
							></i>
						</button>

						<div
							v-if="openDropdown === index"
							class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-600 rounded-xl shadow-lg z-10"
						>
							<a
								v-for="(store, storeIndex) in app.stores"
								:key="storeIndex"
								:href="store.url"
								target="_blank"
								class="flex items-center p-3 hover:bg-slate-50 dark:hover:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl text-zinc-600 dark:text-zinc-300 hover:text-orange-400/80 dark:hover:text-orange-400 transition-colors duration-200"
							>
								<i
									:class="store.icon"
									class="mr-3 text-lg w-5"
								></i>
								<span>{{ store.name }}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DividerComponent from "./components/DividerComponent.vue";

const openDropdown = ref<number | null>(null);

const toggleDropdown = (index: number) => {
	openDropdown.value = openDropdown.value === index ? null : index;
};

// Close dropdown when clicking outside
const closeDropdowns = () => {
	openDropdown.value = null;
};

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
	{
		url: "https://www.linkedin.com/in/leon-de-klerk-2a91b728b/",
		icon: "fa-brands fa-linkedin",
		text: "LinkedIn",
	},
];

const apps = [
	{
		stores: [
			{
				url: "https://apps.apple.com/app/id6746389417",
				icon: "fa-brands fa-apple",
				name: "App Store",
			},
			{
				url: "https://play.google.com/store/apps/details?id=com.leondeklerk.scored",
				icon: "fa-brands fa-google-play",
				name: "Google Play",
			},
		],
		icon: "/scored.webp",
		title: "Scored",
	},
	{
		stores: [
			{
				url: "https://play.google.com/store/apps/details?id=com.leondeklerk.wheremybike",
				icon: "fa-brands fa-google-play",
				name: "Google Play",
			},
		],
		icon: "/fietslocatie.webp",
		title: "Fiets locatie",
	},
	{
		stores: [
			{
				url: "https://play.google.com/store/apps/details?id=nl.leontheclerk.gyroblock",
				icon: "fa-brands fa-google-play",
				name: "Google Play",
			},
		],
		icon: "/gyroblock.webp",
		title: "Gyroblock",
	},
	{
		stores: [
			{
				url: "https://play.google.com/store/apps/details?id=nl.leontheclerk.when2leave",
				icon: "fa-brands fa-google-play",
				name: "Google Play",
			},
		],
		icon: "/w2l.webp",
		title: "When to Leave?",
	},
];
</script>
