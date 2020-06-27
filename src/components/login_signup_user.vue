<template>
  <div>	
    <button style="display:none;" id="disp_log" type="button" class="btn btn-primary open-m" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div id="modal-box" class="modal-dialog modal-lg" role="document" style="max-width: 700px;">
        <div class="modal-content">
          <div class="modal-header" style="background-color:rgba(0,255,127,0.1); text-align: center;">
            <button type="button" class="close" data-dismiss="modal" style="outline: 0;display:none;">&times;</button>
            <h6 class="modal-title" style="font-family:Bahnschrift; font-weight: 400; color: rgb(46,139,87); ">Renting the room was never this much easy, let's rent a room. Sign up now.</h6>
          </div>
          <div class="modal-body" id="m-body">
            <div class="m-box1">
              <ul>
                <li><input id="f-name" style="width: 50%;border-bottom:0px;" type="text" name="" placeholder="First Name"><input id="l-name" style="width: 50%;border-bottom:0px;border-left:0px;"  type="text" name="" placeholder="Last Name"></li>
                <li><input type="text" id="user_email" name="" placeholder="Email"></li>
                <li><input id="pass" type="text" name="" placeholder="Phone Number" style="border-top: 0px;"></li>
                <li><input id="c-pass" type="password" name="" style="border-top:0px;" placeholder="Password"></li>
                <li><input type="text" placeholder="Enter OTP" id="otp"  style="border-top:0px;display: none;"></li>
                <li><div id="recaptcha-container" style="transform:scale(1.006);-webkit-perspective: 1000;display: inline-block;"></div></li>
                <li><button id="m-signIn" @click="registration()">Sign In</button><span id="logorsin" style="float: right; display: none; font-size:15px;"  @click="SignLog(key)">or, Sign Up</span></li>
                <li id="or" style="text-align: center;">or</li>
                <li id="google-btn" style="margin-left: 100px !important; margin-top: 20px; text-align: center !important; width: 100%;"><div class="g-signin2" data-onsuccess="onSignIn" style="width: 100%;"></div></li>
                <li id="forgetP"><h5 id="f-pass">Forgot Password?</h5></li>
                <li><h6 id="agree-line" style="font-size: 15px; font-family:Bahnschrift;text-align: center;"><a href="" style="text-align: center;" ><sup style="color:red;">*</sup> By signing up, you agree our terms & conditions</a></h6></li>
              </ul>
            </div>
            <div class="m-box2">
              <img src="../assets/pic.gif" alt="">
              <h6 id="terms" style="font-size: 12px; font-family: Helvetica;position: absolute;bottom:17px; float: left;"><input type="checkbox" checked disabled><a href="" title=""> By signing up, you agree our terms & conditions</a></h6>
            </div>
            <div class="m-box3" style="font-family: Bahnschrift; font-weight: 600;">
              <h2 id="m-head" style="font-size:32px;" >Sign In</h2>
            </div>
            <div class="m-box4" v-on:click="SignLog(key)" >
              <h5 id="que">Don't have account yet? <span style="color:#0000ff;" >Create new for free!</span></h5>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div v-show="loggedin" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
      <div>
        <router-link to="/user">
         <button id="goToDashboard" style="background:none;border:0;outline:0;margin-left:50px;"><i style="font-size:50px; color:blue;" class="fa fa-arrow-circle-right " aria-hidden="true"></i></button>
       </router-link>
     </div>
     <h6 style="margin-top:10px;margin:10px auto">Proceed to Dashboard</h6>
   </div>
     <router-link to="/"><i style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:50px;color:rgb(60, 183, 198);" class="fa fa-home" @click="reloadfun()" aria-hidden="true"></i></router-link>

 </div>
</template>

