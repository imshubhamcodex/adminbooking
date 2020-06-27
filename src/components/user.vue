<template>
	<div class="user_div_class" style="margin:0 auto;display:block;">
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" style="display:none;" id="data-uploaded" data-toggle="modal" data-target="#exampleModalCenter">
			Launch demo modal
		</button>

		<!-- Modal -->
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="width:80%;;margin:0 auto;" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h6 class="modal-title" id="exampleModalLongTitle">Status</h6>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<h6>Data Uploaded :)</h6>
					</div>
				</div>
			</div>
		</div>

		<button class="btn btn-info" @click="signOut()" style="text-align:center;margin:0 auto;display:block;margin-top:30px;">Sign out</button>
		<br>

		<p  style="margin:0 auto;display:block;text-align:center;font-weight:700;">Property ID</p>
		

		<div style="margin:0px auto; padding:20px;">

			<div id="nav_profile_details">
				<hr style="border-color:rgb(0,191,255); width:100%; margin-left:0;margin-bottom:10px; ">
				<h3 style="font-family:Montserrat; font-size:20px; font-weight:600;color:rgba(255,0,0,0.9);">Profile Details</h3>
				<hr style="border-color:rgb(0,191,255);width:100%; margin-left:0;margin-top:2px; ">

				<ul style="padding:0;margin:20px auto; width:100%;  display: flex; justify-content: space-between; font-weight:600;color:black;">
					<li style="list-style:none;  display: block;"><button class="navProfile-btn" id="personal-btn" v-on:click="showPersonal('nav')">personal</button></li>
					<li style="list-style:none;  display: block;"><button class="navProfile-btn"  id="professional-btn" v-on:click="showProfessional('nav')">professional</button></li>
					<li style="list-style:none;  display: block;"><button class="navProfile-btn"  id="contact-btn" v-on:click="showContact('nav')">contact</button></li>
					<li style="list-style:none;  display: block;"><button class="navProfile-btn"  id="bank-btn" v-on:click="showBank('nav')">bank</button></li>
				</ul>

			</div>


			<!-- form for personal details -->
			<form accept-charset="utf-8" style="margin-bottom:0px;" id="form-personal" onsubmit="return false">
				<p style="margin-top:20px;color:grey;">Profile Photo<sup style="color:red;">*</sup></p>
				<div id="u_image_div" style="display:block;text-align: center; margin:20px auto; ">
					<img v-bind:src="user" style="height:170px;width:170px;box-shadow: 3px 4px 0px rgba(0,0,0,0.2);margin:0 auto;display:block;"><br>
					<button type="button" class="addUserImage" title="Upload Image">
						<input required  type="file" id="userImage"  value="upload" style=" height: 30px; width:100%; border:0 !important;outline:0px; background:none; text-align:center; margin-top: 14px;padding-left: 5px;"/></button>
					</div>

					<ul style="margin:0;padding:0;">
						<li style="list-style:none; margin-bottom:30px;" title="Name">
							<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Name<sup style="color:red;">*</sup></h6>
							<input type="text" id="user-name"  placeholder="Enter full name" required style="width:100%;border:1px solid black;outline:0;height:35px;padding-left:5px;">
						</li>
						<li style="list-style:none; margin-bottom:30px;" title="Email">
							<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Email ID<sup style="color:red;">*</sup></h6>
							<input type="email" id="user-email"  placeholder="Enter valid email ID" required style="width:100%;border:1px solid black;outline:0;height:35px;padding-left:5px;">
						</li>
						<li style="list-style:none;margin-bottom:30px;" title="Mobile Number">
							<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Mobile no.<sup style="color:red;">*</sup></h6>
							<input type="number" id="user-mobile" placeholder="Enter 10 digit mobile number" required style="width:100%;border:1px solid black;outline:0;height:35px;padding-left:5px;">
						</li>
					</ul>
					<h6 title="Gender" style="color:grey;font-family:Montserrat;font-weight:700;">Gender<sup style="color:red;">*</sup></h6>
					<ul style="padding:0;margin:0 0; width:80%; display: flex; justify-content: space-between; font-weight:600;color:black;">

						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio" title="Male">
								<input type="radio" required value="Male"  class="custom-control-input" id="defaultGroupExample1" name="gender" checked>
								<label class="custom-control-label" for="defaultGroupExample1">Male</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio" title="Female">
								<input type="radio" value="Female" required class="custom-control-input" id="defaultGroupExample2" name="gender">
								<label class="custom-control-label" for="defaultGroupExample2">Female</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio" title="Other">
								<input type="radio" value="Other"  required class="custom-control-input" id="defaultGroupExample3" name="gender">
								<label class="custom-control-label" for="defaultGroupExample3">Other</label>
							</div>
						</li>
					</ul>

					<h6 title="Marital status" style="color:grey;font-family:Montserrat;font-weight:700;">Marital status<sup style="color:red;">*</sup></h6>
					<ul style="padding:0;margin:0 0; width:70%; display: flex; justify-content: space-between; font-weight:600;color:black;">
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio" title="Unmarried">
								<input type="radio" value="Unmarried"  required class="custom-control-input" id="defaultGroupExample4" name="status" checked>
								<label class="custom-control-label" for="defaultGroupExample4">Unmarried</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio" title="Married">
								<input type="radio" required value="Married" class="custom-control-input" id="defaultGroupExample5" name="status">
								<label class="custom-control-label" for="defaultGroupExample5">Married</label>
							</div>
						</li>
					</ul>
					<label for="birthday" style="font-size:15px;font-family:Montserrat;">We have a birthday present for you, but we don't know when to send that to you.Please share your birthday.<sup style="color:red;">*</sup></label>
					<div id="birthdate">
						<input id="birth-date"  type="date" required="required" title="DOB">
					</div>

					<div class="navigation"  style="font-size:30px;margin:0 auto; width:50px;">
						<button type="submit" v-on:click="showProfessional()"  class="addUserImage" ><i class="fa fa-chevron-circle-right"  aria-hidden="true"></i></button>
					</div>
				</form>


				<!-- form for professional details  -->
				<form id="form-professional" accept-charset="utf-8" style="margin-top:40px;margin-bottom:0px;" onsubmit="return false">
					<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Employment Status<sup style="color:red;">*</sup></h6>
					<ul style="padding:0;margin:0 0; width:100%; display: flex; justify-content: space-between; font-weight:400;color:black;">

						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="Student" class="custom-control-input" id="Example1" name="employee" checked>
								<label class="custom-control-label" for="Example1">Student</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="Employed" class="custom-control-input" id="Example2" name="employee">
								<label class="custom-control-label" for="Example2">Employed</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="Self Employed" class="custom-control-input" id="Example3" name="employee">
								<label class="custom-control-label" for="Example3">Self Employed</label>
							</div>
						</li>
					</ul>

					<h6 style="color:grey;font-family:Montserrat;font-weight:700;margin-top:15px;">Employer/Student name<sup style="color:red;">*</sup></h6>
					<input type="text" id="employer-name" required style="width:100%;padding-bottom:2px;padding-left:5px;border:1px solid black" placeholder="Enter name">
					<h6 style="margin-top:50px;color:grey;font-family:Montserrat;font-weight:700;">Highest education qualification<sup style="color:red;">*</sup></h6>
					<ul style="padding:0;margin:0 0; width:100%; display: flex; justify-content: space-between; font-weight:400;color:black;">

						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="10" class="custom-control-input" id="quali1" name="education" checked>
								<label class="custom-control-label" for="quali1">10 <sup>th</sup></label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="12" class="custom-control-input" id="quali2" name="education">
								<label class="custom-control-label" for="quali2">12 <sup>th</sup></label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="UG" class="custom-control-input" id="quali3" name="education">
								<label class="custom-control-label" for="quali3">UG</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="PG" class="custom-control-input" id="quali4" name="education">
								<label class="custom-control-label" for="quali4">PG</label>
							</div>
						</li>
						<li style="list-style:none;margin-bottom:30px;">
							<div class="custom-control custom-radio">
								<input type="radio" required value="Phd" class="custom-control-input" id="quali5" name="education">
								<label class="custom-control-label" for="quali5">Phd</label>
							</div>
						</li>
					</ul>
					<h6 style="margin-top:15px;color:grey;font-family:Montserrat;font-weight:700;">Mobile no.<sup style="color:red;">*</sup></h6>
					<input type="number" id="employer-mobile" required style="width:100%;height:35px;padding-left:5px;border:1px solid black;padding-bottom:2px;" placeholder="Enter mobile number" >
					<h6 style="margin-top:20px;color:grey;font-family:Montserrat;font-weight:700;">Office Email ID<sup style="color:red;">*</sup></h6>
					<input type="email" id="employer-email" required style="width:100%;height:35px;padding-left:5px;border:1px solid black" placeholder="Enter email ID" >
					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Professional proof (Employment/Student ID)</h6>
					<button type="button" id="attach-proof" style="width:100%;background-color:black; border:0;outline:0;color:white;height:40px;margin-bottom:20px;transition:all ease 0.1s;"><input required  type="file" id="fileName"  value="upload" style=" height: 30px; width:100%; border:0 !important;outline:0px; background:none; padding-top: 4px;padding-left: 5px;"/>Attach file</button>



					<div class="navigation"  style="font-size:30px;margin:40px auto; width:100%;">
						<ul style="padding:0;margin:0 auto; width:50%; display: flex; justify-content: space-between; font-weight:600;color:black;">
							<li style="list-style:none;"><button type="submit" v-on:click="showPersonal()"  class="addUserImage" ><i class="fa fa-chevron-circle-left"  aria-hidden="true"></i></button></li>

							<li style="list-style:none;"><button type="submit" v-on:click="showContact()"   class="addUserImage" ><i class="fa fa-chevron-circle-right"  aria-hidden="true"></i></button></li>
						</ul>
					</div>
				</form>



				<form id="form-contact" accept-charset="utf-8" style="margin-top:40px;margin-bottom:0px;" onsubmit="return false">

					<label style="color:grey;font-family:Montserrat;font-weight:700;">Please provide us the details of your emergency contact</label><br>
					<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Address<sup style="color:red;">*</sup></h6>
					<textarea id="emer-address" style="width:100%;height:100px;border:1px solid black;padding-left:5px;" placeholder="Lane R4 Jagmohan Nagar Vanarshi"></textarea>

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Mobile no.<sup style="color:red;">*</sup></h6>
					<input type="number" id="emer-phone" style="border:1px solid black;height:35px; width:100%;padding-left:5px;" placeholder="Enter Mobile number">

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Guardian's name<sup style="color:red;">*</sup></h6>
					<input type="text" id="emer-g-name" style="border:1px solid black;height:35px; width:100%;padding-left:5px;"  placeholder="Enter Guardian's name">

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Agreement<sup style="color:red;">*</sup></h6>
					<button type="button" id="attach-agreement" style="width:100%;background-color:black; border:0;outline:0;color:white;height:40px;margin-bottom:20px;transition:all ease 0.1s;"><input required  type="file" id="agreement"  value="upload" style=" height: 30px; width:100%; border:0 !important;outline:0px; background:none; padding-top: 4px;padding-left: 5px;"/>Attach file</button>



					<div class="navigation"  style="font-size:30px;margin:50px auto; width:100%;">
						<ul style="padding:0;margin:0 auto; width:50%; display: flex; justify-content: space-between; font-weight:600;color:black;">
							<li style="list-style:none;"><button type="submit" v-on:click="showProfessional()"  class="addUserImage" ><i class="fa fa-chevron-circle-left"  aria-hidden="true"></i></button></li>

							<li style="list-style:none;"><button type="submit" v-on:click="showBank()"   class="addUserImage" ><i class="fa fa-chevron-circle-right"  aria-hidden="true"></i></button></li>
						</ul>
					</div>

				</form>

				<form  id="form-bank" accept-charset="utf-8" style="margin-top:40px;margin-bottom:0px;" onsubmit="return false">
					<h6 style="color:grey;font-family:Montserrat;font-weight:700;">Account holder's name<sup style="color:red;">*</sup></h6>
					<input type="text" id="ac-name" style="border:1px solid black;height:35px; width:100%;padding-left:5px;" placeholder="Enter Account Holder's Name">

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Account no.<sup style="color:red;">*</sup></h6>
					<input type="number" id="ac-num" style="border:1px solid black;padding-bottom:2px; width:100%;padding-left:5px;" placeholder="Enter Account number">

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">IFSC code<sup style="color:red;">*</sup></h6>
					<input type="text" id="ifsc" style="border:1px solid black;height:35px; width:100%;padding-left:5px;"  placeholder="Enter IFSC code">

					<h6 style="margin-top:30px;color:grey;font-family:Montserrat;font-weight:700;">Branch name<sup style="color:red;">*</sup></h6>
					<input type="text" id="branch-name" style="border:1px solid black;height:35px; width:100%;padding-left:5px;"  placeholder="Enter Branch Name">



					<button type="button" id="submit-user-forms" @click="submit_user_forms" style="width:100%;background-color:black; border:0;outline:0;color:white;height:40px;margin-bottom:30px;margin-top:40px;transition:all ease 0.1s;font-family:Montserrat;">Submit</button>

					<div class="navigation"  style="font-size:30px;margin:0 auto; width:50px;">
						<button type="submit" v-on:click="showContact()"  class="addUserImage" ><i class="fa fa-chevron-circle-left"  aria-hidden="true"></i></button>
					</div>

				</form>


				<div style="width:100%;margin-bottom:10px;">
					<img src="~../assets/footjoe.png"  style="width:100%;" alt="">
				</div>

			</div>
		</div>
	</template>

	<script>
