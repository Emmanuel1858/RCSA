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
        
      
      
      <div class="progress">
        <div class="progress-first-stage">
          <div class="first-stage">
            
            <div class="progress-bar_first"></div>
          </div>
          
          <p class="progress-bar_active">Unit Information</p>
        </div>
        <div class="progress-first-stage progress-second-stage">
          <div class="second-stage">
            <img class="check-second-stage" src="../pictures/check.png">
            <div class="progress-bar_second"></div>
            
          </div>
          
          <p class="progress-bar_active">Activity & Process breakdown</p>
        </div>
        <div class="progress-first-stage">
          <div class="third-stage">
            
          </div>
          <span class="progress-bar_third"></span>
          <p class="progress-bar_inactive progress-bar-inactive_sub">Summary</p>
        </div>
      </div>
    </nav>
      <div class="info">
        <div class="heading">
            <div>
          <p class="info-heading">Your response should provide a true and fair reflection of the state of risk and controls within your unit/function</p>
            <p class="info-text">List the "Activities" that are undertaken your unit, the breakdown of, 
            operational risks associated with the sub-process, indicate the likelihood, impact & severity of occurrence. 
            You should also List all the key controls, the effectiveness of the control and so on.
          </p>    
            </div>
             <div>
                <img class="info-logo" src="../pictures/info.png" >
            </div>
        </div>
  
        <div class="info-input">      
        <div class="info-input-field">
          <div class="input-field_first">
            <label class="label-first"> Activity</label>
            
            <input  class="input-first" type="text" placeholder="Enter an activity undertaken by your unit" v-model="unit"> 
          </div>
        </div>
  
        <div class="">
          <div class="input-field_second">
            <label class="label-second"> Process</label>
            <input type="text" class="input-second" placeholder="List the process pertaining to a particular activity" v-model="branch">
          </div>
        </div>
  
        <div class="">
          <div class="input-field_third">
            <label class="label-third" >Sub Process</label>
            <input type="text" class="input-third" v-model="subUnit" placeholder="List the sub-process under each process" >
          </div>
        </div>
  
        <div class="">
          <div class="input-field_fourth">
            <label class="label-fourth" >Responsibility</label>
            <input type="text" class="input-fourth" v-model="responsible" placeholder="Indicate the designation of persons in charge of the process/sub-process">
  
          </div>
        </div>
  
        <div class="">
          <div class="input-field_fifth">
            <label class="label-fifth" > Potential Risk</label>
            <!-- <input type="text" class="input-fifth" v-model="reviewer" > -->
            <textarea class="textarea" placeholder="What are the potential issues, i.e 'operational risks' associated with the sub-process "></textarea>

            <div class="info-risk">
                <div class="info-risk-first">
                    <label class="label-risk-first" >Likelihood of occurrence</label>
                    <input class="input-risk-first" placeholder="indicate the likelihood of occurence">
                </div>
                <div class="info-risk-second">
                    <label class="label-risk-second">Risk Impact</label>
                    <input class="input-risk-second" placeholder="indicate the impact/severity of risk if it occurs" >
                </div>
                <div class="info-risk-third">
                    <label class="label-risk-third">Risk level</label>
                    <input class="input-risk-third">
                </div>
                <div class="info-risk-fourth">
                    <label class="label-risk-fourth">Causal Factor</label>
                    <input class="input-risk-fourth" placeholder="Select the appropraite Causal Factor for the risk">
                </div>
            </div>

            <div class="big-input">
                <div>
                    <label class="labelFirst-BI">Details of Causal Factor</label>
                    <textarea class="inputFirst-BI" placeholder="This allows for details on casual factor"></textarea>
                </div>

                <div>
                    <label class="labelSecond-BI">Key control</label>
                    <textarea class="inputSecond-BI" placeholder="List all the key controls that are currently in place to monitor the risk "></textarea>
                </div>

            </div>
            <div class="inputFields-lastSection" >
                <div class="lastSection">
                    <label class="lastSection-labelFirst">Is the control in use?</label> <span class="span">indicate if control is currently in use/active</span>
                    <div class="checkbox">
                        <div class="chec">
                            <input type="checkbox">Yes
                        </div>
                    <div>
                        <input type="checkbox">No
                    </div>
                    
                    </div>

                </div>
                <div>
                    <label class="lastSection-labelSecond">Effectiveness of Control</label>
                    <input type="text" class="lastSection-inputSecond" placeholder="Indicate how effective the control is by selecting from the list">
                </div>
                <div>
                    <label class="lastSection-labelThird">Inherent Risk</label>
                    <input type="text" class="lastSection-inputThird" placeholder="No of times test is carried out ">
                </div>
                <div>
                    <label class="lastSection-labelFourth"> Residual Risk</label>
                    <input type="text" class="lastSection-inputFourth" placeholder="Select the Risk level in line with the risk rating given">
                </div>
                <div>
                    <label class="lastSection-labelFifth">Test Frequency</label>
                    <input type="text" class="lastSection-inputFifth"  placeholder="No of times test is carried out">
                </div>
                <div>
                    <label class="lastSection-labelSixth">Test Methodology </label>
                    <input type="text" class="lastSection-inputSixth" placeholder="indicate the samples used for testing the controls ">
                </div>
               </div>

                <div>
                    <label class="last-label">Test Steps</label>
                    <textarea class="last-text" placeholder="List dowm the dpcument/register that were scrutinzed to ascertain the effectiveness of the controls in place"></textarea>
                </div>
            
          </div>
        </div>
  
      </div>
      <div>
       
      </div>
      </div>

      <div class="footer-bar">
      </div>
      <div class="footer-button">
        <div>
          <img class="footer-button_icon" src="../pictures/capture.png" alt="">
          <a class="footer-button_back" @click="$router.push('/about')" href="">Back </a>
        </div>
        <div>
        <button class="footer-button_next" @click="handleNext">Next</button>
        </div>
      </div>
     
      
  
  
  
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
    export default {
        RouterLink,
        data() {
            return {

            }
        },
        methods: {
          handleNext() {
            this.$router.push("/summary")
          }
        }

      
    }
  
  </script>
  
  
  
  <style scoped>
  
    *{
      margin: 0;
      padding: 0;
    }
  
    body{
      overflow: scroll;
      
    }

    nav {
    position: sticky;
     top: 0;
     z-index: 999;

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
      margin-top: 2px;
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
  
    .first-stage{
      background-color: #ff0000;
      border: 2px solid red;
      color: #fff;
      height: 15px;
      width: 15px;
      margin-bottom: 5px;
      margin-left: 22px;
      border-radius: 50%;
    }
  
   
  
    .second-stage {
      background-color: #fff;
      border: 2px solid red;
      color: #fff;
      height: 15px; 
      width: 15px;
      margin-bottom: 10px;
      margin-left: 60px;
      border-radius: 50%;
    }

    .check-second-stage {
      margin-bottom: 2px;
      margin-left: 0;
      height: 9px;
      width: 9px;
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
      top: 6px;
      left:  17px;
      width: 27.8rem;
      border-top: 3px solid red;
    }
  
    .progress-bar_second {
      position: relative;
      top: -12px;
      left:  17px;
      width: 28.3rem;
      border-top: 3px solid #ADADAD;
      
    }
  
    .info {
      background-color: #fff;
      height: 165vh;
      width: 47rem;
      margin: 20px auto;
      border-radius: 4px;
      border: 1px solid #ECECEC;
    }
  
    .heading{
      background-color: #E2ECF5;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 5px;
      margin-left: 5px;
      margin-right: 5px; 
      padding: 25px 0; 
      border-radius: 4px;
    }

    .info-heading {
        font-size: 11.5px;
        font-weight: bold;
        text-align: left;
        width: 40rem;
        margin-left: 20px;
    }
  
  
    .info-text{
      font-size: 10px;
      margin-top: 5px;
      margin-left: 20px;
      text-align: justify;
      line-height: 1.5;
      width: 36rem;
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
      left: -15px;
      top: -15px;
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
  
    }
  
    .input-first {
      margin-left: -4.5rem;
      width: 19rem;
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
      left: 35px;
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
      margin-left: -1.1rem;
      width: 19rem;
      height: 2rem;
      font-size: 9px;
      padding-top: 10px;
      padding-left: 12px;
    }
  
    .input-second:focus {
      border-left: 4px solid #036;
    }
  
    .sort-arrow-second {
      position: relative;
      left: -0.7rem;
    }
  
    .label-third {
      position: relative;
      left: -18px;
      top: -15px;
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
  
    } 
  
    .input-third  {
      margin-left: -6rem;
      width: 19rem;
      height: 2rem;
      margin-top: 1.5rem;
      padding-top: 10px;
      padding-left: 1rem;
    }
  
  
    .label-fourth {
      position: relative;
      left: 35px;
      top: -15px;
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
    }
  
    .input-fourth {
      border: 1px solid #ADADAD;
      margin-left: -3rem;
      margin-top: 1.5rem;
      width: 19rem;
      height: 2rem;
      padding-top: 10px;
      padding-left: 15px;
    }
  
  
    .label-fifth {
      position: relative;
      left: -19rem;
      top: 2rem;
      font-size: 10px;
      font-weight: bolder;
      background-color: white;
      color: #003366;
  
    } 
  
    .textarea  {
      margin-left: -3rem;
      width: 40.2rem;
      height: 3.5rem;
      margin-top: 0.5rem;
      padding-top: 30px;
      padding-left: 1.3rem;
      resize: none;
      overflow: hidden;
    }

    .info-risk {
        display: flex;
        flex-wrap: wrap;
    }

    .label-risk-first {
        position: relative;
        top: -18px;
        left: -13px;
        font-size: 10px;
        font-weight: bolder;
        color: #003366;

    }

    textarea{
      outline: none;
    }

    .input-risk-first {
      margin-left: -9rem;
      width: 19rem;
      height: 2rem;
      margin-top: 1.5rem;
      padding-top: 10px;
      padding-left: 0.7rem;
    }

    .label-risk-second {
        position: relative;
        top: -15px;
        left: 30px;        
        font-size: 10px;
        font-weight: bolder;
        color: #003366;
    }

    .input-risk-second {
      border: 1px solid #ADADAD;
      margin-left: -2.8rem;
      margin-top: 1.5rem;
      width: 19rem;
      height: 2rem;
      padding-top: 10px;
      padding-left: 1.1rem;
    }

    .label-risk-third {
        position: relative;
        font-size: 10px;
        font-weight: bolder;
        color: #003366;
        top: -18px;
        left: -13px;
    }

    .input-risk-third {
      margin-left: -4.5rem;
      width: 19rem;
      height: 2rem;
      margin-top: 1.5rem;
      padding-top: 10px;
      padding-left: 0.7rem;
    }

    .label-risk-fourth {
        position: relative;
        top: -18px;
        left: 32px;
        font-size: 10px;
        font-weight: bolder;
        color: #003366;
    }

    .input-risk-fourth {
      border: 1px solid #ADADAD;
      margin-left: -3.3rem;
      margin-top: 1.5rem;
      width: 19rem;
      height: 2rem;
      padding-top: 10px;
      padding-left: 1rem;
    }

    .big-input {
        display: flex;
        flex-direction: column;
        
    }

    .labelFirst-BI {
        position: relative;
        top: 30px;
        left: -17.8rem;
        margin: 15px; 
        font-size: 10px;
        font-weight: bolder;
        color: #003366;
        
    }

    .inputFirst-BI {
      margin-top: 10px;
      margin-left: -2.8rem;
      width: 40.6rem;
      height: 3.5rem;
      padding-top: 1.5rem;
      padding-left: 1.1rem;
      resize: none;
      overflow: hidden;

    }

    .labelSecond-BI {
        position: relative;
        top: 30px;
        left: -19.5rem;
        font-size: 10px;
      font-weight: bolder;
      color: #003366;
        font-size: 10px;
    }

    .inputSecond-BI {
      margin-top: 10px;
      margin-left: -2.8rem;
      width: 40.5rem;
      height: 3.5rem;
      padding-top: 25px;
      padding-left: 1rem;
      resize: none;
      overflow: hidden;

    }

    .inputFields-lastSection {
        display: flex;
        flex-wrap: wrap;
    }

    .lastSection {
      border: 1px solid #ADADAD;
      margin-left: -2.2rem;
      margin-top: 1.5rem;
      width: 19rem;
      height: 2rem;
      padding-top: 10px;
      padding-left: 1.6rem;
    }

    .lastSection-labelFirst{
       
       font-size: 10px;
      font-weight: bolder;
      color: #003366;
       position: relative;
       top: -10px;
       left: -20px;

    }

    .checkbox {
        display: flex;
        justify-content:space-between;
        width: 8rem;
        position: relative;
        right: 2px;
        font-size: 13px;
        margin-top: -8px;

    }

    .lastSection-labelSecond {
        
        font-size: 10px;
      font-weight: bolder;
      color: #003366;
        position:relative;
        top: -1rem;
        left: 1.9rem;
        
    }

    .lastSection-inputSecond {
      margin-top: 25px;
      margin-left: -6.5rem;
      height: 2.5rem;
      width: 19rem;
      padding-left: 1rem;    
    }

    .lastSection-labelThird {
        
        font-size: 10px;
      font-weight: bolder;
      color: #003366;
        position: relative;
        top: -13px;
        left: -1.4rem;
    }

    .lastSection-inputThird {
        margin-top: 20px;
        margin-left: -6.2rem;
        width: 19.7rem;
        height: 2.5rem;
        padding-left: 0.8rem;
    }

    .lastSection-labelFourth {
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
        position: relative;
        top: -15px;
        left: 1.7rem;
    }

    .lastSection-inputFourth {
        margin-top: 20px;
        margin-left: -3.4rem;
        height: 2.5rem;
        width: 19rem;
        padding-left: 1rem;
    }

    .lastSection-labelFifth {
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
        position: relative;
        top: -15px;
        left: -18px;
        
    }

    .lastSection-inputFifth {
        margin-top: 20px;
        margin-left: -6.5rem;
        width: 19.5rem;
        height: 2.5rem;
        padding-left: 0.7rem;
    } 

    .lastSection-labelSixth {
      font-size: 10px;
      font-weight: bolder;
      color: #003366;
        position: relative;
        top: -15px;
        left: 1.8rem;
    }

    .lastSection-inputSixth {
        margin-top: 20px;
        margin-left: -4.7rem;
        height: 2.5rem;
        width: 19rem;
        padding-left: 1rem;
    }

    .last-label {
        position: relative;
        top: 20px;
        left: -19.7rem;
        font-size: 10px;
        font-weight: bolder;
        color: #003366;
    }

    .last-text {
      margin-top: 0;
      margin-left: -2.8rem;
      width: 40.6rem;
      height: 3.5rem;
      padding-top: 20px;
      padding-left: 1.1rem;
      resize: none;
      overflow: hidden;
    }

    .last-text::placeholder {
      font-size: 10px
    }

    .inputSecond-BI::placeholder {
      font-size: 9px;
    }

    .textarea::placeholder{
      font-size: 9px;
    }

    .inputFirst-BI::placeholder {
      font-size: 9px;
    }

    span {
      color: #acacac;
      font-size: 9px;
      position: relative;
      top: -10px;
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
  