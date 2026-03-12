<template>
    <div class="relative">

        <UCarousel dir="ltr" v-slot="{ item }" class="h-full" dots loop :autoplay="{ delay: 2000 }" :items="slides">
            <div class=" relative  w-full h-[70vh]  ">

                <img :src="item.image" alt="Hero Background"
                    class="inset-0 object-cover absolute top-0 left-0 w-full h-full">

                <div class="bg-green-backdrop/70 absolute inset-0"></div>

                <!-- carousal dot -->
            </div>

        </UCarousel>
        <h1
            class="text-white text-[60px]  leading-[70px]     font-bold text-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {{ t('home.hero.title1') }}
            <br>
            {{ t('home.hero.title2') }}
        </h1>
    </div>


</template>
<script setup lang="ts">
import heroBg from '~/assets/images/hero-bg.jpg'
const { t ,getLocaleMessage} = useI18n()
const localeMessage = getLocaleMessage('ar')
console.log(localeMessage)
const slides = [
    {
        image: heroBg,
        alt: 'Hero 1',
        title: 'بالتطوير تُبنى القوة',
        subtitle: 'وبالقوة يُحقق التميّز'
    },
    {
        image: heroBg,
        alt: 'Hero 2',
        title: 'نص العنوان ٢',
        subtitle: 'نص العنوان الفرعي ٢'
    }
]
</script>