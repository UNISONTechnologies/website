<script setup lang="ts">
const props = defineProps<{
    name: string;
    description: string;
    url: string;
}>();
</script>

<template>
    <a
        :href="props.url"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition"
    >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1">
                <div class="flex items-center space-x-3">
                    <span
                        class="text-gray-900 dark:text-white text-md font-medium truncate"
                        v-text="props.name"
                    />
                </div>
                <p
                    class="mt-1 text-gray-500 dark:text-gray-400 text-sm"
                    v-text="props.description"
                />
            </div>
        </div>
    </a>
</template>
