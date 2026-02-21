<template>
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-700 focus:shadow-lg focus:ring-2 focus:ring-orange-400 dark:focus:bg-zinc-900 dark:focus:text-zinc-200"
	>
		{{ $t("skipToContent") }}
	</a>

	<div
		role="toolbar"
		:aria-label="$t('pageControls')"
		class="fixed top-4 right-4 z-20 flex gap-2"
	>
		<LanguageSwitcher />
		<ThemeToggle />
	</div>

	<main
		id="main-content"
		tabindex="-1"
		class="pb-2 max-w-4xl mx-auto focus:outline-none"
		@click="closeDropdowns"
		@keydown.escape="closeDropdowns"
	>
		<header class="flex flex-col mx-auto px-10 pt-10 pb-4 text-center">
			<h1 class="uppercase pt-3 text-xl sm:text-4xl md:text-5xl text-zinc-600 dark:text-zinc-300">{{ $t("heading") }}</h1>
			<div
				class="mt-12 mx-auto border bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-600 p-4 font-medium text-sm md:text-lg max-w-xl text-zinc-600 dark:text-zinc-300 text-center rounded-xl shadow-sm"
			>
				{{ $t("intro") }}
				<img
					src="/flags/nl.svg"
					alt="Netherlands flag"
					class="inline rounded-sm w-5 mr-1"
				/>
				<img
					src="/flags/eu.svg"
					alt="European Union flag"
					class="inline w-5 rounded-sm"
				/>{{ $t("introContinuation") }}
			</div>
		</header>

		<section
			:aria-label="$t('contact')"
			class="flex flex-col mx-auto px-10 py-4 text-center"
		>
			<section-divider>{{ $t("contact") }}</section-divider>

			<div class="flex justify-center gap-2">
				<a
					v-for="(link, index) in links"
					:key="index"
					:href="link.url"
					:aria-label="link.text"
					target="_blank"
					rel="noopener noreferrer"
					class="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
				>
					<font-awesome-icon :icon="link.icon" />
				</a>
			</div>
		</section>

		<section
			:aria-label="$t('apps')"
			class="flex flex-col mx-auto px-10 py-4 pb-10 text-center"
		>
			<section-divider>{{ $t("apps") }}</section-divider>

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
						rel="noopener noreferrer"
						class="text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 p-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
					>
						<img
							:src="app.icon"
							alt=""
							class="rounded-xl lg:w-14 lg:h-14 w-10 h-10 border shadow-sm mr-2 md:mr-3 dark:border-zinc-600"
						/>
						<span>{{ app.title }}</span>
					</a>

					<div
						v-else
						class="relative"
						@click.stop
					>
						<button
							:aria-label="`${$t('showStore')} ${app.title}`"
							:aria-expanded="openDropdown === index"
							aria-haspopup="true"
							class="w-full text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center justify-between border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 p-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
							@click="toggleDropdown(index)"
						>
							<div class="flex items-center">
								<img
									:src="app.icon"
									alt=""
									class="rounded-xl lg:w-14 lg:h-14 w-10 h-10 border shadow-sm mr-2 md:mr-3 dark:border-zinc-600"
								/>
								<span>{{ app.title }}</span>
							</div>
							<font-awesome-icon
								:icon="['fas', 'chevron-down']"
								class="text-xs ml-2 transition-transform duration-200"
								:class="{ 'rotate-180': openDropdown === index }"
							/>
						</button>

						<ul
							v-if="openDropdown === index"
							role="list"
							class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-600 rounded-xl shadow-lg z-10"
						>
							<li
								v-for="(store, storeIndex) in app.stores"
								:key="storeIndex"
								role="listitem"
							>
								<a
									:href="store.url"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center p-3 hover:bg-slate-50 dark:hover:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl text-zinc-600 dark:text-zinc-300 hover:text-orange-400/80 dark:hover:text-orange-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-inset"
								>
									<font-awesome-icon
										:icon="store.icon"
										class="mr-3 text-lg w-5"
									/>
									<span>{{ store.name }}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionDivider from "./components/SectionDivider.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

const openDropdown = ref<number | null>(null);

const toggleDropdown = (index: number) => {
	openDropdown.value = openDropdown.value === index ? null : index;
};

// Close dropdown when clicking outside
const closeDropdowns = () => {
	openDropdown.value = null;
};

interface Link {
	url: string;
	icon: [string, string];
	text: string;
}

interface AppStore {
	url: string;
	icon: [string, string];
	name: string;
}

interface AppEntry {
	stores: AppStore[];
	icon: string;
	title: string;
}

const links: Link[] = [
	{
		url: "https://github.com/leondeklerk",
		icon: ["fab", "github"],
		text: "GitHub",
	},
	{
		url: "mailto:contact@leondeklerk.com",
		icon: ["far", "envelope"],
		text: "E-mail",
	},
	{
		url: "https://www.linkedin.com/in/leon-de-klerk-2a91b728b/",
		icon: ["fab", "linkedin"],
		text: "LinkedIn",
	},
];

const apps: AppEntry[] = [
	{
		stores: [
			{
				url: "https://apps.apple.com/app/id6746389417",
				icon: ["fab", "apple"],
				name: "App Store",
			},
			{
				url: "https://play.google.com/store/apps/details?id=com.leondeklerk.scored",
				icon: ["fab", "google-play"],
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
				icon: ["fab", "google-play"],
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
				icon: ["fab", "google-play"],
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
				icon: ["fab", "google-play"],
				name: "Google Play",
			},
		],
		icon: "/w2l.webp",
		title: "When to Leave?",
	},
];
</script>
