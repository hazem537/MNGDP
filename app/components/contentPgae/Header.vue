<template>
    <div class="w-full h-[380px] relative flex items-center justify-between  p-20">

        <div class=" z-10 flex flex-col gap-6">
            <UBreadcrumb :items="breadcrumbItems" class="text-black" :ui="{
                link: 'text-black',
            }" :separatorIcon="Dir === 'ltr' ? 'i-lucide-chevron-right' : 'i-lucide-chevron-left'" />
            <h2 class="text-4xl font-bold text-black whitespace-pre-line">
                {{ title }}
            </h2>
            <p class="text-sm text-black  font-md flex items-center   gap-1 ">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50">
                <img :src="calenderIcon" class="w-4 h-4" />
            </div>
            <span>
                نشرت في 16-4-2025
            </span>
            </p>
            <!-- <p class="text-white/80 text-md whitespace-pre-line">
                {{ description }}
            </p> -->
        </div>
        <div class="w-[300px] bg-[#F3FCF6] flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
            <p class="text-md text-primary-sa-flag font-bold">
                مشاركة الصفحة
            </p>

            <div class="flex items-center gap-3">
                <UButton color="primary" size="md" icon="i-simple-icons-whatsapp"
                    class="text-lg rounded-md bg-secondary-green! text-white" />
                <UButton color="primary" size="md" icon="i-simple-icons-facebook"
                    class="text-lg rounded-md bg-secondary-green! text-white" />
                <UButton color="primary" size="md" icon="i-simple-icons-linkedin"
                    class="text-lg rounded-md bg-secondary-green! text-white" />
                <UButton color="primary" size="md" icon="i-simple-icons-x"
                    class="text-lg rounded-md bg-secondary-green! text-white" />
            </div>
        </div>
    </div>
    <div class="border-t border-[#D2D6DB] mx-20 py-3">

    </div>
</template>
<script setup lang="ts">
import calenderIcon from '~/assets/icons/calender.svg'
const { t, locale } = useI18n()
const Dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
const title = "مجالات التدريب والتطوير المعتمدة في مركز \nبناء القدرات"
const breadcrumbItems = [
    {
        label: 'الرئيسية',
        to: '/',
    },
    {
        label: 'أخبار التحول',
        to: '/transformation-news',
        disabled: true,
    },
    {
        label: ' ألاخبار والمستجدات',
        to: '/transformation-news/latest-news',
        disabled: false,
    },
    {
        label: 'صفحة المحتوى',
        to: '/transformation-news/content-page',
        class: 'text-[#9DA4AE]',
        disabled: true,

    },
]


</script>