<template>
  <v-container grid-list-md>
    <v-layout class="mb-3">
      <v-flex offset-xs6 xs3>
        <v-card class="text-xs-center">
          <v-card-text>残り</v-card-text>
          <v-card-text>
            {{ quizList.length + 1 }}問
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="text-xs-center">
          <v-card-text>TIME</v-card-text>
          <v-card-text>
            {{ time | parseInt }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <transition name="slideleft" mode="out-in">
      <component
        :is="currentView"
        @correct="correct"
        @incorrect="incorrect"
      ></component>
    </transition>

    <v-dialog persistent v-model="isGameOver" max-width="500px">
      <v-card>
        <v-card-title>
          <div class="title">終了</div>
        </v-card-title>
        <v-card-text>
          {{ time | parseInt }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat>リトライ</v-btn>
          <v-btn :to="{ name: 'top' }" flat>トップ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      :timeout="4000"
      color="success"
      v-model="showSuccessToast"
    >
      正解
      <v-btn dark flat @click.native="showSuccessToast = false">Close</v-btn>
    </v-snackbar>
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
.slideleft-enter-active, .slideleft-leave-active {
  transition: transform .3s, opacity .3s;
}
.slideleft-leave {
  transform: translateX(0);
  opacity: 1;
}
.slideleft-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
.slideleft-enter {
  transform: translateX(50%);
  opacity: 0;
}
.slideleft-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
