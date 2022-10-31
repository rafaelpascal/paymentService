<template>
<div style="margin: 0; padding: 0; " class="container-fluid">
    <div class="container">
        <div style="padding: 3rem 0">
            <img src="../../assets/Group.svg" alt="" srcset="">
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div>
                    <ul class="cross">
                        <li class="list"><img src="../../assets/list.svg" alt="" srcset="">
                            <p class="ml-4">Start receiving payments with developer-friendly APIs or choose single string low-code or choose pre-built solutions from our store.</p>
                        </li>
                        <li class="list"><img src="../../assets/list.svg" alt="" srcset="">
                            <p class="ml-4">Account Supports any business model including individual payments and receivables.</p>
                        </li>
                        <li class="list"><img src="../../assets/list.svg" alt="" srcset="">
                            <p class="ml-4">Online sales, POS, Agent banking, E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all with one account.</p>
                        </li>
                    </ul>
                    <div class="join">
                        <p>Join thousands of businesses and individuals both startups, enterprises and corporates that trust Appmart.</p>
                    </div>
                    <!-- {{checkbox}} -->
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input">
                    <h4 style="">Sign In</h4>
                    <form action="" @submit.prevent>
                        <div class="mt-8 email">
                            <h6>Email address</h6>
                            <input type="email" v-model="login" name="" id="" placeholder="Email address">
                        </div>
                        <div class="mt-8 email">
                            <h6>Password</h6>
                            <input type="password" v-model="password" name="" id="" placeholder="Password">
                        </div>
                        <div class="mt-8">
                            <router-link to="/ForgetPassword" class="forget_pass">Forgot Password?</router-link>
                        </div>
                        <div style="padding-top: 10%; text-align: center">
                            <small class="small">By clicking on create account , you agree to Appmart </small>
                            <router-link class="terms" to="/TermsCondition">Terms and Conditions</router-link>
                        </div>
                        <div class="mt-8">
                            <button @click="signIn" class="sub_buttn">Sign In</button>
                        </div>
                        <div style="padding-top: 10%; text-align: center">
                            <small class="small">Don't have an account? </small>
                            <router-link class="terms" to="/SignUp">Sign up</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="appm">
        <p>Apmart 2021</p>
        <p>Privacy & Terms</p>
    </div>
    <img class="vector" src="../../assets/Vector 1.svg" alt="" srcset="">
    <img class="points" src="../../assets/point-bg 1.svg" alt="" srcset="">
</div>
</template>

<script>
import auth from "@/services/auth.js";
// import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            login: '',
            password: '',
            checkbox: []
        }
    },

    methods: {
        signIn() {
            if (this.login == '' || this.password == '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your Email and Password is Needed',
                    width: 500,
                })
            } else {
                var data = JSON.stringify({
                    login: this.login,
                    password: this.password
                });
                auth.post('/signIn', data).then(response => {
                        console.log(response);
                        if (response.data.code == '00') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successful',
                                text: 'Login Successful',
                                width: 500,
                            })
                            this.$router.push({
                                path: '/SelectService'
                            })
                        } else if (response.data.status == 'error') {
                            Swal.fire({
                                icon: 'error',
                                title: 'Unsuccessful..',
                                text: `${response.data.message}`,
                                width: 500,
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Wrong Credentials',
                                width: 500,
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    },

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('http://fonts.cdnfonts.com/css/circular-std');

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.vector {
    // margin-top: 100%;
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0%;
}

.points {
    position: absolute;
    height: auto;
    right: 16.47%;
    bottom: 0%;
}

@media (max-width: 1000px) {
    .vector {
        // margin-top: 100%;
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 0%;
    }

    .points {
        position: absolute;
        height: auto;
        right: 0%;
        bottom: 0%;
    }
}

.input {
    position: relative;
    width: 85%;
    height: auto;
    padding: 2.5rem 3.5rem;
    // left: 49.51%;
    // right: 11.11%;
    // top: 10.37%;
    // bottom: 20.84%;
    background: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    z-index: 2;

    h4 {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #03435F;
    }
}

@media (max-width: 1000px) {
    .input {
        position: relative;
        width: 100%;
        height: auto;
        padding: 2.5rem 1.5rem;
        // left: 49.51%;
        // right: 11.11%;
        // top: 10.37%;
        // bottom: 20.84%;
        background: #fff;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        z-index: 2;
    }
}

.email {
    h6 {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #4F4F4F;
    }

    input {
        // margin-top: 5px;
        background: #FFFFFF;
        border: 1px solid #CED4DA;
        border-radius: 4px;
        width: 100%;
        height: 50px;
        padding: 0 1.5rem;
    }
}

@media (max-width: 1000px) {
    .email {
        h6 {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #4F4F4F;
        }

        input {
            // margin-top: 5px;
            background: #FFFFFF;
            border: 1px solid #CED4DA;
            border-radius: 4px;
            width: 100%;
            height: 50px;
            // padding: 0 1.5rem;
        }
    }
}

.forget_pass {
    text-decoration: none;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #03435F;
    float: right;
}

.small {
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #707070;
}

.terms {
    text-decoration: none;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #03435F;
}

.sub_buttn {
    padding: 10px;
    width: 100%;
    height: 55px;
    background: #ED342B;
    border-radius: 5px;

    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.list {
    position: relative;
    // justify-content: left;
    // align-items: left;
    display: flex;
    margin-top: 2.5rem;
    width: 70%;
    height: auto;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    z-index: 2;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

@media (max-width: 1000px) {
    .list {
        position: relative;
        // justify-content: left;
        // align-items: left;
        display: flex;
        margin-top: 2.5rem;
        width: 100%;
        height: auto;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        z-index: 2;
        background: #FFFFFF;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

}

.join {
    text-align: center;
    width: 70%;
    height: 30%;
    margin-top: 4rem;

    p {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 450;
        font-size: 14px;
        line-height: 18px;
        color: #03435F;
    }
}

@media (max-width: 1000px) {
    .join {
        text-align: center;
        width: 100%;
        height: 30%;

        // margin-top: 4rem;
        p {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 450;
            font-size: 14px;
            color: #03435F;
        }
    }
}

.appm {
    position: relative;
    left: 15.76%;
    // right: 70.47%;
    // top: 91.94%;
    width: 15%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    p {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 450;
        font-size: 14px;
        line-height: 18px;
        color: #9DA6AF;
    }
}

@media (max-width: 1000px) {
    .appm {
        position: relative;
        left: 8.76%;
        // right: 70.47%;
        // top: 91.94%;
        margin-top: 1rem;
        width: 50%;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 450;
            font-size: 14px;
            line-height: 18px;
            color: #03435F;
        }
    }
}
</style>
