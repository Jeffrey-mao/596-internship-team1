
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);


import routes from './routes'

// import store from '@/store'
//Save the push method of the prototype object
// let originPush = VueRouter.prototype.push;
// let originReplace = VueRouter.prototype.replace;
//VueRouter.prototype prototype object adds a method
//location:Information related to route jumps
// VueRouter.prototype.push = function (location, resolve, reject) {

//     if (resolve && reject) {
//         //Represents true: represents two formal parameters accepting parameters [arrow function]
//         originPush.call(this, location, resolve, reject);
//     } else {
//         originPush.call(this, location, () => { }, () => { });
//     }
// }


// VueRouter.prototype.replace = function (location, resolve, reject) {
//     if (resolve && reject) {
//         //Represents true: represents two formal parameters accepting parameters [arrow function]
//         originReplace.call(this, location, resolve, reject);
//     } else {
//         originReplace.call(this, location, () => { }, () => { });
//     }
// }

//Step 2: Expose an instance of the VueRouter class
//Exposing a router to the outside world is essentially an instance of the VueRouter class. A router can manage multiple routes.
const router = new VueRouter({
    //Configure routing
    routes,
    //Set the scroll bar position
    scrollBehavior() {
        //This function of scrolling behavior needs to have a return value, and the return value is an object.
        //You can often set the x|y position of the scroll bar [the x|y value is generally set to a minimum of zero]
        return { y: 0 };
    }
});
export default router;
//Global guard: global front guard [triggered before access]
// router.beforeEach(async (to, from, next) => { });