<template>
  <div class="container">
    <nav>
      <div class="nav-container">
        <div class="nav-left">
        <img class="nav-left_logo" src="../pictures/globus-logo.png">
      <h3 class="nav-left_text">RCSA (Risk Control Self Assessment)</h3>
      </div>

      <div class="nav-right">
        <img class="user" src="../pictures/user.png" alt="">
        <p class="user-name">Dasola Awoye</p>
        <div class="boder-one"></div>
        <div class="border-two"></div>
        
        <img @click="$router.push('/')" class="log-out" src="../pictures/logout.png" alt="">

      </div>

      </div>
      
    </nav>
    
    <div class="progress">
      <div class="progress-first-stage">
        <div class="first-stage">
          <img class="check-first-stage" src="../pictures/check.png">
          <div class="progress-bar_first"></div>
        </div>
        
        <p class="progress-bar_active">Unit Information</p>
      </div>
      <div class="progress-first-stage progress-second-stage">
        <div class="second-stage">
          <div class="progress-bar_second"></div>
          
        </div>
        
        <p class="progress-bar_inactive">Activity & Process breakdown</p>
      </div>
      <div class="progress-first-stage">
        <div class="third-stage">
          
        </div>
        <span class="progress-bar_third"></span>
        <p class="progress-bar_inactive progress-bar-inactive_sub">Summary</p>
      </div>
    </div>

    <div class="info">
      <div class="heading">
        <p class="info-text">Please provide your <span class="info-text_bold">Business segment</span>, unit, <span class="info-text_bold">Branch</span>, state the <span class="info-text_bold" >Sub-unit</span>  where the department is structured, 
          and also indicate the <span class="info-text_bold">resposibility</span> of persons in charge of the process/sub-process
        </p>
        <img class="info-logo" src="../pictures/info.png" >
      </div>

      <div class="info-input">      
      <div class="info-input-field">
        <div class="input-field_first">
          <label class="label-first"> Unit/Business Segment</label>
          <input @click="changeUnit" class="input-first" type="text" placeholder="Select your unit/Business segment" v-model="unit"> 
          <ul :class="displayRoleUnit ? 'role-unit' : 'role-unit role-unit-hide'">
            <li @click="selectUnit('Operations')">Operations</li>
            <li @click="selectUnit('Information Technology')">Information Technology</li>
            <li @click="selectUnit('Operational Risk')">Operational Risk</li>
            <li @click="selectUnit('Human Resources')">Human Resources</li>
            <li @click="selectUnit('Teasury')">Teasury</li>
            <li @click="selectUnit('Marketing')">Marketing</li>
            <li @click="selectUnit('Compliance')">Compliance</li>
            <li @click="selectUnit('Internal Control Unit')">Internal Control Unit</li>
            <li @click="selectUnit('Corporate Communications')">Corporate Communications</li>
          </ul>
          <img class="sort-arrow" src="../pictures/sort-arrow.png">
        </div>
      </div>

      <div class="">
        <div class="input-field_second">
          <label class="label-second"> Branch</label>
          <input type="text" class="input-second" @click="handleBranch" placeholder="Select Branch" v-model="branch">
          <ul :class="selectBranch ? 'branch-list': 'branch-list branch-list-hide'">
            <li @click="changeBranch('Apapa')" class="li">Apapa</li>
            <li @click="changeBranch('Lekki')" class="li">Lekki</li>
            <li @click="changeBranch('Jalingo')" class="li">Jalingo</li>
            <li @click="changeBranch('Benin')" class="li">Benin</li>
            <li @click="changeBranch('Ikeja')" class="li">Ikeja</li>
            <li @click="changeBranch('Ikoyi')" class="li">Ikoyi</li>
          </ul>
          <img class="sort-arrow-second" src="../pictures/sort-arrow.png">
        </div>
      </div>

      <div class="">
        <div class="input-field_third">
          <label class="label-third" >Sub Unit</label>
          <input type="text" class="input-third" v-model="subUnit" >
        </div>
      </div>

      <div class="">
        <div class="input-field_fourth">
          <label class="label-fourth" >Responsible</label>
          <input type="text" class="input-fourth" v-model="responsible" >

        </div>
      </div>

      <div class="">
        <div class="input-field_fifth">
          <label class="label-fifth" > Reviewer(This field represent your Supervisor)</label>
          <input type="text" class="input-fifth" v-model="reviewer" >

        </div>
      </div>

      <div class="">
        <div class="input-field_sixth">
          <label class="label-sixth" >Reviewer's Supervisor</label>
          <input type="text" class="input-sixth" v-model="reviewerSuper" >

        </div>
      </div>
    </div>

    </div>

    <div class="footer-bar">
    </div>

    <div class="footer-button">
      <div>
        <img class="footer-button_icon" src="../pictures/capture.png" alt="">
        <a class="footer-button_back" @click="$router.push('/')" href="">  Back </a>
      </div>
      <div>
      <button class="footer-button_next"   @click="clicked()" >Next</button>
      </div>
    </div>
        
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
  export default {
    RouterLink,
    props: ['artist'],
    components: {
      UserInfo
    },
    data() {
        return {
            unit: "",
            branch: "",
            subUnit: "This the sub unit",
            // responsible: '',
            // reviewer: '',
            // reviewerSuper: '',
            displayRoleUnit: false,
            selectBranch: false
        };
    },
    methods: {
        changeUnit() {
            this.displayRoleUnit = true;
        },
        selectUnit(role_value) {
            this.unit = role_value;
            this.displayRoleUnit = false;
        },
        handleBranch() {
            this.selectBranch = true;
        },
        changeBranch(branch_role) {
            this.branch = branch_role;
            this.selectBranch = false;
        },
        clicked() {
            this.$router.push("/next");

        }
        // moveNext() {
        //   if(this.unit === '' || this.branch === '' || this.subUnit === '' || this.responsible === '' || this.reviewer === '' ) {
        //     console.log('this is correct')
        //   }
        // }
    }, 
}

