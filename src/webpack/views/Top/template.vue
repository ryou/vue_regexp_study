<template>
  <v-container>
    <div class="text-xs-center">
      <v-btn
        :to="{
          name: 'list',
          params: {
            category: 'match',
          },
        }"
        color="primary"
        large
      >
        マッチ
      </v-btn>
    </div>
    <div class="text-xs-center">
      <v-btn color="primary" large>置換</v-btn>
    </div>
  </v-container>
</template>

<script src="./script.js"></script>
