<template>
  <div flex>
    <div bg-gray-100 m-auto flex>
      <input
        bg-transparent
        w-10
        v-model="count"
        type="number"
        class="border-transparent"
      />
      <button bg-transparent @click="add" class="border-transparent">
        <div class="i-carbon-add"></div>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { count, add } = $(useCountStore());
</script>