</script>



<style scoped>

  *{
    margin: 0;
    padding: 0;
  }

  body{
    overflow: hidden;
  }



  .nav-container {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 2rem;
  }

  .nav-left {
    display: flex;
    width: 35rem;
  }

  .nav-left_logo {
    margin-top: 3px;
    height: 30px;
    width: 30px;

  }

  .role-unit-hide {
    display: none;
  }

  .branch-list-hide{
    display: none;
  }



  .nav-left_text {
    margin-left: 5px;
    margin-top: 8px;
  }

  .user-name {
    margin-top: 8px;
    margin-left: 4px;
    font-size: 12px;
  }

  .log-out{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-left: 1.5rem;
    cursor: pointer;
   
  }

  .nav-right {
    display:flex;
  
  }

  .boder-one{
    border-left: 2px solid #ECECEC;
    margin-left: 1rem;
    margin-top: 4px;
    height: 25px;
  }

  .border-two {
    border-left: 2px solid #ECECEC;
    margin-left: 5px;
    margin-top: 4px;
    height: 25px;
  }


  .user{
    height: 30px;
    width: 30px;
  }

  .progress {
    background-color: #E2ECF5;
    height: 7rem;
    display: flex;
    justify-content: space-around;
  }

  .progress-first-stage {
    margin-top: 2rem;
  }

  .progress-bar_active{
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  .progress-bar_inactive{
    font-size: 10px;
    color: #ADADAD;
  }

  .progress-bar-inactive_sub {
    margin-left: 25px;
  }

  .check-first-stage {
    margin-bottom: 2px;
    margin-left: 0;
    height: 9px;
    width: 9px;
  }

  .first-stage{
    background-color: #fff;
    border: 2px solid red;
    color: #fff;
    height: 15px;
    width: 15px;
    margin-bottom: 5px;
    margin-left: 30px;
    border-radius: 50%;
  }

 

  .second-stage {
    background-color: #E4E4E4;
    border: 2px solid #ADADAD;
    color: #fff;
    height: 15px; 
    width: 15px;
    margin-bottom: 10px;
    margin-left: 60px;
    border-radius: 50%;
  }

  .third-stage {
    background-color: #E4E4E4;
    border: 2px solid #ADADAD;
    color: #fff;
    height: 15px;
    width: 15px;
    margin-bottom: 15px;
    margin-left: 40px;
    border-radius: 50%;
  }

  .progress-bar_first{
    position: relative;
    top: -12px;
    left:  17px;
    width: 27.9rem;
    border-top: 3px solid #ADADAD;
  }

  .progress-bar_second {
    position: relative;
    top: 6px;
    left:  17px;
    width: 28.2rem;
    border-top: 3px solid #ADADAD;
    
  }

  .info {
    background-color: #fff;
    height: 52vh;
    width: 43rem;
    margin: 20px auto;
    border-radius: 4px;
    border: 1px solid #ECECEC;
  }

  .heading{
    background-color: #E2ECF5;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    position: relative;
    top: 5px;
    margin-left: 5px;
    margin-right: 5px; 
    padding: 25px 0; 
    border-radius: 4px;
  }


  .info-text{
    margin-top: 5px;
    margin-left: 20px;
    text-align: justify;
    line-height: 1.5;
    width: 29rem;
  }

  .info-logo {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }

  .info-text_bold {
    font-weight: bolder;
  }

  .info-input{
    display: flex;
    flex-wrap: wrap;
    width: 40rem;
    margin: 40px auto;  
  }

  ul {
    position: absolute;
    background-color: #fff;
    width: 18.7rem;
    z-index: 999;
  
  }

 .role-unit li {
    list-style: none;
    border: 1px solid #003366;
    text-align: left;
    padding:10px 8px;
    margin-left: 8px;
    font-size: 9px;
    color: #003366;
    font-weight: bold;
  
    cursor: pointer;

  }

 .branch-list .li {
    list-style: none;
    border: 1px solid #003366;
    text-align: left;
    padding:10px 8px;
    margin-left: -14px;
    width: 17rem;
    color: #003366;
    background-color: #fff;
    font-size: 9px;
    font-weight: bold;
    cursor: pointer;
  }

  .branch-list-hide {
    display: none;
  }


  .label-first {
    position: relative;
    left: 25px;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;

  }

  .input-first {
    margin-left: -6.5rem;
    width: 17rem;
    height: 2rem;
    font-size: 9px;
    padding-top: 10px;
    padding-left: 1rem;
  }

  .input-first:focus {
    border-left: 4px solid #036;
  }

  .sort-arrow {
    position: relative;
    top: 0.2rem;
    left: -2.5rem;
    cursor: pointer;
  }

  input::placeholder {
    font-size: 9px;
  }

  .label-second {
    position: relative;
    left: 0.8rem;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  input{
    outline: none;
  }

  .input-second {
    border: 1px solid #ADADAD;
    margin-left: -3rem;
    width: 16.5rem;
    height: 2rem;
    font-size: 9px;
    padding-top: 10px;
    padding-left: 1.5rem;
  }

  .input-second:focus {
    border-left: 4px solid #036;
  }

  .sort-arrow-second {
    position: relative;
  
    left: -2.2rem;
  }

  .label-third {
    position: relative;
    left: 25px;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;

  } 

  .input-third  {
    margin-left: -35px;
    width: 17rem;
    height: 2rem;
    margin-top: 1.5rem;
    padding-top: 10px;
    padding-left: 1.2rem;
  }


  .label-fourth {
    position: relative;
    left: 2.7rem;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  .input-fourth {
    border: 1px solid #ADADAD;
    margin-left: -2.6rem;
    margin-top: 1.5rem;
    width: 16.5rem;
    height: 2rem;
    padding-top: 10px;
    padding-left: 1.6rem;
  }


  .label-fifth {
    position: relative;
    left: 25px;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;

  } 

  .input-fifth  {
    margin-left: -13.5rem;
    width: 17rem;
    height: 2rem;
    margin-top: 1.5rem;
    padding-top: 10px;
    padding-left: 1.1rem;
  }


  .label-sixth {

    position: relative;
    left: 2.7rem;
    top: -15px;
    font-size: 10px;
    font-weight: bolder;
    color: #003366;
  }

  .input-sixth {
    border: 1px solid #ADADAD;
    margin-left: -5.5rem;
    margin-top: 1.5rem;
    width: 16.5rem;
    height: 2rem;
    padding-top: 10px;
    padding-left: 1.6rem;
  }


  .footer-bar {
    border: 1px solid #ADADAD;
    width: 50rem;
    margin: 10px auto;

  }

  .footer-button {
    display: flex;
    justify-content: space-between;
  }
  .footer-button_back {
    font-size: 10px;
    text-decoration: underline;
    position: relative;
    left: 17rem;
  }

  .footer-button_next {
    font-size: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #FF0032;
    padding: 15px 30px;
    position: relative;
    right: 17.6rem;
    border: none;
    border-radius: 4px;
  }

  .footer-button_icon{
    position: relative;
    top: 5px;
    left: 17.2rem;
    transform: rotate(90deg);
  }


</style>
