<template>
  <div>

    <nav v-show = "showbar" class="navbar navbar-expand-lg navbar-light sticky-top bg-light" style="padding-top:0px;">
      <div class="container">
        <a class="navbar-brand" href="/index.html">
          <img style="width:134px" src="../assets/roomlelologo.png" alt="">
        </a>
        <button class="btn btn-primary" >find home</button>
        <button class="navbar-toggler text-dark" type="button" style="display:inline !important;" v-on:click="showNav()">
          <span class="navbar-toggler-icon"></span>
        </button> 
      </div> 
    </nav>





    <div v-if = "renderNav" v-show = "show_nav" id="nav-menu" style="margin-top:0px; font-family:Montserrat; background:white; width:100%; padding-top:20px;">
      <ul style="margin:0;padding:0;padding-left:20px;padding-right:20px;">
        <li style="list-style:none;float:right;" @click="closeNav()"><i @click="closeNav()" class="fa fa-times" aria-hidden="true"></i></li><br>
        <li style="list-style:none;" @click="closeNav()"><router-link style="color:black;" to="/"><p>Home</p></router-link></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Scheduled Visits</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>About us</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Join our Family</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p><span style="font-size:16px;margin-right:10px;">Refer & Earn</span><button style="border:0;outline:0;background:red;font-size:12px;color:white;padding:1px;padding-bottom:0px;"> HURRY UP</button></p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Blog</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Roomlelo terms</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Privacy policy</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>FAQ</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For House Owner</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For Corporates</p></li>
        <li style="list-style:none;margin-top:30px;"><router-link style="color:black;" to="/login_signup_user"><button type="" style="font-family:Montserrat;border:1px solid black;padding-top:2px;padding-left:3px;padding-right:3px;height:35px;" v-on:click="goToLog()">CREATE ACCOUNT</button><button v-on:click="goToSign()" style="float:right;font-family:Montserrat;background:black;color:white;padding-top:2px;padding-left:3px;padding-right:3px;width:100px;height:35px;">LOG IN</button></router-link></li>
      </ul>

    </div>





    <div v-if = "renderNav" v-show = "shownav" id="navmenu" style="margin-top:0px; font-family:Montserrat; margin-bottom:50px; background:white; width:100%; padding-top:20px;min-height:630px;">
      <div v-on:click="showLinks()" style="width:100%;height:54px;background:rgb(60, 183, 198);position:relative;">
        <img v-bind:src="img" style="width:55px;height:55px;margin-top:0px;margin-left:20px;" alt="">
        <div style="position:absolute; top:10%;margin-left:100px;color:white;">
          <span style="font-size:15px;" > What's up {{ user_name}}</span>
          <br>
          <router-link to="/user" style="color:white;"><span id="viewProfile" >View Profile</span></router-link>  
        </div>

        <i @click="closeNav()" style="position:absolute; top:50%;left:90%;color:white;transform:translate(0,-50%)" class="fa fa-times" aria-hidden="true"></i>
      </div>

      <div v-if="showlinks" id="nav_links" style="background:rgb(60, 183, 198);padding:20px;color:white;font-family:Montserrat;margin-top:-2px">

        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
      </div>

      <ul style="margin:0;padding:0;padding-left:20px;padding-right:20px;">
        <br>
        <li style="list-style:none;" @click="closeNav()"><router-link style="color:black;" to="/"><p>Home</p></router-link></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Scheduled Visits</p></li>
        <li id="myDash" style="list-style:none;margin-top:14px;" ><router-link style="color:black;" to="/dashboard"><p>My Dashboard</p></router-link></li></li>
        <li id="serviceReq" style="list-style:none;margin-top:14px;" @click="closeNav()"><p>My Service Requests</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>About us</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Join our Family</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p><span style="font-size:16px;margin-right:10px;">Refer & Earn</span><button style="border:0;outline:0;background:red;font-size:12px;color:white;padding:1px;padding-bottom:0px;"> HURRY UP</button></p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Blog</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Roomlelo terms</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Privacy policy</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>FAQ</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For House Owner</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For Corporates</p></li>
        <li style="list-style:none;margin:30px;margin-left:200px;" @click="signOut()"><router-link style="color:black;" to="/"><button type="" style="font-family:Montserrat;background:black;color:white;padding-top:2px;padding-left:3px;padding-right:3px;width:100px;height:35px;">LOG OUT</button></router-link></li>
      </ul>

    </div>





  </div>

</template>

