<template>
  <div class="login-container"></div>
</template>

<script lang="ts">
  import { baseURL, clientId } from '/@/config';

  export default {
    name: 'Login',
    setup() {
      const redirecturi = `${window.location.protocol}//${window.location.host}`;
      window.location.href = `${baseURL}/oauth/oauth/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirecturi}`;
    },
  };
</script>
