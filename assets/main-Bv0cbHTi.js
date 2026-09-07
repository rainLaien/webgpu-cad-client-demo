const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/createApp-hsQ2-zDj.js","assets/editor-module-CTbqIS1s.js","assets/occ-bridge-80y3Kbd_.js","assets/editor-module-CI8Hlrr0.css","assets/hybrid.profile-CfIyKRlL.js","assets/createApp-BKmHTXrg.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as t, __tla as __tla_0 } from "./editor-module-CTbqIS1s.js";
import { __tla as __tla_1 } from "./occ-bridge-80y3Kbd_.js";
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
            t(()=>import("./createApp-hsQ2-zDj.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((_)=>_.i), __vite__mapDeps([0,1,2,3,4,5])),
            t(()=>import("./hybrid.profile-CfIyKRlL.js"), [])
        ]), { app: r } = o(i);
        r.mount("#app");
    }
    p();
});
