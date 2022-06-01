<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props =
    defineProps<{ header: string; subtitle?: string; typography?: boolean }>();

const mediaQueryMatch = ref<boolean>(
    window.matchMedia("(min-width: 1024px)").matches,
);
const onResize = () =>
    (mediaQueryMatch.value = window.matchMedia("(min-width: 1024px)").matches);

onMounted(() => window.addEventListener("resize", onResize));
onBeforeUnmount(() => window.removeEventListener("resize", onResize));
</script>

<template>
    <div class="bg-gradient-to-r from-ut-blue to-ut-green pb-32">
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center space-x-8">
                        <router-link to="/" class="flex-shrink-0">
                            <picture v-if="!mediaQueryMatch" class="block">
                                <source
                                    srcset="/img/logo.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcset="/img/logo.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/img/logo.png"
                                    alt="UNISON Technologies"
                                    loading="lazy"
                                    decoding="async"
                                    class="h-8 w-auto"
                                />
                            </picture>

                            <picture v-else class="block">
                                <source
                                    srcset="/img/wordmark.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcset="/img/wordmark.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/img/wordmark.png"
                                    alt="UNISON Technologies"
                                    loading="lazy"
                                    decoding="async"
                                    class="h-10 w-auto"
                                />
                            </picture>
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
                    :class="[props.typography ? 'prose max-w-none font-default' : '']"
                >
                    <slot />
                </div>
            </div>
        </div>
    </main>
</template>
