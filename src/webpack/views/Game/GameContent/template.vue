<template>
  <div>
    <v-card class="mb-3">
      <v-card-title>{{ question.question }}</v-card-title>
      <v-divider></v-divider>
      <v-card-title>
        <v-list subheader>
          <v-subheader>対象文字列</v-subheader>
          <v-list-tile
            v-for="(sample, index) in question.samples"
            :key="index"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ sample }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-title>
        <v-list subheader>
          <v-subheader>抽出文字列</v-subheader>
          <v-list-tile
            v-for="(result, index) in question.results"
            :key="index"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ result }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-title>
    </v-card>

    <v-card>
      <v-card-text>
        <v-form @submit.prevent="testRegExp">
          <v-text-field
            label="解答（Enterで確定）"
            v-model="inputValue"
            autofocus
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./script.js"></script>
