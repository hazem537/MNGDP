<template>
    <div class="w-full h-[380px] relative flex items-center justify-start ps-20">
        <img :src="imageUrl" :alt="alt" class="w-full h-full object-cover absolute top-0 left-0 ">
        <div class="absolute inset-0  z-5 pointer-events-none green-overlay" />

        <div class=" z-10 flex flex-col gap-4">
            <UBreadcrumb :items="breadcrumbItems"
                :separatorIcon="Dir === 'ltr' ? 'i-lucide-chevron-right' : 'i-lucide-chevron-left'" />
            <h2 class="text-4xl font-bold text-white whitespace-pre-line">
                {{ title }}
            </h2>
            <p class="text-white/80 text-md whitespace-pre-line">
                {{ description }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">

const { t, locale } = useI18n()
const Dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))

defineProps<{
    breadcrumbItems: {
        label: string
        to: string
        disabled?: boolean
    }[],
    imageUrl: string,
    alt: string,
    title: string,
    description: string,
}>()

</script>