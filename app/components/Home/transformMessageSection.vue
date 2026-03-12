<template>
    <div class="flex flex-col bg-gray-50 p-20 w-full h-full gap-8">
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-meduim ">رسائل التحول</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  whitespace-pre-line  ">تُنقل الرؤية بوضوح وتوحّد الجهود  <br> نحو تحقيق أهداف

                التحوّل</h2>
        </div>


            <UCarousel
                v-slot="{ item }"
                :items="transformSlides"
                orientation="vertical"
                :autoplay="{ delay: 3000 }"
                loop
                :ui="{
                    container: 'h-[400px] w-full  ',
                    item: 'w-full',
                }"
                class="h-[400px] w-full "
            >
                <div class="w-full h-[380px] relative flex items-center justify-start ps-20 rounded-[16px]">
                    <img :src="item.image" :alt="item.alt" class="w-full h-full object-cover absolute top-0 left-0 rounded-[16px]">
                    <div class="absolute inset-0 rounded-[16px] z-5 pointer-events-none bg-black-overlay" />
                    <h2 class="text-4xl font-bold text-white whitespace-pre-line z-10">
                        {{ item.title }}
                    </h2>
                </div>
            </UCarousel>

    </div>
</template>

<script setup lang="ts">
import transImage1 from '~/assets/images/trans-image-1.jpg'
import transImage2 from '~/assets/images/trans-image-2.jpg'
import transImage3 from '~/assets/images/trans-image-3.jpg'

const { t ,locale } = useI18n()
const Dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
const transformSlides = [
    { image: transImage1, alt: 'trans-image-1', title: 'الموائمة لتحقيق  \n مستهدفات رؤية 2030​' },
    { image: transImage2, alt: 'trans-image-2', title: 'وقاية لحياة أفضل' },
    { image: transImage3, alt: 'trans-image-3', title: 'الحرس قوة وتميز' }
]
</script>