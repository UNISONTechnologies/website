<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import HomepageButton from "../components/HomepageButton.vue";
import ThreeColumnGrid from "../components/ThreeColumnGrid.vue";
</script>

<template>
    <main-layout header="Home">
        <three-column-grid class="h-80">
            <homepage-button
                to="/products"
                title="Products and Service"
                background-color="bg-ut-blue"
            />
            <homepage-button
                to="/terms"
                title="Terms of Service"
                background-color="bg-ut-green"
            />
            <homepage-button
                to="/privacy"
                title="Privacy Policy"
                background-color="bg-ut-blue"
            />
        </three-column-grid>
        <!-- <div class="grid grid-cols-3 gap-6 h-80"> -->
        <!-- </div> -->
    </main-layout>
</template>
