<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import ThreeColumnGrid from "../components/ThreeColumnGrid.vue";
import CreationCard from "../components/CreationCard.vue";
import { onBeforeMount, ref } from "vue";
import type { Service } from "../models";

const services = ref<Service[]>([]);

onBeforeMount(async () => {
    services.value = await (
        await fetch("https://raw.unisontech.org/ut/services")
    ).json();
});
</script>

<template>
    <main-layout header="Home">
        <three-column-grid v-if="services">
            <creation-card
                v-for="service in services"
                :key="service.name"
                :name="service.name"
                :description="service.description"
                :url="service.url"
            />
        </three-column-grid>
    </main-layout>
</template>
