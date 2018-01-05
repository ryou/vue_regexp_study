<template>
  <v-container>
    <v-card class="mb-3" v-if="explanation !== null">
      <v-card-text>
        <div
          class="Markdown"
          v-html="explanation"></div>
      </v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>{{ quiz.question }}</v-card-title>
      <v-divider></v-divider>
      <v-card-title>
        <v-list subheader>
          <v-subheader>対象文字列</v-subheader>
          <v-list-tile
            v-for="(sample, index) in quiz.samples"
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
            v-for="(result, index) in quiz.results"
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
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>

    <v-dialog persistent v-model="isAnswered" max-width="500px">
      <v-card>
        <v-card-title>
          <div class="title">正解</div>
        </v-card-title>
        <v-card-title>
          <v-list subheader>
            <v-subheader>回答例</v-subheader>
            <v-list-tile
              v-for="(example, index) in quiz.examples"
              :key="index"
            >
              <v-list-tile-content>
                <v-list-tile-title><code>{{ example }}</code></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-title>
        <v-card-actions>
          <v-btn
            :to="{
              name: 'list',
              params: {
                category: $route.params.category,
              },
            }"
            flat
          >
            問題一覧
          </v-btn>
          <v-btn
            v-if="hasNextQuestion"
            :to="{
              name: 'question',
              params: {
                category: $route.params.category,
                id: (Number($route.params.id) + 1),
              },
            }"
            flat
          >
            次の問題
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      :timeout="4000"
      color="error"
      v-model="showErrorToast"
    >
      不正解
      <v-btn dark flat @click.native="showErrorToast = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script src="./script.js"></script>

<style scoped>
.Markdown {
}
</style>
