<template>
    <div class="p-20 w-full flex flex-col items-center justify-center gap-10">
        <div class="flex flex-col items-center justify-center">
            <h3 class="font-medium text-lg "> {{ t('home.moral.title') }}</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag ">{{ t('home.moral.subtitle') }}</h2>
        </div>
        <div class=" grid grid-cols-3 w-full gap-20">
            <div class="flex flex-col items-center justify-center gap-4">
                <img :src="starIcon" alt="feature" class="w-14 h-14">
                <h2 class="text-2xl font-bold  ">{{ t('home.moral.value1') }}</h2>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <img :src="userIcon" alt="feature" class="w-14 h-14">
                <h2 class="text-2xl font-bold ">{{ t('home.moral.value2') }}</h2>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <!-- icon  -->
                <img :src="giveStarIcon" alt="feature" class="w-14 h-14">

                <h2 class="text-2xl font-bold ">{{ t('home.moral.value3') }}</h2>
            </div>


        </div>

    </div>

</template>
<script setup lang="ts">
import starIcon from '~/assets/icons/star.svg'
import userIcon from '~/assets/icons/user.svg'
import giveStarIcon from '~/assets/icons/give-star.svg'


const { t } = useI18n()
</script>