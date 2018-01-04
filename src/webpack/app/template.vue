<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-btn icon @click="historyBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <transition :name="transitionName" mode="out-in">
        <!--
        vue-routerは、同一コンポーネントへの遷移の場合はコンポーネントを再利用する
        再利用されてしまうと、コンポーネントの各プロパティが引き継がれたり、
        transitionが適用されなかったりと色々面倒。
        keyにfullPathを割り当てたら解決するが、当然パフォーマンスに影響がある可能性。
        悪影響が起こる可能性を認識しつつ、keyを割り当てておく。
        http://kimulla.hatenablog.com/entry/2017/12/24/003639
        -->
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script src="./script.js"></script>
<style lang="scss" src="../../../node_modules/vuetify/dist/vuetify.min.css"></style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


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


.slideright-enter-active, .slideright-leave-active {
  transition: transform .3s, opacity .3s;
}
.slideright-leave {
  transform: translateX(0);
  opacity: 1;
}
.slideright-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.slideright-enter {
  transform: translateX(-50%);
  opacity: 0;
}
.slideright-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
