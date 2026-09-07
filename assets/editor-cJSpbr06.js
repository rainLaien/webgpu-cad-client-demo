const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-module-CTbqIS1s.js","assets/occ-bridge-80y3Kbd_.js","assets/editor-module-CI8Hlrr0.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as o, __tla as __tla_0 } from "./editor-module-CTbqIS1s.js";
import { c as e, E as p, __tla as __tla_1 } from "./createApp-hsQ2-zDj.js";
import { __tla as __tla_2 } from "./occ-bridge-80y3Kbd_.js";
import "./hybrid.profile-CfIyKRlL.js";
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
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    const { app: r } = e(p);
    r.mount("#app");
    typeof requestIdleCallback == "function" && requestIdleCallback(()=>{
        o(()=>import("./editor-module-CTbqIS1s.js").then(async (m)=>{
                await m.__tla;
                return m;
            }).then((t)=>t.cg), __vite__mapDeps([0,1,2]));
    });
});
