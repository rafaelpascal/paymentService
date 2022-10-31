<template>
<div class="container-fluid">
    <v-app-bar style="position: fixed" app color="#fff" dark>
        <div class="nav_icon">
            <img src="../../assets/Group.svg" alt="" srcset="">
        </div>
        <v-spacer></v-spacer>
        <div class="avatar_bell" style="">
            <v-avatar>
                <img class="avatar" src="../../assets/avatar.svg" alt="John">
            </v-avatar>
            <img class="bell ml-10" src="../../assets/carbon_notification-new.svg" alt="" srcset="">
        </div>
    </v-app-bar>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="center">
                    <h2>What service would you like to use?</h2>
                    <p>Select a services that best suits your type of business or service you render.</p>
                </div>
            </div>
        </div>
        <div style="" class="row">
            <div id="col-lg6" style="margin: 0; padding: 0" class="col-lg-12">
                <div id="service6" class="services12">
                    <button style="margin-bottom: 52px;" v-for="categorie in categories" :key="categorie.category_id" class="biopay" :value="categorie.category_id" :id="categorie.category_id" @click="biopay(categorie.category_id)">
                        <h1>{{categorie.category_name}}</h1>
                    </button>
                    <!-- <button style="margin-top: 52px;" id="Payhandle" value="2" @click="Payhandle()" class="biopay">
                        <h1>Payhandle</h1>
                    </button>
                    <button style="margin-top: 52px;" id="Core" value="3" @click="Core()" class="biopay">
                        <h1>Core</h1>
                    </button> -->
                </div>
            </div>
            <div id="itemContents" v-if="showItems" style="margin: 0" class="col-lg-6">
                <div class="content">
                    <div class="biopaycontent">
                        <div>{{ biopay_details }}</div>
                        <p></p>
                        <div style="margin: 0; padding: 0; display: flex; justify-content: space-between; align-items: center">
                            <div class="check" style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center">
                                <v-checkbox v-model="IndividualList" @click="changeIndivi" id="individual" label="" color="red darken-3" value="Individual Business" hide-details></v-checkbox>
                                <p class="mt-9">Sign up as an Individual business</p>
                            </div>
                            <div class="mt-6">
                                <img id="indi_img" src="../../assets/arrowright.svg" alt="" srcset="">
                            </div>
                        </div>
                        <div v-if="IndividualList" class="listItem">
                            <h6 class="ml-4 mb-4">Legibility & Requirement</h6>
                            <ul class="">
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Start receiving payments with developer-friendly APIs or choose single string low-code or choose pre-built solutions from our store.</p>
                                </li>
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Account Supports any business model including individual payments and receivables.</p>
                                </li>
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Online sales, POS, Agent banking, E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all with one account.</p>
                                </li>
                            </ul>
                            <!-- {{checkbox}} -->
                        </div>
                        <div style="margin: 0; padding: 0; display: flex; justify-content: space-between; align-items: center">
                            <div class="check" style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center">
                                <v-checkbox v-model="corporateList" @click="changeCorpo" label="" color="red darken-3" value="red darken-3" hide-details></v-checkbox>
                                <p class="mt-9">Sign up as a Corporate business</p>
                            </div>
                            <div class="mt-6">
                                <img id="cor_img" src="../../assets/arrowright.svg" alt="" srcset="">
                            </div>
                        </div>
                        <div v-if="corporateList" class="listItem">
                            <h6 class="ml-4 mb-4">Legibility & Requirement</h6>
                            <ul class="">
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Start receiving payments with developer-friendly APIs or choose single string low-code or choose pre-built solutions from our store.</p>
                                </li>
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Account Supports any business model including individual payments and receivables.</p>
                                </li>
                                <li class="cross"><img class="mb-6" src="../../assets/list2.svg" alt="" srcset="">
                                    <p class="ml-4">Online sales, POS, Agent banking, E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all with one account.</p>
                                </li>
                            </ul>
                            <!-- {{checkbox}} -->
                        </div>
                    </div>
                    <div id="" class="getStarted">
                        <button>Get Started <img class="ml-2" src="../../assets/arrowr.svg" alt="" srcset=""> </button>
                    </div>
                </div>
            </div>

            <!-- CORE ITEMCONTENT -->

            <div id="itemContents" v-if="showCoreItems" style="margin: 0" class="col-lg-6">
                <div class="content">
                    <div class="biopaycontent">
                        <div>{{ core_details }}</div>
                        <p>This contains services to be be used soley by Corporate Organizations or government parastatals.</p>
                        <h1>List of Services</h1>
                        <!-- NIP -->
                        <div v-for="(loadCoreService, index)  in loadCoreServices" :key="loadCoreService.service_id" style="margin: 0; padding: 0; display: flex; flex-direction: column">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
                                <div class="check" style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center">
                                    <v-checkbox style="margin-top: 20px; padding: 0" class="" v-model="loadCoreService.right" @click="chnagenip(loadCoreService.service_id, loadCoreService.right, index)" label="" color="red darken-3" value="NIP VAlue" hide-details></v-checkbox>
                                    <p class="ma-0 pt-5">{{loadCoreService.service_name}}</p>
                                </div>
                                <div class="ma-0 pt-5">
                                    <img id="nip_img" src="../../assets/arrowright.svg" alt="" srcset="">
                                </div>
                            </div>
                            <div v-if="loadCoreService.status" class="mt-4 listItem">
                                {{loadCoreService.service_details}}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button id="getId" @click="getStarted(loadCoreServices.service_id)" v-if="nip || ndd || bvn || banktransfer || nameEnquiry || creditCard || nibbsPayment || CentralPay || billPayment || nqr || nxPay" class="getStarted" type="button">Get Started <i class="fas fa-arrow-right"></i> </button>
                        <button id="getId" @click="getStarted(loadCoreServices.service_id)" v-else class="getStartedDisabled" type="button">Get Started <i class="fas fa-arrow-right"></i> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import $ from 'jquery'
