<template>
  <v-list>
    <v-subheader>対象文字列</v-subheader>
    <template v-for="(question, index) in questions">
      <v-divider></v-divider>
      <v-list-tile
        :to="{
          name: 'question',
          params: {
            category: $route.params.category,
            id: index,
          },
        }"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ question.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script src="./script.js"></script>
