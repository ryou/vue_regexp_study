<template>
  <div class="Section">
    <div class="Section_title mb-2"><slot name="title"></slot></div>
    <v-card>
      <slot name="content"></slot>
    </v-card>
  </div>
</template>

<style scoped>
  .Section {

  }
  .Section_title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
</style>
