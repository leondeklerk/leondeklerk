<template>
	<button
		:aria-label="$t('darkMode')"
		class="h-10 w-10 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm hover:text-orange-400/80 dark:hover:text-orange-400 rounded-xl flex items-center justify-center border border-slate-200 dark:border-zinc-600 hover:shadow-md duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
		@click="toggleDark()"
	>
		<font-awesome-icon
			:icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']"
			class="text-sm"
		/>
	</button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
