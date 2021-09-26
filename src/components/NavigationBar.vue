<script setup lang="ts">
import NavigationButton from "./NavigationButton.vue";
import { useRoute } from "vue-router";

const { path } = useRoute();
</script>

<template>
    <nav class="">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-8">
                    <router-link to="/" class="flex-shrink-0">
                        <img
                            class="h-8 w-auto rounded-full"
                            src="/img/logo.png"
                            alt="UT Logo"
                        />
                    </router-link>
                    <div class="sm:ml-12">
                        <div class="flex space-x-4">
                            <navigation-button to="/products"
                                content="Products and Services"
                                :active="path === '/products'"
                            />
                            <navigation-button to="/terms"
                                content="Terms of Service"
                                :active="path === '/terms'"
                            />
                            <navigation-button to="/privacy"
                                content="Privacy Policy"
                                :active="path === '/privacy'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
