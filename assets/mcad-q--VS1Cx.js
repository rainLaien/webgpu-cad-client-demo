const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-module-CTbqIS1s.js","assets/occ-bridge-80y3Kbd_.js","assets/editor-module-CI8Hlrr0.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { l as r, m as i, h as d, i as m, j as n, k as b, _ as u, __tla as __tla_0 } from "./editor-module-CTbqIS1s.js";
import { e as l, f as p, b as c, d as f, g as C, c as P, __tla as __tla_1 } from "./createApp-hsQ2-zDj.js";
import { s as e, S as o, m as h } from "./manifestToAppProfile-BmVb9YZI.js";
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
    const s = {
        id: "mcad",
        label: "P-MCAD",
        entry: "mcad.html",
        theme: "workspace-default",
        platform: o,
        ribbonTabs: f(),
        workbenches: [
            e("platform", "always", {
                ribbonGroups: c(o),
                menuCommands: p(),
                quickAccessCommands: l()
            }),
            e("part-design", "partDesign", {
                treePanels: [
                    {
                        id: "part-design-features",
                        title: "特征",
                        moduleId: "part-design",
                        order: 10
                    },
                    {
                        id: "scene-derived",
                        title: "场景派生",
                        moduleId: "part-design",
                        order: 20,
                        defaultCollapsed: !0
                    }
                ],
                ribbonGroups: i(),
                menuCommands: r()
            }),
            e("sketch", "sketch", {
                ribbonTabs: b(),
                ribbonGroups: n(),
                menuCommands: m(),
                viewportCommandGroups: d()
            })
        ],
        layout: {
            showInspector: !0,
            sidebarWidth: 280
        }
    }, a = h(s);
    C(s, a.capabilities);
    const { app: k } = P(a);
    k.mount("#app");
    typeof requestIdleCallback == "function" && requestIdleCallback(()=>{
        u(()=>import("./editor-module-CTbqIS1s.js").then(async (m)=>{
                await m.__tla;
                return m;
            }).then((t)=>t.cg), __vite__mapDeps([0,1,2]));
    });
});
