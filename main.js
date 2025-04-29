new Vue({
    el: '#app',
    data: {
      nachricht: 'Hallo, Vue.js!'
    },
    methods: {
      aendereNachricht() {
        this.nachricht = 'Du hast mich geklickt!';
      }
    }
  });