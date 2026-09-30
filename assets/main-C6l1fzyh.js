const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/createApp-DaVJoDx-.js","assets/editor-module-CL6zRXJJ.js","assets/occ-bridge-CkpJ71Yv.js","assets/editor-module-CI8Hlrr0.css","assets/hybrid.profile-CfIyKRlL.js","assets/createApp-DEKeI6fj.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as t, __tla as __tla_0 } from "./editor-module-CL6zRXJJ.js";
import { __tla as __tla_1 } from "./occ-bridge-CkpJ71Yv.js";
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
            t(()=>import("./createApp-DaVJoDx-.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((_)=>_.i), __vite__mapDeps([0,1,2,3,4,5])),
            t(()=>import("./hybrid.profile-CfIyKRlL.js"), [])
        ]), { app: r } = o(i);
        r.mount("#app");
    }
    p();
});
