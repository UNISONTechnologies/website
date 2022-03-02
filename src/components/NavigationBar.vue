<script setup lang="ts">
import NavigationButton from "./NavigationButton.vue";
import { useRoute } from "vue-router";

const { path } = useRoute();
</script>

<template>
    <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-8">
                    <router-link to="/" class="flex-shrink-0">
                        <img
                            class="block lg:hidden h-8 w-auto"
                            src="/img/logo.png"
                            alt="UT Logo"
                        />
                        <img
                            class="hidden lg:block h-12 w-auto"
                            src="/img/wordmark.png"
                            alt="UT Wordmark"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
