//
// BONUS 2: Ordinare i dischi per anno di uscita.


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

                    function compare(a,b) {
                      if ( a.year < b.year ){
                        return -1;
                      }
                      if ( a.year > b.year ){
                        return 1;
                      }
                      return 0;
                    }

                    response.data.response.sort(compare)

                    this.albumArray = response.data.response;

                    console.log(response.data.response);

                    this.albumArray.forEach((currentElement, i) => {

                        if (!this.genres.includes(currentElement.genre)) {
                            this.genres.push(currentElement.genre);

                        }

                    });

                })
        },

  //       computed: {
  //           sortedArray: function() {
  //             function compare(a, b) {
  //               if (a.year < b.year)
  //                 return -1;
  //               if (a.year > b.year)
  //                 return 1;
  //               return 0;
  //             }
  //
  //     return this.albumArray.sort(compare);
  //
  //   }
  // }

});
