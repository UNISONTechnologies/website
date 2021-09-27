<script setup lang="ts">
import NavigationBar from "./NavigationBar.vue";
const props = defineProps<{ header: string }>();
</script>

<template>
    <div class="bg-gradient-to-r from-ut-blue to-ut-green pb-32">
        <navigation-bar />

        <header class="pt-20 pb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
                <h1
                    class="text-3xl font-bold text-white"
                    v-text="props.header"
                />
            </div>
        </header>
    </div>
    <main class="-mt-32">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-8 lg:px-8">
            <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6 min-h-96">
                <div class="p-4">
                    <slot />
                </div>
            </div>
        </div>
    </main>
</template>
