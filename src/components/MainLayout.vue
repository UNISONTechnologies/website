<script setup lang="ts">
const props =
    defineProps<{ header: string; subtitle?: string; typography?: boolean }>();
</script>

<template>
    <div class="bg-gradient-to-r from-ut-blue to-ut-green pb-32">
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
                                class="hidden lg:block h-10 w-auto"
                                src="/img/wordmark.png"
                                alt="UT Wordmark"
                            />
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <header class="pt-10 sm:pt-20 pb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
                <h1
                    class="text-3xl font-bold text-white sm:text-left text-center"
                    v-text="props.header"
                />
                <h2
                    v-if="subtitle"
                    class="text-xl font-medium text-white sm:text-left text-center mt-1"
                    v-text="props.subtitle"
                />
            </div>
        </header>
    </div>
    <main class="-mt-32 pb-16">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-8 lg:px-8">
            <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6 min-h-96">
                <div
                    class="p-4"
                    :class="[props.typography ? 'prose max-w-none' : '']"
                >
                    <slot />
                </div>
            </div>
        </div>
    </main>
</template>
