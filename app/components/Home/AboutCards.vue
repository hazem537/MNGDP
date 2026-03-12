<template>
    <div class="grid grid-cols-2  mx-20 gap-10 bg-neutral-100 p-10 rounded-[40px]">

        <div class="bg-white p-10 flex flex-col gap-4  rounded-[24px]">
            <!-- icon -->
            <div class="bg-warning-bg-light rounded-full w-12 h-12 flex items-center justify-center ">
                <UIcon name="i-lucide-eye" class="w-5 h-5  bg-warning-text rounded-full   " />
            </div>
            <h2 class="font-bold text-2xl text-black"> {{ t('home.about.vision') }}</h2>
            <p class="text-gray-700 text-[12px] font-medium "> {{ t('home.about.visionDescription') }}</p>
        </div>

        <div class="bg-white p-10 flex flex-col  gap-4  rounded-[24px]">
            <!-- icon -->
            <div class="bg-warning-bg-light rounded-full w-12 h-12 flex items-center justify-center ">
                <img :src="commentIcon" alt="comment-icon" class="w-5 h-5   rounded-full   " />
            </div>
            <h2 class="font-bold text-2xl text-black"> {{ t('home.about.message') }}</h2>
            <p class="text-gray-700 text-[12px] font-medium "> {{ t('home.about.messageDescription') }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import commentIcon from '~/assets/icons/comment.svg'
const {t} =useI18n()
</script>