import httpRequest from "@/services/httpRequest.js";

export default {
    data() {
        return {
            itemsSelected: [],
            loadCoreServices: '',
            categorySelected: [],
            nip: false,
            ndd: false,
            bvn: false,
            banktransfer: false,
            nameEnquiry: false,
            creditCard: false,
            nibbsPayment: false,
            CentralPay: false,
            nqr: false,
            billPayment: false,
            nxPay: false,
            categories: [],
            showItems: false,
            showCoreItems: false,
            IndividualList: false,
            corporateList: false,
            biopay_details: '',
            core_details: '',

        }
    },

    beforeMount() {
        httpRequest.get('/list-categories').then(response => {
            console.log(response);
            this.categories = response.data.data;
            console.log(this.categories)
        });
        // const list  = this.loadCoreServices();
    },

    methods: {
        biopay(category_id) {
            //    console.log('Jeg');
            //    console.log(index);
            console.log(category_id)
            document.getElementById("col-lg6").className = 'col-lg-6';
            document.getElementById("service6").className = 'services6';
            var valueID = document.getElementById(`${category_id}`).value = category_id;
            var category_id1 = 1;
            var category_id2 = 2;
            var category_id3 = 3;

            if (valueID == 1) {
                document.getElementById(`${category_id}`).className = 'active';
                document.getElementById(`${category_id2}`).className = 'biopay';
                document.getElementById(`${category_id3}`).className = 'biopay';
                this.biopay_details = this.categories[0].category_details;
                this.showItems = true;
                this.showCoreItems = false;
            } else if (valueID == 2) {
                document.getElementById(`${category_id}`).className = 'active';
                document.getElementById(`${category_id1}`).className = 'biopay';
                document.getElementById(`${category_id3}`).className = 'biopay';
                this.showItems = false;
            } else if (valueID == 3) {
                document.getElementById(`${category_id}`).className = 'active';
                document.getElementById(`${category_id1}`).className = 'biopay';
                document.getElementById(`${category_id2}`).className = 'biopay';
                this.core_details = this.categories[2].category_details;
                this.showCoreItems = true;
                this.showItems = false;
                this.categorySelected = category_id

                httpRequest.get('/list-services/3').then(response => {
                    console.log(response);
                    this.loadCoreServices = response.data.data.map(el => {
                        return {
                            category_id: el.category_id,
                            service_details: el.service_details,
                            service_id: el.service_id,
                            service_name: el.service_name,
                            status: false
                        }
                    });
                    console.log(this.categories)
                });
            }
        },
        changeIndivi() {
            this.IndividualList == true;
            console.log('Individual Ran');
            document.getElementById("indi_img").classList.toggle('rotate');
            var value = document.getElementById("individual").value;
            console.log(value)
        },
        changeCorpo() {
            this.corporateList == true
            console.log('Corporate Ran');
            document.getElementById("cor_img").classList.toggle('rotate');
        },

        chnagenip(service_id) {
            console.log(service_id)
            const index = this.loadCoreServices.findIndex(el => el.service_id === service_id);
            this.loadCoreServices[index].status = !this.loadCoreServices[index].status;
            console.log(this.loadCoreServices[index]);
            document.getElementById("nip_img").classList.toggle('rotate');
            document.getElementById("getId").className = 'getStarted';
            this.itemsSelected.push(service_id)
        },
        // chnagenip(service_id) {
        //     const coreId = service_id;
        //     console.log(coreId);
        // if (this.nip == true || this.ndd == true || this.bvn == true || this.banktransfer == true) {
        //     console.log('NIP Ran')
        // } else {
        //     document.getElementById("getId").className = 'getStartedDisabled';
        // }
        // document.getElementById("getId").classList.toggle(this.nip == true ? "getStartedDisabled" : "getStarted");
        // },

        getStarted() {
            const items = this.itemsSelected
            const category = this.categorySelected
            console.log(items, category)
            const data = {
                user_id: 4,
                businesstypeid : category,
                service_id : items
            }
            httpRequest.post('/save-services', data).then(response => {
                console.log('Posted');
                console.log(response);
            });
            this.itemsSelected = [],
            this.categorySelected = ''
            console.log(this.itemsSelected, this.categorySelected)
            this.$router.push('/upploadCore')
        }
    },

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('http://fonts.cdnfonts.com/css/circular-std');

#itemContents {
    position: absolute;
    padding-right: 10%;
    // margin-left: 0;
    padding-bottom: 20px;
    right: -80%;
    width: 50%;
    height: auto;
    -webkit-animation: slide 1.5s forwards;
    // -webkit-animation-delay: 2s;
    animation: slide 1.5s forwards;
    // animation-delay: 2s;

    @-webkit-keyframes slide {
        100% {
            right: 0;
        }
    }

    @keyframes slide {
        100% {
            right: 0;
        }
    }

}

