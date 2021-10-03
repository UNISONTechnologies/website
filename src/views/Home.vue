<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
import HomepageButton from "../components/HomepageButton.vue";
import ThreeColumnGrid from "../components/ThreeColumnGrid.vue";
</script>

<template>
    <main-layout header="Home">
        <three-column-grid class="h-80">
            <homepage-button
                to="/services"
                title="Services"
                background-color="bg-ut-blue"
                dark-background-color="hover:bg-ut-blue-dark"
            />
            <homepage-button
                to="/terms"
                title="Terms of Service"
                background-color="bg-ut-green"
                dark-background-color="hover:bg-ut-green-dark"
            />
            <homepage-button
                to="/privacy"
                title="Privacy Policy"
                background-color="bg-ut-blue"
                dark-background-color="hover:bg-ut-blue-dark"
            />
        </three-column-grid>
    </main-layout>
</template>