<script>
import db from '../firebase'
import firebase from 'firebase'
import store from '../vuex/store'
export default {
  data () {
    return {
      phoneNumberValidated: false,
      otpSent: false,
      recaptchaVerifier: {},
      confirmationResult: {},
      user: {},
      key: 0,
      loggedin: false,
      email:" ",
      phone:""
    }
  },
  created(){
    window.enrty_via_gmail = this.enrty_via_gmail; //expose this function to use on sucess logged in.
  },
  methods:{
    reloadfun(){
      location.reload();
    },
   async enrty_via_gmail(){ // login the user on gmail log in
    if(user_profile!=false){
      await db.collection('TempuserProfile').doc(user_profile.getId()).get().then((docSnapshot) => {
        if(docSnapshot.exists) {
          db.collection('registeredUser').doc(user_profile.getId()).get().then( res =>{
           if(res.exists && res.data().registered)
           {
              document.getElementsByClassName('close')[0].click(); //to close modal
              this.loggedin = true;
              this.$router.push('/user')
            }
            else{
              document.getElementsByClassName('close')[0].click(); //to close modal
               this.$router.push('/');
            }
          })
        }
        else{
          this.$router.push('/')
          console.log('redirecting')
            document.getElementsByClassName('close')[0].click(); //to close modal
            db.collection('TempuserProfile').doc(user_profile.getId()).set(
            {
              password: "sign in via gmail",
              phone: "sign via gmail",
              name: user_profile.getName(),
              image: user_profile.getImageUrl(),
              email: user_profile.getEmail()
            },
            {
              merge:true
            }
            )
            .catch(function (error) {
             console.log(error);
           })  
          }
        })

    }

  },
  registration(){
      //for new user to get register them
      let name = document.getElementById('f-name').value+" "+document.getElementById('l-name').value;
      let phone = document.getElementById('pass').value;
      let password = document.getElementById('c-pass').value;
      let email = document.getElementById('user_email').value;
      var regxPhone = /^[6-9][0-9]{9}$/;
      var regexEmail = /^([1-zA-Z0-1@.\s]{1,255})$/

      if(document.getElementById('user_email').style.display == 'block')
      {
        if(regxPhone.test(phone) && regexEmail.test(user_email) )
        {
          if(document.getElementById('otp').style.display == 'initial' && this.otpSent==true )
          {
            var code = document.getElementById("otp").value;
            this.confirmationResult.confirm(code).then((result)=>{
             
              //user verifed and sending data to firebase
              db.collection('TempuserProfile').doc(email+phone).set({
                email:email,
                password:password,
                phone:phone,
                name:name
              })

              
              // set data of user in vuex to use in user.vue
              store.commit({
                type: 'change',
                email: document.getElementById('user_email').value,
                phone: document.getElementById('pass').value
              })

              user_profile=false // no entry from gmail
              document.getElementsByClassName('close')[0].click();
              this.$router.push('/user')
              console.log('redirecting')

            }).catch(function (error) {
              console.log(error);
              alert("Invalid OTP")
              location.reload();
            });

            this.otpSent = false;
          }
          else
          {
            let phoneNumber = "+91"+phone;
            firebase.auth().signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
            .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    this.otpSent = true;
                    this.confirmationResult = confirmationResult;
                    document.getElementById('m-signIn').textContent ="Create Account";
                    document.getElementById('otp').style.display = 'initial'
                    document.getElementById('recaptcha-container').style.display = 'none';
                    document.getElementById("otp").focus();
                    document.getElementById("otp").style.border = '1px solid green';
                    this.confirmationResult = confirmationResult;
                  }).catch(function (error) {
                    console.log("Error");
                    console.log(error);
                    this.recaptchaVerifier("recaptcha-container");
                  });
                }

              }else
              alert('Phone no. or Email')
            }else
            this.verification(); // to verify login of already existing user
          },

          verification(){

         
            let phone = document.getElementById('pass').value;
            let password = document.getElementById('c-pass').value;
            var passcode;
            db.collection('TempuserProfile').where("phone", "==", phone).get().then(res =>{
              if(res.docs.length==0){
                  alert('user not exists')
                  return;
              }
              res.forEach((doc) => {
                if(doc.data().password == password){
                  document.getElementsByClassName('close')[0].click();
                  passcode = doc.data().password
                  // set email and phone to vuex 
                  store.commit({
                    type: 'change',
                    email: doc.data().email,
                    phone: doc.data().phone
                  })
                  user_profile=false;
                  this.$router.push('/user') 
                }
                else{
                  alert('Wrong Password')
                }
              }); 
            }).catch(err =>{
              console.log(err)
            })
          },


          //UI related stuff
          SignLog(key){
            if(key==0)
            { 
             this.key=1;
             document.getElementById('logorsin').textContent = "or, Sign In";
             document.getElementById('pass').style.borderTop = '0px'
             document.getElementById('user_email').style.display = 'block';
             document.getElementById('f-name').style.display = 'inline';
             document.getElementById('l-name').style.display = 'inline';
             document.getElementById('c-pass').style.display = 'block';
             document.getElementById('m-signIn').textContent ="Get OTP";
             document.getElementById('m-head').textContent = "Create Account";
             document.getElementById('f-pass').style.display = 'block';
             document.getElementById('c-pass').style.display = 'block';
             document.getElementById('terms').style.display = 'block';
             document.getElementById('recaptcha-container').style.display = 'block';
             document.getElementsByClassName('m-box1')[0].style.maxHeight = '510px';

             document.getElementById('que').innerHTML = `
             Already have an account? <span id="ask" style="color:#0000ff; cursor:pointer;">Sign In</span>
             `;
           }else{
            this.key=0;
            document.getElementById('logorsin').textContent = "or, Sign Up";
            document.getElementById('f-name').style.display = 'none';
            document.getElementById('l-name').style.display = 'none';
            document.getElementById('user_email').style.display = 'none';
            document.getElementById('m-signIn').textContent ="Sign In";
            document.getElementById('m-head').textContent = "Sign In";
            document.getElementById('f-pass').style.display = 'block';
            document.getElementById('c-pass').style.display = 'block';
            document.getElementById('terms').style.display = 'none';
            document.getElementById('pass').style.borderTop = '1px solid #ddd';
            document.getElementById('recaptcha-container').style.display = 'none'
            document.getElementsByClassName('m-box1')[0].style.maxHeight = '400px';

            document.getElementById('que').innerHTML = `

            Don't have account yet? <span id="ask" @click="SignLog(key)" style="color:#0000ff;cursor:pointer">Create new for free!</span>

            `;
          }
        }
      },

      mounted(){
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        this.recaptchaVerifier.render();
        document.getElementById('recaptcha-container').style.display = 'none'
        document.getElementsByClassName('m-box1')[0].style.maxHeight = '430px';
        this.SignLog(1) //to show sign in form in modal

        if (localStorage.getItem('reloaded')){
          if(user_profile==false){
            document.getElementById('disp_log').click(); // to show modal on reload
          }
          localStorage.removeItem('reloaded');

        } 
        else {
          // localStorage.clear();
          localStorage.setItem('reloaded', '1');
          location.reload();
        }


        if(user_profile!=false){
          this.signOut();  
        }


        // console.log(store.state.createAccount)
        if(store.state.createAccount){
          this.SignLog(0) // to show create account
        }


  }





}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=Montserrat");
@import url("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
.goToDashboard:active{
  transform:scale(0.9);
}
button:active{
  transition: all ease 0.2s;
  transform:scale(0.95);

}
#agree-line{
  display: none;
}


