<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    {{ isLoggedIn }}
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
};
</script>

<style>
</style>


<!-- ClientID: e6a7b0f3c6b5548
Client Secret: 203693001550b389ea6613f4617b6e610058af2b -->
