<template>
    <div class="flex flex-col ">

        <PageHeader :imageUrl="item.image" :alt="item.alt" :title="item.title" :description="item.description"
            :breadcrumbItems="breadcrumbItems" />

        <LastUpdate />
        <IsPageUseful />
    </div>
</template>
<script setup lang="ts">
import PageHeader from '~/components/Global/PageHeader.vue';
import Header from '~/assets/images/visualIdentity/header.jpg'
import LastUpdate from '~/components/Global/LastUpdate.vue';
import IsPageUseful from '~/components/Global/IsPageUseful.vue';
const item = {
    image: Header,
    alt: 'about-header',
    title: ' الهوية البصرية للبرنامج',
    description: 'المحافظة على الهوية البصرية والنصية من خلال تطبيق الشعار المعتمد، والخطوط الرسمية، ولوحة الألوان المحددة؛ بما يضمن الاتساق ويعزز الحضور المؤسسي...',

}
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
        label: 'هوية البرنامج',
        to: '/transformation-news/visual-identity',

    },
]





</script>