var proofDoc; // this is global variable use to refer proof doc
var user_new_img;
var agreementDoc // agreement doc
import store from '../vuex/store'
import doScrolling from "../js/smoothScrolling.js"
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
export default {
	data(){
		return{
			proofid: "UPID"+Math.random().toString(36).substring(7),
			imageid: "UIID"+Math.random().toString(36).substring(7),
			email:null,
			phone:null,
			user:"https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
		}
	},
	methods:{
		signOut(){
			if(user_profile!=false){
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(() => {
					console.log('User signed out.');
					user_profile=false;
              		this.loggedin = false; //to hide link to dashboard
              		this.$router.push('/')
              	})
			}else{
				localStorage.clear();
				this.$router.push('/')
				console.log("Logged Out")
			}
		},

		showPersonal(from){


			document.getElementById('personal-btn').style.border = '1px solid black';
			document.getElementById('personal-btn').style.fontWeight = '700';
			document.getElementById('professional-btn').style.border = '0';
			document.getElementById('contact-btn').style.border = '0';
			document.getElementById('bank-btn').style.border = '0';

			document.getElementById('form-professional').style.display = 'none';
			document.getElementById('form-contact').style.display = "none";
			document.getElementById('form-personal').style.display="block";
			document.getElementById('form-bank').style.display = 'none';

			document.getElementById('contact-btn').style.fontWeight = '400';
			document.getElementById('bank-btn').style.fontWeight = '400';
			document.getElementById('personal-btn').style.fontWeight = '700';
			document.getElementById('professional-btn').style.fontWeight = '400';

			
			gsap.from($("#form-personal"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
			doScrolling('#nav_profile_details',1000)

		},
		showProfessional(from){
			if(from==='nav'){
				document.getElementById('personal-btn').style.border = '0';
				document.getElementById('professional-btn').style.border = '1px solid black';
				document.getElementById('contact-btn').style.border = '0';
				document.getElementById('bank-btn').style.border = '0';

				document.getElementById('form-contact').style.display="none";
				document.getElementById('form-personal').style.display="none";
				document.getElementById('form-professional').style.display="block";
				document.getElementById('form-bank').style.display = 'none';

				document.getElementById('contact-btn').style.fontWeight = '400';
				document.getElementById('bank-btn').style.fontWeight = '400';
				document.getElementById('personal-btn').style.fontWeight = '400';
				document.getElementById('professional-btn').style.fontWeight = '700';

				gsap.from($("#form-professional"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
				doScrolling('#nav_profile_details',1000)
			}else{


				var regxPhone = /^[6-9][0-9]{9}$/;
				var regexEmail = /^([1-zA-Z0-1@.\s]{1,255})$/;

				if($("#user-name").val()!==""){
					if($("#user-mobile").val()!=="" && regxPhone.test($("#user-mobile").val())){
						if($("#user-email").val()!=="" && regexEmail.test($("#user-email"))){
							if($("#birth-date").val()!==""){
								document.getElementById('personal-btn').style.border = '0';
								document.getElementById('professional-btn').style.border = '1px solid black';
								document.getElementById('contact-btn').style.border = '0';
								document.getElementById('bank-btn').style.border = '0';

								document.getElementById('form-contact').style.display="none";
								document.getElementById('form-personal').style.display="none";
								document.getElementById('form-professional').style.display="block";
								document.getElementById('form-bank').style.display = 'none';

								document.getElementById('contact-btn').style.fontWeight = '400';
								document.getElementById('bank-btn').style.fontWeight = '400';
								document.getElementById('personal-btn').style.fontWeight = '400';
								document.getElementById('professional-btn').style.fontWeight = '700';

								gsap.from($("#form-professional"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
								doScrolling('#nav_profile_details',1000)
							}else{
								alert("Invalid DOB");
								return;
							}
						}else{
							alert("Invalid Email ID")
							return;
						}
					}else{
						alert("Invalid Mobile Number")
						return;
					}
				}
				else{
					alert("Invalid Name")
					return;
				}
			}

		},
		showContact(from){
			if(from==='nav'){
				document.getElementById('personal-btn').style.border = '0';
				document.getElementById('professional-btn').style.border = '0';
				document.getElementById('contact-btn').style.border = '1px solid black';
				document.getElementById('bank-btn').style.border = '0';

				document.getElementById('contact-btn').style.fontWeight = '700';
				document.getElementById('bank-btn').style.fontWeight = '400';
				document.getElementById('personal-btn').style.fontWeight = '400';
				document.getElementById('professional-btn').style.fontWeight = '400';


				document.getElementById('form-contact').style.display="block";
				document.getElementById('form-personal').style.display="none";
				document.getElementById('form-professional').style.display="none";
				document.getElementById('form-bank').style.display = 'none';

				gsap.from($("#form-contact"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
				doScrolling('#nav_profile_details',1000)
			}
			else{


				var regxPhone = /^[6-9][0-9]{9}$/;
				var regexEmail = /^([1-zA-Z0-1@.\s]{1,255})$/;

				if($("#employer-name").val()!==""){
					if($("#employer-mobile").val()!=="" && regxPhone.test($("#employer-mobile").val())){
						if($("#employer-email").val()!=="" && regexEmail.test($("#employer-email").val())){
							document.getElementById('personal-btn').style.border = '0';
							document.getElementById('professional-btn').style.border = '0';
							document.getElementById('contact-btn').style.border = '1px solid black';
							document.getElementById('bank-btn').style.border = '0';

							document.getElementById('contact-btn').style.fontWeight = '700';
							document.getElementById('bank-btn').style.fontWeight = '400';
							document.getElementById('personal-btn').style.fontWeight = '400';
							document.getElementById('professional-btn').style.fontWeight = '400';


							document.getElementById('form-contact').style.display="block";
							document.getElementById('form-personal').style.display="none";
							document.getElementById('form-professional').style.display="none";
							document.getElementById('form-bank').style.display = 'none';

							gsap.from($("#form-contact"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
							doScrolling('#nav_profile_details',1000)
						}
						else{
							alert("Invalid Email ID");
							return;
						}
					}else{
						alert("Invalid Phone Number");
						return;
					}
				}else{
					alert("Invalid Name");
					return;
				}
			} 
		},
		showBank(from){
			if(from==='nav'){
				document.getElementById('personal-btn').style.border = '0';
				document.getElementById('professional-btn').style.border = '0';
				document.getElementById('contact-btn').style.border = '0';
				document.getElementById('bank-btn').style.border = '1px solid black';

				document.getElementById('form-contact').style.display="none";
				document.getElementById('form-personal').style.display="none";
				document.getElementById('form-professional').style.display="none";
				document.getElementById('form-bank').style.display = 'block';

				document.getElementById('bank-btn').style.fontWeight = '700';
				document.getElementById('personal-btn').style.fontWeight = '400';
				document.getElementById('contact-btn').style.fontWeight = '400';
				document.getElementById('professional-btn').style.fontWeight = '400';

				gsap.from($("#form-bank"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
				doScrolling('#nav_profile_details',1000)



			}else{


				var regxPhone = /^[6-9][0-9]{9}$/;

				if($("#emer-address").val()!==""){
					if($("#emer-phone").val()!=="" && regxPhone.test($("#emer-phone").val())){
						if($("#emer-g-name").val()!==""){
							document.getElementById('personal-btn').style.border = '0';
							document.getElementById('professional-btn').style.border = '0';
							document.getElementById('contact-btn').style.border = '0';
							document.getElementById('bank-btn').style.border = '1px solid black';

							document.getElementById('form-contact').style.display="none";
							document.getElementById('form-personal').style.display="none";
							document.getElementById('form-professional').style.display="none";
							document.getElementById('form-bank').style.display = 'block';

							document.getElementById('bank-btn').style.fontWeight = '700';
							document.getElementById('personal-btn').style.fontWeight = '400';
							document.getElementById('contact-btn').style.fontWeight = '400';
							document.getElementById('professional-btn').style.fontWeight = '400';

							gsap.from($("#form-bank"),0.5,{ opacity:0, ease :Power2.easeInOut,x:-50 })
							doScrolling('#nav_profile_details',1000)
						}else{
							alert("Invalid Name");
							return;
						}
					}else{
						alert("Invalid Phone Number");
						return;
					}
				}else{
					alert("Invalid Address");
					return;
				}
			}

		},

		submit_user_forms(){
			var user_id;
			var user_photo;
			if(user_profile!=false){
				user_id = user_profile.getId();
				user_photo = user_profile.getImageUrl();

			}else{
				user_id = this.email + this.phone;
				user_photo = this.imageid;

				if(user_new_img === undefined){
					user_photo = "https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg";
				}
			}

			var gender;
			var status;
			var employment;
			var qualification;

			if($("#defaultGroupExample1").is(':checked'))
				gender="Male"
			if($("#defaultGroupExample2").is(':checked'))
				gender="Female"
			if($("#defaultGroupExample3").is(':checked'))
				gender="Other"

			if($("#defaultGroupExample4").is(':checked'))
				status="Unmarried";
			if($("#defaultGroupExample5").is(':checked'))
				status="Married";

			if($("#Example1").is(':checked'))
				employment="Student"
			if($("#Example2").is(':checked'))
				employment="Employed"
			if($("#Example3").is(':checked'))
				employment="Self Employed"

			if($("#quali1").is(':checked'))
				qualification="10th"
			if($("#quali2").is(':checked'))
				qualification="12th"
			if($("#quali3").is(':checked'))
				qualification="UG"
			if($("#quali4").is(':checked'))
				qualification="PG"
			if($("#quali5").is(':checked'))
				qualification="Phd"



			var personal = {
				name: $("#user-name").val(),
				mobile: $("#user-mobile").val(),
				email: $("#user-email").val(),
				DOB: $("#birth-date").val(),
				gender: gender,
				maritalStatus: status,
				photo:user_photo
			}

			var professional = {
				employment:employment,
				employerName:$("#employer-name").val(),
				officeMobile:$("#employer-mobile").val(),
				officeEmail:$("#employer-email").val(),
				qualification:qualification,
				proofID:this.proofid

			}

			var contact = {
				emergencyAddress:$("#emer-address").val(),
				emergencyMobile:$("#emer-phone").val(),
				emergencyGardian:$("#emer-g-name").val()
			}

			var bank = {
				accHolderName:$("#ac-name").val(),
				accNumber:$("#ac-num").val(),
				ifsc:$("#ifsc").val(),
				branchName:$("#branch-name").val()
			}





			var regxPhone = /^[6-9][0-9]{9}$/;
			var regexEmail = /^([1-zA-Z0-1@.\s]{1,255})$/;
			if($("#emer-address").val()!==""){
				if($("#emer-phone").val()!=="" && regxPhone.test($("#emer-phone").val())){
					if($("#emer-g-name").val()!==""){
						if($("#ac-name").val()!==""){
							if($("#ifsc").val()!=="" ){
								if($("#ac-num").val()!==""){
									if($("#branch-name").val()!==""){
										if($("#user-name").val()!==""){
											if($("#user-mobile").val()!=="" && regxPhone.test($("#user-mobile").val())){
												if($("#user-email").val()!=="" && regexEmail.test($("#user-email"))){
													if($("#birth-date").val()!==""){
														if($("#employer-name").val()!==""){
															if($("#employer-mobile").val()!=="" && regxPhone.test($("#employer-mobile").val())){
																if($("#employer-email").val()!=="" && regexEmail.test($("#employer-email").val())){

																	firebase.firestore().collection('userProfile').doc(user_id).set(
																	{

																		personal,
																		professional,
																		contact,
																		bank,
																		

																	},
																	{
																		merge: true
																	})

																	if(proofDoc != undefined && user_new_img != undefined && agreementDoc != undefined){
																		var task = firebase.storage().ref("userProof/"+this.proofid).put(proofDoc);
																		task.on('state_changed',function complete(){
																			var task1 = firebase.storage().ref("userImage/"+this.imageid).put(user_new_img)
																			task1.on('state_changed',function complete(){
																				var task2 = firebase.storage().ref("agreement/"+this.uid).put(agreementDoc);
																				task2.on('state_changed', function complete(){
																				document.getElementById('data-uploaded').click()
																				})
																			})
																			
																		})

																	}
																	else{

																		if(user_new_img != undefined)
																		{
																			var task = firebase.storage().ref("userImage/"+this.imageid).put(user_new_img);
																			task.on('state_changed', function complete(){
																				//document.getElementById('data-uploaded').click()
																			})
																		}
																		if(proofDoc != undefined){
																			var task = firebase.storage().ref("userProof/"+this.proofid).put(proofDoc);
																			task.on('state_changed', function complete(){
																				//document.getElementById('data-uploaded').click()
																			})
																		}

																		if( agreementDoc != undefined){
																			var task = firebase.storage().ref("agreement/"+this.uid).put(agreementDoc);
																			task.on('state_changed', function complete(){
																				//document.getElementById('data-uploaded').click()
																			})
																		}


																		setTimeout(function(){
																			document.getElementById('data-uploaded').click()
																		},5000)

																		
																		

																		
																	}

																}
																else{
																	alert("Invalid Email ID");
																	return;
																}
															}else{
																alert("Invalid Phone Number");
																return;
															}
														}else{
															alert("Invalid Name");
															return;
														}

													}else{
														alert("Invalid DOB");
														return;
													}
												}else{
													alert("Invalid Email ID")
													return;
												}
											}else{
												alert("Invalid Mobile Number")
												return;
											}
										}
										else{
											alert("Invalid Name")
											return;
										}


									}else{
										alert("Invalid Branch Name");
										return;
									}
								}
								else{
									alert("Invalid Account Number");
									return;
								}
							}else{
								alert("Invalid IFSC code");
								return;
							}
						}else{
							alert("Invalid Account Name");
							return;
						}
					}else{
						alert("Invalid emergency Guardian Name");
						return;
					}
				}else{
					alert("Invalid emergency  Phone Number");
					return;
				}
			}else{
				alert("Invalid emergency Address");
				return;
			}



			
		},



	},
	mounted(){
 	//to show Personal tab
 	document.getElementById('personal-btn').style.border = '1px solid black';
 	document.getElementById('form-professional').style.display = 'none';
 	document.getElementById('form-contact').style.display = 'none';
 	document.getElementById('form-bank').style.display = 'none';
 	document.getElementById('personal-btn').style.fontWeight = '700';

 	document.getElementById('fileName').addEventListener('change', function(e){
 		proofDoc = e.target.files[0]; // to attach proof file
 	});
 	document.getElementById('userImage').addEventListener('change', function(e){
 		user_new_img = e.target.files[0]; // to user photo
 	});
 	document.getElementById('agreement').addEventListener('change', function(e){
 		 agreementDoc = e.target.files[0]; // to agreement pdf
 		});



 	this.phone = store.state.phone // set email and phone to the users mail and phone from login_signup_user.vue
 	this.email = store.state.email


 	var uid;

 	if(user_profile!=false){
 		uid = user_profile.getId();
 	}else{
 		uid = this.email+this.phone;
 	}

 	firebase.firestore().collection('userProfile').doc(uid).get().then(res =>{

 		document.getElementById('user-name').value = res.data().name;
 		document.getElementById('user-email').value = res.data().email;

 		document.getElementById('user-name').value = res.data().personal.name;
 		document.getElementById('user-email').value = res.data().personal.email
 		document.getElementById('user-mobile').value = res.data().personal.mobile

 		if(res.data().personal.gender === 'Male' )
 			document.getElementById('defaultGroupExample1').checked=true;
 		if(res.data().personal.gender === 'Female' )
 			document.getElementById('defaultGroupExample2').checked=true;
 		if(res.data().personal.gender === 'Other' )
 			document.getElementById('defaultGroupExample3').checked=true;

 		if(res.data().personal.maritalStatus === "Unmarried" )
 			document.getElementById('defaultGroupExample4').checked=true;
 		if(res.data().personal.maritalStatus === "Married" )
 			document.getElementById('defaultGroupExample5').checked=true;

 		document.getElementById('birth-date').value = res.data().personal.DOB;

 		if(res.data().professional.employment === 'Student')
 			document.getElementById('Example1').checked = true;
 		if(res.data().professional.employment === 'Employed')
 			document.getElementById('Example2').checked = true;
 		if(res.data().professional.employment === 'Self Employed')
 			document.getElementById('Example3').checked = true;

 		document.getElementById('employer-name').value = res.data().professional.employerName;

 		if(res.data().professional.qualification==="10th")
 			document.getElementById('quali1').checked = true;
 		if(res.data().professional.qualification==="12th")
 			document.getElementById('quali2').checked = true;
 		if(res.data().professional.qualification==="UG")
 			document.getElementById('quali3').checked = true;
 		if(res.data().professional.qualification==="PG")
 			document.getElementById('quali4').checked = true;
 		if(res.data().professional.qualification==="Phd")
 			document.getElementById('quali5').checked = true;

 		document.getElementById('employer-mobile').value = res.data().professional.officeMobile
 		document.getElementById('employer-email').value = res.data().professional.officeEmail

 		document.getElementById('emer-address').value = res.data().contact.emergencyAddress
 		document.getElementById('emer-phone').value = res.data().contact.emergencyMobile
 		document.getElementById('emer-g-name').value = res.data().contact.emergencyGardian

 		document.getElementById('ac-name').value = res.data().bank.accHolderName
 		document.getElementById('ac-num').value = res.data().bank.accNumber
 		document.getElementById('branch-name').value = res.data().bank.branchName
 		document.getElementById('ifsc').value = res.data().bank.ifsc;

 	}).catch(err =>{
 		console.log(err);
 	})


 	if(user_profile!=false){
	//ui stuff to hide chose image button
	document.getElementById("u_image_div").style.marginBottom = '-10px'
	document.getElementById("userImage").style.display = 'none';

	this.imageid = user_profile.getId()
	this.proofid = user_profile.getId()
	firebase.firestore().collection('userProfile').doc(user_profile.getId()).get().then(res =>{
		this.user = res.data().image;
	}).catch(err =>{
		console.log(err);
	})

}else{
	this.imageid = store.state.email+store.state.phone
	this.proofid = store.state.email+store.state.phone
	var uid = store.state.email+store.state.phone;
	firebase.storage().ref("userImage/"+uid).getDownloadURL().then(url =>{ 
		this.user = url;
	}).catch(err =>{
		this.user = "https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
	})
}

if(window.innerWidth > 480){
	document.getElementsByClassName('user_div_class')[0].style.width = '60%'
}



},
created(){
	if(store.state.phone !=null){
		this.phone = store.state.phone // set email and phone to the users mail and phone from login_signup_user.vue
		this.email = store.state.email
	}
	
}



}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#back_user_btn:active{
	transform:scale(1.02);
	border:0;
	outline:0;
}
.addUserImage{
	background:none;
	border:0;
	outline:0;
	transition:all ease 0.2s;
}
.addUserImage:active{
	transform:scale(0.95);
	border:0;
	outline:0;
}
.addUserImage:focus{
	border:0;
	outline:0;
}
.navProfile-btn{
	background:none;
	border:0;
	outline:0;
	padding-bottom:2px;
}
.navProfile-btn:active{
	border:1px solid black;
	outline:0;
}
input{
	height:40px !important;
}

input:focus{
	border:1px solid grey !important;
	outline:0;
}
input[type="date"] {
	font-family: Montserrat;
	font-size: 18px;
	border:1px solid #ecf0f1;
	background:#ecf0f1;
	padding:5px;
	margin:20px auto;
	width:180px;
	color:	rgb(0,191,255);
	background-color:white;
}
#birthdate{
	margin:0 auto;
	width:180px;
}
#attach-proof:active{
	transform:scale(0.98);
}
#submit-user-forms:active{
	transform:scale(0.99);
}


</style>