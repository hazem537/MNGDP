<template>

    <div class="p-4 border border-neutral-200 rounded-lg bg-white w-[308px]  flex flex-col gap-4 ">
        <img :src="type === 'text' ? devTextImage : devVideoImage" class="h-[250px] rounded-lg">
        <p class="px-[8px] py-[3px] text-xs font-medium rounded-md  w-fit
        " :class="type === 'text' ? Textclass : Videoclass">
            {{ type === 'text' ? 'عرض مقروء' : 'عرض مرئي' }}
        </p>
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p class="text-sm text-primary-sa-flag  font-md flex items-center   gap-1 " >
             <img :src="calenderIcon" class="w-4 h-4" />
             <span>
                 {{ date }}
             </span>
        </p>
        <div class="flex items-center gap-2">
            <UButton color="primary" size="sm" class="text-lg rounded-md   bg-secondary-green! text-white px-[16px] py-[8px]">
                {{ type === 'text' ? 'عرض الملف' : 'عرض الفيديو' }}
            </UButton>
            <UButton v-if="type === 'text'" color="secondary" variant="outline" size="sm" class="text-lg rounded-md  border border-secondary-green text-secondary-green px-[16px] py-[8px]">
                تحميل
            </UButton>

            <img :src="ShareIcon" alt="share" class="w-7 h-7">
        </div>
    </div>
</template>
<script setup lang="ts">
import calenderIcon from '~/assets/icons/calender.svg'
import ShareIcon from '~/assets/icons/share.svg'

defineProps<{

    title: string
    date: string
    type: 'text' | 'video'
    link: string
}>()

const Textclass = " bg-[#EFF8FF] border  border-[#B2DDFF] text-[#1849A9]"
const Videoclass = " text-[#93370D] border border-[#FEDF89]  bg-[#FFFAEB]"

import devTextImage from '~/assets/images/developmentOverview/dev-text.png'
import devVideoImage from '~/assets/images/developmentOverview/dev-video.png'


</script>