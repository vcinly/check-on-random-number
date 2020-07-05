<template>
  <div class="table-container">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title"><md-button @click="start" class="md-raised md-primary">Restart</md-button></h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head class="text-center">ID</md-table-head>
        <md-table-head class="text-center">Number</md-table-head>
        <md-table-head class="text-center">Input</md-table-head>
        <md-table-head class="text-center">Verify</md-table-head>
        <md-table-head style="min-width:350px">Answer</md-table-head>
      </md-table-row>


      <md-table-row v-for="l in list" :key="l.num">
        <md-table-cell >{{ l.id }}</md-table-cell>
        <md-table-cell>{{l.num}}</md-table-cell>
        <md-table-cell>
          <md-field md-inline>
            <label></label>
            <md-input v-model="l.input" @blur="verifyNum(l)" @keyup.enter="verifyNum(l)"></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell><md-icon :class="l.color">{{l.verify}}</md-icon></md-table-cell>
        <md-table-cell class="text-left">
          <div v-if="l.view" class="answer">{{l.answer}}</div>
          <div v-else @click="l.view=true"><md-icon>help_outline</md-icon></div>
          </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { randomList, RomanNumber, IntegerToFrFr } from "../utils/util"

export default {
  name: 'France',
  props: {
    msg: String
  },
  mounted () {
    this.start()
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    start() {
      this.list = []
      let numberList = randomList()
      numberList.sort((a, b) => a - b).forEach((x,i) => {
        this.list.push({
          id: RomanNumber[i],
          num: x,
          input: "",
          verify: "remove",
          view: false,
          answer: IntegerToFrFr(x)
        })
      })
    },
    verifyNum(l) {
      console.log(l)
      if (l.input =="") {
        return
      }
      if (l.input == l.answer) {
        l.verify = "done_all"
        l.color = "md-primary"
      } else {
        l.verify = "block"
        l.color = "md-accent"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  margin: 30px;
}
.md-title {
  text-align: left;
}
.md-field {
    min-height: 2px;
    margin: 4px 0 8px;
    padding-top: 0;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.answer {
    font-size: 16px;
    font-weight: bold;
}

</style>
