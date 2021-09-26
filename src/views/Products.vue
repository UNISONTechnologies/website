<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import CreationCard from "../components/CreationCard.vue";

import productsAndService from "../data/productsAndServices.json";
// console.debug(productsAndService);
</script>

<template>
    <main-layout header="Products and Services">
        <div
            class="
                grid
                md:grid-cols-3
                sm:grid-cols-1
                grid-flow-row grid-auto-row-dense
                gap-6
            "
        >
            <creation-card
                v-for="product in productsAndService"
                :key="product.name"
                :name="product.name"
                :description="product.description"
                :url="product.url"
            />
        </div>
    </main-layout>
</template>
