const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-module-sDEHG0Nh.js","assets/occ-bridge-_xoVwa28.js","assets/editor-module-CkWqkX0_.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { _ as o, __tla as __tla_0 } from "./editor-module-sDEHG0Nh.js";
import { c as e, E as p, __tla as __tla_1 } from "./createApp-WSsTPVqX.js";
import { __tla as __tla_2 } from "./occ-bridge-_xoVwa28.js";
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
        o(()=>import("./editor-module-sDEHG0Nh.js").then(async (m)=>{
                await m.__tla;
                return m;
            }).then((t)=>t.cd), __vite__mapDeps([0,1,2]));
    });
});
