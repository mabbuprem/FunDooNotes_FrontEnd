<template>
    <div class="to_Center_Div">
        <div class="central_box">
            <div class="box_with_padding">
                <div class="Left_box">
                    <body>
                        <h1 class="center">Online Student Application</h1>
                        <form>
                            <div id="personal-details">
                                <h2 class="center">Personal-Details</h2>
                                <table width="50%">
                                    <div>
                                        <div class="flexbox">
                                            <div>First Name</div>
                                            <div>
                                                <input type="text" placeholder="First Name" size="25" >
                                            </div>
                                        </div>
                                        <div class="flexbox">
                                            <div>Middele Name</div>
                                            <div>
                                                <input type="text" placeholder="Middle Name" size="25">
                                            </div>
                                        </div>
                                        <div class="flexbox">
                                            <div>Last Name</div>
                                            <div>
                                                <input type="text" placeholder="Last Name" size="25">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flexbox">
                                            <div>Father's Name</div>
                                            <div>
                                                <input type="text" placeholder="Father's Name" size="25">
                                            </div>
                                        </div>
                                        <div class="flexbox">
                                            <div>Mother's Name</div>
                                            <div>
                                                <input type="text" placeholder="Mother's Name" size="25">
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="flexbox">
                                            <div>Date Of Birth</div>
                                            <div>
                                                <input type="text" placeholder="Data Of Birth" size="25">
                                            </div>
                                            <div>
                                                <div>Place Of Birth</div>
                                                <div>
                                                    <input type="text" placeholder="Place Of Birth" size="25">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flexbox">
                                            <div> Select Gender</div>
                                            <div>
                                                <input type="radio" name="gender" value="feale">Male
                                                <input type="radio" name="gender" value="feale">Female
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flexbox">
                                        <div>ContactDetails</div>
                                        <div>
                                            <div>MobileNumber</div>
                                            <div>
                                                <input type="number" placeholder="7876379***" size="25">
                                            </div>
                                            <div>EmailId</div>
                                            <div>
                                                <input type="text" placeholder="your id@gmail.com" size="25">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flexbox"></div>
                                            <div>Lnaguage Know</div>
                                            <div>
                                                <input type="checkbox" value="telugu">Telugu
                                            </div>
                                            <div>
                                                <input type="checkbox" value="english">English
                                            </div>
                                            <div>
                                                <input type="checkbox" value="tamil">Tamil
                                            </div>
                                            <div>
                                                <input type="checkbox" value="hindi">Hindi
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flexbox"></div>
                                            <div> Your Mother Tongue</div>
                                            <div>
                                                <select>
                                                    <option value="teludu">Telugu</option>
                                                    <option value="english">English</option>
                                                    <option value="tamil">Tamil</option>
                                                    <option value="hindi">Hindi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flexbox"></div>
                                            <div>Aadhar Number</div>
                                            <div>
                                                <input type="number" placeholder="24325466****" size="25">
                                            </div>
                                            <div>Pan CardNumber</div>
                                            <div>
                                                <input type="text" placeholder="DIJSHS***" size="25">
                                            </div>
                                        </div>
                                    </div>
                                </table>
                            </div>
                            <div id="personal-details">
                                <h2 align="center">Address-Details</h2>
                                <h3>A) Personal-Details</h3>
                                <table width="100%">
                                    <div>
                                        <div class="flexbox">
                                            <div>Nationality</div>
                                            <div>
                                                <input type="radio" name="gender" value="indian">indian
                                            </div>
                                            <div>
                                                <input type="radio" name="gender" value="other">Other
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flexbox">
                                        <div>State</div>
                                        <div>
                                            <input type="text" size="25">
                                        </div>
                                    </div>
                                </table>
                            </div>
                        </form>
                    </body>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ApplicationUI',
    data() {
        return {
            // dialog: false,
        }
    },
}
</script>
<style scoped>
.center{
    padding-right: 0px;
    justify-content: space-around;
    display: flex;
}
.first_last_name {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    /* padding: 6px 8px; */
}

