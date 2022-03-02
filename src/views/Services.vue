<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import ThreeColumnGrid from "../components/ThreeColumnGrid.vue";
import CreationCard from "../components/CreationCard.vue";
import { useStore } from "../stores/main";
import { onBeforeMount } from "vue";

const store = useStore();

onBeforeMount(async () => {
    store.services = await (
        await fetch("https://raw.unisontech.org/ut/services")
    ).json();
});
</script>

<template>
    <main-layout header="Home">
        <three-column-grid v-if="store.services">
            <creation-card
                v-for="service in store.services"
                :key="service.name"
                :name="service.name"
                :description="service.description"
                :url="service.url"
            />
        </three-column-grid>
    </main-layout>
</template>
