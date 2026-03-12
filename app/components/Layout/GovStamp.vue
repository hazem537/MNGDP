<template>
  <div class=" text-black text-xs py-1.5 px-8  bg-neutral-100">
    <div class=" flex items-center gap-2 ">
      <img src="~/assets/images/gov-stamp.svg" alt="Gov Stamp" class="w-6 h-6">
      <div class="flex  gap-1 items-center">
        <span class=" font-semibold">{{ $t('stamp.title') }}</span>
        <UButton variant="ghost" size="xs" color="neutral" class=" flex items-center gap-1 px-0 text-primary-green">
          <span class=" font-semibold">{{ $t('stamp.verify') }}</span>
          <UIcon name="i-lucide-chevron-down" class="w-3 h-3" />
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
