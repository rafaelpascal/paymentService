<template>
<div class="mb-8 container-fluid">
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
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </div>
            </div>
        </div>
        <div class="container_uplaod container">
            <h4>Bank Verification Number Requirement</h4>
            <v-divider></v-divider>
            <div class="row">
                <div class="col-lg-6">
                    <form action="" @submit.prevent>
                        <div class="mt-6 email">
                            <h6>Company address for visitation</h6>
                            <div class="mb-6" style="display: flex">
                                <input class="text_here" type="text" v-model="address" name="" id="" placeholder="Text here">
                                <img class="ml-2" src="../../assets/green.svg" alt="" srcset="">
                            </div>
                            <h6>Requirement 3</h6>
                            <div class="mb-6" style="display: flex">
                                <!-- <input class="text_here" type="text"  name="" id="" placeholder="Text here"> -->
                                <select class="text_here" v-model="requirement" aria-label=".form-select-sm example">
                                    <option selected>Text here</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <img class="ml-2" src="../../assets/green.svg" alt="" srcset="">
                            </div>
                            <h6>Certificate of Incorporation</h6>
                            <div class="incor" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" />
                                    </div>
                                    <label for="assetsFieldHandle" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.filelist.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(file, index) in filelist" :key="index">
                                            {{file.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove(filelist.indexOf(file))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>Notarized/Certified copies of the signatories Means of I.D</h6>
                            <div class="incor" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop2">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="signatories[assetsFieldHandle2][]" id="assetsFieldHandle2" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange2" ref="file2" />
                                    </div>
                                    <label for="assetsFieldHandle2" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.signatories.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(signature, index) in signatories" :key="index">
                                            {{signature.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove2(signatories.indexOf(signature))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>Notorized/Certified means of UBO</h6>
                            <div class="incor" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop3">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="ubos[assetsFieldHandle3][]" id="assetsFieldHandle3" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange3" ref="file3" />
                                    </div>
                                    <label for="assetsFieldHandle3" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.ubos.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(ubo, index) in ubos" :key="index">
                                            {{ubo.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove3(ubos.indexOf(ubo))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>Reviewed and executed agreement</h6>
                            <div class="incor" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop4">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="reviewsfiles[assetsFieldHandle4][]" id="assetsFieldHandle4" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange4" ref="file4" />
                                    </div>
                                    <label for="assetsFieldHandle4" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.reviewsfiles.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(review, index) in reviewsfiles" :key="index">
                                            {{review.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove4(reviewsfiles.indexOf(review))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- second Column -->
                <div class="col-lg-6">
                    <form action="" @submit.prevent>
                        <div class="mt-6 email">
                            <h6>List of Directors/Senior Management Team</h6>
                            <div class="mb-6" style="display: flex">
                                <input class="text_here" type="text" v-model="team" name="" id="" placeholder="Text here">
                            </div>
                            <h6>List of (UBO) Ultimate Beneficial Owner(s) holding more than 5% shares</h6>
                            <div class="mb-6" style="display: flex">
                                <input class="text_here" type="text" v-model="ubo" name="" id="" placeholder="Text here">
                            </div>
                            <h6>Memorandum and Articles of Association</h6>
                            <div class="incor2" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop5">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="articles[assetsFieldHandle5][]" id="assetsFieldHandle5" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange5" ref="file5" />
                                    </div>
                                    <label for="assetsFieldHandle5" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.articles.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(article, index) in articles" :key="index">
                                            {{article.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove5(articles.indexOf(article))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>Documentation of Ownership/Shareholding Structure</h6>
                            <div class="incor2" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop6">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="articles[assetsFieldHandle6][]" id="assetsFieldHandle6" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange6" ref="file6" />
                                    </div>
                                    <label for="assetsFieldHandle6" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.shareholdings.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(shareholding, index) in shareholdings" :key="index">
                                            {{shareholding.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove6(shareholdings.indexOf(shareholding))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>AML/CFT Policy Document</h6>
                            <div class="incor2" id="app">
                                <div class="" @dragover="dragover" @dragleave="dragleave" @drop="drop7">
                                    <div>
                                        <!-- <input type="file" ref="file" name="fields[assetsFieldHandle][]" @change="onChange" class="w-px h-px opacity-0 overflow-hidden absolute" id="assetsFieldHandle" multiple> -->
                                        <input type="file" multiple name="articles[assetsFieldHandle7][]" id="assetsFieldHandle7" class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange7" ref="file7" />
                                    </div>
                                    <label for="assetsFieldHandle7" class="cursor-pointer">
                                        <div style="width: 100%" class="text">
                                            <img src="../../assets/upload.svg" alt="" srcset=""> Drop file to upload
                                            or <span style="color: blue">Browse</span>
                                        </div>
                                    </label>
                                    <ul class="mt-4" v-if="this.policies.length" v-cloak>
                                        <li class="text-sm p-1" v-for="(policy, index) in policies" :key="index">
                                            {{policy.name }}<button class="ml-4 btn btn-danger" type="button" @click="remove7(policies.indexOf(policy))" title="Remove file">Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h6>Details/flow of the solution to utilize the API service</h6>
                            <textarea name="" v-model="textarea" id="" cols="58" rows="3" style="background: #fff; padding: 10px 20px; width: 100%" placeholder="Text here "></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <button id="getId" @click="uppload()" class="getStarted" type="button"> Uppload </button>
    </div>
</div>
</template>

<script>
import httpRequest from '@/services/httpRequest';

export default {
    data() {
        return {
            filelist: [],
            signatories: [],
            ubos: [],
            reviewsfiles: [],
            shareholdings: [],
            policies: [],
            articles: [],
            textarea: '',
            ubo: '',
            team: '',
            requirement: [],
            address: '',
        }
    },
    methods: {
        onChange() {
            this.filelist = [...this.$refs.file.files];
        },
        onChange2() {
            this.signatories = [...this.$refs.file2.files];
        },
        onChange3() {
            this.ubos = [...this.$refs.file3.files];
        },
        onChange4() {
            this.reviewsfiles = [...this.$refs.file4.files];
        },
        onChange5() {
            this.articles = [...this.$refs.file5.files];
        },
        onChange6() {
            this.shareholdings = [...this.$refs.file6.files];
        },
        onChange7() {
            this.policies = [...this.$refs.file7.files];
        },

        // FUNCTION TO REMOVE FILES 
        remove(i) {
            this.filelist.splice(i, 1);
        },
        remove2(i) {
            this.signatories.splice(i, 1);
        },
        remove3(i) {
            this.ubos.splice(i, 1);
        },
        remove4(i) {
            this.reviewsfiles.splice(i, 1);
        },
        remove5(i) {
            this.articles.splice(i, 1);
        },
        remove6(i) {
            this.shareholdings.splice(i, 1);
        },
        remove7(i) {
            this.policies.splice(i, 1);
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop2(event) {
            event.preventDefault();
            this.$refs.file2.files = event.dataTransfer.files;
            this.onChange2(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop3(event) {
            event.preventDefault();
            this.$refs.file3.files = event.dataTransfer.files;
            this.onChange3(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop4(event) {
            event.preventDefault();
            this.$refs.file4.files = event.dataTransfer.files;
            this.onChange4(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop5(event) {
            event.preventDefault();
            this.$refs.file5.files = event.dataTransfer.files;
            this.onChange5(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop6(event) {
            event.preventDefault();
            this.$refs.file6.files = event.dataTransfer.files;
            this.onChange6(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop7(event) {
            event.preventDefault();
            this.$refs.file7.files = event.dataTransfer.files;
            this.onChange7(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },

        uppload() {
            // console.log(this.filelist, this.signatories, this.ubos, this.reviewsfiles, this.shareholdings, this.policies, this.articles)
            console.log(this.requirement);
            
            var data = {
                "user_id": 1,
                "transaction_id": 4,
                "company_address": this.address,
                "requirement_three": this.requirement,
                "list_directors": this.team,
                "list_ubo": this.ubo,
                "certificate_incorporation": this.filelist,
                "memorandum_article_association": this.articles,
                "noterised_certified_signatories": this.signatories,
                "ownership_shareholding_structure": this.shareholdings,
                "noterised_certified_ubo": this.ubos,
                "aml_cft_policy_document": this.policies,
                "review_executed_agreement": this.reviewsfiles,
                "details_utilize_api_service": this.textarea
            };
            httpRequest.post('/save-requirement', data).then(response => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            // console.log(this.email, this.password, this.radios);
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('http://fonts.cdnfonts.com/css/circular-std');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');

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

.text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #707070;
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

.getStarted {
    margin-top: 30px;
    background: #0D193F;
    border-radius: 5px;
    width: 20%;
    padding: 15px 24px;
    height: auto;

    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

@media (max-width: 1000px) {
    .getStarted {
        margin-top: 30px;
        background: #19295e;
        border-radius: 5px;
        width: 50%;
        padding: 15px 24px;
        height: auto;

        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
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

.container_uplaod {
    margin-top: 58px;
    background: #F6F7F9;
    border-radius: 11px;
    width: 100%;
    height: auto;
    padding: 20px 32px;

    h4 {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: #03435F;
    }

    .text_here {
        background: #FFFFFF;
        border: 0.6px solid #CED4DA;
        border-radius: 4px;
        width: 100%;
        height: 50px;
        padding: 0 10px;
    }
}

.incor {
    background: #FFFFFF;
    border: 0.6px dashed #CED4DA;
    box-sizing: border-box;
    border-radius: 4px;
    width: 95%;
    height: auto;
    padding-bottom: 2rem;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;

    ul li {
        list-style: none;
    }
}

.incor2 {
    background: #FFFFFF;
    border: 0.6px dashed #CED4DA;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
}

.underline {
    color: blue;
}
</style>
