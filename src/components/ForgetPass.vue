<template>
  <div class="main_center_div">
    <div class="central_box">
      <div class="class_with_padding">
        <div class="center_first_three">
          <v-form>
            <v-col ref="form" v-model="valid" lazy-validation>
              <div class="Fundoo_logo">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
                <h4>Forget Password</h4>
              </div>
              <div>
                <span>Enter your Email or phone number or recovery email</span>
              </div>
              <div class="email">
                <v-text-field v-model="email" :rules="emailRules" label="Email or phone"
                  hint="you can use letters& numbers and perid" required outlined></v-text-field>
              </div>
              <div class="button">

                <v-btn :disabled="!valid" color="indigo" class="mr-4" @click="validate">
                  Next
                </v-btn>
              </div>
            </v-col>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {forgetPass} from '@/services/UserService'
export default {
  name: 'ForgetPass',
  data: () => ({
    valid: true,
    email: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    checkbox: false,
  }),

  methods: {
    validate() {
      console.log(this.email)
      // this.$refs.form.validate()
      let reqData = {
        email: this.email,
      }
      console.log(reqData)
      forgetPass(reqData).then((responce) => {
        console.log(responce);
      }).catch((error) => {
        console.log(error);
      })
    },
    // reset() {
    //   this.$refs.form.reset()
    // },
    // resetValidation() {
    //   // this.$refs.form.resetValidation()
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.f {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

.u {
  color: red;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

.n {
  color: yellow;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

.d {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

.o {
  color: green;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

.oo {
  color: red;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center
}

body {
  background: #fff;
  direction: ltr;
  margin: 0;
  padding: 0;
  color: #212124;
}

.main_center_div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10%;
}

.central_box {
  width: 368px + 80px;
  height: 418px + 48px + 36px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #c2c2ca;
  border-radius: 8px;
  box-sizing: border-box;
}

.top_text_fill {
  width: 368px;
  height: 64px;
  padding-top: 16px;
  box-sizing: border-box;
}

.Adjustment {
  width: 366px !important;
  height: 22px !important;
  margin: 20px 0 20px 0 !important;
}

.center_first_three {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
}

.button {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  margin-top: 26px;
  margin-left: -8px;
}
</style>