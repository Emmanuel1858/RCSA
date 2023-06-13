<template>

    <div class="container">
            <div>
            <img class="form-image" src="../pictures/backgroundphoto.png">
        </div>
        <!-- <img src="../pictures/Group 6987.png"> -->
        
        <div class="form-container">
            <div class="form-info">
                <div class="para">
                    <p>Please sign in with your credentials</p>
                </div>    
                <form v-bind=""> 
                    
                    <div class="input-fields">
                        <label class="label-role" >Role</label>
                        <img class="logo" src="../pictures/capture.png">
                    <input type="text" class="Role" @click="clickHandler" placeholder="Select a Profile" v-model="form.role">
                    <ul :class="displayRoleItem ? 'role-items' : 'role-items role-list-hide'">
                        <li @click="changeRole('Fill RCSA Assessment Form')"> Fill RCSA Assessment Form <img class="logo-role" src="../pictures/group.png"> </li>
                        <li @click="changeRole('Fill Gap Form')">Fill Gap Form <img class="logo-role-second" src="../pictures/group.png"></li>
                        <li @click="changeRole( 'Review submitted Forms from your unit' )" >Review submitted Forms from your unit <img class="logo-role-third" src="../pictures/rsfyu.png"></li>
                        <li @click="changeRole('Operational Risk Management Officer')" >Operational Risk Management Officer <img class="logo-role-fourth" src="../pictures/ormo.png"></li>
                        <li @click="changeRole('Operational Risk Management Approver')" >Operational Risk Management'Approver<img class="logo-role-fifth" src="../pictures/orma.png"></li>
                        <li @click="changeRole( 'Internal Control Officer')" >Internal Control Officer <img class="logo-role-sixth" src="../pictures/ico.png"></li>
                    </ul> 
    
                    <!-- <div>
                        <label>Dropdown</label>
                        <input value="Role" >
                        <img>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>C</li>
                        </ul>
                    </div> -->
    
                    <div class="username">
                    <label class="label">Username</label>
                    <input id="input" @click="focusInputUser" class="input" type="text" ref="name" placeholder="Input Username" v-model="form.username">
                    </div>
    
                    <div class="password">
                        <label class="label">Password</label>
                        <input id="inputs" @click="focusInputPass" class="input input-pass" type="password" ref="pass" placeholder="Input Password" v-model="form.password">
                    </div>
    
                    <div class="forgot">
                        <a href="#" class="forgots"> Forgot Login Credentials?</a>
                    </div>                 
                   
    
                    <div id="btn">
                    
                        <button
                        href="here"
                        class="login-btn" 
                        :disabled="isDisabled"
    
                        @click="$router.push('/about')" >Login</button>
                        
    
                    </div>
                </div>
                    
                </form>
            </div>
        </div>
        </div>
        
    </template>
    
    <script>
    import { RouterLink } from 'vue-router';
    
        export default {
            name: 'Login',
            RouterLink,
            data () {
                return {
                    form: {
                        username: "",
                        password: "",
                        role: "",
                        website: "https://www.youtube.com/watch?v=PJxgEaXByx0"
                        
                        
                        
                       
                    },
                    displayRoleItem: false,
                    
    
            //  opt : [
            // {name: "Fill RCSA Assessment Form "},
            // {name: "Fill Gap Form"},
            // {name: "Review submitted Forms from your unit"},
            // {name: "Operational Risk Management Officer"},
            // {name: "Operational Risk Management Approver"},
            // {name: "Internal Control Officer"}
            // ]
    
                   
                }
            }, 
    
            methods: {
    
                clickHandler() {
                    this.displayRoleItem = true;
                }, 
    
                changeRole(role_value) {
                    this.form.role = role_value
                    this.displayRoleItem = false;
                },
    
        
                
                
            }, 
    
            computed: {
             isDisabled() {
                if((this.form.role=== '') || (this.form.username=== '') || ( this.form.password.length < 5)){
                    return true
                }else {
                    
                return false
                }
            }
            }
        }
    
    
    </script>
    
    <style scoped>
    
    /* @font-face { 
         src: url(../assets/campton/);
         font-family: "campton-medium"; 
         font-weight: 500; } */
    
    
        * {
            margin: 0;
            padding: 0;
            outline: none;
            overflow: hidden;
        }
    
        
        .container {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
    
        }
    
        .form-image {
            width: 40rem;
            height: 40rem;
            overflow: hidden;
        }
    
        .form-container{
            background-color: #075DB2;
            width: 40rem;
            height: 39.8rem;
        }
    
        .form-info {
            background-color: #fff;
            height: 450px;
            width: 400px;
            position: relative;
            top: 80px;
            left: 110px;
            overflow: hidden;
            border-radius: 5px;
    
        }
    
        .role-list-hide {
            display: none
        }
    
        .Role {
            width: 15rem;
            margin-left: -2rem;
            height: 1.3rem;
            padding: 10px 17px;
            margin-bottom: 10px;
            font-size: 9px;
            color: #003366;
    
            cursor: pointer;
    
            
        }
    
        .Role:focus{
            border-left: 4px solid #003366;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    
        .logo{
            position: relative;
            top: 5px;
            left: 14.5rem;
            cursor: pointer;
        }
    
        .logo-role{
            height: 15px;
            width: 15px;
            position: relative;
            left: 7rem;
        }
    
        .logo-role-second{
            height: 15px;
            width: 15px;
            position: relative;
            left: 10.6rem;
        }
    
        .logo-role-third{
            height: 15px;
            width: 15px;
            position: relative;
            left: 4.2rem;
        }
    
        .logo-role-fourth{
            height: 15px;
            width: 15px;
            position: relative;
            left: 4.5rem;
        }
    
        .logo-role-fifth{
            height: 15px;
            width: 15px;
            position: relative;
            left: 4rem;
        }
    
        .logo-role-sixth{
            height: 15px;
            width: 15px;
            position: relative;
            left: 8.2rem;
        }
    
    
    
        .role-items li{
            font-size: 9px;
            border: 1px solid #075DB2;
            width: 15.5rem;
            margin-left: 4rem;
            padding: 7px 15px;
            position: relative;
            text-align: left;
            
            cursor: pointer;
    
        }
    
        .img {
            height: 10px;
            width: 10px;
        }
        
        .para{
            
            font-size: 9px;
            color: #101010;
            font-weight: bold;
            background-color: #F5F5F5;
            height: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
        }
    
        
        .input-fields {
            margin-top: 20px;
        }
        .label {
            position: relative;
            left: -5.7rem;
            top: 20px;
            font-size: 9px;
            font-weight: bold;
            color: #003366;
        }
    
        .label-role {
            font-size: 9px;
            position: relative;
            left: 2rem;
            top: -14px;
            color: #003366;
            font-weight: bold;
            
        }
    
    
            .input {
            height: 2rem;
            width: 16.2rem;
            display: flex;
            margin-bottom: 10px;
            margin-left: 65px;   
            padding-left: 20px;
            padding-top: 10px;
            font-size: 9px;
            
        }
    
        .input:focus{
            border-left: 4px solid #003366;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    
    
        ul{
            position: absolute;
            z-index: 999;
            background-color: #fff;
            width: 30rem;
        }
    
        ::placeholder {
            font-size: 9px;
            color: #B2B2B2;
            /* padding-left: .5rem; */
        }
    
    
        .select {
            font-size: 10px;
            height: 2.5rem;
            width: 17rem;
            margin-top: 15px;
            margin-left: -1rem;
            margin-bottom: 10px;
        }
    
        select{
            padding-top: 12px;
            padding-left: 10px;
            border-left: 3px solid #003366;
                    
        }
    
    
        .forgots {
            text-decoration: none;
             border-bottom: 1px dashed #003366;
             font-size: 9px;
             margin-left: 15.3rem;
        }
    
        #btn {
            margin-top: 7rem;
            text-align: center;
        }
        .login-btn {
            background-color: #a73636;
            width: 15rem;
            height: 2rem;
            border: none;
            color: #fff;
            cursor: pointer;
        }
        button:disabled {
            background: #fffafa;
            cursor: not-allowed;
        }
    
    
    
    
    
    
    
    </style>