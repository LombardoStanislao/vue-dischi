// fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.
// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music



var app = new Vue({
    el: '#root',

        data: {
            albumArray: [],

        },

        methods: {

        },

        mounted() {

                axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {

                    this.albumArray = response.data.response;

                    console.log(response.data.response);
                })

        }

});
