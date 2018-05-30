<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>


<!-- ClientID: e6a7b0f3c6b5548
Client Secret: 203693001550b389ea6613f4617b6e610058af2b -->
