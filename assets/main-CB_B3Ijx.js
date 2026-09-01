const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/createApp-WSsTPVqX.js","assets/editor-module-sDEHG0Nh.js","assets/occ-bridge-_xoVwa28.js","assets/editor-module-CkWqkX0_.css","assets/hybrid.profile-CfIyKRlL.js","assets/createApp-CXiKdEQD.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as t, __tla as __tla_0 } from "./editor-module-sDEHG0Nh.js";
import { __tla as __tla_1 } from "./occ-bridge-_xoVwa28.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    async function p() {
        const [{ createCadApp: o }, { HYBRID_PROFILE: i }] = await Promise.all([
            t(()=>import("./createApp-WSsTPVqX.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((_)=>_.i), __vite__mapDeps([0,1,2,3,4,5])),
            t(()=>import("./hybrid.profile-CfIyKRlL.js"), [])
        ]), { app: r } = o(i);
        r.mount("#app");
    }
    p();
});
