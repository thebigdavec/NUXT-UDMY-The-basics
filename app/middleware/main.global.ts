export default defineNuxtRouteMiddleware((to, from)=>{
    switch (to.path) {
        case '/':
            console.log('Goooooing home');
            break;
        case '/contact':
            console.log("Reach out, I'll be there");
            break;
        default:
            console.log("I don't know where I'm going.");
    }
})