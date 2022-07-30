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
              </div>
              <div class="top_text_fill">
                <span>Enter new Password</span>
              </div>
              <div class="passwordNEW">
                <!-- <v-text-field v-model="password" :rules="nameRules" label="Enter New Password" required outlined>
                </v-text-field> -->
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                   :type="show1 ? 'text' : 'password'" name="input-10-1"
                  label="Enter New Password" counter outlined @click:append="show1 = !show1"></v-text-field>
              </div>
              <div class="passwords">
                <!-- <v-text-field v-model="password" :rules="nameRules" label="Re-Enter Password" required outlined>
                </v-text-field> -->

                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'" name="input-10-1"
                  label="Re-Enter Password" counter outlined @click:append="show1 = !show1"></v-text-field>
              </div>
              <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
                required>
              </v-checkbox> -->
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
import  {ResetPass}  from '@/services/UserService'
export default {
  name: 'ResetPass',
  data() {
    return {
      valid: true,
      show1: false,
      show2: true,
      password: 'Password',
      // rules: {
      //   required: value => !!value || 'Required.',
      //   // min: v => v.length >= 8 || 'Min 8 characters',
      //   emailMatch: () => (`The email and password you entered don't match`),
      // },
    }
  },

  methods: {
    validate() {
      console.log(this.password)
      // this.$refs.form.validate()
      console.log(this.$refs.form)
      let reqData = {
        password: this.password,
      }
      console.log(reqData)
      ResetPass(reqData).then((responce) => {
        console.log(responce);
      }).catch((error) => {
        console.log(error);
      })
    },
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
  color: red;
}
.Fundoo_logo{
  font-size     : 50px;
}
</style>