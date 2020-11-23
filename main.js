// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.



var app = new Vue({
    el: '#root',

        data: {
            albumArray: [],
            genres: [],
            genreChoise: 'All types',

        },

        methods: {

        },

        mounted() {

                axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {

                    this.albumArray = response.data.response;

                    console.log(response.data.response);

                    this.albumArray.forEach((currentElement, i) => {

                        if (!this.genres.includes(currentElement.genre)) {
                            this.genres.push(currentElement.genre);

                        }

                    });

                })
        }

});