@media (max-width: 1000px) {
    #itemContents {
        position: relative;
        bottom: 0;
        width: 100%;
        padding: 0;
    }
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.nav_icon {
    padding-left: 50px;

    img {
        width: 100%;
    }
}

@media (max-width: 1000px) {
    .nav_icon {
        padding-left: 10px;

        img {
            width: 60%;
        }
    }
}

.rotate {
    transform: rotate(90deg);
}

.avatar_bell {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    .avatar {
        width: 100%;
    }

    .bell:hover {
        cursor: pointer;
    }
}

@media (max-width: 1000px) {
    .avatar_bell {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;

        .avatar {
            width: 70%;
        }
    }
}

.center {
    text-align: center;
    margin-top: 42px;

    h2 {
        width: 100%;
        height: 25px;
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #03435F;
    }

    p {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 450;
        margin-top: 28px;
        font-size: 18px;
        line-height: 23px;
        color: #515F76;
    }
}

@media (max-width: 1000px) {
    .center {
        text-align: center;
        margin-top: 42px;

        h2 {
            width: 100%;
            height: 25px;
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 25px;
            color: #03435F;
        }

        p {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 450;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: #515F76;
        }
    }
}

// CENTER MOBILE VIEW vvv

.services6 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 124px;

    .biopay {
        width: 80%;
        height: auto;
        padding: 41px 109px;
        background: #F5F6F8;
        border: 0.5px solid #F5F6F8;
        border-radius: 20px;

        h1 {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            text-align: center;
            color: #03435F;
        }

        &:hover {
            width: 80%;
            height: auto;
            padding: 41px 109px;
            background: #03435F;
            border: 0.5px solid #03435F;
            box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
            border-radius: 20px;

            h1 {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                color: #FFFFFF;
            }
        }
    }

    .active {
        width: 80%;
        height: auto;
        padding: 41px 109px;
        background: #03435F;
        border: 0.5px solid #03435F;
        box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
        border-radius: 20px;

        h1 {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            text-align: center;
            color: #fff;
        }
    }

    @media (max-width: 1000px) {
        .active {
            width: 100%;
            height: auto;
            // padding: 41px 109px;
            background: #03435F;
            border: 0.5px solid #03435F;
            box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
            border-radius: 20px;

            h1 {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                color: #fff;
            }
        }
    }
}

@media (max-width: 1000px) {
    .services6 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 80px;

        .biopay {
            width: 100%;
            height: auto;
            // padding: 41px 109px;
            background: #F5F6F8;
            border: 0.5px solid #F5F6F8;
            box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
            border-radius: 20px;

            h1 {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                color: #03435F;
            }

            &:hover {
                width: 100%;
                height: auto;
                padding: 41px 109px;
                background: #03435F;
                border: 0.5px solid #03435F;
                box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
                border-radius: 20px;

                h1 {
                    font-family: 'Circular Std';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #FFFFFF;
                }
            }
        }
    }
}

