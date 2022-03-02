<script setup lang="ts"></script>

<template>
    <div class="min-h-screen">
        <router-view />
    </div>

    <footer
        class="text-gray-600 text-center text-sm -mt-16 px-6 sm:px-0 max-w-2xl mx-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 pb-8 sm:pb-0 items-center"
    >
        <span class="flex-1 text-center sm:text-left">
            Copyright &copy; {{ new Date().getFullYear() }} UNISON Technologies
            Inc. All rights reserved.
        </span>

        <div
            class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-6 items-center"
        >
            <router-link to="/terms" class="hover:underline">
                Terms of Service
            </router-link>
            <router-link to="/privacy" class="hover:underline">
                Privacy Policy
            </router-link>
        </div>
    </footer>
</template>

<style scoped lang="postcss">
footer div.flex a.router-link-exact-active {
    @apply bg-gray-200 px-4 py-2 text-black rounded-lg;
}
</style>