.passwords {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.email {
    width: 100%;
    height: 30%;
}

.A {
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.p {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.p {
    color: yellow;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.l {
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.i {
    color: green;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.c {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.a {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.t {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.i {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.o {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.o {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.Fundoo_logo {
    padding-bottom: 5px;
    padding-left: 200px;
    padding-top: 5px;
    /* height: 10px; */
    width: 100px;
    font-size: 25px;
}

.create_tag {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.9999;
    padding-top: 1px;
    width: 230px;
}

.imageandpara {
    /* width: 100px;
  height: 350px;
  padding-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  left:40px; */


    left: 42%;
    width: 1px;
    height: 40%;
    top: 10%;
    margin-top: 10%;
    margin-left: 10%;
}

.button_signin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.to_Center_Div {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 70px;
}

.central_box {
    width: 650px;
    height: 1500px;
    padding: 48px 40px 36px 40px;
    margin: 0;
    border-style: solid;
    border-width: 1px;
    border-color: #9a9a9c;
    border-radius: 5px;
    box-sizing: content-box;
}

.box_with_padding {
    display: flex;
}

.Left_box {
    width: 354px;
    height: 425px;

}

.botton {
    left: 10px;
    right: 10px;
    padding-left: 350px;
    padding-top: -10px;
    margin-top: -10%;
    /* background-color: blue; */

}

.space {
    left: -100px;
    right: 100px;
    /* padding-left: 350px; */
    padding-top: 270px;
}

.para {
    /* border: 2px solid yellow; */

    left: 50%;
    bottom: 50%;
    font-size: 16px;
    font-weight: 300;
    margin-left: 15%;

}

.latters {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    position: relative;
    top: 50%;
    left: 6%;
    margin-top: -5%;
    margin-right: 10%;
    padding-top: 12%;
}

.use {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    position: relative;
    top: 50%;
    left: 6%;
    margin-top: -50%;
    margin-right: 10%;
    padding-top: 12%;
}

body 
{
    margin: 0;
    height: 100%;
}
.header 
{
    padding: 15px 0;
    background-color: #ffffff;
}
.header-content 
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;   
}
.logo-content 
{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}
.logo-content-img { border: solid 0px #42515f;}

.emp-text 
{
    font: normal  bold 20px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}
.emp-payroll { color: #42515f; }

* { box-sizing: border-box; }


/* uc2 */

.form-content {
   
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {
    width: 65%;
    padding: 44px 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #000029;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
    opacity: 1;
}

.form-head {
    font: normal normal bold 24px/3px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
    text-align: center;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

.label {
    min-width: 100px;
}

label {
   padding: 12px 12px 12px 0;
 
}
.text{
    font-size: 16px;
    color: #42515f;
    opacity: 1;
    font-family: Roboto;
}
.input{
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    resize: vertical;   
    border: none;
    border-bottom: 2px solid black;
}
input:focus , textarea:focus{
    background-color:bisque;
  }
/* uc3 */

.profile-radio-content 
{
    display: flex;
    flex-direction: row;
    margin-left: 35px;
}

.profile-radio-content > label 
{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile 
{
    width: 50px;
    border-radius: 50%;
    margin-left: 12px;
}
/* UC5 */
select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font: normal normal normal 16px Roboto;
    color: #42515f;
  }

    /* UC6 */
.buttonParent {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .button {
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 15px;
    cursor: pointer;
    margin: 5px;
  }
  

  .submitButton {
    border: none;
    background-color:brown;
    margin-right: 30px;
  }
  
  .cancelButton {
   /* margin-left: 140px; */
    text-decoration: none;
    text-align: center;
  }
  .formerror {
    color: red; 
}
error-output {
  margin-left: 10px;
  font-size: 12px;
  font-style: italic;
  color: red;
}

date-error {
  margin-left: 10px;
  font-size: 12px;
  font-style: italic;
  color: red;
}

   /* UC7 */
   @media only screen and (max-width: 960px) {
    .row-content {
        display: block;
        flex-direction: row;
        margin-bottom: 10px;
        align-items: center;
        border: 0px solid green;
    }
    .profile 
    {
    width: 30px;
    border-radius: 50%;
    margin-left: 12px;
    }
    .cancelButton {
      margin-left: 100px;
    }
    .form {
      width: 100%;
      padding: 44px 20px;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .row-content {
        display: block;
        flex-direction: row;
        margin-bottom: 10px;
        align-items: center;
        border: 0px solid green;
    }
    .form {
      margin-top: 10px;
      width: 100%;
    }
    .row {
      flex-direction: column;
    }
    .uploadButton {
      justify-content: flex-start;
    }
    .profile 
    {
    width: 30px;
    border-radius: 50%;
    margin-left: 12px;
    }
    .profile-radio-button {
      flex-flow: wrap;
    }
    .submit-reset {
      width: 100%;
      display: inline-block;
      flex-grow: 1;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .submitButton {
      margin: 0;
    }
    .buttonParent {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .cancelButton {
        margin-left: 100px;
      }
  }
</style>