// COL-LG-12 DISPLAY
.services12 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 124px;

    .biopay {
        width: 40%;
        height: auto;
        padding: 41px 109px;
        background: #F5F6F8;
        border: 0.5px solid #F5F6F8;
        box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
        border-radius: 20px;

        h1 {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            text-align: center;
            color: #03435F;
        }

        &:hover {
            width: 40%;
            height: auto;
            padding: 41px 109px;
            background: #03435F;
            border: 0.5px solid #03435F;
            box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
            border-radius: 20px;

            h1 {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                color: #FFFFFF;
            }
        }
    }
}

@media (max-width: 1000px) {
    .services12 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 80px;

        .biopay {
            width: 100%;
            height: auto;
            // padding: 41px 109px;
            background: #F5F6F8;
            border: 0.5px solid #F5F6F8;
            border-radius: 20px;

            h1 {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                color: #03435F;
            }

            &:hover {
                width: 100%;
                height: auto;
                padding: 41px 109px;
                background: #03435F;
                border: 0.5px solid #03435F;
                box-shadow: 0px 0px 28px rgba(3, 67, 95, 0.19);
                border-radius: 20px;

                h1 {
                    font-family: 'Circular Std';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #FFFFFF;
                }
            }
        }
    }
}

.content {
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
    // align-items: center;
    margin-top: 124px;
    padding: 0 60px;
    border-left: 0.5px solid #BFB8B8;

    .biopaycontent {
        overflow: hidden;
        background: #F6F7F9;
        border-radius: 4px;
        width: 90%;
        height: auto;
        padding: 23px 28px;

        h1 {
            padding-bottom: 23px;
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            color: #4F4F4F;
        }

        p {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 450;
            font-size: 14px;
            line-height: 18px;
            color: #4F4F4F;
            text-align: left;
        }
    }
}

@media (max-width: 1000px) {
    .content {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-evenly;
        // align-items: center;
        margin-top: 24px;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        // padding: 0 60px;
        // border-left: 0.5px solid #BFB8B8;

        .biopaycontent {
            background: #F6F7F9;
            border-radius: 4px;
            width: 100%;
            height: auto;
            padding: 13px 18px;

            h1 {
                padding-bottom: 23px;
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 23px;
                color: #4F4F4F;
            }

            p {
                font-family: 'Circular Std';
                font-style: normal;
                font-weight: 450;
                font-size: 14px;
                line-height: 18px;
                color: #4F4F4F;
                text-align: left;
            }
        }
    }
}

// //////////

.check {
    p {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 450;
        font-size: 16px;
        // line-height: 20px;
        color: #4F4F4F;
    }
}

// CHECK MOBILE

.listItem {
    background: #FEFEFF;
    border-radius: 4px;
    width: 100%;
    height: auto;
    padding: 20px 8px;

    h6 {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #4F4F4F;
    }
}

@media (max-width: 1000px) {
    .listItem {
        background: #FEFEFF;
        border-radius: 4px;
        width: 100%;
        height: auto;
        padding: 20px 8px;

        h6 {
            font-family: 'Circular Std';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: #4F4F4F;
        }
    }
}

.cross {
    display: flex;
    justify-content: space-between;
    align-items: left;

    p {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 450;
        font-size: 13px;
        line-height: 16px;
        text-align: justify;
        color: #949494;
    }
}

.getStarted {
    margin-top: 30px;
    background: #FFE1DF;
    border-radius: 5px;
    width: 30%;
    padding: 15px 24px;
    height: auto;

    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ED342B;
}

@media (max-width: 1000px) {
    .getStarted {
        margin-top: 30px;
        background: #FFE1DF;
        border-radius: 5px;
        width: 50%;
        padding: 15px 24px;
        height: auto;

        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ED342B;
    }
}

.getStartedDisabled {
    margin-top: 30px;
    background: #EEEEEE;
    pointer-events: none;
    border-radius: 5px;
    width: 30%;
    padding: 15px 24px;
    height: auto;

    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #BFB8B8;
}

@media (max-width: 1000px) {
    .getStartedDisabled {
        margin-top: 30px;
        background: #FFE1DF;
        border-radius: 5px;
        width: 50%;
        padding: 15px 24px;
        height: auto;

        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ED342B;
    }
}
</style>
