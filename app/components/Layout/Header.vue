<template>
    <header class="bg-white   px-[80px] py-2">
        <div class=" flex items-center justify-between px-4 py-2 gap-4">
            <div class="flex items-center gap-10">

                <NuxtLink to="/" class="shrink-0">
                    <AppLogo class="h-16 w-auto" />
                </NuxtLink>
                <nav class="hidden md:flex items-center gap-1 flex-1 justify-center">
                    <NuxtLink v-for="link in simpleLinks" :key="link.to" :to="link.to"
                        class="px-4 py-6 rounded text-sm font-medium text-gray-700 hover:text-[#1a2e44] hover:bg-gray-100 transition-colors whitespace-nowrap"
                        active-class="!bg-secondary-green !text-white hover:!text-white relative"
                    >
                        <template #default="{ isActive }">
                            <span class="relative flex items-center justify-center w-full h-full">
                                <span v-if="isActive" class="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-primary-400 rounded w-full h-[5px] "></span>
                                <span class="relative z-10">
                                    {{ $t(link.labelKey) }}
                                </span>
                            </span>
                        </template>
                        <!-- {{ $t(link.labelKey) }} -->
                    </NuxtLink>

                    <UDropdownMenu v-for="link in dropdownLinks" :key="link.to" :items="link.children">
                        <UButton variant="ghost" color="neutral" size="sm"
                            class="px-4 py-6 text-sm   font-medium text-gray-700 hover:text-[#1a2e44] hover:bg-gray-100 rounded"
                            trailing-icon="i-lucide-chevron-down">
                            {{ t(link.labelKey) }}
                        </UButton>
                    </UDropdownMenu>
                </nav>
            </div>



            <div class="flex items-center gap-3 shrink-0">
                <UButton variant="ghost" color="neutral" size="sm"
                    class="rounded-full border-none flex items-center gap-1.5" @click="toggleLocale">
                    <img src="~/assets/icons/lang.svg" alt="lang" class="w-6 h-6" />
                    <span class="text-sm font-medium">{{ isArabic ? 'English' : 'العربية' }}</span>
                </UButton>
                <div
                    class="flex items-center gap-1.5   rounded-full px-3 py-1.5 text-sm text-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
                    <UIcon name="i-lucide-search" class="w-6 h-6" />
                    <span>{{ t('header.search') }}</span>
                </div>

            </div>

        </div>
    </header>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()

const isArabic = computed(() => locale.value === 'ar')

const toggleLocale = async () => {
    await setLocale(isArabic.value ? 'en' : 'ar')
}

const simpleLinks = [
    { to: '/', labelKey: 'header.home' },
    { to: '/about', labelKey: 'header.about' },
    { to: '/capacity', labelKey: 'header.capacity' }
]

const dropdownLinks = computed(() => {
    // Make labels recompute when locale changes
    locale.value

    return [
        {
            to: '/news',
            labelKey: 'header.news',
            children: [[
                { label: t('header.news'), to: '/news' }
            ]]
        },
        {
            to: '/library',
            labelKey: 'header.digitalLibrary',
            children: [[
                { label: t('header.digitalLibrary'), to: '/library' }
            ]]
        },
        {
            to: '/contact',
            labelKey: 'header.contactUs',
            children: [[
                { label: t('header.contactUs'), to: '/contact' }
            ]]
        }
    ]
})
</script>
