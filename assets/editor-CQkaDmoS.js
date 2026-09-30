const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-module-CL6zRXJJ.js","assets/occ-bridge-CkpJ71Yv.js","assets/editor-module-CI8Hlrr0.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as o, __tla as __tla_0 } from "./editor-module-CL6zRXJJ.js";
import { c as e, E as p, __tla as __tla_1 } from "./createApp-DaVJoDx-.js";
import { __tla as __tla_2 } from "./occ-bridge-CkpJ71Yv.js";
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
        o(()=>import("./editor-module-CL6zRXJJ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }).then((t)=>t.cU), __vite__mapDeps([0,1,2]));
    });
});
