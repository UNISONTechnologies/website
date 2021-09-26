<script setup lang="ts">
const props =
    defineProps<{ to: string; title: string; backgroundColor: string }>();
</script>

<template>
    <router-link
        :to="props.to"
        class="text-white rounded-lg p-4 text-3xl text-center flex h-full"
        :class="[backgroundColor]"
    >
        <span class="m-auto" v-text="props.title" />
    </router-link>
</template>
