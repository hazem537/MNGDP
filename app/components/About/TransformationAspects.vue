<template>
    <div class="p-20 w-full flex flex-col items-center justify-center gap-8">
        <div class="flex flex-col items-center justify-center gap-2">
            <h3 class="font-medium text-lg "> جوانب التحول في وزارة الحرس الوطني</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  text-center leading-[40px] pb-2">
                رافعة تُعيد تشكيل التفكير، تُحفّز المبادرة، وتُسهم <br>في جعل الوزارة أكثر مرونة وابتكاراً


            </h2>
            <p class="text-center text-lg text-gray-500">
                يهدف برنامج تطوير وزارة الحرس الوطني إلى تحقيق نقلة نوعية في أدائها وتعزيز كفاءتها من خلال ثلاثة محاور
                استراتيجية، حيث نسعى لأن نكون أكثر جاهزية <br>وفاعلية في ظل التغيرات السريعة، ونركز على تحسين الأداء
                وصنع
                المستقبل بقرارات واعية وموارد بشرية مؤهلة، يعكس هذا التحول ثقافة عمل مسؤولة ومتميزة، <br> مما يمكّن
                الوزارة
                من تجاوز التحديات وتحقيق أثر وطني مستدام يتماشى مع تطلعات المملكة.
            </p>
        </div>
        <div class=" grid grid-cols-5 w-full gap-2 h-[360px] ">
            <div class="relative flex flex-col items-start justify-end" v-for="item in aspectItems"
                :key="item.title">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover absolute ">
                <div class="absolute inset-0  bg-black-overlay-top "></div>
                <div class="z-10 flex flex-col  gap-4 p-6">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <img :src="item.icon" :alt="item.title" class="w-6 h-6 ">
                    </div>
                    <h2 class="text-xl font-semibold text-white whitespace-pre-line ">
                        {{ item.title }}
                    </h2>
                </div>
            </div>



        </div>

    </div>

</template>
<script setup lang="ts">

import aspect1 from '~/assets/images/AboutAspect/aspect-1.jpg'
import aspect2 from '~/assets/images/AboutAspect/aspect-2.jpg'
import aspect3 from '~/assets/images/AboutAspect/aspect-3.jpg'
import aspect4 from '~/assets/images/AboutAspect/aspect-4.jpg'
import aspect5 from '~/assets/images/AboutAspect/aspect-5.jpg'

import compProgIcon from '~/assets/icons/AboutAspect/comp-prog.svg'
import compSettingIcon from '~/assets/icons/AboutAspect/comp-sett.svg'
import policeCapIcon from '~/assets/icons/AboutAspect/police-cap.svg'
import userIcon from '~/assets/icons/AboutAspect/user.svg'
import tradeUpIcon from '~/assets/icons/AboutAspect/trade-up.svg'

const { t } = useI18n()
const aspectItems = [
    {
        image: aspect1,
        title: 'التطوير  \nالتنظيمي',
        icon: compSettingIcon,
    },
    {
        image: aspect2,
        title: 'التنظيم العسكر \n يوجاهزية القوات',
        icon: policeCapIcon,
    },
    {
        image: aspect3,
        title: 'تنمية القدرات \n البشرية',
        icon: userIcon,
    },
    {
        image: aspect4,
        title: 'تحسين البنية التحتية  \nوجودة الأعمال',
        icon: tradeUpIcon,
    },
    {
        image: aspect5,
        title: 'التحول  \nالرقمي',
        icon: compProgIcon,
    },
]
</script>