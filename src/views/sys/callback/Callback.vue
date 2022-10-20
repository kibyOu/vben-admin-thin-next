<template>
  <div class="callback-container"></div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router';
  import { useUserStore } from '/@/store/modules/user';

  export default {
    name: 'Callback',
    setup() {
      const router = useRouter();
      const userStore = useUserStore();

      if (router.currentRoute.value.path.startsWith('/access_token')) {
        // 获取URL中?之后的字符
        let str = router.currentRoute.value.path;
        str = str.substring(1, str.length);

        // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
        let arr = str.split('&');
        let param = new Object();

        // 将每一个数组元素以=分隔并赋给param对象
        for (let i = 0; i < arr.length; i++) {
          let tmp_arr = arr[i].split('=');
          param[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
        }

        let token = param['access_token'];
        if (token) {
          userStore.setToken(token);
        }
      }
      //window.close()
      router.push('/');
    },
  };
</script>