<script>
import firebase from 'firebase'
import store from '../vuex/store'
export default {
  data () {
    return {
      showbar:true,
      shownav:false,
      show_nav:false,
      uid:"",
      img:"",
      user_name:"",
      renderNav: true,
      showlinks:false
    }
  },
  methods:{
    goToLog(){
      // set data of login  in vuex to use in user.vue
      store.commit({
        type: 'createAcc',
        setVal: true
      })
    },
    goToSign(){
      // set data of login  in vuex to use in user.vue
      store.commit({
        type: 'createAcc',
        setVal: false
      })
    },
    showLinks(){
      this.showlinks = !this.showlinks;
    },
    showNav(){

      this.modifyNav();

      if(document.getElementById('homeComp')!=null)
        document.getElementById('homeComp').style.display = 'none'

      else if(document.getElementById('serachResult')!=null)
        document.getElementById('serachResult').style.display = 'none'

      else if(document.getElementById('propReg')!=null)
        document.getElementById('propReg').style.display = 'none'



      if(this.uid !== ""){
        this.shownav = true;
        this.showbar = false;
        var x = document.getElementById('navmenu');
        gsap.from(x,0.5,{opacity:0,ease:Power2.easeInOut,x:50})
      }
      else{
        this.show_nav = true;
        this.showbar = false;
        var x = document.getElementById('nav-menu');
        gsap.from(x,0.5,{opacity:0,ease:Power2.easeInOut,x:50})

      }



    },

    closeNav(){
      this.showbar = true;
      this.shownav = false;
      this.show_nav = false;

      if(document.getElementById('homeComp')!=null)
        document.getElementById('homeComp').style.display = 'block'

      else if(document.getElementById('serachResult')!=null)
        document.getElementById('serachResult').style.display = 'block'

      else if(document.getElementById('propReg')!=null)
        document.getElementById('propReg').style.display = 'block'

    },


    signOut() {
      if(user_profile != false){
       var auth2 = gapi.auth2.getAuthInstance();
       auth2.signOut().then(() => {
        console.log('User signed out.');
        user_profile = false;
              this.loggedin = false; //to hide link to dashboard
            })

     }
     
     localStorage.clear();
     location.reload();
     alert("Logged Out")
   },


   modifyNav(){
    if(user_profile != false){
      this.uid = user_profile.getId();
    }else{
      this.uid = store.state.email+store.state.phone;
    }

    if(user_profile != false ){  // if logged in via gmail
      firebase.firestore().collection('userProfile').doc(this.uid).get().then(res =>{

        this.img = res.data().image;
        var splitStr = user_profile.getName().toString().split(" ");
        this.user_name = splitStr[0]

        if(res.data().personal.photo != undefined){
          this.img = res.data().personal.photo // get user image 
          var splitStr = user_profile.getName().toString().split(" ");
          this.user_name = splitStr[0]      
        }
        else
        {
          this.img = res.data().image;
          var splitStr = user_profile.getName().toString().split(" ");
          this.user_name = splitStr[0]
        }

      }).catch(err =>{
        this.img = user_profile.getImageUrl();
        var splitStr = user_profile.getName().toString().split(" ");
        this.user_name = splitStr[0]
      })

    }
    else
    { 
      if(this.uid !=="" && this.uid !== null && this.uid !== undefined )
      {
       firebase.firestore().collection('userProfile').doc(this.uid).get().then(res =>{
        this.user_name = res.data().personal.name;
      }).catch(err =>{
       var splitStr = res.data().name.toString().split(" ");
       this.user_name = splitStr[0]
       this.img = "https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
     })

      firebase.storage().ref("userImage/"+this.uid).getDownloadURL().then(url =>{
        this.img = url;
      }).catch(err =>{
        this.img = "https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
      })

    }

  }

  if(this.uid !=="" && this.uid !== null && this.uid !== undefined || user_profile != false ){
   firebase.firestore().collection('registeredUser').doc(this.uid).get().then(res =>{

    if(res.data().registered){
      document.getElementById('myDash').style.display = 'initial';
      document.getElementById('serviceReq').style.display = 'initial';
      document.getElementById('viewProfile').style.display = 'initial';
    }else{

      document.getElementById('myDash').style.display = 'none';
      document.getElementById('serviceReq').style.display = 'none';
      document.getElementById('viewProfile').style.display = 'none';
    }
  }).catch(err =>{
    document.getElementById('myDash').style.display = 'none';
    document.getElementById('serviceReq').style.display = 'none';
    document.getElementById('viewProfile').style.display = 'none';
  });
}





this.renderNav = false;
this.renderNav = true;

}


},
mounted(){
  if(user_profile != false){
    this.uid = user_profile.getId();
  }else{
    this.uid = store.state.email+store.state.phone;
  }

  if(user_profile!=false || this.uid != "" )
  this.modifyNav();

  window.modifyNav = this.modifyNav;

},
created(){
   if(user_profile != false){
    this.uid = user_profile.getId();
  }else{
    this.uid = store.state.email+store.state.phone;
  }
}

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=Montserrat");
html, body {
  overflow-x:hidden 
}
</style>
