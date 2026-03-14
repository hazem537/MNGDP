<template>

    <div class="p-4 border border-neutral-200 rounded-lg bg-white w-[415px]  flex flex-col gap-4 ">
        <img :src="latestNewsImage" class="h-[250px] rounded-lg">
        <!-- <p class="px-[8px] py-[3px] text-xs font-medium rounded-md  w-fit
        " :class="type === 'text' ? Textclass : Videoclass">
            {{ type === 'text' ? 'عرض مقروء' : 'عرض مرئي' }}
        </p> -->

        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p class="text-sm text-gray-500">{{ description }}</p>
        <p class="text-sm text-primary-sa-flag  font-md flex items-center   gap-1 ">
            <img :src="calenderIcon" class="w-4 h-4" />
            <span>
                {{ date }}
            </span>
        </p>
        <div class="flex items-center gap-2">
            <!-- <UButton color="primary" size="sm" class="text-lg rounded-md   bg-secondary-green! text-white px-[16px] py-[8px]">
                {{ type === 'text' ? 'عرض الملف' : 'عرض الفيديو' }}
            </UButton> -->
            <!-- <UButton v-if="type === 'text'" color="secondary" variant="outline" size="sm" class="text-lg rounded-md  border border-secondary-green text-secondary-green px-[16px] py-[8px]">
                تحميل
            </UButton> -->

            <!-- <img :src="ShareIcon" alt="share" class="w-7 h-7"> -->
            <UButton color="primary" size="sm" as="nuxt-link"
            to="/transformation-news/content-page"
                class="text-lg rounded-md   bg-secondary-green! text-white px-[16px] py-[8px]" label="قراءة المزيد" />
        </div>
    </div>
</template>
<script setup lang="ts">
import calenderIcon from '~/assets/icons/calender.svg'

defineProps<{
    title: string
    description: string
    date: string
    type: 'text' | 'video'
    link: string
}>()


import latestNewsImage from '~/assets/images/latestnews/latestnews.jpg'


</script>