#m-body {
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 1fr;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  grid-column-gap: 20px; }

  .m-box2 {
    grid-row: 2/3;
    grid-column: 2/3;
    width: 100%; 
  }

  .m-box3 {
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    float: left;
    font-family: Bahnschrift; }

    .m-box4 {
      grid-row: 1/2;
      grid-column: 2/3;
      width: 100%;
      float: right;
      font-family: Bahnschrift;
      align-items: center;
      margin: auto 0; }

      .m-box1 {
        grid-row: 2/3;
        grid-column: 1/2;
        width: 100%;
        font-family: Bahnschrift;
      }

      .m-box1 ul {
        margin: 0;
        padding: 0; 
      }
      .m-box1 ul li {
        list-style: none; 
      }
      .m-box1 ul li input {
        height: 45px;
        padding-left: 20px;
        background-color: rgba(220, 220, 220, 0.2);
        outline: 0px;
        border: 1px solid #ddd;
        width: 100%;
      }
      .m-box1 ul li input[type="password"] {
        background-repeat: no-repeat;
        background-position: 100% 12px; 
      }
      .m-box1 ul li h5 {
        margin-top: 40px;
        text-align: center;
      }

      #m-signIn {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        border-radius: 20px;
        outline: 0;
        border: 0;
        background-color: royalblue;
        color: white;
        margin-bottom: 20px; 
      }


      @media (max-width: 480px) {
        #m-body {
          display: grid;
          grid-template-rows: 70px auto;
          grid-template-columns: 1fr;
          margin: 0px !important; }

          .m-box1 {
            grid-column: 1/-1; }

            .m-box3 {
              grid-column: 1/-1; }

              .m-box2 {
                display: none; }

                .m-box4 {
                  display: none; }

                  #modal-box {
                   position: absolute;
                   top:50%;
                   left:0%;
                   transform: translate(0%,-50%);
                   margin-top: 50px;
                 }

                 #logorsin {
                  display: block !important;
                  padding-top: 30px;
                  text-decoration: underline; }

                  #m-signIn {
                    width: 50%;
                    float: left;
                  }

                  #google-btn{
                   margin-top:20px !important; 
                   float: left;
                   margin-bottom: 10px !important;
                   text-align: center !important;
                 }
                 #or{
                  margin: 90px auto !important;
                  text-align: center !important;
                  margin-bottom: 0px !important;
                  float: left;

                }
                #forgetP{
                 margin: 190px auto !important;
                 margin-bottom: 0px;
                 text-align: center;
               }

               .m-box1{
                max-height: 510px;
              }

              #agree-line{
               display: block;
               position: absolute;
               bottom:10px; 
               font-size:13px!important;
               font-weight:400;
               text-align:center;
             }

           }

           </style>

