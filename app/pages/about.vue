<template>
    <div class="flex flex-col ">

        <PageHeader :imageUrl="item.image" :alt="item.alt" :title="item.title" :description="item.description" :breadcrumbItems="breadcrumbItems" />
        <AboutStrategicAxes />
        <AboutTransformationAspects />
        <AboutOrganizationalStructure />
        <AboutLastUpdate />
        <AboutIsPageUseful />
    </div>
</template>
<script setup lang="ts">
import PageHeader from '~/components/Global/PageHeader.vue';

import aboutHeader from '~/assets/images/about-header.jpg'
const item = {
    image: aboutHeader,
    alt: 'about-header',
    title: 'العمل بروح الفريق.. لتحقيق هدف واحد',
    description: 'تسليط الضوء على التوجهات الاستراتيجية للبرنامج بوصفه الممكّن لمسار تحول وزارة الحرس الوطني، وداعماً\n  لتحقيق مستهدفاتها بكفاءة واستدامة.',

}
const breadcrumbItems = [
    {
        label: 'الرئيسية',
        to: '/',
    },
    {
        label: 'عن البرنامج',
        to: '/about',
    },
]
</script>