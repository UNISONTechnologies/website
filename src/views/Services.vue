<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import ThreeColumnGrid from "../components/ThreeColumnGrid.vue";
import CreationCard from "../components/CreationCard.vue";

import productsAndService from "../data/productsAndServices.json";
</script>

<template>
    <main-layout header="Services">
        <three-column-grid>
            <creation-card
                v-for="product in productsAndService"
                :key="product.name"
                :name="product.name"
                :description="product.description"
                :url="product.url"
            />
        </three-column-grid>
    </main-layout>
</template>
