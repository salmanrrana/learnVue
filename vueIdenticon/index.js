new Vue({
  el: '#app',
  data: {
    //Initialize our list of ingredients
    textInput: ''
  },
  computed: {
    //turn data into viewable values
    identicon: function() {
      return jdenticon.toSvg(this.textInput, 300);
    }
  },
  methods: {
    // use these functions to change data
    onInput: function(event) {
      this.textInput = event.target.value;
    }
  }
});

//can also have it like this where we create the template in the js file:
//majority of projects in the real workd will take this approach
//documentation will usually show the above
// new Vue({
//   el: '#app',
//   data: { //Initialize our list of ingredients
//     textInput: ''
//   },
//   computed: { //turn data into viewable values
//     identicon: function() {
//       return jdenticon.toSvg(this.textInput, 300);
//     }
//   },
//   methods: { // use these functions to change data
//     onInput: function(event) {
//       this.textInput = event.target.value;
//     }
//   },
//   template: `
//       <div>
//           <h3>My Identicon Generator</h3>
//
//           <div>
//              Input:
//              <input v-on:input="onInput" />
//           </div>
//
//           <div>
//             Output:
//            <div v-html="identicon"></div>
//           </div>
//       </div>
//     `
// })
