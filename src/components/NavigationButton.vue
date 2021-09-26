<script setup lang="ts">
import { computed } from "@vue/reactivity";
const props = defineProps<{ to: string; content: string; active?: boolean }>();

const state = {
    active: ["bg-gray-800", "text-white"],
    inactive: ["text-gray-300", "hover:bg-gray-600", "hover:text-white"],
};
const stateClass = computed((): string => {
    if (props.active) {
        return state.active.join(" ");
    } else {
        return state.inactive.join(" ");
    }
});
</script>

<template>
    <router-link :to="props.to"
        class="text-sm font-medium px-3 py-2 rounded-md"
        :class="[stateClass]"
        v-text="props.content"
    />
</template>
