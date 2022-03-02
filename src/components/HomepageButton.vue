<script setup lang="ts">
const props = defineProps<{
    to: string;
    title: string;
    backgroundColor: string;
    darkBackgroundColor: string;
}>();
</script>

<template>
    <router-link
        :to="props.to"
        class="text-white rounded-lg p-4 text-3xl text-center flex h-full transition duration-300 hover:shadow-2xl"
        :class="[backgroundColor, darkBackgroundColor]"
    >
        <span class="m-auto" v-text="props.title" />
    </router-link>
</template>
