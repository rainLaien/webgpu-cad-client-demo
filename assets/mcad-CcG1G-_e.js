const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-module-CL6zRXJJ.js","assets/occ-bridge-CkpJ71Yv.js","assets/editor-module-CI8Hlrr0.css"])))=>i.map(i=>d[i]);
import "./__vite-browser-external-B5Qt9EMX.js";
import { m as r, n as i, i as d, j as n, k as m, l as b, _ as u, __tla as __tla_0 } from "./editor-module-CL6zRXJJ.js";
import { e as l, f as p, b as c, d as f, g as C, c as P, __tla as __tla_1 } from "./createApp-DaVJoDx-.js";
import { s as e, S as o, m as k } from "./manifestToAppProfile-BmVb9YZI.js";
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
                ribbonGroups: m(),
                menuCommands: n(),
                viewportCommandGroups: d()
            })
        ],
        layout: {
            showInspector: !0,
            sidebarWidth: 280
        }
    }, a = k(s);
    C(s, a.capabilities);
    const { app: _ } = P(a);
    _.mount("#app");
    typeof requestIdleCallback == "function" && requestIdleCallback(()=>{
        u(()=>import("./editor-module-CL6zRXJJ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }).then((t)=>t.cU), __vite__mapDeps([0,1,2]));
    });
});
