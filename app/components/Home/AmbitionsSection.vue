<template>
    <div class="flex flex-col bg-gray-50 p-20 w-full h-full gap-8">
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-meduim ">طموحات البرنامج</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  ">طموحات ترسم ملامح المستقبل​</h2>
        </div>

        <UCarousel
            v-slot="{ item }"
            :items="ambitionItems"
            :dir="carouselDir"
            class="w-full"
            :ui="{
                item: 'flex-none snap-start basis-full sm:basis-1/2 md:basis-[360px]',
                container: 'gap-4  rtl:flex-row-reverse',
                dots : ' -bottom-10 absolute     rtl:justify-end ltr:justify-start ',
                arrows: '-bottom-10  absolute rtl:right-10 ltr:right-10 -translate-x-1/2 ',
                prev:'disabled disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500  bg-secondary-green ',
                next:'disabled disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500  bg-secondary-green ',



            }"
            :prev-icon="carouselDir === 'ltr' ? 'i-iconoir-nav-arrow-left' : 'i-iconoir-nav-arrow-right'"
            :prev="{size:'xl' , color:'primary' , variant:'solid' }"
            :next-icon="carouselDir === 'ltr' ? 'i-iconoir-nav-arrow-right' : 'i-iconoir-nav-arrow-left'"
            :next="{size:'xl' , color:'primary' , variant:'solid' }"

            loop
            arrows
            dots
            
        >
            <div class="flex flex-col w-full  md:w-[360px] p-4 gap-6 bg-white border border-gray-200 rounded-lg shrink-0">
                <img :src="item.image" :alt="item.alt" class="h-[250px] w-full object-cover rounded-md">
                <h3 class="whitespace-pre-line text-right font-bold text-lg">
                  {{ item.title }}
                </h3>
            </div>
        </UCarousel>
    </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const carouselDir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))


import ambition1 from '~/assets/images/ambtion-image.jpg'
import ambition2 from '~/assets/images/ambtion-image-2.jpg'
import ambition3 from '~/assets/images/ambtion-image-3.jpg'
import ambition4 from '~/assets/images/ambtion-image-4.jpg'


const ambitionItems = [
    { image: ambition4, alt: 'ambition-image', title: 'العمل على تقديم مستوى عالٍ من الخدمات \nالصحية لكافة منسوبي الوزارة.​' },
    { image: ambition3, alt: 'ambition-image', title: 'التــوجــيــه الأكفـأ للـمـوارد \nوتــعــزيـــز القــدرات.​ ' },
    { image: ambition2, alt: 'ambition-image', title: 'دعم وتعزيز القدرات والقيادات \nداخل وزارة الحرس الوطني.​' },
    { image: ambition1, alt: 'ambition-image', title: 'رفــع الجــاهــزيــة\nالعــسـكـــريــة. '},
]
</script>