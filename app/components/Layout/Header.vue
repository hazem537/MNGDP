<template>
    <header class="bg-white   px-[80px] py-2">
        <div class=" flex items-center justify-between px-4 py-2 gap-4">
            <div class="flex items-center gap-10">

                <NuxtLink to="/" class="shrink-0">
                    <AppLogo class="h-16 w-auto" />
                </NuxtLink>
                <nav class="hidden md:flex items-center gap-1 flex-1 justify-center">
                    <NuxtLink
                        v-for="link in links"
                        :key="link.to"
                        :to=" link.type === 'single' ? link.to : undefined"
                        class="px-4 py-6 text-sm font-medium text-gray-700 hover:text-[#1a2e44] hover:bg-gray-100 rounded relative"
                        :class="{
                            'bg-secondary-green! text-white! hover:text-white!': isSectionActive(link.to)
                        }"
                    >
                        <template v-if="link.type === 'single'">
                            <span class="relative flex items-center justify-center w-full h-full">
                                <span
                                    v-if="isSectionActive(link.to)"
                                    class="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-primary-400 rounded w-full h-[5px] "
                                ></span>
                                <span class="relative z-10">
                                    {{ $t(link.labelKey) }}
                                </span>
                            </span>
                        </template>
                        <template v-else>
                            <UDropdownMenu :key="link.to" :items="link.children">
                                <UButton
                                    variant="ghost"
                                    color="neutral"
                                    size="sm"
                                    class=" relative text-sm font-medium  hover:text-secondary-green   p-0 rounded"
                                    :class="{
                                        'bg-secondary-green! text-white! hover:text-white!': isSectionActive(link.to)
                                    }"
                                    trailing-icon="i-lucide-chevron-down"
                                >
                                    {{ t(link.labelKey) }}
                                    <span
                                    v-if="isSectionActive(link.to)"
                                    class="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-primary-400 rounded w-full h-[5px] "
                                ></span>
                                </UButton>
                            </UDropdownMenu>
                        </template>
                    </NuxtLink>


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
const route = useRoute()

const isArabic = computed(() => locale.value === 'ar')

const toggleLocale = async () => {
    await setLocale(isArabic.value ? 'en' : 'ar')
}

const isSectionActive = (to: string) => {
    const current = route.path.split('/')[1] || ''
    const target = to.split('/')[1] || ''
    return current === target
}

const links = [
    { to: '/', labelKey: 'header.home', type: 'single' },
    { to: '/about', labelKey: 'header.about', type: 'single' },
    { to: '/transformation-news',  labelKey: 'header.news',type: 'dropdown',
        children: [[
            { label: 'نشرة لمحة عن التطور', to: '/transformation-news/development-overview' },
            { label: 'الاخبار والمستجدات', to: '/transformation-news/latest-news' },
            { label: 'هوية البرنامج', to: '/transformation-news/visual-identity' },

        ]]
    },
    { to: '/capacity', labelKey: 'header.capacity', type: 'single' },

    {
        to: '/library',
        labelKey: 'header.digitalLibrary',
        type: 'dropdown',
        children: [[
            { label: t('header.digitalLibrary'), to: '/library' }
        ]]
    },
    {
        to: '/contact',
        labelKey: 'header.contactUs',
        type: 'dropdown',
        children: [[
            { label: t('header.contactUs'), to: '/contact' }
        ]]
    }
]

// simpleLinks & dropdownLinks no longer used
</script>
