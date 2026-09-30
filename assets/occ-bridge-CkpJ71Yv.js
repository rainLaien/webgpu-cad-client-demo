import { e as Xd, p as Xu, _ as Ts, __tla as __tla_0 } from "./editor-module-CL6zRXJJ.js";
let Ul, L0, K0, Ri, Jn, Ci, nc, bf, Vt, Ja, Mf, X0, Ic, qs, U0, N0, Oc, W0, Qg, q0, J0, G0, Y0, tl, Q0, ql, xo, Wl, ix, Vl, E0, Le, Z0, ex, rx, tx, nx, Sn, Bh, ra, fo, na, mr, sx, lx, Io, Di, bm, gp, ax, yy, Of, Ga, Pf, H, hy, yx, Ix, $p, Ip, Sc, bp, wp, cm, Nh, cx, ux, Uh, px, mx, gx, my, hx, $c, Cc, aa, ta, Lc, Kc, sm, um, dh, am, kh, Wg, ia, fx, Zu, lr, ca, ox, uo, Nt, zh, jh, _m, Bn, H0, dx, nu, zc, xe, el, Nc, Hc, Vc, os, ci, Ge;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Rn = new Set;
    let Wo = !1;
    Zu = function(e, t, r = 2) {
        const n = t && t.length, i = n ? t[0] * r : e.length;
        Rn.size && Rn.clear();
        let o = Zd(e, 0, i, r, !0);
        const s = [];
        if (!o || o.next === o.prev) return s;
        let a = 0, d = 0, l = 0;
        if (n && (o = nf(e, t, o, r)), e.length > 80 * r) {
            a = e[0], d = e[1];
            let c = a, f = d;
            for(let u = r; u < i; u += r){
                const h = e[u], y = e[u + 1];
                h < a && (a = h), y < d && (d = y), h > c && (c = h), y > f && (f = y);
            }
            l = Math.max(c - a, f - d), l = l !== 0 ? 32767 / l : 0;
        }
        return Go(o, s, a, d, l), s;
    };
    function Zd(e, t, r, n, i) {
        let o = null;
        if (i === gf(e, t, r, n) > 0) for(let s = t; s < r; s += n)o = La(s / n | 0, e[s], e[s + 1], o);
        else for(let s = r - n; s >= t; s -= n)o = La(s / n | 0, e[s], e[s + 1], o);
        return o && Cn(o, o.next) && (Dn(o), o = o.next), o;
    }
    function sr(e, t = e) {
        const r = t === e;
        let n = e, i;
        do i = !1, n !== n.next && (Rn.size === 0 || !Rn.has(n)) && (Cn(n, n.next) || Ee(n.prev, n, n.next) === 0) ? ((r || n === t) && (t = n.prev), Wo = !0, Dn(n), n = n.prev, i = !0) : (r || n !== t) && (n = n.next, i = !r);
        while (i || n !== t);
        return t;
    }
    function Go(e, t, r, n, i) {
        i && uf(e, r, n, i);
        let o = e, s = !1;
        for(; e.prev !== e.next;){
            const a = e.prev, d = e.next;
            if (Ee(a, e, d) < 0 && (i ? ef(e, r, n, i) : Qu(e))) {
                t.push(a.i, e.i, d.i), Dn(e), e = d, o = d;
                continue;
            }
            if (e = d, e === o) {
                if (Wo = !1, e = sr(e), Wo) {
                    o = e;
                    continue;
                }
                if (!s) {
                    e = tf(e, t), o = e, s = !0;
                    continue;
                }
                rf(e, t, r, n, i);
                break;
            }
        }
    }
    function Qu(e) {
        const t = e.prev, r = e, n = e.next, i = t.x, o = r.x, s = n.x, a = t.y, d = r.y, l = n.y, c = Math.min(i, o, s), f = Math.min(a, d, l), u = Math.max(i, o, s), h = Math.max(a, d, l);
        let y = n.next;
        for(; y !== t;){
            if (y.x >= c && y.x <= u && y.y >= f && y.y <= h && !(i === y.x && a === y.y) && Mi(i, a, o, d, s, l, y.x, y.y) && Ee(y.prev, y, y.next) >= 0) return !1;
            y = y.next;
        }
        return !0;
    }
    function ef(e, t, r, n) {
        const i = e.prev, o = e, s = e.next, a = i.x, d = o.x, l = s.x, c = i.y, f = o.y, u = s.y, h = Math.min(a, d, l), y = Math.min(c, f, u), I = Math.max(a, d, l), g = Math.max(c, f, u), x = Zo(h, y, t, r, n), v = Zo(I, g, t, r, n);
        let b = e.prevZ;
        for(; b && b.z >= x;){
            if (b.x >= h && b.x <= I && b.y >= y && b.y <= g && b !== s && !(a === b.x && c === b.y) && Mi(a, c, d, f, l, u, b.x, b.y) && Ee(b.prev, b, b.next) >= 0) return !1;
            b = b.prevZ;
        }
        let m = e.nextZ;
        for(; m && m.z <= v;){
            if (m.x >= h && m.x <= I && m.y >= y && m.y <= g && m !== s && !(a === m.x && c === m.y) && Mi(a, c, d, f, l, u, m.x, m.y) && Ee(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        return !0;
    }
    function tf(e, t) {
        let r = e, n = !1;
        do {
            const i = r.prev, o = r.next.next;
            tc(i, r, r.next, o, !1) && $n(i, o) && $n(o, i) && (t.push(i.i, r.i, o.i), Dn(r), Dn(r.next), r = e = o, n = !0), r = r.next;
        }while (r !== e);
        return n ? sr(r) : r;
    }
    function rf(e, t, r, n, i) {
        let o = e;
        do {
            let s = o.next.next;
            for(; s !== o.prev;){
                if (o.i !== s.i && hf(o, s)) {
                    let a = rc(o, s);
                    o = sr(o, o.next), a = sr(a, a.next), Go(o, t, r, n, i), Go(a, t, r, n, i);
                    return;
                }
                s = s.next;
            }
            o = o.next;
        }while (o !== e);
    }
    let Yo = !1;
    function nf(e, t, r, n) {
        const i = [];
        for(let o = 0, s = t.length; o < s; o++){
            const a = t[o] * n, d = o < s - 1 ? t[o + 1] * n : e.length, l = Zd(e, a, d, n, !1);
            l === l.next && Rn.add(l), i.push(pf(l));
        }
        i.sort(of), af(e.length / n, t.length), ec(r, r), Yo = !0;
        for(let o = 0; o < i.length; o++)r = sf(i[o], r);
        return Yo = !1, sr(r);
    }
    function of(e, t) {
        return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
    }
    function sf(e, t) {
        const r = cf(e, t);
        if (!r) return t;
        const n = rc(r, e), i = n.next;
        return ec(r, i.next), sr(n, n.next), sr(r, r.next);
    }
    const Qd = 16;
    let we = new Float64Array(0), Pi = 0;
    const Jo = [], Xo = [];
    function af(e, t) {
        const r = Math.ceil((e + 2 * t) / Qd) + t + 2;
        we.length < r * 4 && (we = new Float64Array(r * 4)), Pi = 0;
    }
    function ec(e, t) {
        let r = e;
        do {
            const n = Pi++;
            Jo[n] = r;
            let i = 1 / 0, o = 1 / 0, s = -1 / 0, a = -1 / 0, d = 0;
            do {
                const c = r.next;
                r.z = n, r.x < i && (i = r.x), r.x > s && (s = r.x), r.y < o && (o = r.y), r.y > a && (a = r.y), c.x < i && (i = c.x), c.x > s && (s = c.x), c.y < o && (o = c.y), c.y > a && (a = c.y), r = c;
            }while (++d < Qd && r !== t);
            Xo[n] = r;
            const l = n * 4;
            we[l] = i, we[l + 1] = o, we[l + 2] = s, we[l + 3] = a;
        }while (r !== t);
    }
    function df(e, t) {
        const r = e.z * 4;
        t.x < we[r] && (we[r] = t.x), t.y < we[r + 1] && (we[r + 1] = t.y), t.x > we[r + 2] && (we[r + 2] = t.x), t.y > we[r + 3] && (we[r + 3] = t.y);
    }
    function Va(e) {
        let t = Xo[e];
        for(; t.prev.next !== t;)t = t.next;
        return Xo[e] = t, t;
    }
    function Ka(e) {
        let t = Jo[e];
        for(; t.prev.next !== t;)t = t.next;
        return Jo[e] = t, t;
    }
    function cf(e, t) {
        let r = t;
        const n = e.x, i = e.y;
        let o = -1 / 0, s;
        if (Cn(e, r)) return r;
        for(let u = 0, h = 0; u < Pi; u++, h += 4){
            if (i < we[h + 1] || i > we[h + 3] || we[h] > n || we[h + 2] <= o) continue;
            const y = Va(u);
            r = Ka(u);
            do {
                if (r.prev.next === r) {
                    if (Cn(e, r.next)) return r.next;
                    if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                        const I = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (I <= n && I > o && (o = I, s = r.x < r.next.x ? r : r.next, I === n)) return s;
                    }
                }
                r = r.next;
            }while (r !== y);
        }
        if (!s) return null;
        const a = s.x, d = s.y, l = Math.min(i, d), c = Math.max(i, d);
        let f = 1 / 0;
        for(let u = 0, h = 0; u < Pi; u++, h += 4){
            if (we[h + 2] < a || we[h] > n || we[h + 3] < l || we[h + 1] > c) continue;
            const y = Va(u);
            r = Ka(u);
            do {
                if (r.prev.next === r && n >= r.x && r.x >= a && n !== r.x && Mi(i < d ? n : o, i, a, d, i < d ? o : n, i, r.x, r.y)) {
                    const I = Math.abs(i - r.y) / (n - r.x);
                    ($n(r, e) || r.y === i && r.next.y === i && r.next.x > n) && (I < f || I === f && (r.x > s.x || r.x === s.x && lf(s, r))) && (s = r, f = I);
                }
                r = r.next;
            }while (r !== y);
        }
        return s;
    }
    function lf(e, t) {
        return Ee(e.prev, e, t.prev) < 0 && Ee(t.next, e, e.next) < 0;
    }
    const Ze = [];
    let tn = [], Ut = new Uint32Array(0), rn = new Uint32Array(0);
    const nn = new Uint32Array(256);
    function uf(e, t, r, n) {
        let i = e, o = 0;
        do i.z = Zo(i.x, i.y, t, r, n), Ze[o++] = i, i = i.next;
        while (i !== e);
        ff(o);
        let s = null;
        for(let a = 0; a < o; a++){
            const d = Ze[a];
            d.prevZ = s, s && (s.nextZ = d), s = d;
        }
        s.nextZ = null;
    }
    function ff(e) {
        if (e <= 32) {
            for(let t = 1; t < e; t++){
                const r = Ze[t], n = r.z;
                let i = t - 1;
                for(; i >= 0 && Ze[i].z > n;)Ze[i + 1] = Ze[i], i--;
                Ze[i + 1] = r;
            }
            return;
        }
        Ut.length < e && (Ut = new Uint32Array(e), rn = new Uint32Array(e), tn = new Array(e));
        for(let t = 0; t < e; t++)Ut[t] = Ze[t].z;
        ti(e, Ze, Ut, tn, rn, 0), ti(e, tn, rn, Ze, Ut, 8), ti(e, Ze, Ut, tn, rn, 16), ti(e, tn, rn, Ze, Ut, 24);
    }
    function ti(e, t, r, n, i, o) {
        nn.fill(0);
        for(let a = 0; a < e; a++)nn[r[a] >>> o & 255]++;
        let s = 0;
        for(let a = 0; a < 256; a++){
            const d = nn[a];
            nn[a] = s, s += d;
        }
        for(let a = 0; a < e; a++){
            const d = r[a], l = nn[d >>> o & 255]++;
            n[l] = t[a], i[l] = d;
        }
    }
    function Zo(e, t, r, n, i) {
        return e = (e - r) * i | 0, t = (t - n) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
    }
    function pf(e) {
        let t = e, r = e;
        do (t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next;
        while (t !== e);
        return r;
    }
    function Mi(e, t, r, n, i, o, s, a) {
        return (i - s) * (t - a) >= (e - s) * (o - a) && (e - s) * (n - a) >= (r - s) * (t - a) && (r - s) * (o - a) >= (i - s) * (n - a);
    }
    function hf(e, t) {
        const r = Cn(e, t) && Ee(e.prev, e, e.next) > 0 && Ee(t.prev, t, t.next) > 0;
        return e.next.i !== t.i && (r || $n(e, t) && $n(t, e) && (Ee(e.prev, e, t.prev) !== 0 || Ee(e, t.prev, t) !== 0)) && !mf(e, t) && (r || yf(e, t));
    }
    function Ee(e, t, r) {
        return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
    }
    function Cn(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function tc(e, t, r, n, i = !0) {
        const o = Ee(e, t, r), s = Ee(e, t, n), a = Ee(r, n, e), d = Ee(r, n, t);
        return (o > 0 && s < 0 || o < 0 && s > 0) && (a > 0 && d < 0 || a < 0 && d > 0) ? !0 : i ? !!(o === 0 && ri(e, r, t) || s === 0 && ri(e, n, t) || a === 0 && ri(r, e, n) || d === 0 && ri(r, t, n)) : !1;
    }
    function ri(e, t, r) {
        return t.x <= Math.max(e.x, r.x) && t.x >= Math.min(e.x, r.x) && t.y <= Math.max(e.y, r.y) && t.y >= Math.min(e.y, r.y);
    }
    function mf(e, t) {
        const r = Math.min(e.x, t.x), n = Math.max(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.y, t.y);
        let s = e;
        do {
            const a = s.next;
            if (s.x > n && a.x > n || s.x < r && a.x < r || s.y > o && a.y > o || s.y < i && a.y < i) {
                s = a;
                continue;
            }
            if (s.i !== e.i && a.i !== e.i && s.i !== t.i && a.i !== t.i && tc(s, a, e, t)) return !0;
            s = a;
        }while (s !== e);
        return !1;
    }
    function $n(e, t) {
        return Ee(e.prev, e, e.next) < 0 ? Ee(e, t, e.next) >= 0 && Ee(e, e.prev, t) >= 0 : Ee(e, t, e.prev) < 0 || Ee(e, e.next, t) < 0;
    }
    function yf(e, t) {
        let r = e, n = !1;
        const i = (e.x + t.x) / 2, o = (e.y + t.y) / 2;
        do {
            const s = r.next;
            r.y > o != s.y > o && i < (s.x - r.x) * (o - r.y) / (s.y - r.y) + r.x && (n = !n), r = s;
        }while (r !== e);
        return n;
    }
    function rc(e, t) {
        const r = Qo(e.i, e.x, e.y), n = Qo(t.i, t.x, t.y), i = e.next, o = t.prev;
        return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n;
    }
    function La(e, t, r, n) {
        const i = Qo(e, t, r);
        return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
    }
    function Dn(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), Yo && df(e.prev, e.next);
    }
    function Qo(e, t, r) {
        return {
            i: e,
            x: t,
            y: r,
            prev: null,
            next: null,
            z: 0,
            prevZ: null,
            nextZ: null
        };
    }
    function gf(e, t, r, n) {
        let i = 0;
        for(let o = t, s = r - n; o < r; o += n)i += (e[s] - e[o]) * (e[o + 1] + e[s + 1]), s = o;
        return i;
    }
    const If = {
        origin: [
            0,
            0,
            0
        ],
        xAxis: [
            1,
            0,
            0
        ],
        yAxis: [
            0,
            1,
            0
        ],
        zAxis: [
            0,
            0,
            1
        ]
    }, Qt = (e, t)=>e.reduce((r, n, i)=>r + n * t[i], 0);
    function ut(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`${t}需要三个有限数值`);
        return [
            ...e
        ];
    }
    function on(e) {
        const t = e, r = ut(t?.origin, "原点"), n = ut(t?.xAxis, "X 轴"), i = ut(t?.yAxis, "Y 轴"), o = ut(t?.zAxis, "Z 轴"), s = [
            n[1] * i[2] - n[2] * i[1],
            n[2] * i[0] - n[0] * i[2],
            n[0] * i[1] - n[1] * i[0]
        ];
        if ([
            n,
            i,
            o
        ].some((a)=>Math.abs(Qt(a, a) - 1) > 1e-9) || Math.abs(Qt(n, i)) > 1e-9 || Math.abs(Qt(n, o)) > 1e-9 || Math.abs(Qt(i, o)) > 1e-9 || Math.abs(Qt(s, o) - 1) > 1e-9) throw new Error("坐标系必须为单位正交右手框架");
        return {
            origin: r,
            xAxis: n,
            yAxis: i,
            zAxis: o
        };
    }
    Ri = function(e, t = If) {
        if (e.mode === "fixed") return on(e.frame);
        if (e.mode === "geometry") {
            const g = t, x = ut(g.origin, "支撑原点"), v = ut(g.normal, "支撑法向"), b = (N)=>{
                const V = Math.hypot(...N);
                if (!(V > 1e-10)) throw new Error("支撑方向退化");
                return N.map((D)=>D / V);
            }, m = b(v).map((N)=>e.reverseZ === !0 ? -N : N), w = g.uAxis ? ut(g.uAxis, "支撑 U 轴") : Math.abs(m[0]) < .9 ? [
                1,
                0,
                0
            ] : [
                0,
                1,
                0
            ], S = Qt(w, m), k = b(w.map((N, V)=>N - S * m[V])), M = [
                m[1] * k[2] - m[2] * k[1],
                m[2] * k[0] - m[0] * k[2],
                m[0] * k[1] - m[1] * k[0]
            ], B = e.originUV ?? [
                0,
                0
            ];
            if (!Array.isArray(B) || B.length !== 2 || B.some((N)=>typeof N != "number" || !Number.isFinite(N))) throw new Error("原点 U/V 需要两个有限数值");
            const C = e.reverseZ === !0 ? -1 : 1, j = x.map((N, V)=>N + k[V] * Number(B[0]) + M[V] * C * Number(B[1]));
            if (e.xDirection) {
                const N = b(ut(e.xDirection, "X 方向")), V = N.map((G, F)=>G - Qt(N, m) * m[F]);
                if (Math.hypot(...V) < 1e-9) throw new Error("X 方向与支撑法向平行，请选择其他直边或轴");
                const D = b(V).map((G)=>e.reverseX === !0 ? -G : G), K = [
                    m[1] * D[2] - m[2] * D[1],
                    m[2] * D[0] - m[0] * D[2],
                    m[0] * D[1] - m[1] * D[0]
                ];
                return on({
                    origin: j,
                    xAxis: D,
                    yAxis: K,
                    zAxis: m
                });
            }
            return on({
                origin: j,
                xAxis: k,
                yAxis: M,
                zAxis: m
            });
        }
        if (e.mode !== "relative") throw new Error("不支持的坐标系构造方式");
        const r = on(t), n = ut(e.translation, "平移"), i = ut(e.rotation, "旋转"), [o, s, a] = i.map((g)=>g % 360 * Math.PI / 180), d = Math.cos(o), l = Math.sin(o), c = Math.cos(s), f = Math.sin(s), u = Math.cos(a), h = Math.sin(a), y = (g)=>[
                0,
                1,
                2
            ].map((x)=>r.xAxis[x] * g[0] + r.yAxis[x] * g[1] + r.zAxis[x] * g[2]), I = y(n);
        return on({
            origin: r.origin.map((g, x)=>g + I[x]),
            xAxis: y([
                u * c,
                h * c,
                -f
            ]),
            yAxis: y([
                u * f * l - h * d,
                h * f * l + u * d,
                c * l
            ]),
            zAxis: y([
                u * f * d + h * l,
                h * f * d - u * l,
                c * d
            ])
        });
    };
    Ci = function(e, t) {
        const [r, n, i] = t === "xy" ? [
            e.xAxis,
            e.yAxis,
            e.zAxis
        ] : t === "yz" ? [
            e.yAxis,
            e.zAxis,
            e.xAxis
        ] : [
            e.zAxis,
            e.xAxis,
            e.yAxis
        ];
        return {
            origin: [
                ...e.origin
            ],
            uAxis: [
                ...r
            ],
            vAxis: [
                ...n
            ],
            normal: [
                ...i
            ],
            width: 20,
            height: 20
        };
    };
    bf = function(e, t = [
        0,
        0
    ], r = 0) {
        if (!Array.isArray(t) || t.length !== 2 || t.some((i)=>typeof i != "number" || !Number.isFinite(i))) throw new Error("平面原点 U/V 必须为有限数值");
        if (typeof r != "number" || !Number.isFinite(r)) throw new Error("面内转角必须为有限数值");
        const n = Ci(Ri({
            mode: "geometry",
            originUV: t
        }, e), "xy");
        return nc(n, n.origin, n.normal, r);
    };
    nc = function(e, t, r, n) {
        if (![
            ...t,
            ...r,
            n
        ].every(Number.isFinite)) throw new Error("旋转轴和角度必须为有限数值");
        const i = Math.hypot(...r);
        if (i < 1e-9) throw new Error("旋转轴退化");
        const o = r.map((u)=>u / i), s = n * Math.PI / 180, a = Math.cos(s), d = Math.sin(s), l = (u)=>{
            const h = u.reduce((I, g, x)=>I + g * o[x], 0), y = [
                o[1] * u[2] - o[2] * u[1],
                o[2] * u[0] - o[0] * u[2],
                o[0] * u[1] - o[1] * u[0]
            ];
            return u.map((I, g)=>I * a + y[g] * d + o[g] * h * (1 - a));
        }, c = Ri({
            mode: "geometry"
        }, e), f = l(c.origin.map((u, h)=>u - t[h]));
        return Ci({
            origin: f.map((u, h)=>u + t[h]),
            xAxis: l(c.xAxis),
            yAxis: l(c.yAxis),
            zAxis: l(c.zAxis)
        }, "xy");
    };
    const wf = new Set([
        "solidid",
        "mesh",
        "occhandle"
    ]);
    function xf(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function Ha(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function ic(e, t) {
        if (wf.has(xf(e))) throw new Error(`${t}.${e} is evaluation state and cannot be persisted`);
    }
    function $i(e, t, r, n) {
        if (e === null || typeof e == "string" || typeof e == "boolean") return;
        if (typeof e == "number") {
            if (!Number.isFinite(e)) throw new Error(`${t} must contain only finite numbers`);
            return;
        }
        if (typeof e != "object") throw new Error(`${t} must contain only JSON values`);
        if (r.has(e)) throw new Error(`${t} must not contain cycles`);
        const i = new Set(r);
        if (i.add(e), Array.isArray(e)) {
            e.forEach((s, a)=>$i(s, `${t}[${a}]`, i, n));
            return;
        }
        const o = Object.getPrototypeOf(e);
        if (o !== Object.prototype && o !== null) throw new Error(`${t} must contain only plain JSON objects`);
        for (const [s, a] of Object.entries(e))n || ic(s, t), $i(a, `${t}.${s}`, i, n);
    }
    function Bs(e) {
        if (e !== null && typeof e == "object") {
            for (const t of Object.values(e))Bs(t);
            Object.freeze(e);
        }
        return e;
    }
    function qa(e, t) {
        for (const [r, n] of Object.entries(e))ic(r, t), $i(n, `${t}.${r}`, new Set, !1);
        return Bs(structuredClone(e));
    }
    function zs(e) {
        for (const [t, r] of Object.entries(e))$i(r, `outputs.${t}`, new Set, !0);
        return Bs(structuredClone(e));
    }
    function fr(e) {
        if (Ha(e.id, "FeatureEnvelope.id"), Ha(e.typeId, "FeatureEnvelope.typeId"), !Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("FeatureEnvelope.timestamp must be a non-negative safe integer");
        const t = qa(e.parameters ?? {}, "parameters"), r = qa(e.references ?? {}, "references");
        for (const n of Object.keys(t))if (Object.hasOwn(r, n)) throw new Error(`FeatureEnvelope field ${n} cannot be both a parameter and a reference`);
        return Object.freeze({
            id: e.id,
            typeId: e.typeId,
            name: e.name,
            suppressed: e.suppressed ?? !1,
            timestamp: e.timestamp,
            parameters: t,
            references: r
        });
    }
    function js(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("featurePayloadVersion must be a positive safe integer");
        return e;
    }
    const Sf = js(1);
    function Un(e) {
        const t = fr(e);
        return Object.freeze({
            ...t,
            featurePayloadVersion: js(e.featurePayloadVersion)
        });
    }
    class oc extends Error {
        cycle;
        constructor(t){
            super(`Feature dependency cycle: ${t.join(" -> ")}`), this.name = "CycleDetectedError", this.cycle = t;
        }
    }
    function sc(e, t, r) {
        const n = Ns(e, r);
        if (n) throw new oc(n);
        const i = new Map;
        for (const a of e)i.set(a, t.get(a)?.length ?? 0);
        const o = e.filter((a)=>(i.get(a) ?? 0) === 0), s = [];
        for(; o.length > 0;){
            const a = o.shift();
            s.push(a);
            for (const d of r.get(a) ?? []){
                const l = (i.get(d) ?? 0) - 1;
                i.set(d, l), l === 0 && o.push(d);
            }
        }
        return s;
    }
    function Ns(e, t) {
        const r = new Map, n = new Map;
        for (const o of e)r.set(o, "unvisited");
        const i = (o)=>{
            r.set(o, "visiting");
            for (const s of t.get(o) ?? []){
                const a = r.get(s);
                if (a === "visiting") {
                    const d = [
                        s
                    ];
                    let l = o;
                    for(; l && l !== s;)d.unshift(l), l = n.get(l) ?? null;
                    return d.unshift(s), d;
                }
                if (a === "unvisited") {
                    n.set(s, o);
                    const d = i(s);
                    if (d) return d;
                }
            }
            return r.set(o, "done"), null;
        };
        for (const o of e)if (r.get(o) === "unvisited") {
            n.set(o, null);
            const s = i(o);
            if (s) return s;
        }
        return null;
    }
    function Ua(e, t, r, n) {
        const i = new Set(e), o = new Set(i), s = [
            ...i
        ];
        for(; s.length > 0;){
            const d = s.shift();
            for (const l of n.get(d) ?? [])o.has(l) || (o.add(l), s.push(l));
        }
        return sc(t, r, n).filter((d)=>o.has(d));
    }
    class kf {
        _nodeIds;
        _dependencies = new Map;
        _dependents = new Map;
        constructor(t){
            const r = new Set;
            for (const n of t){
                if (r.has(n.id)) throw new Error(`FeatureGraph: duplicate feature id ${n.id}`);
                r.add(n.id);
            }
            for (const n of t){
                for (const o of n.dependencyIds)if (!r.has(o)) throw new Error(`FeatureGraph: feature ${n.id} has unknown dependency ${o}`);
                const i = [
                    ...n.dependencyIds
                ];
                this._dependencies.set(n.id, i);
                for (const o of i){
                    const s = this._dependents.get(o) ?? [];
                    s.push(n.id), this._dependents.set(o, s);
                }
            }
            this._nodeIds = [
                ...r
            ];
        }
        topologicalSort() {
            return sc(this._nodeIds, this._dependencies, this._dependents);
        }
        findCycle() {
            return Ns(this._nodeIds, this._dependents);
        }
        nodeIds() {
            return Object.freeze([
                ...this._nodeIds
            ]);
        }
        dependenciesOf(t) {
            return Object.freeze([
                ...this._dependencies.get(t) ?? []
            ]);
        }
        dependentsOf(t) {
            return Object.freeze([
                ...this._dependents.get(t) ?? []
            ]);
        }
        getDownstreamInvalidation(t) {
            return Ua([
                t
            ], this._nodeIds, this._dependencies, this._dependents);
        }
        getDownstreamClosure(t) {
            return Ua(t, this._nodeIds, this._dependencies, this._dependents);
        }
    }
    function Wa(e, t, r) {
        const n = r.get(e) - r.get(t);
        return n !== 0 ? n : e < t ? -1 : e > t ? 1 : 0;
    }
    function vf(e, t) {
        const r = e.nodeIds(), n = new Set(r);
        if (t.length !== r.length) throw new Error("FeatureExecutionPlanner historyOrder must contain every graph Feature exactly once");
        const i = new Map;
        return t.forEach((o, s)=>{
            if (!n.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains unknown Feature ${o}`);
            if (i.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains duplicate Feature ${o}`);
            i.set(o, s);
        }), i;
    }
    function Ff(e, t) {
        const r = vf(e, t), n = e.findCycle();
        if (n) throw new oc(n);
        const i = new Map(e.nodeIds().map((d)=>[
                d,
                e.dependenciesOf(d).length
            ])), o = e.nodeIds().filter((d)=>i.get(d) === 0).sort((d, l)=>Wa(d, l, r)), s = [];
        for(; o.length > 0;){
            const d = o.shift();
            s.push(Object.freeze({
                featureId: d,
                historyIndex: r.get(d)
            }));
            for (const l of e.dependentsOf(d)){
                const c = i.get(l) - 1;
                i.set(l, c), c === 0 && o.push(l);
            }
            o.sort((l, c)=>Wa(l, c, r));
        }
        const a = Object.freeze(s);
        return Object.freeze({
            steps: a,
            featureIds: Object.freeze(a.map((d)=>d.featureId))
        });
    }
    class oo extends Error {
        code;
        producerFeatureId;
        outputKey;
        semanticId;
        constructor(t, r, n){
            super(r), this.name = "SemanticIdentityValidationError", this.code = t, this.producerFeatureId = n.producerFeatureId, this.outputKey = n.outputKey, this.semanticId = n.semanticId;
        }
    }
    const _f = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, Ef = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function ac(e) {
        return e.trim().toLowerCase();
    }
    function Wn(e, t = {}) {
        const r = ac(e);
        if (!_f.test(r)) throw new oo("invalid-output-key", `Invalid semantic outputKey ${JSON.stringify(e)}`, {
            producerFeatureId: t.producerFeatureId ?? "",
            outputKey: e,
            semanticId: t.semanticId
        });
        return r;
    }
    function Af(e, t) {
        const r = ac(e);
        if (!Ef.test(r)) throw new oo("invalid-semantic-id", `Invalid semanticId ${JSON.stringify(e)} for producer ${JSON.stringify(t.producerFeatureId)} outputKey ${JSON.stringify(t.outputKey)}`, {
            ...t,
            semanticId: e
        });
        return r;
    }
    function es(e) {
        const t = e.producerFeatureId.trim();
        if (t.length === 0) throw new oo("invalid-producer-feature-id", "Semantic identity producerFeatureId must not be empty", e);
        const r = Wn(e.outputKey, e);
        return Object.freeze({
            producerFeatureId: t,
            outputKey: r,
            semanticId: Af(e.semanticId, {
                producerFeatureId: t,
                outputKey: r
            })
        });
    }
    function Vr(e) {
        if (typeof e.producerFeatureId != "string" || !e.producerFeatureId.trim()) throw new Error("FeatureOutputReference requires a producerFeatureId");
        if (typeof e.outputKey != "string") throw new Error("FeatureOutputReference requires an outputKey");
        return Object.freeze({
            producerFeatureId: e.producerFeatureId,
            outputKey: Wn(e.outputKey)
        });
    }
    function re(e) {
        const t = Vr(e);
        return JSON.stringify([
            t.producerFeatureId,
            t.outputKey
        ]);
    }
    Ge = function(e) {
        const t = new Map, r = (n)=>{
            if (n === null || typeof n != "object") return;
            if (Array.isArray(n)) {
                n.forEach(r);
                return;
            }
            const i = n;
            if (Object.hasOwn(i, "producerFeatureId") || Object.hasOwn(i, "outputKey")) {
                if (typeof i.producerFeatureId != "string" || typeof i.outputKey != "string") throw new Error("Canonical Feature reference requires producerFeatureId and outputKey");
                const o = Vr({
                    producerFeatureId: i.producerFeatureId,
                    outputKey: i.outputKey
                });
                t.set(re(o), o);
                return;
            }
            Object.values(i).forEach(r);
        };
        return r(e), Object.freeze([
            ...t.values()
        ]);
    };
    Of = function(e) {
        switch(e){
            case "brep.box":
                return [
                    "length",
                    "width",
                    "height"
                ];
            case "brep.hole":
                return [
                    "radius",
                    "depth"
                ];
            case "brep.fillet":
                return [
                    "radius"
                ];
            default:
                return [];
        }
    };
    Ga = function(e, t) {
        const r = e.trim();
        return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(r) ? `${r}${t === "length" ? "mm" : t === "angle" ? "deg" : ""}` : r;
    };
    function dc(e) {
        if (!e || !Array.isArray(e.parameters) || !Array.isArray(e.bindings)) throw new Error("Invalid model expressions");
        const t = new Set, r = e.parameters.map((o)=>{
            if (!o || typeof o.key != "string" || !/^[A-Za-z_][A-Za-z0-9_.]*$/.test(o.key) || o.key.startsWith("__binding_")) throw new Error("Invalid parameter name");
            if (t.has(o.key)) throw new Error(`Duplicate parameter ${o.key}`);
            if (t.add(o.key), typeof o.expression != "string" || !o.expression.trim()) throw new Error(`Empty formula: ${o.key}`);
            if (![
                "length",
                "angle",
                "scalar"
            ].includes(o.expectedDimension)) throw new Error(`Invalid dimension: ${o.key}`);
            if (o.group !== void 0 && typeof o.group != "string" || o.comment !== void 0 && typeof o.comment != "string") throw new Error(`Invalid parameter metadata: ${o.key}`);
            return Object.freeze({
                key: o.key,
                expression: o.expression,
                expectedDimension: o.expectedDimension,
                ...o.group !== void 0 ? {
                    group: o.group
                } : {},
                ...o.comment !== void 0 ? {
                    comment: o.comment
                } : {}
            });
        }), n = new Set, i = e.bindings.map((o)=>{
            if (!o || typeof o.featureId != "string" || !o.featureId || typeof o.field != "string" || !o.field || typeof o.expression != "string" || !o.expression.trim()) throw new Error("Invalid feature expression");
            const s = JSON.stringify([
                o.featureId,
                o.field
            ]);
            if (n.has(s)) throw new Error("Duplicate feature expression");
            return n.add(s), Object.freeze({
                featureId: o.featureId,
                field: o.field,
                expression: o.expression
            });
        });
        return Object.freeze({
            parameters: Object.freeze(r),
            bindings: Object.freeze(i)
        });
    }
    Pf = function(e, t) {
        const r = dc(t), n = r.parameters.map((s)=>({
                ...s,
                expression: Ga(s.expression, s.expectedDimension)
            }));
        r.bindings.forEach((s, a)=>{
            const d = e.features.find((l)=>l.envelope.id === s.featureId);
            if (!d || !Of(d.envelope.typeId).includes(s.field) || typeof d.envelope.parameters[s.field] != "number") throw new Error(`Unsupported expression target: ${s.field}`);
            n.push({
                key: `__binding_${a}`,
                expression: Ga(s.expression, "length"),
                expectedDimension: "length"
            });
        });
        const i = Xd(n);
        if ("error" in i) throw new Error(i.error.message);
        const o = r.bindings.map((s, a)=>{
            const d = i.value.values.get(`__binding_${a}`).value;
            if (!(d > 0)) throw new Error(`${s.field}: dimension must be greater than zero`);
            return {
                ...s,
                value: d
            };
        });
        return {
            state: r,
            values: i.value.values,
            bindings: o
        };
    };
    function Po(e, t) {
        if (typeof e != "string" || !e.trim()) throw new Error(`PartModel ${t} is required`);
        return e;
    }
    function sn(e, t, r) {
        const n = new Map;
        for (const i of e){
            const o = t(i);
            if (n.has(o)) throw new Error(`PartModel duplicate ${r}: ${o}`);
            n.set(o, i);
        }
        return n;
    }
    Vt = function(e) {
        const t = Po(e.partId, "partId"), r = e.features.map((d)=>Object.freeze({
                envelope: Un(d.envelope),
                bodyOutputs: Object.freeze((d.bodyOutputs ?? []).map((l)=>Object.freeze({
                        outputKey: Wn(l.outputKey),
                        bodyId: Po(l.bodyId, "output bodyId")
                    }))),
                replaces: Object.freeze((d.replaces ?? []).map(Vr))
            })), n = e.bodies.map((d)=>{
            if (d.kind !== "solid" && d.kind !== "sheet") throw new Error(`PartModel unsupported Body kind: ${String(d.kind)}`);
            if (typeof d.name != "string") throw new Error("PartModel Body name must be a string");
            return Object.freeze({
                id: Po(d.id, "bodyId"),
                name: d.name,
                kind: d.kind,
                origin: Vr(d.origin)
            });
        });
        sn(r, (d)=>d.envelope.id, "featureId");
        const i = sn(n, (d)=>d.id, "bodyId"), o = new Map(r.map((d, l)=>[
                d.envelope.id,
                l
            ])), s = new Map;
        for (const d of r){
            const l = d.envelope.id;
            sn(d.bodyOutputs, (c)=>c.outputKey, `outputKey in ${l}`), sn(d.bodyOutputs, (c)=>c.bodyId, `output Body in ${l}`), sn(d.replaces, re, `replacement in ${l}`);
            for (const c of d.bodyOutputs){
                if (!i.has(c.bodyId)) throw new Error(`Unknown output Body ${c.bodyId}`);
                s.set(re({
                    producerFeatureId: l,
                    outputKey: c.outputKey
                }), c.bodyId);
            }
            for (const c of Ge(d.envelope.references)){
                const f = o.get(c.producerFeatureId);
                if (f === void 0) throw new Error(`Unknown input producer ${c.producerFeatureId}`);
                if (f >= o.get(l)) throw new Error(`Feature ${l} has a forward or self input reference`);
            }
        }
        for (const d of n)if (s.get(re(d.origin)) !== d.id) throw new Error(`Body ${d.id} origin must identify its own declared output`);
        for (const d of r){
            const l = d.envelope.id, c = new Set(Ge(d.envelope.references).map(re));
            for (const f of d.replaces){
                const u = re(f);
                if (!c.has(u)) throw new Error(`Feature ${l} replacement is not an explicit input`);
                if (!s.has(u)) throw new Error(`Feature ${l} replacement is not a declared Body output`);
            }
            for (const f of d.bodyOutputs){
                const u = i.get(f.bodyId), h = {
                    producerFeatureId: l,
                    outputKey: f.outputKey
                };
                if (re(u.origin) !== re(h)) {
                    if (o.get(u.origin.producerFeatureId) >= o.get(l)) throw new Error(`Body ${u.id} cannot be modified before its origin`);
                    if (!d.replaces.some((y)=>s.get(re(y)) === u.id)) throw new Error(`Feature ${l} must replace an input state of Body ${u.id} to reuse its identity`);
                }
            }
        }
        const a = e.expressions === void 0 ? void 0 : dc(e.expressions);
        if (a?.bindings.some((d)=>!o.has(d.featureId))) throw new Error("Expression target feature is missing");
        return Object.freeze({
            partId: t,
            features: Object.freeze(r),
            bodies: Object.freeze(n),
            ...a ? {
                expressions: a
            } : {}
        });
    };
    K0 = function(e, t, r) {
        const n = r.inputBodyIds ?? [];
        if ([
            "datum.csys",
            "datum.plane",
            "sketch.profile"
        ].includes(r.typeId) && n.length) throw new Error("基准与草图特征不能替换实体输入");
        if (new Set(n).size !== n.length) throw new Error("Duplicate input Body");
        if (n.length && (!t || t.partId !== e.partId || t.status !== "complete" || t.throughFeatureId !== e.features.at(-1)?.envelope.id)) throw new Error("Operation requires a complete current model");
        const i = n.map((c)=>{
            const f = t?.currentBodies.find((u)=>u.bodyId === c);
            if (!f) throw new Error(`Body ${c} is not a current model result`);
            return f;
        }), o = r.typeId === "brep.fillet" || r.typeId === "brep.hole";
        if ((o || r.typeId === "brep.split") && i.length !== 1) throw new Error("Operation requires one Body");
        if (r.typeId === "brep.merge" && i.length < 2) throw new Error("Merge requires two or more Bodies");
        if ([
            "brep.box",
            "brep.source",
            "brep.pad"
        ].includes(r.typeId) && i.length) throw new Error("Source operation cannot have inputs");
        if (o && r.keepInputs) throw new Error("In-place edit must replace its input BodyState");
        const s = Un({
            id: r.id,
            name: r.name,
            typeId: r.typeId,
            suppressed: !1,
            featurePayloadVersion: 1,
            timestamp: r.timestamp,
            parameters: r.parameters,
            references: r.typeId === "datum.plane" || [
                "datum.csys",
                "sketch.profile"
            ].includes(r.typeId) ? {
                base: r.parameters.baseReference ?? null,
                ...[
                    "datum.csys",
                    "datum.plane"
                ].includes(r.typeId) ? {
                    x: r.parameters.xReference ?? null
                } : {}
            } : {
                ...r.typeId === "brep.pad" ? {
                    profile: r.parameters.profileReference ?? null
                } : {},
                inputs: i.map((c)=>({
                        ...c.output
                    })),
                ...r.typeId === "brep.split" ? {
                    tool: r.parameters.splitTool?.reference ?? null
                } : {}
            }
        }), d = r.typeId === "brep.split" || r.typeId === "brep.source" || r.typeId === "datum.plane" || [
            "datum.csys",
            "sketch.profile"
        ].includes(r.typeId), l = o ? i[0].bodyId : `${r.id}:solid`;
        return Vt({
            ...e,
            features: [
                ...e.features,
                {
                    envelope: s,
                    bodyOutputs: d ? [] : [
                        {
                            outputKey: "solid",
                            bodyId: l
                        }
                    ],
                    replaces: r.keepInputs ? [] : i.map((c)=>c.output)
                }
            ],
            bodies: o || d ? e.bodies : [
                ...e.bodies,
                {
                    id: l,
                    name: r.name,
                    kind: "solid",
                    origin: {
                        producerFeatureId: r.id,
                        outputKey: "solid"
                    }
                }
            ]
        });
    };
    L0 = function(e, t, r) {
        if (!e.features.some((o)=>o.envelope.id === t)) throw new Error("Unknown model Feature");
        const n = e.expressions?.bindings.filter((o)=>o.featureId === t && o.field in r) ?? [], i = e.features.find((o)=>o.envelope.id === t);
        if (n.some((o)=>r[o.field] !== i.envelope.parameters[o.field])) throw new Error("此尺寸由表达式驱动，请在“参数与表达式”中修改公式");
        return Vt({
            ...e,
            features: e.features.map((o)=>o.envelope.id === t ? {
                    ...o,
                    envelope: Un({
                        ...o.envelope,
                        ...o.envelope.typeId === "brep.split" && "splitTool" in r ? {
                            references: {
                                ...o.envelope.references,
                                tool: r.splitTool?.reference ?? null
                            }
                        } : {},
                        ...[
                            "datum.csys",
                            "datum.plane",
                            "sketch.profile"
                        ].includes(o.envelope.typeId) && "baseReference" in r ? {
                            references: {
                                base: r.baseReference ?? null,
                                ...[
                                    "datum.csys",
                                    "datum.plane"
                                ].includes(o.envelope.typeId) ? {
                                    x: r.xReference ?? null
                                } : {}
                            }
                        } : {},
                        ...o.envelope.typeId === "brep.pad" && "profileReference" in r ? {
                            references: {
                                ...o.envelope.references,
                                profile: r.profileReference ?? null
                            }
                        } : {},
                        parameters: {
                            ...o.envelope.parameters,
                            ...r
                        }
                    })
                } : o)
        });
    };
    Mf = function(e, t) {
        const r = Pf(e, t), n = r.state.bindings.filter((i)=>!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(i.expression.trim()));
        return Vt({
            ...e,
            expressions: {
                ...r.state,
                bindings: n
            },
            features: e.features.map((i)=>{
                const o = r.bindings.filter((s)=>s.featureId === i.envelope.id);
                return o.length ? {
                    ...i,
                    envelope: Un({
                        ...i.envelope,
                        parameters: {
                            ...i.envelope.parameters,
                            ...Object.fromEntries(o.map((s)=>[
                                    s.field,
                                    s.value
                                ]))
                        }
                    })
                } : i;
            })
        });
    };
    const Rf = Object.freeze([
        "info",
        "warning",
        "error"
    ]);
    function Mo(e, t) {
        if (e.trim().length === 0) throw new Error(`Diagnostic.${t} must not be empty`);
        return e;
    }
    function cc(e) {
        if (!Rf.includes(e.severity)) throw new Error(`Invalid Diagnostic.severity: ${String(e.severity)}`);
        const t = e.path === void 0 ? void 0 : Mo(e.path, "path");
        return Object.freeze({
            severity: e.severity,
            code: Mo(e.code, "code"),
            message: Mo(e.message, "message"),
            ...t ? {
                path: t
            } : {},
            details: zs(e.details ?? {})
        });
    }
    function Cf(e, t) {
        if (e.trim().length === 0) throw new Error(`SemanticOutput.${t} must not be empty`);
        return e;
    }
    function $f(e) {
        return Object.freeze({
            outputKey: Wn(e.outputKey),
            kind: Cf(e.kind, "kind"),
            data: zs(e.data ?? {})
        });
    }
    function Df(e) {
        const t = new Set, r = Object.entries(e).map(([n, i])=>{
            const o = Wn(n), s = $f(i);
            if (s.outputKey !== o) throw new Error(`SemanticOutput map key ${n} does not match outputKey ${s.outputKey}`);
            if (t.has(o)) throw new oo("duplicate-semantic-identity", `Duplicate normalized SemanticOutput map key ${JSON.stringify(o)}`, {
                producerFeatureId: "",
                outputKey: o
            });
            return t.add(o), [
                o,
                s
            ];
        });
        return Object.freeze(Object.fromEntries(r));
    }
    const Tf = Object.freeze([
        "success",
        "failed",
        "blocked",
        "unsupported"
    ]), Bf = Object.freeze({
        generated: Object.freeze([]),
        modified: Object.freeze([]),
        deleted: Object.freeze([])
    });
    function so(e, t) {
        if (e.trim().length === 0) throw new Error(`FeatureBuildResult.${t} must not be empty`);
        return e;
    }
    function zf(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("FeatureBuildResult.featureRevision must be a non-negative safe integer");
        return e;
    }
    function jf(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("FeatureBuildResult.featurePayloadVersion must be a positive safe integer");
        return e;
    }
    function Vs(e, t) {
        const r = e.map((n)=>so(n, t));
        return Object.freeze([
            ...new Set(r)
        ]);
    }
    function Ya(e, t) {
        return Object.freeze({
            inputSemanticId: so(e.inputSemanticId, `${t}.inputSemanticId`),
            outputSemanticIds: Vs(e.outputSemanticIds, `${t}.outputSemanticIds`)
        });
    }
    function Nf(e = Bf) {
        return Object.freeze({
            generated: Object.freeze(e.generated.map((t, r)=>Ya(t, `shapeHistory.generated[${r}]`))),
            modified: Object.freeze(e.modified.map((t, r)=>Ya(t, `shapeHistory.modified[${r}]`))),
            deleted: Vs(e.deleted, "shapeHistory.deleted")
        });
    }
    function Vf(e) {
        if (!e) return;
        if (!Number.isFinite(e.durationMs) || e.durationMs < 0) throw new Error("FeatureBuildResult.metrics.durationMs must be finite and non-negative");
        const t = Object.fromEntries(Object.entries(e.counters ?? {}).map(([r, n])=>{
            if (so(r, "metrics counter key"), !Number.isFinite(n) || n < 0) throw new Error(`FeatureBuildResult.metrics.${r} must be finite and non-negative`);
            return [
                r,
                n
            ];
        }));
        return Object.freeze({
            durationMs: e.durationMs,
            counters: Object.freeze(t)
        });
    }
    xe = function(e) {
        if (!Tf.includes(e.status)) throw new Error(`Invalid FeatureBuildResult.status: ${String(e.status)}`);
        const t = Object.freeze((e.diagnostics ?? []).map((i)=>cc(i)));
        if (e.status !== "success" && t.length === 0) throw new Error(`FeatureBuildResult ${e.status} requires a diagnostic`);
        const r = Vf(e.metrics), n = {
            featureId: so(e.featureId, "featureId"),
            featureRevision: zf(e.featureRevision),
            featurePayloadVersion: jf(e.featurePayloadVersion),
            outputs: Df(e.status === "success" ? e.outputs ?? {} : {}),
            shapeHistory: Nf(e.status === "success" ? e.shapeHistory : void 0),
            diagnostics: t,
            ...r ? {
                metrics: r
            } : {}
        };
        if (e.status === "success") {
            if (e.primaryOutputKey !== void 0 && !Object.hasOwn(n.outputs, e.primaryOutputKey)) throw new Error(`FeatureBuildResult.primaryOutputKey ${e.primaryOutputKey} is not a named output`);
            return Object.freeze({
                ...n,
                status: "success",
                ...e.primaryOutputKey ? {
                    primaryOutputKey: e.primaryOutputKey
                } : {}
            });
        }
        if (e.status === "blocked") {
            const i = Vs(e.blockedByFeatureIds, "blockedByFeatureIds");
            if (i.length === 0) throw new Error("FeatureBuildResult.blockedByFeatureIds must not be empty");
            return Object.freeze({
                ...n,
                status: "blocked",
                blockedByFeatureIds: i
            });
        }
        return e.status === "failed" ? Object.freeze({
            ...n,
            status: "failed"
        }) : Object.freeze({
            ...n,
            status: "unsupported"
        });
    };
    Ja = function(e) {
        const t = Vt(e.model);
        if (!e.evaluationId.trim()) throw new Error("PartModel projection requires evaluationId");
        const r = e.throughFeatureId === void 0 ? t.features.at(-1)?.envelope.id ?? null : e.throughFeatureId, n = r === null ? -1 : t.features.findIndex(({ envelope: y })=>y.id === r);
        if (r !== null && n === -1) throw new Error("Unknown model history endpoint");
        const i = new Set(t.features.map(({ envelope: y })=>y.id)), o = new Map;
        for (const y of e.results){
            if (!i.has(y.featureId)) throw new Error(`Unknown result Feature ${y.featureId}`);
            if (o.has(y.featureId)) throw new Error(`Duplicate Feature result ${y.featureId}`);
            o.set(y.featureId, xe(y));
        }
        for (const { envelope: y } of t.features.slice(0, n + 1)){
            if (y.suppressed) continue;
            const I = e.featureRevisions[y.id];
            if (!Object.hasOwn(e.featureRevisions, y.id) || !Number.isSafeInteger(I) || I < 0) throw new Error(`Missing or invalid expected revision for ${y.id}`);
            const g = o.get(y.id);
            if (g && (g.featureRevision !== I || g.featurePayloadVersion !== y.featurePayloadVersion)) throw new Error(`Evaluation version mismatch for ${y.id}`);
        }
        const s = new Map(t.bodies.map((y)=>[
                y.id,
                y
            ])), a = new Map(t.features.flatMap((y)=>y.bodyOutputs.map((I)=>[
                    re({
                        producerFeatureId: y.envelope.id,
                        outputKey: I.outputKey
                    }),
                    I.bodyId
                ]))), d = new Map, l = new Map, c = [];
        let f = !0;
        const u = (y, I, g = [])=>{
            [
                "success",
                "suppressed",
                "inactive"
            ].includes(I) || (f = !1), c.push(Object.freeze({
                featureId: y,
                status: I,
                diagnostics: Object.freeze([
                    ...g
                ])
            }));
        }, h = (y, I, g, x)=>cc({
                severity: "error",
                code: I,
                message: g,
                details: {
                    featureId: y,
                    ...x ? {
                        reference: {
                            ...x
                        }
                    } : {}
                }
            });
        for (const [y, I] of t.features.entries()){
            const g = I.envelope.id;
            if (y > n) {
                u(g, "inactive");
                continue;
            }
            if (I.envelope.suppressed) {
                u(g, "suppressed");
                continue;
            }
            const x = Ge(I.envelope.references).filter((m)=>!l.has(re(m)));
            if (x.length) {
                u(g, "blocked", x.map((m)=>h(g, "input-output-unavailable", `Input ${m.producerFeatureId}/${m.outputKey} is unavailable`, m)));
                continue;
            }
            const v = o.get(g);
            if (!v) {
                u(g, "pending");
                continue;
            }
            if (v.status !== "success") {
                u(g, v.status, v.diagnostics);
                continue;
            }
            const b = [];
            for (const m of I.replaces){
                const w = re(m), S = d.get(a.get(w));
                (!S || re(S.output) !== w) && b.push(h(g, "body-state-conflict", "Replacement must target the current state of its Body", m));
            }
            for (const m of I.bodyOutputs){
                const w = v.outputs[m.outputKey];
                w && w.kind !== s.get(m.bodyId).kind && b.push(h(g, "body-output-kind-mismatch", `Output ${m.outputKey} is not a ${s.get(m.bodyId).kind}`));
            }
            if (b.length) {
                u(g, "failed", [
                    ...v.diagnostics,
                    ...b
                ]);
                continue;
            }
            for (const m of I.replaces)d.delete(a.get(re(m)));
            for (const m of Object.values(v.outputs)){
                const w = Vr({
                    producerFeatureId: g,
                    outputKey: m.outputKey
                });
                l.set(re(w), Object.freeze({
                    reference: w,
                    featureRevision: v.featureRevision,
                    value: m
                }));
            }
            for (const m of I.bodyOutputs)Object.hasOwn(v.outputs, m.outputKey) && d.set(m.bodyId, Object.freeze({
                bodyId: m.bodyId,
                output: Vr({
                    producerFeatureId: g,
                    outputKey: m.outputKey
                }),
                featureRevision: v.featureRevision
            }));
            u(g, "success", v.diagnostics);
        }
        return Object.freeze({
            evaluationId: e.evaluationId,
            partId: t.partId,
            throughFeatureId: r,
            status: f ? "complete" : "incomplete",
            currentBodies: Object.freeze(t.bodies.flatMap((y)=>d.has(y.id) ? [
                    d.get(y.id)
                ] : [])),
            outputs: Object.freeze([
                ...l.values()
            ]),
            features: Object.freeze(c)
        });
    };
    const Kf = 1;
    H0 = function(e, t, r) {
        return Lf({
            version: Kf,
            identity: e,
            revision: t,
            profile: r
        });
    };
    function Lf(e) {
        return Object.freeze(e.identity), Object.freeze(e.revision), Object.freeze(e), e;
    }
    function ts(e) {
        return e !== null && typeof e == "object";
    }
    function Hf(e) {
        const t = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && t !== Object.prototype && t !== null) throw new Error("mutation payload and state must contain only plain structured data");
    }
    function lc(e, t) {
        if (!(!ts(e) || t.has(e))) {
            t.add(e);
            for (const r of Object.values(e))lc(r, t);
        }
    }
    function qf(e, t) {
        if (Array.isArray(e) !== Array.isArray(t) || Array.isArray(e) && e.length !== t.length || !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
        const r = Object.keys(e), n = Object.keys(t);
        return r.length === n.length && n.every((i)=>Object.hasOwn(e, i));
    }
    function Uf(e) {
        return Array.isArray(e) ? new Array(e.length) : Object.create(Object.getPrototypeOf(e));
    }
    function Wf(e, t, r) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        });
    }
    function Gf(e, t) {
        const r = new WeakSet;
        lc(e, r);
        const n = new WeakMap;
        let i = 0, o = 0;
        const s = (d, l)=>{
            if (typeof l == "function" || typeof l == "symbol") throw new Error("mutation payload and state must contain only plain structured data");
            if (!ts(l)) return l;
            if (Hf(l), r.has(l) && Object.isFrozen(l)) return o += 1, l;
            if (n.has(l)) return n.get(l);
            const c = ts(d) && qf(d, l) ? d : void 0, f = Uf(l);
            n.set(l, f);
            let u = c !== void 0;
            for (const h of Object.keys(l)){
                const y = c === void 0 ? void 0 : c[h], I = s(y, l[h]);
                Wf(f, h, I), u && I !== y && (u = !1);
            }
            return u && c !== void 0 && r.has(c) && Object.isFrozen(c) ? (n.set(l, c), o += 1, c) : (i += 1, Object.freeze(f));
        }, a = s(e, t);
        return Object.freeze({
            state: a,
            stats: Object.freeze({
                allocatedNodes: i,
                sharedNodes: o
            })
        });
    }
    function nr(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function Ks(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`${t} must be a non-negative safe integer`);
    }
    function uc(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return e;
        t.add(e);
        for (const r of Object.values(e))uc(r, t);
        return Object.freeze(e);
    }
    function fc(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return;
        t.add(e);
        const r = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && r !== Object.prototype && r !== null) throw new Error("mutation payload and state must contain only plain structured data");
        for (const n of Object.values(e))fc(n, t);
    }
    function pc(e) {
        return fc(e), uc(structuredClone(e));
    }
    q0 = function(e) {
        if (nr(e.intentId, "intentId"), nr(e.bodyId, "bodyId"), nr(e.operation, "operation"), Ks(e.baseRevision, "baseRevision"), e.mode !== void 0 && e.mode !== "commit" && e.mode !== "preview") throw new Error("mode must be commit or preview");
        return Object.freeze({
            intentId: e.intentId,
            bodyId: e.bodyId,
            baseRevision: e.baseRevision,
            operation: e.operation,
            mode: e.mode ?? "commit",
            payload: pc(e.payload)
        });
    };
    U0 = function(e) {
        return nr(e.bodyId, "bodyId"), Ks(e.revision, "revision"), Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision,
            baseRevision: null,
            phase: "committed",
            intentId: null,
            state: pc(e.state)
        });
    };
    W0 = function(e, t, r) {
        if (e.phase !== "committed") throw new Error("mutation base must be a committed revision");
        if (t.bodyId !== e.bodyId) throw new Error("mutation intent Body does not match its base revision");
        if (t.baseRevision !== e.revision) throw new Error("mutation intent base revision is stale");
        Ks(e.revision + 1, "candidate revision");
        const n = r(e.state, t.payload), i = Gf(e.state, n);
        return Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision + 1,
            baseRevision: e.revision,
            phase: t.mode === "preview" ? "preview" : "candidate",
            intentId: t.intentId,
            state: i.state
        });
    };
    G0 = function(e, t) {
        return nr(t, "evaluationId"), Object.freeze({
            status: "accepted",
            evaluationId: t,
            candidate: e
        });
    };
    Y0 = function(e, t, r) {
        return nr(t, "evaluationId"), nr(r, "diagnostic"), Object.freeze({
            status: "rejected",
            evaluationId: t,
            candidate: e,
            diagnostic: r
        });
    };
    function Yf(e, t) {
        const r = t.candidate, n = (o, s)=>Object.freeze({
                status: "rejected",
                reason: o,
                bodyId: e.bodyId,
                currentRevision: e,
                candidateRevision: r,
                ...s === void 0 ? {} : {
                    diagnostic: s
                }
            });
        if (r.bodyId !== e.bodyId) return n("body-mismatch");
        if (t.status === "rejected") return n("evaluation-rejected", t.diagnostic);
        if (r.phase === "preview") return n("preview-only");
        if (e.phase !== "committed" || r.phase !== "candidate" || r.baseRevision !== e.revision || r.revision !== e.revision + 1) return n("stale-revision");
        const i = Object.freeze({
            ...r,
            phase: "committed"
        });
        return Object.freeze({
            status: "committed",
            bodyId: e.bodyId,
            intentId: r.intentId,
            evaluationId: t.evaluationId,
            previousRevision: e.revision,
            committedRevision: i
        });
    }
    J0 = class {
        _current;
        constructor(t){
            if (t.phase !== "committed") throw new Error("initial mutation root must be committed");
            this._current = t;
        }
        get current() {
            return this._current;
        }
        commit(t) {
            const r = Yf(this._current, t);
            return r.status === "committed" && (this._current = r.committedRevision), r;
        }
    };
    const Jf = new Set([
        "clean",
        "dirty",
        "failed",
        "blocked",
        "unsupported"
    ]);
    function Xf(e) {
        return zs(e);
    }
    function Zf(e) {
        if (e.featureId.trim().length === 0) throw new Error("FeatureEvaluationState.featureId must not be empty");
        if (!Number.isSafeInteger(e.revision) || e.revision < 0) throw new Error("FeatureEvaluationState.revision must be a non-negative safe integer");
        if (!Jf.has(e.status)) throw new Error(`Invalid FeatureEvaluationState.status: ${String(e.status)}`);
        const t = Object.freeze((e.diagnostics ?? []).map((r)=>{
            if (r.code.trim().length === 0 || r.message.trim().length === 0) throw new Error("FeatureEvaluationState diagnostics require code and message");
            return Object.freeze({
                ...r
            });
        }));
        return Object.freeze({
            featureId: e.featureId,
            revision: e.revision,
            status: e.status,
            outputs: Xf(e.outputs ?? {}),
            diagnostics: t,
            runtimeArtifacts: Object.freeze({
                ...e.runtimeArtifacts ?? {}
            })
        });
    }
    const hc = Object.freeze([
        "sketch",
        "datum_plane",
        "datum_axis",
        "draft",
        "box",
        "cylinder",
        "cone",
        "sphere",
        "split",
        "trim",
        "face_pull",
        "multi_transform",
        "shape_binder",
        "extrude",
        "hole",
        "linear_pattern",
        "polar_pattern",
        "revolve",
        "boolean",
        "fillet",
        "chamfer",
        "thickness",
        "mirror",
        "loft",
        "pipe",
        "helix",
        "thread",
        "import"
    ]), Qf = new Set([
        "id",
        "type",
        "name",
        "suppressed",
        "timestamp"
    ]);
    new Set(hc);
    const ep = Object.freeze({
        sketch: [
            "dependencyIds",
            "ownerFeatureId",
            "placementPlane"
        ],
        import: [
            "dependencyIds"
        ],
        extrude: [
            "dependencyIds",
            "sketchRef"
        ],
        hole: [
            "dependencyIds",
            "baseFeatureId",
            "sketchId",
            "pointIds"
        ],
        linear_pattern: [
            "dependencyIds",
            "seedFeatureId"
        ],
        polar_pattern: [
            "dependencyIds",
            "seedFeatureId",
            "axisRef"
        ],
        revolve: [
            "dependencyIds",
            "sketchRef",
            "axisRef"
        ],
        boolean: [
            "dependencyIds",
            "targetFeatureId",
            "targetBodyId",
            "toolFeatureId",
            "toolBodyId"
        ],
        datum_plane: [
            "dependencyIds",
            "baseDatumId",
            "faceSelector",
            "threePoints",
            "pathFeatureId"
        ],
        datum_axis: [
            "dependencyIds",
            "axisRef"
        ],
        draft: [
            "dependencyIds",
            "baseFeatureId",
            "draftFaces",
            "hinges",
            "direction"
        ],
        box: [
            "dependencyIds"
        ],
        cylinder: [
            "dependencyIds"
        ],
        cone: [
            "dependencyIds"
        ],
        sphere: [
            "dependencyIds"
        ],
        split: [
            "dependencyIds",
            "baseFeatureId",
            "toolRef"
        ],
        trim: [
            "dependencyIds",
            "baseFeatureId",
            "toolRef"
        ],
        face_pull: [
            "dependencyIds",
            "baseFeatureId",
            "faceSelectors"
        ],
        multi_transform: [
            "dependencyIds",
            "seedFeatureId"
        ],
        shape_binder: [
            "dependencyIds",
            "sourceBodyId",
            "sourceFeatureId"
        ],
        fillet: [
            "dependencyIds",
            "baseFeatureId",
            "edgeSelectors"
        ],
        chamfer: [
            "dependencyIds",
            "baseFeatureId",
            "edgeSelectors"
        ],
        thickness: [
            "dependencyIds",
            "baseFeatureId",
            "removedFaceSelectors"
        ],
        mirror: [
            "dependencyIds",
            "seedFeatureId",
            "planeRef"
        ],
        loft: [
            "dependencyIds",
            "sectionSketchIds"
        ],
        pipe: [
            "dependencyIds",
            "profileSketchId",
            "sectionSketchIds",
            "pathSketchId"
        ],
        helix: [
            "dependencyIds"
        ],
        thread: [
            "dependencyIds",
            "helixFeatureId",
            "profileSketchId"
        ]
    });
    function mc(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function tp(e) {
        const t = mc(e);
        return t === "solidid" || t === "mesh" || t === "occhandle" || t.includes("occ") && t.endsWith("handle");
    }
    function rp(e, t) {
        return mc(e) === "solidid" && (t === null || typeof t == "string");
    }
    function np(e) {
        if (e.id.trim().length === 0 || e.type.trim().length === 0) throw new Error("Legacy Feature id and type must not be empty");
        if (!Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("Legacy Feature timestamp must be a non-negative safe integer");
    }
    function ip(e, t = {}) {
        const r = e;
        np(r);
        const n = new Set([
            "dependencyIds",
            ...ep[r.type] ?? [],
            ...t.referenceKeys ?? []
        ]), i = {}, o = {}, s = {}, a = {};
        for (const [c, f] of Object.entries(r))Qf.has(c) || f === void 0 || (tp(c) ? rp(c, f) ? s[c] = f : a[c] = f : n.has(c) ? o[c] = f : i[c] = f);
        const d = fr({
            id: r.id,
            typeId: r.type,
            name: r.name,
            suppressed: r.suppressed,
            timestamp: r.timestamp,
            parameters: i,
            references: o
        }), l = typeof s.solidId == "string" && s.solidId.length > 0;
        return Object.freeze({
            envelope: d,
            evaluationState: Zf({
                featureId: r.id,
                revision: t.evaluationRevision ?? 0,
                status: t.evaluationStatus ?? (l ? "clean" : "dirty"),
                outputs: s,
                runtimeArtifacts: a
            })
        });
    }
    function yc(e, t) {
        for (const [r, n] of Object.entries(t)){
            if (Object.hasOwn(e, r)) throw new Error(`Legacy Feature field collision: ${r}`);
            e[r] = n;
        }
    }
    function Ro(e, t) {
        yc(e, structuredClone(t));
    }
    function op(e, t) {
        if (t && t.featureId !== e.id) throw new Error("Evaluation state does not belong to FeatureEnvelope");
        const r = {
            id: e.id,
            type: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp
        };
        return Ro(r, e.parameters), Ro(r, e.references), t && (Ro(r, t.outputs), yc(r, t.runtimeArtifacts)), r;
    }
    function sp(e) {
        const t = fr({
            id: e.featureId,
            typeId: e.typeId,
            name: "",
            timestamp: 0,
            parameters: e.parameters,
            references: e.references
        }), r = Object.freeze([
            ...new Set(e.dependencyIds.filter((n)=>n.trim().length > 0))
        ]);
        return Object.freeze({
            featureId: t.id,
            typeId: t.typeId,
            parameters: t.parameters,
            references: t.references,
            dependencyIds: r
        });
    }
    function ap(e) {
        const t = e.map((r)=>r.key);
        if (new Set(t).size !== t.length) throw new Error("Feature reference schema contains duplicate keys");
        return Object.freeze({
            fields: Object.freeze(e.map((r)=>Object.freeze({
                    ...r
                })))
        });
    }
    class gc extends Error {
        code;
        identity;
        constructor(t, r, n){
            super(r), this.name = "ShapeHistoryValidationError", this.code = t, this.identity = n;
        }
    }
    function ar(e) {
        return [
            e.producerFeatureId,
            e.outputKey,
            e.semanticId
        ].join("\0");
    }
    function rs(e, t) {
        const r = ar(e), n = ar(t);
        return r < n ? -1 : r > n ? 1 : 0;
    }
    function Xa(e) {
        const t = new Map;
        for (const r of e){
            const n = es(r.input);
            if (r.outputs.length === 0) throw new gc("empty-history-outputs", `ShapeHistory mapping for ${JSON.stringify(n.semanticId)} must contain at least one output`, n);
            const i = ar(n);
            let o = t.get(i);
            o || (o = {
                input: n,
                outputs: new Map
            }, t.set(i, o));
            for (const s of r.outputs){
                const a = es(s);
                o.outputs.set(ar(a), a);
            }
        }
        return Object.freeze([
            ...t.values()
        ].sort((r, n)=>rs(r.input, n.input)).map((r)=>Object.freeze({
                input: r.input,
                outputs: Object.freeze([
                    ...r.outputs.values()
                ].sort(rs))
            })));
    }
    function dp(e) {
        const t = new Map;
        for (const r of e){
            const n = es(r);
            t.set(ar(n), n);
        }
        return Object.freeze([
            ...t.values()
        ].sort(rs));
    }
    function Kr(e = {}) {
        const t = Xa(e.generated ?? []), r = Xa(e.modified ?? []), n = dp(e.deleted ?? []), i = new Set(r.map((o)=>ar(o.input)));
        for (const o of n)if (i.has(ar(o))) throw new gc("deleted-modified-conflict", `Semantic identity ${JSON.stringify(o.semanticId)} cannot be both modified and deleted`, o);
        return Object.freeze({
            generated: t,
            modified: r,
            deleted: n
        });
    }
    class Ft extends Error {
        typeId;
        constructor(t, r){
            super(`Feature codec ${t}: ${r}`), this.name = "FeatureCodecError", this.typeId = t;
        }
    }
    function pr(e, t, r) {
        const n = fr({
            id: "__codec_payload__",
            typeId: e,
            name: "",
            timestamp: 0,
            parameters: t,
            references: r
        });
        return Object.freeze({
            parameters: n.parameters,
            references: n.references
        });
    }
    function cp(e) {
        return Object.freeze({
            parameters: e.parameters,
            references: e.references
        });
    }
    function ae() {
        return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e)=>{
            const t = Math.random() * 16 | 0;
            return (e === "x" ? t : t & 3 | 8).toString(16);
        });
    }
    Nt = class extends Error {
        featureId;
        constructor(t, r){
            super(r), this.name = "RecomputeError", this.featureId = t;
        }
    };
    function ns(e) {
        let t = 0;
        const r = e.length;
        for(let n = 0; n < r; n++){
            const i = (n + 1) % r;
            t += e[n].x * e[i].y - e[i].x * e[n].y;
        }
        return t * .5;
    }
    function Jr(e) {
        const t = e.loops.find((n)=>n.isOuter);
        if (t && t.points.length >= 3) return t;
        const r = e.loops[0];
        if (!r || r.points.length < 3) throw new Error("profileLoops: profile must have an outer loop with at least 3 points");
        return r;
    }
    function is(e) {
        return e.loops.filter((t)=>t.isOuter && t.points.length >= 3);
    }
    function Ls(e) {
        const t = Jr(e);
        return e.loops.filter((r)=>r !== t && !r.isOuter);
    }
    X0 = function(e) {
        if (e.length === 0) return new Nt("profile", "Profile must have at least one closed loop");
        const t = e.filter((o)=>o.points.length >= 3).map((o)=>({
                points: o.points.map((s)=>({
                        x: s.x,
                        y: s.y
                    })),
                area: ns(o.points),
                segments: o.segments,
                exactCurve: o.exactCurve
            }));
        if (t.length === 0) return new Nt("profile", "Profile loop must have at least 3 points");
        let r = 0, n = 0;
        for(let o = 0; o < t.length; o++){
            const s = Math.abs(t[o].area);
            s > n && (n = s, r = o);
        }
        const i = t[r].area >= 0;
        return t.map((o, s)=>{
            const a = s === r;
            let d = o.points, l = o.segments ? [
                ...o.segments
            ] : void 0;
            return a || o.area >= 0 === i && (d = [
                ...d
            ].reverse(), l && (l = lp(l))), (!l || l.length === 0) && o.exactCurve?.kind === "circle" && (l = [
                {
                    kind: "circle",
                    center: {
                        ...o.exactCurve.center
                    },
                    radius: o.exactCurve.radius
                }
            ]), {
                isOuter: a,
                points: d,
                ...l && l.length > 0 ? {
                    segments: l
                } : {},
                ...o.exactCurve ? {
                    exactCurve: o.exactCurve
                } : {}
            };
        });
    };
    function lp(e) {
        return [
            ...e
        ].reverse().map((t)=>t.kind === "line" ? {
                ...t,
                start: {
                    ...t.end
                },
                end: {
                    ...t.start
                }
            } : t.kind === "arc" ? {
                ...t,
                start: {
                    ...t.end
                },
                end: {
                    ...t.start
                },
                clockwise: !t.clockwise
            } : t.kind === "bezier" || t.kind === "spline" ? {
                ...t,
                controls: [
                    ...t.controls
                ].reverse().map((r)=>({
                        ...r
                    }))
            } : {
                ...t
            });
    }
    function Hs(e, t) {
        if (e.loops.length === 0) return new Nt(t, "Profile has no loops");
        const r = e.loops.filter((n)=>n.isOuter);
        if (r.length === 0) return new Nt(t, "Profile missing outer loop");
        for (const n of e.loops)if (n.points.length < 3) {
            const i = n.isOuter ? "outer" : "hole";
            return new Nt(t, `${i} loop must have at least 3 points`);
        }
        for (const n of e.loops.filter((i)=>!i.isOuter)){
            const i = r.find((o)=>up(n.points[0], o.points));
            if (!i) return new Nt(t, "Hole loop must be inside its outer boundary");
            if (Math.abs(ns(n.points)) >= Math.abs(ns(i.points))) return new Nt(t, "Hole loop must be smaller than the outer boundary");
        }
        return null;
    }
    function up(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    const ni = 64;
    Ic = function(e) {
        if (e.kind === "line") return [
            e.start,
            e.end
        ];
        if (e.kind === "circle") {
            const t = ni;
            return Array.from({
                length: t
            }, (r, n)=>{
                const i = Math.PI * 2 * n / t;
                return {
                    x: e.center.x + e.radius * Math.cos(i),
                    y: e.center.y + e.radius * Math.sin(i)
                };
            });
        }
        if (e.kind === "arc") {
            const t = Math.atan2(e.start.y - e.center.y, e.start.x - e.center.x);
            let n = Math.atan2(e.end.y - e.center.y, e.end.x - e.center.x) - t;
            if (e.clockwise) {
                for(; n >= 0;)n -= Math.PI * 2;
                Math.abs(n) < 1e-12 && (n = -Math.PI * 2);
            } else {
                for(; n <= 0;)n += Math.PI * 2;
                Math.abs(n) < 1e-12 && (n = Math.PI * 2);
            }
            const i = Math.max(2, Math.ceil(Math.abs(n) / (Math.PI * 2) * ni));
            return Array.from({
                length: i + 1
            }, (o, s)=>{
                const a = s / i, d = t + n * a;
                return {
                    x: e.center.x + e.radius * Math.cos(d),
                    y: e.center.y + e.radius * Math.sin(d)
                };
            });
        }
        if (e.kind === "bezier") {
            const t = e.controls;
            if (t.length < 2) return [];
            const r = ni;
            return Array.from({
                length: r + 1
            }, (n, i)=>bc(t, i / r));
        }
        return e.kind === "spline" ? fp(e.controls, ni) : [];
    };
    function bc(e, t) {
        if (e.length === 1) return {
            ...e[0]
        };
        const r = [];
        for(let n = 0; n < e.length - 1; n++)r.push({
            x: e[n].x * (1 - t) + e[n + 1].x * t,
            y: e[n].y * (1 - t) + e[n + 1].y * t
        });
        return bc(r, t);
    }
    function Za(e, t, r, n, i) {
        return .5 * (2 * t + (-e + r) * i + (2 * e - 5 * t + 4 * r - n) * i * i + (-e + 3 * t - 3 * r + n) * i * i * i);
    }
    function fp(e, t) {
        if (e.length < 2) return e.map((n)=>({
                ...n
            }));
        if (e.length === 2) return [
            {
                ...e[0]
            },
            {
                ...e[1]
            }
        ];
        const r = [
            {
                ...e[0]
            }
        ];
        for(let n = 0; n < e.length - 1; n++){
            const i = e[Math.max(0, n - 1)], o = e[n], s = e[n + 1], a = e[Math.min(e.length - 1, n + 2)];
            for(let d = 1; d <= t; d++){
                const l = d / t;
                r.push({
                    x: Za(i.x, o.x, s.x, a.x, l),
                    y: Za(i.y, o.y, s.y, a.y, l)
                });
            }
        }
        return r;
    }
    qs = class {
        createFromTessellation(t, r, n) {
            const i = n.subMeshes.map((o, s)=>this._buildFaceFromSubMesh(o, s, r, n));
            return {
                id: ae(),
                name: t,
                featureId: r,
                faces: i,
                edges: [],
                tessellation: n
            };
        }
        extrude(t, r, n, i = "Extrude") {
            const o = Hs(t, n);
            if (o) throw new Error(o.message);
            const { origin: s, normal: a, uAxis: d, vAxis: l } = t;
            Jr(t);
            const c = Ls(t), f = is(t).flatMap((E)=>[
                    E,
                    ...c.filter((O)=>Qa(O.points[0], E.points))
                ]), u = (E, O, _)=>[
                    s[0] + d[0] * E + l[0] * O + a[0] * _,
                    s[1] + d[1] * E + l[1] * O + a[1] * _,
                    s[2] + d[2] * E + l[2] * O + a[2] * _
                ], h = [];
            let y = 0;
            for (const E of is(t)){
                const O = [
                    E,
                    ...c.filter((T)=>Qa(T.points[0], E.points))
                ], _ = [], A = [];
                for (const T of O){
                    T !== E && A.push(_.length / 2);
                    for (const z of T.points)_.push(z.x, z.y);
                }
                for (const T of Zu(_, A.length > 0 ? A : void 0))h.push(y + T);
                y += O.reduce((T, z)=>T + z.points.length, 0);
            }
            const I = [], g = [];
            for (const E of f)for (const O of E.points)I.push(...u(O.x, O.y, 0)), g.push(...u(O.x, O.y, r));
            const x = I.length / 3, v = [], b = [], m = [], w = [];
            for(let E = 0; E < f.length; E++){
                const O = f[E], _ = O.points, A = O.isOuter, T = O.segments && O.segments.length > 0 ? O.segments : O.exactCurve?.kind === "circle" ? [
                    {
                        kind: "circle",
                        center: O.exactCurve.center,
                        radius: O.exactCurve.radius
                    }
                ] : null;
                if (T) {
                    for(let z = 0; z < T.length; z++){
                        const J = T[z], ee = Ic(J), Q = m.length;
                        let ce = 0;
                        const ue = J.kind === "circle", Me = ue ? ee.length : Math.max(0, ee.length - 1);
                        for(let Fe = 0; Fe < Me; Fe++){
                            const oe = Fe, fe = ue ? (Fe + 1) % ee.length : Fe + 1, ge = ee[oe], De = ee[fe], Te = u(ge.x, ge.y, 0), Re = u(De.x, De.y, 0), Ot = u(ge.x, ge.y, r), Zr = u(De.x, De.y, r);
                            let Pt = gt(Er([
                                Re[0] - Te[0],
                                Re[1] - Te[1],
                                Re[2] - Te[2]
                            ], a));
                            if (J.kind === "circle" || J.kind === "arc") {
                                const qt = {
                                    x: (ge.x + De.x) / 2,
                                    y: (ge.y + De.y) / 2
                                }, Ne = J.center.x, Qr = J.center.y, gr = u(Ne + (qt.x - Ne), Qr + (qt.y - Qr), 0), en = u(Ne, Qr, 0);
                                Pt = gt([
                                    gr[0] - en[0],
                                    gr[1] - en[1],
                                    gr[2] - en[2]
                                ]);
                            }
                            A || (Pt = [
                                -Pt[0],
                                -Pt[1],
                                -Pt[2]
                            ]);
                            const mt = v.length / 3;
                            v.push(...Te, ...Re, ...Zr, ...Ot);
                            for(let qt = 0; qt < 4; qt++)b.push(...Pt);
                            m.push(mt, mt + 1, mt + 2, mt, mt + 2, mt + 3), ce += 6;
                        }
                        if (ce > 0) {
                            const Fe = T.length === 1 && (J.kind === "circle" || J.kind === "bezier" || J.kind === "spline") ? A ? "side" : `hole_${E - 1}_side` : A ? `side_${z}` : `hole_${E - 1}_side_${z}`;
                            w.push({
                                key: Fe,
                                firstIndex: Q,
                                indexCount: ce
                            });
                        }
                    }
                    continue;
                }
                for(let z = 0; z < _.length; z++){
                    const J = (z + 1) % _.length, ee = u(_[z].x, _[z].y, 0), Q = u(_[J].x, _[J].y, 0), ce = u(_[z].x, _[z].y, r), ue = u(_[J].x, _[J].y, r), Me = [
                        Q[0] - ee[0],
                        Q[1] - ee[1],
                        Q[2] - ee[2]
                    ];
                    let Fe = gt(Er(Me, a));
                    A || (Fe = [
                        -Fe[0],
                        -Fe[1],
                        -Fe[2]
                    ]);
                    const oe = v.length / 3;
                    v.push(...ee, ...Q, ...ue, ...ce);
                    for(let fe = 0; fe < 4; fe++)b.push(...Fe);
                    m.push(oe, oe + 1, oe + 2, oe, oe + 2, oe + 3), w.push({
                        key: A ? `side_${z}` : `hole_${E - 1}_side_${z}`,
                        firstIndex: m.length - 6,
                        indexCount: 6
                    });
                }
            }
            const S = [], k = [], M = [
                -a[0],
                -a[1],
                -a[2]
            ];
            for(let E = 0; E < x; E++)S.push(...M), k.push(...a);
            const B = h.slice().reverse(), C = h.map((E)=>E + x), j = 2 * x, N = m.map((E)=>E + j), V = new Float32Array([
                ...I,
                ...g,
                ...v
            ]), D = new Float32Array([
                ...S,
                ...k,
                ...b
            ]), K = new Uint32Array([
                ...B,
                ...C,
                ...N
            ]), G = {
                key: "bottom",
                firstIndex: 0,
                indexCount: B.length
            }, F = {
                key: "top",
                firstIndex: B.length,
                indexCount: C.length
            }, $ = B.length + C.length, L = w.map((E)=>({
                    key: E.key,
                    firstIndex: $ + E.firstIndex,
                    indexCount: E.indexCount
                })), Y = {
                positions: V,
                normals: D,
                indices: K,
                subMeshes: [
                    G,
                    F,
                    ...L
                ]
            }, p = Y.subMeshes.map((E, O)=>this._buildFaceFromSubMesh(E, O, n, Y)), P = new Map(p.map((E)=>[
                    E.provenance.role,
                    E.id
                ])), R = this._buildExtrudeEdges(f, u, r, n, P);
            return {
                id: ae(),
                name: i,
                featureId: n,
                faces: p,
                edges: R,
                tessellation: Y
            };
        }
        revolve(t, r, n, i, o, s = "Revolve") {
            const { origin: a, normal: d, uAxis: l, vAxis: c, loops: f } = t, u = f.find((M)=>M.isOuter) ?? f[0];
            if (!u || u.points.length < 2) throw new Error("MeshBRepBackend.revolve: profile must have at least 2 points");
            const h = this._normalize(n), y = (M, B)=>[
                    a[0] + l[0] * M + c[0] * B,
                    a[1] + l[1] * M + c[1] * B,
                    a[2] + l[2] * M + c[2] * B
                ], I = u.points.map((M)=>y(M.x, M.y)), g = Math.max(12, Math.ceil(Math.abs(i) / (Math.PI / 16))), x = [];
            for(let M = 0; M <= g; M++){
                const B = M / g * i;
                x.push(I.map((C)=>this._rotateAroundAxis(C, r, h, B)));
            }
            const v = [], b = [], m = [], w = I.length;
            for (const M of x)for (const B of M)v.push(...B), b.push(0, 0, 0);
            for(let M = 0; M < g; M++)for(let B = 0; B < w; B++){
                const C = (B + 1) % w, j = M * w + B, N = M * w + C, V = (M + 1) * w + C, D = (M + 1) * w + B;
                m.push(j, N, V, j, V, D);
            }
            this._accumulateNormals(v, m, b);
            const S = {
                positions: new Float32Array(v),
                normals: new Float32Array(b),
                indices: new Uint32Array(m),
                subMeshes: [
                    {
                        key: "revolve",
                        firstIndex: 0,
                        indexCount: m.length
                    }
                ]
            }, k = S.subMeshes.map((M, B)=>this._buildFaceFromSubMesh(M, B, o, S));
            return {
                id: ae(),
                name: s,
                featureId: o,
                faces: k,
                edges: [],
                tessellation: S
            };
        }
        boolean(t, r, n, i, o = "Boolean") {
            if (n === "union") return this._mergeSolids(t, r, i, o);
            if (n === "cut") return this._cutSolid(t, r, i, o);
            throw new Error(`MeshBRepBackend.boolean: unsupported op ${n}`);
        }
        _mergeSolids(t, r, n, i) {
            const o = t.tessellation.positions, s = r.tessellation.positions, a = new Float32Array(o.length + s.length);
            a.set(o, 0), a.set(s, o.length);
            const d = t.tessellation.normals ?? new Float32Array(o.length), l = r.tessellation.normals ?? new Float32Array(s.length), c = new Float32Array(d.length + l.length);
            c.set(d, 0), c.set(l, d.length);
            const f = o.length / 3, u = t.tessellation.indices ?? new Uint32Array(0), h = r.tessellation.indices ?? new Uint32Array(0), y = new Uint32Array(u.length + h.length);
            y.set(u, 0);
            for(let x = 0; x < h.length; x++)y[u.length + x] = h[x] + f;
            const I = {
                positions: a,
                normals: c,
                indices: y,
                subMeshes: [
                    {
                        key: "union_a",
                        firstIndex: 0,
                        indexCount: u.length
                    },
                    {
                        key: "union_b",
                        firstIndex: u.length,
                        indexCount: h.length
                    }
                ]
            }, g = I.subMeshes.map((x, v)=>this._buildFaceFromSubMesh(x, v, n, I));
            return {
                id: ae(),
                name: i,
                featureId: n,
                faces: g,
                edges: [],
                tessellation: I
            };
        }
        _cutSolid(t, r, n, i) {
            const o = t.tessellation, s = Math.max(9, Math.floor(o.positions.length * .85)), a = {
                ...o,
                positions: o.positions.slice(0, s),
                normals: o.normals?.slice(0, s),
                indices: o.indices,
                subMeshes: o.subMeshes.map((l)=>({
                        ...l
                    }))
            }, d = a.subMeshes.map((l, c)=>this._buildFaceFromSubMesh(l, c, n, a));
            return {
                id: ae(),
                name: i,
                featureId: n,
                faces: d,
                edges: [],
                tessellation: a
            };
        }
        tessellate(t) {
            return t.tessellation;
        }
        _buildFaceFromSubMesh(t, r, n, i) {
            const { centroid: o, normal: s, area: a } = this._computeFaceMetrics(t, i), d = this._computePlane(s, o);
            return {
                id: ae(),
                provenance: {
                    featureId: n,
                    role: t.key
                },
                subMeshIndex: r,
                normal: s,
                centroid: o,
                area: a,
                plane: d
            };
        }
        _buildExtrudeEdges(t, r, n, i, o) {
            const s = [];
            for(let a = 0; a < t.length; a++){
                const l = t[a].points, c = a === 0, f = a - 1;
                for(let u = 0; u < l.length; u++){
                    const h = (u + 1) % l.length, y = r(l[u].x, l[u].y, 0), I = r(l[h].x, l[h].y, 0), g = r(l[u].x, l[u].y, n), x = r(l[h].x, l[h].y, n), v = c ? `side_${u}` : `hole_${f}_side_${u}`, b = o.get(v) ?? "", m = o.get("bottom") ?? "", w = o.get("top") ?? "", S = c ? `edge_bottom_${u}` : `edge_hole_${f}_bottom_${u}`, k = c ? `edge_top_${u}` : `edge_hole_${f}_top_${u}`, M = c ? `edge_vertical_${u}` : `edge_hole_${f}_vertical_${u}`;
                    s.push(this._makeEdge(i, S, [
                        m,
                        b
                    ], y, I), this._makeEdge(i, k, [
                        w,
                        b
                    ], g, x), this._makeEdge(i, M, [
                        b,
                        ""
                    ], y, g));
                }
            }
            return s;
        }
        _makeEdge(t, r, n, i, o) {
            return {
                id: ae(),
                provenance: {
                    featureId: t,
                    role: r
                },
                faceIds: n,
                startVertex: i,
                endVertex: o,
                midpoint: [
                    (i[0] + o[0]) / 2,
                    (i[1] + o[1]) / 2,
                    (i[2] + o[2]) / 2
                ]
            };
        }
        _computeFaceMetrics(t, r) {
            const { positions: n, normals: i, indices: o } = r;
            if (!o || t.indexCount === 0) return {
                centroid: [
                    0,
                    0,
                    0
                ],
                normal: [
                    0,
                    1,
                    0
                ],
                area: 0
            };
            const s = o instanceof Uint32Array || o instanceof Uint16Array ? o : new Uint32Array(o);
            let a = 0, d = 0, l = 0, c = 0, f = 0, u = 0, h = 0;
            const y = t.indexCount / 3;
            for(let g = 0; g < y; g++){
                const x = t.firstIndex + g * 3, v = s[x], b = s[x + 1], m = s[x + 2], w = [
                    n[v * 3],
                    n[v * 3 + 1],
                    n[v * 3 + 2]
                ], S = [
                    n[b * 3],
                    n[b * 3 + 1],
                    n[b * 3 + 2]
                ], k = [
                    n[m * 3],
                    n[m * 3 + 1],
                    n[m * 3 + 2]
                ], M = (w[0] + S[0] + k[0]) / 3, B = (w[1] + S[1] + k[1]) / 3, C = (w[2] + S[2] + k[2]) / 3, j = [
                    S[0] - w[0],
                    S[1] - w[1],
                    S[2] - w[2]
                ], N = [
                    k[0] - w[0],
                    k[1] - w[1],
                    k[2] - w[2]
                ], V = Er(j, N), D = wc(V) * .5;
                a += M * D, d += B * D, l += C * D, c += V[0], f += V[1], u += V[2], h += D;
            }
            h > 0 && (a /= h, d /= h, l /= h);
            const I = gt([
                c,
                f,
                u
            ]);
            return {
                centroid: [
                    a,
                    d,
                    l
                ],
                normal: I,
                area: h
            };
        }
        _computePlane(t, r) {
            const n = pp(t), i = gt(Er(t, n));
            return {
                origin: r,
                normal: t,
                uAxis: n,
                vAxis: i
            };
        }
        _normalize(t) {
            return gt(t);
        }
        _rotateAroundAxis(t, r, n, i) {
            const o = [
                t[0] - r[0],
                t[1] - r[1],
                t[2] - r[2]
            ], s = n, a = Math.cos(i), d = Math.sin(i), l = o[0] * s[0] + o[1] * s[1] + o[2] * s[2], c = [
                s[1] * o[2] - s[2] * o[1],
                s[2] * o[0] - s[0] * o[2],
                s[0] * o[1] - s[1] * o[0]
            ], f = [
                o[0] * a + c[0] * d + s[0] * l * (1 - a),
                o[1] * a + c[1] * d + s[1] * l * (1 - a),
                o[2] * a + c[2] * d + s[2] * l * (1 - a)
            ];
            return [
                f[0] + r[0],
                f[1] + r[1],
                f[2] + r[2]
            ];
        }
        _accumulateNormals(t, r, n) {
            for(let i = 0; i < r.length; i += 3){
                const o = r[i], s = r[i + 1], a = r[i + 2], d = [
                    t[o * 3],
                    t[o * 3 + 1],
                    t[o * 3 + 2]
                ], l = [
                    t[s * 3],
                    t[s * 3 + 1],
                    t[s * 3 + 2]
                ], c = [
                    t[a * 3],
                    t[a * 3 + 1],
                    t[a * 3 + 2]
                ], f = gt(Er([
                    l[0] - d[0],
                    l[1] - d[1],
                    l[2] - d[2]
                ], [
                    c[0] - d[0],
                    c[1] - d[1],
                    c[2] - d[2]
                ]));
                for (const u of [
                    o,
                    s,
                    a
                ])n[u * 3] += f[0], n[u * 3 + 1] += f[1], n[u * 3 + 2] += f[2];
            }
            for(let i = 0; i < n.length; i += 3){
                const o = gt([
                    n[i],
                    n[i + 1],
                    n[i + 2]
                ]);
                n[i] = o[0], n[i + 1] = o[1], n[i + 2] = o[2];
            }
        }
    };
    function Qa(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    function Er(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function wc(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    }
    function gt(e) {
        const t = wc(e);
        return t > 1e-10 ? [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ] : [
            0,
            1,
            0
        ];
    }
    function pp(e) {
        const t = e.map(Math.abs);
        let r;
        return t[0] <= t[1] && t[0] <= t[2] ? r = [
            1,
            0,
            0
        ] : t[1] <= t[2] ? r = [
            0,
            1,
            0
        ] : r = [
            0,
            0,
            1
        ], gt(Er(e, r));
    }
    Di = hc;
    class Ir extends Error {
        code;
        featureType;
        issues;
        constructor(t, r, n, i = []){
            super(n), this.name = "FeatureDefinitionError", this.code = t, this.featureType = r, this.issues = i;
        }
    }
    function hp(e) {
        return Object.freeze({
            ...e
        });
    }
    function mp(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t,
                enumValues: t.enumValues ? Object.freeze([
                    ...t.enumValues
                ]) : void 0
            })));
    }
    function yp(e) {
        switch(e){
            case "feature":
                return "feature_reference";
            case "feature_list":
                return "feature_reference_list";
            case "topology":
                return "topology_reference";
            case "topology_list":
                return "topology_reference_list";
        }
    }
    function ii(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t
            })));
    }
    function ed(e) {
        return Object.freeze([
            ...new Set(e.filter((t)=>t.length > 0))
        ]);
    }
    class hr {
        type;
        metadata;
        schemaVersion;
        capabilities;
        parameterSchema;
        referenceSchema;
        codec;
        parameters;
        constructor(t){
            if (!Number.isInteger(t.schemaVersion) || t.schemaVersion < 1) throw new Error("Feature definition schemaVersion must be a positive integer");
            if (!Number.isFinite(t.metadata.sortOrder)) throw new Error("Feature definition sortOrder must be finite");
            const r = Object.freeze({
                fields: mp(t.parameterSchema)
            }), n = ap(t.referenceSchema), i = [
                ...r.fields.map((o)=>o.key),
                ...n.fields.map((o)=>o.key)
            ];
            if (new Set(i).size !== i.length) throw new Error(`Feature definition ${t.type} has duplicate schema keys`);
            this.type = t.type, this.metadata = Object.freeze({
                ...t.metadata,
                typeId: t.type,
                category: t.capabilities.category
            }), this.schemaVersion = t.schemaVersion, this.capabilities = hp(t.capabilities), this.parameterSchema = r, this.referenceSchema = n, this.codec = Object.freeze(t.codec), this.parameters = Object.freeze([
                ...n.fields.map((o)=>Object.freeze({
                        key: o.key,
                        kind: yp(o.kind),
                        required: o.required
                    })),
                ...r.fields
            ]);
        }
        createDraft(t) {
            return this.createTypedDraft(t);
        }
        draftFromEnvelope(t, r) {
            if (t.typeId !== this.metadata.typeId) throw new Ir("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            const n = this.codec.decode(cp(t));
            if (!this.isTypedDraft(n)) throw new Ir("invalid-draft", this.type, `Feature codec ${this.type} returned an invalid draft`);
            return this.normalizeTypedDraft(n, r);
        }
        normalizeDraft(t, r) {
            if (!this.isTypedDraft(t)) throw new Ir("invalid-draft", this.type, `Invalid ${this.type} draft shape`);
            return this.normalizeTypedDraft(t, r);
        }
        validateDraft(t, r) {
            return this.isTypedDraft(t) ? ii(this.validateTypedDraft(this.normalizeTypedDraft(t, r), r)) : ii([
                {
                    severity: "error",
                    code: "invalid-draft",
                    message: `Invalid ${this.type} draft shape`
                }
            ]);
        }
        collectDependencies(t, r) {
            const n = this.normalizeDraft(t, r);
            return ed(this.collectTypedDependencies(n, r));
        }
        draftFromFeature(t, r) {
            const n = this.requireFeatureType(t);
            return this.createTypedEditDraft(n, r);
        }
        prepareDraft(t, r) {
            if (!this.isTypedDraft(t)) return Object.freeze({
                draft: t,
                dependencyIds: Object.freeze([]),
                issues: ii([
                    {
                        severity: "error",
                        code: "invalid-draft",
                        message: `Invalid ${this.type} draft shape`
                    }
                ])
            });
            const n = this.normalizeTypedDraft(t, r), i = ii(this.validateTypedDraft(n, r)), o = ed(this.collectTypedDependencies(n, r));
            return Object.freeze({
                draft: n,
                dependencyIds: o,
                issues: i
            });
        }
        buildEnvelope(t, r, n) {
            const i = this.requirePreparedDraft(r, n), o = this.codec.encode(i.draft);
            return fr({
                ...t,
                typeId: this.metadata.typeId,
                parameters: o.parameters,
                references: o.references
            });
        }
        reviseEnvelope(t, r, n) {
            if (t.typeId !== this.metadata.typeId) throw new Ir("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            return this.buildEnvelope({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                timestamp: t.timestamp
            }, r, n);
        }
        createBuildSpec(t, r) {
            const n = this.draftFromEnvelope(t, r), i = this.requirePreparedDraft(n, r), o = this.codec.encode(i.draft);
            return sp({
                featureId: t.id,
                typeId: t.typeId,
                parameters: o.parameters,
                references: o.references,
                dependencyIds: i.dependencyIds
            });
        }
        buildFeature(t, r, n) {
            const i = this.requirePreparedDraft(r, n);
            return {
                ...this.buildTypedFeature(t, i.draft, n, i.dependencyIds),
                id: t.id,
                type: this.type,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i.dependencyIds
                ],
                timestamp: t.timestamp
            };
        }
        reviseFeature(t, r, n) {
            const i = this.requireFeatureType(t), o = this.requirePreparedDraft(r, n);
            return {
                ...this.reviseTypedFeature(i, o.draft, n, o.dependencyIds),
                id: i.id,
                type: this.type,
                name: i.name,
                suppressed: i.suppressed,
                dependencyIds: [
                    ...o.dependencyIds
                ],
                timestamp: i.timestamp
            };
        }
        requireFeatureType(t) {
            if (t.type !== this.type) throw new Ir("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.type}`);
            return t;
        }
        requirePreparedDraft(t, r) {
            const n = this.prepareDraft(t, r), i = n.issues.filter((o)=>o.severity === "error");
            if (i.length > 0) {
                const o = i.some((s)=>s.code === "invalid-draft") ? "invalid-draft" : "draft-validation-failed";
                throw new Ir(o, this.type, `Cannot materialize invalid ${this.type} draft`, n.issues);
            }
            return n;
        }
    }
    class oi extends Error {
        code;
        featureType;
        missingTypes;
        constructor(t, r, n = {}){
            super(r), this.name = "FeatureDefinitionRegistryError", this.code = t, this.featureType = n.featureType, this.missingTypes = Object.freeze([
                ...n.missingTypes ?? []
            ]);
        }
    }
    gp = class {
        definitions = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new oi("registry-frozen", "Feature definition registry is frozen");
            if (this.definitions.has(t.type)) throw new oi("duplicate-definition", `Duplicate feature definition: ${t.type}`, {
                featureType: t.type
            });
            return this.definitions.set(t.type, t), this;
        }
        get(t) {
            return this.definitions.get(t);
        }
        require(t) {
            const r = this.get(t);
            if (!r) throw new oi("unknown-definition", `Unknown feature definition: ${t}`, {
                featureType: t
            });
            return r;
        }
        list() {
            return Object.freeze(Di.flatMap((t)=>{
                const r = this.definitions.get(t);
                return r ? [
                    r
                ] : [];
            }));
        }
        missingTypes() {
            return Object.freeze(Di.filter((t)=>!this.definitions.has(t)));
        }
        assertComplete() {
            const t = this.missingTypes();
            if (t.length > 0) throw new oi("incomplete-registry", `Feature definition registry is missing: ${t.join(", ")}`, {
                missingTypes: t
            });
        }
        freeze(t = {}) {
            return t.requireComplete && this.assertComplete(), this.frozen = !0, this;
        }
        isFrozen() {
            return this.frozen;
        }
    };
    function me(e, t) {
        return {
            id: e,
            name: t.name,
            type: t.type,
            suppressed: t.suppressed ?? !1,
            dependencyIds: t.dependencyIds ? [
                ...t.dependencyIds
            ] : [],
            timestamp: Date.now(),
            ...t.bodyInputMode ? {
                bodyInputMode: t.bodyInputMode
            } : {}
        };
    }
    function Gn(e, t) {
        if (t.length !== 3 || t.some((r)=>!Number.isFinite(r))) throw new Error(`${e} must be a finite 3D vector`);
    }
    function xc(e) {
        if (Gn("Primitive direction", e), Math.hypot(...e) <= 1e-9) throw new Error("Primitive direction must be non-zero");
    }
    function ao(e) {
        return me(e.id ?? ae(), {
            name: e.name,
            type: e.type,
            dependencyIds: e.dependencyIds,
            suppressed: e.suppressed
        });
    }
    function co(e) {
        if (e !== "add" && e !== "cut") throw new Error("Primitive mode must be add or cut");
        return e;
    }
    Ip = function(e) {
        if (!(e.length > 0) || !(e.width > 0) || !(e.height > 0)) throw new Error("Box dimensions must be positive");
        return Gn("Box origin", e.origin), {
            ...ao({
                ...e,
                type: "box"
            }),
            type: "box",
            mode: co(e.mode),
            origin: [
                ...e.origin
            ],
            length: e.length,
            width: e.width,
            height: e.height,
            solidId: null
        };
    };
    Sc = function(e) {
        if (!(e.radius > 0) || !(e.height > 0)) throw new Error("Cylinder radius and height must be positive");
        return Gn("Cylinder origin", e.origin), xc(e.direction), {
            ...ao({
                ...e,
                type: "cylinder"
            }),
            type: "cylinder",
            mode: co(e.mode),
            origin: [
                ...e.origin
            ],
            direction: [
                ...e.direction
            ],
            radius: e.radius,
            height: e.height,
            solidId: null
        };
    };
    bp = function(e) {
        if (!(e.bottomRadius > 0) || !(e.topRadius >= 0) || !(e.height > 0) || e.bottomRadius === 0 && e.topRadius === 0) throw new Error("Cone radii and height are invalid");
        return Gn("Cone origin", e.origin), xc(e.direction), {
            ...ao({
                ...e,
                type: "cone"
            }),
            type: "cone",
            mode: co(e.mode),
            origin: [
                ...e.origin
            ],
            direction: [
                ...e.direction
            ],
            bottomRadius: e.bottomRadius,
            topRadius: e.topRadius,
            height: e.height,
            solidId: null
        };
    };
    wp = function(e) {
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Sphere radius must be positive");
        return Gn("Sphere center", e.center), {
            ...ao({
                ...e,
                type: "sphere"
            }),
            type: "sphere",
            mode: co(e.mode),
            center: [
                ...e.center
            ],
            radius: e.radius,
            solidId: null
        };
    };
    function xp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function kc(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function bi(e) {
        return [
            ...e
        ];
    }
    function Sp(e) {
        const { mode: t, origin: r, length: n, width: i, height: o } = e.parameters;
        if (t !== "add" && t !== "cut" || !kc(r) || typeof n != "number" || typeof i != "number" || typeof o != "number") throw new Ft("box", "invalid parameter payload");
        return {
            mode: t,
            origin: bi(r),
            length: n,
            width: i,
            height: o
        };
    }
    const kp = Object.freeze({
        encode: (e)=>pr("box", {
                mode: e.mode,
                origin: e.origin,
                length: e.length,
                width: e.width,
                height: e.height
            }, {}),
        decode: Sp
    });
    class vp extends hr {
        constructor(){
            super({
                type: "box",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.box",
                    iconKey: "part-design-box",
                    sortOrder: 100
                },
                capabilities: {
                    category: "primitive",
                    producesSolid: !0,
                    priorSolid: "conditional",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "origin",
                        kind: "vector3",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "length",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "width",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "height",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [],
                codec: kp
            });
        }
        isTypedDraft(t) {
            return xp(t) ? (t.mode === "add" || t.mode === "cut") && kc(t.origin) && typeof t.length == "number" && typeof t.width == "number" && typeof t.height == "number" : !1;
        }
        createTypedDraft(t) {
            return {
                mode: t.variant === "cut" ? "cut" : "add",
                origin: [
                    0,
                    0,
                    0
                ],
                length: 10,
                width: 10,
                height: 10
            };
        }
        createTypedEditDraft(t) {
            return {
                mode: t.mode,
                origin: bi(t.origin),
                length: t.length,
                width: t.width,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: bi(t.origin)
            };
        }
        validateTypedDraft(t, r) {
            const n = [];
            t.origin.every(Number.isFinite) || n.push({
                severity: "error",
                code: "invalid-origin",
                field: "origin",
                message: "Box origin must be finite"
            });
            for (const i of [
                "length",
                "width",
                "height"
            ])(!Number.isFinite(t[i]) || t[i] <= 0) && n.push({
                severity: "error",
                code: "invalid-dimension",
                field: i,
                message: `Box ${i} must be finite and positive`
            });
            return t.mode === "cut" && !Fp(r) && n.push({
                severity: "error",
                code: "missing-prior-solid",
                field: "mode",
                message: "Cut Box requires a prior solid in the same Body history"
            }), n;
        }
        collectTypedDependencies(t, r) {
            return t.mode === "cut" && r.priorSolidFeatureId ? [
                r.priorSolidFeatureId
            ] : [];
        }
        buildTypedFeature(t, r, n, i) {
            return Ip({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: bi(r.origin)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Fp(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function _p(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ti(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Dt(e) {
        return [
            ...e
        ];
    }
    const Ep = Object.freeze({
        encode: (e)=>pr("cone", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                bottomRadius: e.bottomRadius,
                topRadius: e.topRadius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, bottomRadius: i, topRadius: o, height: s } = e.parameters;
            if (t !== "add" && t !== "cut" || !Ti(r) || !Ti(n) || typeof i != "number" || typeof o != "number" || typeof s != "number") throw new Ft("cone", "invalid parameter payload");
            return {
                mode: t,
                origin: Dt(r),
                direction: Dt(n),
                bottomRadius: i,
                topRadius: o,
                height: s
            };
        }
    });
    class Ap extends hr {
        constructor(){
            super({
                type: "cone",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.cone",
                    iconKey: "part-design-cone",
                    sortOrder: 120
                },
                capabilities: {
                    category: "primitive",
                    producesSolid: !0,
                    priorSolid: "conditional",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "origin",
                        kind: "vector3",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "direction",
                        kind: "vector3",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "bottomRadius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "topRadius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "height",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [],
                codec: Ep
            });
        }
        isTypedDraft(t) {
            return _p(t) ? (t.mode === "add" || t.mode === "cut") && Ti(t.origin) && Ti(t.direction) && typeof t.bottomRadius == "number" && typeof t.topRadius == "number" && typeof t.height == "number" : !1;
        }
        createTypedDraft(t) {
            return {
                mode: t.variant === "cut" ? "cut" : "add",
                origin: [
                    0,
                    0,
                    0
                ],
                direction: [
                    0,
                    0,
                    1
                ],
                bottomRadius: 5,
                topRadius: 0,
                height: 10
            };
        }
        createTypedEditDraft(t) {
            return {
                mode: t.mode,
                origin: Dt(t.origin),
                direction: Dt(t.direction),
                bottomRadius: t.bottomRadius,
                topRadius: t.topRadius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: Dt(t.origin),
                direction: Dt(t.direction)
            };
        }
        validateTypedDraft(t, r) {
            const n = [];
            return t.origin.every(Number.isFinite) || n.push({
                severity: "error",
                code: "invalid-origin",
                field: "origin",
                message: "Cone origin must be finite"
            }), (!t.direction.every(Number.isFinite) || Math.hypot(...t.direction) <= 1e-9) && n.push({
                severity: "error",
                code: "invalid-direction",
                field: "direction",
                message: "Cone direction must be finite and non-zero"
            }), (!Number.isFinite(t.bottomRadius) || t.bottomRadius <= 0 || !Number.isFinite(t.topRadius) || t.topRadius < 0) && n.push({
                severity: "error",
                code: "invalid-radius",
                field: "bottomRadius",
                message: "Cone bottom radius must be positive and top radius non-negative"
            }), (!Number.isFinite(t.height) || t.height <= 0) && n.push({
                severity: "error",
                code: "invalid-dimension",
                field: "height",
                message: "Cone height must be finite and positive"
            }), t.mode === "cut" && !Op(r) && n.push({
                severity: "error",
                code: "missing-prior-solid",
                field: "mode",
                message: "Cut Cone requires a prior solid in the same Body history"
            }), n;
        }
        collectTypedDependencies(t, r) {
            return t.mode === "cut" && r.priorSolidFeatureId ? [
                r.priorSolidFeatureId
            ] : [];
        }
        buildTypedFeature(t, r, n, i) {
            return bp({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: Dt(r.origin),
                direction: Dt(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Op(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function Pp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Bi(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Tt(e) {
        return [
            ...e
        ];
    }
    const Mp = Object.freeze({
        encode: (e)=>pr("cylinder", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                radius: e.radius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, radius: i, height: o } = e.parameters;
            if (t !== "add" && t !== "cut" || !Bi(r) || !Bi(n) || typeof i != "number" || typeof o != "number") throw new Ft("cylinder", "invalid parameter payload");
            return {
                mode: t,
                origin: Tt(r),
                direction: Tt(n),
                radius: i,
                height: o
            };
        }
    });
    class Rp extends hr {
        constructor(){
            super({
                type: "cylinder",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.cylinder",
                    iconKey: "part-design-cylinder",
                    sortOrder: 110
                },
                capabilities: {
                    category: "primitive",
                    producesSolid: !0,
                    priorSolid: "conditional",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "origin",
                        kind: "vector3",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "direction",
                        kind: "vector3",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "radius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "height",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [],
                codec: Mp
            });
        }
        isTypedDraft(t) {
            return Pp(t) ? (t.mode === "add" || t.mode === "cut") && Bi(t.origin) && Bi(t.direction) && typeof t.radius == "number" && typeof t.height == "number" : !1;
        }
        createTypedDraft(t) {
            return {
                mode: t.variant === "cut" ? "cut" : "add",
                origin: [
                    0,
                    0,
                    0
                ],
                direction: [
                    0,
                    0,
                    1
                ],
                radius: 5,
                height: 10
            };
        }
        createTypedEditDraft(t) {
            return {
                mode: t.mode,
                origin: Tt(t.origin),
                direction: Tt(t.direction),
                radius: t.radius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: Tt(t.origin),
                direction: Tt(t.direction)
            };
        }
        validateTypedDraft(t, r) {
            const n = [];
            t.origin.every(Number.isFinite) || n.push({
                severity: "error",
                code: "invalid-origin",
                field: "origin",
                message: "Cylinder origin must be finite"
            }), (!t.direction.every(Number.isFinite) || Math.hypot(...t.direction) <= 1e-9) && n.push({
                severity: "error",
                code: "invalid-direction",
                field: "direction",
                message: "Cylinder direction must be finite and non-zero"
            });
            for (const i of [
                "radius",
                "height"
            ])(!Number.isFinite(t[i]) || t[i] <= 0) && n.push({
                severity: "error",
                code: "invalid-dimension",
                field: i,
                message: `Cylinder ${i} must be finite and positive`
            });
            return t.mode === "cut" && !Cp(r) && n.push({
                severity: "error",
                code: "missing-prior-solid",
                field: "mode",
                message: "Cut Cylinder requires a prior solid in the same Body history"
            }), n;
        }
        collectTypedDependencies(t, r) {
            return t.mode === "cut" && r.priorSolidFeatureId ? [
                r.priorSolidFeatureId
            ] : [];
        }
        buildTypedFeature(t, r, n, i) {
            return Sc({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: Tt(r.origin),
                direction: Tt(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Cp(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    $p = {
        propagateDraftSurfaces: !0,
        preserveInlyingRounds: !0,
        recreateAttachedRounds: !0,
        extendIntersectSurfaces: !1
    };
    function vc(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r)) || Math.hypot(...e) <= 1e-9) throw new Error(`${t} must be a finite non-zero vector`);
    }
    function Co(e, t) {
        if (!Number.isFinite(e) || e <= 0 || e >= Math.PI / 2) throw new Error(`${t} must be greater than 0 and less than 90 degrees`);
    }
    function Us(e) {
        if (e.kind === "world_plane") vc(e.normal, "Draft plane normal");
        else {
            if (e.kind === "datum_plane" && !e.featureId) throw new Error("Draft datum plane reference is empty");
            if (e.kind === "face" && !e.selector.featureId) throw new Error("Draft face reference is empty");
        }
    }
    function Dp(e) {
        if (e.kind === "edge_chain") {
            if (!e.selectors.length) throw new Error("Draft edge-chain hinge is empty");
            return;
        }
        Us(e);
    }
    function Tp(e) {
        if (e.kind === "world") vc(e.direction, "Draft pull direction");
        else {
            if (e.kind === "datum_axis" && !e.featureId) throw new Error("Draft axis reference is empty");
            if (e.kind === "plane_normal") Us(e.plane);
            else if (e.kind === "edge" && !e.selector.featureId) throw new Error("Draft direction edge is empty");
        }
    }
    os = function(e) {
        if (!e.baseFeatureId) throw new Error("Draft requires a base feature");
        if (!e.draftFaces.length) throw new Error("Draft requires at least one draft face");
        if (e.hinges.length < 1 || e.hinges.length > 2) throw new Error("Draft requires one or two hinges");
        if (e.hinges.forEach(Dp), Tp(e.direction), Co(e.angle, "Draft angle"), Co(e.secondSideAngle, "Draft second-side angle"), e.split.kind === "reference" && Us(e.split.reference), e.split.kind === "none" && e.hinges.length > 1) throw new Error("A second Draft hinge requires a split definition");
        if (e.method !== void 0 && ![
            "constant",
            "variable",
            "neutral_plane"
        ].includes(e.method)) throw new Error(`Invalid Draft method: ${String(e.method)}`);
        if (e.angleTolerance !== void 0 && (!Number.isFinite(e.angleTolerance) || e.angleTolerance < 0)) throw new Error("Invalid Draft angle tolerance");
        if (e.distanceTolerance !== void 0 && (!Number.isFinite(e.distanceTolerance) || e.distanceTolerance < 0)) throw new Error("Invalid Draft distance tolerance");
        const t = e.variableAngles.map((r)=>structuredClone(r)).sort((r, n)=>r.location - n.location);
        for (const r of t){
            if (!r.id) throw new Error("Draft angle control id is empty");
            if (!Number.isFinite(r.location) || r.location < 0 || r.location > 1) throw new Error("Draft angle control location must be between 0 and 1");
            Co(r.angle, "Draft variable angle");
        }
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "draft",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "draft",
            baseFeatureId: e.baseFeatureId,
            draftFaces: structuredClone(e.draftFaces),
            hinges: structuredClone(e.hinges),
            direction: structuredClone(e.direction),
            reverseDirection: e.reverseDirection,
            angle: e.angle,
            reverseAngle: e.reverseAngle,
            split: structuredClone(e.split),
            variableAngles: t,
            secondSideAngle: e.secondSideAngle,
            reverseSecondSideAngle: e.reverseSecondSideAngle,
            options: structuredClone(e.options),
            ...e.method !== void 0 ? {
                method: e.method
            } : {},
            ...e.angleTolerance !== void 0 ? {
                angleTolerance: e.angleTolerance
            } : {},
            ...e.distanceTolerance !== void 0 ? {
                distanceTolerance: e.distanceTolerance
            } : {},
            solidId: null
        };
    };
    const Fc = "result";
    function xn(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
    }
    function _c(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function Bp(e, t) {
        return e === void 0 ? void 0 : _c(e, t);
    }
    function zp(e, t) {
        if (e !== void 0) {
            if (!Array.isArray(e)) throw new Error(`${t} must be an array`);
            return Object.freeze(e.map((r, n)=>_c(r, `${t}[${n}]`)));
        }
    }
    function jp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ec(e, t) {
        if (e !== "face" && e !== "edge" && e !== "vertex") throw new Error(`${t} must be face, edge, or vertex`);
    }
    function ss(e) {
        xn(e.producerFeatureId, "producerFeatureId"), xn(e.outputKey, "outputKey"), Ec(e.subshapeKind, "subshapeKind"), xn(e.semanticId, "semanticId");
        const t = Bp(e.hintCentroid, "hintCentroid"), r = zp(e.samplePoints, "samplePoints");
        return Object.freeze({
            producerFeatureId: e.producerFeatureId,
            outputKey: e.outputKey,
            subshapeKind: e.subshapeKind,
            semanticId: e.semanticId,
            ...t ? {
                hintCentroid: t
            } : {},
            ...r ? {
                samplePoints: r
            } : {}
        });
    }
    function Np(e, t) {
        if (!jp(e)) throw new Error("Topology reference must be an object");
        if (Object.hasOwn(e, "producerFeatureId") || Object.hasOwn(e, "outputKey") || Object.hasOwn(e, "subshapeKind") || Object.hasOwn(e, "semanticId")) {
            if (Ec(e.subshapeKind, "subshapeKind"), e.subshapeKind !== t) throw new Error(`Expected ${t} topology reference, received ${e.subshapeKind}`);
            return Object.freeze({
                reference: ss({
                    producerFeatureId: e.producerFeatureId,
                    outputKey: e.outputKey,
                    subshapeKind: e.subshapeKind,
                    semanticId: e.semanticId,
                    hintCentroid: e.hintCentroid,
                    samplePoints: e.samplePoints
                })
            });
        }
        xn(e.featureId, "featureId"), xn(e.role, "role");
        let n;
        if (e.occEdgeOrdinal !== void 0) {
            if (t !== "edge" || typeof e.occEdgeOrdinal != "number" || !Number.isSafeInteger(e.occEdgeOrdinal) || e.occEdgeOrdinal < 0) throw new Error("occEdgeOrdinal must be a non-negative edge ordinal");
            n = e.occEdgeOrdinal;
        }
        return Object.freeze({
            reference: ss({
                producerFeatureId: e.featureId,
                outputKey: Fc,
                subshapeKind: t,
                semanticId: e.role,
                hintCentroid: e.hintCentroid,
                samplePoints: e.samplePoints
            }),
            ...n === void 0 ? {} : {
                legacyOrdinalHint: n
            }
        });
    }
    function Ac(e) {
        return {
            featureId: e.featureId,
            role: e.role,
            ...e.outputKey ? {
                outputKey: e.outputKey
            } : {},
            ...e.subshapeKind ? {
                subshapeKind: e.subshapeKind
            } : {},
            ...e.hintCentroid ? {
                hintCentroid: [
                    ...e.hintCentroid
                ]
            } : {},
            ...e.hintPlaneOrigin ? {
                hintPlaneOrigin: [
                    ...e.hintPlaneOrigin
                ]
            } : {},
            ...e.hintNormal ? {
                hintNormal: [
                    ...e.hintNormal
                ]
            } : {},
            ...e.samplePoints ? {
                samplePoints: e.samplePoints.map((t)=>[
                        ...t
                    ])
            } : {},
            ...typeof e.occEdgeOrdinal == "number" && Number.isSafeInteger(e.occEdgeOrdinal) && e.occEdgeOrdinal >= 0 ? {
                occEdgeOrdinal: e.occEdgeOrdinal
            } : {}
        };
    }
    function zi(e, t) {
        if (e.subshapeKind && e.subshapeKind !== t) throw new Error(`Expected ${t} selector, received ${e.subshapeKind}`);
        return ss({
            producerFeatureId: e.featureId,
            outputKey: e.outputKey ?? Fc,
            subshapeKind: t,
            semanticId: e.role,
            hintCentroid: e.hintCentroid,
            samplePoints: e.samplePoints
        });
    }
    function Yn(e, t) {
        const r = Np(e, t), n = r.reference;
        return {
            featureId: n.producerFeatureId,
            role: n.semanticId,
            outputKey: n.outputKey,
            subshapeKind: n.subshapeKind,
            ...n.hintCentroid ? {
                hintCentroid: [
                    ...n.hintCentroid
                ]
            } : {},
            ...n.samplePoints ? {
                samplePoints: n.samplePoints.map((i)=>[
                        ...i
                    ])
            } : {},
            ...r.legacyOrdinalHint === void 0 ? {} : {
                occEdgeOrdinal: r.legacyOrdinalHint
            }
        };
    }
    Z0 = function(e, t, r) {
        if (e.kind === "body") return {
            outcome: t > 0 ? "resolved" : "lost",
            target: {
                ...e,
                revision: t
            },
            face: null,
            edge: null
        };
        if (e.kind === "vertex") return {
            outcome: "lost",
            target: {
                ...e,
                revision: t
            },
            face: null,
            edge: null
        };
        const n = r.get(e.selector.featureId);
        if (!n) return {
            outcome: "lost",
            target: {
                ...e,
                revision: t
            },
            face: null,
            edge: null
        };
        if (e.kind === "face") {
            const o = n.resolve(e.selector);
            return {
                outcome: o.outcome,
                target: {
                    ...e,
                    revision: t
                },
                face: o.face,
                edge: null
            };
        }
        const i = n.resolveEdge(e.selector);
        return {
            outcome: i.outcome,
            target: {
                ...e,
                revision: t
            },
            face: null,
            edge: i.edge
        };
    };
    Q0 = function(e, t, r, n) {
        return r.resolve({
            featureId: e,
            role: t,
            hintCentroid: n
        });
    };
    function si(e, t) {
        return `${e}:${t}`;
    }
    function Vp(e, t) {
        if (!e.featureId.startsWith("ug:feature:")) return [];
        if (!e.hintPlaneOrigin && !e.hintNormal) return [];
        const r = /(?:^|\/)face\[(\d+)\](?:$|\/)/i.exec(e.role), n = r ? Number(r[1]) : Number.NaN;
        return Number.isInteger(n) ? ((o)=>o.filter((s)=>s.subMeshIndex === n || s.subMeshIndex === n - 1))(t).filter((o)=>{
            if (e.hintNormal) {
                if (!o.normal) return !1;
                const s = Math.hypot(...e.hintNormal), a = Math.hypot(...o.normal);
                if (s <= 1e-9 || a <= 1e-9 || (e.hintNormal[0] * o.normal[0] + e.hintNormal[1] * o.normal[1] + e.hintNormal[2] * o.normal[2]) / (s * a) < 1 - 1e-6) return !1;
            }
            return !(e.hintPlaneOrigin && (!o.plane || Math.hypot(o.plane.origin[0] - e.hintPlaneOrigin[0], o.plane.origin[1] - e.hintPlaneOrigin[1], o.plane.origin[2] - e.hintPlaneOrigin[2]) > .001));
        }) : [];
    }
    function bt(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return Math.sqrt(r * r + n * n + i * i);
    }
    function an(e) {
        return e.midpoint ? e.midpoint : [
            (e.startVertex[0] + e.endVertex[0]) / 2,
            (e.startVertex[1] + e.endVertex[1]) / 2,
            (e.startVertex[2] + e.endVertex[2]) / 2
        ];
    }
    function Kp(e) {
        if (e.hintCentroid) return e.hintCentroid;
        if (!e.samplePoints || e.samplePoints.length === 0) return null;
        const t = e.samplePoints.reduce((r, n)=>[
                r[0] + n[0],
                r[1] + n[1],
                r[2] + n[2]
            ], [
            0,
            0,
            0
        ]);
        return [
            t[0] / e.samplePoints.length,
            t[1] / e.samplePoints.length,
            t[2] / e.samplePoints.length
        ];
    }
    Oc = class {
        _byKey = new Map;
        _edgesByKey = new Map;
        _allFaces = [];
        _allEdges = [];
        static fromSolid(t, r = []) {
            const n = new Oc;
            for (const i of t){
                const o = si(i.provenance.featureId, i.provenance.role), s = n._byKey.get(o) ?? [];
                s.push(i), n._byKey.set(o, s), n._allFaces.push(i);
            }
            for (const i of r){
                const o = si(i.provenance.featureId, i.provenance.role), s = n._edgesByKey.get(o) ?? [];
                s.push(i), n._edgesByKey.set(o, s), n._allEdges.push(i);
            }
            return n;
        }
        getEdges() {
            return this._allEdges;
        }
        resolveFaceBySubMeshIndex(t) {
            const r = this._allFaces.filter((n)=>n.subMeshIndex === t);
            if (r.length === 0) return {
                outcome: "lost",
                faceId: null,
                face: null,
                candidates: []
            };
            if (r.length === 1) {
                const n = r[0];
                return {
                    outcome: "resolved",
                    faceId: n.id,
                    face: n,
                    candidates: r
                };
            }
            return {
                outcome: "ambiguous",
                faceId: null,
                face: null,
                candidates: r
            };
        }
        resolve(t) {
            const r = si(t.featureId, t.role);
            let n = this._byKey.get(r) ?? [];
            if (n.length === 0 && (n = Vp(t, this._allFaces)), n.length === 0) return {
                outcome: "lost",
                faceId: null,
                face: null,
                candidates: []
            };
            if (n.length === 1) {
                const i = n[0];
                return {
                    outcome: "resolved",
                    faceId: i.id,
                    face: i,
                    candidates: n
                };
            }
            if (t.hintCentroid) {
                let i = n[0], o = 1 / 0;
                for (const a of n){
                    if (!a.centroid) continue;
                    const d = bt(t.hintCentroid, a.centroid);
                    d < o && (o = d, i = a);
                }
                if (n.filter((a)=>a.centroid && Math.abs(bt(t.hintCentroid, a.centroid) - o) < 1e-6).length === 1) return {
                    outcome: "resolved",
                    faceId: i.id,
                    face: i,
                    candidates: n
                };
            }
            return {
                outcome: "ambiguous",
                faceId: null,
                face: null,
                candidates: n
            };
        }
        resolveEdge(t) {
            const r = si(t.featureId, t.role);
            let n = this._edgesByKey.get(r) ?? [];
            if (n.length === 0) {
                const i = Kp(t);
                if (!i) return {
                    outcome: "lost",
                    edgeId: null,
                    edge: null,
                    candidates: []
                };
                if (n = this._allEdges.filter((o)=>o.provenance.featureId === t.featureId), n.length > 1 && i) {
                    let o = n[0], s = bt(i, an(o));
                    for (const d of n.slice(1)){
                        const l = bt(i, an(d));
                        l < s && (o = d, s = l);
                    }
                    const a = n.filter((d)=>Math.abs(bt(i, an(d)) - s) < 1e-6);
                    n = a.length === 1 ? [
                        o
                    ] : a;
                }
            }
            if (n.length === 0) return {
                outcome: "lost",
                edgeId: null,
                edge: null,
                candidates: []
            };
            if (n.length === 1) {
                const i = n[0];
                return {
                    outcome: "resolved",
                    edgeId: i.id,
                    edge: i,
                    candidates: n
                };
            }
            if (t.hintCentroid) {
                let i = n[0], o = 1 / 0;
                for (const a of n){
                    const d = an(a);
                    if (!d) continue;
                    const l = bt(t.hintCentroid, d);
                    l < o && (o = l, i = a);
                }
                if (n.filter((a)=>{
                    const d = an(a);
                    return d != null && Math.abs(bt(t.hintCentroid, d) - o) < 1e-6;
                }).length === 1) return {
                    outcome: "resolved",
                    edgeId: i.id,
                    edge: i,
                    candidates: n
                };
            }
            return {
                outcome: "ambiguous",
                edgeId: null,
                edge: null,
                candidates: n
            };
        }
        findNearestEdge(t, r, n = 1 / 0) {
            const i = this._allEdges.filter((a)=>a.provenance.featureId === t);
            if (i.length === 0) return {
                outcome: "lost",
                edgeId: null,
                edge: null,
                candidates: []
            };
            let o = null, s = 1 / 0;
            for (const a of i){
                const d = Lp(r, a.startVertex, a.endVertex);
                d < s && (s = d, o = a);
            }
            return !o || s > n ? {
                outcome: "lost",
                edgeId: null,
                edge: null,
                candidates: i
            } : {
                outcome: "resolved",
                edgeId: o.id,
                edge: o,
                candidates: [
                    o
                ]
            };
        }
    };
    function Lp(e, t, r) {
        const n = [
            r[0] - t[0],
            r[1] - t[1],
            r[2] - t[2]
        ], i = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], o = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
        if (o < 1e-12) return bt(e, t);
        let s = (i[0] * n[0] + i[1] * n[1] + i[2] * n[2]) / o;
        s = Math.max(0, Math.min(1, s));
        const a = [
            t[0] + n[0] * s,
            t[1] + n[1] * s,
            t[2] + n[2] * s
        ];
        return bt(e, a);
    }
    function rt(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Lr(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function lo(e) {
        return rt(e) && typeof e.featureId == "string" && typeof e.role == "string";
    }
    function Ws(e) {
        return rt(e) ? e.kind === "world_plane" ? Lr(e.origin) && Lr(e.normal) : e.kind === "datum_plane" ? typeof e.featureId == "string" : e.kind === "face" ? lo(e.selector) : !1 : !1;
    }
    function Hp(e) {
        return rt(e) ? e.kind === "edge_chain" ? Array.isArray(e.selectors) && e.selectors.every(lo) : Ws(e) : !1;
    }
    function qp(e) {
        return rt(e) ? e.kind === "world" ? Lr(e.direction) : e.kind === "datum_axis" ? typeof e.featureId == "string" : e.kind === "plane_normal" ? Ws(e.plane) : e.kind === "edge" ? lo(e.selector) : !1 : !1;
    }
    const as = new Set([
        "dependent",
        "independent",
        "first_only",
        "second_only"
    ]);
    function Up(e) {
        return rt(e) ? e.kind === "none" ? !0 : e.kind === "hinge" ? as.has(e.sideMode) : e.kind === "reference" && as.has(e.sideMode) && Ws(e.reference) : !1;
    }
    function Wp(e) {
        return rt(e) && typeof e.id == "string" && typeof e.location == "number" && typeof e.angle == "number" && typeof e.reversed == "boolean";
    }
    function Gp(e) {
        return rt(e) && typeof e.propagateDraftSurfaces == "boolean" && typeof e.preserveInlyingRounds == "boolean" && typeof e.recreateAttachedRounds == "boolean" && typeof e.extendIntersectSurfaces == "boolean";
    }
    function Pc(e) {
        return rt(e) && typeof e.baseFeatureId == "string" && Array.isArray(e.draftFaces) && e.draftFaces.every(lo) && Array.isArray(e.hinges) && e.hinges.every(Hp) && qp(e.direction) && typeof e.reverseDirection == "boolean" && typeof e.angle == "number" && typeof e.reverseAngle == "boolean" && Up(e.split) && Array.isArray(e.variableAngles) && e.variableAngles.every(Wp) && typeof e.secondSideAngle == "number" && typeof e.reverseSecondSideAngle == "boolean" && Gp(e.options);
    }
    function Mc(e) {
        return zi(e, "face");
    }
    function Rc(e) {
        return zi(e, "edge");
    }
    function Gs(e) {
        switch(e.kind){
            case "world_plane":
                return structuredClone(e);
            case "datum_plane":
                return {
                    kind: e.kind,
                    featureId: e.featureId
                };
            case "face":
                return {
                    kind: e.kind,
                    selector: Mc(e.selector)
                };
        }
    }
    function Yp(e) {
        return e.kind === "edge_chain" ? {
            kind: e.kind,
            selectors: e.selectors.map(Rc)
        } : Gs(e);
    }
    function Jp(e) {
        switch(e.kind){
            case "world":
            case "datum_axis":
                return structuredClone(e);
            case "plane_normal":
                return {
                    kind: e.kind,
                    plane: Gs(e.plane)
                };
            case "edge":
                return {
                    kind: e.kind,
                    selector: Rc(e.selector)
                };
        }
    }
    function Xp(e) {
        return e.kind !== "reference" ? structuredClone(e) : {
            kind: e.kind,
            sideMode: e.sideMode,
            reference: Gs(e.reference)
        };
    }
    function Ys(e) {
        if (!rt(e)) throw new Error("invalid Draft plane reference");
        if (e.kind === "world_plane" && Lr(e.origin) && Lr(e.normal)) return {
            kind: "world_plane",
            origin: [
                ...e.origin
            ],
            normal: [
                ...e.normal
            ]
        };
        if (e.kind === "datum_plane" && typeof e.featureId == "string") return {
            kind: "datum_plane",
            featureId: e.featureId
        };
        if (e.kind === "face") return {
            kind: "face",
            selector: Yn(e.selector, "face")
        };
        throw new Error("invalid Draft plane reference");
    }
    function Zp(e) {
        if (rt(e) && e.kind === "edge_chain") {
            if (!Array.isArray(e.selectors)) throw new Error("invalid Draft edge chain");
            return {
                kind: "edge_chain",
                selectors: e.selectors.map((t)=>Yn(t, "edge"))
            };
        }
        return Ys(e);
    }
    function Qp(e) {
        if (!rt(e)) throw new Error("invalid Draft direction");
        if (e.kind === "world" && Lr(e.direction)) return {
            kind: "world",
            direction: [
                ...e.direction
            ]
        };
        if (e.kind === "datum_axis" && typeof e.featureId == "string") return {
            kind: "datum_axis",
            featureId: e.featureId
        };
        if (e.kind === "plane_normal") return {
            kind: "plane_normal",
            plane: Ys(e.plane)
        };
        if (e.kind === "edge") return {
            kind: "edge",
            selector: Yn(e.selector, "edge")
        };
        throw new Error("invalid Draft direction");
    }
    function eh(e) {
        if (!rt(e)) throw new Error("invalid Draft split");
        if (e.kind === "none") return {
            kind: "none"
        };
        if ((e.kind === "hinge" || e.kind === "reference") && as.has(e.sideMode)) return e.kind === "hinge" ? {
            kind: "hinge",
            sideMode: e.sideMode
        } : {
            kind: "reference",
            sideMode: e.sideMode,
            reference: Ys(e.reference)
        };
        throw new Error("invalid Draft split");
    }
    function th(e) {
        try {
            const t = {
                baseFeatureId: e.references.baseFeatureId,
                draftFaces: Array.isArray(e.references.draftFaces) ? e.references.draftFaces.map((r)=>Yn(r, "face")) : e.references.draftFaces,
                hinges: Array.isArray(e.references.hinges) ? e.references.hinges.map(Zp) : e.references.hinges,
                direction: Qp(e.references.direction),
                split: eh(e.references.split),
                reverseDirection: e.parameters.reverseDirection,
                angle: e.parameters.angle,
                reverseAngle: e.parameters.reverseAngle,
                variableAngles: e.parameters.variableAngles,
                secondSideAngle: e.parameters.secondSideAngle,
                reverseSecondSideAngle: e.parameters.reverseSecondSideAngle,
                options: e.parameters.options
            };
            if (!Pc(t)) throw new Error("invalid Draft payload shape");
            return structuredClone(t);
        } catch (t) {
            throw new Ft("draft", t instanceof Error ? t.message : "invalid payload");
        }
    }
    const rh = Object.freeze({
        encode (e) {
            return pr("draft", {
                reverseDirection: e.reverseDirection,
                angle: e.angle,
                reverseAngle: e.reverseAngle,
                variableAngles: e.variableAngles,
                secondSideAngle: e.secondSideAngle,
                reverseSecondSideAngle: e.reverseSecondSideAngle,
                options: e.options
            }, {
                baseFeatureId: e.baseFeatureId,
                draftFaces: e.draftFaces.map(Mc),
                hinges: e.hinges.map(Yp),
                direction: Jp(e.direction),
                split: Xp(e.split)
            });
        },
        decode: th
    });
    function Js(e) {
        return e.kind === "world_plane" ? [] : e.kind === "datum_plane" ? [
            e.featureId
        ] : [
            e.selector.featureId
        ];
    }
    function nh(e) {
        return e.kind === "edge_chain" ? e.selectors.map((t)=>t.featureId) : Js(e);
    }
    function ih(e) {
        switch(e.kind){
            case "world":
                return [];
            case "datum_axis":
                return [
                    e.featureId
                ];
            case "plane_normal":
                return Js(e.plane);
            case "edge":
                return [
                    e.selector.featureId
                ];
        }
    }
    function oh(e) {
        return e.kind === "reference" ? Js(e.reference) : [];
    }
    function td(e) {
        return [
            e.baseFeatureId,
            ...e.draftFaces.map((t)=>t.featureId),
            ...e.hinges.flatMap(nh),
            ...ih(e.direction),
            ...oh(e.split)
        ];
    }
    function sh(e, t) {
        const r = [];
        for (const n of new Set(e)){
            if (!n) {
                r.push({
                    severity: "error",
                    code: "empty-reference",
                    message: "Draft reference feature id is empty"
                });
                continue;
            }
            const i = t.historyFeatureIds.indexOf(n);
            i < 0 ? r.push({
                severity: "error",
                code: "unknown-reference",
                message: `Draft reference ${n} is not in Body ${t.bodyId}`
            }) : i >= t.historyIndex && r.push({
                severity: "error",
                code: "forward-reference",
                message: `Draft reference ${n} must precede the feature`
            });
        }
        return r;
    }
    class ah extends hr {
        constructor(){
            super({
                type: "draft",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.draft",
                    iconKey: "part-design-draft",
                    sortOrder: 500
                },
                capabilities: {
                    category: "dress_up",
                    producesSolid: !0,
                    priorSolid: "required",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "reverseDirection",
                        kind: "boolean",
                        required: !0
                    },
                    {
                        key: "angle",
                        kind: "number",
                        required: !0,
                        unit: "radian"
                    },
                    {
                        key: "reverseAngle",
                        kind: "boolean",
                        required: !0
                    },
                    {
                        key: "secondSideAngle",
                        kind: "number",
                        required: !0,
                        unit: "radian"
                    },
                    {
                        key: "reverseSecondSideAngle",
                        kind: "boolean",
                        required: !0
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "draftFaces",
                        kind: "topology_list",
                        required: !0
                    },
                    {
                        key: "hinges",
                        kind: "topology_list",
                        required: !0
                    },
                    {
                        key: "direction",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "split",
                        kind: "feature",
                        required: !0
                    }
                ],
                codec: rh
            });
        }
        isTypedDraft(t) {
            return Pc(t);
        }
        createTypedDraft(t) {
            const r = Math.PI / 12;
            return {
                baseFeatureId: t.priorSolidFeatureId ?? "",
                draftFaces: [],
                hinges: [
                    {
                        kind: "world_plane",
                        origin: [
                            0,
                            0,
                            0
                        ],
                        normal: [
                            0,
                            0,
                            1
                        ]
                    }
                ],
                direction: {
                    kind: "world",
                    direction: [
                        0,
                        0,
                        1
                    ]
                },
                reverseDirection: !1,
                angle: r,
                reverseAngle: !1,
                split: {
                    kind: "none"
                },
                variableAngles: [],
                secondSideAngle: r,
                reverseSecondSideAngle: !1,
                options: structuredClone($p)
            };
        }
        createTypedEditDraft(t) {
            return structuredClone({
                baseFeatureId: t.baseFeatureId,
                draftFaces: t.draftFaces,
                hinges: t.hinges,
                direction: t.direction,
                reverseDirection: t.reverseDirection,
                angle: t.angle,
                reverseAngle: t.reverseAngle,
                split: t.split,
                variableAngles: t.variableAngles,
                secondSideAngle: t.secondSideAngle,
                reverseSecondSideAngle: t.reverseSecondSideAngle,
                options: t.options
            });
        }
        normalizeTypedDraft(t) {
            const r = structuredClone(t);
            return r.baseFeatureId = r.baseFeatureId.trim(), r.variableAngles.sort((n, i)=>n.location - i.location || n.id.localeCompare(i.id)), r;
        }
        validateTypedDraft(t, r) {
            const n = sh(td(t), r);
            r.priorSolidFeatureId ? t.baseFeatureId !== r.priorSolidFeatureId && n.push({
                severity: "error",
                code: "base-not-current-solid",
                field: "baseFeatureId",
                message: `Draft base ${t.baseFeatureId} is not current solid ${r.priorSolidFeatureId}`
            }) : n.push({
                severity: "error",
                code: "missing-prior-solid",
                field: "baseFeatureId",
                message: "Draft requires a prior solid feature"
            });
            const i = t.variableAngles.map((o)=>o.id);
            new Set(i).size !== i.length && n.push({
                severity: "error",
                code: "duplicate-variable-angle-id",
                field: "variableAngles",
                message: "Draft variable-angle control ids must be unique"
            });
            try {
                os({
                    id: "__draft_validation__",
                    name: "Draft validation",
                    dependencyIds: [],
                    ...t
                });
            } catch (o) {
                n.push({
                    severity: "error",
                    code: "invalid-draft-parameters",
                    message: o instanceof Error ? o.message : "Invalid Draft parameters"
                });
            }
            return n;
        }
        collectTypedDependencies(t) {
            return td(t);
        }
        buildTypedFeature(t, r, n, i) {
            return os({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...structuredClone(r)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    Cc = function(e) {
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "chamfer",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "chamfer",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(Ac),
            distance: e.distance,
            secondDistance: e.secondDistance,
            ...e.angle !== void 0 ? {
                angle: e.angle
            } : {},
            ...e.symmetric !== void 0 ? {
                symmetric: e.symmetric
            } : {},
            ...e.reverseOffsets !== void 0 ? {
                reverseOffsets: e.reverseOffsets
            } : {},
            ...e.offsetMethod !== void 0 ? {
                offsetMethod: e.offsetMethod
            } : {},
            ...e.chamferOption !== void 0 ? {
                chamferOption: e.chamferOption
            } : {},
            ...e.tolerance !== void 0 ? {
                tolerance: e.tolerance
            } : {},
            solidId: null
        };
    };
    $c = function(e) {
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "fillet",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "fillet",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(Ac),
            radius: e.radius,
            ...e.tangentPropagation !== void 0 ? {
                tangentPropagation: e.tangentPropagation
            } : {},
            ...e.rollOntoEdge !== void 0 ? {
                rollOntoEdge: e.rollOntoEdge
            } : {},
            ...e.rollOverSmoothEdge !== void 0 ? {
                rollOverSmoothEdge: e.rollOverSmoothEdge
            } : {},
            ...e.allInstances !== void 0 ? {
                allInstances: e.allInstances
            } : {},
            ...e.tolerance !== void 0 ? {
                tolerance: e.tolerance
            } : {},
            solidId: null
        };
    };
    dh = function(e) {
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "thickness",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "thickness",
            baseFeatureId: e.baseFeatureId,
            removedFaceSelectors: e.removedFaceSelectors.map((r)=>({
                    ...r,
                    hintCentroid: r.hintCentroid ? [
                        ...r.hintCentroid
                    ] : void 0
                })),
            thickness: e.thickness,
            inward: e.inward,
            solidId: null
        };
    };
    function er(e) {
        return e !== null && typeof e == "object" && !Array.isArray(e);
    }
    function ji(e) {
        if (Array.isArray(e)) return e.map(ji);
        if (!er(e)) return structuredClone(e);
        const t = Object.getPrototypeOf(e);
        return t !== Object.prototype && t !== null ? structuredClone(e) : Object.fromEntries(Object.entries(e).filter(([r, n])=>r !== "occEdgeOrdinal" && n !== void 0).map(([r, n])=>[
                r,
                ji(n)
            ]));
    }
    function ch(e) {
        const t = [
            ...e.parameterSchema.map((i)=>i.key),
            ...e.extraParameterKeys ?? [],
            ...e.requiredExtraParameterKeys ?? []
        ], r = [
            ...e.referenceSchema.map((i)=>i.key),
            ...e.extraReferenceKeys ?? [],
            ...e.requiredExtraReferenceKeys ?? []
        ], n = [
            ...t,
            ...r
        ];
        if (new Set(n).size !== n.length) throw new Error(`Structured Feature definition ${e.type} has duplicate payload keys`);
        return Object.freeze({
            parameter: Object.freeze(t),
            reference: Object.freeze(r),
            required: Object.freeze([
                ...e.parameterSchema.filter((i)=>i.required).map((i)=>i.key),
                ...e.referenceSchema.filter((i)=>i.required).map((i)=>i.key),
                ...e.requiredExtraParameterKeys ?? [],
                ...e.requiredExtraReferenceKeys ?? []
            ]),
            all: new Set(n)
        });
    }
    function rd(e, t) {
        const r = {};
        for (const n of t)Object.hasOwn(e, n) && e[n] !== void 0 && (r[n] = ji(e[n]));
        return r;
    }
    function Xs(e) {
        const t = ji(e);
        return Object.freeze(t);
    }
    function ds(e, t, r) {
        return !er(e) || Object.keys(e).some((n)=>!t.all.has(n)) || !t.required.every((n)=>Object.hasOwn(e, n) && e[n] !== void 0 && e[n] !== null && e[n] !== "") ? !1 : r.parameterSchema.every((n)=>{
            const i = e[n.key];
            if (i == null) return !n.required;
            switch(n.kind){
                case "number":
                    return typeof i == "number" && Number.isFinite(i);
                case "boolean":
                    return typeof i == "boolean";
                case "string":
                    return typeof i == "string";
                case "enum":
                    return typeof i == "string" && (n.enumValues?.includes(i) ?? !1);
                case "vector3":
                    return Array.isArray(i) && i.length === 3 && i.every((o)=>typeof o == "number" && Number.isFinite(o));
            }
        }) && r.referenceSchema.every((n)=>{
            const i = e[n.key];
            if (i == null) return !n.required;
            switch(n.kind){
                case "feature":
                    return typeof i == "string" && i.length > 0 || er(i);
                case "feature_list":
                    return Array.isArray(i) && i.every((o)=>typeof o == "string" && o.length > 0 || er(o));
                case "topology":
                    return er(i);
                case "topology_list":
                    return Array.isArray(i) && i.every(er);
            }
        });
    }
    function lh(e, t) {
        return Object.freeze({
            encode (r) {
                if (!ds(r, t, e)) throw new Ft(e.type, "invalid structured draft payload");
                return pr(e.type, rd(r, t.parameter), rd(r, t.reference));
            },
            decode (r) {
                if (Object.keys(r.parameters).some((i)=>!t.parameter.includes(i)) || Object.keys(r.references).some((i)=>!t.reference.includes(i))) throw new Ft(e.type, "payload field is on the wrong plane");
                const n = Xs({
                    ...r.parameters,
                    ...r.references
                });
                if (!ds(n, t, e)) throw new Ft(e.type, "invalid structured payload fields");
                return n;
            }
        });
    }
    class Se extends hr {
        definitionOptions;
        payloadKeys;
        constructor(t){
            const r = ch(t);
            super({
                type: t.type,
                schemaVersion: 1,
                metadata: {
                    labelKey: t.labelKey,
                    iconKey: t.iconKey,
                    sortOrder: t.sortOrder
                },
                capabilities: t.capabilities,
                parameterSchema: t.parameterSchema,
                referenceSchema: t.referenceSchema,
                codec: lh(t, r)
            }), this.definitionOptions = t, this.payloadKeys = r;
        }
        isTypedDraft(t) {
            return ds(t, this.payloadKeys, this.definitionOptions);
        }
        createTypedDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.createDraft(t));
        }
        createTypedEditDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.draftFromFeature(t));
        }
        normalizeTypedDraft(t) {
            return Xs(t);
        }
        validateTypedDraft(t, r) {
            const n = this.definitionOptions.validate?.(t, r) ?? [];
            if (n.some((i)=>i.severity === "error")) return n;
            try {
                return this.definitionOptions.build({
                    id: "__validation__",
                    name: "",
                    suppressed: !1,
                    timestamp: 0
                }, t, this.definitionOptions.dependencies(t, r)), n;
            } catch (i) {
                return [
                    ...n,
                    {
                        severity: "error",
                        code: `${this.type}-invalid`,
                        message: i instanceof Error ? i.message : String(i)
                    }
                ];
            }
        }
        collectTypedDependencies(t, r) {
            return this.definitionOptions.dependencies(t, r);
        }
        buildTypedFeature(t, r, n, i) {
            return this.definitionOptions.build(t, r, i);
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function ke(e) {
        const { id: t, name: r, type: n, suppressed: i, dependencyIds: o, timestamp: s, ...a } = e;
        return delete a.solidId, delete a.plane, Xs(a);
    }
    function Ae(...e) {
        const t = [], r = (n)=>{
            if (typeof n == "string") {
                n.trim() && t.push(n);
                return;
            }
            if (Array.isArray(n)) {
                n.forEach(r);
                return;
            }
            if (er(n)) for (const [i, o] of Object.entries(n))(i === "featureId" || i.endsWith("FeatureId") || i.endsWith("DatumId") || i === "sketchId" || i.endsWith("SketchId") || i.endsWith("FeatureIds") || i.endsWith("SketchIds") || typeof o == "object") && r(o);
        };
        return e.forEach(r), Object.freeze([
            ...new Set(t)
        ]);
    }
    function ve(e, t, r, n) {
        return n({
            ...structuredClone(t),
            id: e.id,
            name: e.name,
            suppressed: e.suppressed,
            dependencyIds: [
                ...r
            ]
        });
    }
    const Zs = Object.freeze({
        category: "dress_up",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Qs(e) {
        return e.priorSolidFeatureId ?? "";
    }
    function ea(e, t) {
        const r = e[t];
        return !Array.isArray(r) || r.length === 0 ? [
            {
                severity: "error",
                code: `missing-${t}`,
                field: t,
                message: `${t} requires at least one topology reference`
            }
        ] : r.some((n)=>typeof n != "object" || n === null || typeof n.featureId != "string" || typeof n.role != "string") ? [
            {
                severity: "error",
                code: `invalid-${t}`,
                field: t,
                message: `${t} contains an invalid topology reference`
            }
        ] : [];
    }
    function Ni(e, t, r = !1) {
        const n = e[t];
        return r && n === void 0 ? [] : typeof n == "number" && Number.isFinite(n) && n > 0 ? [] : [
            {
                severity: "error",
                code: `invalid-${t}`,
                field: t,
                message: `${t} must be positive and finite`
            }
        ];
    }
    class uh extends Se {
        constructor(){
            super({
                type: "fillet",
                labelKey: "partDesign.feature.fillet",
                iconKey: "part-design-fillet",
                sortOrder: 600,
                capabilities: Zs,
                parameterSchema: [
                    {
                        key: "radius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "edgeSelectors",
                        kind: "topology_list",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: Qs(t),
                        edgeSelectors: [],
                        radius: 1
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...Ni(t, "radius"),
                        ...ea(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>ve(t, r, n, $c)
            });
        }
    }
    class fh extends Se {
        constructor(){
            super({
                type: "chamfer",
                labelKey: "partDesign.feature.chamfer",
                iconKey: "part-design-chamfer",
                sortOrder: 610,
                capabilities: Zs,
                parameterSchema: [
                    {
                        key: "distance",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "secondDistance",
                        kind: "number",
                        required: !1,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "edgeSelectors",
                        kind: "topology_list",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: Qs(t),
                        edgeSelectors: [],
                        distance: 1
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...Ni(t, "distance"),
                        ...Ni(t, "secondDistance", !0),
                        ...ea(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>ve(t, r, n, Cc)
            });
        }
    }
    class ph extends Se {
        constructor(){
            super({
                type: "thickness",
                labelKey: "partDesign.feature.thickness",
                iconKey: "part-design-thickness",
                sortOrder: 620,
                capabilities: Zs,
                parameterSchema: [
                    {
                        key: "thickness",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "inward",
                        kind: "boolean",
                        required: !0
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "removedFaceSelectors",
                        kind: "topology_list",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: Qs(t),
                        removedFaceSelectors: [],
                        thickness: 1,
                        inward: !1
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.removedFaceSelectors),
                validate: (t)=>[
                        ...Ni(t, "thickness"),
                        ...ea(t, "removedFaceSelectors")
                    ],
                build: (t, r, n)=>ve(t, r, n, dh)
            });
        }
    }
    function Dc(e, t = "depth") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid extrude ${t}: expected positive finite number`);
        return e;
    }
    function Tc(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw new Error("Invalid extrude secondDepth: expected non-negative finite number");
        return e;
    }
    function Bc(e) {
        return Number.isFinite(e.startOffset) && Number.isFinite(e.endOffset);
    }
    uo = function(e, t) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new Error("Invalid extrude from: expected a finite number");
        if (typeof t != "number" || !Number.isFinite(t)) throw new Error("Invalid extrude to: expected a finite number");
        if (e === t) throw new Error("Invalid extrude from–to: start and end must differ");
        const r = Math.min(e, t), n = Math.max(e, t);
        return {
            startOffset: r,
            endOffset: n,
            span: n - r
        };
    };
    function hh(e) {
        return Math.abs(e.startOffset + e.endOffset) <= 1e-9 ? {
            depth: e.span,
            secondDepth: 0,
            symmetric: !0
        } : e.startOffset < 0 && e.endOffset > 0 ? {
            depth: e.endOffset,
            secondDepth: -e.startOffset,
            symmetric: !1
        } : {
            depth: e.span,
            secondDepth: 0,
            symmetric: !1
        };
    }
    zc = function(e) {
        if (Bc(e)) return uo(e.startOffset, e.endOffset);
        const t = Dc(e.depth), r = Tc(e.secondDepth);
        if (e.symmetric) return {
            startOffset: -t / 2,
            endOffset: t / 2,
            span: t
        };
        const n = e.mode === "cut" ? -t : r === 0 ? 0 : -r, i = e.mode === "cut" ? r : t;
        return {
            startOffset: n,
            endOffset: i,
            span: i - n
        };
    };
    ta = function(e) {
        if (e.mode !== "add" && e.mode !== "cut") throw new Error(`Invalid extrude mode: ${String(e.mode)}`);
        const t = Bc(e) ? uo(e.startOffset, e.endOffset) : zc({
            depth: Dc(e.depth),
            secondDepth: Tc(e.secondDepth ?? 0),
            symmetric: e.symmetric ?? !1,
            mode: e.mode
        }), r = hh(t);
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "extrude",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "extrude",
            sketchRef: e.sketchRef,
            startOffset: t.startOffset,
            endOffset: t.endOffset,
            depth: r.depth,
            secondDepth: r.secondDepth,
            symmetric: r.symmetric,
            mode: e.mode,
            ...e.startOffsetBinding ? {
                startOffsetBinding: e.startOffsetBinding
            } : {},
            ...e.endOffsetBinding ? {
                endOffsetBinding: e.endOffsetBinding
            } : {},
            ...e.fusePrior === !1 ? {
                fusePrior: !1
            } : {},
            solidId: null
        };
    };
    function cs(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function $o(e) {
        return structuredClone(e);
    }
    function jc(e) {
        return e === void 0 || typeof e == "boolean";
    }
    function mh(e) {
        if (!Number.isFinite(e.startOffset) || !Number.isFinite(e.endOffset) || e.startOffset === e.endOffset) return e;
        const t = uo(e.startOffset, e.endOffset);
        return {
            ...e,
            startOffset: t.startOffset,
            endOffset: t.endOffset
        };
    }
    const yh = Object.freeze({
        encode (e) {
            return pr("extrude", {
                startOffset: e.startOffset,
                endOffset: e.endOffset,
                mode: e.mode,
                ...e.fusePrior !== void 0 ? {
                    fusePrior: e.fusePrior
                } : {}
            }, {
                sketchRef: e.sketchRef
            });
        },
        decode (e) {
            const t = e.references.sketchRef, r = e.parameters.startOffset, n = e.parameters.endOffset, i = e.parameters.mode, o = e.parameters.fusePrior;
            if (!cs(t) || typeof t.sketchId != "string" || typeof r != "number" || typeof n != "number" || i !== "add" && i !== "cut" || !jc(o)) throw new Ft("extrude", "invalid parameter/reference payload");
            return {
                sketchRef: structuredClone(t),
                startOffset: r,
                endOffset: n,
                mode: i,
                ...o !== void 0 ? {
                    fusePrior: o
                } : {}
            };
        }
    });
    class gh extends hr {
        constructor(){
            super({
                type: "extrude",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.extrude",
                    iconKey: "part-design-extrude",
                    sortOrder: 300
                },
                capabilities: {
                    category: "profile",
                    producesSolid: !0,
                    priorSolid: "conditional",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "startOffset",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "endOffset",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "sketchRef",
                        kind: "feature",
                        required: !0
                    }
                ],
                codec: yh
            });
        }
        isTypedDraft(t) {
            return !cs(t) || !cs(t.sketchRef) ? !1 : typeof t.sketchRef.sketchId == "string" && typeof t.startOffset == "number" && typeof t.endOffset == "number" && (t.mode === "add" || t.mode === "cut") && jc(t.fusePrior);
        }
        createTypedDraft(t) {
            return {
                sketchRef: {
                    sketchId: t.suggestedFeatureIds?.[0] ?? ""
                },
                startOffset: 0,
                endOffset: 10,
                mode: t.variant === "cut" ? "cut" : "add"
            };
        }
        createTypedEditDraft(t) {
            return {
                sketchRef: $o(t.sketchRef),
                startOffset: t.startOffset,
                endOffset: t.endOffset,
                mode: t.mode,
                ...t.fusePrior !== void 0 ? {
                    fusePrior: t.fusePrior
                } : {}
            };
        }
        normalizeTypedDraft(t) {
            const r = $o(t.sketchRef);
            return r.sketchId = r.sketchId.trim(), mh({
                ...t,
                sketchRef: r
            });
        }
        validateTypedDraft(t, r) {
            const n = [];
            if (!t.sketchRef.sketchId) n.push({
                severity: "error",
                code: "missing-sketch-reference",
                field: "sketchRef",
                message: "Extrude requires a sketch reference"
            });
            else {
                const i = r.historyFeatureIds.indexOf(t.sketchRef.sketchId);
                i < 0 ? n.push({
                    severity: "error",
                    code: "unknown-sketch-reference",
                    field: "sketchRef",
                    message: `Extrude sketch ${t.sketchRef.sketchId} is not in Body ${r.bodyId}`
                }) : i >= r.historyIndex && n.push({
                    severity: "error",
                    code: "forward-sketch-reference",
                    field: "sketchRef",
                    message: `Extrude sketch ${t.sketchRef.sketchId} must precede the feature`
                });
            }
            if (t.mode === "cut") {
                const i = r.priorSolidFeatureId;
                if (!i) n.push({
                    severity: "error",
                    code: "missing-prior-solid",
                    field: "mode",
                    message: "Cut extrude requires a prior solid feature"
                });
                else {
                    const o = r.historyFeatureIds.indexOf(i);
                    o < 0 ? n.push({
                        severity: "error",
                        code: "unknown-prior-solid-reference",
                        field: "mode",
                        message: `Prior solid ${i} is not in Body ${r.bodyId}`
                    }) : o >= r.historyIndex && n.push({
                        severity: "error",
                        code: "forward-prior-solid-reference",
                        field: "mode",
                        message: `Prior solid ${i} must precede the feature`
                    });
                }
            }
            try {
                uo(t.startOffset, t.endOffset);
            } catch (i) {
                n.push({
                    severity: "error",
                    code: "invalid-extrude-interval",
                    field: "startOffset",
                    message: i instanceof Error ? i.message : "Invalid extrude from–to"
                });
            }
            return n;
        }
        collectTypedDependencies(t, r) {
            return [
                t.sketchRef.sketchId,
                ...t.mode === "cut" && r.priorSolidFeatureId ? [
                    r.priorSolidFeatureId
                ] : []
            ];
        }
        buildTypedFeature(t, r, n, i) {
            return ta({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                sketchRef: $o(r.sketchRef),
                startOffset: r.startOffset,
                endOffset: r.endOffset,
                mode: r.mode,
                fusePrior: r.fusePrior
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                timestamp: t.timestamp
            }, r, n, i);
        }
    }
    Nc = function(e) {
        if (e.targetFeatureId === e.toolFeatureId) throw new Error("Boolean target and tool must be different features");
        if (e.op !== "union" && e.op !== "cut" && e.op !== "intersect") throw new Error(`Unsupported Boolean op: ${String(e.op)}`);
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "boolean",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "boolean",
            targetFeatureId: e.targetFeatureId,
            ...e.targetBodyId ? {
                targetBodyId: e.targetBodyId
            } : {},
            toolFeatureId: e.toolFeatureId,
            ...e.toolFeatureIds ? {
                toolFeatureIds: [
                    ...e.toolFeatureIds
                ]
            } : {},
            ...e.toolBodyId ? {
                toolBodyId: e.toolBodyId
            } : {},
            op: e.op,
            solidId: null
        };
    };
    Vc = function(e) {
        if (!e.baseFeatureId) throw new Error("Face Pull requires a base feature");
        if (e.faceSelectors.length === 0) throw new Error("Face Pull requires at least one planar face");
        const t = Math.hypot(...e.direction);
        if (!Number.isFinite(t) || t <= 1e-9) throw new Error("Face Pull direction is invalid");
        if (!Number.isFinite(e.distance) || e.distance <= 0) throw new Error("Face Pull distance must be positive");
        if (e.operation !== "add" && e.operation !== "cut") throw new Error("Face Pull operation is invalid");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "face_pull",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "face_pull",
            baseFeatureId: e.baseFeatureId,
            faceSelectors: structuredClone(e.faceSelectors),
            direction: e.direction.map((r)=>r / t),
            distance: e.distance,
            operation: e.operation,
            ...e.splitBranchHint ? {
                splitBranchHint: structuredClone(e.splitBranchHint)
            } : {},
            solidId: null
        };
    };
    function Ih(e, t) {
        if (!e.every(Number.isFinite)) throw new Error(`Helix ${t} must be finite`);
        if (!(Math.hypot(...e) > 0)) throw new Error(`Helix ${t} must be non-zero`);
        return [
            ...e
        ];
    }
    function bh(e) {
        if (!e.every(Number.isFinite)) throw new Error("Helix axis origin must be finite");
        return [
            ...e
        ];
    }
    fo = function(e) {
        const t = e.endRadius ?? e.radius, r = e.endPitch ?? e.pitch;
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Helix radius must be positive");
        if (!(t > 0) || !Number.isFinite(t)) throw new Error("Helix end radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Helix pitch must be positive");
        if (!(r > 0) || !Number.isFinite(r)) throw new Error("Helix end pitch must be positive");
        if (!(e.height > 0) || !Number.isFinite(e.height)) throw new Error("Helix height must be positive");
        if (e.handedness !== "right" && e.handedness !== "left") throw new Error("Helix handedness is invalid");
        if (!Number.isFinite(e.startAngle)) throw new Error("Helix start angle must be finite");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "helix",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "helix",
            axisOrigin: bh(e.axisOrigin),
            axisDirection: Ih(e.axisDirection, "axis direction"),
            radius: e.radius,
            endRadius: t,
            pitch: e.pitch,
            endPitch: r,
            height: e.height,
            handedness: e.handedness,
            startAngle: e.startAngle
        };
    };
    function wh(e, t) {
        if (!e || typeof e != "object" || Array.isArray(e) || e.representation !== "symbolic") throw new Error("Invalid hole thread: expected a symbolic thread specification");
        for (const r of [
            "standard",
            "size"
        ])if (e[r] !== void 0 && (typeof e[r] != "string" || !e[r].trim())) throw new Error(`Invalid hole thread ${r}`);
        for (const r of [
            "pitch",
            "majorDiameter",
            "minorDiameter",
            "depth"
        ]){
            const n = e[r];
            if (n !== void 0 && (typeof n != "number" || !Number.isFinite(n) || n <= 0)) throw new Error(`Invalid hole thread ${r}: expected positive finite number`);
        }
        if (e.rotation !== void 0 && e.rotation !== "right" && e.rotation !== "left") throw new Error("Invalid hole thread rotation");
        if (e.lengthOption !== void 0 && ![
            "value",
            "full",
            "standard",
            "diameter_1",
            "diameter_1_5",
            "diameter_2",
            "diameter_2_5",
            "diameter_3"
        ].includes(e.lengthOption)) throw new Error("Invalid hole thread length option");
        if (e.lengthOption === "value" && e.depth === void 0) throw new Error("Hole thread value length requires an axial depth");
        if (e.majorDiameter !== void 0 && t.diameter >= e.majorDiameter) throw new Error("Tap-drill diameter must be smaller than thread major diameter");
        if (e.minorDiameter !== void 0 && e.majorDiameter !== void 0 && e.minorDiameter >= e.majorDiameter) throw new Error("Thread minor diameter must be smaller than major diameter");
        if (e.depth !== void 0 && e.lengthOption !== "full" && t.depthMode === "blind" && e.depth > t.depth) throw new Error("Axial thread depth must not exceed blind hole drilling depth");
    }
    function po(e) {
        const t = e.seriesParameters, r = {
            GeneralHole: "general",
            DrillSizeHole: "drill_size",
            ScrewClearanceHole: "screw_clearance",
            ThreadedHole: "threaded",
            HoleSeries: "series"
        }, n = e.holeType ?? (e.thread ? "threaded" : r[t?.holeType ?? ""] ?? "general");
        if (![
            "general",
            "drill_size",
            "screw_clearance",
            "threaded",
            "series"
        ].includes(n)) throw new Error("Invalid hole type");
        if (n !== "threaded") {
            if (e.thread) throw new Error("Only a threaded Hole can own thread parameters");
            return {
                holeType: n
            };
        }
        const i = e.thread ? structuredClone(e.thread) : {
            representation: "symbolic",
            ...t?.threadStandard ? {
                standard: t.threadStandard
            } : {},
            ...t?.threadSize ? {
                size: t.threadSize
            } : {},
            ...t?.threadedThreadDepth !== void 0 ? {
                depth: t.threadedThreadDepth,
                lengthOption: "value"
            } : {}
        };
        return wh(i, e), {
            holeType: n,
            thread: i
        };
    }
    function br(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid hole ${t}: expected positive finite number`);
        return e;
    }
    function nd(e, t) {
        if (typeof e != "string" || e.length === 0) throw new Error(`Invalid hole ${t}: expected non-empty string`);
        return e;
    }
    function wr(e) {
        return typeof e == "number" && Number.isFinite(e) && e > 0;
    }
    function xh(e, t, r, n) {
        if (e === "counterbore") {
            const i = n === "blind" ? Math.min(Math.max(r * .25, Math.min(2, r)), r) : Math.max(Math.min(r, 2), 1);
            return {
                counterboreDiameter: Math.max(t * 2, t + 2),
                counterboreDepth: i
            };
        }
        return e === "countersink" ? {
            countersinkDiameter: Math.max(t * 2, t + 2),
            countersinkAngleDeg: 90
        } : {};
    }
    Kc = function(e) {
        const t = br(e.diameter, "diameter"), r = br(e.depth, "depth"), n = nd(e.sketchId, "sketchId"), i = nd(e.baseFeatureId, "baseFeatureId");
        if (e.depthMode !== "blind" && e.depthMode !== "through") throw new Error(`Invalid hole depthMode: ${String(e.depthMode)}`);
        if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink") throw new Error(`Invalid hole mode: ${String(e.mode)}`);
        const o = xh(e.mode, t, r, e.depthMode);
        let s = e.counterboreDiameter, a = e.counterboreDepth, d = e.countersinkDiameter, l = e.countersinkAngleDeg;
        if (e.mode === "counterbore") {
            wr(s) || (s = o.counterboreDiameter), wr(a) || (a = o.counterboreDepth);
            const u = br(s, "counterboreDiameter"), h = br(a, "counterboreDepth");
            if (u <= t) throw new Error("Invalid hole counterboreDiameter: expected greater than diameter");
            if (h > r && e.depthMode === "blind") throw new Error("Invalid hole counterboreDepth: expected <= depth for blind mode");
            s = u, a = h;
        }
        if (e.mode === "countersink") {
            wr(d) || (d = o.countersinkDiameter), wr(l) || (l = o.countersinkAngleDeg);
            const u = br(d, "countersinkDiameter"), h = br(l, "countersinkAngleDeg");
            if (u <= t) throw new Error("Invalid hole countersinkDiameter: expected greater than diameter");
            if (h <= 1 || h >= 179) throw new Error("Invalid hole countersinkAngleDeg: expected in (1, 179)");
            d = u, l = h;
        }
        for (const u of [
            "start",
            "end"
        ]){
            const h = e[`${u}ChamferEnabled`], y = e[`${u}ChamferOffset`], I = e[`${u}ChamferAngleDeg`];
            if (h) {
                if (!wr(y)) throw new Error(`Invalid hole ${u}ChamferOffset: expected positive finite number`);
                if (!wr(I) || I <= 1 || I >= 179) throw new Error(`Invalid hole ${u}ChamferAngleDeg: expected in (1, 179)`);
            }
        }
        const c = e.pointIds?.filter((u)=>typeof u == "string" && u.length > 0).map((u)=>u);
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "hole",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "hole",
            ...po(e),
            baseFeatureId: i,
            sketchId: n,
            ...c && c.length > 0 ? {
                pointIds: [
                    ...c
                ]
            } : {},
            diameter: t,
            depth: r,
            depthMode: e.depthMode,
            mode: e.mode,
            ...e.mode === "counterbore" ? {
                counterboreDiameter: s,
                counterboreDepth: a
            } : {},
            ...e.mode === "countersink" ? {
                countersinkDiameter: d,
                countersinkAngleDeg: l
            } : {},
            ...e.startChamferEnabled ? {
                startChamferEnabled: !0,
                startChamferOffset: e.startChamferOffset,
                startChamferAngleDeg: e.startChamferAngleDeg
            } : {},
            ...e.endChamferEnabled ? {
                endChamferEnabled: !0,
                endChamferOffset: e.endChamferOffset,
                endChamferAngleDeg: e.endChamferAngleDeg
            } : {},
            ...e.seriesParameters ? {
                seriesParameters: structuredClone(e.seriesParameters)
            } : {},
            solidId: null
        };
    };
    class Sh extends Se {
        constructor(){
            super({
                type: "hole",
                labelKey: "partDesign.feature.hole",
                iconKey: "part-design-hole",
                sortOrder: 340,
                capabilities: {
                    category: "operation",
                    producesSolid: !0,
                    priorSolid: "required",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "diameter",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "depth",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "depthMode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "blind",
                            "through"
                        ]
                    },
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "simple",
                            "counterbore",
                            "countersink"
                        ]
                    },
                    {
                        key: "holeType",
                        kind: "enum",
                        required: !1,
                        enumValues: [
                            "general",
                            "drill_size",
                            "screw_clearance",
                            "threaded",
                            "series"
                        ]
                    },
                    {
                        key: "counterboreDiameter",
                        kind: "number",
                        required: !1,
                        unit: "model_length"
                    },
                    {
                        key: "counterboreDepth",
                        kind: "number",
                        required: !1,
                        unit: "model_length"
                    },
                    {
                        key: "countersinkDiameter",
                        kind: "number",
                        required: !1,
                        unit: "model_length"
                    },
                    {
                        key: "countersinkAngleDeg",
                        kind: "number",
                        required: !1,
                        unit: "unitless"
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "sketchId",
                        kind: "feature",
                        required: !0
                    }
                ],
                extraParameterKeys: [
                    "pointIds",
                    "thread",
                    "seriesParameters",
                    "startChamferEnabled",
                    "startChamferOffset",
                    "startChamferAngleDeg",
                    "endChamferEnabled",
                    "endChamferOffset",
                    "endChamferAngleDeg"
                ],
                createDraft: (t)=>({
                        baseFeatureId: t.priorSolidFeatureId ?? t.suggestedFeatureIds?.[0] ?? "",
                        sketchId: t.suggestedFeatureIds?.[0] ?? "",
                        diameter: 5,
                        depth: 10,
                        depthMode: "blind",
                        mode: "simple",
                        holeType: "general"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.sketchId),
                validate: (t)=>t.pointIds === void 0 || Array.isArray(t.pointIds) && t.pointIds.every((r)=>typeof r == "string" && r.length > 0) ? [] : [
                        {
                            severity: "error",
                            code: "invalid-point-ids",
                            field: "pointIds",
                            message: "Hole point ids must be non-empty strings"
                        }
                    ],
                build: (t, r, n)=>ve(t, r, n, Kc)
            });
        }
    }
    kh = function(e) {
        if (e.sectionSketchIds.length < 2) throw new Error("Loft requires at least two section sketches");
        if (e.sectionSketchIds.some((t)=>!t)) throw new Error("Loft section sketch ids are required");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Loft mode must be add or cut");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "loft",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "loft",
            sectionSketchIds: [
                ...e.sectionSketchIds
            ],
            mode: e.mode,
            solidId: null
        };
    };
    ra = function(e) {
        if (!e.profileSketchId || !e.pathSketchId) throw new Error("Pipe requires profile and path sketch ids");
        if (e.pathReference && !e.pathReference.featureId) throw new Error("Pipe path reference requires a feature id");
        const t = e.sectionSketchIds?.length ? [
            ...e.sectionSketchIds
        ] : [
            e.profileSketchId
        ];
        if (t.length < 1 || t.some((n)=>!n)) throw new Error("Pipe section sketch ids are required");
        if (t.includes(e.pathSketchId)) throw new Error("Pipe sections and guide path must be different sketches");
        if (e.profileSketchId === e.pathSketchId) throw new Error("Pipe profile and path sketches must be different");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Pipe mode must be add or cut");
        const r = e.orientation ?? "frenet";
        if (r !== "frenet" && r !== "parallel" && r !== "fixed") throw new Error("Pipe orientation must be frenet, parallel, or fixed");
        if (e.orientationDirection && e.orientationDirection.some((n)=>!Number.isFinite(n))) throw new Error("Pipe orientation direction must be finite");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "pipe",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "pipe",
            profileSketchId: e.profileSketchId,
            sectionSketchIds: t,
            pathSketchId: e.pathSketchId,
            ...e.pathReference ? {
                pathReference: structuredClone(e.pathReference)
            } : {},
            mode: e.mode,
            orientation: r,
            ...e.orientationDirection ? {
                orientationDirection: [
                    ...e.orientationDirection
                ]
            } : {},
            ...e.orientationOrigin ? {
                orientationOrigin: [
                    ...e.orientationOrigin
                ]
            } : {},
            ...e.preserveShape !== void 0 ? {
                preserveShape: e.preserveShape
            } : {},
            ...e.preserveGuideShape !== void 0 ? {
                preserveGuideShape: e.preserveGuideShape
            } : {},
            ...e.scalingMethod !== void 0 ? {
                scalingMethod: e.scalingMethod
            } : {},
            ...e.sectionInterpolation !== void 0 ? {
                sectionInterpolation: e.sectionInterpolation
            } : {},
            ...e.tolAngleDeg !== void 0 ? {
                tolAngleDeg: e.tolAngleDeg
            } : {},
            ...e.tolDistance !== void 0 ? {
                tolDistance: e.tolDistance
            } : {},
            solidId: null
        };
    };
    function vh(e, t = "angle") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error(`Invalid revolve ${t}: expected radians in (0, 2π]`);
        return e;
    }
    Lc = function(e) {
        const t = vh(e.angle), r = e.startAngle ?? 0, n = e.endAngle ?? r + t;
        if (!Number.isFinite(r) || !Number.isFinite(n) || n <= r) throw new Error("Invalid revolve start/end angle interval");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "revolve",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "revolve",
            sketchRef: e.sketchRef,
            axisRef: structuredClone(e.axisRef),
            startAngle: r,
            endAngle: n,
            angle: t,
            mode: e.mode ?? "add",
            ...e.fusePrior === !1 ? {
                fusePrior: !1
            } : {},
            solidId: null
        };
    };
    function id(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must be a finite 3D vector`);
    }
    Hc = function(e) {
        if (!e.baseFeatureId) throw new Error("Split requires a base feature");
        if (![
            "positive",
            "negative",
            "both"
        ].includes(e.keepSide)) throw new Error("Split keep side is invalid");
        if (e.toolRef.kind === "world_plane" && (id(e.toolRef.origin, "Split plane origin"), id(e.toolRef.normal, "Split plane normal"), Math.hypot(...e.toolRef.normal) <= 1e-9)) throw new Error("Split plane normal must be non-zero");
        if (e.toolRef.kind === "datum_plane" && !e.toolRef.featureId) throw new Error("Split Datum Plane reference is required");
        if (e.toolRef.kind === "face" && (!e.toolRef.selector.featureId || !e.toolRef.selector.role)) throw new Error("Split face reference is required");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "split",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "split",
            baseFeatureId: e.baseFeatureId,
            toolRef: structuredClone(e.toolRef),
            keepSide: e.keepSide,
            solidId: null
        };
    };
    na = function(e) {
        if (!e.helixFeatureId) throw new Error("Thread requires a Helix feature");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Thread mode must be add or cut");
        if (e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch") throw new Error("Unsupported Thread profile");
        if (e.profileKind === "custom_sketch" && !e.profileSketchId) throw new Error("Custom Thread profile requires a Sketch");
        if (!(e.majorRadius > 0) || !Number.isFinite(e.majorRadius)) throw new Error("Thread major radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Thread pitch must be positive");
        if (!(e.depth > 0) || !Number.isFinite(e.depth) || e.depth >= e.majorRadius) throw new Error("Thread depth must be positive and smaller than major radius");
        if (e.depth > e.pitch * .75) throw new Error("Thread depth is too large for the metric profile");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "thread",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "thread",
            helixFeatureId: e.helixFeatureId,
            mode: e.mode,
            profileKind: e.profileKind,
            profileSketchId: e.profileSketchId ?? null,
            majorRadius: e.majorRadius,
            pitch: e.pitch,
            depth: e.depth,
            solidId: null
        };
    };
    function qc(e) {
        if (!e.baseFeatureId) throw new Error("Trim Sheet requires a target feature");
        if (![
            "positive",
            "negative",
            "both"
        ].includes(e.keepSide)) throw new Error("Trim Sheet keep side is invalid");
        if (e.toolRef.kind === "world_plane") {
            if (e.toolRef.origin.length !== 3 || e.toolRef.origin.some((r)=>!Number.isFinite(r))) throw new Error("Trim Sheet plane origin is invalid");
            if (e.toolRef.normal.length !== 3 || e.toolRef.normal.some((r)=>!Number.isFinite(r))) throw new Error("Trim Sheet plane normal is invalid");
            if (Math.hypot(...e.toolRef.normal) <= 1e-9) throw new Error("Trim Sheet plane normal must be non-zero");
        }
        const t = e.tolerance ?? 1e-7;
        if (!Number.isFinite(t) || t < 0) throw new Error("Trim Sheet tolerance must be non-negative");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "trim",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "trim",
            baseFeatureId: e.baseFeatureId,
            toolRef: structuredClone(e.toolRef),
            keepSide: e.keepSide,
            tolerance: t,
            solidId: null
        };
    }
    const At = Object.freeze({
        category: "operation",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function ho(e) {
        return e.priorSolidFeatureId ?? e.suggestedFeatureIds?.[0] ?? "";
    }
    function kt(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function Vi(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ki(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Uc(e) {
        return Vi(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function Wc(e) {
        const t = e.toolRef;
        if (!Vi(t)) return [
            kt("invalid-tool-reference", "toolRef", "Tool reference must be structured")
        ];
        switch(t.kind){
            case "world_plane":
                return Ki(t.origin) && Ki(t.normal) && Math.hypot(...t.normal) > 1e-9 ? [] : [
                    kt("invalid-tool-reference", "toolRef", "World plane must have a finite non-zero normal")
                ];
            case "datum_plane":
                return typeof t.featureId == "string" && t.featureId.length > 0 ? [] : [
                    kt("invalid-tool-reference", "toolRef", "Datum Plane id is required")
                ];
            case "face":
                return Uc(t.selector) ? [] : [
                    kt("invalid-tool-reference", "toolRef", "Face selector is invalid")
                ];
            default:
                return [
                    kt("invalid-tool-reference", "toolRef", "Unsupported tool reference kind")
                ];
        }
    }
    function Fh(e, t) {
        const r = e[t];
        return Array.isArray(r) && r.length > 0 && r.every(Uc) ? [] : [
            kt(`invalid-${t}`, t, `${t} requires valid topology references`)
        ];
    }
    function _h(e) {
        const t = [];
        (!Vi(e.sketchRef) || typeof e.sketchRef.sketchId != "string" || e.sketchRef.sketchId.length === 0) && t.push(kt("invalid-sketch-reference", "sketchRef", "Revolve sketch id is required"));
        const r = e.axisRef;
        return Vi(r) ? ((r.kind === "world" ? Ki(r.origin) && Ki(r.direction) && Math.hypot(...r.direction) > 1e-9 : r.kind === "datum" ? typeof r.featureId == "string" && r.featureId.length > 0 && (r.axis === "normal" || r.axis === "u" || r.axis === "v") : r.kind === "datum_axis" && typeof r.featureId == "string" && r.featureId.length > 0) || t.push(kt("invalid-axis-reference", "axisRef", "Revolve axis reference is invalid")), t) : (t.push(kt("invalid-axis-reference", "axisRef", "Revolve axis must be structured")), t);
    }
    class Eh extends Se {
        constructor(){
            super({
                type: "split",
                labelKey: "partDesign.feature.split",
                iconKey: "part-design-split",
                sortOrder: 310,
                capabilities: At,
                parameterSchema: [
                    {
                        key: "keepSide",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "positive",
                            "negative",
                            "both"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "toolRef",
                        kind: "topology",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: ho(t),
                        toolRef: {
                            kind: "world_plane",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            normal: [
                                0,
                                0,
                                1
                            ]
                        },
                        keepSide: "positive"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.toolRef),
                validate: Wc,
                build: (t, r, n)=>ve(t, r, n, Hc)
            });
        }
    }
    class Ah extends Se {
        constructor(){
            super({
                type: "trim",
                labelKey: "partDesign.feature.trim",
                iconKey: "part-design-trim",
                sortOrder: 320,
                capabilities: At,
                parameterSchema: [
                    {
                        key: "keepSide",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "positive",
                            "negative",
                            "both"
                        ]
                    },
                    {
                        key: "tolerance",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "toolRef",
                        kind: "topology",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: ho(t),
                        toolRef: {
                            kind: "world_plane",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            normal: [
                                0,
                                0,
                                1
                            ]
                        },
                        keepSide: "positive",
                        tolerance: 1e-7
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.toolRef),
                validate: Wc,
                build: (t, r, n)=>ve(t, r, n, qc)
            });
        }
    }
    class Oh extends Se {
        constructor(){
            super({
                type: "face_pull",
                labelKey: "partDesign.feature.facePull",
                iconKey: "part-design-face-pull",
                sortOrder: 330,
                capabilities: At,
                parameterSchema: [
                    {
                        key: "direction",
                        kind: "vector3",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "distance",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "operation",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "faceSelectors",
                        kind: "topology_list",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        baseFeatureId: ho(t),
                        faceSelectors: [],
                        direction: [
                            0,
                            0,
                            1
                        ],
                        distance: 10,
                        operation: "add"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseFeatureId, t.faceSelectors),
                validate: (t)=>Fh(t, "faceSelectors"),
                build: (t, r, n)=>ve(t, r, n, Vc)
            });
        }
    }
    class Ph extends Se {
        constructor(){
            super({
                type: "revolve",
                labelKey: "partDesign.feature.revolve",
                iconKey: "part-design-revolve",
                sortOrder: 350,
                capabilities: {
                    ...At,
                    priorSolid: "conditional"
                },
                parameterSchema: [
                    {
                        key: "angle",
                        kind: "number",
                        required: !0,
                        unit: "radian"
                    },
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "fusePrior",
                        kind: "boolean",
                        required: !1
                    }
                ],
                referenceSchema: [
                    {
                        key: "sketchRef",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "axisRef",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        sketchRef: {
                            sketchId: t.suggestedFeatureIds?.[0] ?? ""
                        },
                        axisRef: {
                            kind: "world",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            direction: [
                                0,
                                1,
                                0
                            ]
                        },
                        angle: Math.PI * 2,
                        mode: t.variant === "cut" ? "cut" : "add"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t, r)=>Ae(t.sketchRef, t.axisRef, t.mode === "cut" || t.fusePrior !== !1 ? r.priorSolidFeatureId : null),
                validate: _h,
                build: (t, r, n)=>ve(t, r, n, Lc)
            });
        }
    }
    class Mh extends Se {
        constructor(){
            super({
                type: "boolean",
                labelKey: "partDesign.feature.boolean",
                iconKey: "part-design-boolean",
                sortOrder: 360,
                capabilities: At,
                parameterSchema: [
                    {
                        key: "targetBodyId",
                        kind: "string",
                        required: !1
                    },
                    {
                        key: "toolBodyId",
                        kind: "string",
                        required: !1
                    },
                    {
                        key: "op",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "union",
                            "cut",
                            "intersect"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "targetFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "toolFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        targetFeatureId: ho(t),
                        toolFeatureId: t.suggestedFeatureIds?.[0] ?? "",
                        op: "union"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.targetFeatureId, t.toolFeatureId),
                build: (t, r, n)=>ve(t, r, n, Nc)
            });
        }
    }
    class Rh extends Se {
        constructor(){
            super({
                type: "loft",
                labelKey: "partDesign.feature.loft",
                iconKey: "part-design-loft",
                sortOrder: 370,
                capabilities: {
                    ...At,
                    priorSolid: "conditional"
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "sectionSketchIds",
                        kind: "feature_list",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        sectionSketchIds: [
                            ...t.suggestedFeatureIds?.slice(0, 2) ?? []
                        ],
                        mode: t.variant === "cut" ? "cut" : "add"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t, r)=>Ae(t.sectionSketchIds, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ve(t, r, n, kh)
            });
        }
    }
    class Ch extends Se {
        constructor(){
            super({
                type: "pipe",
                labelKey: "partDesign.feature.pipe",
                iconKey: "part-design-pipe",
                sortOrder: 380,
                capabilities: {
                    ...At,
                    priorSolid: "conditional"
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "orientation",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "frenet",
                            "parallel",
                            "fixed"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "profileSketchId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "sectionSketchIds",
                        kind: "feature_list",
                        required: !1
                    },
                    {
                        key: "pathSketchId",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        profileSketchId: t.suggestedFeatureIds?.[0] ?? "",
                        sectionSketchIds: t.suggestedFeatureIds?.[0] ? [
                            t.suggestedFeatureIds[0]
                        ] : [],
                        pathSketchId: t.suggestedFeatureIds?.[1] ?? "",
                        mode: t.variant === "cut" ? "cut" : "add",
                        orientation: "frenet"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t, r)=>Ae(t.profileSketchId, t.sectionSketchIds, t.pathSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ve(t, r, n, ra)
            });
        }
    }
    class $h extends Se {
        constructor(){
            super({
                type: "helix",
                labelKey: "partDesign.feature.helix",
                iconKey: "part-design-helix",
                sortOrder: 390,
                capabilities: {
                    ...At,
                    category: "auxiliary",
                    producesSolid: !1,
                    priorSolid: "none"
                },
                parameterSchema: [
                    {
                        key: "axisOrigin",
                        kind: "vector3",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "axisDirection",
                        kind: "vector3",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "radius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "endRadius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "pitch",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "endPitch",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "height",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "handedness",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "right",
                            "left"
                        ]
                    },
                    {
                        key: "startAngle",
                        kind: "number",
                        required: !0,
                        unit: "radian"
                    }
                ],
                referenceSchema: [],
                createDraft: ()=>({
                        axisOrigin: [
                            0,
                            0,
                            0
                        ],
                        axisDirection: [
                            0,
                            0,
                            1
                        ],
                        radius: 5,
                        endRadius: 5,
                        pitch: 2,
                        endPitch: 2,
                        height: 10,
                        handedness: "right",
                        startAngle: 0
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: ()=>[],
                build: (t, r, n)=>ve(t, r, n, fo)
            });
        }
    }
    class Dh extends Se {
        constructor(){
            super({
                type: "thread",
                labelKey: "partDesign.feature.thread",
                iconKey: "part-design-thread",
                sortOrder: 400,
                capabilities: {
                    ...At,
                    priorSolid: "conditional"
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "profileKind",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "metric_triangle",
                            "custom_sketch"
                        ]
                    },
                    {
                        key: "majorRadius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "pitch",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "depth",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [
                    {
                        key: "helixFeatureId",
                        kind: "feature",
                        required: !0
                    },
                    {
                        key: "profileSketchId",
                        kind: "feature",
                        required: !1
                    }
                ],
                createDraft: (t)=>({
                        helixFeatureId: t.suggestedFeatureIds?.[0] ?? "",
                        mode: t.variant === "cut" ? "cut" : "add",
                        profileKind: "metric_triangle",
                        profileSketchId: null,
                        majorRadius: 5,
                        pitch: 2,
                        depth: .5
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t, r)=>Ae(t.helixFeatureId, t.profileSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ve(t, r, n, na)
            });
        }
    }
    function ai(e) {
        return e.length === 3 && e.every(Number.isFinite);
    }
    function Th(e) {
        if (e.kind === "world") {
            if (!ai(e.origin) || !ai(e.direction) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Datum Axis world direction must be a finite non-zero vector");
            return;
        }
        if (e.kind === "two_point") {
            if (!ai(e.start) || !ai(e.end) || Math.hypot(e.end[0] - e.start[0], e.end[1] - e.start[1], e.end[2] - e.start[2]) <= 1e-9) throw new Error("Datum Axis two points must be finite and distinct");
            return;
        }
        if (!e.firstDatumId || !e.secondDatumId || e.firstDatumId === e.secondDatumId) throw new Error("Datum Axis requires two different Datum Plane references");
    }
    Bh = function(e) {
        return Th(e.axisRef), {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "datum_axis",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "datum_axis",
            axisRef: structuredClone(e.axisRef)
        };
    };
    Sn = function(e) {
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "datum_plane",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "datum_plane",
            attachmentMode: e.attachmentMode,
            basePlane: e.basePlane,
            offset: e.offset,
            baseDatumId: e.baseDatumId ?? null,
            faceSelector: e.faceSelector,
            threePoints: e.threePoints,
            pathFeatureId: e.pathFeatureId ?? null,
            pathParameter: e.pathParameter ?? null,
            width: e.width ?? 100,
            height: e.height ?? 100,
            visible: e.visible ?? !0,
            coordinateSystemVisible: e.coordinateSystemVisible ?? !0,
            ...e.coordinateSystem ? {
                coordinateSystem: structuredClone(e.coordinateSystem)
            } : {},
            plane: null
        };
    };
    zh = function(e, t, r = 100, n = 100) {
        switch(e){
            case "xy":
                return {
                    origin: [
                        0,
                        0,
                        t
                    ],
                    normal: [
                        0,
                        0,
                        1
                    ],
                    uAxis: [
                        1,
                        0,
                        0
                    ],
                    vAxis: [
                        0,
                        1,
                        0
                    ],
                    width: r,
                    height: n
                };
            case "xz":
                return {
                    origin: [
                        0,
                        t,
                        0
                    ],
                    normal: [
                        0,
                        1,
                        0
                    ],
                    uAxis: [
                        1,
                        0,
                        0
                    ],
                    vAxis: [
                        0,
                        0,
                        1
                    ],
                    width: r,
                    height: n
                };
            case "yz":
                return {
                    origin: [
                        t,
                        0,
                        0
                    ],
                    normal: [
                        1,
                        0,
                        0
                    ],
                    uAxis: [
                        0,
                        1,
                        0
                    ],
                    vAxis: [
                        0,
                        0,
                        1
                    ],
                    width: r,
                    height: n
                };
        }
    };
    jh = function(e, t, r) {
        const n = [
            t[0] - e[0],
            t[1] - e[1],
            t[2] - e[2]
        ], i = [
            r[0] - e[0],
            r[1] - e[1],
            r[2] - e[2]
        ], o = [
            n[1] * i[2] - n[2] * i[1],
            n[2] * i[0] - n[0] * i[2],
            n[0] * i[1] - n[1] * i[0]
        ], s = Math.hypot(o[0], o[1], o[2]);
        if (s < 1e-9) return null;
        o[0] /= s, o[1] /= s, o[2] /= s;
        const a = Math.hypot(n[0], n[1], n[2]), d = a > 1e-9 ? [
            n[0] / a,
            n[1] / a,
            n[2] / a
        ] : [
            1,
            0,
            0
        ], l = [
            o[1] * d[2] - o[2] * d[1],
            o[2] * d[0] - o[0] * d[2],
            o[0] * d[1] - o[1] * d[0]
        ], c = Math.hypot(l[0], l[1], l[2]), f = c > 1e-9 ? [
            l[0] / c,
            l[1] / c,
            l[2] / c
        ] : [
            0,
            1,
            0
        ];
        return {
            origin: [
                ...e
            ],
            normal: o,
            uAxis: d,
            vAxis: f,
            width: 100,
            height: 100
        };
    };
    Le = function(e) {
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "import",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "import",
            ...e.sourceLabel !== void 0 ? {
                sourceLabel: e.sourceLabel
            } : {},
            ...e.sourceFormat !== void 0 ? {
                sourceFormat: e.sourceFormat
            } : {},
            ...e.sourceBytes !== void 0 ? {
                sourceBytes: e.sourceBytes
            } : {}
        };
    };
    Nh = function(e) {
        if (!e.sourceBodyId || !e.sourceFeatureId) throw new Error("ShapeBinder requires a source Body and feature");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "shape_binder",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "shape_binder",
            sourceBodyId: e.sourceBodyId,
            sourceFeatureId: e.sourceFeatureId,
            status: e.status ?? "resolved",
            solidId: null
        };
    };
    const Vh = 2, Kh = {
        origin: [
            0,
            0,
            0
        ],
        normal: [
            0,
            0,
            1
        ],
        uAxis: [
            1,
            0,
            0
        ],
        vAxis: [
            0,
            1,
            0
        ]
    }, yn = 1e-9;
    function di(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function Lh(e) {
        return {
            origin: di(e.origin),
            normal: di(e.normal),
            uAxis: di(e.uAxis),
            vAxis: di(e.vAxis)
        };
    }
    function wi(e) {
        return Math.hypot(e[0], e[1], e[2]);
    }
    function Hh(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function qh(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function gn(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must contain three finite values`);
    }
    Uh = function(e) {
        gn(e.origin, "Sketch plane origin"), gn(e.normal, "Sketch plane normal"), gn(e.uAxis, "Sketch plane U axis"), gn(e.vAxis, "Sketch plane V axis");
        const t = wi(e.normal), r = wi(e.uAxis), n = wi(e.vAxis), i = qh(Hh(e.uAxis, e.vAxis), e.normal);
        if (t <= yn || r <= yn || n <= yn) throw new Error("Sketch plane frame axes must be non-degenerate");
        if (i <= yn * t * r * n) throw new Error("Sketch plane frame must be right-handed and non-degenerate");
    };
    mr = function(e) {
        if (!e.id) throw new Error("Sketch plane placement requires a stable id");
        const t = Lh(e.frameSnapshot ?? Kh);
        Uh(t);
        const r = e.orientation ?? {
            mode: "support-default",
            role: "right",
            reversed: !1
        };
        if (r.mode === "fixed" && (gn(r.bodyDirection, "Fixed sketch orientation"), wi(r.bodyDirection) <= yn)) throw new Error("Fixed sketch orientation must be non-degenerate");
        return {
            schemaVersion: Vh,
            id: e.id,
            support: structuredClone(e.support ?? {
                mode: "fixed"
            }),
            orientation: structuredClone(r),
            normalReversed: e.normalReversed ?? !1,
            frameSnapshot: t,
            helperVisibility: e.helperVisibility ?? "auto"
        };
    };
    ex = function(e) {
        const { attachment: t } = e, r = t.kind === "base" ? {
            mode: "associative",
            reference: {
                kind: "origin-plane",
                planeId: `${e.bodyId}:origin:top`
            }
        } : t.kind === "origin-plane" ? {
            mode: "associative",
            reference: {
                kind: "origin-plane",
                planeId: t.planeId
            }
        } : t.kind === "datum" ? {
            mode: "associative",
            reference: {
                kind: "datum",
                datumFeatureId: t.datumFeatureId
            }
        } : {
            mode: "associative",
            reference: {
                kind: "face",
                faceSelector: structuredClone(t.faceSelector)
            }
        }, n = t.orientationRole ?? "right", i = t.xAxisReversed ?? !1, o = t.xAxisReference, s = !o || o.kind === "support-u" ? {
            mode: "support-default",
            role: n,
            reversed: i
        } : {
            mode: "associative",
            reference: structuredClone(o),
            role: n,
            reversed: i
        };
        return mr({
            id: e.id,
            support: r,
            orientation: s,
            normalReversed: t.normalReversed ?? !1,
            frameSnapshot: e.frameSnapshot,
            helperVisibility: e.helperVisibility
        });
    };
    tx = function(e) {
        const t = {
            placementVersion: 1,
            orientationRole: e.orientation.mode === "fixed" ? "right" : e.orientation.role,
            xAxisReversed: e.orientation.reversed,
            normalReversed: e.normalReversed,
            ...e.orientation.mode === "associative" ? {
                xAxisReference: structuredClone(e.orientation.reference)
            } : e.orientation.mode === "support-default" ? {
                xAxisReference: {
                    kind: "support-u"
                }
            } : {}
        };
        if (e.support.mode === "fixed") return {
            kind: "base",
            ...t
        };
        const r = e.support.reference;
        return r.kind === "origin-plane" ? {
            kind: "origin-plane",
            planeId: r.planeId,
            ...t
        } : r.kind === "datum" ? {
            kind: "datum",
            datumFeatureId: r.datumFeatureId,
            ...t
        } : {
            kind: "face",
            faceSelector: structuredClone(r.faceSelector),
            ...t
        };
    };
    rx = function(e) {
        const t = new Set;
        if (e.support.mode === "associative") {
            const r = e.support.reference;
            r.kind === "datum" && t.add(r.datumFeatureId), r.kind === "face" && t.add(r.faceSelector.featureId);
        }
        if (e.orientation.mode === "associative") {
            const r = e.orientation.reference;
            r.kind === "edge" && t.add(r.selector.featureId);
        }
        return [
            ...t
        ];
    };
    ia = function(e) {
        const t = e.sectionOwnership ?? "independent";
        if (t === "internal" && !e.ownerFeatureId) throw new Error("Internal sketch sections require an ownerFeatureId");
        return {
            ...me(e.id, {
                name: e.name,
                type: "sketch",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "sketch",
            sectionOwnership: t,
            placementPlane: mr({
                ...e.placementPlane ? structuredClone(e.placementPlane) : {},
                id: e.placementPlane?.id ?? `${e.id}::placement-plane`
            }),
            ...e.ownerFeatureId ? {
                ownerFeatureId: e.ownerFeatureId
            } : {}
        };
    };
    nx = function(e) {
        return e.type === "sketch" && e.sectionOwnership !== "internal";
    };
    const mo = Object.freeze({
        category: "reference",
        producesSolid: !1,
        priorSolid: "none",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Yt(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function Gc(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Wh(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Gh(e) {
        return Gc(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function Yh(e) {
        if (!Array.isArray(e) || e.length !== 3 || !e.every(Wh)) return !1;
        const [t, r, n] = e, i = r[0] - t[0], o = r[1] - t[1], s = r[2] - t[2], a = n[0] - t[0], d = n[1] - t[1], l = n[2] - t[2];
        return Math.hypot(o * l - s * d, s * a - i * l, i * d - o * a) > 1e-9;
    }
    function Jh(e) {
        const t = [];
        return (typeof e.width != "number" || e.width <= 0) && t.push(Yt("invalid-width", "width", "Datum Plane width must be positive")), (typeof e.height != "number" || e.height <= 0) && t.push(Yt("invalid-height", "height", "Datum Plane height must be positive")), e.attachmentMode === "on_face" && !Gh(e.faceSelector) ? t.push(Yt("invalid-face-reference", "faceSelector", "Datum Plane face is required")) : e.attachmentMode === "on_datum" && (typeof e.baseDatumId != "string" || e.baseDatumId.length === 0) ? t.push(Yt("invalid-datum-reference", "baseDatumId", "Base Datum Plane is required")) : e.attachmentMode === "three_point" && !Yh(e.threePoints) ? t.push(Yt("invalid-three-points", "threePoints", "Three non-collinear points are required")) : e.attachmentMode === "on_path" && (typeof e.pathFeatureId != "string" || e.pathFeatureId.length === 0 || typeof e.pathParameter != "number" || e.pathParameter < 0 || e.pathParameter > 1) && t.push(Yt("invalid-path-reference", "pathFeatureId", "Path and normalized parameter are required")), t;
    }
    class Xh extends Se {
        constructor(){
            super({
                type: "sketch",
                labelKey: "partDesign.feature.sketch",
                iconKey: "part-design-sketch",
                sortOrder: 10,
                capabilities: {
                    ...mo,
                    category: "profile"
                },
                parameterSchema: [
                    {
                        key: "sectionOwnership",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "independent",
                            "internal"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "ownerFeatureId",
                        kind: "feature",
                        required: !1
                    }
                ],
                requiredExtraParameterKeys: [
                    "placementPlane"
                ],
                createDraft: ()=>({
                        sectionOwnership: "independent",
                        placementPlane: mr({
                            id: "__sketch-draft-plane__"
                        })
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.ownerFeatureId, t.placementPlane),
                validate: (t)=>Gc(t.placementPlane) && typeof t.placementPlane.id == "string" && t.placementPlane.id.length > 0 ? [] : [
                        Yt("invalid-placement-plane", "placementPlane", "Sketch placement is required")
                    ],
                build: (t, r, n)=>ve(t, r, n, ia)
            });
        }
    }
    class Zh extends Se {
        constructor(){
            super({
                type: "datum_plane",
                labelKey: "partDesign.feature.datumPlane",
                iconKey: "part-design-datum-plane",
                sortOrder: 20,
                capabilities: {
                    ...mo,
                    category: "auxiliary"
                },
                parameterSchema: [
                    {
                        key: "attachmentMode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "offset_base",
                            "on_face",
                            "on_datum",
                            "three_point",
                            "on_path"
                        ]
                    },
                    {
                        key: "basePlane",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "xy",
                            "xz",
                            "yz"
                        ]
                    },
                    {
                        key: "offset",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "pathParameter",
                        kind: "number",
                        required: !1,
                        unit: "unitless"
                    },
                    {
                        key: "width",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "height",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "visible",
                        kind: "boolean",
                        required: !0
                    },
                    {
                        key: "coordinateSystemVisible",
                        kind: "boolean",
                        required: !0
                    }
                ],
                referenceSchema: [
                    {
                        key: "baseDatumId",
                        kind: "feature",
                        required: !1
                    },
                    {
                        key: "faceSelector",
                        kind: "topology",
                        required: !1
                    },
                    {
                        key: "pathFeatureId",
                        kind: "feature",
                        required: !1
                    }
                ],
                extraParameterKeys: [
                    "threePoints"
                ],
                createDraft: ()=>({
                        attachmentMode: "offset_base",
                        basePlane: "xy",
                        offset: 0,
                        baseDatumId: null,
                        faceSelector: null,
                        threePoints: null,
                        pathFeatureId: null,
                        pathParameter: null,
                        width: 100,
                        height: 100,
                        visible: !0,
                        coordinateSystemVisible: !0
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.baseDatumId, t.faceSelector, t.pathFeatureId),
                validate: Jh,
                build: (t, r, n)=>ve(t, r, n, Sn)
            });
        }
    }
    class Qh extends Se {
        constructor(){
            super({
                type: "datum_axis",
                labelKey: "partDesign.feature.datumAxis",
                iconKey: "part-design-datum-axis",
                sortOrder: 30,
                capabilities: {
                    ...mo,
                    category: "auxiliary"
                },
                parameterSchema: [],
                referenceSchema: [
                    {
                        key: "axisRef",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: ()=>({
                        axisRef: {
                            kind: "world",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            direction: [
                                0,
                                0,
                                1
                            ]
                        }
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.axisRef),
                build: (t, r, n)=>ve(t, r, n, Bh)
            });
        }
    }
    class em extends Se {
        constructor(){
            super({
                type: "shape_binder",
                labelKey: "partDesign.feature.shapeBinder",
                iconKey: "part-design-shape-binder",
                sortOrder: 40,
                capabilities: {
                    ...mo,
                    category: "auxiliary"
                },
                parameterSchema: [
                    {
                        key: "sourceBodyId",
                        kind: "string",
                        required: !0
                    },
                    {
                        key: "status",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "resolved",
                            "stale",
                            "source_missing"
                        ]
                    }
                ],
                referenceSchema: [
                    {
                        key: "sourceFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        sourceBodyId: t.bodyId,
                        sourceFeatureId: t.suggestedFeatureIds?.[0] ?? "",
                        status: "resolved"
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.sourceFeatureId),
                build: (t, r, n)=>ve(t, r, n, Nh)
            });
        }
    }
    class tm extends Se {
        constructor(){
            super({
                type: "import",
                labelKey: "partDesign.feature.import",
                iconKey: "part-design-import",
                sortOrder: 50,
                capabilities: {
                    category: "import",
                    producesSolid: !0,
                    priorSolid: "none",
                    supportsCreate: !0,
                    supportsEdit: !1,
                    supportsPreview: !1
                },
                parameterSchema: [
                    {
                        key: "sourceLabel",
                        kind: "string",
                        required: !1
                    }
                ],
                referenceSchema: [],
                createDraft: ()=>({}),
                draftFromFeature: (t)=>ke(t),
                dependencies: ()=>[],
                build: (t, r, n)=>ve(t, r, n, Le)
            });
        }
    }
    function rm(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Yc(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function xi(e) {
        return [
            ...e
        ];
    }
    const nm = Object.freeze({
        encode: (e)=>pr("sphere", {
                mode: e.mode,
                center: e.center,
                radius: e.radius
            }, {}),
        decode (e) {
            const { mode: t, center: r, radius: n } = e.parameters;
            if (t !== "add" && t !== "cut" || !Yc(r) || typeof n != "number") throw new Ft("sphere", "invalid parameter payload");
            return {
                mode: t,
                center: xi(r),
                radius: n
            };
        }
    });
    class im extends hr {
        constructor(){
            super({
                type: "sphere",
                schemaVersion: 1,
                metadata: {
                    labelKey: "partDesign.feature.sphere",
                    iconKey: "part-design-sphere",
                    sortOrder: 130
                },
                capabilities: {
                    category: "primitive",
                    producesSolid: !0,
                    priorSolid: "conditional",
                    supportsCreate: !0,
                    supportsEdit: !0,
                    supportsPreview: !0
                },
                parameterSchema: [
                    {
                        key: "mode",
                        kind: "enum",
                        required: !0,
                        enumValues: [
                            "add",
                            "cut"
                        ]
                    },
                    {
                        key: "center",
                        kind: "vector3",
                        required: !0,
                        unit: "model_length"
                    },
                    {
                        key: "radius",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [],
                codec: nm
            });
        }
        isTypedDraft(t) {
            return rm(t) ? (t.mode === "add" || t.mode === "cut") && Yc(t.center) && typeof t.radius == "number" : !1;
        }
        createTypedDraft(t) {
            return {
                mode: t.variant === "cut" ? "cut" : "add",
                center: [
                    0,
                    0,
                    0
                ],
                radius: 5
            };
        }
        createTypedEditDraft(t) {
            return {
                mode: t.mode,
                center: xi(t.center),
                radius: t.radius
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                center: xi(t.center)
            };
        }
        validateTypedDraft(t, r) {
            const n = [];
            return t.center.every(Number.isFinite) || n.push({
                severity: "error",
                code: "invalid-center",
                field: "center",
                message: "Sphere center must be finite"
            }), (!Number.isFinite(t.radius) || t.radius <= 0) && n.push({
                severity: "error",
                code: "invalid-dimension",
                field: "radius",
                message: "Sphere radius must be finite and positive"
            }), t.mode === "cut" && !om(r) && n.push({
                severity: "error",
                code: "missing-prior-solid",
                field: "mode",
                message: "Cut Sphere requires a prior solid in the same Body history"
            }), n;
        }
        collectTypedDependencies(t, r) {
            return t.mode === "cut" && r.priorSolidFeatureId ? [
                r.priorSolidFeatureId
            ] : [];
        }
        buildTypedFeature(t, r, n, i) {
            return wp({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                center: xi(r.center)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function om(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    sm = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Linear pattern count must be an integer >= 2");
        if (!Number.isFinite(e.spacing) || e.spacing <= 0) throw new Error("Linear pattern spacing must be positive and finite");
        if (!e.direction.every(Number.isFinite) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Linear pattern direction must be non-zero");
        const t = Math.hypot(...e.direction);
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "linear_pattern",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "linear_pattern",
            seedFeatureId: e.seedFeatureId,
            direction: e.direction.map((r)=>r / t),
            count: e.count,
            spacing: e.spacing,
            solidId: null
        };
    };
    am = function(e) {
        if (!e.seedFeatureId) throw new Error("Mirror requires a seed feature");
        if (e.planeRef.kind === "world") {
            if (!e.planeRef.origin.every(Number.isFinite) || !e.planeRef.normal.every(Number.isFinite) || Math.hypot(...e.planeRef.normal) <= 1e-9) throw new Error("Mirror world plane normal must be non-zero");
        } else if (!e.planeRef.featureId) throw new Error("Mirror datum plane reference is required");
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "mirror",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "mirror",
            seedFeatureId: e.seedFeatureId,
            planeRef: structuredClone(e.planeRef),
            solidId: null
        };
    };
    function dm(e) {
        if (e.kind === "linear") {
            if (e.direction.length !== 3 || e.direction.some((t)=>!Number.isFinite(t)) || Math.hypot(...e.direction) <= 1e-9 || !Number.isInteger(e.count) || e.count < 2 || !(e.spacing > 0)) throw new Error("MultiTransform linear step is invalid");
        } else if (e.kind === "polar" && (!Number.isInteger(e.count) || e.count < 2 || !(e.angleSpan > 0) || e.angleSpan > Math.PI * 2 + 1e-9)) throw new Error("MultiTransform polar step is invalid");
    }
    cm = function(e) {
        if (!e.seedFeatureId || !e.transforms.length) throw new Error("MultiTransform requires a seed and at least one transform");
        return e.transforms.forEach(dm), {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "multi_transform",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "multi_transform",
            seedFeatureId: e.seedFeatureId,
            transforms: structuredClone(e.transforms),
            solidId: null
        };
    };
    function lm(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error("Polar pattern angleSpan must be in (0, 2π] radians");
        return e;
    }
    um = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Polar pattern count must be an integer >= 2");
        const t = lm(e.angleSpan);
        if (e.axisRef.kind === "world") {
            const r = e.axisRef.direction;
            if (!r.every(Number.isFinite) || Math.hypot(...r) <= 1e-9) throw new Error("Polar pattern world axis direction must be non-zero");
        }
        return {
            ...me(e.id ?? ae(), {
                name: e.name,
                type: "polar_pattern",
                dependencyIds: e.dependencyIds,
                bodyInputMode: e.bodyInputMode,
                suppressed: e.suppressed
            }),
            type: "polar_pattern",
            seedFeatureId: e.seedFeatureId,
            axisRef: structuredClone(e.axisRef),
            count: e.count,
            angleSpan: t,
            solidId: null
        };
    };
    const yo = Object.freeze({
        category: "transform",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function go(e) {
        return e.suggestedFeatureIds?.[0] ?? e.priorSolidFeatureId ?? "";
    }
    function kn(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function oa(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Li(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Jc(e) {
        return oa(e) ? e.kind === "world" ? Li(e.origin) && Li(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum" ? typeof e.featureId == "string" && e.featureId.length > 0 && (e.axis === "normal" || e.axis === "u" || e.axis === "v") : e.kind === "datum_axis" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function Xc(e) {
        return oa(e) ? e.kind === "world" ? Li(e.origin) && Li(e.normal) && Math.hypot(...e.normal) > 1e-9 : e.kind === "datum" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function fm(e) {
        if (!Array.isArray(e.transforms) || e.transforms.length === 0) return [
            kn("invalid-transforms", "transforms", "At least one transform is required")
        ];
        for (const t of e.transforms){
            if (!oa(t)) return [
                kn("invalid-transforms", "transforms", "Transform must be structured")
            ];
            if (t.kind !== "linear" && !(t.kind === "polar" && Jc(t.axisRef)) && !(t.kind === "mirror" && Xc(t.planeRef))) return [
                kn("invalid-transforms", "transforms", "Transform kind or reference is invalid")
            ];
        }
        return [];
    }
    class pm extends Se {
        constructor(){
            super({
                type: "multi_transform",
                labelKey: "partDesign.feature.multiTransform",
                iconKey: "part-design-multi-transform",
                sortOrder: 700,
                capabilities: yo,
                parameterSchema: [],
                referenceSchema: [
                    {
                        key: "seedFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                requiredExtraParameterKeys: [
                    "transforms"
                ],
                createDraft: (t)=>({
                        seedFeatureId: go(t),
                        transforms: [
                            {
                                kind: "linear",
                                direction: [
                                    1,
                                    0,
                                    0
                                ],
                                count: 2,
                                spacing: 10
                            }
                        ]
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.seedFeatureId, t.transforms),
                validate: fm,
                build: (t, r, n)=>ve(t, r, n, cm)
            });
        }
    }
    class hm extends Se {
        constructor(){
            super({
                type: "linear_pattern",
                labelKey: "partDesign.feature.linearPattern",
                iconKey: "part-design-linear-pattern",
                sortOrder: 710,
                capabilities: yo,
                parameterSchema: [
                    {
                        key: "direction",
                        kind: "vector3",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "count",
                        kind: "number",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "spacing",
                        kind: "number",
                        required: !0,
                        unit: "model_length"
                    }
                ],
                referenceSchema: [
                    {
                        key: "seedFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                createDraft: (t)=>({
                        seedFeatureId: go(t),
                        direction: [
                            1,
                            0,
                            0
                        ],
                        count: 2,
                        spacing: 10
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.seedFeatureId),
                build: (t, r, n)=>ve(t, r, n, sm)
            });
        }
    }
    class mm extends Se {
        constructor(){
            super({
                type: "polar_pattern",
                labelKey: "partDesign.feature.polarPattern",
                iconKey: "part-design-polar-pattern",
                sortOrder: 720,
                capabilities: yo,
                parameterSchema: [
                    {
                        key: "count",
                        kind: "number",
                        required: !0,
                        unit: "unitless"
                    },
                    {
                        key: "angleSpan",
                        kind: "number",
                        required: !0,
                        unit: "radian"
                    }
                ],
                referenceSchema: [
                    {
                        key: "seedFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                requiredExtraReferenceKeys: [
                    "axisRef"
                ],
                createDraft: (t)=>({
                        seedFeatureId: go(t),
                        axisRef: {
                            kind: "world",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            direction: [
                                0,
                                0,
                                1
                            ]
                        },
                        count: 2,
                        angleSpan: Math.PI * 2
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.seedFeatureId, t.axisRef),
                validate: (t)=>Jc(t.axisRef) ? [] : [
                        kn("invalid-axis-reference", "axisRef", "Polar pattern axis is invalid")
                    ],
                build: (t, r, n)=>ve(t, r, n, um)
            });
        }
    }
    class ym extends Se {
        constructor(){
            super({
                type: "mirror",
                labelKey: "partDesign.feature.mirror",
                iconKey: "part-design-mirror",
                sortOrder: 730,
                capabilities: yo,
                parameterSchema: [],
                referenceSchema: [
                    {
                        key: "seedFeatureId",
                        kind: "feature",
                        required: !0
                    }
                ],
                requiredExtraReferenceKeys: [
                    "planeRef"
                ],
                createDraft: (t)=>({
                        seedFeatureId: go(t),
                        planeRef: {
                            kind: "world",
                            origin: [
                                0,
                                0,
                                0
                            ],
                            normal: [
                                1,
                                0,
                                0
                            ]
                        }
                    }),
                draftFromFeature: (t)=>ke(t),
                dependencies: (t)=>Ae(t.seedFeatureId, t.planeRef),
                validate: (t)=>Xc(t.planeRef) ? [] : [
                        kn("invalid-plane-reference", "planeRef", "Mirror plane is invalid")
                    ],
                build: (t, r, n)=>ve(t, r, n, am)
            });
        }
    }
    const gm = Object.freeze({
        sketch: ()=>new Xh,
        datum_plane: ()=>new Zh,
        datum_axis: ()=>new Qh,
        draft: ()=>new ah,
        box: ()=>new vp,
        cylinder: ()=>new Rp,
        cone: ()=>new Ap,
        sphere: ()=>new im,
        split: ()=>new Eh,
        trim: ()=>new Ah,
        face_pull: ()=>new Oh,
        multi_transform: ()=>new pm,
        shape_binder: ()=>new em,
        extrude: ()=>new gh,
        hole: ()=>new Sh,
        linear_pattern: ()=>new hm,
        polar_pattern: ()=>new mm,
        revolve: ()=>new Ph,
        boolean: ()=>new Mh,
        fillet: ()=>new uh,
        chamfer: ()=>new fh,
        thickness: ()=>new ph,
        mirror: ()=>new ym,
        loft: ()=>new Rh,
        pipe: ()=>new Ch,
        helix: ()=>new $h,
        thread: ()=>new Dh,
        import: ()=>new tm
    });
    function Im(e) {
        return gm[e]();
    }
    bm = function() {
        return Object.freeze(Di.map((e)=>Im(e)));
    };
    ix = function() {
        const e = new gp;
        for (const t of bm())e.register(t);
        return e.freeze({
            requireComplete: !0
        });
    };
    function wm(e) {
        return e.canonicalUnit;
    }
    ox = function(e, t, r) {
        const n = Xu(e.expression);
        if (!n.ok) throw new Error("error" in n ? n.error.message : "Invalid expression");
        const i = Xd([
            ...t,
            {
                key: "__binding__",
                expression: e.expression,
                expectedDimension: r
            }
        ]);
        if (!i.ok) throw new Error("error" in i ? i.error.message : "Invalid parameter expression");
        const o = i.value.values.get("__binding__");
        if (!o) throw new Error("Binding expression produced no value");
        return {
            value: o.value,
            unit: wm(o),
            parameterKeys: Object.freeze([
                ...n.value.identifiers
            ])
        };
    };
    sx = function(e) {
        return Object.freeze({
            expression: e.trim(),
            parameterKeys: Object.freeze([])
        });
    };
    const xm = Object.freeze({
        idle: new Set([
            "idle",
            "selected",
            "editing"
        ]),
        selected: new Set([
            "idle",
            "selected",
            "editing"
        ]),
        editing: new Set([
            "editing",
            "applying",
            "cancelling"
        ]),
        applying: new Set([
            "idle",
            "selected",
            "editing",
            "failed"
        ]),
        failed: new Set([
            "editing",
            "applying",
            "cancelling"
        ]),
        cancelling: new Set([
            "idle",
            "selected"
        ])
    });
    class Sm extends Error {
        from;
        to;
        constructor(t, r){
            super(`Invalid feature lifecycle transition: ${t} -> ${r}`), this.name = "FeatureLifecycleTransitionError", this.from = t, this.to = r;
        }
    }
    function km(e, t) {
        return xm[e].has(t);
    }
    ax = function(e, t) {
        if (!km(e, t)) throw new Sm(e, t);
        return t;
    };
    function vm(e) {
        return e === "editing" || e === "applying" || e === "failed" || e === "cancelling";
    }
    dx = function(e) {
        const t = vm(e.phase) && e.operation !== null, r = e.phase === "applying" || e.phase === "cancelling" || !!e.externallyBusy, n = e.operation === "create" ? e.supportsCreate : e.operation === "edit" ? e.supportsEdit : !1, i = t && n && e.hasCommitAction && e.canCommit && !e.hasValidationErrors && !r;
        return Object.freeze({
            editorVisible: e.phase === "selected" || t,
            parametersEnabled: t && n && !r,
            selectionLocked: t,
            referencePickEnabled: t && n && !r,
            editEnabled: e.phase === "selected" && e.supportsEdit && !r,
            applyEnabled: i,
            okEnabled: i,
            cancelEnabled: t && !r,
            resetEnabled: t && e.dirty && !r,
            previewEnabled: t && e.supportsPreview && !e.hasValidationErrors && !r,
            progressVisible: r,
            errorVisible: e.phase === "failed"
        });
    };
    function ls(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Tn(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function sa(e) {
        const t = Tn(e.axisDirection), r = Math.abs(t[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], n = Tn(ls(r, t)), i = ls(t, n);
        return {
            axis: t,
            u: n,
            v: i
        };
    }
    function Zc(e) {
        const t = e.endPitch - e.pitch;
        return Math.abs(t) <= 1e-12 ? e.height / e.pitch : e.height * Math.log(e.endPitch / e.pitch) / t;
    }
    function Fm(e, t) {
        if (!Number.isFinite(t) || t < -1e-9 || t > 1 + 1e-9) throw new Error("Helix path parameter must be between 0 and 1");
        if (![
            ...e.axisOrigin,
            ...e.axisDirection,
            e.radius,
            e.endRadius,
            e.pitch,
            e.endPitch,
            e.height,
            e.startAngle
        ].every(Number.isFinite)) throw new Error("Helix path resolution requires finite parameters");
        const r = Math.max(0, Math.min(1, t)), n = e.endPitch - e.pitch, i = Zc(e);
        if (!Number.isFinite(i) || i <= 0 || i > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const o = e.handedness === "left" ? -1 : 1, s = Math.abs(n) <= 1e-12 ? i * r : e.height * Math.log((e.pitch + n * r) / e.pitch) / n, a = e.startAngle + o * s * Math.PI * 2, d = o * 2 * Math.PI * (Math.abs(n) <= 1e-12 ? i : e.height / (e.pitch + n * r)), l = e.radius + (e.endRadius - e.radius) * r, c = e.endRadius - e.radius, { axis: f, u, v: h } = sa(e), y = Math.cos(a), I = Math.sin(a), g = [
            u[0] * y + h[0] * I,
            u[1] * y + h[1] * I,
            u[2] * y + h[2] * I
        ], x = [
            -u[0] * I + h[0] * y,
            -u[1] * I + h[1] * y,
            -u[2] * I + h[2] * y
        ], v = [
            e.axisOrigin[0] + g[0] * l + f[0] * e.height * r,
            e.axisOrigin[1] + g[1] * l + f[1] * e.height * r,
            e.axisOrigin[2] + g[2] * l + f[2] * e.height * r
        ], b = [
            g[0] * c + x[0] * l * d + f[0] * e.height,
            g[1] * c + x[1] * l * d + f[1] * e.height,
            g[2] * c + x[2] * l * d + f[2] * e.height
        ];
        return {
            point: v,
            tangent: Tn(b)
        };
    }
    _m = function(e, t, r = 100, n = 100) {
        const { point: i, tangent: o } = Fm(e, t), { axis: s } = sa(e), a = [
            i[0] - e.axisOrigin[0],
            i[1] - e.axisOrigin[1],
            i[2] - e.axisOrigin[2]
        ], d = a[0] * s[0] + a[1] * s[1] + a[2] * s[2], l = [
            a[0] - s[0] * d,
            a[1] - s[1] * d,
            a[2] - s[2] * d
        ], c = Tn(l), f = o[0] * c[0] + o[1] * c[1] + o[2] * c[2], u = [
            c[0] - o[0] * f,
            c[1] - o[1] * f,
            c[2] - o[2] * f
        ], h = Tn(u), y = ls(o, h);
        return {
            origin: i,
            normal: o,
            uAxis: h,
            vAxis: y,
            width: r,
            height: n
        };
    };
    aa = function(e, t = 32) {
        if (!Number.isInteger(t) || t < 8) throw new Error("Helix segmentsPerTurn must be at least 8");
        if (![
            ...e.axisOrigin,
            ...e.axisDirection,
            e.radius,
            e.endRadius,
            e.pitch,
            e.endPitch,
            e.height,
            e.startAngle
        ].every(Number.isFinite)) throw new Error("Helix sampling requires finite parameters");
        const r = e.endPitch - e.pitch, n = Zc(e);
        if (!Number.isFinite(n) || n <= 0 || n > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const { axis: i, u: o, v: s } = sa(e), a = Math.max(1, Math.ceil(n * t)), d = [], l = e.handedness === "left" ? -1 : 1;
        for(let c = 0; c <= a; c += 1){
            const f = c / a, u = Math.abs(r) <= 1e-12 ? n * f : e.height * Math.log((e.pitch + r * f) / e.pitch) / r, h = e.startAngle + l * u * Math.PI * 2, y = e.radius + (e.endRadius - e.radius) * f, I = Math.cos(h) * y, g = Math.sin(h) * y;
            d.push([
                e.axisOrigin[0] + o[0] * I + s[0] * g + i[0] * e.height * f,
                e.axisOrigin[1] + o[1] * I + s[1] * g + i[1] * e.height * f,
                e.axisOrigin[2] + o[2] * I + s[2] * g + i[2] * e.height * f
            ]);
        }
        return {
            points: d,
            turns: n
        };
    };
    class Rt extends Error {
        code;
        bodyId;
        featureId;
        dependencyId;
        constructor(t, r){
            super(t), this.name = "BodyInvariantError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId, this.dependencyId = r.dependencyId;
        }
    }
    const Hi = new Set([
        "extrude",
        "hole",
        "linear_pattern",
        "polar_pattern",
        "revolve",
        "boolean",
        "fillet",
        "chamfer",
        "thickness",
        "mirror",
        "loft",
        "pipe",
        "thread",
        "draft",
        "box",
        "cylinder",
        "cone",
        "sphere",
        "split",
        "trim",
        "face_pull",
        "multi_transform",
        "import"
    ]);
    Bn = function(e) {
        return Hi.has(e.type);
    };
    function us(e) {
        const { bodyId: t, features: r, tipFeatureId: n, foreignFeatureIds: i } = e, o = new Map;
        for(let c = 0; c < r.length; c++){
            const f = r[c];
            if (o.has(f.id)) throw new Rt(`Body ${t}: duplicate feature id ${f.id}`, {
                code: "duplicate-feature-id",
                bodyId: t,
                featureId: f.id
            });
            o.set(f.id, c);
        }
        const s = new Map, a = new Map;
        for (const c of r)s.set(c.id, []), a.set(c.id, []);
        for (const c of r){
            const f = o.get(c.id);
            for (const u of c.dependencyIds){
                const h = o.get(u);
                if (h === void 0) throw i?.has(u) ? new Rt(`Body ${t}: feature ${c.id} depends on cross-body feature ${u}`, {
                    code: "cross-body-dependency",
                    bodyId: t,
                    featureId: c.id,
                    dependencyId: u
                }) : new Rt(`Body ${t}: feature ${c.id} has unknown dependency ${u}`, {
                    code: "unknown-dependency",
                    bodyId: t,
                    featureId: c.id,
                    dependencyId: u
                });
                if (h >= f) throw new Rt(`Body ${t}: feature ${c.id} has forward or self dependency ${u}`, {
                    code: "forward-dependency",
                    bodyId: t,
                    featureId: c.id,
                    dependencyId: u
                });
                s.get(c.id).push(u), a.get(u).push(c.id);
            }
        }
        const d = r.map((c)=>c.id), l = Ns(d, a);
        if (l) throw new Rt(`Body ${t}: dependency cycle ${l.join(" -> ")}`, {
            code: "dependency-cycle",
            bodyId: t,
            featureId: l[0]
        });
        if (n !== null) {
            const c = r.find((f)=>f.id === n);
            if (!c) throw new Rt(`Body ${t}: tipFeatureId ${n} is not in body history`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
            if (c.suppressed) throw new Rt(`Body ${t}: tipFeatureId ${n} references a suppressed feature`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
        }
    }
    function fs(e, t) {
        const r = new Set;
        for (const n of t)if (n.id !== e) for (const i of n.getFeatures())r.add(i.id);
        return r;
    }
    cx = function(e, t) {
        const r = e.getBody(t.sourceBodyId);
        if (!r) return {
            status: "source_missing",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: null
        };
        const n = r.getFeature(t.sourceFeatureId);
        return !n || !Bn(n) ? {
            status: "stale",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: null
        } : !("solidId" in n) || !n.solidId ? {
            status: "stale",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: null
        } : {
            status: "resolved",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: n.solidId
        };
    };
    Io = function(e, t) {
        const n = (e.geometry ?? []).filter((d)=>d.kind === "point"), i = t && t.length > 0 ? n.filter((d)=>t.includes(d.id)) : n;
        if (i.length === 0) throw new Error(t && t.length > 0 ? "Hole sketch does not contain the requested point ids" : "Hole sketch has no definition points");
        const o = e.origin, s = e.uAxis, a = e.vAxis;
        if (!o || !s || !a || o.length !== 3 || s.length !== 3 || a.length !== 3) throw new Error("Hole sketch profile is missing a valid world frame");
        return i.map((d)=>{
            const l = d.point.x, c = d.point.y;
            if (!Number.isFinite(l) || !Number.isFinite(c)) throw new Error(`Hole sketch point ${d.id} has non-finite coordinates`);
            return {
                id: d.id,
                uv: {
                    x: l,
                    y: c
                },
                origin: [
                    o[0] + s[0] * l + a[0] * c,
                    o[1] + s[1] * l + a[1] * c,
                    o[2] + s[2] * l + a[2] * c
                ]
            };
        });
    };
    function Qc(e) {
        const t = e.normal;
        if (!t || t.length !== 3 || ![
            t[0],
            t[1],
            t[2]
        ].every((i)=>Number.isFinite(i))) throw new Error("Hole sketch profile is missing a valid normal");
        const r = Math.hypot(t[0], t[1], t[2]);
        if (r <= 1e-9) throw new Error("Hole sketch profile has a zero-length normal");
        const n = (i)=>Object.is(i, -0) ? 0 : i;
        return [
            n(-t[0] / r),
            n(-t[1] / r),
            n(-t[2] / r)
        ];
    }
    lx = function(e, t) {
        if (!e) return !1;
        try {
            return Io(e, t), !0;
        } catch  {
            return !1;
        }
    };
    ux = function(e, t) {
        const r = new Set((e.geometry ?? []).filter((o)=>o.kind === "point").map((o)=>o.id)), n = new Set, i = [];
        for (const o of t)!r.has(o) || n.has(o) || (n.add(o), i.push(o));
        return i;
    };
    function Em(e) {
        return {
            id: `${e}:origin`,
            coordinateSystem: {
                id: `${e}:origin:csys`,
                origin: [
                    0,
                    0,
                    0
                ],
                xAxis: [
                    1,
                    0,
                    0
                ],
                yAxis: [
                    0,
                    1,
                    0
                ],
                zAxis: [
                    0,
                    0,
                    1
                ]
            },
            planes: [
                {
                    id: `${e}:origin:right`,
                    name: "Right",
                    plane: {
                        origin: [
                            0,
                            0,
                            0
                        ],
                        normal: [
                            1,
                            0,
                            0
                        ],
                        uAxis: [
                            0,
                            1,
                            0
                        ],
                        vAxis: [
                            0,
                            0,
                            1
                        ],
                        width: 100,
                        height: 100
                    }
                },
                {
                    id: `${e}:origin:top`,
                    name: "Top",
                    plane: {
                        origin: [
                            0,
                            0,
                            0
                        ],
                        normal: [
                            0,
                            0,
                            1
                        ],
                        uAxis: [
                            1,
                            0,
                            0
                        ],
                        vAxis: [
                            0,
                            1,
                            0
                        ],
                        width: 100,
                        height: 100
                    }
                },
                {
                    id: `${e}:origin:front`,
                    name: "Front",
                    plane: {
                        origin: [
                            0,
                            0,
                            0
                        ],
                        normal: [
                            0,
                            1,
                            0
                        ],
                        uAxis: [
                            1,
                            0,
                            0
                        ],
                        vAxis: [
                            0,
                            0,
                            1
                        ],
                        width: 100,
                        height: 100
                    }
                }
            ]
        };
    }
    function ps(e) {
        return Array.isArray(e) ? e.map(ps) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([t, r])=>[
                t,
                ps(r)
            ])) : e;
    }
    el = class {
        id;
        name;
        _partId;
        tipFeatureId = null;
        origin;
        _parameters = new Map;
        _features = [];
        constructor(t){
            this.id = t.id ?? ae(), this.name = t.name, this._partId = t.partId ?? "", this.origin = Em(this.id);
        }
        get partId() {
            return this._partId;
        }
        setParameterDefinition(t) {
            if (!/^[A-Za-z_][A-Za-z0-9_.]*$/.test(t.key)) throw new Error(`Invalid parameter key ${t.key}`);
            this._parameters.set(t.key, {
                ...t
            });
        }
        removeParameterDefinition(t) {
            return this._parameters.delete(t);
        }
        getParameterDefinition(t) {
            return this._parameters.get(t);
        }
        getParameterDefinitions() {
            return Object.freeze([
                ...this._parameters.values()
            ].map((t)=>({
                    ...t
                })));
        }
        assignPartId(t) {
            if (!t) throw new Error(`PartBody.assignPartId: partId is required for body ${this.id}`);
            this._partId = t;
        }
        hasOwningPart() {
            return this._partId.length > 0;
        }
        addFeature(t) {
            const r = this.tipFeatureId;
            this._features.push(t), t.suppressed || (this.tipFeatureId = t.id);
            try {
                this.assertInvariants();
            } catch (n) {
                throw this._features.pop(), this.tipFeatureId = r, n;
            }
        }
        insertFeature(t, r) {
            const n = this.tipFeatureId;
            this._features.splice(t, 0, r), r.suppressed || (this.tipFeatureId = r.id);
            try {
                this.assertInvariants();
            } catch (i) {
                throw this._features.splice(t, 1), this.tipFeatureId = n, i;
            }
        }
        removeFeature(t) {
            const r = this._features.findIndex((o)=>o.id === t);
            if (r === -1) return !1;
            const n = this._features[r], i = this.tipFeatureId;
            this._features.splice(r, 1), this.tipFeatureId === t && this._refreshTipToLastSolid();
            try {
                this.assertInvariants();
            } catch (o) {
                throw this._features.splice(r, 0, n), this.tipFeatureId = i, o;
            }
            return !0;
        }
        getFeature(t) {
            return this._features.find((r)=>r.id === t);
        }
        getFeatures() {
            return this._features;
        }
        getFeatureIdsThroughTip() {
            if (this.tipFeatureId === null) return [];
            const t = this._features.findIndex((r)=>r.id === this.tipFeatureId);
            return t === -1 ? this._features.map((r)=>r.id) : this._features.slice(0, t + 1).map((r)=>r.id);
        }
        getFeaturesThroughTip() {
            const t = new Set(this.getFeatureIdsThroughTip());
            return this._features.filter((r)=>t.has(r.id));
        }
        setTipFeatureId(t) {
            const r = this.tipFeatureId;
            this.tipFeatureId = t;
            try {
                this.assertInvariants();
            } catch (n) {
                throw this.tipFeatureId = r, n;
            }
        }
        isTipFeature(t) {
            return this.tipFeatureId === t;
        }
        isFeatureThroughTip(t) {
            return this.getFeature(t) ? this.getFeatureIdsThroughTip().includes(t) : !1;
        }
        restoreFeatureState(t, r) {
            const n = t.map((s)=>s.type === "sketch" ? {
                    ...s,
                    dependencyIds: [
                        ...s.dependencyIds
                    ],
                    placementPlane: ps(s.placementPlane)
                } : {
                    ...s,
                    dependencyIds: [
                        ...s.dependencyIds
                    ]
                });
            us({
                bodyId: this.id,
                features: n,
                tipFeatureId: r
            });
            const i = new Map(this._features.map((s)=>[
                    s.id,
                    s
                ])), o = n.map((s)=>{
                const a = i.get(s.id);
                if (!a || a.type !== s.type) return s;
                const d = a;
                for (const l of Object.keys(d))l in s || delete d[l];
                return Object.assign(d, s), a;
            });
            this._features.length = 0, this._features.push(...o), this.tipFeatureId = r;
        }
        setFeatureSuppressed(t, r) {
            const n = this.getFeature(t);
            if (!n) throw new Error(`PartBody.setFeatureSuppressed: unknown feature ${t}`);
            if (!r && n.type === "import" && (!(n.sourceBytes instanceof Uint8Array) || n.sourceBytes.byteLength === 0)) throw new Error(`PartBody.setFeatureSuppressed: Import Feature ${t} has no BREP/STEP source bytes; re-import the source or keep the placeholder suppressed`);
            if (n.suppressed === r) return;
            const i = n.suppressed, o = this.tipFeatureId;
            n.suppressed = r, this._refreshTipAfterSuppressedChange(t, r);
            try {
                this.assertInvariants();
            } catch (s) {
                throw n.suppressed = i, this.tipFeatureId = o, s;
            }
        }
        assertInvariants(t) {
            us({
                bodyId: this.id,
                features: this._features,
                tipFeatureId: this.tipFeatureId,
                foreignFeatureIds: t
            });
        }
        _refreshTipToLastSolid() {
            const t = [
                ...this._features
            ].reverse().find((n)=>!n.suppressed && Bn(n));
            if (t) {
                this.tipFeatureId = t.id;
                return;
            }
            const r = [
                ...this._features
            ].reverse().find((n)=>!n.suppressed);
            this.tipFeatureId = r?.id ?? null;
        }
        _refreshTipAfterSuppressedChange(t, r) {
            if (r && this.tipFeatureId === t) {
                this._refreshTipToLastSolid();
                return;
            }
            if (!r) {
                const n = this._features.findIndex((o)=>o.id === t), i = this.tipFeatureId === null ? -1 : this._features.findIndex((o)=>o.id === this.tipFeatureId);
                n >= i && (this.tipFeatureId = t);
            }
        }
    };
    function da() {
        return {
            origin: [
                0,
                0,
                0
            ],
            rotation: [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ]
        };
    }
    class Am {
        id;
        name;
        visible;
        transform;
        _bodyIds = [];
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? ae(), this.name = t.name ?? "Part", this.visible = t.visible ?? !0, this.transform = t.transform ? {
                origin: [
                    ...t.transform.origin
                ],
                rotation: [
                    ...t.transform.rotation
                ]
            } : da();
        }
        getBodies() {
            return this._bodyIds.map((t)=>this._bodies.get(t));
        }
        getBody(t) {
            return this._bodies.get(t);
        }
        hasBody(t) {
            return this._bodies.has(t);
        }
        getBodyIds() {
            return this._bodyIds;
        }
        attachBody(t) {
            if (t.partId !== this.id) throw new Error(`Part.attachBody: body ${t.id} partId ${t.partId} does not match Part ${this.id}`);
            if (this._bodies.has(t.id)) throw new Error(`Part.attachBody: duplicate body id ${t.id} under Part ${this.id}`);
            this._bodyIds.push(t.id), this._bodies.set(t.id, t);
        }
        detachBody(t) {
            const r = this._bodies.get(t);
            if (!r) return;
            this._bodies.delete(t);
            const n = this._bodyIds.indexOf(t);
            return n !== -1 && this._bodyIds.splice(n, 1), r;
        }
    }
    class dt extends Error {
        code;
        partId;
        bodyId;
        constructor(t, r){
            super(t), this.name = "PartInvariantError", this.code = r.code, this.partId = r.partId, this.bodyId = r.bodyId;
        }
    }
    function Om(e) {
        const { parts: t, bodies: r } = e, n = new Map(t.map((s)=>[
                s.id,
                s
            ])), i = new Map;
        for (const s of t){
            const a = new Set;
            for (const d of s.getBodies()){
                if (a.has(d.id)) throw new dt(`Part ${s.id}: duplicate body membership ${d.id}`, {
                    code: "duplicate-body-id",
                    partId: s.id,
                    bodyId: d.id
                });
                if (a.add(d.id), !d.partId) throw new dt(`Body ${d.id}: missing owning partId`, {
                    code: "body-missing-part-id",
                    bodyId: d.id,
                    partId: s.id
                });
                if (d.partId !== s.id) throw new dt(`Body ${d.id}: partId ${d.partId} does not match owner Part ${s.id}`, {
                    code: "body-part-mismatch",
                    partId: s.id,
                    bodyId: d.id
                });
                const l = i.get(d.id);
                if (l !== void 0 && l !== s.id) throw new dt(`Body ${d.id}: shared by Parts ${l} and ${s.id}`, {
                    code: "body-shared-across-parts",
                    partId: s.id,
                    bodyId: d.id
                });
                i.set(d.id, s.id);
            }
        }
        const o = new Set;
        for (const s of r){
            if (o.has(s.id)) throw new dt(`Document: duplicate body id ${s.id} in flat index`, {
                code: "duplicate-body-id",
                bodyId: s.id
            });
            if (o.add(s.id), !s.partId) throw new dt(`Body ${s.id}: missing owning partId`, {
                code: "body-missing-part-id",
                bodyId: s.id
            });
            const a = n.get(s.partId);
            if (!a) throw new dt(`Body ${s.id}: unknown owning Part ${s.partId}`, {
                code: "body-unknown-part",
                bodyId: s.id,
                partId: s.partId
            });
            if (!a.hasBody(s.id)) throw new dt(`Body ${s.id}: Part ${s.partId} does not list this body`, {
                code: "orphan-body-index",
                partId: s.partId,
                bodyId: s.id
            });
            if (i.get(s.id) !== s.partId) throw new dt(`Body ${s.id}: ownership index mismatch`, {
                code: "body-part-mismatch",
                partId: s.partId,
                bodyId: s.id
            });
        }
        for (const s of t)for (const a of s.getBodies())if (!o.has(a.id)) throw new dt(`Part ${s.id}: body ${a.id} missing from document index`, {
            code: "part-unknown-body",
            partId: s.id,
            bodyId: a.id
        });
    }
    tl = class {
        id;
        name;
        _partOrder = [];
        _parts = new Map;
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? ae(), this.name = t.name ?? "PRT";
        }
        addPart(t) {
            if (this._parts.has(t.id)) throw new Error(`FeatureDocument.addPart: duplicate part id ${t.id}`);
            if (t.getBodies().length > 0) throw new Error(`FeatureDocument.addPart: Part ${t.id} must be empty; add bodies via addBody`);
            this._partOrder.push(t.id), this._parts.set(t.id, t);
        }
        createPart(t = {}) {
            const r = new Am(t);
            return this.addPart(r), r;
        }
        removePart(t) {
            const r = this._parts.get(t);
            if (!r) return !1;
            for (const i of [
                ...r.getBodies()
            ])this.removeBody(i.id);
            this._parts.delete(t);
            const n = this._partOrder.indexOf(t);
            return n !== -1 && this._partOrder.splice(n, 1), !0;
        }
        getPart(t) {
            return this._parts.get(t);
        }
        getParts() {
            return this._partOrder.map((t)=>this._parts.get(t));
        }
        getPartOfBody(t) {
            const r = this._bodies.get(t);
            if (r?.partId) return this._parts.get(r.partId);
        }
        getBodiesOfPart(t) {
            const r = this._parts.get(t);
            return r ? [
                ...r.getBodies()
            ] : [];
        }
        addBody(t) {
            if (this._bodies.has(t.id)) throw new Error(`FeatureDocument.addBody: duplicate body id ${t.id}`);
            const r = this._resolvePartForNewBody(t);
            t.assignPartId(r.id);
            const n = fs(t.id, this.getBodies());
            t.assertInvariants(n), r.attachBody(t), this._bodies.set(t.id, t);
            try {
                this.assertAllBodyInvariants(), this.assertPartOwnershipInvariants();
            } catch (i) {
                throw r.detachBody(t.id), this._bodies.delete(t.id), i;
            }
        }
        addBodyToPart(t, r) {
            if (!this._parts.get(t)) throw new Error(`FeatureDocument.addBodyToPart: unknown part ${t}`);
            r.assignPartId(t), this.addBody(r);
        }
        removeBody(t) {
            const r = this._bodies.get(t);
            return r ? ((r.partId ? this._parts.get(r.partId) : void 0)?.detachBody(t), this._bodies.delete(t)) : !1;
        }
        moveBody(t, r) {
            const n = this._bodies.get(t);
            if (!n) throw new Error(`FeatureDocument.moveBody: unknown body ${t}`);
            const i = this._parts.get(r);
            if (!i) throw new Error(`FeatureDocument.moveBody: unknown part ${r}`);
            if (n.partId === r) return;
            const o = n.partId ? this._parts.get(n.partId) : void 0;
            if (!o) throw new Error(`FeatureDocument.moveBody: body ${t} has no source Part`);
            const s = n.partId;
            o.detachBody(t), n.assignPartId(r);
            try {
                i.attachBody(n), this.assertPartOwnershipInvariants();
            } catch (a) {
                throw i.detachBody(t), n.assignPartId(s), o.attachBody(n), a;
            }
        }
        getBody(t) {
            return this._bodies.get(t);
        }
        getBodies() {
            const t = [];
            for (const r of this.getParts())t.push(...r.getBodies());
            if (t.length !== this._bodies.size) for (const r of this._bodies.values())t.includes(r) || t.push(r);
            return t;
        }
        assertAllBodyInvariants() {
            const t = this.getBodies();
            for (const r of t)r.assertInvariants(fs(r.id, t));
        }
        assertPartOwnershipInvariants() {
            Om({
                parts: this.getParts(),
                bodies: [
                    ...this._bodies.values()
                ]
            });
        }
        _resolvePartForNewBody(t) {
            if (t.partId) {
                const r = this._parts.get(t.partId);
                if (!r) throw new Error(`FeatureDocument.addBody: body ${t.id} references unknown part ${t.partId}`);
                return r;
            }
            if (this._partOrder.length === 1) return this._parts.get(this._partOrder[0]);
            if (this._partOrder.length === 0) return this.createPart({
                name: "Part"
            });
            throw new Error(`FeatureDocument.addBody: body ${t.id} has no partId and document has multiple Parts; use addBodyToPart`);
        }
    };
    const Pm = {
        sketch: "none",
        datum_plane: "none",
        datum_axis: "none",
        shape_binder: "none",
        helix: "none",
        import: "none",
        extrude: "prior",
        revolve: "prior",
        loft: "prior",
        pipe: "prior",
        thread: "prior",
        box: "prior",
        cylinder: "prior",
        cone: "prior",
        sphere: "prior",
        fillet: "base",
        chamfer: "base",
        thickness: "base",
        draft: "base",
        hole: "base",
        split: "base",
        trim: "base",
        face_pull: "base",
        boolean: "boolean",
        linear_pattern: "pattern",
        polar_pattern: "pattern",
        mirror: "pattern",
        multi_transform: "transform"
    };
    ca = function(e) {
        const t = new Map, r = (i)=>{
            const o = t.get(i);
            return o !== void 0 && Hi.has(o.type);
        };
        let n;
        return e.map((i)=>{
            const o = {
                ...i,
                dependencyIds: [
                    ...i.dependencyIds
                ]
            }, s = Pm[i.type], a = i.bodyInputMode === "feature";
            let d = !1;
            return !i.suppressed && n && !a && (s === "base" && i.baseFeatureId && r(i.baseFeatureId) ? (Object.assign(o, {
                baseFeatureId: n.id
            }), d = !0) : s === "boolean" && i.targetFeatureId && r(i.targetFeatureId) && (!i.toolFeatureId || !t.has(i.toolFeatureId)) ? (Object.assign(o, {
                targetFeatureId: n.id
            }), d = !0) : s === "transform" && i.seedFeatureId && r(i.seedFeatureId) ? (Object.assign(o, {
                seedFeatureId: n.id
            }), d = !0) : (s === "pattern" || s === "prior" && i.fusePrior !== !1) && (d = !0)), d && !o.dependencyIds.includes(n.id) && o.dependencyIds.push(n.id), t.set(i.id, o), !i.suppressed && Hi.has(i.type) && (n = o), o;
        });
    };
    function Mm(e) {
        return e.type;
    }
    function Rm(e) {
        return [
            ...new Set(e.dependencyIds)
        ].sort();
    }
    fx = function(e) {
        const t = ca(e.getFeatures()), r = t.map((f)=>f.id), n = new Map(r.map((f, u)=>[
                f,
                u
            ])), i = new Map(t.map((f)=>[
                f.id,
                f
            ])), o = Ff(new kf(t), r), s = e.tipFeatureId, a = s === null ? -1 : t.findIndex((f)=>f.id === s), d = [], l = [];
        let c = null;
        for (const f of o.featureIds){
            const u = i.get(f), h = n.get(f);
            if (!(a >= 0 && h <= a)) {
                d.push({
                    featureId: u.id,
                    type: u.type,
                    status: "inactive",
                    reason: a < 0 ? "no_tip" : "after_tip",
                    historyIndex: h
                });
                continue;
            }
            if (u.suppressed) {
                d.push({
                    featureId: u.id,
                    type: u.type,
                    status: "inactive",
                    reason: "suppressed",
                    historyIndex: h
                });
                continue;
            }
            const I = Mm(u), g = Bn(u), x = {
                featureId: u.id,
                type: u.type,
                status: "active",
                kind: I,
                historyIndex: h,
                priorSolidFeatureId: g && I !== "import" ? c : null,
                auxiliaryFeatureIds: Rm(u)
            };
            d.push(x), (g && I !== "import" || I === "import") && (l.push(u.id), c = u.id);
        }
        return {
            bodyId: e.id,
            tipFeatureId: s,
            historyOrder: r,
            steps: d,
            solidExecutionOrder: l
        };
    };
    function qi(e) {
        return Hi.has(e);
    }
    const hs = 1, zn = 2, od = zn, Ui = 3, Hr = 4;
    H = class extends Error {
        code;
        bodyId;
        featureId;
        constructor(t, r){
            super(t), this.name = "FeatureDocumentLoadError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId;
        }
    };
    function sd(e) {
        const t = {
            sketchId: e.sketchId
        };
        return e.label !== void 0 && (t.label = e.label), e.sectionMode !== void 0 && (t.sectionMode = e.sectionMode), t;
    }
    function Cm(e) {
        const t = {
            id: e.id,
            name: e.name,
            suppressed: e.suppressed,
            dependencyIds: [
                ...e.dependencyIds
            ],
            timestamp: e.timestamp,
            ...e.bodyInputMode ? {
                bodyInputMode: e.bodyInputMode
            } : {}
        };
        switch(e.type){
            case "sketch":
                return {
                    ...t,
                    type: "sketch",
                    sectionOwnership: e.sectionOwnership ?? "independent",
                    placementPlane: structuredClone(e.placementPlane ?? mr({
                        id: `${e.id}::placement-plane`
                    })),
                    ...e.ownerFeatureId ? {
                        ownerFeatureId: e.ownerFeatureId
                    } : {}
                };
            case "import":
                return {
                    ...t,
                    type: "import"
                };
            case "extrude":
                return {
                    ...t,
                    type: "extrude",
                    sketchRef: sd(e.sketchRef),
                    depth: e.depth,
                    startOffset: e.startOffset,
                    endOffset: e.endOffset,
                    secondDepth: e.secondDepth,
                    symmetric: e.symmetric,
                    mode: e.mode,
                    ...e.fusePrior === !1 ? {
                        fusePrior: !1
                    } : {}
                };
            case "hole":
                return {
                    ...t,
                    type: "hole",
                    ...po(e),
                    baseFeatureId: e.baseFeatureId,
                    sketchId: e.sketchId,
                    ...e.pointIds && e.pointIds.length > 0 ? {
                        pointIds: [
                            ...e.pointIds
                        ]
                    } : {},
                    diameter: e.diameter,
                    depth: e.depth,
                    depthMode: e.depthMode,
                    mode: e.mode,
                    ...e.counterboreDiameter !== void 0 ? {
                        counterboreDiameter: e.counterboreDiameter
                    } : {},
                    ...e.counterboreDepth !== void 0 ? {
                        counterboreDepth: e.counterboreDepth
                    } : {},
                    ...e.countersinkDiameter !== void 0 ? {
                        countersinkDiameter: e.countersinkDiameter
                    } : {},
                    ...e.countersinkAngleDeg !== void 0 ? {
                        countersinkAngleDeg: e.countersinkAngleDeg
                    } : {},
                    ...e.startChamferEnabled ? {
                        startChamferEnabled: !0,
                        startChamferOffset: e.startChamferOffset,
                        startChamferAngleDeg: e.startChamferAngleDeg
                    } : {},
                    ...e.endChamferEnabled ? {
                        endChamferEnabled: !0,
                        endChamferOffset: e.endChamferOffset,
                        endChamferAngleDeg: e.endChamferAngleDeg
                    } : {},
                    ...e.seriesParameters ? {
                        seriesParameters: {
                            ...structuredClone(e.seriesParameters)
                        }
                    } : {}
                };
            case "linear_pattern":
                return {
                    ...t,
                    type: "linear_pattern",
                    seedFeatureId: e.seedFeatureId,
                    direction: [
                        ...e.direction
                    ],
                    count: e.count,
                    spacing: e.spacing
                };
            case "polar_pattern":
                return {
                    ...t,
                    type: "polar_pattern",
                    seedFeatureId: e.seedFeatureId,
                    axisRef: structuredClone(e.axisRef),
                    count: e.count,
                    angleSpan: e.angleSpan
                };
            case "revolve":
                return {
                    ...t,
                    type: "revolve",
                    sketchRef: sd(e.sketchRef),
                    axisRef: structuredClone(e.axisRef),
                    angle: e.angle,
                    ...e.startAngle !== void 0 ? {
                        startAngle: e.startAngle
                    } : {},
                    ...e.endAngle !== void 0 ? {
                        endAngle: e.endAngle
                    } : {},
                    mode: e.mode,
                    ...e.fusePrior === !1 ? {
                        fusePrior: !1
                    } : {}
                };
            case "boolean":
                return {
                    ...t,
                    type: "boolean",
                    targetFeatureId: e.targetFeatureId,
                    ...e.targetBodyId ? {
                        targetBodyId: e.targetBodyId
                    } : {},
                    toolFeatureId: e.toolFeatureId,
                    ...e.toolBodyId ? {
                        toolBodyId: e.toolBodyId
                    } : {},
                    op: e.op
                };
            case "datum_plane":
                return {
                    ...t,
                    type: "datum_plane",
                    attachmentMode: e.attachmentMode,
                    basePlane: e.basePlane,
                    offset: e.offset,
                    ...e.baseDatumId ? {
                        baseDatumId: e.baseDatumId
                    } : {},
                    faceSelector: e.faceSelector ? {
                        featureId: e.faceSelector.featureId,
                        role: e.faceSelector.role,
                        ...e.faceSelector.hintCentroid ? {
                            hintCentroid: [
                                ...e.faceSelector.hintCentroid
                            ]
                        } : {}
                    } : null,
                    threePoints: e.threePoints ? structuredClone(e.threePoints) : null,
                    ...e.pathFeatureId ? {
                        pathFeatureId: e.pathFeatureId
                    } : {},
                    ...e.pathParameter !== null ? {
                        pathParameter: e.pathParameter
                    } : {},
                    width: e.width,
                    height: e.height,
                    visible: e.visible,
                    coordinateSystemVisible: e.coordinateSystemVisible,
                    plane: e.plane ? structuredClone(e.plane) : null,
                    ...e.coordinateSystem ? {
                        coordinateSystem: structuredClone(e.coordinateSystem)
                    } : {}
                };
            case "datum_axis":
                return {
                    ...t,
                    type: "datum_axis",
                    axisRef: structuredClone(e.axisRef)
                };
            case "draft":
                return {
                    ...t,
                    type: "draft",
                    baseFeatureId: e.baseFeatureId,
                    draftFaces: structuredClone(e.draftFaces),
                    hinges: structuredClone(e.hinges),
                    direction: structuredClone(e.direction),
                    reverseDirection: e.reverseDirection,
                    angle: e.angle,
                    reverseAngle: e.reverseAngle,
                    split: structuredClone(e.split),
                    variableAngles: structuredClone(e.variableAngles),
                    secondSideAngle: e.secondSideAngle,
                    reverseSecondSideAngle: e.reverseSecondSideAngle,
                    options: structuredClone(e.options),
                    ...e.method !== void 0 ? {
                        method: e.method
                    } : {},
                    ...e.angleTolerance !== void 0 ? {
                        angleTolerance: e.angleTolerance
                    } : {},
                    ...e.distanceTolerance !== void 0 ? {
                        distanceTolerance: e.distanceTolerance
                    } : {}
                };
            case "box":
                return {
                    ...t,
                    type: "box",
                    mode: e.mode,
                    origin: [
                        ...e.origin
                    ],
                    length: e.length,
                    width: e.width,
                    height: e.height
                };
            case "cylinder":
                return {
                    ...t,
                    type: "cylinder",
                    mode: e.mode,
                    origin: [
                        ...e.origin
                    ],
                    direction: [
                        ...e.direction
                    ],
                    radius: e.radius,
                    height: e.height
                };
            case "cone":
                return {
                    ...t,
                    type: "cone",
                    mode: e.mode,
                    origin: [
                        ...e.origin
                    ],
                    direction: [
                        ...e.direction
                    ],
                    bottomRadius: e.bottomRadius,
                    topRadius: e.topRadius,
                    height: e.height
                };
            case "sphere":
                return {
                    ...t,
                    type: "sphere",
                    mode: e.mode,
                    center: [
                        ...e.center
                    ],
                    radius: e.radius
                };
            case "split":
                return {
                    ...t,
                    type: "split",
                    baseFeatureId: e.baseFeatureId,
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide
                };
            case "trim":
                return {
                    ...t,
                    type: "trim",
                    baseFeatureId: e.baseFeatureId,
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide,
                    tolerance: e.tolerance
                };
            case "face_pull":
                return {
                    ...t,
                    type: "face_pull",
                    baseFeatureId: e.baseFeatureId,
                    faceSelectors: structuredClone(e.faceSelectors),
                    direction: [
                        ...e.direction
                    ],
                    distance: e.distance,
                    operation: e.operation
                };
            case "multi_transform":
                return {
                    ...t,
                    type: "multi_transform",
                    seedFeatureId: e.seedFeatureId,
                    transforms: structuredClone(e.transforms)
                };
            case "shape_binder":
                return {
                    ...t,
                    type: "shape_binder",
                    sourceBodyId: e.sourceBodyId,
                    sourceFeatureId: e.sourceFeatureId,
                    status: e.status
                };
            case "fillet":
                return {
                    ...t,
                    type: "fillet",
                    baseFeatureId: e.baseFeatureId,
                    edgeSelectors: e.edgeSelectors.map((r)=>zi(r, "edge")),
                    radius: e.radius,
                    ...e.tangentPropagation !== void 0 ? {
                        tangentPropagation: e.tangentPropagation
                    } : {},
                    ...e.rollOntoEdge !== void 0 ? {
                        rollOntoEdge: e.rollOntoEdge
                    } : {},
                    ...e.rollOverSmoothEdge !== void 0 ? {
                        rollOverSmoothEdge: e.rollOverSmoothEdge
                    } : {},
                    ...e.allInstances !== void 0 ? {
                        allInstances: e.allInstances
                    } : {},
                    ...e.tolerance !== void 0 ? {
                        tolerance: e.tolerance
                    } : {}
                };
            case "chamfer":
                return {
                    ...t,
                    type: "chamfer",
                    baseFeatureId: e.baseFeatureId,
                    edgeSelectors: e.edgeSelectors.map((r)=>zi(r, "edge")),
                    distance: e.distance,
                    ...e.secondDistance !== void 0 ? {
                        secondDistance: e.secondDistance
                    } : {},
                    ...e.angle !== void 0 ? {
                        angle: e.angle
                    } : {},
                    ...e.symmetric !== void 0 ? {
                        symmetric: e.symmetric
                    } : {},
                    ...e.reverseOffsets !== void 0 ? {
                        reverseOffsets: e.reverseOffsets
                    } : {},
                    ...e.offsetMethod !== void 0 ? {
                        offsetMethod: e.offsetMethod
                    } : {},
                    ...e.chamferOption !== void 0 ? {
                        chamferOption: e.chamferOption
                    } : {},
                    ...e.tolerance !== void 0 ? {
                        tolerance: e.tolerance
                    } : {}
                };
            case "thickness":
                return {
                    ...t,
                    type: "thickness",
                    baseFeatureId: e.baseFeatureId,
                    removedFaceSelectors: e.removedFaceSelectors.map((r)=>({
                            featureId: r.featureId,
                            role: r.role,
                            ...r.hintCentroid ? {
                                hintCentroid: [
                                    ...r.hintCentroid
                                ]
                            } : {}
                        })),
                    thickness: e.thickness,
                    inward: e.inward
                };
            case "mirror":
                return {
                    ...t,
                    type: "mirror",
                    seedFeatureId: e.seedFeatureId,
                    planeRef: structuredClone(e.planeRef)
                };
            case "loft":
                return {
                    ...t,
                    type: "loft",
                    sectionSketchIds: [
                        ...e.sectionSketchIds
                    ],
                    mode: e.mode
                };
            case "pipe":
                return {
                    ...t,
                    type: "pipe",
                    profileSketchId: e.profileSketchId,
                    ...e.sectionSketchIds ? {
                        sectionSketchIds: [
                            ...e.sectionSketchIds
                        ]
                    } : {},
                    pathSketchId: e.pathSketchId,
                    mode: e.mode,
                    orientation: e.orientation,
                    ...e.pathReference ? {
                        pathReference: structuredClone(e.pathReference)
                    } : {}
                };
            case "helix":
                return {
                    ...t,
                    type: "helix",
                    axisOrigin: [
                        ...e.axisOrigin
                    ],
                    axisDirection: [
                        ...e.axisDirection
                    ],
                    radius: e.radius,
                    endRadius: e.endRadius,
                    pitch: e.pitch,
                    endPitch: e.endPitch,
                    height: e.height,
                    handedness: e.handedness,
                    startAngle: e.startAngle
                };
            case "thread":
                return {
                    ...t,
                    type: "thread",
                    helixFeatureId: e.helixFeatureId,
                    mode: e.mode,
                    profileKind: e.profileKind,
                    profileSketchId: e.profileSketchId,
                    majorRadius: e.majorRadius,
                    pitch: e.pitch,
                    depth: e.depth
                };
            default:
                {
                    const r = e;
                    throw new H(`FeatureSerializer: cannot persist feature type ${String(r.type)}`, {
                        code: "corrupt-feature",
                        featureId: r.id
                    });
                }
        }
    }
    function W(e, t, r, n) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new H(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function de(e, t, r, n) {
        if (typeof e != "string" || e.length === 0) throw new H(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function ad(e, t, r) {
        try {
            return Yn(e, "edge");
        } catch (n) {
            throw new H(`Body ${t}: feature ${r} has invalid edge selector: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function $m(e, t, r) {
        if (typeof e != "object" || e === null || !("id" in e)) throw new H(`Body ${t}: sketch ${r} is missing placementPlane`, {
            code: "corrupt-feature",
            bodyId: t,
            featureId: r
        });
        try {
            return mr(structuredClone(e));
        } catch (n) {
            throw new H(`Body ${t}: sketch ${r} has invalid placementPlane: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function Dm(e, t) {
        if (e.bodyInputMode !== void 0 && e.bodyInputMode !== "current" && e.bodyInputMode !== "feature") throw new H(`Body ${t}: invalid bodyInputMode for ${e.id}`, {
            code: "corrupt-feature",
            bodyId: t,
            featureId: e.id
        });
        const r = Tm(e, t);
        return e.bodyInputMode && (r.bodyInputMode = e.bodyInputMode), r;
    }
    function Tm(e, t) {
        const r = {
            id: de(e.id, "id", t, String(e.id ?? "?")),
            name: de(e.name, "name", t, e.id),
            suppressed: !!e.suppressed,
            dependencyIds: Array.isArray(e.dependencyIds) ? [
                ...e.dependencyIds
            ] : [],
            timestamp: W(e.timestamp, "timestamp", t, e.id)
        };
        switch(e.type){
            case "sketch":
                return {
                    ...r,
                    type: "sketch",
                    sectionOwnership: e.sectionOwnership ?? "independent",
                    placementPlane: $m(e.placementPlane, t, e.id),
                    ...e.ownerFeatureId ? {
                        ownerFeatureId: e.ownerFeatureId
                    } : {}
                };
            case "import":
                return {
                    ...r,
                    type: "import"
                };
            case "extrude":
                {
                    if (!e.sketchRef?.sketchId || e.mode !== "add" && e.mode !== "cut") throw new H(`Body ${t}: extrude ${e.id} is missing sketchRef/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return {
                            ...ta({
                                id: e.id,
                                name: e.name,
                                dependencyIds: e.dependencyIds,
                                suppressed: e.suppressed,
                                sketchRef: {
                                    sketchId: e.sketchRef.sketchId,
                                    ...e.sketchRef.sectionMode ? {
                                        sectionMode: e.sketchRef.sectionMode
                                    } : {},
                                    ...e.sketchRef.label !== void 0 ? {
                                        label: e.sketchRef.label
                                    } : {}
                                },
                                depth: e.depth,
                                secondDepth: e.secondDepth,
                                symmetric: e.symmetric,
                                startOffset: typeof e.startOffset == "number" ? e.startOffset : void 0,
                                endOffset: typeof e.endOffset == "number" ? e.endOffset : void 0,
                                mode: e.mode,
                                fusePrior: e.fusePrior === !1 ? !1 : void 0
                            }),
                            timestamp: r.timestamp
                        };
                    } catch (n) {
                        throw new H(`Body ${t}: extrude ${e.id} ${n instanceof Error ? n.message : "is invalid"}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "hole":
                {
                    if (!e.baseFeatureId || !e.sketchId) throw new H(`Body ${t}: hole ${e.id} is missing baseFeatureId/sketchId`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink" || e.depthMode !== "blind" && e.depthMode !== "through") throw new H(`Body ${t}: hole ${e.id} has invalid mode/depthMode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    const n = Array.isArray(e.pointIds) ? e.pointIds.filter((o)=>typeof o == "string" && o.length > 0) : void 0;
                    return {
                        ...r,
                        type: "hole",
                        baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                        sketchId: de(e.sketchId, "sketchId", t, e.id),
                        ...n && n.length > 0 ? {
                            pointIds: n
                        } : {},
                        diameter: W(e.diameter, "diameter", t, e.id),
                        depth: W(e.depth, "depth", t, e.id),
                        depthMode: e.depthMode,
                        mode: e.mode,
                        ...e.counterboreDiameter !== void 0 ? {
                            counterboreDiameter: W(e.counterboreDiameter, "counterboreDiameter", t, e.id)
                        } : {},
                        ...e.counterboreDepth !== void 0 ? {
                            counterboreDepth: W(e.counterboreDepth, "counterboreDepth", t, e.id)
                        } : {},
                        ...e.countersinkDiameter !== void 0 ? {
                            countersinkDiameter: W(e.countersinkDiameter, "countersinkDiameter", t, e.id)
                        } : {},
                        ...e.countersinkAngleDeg !== void 0 ? {
                            countersinkAngleDeg: W(e.countersinkAngleDeg, "countersinkAngleDeg", t, e.id)
                        } : {},
                        ...e.startChamferEnabled ? {
                            startChamferEnabled: !0,
                            startChamferOffset: W(e.startChamferOffset, "startChamferOffset", t, e.id),
                            startChamferAngleDeg: W(e.startChamferAngleDeg, "startChamferAngleDeg", t, e.id)
                        } : {},
                        ...e.endChamferEnabled ? {
                            endChamferEnabled: !0,
                            endChamferOffset: W(e.endChamferOffset, "endChamferOffset", t, e.id),
                            endChamferAngleDeg: W(e.endChamferAngleDeg, "endChamferAngleDeg", t, e.id)
                        } : {},
                        ...e.seriesParameters && typeof e.seriesParameters == "object" ? {
                            seriesParameters: structuredClone(e.seriesParameters)
                        } : {},
                        ...po(e),
                        solidId: null
                    };
                }
            case "linear_pattern":
                {
                    if (!e.seedFeatureId || !Array.isArray(e.direction)) throw new H(`Body ${t}: linear pattern ${e.id} is missing seed/direction`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "linear_pattern",
                        seedFeatureId: de(e.seedFeatureId, "seedFeatureId", t, e.id),
                        direction: [
                            W(e.direction[0], "direction[0]", t, e.id),
                            W(e.direction[1], "direction[1]", t, e.id),
                            W(e.direction[2], "direction[2]", t, e.id)
                        ],
                        count: W(e.count, "count", t, e.id),
                        spacing: W(e.spacing, "spacing", t, e.id),
                        solidId: null
                    };
                }
            case "polar_pattern":
                {
                    if (!e.seedFeatureId || !e.axisRef) throw new H(`Body ${t}: polar pattern ${e.id} is missing seed/axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "polar_pattern",
                        seedFeatureId: de(e.seedFeatureId, "seedFeatureId", t, e.id),
                        axisRef: structuredClone(e.axisRef),
                        count: W(e.count, "count", t, e.id),
                        angleSpan: W(e.angleSpan, "angleSpan", t, e.id),
                        solidId: null
                    };
                }
            case "revolve":
                {
                    if (!e.sketchRef?.sketchId || !e.axisRef) throw new H(`Body ${t}: revolve ${e.id} is missing sketchRef/axisRef`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "revolve",
                        sketchRef: {
                            sketchId: e.sketchRef.sketchId,
                            ...e.sketchRef.sectionMode ? {
                                sectionMode: e.sketchRef.sectionMode
                            } : {},
                            ...e.sketchRef.label !== void 0 ? {
                                label: e.sketchRef.label
                            } : {}
                        },
                        axisRef: structuredClone(e.axisRef),
                        angle: W(e.angle, "angle", t, e.id),
                        ...e.startAngle !== void 0 ? {
                            startAngle: W(e.startAngle, "startAngle", t, e.id)
                        } : {},
                        ...e.endAngle !== void 0 ? {
                            endAngle: W(e.endAngle, "endAngle", t, e.id)
                        } : {},
                        mode: e.mode ?? "add",
                        ...e.fusePrior === !1 ? {
                            fusePrior: !1
                        } : {},
                        solidId: null
                    };
                }
            case "boolean":
                {
                    if (!e.targetFeatureId || !e.toolFeatureId || !e.op) throw new H(`Body ${t}: boolean ${e.id} is missing target/tool/op`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "boolean",
                        targetFeatureId: e.targetFeatureId,
                        ...e.targetBodyId ? {
                            targetBodyId: e.targetBodyId
                        } : {},
                        toolFeatureId: e.toolFeatureId,
                        ...e.toolBodyId ? {
                            toolBodyId: e.toolBodyId
                        } : {},
                        op: e.op,
                        solidId: null
                    };
                }
            case "datum_plane":
                {
                    if (!e.attachmentMode || !e.basePlane) throw new H(`Body ${t}: datum_plane ${e.id} is missing attachmentMode/basePlane`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "datum_plane",
                        attachmentMode: e.attachmentMode,
                        basePlane: e.basePlane,
                        offset: W(e.offset, "offset", t, e.id),
                        baseDatumId: e.baseDatumId ?? null,
                        faceSelector: e.faceSelector ?? null,
                        threePoints: e.threePoints ?? null,
                        pathFeatureId: e.pathFeatureId ?? null,
                        pathParameter: e.pathParameter ?? null,
                        width: e.width ?? 100,
                        height: e.height ?? 100,
                        visible: e.visible ?? !0,
                        coordinateSystemVisible: e.coordinateSystemVisible ?? !0,
                        plane: e.plane ?? null,
                        ...e.coordinateSystem ? {
                            coordinateSystem: structuredClone(e.coordinateSystem)
                        } : {}
                    };
                }
            case "datum_axis":
                {
                    if (!e.axisRef) throw new H(`Body ${t}: datum_axis ${e.id} is missing axisRef`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "datum_axis",
                        axisRef: structuredClone(e.axisRef)
                    };
                }
            case "draft":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !Array.isArray(e.hinges) || e.hinges.length === 0 || !e.direction || !e.split || !Array.isArray(e.variableAngles) || !e.options) throw new H(`Body ${t}: draft ${e.id} is missing the Creo-style Draft contract`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "draft",
                        baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                        draftFaces: structuredClone(e.draftFaces),
                        hinges: structuredClone(e.hinges),
                        direction: structuredClone(e.direction),
                        reverseDirection: !!e.reverseDirection,
                        angle: W(e.angle, "angle", t, e.id),
                        reverseAngle: !!e.reverseAngle,
                        split: structuredClone(e.split),
                        variableAngles: structuredClone(e.variableAngles),
                        secondSideAngle: W(e.secondSideAngle, "secondSideAngle", t, e.id),
                        reverseSecondSideAngle: !!e.reverseSecondSideAngle,
                        options: structuredClone(e.options),
                        ...e.method ? {
                            method: e.method
                        } : {},
                        ...e.angleTolerance !== void 0 ? {
                            angleTolerance: W(e.angleTolerance, "angleTolerance", t, e.id)
                        } : {},
                        ...e.distanceTolerance !== void 0 ? {
                            distanceTolerance: W(e.distanceTolerance, "distanceTolerance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "box":
                return {
                    ...r,
                    type: "box",
                    mode: e.mode ?? "add",
                    origin: [
                        ...e.origin
                    ],
                    length: W(e.length, "length", t, e.id),
                    width: W(e.width, "width", t, e.id),
                    height: W(e.height, "height", t, e.id),
                    solidId: null
                };
            case "cylinder":
                return {
                    ...r,
                    type: "cylinder",
                    mode: e.mode ?? "add",
                    origin: [
                        ...e.origin
                    ],
                    direction: [
                        ...e.direction
                    ],
                    radius: W(e.radius, "radius", t, e.id),
                    height: W(e.height, "height", t, e.id),
                    solidId: null
                };
            case "cone":
                return {
                    ...r,
                    type: "cone",
                    mode: e.mode ?? "add",
                    origin: [
                        ...e.origin
                    ],
                    direction: [
                        ...e.direction
                    ],
                    bottomRadius: W(e.bottomRadius, "bottomRadius", t, e.id),
                    topRadius: W(e.topRadius, "topRadius", t, e.id),
                    height: W(e.height, "height", t, e.id),
                    solidId: null
                };
            case "sphere":
                return {
                    ...r,
                    type: "sphere",
                    mode: e.mode ?? "add",
                    center: [
                        ...e.center
                    ],
                    radius: W(e.radius, "radius", t, e.id),
                    solidId: null
                };
            case "split":
                return {
                    ...r,
                    type: "split",
                    baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    solidId: null
                };
            case "trim":
                return {
                    ...r,
                    type: "trim",
                    baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    tolerance: W(e.tolerance ?? 1e-7, "tolerance", t, e.id),
                    solidId: null
                };
            case "face_pull":
                return {
                    ...r,
                    type: "face_pull",
                    baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                    faceSelectors: structuredClone(e.faceSelectors),
                    direction: [
                        ...e.direction
                    ],
                    distance: W(e.distance, "distance", t, e.id),
                    operation: e.operation ?? "add",
                    solidId: null
                };
            case "multi_transform":
                return {
                    ...r,
                    type: "multi_transform",
                    seedFeatureId: de(e.seedFeatureId, "seedFeatureId", t, e.id),
                    transforms: structuredClone(e.transforms),
                    solidId: null
                };
            case "shape_binder":
                return {
                    ...r,
                    type: "shape_binder",
                    sourceBodyId: de(e.sourceBodyId, "sourceBodyId", t, e.id),
                    sourceFeatureId: de(e.sourceFeatureId, "sourceFeatureId", t, e.id),
                    status: e.status === "stale" || e.status === "source_missing" ? e.status : "resolved",
                    solidId: null
                };
            case "fillet":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new H(`Body ${t}: fillet ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "fillet",
                        baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>ad(i, t, e.id)),
                        radius: W(e.radius, "radius", t, e.id),
                        ...e.tangentPropagation !== void 0 ? {
                            tangentPropagation: !!e.tangentPropagation
                        } : {},
                        ...e.rollOntoEdge !== void 0 ? {
                            rollOntoEdge: !!e.rollOntoEdge
                        } : {},
                        ...e.rollOverSmoothEdge !== void 0 ? {
                            rollOverSmoothEdge: !!e.rollOverSmoothEdge
                        } : {},
                        ...e.allInstances !== void 0 ? {
                            allInstances: !!e.allInstances
                        } : {},
                        ...e.tolerance !== void 0 ? {
                            tolerance: W(e.tolerance, "tolerance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "chamfer":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new H(`Body ${t}: chamfer ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "chamfer",
                        baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>ad(i, t, e.id)),
                        distance: W(e.distance, "distance", t, e.id),
                        ...e.secondDistance !== void 0 ? {
                            secondDistance: W(e.secondDistance, "secondDistance", t, e.id)
                        } : {},
                        ...e.angle !== void 0 ? {
                            angle: W(e.angle, "angle", t, e.id)
                        } : {},
                        ...e.symmetric !== void 0 ? {
                            symmetric: !!e.symmetric
                        } : {},
                        ...e.reverseOffsets !== void 0 ? {
                            reverseOffsets: !!e.reverseOffsets
                        } : {},
                        ...typeof e.offsetMethod == "string" ? {
                            offsetMethod: e.offsetMethod
                        } : {},
                        ...typeof e.chamferOption == "string" ? {
                            chamferOption: e.chamferOption
                        } : {},
                        ...e.tolerance !== void 0 ? {
                            tolerance: W(e.tolerance, "tolerance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "thickness":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0) throw new H(`Body ${t}: thickness ${e.id} is missing baseFeatureId/removedFaceSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "thickness",
                        baseFeatureId: de(e.baseFeatureId, "baseFeatureId", t, e.id),
                        removedFaceSelectors: e.removedFaceSelectors.map((i)=>({
                                featureId: de(i.featureId, "removedFaceSelectors.featureId", t, e.id),
                                role: de(i.role, "removedFaceSelectors.role", t, e.id),
                                ...i.hintCentroid ? {
                                    hintCentroid: [
                                        ...i.hintCentroid
                                    ]
                                } : {}
                            })),
                        thickness: W(e.thickness, "thickness", t, e.id),
                        inward: e.inward ?? !0,
                        solidId: null
                    };
                }
            case "mirror":
                {
                    if (!e.seedFeatureId || !e.planeRef) throw new H(`Body ${t}: mirror ${e.id} is missing seedFeatureId/planeRef`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "mirror",
                        seedFeatureId: de(e.seedFeatureId, "seedFeatureId", t, e.id),
                        planeRef: structuredClone(e.planeRef),
                        solidId: null
                    };
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.mode) throw new H(`Body ${t}: loft ${e.id} is missing sectionSketchIds/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "loft",
                        sectionSketchIds: e.sectionSketchIds.map((i)=>de(i, "sectionSketchIds[]", t, e.id)),
                        mode: e.mode === "cut" ? "cut" : "add",
                        solidId: null
                    };
                }
            case "pipe":
                {
                    if (!e.profileSketchId || !e.pathSketchId || e.profileSketchId === e.pathSketchId || e.mode !== "add" && e.mode !== "cut") throw new H(`Body ${t}: pipe ${e.id} has invalid profile/path/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return ra({
                        id: de(e.id, "id", t, String(e.id)),
                        name: de(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        profileSketchId: de(e.profileSketchId, "profileSketchId", t, e.id),
                        sectionSketchIds: Array.isArray(e.sectionSketchIds) ? e.sectionSketchIds.map((n)=>de(n, "sectionSketchIds[]", t, e.id)) : void 0,
                        pathSketchId: de(e.pathSketchId, "pathSketchId", t, e.id),
                        mode: e.mode,
                        orientation: e.orientation === "parallel" || e.orientation === "fixed" ? e.orientation : "frenet"
                    });
                }
            case "helix":
                {
                    const n = e.axisOrigin, i = e.axisDirection;
                    if (!Array.isArray(n) || n.length !== 3 || !Array.isArray(i) || i.length !== 3) throw new H(`Body ${t}: helix ${e.id} has invalid axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return fo({
                            id: de(e.id, "id", t, String(e.id)),
                            name: de(e.name, "name", t, e.id),
                            dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                            suppressed: e.suppressed === !0,
                            axisOrigin: n.map((o)=>W(o, "axisOrigin[]", t, e.id)),
                            axisDirection: i.map((o)=>W(o, "axisDirection[]", t, e.id)),
                            radius: W(e.radius, "radius", t, e.id),
                            endRadius: W(e.endRadius, "endRadius", t, e.id),
                            pitch: W(e.pitch, "pitch", t, e.id),
                            endPitch: W(e.endPitch, "endPitch", t, e.id),
                            height: W(e.height, "height", t, e.id),
                            handedness: e.handedness === "left" ? "left" : "right",
                            startAngle: W(e.startAngle, "startAngle", t, e.id)
                        });
                    } catch (o) {
                        throw o instanceof H ? o : new H(`Body ${t}: invalid helix ${e.id}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "thread":
                try {
                    return na({
                        id: de(e.id, "id", t, String(e.id)),
                        name: de(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        helixFeatureId: de(e.helixFeatureId, "helixFeatureId", t, e.id),
                        mode: e.mode === "cut" ? "cut" : "add",
                        profileKind: e.profileKind === "custom_sketch" ? "custom_sketch" : "metric_triangle",
                        profileSketchId: e.profileSketchId === null ? null : de(e.profileSketchId, "profileSketchId", t, e.id),
                        majorRadius: W(e.majorRadius, "majorRadius", t, e.id),
                        pitch: W(e.pitch, "pitch", t, e.id),
                        depth: W(e.depth, "depth", t, e.id)
                    });
                } catch (n) {
                    throw n instanceof H ? n : new H(`Body ${t}: invalid thread ${e.id}`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                }
            default:
                {
                    const n = e;
                    throw new H(`Body ${t}: unknown feature type in v3 payload`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: n.id
                    });
                }
        }
    }
    function la(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("documentFormatVersion must be a positive safe integer");
        return e;
    }
    la(1);
    function Bm(e, t) {
        if (typeof e != "object" || e === null || e.schemaVersion !== Hr) throw new H("LegacyV4DocumentAdapter: expected schemaVersion 4", {
            code: "invalid-schema"
        });
        return t(e);
    }
    function zm(e) {
        return e.type === "extrude" && "sketchRef" in e && "depth" in e && "mode" in e;
    }
    function jm(e) {
        return e.type === "datum_plane" && "attachmentMode" in e;
    }
    function Nm(e, t) {
        const r = {
            id: e.id,
            name: e.name,
            suppressed: e.suppressed,
            dependencyIds: [
                ...e.dependencyIds
            ],
            timestamp: e.timestamp
        };
        if (e.type === "sketch") return {
            ...r,
            type: "sketch"
        };
        if (e.type === "import") return {
            ...r,
            type: "import"
        };
        if (e.type === "extrude") {
            if (!zm(e)) throw new H(`Body ${t}: extrude feature ${e.id} is missing v1 parameters`, {
                code: "migration-failed",
                bodyId: t,
                featureId: e.id
            });
            return {
                ...r,
                type: "extrude",
                sketchRef: {
                    sketchId: e.sketchRef.sketchId
                },
                depth: e.depth,
                mode: e.mode
            };
        }
        if (e.type === "datum_plane") {
            if (!jm(e)) throw new H(`Body ${t}: datum_plane feature ${e.id} is missing v1 parameters`, {
                code: "migration-failed",
                bodyId: t,
                featureId: e.id
            });
            return {
                ...r,
                type: "datum_plane",
                attachmentMode: e.attachmentMode,
                basePlane: e.basePlane,
                offset: e.offset,
                faceSelector: e.faceSelector,
                threePoints: e.threePoints,
                pathFeatureId: null,
                pathParameter: null,
                width: e.width ?? 100,
                height: e.height ?? 100,
                visible: e.visible ?? !0,
                coordinateSystemVisible: e.coordinateSystemVisible ?? !0,
                plane: e.plane
            };
        }
        if (e.type === "revolve" || e.type === "boolean") throw new H(`Body ${t}: feature ${e.id} type "${e.type}" cannot be migrated from v1 (missing specialized fields)`, {
            code: "migration-failed",
            bodyId: t,
            featureId: e.id
        });
        const n = e;
        throw new H(`Body ${t}: feature ${n.id} has unmigratable type "${String(n.type)}"`, {
            code: "migration-failed",
            bodyId: t,
            featureId: n.id
        });
    }
    function Vm(e) {
        if (e.schemaVersion !== hs) throw new H(`migrateFeatureDocumentV1ToV2: expected schemaVersion 1, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const t = [], r = e.bodies.map((i)=>{
            const o = i.features.map((s)=>Nm(s, i.id));
            return t.push(`body ${i.id}: migrated ${o.length} feature(s)`), {
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: o
            };
        });
        return {
            document: {
                schemaVersion: od,
                id: e.id,
                name: e.name,
                bodies: r
            },
            log: {
                fromVersion: hs,
                toVersion: od,
                bodyIds: r.map((i)=>i.id),
                notes: t
            }
        };
    }
    const Km = {
        origin: [
            0,
            0,
            0
        ],
        normal: [
            0,
            0,
            1
        ],
        uAxis: [
            1,
            0,
            0
        ],
        vAxis: [
            0,
            1,
            0
        ]
    };
    function Wi(e) {
        return Array.isArray(e) ? e.map(Wi) : typeof e != "object" || e === null ? e : Object.fromEntries(Object.entries(e).sort(([t], [r])=>t.localeCompare(r)).map(([t, r])=>[
                t,
                Wi(r)
            ]));
    }
    function Lm(e, t) {
        return JSON.stringify(Wi(e)) === JSON.stringify(Wi(t));
    }
    function Hm(e) {
        if (e.type === "extrude" || e.type === "revolve") return e.sketchRef;
    }
    function qm(e, t, r) {
        const n = e.map(Hm).filter((o)=>o?.sketchId === t).map((o)=>o.attachment).filter((o)=>o !== void 0);
        if (n.length === 0) return;
        const i = n[0];
        if (n.some((o)=>!Lm(i, o))) throw new H(`Body ${r}: sketch ${t} has conflicting legacy consumer attachments`, {
            code: "migration-failed",
            bodyId: r,
            featureId: t
        });
        return structuredClone(i);
    }
    function Um(e) {
        return e ? [
            ...e.origin,
            e.normal[0],
            e.normal[1],
            e.normal[2] - 1,
            e.uAxis[0] - 1,
            e.uAxis[1],
            e.uAxis[2],
            e.vAxis[0],
            e.vAxis[1] - 1,
            e.vAxis[2]
        ].every((r)=>Math.abs(r) <= 1e-9) : !0;
    }
    function Wm(e, t, r) {
        return e ? e.kind === "base" ? Um(t) ? {
            mode: "associative",
            reference: {
                kind: "origin-plane",
                planeId: `${r}:origin:top`
            }
        } : {
            mode: "fixed"
        } : e.kind === "origin-plane" ? {
            mode: "associative",
            reference: {
                kind: "origin-plane",
                planeId: e.planeId
            }
        } : e.kind === "datum" ? {
            mode: "associative",
            reference: {
                kind: "datum",
                datumFeatureId: e.datumFeatureId
            }
        } : {
            mode: "associative",
            reference: {
                kind: "face",
                faceSelector: structuredClone(e.faceSelector)
            }
        } : {
            mode: "fixed"
        };
    }
    function Gm(e) {
        const t = e?.orientationRole ?? "right", r = e?.xAxisReversed ?? !1, n = e?.xAxisReference;
        return !n || n.kind === "support-u" ? {
            mode: "support-default",
            role: t,
            reversed: r
        } : {
            mode: "associative",
            reference: structuredClone(n),
            role: t,
            reversed: r
        };
    }
    function Ym(e, t, r, n) {
        const i = n.sketchAttachments?.[e.id] ?? qm(r, e.id, t), o = n.sketchFrames?.[e.id];
        return {
            ...structuredClone(e),
            type: "sketch",
            placementPlane: mr({
                id: `${e.id}::placement-plane`,
                support: Wm(i, o, t),
                orientation: Gm(i),
                normalReversed: i?.normalReversed ?? !1,
                frameSnapshot: o ?? Km
            })
        };
    }
    function Jm(e) {
        if (e.type !== "extrude" && e.type !== "revolve" || !e.sketchRef || typeof e.sketchRef != "object") return structuredClone(e);
        const { attachment: t, ...r } = e.sketchRef;
        return {
            ...structuredClone(e),
            sketchRef: structuredClone(r)
        };
    }
    function dd(e, t = {}) {
        if (e.schemaVersion !== zn) throw new H(`migrateFeatureDocumentV2ToV3: expected schemaVersion 2, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const r = [], n = e.bodies.map((i)=>({
                ...structuredClone(i),
                features: i.features.map((o)=>o.type !== "sketch" ? Jm(o) : (r.push(o.id), Ym(o, i.id, i.features, t)))
            }));
        return {
            document: {
                schemaVersion: Ui,
                id: e.id,
                name: e.name,
                bodies: n
            },
            log: {
                fromVersion: zn,
                toVersion: Ui,
                migratedSketchIds: r,
                notes: [
                    `migrated ${r.length} private sketch plane(s)`
                ]
            }
        };
    }
    const Xm = "LegacyPart";
    function rl(e) {
        return `${e}::LegacyPart`;
    }
    function Zm(e, t) {
        if (!e || typeof e.id != "string" || typeof e.name != "string") throw new H(`migrateV3ToV4: invalid body at index ${t}`, {
            code: "invalid-schema",
            bodyId: e?.id
        });
        if (!Array.isArray(e.features)) throw new H(`migrateV3ToV4: body ${e.id} has malformed features`, {
            code: "invalid-schema",
            bodyId: e.id
        });
        const r = new Set;
        for (const n of e.features){
            if (!n || typeof n.id != "string") throw new H(`migrateV3ToV4: body ${e.id} has malformed feature entry`, {
                code: "invalid-schema",
                bodyId: e.id
            });
            if (r.has(n.id)) throw new H(`migrateV3ToV4: body ${e.id} has duplicate feature id ${n.id}`, {
                code: "invalid-schema",
                bodyId: e.id,
                featureId: n.id
            });
            r.add(n.id);
        }
    }
    function Qm(e) {
        if (e.schemaVersion !== Ui) throw new H(`migrateV3ToV4: expected schemaVersion 3, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.bodies)) throw new H("migrateV3ToV4: invalid v3 envelope", {
            code: "invalid-schema"
        });
        const t = new Set;
        for(let i = 0; i < e.bodies.length; i++){
            const o = e.bodies[i];
            if (Zm(o, i), t.has(o.id)) throw new H(`migrateV3ToV4: duplicate body id ${o.id}`, {
                code: "invalid-schema",
                bodyId: o.id
            });
            t.add(o.id);
        }
        const r = rl(e.id), n = {
            id: r,
            name: Xm,
            visible: !0,
            transform: da(),
            bodies: e.bodies.map((i)=>({
                    id: i.id,
                    name: i.name,
                    tipFeatureId: i.tipFeatureId ?? null,
                    features: i.features
                }))
        };
        return {
            legacyPartId: r,
            document: {
                schemaVersion: Hr,
                id: e.id,
                name: e.name,
                parts: [
                    n
                ]
            }
        };
    }
    const nl = la(5), ey = Sf;
    function il(e) {
        return Cm(e);
    }
    function ty(e, t) {
        return Dm(e, t);
    }
    function ry(e) {
        return {
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: e.getFeatures().map(il)
        };
    }
    function ny(e) {
        const t = e.getParts();
        return t.length > 0 ? {
            schemaVersion: Hr,
            id: e.id,
            name: e.name,
            parts: t.map((r)=>({
                    id: r.id,
                    name: r.name,
                    visible: r.visible,
                    transform: {
                        origin: [
                            ...r.transform.origin
                        ],
                        rotation: [
                            ...r.transform.rotation
                        ]
                    },
                    bodies: r.getBodies().map(ry)
                }))
        } : {
            schemaVersion: Hr,
            id: e.id,
            name: e.name,
            parts: []
        };
    }
    function ms(e) {
        return Array.isArray(e) ? e.map(ms) : vt(e) ? Object.fromEntries(Object.entries(e).filter(([, t])=>t !== void 0).map(([t, r])=>[
                t,
                ms(r)
            ])) : e;
    }
    function iy(e) {
        const t = ms(il(e)), { envelope: r } = ip(t);
        return Object.freeze({
            ...r,
            featurePayloadVersion: ey
        });
    }
    function oy(e) {
        return Object.freeze({
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: Object.freeze(e.getFeatures().map(iy))
        });
    }
    function sy(e) {
        return Object.freeze({
            documentFormatVersion: nl,
            id: e.id,
            name: e.name,
            parts: Object.freeze(e.getParts().map((t)=>Object.freeze({
                    id: t.id,
                    name: t.name,
                    visible: t.visible,
                    transform: {
                        origin: [
                            ...t.transform.origin
                        ],
                        rotation: [
                            ...t.transform.rotation
                        ]
                    },
                    bodies: Object.freeze(t.getBodies().map(oy))
                })))
        });
    }
    px = function(e, t = {}) {
        return t.format === "v5" ? sy(e) : ny(e);
    };
    function vt(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Bt(e, t) {
        if (typeof e != "string" || e.length === 0) throw new H(`FeatureDocument v5: ${t} must be a non-empty string`, {
            code: "invalid-schema"
        });
        return e;
    }
    function cd(e, t, r) {
        if (!Array.isArray(e) || e.length !== t || e.some((n)=>typeof n != "number" || !Number.isFinite(n))) throw new H(`FeatureDocument v5: ${r} must contain ${t} finite numbers`, {
            code: "invalid-schema"
        });
        return [
            ...e
        ];
    }
    function ay(e, t) {
        if (!vt(e) || !vt(e.parameters) || !vt(e.references)) throw new H(`Body ${t}: invalid v5 Feature envelope`, {
            code: "corrupt-feature",
            bodyId: t
        });
        try {
            const r = fr({
                id: Bt(e.id, "feature.id"),
                typeId: Bt(e.typeId, "feature.typeId"),
                name: typeof e.name == "string" ? e.name : "",
                suppressed: e.suppressed === !0,
                timestamp: e.timestamp,
                parameters: e.parameters,
                references: e.references
            });
            return Object.freeze({
                ...r,
                featurePayloadVersion: js(e.featurePayloadVersion)
            });
        } catch (r) {
            throw r instanceof H ? r : new H(`Body ${t}: invalid v5 Feature ${String(e.id ?? "?")}: ${r instanceof Error ? r.message : String(r)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: typeof e.id == "string" ? e.id : void 0
            });
        }
    }
    function dy(e) {
        if (!vt(e)) throw new H("FeatureDocument v5: payload is not an object", {
            code: "invalid-schema"
        });
        let t;
        try {
            t = la(e.documentFormatVersion);
        } catch  {
            throw new H("FeatureDocument v5: invalid documentFormatVersion", {
                code: "unsupported-version"
            });
        }
        if (t !== nl) throw new H(`FeatureDocument v5: unsupported documentFormatVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (!Array.isArray(e.parts)) throw new H("FeatureDocument v5: parts must be an array", {
            code: "invalid-schema"
        });
        const r = e.parts.map((n, i)=>{
            if (!vt(n) || !Array.isArray(n.bodies)) throw new H(`FeatureDocument v5: invalid part at index ${i}`, {
                code: "invalid-schema"
            });
            const o = Bt(n.id, `parts[${i}].id`);
            if (!vt(n.transform)) throw new H(`FeatureDocument v5: Part ${o} has invalid transform`, {
                code: "invalid-schema"
            });
            const s = n.bodies.map((a, d)=>{
                if (!vt(a) || !Array.isArray(a.features)) throw new H(`FeatureDocument v5: invalid Body at ${o}[${d}]`, {
                    code: "invalid-schema"
                });
                const l = Bt(a.id, `parts.${o}.bodies[${d}].id`);
                let c;
                if (a.tipFeatureId === null) c = null;
                else if (typeof a.tipFeatureId == "string") c = a.tipFeatureId;
                else throw new H(`FeatureDocument v5: Body ${l} has invalid tipFeatureId`, {
                    code: "invalid-schema",
                    bodyId: l
                });
                return Object.freeze({
                    id: l,
                    name: Bt(a.name, `Body ${l}.name`),
                    tipFeatureId: c,
                    features: Object.freeze(a.features.map((f)=>ay(f, l)))
                });
            });
            return Object.freeze({
                id: o,
                name: Bt(n.name, `Part ${o}.name`),
                visible: n.visible !== !1,
                transform: Object.freeze({
                    origin: Object.freeze(cd(n.transform.origin, 3, `Part ${o}.origin`)),
                    rotation: Object.freeze(cd(n.transform.rotation, 9, `Part ${o}.rotation`))
                }),
                bodies: Object.freeze(s)
            });
        });
        return Object.freeze({
            documentFormatVersion: t,
            id: Bt(e.id, "document.id"),
            name: Bt(e.name, "document.name"),
            parts: Object.freeze(r)
        });
    }
    function cy(e) {
        const t = fr({
            id: e.id,
            typeId: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp,
            parameters: e.parameters,
            references: e.references
        });
        return op(t);
    }
    function ua(e, t) {
        const r = [];
        for (const n of e){
            if (!n?.id || !n?.name || !Array.isArray(n.features)) throw new H(`FeatureSerializer: invalid body payload ${String(n?.id ?? "?")}`, {
                code: "invalid-schema",
                bodyId: n?.id
            });
            const i = n.features.map((o)=>ty(o, n.id));
            r.push({
                id: n.id,
                name: n.name,
                partId: t,
                tipFeatureId: n.tipFeatureId ?? null,
                features: i
            });
        }
        return r;
    }
    function ly(e) {
        const t = e.map((r)=>({
                id: r.id,
                getFeatures: ()=>r.features
            }));
        for (const r of e)try {
            us({
                bodyId: r.id,
                features: r.features,
                tipFeatureId: r.tipFeatureId,
                foreignFeatureIds: fs(r.id, t)
            });
        } catch (n) {
            throw n instanceof Rt ? new H(n.message, {
                code: "invariant-violation",
                bodyId: n.bodyId,
                featureId: n.featureId
            }) : n;
        }
    }
    function fa(e, t, r, n) {
        ly(n);
        const i = new tl({
            id: e,
            name: t
        });
        for (const o of r)i.createPart({
            id: o.id,
            name: o.name,
            visible: o.visible,
            transform: o.transform
        });
        for (const o of n){
            const s = new el({
                id: o.id,
                name: o.name,
                partId: o.partId
            });
            s.restoreFeatureState(o.features, o.tipFeatureId), i.addBody(s);
        }
        return i;
    }
    function uy(e) {
        const t = [], r = [];
        for (const n of e.parts)t.push({
            id: n.id,
            name: n.name,
            visible: n.visible,
            transform: {
                origin: [
                    ...n.transform.origin
                ],
                rotation: [
                    ...n.transform.rotation
                ]
            },
            bodyIds: n.bodies.map((i)=>i.id)
        }), r.push(...ua(n.bodies.map((i)=>({
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: i.features.map(cy)
            })), n.id));
        return fa(e.id, e.name, t, r);
    }
    function fy(e) {
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.parts)) throw new H("FeatureSerializer: invalid v4 document envelope", {
            code: "invalid-schema"
        });
        const t = [], r = [];
        for (const n of e.parts){
            if (!n?.id || !n?.name || !Array.isArray(n.bodies)) throw new H(`FeatureSerializer: invalid part payload ${String(n?.id ?? "?")}`, {
                code: "invalid-schema",
                bodyId: n?.id
            });
            t.push({
                id: n.id,
                name: n.name,
                visible: n.visible !== !1,
                transform: n.transform ? {
                    origin: [
                        ...n.transform.origin
                    ],
                    rotation: [
                        ...n.transform.rotation
                    ]
                } : da(),
                bodyIds: n.bodies.map((i)=>i.id)
            }), r.push(...ua(n.bodies, n.id));
        }
        return fa(e.id, e.name, t, r);
    }
    hx = function(e, t = {}) {
        if (!vt(e)) throw new H("FeatureSerializer: payload is not an object", {
            code: "invalid-schema"
        });
        if (Object.hasOwn(e, "documentFormatVersion")) return uy(dy(e));
        const r = e.schemaVersion;
        if (r === Hr) return Bm(e, fy);
        let n;
        if (r === Ui) n = e;
        else if (r === zn) n = dd(e, t).document;
        else if (r === hs) {
            const { document: d } = Vm(e);
            n = dd(d, t).document;
        } else throw new H(`FeatureSerializer: unsupported schema version ${String(r)}`, {
            code: "unsupported-version"
        });
        const { document: i, legacyPartId: o } = Qm(n), s = i.parts.map((d)=>({
                id: d.id,
                name: d.name,
                visible: d.visible,
                transform: d.transform,
                bodyIds: d.bodies.map((l)=>l.id)
            })), a = [];
        for (const d of i.parts)a.push(...ua(d.bodies, d.id));
        if (o !== rl(n.id)) throw new H("migrateV3ToV4: legacy Part id mismatch", {
            code: "invalid-schema"
        });
        return fa(i.id, i.name, s, a);
    };
    let py;
    py = "featureDocument";
    mx = 2;
    function Do(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    hy = function(e) {
        if (typeof e != "object" || e === null) return !1;
        const t = e;
        if (t.kind !== "feature-document-project-slice" || t.sliceVersion !== 1 && t.sliceVersion !== 2 && t.sliceVersion !== 3 || typeof t.featureDocument != "object" || t.featureDocument === null) return !1;
        const r = Do(t.profiles), n = t.bodyProfiles === void 0 || Do(t.bodyProfiles);
        return t.sliceVersion === 1 ? r : n && (r || Do(t.bodyProfiles));
    };
    my = function(e) {
        if (!hy(e)) throw new H("FeatureDocument project slice is missing or invalid", {
            code: "invalid-schema"
        });
        const t = e.featureDocument.schemaVersion;
        if (e.partModels !== void 0) {
            if (e.sliceVersion !== 3 || e.partModels.schemaVersion !== 1 || !Array.isArray(e.partModels.models)) throw new H("Unsupported PartModel project payload", {
                code: "unsupported-version"
            });
            const r = e.partModels.models.map(Vt);
            if (new Set(r.map((n)=>n.partId)).size !== r.length) throw new H("Duplicate PartModel ownership", {
                code: "invalid-schema"
            });
        } else if (e.sliceVersion === 3) throw new H("Slice v3 requires PartModel roots", {
            code: "invalid-schema"
        });
        if (t !== 1 && t !== zn && t !== 3 && t !== Hr) throw new H(`FeatureDocument project slice has unsupported schemaVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (e.derivedCache && e.derivedCache.kind !== "derivedCache") throw new H('FeatureDocument project slice derivedCache must set kind: "derivedCache"', {
            code: "invalid-schema"
        });
        if (e.derivedCache && delete e.derivedCache, e.sketchDocument != null) {
            const r = e.sketchDocument;
            if (typeof r.schemaVersion != "number" || typeof r.id != "string" || typeof r.revision != "number" || !Array.isArray(r.sketches)) throw new H("FeatureDocument project slice sketchDocument is invalid", {
                code: "invalid-schema"
            });
        }
        return e.profiles == null && (e.profiles = {}), e;
    };
    yx = function(e) {
        if (typeof e != "object" || e === null) return null;
        const t = e[py];
        return t == null ? null : my(t);
    };
    function Rr(e, t = 0) {
        if (t > 14 || e == null) return !1;
        if (ArrayBuffer.isView(e)) return !0;
        if (Array.isArray(e)) return e.some((r)=>Rr(r, t + 1));
        if (typeof e != "object") return !1;
        for (const r of Object.values(e))if (Rr(r, t + 1)) return !0;
        return !1;
    }
    yy = function(e) {
        if (e == null || typeof e != "object") return !1;
        const t = e;
        return !!(t.derivedCache != null || t.tessellation != null || t.tipMesh != null || t.meshes != null || t.meshCache != null || Rr(t.profiles) || Rr(t.bodyProfiles) || Rr(t.derivedCache) || Rr(t.featureDocument));
    };
    gx = function(e, t = "project slice") {
        if (yy(e)) throw new Error(`${t} contains display geometry (tessellation/mesh typed arrays or derivedCache). Only OCC-rebuildable semantic objects may be persisted.`);
    };
    ci = function(e, t) {
        const r = e.subMeshes?.find((a)=>a.key === t);
        if (!r || r.indexCount < 3) throw new Error("参考面不存在，请重新选择");
        const n = [];
        for(let a = r.firstIndex; a < r.firstIndex + r.indexCount; a++){
            const d = e.indices[a] * 3;
            n.push([
                e.positions[d],
                e.positions[d + 1],
                e.positions[d + 2]
            ]);
        }
        let i;
        for(let a = 0; a + 2 < n.length; a += 3){
            const [d, l, c] = n.slice(a, a + 3), f = l.map((I, g)=>I - d[g]), u = c.map((I, g)=>I - d[g]), h = [
                f[1] * u[2] - f[2] * u[1],
                f[2] * u[0] - f[0] * u[2],
                f[0] * u[1] - f[1] * u[0]
            ], y = Math.hypot(...h);
            if (y > 1e-10) {
                i = h.map((I)=>I / y);
                break;
            }
        }
        if (!i) throw new Error("无法从退化面创建平面");
        const o = n.reduce((a, d)=>a.map((l, c)=>l + d[c] / n.length), [
            0,
            0,
            0
        ]), s = Math.max(1, ...n.map((a)=>Math.hypot(...a.map((d, l)=>d - o[l]))));
        if (n.some((a)=>Math.abs(a.reduce((d, l, c)=>d + (l - o[c]) * i[c], 0)) > s * 1e-6)) throw new Error("请选择平面 Face，曲面不能作为此平面的参考");
        return {
            origin: o,
            normal: i
        };
    };
    const ol = 256 * 1024;
    function tt(e) {
        const t = new Set, r = [], n = (i)=>{
            if (!i) return;
            const o = i.buffer;
            t.has(o) || (t.add(o), r.push(o));
        };
        return n(e.positions), n(e.normals), n(e.indices), n(e.uvs), n(e.colors), r;
    }
    function sl(e) {
        return tt(e).reduce((t, r)=>t + r.byteLength, 0);
    }
    function gy(e) {
        return sl(e) >= ol;
    }
    const Xr = 1;
    function pa(e) {
        const t = e;
        return !t || t.protocolVersion !== Xr || !t.requestId || !t.bodyId || !t.featureId || !Number.isInteger(t.revision) || t.revision < 0 || !Number.isFinite(t.deadlineMs) || !t.operation || !t.payload ? {
            code: "protocol-invalid",
            message: "Invalid OCC request envelope",
            recoverable: !1
        } : [
            "ping",
            "extrude",
            "revolve"
        ].includes(t.operation) ? null : {
            code: "protocol-invalid",
            message: `Unsupported OCC operation ${String(t.operation)}`,
            recoverable: !1
        };
    }
    function Iy(e) {
        return e.mesh;
    }
    const Dr = Xr;
    function by(e) {
        return pa(e);
    }
    function wy(e) {
        return e === Dr;
    }
    function al(e) {
        return {
            type: "hello",
            protocolVersion: Dr,
            capabilities: e
        };
    }
    function dl(e) {
        if (!e || typeof e != "object" || e.type !== "hello") return {
            accepted: !1,
            protocolVersion: Dr,
            reason: "invalid hello"
        };
        const t = e.protocolVersion;
        return t === Dr ? {
            accepted: !0,
            protocolVersion: t
        } : {
            accepted: !1,
            protocolVersion: Dr,
            reason: `unsupported protocol version ${t}`
        };
    }
    function xy(e) {
        if (!e || typeof e != "object") return [];
        const t = [];
        for (const r of Object.values(e))r instanceof ArrayBuffer ? t.push(r) : ArrayBuffer.isView(r) && t.push(r.buffer.slice(0));
        return t;
    }
    function Sy(e, t) {
        return e.requestId === t.requestId && t.revision >= e.revision;
    }
    class ky {
        constructor(t){
            this.client = t;
        }
        client;
        negotiated = !1;
        negotiate() {
            const t = dl(al({
                operations: [
                    "body-replay"
                ],
                transfers: !0
            }));
            if (!t.accepted) throw new Error(t.reason ?? "OCC protocol negotiation failed");
            this.negotiated = !0;
        }
        async replay(t) {
            return this.negotiated || this.negotiate(), this.client.replayBody(t);
        }
        dispose() {
            this.client.dispose();
        }
    }
    class vy {
        active = new Map;
        begin(t, r, n) {
            const i = new AbortController;
            return this.active.set(t, i), {
                requestId: t,
                revision: r,
                signal: i.signal,
                deadlineMs: n
            };
        }
        cancel(t) {
            const r = this.active.get(t);
            return r ? (r.abort(), this.active.delete(t), !0) : !1;
        }
        settle(t) {
            this.active.delete(t);
        }
        cancelAll() {
            for (const t of this.active.keys())this.cancel(t);
        }
    }
    class Fy {
        state = {
            generation: 1,
            restarts: 0
        };
        current() {
            return this.state;
        }
        restart(t) {
            return this.state = {
                generation: this.state.generation + 1,
                restarts: this.state.restarts + 1,
                lastReason: t
            }, this.state;
        }
        accepts(t) {
            return t === this.state.generation;
        }
    }
    class Si extends Error {
        constructor(t){
            super(t), this.name = "FeatureBuildHandlerRegistryError";
        }
    }
    class cl {
        handlers = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new Si("Feature build handler registry is frozen");
            if (!t.typeId.trim()) throw new Si("Feature build handler typeId is required");
            if (this.handlers.has(t.typeId)) throw new Si(`Duplicate Feature build handler: ${t.typeId}`);
            this.handlers.set(t.typeId, t);
            let r = !1;
            return ()=>{
                r || (r = !0, this.handlers.get(t.typeId) === t && this.handlers.delete(t.typeId));
            };
        }
        get(t) {
            return this.handlers.get(t);
        }
        freeze() {
            return this.frozen = !0, this;
        }
        isFrozen() {
            return this.frozen;
        }
        async dispatch(t) {
            const r = this.get(t.typeId);
            if (!r) return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "unsupported",
                diagnostics: [
                    {
                        severity: "error",
                        code: "feature-build-handler-missing",
                        message: `Missing Feature build handler: ${t.typeId}`
                    }
                ]
            });
            try {
                const n = await r.build(t);
                if (n.featureId !== t.featureId || n.featureRevision !== t.featureRevision) throw new Error("Feature build handler returned mismatched identity or revision");
                return n;
            } catch (n) {
                return xe({
                    featureId: t.featureId,
                    featureRevision: t.featureRevision,
                    featurePayloadVersion: t.featurePayloadVersion,
                    status: "failed",
                    diagnostics: [
                        {
                            severity: "error",
                            code: "feature-build-handler-failed",
                            message: n instanceof Error ? n.message : String(n)
                        }
                    ]
                });
            }
        }
    }
    class _y {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "box";
        async build(t) {
            const r = await this.kernel.build(t);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...r.solidData,
                            primitiveType: this.typeId,
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: "solid",
                                semanticId: "solid:result"
                            }
                        }
                    }
                },
                diagnostics: r.diagnostics
            });
        }
    }
    function ki(e) {
        return Kr({
            deleted: [
                e
            ]
        }).deleted[0];
    }
    function xr(e) {
        const t = ki(e);
        return [
            t.producerFeatureId,
            t.outputKey,
            t.semanticId
        ].join("\0");
    }
    function Wt(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function Ey(e) {
        const t = Kr({
            deleted: e.outputIdentities
        }).deleted, r = new Set(t.map(xr)), n = new Set, i = [], o = [], s = [];
        for (const a of e.evidence){
            const d = ki(a.input), l = xr(d);
            if (n.has(l)) throw new Error(`Duplicate Boolean history classification for ${Wt(d)}`);
            if (n.add(l), a.outcome === "retained") {
                const c = ki(a.output);
                if (xr(d) !== xr(c)) throw new Error(`Boolean retained evidence changed identity ${Wt(d)}`);
                if (!r.has(xr(c))) throw new Error(`Boolean retained output is missing: ${Wt(c)}`);
                continue;
            }
            if (a.outcome === "modified") {
                if (a.outputs.length === 0) throw new Error(`Boolean modified evidence has no outputs: ${Wt(d)}`);
                for (const c of a.outputs){
                    const f = ki(c);
                    if (!r.has(xr(f))) throw new Error(`Boolean modified output is missing: ${Wt(f)}`);
                }
                i.push({
                    input: a.input,
                    outputs: a.outputs
                });
                continue;
            }
            if (a.outcome === "deleted") {
                o.push(a.input);
                continue;
            }
            if (!a.reason.trim()) throw new Error(`Boolean unresolved history reason is required for ${Wt(d)}`);
            s.push(Object.freeze({
                severity: "warning",
                code: "boolean-history-unresolved",
                message: `Boolean ${e.operation} could not prove topology identity for ${Wt(d)}: ${a.reason}`,
                details: {
                    operation: e.operation,
                    producerFeatureId: d.producerFeatureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }
            }));
        }
        return Object.freeze({
            history: Kr({
                modified: i,
                deleted: o
            }),
            outputIdentities: t,
            diagnostics: Object.freeze(s)
        });
    }
    function Ay(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function To(e, t) {
        if (typeof e != "string" || !e.trim()) throw new Error(`Topology reference ${t} must be a non-empty string`);
        return e;
    }
    function ld(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`Topology reference ${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function dr(e, t, r) {
        if (!Ay(e)) throw new Error(`${r} must be a topology reference object`);
        if (Object.hasOwn(e, "occEdgeOrdinal")) throw new Error(`${r} cannot contain a runtime OCC ordinal`);
        if (e.subshapeKind !== t) throw new Error(`${r}.subshapeKind must be ${t}`);
        const n = e.hintCentroid === void 0 ? void 0 : ld(e.hintCentroid, `${r}.hintCentroid`), i = e.samplePoints === void 0 ? void 0 : Array.isArray(e.samplePoints) ? Object.freeze(e.samplePoints.map((o, s)=>ld(o, `${r}.samplePoints[${s}]`))) : (()=>{
            throw new Error(`${r}.samplePoints must be an array`);
        })();
        return Object.freeze({
            producerFeatureId: To(e.producerFeatureId, `${r}.producerFeatureId`),
            outputKey: To(e.outputKey, `${r}.outputKey`),
            subshapeKind: t,
            semanticId: To(e.semanticId, `${r}.semanticId`),
            ...n ? {
                hintCentroid: n
            } : {},
            ...i ? {
                samplePoints: i
            } : {}
        });
    }
    function cr(e, t, r) {
        if (!Array.isArray(e)) throw new Error(`${r} must be an array`);
        return Object.freeze(e.map((n, i)=>dr(n, t, `${r}[${i}]`)));
    }
    function Oy(e, t, r) {
        const n = r.status === "lost" ? "topology-reference-lost" : "topology-reference-ambiguous";
        return xe({
            featureId: e.featureId,
            featureRevision: e.featureRevision,
            featurePayloadVersion: e.featurePayloadVersion,
            status: "failed",
            diagnostics: [
                {
                    severity: "error",
                    code: n,
                    message: r.diagnostic.message,
                    details: {
                        producerFeatureId: t.producerFeatureId,
                        outputKey: t.outputKey,
                        subshapeKind: t.subshapeKind,
                        semanticId: t.semanticId,
                        method: r.diagnostic.method,
                        predicateVersion: r.diagnostic.predicateVersion,
                        candidateCount: r.diagnostic.candidateCount,
                        qualifiedCandidateCount: r.diagnostic.qualifiedCandidateCount
                    }
                }
            ]
        });
    }
    async function yr(e, t, r) {
        const n = [];
        for (const i of t){
            const o = await r.resolve(i);
            if (o.status !== "resolved") return Object.freeze({
                status: "failed",
                result: Oy(e, i, o)
            });
            n.push(o.value);
        }
        return Object.freeze({
            status: "resolved",
            values: Object.freeze(n)
        });
    }
    function ha(e, t, r, n) {
        return xe({
            featureId: e.featureId,
            featureRevision: e.featureRevision,
            featurePayloadVersion: e.featurePayloadVersion,
            status: "success",
            primaryOutputKey: "solid",
            outputs: {
                solid: {
                    outputKey: "solid",
                    kind: "solid",
                    data: {
                        ...r,
                        operation: t,
                        semanticIdentity: {
                            producerFeatureId: e.featureId,
                            outputKey: "solid",
                            semanticId: "solid:result"
                        }
                    }
                }
            },
            diagnostics: n
        });
    }
    function Py(e) {
        const t = e.parameters.operation;
        if (t !== "union" && t !== "cut" && t !== "intersect") throw new Error(`Unsupported Boolean operation: ${String(t)}`);
        return t;
    }
    function Bo(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class My {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "boolean";
        async build(t) {
            const r = [
                dr(t.references.target, "solid", "references.target"),
                dr(t.references.tool, "solid", "references.tool")
            ], n = await yr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = Py(t), o = await this.kernel.build(t, n.values), s = Ey({
                operation: i,
                outputIdentities: o.outputIdentities,
                evidence: o.historyEvidence
            }), a = {
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            };
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...o.solidData,
                            operation: i,
                            semanticIdentity: a,
                            topologyIdentities: s.outputIdentities
                        }
                    }
                },
                shapeHistory: {
                    generated: [],
                    modified: s.history.modified.map((d)=>({
                            inputSemanticId: Bo(d.input),
                            outputSemanticIds: d.outputs.map(Bo)
                        })),
                    deleted: s.history.deleted.map(Bo)
                },
                diagnostics: s.diagnostics
            });
        }
    }
    class Ry {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "chamfer";
        async build(t) {
            const r = cr(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await yr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return ha(t, "chamfer", i.solidData, i.diagnostics);
        }
    }
    class Cy {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "cone";
        async build(t) {
            const r = await this.kernel.build(t);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...r.solidData,
                            primitiveType: this.typeId,
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: "solid",
                                semanticId: "solid:result"
                            }
                        }
                    }
                },
                diagnostics: r.diagnostics
            });
        }
    }
    const $y = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, Dy = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function wt(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function ud(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function fd(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                inputSemanticId: wt(t.input),
                outputSemanticIds: Object.freeze(t.outputs.map(wt))
            })));
    }
    function Ty(e) {
        const t = e.topologyOutputs.map((d, l)=>Object.freeze({
                outputKey: ud(d.outputKey, $y, `topologyOutputs[${l}].outputKey`),
                kind: d.kind,
                semanticId: ud(d.semanticId, Dy, `topologyOutputs[${l}].semanticId`),
                ...d.data ? {
                    data: d.data
                } : {}
            })), r = t.map((d)=>d.outputKey);
        if (r.includes("solid")) throw new Error("Runner topology output key solid is reserved");
        if (new Set(r).size !== r.length) throw new Error("Runner topology output keys must be unique");
        const n = Kr(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Runner requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((d)=>wt({
                    producerFeatureId: e.featureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }))
        ]), s = new Set;
        for (const d of [
            ...n.generated,
            ...n.modified
        ])for (const l of d.outputs){
            const c = wt(l);
            if (!o.has(c)) throw new Error(`ShapeHistory output ${c} is not a published runner output`);
            s.add(c);
        }
        for (const d of o)if (!s.has(d)) throw new Error(`Published runner output ${d} has no ShapeHistory evidence`);
        const a = new Set([
            ...n.generated.map((d)=>wt(d.input)),
            ...n.modified.map((d)=>wt(d.input)),
            ...n.deleted.map(wt)
        ]);
        for (const d of e.sourceReferences){
            const l = wt(d);
            if (!a.has(l)) throw new Error(`Runner input ${l} has no explicit ShapeHistory evidence`);
        }
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: fd(n.generated),
            modified: fd(n.modified),
            deleted: Object.freeze(n.deleted.map(wt))
        });
    }
    function By(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function vn(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`${t} must be a positive finite number`);
        return e;
    }
    function zy(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function jy(e) {
        if (e !== "frenet" && e !== "fixed" && e !== "surface_normal") throw new Error("parameters.orientation must be frenet, fixed, or surface_normal");
        return e;
    }
    function Ny(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function Vy(e, t, r, n) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.sectionLaw must contain at least two controls");
        const i = new Set;
        let o = -1 / 0;
        const s = e.map((a, d)=>{
            if (!By(a)) throw new Error(`parameters.sectionLaw[${d}] must be an object`);
            const l = zy(a.id, `parameters.sectionLaw[${d}].id`);
            if (i.has(l)) throw new Error(`parameters.sectionLaw contains duplicate id ${l}`);
            if (i.add(l), typeof a.position != "number" || !Number.isFinite(a.position) || a.position < 0 || a.position > 1) throw new Error(`parameters.sectionLaw[${d}].position must be finite and between 0 and 1`);
            if (a.position <= o) throw new Error("parameters.sectionLaw positions must be strictly increasing");
            o = a.position;
            const c = vn(a.widthScale, `parameters.sectionLaw[${d}].widthScale`), f = vn(a.heightScale, `parameters.sectionLaw[${d}].heightScale`), u = t * c * r * f, h = Math.max(1, n) * 1e-9;
            if (Math.abs(u - n) > h) throw new Error(`parameters.sectionLaw[${d}] violates area constraint ${n}`);
            return Object.freeze({
                id: l,
                position: a.position,
                widthScale: c,
                heightScale: f
            });
        });
        if (s[0].position !== 0 || s[s.length - 1].position !== 1) throw new Error("parameters.sectionLaw must cover positions 0 and 1");
        return Object.freeze(s);
    }
    function pd(e, t, r) {
        if (e.length < r) throw new Error(`${t} must contain at least ${r} references`);
        const n = e.map((i)=>[
                i.producerFeatureId,
                i.outputKey,
                i.subshapeKind,
                i.semanticId
            ].join("\0"));
        if (new Set(n).size !== n.length) throw new Error(`${t} must not contain duplicates`);
        return e;
    }
    function zo(e, t) {
        return Object.freeze({
            reference: e,
            value: t
        });
    }
    class Ky {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "custom-die-casting-runner";
        async build(t) {
            const r = pd(cr(t.references.profileCurveReferences, "edge", "references.profileCurveReferences"), "references.profileCurveReferences", 2), n = dr(t.references.spineReference, "edge", "references.spineReference"), i = pd(cr(t.references.surfaceReferences, "face", "references.surfaceReferences"), "references.surfaceReferences", 1), o = vn(t.parameters.width, "parameters.width"), s = vn(t.parameters.height, "parameters.height"), a = vn(t.parameters.areaConstraint, "parameters.areaConstraint"), d = Vy(t.parameters.sectionLaw, o, s, a), l = jy(t.parameters.orientation), c = Ny(t.parameters.continuity), f = Object.freeze([
                ...r,
                n,
                ...i
            ]), u = await yr(t, f, this.references);
            if (u.status === "failed") return u.result;
            const h = r.length, y = Object.freeze(r.map((w, S)=>zo(w, u.values[S]))), I = zo(n, u.values[h]), g = Object.freeze(i.map((w, S)=>zo(w, u.values[h + 1 + S]))), x = await this.kernel.build(t, Object.freeze({
                profileCurves: y,
                spine: I,
                surfaces: g,
                width: o,
                height: s,
                areaConstraint: a,
                sectionLaw: d,
                orientation: l,
                continuity: c
            })), v = Ty({
                featureId: t.featureId,
                sourceReferences: f,
                topologyOutputs: x.topologyOutputs,
                historyEvidence: x.historyEvidence
            }), b = v.topologyOutputs.map((w)=>Object.freeze({
                    producerFeatureId: t.featureId,
                    outputKey: w.outputKey,
                    semanticId: w.semanticId
                })), m = Object.fromEntries([
                [
                    "solid",
                    {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...x.solidData,
                            operation: "custom-die-casting-runner",
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: "solid",
                                semanticId: "solid:result"
                            },
                            topologyIdentities: b
                        }
                    }
                ],
                ...v.topologyOutputs.map((w)=>[
                        w.outputKey,
                        {
                            outputKey: w.outputKey,
                            kind: w.kind,
                            data: {
                                ...w.data,
                                semanticIdentity: {
                                    producerFeatureId: t.featureId,
                                    outputKey: w.outputKey,
                                    semanticId: w.semanticId
                                }
                            }
                        }
                    ])
            ]);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: m,
                shapeHistory: {
                    generated: v.generated,
                    modified: v.modified,
                    deleted: v.deleted
                },
                diagnostics: x.diagnostics
            });
        }
    }
    class Ly {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "cylinder";
        async build(t) {
            const r = await this.kernel.build(t);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...r.solidData,
                            primitiveType: this.typeId,
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: "solid",
                                semanticId: "solid:result"
                            }
                        }
                    }
                },
                diagnostics: r.diagnostics
            });
        }
    }
    function hd(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class Hy {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "draft";
        async build(t) {
            const r = await this.kernel.build(t), n = Object.freeze({
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            });
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...r.solidData,
                            operation: "draft",
                            semanticIdentity: n
                        }
                    }
                },
                shapeHistory: {
                    generated: [],
                    modified: [
                        {
                            inputSemanticId: hd(r.modifiedInput),
                            outputSemanticIds: [
                                hd(n)
                            ]
                        }
                    ],
                    deleted: []
                },
                diagnostics: r.diagnostics
            });
        }
    }
    function qy(e) {
        return e.replaceAll("_", "-");
    }
    function md(e) {
        return e.startsWith("side_") || /^hole_\d+_side_\d+$/.test(e);
    }
    function Uy(e, t, r) {
        return {
            producerFeatureId: e,
            outputKey: t,
            semanticId: r
        };
    }
    function Wy(e) {
        const t = new Map;
        for (const c of e.faces){
            if (!c.role.trim()) throw new Error("Extrude face role must not be empty");
            if (t.has(c.role)) throw new Error(`Duplicate Extrude face role: ${c.role}`);
            t.set(c.role, c);
        }
        for (const c of [
            "top",
            "bottom"
        ])if (!t.has(c)) throw new Error(`Extrude topology is missing required ${c} face`);
        const r = new Map;
        for (const c of e.profile.sides){
            if (r.has(c.outputRole)) throw new Error(`Duplicate Extrude profile side mapping: ${c.outputRole}`);
            r.set(c.outputRole, c);
        }
        const n = [
            ...t.keys()
        ].filter(md).sort();
        if (n.length === 0) throw new Error("Extrude topology must contain at least one side face");
        for (const c of n)if (!r.has(c)) throw new Error(`Extrude side face ${c} has no explicit profile semantic source`);
        for (const c of r.keys())if (!t.has(c) || !md(c)) throw new Error(`Extrude profile semantic source targets missing side face ${c}`);
        const i = [], o = (c, f, u, h, y = {})=>{
            const I = Uy(e.featureId, c, u);
            return i.push([
                c,
                {
                    outputKey: c,
                    kind: f,
                    data: {
                        ...y,
                        role: h,
                        semanticIdentity: I
                    }
                }
            ]), I;
        }, s = o("solid", "solid", "solid:result", "solid", e.solidData), a = o("top", "topology-face", "face:top", "top", t.get("top")?.data), d = o("bottom", "topology-face", "face:bottom", "bottom", t.get("bottom")?.data), l = [
            {
                input: {
                    producerFeatureId: e.profile.producerFeatureId,
                    outputKey: e.profile.outputKey,
                    semanticId: e.profile.wireSemanticId
                },
                outputs: [
                    s,
                    a,
                    d
                ]
            }
        ];
        for (const c of n){
            const f = qy(c), u = o(f, "topology-face", `face:${c}`, c, t.get(c)?.data), h = r.get(c);
            l.push({
                input: {
                    producerFeatureId: e.profile.producerFeatureId,
                    outputKey: e.profile.outputKey,
                    semanticId: h.inputSemanticId
                },
                outputs: [
                    u
                ]
            });
        }
        return Object.freeze({
            outputs: Object.freeze(Object.fromEntries(i)),
            shapeHistory: Kr({
                generated: l
            })
        });
    }
    function yd(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function dn(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`Extrude profile semantic reference ${t} is required`);
        return e;
    }
    function Gy(e) {
        if (!yd(e) || !Array.isArray(e.sides)) throw new Error("Extrude request requires references.profile with explicit semantic sides");
        const t = e.sides.map((r, n)=>{
            if (!yd(r)) throw new Error(`Extrude profile semantic side ${n} must be an object`);
            return Object.freeze({
                inputSemanticId: dn(r.inputSemanticId, `sides[${n}].inputSemanticId`),
                outputRole: dn(r.outputRole, `sides[${n}].outputRole`)
            });
        });
        return Object.freeze({
            producerFeatureId: dn(e.producerFeatureId, "producerFeatureId"),
            outputKey: dn(e.outputKey, "outputKey"),
            wireSemanticId: dn(e.wireSemanticId, "wireSemanticId"),
            sides: Object.freeze(t)
        });
    }
    function gd(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class Yy {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "extrude";
        async build(t) {
            const r = await this.kernel.build(t), n = Wy({
                featureId: t.featureId,
                profile: Gy(t.references.profile),
                solidData: r.solidData,
                faces: r.faces
            });
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: n.outputs,
                shapeHistory: {
                    generated: n.shapeHistory.generated.map((i)=>({
                            inputSemanticId: gd(i.input),
                            outputSemanticIds: i.outputs.map(gd)
                        })),
                    modified: [],
                    deleted: []
                }
            });
        }
    }
    class Jy {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "fillet";
        async build(t) {
            const r = cr(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await yr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return ha(t, "fillet", i.solidData, i.diagnostics);
        }
    }
    class Xy {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "sphere";
        async build(t) {
            const r = await this.kernel.build(t);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: {
                    solid: {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...r.solidData,
                            primitiveType: this.typeId,
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: "solid",
                                semanticId: "solid:result"
                            }
                        }
                    }
                },
                diagnostics: r.diagnostics
            });
        }
    }
    class Zy {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "thickness";
        async build(t) {
            const r = cr(t.references.removedFaceSelectors, "face", "references.removedFaceSelectors");
            if (r.length === 0) throw new Error("Thickness requires at least one removed face reference");
            const n = await yr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return ha(t, "thickness", i.solidData, i.diagnostics);
        }
    }
    const Qy = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, eg = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function ct(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function Id(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function tg(e) {
        return ct(e);
    }
    function rg(e) {
        const t = e.topologyOutputs.map((c, f)=>Object.freeze({
                outputKey: Id(c.outputKey, Qy, `topologyOutputs[${f}].outputKey`),
                kind: c.kind,
                semanticId: Id(c.semanticId, eg, `topologyOutputs[${f}].semanticId`),
                ...c.data ? {
                    data: c.data
                } : {}
            })), r = t.map((c)=>c.outputKey);
        if (r.includes("solid")) throw new Error("topology output key solid is reserved for the primary output");
        if (new Set(r).size !== r.length) throw new Error("Variable-radius fillet topology output keys must be unique");
        const n = Kr(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Variable-radius fillet requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((c)=>ct({
                    producerFeatureId: e.featureId,
                    outputKey: c.outputKey,
                    semanticId: c.semanticId
                }))
        ]), s = new Set;
        for (const c of [
            ...n.generated,
            ...n.modified
        ])for (const f of c.outputs){
            const u = ct(f);
            if (!o.has(u)) throw new Error(`ShapeHistory output ${u} is not a published variable-radius fillet output`);
            s.add(u);
        }
        if (!s.has(i)) throw new Error("ShapeHistory must map the primary solid output explicitly");
        for (const c of o)if (!s.has(c)) throw new Error(`Published output ${c} has no ShapeHistory evidence`);
        if (!n.modified.some((c)=>c.input.producerFeatureId === e.baseFeatureId && c.outputs.some((f)=>ct(f) === i))) throw new Error("ShapeHistory must explicitly modify the selected base into the solid output");
        const d = new Set([
            ...n.generated.map((c)=>ct(c.input)),
            ...n.modified.map((c)=>ct(c.input)),
            ...n.deleted.map(ct)
        ]);
        for (const c of e.selectedEdges){
            const f = tg(c);
            if (!d.has(f)) throw new Error(`Selected edge ${f} has no explicit ShapeHistory evidence`);
        }
        const l = (c)=>Object.freeze(c.map((f)=>Object.freeze({
                    inputSemanticId: ct(f.input),
                    outputSemanticIds: Object.freeze(f.outputs.map(ct))
                })));
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: l(n.generated),
            modified: l(n.modified),
            deleted: Object.freeze(n.deleted.map(ct))
        });
    }
    function ng(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function ll(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function ig(e) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.radiusLaw must contain at least two controls");
        const t = new Set;
        let r = -1 / 0;
        const n = e.map((i, o)=>{
            if (!ng(i)) throw new Error(`parameters.radiusLaw[${o}] must be an object`);
            const s = ll(i.id, `parameters.radiusLaw[${o}].id`);
            if (t.has(s)) throw new Error(`parameters.radiusLaw contains duplicate id ${s}`);
            if (t.add(s), typeof i.position != "number" || !Number.isFinite(i.position) || i.position < 0 || i.position > 1) throw new Error(`parameters.radiusLaw[${o}].position must be finite and between 0 and 1`);
            if (typeof i.radius != "number" || !Number.isFinite(i.radius) || i.radius <= 0) throw new Error(`parameters.radiusLaw[${o}].radius must be positive`);
            if (i.position <= r) throw new Error("parameters.radiusLaw positions must be strictly increasing");
            return r = i.position, Object.freeze({
                id: s,
                position: i.position,
                radius: i.radius
            });
        });
        if (n[0].position !== 0 || n[n.length - 1].position !== 1) throw new Error("parameters.radiusLaw must cover positions 0 and 1");
        return Object.freeze(n);
    }
    function og(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function sg(e) {
        const t = e.map((r)=>[
                r.producerFeatureId,
                r.outputKey,
                r.subshapeKind,
                r.semanticId
            ].join("\0"));
        if (new Set(t).size !== t.length) throw new Error("references.edgeReferences must not contain duplicates");
        if (e.length === 0) throw new Error("references.edgeReferences must contain at least one edge");
        return e;
    }
    class ag {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "variable-radius-fillet";
        async build(t) {
            const r = ll(t.references.baseFeatureId, "references.baseFeatureId"), n = sg(cr(t.references.edgeReferences, "edge", "references.edgeReferences")), i = ig(t.parameters.radiusLaw), o = og(t.parameters.continuity);
            if (typeof t.parameters.tangentPropagation != "boolean") throw new Error("parameters.tangentPropagation must be boolean");
            const s = await yr(t, n, this.references);
            if (s.status === "failed") return s.result;
            const a = Object.freeze(n.map((h, y)=>Object.freeze({
                    reference: h,
                    value: s.values[y]
                }))), d = await this.kernel.build(t, Object.freeze({
                baseFeatureId: r,
                edges: a,
                radiusLaw: i,
                continuity: o,
                tangentPropagation: t.parameters.tangentPropagation
            })), l = rg({
                featureId: t.featureId,
                baseFeatureId: r,
                selectedEdges: n,
                topologyOutputs: d.topologyOutputs,
                historyEvidence: d.historyEvidence
            }), c = Object.freeze({
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            }), f = l.topologyOutputs.map((h)=>Object.freeze({
                    producerFeatureId: t.featureId,
                    outputKey: h.outputKey,
                    semanticId: h.semanticId
                })), u = Object.fromEntries([
                [
                    "solid",
                    {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...d.solidData,
                            operation: "variable-radius-fillet",
                            semanticIdentity: c,
                            topologyIdentities: f
                        }
                    }
                ],
                ...l.topologyOutputs.map((h)=>[
                        h.outputKey,
                        {
                            outputKey: h.outputKey,
                            kind: h.kind,
                            data: {
                                ...h.data,
                                semanticIdentity: {
                                    producerFeatureId: t.featureId,
                                    outputKey: h.outputKey,
                                    semanticId: h.semanticId
                                }
                            }
                        }
                    ])
            ]);
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: u,
                shapeHistory: {
                    generated: l.generated,
                    modified: l.modified,
                    deleted: l.deleted
                },
                diagnostics: d.diagnostics
            });
        }
    }
    function dg(e, t) {
        const r = {};
        return e.forEach((n, i)=>{
            (r[n.field] ??= []).push(t[i]);
        }), Object.freeze(Object.fromEntries(Object.entries(r).map(([n, i])=>[
                n,
                Object.freeze(i)
            ])));
    }
    class ma {
        constructor(t, r, n){
            if (this.spec = t, this.kernel = r, this.references = n, this.typeId = t.typeId, t.outputs.length === 0) throw new Error(`Feature handler ${t.typeId} requires a semantic output`);
            if (!t.outputs.some((i)=>i.outputKey === t.primaryOutputKey)) throw new Error(`Feature handler ${t.typeId} primary output ${t.primaryOutputKey} is not declared`);
        }
        spec;
        kernel;
        references;
        typeId;
        async build(t) {
            const r = Object.freeze([
                ...this.spec.collectTopologyReferences?.(t) ?? []
            ]), n = await yr(t, r.map((a)=>a.reference), this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, dg(r, n.values)), o = new Set(this.spec.outputs.map((a)=>a.outputKey));
            for (const a of Object.keys(i.outputData ?? {}))if (!o.has(a)) throw new Error(`Feature handler ${this.typeId} kernel returned undeclared output ${a}`);
            const s = Object.fromEntries(this.spec.outputs.map((a)=>[
                    a.outputKey,
                    {
                        outputKey: a.outputKey,
                        kind: a.kind,
                        data: {
                            ...i.outputData?.[a.outputKey] ?? {},
                            featureType: this.typeId,
                            semanticIdentity: {
                                producerFeatureId: t.featureId,
                                outputKey: a.outputKey,
                                semanticId: `${a.kind}:result`
                            }
                        }
                    }
                ]));
            return xe({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: this.spec.primaryOutputKey,
                outputs: s,
                shapeHistory: i.shapeHistory,
                diagnostics: i.diagnostics,
                metrics: i.metrics
            });
        }
    }
    const cg = Object.freeze({
        sketch: {
            typeId: "sketch",
            outputs: [
                {
                    outputKey: "profile",
                    kind: "profile"
                }
            ],
            primaryOutputKey: "profile"
        },
        datum_plane: {
            typeId: "datum_plane",
            outputs: [
                {
                    outputKey: "plane",
                    kind: "datum-plane"
                }
            ],
            primaryOutputKey: "plane",
            collectTopologyReferences: (e)=>{
                const t = e.references.faceSelector;
                return t == null ? [] : [
                    {
                        field: "faceSelector",
                        reference: dr(t, "face", "references.faceSelector")
                    }
                ];
            }
        },
        datum_axis: {
            typeId: "datum_axis",
            outputs: [
                {
                    outputKey: "axis",
                    kind: "datum-axis"
                }
            ],
            primaryOutputKey: "axis"
        },
        shape_binder: {
            typeId: "shape_binder",
            outputs: [
                {
                    outputKey: "shape",
                    kind: "shape"
                }
            ],
            primaryOutputKey: "shape"
        },
        import: {
            typeId: "import",
            outputs: [
                {
                    outputKey: "solid",
                    kind: "solid"
                }
            ],
            primaryOutputKey: "solid"
        }
    });
    function lg(e, t) {
        const r = (n)=>new ma(cg[n], e[n], t);
        return Object.freeze({
            sketch: r("sketch"),
            datum_plane: r("datum_plane"),
            datum_axis: r("datum_axis"),
            shape_binder: r("shape_binder"),
            import: r("import")
        });
    }
    function ug(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function bd(e) {
        const t = e.references.toolRef;
        if (!ug(t)) throw new Error("references.toolRef must be an object");
        if (Object.hasOwn(t, "subshapeKind")) return [
            {
                field: "toolRef",
                reference: dr(t, "face", "references.toolRef")
            }
        ];
        if (t.kind === "world_plane" || t.kind === "datum_plane") return [];
        if (t.kind === "face") return [
            {
                field: "toolRef",
                reference: dr(t.selector, "face", "references.toolRef.selector")
            }
        ];
        throw new Error(`references.toolRef has unsupported kind ${String(t.kind)}`);
    }
    function fg(e) {
        return cr(e.references.faceSelectors, "face", "references.faceSelectors").map((t)=>({
                field: "faceSelectors",
                reference: t
            }));
    }
    function Mt(e, t) {
        return {
            typeId: e,
            outputs: [
                {
                    outputKey: "solid",
                    kind: "solid"
                }
            ],
            primaryOutputKey: "solid",
            ...t ? {
                collectTopologyReferences: t
            } : {}
        };
    }
    const pg = Object.freeze({
        split: Mt("split", bd),
        trim: Mt("trim", bd),
        face_pull: Mt("face_pull", fg),
        hole: Mt("hole"),
        revolve: Mt("revolve"),
        loft: Mt("loft"),
        pipe: Mt("pipe"),
        helix: {
            typeId: "helix",
            outputs: [
                {
                    outputKey: "path",
                    kind: "curve"
                }
            ],
            primaryOutputKey: "path"
        },
        thread: Mt("thread")
    });
    function hg(e, t) {
        const r = (n)=>new ma(pg[n], e[n], t);
        return Object.freeze({
            split: r("split"),
            trim: r("trim"),
            face_pull: r("face_pull"),
            hole: r("hole"),
            revolve: r("revolve"),
            loft: r("loft"),
            pipe: r("pipe"),
            helix: r("helix"),
            thread: r("thread")
        });
    }
    function li(e) {
        return {
            typeId: e,
            outputs: [
                {
                    outputKey: "solid",
                    kind: "solid"
                }
            ],
            primaryOutputKey: "solid"
        };
    }
    const mg = Object.freeze({
        multi_transform: li("multi_transform"),
        linear_pattern: li("linear_pattern"),
        polar_pattern: li("polar_pattern"),
        mirror: li("mirror")
    });
    function yg(e, t) {
        const r = (n)=>new ma(mg[n], e[n], t);
        return Object.freeze({
            multi_transform: r("multi_transform"),
            linear_pattern: r("linear_pattern"),
            polar_pattern: r("polar_pattern"),
            mirror: r("mirror")
        });
    }
    function gg(e, t) {
        const r = lg(t.referenceFeatures, t.topologyReferences), n = hg(t.operationFeatures, t.topologyReferences), i = yg(t.transformFeatures, t.topologyReferences), o = Object.freeze({
            sketch: r.sketch,
            datum_plane: r.datum_plane,
            datum_axis: r.datum_axis,
            draft: new Hy(t.draft),
            box: new _y(t.box),
            cylinder: new Ly(t.cylinder),
            cone: new Cy(t.cone),
            sphere: new Xy(t.sphere),
            split: n.split,
            trim: n.trim,
            face_pull: n.face_pull,
            multi_transform: i.multi_transform,
            shape_binder: r.shape_binder,
            extrude: new Yy(t.extrude),
            hole: n.hole,
            linear_pattern: i.linear_pattern,
            polar_pattern: i.polar_pattern,
            revolve: n.revolve,
            boolean: new My(t.boolean.kernel, t.boolean.references),
            fillet: new Jy(t.fillet.kernel, t.fillet.references),
            chamfer: new Ry(t.chamfer.kernel, t.chamfer.references),
            thickness: new Zy(t.thickness.kernel, t.thickness.references),
            mirror: i.mirror,
            loft: n.loft,
            pipe: n.pipe,
            helix: n.helix,
            thread: n.thread,
            import: r.import
        }), s = Object.freeze([
            ...Di.map((l)=>o[l]),
            ...t.variableRadiusFillet ? [
                new ag(t.variableRadiusFillet.kernel, t.variableRadiusFillet.references)
            ] : [],
            ...t.customDieCastingRunner ? [
                new Ky(t.customDieCastingRunner.kernel, t.customDieCastingRunner.references)
            ] : []
        ]), a = [];
        try {
            for (const l of s)a.push(e.register(l));
        } catch (l) {
            for (const c of [
                ...a
            ].reverse())c();
            throw l;
        }
        let d = !1;
        return ()=>{
            if (!d) {
                d = !0;
                for (const l of [
                    ...a
                ].reverse())l();
            }
        };
    }
    function pe(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function X(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function U(e) {
        return typeof e == "string" && e.length > 0;
    }
    const Ig = new Set([
        "sketch",
        "import",
        "datum_plane",
        "datum_axis",
        "draft",
        "box",
        "cylinder",
        "cone",
        "sphere",
        "split",
        "trim",
        "face_pull",
        "multi_transform",
        "shape_binder",
        "extrude",
        "hole",
        "linear_pattern",
        "polar_pattern",
        "revolve",
        "boolean",
        "fillet",
        "chamfer",
        "thickness",
        "mirror",
        "loft",
        "pipe",
        "helix",
        "thread"
    ]), bg = new Set([
        "union",
        "cut",
        "common",
        "intersect"
    ]), cn = new Set([
        "add",
        "cut"
    ]), wg = new Set([
        "offset_base",
        "on_face",
        "on_datum",
        "three_point",
        "on_path"
    ]), xg = new Set([
        "xy",
        "xz",
        "yz"
    ]), Sg = new Set([
        "normal",
        "u",
        "v"
    ]);
    function q(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function kg(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function se(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function bo(e) {
        return pe(e) && U(e.featureId) && U(e.role);
    }
    function ya(e) {
        return pe(e) ? e.kind === "world_plane" ? se(e.origin) && se(e.normal) : e.kind === "datum_plane" ? U(e.featureId) : e.kind === "face" ? bo(e.selector) : !1 : !1;
    }
    function vg(e) {
        return ya(e) || pe(e) && e.kind === "edge_chain" && Array.isArray(e.selectors) && e.selectors.length > 0 && e.selectors.every(bo);
    }
    function Fg(e) {
        return pe(e) ? e.kind === "world" ? se(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum_axis" ? U(e.featureId) : e.kind === "plane_normal" ? ya(e.plane) : e.kind === "edge" ? bo(e.selector) : !1 : !1;
    }
    function _g(e, t) {
        return !pe(e) || !U(e.kind) ? q(`Revolve ${t} missing axisRef`, t) : e.kind === "world" ? !se(e.origin) || !se(e.direction) ? q(`Revolve ${t} world axis requires origin/direction`, t) : null : e.kind === "datum" ? !U(e.featureId) || !Sg.has(String(e.axis)) ? q(`Revolve ${t} datum axis requires featureId/axis`, t) : null : e.kind === "datum_axis" ? U(e.featureId) ? null : q(`Revolve ${t} datum axis requires featureId`, t) : q(`Revolve ${t} has unknown axisRef.kind`, t);
    }
    function Sr(e, t, r) {
        if (!pe(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!Array.isArray(e.loops) || e.loops.length === 0) {
            const i = Array.isArray(e.geometry) ? e.geometry : [], o = i.reduce((a, d)=>(pe(d) && typeof d.kind == "string" && (a[d.kind] = (a[d.kind] ?? 0) + 1), a), {}), s = Object.entries(o).map(([a, d])=>`${a}=${d}`).join(", ");
            return {
                code: "missing-profile",
                message: [
                    `Sketch profile ${r} requires non-empty loops`,
                    "stage=UG curve-to-loop builder",
                    `geometryCount=${i.length}`,
                    `geometryKinds=${s || "none"}`,
                    "cause=LINE/ARC endpoints did not form a closed loop or all usable curves were filtered"
                ].join("; "),
                featureId: t,
                recoverable: !1
            };
        }
        for(let i = 0; i < e.loops.length; i++){
            const o = e.loops[i];
            if (!pe(o) || !Array.isArray(o.points) || o.points.length < 3) return {
                code: "missing-profile",
                message: `Sketch profile ${r} loop ${i} requires ≥3 points`,
                featureId: t,
                recoverable: !1
            };
            if (typeof o.isOuter != "boolean") return {
                code: "missing-profile",
                message: `Sketch profile ${r} loop ${i} requires boolean isOuter`,
                featureId: t,
                recoverable: !1
            };
            for (const s of o.points)if (!pe(s) || !X(s.x) || !X(s.y)) return {
                code: "missing-profile",
                message: `Sketch profile ${r} has invalid loop point`,
                featureId: t,
                recoverable: !1
            };
        }
        if (!se(e.origin) || !se(e.normal) || !se(e.uAxis) || !se(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = Hs(e, t);
        return n ? {
            code: "missing-profile",
            message: n.message,
            featureId: t,
            recoverable: !1
        } : null;
    }
    function Eg(e, t, r) {
        if (!pe(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        const n = e;
        try {
            Io(n), Qc(n);
        } catch (i) {
            return {
                code: "missing-profile",
                message: i instanceof Error ? i.message : String(i),
                featureId: t,
                recoverable: !1
            };
        }
        return null;
    }
    function Ag(e, t, r) {
        if (!pe(e)) return {
            code: "missing-profile",
            message: `Missing sketch path profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!se(e.origin) || !se(e.normal) || !se(e.uAxis) || !se(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch path profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = Array.isArray(e.geometry) ? e.geometry.filter((o)=>pe(o) && (o.kind === "line" || o.kind === "bezier" || o.kind === "spline")) : [], i = Array.isArray(e.loops) ? e.loops.find((o)=>pe(o) && o.isOuter)?.points : void 0;
        if (n.length === 0 && (!Array.isArray(i) || i.length < 2)) return {
            code: "missing-profile",
            message: `Sketch path profile ${r} requires open path geometry (line, bezier, spline, or at least two points)`,
            featureId: t,
            recoverable: !1
        };
        for (const o of n){
            const s = o.kind === "line" ? [
                o.start,
                o.end
            ] : o.controls;
            if (!Array.isArray(s) || s.length < 2) return {
                code: "missing-profile",
                message: `Sketch path profile ${r} requires at least two control points`,
                featureId: t,
                recoverable: !1
            };
            for (const a of s)if (!pe(a) || !X(a.x) || !X(a.y)) return {
                code: "missing-profile",
                message: `Sketch path profile ${r} has invalid open path geometry`,
                featureId: t,
                recoverable: !1
            };
        }
        return null;
    }
    function wd(e, t, r) {
        if (!Array.isArray(e)) return q(`${r} ${t} requires edgeSelectors array`, t);
        for (const n of e){
            if (!pe(n) || !U(n.featureId) || !U(n.role)) return q(`${r} ${t} has invalid edge selector`, t);
            if (n.hintCentroid !== void 0 && !se(n.hintCentroid)) return q(`${r} ${t} has invalid edge selector hint`, t);
            if (n.samplePoints !== void 0 && (!Array.isArray(n.samplePoints) || n.samplePoints.length < 2 || n.samplePoints.some((i)=>!se(i)))) return q(`${r} ${t} has invalid edge selector samplePoints`, t);
            if (n.occEdgeOrdinal !== void 0 && (typeof n.occEdgeOrdinal != "number" || !Number.isInteger(n.occEdgeOrdinal) || n.occEdgeOrdinal < 0)) return q(`${r} ${t} has invalid edge selector occEdgeOrdinal`, t);
        }
        return null;
    }
    function Og(e, t) {
        if (!pe(e) || !U(e.id) || !U(e.type)) return q("Feature snapshot missing id/type");
        if (!Ig.has(e.type)) return null;
        if (!U(e.name) || typeof e.suppressed != "boolean" || !kg(e.dependencyIds) || !X(e.timestamp)) return q(`Feature ${e.id} missing name/suppressed/dependencyIds/timestamp`, e.id);
        const r = e.id;
        if (e.bodyInputMode !== void 0 && e.bodyInputMode !== "current" && e.bodyInputMode !== "feature") return q(`Feature ${r} has invalid bodyInputMode`, r);
        switch(e.type){
            case "sketch":
            case "import":
                return null;
            case "datum_plane":
                {
                    if (!wg.has(String(e.attachmentMode)) || !xg.has(String(e.basePlane)) || !X(e.offset) || !X(e.width) || !X(e.height)) return q(`Datum ${r} missing attachmentMode/basePlane/offset/size`, r);
                    if (e.attachmentMode === "on_face") {
                        if (!pe(e.faceSelector) || !U(e.faceSelector.featureId) || !U(e.faceSelector.role)) return q(`Datum ${r} attachmentMode on_face requires faceSelector`, r);
                    } else if (e.attachmentMode === "on_datum") {
                        if (!U(e.baseDatumId)) return q(`Datum ${r} attachmentMode on_datum requires baseDatumId`, r);
                    } else if (e.faceSelector !== null && e.faceSelector !== void 0 && (!pe(e.faceSelector) || !U(e.faceSelector.featureId) || !U(e.faceSelector.role))) return q(`Datum ${r} has invalid faceSelector`, r);
                    if (e.attachmentMode === "three_point") {
                        if (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(se)) return q(`Datum ${r} attachmentMode three_point requires threePoints`, r);
                    } else if (e.threePoints !== null && e.threePoints !== void 0 && (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(se))) return q(`Datum ${r} has invalid threePoints`, r);
                    if (e.attachmentMode === "on_path") {
                        if (!U(e.pathFeatureId) || !X(e.pathParameter) || e.pathParameter < 0 || e.pathParameter > 1) return q(`Datum ${r} attachmentMode on_path requires pathFeatureId and pathParameter in [0,1]`, r);
                    } else if (e.pathFeatureId !== null && e.pathFeatureId !== void 0 && (!U(e.pathFeatureId) || e.pathParameter !== null && !X(e.pathParameter))) return q(`Datum ${r} has invalid path association`, r);
                    return null;
                }
            case "datum_axis":
                return !pe(e.axisRef) || !U(e.axisRef.kind) ? q(`Datum Axis ${r} requires axisRef`, r) : e.axisRef.kind === "world" && (!se(e.axisRef.origin) || !se(e.axisRef.direction)) ? q(`Datum Axis ${r} has invalid world axis`, r) : e.axisRef.kind === "two_point" && (!se(e.axisRef.start) || !se(e.axisRef.end)) ? q(`Datum Axis ${r} has invalid two-point axis`, r) : e.axisRef.kind === "datum_intersection" && (!U(e.axisRef.firstDatumId) || !U(e.axisRef.secondDatumId) || e.axisRef.firstDatumId === e.axisRef.secondDatumId) ? q(`Datum Axis ${r} has invalid Datum Plane references`, r) : null;
            case "draft":
                return !U(e.baseFeatureId) || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !e.draftFaces.every(bo) || !Array.isArray(e.hinges) || e.hinges.length < 1 || e.hinges.length > 2 || !e.hinges.every(vg) || !Fg(e.direction) || !X(e.angle) || e.angle <= 0 || e.angle >= Math.PI / 2 || !pe(e.split) || ![
                    "none",
                    "hinge",
                    "reference"
                ].includes(String(e.split.kind)) || !Array.isArray(e.variableAngles) || !X(e.secondSideAngle) || e.secondSideAngle <= 0 || e.secondSideAngle >= Math.PI / 2 || !pe(e.options) ? q(`Draft ${r} has invalid Creo-style parameters`, r) : e.split.kind === "reference" && !ya(e.split.reference) ? q(`Draft ${r} has invalid split reference`, r) : e.variableAngles.every((n)=>pe(n) && U(n.id) && X(n.location) && n.location >= 0 && n.location <= 1 && X(n.angle) && n.angle > 0 && n.angle < Math.PI / 2) ? null : q(`Draft ${r} has invalid variable angle controls`, r);
            case "box":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !se(e.origin) || !X(e.length) || !X(e.width) || !X(e.height) || e.length <= 0 || e.width <= 0 || e.height <= 0 ? q(`Box ${r} has invalid parameters`, r) : null;
            case "cylinder":
            case "cone":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !se(e.origin) || !se(e.direction) || Math.hypot(...e.direction) <= 1e-9 || !X(e.height) || e.height <= 0 || e.type === "cylinder" && (!X(e.radius) || e.radius <= 0) || e.type === "cone" && (!X(e.bottomRadius) || !X(e.topRadius) || e.bottomRadius <= 0 || e.topRadius < 0) ? q(`Primitive ${r} has invalid parameters`, r) : null;
            case "sphere":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !se(e.center) || !X(e.radius) || e.radius <= 0 ? q(`Sphere ${r} has invalid parameters`, r) : null;
            case "split":
                return !U(e.baseFeatureId) || !pe(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) ? q(`Split ${r} has invalid base/tool/keepSide`, r) : null;
            case "trim":
                return !U(e.baseFeatureId) || !pe(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) || typeof e.tolerance != "number" || !Number.isFinite(e.tolerance) || e.tolerance < 0 ? q(`Trim Sheet ${r} has invalid base/tool/keepSide/tolerance`, r) : null;
            case "face_pull":
                if (!U(e.baseFeatureId) || !Array.isArray(e.faceSelectors) || e.faceSelectors.length === 0 || !se(e.direction) || !X(e.distance) || e.distance <= 0 || ![
                    "add",
                    "cut"
                ].includes(String(e.operation))) return q(`Face Pull ${r} has invalid base/faces/direction/distance/operation`, r);
                for (const n of e.faceSelectors)if (!pe(n) || !U(n.featureId) || !U(n.role)) return q(`Face Pull ${r} has an invalid face selector`, r);
                return null;
            case "multi_transform":
                return !U(e.seedFeatureId) || !Array.isArray(e.transforms) || e.transforms.length === 0 ? q(`MultiTransform ${r} has invalid seed/transforms`, r) : null;
            case "shape_binder":
                return !U(e.sourceBodyId) || !U(e.sourceFeatureId) || ![
                    "resolved",
                    "stale",
                    "source_missing"
                ].includes(String(e.status)) ? q(`ShapeBinder ${r} has invalid source/status`, r) : null;
            case "extrude":
                {
                    const i = !(e.startOffset !== void 0 || e.endOffset !== void 0) || X(e.startOffset) && X(e.endOffset) && e.startOffset !== e.endOffset;
                    if (!U(e.sketchId) || !X(e.depth) || e.depth <= 0 || !i || e.secondDepth !== void 0 && (!X(e.secondDepth) || e.secondDepth < 0) || e.symmetric !== void 0 && typeof e.symmetric != "boolean" || !cn.has(String(e.mode))) return q(`Extrude ${r} has invalid sketchId/from-to/depth/secondDepth/symmetric/mode`, r);
                    const o = Sr(t[e.sketchId], r, e.sketchId);
                    return o || null;
                }
            case "hole":
                {
                    if (!U(e.baseFeatureId) || !U(e.sketchId) || !X(e.diameter) || !X(e.depth) || ![
                        "blind",
                        "through"
                    ].includes(String(e.depthMode)) || ![
                        "simple",
                        "counterbore",
                        "countersink"
                    ].includes(String(e.mode))) return q(`Hole ${r} has invalid parameters`, r);
                    try {
                        po(e);
                    } catch (o) {
                        return q(`Hole ${r}: ${o instanceof Error ? o.message : String(o)}`, r);
                    }
                    if (e.pointIds !== void 0 && (!Array.isArray(e.pointIds) || e.pointIds.some((o)=>!U(o)))) return q(`Hole ${r} has invalid pointIds`, r);
                    const n = t[e.sketchId];
                    if (!n) return q(`Hole ${r} missing sketch profile ${String(e.sketchId)}`, r);
                    const i = Eg(n, r, e.sketchId);
                    if (i) return i;
                    try {
                        Io(n, Array.isArray(e.pointIds) ? e.pointIds : void 0);
                    } catch (o) {
                        return q(`Hole ${r}: ${o instanceof Error ? o.message : String(o)}`, r);
                    }
                    if (e.mode === "counterbore" && (!X(e.counterboreDiameter) || !X(e.counterboreDepth))) return q(`Hole ${r} counterbore parameters are required`, r);
                    if (e.mode === "countersink" && (!X(e.countersinkDiameter) || !X(e.countersinkAngleDeg))) return q(`Hole ${r} countersink parameters are required`, r);
                    for (const o of [
                        "start",
                        "end"
                    ]){
                        const s = e[`${o}ChamferEnabled`];
                        if (s !== void 0 && typeof s != "boolean") return q(`Hole ${r} ${o}ChamferEnabled is invalid`, r);
                        if (s && (!X(e[`${o}ChamferOffset`]) || e[`${o}ChamferOffset`] <= 0 || !X(e[`${o}ChamferAngleDeg`]) || !(e[`${o}ChamferAngleDeg`] > 1 && e[`${o}ChamferAngleDeg`] < 179))) return q(`Hole ${r} ${o}Chamfer parameters are invalid`, r);
                    }
                    return null;
                }
            case "linear_pattern":
                return !U(e.seedFeatureId) || !se(e.direction) || !Number.isInteger(e.count) || e.count < 2 || !X(e.spacing) || e.spacing <= 0 ? q(`Linear pattern ${r} has invalid seed/count/spacing/direction`, r) : null;
            case "polar_pattern":
                {
                    const n = e.axisRef;
                    return !U(e.seedFeatureId) || !Number.isInteger(e.count) || e.count < 2 || !X(e.angleSpan) || e.angleSpan <= 0 || e.angleSpan > Math.PI * 2 + 1e-9 || !n || n.kind === "world" && (!se(n.origin) || !se(n.direction) || Math.hypot(...n.direction) <= 1e-9) || n.kind === "datum" && (!U(n.featureId) || ![
                        "normal",
                        "u",
                        "v"
                    ].includes(String(n.axis))) ? q(`Polar pattern ${r} has invalid seed/count/angle/axis`, r) : null;
                }
            case "revolve":
                {
                    if (!U(e.sketchId) || !X(e.angle) || !cn.has(String(e.mode))) return q(`Revolve ${r} missing sketchId/angle/mode`, r);
                    const n = _g(e.axisRef, r);
                    if (n) return n;
                    const i = Sr(t[e.sketchId], r, e.sketchId);
                    return i || null;
                }
            case "boolean":
                return !U(e.targetFeatureId) || !U(e.toolFeatureId) || !bg.has(String(e.op)) ? q(`Boolean ${r} missing target/tool/op`, r) : e.targetBodyId !== void 0 && !U(e.targetBodyId) || e.toolBodyId !== void 0 && !U(e.toolBodyId) ? q(`Boolean ${r} has invalid Body references`, r) : null;
            case "fillet":
                return !U(e.baseFeatureId) || !X(e.radius) ? q(`Fillet ${r} missing baseFeatureId/radius`, r) : wd(e.edgeSelectors, r, "Fillet");
            case "chamfer":
                return !U(e.baseFeatureId) || !X(e.distance) ? q(`Chamfer ${r} missing baseFeatureId/distance`, r) : e.secondDistance !== void 0 && !X(e.secondDistance) ? q(`Chamfer ${r} has invalid secondDistance`, r) : wd(e.edgeSelectors, r, "Chamfer");
            case "thickness":
                return !U(e.baseFeatureId) || !X(e.thickness) || e.thickness <= 0 || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0 ? q(`Thickness ${r} missing baseFace/thickness/selectors`, r) : e.removedFaceSelectors.every((i)=>pe(i) && U(i.featureId) && U(i.role) && (i.hintCentroid === void 0 || se(i.hintCentroid))) ? null : q(`Thickness ${r} has invalid removed face selectors`, r);
            case "mirror":
                {
                    const n = e.planeRef;
                    return !U(e.seedFeatureId) || !n || !U(n.kind) || n.kind === "world" && (!se(n.origin) || !se(n.normal) || Math.hypot(...n.normal) <= 1e-9) || n.kind === "datum" && !U(n.featureId) ? q(`Mirror ${r} has invalid seed/plane`, r) : null;
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.sectionSketchIds.every((n)=>U(n)) || !cn.has(String(e.mode))) return q(`Loft ${r} has invalid sections/mode`, r);
                    for (const n of e.sectionSketchIds){
                        const i = Sr(t[n], r, n);
                        if (i) return i;
                    }
                    return null;
                }
            case "pipe":
                {
                    if (!U(e.profileSketchId) || !U(e.pathSketchId) || e.profileSketchId === e.pathSketchId || !cn.has(String(e.mode))) return q(`Pipe ${r} has invalid profile/path/mode`, r);
                    const n = Array.isArray(e.sectionSketchIds) && e.sectionSketchIds.length > 0 ? e.sectionSketchIds : [
                        e.profileSketchId
                    ];
                    if (!n.every((s)=>U(s)) || n.includes(e.pathSketchId)) return q(`Pipe ${r} has invalid section/path references`, r);
                    const i = Sr(t[e.profileSketchId], r, e.profileSketchId);
                    if (i) return i;
                    for (const s of n){
                        const a = Sr(t[s], r, s);
                        if (a) return a;
                    }
                    const o = Ag(t[e.pathSketchId], r, e.pathSketchId);
                    return o || (e.orientation !== void 0 && !new Set([
                        "frenet",
                        "parallel",
                        "fixed"
                    ]).has(String(e.orientation)) ? q(`Pipe ${r} has invalid orientation`, r) : null);
                }
            case "helix":
                return !se(e.axisOrigin) || !se(e.axisDirection) || Math.hypot(...e.axisDirection) <= 1e-9 || !X(e.radius) || e.radius <= 0 || !X(e.endRadius) || e.endRadius <= 0 || !X(e.pitch) || e.pitch <= 0 || !X(e.endPitch) || e.endPitch <= 0 || !X(e.height) || e.height <= 0 || !X(e.startAngle) || e.handedness !== "right" && e.handedness !== "left" ? q(`Helix ${r} has invalid axis or dimensions`, r) : null;
            case "thread":
                return !U(e.helixFeatureId) || !cn.has(String(e.mode)) || e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch" || e.profileKind === "custom_sketch" && !U(e.profileSketchId) || !X(e.majorRadius) || e.majorRadius <= 0 || !X(e.pitch) || e.pitch <= 0 || !X(e.depth) || e.depth <= 0 || e.depth >= e.majorRadius ? q(`Thread ${r} has invalid Helix/profile/dimensions`, r) : e.profileKind === "custom_sketch" ? Sr(t[e.profileSketchId], r, e.profileSketchId) : null;
            default:
                return q(`Unknown feature type ${String(e.type)}`, r);
        }
    }
    function Pg(e) {
        return qi(e);
    }
    const qe = 2;
    function st(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Mg(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function Ue(e) {
        return typeof e == "string" && e.length > 0;
    }
    const Rg = new Set([
        "suppressed",
        "after_tip",
        "no_tip"
    ]);
    function He(e, t) {
        return {
            code: "protocol-invalid",
            message: e,
            recoverable: !1
        };
    }
    function _e(e, t) {
        return {
            code: "invalid-plan",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function ul(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Gi(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function Cg(e, t) {
        return !st(e) || !Ue(e.featureId) || !Ue(e.type) ? _e(`replayPlan.steps[${t}] is invalid`) : !Number.isInteger(e.historyIndex) || e.historyIndex !== t ? _e(`replayPlan.steps[${t}] historyIndex must equal array index ${t}`, e.featureId) : e.status === "inactive" ? Rg.has(String(e.reason)) ? null : _e(`replayPlan.steps[${t}] has invalid inactive reason`, e.featureId) : e.status !== "active" ? _e(`replayPlan.steps[${t}] has invalid status`, e.featureId) : Ue(e.kind) ? e.kind !== e.type ? _e(`replayPlan.steps[${t}] kind ${e.kind} does not match type ${e.type}`, e.featureId) : e.priorSolidFeatureId !== null && !Ue(e.priorSolidFeatureId) ? _e(`replayPlan.steps[${t}] has invalid priorSolidFeatureId`, e.featureId) : Gi(e.auxiliaryFeatureIds) ? null : _e(`replayPlan.steps[${t}] missing auxiliaryFeatureIds`, e.featureId) : _e(`replayPlan.steps[${t}] has invalid kind`, e.featureId);
    }
    function $g(e, t) {
        if (!st(e)) return _e("replayPlan must be an object");
        if (e.bodyId !== t) return {
            code: "correlation-mismatch",
            message: `replayPlan.bodyId ${String(e.bodyId)} does not match request bodyId ${t}`,
            recoverable: !1
        };
        if (!Array.isArray(e.historyOrder) || !Array.isArray(e.steps) || !Array.isArray(e.solidExecutionOrder)) return _e("replayPlan missing historyOrder/steps/solidExecutionOrder");
        if (e.tipFeatureId !== null && !Ue(e.tipFeatureId)) return _e("replayPlan.tipFeatureId is invalid");
        if (!Gi(e.historyOrder) || !Gi(e.solidExecutionOrder)) return _e("replayPlan historyOrder/solidExecutionOrder must be string arrays");
        const r = new Set;
        for(let i = 0; i < e.steps.length; i++){
            const o = Cg(e.steps[i], i);
            if (o) return o;
            const s = e.steps[i];
            if (r.has(s.featureId)) return _e(`replayPlan has duplicate feature id ${s.featureId}`, s.featureId);
            r.add(s.featureId);
        }
        if (e.historyOrder.length !== e.steps.length) return _e("replayPlan historyOrder length must match steps length");
        for(let i = 0; i < e.historyOrder.length; i++){
            const o = e.steps[i];
            if (o.featureId !== e.historyOrder[i]) return _e(`replayPlan historyOrder/steps mismatch at ${i}`, o.featureId);
        }
        const n = [];
        for (const i of e.steps)i.status === "active" && Pg(i.kind) && n.push(i.featureId);
        return e.solidExecutionOrder.length !== n.length || e.solidExecutionOrder.some((i, o)=>i !== n[o]) ? _e("replayPlan.solidExecutionOrder must match active solid steps in history order") : null;
    }
    function Dg(e, t) {
        return !st(e) || !Ue(e.id) || !Ue(e.type) || !Ue(e.name) || typeof e.suppressed != "boolean" || !Gi(e.dependencyIds) ? ul("Feature snapshot generic envelope is invalid") : Og(e, t);
    }
    function wo(e) {
        if (!st(e)) return He("Body replay request must be an object");
        if (e.protocolVersion !== qe) return He(`Unsupported body-replay protocol version ${String(e.protocolVersion)}`);
        if (!Ue(e.requestId) || !Ue(e.bodyId)) return He("Body replay request missing requestId/bodyId");
        if (!Number.isInteger(e.revision) || e.revision < 0) return He("Body replay request has invalid revision");
        if (!Mg(e.deadlineMs)) return He("Body replay request has invalid deadlineMs");
        if (e.presentationMode !== void 0 && e.presentationMode !== "full" && e.presentationMode !== "mesh" && e.presentationMode !== "none") return He("Body replay request has invalid presentationMode");
        if (!st(e.snapshot) || !st(e.replayPlan)) return He("Body replay request missing snapshot/replayPlan");
        if (e.externalOperands !== void 0) {
            if (!Array.isArray(e.externalOperands)) return He("Body replay request externalOperands must be an array");
            const d = new Set;
            for (const l of e.externalOperands){
                if (!st(l) || !Ue(l.bodyId) || !Ue(l.featureId) || !Number.isSafeInteger(l.committedRevision) || l.committedRevision < 0) return He("Body replay request has an invalid external operand");
                if (l.bodyId === e.bodyId) return He(`External operand ${l.featureId} belongs to the replay Body`);
                if (d.has(l.featureId)) return He(`Duplicate external operand feature id ${l.featureId}`);
                d.add(l.featureId);
            }
        }
        const t = e.snapshot;
        if (t.bodyId !== e.bodyId) return {
            code: "correlation-mismatch",
            message: `snapshot.bodyId ${String(t.bodyId)} does not match request bodyId ${e.bodyId}`,
            recoverable: !1
        };
        if (!Array.isArray(t.features) || !st(t.profiles)) return He("snapshot missing features/profiles");
        const r = $g(e.replayPlan, e.bodyId);
        if (r) return r;
        const n = e.replayPlan, i = n.tipFeatureId ?? null, o = t.tipFeatureId ?? null;
        if (i !== o) return {
            code: "correlation-mismatch",
            message: "snapshot.tipFeatureId does not match replayPlan.tipFeatureId",
            recoverable: !1
        };
        const s = new Set, a = new Map;
        for (const d of t.features){
            const l = Dg(d, t.profiles);
            if (l) return l;
            const c = d.id;
            if (s.has(c)) return ul(`Duplicate feature id ${c} in snapshot`, c);
            s.add(c), a.set(c, d.type);
        }
        if (s.size !== n.steps.length) return _e("snapshot feature set size must equal replayPlan.steps length");
        for (const d of n.steps){
            if (!s.has(d.featureId)) return _e(`replayPlan step ${d.featureId} missing from snapshot`, d.featureId);
            const l = a.get(d.featureId);
            if (l !== d.type) return _e(`snapshot type ${l} mismatches plan type ${d.type} for ${d.featureId}`, d.featureId);
        }
        for (const d of s)if (!n.steps.some((l)=>l.featureId === d)) return _e(`snapshot feature ${d} is not present in replayPlan`, d);
        return null;
    }
    function fl(e, t) {
        return st(t) ? t.protocolVersion !== qe ? He(`Unexpected response protocol version ${String(t.protocolVersion)}`) : t.requestId !== e.requestId || t.bodyId !== e.bodyId || t.revision !== e.revision ? {
            code: "correlation-mismatch",
            message: "Body replay response correlation fields do not match request",
            recoverable: !1
        } : typeof t.ok != "boolean" ? He("Body replay response missing ok flag") : null : He("Body replay response must be an object");
    }
    function pl(e) {
        return st(e) ? e.type === "cancel-body-replay" && e.protocolVersion === qe && Ue(e.requestId) && Ue(e.bodyId) && Number.isInteger(e.revision) && e.revision >= 0 : !1;
    }
    function Tg(e) {
        return st(e) ? e.type === "reset-body-replay-state" && e.protocolVersion === qe && Ue(e.bodyId) : !1;
    }
    function Bg(e) {
        return wo(e) === null;
    }
    const ga = 1, zg = Object.freeze([
        "request",
        "feature",
        "tessellation",
        "cache",
        "stale",
        "cancellation"
    ]), hl = Object.freeze([
        "hit",
        "miss",
        "invalidation"
    ]), ml = Object.freeze([
        "checkpoint",
        "shape",
        "mesh",
        "path",
        "brep"
    ]), yl = Object.freeze([
        "ok",
        "failed",
        "cancelled",
        "stale"
    ]), gl = Object.freeze([
        "ok",
        "failed",
        "skipped",
        "inactive"
    ]), Il = Object.freeze([
        "cancelled",
        "deadline-exceeded"
    ]);
    function Qe(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`ReplayPerformanceEvent.${t} must not be empty`);
        return e;
    }
    function ys(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw new Error(`ReplayPerformanceEvent.${t} must be a finite non-negative number`);
        return e;
    }
    function Ar(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`ReplayPerformanceEvent.${t} must be a non-negative safe integer`);
        return e;
    }
    function jg(e, t) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error(`ReplayPerformanceEvent.${t} must be a positive safe integer`);
        return e;
    }
    function ln(e, t, r) {
        if (!t.includes(e)) throw new Error(`ReplayPerformanceEvent.${r} is invalid: ${String(e)}`);
        return e;
    }
    function jo(e, t) {
        if (e !== void 0) return Qe(e, t);
    }
    function Ng(e) {
        return Object.freeze({
            occRuntimeId: Qe(e.occRuntimeId, "runtimeIdentity.occRuntimeId"),
            wasmBuildId: Qe(e.wasmBuildId, "runtimeIdentity.wasmBuildId")
        });
    }
    function Vg(e, t) {
        if (typeof e.cacheResult != "boolean") throw new Error("ReplayPerformanceEvent.dimensions.cacheResult must be a boolean");
        const r = t.featureId ? Qe(e.featureId ?? "", "dimensions.featureId") : jo(e.featureId, "dimensions.featureId"), n = t.inputFingerprint ? Qe(e.inputFingerprint ?? "", "dimensions.inputFingerprint") : jo(e.inputFingerprint, "dimensions.inputFingerprint"), i = t.dependencyFingerprint ? Qe(e.dependencyFingerprint ?? "", "dimensions.dependencyFingerprint") : jo(e.dependencyFingerprint, "dimensions.dependencyFingerprint");
        return Object.freeze({
            requestId: Qe(e.requestId, "dimensions.requestId"),
            bodyId: Qe(e.bodyId, "dimensions.bodyId"),
            revision: Ar(e.revision, "dimensions.revision"),
            replayProtocolVersion: jg(e.replayProtocolVersion, "dimensions.replayProtocolVersion"),
            runtimeIdentity: Ng(e.runtimeIdentity),
            cacheResult: e.cacheResult,
            ...r ? {
                featureId: r
            } : {},
            ...n ? {
                inputFingerprint: n
            } : {},
            ...i ? {
                dependencyFingerprint: i
            } : {}
        });
    }
    function kr(e, t, r) {
        return {
            schemaVersion: ga,
            kind: e,
            dimensions: Vg(t.dimensions, r),
            timestampMs: ys(t.timestampMs, "timestampMs"),
            durationMs: ys(t.durationMs, "durationMs")
        };
    }
    function Je(e) {
        switch(e.kind){
            case "request":
                {
                    const t = e.earliestReplayedFeatureId;
                    return t !== null && Qe(t, "earliestReplayedFeatureId"), Object.freeze({
                        ...kr("request", e, {}),
                        kind: "request",
                        occLoadMs: ys(e.occLoadMs, "occLoadMs"),
                        executedStepCount: Ar(e.executedStepCount, "executedStepCount"),
                        earliestReplayedFeatureId: t,
                        featureCount: Ar(e.featureCount, "featureCount"),
                        outcome: ln(e.outcome, yl, "outcome")
                    });
                }
            case "feature":
                return Object.freeze({
                    ...kr("feature", e, {
                        featureId: !0,
                        inputFingerprint: !0,
                        dependencyFingerprint: !0
                    }),
                    kind: "feature",
                    historyIndex: Ar(e.historyIndex, "historyIndex"),
                    status: ln(e.status, gl, "status")
                });
            case "tessellation":
                return Object.freeze({
                    ...kr("tessellation", e, {
                        featureId: !0
                    }),
                    kind: "tessellation",
                    vertexCount: Ar(e.vertexCount, "vertexCount"),
                    triangleCount: Ar(e.triangleCount, "triangleCount")
                });
            case "cache":
                return Object.freeze({
                    ...kr("cache", e, {
                        featureId: !0,
                        inputFingerprint: !0,
                        dependencyFingerprint: !0
                    }),
                    kind: "cache",
                    artifactKind: ln(e.artifactKind, ml, "artifactKind"),
                    outcome: ln(e.outcome, hl, "outcome"),
                    reason: Qe(e.reason, "reason")
                });
            case "stale":
                return Object.freeze({
                    ...kr("stale", e, {}),
                    kind: "stale",
                    discardedRequestId: Qe(e.discardedRequestId, "discardedRequestId"),
                    currentRequestId: Qe(e.currentRequestId, "currentRequestId"),
                    publishedCache: !1
                });
            case "cancellation":
                return Object.freeze({
                    ...kr("cancellation", e, {}),
                    kind: "cancellation",
                    reason: ln(e.reason, Il, "reason"),
                    publishedCache: !1
                });
            default:
                {
                    const t = e;
                    throw new Error(`ReplayPerformanceEvent.kind is invalid: ${String(t.kind)}`);
                }
        }
    }
    function Ia(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Kg(e) {
        return Ia(e) && typeof e.occRuntimeId == "string" && typeof e.wasmBuildId == "string";
    }
    function Lg(e) {
        return Ia(e) && typeof e.requestId == "string" && typeof e.bodyId == "string" && typeof e.revision == "number" && typeof e.replayProtocolVersion == "number" && typeof e.cacheResult == "boolean" && Kg(e.runtimeIdentity) && (e.featureId === void 0 || typeof e.featureId == "string") && (e.inputFingerprint === void 0 || typeof e.inputFingerprint == "string") && (e.dependencyFingerprint === void 0 || typeof e.dependencyFingerprint == "string");
    }
    function ba(e) {
        if (!Ia(e) || !Lg(e.dimensions)) throw new Error("ReplayPerformanceEvent must be a JSON object with dimensions");
        if (e.schemaVersion !== ga) throw new Error(`ReplayPerformanceEvent.schemaVersion is invalid: ${String(e.schemaVersion)}`);
        if (typeof e.timestampMs != "number" || typeof e.durationMs != "number") throw new Error("ReplayPerformanceEvent requires finite timestampMs and durationMs");
        const t = {
            dimensions: e.dimensions,
            timestampMs: e.timestampMs,
            durationMs: e.durationMs
        };
        switch(e.kind){
            case "request":
                if (e.earliestReplayedFeatureId !== null && typeof e.earliestReplayedFeatureId != "string") throw new Error("ReplayPerformanceEvent.earliestReplayedFeatureId is invalid");
                if (typeof e.occLoadMs != "number" || typeof e.executedStepCount != "number" || typeof e.featureCount != "number" || typeof e.outcome != "string") throw new Error("ReplayPerformanceEvent.request fields are invalid");
                return Je({
                    ...t,
                    kind: "request",
                    occLoadMs: e.occLoadMs,
                    executedStepCount: e.executedStepCount,
                    earliestReplayedFeatureId: e.earliestReplayedFeatureId === null ? null : String(e.earliestReplayedFeatureId),
                    featureCount: e.featureCount,
                    outcome: String(e.outcome)
                });
            case "feature":
                if (typeof e.historyIndex != "number" || typeof e.status != "string") throw new Error("ReplayPerformanceEvent.feature fields are invalid");
                return Je({
                    ...t,
                    kind: "feature",
                    historyIndex: e.historyIndex,
                    status: e.status
                });
            case "tessellation":
                if (typeof e.vertexCount != "number" || typeof e.triangleCount != "number") throw new Error("ReplayPerformanceEvent.tessellation fields are invalid");
                return Je({
                    ...t,
                    kind: "tessellation",
                    vertexCount: e.vertexCount,
                    triangleCount: e.triangleCount
                });
            case "cache":
                if (typeof e.artifactKind != "string" || typeof e.outcome != "string" || typeof e.reason != "string") throw new Error("ReplayPerformanceEvent.cache fields are invalid");
                return Je({
                    ...t,
                    kind: "cache",
                    artifactKind: e.artifactKind,
                    outcome: e.outcome,
                    reason: e.reason
                });
            case "stale":
                if (typeof e.discardedRequestId != "string" || typeof e.currentRequestId != "string") throw new Error("ReplayPerformanceEvent.stale fields are invalid");
                return Je({
                    ...t,
                    kind: "stale",
                    discardedRequestId: e.discardedRequestId,
                    currentRequestId: e.currentRequestId
                });
            case "cancellation":
                if (typeof e.reason != "string") throw new Error("ReplayPerformanceEvent.cancellation fields are invalid");
                return Je({
                    ...t,
                    kind: "cancellation",
                    reason: e.reason
                });
            default:
                throw new Error(`ReplayPerformanceEvent.kind is invalid: ${String(e.kind)}`);
        }
    }
    function Hg(e) {
        try {
            return ba(e), !0;
        } catch  {
            return !1;
        }
    }
    function qg(e) {
        return JSON.stringify(ba(e));
    }
    const Ug = new Set([
        "name",
        "timestamp"
    ]);
    function Yi(e) {
        if (e === null || typeof e == "string" || typeof e == "boolean") return e;
        if (typeof e == "number") {
            if (!Number.isFinite(e)) throw new Error("Replay fingerprint cannot contain non-finite numbers");
            return Object.is(e, -0) ? 0 : e;
        }
        if (!(typeof e > "u")) {
            if (e instanceof Uint8Array) return Object.freeze({
                $bytes: e.byteLength,
                $checksum: Gg(e)
            });
            if (Array.isArray(e)) return e.map((t)=>Yi(t));
            if (typeof e == "object") {
                const t = e, r = Object.keys(t).filter((i)=>t[i] !== void 0).sort(), n = {};
                for (const i of r)n[i] = Yi(t[i]);
                return n;
            }
            throw new Error(`Replay fingerprint cannot contain ${typeof e}`);
        }
    }
    function bl(e) {
        return JSON.stringify(Yi(e)) ?? "null";
    }
    lr = function(e) {
        return bl(e);
    };
    function wa(e, t) {
        if (!e) return lr({
            missing: !0
        });
        const r = e, n = {};
        for (const i of Object.keys(r))Ug.has(i) || (n[i] = r[i]);
        return t && (n.profile = t), Array.isArray(n.dependencyIds) && (n.dependencyIds = [
            ...n.dependencyIds
        ].map(String).sort()), lr(n);
    }
    function xa(e, t) {
        return lr({
            dependencyIds: [
                ...e?.dependencyIds ?? []
            ].map(String).sort(),
            auxiliaryFeatureIds: [
                ...t?.auxiliaryFeatureIds ?? []
            ].map(String).sort(),
            priorSolidFeatureId: t?.priorSolidFeatureId ?? null,
            suppressed: e?.suppressed ?? !1
        });
    }
    Wg = function(e) {
        return lr({
            bodyId: e.bodyId,
            tipFeatureId: e.tipFeatureId,
            historyOrder: e.historyOrder,
            solidExecutionOrder: e.solidExecutionOrder,
            steps: e.steps.map((t)=>t.status === "inactive" ? {
                    featureId: t.featureId,
                    type: t.type,
                    status: t.status,
                    reason: t.reason,
                    historyIndex: t.historyIndex
                } : {
                    featureId: t.featureId,
                    type: t.type,
                    status: t.status,
                    kind: t.kind,
                    historyIndex: t.historyIndex,
                    priorSolidFeatureId: t.priorSolidFeatureId,
                    auxiliaryFeatureIds: [
                        ...t.auxiliaryFeatureIds
                    ].map(String).sort()
                })
        });
    };
    function Gg(e) {
        let t = 2166136261;
        for(let r = 0; r < e.length; r += 1)t ^= e[r], t = Math.imul(t, 16777619);
        return (t >>> 0).toString(16).padStart(8, "0");
    }
    Jn = Object.freeze({
        occRuntimeId: "opencascade.js@1.1.1/body-history-inputs-v2",
        wasmBuildId: "opencascade.js/dist/opencascade.wasm.wasm"
    });
    function Yg(e) {
        return wa(e);
    }
    function Jg(e, t) {
        return xa(e, t);
    }
    function Xg(e) {
        const t = e.find((i)=>i.kind === "request"), r = e.filter((i)=>i.kind === "feature"), n = e.filter((i)=>i.kind === "tessellation").reduce((i, o)=>i + o.durationMs, 0);
        return {
            executedStepCount: t?.executedStepCount ?? 0,
            earliestReplayedFeatureId: t?.earliestReplayedFeatureId ?? null,
            occLoadMs: t?.occLoadMs ?? 0,
            tessellationDurationMs: n,
            featureDurations: r.map((i)=>({
                    featureId: i.dimensions.featureId ?? "",
                    durationMs: i.durationMs,
                    status: i.status,
                    historyIndex: i.historyIndex
                })),
            requestOutcome: t?.outcome ?? null
        };
    }
    class Zg {
        constructor(t, r = Jn){
            this.request = t, this.runtimeIdentity = r;
        }
        request;
        runtimeIdentity;
        occLoadMs = 0;
        executedStepCount = 0;
        earliestReplayedFeatureId = null;
        activeFeatureId = null;
        startedAt = performance.now();
        events = [];
        recordOccLoad(t) {
            this.occLoadMs = t;
        }
        setActiveFeatureId(t) {
            this.activeFeatureId = t;
        }
        recordFeature(t, r, n, i) {
            (r === "ok" || r === "failed") && (this.earliestReplayedFeatureId === null && (this.earliestReplayedFeatureId = t.featureId), this.executedStepCount += 1);
            try {
                this.events.push(Je({
                    kind: "feature",
                    dimensions: this.dimensions(t.featureId, i, t),
                    timestampMs: Date.now(),
                    durationMs: n,
                    historyIndex: t.historyIndex,
                    status: r
                }));
            } catch  {}
            (r === "ok" || r === "failed") && this.recordCacheMiss(t, i);
        }
        recordCacheHit(t, r, n = "valid-prefix") {
            this.recordCache(t, r, "hit", n);
        }
        recordCacheMiss(t, r, n = "suffix-replay") {
            this.recordCache(t, r, "miss", n);
        }
        recordCacheInvalidation(t, r, n = "earliest-invalid-boundary") {
            this.recordCache(t, r, "invalidation", n);
        }
        recordCache(t, r, n, i) {
            try {
                this.events.push(Je({
                    kind: "cache",
                    dimensions: this.dimensions(t.featureId, r, t),
                    timestampMs: Date.now(),
                    durationMs: 0,
                    artifactKind: "checkpoint",
                    outcome: n,
                    reason: i
                }));
            } catch  {}
        }
        recordFeatureFromStates(t, r, n, i) {
            const s = [
                ...r
            ].reverse().find((a)=>a.featureId === t.featureId)?.status ?? "failed";
            this.recordFeature(t, s, n, i);
        }
        recordTessellation(t, r) {
            const n = this.activeFeatureId;
            if (n) try {
                this.events.push(Je({
                    kind: "tessellation",
                    dimensions: this.dimensions(n),
                    timestampMs: Date.now(),
                    durationMs: r,
                    vertexCount: Math.max(0, Math.floor(t.positions.length / 3)),
                    triangleCount: Math.max(0, Math.floor((t.indices?.length ?? 0) / 3))
                }));
            } catch  {}
        }
        finish(t) {
            return this.events.push(Je({
                kind: "request",
                dimensions: this.dimensions(),
                timestampMs: Date.now(),
                durationMs: performance.now() - this.startedAt,
                occLoadMs: this.occLoadMs,
                executedStepCount: this.executedStepCount,
                earliestReplayedFeatureId: this.earliestReplayedFeatureId,
                featureCount: this.request.replayPlan.steps.length,
                outcome: t
            })), Object.freeze([
                ...this.events
            ]);
        }
        dimensions(t, r, n) {
            return {
                requestId: this.request.requestId,
                bodyId: this.request.bodyId,
                revision: this.request.revision,
                replayProtocolVersion: this.request.protocolVersion ?? qe,
                runtimeIdentity: this.runtimeIdentity,
                cacheResult: this.request.cacheResult !== !1,
                ...t ? {
                    featureId: t
                } : {},
                ...r || n ? {
                    inputFingerprint: Yg(r),
                    dependencyFingerprint: Jg(r, n)
                } : {}
            };
        }
    }
    function In(e, t) {
        try {
            return e.finish(t);
        } catch  {
            return Object.freeze([]);
        }
    }
    const wl = !0;
    let Fn = null;
    function xl() {
        return Fn;
    }
    function Sl(e) {
        try {
            return Fn = _l(e), Fn;
        } catch  {
            return Fn;
        }
    }
    function kl() {
        Fn = null;
    }
    function vl(e) {
        return {
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            replayProtocolVersion: e.protocolVersion ?? qe,
            runtimeIdentity: Jn,
            cacheResult: e.cacheResult !== !1
        };
    }
    function bn(e, t) {
        return Je({
            kind: "cancellation",
            dimensions: vl(e),
            timestampMs: Date.now(),
            durationMs: 0,
            reason: t
        });
    }
    function Fl(e, t) {
        return Je({
            kind: "stale",
            dimensions: vl(e),
            timestampMs: Date.now(),
            durationMs: 0,
            discardedRequestId: e.requestId,
            currentRequestId: t.requestId
        });
    }
    function _l(e) {
        const t = Xg(e), r = e[e.length - 1], n = e.filter((i)=>i.kind === "cache");
        return Object.freeze({
            reuseEnabled: wl,
            requestId: r?.dimensions.requestId ?? "",
            bodyId: r?.dimensions.bodyId ?? "",
            revision: r?.dimensions.revision ?? 0,
            executedStepCount: t.executedStepCount,
            earliestReplayedFeatureId: t.earliestReplayedFeatureId,
            occLoadMs: t.occLoadMs,
            tessellationDurationMs: t.tessellationDurationMs,
            durationMs: r?.kind === "request" ? r.durationMs : t.occLoadMs,
            outcome: t.requestOutcome,
            cacheHits: n.filter((i)=>i.outcome === "hit").length,
            cacheMisses: n.filter((i)=>i.outcome === "miss").length,
            cacheInvalidations: n.filter((i)=>i.outcome === "invalidation").length,
            staleDiscards: e.filter((i)=>i.kind === "stale").length,
            cancellations: e.filter((i)=>i.kind === "cancellation").length,
            events: Object.freeze([
                ...e
            ])
        });
    }
    class El {
        bodies = new Map;
        publish(t) {
            const r = Al(t);
            let n = this.bodies.get(r.bodyId);
            return n || (n = new Map, this.bodies.set(r.bodyId, n)), n.set(r.featureId, r), r;
        }
        lookup(t, r) {
            return this.bodies.get(t)?.get(r) ?? null;
        }
        list(t) {
            const r = this.bodies.get(t);
            return Object.freeze(r ? [
                ...r.values()
            ].sort((n, i)=>n.historyIndex - i.historyIndex) : []);
        }
        invalidateFromHistoryIndex(t, r) {
            const n = this.bodies.get(t);
            if (!n) return 0;
            let i = 0;
            for (const [o, s] of [
                ...n
            ])s.historyIndex >= r && (n.delete(o), i += 1);
            return n.size === 0 && this.bodies.delete(t), i;
        }
        invalidateFeatureIds(t, r) {
            const n = this.bodies.get(t);
            if (!n) return 0;
            let i = 0;
            for (const o of r)n.delete(o) && (i += 1);
            return n.size === 0 && this.bodies.delete(t), i;
        }
        clearBody(t) {
            this.bodies.delete(t);
        }
        clear() {
            this.bodies.clear();
        }
    }
    function gs(e) {
        return Al(e);
    }
    function Al(e) {
        if (!e.bodyId.trim() || !e.featureId.trim()) throw new Error("OccReplayCheckpoint requires bodyId and featureId");
        if (!Number.isSafeInteger(e.committedRevision) || e.committedRevision < 0) throw new Error("OccReplayCheckpoint.committedRevision must be a non-negative safe integer");
        if (!Number.isSafeInteger(e.historyIndex) || e.historyIndex < 0) throw new Error("OccReplayCheckpoint.historyIndex must be a non-negative safe integer");
        if (e.status !== "ok" && e.status !== "failed") throw new Error(`OccReplayCheckpoint.status is invalid: ${String(e.status)}`);
        if (!Number.isSafeInteger(e.replayProtocolVersion) || e.replayProtocolVersion <= 0) throw new Error("OccReplayCheckpoint.replayProtocolVersion must be a positive safe integer");
        const t = ui(e.runtimeIdentity?.occRuntimeId, "runtimeIdentity.occRuntimeId"), r = ui(e.runtimeIdentity?.wasmBuildId, "runtimeIdentity.wasmBuildId");
        return Object.freeze({
            bodyId: e.bodyId,
            committedRevision: e.committedRevision,
            featureId: e.featureId,
            historyIndex: e.historyIndex,
            inputFingerprint: ui(e.inputFingerprint, "inputFingerprint"),
            dependencyFingerprint: ui(e.dependencyFingerprint, "dependencyFingerprint"),
            replayProtocolVersion: e.replayProtocolVersion,
            runtimeIdentity: Object.freeze({
                occRuntimeId: t,
                wasmBuildId: r
            }),
            status: e.status
        });
    }
    function ui(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`OccReplayCheckpoint.${t} must not be empty`);
        return e;
    }
    Qg = class {
        mutationRevision = 0;
        chain = Promise.resolve();
        commitMutation() {
            return this.mutationRevision += 1, this.mutationRevision;
        }
        currentMutationRevision() {
            return this.mutationRevision;
        }
        scheduleWrite(t) {
            const r = this.mutationRevision, n = this.chain.then(()=>t(r));
            return this.chain = n.then(()=>{}, ()=>{}), n;
        }
        flush() {
            return this.chain;
        }
    };
    function Is(e) {
        const t = eI(e.feature, e.snapshot.profiles);
        return {
            inputFingerprint: wa(e.feature, t),
            dependencyFingerprint: lr({
                local: xa(e.feature, e.step.status === "active" ? e.step : void 0),
                active: e.step.status === "active",
                inactiveReason: e.step.status === "inactive" ? e.step.reason : null,
                externals: rI(e.feature, e.snapshot.bodyId, e.externalOperands ?? [])
            })
        };
    }
    function Ol(e) {
        const t = e.replayProtocolVersion ?? qe, r = e.runtimeIdentity ?? Jn, n = new Map(e.snapshot.features.map((d)=>[
                d.id,
                d
            ])), i = new Map(e.checkpoints.filter((d)=>d.bodyId === e.snapshot.bodyId).map((d)=>[
                d.featureId,
                d
            ])), o = new Set;
        let s = null, a = null;
        for (const d of e.replayPlan.steps){
            const l = n.get(d.featureId), c = i.get(d.featureId), f = Is({
                snapshot: e.snapshot,
                step: d,
                feature: l,
                externalOperands: e.externalOperands
            }), h = tI(l, d).some((I)=>o.has(I)), y = !c || c.bodyId !== e.snapshot.bodyId || c.historyIndex !== d.historyIndex || c.inputFingerprint !== f.inputFingerprint || c.dependencyFingerprint !== f.dependencyFingerprint || c.replayProtocolVersion !== t || c.runtimeIdentity.occRuntimeId !== r.occRuntimeId || c.runtimeIdentity.wasmBuildId !== r.wasmBuildId || l?.suppressed === !0 != (d.status === "inactive" && d.reason === "suppressed");
            (h || y) && (o.add(d.featureId), (a === null || d.historyIndex < a) && (s = d.featureId, a = d.historyIndex));
        }
        return Object.freeze({
            earliestInvalidFeatureId: s,
            earliestInvalidHistoryIndex: a,
            invalidFeatureIds: Object.freeze([
                ...o
            ])
        });
    }
    function eI(e, t) {
        if (e?.type === "sketch") return t[e.id];
        if (e && "sketchId" in e && typeof e.sketchId == "string") return t[e.sketchId];
    }
    function tI(e, t) {
        const r = new Set;
        for (const n of e?.dependencyIds ?? [])r.add(n);
        if (t.status === "active") {
            t.priorSolidFeatureId && r.add(t.priorSolidFeatureId);
            for (const n of t.auxiliaryFeatureIds)r.add(n);
        }
        return [
            ...r
        ];
    }
    function rI(e, t, r) {
        if (!e) return [];
        const n = new Set, i = e, o = typeof i.sourceBodyId == "string" ? i.sourceBodyId : null, s = typeof i.sourceFeatureId == "string" ? i.sourceFeatureId : null, a = typeof i.toolBodyId == "string" ? i.toolBodyId : null, d = typeof i.toolFeatureId == "string" ? i.toolFeatureId : null, l = typeof i.targetBodyId == "string" ? i.targetBodyId : null;
        if (o && o !== t && s && n.add(`${o}:${s}`), a && a !== t && d && n.add(`${a}:${d}`), l && l !== t) {
            const c = typeof i.targetFeatureId == "string" ? i.targetFeatureId : "";
            n.add(`${l}:${c}`);
        }
        return Object.freeze(r.filter((c)=>n.has(`${c.bodyId}:${c.featureId}`)).map((c)=>Object.freeze({
                bodyId: c.bodyId,
                featureId: c.featureId,
                committedRevision: c.committedRevision
            })).sort((c, f)=>`${c.bodyId}:${c.featureId}`.localeCompare(`${f.bodyId}:${f.featureId}`)));
    }
    let vi = null;
    async function nI(e) {
        const t = await e;
        return t?.ready && typeof t.ready.then == "function" ? t.ready : t;
    }
    function iI(e) {
        const t = e.default;
        return typeof t == "string" && t.length > 0 ? t : null;
    }
    function oI() {
        return typeof process < "u" && !!process.versions?.node;
    }
    async function sI() {
        const e = await Ts(()=>import("./opencascade.wasm-CLkcJ_OV.js"), []), t = iI(e);
        if (!t) throw new Error("opencascade.js: failed to resolve WASM asset URL — check vite wasm sidecar plugin");
        return {
            locateFile (r) {
                return r.endsWith(".wasm") ? t : r;
            }
        };
    }
    async function _t() {
        return vi || (vi = (async ()=>{
            const { default: e } = await Ts(async ()=>{
                const { default: i } = await import("./opencascade.wasm-mn6um57V.js");
                return {
                    default: i
                };
            }, []);
            if (typeof e != "function") throw new Error("opencascade.js: expected factory export from opencascade.wasm.js");
            const r = oI() ? await (await import("./loadOccModule.node.ts")).resolveWasmForNode() : await sI();
            return nI(e({
                locateFile: r.locateFile,
                wasmBinary: r.wasmBinary
            }));
        })()), vi;
    }
    function aI() {
        vi = null;
    }
    function pt(e, t, r) {
        const { origin: n, uAxis: i, vAxis: o } = e;
        return [
            n[0] + i[0] * t + o[0] * r,
            n[1] + i[1] * t + o[1] * r,
            n[2] + i[2] * t + o[2] * r
        ];
    }
    function he(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function jn(e, t, r) {
        try {
            const s = new e.Handle_Geom_Curve_2(t), a = new e.BRepBuilderAPI_MakeEdge_25(s, 0, 1), d = a.Edge();
            return a.delete?.(), r ? r.push(s) : s.delete?.(), d;
        } catch  {}
        const n = [
            "Handle_Geom_BezierCurve",
            "Handle_Geom_BezierCurve_1",
            "Handle_Geom_BezierCurve_2",
            "Handle_Geom_TrimmedCurve",
            "Handle_Geom_Circle",
            "Handle_Geom_Curve"
        ];
        let i;
        for (const s of n)try {
            const a = he(e, s, [
                t
            ]);
            try {
                let d;
                try {
                    d = he(e, "BRepBuilderAPI_MakeEdge", [
                        a
                    ]);
                } catch  {
                    d = he(e, "BRepBuilderAPI_MakeEdge", [
                        a,
                        0,
                        1
                    ]);
                }
                const l = d.Edge();
                return d.delete?.(), r ? r.push(a) : a.delete?.(), l;
            } catch (d) {
                a.delete?.(), i = d;
            }
        } catch (a) {
            i = a;
        }
        try {
            const s = he(e, "BRepBuilderAPI_MakeEdge", [
                t
            ]), a = s.Edge();
            return s.delete?.(), a;
        } catch (s) {
            i = s;
        }
        const o = i instanceof Error ? i.message : String(i);
        throw new Error(`occProfileWire: MakeEdge from Geom curve failed (${o})`);
    }
    function Jt(e) {
        const t = Math.hypot(e[0], e[1], e[2]);
        return t < 1e-12 ? [
            0,
            0,
            1
        ] : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Pl(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Ml(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function dI(e) {
        const t = [
            ...e.uAxis
        ], r = [
            ...e.vAxis
        ], n = [
            ...e.normal
        ];
        if (Pl(Ml(t, r), n) >= 0) return e;
        const i = r.map((o)=>o === 0 ? 0 : -o);
        return {
            ...e,
            vAxis: i,
            ...e.frame ? {
                frame: {
                    ...e.frame,
                    vAxis: [
                        ...i
                    ]
                }
            } : {}
        };
    }
    function Sa(e, t, r, n) {
        const i = pt(t, r.x, r.y), o = pt(t, n.x, n.y), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Pnt_3(o[0], o[1], o[2]), d = new e.BRepBuilderAPI_MakeEdge_3(s, a), l = d.Edge();
        return d.delete?.(), s.delete?.(), a.delete?.(), l;
    }
    function cI(e, t, r, n) {
        if (!(n > 1e-12)) throw new Error("occProfileWire: circle radius must be positive");
        const i = pt(t, r.x, r.y), o = Jt(t.normal), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Dir_4(o[0], o[1], o[2]), d = [
            ()=>{
                const f = he(e, "gp_Ax2", [
                    s,
                    a
                ]), u = he(e, "gp_Circ", [
                    f,
                    n
                ]), h = he(e, "BRepBuilderAPI_MakeEdge", [
                    u
                ]);
                return {
                    edge: h.Edge(),
                    dispose: ()=>{
                        h.delete?.(), u.delete?.(), f.delete?.();
                    }
                };
            },
            ()=>{
                const f = he(e, "gp_Ax2", [
                    s,
                    a
                ]), u = he(e, "Geom_Circle", [
                    f,
                    n
                ]), h = he(e, "BRepBuilderAPI_MakeEdge", [
                    u
                ]);
                return {
                    edge: h.Edge(),
                    dispose: ()=>{
                        h.delete?.(), u.delete?.(), f.delete?.();
                    }
                };
            },
            ()=>{
                const f = he(e, "GC_MakeCircle", [
                    s,
                    a,
                    n
                ]), u = typeof f.Value == "function" ? f.Value() : f, h = he(e, "BRepBuilderAPI_MakeEdge", [
                    u
                ]);
                return {
                    edge: h.Edge(),
                    dispose: ()=>{
                        h.delete?.(), f.delete?.();
                    }
                };
            }
        ];
        let l;
        for (const f of d)try {
            const u = f(), h = u.edge;
            return u.dispose(), a.delete?.(), s.delete?.(), h;
        } catch (u) {
            l = u;
        }
        a.delete?.(), s.delete?.();
        const c = l instanceof Error ? l.message : String(l);
        throw new Error(`occProfileWire: circle edge failed (${c})`);
    }
    function Rl(e) {
        const t = e.startAngle ?? Math.atan2(e.start.y - e.center.y, e.start.x - e.center.x);
        let r = e.endAngle ?? Math.atan2(e.end.y - e.center.y, e.end.x - e.center.x);
        if (e.startAngle === void 0 || e.endAngle === void 0) for(; r <= t;)r += Math.PI * 2;
        let n = r - t;
        if (e.clockwise) {
            for(; n >= 0;)n -= Math.PI * 2;
            Math.abs(n) < 1e-12 && (n = -Math.PI * 2);
        } else {
            for(; n <= 0;)n += Math.PI * 2;
            Math.abs(n) < 1e-12 && (n = Math.PI * 2);
        }
        const i = t + n * .5;
        return {
            startAngle: t,
            sweep: n,
            mid: {
                x: e.center.x + e.radius * Math.cos(i),
                y: e.center.y + e.radius * Math.sin(i)
            }
        };
    }
    function lI(e, t, r) {
        const n = Rl(r), i = pt(t, r.start.x, r.start.y), o = pt(t, r.end.x, r.end.y), s = pt(t, r.center.x, r.center.y), a = new e.gp_Pnt_3(i[0], i[1], i[2]), d = new e.gp_Pnt_3(o[0], o[1], o[2]), l = new e.gp_Pnt_3(s[0], s[1], s[2]), c = Jt(t.normal), f = Jt(t.uAxis), u = Jt(t.vAxis), h = Jt(Ml(c, f)), y = Pl(h, u) < 0 ? -1 : 1, I = n.startAngle * y, g = n.sweep * y, x = I + g, v = (w)=>typeof w.Value == "function" ? w.Value() : typeof w.Value_1 == "function" ? w.Value_1() : w, b = [
            ()=>{
                const w = new e.gp_Dir_4(c[0], c[1], c[2]), S = new e.gp_Dir_4(f[0], f[1], f[2]), k = he(e, "gp_Ax2", [
                    l,
                    w,
                    S
                ]), M = he(e, "gp_Circ", [
                    k,
                    r.radius
                ]), B = he(e, "BRepBuilderAPI_MakeEdge", [
                    M,
                    I,
                    x
                ]);
                return {
                    edge: B.Edge(),
                    dispose: ()=>{
                        B.delete?.(), M.delete?.(), k.delete?.(), S.delete?.(), w.delete?.();
                    }
                };
            },
            ()=>{
                const w = Jt(t.normal), S = new e.gp_Dir_4(w[0], w[1], w[2]), k = he(e, "gp_Ax2", [
                    l,
                    S
                ]), M = he(e, "gp_Circ", [
                    k,
                    r.radius
                ]), B = g >= 0, C = he(e, "GC_MakeArcOfCircle", [
                    M,
                    a,
                    d,
                    B
                ]), j = v(C);
                return {
                    edge: jn(e, j),
                    dispose: ()=>{
                        C.delete?.(), M.delete?.(), k.delete?.(), S.delete?.();
                    }
                };
            },
            ()=>{
                const w = Jt(t.normal), S = new e.gp_Dir_4(w[0], w[1], w[2]), k = he(e, "gp_Ax2", [
                    l,
                    S
                ]), M = he(e, "Geom_Circle", [
                    k,
                    r.radius
                ]), B = he(e, "Handle_Geom_Curve", [
                    M
                ]), C = he(e, "Geom_TrimmedCurve", [
                    B,
                    Math.min(I, x),
                    Math.max(I, x),
                    g >= 0,
                    !0
                ]);
                return {
                    edge: jn(e, C),
                    dispose: ()=>{
                        C.delete?.(), B.delete?.(), M.delete?.(), k.delete?.(), S.delete?.();
                    }
                };
            }
        ], m = [];
        for (const w of b)try {
            const S = w(), k = S.edge;
            return S.dispose(), a.delete?.(), d.delete?.(), l.delete?.(), k;
        } catch (S) {
            m.push(S instanceof Error ? S.message : String(S));
        }
        throw a.delete?.(), d.delete?.(), l.delete?.(), new Error(`occProfileWire: arc edge failed (${m.join(" | ")})`);
    }
    function uI(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: bezier needs ≥2 controls");
        const i = r.map((o)=>{
            const s = pt(t, o.x, o.y);
            return new e.gp_Pnt_3(s[0], s[1], s[2]);
        });
        try {
            const o = new e.TColgp_Array1OfPnt_2(1, i.length);
            for(let d = 0; d < i.length; d++)typeof o.SetValue == "function" ? o.SetValue(d + 1, i[d]) : o.set(d + 1, i[d]);
            const s = new e.Geom_BezierCurve_1(o), a = jn(e, s, n);
            if (n) n.push(s, o, ...i);
            else {
                s.delete?.(), o.delete?.();
                for (const d of i)d.delete?.();
            }
            return a;
        } catch (o) {
            for (const s of i)s.delete?.();
            throw o;
        }
    }
    function fI(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: spline needs ≥2 controls");
        const o = Dl({
            kind: "spline",
            controls: r.map((s)=>({
                    x: s.x,
                    y: s.y
                }))
        }).map((s)=>{
            const a = pt(t, s.x, s.y);
            return new e.gp_Pnt_3(a[0], a[1], a[2]);
        });
        try {
            const s = he(e, "TColgp_Array1OfPnt", [
                1,
                o.length
            ]);
            for(let a = 0; a < o.length; a++)typeof s.SetValue == "function" ? s.SetValue(a + 1, o[a]) : s.set(a + 1, o[a]);
            try {
                const a = he(e, "GeomAPI_PointsToBSpline", [
                    s
                ]), d = typeof a.Curve == "function" ? a.Curve() : a, l = jn(e, d, n);
                if (n) n.push(a, d, s, ...o);
                else {
                    a.delete?.(), s.delete?.();
                    for (const c of o)c.delete?.();
                }
                return l;
            } catch  {
                const a = he(e, "Geom_BezierCurve", [
                    s
                ]), d = jn(e, a, n);
                if (n) n.push(a, s, ...o);
                else {
                    a.delete?.(), s.delete?.();
                    for (const l of o)l.delete?.();
                }
                return d;
            }
        } catch (s) {
            for (const a of o)a.delete?.();
            throw s;
        }
    }
    function Cl(e, t, r, n) {
        if (r.kind === "line") return Sa(e, t, r.start, r.end);
        if (r.kind === "circle") return cI(e, t, r.center, r.radius);
        if (r.kind === "arc") return lI(e, t, r);
        if (r.kind === "bezier") return uI(e, t, r.controls, n);
        if (r.kind === "spline") return fI(e, t, r.controls, n);
        throw new Error("occProfileWire: unsupported profile segment kind");
    }
    function $l(e) {
        return e.segments && e.segments.length > 0 ? e.segments : e.exactCurve?.kind === "circle" ? [
            {
                kind: "circle",
                center: e.exactCurve.center,
                radius: e.exactCurve.radius
            }
        ] : null;
    }
    function pI(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1;
        let i = !1;
        for (const o of r)try {
            const s = Cl(e, t, o);
            n.Add_1(s);
        } catch (s) {
            i = !0, typeof console < "u" && console.warn("[occProfileWire] segment edge failed, chord fallback", o.kind, s);
            break;
        }
        if (i) {
            n.delete?.();
            const o = new e.BRepBuilderAPI_MakeWire_1;
            for (const s of r){
                const a = Dl(s);
                for(let d = 0; d < a.length - 1; d++)o.Add_1(Sa(e, t, a[d], a[d + 1]));
            }
            return {
                wire: o.Wire(),
                wireBuilder: o
            };
        }
        return {
            wire: n.Wire(),
            wireBuilder: n
        };
    }
    function Dl(e) {
        if (e.kind === "line") return [
            e.start,
            e.end
        ];
        if (e.kind === "circle") return Array.from({
            length: 65
        }, (r, n)=>{
            const i = Math.PI * 2 * n / 64;
            return {
                x: e.center.x + e.radius * Math.cos(i),
                y: e.center.y + e.radius * Math.sin(i)
            };
        });
        if (e.kind === "arc") {
            const { startAngle: t, sweep: r } = Rl(e), n = Math.max(2, Math.ceil(Math.abs(r) / (Math.PI * 2) * 64));
            return Array.from({
                length: n + 1
            }, (i, o)=>{
                const s = o / n, a = t + r * s;
                return {
                    x: e.center.x + e.radius * Math.cos(a),
                    y: e.center.y + e.radius * Math.sin(a)
                };
            });
        }
        if (e.kind === "bezier") {
            const t = e.controls;
            if (t.length < 2) return [];
            const r = 64, n = (i, o)=>{
                if (i.length === 1) return i[0];
                const s = [];
                for(let a = 0; a < i.length - 1; a++)s.push({
                    x: i[a].x * (1 - o) + i[a + 1].x * o,
                    y: i[a].y * (1 - o) + i[a + 1].y * o
                });
                return n(s, o);
            };
            return Array.from({
                length: r + 1
            }, (i, o)=>n(t, o / r));
        }
        if (e.kind === "spline") {
            const t = e.controls;
            if (t.length < 2) return [];
            if (t.length === 2) return [
                t[0],
                t[1]
            ];
            const r = (o, s, a, d, l)=>.5 * (2 * s + (-o + a) * l + (2 * o - 5 * s + 4 * a - d) * l * l + (-o + 3 * s - 3 * a + d) * l * l * l), n = [
                {
                    ...t[0]
                }
            ], i = 16;
            for(let o = 0; o < t.length - 1; o++){
                const s = t[Math.max(0, o - 1)], a = t[o], d = t[o + 1], l = t[Math.min(t.length - 1, o + 2)];
                for(let c = 1; c <= i; c++){
                    const f = c / i;
                    n.push({
                        x: r(s.x, a.x, d.x, l.x, f),
                        y: r(s.y, a.y, d.y, l.y, f)
                    });
                }
            }
            return n;
        }
        return [];
    }
    function hI(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1, i = r.points;
        for(let o = 0; o < i.length; o++){
            const s = (o + 1) % i.length;
            n.Add_1(Sa(e, t, i[o], i[s]));
        }
        return {
            wire: n.Wire(),
            wireBuilder: n
        };
    }
    function No(e, t, r) {
        const n = $l(r);
        return n && n.length > 0 ? pI(e, t, n) : hI(e, t, r);
    }
    function mI(e, t) {
        if (typeof e.Add_1 == "function") {
            e.Add_1(t);
            return;
        }
        if (typeof e.Add == "function") {
            e.Add(t);
            return;
        }
        throw new Error("occProfileWire: BRepBuilderAPI_MakeFace.Add is not available");
    }
    function yI(e) {
        const t = e;
        if (typeof t.Reverse == "function") return t.Reverse(), e;
        if (typeof t.Reversed == "function") return t.Reversed();
        throw new Error("occProfileWire: OCC wire orientation cannot be reversed");
    }
    function Et(e, t) {
        const r = dI(t), n = Hs(r, "occ-profile");
        if (n) throw new Error(n.message);
        const i = Jr(r), o = is(r), s = No(e, r, i), a = [], d = [], l = [];
        for (const u of o){
            const h = u === i ? s : No(e, r, u), y = new e.BRepBuilderAPI_MakeFace_15(h.wire, !0);
            a.push(y);
            for (const g of Ls(r)){
                if (!gI(g.points[0], u.points)) continue;
                const x = No(e, r, g), v = $l(g), b = v?.length === 1 && v[0]?.kind === "circle" ? yI(x.wire) : x.wire;
                mI(y, b), d.push(x.wireBuilder);
            }
            const I = y.Face();
            if (!I) throw new Error("occProfileWire: closed profile did not produce a Face");
            l.push(I);
        }
        let c = l[0], f;
        if (l.length > 1) {
            const u = new e.TopoDS_Compound, h = new e.BRep_Builder;
            f = h, h.MakeCompound(u);
            for (const y of l)h.Add(u, y);
            c = u;
        }
        return {
            face: c,
            outerWire: s.wire,
            wireBuilder: s.wireBuilder,
            faceMaker: f ?? a[0],
            faceMakers: f ? a : [],
            innerWireBuilders: d
        };
    }
    function gI(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    function Tl(e, t, r = 0) {
        if (r === 0) return Et(e, t);
        const n = {
            ...t,
            origin: [
                t.origin[0] + t.normal[0] * r,
                t.origin[1] + t.normal[1] * r,
                t.origin[2] + t.normal[2] * r
            ]
        };
        return Et(e, n);
    }
    function ka(e, t, r, n) {
        const i = new e.gp_Vec_4(n[0] * r, n[1] * r, n[2] * r), o = new e.BRepPrimAPI_MakePrism_1(t, i, !1, !0);
        return {
            shape: o.Shape(),
            prism: o,
            prismVec: i
        };
    }
    function at(e, t, r, n) {
        const i = n?.startOffset ?? 0, o = Tl(e, t, i), s = n?.inward ? -1 : 1, a = t.normal.map((l)=>l * s);
        return {
            ...ka(e, o.face, r, a),
            ...o
        };
    }
    function Xe(e) {
        e.prismVec.delete?.(), e.prism.delete?.(), e.faceMaker?.delete?.();
        for (const t of e.faceMakers ?? [])t.delete?.();
        e.wireBuilder?.delete?.();
        for (const t of e.innerWireBuilders ?? [])t.delete?.();
    }
    function II(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function bI(e) {
        const t = Math.hypot(e[0], e[1], e[2]);
        return t < 1e-12 ? [
            0,
            0,
            1
        ] : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Vo(e, t) {
        return [
            e[t * 3],
            e[t * 3 + 1],
            e[t * 3 + 2]
        ];
    }
    function wI(e, t, r, n) {
        const i = Vo(e, t), o = Vo(e, r), s = Vo(e, n);
        return II([
            o[0] - i[0],
            o[1] - i[1],
            o[2] - i[2]
        ], [
            s[0] - i[0],
            s[1] - i[1],
            s[2] - i[2]
        ]);
    }
    function xI(e, t, r, n, i, o) {
        const s = new Float64Array(n * 3), a = o / 3;
        for(let l = 0; l < a; l++){
            const c = i + l * 3, f = t[c], u = t[c + 1], h = t[c + 2], y = wI(e, f, u, h), I = [
                f - r,
                u - r,
                h - r
            ];
            for (const g of I){
                if (g < 0 || g >= n) continue;
                const x = g * 3;
                s[x] += y[0], s[x + 1] += y[1], s[x + 2] += y[2];
            }
        }
        const d = [];
        for(let l = 0; l < n; l++){
            const c = l * 3;
            d.push(bI([
                s[c],
                s[c + 1],
                s[c + 2]
            ]));
        }
        return d;
    }
    function SI(e, t) {
        const r = t.Orientation_1?.(), n = e.TopAbs_Orientation?.TopAbs_REVERSED;
        return r != null && n != null ? r === n : !1;
    }
    function kI(e, t) {
        const r = e.BRepClass3d_SolidClassifier_2;
        if (typeof r != "function" || typeof e.gp_Pnt_3 != "function") return null;
        let n;
        try {
            n = new r(t);
        } catch  {
            return null;
        }
        return {
            classify (i, o) {
                const s = new e.gp_Pnt_3(i[0], i[1], i[2]);
                try {
                    n.Perform(s, o);
                    const a = n.State();
                    return a === e.TopAbs_State?.TopAbs_IN ? "inside" : a === e.TopAbs_State?.TopAbs_OUT ? "outside" : a === e.TopAbs_State?.TopAbs_ON ? "boundary" : "unknown";
                } catch  {
                    return "unknown";
                } finally{
                    s.delete?.();
                }
            },
            dispose () {
                n.delete?.();
            }
        };
    }
    function vI(e) {
        if (typeof e.Value == "function") return [
            e.Value(1),
            e.Value(2),
            e.Value(3)
        ];
        let t = 0, r = 0, n = 0;
        return e.Get?.(t, r, n), [
            t,
            r,
            n
        ];
    }
    function FI(e, t, r) {
        const n = e.BRep_Tool, i = (typeof n.Triangulation == "function" ? n.Triangulation : null) ?? (typeof n.Triangulation_2 == "function" ? n.Triangulation_2 : null);
        if (!i) throw new TypeError("opencascade.js: BRep_Tool.Triangulation is not available");
        return i(t, r);
    }
    function Ve(e, t, r = {}) {
        new e.BRepMesh_IncrementalMesh_2(t, .5, !1, .5, !1).delete?.();
        const o = [], s = [], a = [], d = [], l = new e.TopExp_Explorer_2(t, e.TopAbs_ShapeEnum.TopAbs_FACE, e.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let c = 0;
        for(; l.More();){
            const f = e.TopoDS.Face_1(l.Current()), u = r.preserveSourceOrientation ? !1 : SI(e, f), h = new e.TopLoc_Location_1, y = FI(e, f, h);
            if (!y.IsNull()) {
                const I = y.get(), g = I.NbNodes(), x = I.NbTriangles(), v = o.length / 3, b = a.length, m = h.Transformation();
                for(let k = 1; k <= g; k++){
                    const M = I.Node(k), B = M.Transformed(m);
                    o.push(B.X(), B.Y(), B.Z()), M.delete?.(), B.delete?.();
                }
                for(let k = 1; k <= x; k++){
                    const M = I.Triangle(k), [B, C, j] = vI(M), N = v + B - 1;
                    let V = v + C - 1, D = v + j - 1;
                    if (u) {
                        const K = V;
                        V = D, D = K;
                    }
                    a.push(N, V, D), M.delete?.();
                }
                const w = xI(o, a, v, g, b, x * 3);
                for (const k of w)s.push(k[0], k[1], k[2]);
                const S = `face_${c}`;
                d.push({
                    key: S,
                    firstIndex: b,
                    indexCount: x * 3
                }), c++;
            }
            h.delete?.(), l.Next();
        }
        return l.delete?.(), {
            positions: new Float32Array(o),
            normals: new Float32Array(s),
            indices: new Uint32Array(a),
            subMeshes: d.length > 0 ? d : [
                {
                    key: "body",
                    firstIndex: 0,
                    indexCount: a.length
                }
            ]
        };
    }
    const _I = 1e-6;
    function Z(e) {
        return {
            x: e[0],
            y: e[1]
        };
    }
    function Ke(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y) <= _I;
    }
    function Ji(e) {
        return Z((e.kind === "line", e.start2d));
    }
    function Tr(e) {
        return Z((e.kind === "line", e.end2d));
    }
    function Bl(e) {
        return e.kind === "line" ? {
            ...e,
            start: e.end,
            end: e.start,
            start2d: e.end2d,
            end2d: e.start2d
        } : {
            ...e,
            start2d: e.end2d,
            end2d: e.start2d,
            clockwise: !1
        };
    }
    const bs = 2;
    function EI(e, t, r) {
        return {
            ...e,
            clockwise: !1
        };
    }
    function Cr(e, t, r) {
        return Ke(Z(e.start2d), t) ? {
            ...e,
            start2d: [
                r.x,
                r.y
            ]
        } : Ke(Z(e.end2d), t) ? {
            ...e,
            end2d: [
                r.x,
                r.y
            ]
        } : e;
    }
    function AI(e) {
        const t = [
            ...e
        ];
        for(let r = 0; r < t.length; r += 1){
            const n = t[r];
            if (n.kind !== "arc") continue;
            const i = Z(n.center2d), o = t.flatMap((I, g)=>I.kind !== "line" || g === r ? [] : [
                    Z(I.start2d),
                    Z(I.end2d)
                ]), s = Z(n.start2d), a = Z(n.end2d), d = o.some((I)=>Ke(I, s)), l = o.some((I)=>Ke(I, a));
            if (d && l) continue;
            const c = o.map((I)=>({
                    candidate: I,
                    error: Math.abs(Math.hypot(I.x - i.x, I.y - i.y) - n.radius)
                })).sort((I, g)=>I.error - g.error), f = c[0], u = c.find((I)=>f && !Ke(I.candidate, f.candidate));
            if (!f || !u || f.error > bs || u.error > bs) continue;
            const h = Z(n.start2d), y = Z(n.end2d);
            t[r] = {
                ...n,
                clockwise: !1
            };
            for(let I = 0; I < t.length; I += 1){
                const g = t[I];
                g.kind === "line" && (t[I] = Cr(Cr(g, f.candidate, h), u.candidate, y));
            }
        }
        return t;
    }
    function OI(e, t, r) {
        const n = [
            ...r
        ], i = [
            ...t
        ], o = [
            ...e
        ];
        for(; n.length >= 2 && i.length > 0;){
            let f = null;
            for(let w = 0; w < i.length; w += 1){
                const S = i[w], k = Z(S.center2d);
                for(let M = 0; M < n.length; M += 1)for(let B = M + 1; B < n.length; B += 1){
                    const C = n[M], j = n[B], N = Math.abs(Math.hypot(C.x - k.x, C.y - k.y) - S.radius) + Math.abs(Math.hypot(j.x - k.x, j.y - k.y) - S.radius);
                    (!f || N < f.error) && (f = {
                        arcIndex: w,
                        startIndex: M,
                        endIndex: B,
                        error: N
                    });
                }
            }
            if (!f || f.error > bs * 2) break;
            const u = i.splice(f.arcIndex, 1)[0], h = n[f.startIndex], y = n[f.endIndex];
            n.splice(Math.max(f.startIndex, f.endIndex), 1), n.splice(Math.min(f.startIndex, f.endIndex), 1), Z(u.center2d);
            const I = Math.hypot(h.x - u.start2d[0], h.y - u.start2d[1]) + Math.hypot(y.x - u.end2d[0], y.y - u.end2d[1]), g = Math.hypot(y.x - u.start2d[0], y.y - u.start2d[1]) + Math.hypot(h.x - u.end2d[0], h.y - u.end2d[1]), x = I <= g ? h : y, v = I <= g ? y : h, b = Z(u.start2d), m = Z(u.end2d);
            for(let w = 0; w < o.length; w += 1){
                const S = o[w];
                S.kind === "line" && (o[w] = Cr(Cr(S, x, b), v, m));
            }
            o.push({
                ...u,
                clockwise: !1
            });
        }
        if (i.length > 0 && n.length === i.length * 2) {
            const f = [
                ...n
            ];
            for (const u of i){
                let h = null;
                for(let m = 0; m < f.length; m += 1)for(let w = m + 1; w < f.length; w += 1){
                    const S = f[m], k = f[w], M = Math.min(Math.hypot(S.x - u.start2d[0], S.y - u.start2d[1]) + Math.hypot(k.x - u.end2d[0], k.y - u.end2d[1]), Math.hypot(k.x - u.start2d[0], k.y - u.start2d[1]) + Math.hypot(S.x - u.end2d[0], S.y - u.end2d[1]));
                    (!h || M < h.score) && (h = {
                        i: m,
                        j: w,
                        score: M
                    });
                }
                if (!h) break;
                const y = f[h.i], I = f[h.j], g = Math.hypot(y.x - u.start2d[0], y.y - u.start2d[1]) + Math.hypot(I.x - u.end2d[0], I.y - u.end2d[1]), x = Math.hypot(I.x - u.start2d[0], I.y - u.start2d[1]) + Math.hypot(y.x - u.end2d[0], y.y - u.end2d[1]), v = g <= x ? y : I, b = g <= x ? I : y;
                for(let m = 0; m < o.length; m += 1){
                    const w = o[m];
                    w.kind === "line" && (o[m] = Cr(Cr(w, v, Z(u.start2d)), b, Z(u.end2d)));
                }
                o.push(EI(u)), f.splice(h.j, 1), f.splice(h.i, 1);
            }
        }
        const s = Ji(o[0]);
        let a = Tr(o[0]);
        const d = [
            o[0]
        ], l = new Set(o.map((f, u)=>u));
        for(l.delete(0); l.size > 0 && !Ke(s, a);){
            let f = -1, u;
            for (const h of l){
                const y = o[h];
                if (Ke(Ji(y), a)) {
                    f = h, u = y;
                    break;
                }
                if (Ke(Tr(y), a)) {
                    f = h, u = Bl(y);
                    break;
                }
            }
            if (f < 0 || !u) break;
            l.delete(f), d.push(u), a = Tr(u);
        }
        if (!Ke(s, a) || d.length < 3) return null;
        const c = zl(d);
        return c.length < 3 ? null : {
            points: c,
            isOuter: !0,
            segments: d.map(ws)
        };
    }
    function ws(e) {
        if (e.kind === "line") return {
            kind: "line",
            id: e.id,
            start: Z(e.start2d),
            end: Z(e.end2d)
        };
        if (e.kind === "circle") return {
            kind: "circle",
            id: e.id,
            center: Z(e.center2d),
            radius: e.radius
        };
        if (e.kind === "arc") return {
            kind: "arc",
            id: e.id,
            center: Z(e.center2d),
            radius: e.radius,
            start: Z(e.start2d),
            end: Z(e.end2d),
            startAngle: e.startAngle,
            endAngle: e.endAngle,
            clockwise: !1
        };
        throw new Error(`Unsupported UG curve kind ${e.kind}`);
    }
    function PI(e, t = 24) {
        const r = Math.atan2(e.start2d[1] - e.center2d[1], e.start2d[0] - e.center2d[0]);
        let i = Math.atan2(e.end2d[1] - e.center2d[1], e.end2d[0] - e.center2d[0]) - r;
        if (e.clockwise) for(; i >= 0;)i -= Math.PI * 2;
        else for(; i <= 0;)i += Math.PI * 2;
        const o = Math.max(2, Math.ceil(Math.abs(i) / (Math.PI / 12)));
        return Array.from({
            length: Math.min(t, o) + 1
        }, (s, a)=>{
            const d = r + i * (a / Math.min(t, o));
            return {
                x: e.center2d[0] + Math.cos(d) * e.radius,
                y: e.center2d[1] + Math.sin(d) * e.radius
            };
        });
    }
    function zl(e) {
        const t = [];
        for (const r of e){
            const n = r.kind === "line" ? [
                Z(r.start2d),
                Z(r.end2d)
            ] : PI(r);
            t.length > 0 && Ke(t[t.length - 1], n[0]) ? t.push(...n.slice(1)) : t.push(...n);
        }
        return t.length > 1 && Ke(t[0], t[t.length - 1]) && t.pop(), t;
    }
    function xd(e) {
        let t = 0;
        for(let r = 0; r < e.length; r += 1){
            const n = e[(r + 1) % e.length], i = e[r];
            t += i.x * n.y - n.x * i.y;
        }
        return t / 2;
    }
    function MI(e) {
        const t = e.filter((o)=>o.kind === "circle");
        let r = e.filter((o)=>o.kind === "line" || o.kind === "arc");
        const n = t.map((o)=>({
                points: Array.from({
                    length: 48
                }, (a, d)=>{
                    const l = d / 48 * Math.PI * 2;
                    return {
                        x: o.center2d[0] + Math.cos(l) * o.radius,
                        y: o.center2d[1] + Math.sin(l) * o.radius
                    };
                }),
                isOuter: !0,
                segments: [
                    ws(o)
                ]
            })), i = new Set(r.map((o, s)=>s));
        for(r = AI(r); i.size > 0;){
            const o = i.values().next().value;
            i.delete(o);
            const s = [
                r[o]
            ], a = Ji(s[0]);
            let d = Tr(s[0]);
            for(; !Ke(a, d);){
                let l = -1, c;
                for (const f of i){
                    const u = r[f];
                    if (Ke(Ji(u), d)) {
                        l = f, c = u;
                        break;
                    }
                    if (Ke(Tr(u), d)) {
                        l = f, c = Bl(u);
                        break;
                    }
                }
                if (l < 0 || !c) break;
                i.delete(l), s.push(c), d = Tr(c);
            }
            if (Ke(a, d) && s.length > 1) {
                const l = zl(s);
                l.length >= 3 && n.push({
                    points: l,
                    isOuter: !0,
                    segments: s.map(ws)
                });
            }
        }
        if (n.length > 1) {
            const o = n.reduce((s, a, d)=>Math.abs(xd(a.points)) > Math.abs(xd(n[s].points)) ? d : s, 0);
            return n.map((s, a)=>({
                    ...s,
                    isOuter: a === o
                }));
        }
        if (n.length > 0) return n;
        if (t.length === 0 && r.some((o)=>o.kind === "arc")) {
            const o = r.filter((c)=>c.kind === "line"), s = o.flatMap((c)=>[
                    Z(c.start2d),
                    Z(c.end2d)
                ]), a = s.map((c, f)=>s.filter((u, h)=>h !== f && Ke(c, u)).length), d = s.filter((c, f)=>a[f] === 0), l = r.filter((c)=>c.kind === "arc");
            if (d.length === 4 && l.length >= 2) {
                const c = OI(o, l, d);
                if (c) return [
                    c
                ];
            }
        }
        return n;
    }
    function RI(e) {
        return e.map((t)=>t.kind === "point" ? {
                kind: "point",
                id: t.id,
                point: {
                    id: t.id,
                    ...Z(t.point2d)
                }
            } : t.kind === "line" ? {
                kind: "line",
                id: t.id,
                start: {
                    id: `${t.id}:start`,
                    ...Z(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...Z(t.end2d)
                }
            } : t.kind === "circle" ? {
                kind: "circle",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...Z(t.center2d)
                },
                radius: t.radius
            } : {
                kind: "arc",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...Z(t.center2d)
                },
                start: {
                    id: `${t.id}:start`,
                    ...Z(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...Z(t.end2d)
                },
                radius: t.radius,
                startAngle: t.startAngle,
                endAngle: t.endAngle,
                clockwise: !1
            });
    }
    function ht(e) {
        return e && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function je(e) {
        if (!Array.isArray(e) || e.length < 3) return null;
        const t = e.slice(0, 3).map((r)=>Number(r));
        return t.some((r)=>!Number.isFinite(r)) ? null : t;
    }
    function ye(e) {
        const t = Math.hypot(e[0], e[1], e[2]);
        return t <= 1e-9 ? null : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Kt(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function xs(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function CI(e, t, r) {
        const n = Math.cos(r), i = Math.sin(r);
        return {
            x: e * n - t * i,
            y: e * i + t * n
        };
    }
    function jl(e) {
        const t = Ye(e.text_type) ?? 0;
        return t === 1 ? "on_curve" : t === 2 ? "on_face" : "planar";
    }
    function Nl(e) {
        const t = Kl(e, "Height") ?? ir(e, [
            "planar_height_val",
            "frame_on_path_height_val"
        ], []) ?? 1, r = ir(e, [
            "planar_length_val",
            "frame_on_path_length_val"
        ], [
            "Length"
        ]) ?? 0, n = ir(e, [
            "frame_on_path_offset_val"
        ], [
            "Offset"
        ]) ?? Ye(e.frame_on_path_offset_rhs) ?? 0;
        return {
            length: r,
            height: t > 0 ? t : 1,
            offset: n
        };
    }
    Vl = function(e, t) {
        const r = ht(e.parameters) ?? {}, n = jl(r), { length: i, height: o, offset: s } = Nl(r);
        if (n === "on_face") return {
            x: 0,
            y: 0
        };
        const a = Ye(r[n === "planar" ? "planar_anchor" : "frame_on_path_anchor"]) ?? (n === "planar" ? void 0 : 4), d = DI(a, i, o);
        return CI(d.x, d.y + s, t);
    };
    function Nn(e) {
        const t = ye(e) ?? [
            0,
            0,
            1
        ], r = Math.abs(t[0]) < .9 ? [
            1,
            0,
            0
        ] : [
            0,
            1,
            0
        ], n = ye([
            r[0] - t[0] * Kt(r, t),
            r[1] - t[1] * Kt(r, t),
            r[2] - t[2] * Kt(r, t)
        ]) ?? [
            1,
            0,
            0
        ], i = ye(xs(t, n)) ?? [
            0,
            1,
            0
        ];
        return {
            xAxis: n,
            yAxis: i
        };
    }
    function Kl(e, t) {
        const r = Array.isArray(e.owned_exprs) ? e.owned_exprs : [];
        for (const n of r){
            const i = ht(n);
            if (!(typeof i?.desc != "string" || i.desc.toLowerCase() !== t.toLowerCase()) && typeof i.value == "number" && Number.isFinite(i.value)) return i.value;
        }
        return null;
    }
    function Ye(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (typeof e != "string" || e.trim() === "") return null;
        const t = e.includes("=") ? e.slice(e.lastIndexOf("=") + 1) : e, r = Number(t.trim());
        return Number.isFinite(r) ? r : null;
    }
    function rr(e) {
        if (typeof e == "boolean") return e;
        if (typeof e == "number" && Number.isFinite(e)) return e !== 0;
        if (typeof e == "string") {
            const t = e.trim().toLowerCase();
            if ([
                "true",
                "yes",
                "on",
                "1"
            ].includes(t)) return !0;
            if ([
                "false",
                "no",
                "off",
                "0"
            ].includes(t)) return !1;
        }
    }
    function ir(e, t, r) {
        for (const n of t){
            const i = Ye(e[n]);
            if (i !== null) return i;
        }
        for (const n of r){
            const i = Kl(e, n);
            if (i !== null) return i;
        }
        return null;
    }
    function $I(e) {
        const t = je(e.csys_origin), r = je(e.csys_x_axis), n = je(e.csys_y_axis), i = r ? ye(r) : null, o = n ? ye(n) : null;
        if (!t || !i || !o) return null;
        const s = i[0] * o[0] + i[1] * o[1] + i[2] * o[2], a = ye([
            o[0] - i[0] * s,
            o[1] - i[1] * s,
            o[2] - i[2] * s
        ]);
        if (!a) return null;
        const d = ye([
            i[1] * a[2] - i[2] * a[1],
            i[2] * a[0] - i[0] * a[2],
            i[0] * a[1] - i[1] * a[0]
        ]);
        return d ? {
            origin: t,
            normal: d,
            xAxis: i,
            yAxis: a
        } : null;
    }
    function DI(e, t, r) {
        if (!Number.isFinite(e) || !(t > 0) || !(r > 0)) return {
            x: 0,
            y: 0
        };
        const n = Math.trunc(e);
        if (n < 0 || n > 8) return {
            x: 0,
            y: 0
        };
        const i = n % 3, o = Math.floor(n / 3);
        return {
            x: i === 1 ? -t / 2 : i === 2 ? -t : 0,
            y: o === 0 ? -r : o === 1 ? -r / 2 : 0
        };
    }
    function TI(e, t) {
        return e.parentIds.map((r)=>t.get(r)).find((r)=>r?.sourceType.toUpperCase() === "LINE") ?? null;
    }
    function Ll(e, t) {
        const r = TI(e, t), n = ht(r?.parameters) ?? {}, i = je(n.start), o = je(n.end);
        if (!i || !o) return null;
        const s = ye([
            o[0] - i[0],
            o[1] - i[1],
            o[2] - i[2]
        ]);
        if (!s) return null;
        const a = ht(e.parameters) ?? {}, d = rr(a.frame_on_path_anchor_pos_is_percent), l = rr(a.frame_on_path_anchor_pos_is_parameter), c = ir(a, [
            "frame_on_path_anchor_pos_val"
        ], [
            "Parameter"
        ]) ?? Ye(a.frame_on_path_anchor_pos_rhs) ?? 50, f = d === !0 || d !== !1 && l !== !0 && Math.abs(c) > 1 ? c / 100 : c, u = Math.max(0, Math.min(1, rr(a.frame_on_path_anchor_pos_is_flipped) ? 1 - f : f));
        return {
            point: [
                i[0] + (o[0] - i[0]) * u,
                i[1] + (o[1] - i[1]) * u,
                i[2] + (o[2] - i[2]) * u
            ],
            direction: s
        };
    }
    function BI(e) {
        const t = Array.isArray(e.placement_faces) ? e.placement_faces : [];
        for (const r of t){
            const n = ht(r);
            if (!n) continue;
            const i = je(n.plane_origin) ?? je(n.origin), o = ye(je(n.normal) ?? je(n.plane_normal) ?? [
                0,
                0,
                0
            ]);
            if (!i || !o) continue;
            const s = ye(je(n.x_axis) ?? je(n.plane_x_axis) ?? [
                0,
                0,
                0
            ]), a = ye(je(n.y_axis) ?? je(n.plane_y_axis) ?? [
                0,
                0,
                0
            ]);
            if (s && a) return {
                origin: i,
                normal: o,
                xAxis: s,
                yAxis: a
            };
            const d = Nn(o);
            return {
                origin: i,
                normal: o,
                xAxis: d.xAxis,
                yAxis: d.yAxis
            };
        }
        return null;
    }
    function Hl(e, t) {
        const r = new Set, n = [
            ...e.parentIds
        ];
        for(; n.length > 0;){
            const i = n.shift();
            if (r.has(i)) continue;
            r.add(i);
            const o = t.get(i);
            if (!o || o.sourceType.toUpperCase() === "LINE") continue;
            if (o.sketchPlaneFrame) return o.sketchPlaneFrame;
            const s = o.parameterSummary.sectionIds[0];
            if (s !== void 0) {
                const a = t.get(s);
                if (a?.sketchPlaneFrame) return a.sketchPlaneFrame;
            }
            for (const a of o.parentIds)n.push(a);
        }
        return null;
    }
    xo = function(e, t = new Map) {
        if (e.sketchPlaneFrame) return e.sketchPlaneFrame;
        const r = ht(e.parameters) ?? {}, n = $I(r), i = Ye(r.text_type) ?? 0;
        if (i !== 1 && i !== 2 && n) return n;
        const o = BI(r) ?? Hl(e, t) ?? n ?? Fa(e), s = Ll(e, t);
        if (!s) return o;
        const a = ye(o.normal) ?? [
            0,
            0,
            1
        ], d = ye(o.xAxis) ?? Nn(a).xAxis, l = ye(o.yAxis) ?? Nn(a).yAxis;
        return {
            origin: s.point,
            normal: a,
            xAxis: d,
            yAxis: l
        };
    };
    function va(e, t = new Map) {
        const r = ht(e.parameters) ?? {}, n = je(r.start), i = je(r.end), o = n && i ? [
            (n[0] + i[0]) / 2,
            (n[1] + i[1]) / 2,
            (n[2] + i[2]) / 2
        ] : null, s = Hl(e, t);
        if (s) {
            const f = ye(s.normal) ?? [
                0,
                0,
                1
            ];
            return {
                origin: o ?? s.origin,
                normal: f,
                xAxis: ye(s.xAxis) ?? Nn(f).xAxis,
                yAxis: ye(s.yAxis) ?? Nn(f).yAxis
            };
        }
        const a = n && i ? ye([
            i[0] - n[0],
            i[1] - n[1],
            i[2] - n[2]
        ]) : null;
        if (!o || !a) return Fa(e);
        const d = Math.abs(a[2]) > .9 ? [
            1,
            0,
            0
        ] : [
            0,
            0,
            1
        ], l = ye(xs(d, a)) ?? [
            0,
            1,
            0
        ], c = ye(xs(a, l)) ?? [
            0,
            0,
            1
        ];
        return {
            origin: o,
            normal: c,
            xAxis: a,
            yAxis: l
        };
    }
    function Sd(e, t) {
        const r = [
            e[0] - t.origin[0],
            e[1] - t.origin[1],
            e[2] - t.origin[2]
        ];
        return [
            Kt(r, t.xAxis),
            Kt(r, t.yAxis)
        ];
    }
    ql = function(e, t = new Map) {
        const r = ht(e.parameters) ?? {}, n = je(r.start), i = je(r.end), o = va(e, t), s = n ? Sd(n, o) : [
            0,
            0
        ], a = i ? Sd(i, o) : [
            0,
            0
        ], d = Ss(e.id);
        return {
            loops: [],
            geometry: n && i ? [
                {
                    kind: "line",
                    id: d,
                    start: {
                        id: `${d}:start`,
                        x: s[0],
                        y: s[1]
                    },
                    end: {
                        id: `${d}:end`,
                        x: a[0],
                        y: a[1]
                    }
                }
            ] : [],
            frame: {
                origin: [
                    ...o.origin
                ],
                normal: [
                    ...o.normal
                ],
                uAxis: [
                    ...o.xAxis
                ],
                vAxis: [
                    ...o.yAxis
                ]
            },
            origin: [
                ...o.origin
            ],
            normal: [
                ...o.normal
            ],
            uAxis: [
                ...o.xAxis
            ],
            vAxis: [
                ...o.yAxis
            ]
        };
    };
    Ul = function(e, t, r) {
        const n = ht(e.parameters) ?? {}, i = ir(n, [
            "rotation",
            "angle"
        ], [
            "Rotation",
            "Angle"
        ]) ?? 0, o = Ll(e, t);
        if (!o) return i;
        const s = ye(r.normal), a = ye(r.xAxis), d = ye(r.yAxis);
        if (!s || !a || !d) return i;
        const l = Kt(o.direction, s), c = ye([
            o.direction[0] - s[0] * l,
            o.direction[1] - s[1] * l,
            o.direction[2] - s[2] * l
        ]);
        return c ? i + Math.atan2(Kt(c, d), Kt(c, a)) : i;
    };
    function zI(e, t) {
        const r = ht(e.parameters) ?? {}, n = typeof r.text_string == "string" ? r.text_string : "", i = typeof r.font == "string" ? r.font : "Arial", o = jl(r), { length: s, height: a } = Nl(r), d = ir(r, [
            "frame_on_path_wscale",
            "frame_on_path_wscale_val",
            "wscale",
            "width_scale"
        ], [
            "W Scale",
            "Width Scale"
        ]), l = Ye(r.planar_wscale), c = o === "planar" ? l !== null && l > 0 ? l / 100 : 1 : d !== null && d > 0 ? d / 100 : s > 0 ? s / Math.max(a * Math.max(1, n.length) * .6, a * .5) : 1, f = xo(e, t), u = Ul(e, t, f), h = Vl(e, u), y = rr(r.frame_on_path_anchor_pos_is_percent), I = rr(r.frame_on_path_anchor_pos_is_parameter), g = rr(r.frame_on_path_anchor_pos_is_flipped) ?? !1, x = o === "planar" ? void 0 : ir(r, [
            "frame_on_path_anchor_pos_val"
        ], [
            "Parameter"
        ]) ?? Ye(r.frame_on_path_anchor_pos_rhs) ?? .5, v = x === void 0 ? void 0 : y === !0 || y !== !1 && I !== !0 && Math.abs(x) > 1 ? x / 100 : x, b = v === void 0 ? 0 : Math.max(0, Math.min(1, g ? 1 - v : v)), m = o === "on_face" ? 4 : Ye(r[o === "planar" ? "planar_anchor" : "frame_on_path_anchor"]) ?? (o === "planar" ? void 0 : 4), w = {
            id: `${Ss(e.id)}:origin`,
            x: h.x,
            y: h.y
        };
        return {
            loops: [],
            geometry: [
                {
                    kind: "text",
                    id: Ss(e.id),
                    origin: w,
                    content: n,
                    height: a > 0 ? a : 1,
                    rotation: u,
                    font: i,
                    widthScale: c,
                    alignCenter: o === "on_face",
                    placementType: o,
                    anchor: m,
                    ...v !== void 0 ? {
                        anchorPosition: b
                    } : {},
                    ...y === !0 ? {
                        anchorPositionMode: "percent"
                    } : I === !0 ? {
                        anchorPositionMode: "parameter"
                    } : {},
                    ...g ? {
                        anchorPositionFlipped: !0
                    } : {},
                    ...rr(r.frame_on_path_is_apex_reversed) ? {
                        apexReversed: !0
                    } : {},
                    ...Number.isInteger(Ye(r.font_style)) ? {
                        fontStyle: Ye(r.font_style)
                    } : {},
                    ...Number.isInteger(Ye(r.script)) ? {
                        script: Ye(r.script)
                    } : {}
                }
            ],
            frame: {
                origin: [
                    ...f.origin
                ],
                normal: [
                    ...f.normal
                ],
                uAxis: [
                    ...f.xAxis
                ],
                vAxis: [
                    ...f.yAxis
                ]
            },
            origin: [
                ...f.origin
            ],
            normal: [
                ...f.normal
            ],
            uAxis: [
                ...f.xAxis
            ],
            vAxis: [
                ...f.yAxis
            ]
        };
    }
    function Ss(e) {
        return `ug:feature:${e}`;
    }
    function Fa(e) {
        return e.sketchPlaneFrame ?? {
            origin: [
                0,
                0,
                0
            ],
            normal: [
                0,
                0,
                1
            ],
            xAxis: [
                1,
                0,
                0
            ],
            yAxis: [
                0,
                1,
                0
            ]
        };
    }
    Wl = function(e) {
        const t = Fa(e);
        return {
            loops: MI(e.sketchCurves),
            geometry: RI(e.sketchCurves),
            frame: {
                origin: [
                    ...t.origin
                ],
                normal: [
                    ...t.normal
                ],
                uAxis: [
                    ...t.xAxis
                ],
                vAxis: [
                    ...t.yAxis
                ]
            },
            origin: [
                ...t.origin
            ],
            normal: [
                ...t.normal
            ],
            uAxis: [
                ...t.xAxis
            ],
            vAxis: [
                ...t.yAxis
            ]
        };
    };
    function Gl(e, t, r) {
        if (e.loops.length > 0 || !e.geometry?.length) return e;
        const n = e.geometry.filter((D)=>D.kind === "line");
        if (n.length < 1 || n.length !== e.geometry.filter((D)=>D.kind !== "point").length) return e;
        const i = 1e-5, o = (D, K)=>Math.hypot(D.x - K.x, D.y - K.y) <= i, s = n.flatMap((D)=>[
                Z([
                    D.start.x,
                    D.start.y
                ]),
                Z([
                    D.end.x,
                    D.end.y
                ])
            ]), a = s.filter((D, K)=>s.every((G, F)=>K === F || !o(D, G)));
        if (a.length !== 2) return e;
        const d = [
            t[0] - e.origin[0],
            t[1] - e.origin[1],
            t[2] - e.origin[2]
        ], l = d[0] * e.uAxis[0] + d[1] * e.uAxis[1] + d[2] * e.uAxis[2], c = d[0] * e.vAxis[0] + d[1] * e.vAxis[1] + d[2] * e.vAxis[2], f = r[0] * e.uAxis[0] + r[1] * e.uAxis[1] + r[2] * e.uAxis[2], u = r[0] * e.vAxis[0] + r[1] * e.vAxis[1] + r[2] * e.vAxis[2], h = Math.hypot(f, u);
        if (h <= i) return e;
        const y = (D)=>{
            const K = ((D.x - l) * f + (D.y - c) * u) / (h * h);
            return {
                x: l + f * K,
                y: c + u * K
            };
        }, I = [];
        let g = a[0];
        const x = new Set;
        for(; x.size < n.length;){
            const D = n.findIndex(($, L)=>x.has(L) ? !1 : o(g, Z([
                    $.start.x,
                    $.start.y
                ])) || o(g, Z([
                    $.end.x,
                    $.end.y
                ])));
            if (D < 0) return e;
            const K = n[D];
            x.add(D);
            const G = Z([
                K.start.x,
                K.start.y
            ]), F = Z([
                K.end.x,
                K.end.y
            ]);
            o(g, F) ? (I.push({
                ...K,
                start: K.end,
                end: K.start
            }), g = G) : (I.push(K), g = F);
        }
        if (!o(g, a[1])) return e;
        const v = a[0], b = a[1], m = y(v), w = y(b), S = (D, K, G)=>o(K, G) ? null : {
                kind: "line",
                id: D,
                start: K,
                end: G
            }, M = I.map((D)=>S(D.id, Z([
                D.start.x,
                D.start.y
            ]), Z([
                D.end.x,
                D.end.y
            ]))).filter((D)=>D !== null), B = S("ug:revolve-closure:last", b, w);
        B && M.push(B);
        const C = S("ug:revolve-closure:axis", w, m);
        C && M.push(C);
        const j = S("ug:revolve-closure:first", m, v);
        j && M.push(j);
        const N = M.map((D)=>D.start), V = M.filter((D)=>D.kind === "line" && D.id?.startsWith("ug:revolve-closure") === !0).map((D)=>({
                kind: "line",
                id: D.id,
                start: {
                    id: `${D.id}:start`,
                    ...D.start
                },
                end: {
                    id: `${D.id}:end`,
                    ...D.end
                }
            }));
        return {
            ...e,
            loops: [
                {
                    points: N,
                    isOuter: !0,
                    segments: M
                }
            ],
            geometry: [
                ...e.geometry ?? [],
                ...V
            ]
        };
    }
    function Yl(e) {
        const t = {}, r = new Map(e.map((n)=>[
                n.id,
                n
            ]));
        for (const n of e)n.normalizedType === "sketch" && (t[`ug:feature:${n.id}`] = Wl(n)), n.normalizedType === "text" && (t[`ug:feature:${n.id}`] = zI(n, r)), n.normalizedType === "line" && (t[`ug:feature:${n.id}`] = ql(n, r));
        return t;
    }
    function jI(e, t, r) {
        const n = Math.hypot(...r), i = Math.hypot(...e.normal);
        if (n <= 1e-12 || i <= 1e-12) return `axisLength=${n}; normalLength=${i}`;
        const o = r.map((g)=>g / n), s = e.normal.map((g)=>g / i), a = o[0] * s[0] + o[1] * s[1] + o[2] * s[2], d = [
            t[0] - e.origin[0],
            t[1] - e.origin[1],
            t[2] - e.origin[2]
        ], l = d[0] * s[0] + d[1] * s[1] + d[2] * s[2], c = [
            s[1] * o[2] - s[2] * o[1],
            s[2] * o[0] - s[0] * o[2],
            s[0] * o[1] - s[1] * o[0]
        ], f = Math.hypot(...c);
        let u = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, y = 0;
        if (f > 1e-12) for (const g of e.loops)for (const x of g.points){
            const v = pt(e, x.x, x.y), b = [
                v[0] - t[0],
                v[1] - t[1],
                v[2] - t[2]
            ], m = (b[0] * c[0] + b[1] * c[1] + b[2] * c[2]) / f;
            u = Math.min(u, m), h = Math.max(h, m), y += 1;
        }
        const I = u < -1e-7 && h > 1e-7;
        return [
            `axisLength=${n}`,
            `axisNormalDot=${a}`,
            `axisPlaneOffset=${l}`,
            `profileLoops=${e.loops.length}`,
            `profilePoints=${y}`,
            `signedRadialRange=[${u},${h}]`,
            `profileCrossesAxis=${I}`
        ].join("; ");
    }
    function Vn(e, t, r, n, i, o = 0) {
        const s = Gl(t, r, n), a = jI(s, r, n);
        if (Math.hypot(...n) <= 1e-12) throw new Error(`OCC revolve input has a degenerate axis; ${a}`);
        let l, c, f;
        try {
            ({ face: l, wireBuilder: c, faceMaker: f } = Et(e, s));
        } catch (g) {
            throw new Error(`OCC revolve profile face construction failed; ${a}; cause=${String(g)}`);
        }
        const u = new e.gp_Ax1_2(new e.gp_Pnt_3(r[0], r[1], r[2]), new e.gp_Dir_4(n[0], n[1], n[2]));
        let h = l, y;
        if (Math.abs(o) > 1e-12) {
            const g = e, x = new g.gp_Trsf_1, v = x.SetRotation_1 ?? x.SetRotation, b = g.BRepBuilderAPI_Transform_2 ?? g.BRepBuilderAPI_Transform;
            if (typeof v != "function" || typeof b != "function") throw x.delete?.(), u.delete?.(), f.delete?.(), c.delete?.(), new Error("OCC revolve start angle transform binding is unavailable");
            v.call(x, u, o);
            const m = new b(l, x, !0);
            if (m.Build?.(), m.IsDone?.() === !1) throw m.delete?.(), x.delete?.(), u.delete?.(), f.delete?.(), c.delete?.(), new Error("OCC revolve start angle transform failed");
            h = m.Shape(), y = {
                delete: ()=>{
                    m.delete?.(), x.delete?.();
                }
            };
        }
        let I;
        try {
            const g = new e.BRepPrimAPI_MakeRevol_1(h, u, i, !0);
            return I = g, {
                shape: g.Shape(),
                revol: g,
                axis: u,
                wireBuilder: c,
                faceMaker: f,
                faceTransform: y
            };
        } catch (g) {
            y?.delete?.();
            try {
                I?.delete?.();
            } catch  {}
            throw u.delete?.(), f.delete?.(), c.delete?.(), new Error(`OCC revolve kernel rejected the face/axis; ${a}; angle=${i}; cause=${String(g)}`);
        }
    }
    function qr(e) {
        e.revol.delete?.(), e.axis.delete?.(), e.faceMaker.delete?.(), e.faceTransform?.delete?.(), e.wireBuilder.delete?.();
    }
    function _a(e, t, r, n, i) {
        const o = Vn(e, t, r, n, i);
        try {
            return Ve(e, o.shape);
        } finally{
            qr(o);
        }
    }
    const Jl = _a, NI = Object.freeze(Object.defineProperty({
        __proto__: null,
        buildRevolveShapeWithOcc: Vn,
        disposeRevolveShape: qr,
        revolveProfileWithOcc: _a,
        revolveRectangleWithOcc: Jl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function VI(e, t) {
        const r = typeof t?.Orientation == "function" ? t.Orientation() : t?.Orientation_1?.();
        if (typeof t?.Oriented == "function" && r !== void 0) return t.Oriented(r);
        const n = Object.keys(e).filter((o)=>o === "TopoDS_Shape" || o.startsWith("TopoDS_Shape_")).sort((o, s)=>+(s !== "TopoDS_Shape") - +(o !== "TopoDS_Shape"));
        let i;
        for (const o of n)try {
            return new e[o](t);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error("OCC TopoDS_Shape copy constructor unavailable");
    }
    function KI(e, t, r, n, i) {
        const o = e, s = o.ShapeUpgrade_UnifySameDomain_2;
        if (typeof s == "function") return new s(t, r, n, i);
        const a = o.ShapeUpgrade_UnifySameDomain_1;
        if (typeof a == "function") {
            const d = new a;
            try {
                return d.Initialize(t, r, n, i), d;
            } catch (l) {
                throw d.delete?.(), l;
            }
        }
        throw new Error("OCC ShapeUpgrade_UnifySameDomain is unavailable");
    }
    function Ea(e, t, r = {}) {
        const n = r.unifyEdges ?? !0, i = r.unifyFaces ?? !0, o = r.concatBSplines ?? !1;
        let s;
        try {
            s = KI(e, t, n, i, o), r.linearTolerance !== void 0 && s.SetLinearTolerance(r.linearTolerance), r.angularTolerance !== void 0 && s.SetAngularTolerance(r.angularTolerance), s.Build();
            const a = s.Shape();
            let d;
            try {
                d = VI(e, a);
            } finally{
                a.delete?.();
            }
            return {
                shape: d,
                applied: !0,
                dispose: ()=>d.delete?.()
            };
        } catch (a) {
            if (r.strict) throw a;
            return {
                shape: t,
                applied: !1,
                dispose: ()=>{}
            };
        } finally{
            s?.delete?.();
        }
    }
    function Ur(e, t, r = {}) {
        const n = Ea(e, t, r);
        return n.applied ? (t.delete?.(), n.shape) : t;
    }
    function Lt(e, t, r, n) {
        const i = n === "common" ? "intersect" : n;
        let o;
        switch(i){
            case "union":
                o = new e.BRepAlgoAPI_Fuse_3(t, r);
                break;
            case "cut":
                o = new e.BRepAlgoAPI_Cut_3(t, r);
                break;
            case "intersect":
                if (typeof e.BRepAlgoAPI_Common_3 == "function") o = new e.BRepAlgoAPI_Common_3(t, r);
                else if (typeof e.BRepAlgoAPI_Common == "function") o = new e.BRepAlgoAPI_Common(t, r);
                else throw new Error("OCC BRepAlgoAPI_Common is unavailable");
                break;
            default:
                {
                    const l = i;
                    throw new Error(`Unsupported boolean op ${String(l)}`);
                }
        }
        let s, a;
        try {
            if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error(`OCC boolean ${n} failed to build a valid result`);
            s = o.Shape(), a = Ea(e, s);
        } catch (l) {
            throw s?.delete?.(), o.delete?.(), l;
        }
        let d = !1;
        return {
            Shape: ()=>a.shape,
            IsDone: ()=>o.IsDone?.() ?? !0,
            delete: ()=>{
                d || (d = !0, a.dispose(), s?.delete?.(), o.delete?.());
            }
        };
    }
    function LI(e, t, r, n, i) {
        const o = e.filter((s)=>{
            const a = s.sampledPoints ?? [
                s.start,
                s.midpoint,
                s.end
            ];
            if (a.length < 4) return !1;
            const d = a.map((f)=>{
                const u = f[0] - t[0], h = f[1] - t[1], y = f[2] - t[2], I = u * r[0] + h * r[1] + y * r[2], g = u - I * r[0], x = h - I * r[1], v = y - I * r[2];
                return {
                    radial: Math.hypot(g, x, v),
                    axial: I
                };
            });
            return Math.max(...d.map((f)=>Math.abs(f.radial - n))) > Math.max(.15, n * .2) ? !1 : Number.isFinite(i) ? Math.max(...d.map((f)=>Math.abs(f.axial - i))) <= Math.max(.25, n * .35) : !0;
        });
        if (!Number.isFinite(i) && o.length > 0) {
            const s = Math.max(...o.map((a)=>{
                const d = a.sampledPoints ?? [
                    a.start,
                    a.midpoint,
                    a.end
                ];
                return d.reduce((l, c)=>{
                    const f = c[0] - t[0], u = c[1] - t[1], h = c[2] - t[2];
                    return l + f * r[0] + u * r[1] + h * r[2];
                }, 0) / d.length;
            }));
            return o.filter((a)=>{
                const d = a.sampledPoints ?? [
                    a.start,
                    a.midpoint,
                    a.end
                ], l = d.reduce((c, f)=>{
                    const u = f[0] - t[0], h = f[1] - t[1], y = f[2] - t[2];
                    return c + u * r[0] + h * r[1] + y * r[2];
                }, 0) / d.length;
                return Math.abs(l - s) <= .5;
            }).map((a)=>a.ordinal);
        }
        return o.map((s)=>s.ordinal);
    }
    function Xl(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Fi(e, t) {
        if (typeof t.XYZ == "function") {
            const r = t.XYZ();
            return [
                r.X(),
                r.Y(),
                r.Z()
            ];
        }
        return [
            t.X(),
            t.Y(),
            t.Z()
        ];
    }
    const HI = 3, qI = 7, UI = .1;
    function WI(e, t, r) {
        const n = [
            r[0] - t[0],
            r[1] - t[1],
            r[2] - t[2]
        ], i = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], o = Math.hypot(...n);
        return o <= 1e-12 ? Math.hypot(...i) : Math.hypot(i[1] * n[2] - i[2] * n[1], i[2] * n[0] - i[0] * n[2], i[0] * n[1] - i[1] * n[0]) / o;
    }
    function GI(e, t, r, n, i, o) {
        const s = [
            i
        ], a = (d, l, c, f, u)=>{
            const h = (d + c) / 2, y = t.Value(h), I = Fi(e, y);
            if (y.delete?.(), u < HI || u < qI && WI(I, l, f) > UI) {
                a(d, l, h, I, u + 1), a(h, I, c, f, u + 1);
                return;
            }
            s.push(f);
        };
        return a(r, i, n, o, 0), s;
    }
    function Aa(e, t, r) {
        const n = Xl(e, "TopExp_Explorer", [
            t,
            e.TopAbs_ShapeEnum?.TopAbs_EDGE ?? e.TopAbs_EDGE,
            e.TopAbs_ShapeEnum?.TopAbs_SHAPE ?? e.TopAbs_SHAPE
        ]), i = [];
        try {
            for(; n.More();){
                const o = n.Current(), s = e.TopoDS?.Edge_1 ? e.TopoDS.Edge_1(o) : o;
                if (i.some((l)=>typeof l?.IsSame == "function" && l.IsSame(s))) {
                    s !== o && s.delete?.(), n.Next();
                    continue;
                }
                const d = i.length;
                i.push(s), r(s, d), n.Next();
            }
            return i.length;
        } finally{
            for (const o of i)o.delete?.();
            n.delete?.();
        }
    }
    function te(e, t) {
        const r = [];
        return Aa(e, t, (n, i)=>{
            try {
                const o = Xl(e, "BRepAdaptor_Curve", [
                    n
                ]), s = typeof o.FirstParameter == "function" ? o.FirstParameter() : 0, a = typeof o.LastParameter == "function" ? o.LastParameter() : 1, d = o.Value(s), l = o.Value(a), c = o.Value((s + a) / 2), f = Fi(e, d), u = Fi(e, l), h = Fi(e, c), y = GI(e, o, s, a, f, u);
                let I = 0;
                for(let g = 1; g < y.length; g++){
                    const x = y[g - 1], v = y[g];
                    I += Math.hypot(v[0] - x[0], v[1] - x[1], v[2] - x[2]);
                }
                r.push({
                    ordinal: i,
                    start: f,
                    end: u,
                    midpoint: h,
                    length: I,
                    sampledPoints: y
                }), o.delete?.(), d.delete?.(), l.delete?.(), c.delete?.();
            } catch  {}
        }), r;
    }
    function YI(e, t) {
        return So(e, t);
    }
    function kd(e, t, r = 1.5) {
        if (e.length === 0) throw new Error("OCC prism has no edges to match");
        const n = new Set, i = [];
        for (const o of t){
            if (o.samplePoints.length < 2) throw new Error(`Edge "${o.role}" has insufficient source samples`);
            let s = null, a = Number.POSITIVE_INFINITY;
            for (const d of e){
                if (n.has(d.ordinal)) continue;
                const l = d.sampledPoints ?? [
                    d.start,
                    d.midpoint,
                    d.end
                ];
                let c = 0, f = 0;
                for (const h of o.samplePoints){
                    let y = Number.POSITIVE_INFINITY;
                    for (const I of l)y = Math.min(y, YI(h, I));
                    c = Math.max(c, y), f += y;
                }
                const u = Math.sqrt(f / o.samplePoints.length) + Math.sqrt(c);
                u < a && (a = u, s = d);
            }
            if (!s || a > r * 2) throw new Error(`Failed to match sampled edge "${o.role}" to OCC prism (score=${a.toFixed(4)})`);
            n.add(s.ordinal), i.push(s.ordinal);
        }
        return [
            ...new Set(i)
        ].sort((o, s)=>o - s);
    }
    function JI(e, t, r) {
        const n = at(e, t, r);
        try {
            return te(e, n.shape);
        } finally{
            Xe(n);
        }
    }
    function So(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function vd(e) {
        const t = e.sampledPoints?.map((s)=>[
                ...s
            ]), r = So(e.start, e.end) <= 1e-12, n = [
            e.end[0] - e.start[0],
            e.end[1] - e.start[1],
            e.end[2] - e.start[2]
        ], i = Math.hypot(...n);
        return {
            ...(r || (t?.slice(1, -1).some((s)=>{
                const a = [
                    s[0] - e.start[0],
                    s[1] - e.start[1],
                    s[2] - e.start[2]
                ];
                return Math.hypot(a[1] * n[2] - a[2] * n[1], a[2] * n[0] - a[0] * n[2], a[0] * n[1] - a[1] * n[0]) / Math.max(i, 1e-12) > Math.max(1e-7, e.length * 1e-6);
            }) ?? !1)) && t && t.length > 2 ? {
                polyline: t
            } : {},
            ...r ? {
                closed: !0
            } : {}
        };
    }
    function Zl(e, t, r = 1.5) {
        if (e.length === 0) throw new Error("OCC prism has no edges to match");
        const n = r * r, i = new Set, o = [];
        for (const s of t){
            let a = null, d = Number.POSITIVE_INFINITY;
            for (const l of e){
                if (i.has(l.ordinal)) continue;
                const c = So(s.midpoint, l.midpoint);
                c < d && (d = c, a = l);
            }
            if (!a || d > n) {
                const l = s.role.startsWith("feature_edge_") ? " (tessellation display role has no OCC identity — tip must publish occEdgeOrdinal)" : "";
                throw new Error(`Failed to match edge "${s.role}" to OCC prism (nearest dist²=${d.toFixed(4)})${l}`);
            }
            i.add(a.ordinal), o.push(a.ordinal);
        }
        return [
            ...new Set(o)
        ].sort((s, a)=>s - a);
    }
    function Br(e, t, r, n = 1.5) {
        if (r.length === 0) return t.map((d)=>({
                ...d,
                startVertex: [
                    ...d.startVertex
                ],
                endVertex: [
                    ...d.endVertex
                ],
                midpoint: d.midpoint ? [
                    ...d.midpoint
                ] : void 0,
                faceIds: [
                    ...d.faceIds
                ],
                provenance: {
                    ...d.provenance
                }
            }));
        const i = n * n, o = new Set(r.map((d)=>d.ordinal)), s = new Map;
        for (const d of t)typeof d.occEdgeOrdinal != "number" || !Number.isInteger(d.occEdgeOrdinal) || d.occEdgeOrdinal < 0 || !o.has(d.occEdgeOrdinal) || s.has(d.occEdgeOrdinal) || s.set(d.occEdgeOrdinal, d);
        const a = new Set(s.keys());
        for (const d of t){
            if (typeof d.occEdgeOrdinal == "number" && Number.isInteger(d.occEdgeOrdinal)) continue;
            const l = d.midpoint ?? [
                (d.startVertex[0] + d.endVertex[0]) / 2,
                (d.startVertex[1] + d.endVertex[1]) / 2,
                (d.startVertex[2] + d.endVertex[2]) / 2
            ];
            let c = null, f = Number.POSITIVE_INFINITY;
            for (const u of r){
                if (a.has(u.ordinal)) continue;
                const h = So(l, u.midpoint);
                h < f && (f = h, c = u);
            }
            !c || f > i || (a.add(c.ordinal), s.set(c.ordinal, {
                ...d,
                startVertex: [
                    ...c.start
                ],
                endVertex: [
                    ...c.end
                ],
                midpoint: [
                    ...c.midpoint
                ],
                occEdgeOrdinal: c.ordinal
            }));
        }
        return r.map((d)=>{
            const l = s.get(d.ordinal);
            if (l) return {
                ...l,
                ...vd(d),
                startVertex: [
                    ...d.start
                ],
                endVertex: [
                    ...d.end
                ],
                midpoint: [
                    ...d.midpoint
                ],
                faceIds: [
                    ...l.faceIds
                ],
                provenance: {
                    ...l.provenance
                },
                occEdgeOrdinal: d.ordinal
            };
            const c = `occ_edge_${d.ordinal}`;
            return {
                id: `${e}::${c}`,
                ...vd(d),
                provenance: {
                    featureId: e,
                    role: c
                },
                faceIds: [
                    "",
                    ""
                ],
                startVertex: [
                    ...d.start
                ],
                endVertex: [
                    ...d.end
                ],
                midpoint: [
                    ...d.midpoint
                ],
                occEdgeOrdinal: d.ordinal
            };
        });
    }
    function Fd(e) {
        return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
    }
    function XI(e) {
        return e.startsWith("occ_edge_") || e.startsWith("feature_edge_");
    }
    function ZI(e, t, r, n = 1.5) {
        if (e.length === 0) throw new Error("OCC dress-up base has no edges");
        const i = new Set(e.map((d)=>d.ordinal)), o = new Set, s = [], a = (d, l)=>{
            if (!i.has(d)) throw new Error(`Dress-up edge ${l.featureId}:${l.role} resolved to stale OCC ordinal ${d}`);
            if (o.has(d)) throw new Error(`Dress-up edge ${l.featureId}:${l.role} duplicates OCC ordinal ${d}`);
            o.add(d), s.push(d);
        };
        for (const d of t){
            if (d.featureId.startsWith("ug:feature:") && d.samplePoints && d.samplePoints.length >= 2) {
                const [h] = kd(e, [
                    {
                        role: d.role,
                        samplePoints: d.samplePoints
                    }
                ], n);
                a(h, d);
                continue;
            }
            const l = r.find((h)=>h.provenance.featureId === d.featureId && h.provenance.role === d.role), c = Fd(l?.occEdgeOrdinal) ? l.occEdgeOrdinal : void 0;
            if (!XI(d.role) && c !== void 0 && i.has(c)) {
                a(c, d);
                continue;
            }
            const f = e.filter((h)=>!o.has(h.ordinal));
            if (d.samplePoints && d.samplePoints.length >= 2) {
                const [h] = kd(f, [
                    {
                        role: d.role,
                        samplePoints: d.samplePoints
                    }
                ], n);
                a(h, d);
                continue;
            }
            if (d.hintCentroid) {
                const [h] = Zl(f, [
                    {
                        role: d.role,
                        midpoint: d.hintCentroid
                    }
                ], n);
                a(h, d);
                continue;
            }
            const u = Fd(d.occEdgeOrdinal) ? d.occEdgeOrdinal : void 0;
            if (u !== void 0 && i.has(u)) {
                a(u, d);
                continue;
            }
            if (c !== void 0 && i.has(c)) {
                a(c, d);
                continue;
            }
            throw d.role.startsWith("feature_edge_") ? new Error(`Dress-up edge ${d.featureId}:${d.role} has no OCC identity (tessellation roles must be re-picked after tip refresh)`) : new Error(`Dress-up edge ${d.featureId}:${d.role} is lost (no current semantic edge or captured geometry)`);
        }
        return s.sort((d, l)=>d - l);
    }
    function QI(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function ko(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Fillet radius must be a positive finite number");
        if (r.length === 0) throw new Error("Fillet requires at least one edge");
        const i = new Set(r), o = e.ChFi3d_FilletShape?.ChFi3d_Rational ?? e.ChFi3d_Rational, s = QI(e, "BRepFilletAPI_MakeFillet", o === void 0 ? [
            t
        ] : [
            t,
            o
        ]);
        let a = 0;
        try {
            if (Aa(e, t, (d, l)=>{
                if (i.has(l)) {
                    if (typeof s.Add_2 == "function") s.Add_2(n, d);
                    else if (typeof s.Add == "function") s.Add(n, d);
                    else throw new Error("OCC fillet Add binding is unavailable");
                    a++;
                }
            }), a !== i.size) throw new Error(`Fillet edge resolution failed: requested ${i.size}, found ${a}`);
            if (typeof s.Build == "function" && s.Build(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC fillet failed to build a valid result");
            return Ur(e, s.Shape());
        } finally{
            s.delete?.();
        }
    }
    function eb(e, t, r, n, i) {
        const o = at(e, t, r);
        let s;
        try {
            return s = ko(e, o.shape, n, i), Ve(e, s);
        } finally{
            s?.delete?.(), Xe(o);
        }
    }
    function tb(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Xi(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Chamfer distance must be a positive finite number");
        if (r.length === 0) throw new Error("Chamfer requires at least one edge");
        const i = new Set(r), o = tb(e, "BRepFilletAPI_MakeChamfer", [
            t
        ]);
        let s = 0;
        try {
            if (Aa(e, t, (a, d)=>{
                if (i.has(d)) {
                    if (typeof o.Add_2 == "function") o.Add_2(n, a);
                    else if (typeof o.Add == "function") o.Add(n, a);
                    else throw new Error("OCC chamfer Add binding is unavailable");
                    s++;
                }
            }), s !== i.size) throw new Error(`Chamfer edge resolution failed: requested ${i.size}, found ${s}`);
            if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error("OCC chamfer failed to build a valid result");
            return Ur(e, o.Shape());
        } finally{
            o.delete?.();
        }
    }
    function rb(e, t, r, n, i) {
        const o = at(e, t, r);
        let s;
        try {
            return s = Xi(e, o.shape, n, i), Ve(e, s);
        } finally{
            s?.delete?.(), Xe(o);
        }
    }
    function fi(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function nb(e, t) {
        const r = e;
        return new (r.gp_Pnt_3 ?? r.gp_Pnt)(t[0], t[1], t[2]);
    }
    function ib(e, t) {
        const r = e;
        return new (r.gp_Dir_4 ?? r.gp_Dir)(t[0], t[1], t[2]);
    }
    function ks(e, t) {
        const r = t.origin ?? t.center ?? [
            0,
            0,
            0
        ], n = nb(e, r), i = [
            n
        ];
        let o;
        try {
            if (t.type === "box") o = fi(e, "BRepPrimAPI_MakeBox", [
                n,
                t.length,
                t.width,
                t.height
            ]);
            else if (t.type === "sphere") o = fi(e, "BRepPrimAPI_MakeSphere", [
                n,
                t.radius
            ]);
            else {
                const s = ib(e, t.direction ?? [
                    0,
                    0,
                    1
                ]);
                i.push(s);
                const a = new (e.gp_Ax2_3 ?? e.gp_Ax2_2)(n, s);
                i.push(a), t.type === "cylinder" ? o = fi(e, "BRepPrimAPI_MakeCylinder", [
                    a,
                    t.radius,
                    t.height
                ]) : o = fi(e, "BRepPrimAPI_MakeCone", [
                    a,
                    t.bottomRadius,
                    t.topRadius,
                    t.height
                ]);
            }
            if (o.Build?.(), o.IsDone?.() === !1) throw new Error(`OCC ${t.type} construction failed`);
            return {
                shape: o.Shape(),
                dispose: ()=>{
                    o.delete?.();
                    for (const s of i)s.delete?.();
                }
            };
        } catch (s) {
            o?.delete?.();
            for (const a of i)a.delete?.();
            throw s;
        }
    }
    function _d(e, t) {
        const r = e, n = Object.keys(r).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new r[o];
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function ob(e, t, r, n, i) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Thickness offset must be positive and finite");
        if (r.length === 0) throw new Error("Thickness requires at least one removed face");
        const o = e, s = _d(e, "BRepOffsetAPI_MakeThickSolid"), a = _d(e, "TopTools_ListOfShape"), d = new Set(r.map((u)=>u.subMeshIndex)), l = new o.TopExp_Explorer_2(t, o.TopAbs_ShapeEnum.TopAbs_FACE, o.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let c = 0, f = 0;
        try {
            for(; l.More();){
                if (d.has(c)) {
                    const I = a.Append ?? a.Append_1 ?? a.append;
                    if (typeof I != "function") throw new Error("OCC TopTools_ListOfShape append binding is unavailable");
                    I.call(a, o.TopoDS.Face_1(l.Current())), f++;
                }
                c++, l.Next();
            }
            if (f !== d.size) throw Object.assign(new Error("Thickness face selector is lost on the current base solid"), {
                code: "topology-reference-lost"
            });
            const u = s.MakeThickSolidByJoin_1 ?? s.MakeThickSolidByJoin;
            if (typeof u != "function") throw new Error("OCC MakeThickSolidByJoin binding is unavailable");
            const h = o.BRepOffset_Mode?.BRepOffset_Skin ?? 0, y = o.GeomAbs_JoinType?.GeomAbs_Arc ?? 0;
            if (u.call(s, t, a, i ? -n : n, 1e-6, h, !1, !1, y, !1), s.Build?.(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC thickness failed to build a valid shell");
            return s.Shape();
        } finally{
            l.delete?.(), a.delete?.(), s.delete?.();
        }
    }
    function Ed(e, t, r, n) {
        const i = e, o = new i.gp_Trsf_1, s = new i.gp_Pnt_3(r[0], r[1], r[2]), a = new i.gp_Dir_4(n[0], n[1], n[2]), d = new (i.gp_Ax2_3 ?? i.gp_Ax2_2)(s, a), l = o.SetMirror_3 ?? o.SetMirror_2 ?? o.SetMirror_1 ?? o.SetMirror;
        if (typeof l != "function") throw new Error("OCC mirror transform API unavailable");
        l.call(o, d);
        const c = new i.BRepBuilderAPI_Transform_2(t, o, !0);
        if (c.Build?.(), c.IsDone?.() === !1) throw new Error("OCC mirror transform failed");
        return {
            shape: c.Shape(),
            delete: ()=>{
                c.delete?.(), d.delete?.(), s.delete?.(), a.delete?.(), o.delete?.();
            }
        };
    }
    function sb(e, t) {
        const r = Math.hypot(...e.normal), n = Math.hypot(...t.normal);
        if (r <= 1e-12 || n <= 1e-12) return !1;
        const i = e.normal.map((d)=>d / r), o = t.normal.map((d)=>d / n);
        if (!(Math.abs(i[0] * o[0] + i[1] * o[1] + i[2] * o[2]) >= 1 - 1e-9)) return !1;
        const a = [
            t.origin[0] - e.origin[0],
            t.origin[1] - e.origin[1],
            t.origin[2] - e.origin[2]
        ];
        return Math.abs(a[0] * i[0] + a[1] * i[1] + a[2] * i[2]) <= 1e-7;
    }
    function ab(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function db(e, t) {
        if (t.length < 2) throw new Error("Loft requires at least two section profiles");
        for(let i = 1; i < t.length; i++)if (sb(t[i - 1], t[i])) throw new Error(`Loft sections ${i} and ${i + 1} are coplanar; use distinct section planes`);
        const r = ab(e, "BRepOffsetAPI_ThruSections", [
            !0,
            !1,
            1e-6
        ]), n = t.map((i)=>Et(e, i));
        try {
            const i = r.AddWire ?? r.AddWire_1 ?? r.Add;
            if (typeof i != "function") throw new Error("OCC ThruSections AddWire binding is unavailable");
            for (const o of n)i.call(r, o.outerWire);
            if (r.Build?.(), typeof r.IsDone == "function" && !r.IsDone()) throw new Error("OCC loft failed to build a valid result");
            return r.Shape();
        } finally{
            r.delete?.();
            for (const i of n){
                i.faceMaker.delete?.(), i.wireBuilder.delete?.();
                for (const o of i.innerWireBuilders)o.delete?.();
            }
        }
    }
    function vs(e) {
        for(let t = e.length - 1; t >= 0; t -= 1)e[t]?.delete?.();
    }
    function cb(e) {
        const t = e.handedness === "left" ? -1 : 1, r = e.pitch / (Math.PI * 2), n = Math.hypot(1, r), i = e.height / e.pitch;
        return {
            direction: [
                t / n,
                r / n
            ],
            endParameter: i * Math.PI * 2 * n
        };
    }
    function lb(e, t) {
        const r = e;
        if (Math.abs(t.radius) <= 1e-12) throw new Error("Analytic Helix radius must be non-zero");
        if (t.pitch <= 0) throw new Error("Analytic Helix pitch must be positive");
        const n = (s, a)=>wn(r, s, a), i = [], o = (s)=>(i.push(s), s);
        try {
            const s = o(n("gp_Pnt", [
                ...t.axisOrigin
            ])), a = o(n("gp_Dir", [
                ...t.axisDirection
            ])), d = o(n("gp_Ax3", [
                s,
                a
            ])), l = o(n("gp_Cylinder", [
                d,
                t.radius
            ])), c = o(n("Geom_CylindricalSurface", [
                l
            ])), f = o(n("gp_Pnt2d", [
                t.startAngle,
                0
            ])), u = cb(t), h = o(n("gp_Dir2d", u.direction)), y = o(n("Geom2d_Line", [
                f,
                h
            ])), I = o(n("Handle_Geom2d_Curve", [
                y
            ]));
            i.splice(i.indexOf(y), 1);
            const g = o(n("Handle_Geom_Surface", [
                c
            ]));
            i.splice(i.indexOf(c), 1);
            const x = o(n("BRepBuilderAPI_MakeEdge", [
                I,
                g,
                0,
                u.endParameter
            ])), v = x.Edge?.() ?? x.edge?.();
            if (!v) throw new Error("OCC failed to create the analytic Helix edge");
            return o(v), {
                edge: v,
                resources: i
            };
        } catch (s) {
            throw vs(i), s;
        }
    }
    function wn(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function vo(e, t, r = 32) {
        const n = e;
        if (t.radius === t.endRadius && t.pitch === t.endPitch) {
            const d = lb(e, t);
            let l;
            try {
                l = wn(n, "BRepBuilderAPI_MakeWire", []);
                const c = l.Add_1 ?? l.Add;
                if (typeof c != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
                c.call(l, d.edge);
                const f = l.Wire();
                d.resources.push(f);
                const u = n.BRepLib?.BuildCurves3d_2;
                if (typeof u != "function") throw new Error("OCC BRepLib.BuildCurves3d binding is unavailable");
                if (u.call(n.BRepLib, f) === !1) throw new Error("OCC failed to build the analytic Helix 3-D curve");
                return {
                    wire: f,
                    builder: l,
                    resources: d.resources
                };
            } catch (c) {
                throw l?.delete?.(), vs(d.resources), c;
            }
        }
        const o = (d)=>wn(n, "gp_Pnt", [
                d[0],
                d[1],
                d[2]
            ]), s = wn(n, "BRepBuilderAPI_MakeWire", []), a = [];
        try {
            const d = s.Add_1 ?? s.Add;
            if (typeof d != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
            const { points: l } = aa(t, r);
            for(let c = 0; c < l.length - 1; c += 1){
                const f = o(l[c]);
                a.push(f);
                const u = o(l[c + 1]);
                a.push(u);
                const h = wn(n, "BRepBuilderAPI_MakeEdge", [
                    f,
                    u
                ]);
                a.push(h), d.call(s, h.Edge?.() ?? h.edge?.() ?? h);
            }
            return {
                wire: s.Wire(),
                builder: s,
                resources: a
            };
        } catch (d) {
            throw s.delete?.(), vs(a), d;
        }
    }
    function ub(e, t) {
        const r = Math.hypot(...e.normal), n = Math.hypot(...t.normal);
        if (r <= 1e-12 || n <= 1e-12) return !1;
        const i = e.normal.map((d)=>d / r), o = t.normal.map((d)=>d / n);
        if (!(Math.abs(i[0] * o[0] + i[1] * o[1] + i[2] * o[2]) >= 1 - 1e-9)) return !1;
        const a = [
            t.origin[0] - e.origin[0],
            t.origin[1] - e.origin[1],
            t.origin[2] - e.origin[2]
        ];
        return Math.abs(a[0] * i[0] + a[1] * i[1] + a[2] * i[2]) <= 1e-7;
    }
    function _n(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function fb(e, t, r) {
        const n = e, i = n.gp_Pnt_3 ?? n.gp_Pnt, o = n.BRepBuilderAPI_MakeEdge_3 ?? n.BRepBuilderAPI_MakeEdge;
        if (typeof i != "function" || typeof o != "function") throw new Error("OCC 3D line edge binding is unavailable");
        const s = new i(t[0], t[1], t[2]), a = new i(r[0], r[1], r[2]), d = new o(s, a);
        try {
            return d.Edge();
        } finally{
            d.delete?.(), s.delete?.(), a.delete?.();
        }
    }
    function Ad(e, t, r = !0) {
        const i = (t.geometry ?? []).flatMap((c)=>c.kind === "line" ? [
                {
                    kind: "line",
                    start: c.start,
                    end: c.end
                }
            ] : c.kind === "bezier" ? [
                {
                    kind: "bezier",
                    controls: c.controls
                }
            ] : c.kind === "spline" ? [
                {
                    kind: "spline",
                    controls: c.controls,
                    tension: c.tension
                }
            ] : []), o = [
            ...(t.loops.find((c)=>c.isOuter) ?? t.loops[0])?.points ?? []
        ];
        if (i.length === 0) for(let c = 0; c < o.length - 1; c++)i.push({
            kind: "line",
            start: o[c],
            end: o[c + 1]
        });
        if (i.length === 0) throw new Error("Pipe path requires at least one curve segment");
        const s = _n(e, "BRepBuilderAPI_MakeWire", []), a = [], d = s.Add_1 ?? s.Add;
        if (typeof d != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
        const l = r ? i : i.flatMap((c)=>{
            const f = Ic(c), u = [];
            for(let h = 0; h < f.length - 1; h++)u.push({
                kind: "line",
                start: f[h],
                end: f[h + 1]
            });
            return c.kind === "circle" && f.length > 2 && u.push({
                kind: "line",
                start: f[f.length - 1],
                end: f[0]
            }), u;
        });
        for (const c of l){
            const f = c.start, u = c.end, h = Array.isArray(f) ? f : f && typeof f == "object" && Number.isFinite(f.z) ? [
                f.x,
                f.y,
                f.z
            ] : null, y = Array.isArray(u) ? u : u && typeof u == "object" && Number.isFinite(u.z) ? [
                u.x,
                u.y,
                u.z
            ] : null;
            h && y ? d.call(s, fb(e, h, y)) : d.call(s, Cl(e, t, c, a));
        }
        return {
            wire: s.Wire(),
            points: [],
            builder: s,
            resources: a
        };
    }
    function pb(e, t, r, n = "frenet", i = {}) {
        const o = Array.isArray(t) ? t : [
            t
        ];
        if (o.length === 0) throw new Error("Pipe requires at least one section profile");
        for(let c = 1; c < o.length; c++)if (ub(o[c - 1], o[c])) throw new Error(`Pipe sections ${c} and ${c + 1} are coplanar; place sections along the path`);
        if (i.scalingMethod && i.scalingMethod.toLowerCase() !== "constant") throw new Error(`Unsupported UG Pipe scaling method: ${i.scalingMethod}`);
        if (i.sectionInterpolation && i.sectionInterpolation.toLowerCase() !== "linear") throw new Error(`Unsupported UG Pipe section interpolation: ${i.sectionInterpolation}`);
        const s = o.map((c)=>Et(e, c)), a = (r.geometry ?? []).some((c)=>c.kind === "bezier" || c.kind === "spline");
        let d = i.analyticHelix ? vo(e, i.analyticHelix, 64) : Ad(e, r, !0), l;
        try {
            const c = i.preserveShape !== !1;
            if (o.length > 1 || i.preserveShape === !0 || n === "fixed" && i.orientationDirection !== void 0) {
                l = _n(e, "BRepOffsetAPI_MakePipeShell", [
                    d.wire
                ]), n === "fixed" && i.orientationDirection && yb(e, l, i.orientationDirection);
                const h = e.BRepBuilderAPI_TransitionMode?.BRepBuilderAPI_Transformed;
                if (h !== void 0 && l.SetTransitionMode?.(h), i.tolDistance !== void 0 || i.tolAngleDeg !== void 0) {
                    const y = i.tolDistance ?? 1e-4, I = i.tolAngleDeg === void 0 ? .01 : i.tolAngleDeg * Math.PI / 180;
                    l.SetTolerance?.(y, y, I);
                }
                l.SetMaxDegree?.(5), l.SetMaxSegments?.(200);
                for(let y = 0; y < s.length; y += 1){
                    const I = s[y], g = s.length === 1 ? mb(e, d.wire, o[y].origin, i.tolDistance) : void 0;
                    try {
                        hb(l, I.outerWire, g, c);
                    } finally{
                        g?.delete?.();
                    }
                }
                if (l.Build?.(), typeof l.IsDone == "function" && !l.IsDone()) throw new Error("OCC PipeShell failed to build the UG sweep");
                return l.MakeSolid?.(), l.Shape();
            }
            const u = s[0];
            try {
                l = _n(e, "BRepOffsetAPI_MakePipe", [
                    d.wire,
                    u.face
                ]);
            } catch (h) {
                if (!a) throw h;
                d.builder.delete?.();
                for (const y of d.resources)y.delete?.();
                d = Ad(e, r, !1), l = _n(e, "BRepOffsetAPI_MakePipe", [
                    d.wire,
                    u.face
                ]);
            }
            if (l.Build?.(), typeof l.IsDone == "function" && !l.IsDone()) throw new Error("OCC pipe failed to build a valid result");
            return l.Shape();
        } finally{
            l?.delete?.(), d.builder.delete?.();
            for (const c of d.resources)c.delete?.();
            for (const c of s){
                c.faceMaker.delete?.(), c.wireBuilder.delete?.();
                for (const f of c.innerWireBuilders)f.delete?.();
            }
        }
    }
    function hb(e, t, r, n) {
        if (r) {
            if (typeof e.Add_2 != "function") throw new Error("OCC located PipeShell section binding is unavailable");
            e.Add_2(t, r, !1, n);
            return;
        }
        if (typeof e.Add_1 != "function") throw new Error("OCC PipeShell section binding is unavailable");
        e.Add_1(t, !1, n);
    }
    function mb(e, t, r, n = 1e-4) {
        const i = new e.TopExp_Explorer_2(t, e.TopAbs_ShapeEnum.TopAbs_VERTEX, e.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let o, s;
        try {
            if (!i.More()) return;
            if (o = e.TopoDS.Vertex_1(i.Current()), s = e.BRep_Tool.Pnt(o), Math.hypot(s.X() - r[0], s.Y() - r[1], s.Z() - r[2]) <= Math.max(n, 1e-7)) return o;
            o.delete?.();
            return;
        } finally{
            s?.delete?.(), i.delete?.();
        }
    }
    function yb(e, t, r) {
        const n = _n(e, "gp_Dir", [
            r[0],
            r[1],
            r[2]
        ]);
        try {
            for (const i of [
                "SetMode_2",
                "SetMode_1",
                "SetMode_3",
                "SetMode_4"
            ])if (typeof t[i] == "function") try {
                t[i](n);
                return;
            } catch  {}
            throw new Error("OCC PipeShell forced-direction mode is unavailable");
        } finally{
            n.delete?.();
        }
    }
    function un(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function gb(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let o = 0;
        try {
            for(; i.More();){
                if (o === r.subMeshIndex) return n.TopoDS.Face_1(i.Current());
                o++, i.Next();
            }
        } finally{
            i.delete?.();
        }
        throw Object.assign(new Error(`Draft face ${r.provenance.featureId}:${r.provenance.role} is lost`), {
            code: "topology-reference-lost"
        });
    }
    const Ib = {
        0: "Draft_NoError",
        1: "Draft_FaceRecomputation",
        2: "Draft_EdgeRecomputation",
        3: "Draft_VertexRecomputation"
    };
    function Ql(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function pi(e) {
        const t = Ql(e);
        return t != null ? `${Ib[t] ?? "Draft_UnknownError"} (${t})` : typeof e == "string" && e.length > 0 ? e : "Draft_UnknownError";
    }
    function hi(e) {
        switch(Ql(e)){
            case 1:
                return "the selected draft surface cannot be recomputed with this hinge and direction";
            case 2:
                return "an adjacent edge cannot be rebuilt; reduce the angle or change the hinge/direction";
            case 3:
                return "an adjacent vertex cannot be rebuilt; reduce the angle or change the selected surfaces";
            default:
                return "check that the draft surface intersects the hinge plane and the pull direction crosses that plane";
        }
    }
    function bb(e, t) {
        const r = e.face.plane?.normal;
        if (r && Math.hypot(r[1] * e.neutralPlane.normal[2] - r[2] * e.neutralPlane.normal[1], r[2] * e.neutralPlane.normal[0] - r[0] * e.neutralPlane.normal[2], r[0] * e.neutralPlane.normal[1] - r[1] * e.neutralPlane.normal[0]) <= 1e-7) throw new Error(`Draft surface ${e.face.provenance.featureId}:${e.face.provenance.role} is parallel to the hinge plane, so no rotation hinge line exists`);
        if (Math.abs(t[0] * e.neutralPlane.normal[0] + t[1] * e.neutralPlane.normal[1] + t[2] * e.neutralPlane.normal[2]) <= 1e-7) throw new Error("Draft pull direction lies in the hinge plane; select a direction that crosses the hinge plane");
    }
    function wb(e, t, r, n) {
        try {
            return Zi(e, t, [
                r
            ], n);
        } catch  {
            return Zi(e, t, [
                {
                    ...r,
                    angle: -r.angle
                }
            ], n);
        }
    }
    function Ko(e, t, r, n) {
        let i = t, o = 0, s = null;
        for (const a of r)try {
            i = wb(e, i, a, n), o += 1;
        } catch (d) {
            s = d instanceof Error ? d.message : String(d);
        }
        if (o !== r.length) throw new Error(s ?? "OCC draft add failed for every selected surface");
        return i;
    }
    function Zi(e, t, r, n) {
        if (r.length === 0) throw new Error("Draft requires at least one face operation");
        const i = e, o = un(i, "gp_Dir", n), s = un(i, "BRepOffsetAPI_DraftAngle", []), a = [];
        try {
            s.Init(t);
            let d = 0, l = null;
            for (const u of r){
                if (!Number.isFinite(u.angle) || Math.abs(u.angle) <= 0 || Math.abs(u.angle) >= Math.PI / 2) throw new Error("Draft angle is invalid");
                bb(u, n);
                const h = un(i, "gp_Pnt", u.neutralPlane.origin), y = un(i, "gp_Dir", u.neutralPlane.normal), I = un(i, "gp_Pln", [
                    h,
                    y
                ]);
                a.push(I, y, h);
                let g;
                try {
                    if (g = gb(e, t, u.face), s.Add(g, o, u.angle, I, !0), typeof s.AddDone == "function" && !s.AddDone()) {
                        const x = s.Status?.();
                        try {
                            s.Remove?.(g);
                        } catch  {}
                        l = `OCC draft add failed for ${u.face.provenance.featureId}:${u.face.provenance.role}: ${pi(x)}; ${hi(x)}`;
                        continue;
                    }
                    d += 1;
                } catch (x) {
                    try {
                        s.Remove?.(g);
                    } catch  {}
                    l = x instanceof Error ? x.message : `WASM/OCC exception ${String(x)}`;
                }
            }
            if (d === 0 || l) throw new Error(l ?? "OCC draft add failed for every selected surface");
            try {
                s.Build?.();
            } catch (u) {
                if (r.length > 1) return Ko(e, t, r, n);
                const h = typeof s.Status == "function" ? s.Status() : 0;
                throw new Error(`OCC draft build failed: ${pi(h)}; ${hi(h)}` + (u instanceof Error ? `; ${u.message}` : ""));
            }
            const c = typeof s.Status == "function" ? s.Status() : 0;
            let f;
            try {
                f = s.ModifiedShape?.(t) ?? s.Shape?.();
            } catch (u) {
                if (r.length > 1) return Ko(e, t, r, n);
                throw new Error(`OCC draft build failed: ${pi(c)}; ${hi(c)}` + (u instanceof Error ? `; ${u.message}` : ` WASM/OCC exception ${String(u)}`));
            }
            if (!f || typeof s.IsDone == "function" && !s.IsDone()) {
                if (r.length > 1) return Ko(e, t, r, n);
                throw new Error(`OCC draft build failed: ${pi(c)}; ${hi(c)}`);
            }
            return f;
        } catch (d) {
            throw d instanceof Error ? d : new Error(`OCC draft failed: WASM/OCC exception ${String(d)}`);
        } finally{
            s.delete?.();
            for (const d of a.reverse())d.delete?.();
            o.delete?.();
        }
    }
    function yt(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function xb(e, t, r, n) {
        const i = e, o = Math.hypot(...r.normal);
        if (o <= 1e-9) throw new Error("Split plane normal is degenerate");
        const s = r.normal.map((h)=>h / o), a = yt(i, "gp_Pnt", r.origin), d = yt(i, "gp_Dir", s), l = yt(i, "gp_Pln", [
            a,
            d
        ]), c = yt(i, "BRepBuilderAPI_MakeFace", [
            l,
            -1e6,
            1e6,
            -1e6,
            1e6
        ]), f = c.Face?.() ?? c.Shape?.();
        if (!f) throw new Error("OCC Split failed to construct the splitting plane");
        const u = [
            c,
            l,
            d,
            a
        ];
        try {
            const h = (g)=>{
                const x = g > 0 ? "positive" : "negative", v = yt(i, "gp_Pnt", [
                    r.origin[0] + s[0] * g,
                    r.origin[1] + s[1] * g,
                    r.origin[2] + s[2] * g
                ]), b = yt(i, "BRepPrimAPI_MakeHalfSpace", [
                    f,
                    v
                ]);
                if (u.unshift(b, v), b.Build?.(), b.IsDone?.() === !1) throw new Error("OCC Split half-space construction failed");
                const m = b.Solid?.() ?? b.Shape?.(), w = yt(i, "BRepAlgoAPI_Common", [
                    t,
                    m
                ]);
                if (u.unshift(w), w.Build?.(), w.IsDone?.() === !1) throw new Error(`OCC Split ${x} side intersection failed`);
                const S = w.Shape?.();
                if (!S) throw new Error(`OCC Split produced no ${x} side result`);
                return S;
            };
            let y, I;
            if (n === "both") {
                const g = h(1), x = h(-1);
                I = [
                    {
                        side: "positive",
                        shape: g
                    },
                    {
                        side: "negative",
                        shape: x
                    }
                ];
                const v = yt(i, "TopoDS_Compound", []), b = yt(i, "BRep_Builder", []);
                u.unshift(b), b.MakeCompound(v), b.Add(v, g), b.Add(v, x), y = v;
            } else y = h(n === "positive" ? 1 : -1);
            return {
                shape: y,
                ...I ? {
                    outputs: I
                } : {},
                dispose: ()=>u.forEach((g)=>g.delete?.())
            };
        } catch (h) {
            throw u.forEach((y)=>y.delete?.()), h;
        }
    }
    function En(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} unavailable`);
    }
    function Sb(e, t, r, n) {
        const i = t.subMeshes[r.subMeshIndex];
        if (!i) throw new Error(`Face Pull submesh ${r.subMeshIndex} is lost`);
        const o = t.indices ? Array.from(t.indices.slice(i.firstIndex, i.firstIndex + i.indexCount)) : Array.from({
            length: i.indexCount
        }, (I, g)=>i.firstIndex + g), s = new Map;
        for(let I = 0; I + 2 < o.length; I += 3){
            const g = [
                o[I],
                o[I + 1],
                o[I + 2]
            ];
            for(let x = 0; x < 3; x += 1){
                const v = g[x], b = g[(x + 1) % 3], m = v < b ? `${v}:${b}` : `${b}:${v}`, w = s.get(m);
                s.set(m, w ? {
                    ...w,
                    count: w.count + 1
                } : {
                    first: v,
                    second: b,
                    count: 1
                });
            }
        }
        const a = new Map;
        for (const I of s.values())I.count === 1 && ((a.get(I.first) ?? a.set(I.first, []).get(I.first)).push(I.second), (a.get(I.second) ?? a.set(I.second, []).get(I.second)).push(I.first));
        const d = a.keys().next().value;
        if (d === void 0) throw new Error("Face Pull could not resolve the selected face boundary");
        const l = [
            d
        ];
        let c = -1, f = d;
        for(; l.length <= a.size + 1;){
            const I = a.get(f)?.find((g)=>g !== c);
            if (I === void 0) throw new Error("Face Pull selected face boundary is open");
            if (I === d) break;
            l.push(I), c = f, f = I;
        }
        if (l.length < 3) throw new Error("Face Pull selected face boundary is degenerate");
        const u = En(e, "BRepBuilderAPI_MakePolygon", []);
        n.push(u);
        const h = u.Add_1 ?? u.Add;
        for (const I of l){
            const g = En(e, "gp_Pnt", [
                t.positions[I * 3],
                t.positions[I * 3 + 1],
                t.positions[I * 3 + 2]
            ]);
            n.push(g), h.call(u, g);
        }
        u.Close?.();
        const y = En(e, "BRepBuilderAPI_MakeFace", [
            u.Wire(),
            !0
        ]);
        return n.push(y), y.Face?.() ?? y.Shape();
    }
    function eu(e, t, r, n, i, o, s) {
        const a = e, d = En(a, "gp_Vec", [
            i[0] * o,
            i[1] * o,
            i[2] * o
        ]), l = [], c = [], f = [];
        let u;
        try {
            const h = n.map((g)=>{
                const x = En(a, "BRepPrimAPI_MakePrism", [
                    Sb(a, r, g, f),
                    d,
                    !0,
                    !0
                ]);
                if (x.Build?.(), x.IsDone?.() === !1) throw new Error("OCC Face Pull prism failed");
                return l.push(x), x.Shape();
            });
            let y = h[0];
            for(let g = 1; g < h.length; g += 1){
                const x = Lt(e, y, h[g], "union");
                c.push(x), y = x.Shape();
            }
            return u = Lt(e, t, y, s === "add" ? "union" : "cut"), {
                shape: u.Shape(),
                dispose: ()=>{
                    u?.delete?.();
                    for (const g of c.reverse())g.delete?.();
                    for (const g of l.reverse())g.delete?.();
                    for (const g of f.reverse())g.delete?.();
                    d.delete?.();
                }
            };
        } catch (h) {
            u?.delete?.();
            for (const y of c.reverse())y.delete?.();
            for (const y of l.reverse())y.delete?.();
            for (const y of f.reverse())y.delete?.();
            throw d.delete?.(), h;
        }
    }
    function fn(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Lo(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function kb(e, t) {
        const r = fn(e.axisDirection), n = Math.abs(r[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], i = fn(Lo(n, r)), o = fn(Lo(r, i)), s = e.handedness === "left" ? -1 : 1, a = fn([
            o[0] * s + r[0] * e.pitch / (Math.PI * 2 * e.radius),
            o[1] * s + r[1] * e.pitch / (Math.PI * 2 * e.radius),
            o[2] * s + r[2] * e.pitch / (Math.PI * 2 * e.radius)
        ]), d = fn(Lo(a, i)), l = t.majorRadius - t.depth;
        return {
            loops: [
                {
                    isOuter: !0,
                    points: [
                        {
                            x: l,
                            y: -t.pitch / 2
                        },
                        {
                            x: t.majorRadius,
                            y: 0
                        },
                        {
                            x: l,
                            y: t.pitch / 2
                        }
                    ]
                }
            ],
            origin: e.axisOrigin,
            normal: a,
            uAxis: i,
            vAxis: d
        };
    }
    function tu(e, t, r, n) {
        if (r.profileKind === "custom_sketch" && !n) throw new Error("Custom Thread profile is unavailable");
        if (Math.abs(r.pitch - t.pitch) > 1e-9) throw new Error("Thread pitch must match Helix pitch");
        if (Math.abs(r.majorRadius - t.radius) > Math.max(1e-7, t.radius * 1e-6)) throw new Error("Thread major radius must match Helix radius");
        if (r.profileKind === "metric_triangle" && r.depth > Math.min(t.pitch, t.endPitch) * .75) throw new Error("Thread profile would self-intersect");
        const i = Et(e, n ?? kb(t, r)), o = vo(e, t, 8), s = e, a = Object.keys(s).filter((c)=>c === "BRepOffsetAPI_MakePipe" || c.startsWith("BRepOffsetAPI_MakePipe_"));
        let d, l;
        try {
            for (const c of a)try {
                d = new s[c](o.wire, i.face);
                break;
            } catch (f) {
                l = f;
            }
            if (!d) throw l instanceof Error ? l : new Error("OCC MakePipe binding is unavailable");
            if (d.Build?.(), typeof d.IsDone == "function" && !d.IsDone()) throw new Error("OCC Thread sweep failed");
            return d.Shape();
        } finally{
            d?.delete?.(), o.builder.delete?.();
            for (const c of o.resources)c.delete?.();
            i.faceMaker.delete?.(), i.wireBuilder.delete?.();
            for (const c of i.innerWireBuilders)c.delete?.();
        }
    }
    class vb {
        bodies = new Map;
        publish(t) {
            let r = this.bodies.get(t.bodyId);
            r || (r = new Map, this.bodies.set(t.bodyId, r));
            const n = r.get(t.featureId);
            n && n.shape !== t.shape && mi(n.shape), r.set(t.featureId, t);
        }
        lookup(t, r) {
            return this.bodies.get(t)?.get(r) ?? null;
        }
        drop(t, r) {
            const n = this.bodies.get(t);
            if (!n) return !1;
            const i = n.get(r);
            return i ? (mi(i.shape), n.delete(r), n.size === 0 && this.bodies.delete(t), !0) : !1;
        }
        invalidateFromHistoryIndex(t, r) {
            const n = this.bodies.get(t);
            if (!n) return 0;
            let i = 0;
            for (const [o, s] of [
                ...n
            ])s.historyIndex >= r && (mi(s.shape), n.delete(o), i += 1);
            return n.size === 0 && this.bodies.delete(t), i;
        }
        invalidateFeatureIds(t, r) {
            let n = 0;
            for (const i of r)this.drop(t, i) && (n += 1);
            return n;
        }
        clearBody(t) {
            const r = this.bodies.get(t);
            if (r) {
                for (const n of r.values())mi(n.shape);
                this.bodies.delete(t);
            }
        }
        clear() {
            for (const t of [
                ...this.bodies.keys()
            ])this.clearBody(t);
        }
    }
    function Od(e) {
        return {
            positions: new Float32Array(e.positions),
            ...e.normals ? {
                normals: new Float32Array(e.normals)
            } : {},
            ...e.uvs ? {
                uvs: new Float32Array(e.uvs)
            } : {},
            ...e.colors ? {
                colors: new Float32Array(e.colors)
            } : {},
            ...e.indices ? {
                indices: e.indices instanceof Uint16Array ? new Uint16Array(e.indices) : new Uint32Array(e.indices)
            } : {},
            subMeshes: e.subMeshes.map((t)=>({
                    ...t
                }))
        };
    }
    function Pd(e) {
        return {
            faces: e.faces.map((t)=>({
                    ...t,
                    provenance: {
                        ...t.provenance,
                        ...t.provenance.parentFaceIds ? {
                            parentFaceIds: [
                                ...t.provenance.parentFaceIds
                            ]
                        } : {}
                    },
                    ...t.normal ? {
                        normal: [
                            ...t.normal
                        ]
                    } : {},
                    ...t.centroid ? {
                        centroid: [
                            ...t.centroid
                        ]
                    } : {},
                    ...t.plane ? {
                        plane: {
                            ...t.plane,
                            origin: [
                                ...t.plane.origin
                            ],
                            normal: [
                                ...t.plane.normal
                            ],
                            uAxis: [
                                ...t.plane.uAxis
                            ],
                            vAxis: [
                                ...t.plane.vAxis
                            ]
                        }
                    } : {}
                })),
            edges: e.edges.map((t)=>({
                    ...t,
                    provenance: {
                        ...t.provenance,
                        ...t.provenance.parentFaceIds ? {
                            parentFaceIds: [
                                ...t.provenance.parentFaceIds
                            ]
                        } : {}
                    },
                    faceIds: [
                        ...t.faceIds
                    ],
                    startVertex: [
                        ...t.startVertex
                    ],
                    endVertex: [
                        ...t.endVertex
                    ],
                    ...t.midpoint ? {
                        midpoint: [
                            ...t.midpoint
                        ]
                    } : {},
                    ...t.polyline ? {
                        polyline: t.polyline.map((r)=>[
                                ...r
                            ])
                    } : {}
                }))
        };
    }
    function mi(e) {
        const t = e;
        try {
            t.delete?.();
        } catch  {}
    }
    function Fb(e) {
        return Fs(e);
    }
    function _b(e, t) {
        return e.bodyId === t.bodyId && e.featureId === t.featureId && e.committedRevision === t.committedRevision && e.prefixFingerprint === t.prefixFingerprint && e.replayProtocolVersion === t.replayProtocolVersion && e.runtimeIdentity.occRuntimeId === t.runtimeIdentity.occRuntimeId && e.runtimeIdentity.wasmBuildId === t.runtimeIdentity.wasmBuildId;
    }
    class Eb {
        slots = new Map;
        staged = new Map;
        nextGeneration = 1;
        stage(t) {
            const r = Fs(t.key), n = ru(t.historyIndex, "historyIndex"), i = tr(t.generatingFeatureId, "generatingFeatureId"), o = tr(t.opKind, "opKind"), s = this.nextGeneration;
            this.nextGeneration += 1;
            const a = Object.freeze({
                key: r,
                generation: s,
                state: "candidate",
                readerCount: 0,
                historyIndex: n,
                generatingFeatureId: i,
                opKind: o
            });
            return this.staged.set(s, {
                candidate: a,
                shape: t.shape
            }), a;
        }
        publish(t) {
            if (t.state !== "candidate") throw new Error("OccShapeCache.publish requires a candidate generation");
            const r = this.staged.get(t.generation);
            if (!r || r.candidate !== t) throw new Error("OccShapeCache.publish requires a live staged candidate");
            this.staged.delete(t.generation);
            const n = pn(t.key.bodyId, t.key.featureId);
            let i = this.slots.get(n);
            i || (i = {
                live: null,
                retiring: []
            }, this.slots.set(n, i)), this.retireLive(i);
            const o = new Ab(t, r.shape);
            return i.live = o, Md(o);
        }
        acquire(t) {
            const r = this.liveMatching(t);
            if (!r || r.state !== "committed") return null;
            r.readerCount += 1;
            let n = !1;
            return Object.freeze({
                key: r.key,
                generation: r.generation,
                shape: r.shape,
                release: ()=>{
                    n || (n = !0, this.releaseRecord(r));
                }
            });
        }
        lookup(t) {
            const r = this.liveMatching(t);
            return r ? Md(r) : null;
        }
        discard(t) {
            const r = this.staged.get(t.generation);
            !r || r.candidate !== t || (this.staged.delete(t.generation), Or(r.shape));
        }
        drop(t, r) {
            this.discardStaged(t, r);
            const n = pn(t, r), i = this.slots.get(n);
            i && (this.retireLive(i), !i.live && i.retiring.length === 0 && this.slots.delete(n));
        }
        invalidateFeatureIds(t, r) {
            let n = 0;
            for (const i of r){
                const o = this.slots.has(pn(t, i)), s = [
                    ...this.staged.values()
                ].some((a)=>a.candidate.key.bodyId === t && a.candidate.key.featureId === i);
                this.drop(t, i), (o || s) && (n += 1);
            }
            return n;
        }
        invalidateFromHistoryIndex(t, r) {
            let n = 0;
            for (const i of [
                ...this.slots.values()
            ]){
                const o = i.live;
                !o || o.key.bodyId !== t || o.historyIndex < r || (this.drop(o.key.bodyId, o.key.featureId), n += 1);
            }
            for (const [i, o] of [
                ...this.staged
            ])o.candidate.key.bodyId !== t || o.candidate.historyIndex < r || (this.staged.delete(i), Or(o.shape), n += 1);
            return n;
        }
        clearBody(t) {
            for (const [n, i] of [
                ...this.staged
            ])i.candidate.key.bodyId === t && (this.staged.delete(n), Or(i.shape));
            const r = `${t}\0`;
            for (const [n, i] of [
                ...this.slots
            ])n.startsWith(r) && (this.retireLive(i), !i.live && i.retiring.length === 0 && this.slots.delete(n));
        }
        clear() {
            for (const t of this.staged.values())Or(t.shape);
            this.staged.clear();
            for (const [t, r] of [
                ...this.slots
            ])this.retireLive(r), !r.live && r.retiring.length === 0 && this.slots.delete(t);
        }
        discardStaged(t, r) {
            for (const [n, i] of [
                ...this.staged
            ])i.candidate.key.bodyId !== t || i.candidate.key.featureId !== r || (this.staged.delete(n), Or(i.shape));
        }
        liveMatching(t) {
            const r = this.slots.get(pn(t.bodyId, t.featureId));
            return r?.live && _b(r.live.key, Fs(t)) ? r.live : null;
        }
        retireLive(t) {
            const r = t.live;
            if (r) {
                if (t.live = null, r.readerCount > 0) {
                    r.state = "retiring", t.retiring.push(r);
                    return;
                }
                r.dispose();
            }
        }
        releaseRecord(t) {
            if (t.readerCount > 0 && (t.readerCount -= 1), t.state !== "retiring" || t.readerCount > 0) return;
            t.dispose();
            const r = pn(t.key.bodyId, t.key.featureId), n = this.slots.get(r);
            n && (n.retiring = n.retiring.filter((i)=>i !== t), !n.live && n.retiring.length === 0 && this.slots.delete(r));
        }
    }
    class Ab {
        key;
        generation;
        historyIndex;
        generatingFeatureId;
        opKind;
        state = "committed";
        readerCount = 0;
        shape;
        constructor(t, r){
            this.key = t.key, this.generation = t.generation, this.historyIndex = t.historyIndex, this.generatingFeatureId = t.generatingFeatureId, this.opKind = t.opKind, this.shape = r;
        }
        dispose() {
            if (this.state === "disposed") return;
            this.state = "disposed";
            const t = this.shape;
            this.shape = null, Or(t);
        }
    }
    function Md(e) {
        return Object.freeze({
            key: e.key,
            generation: e.generation,
            state: e.state,
            readerCount: e.readerCount,
            historyIndex: e.historyIndex,
            generatingFeatureId: e.generatingFeatureId,
            opKind: e.opKind
        });
    }
    function pn(e, t) {
        return `${e}\0${t}`;
    }
    function Fs(e) {
        return Object.freeze({
            bodyId: tr(e.bodyId, "bodyId"),
            featureId: tr(e.featureId, "featureId"),
            committedRevision: ru(e.committedRevision, "committedRevision"),
            prefixFingerprint: tr(e.prefixFingerprint, "prefixFingerprint"),
            replayProtocolVersion: Ob(e.replayProtocolVersion, "replayProtocolVersion"),
            runtimeIdentity: Object.freeze({
                occRuntimeId: tr(e.runtimeIdentity?.occRuntimeId, "runtimeIdentity.occRuntimeId"),
                wasmBuildId: tr(e.runtimeIdentity?.wasmBuildId, "runtimeIdentity.wasmBuildId")
            })
        });
    }
    function tr(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`OccShapeCache.${t} must not be empty`);
        return e;
    }
    function ru(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`OccShapeCache.${t} must be a non-negative safe integer`);
        return e;
    }
    function Ob(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0) throw new Error(`OccShapeCache.${t} must be a positive safe integer`);
        return e;
    }
    function Or(e) {
        const t = e;
        try {
            t.delete?.();
        } catch  {}
    }
    const Pr = new El, _s = new vb, It = new Eb, ur = new Map, Oa = new Set, Kn = new Map;
    let Rd = 1;
    function Pb(e) {
        const t = Object.freeze({
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            generation: Rd
        });
        if (Rd += 1, !An(e.bodyId, e.revision)) return t;
        const r = ur.get(e.bodyId);
        return (!r || e.revision >= r.revision) && ur.set(e.bodyId, t), t;
    }
    function An(e, t) {
        const r = Kn.get(e);
        return r === void 0 || t >= r;
    }
    function Mb(e, t) {
        if (!Number.isSafeInteger(t) || t < 0) return;
        const r = Kn.get(e) ?? -1;
        t > r && Kn.set(e, t);
    }
    function Rb(e) {
        return Kn.get(e) ?? null;
    }
    function Gt(e) {
        if (Oa.has(e.requestId) || !An(e.bodyId, e.revision)) return !1;
        const t = ur.get(e.bodyId);
        return !!t && t.generation === e.generation && t.requestId === e.requestId;
    }
    function Cb(e) {
        Oa.delete(e.requestId);
        const t = ur.get(e.bodyId);
        t?.generation === e.generation && t.requestId === e.requestId && ur.delete(e.bodyId);
    }
    nu = function(e) {
        if (!e.trim()) return;
        const t = ur.get(e);
        t && (Oa.add(t.requestId), ur.delete(e)), Kn.delete(e), Pr.clearBody(e), _s.clearBody(e), It.clearBody(e);
    };
    class $b {
        constructor(t){
            this.bodyId = t;
        }
        bodyId;
        checkpoints = [];
        prefixFeatureIds = new Set;
        dropPrefixIds = new Set;
        invalidateFrom = new Set;
        invalidateFeatureIds = new Set;
        stageOk(t, r) {
            this.checkpoints.push(gs(t)), r ? this.prefixFeatureIds.add(t.featureId) : this.dropPrefixIds.add(t.featureId);
        }
        stageFailed(t) {
            this.checkpoints.push(gs({
                ...t,
                status: "failed"
            })), this.dropPrefixIds.add(t.featureId), this.invalidateFrom.add(t.historyIndex + 1);
        }
        stageSkipped(t) {
            this.invalidateFeatureIds.add(t), this.dropPrefixIds.add(t);
        }
        prefixFeatureIdsToPublish() {
            return Object.freeze([
                ...this.prefixFeatureIds
            ]);
        }
        stagedCheckpoints() {
            return Object.freeze([
                ...this.checkpoints
            ]);
        }
        droppedFeatureIds() {
            return Object.freeze([
                ...this.dropPrefixIds,
                ...this.invalidateFeatureIds
            ]);
        }
        invalidateFromHistoryIndexes() {
            return Object.freeze([
                ...this.invalidateFrom
            ]);
        }
        commit(t) {
            for (const r of [
                ...this.invalidateFrom
            ].sort((n, i)=>n - i))t.checkpoints.invalidateFromHistoryIndex(this.bodyId, r), t.prefixSolids.invalidateFromHistoryIndex(this.bodyId, r);
            t.checkpoints.invalidateFeatureIds(this.bodyId, [
                ...this.invalidateFeatureIds
            ]), t.prefixSolids.invalidateFeatureIds(this.bodyId, [
                ...this.dropPrefixIds
            ]);
            for (const r of this.checkpoints)t.checkpoints.publish(r);
            for (const r of t.solids)t.prefixSolids.publish(r);
        }
    }
    function yi(e) {
        return Fb({
            bodyId: e.bodyId,
            featureId: e.featureId,
            committedRevision: e.committedRevision,
            prefixFingerprint: lr({
                input: e.inputFingerprint,
                dependencies: e.dependencyFingerprint
            }),
            replayProtocolVersion: e.replayProtocolVersion,
            runtimeIdentity: e.runtimeIdentity
        });
    }
    function ft(e) {
        const t = Math.hypot(e[0], e[1], e[2]);
        return t < 1e-12 ? [
            0,
            0,
            1
        ] : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Ht(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function zt(e, t) {
        return [
            (e[0] + t[0]) / 2,
            (e[1] + t[1]) / 2,
            (e[2] + t[2]) / 2
        ];
    }
    function Db(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function St(e, t) {
        return Math.sqrt(Db(e, t));
    }
    function On(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function zr(e, t) {
        return `${e}::face::${t}`;
    }
    function Qi(e, t) {
        return `${e}::edge::${t}`;
    }
    function Ho(e, t, r, n) {
        const i = ft(r), o = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], s = Math.cos(n), a = Math.sin(n), d = On(i, o), l = Ht(i, o);
        return [
            t[0] + o[0] * s + l[0] * a + i[0] * d * (1 - s),
            t[1] + o[1] * s + l[1] * a + i[1] * d * (1 - s),
            t[2] + o[2] * s + l[2] * a + i[2] * d * (1 - s)
        ];
    }
    function iu(e) {
        const t = e.positions;
        if (!t || t.length < 3) return 1;
        let r = 1 / 0, n = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0, a = -1 / 0;
        for(let l = 0; l < t.length; l += 3)r = Math.min(r, t[l]), n = Math.min(n, t[l + 1]), i = Math.min(i, t[l + 2]), o = Math.max(o, t[l]), s = Math.max(s, t[l + 1]), a = Math.max(a, t[l + 2]);
        const d = Math.hypot(o - r, s - n, a - i);
        return Math.max(d, .001);
    }
    function Tb(e, t, r) {
        const n = e.indices, i = e.positions, o = e.normals;
        if (!n || t.indexCount < 3) return null;
        let s = 0, a = 0, d = 0, l = 0, c = 0, f = 0, u = 0, h = null, y = null, I = !0;
        const g = Math.floor(t.indexCount / 3);
        for(let M = 0; M < g; M++){
            const B = t.firstIndex + M * 3, C = n[B], j = n[B + 1], N = n[B + 2], V = [
                i[C * 3],
                i[C * 3 + 1],
                i[C * 3 + 2]
            ], D = [
                i[j * 3],
                i[j * 3 + 1],
                i[j * 3 + 2]
            ], K = [
                i[N * 3],
                i[N * 3 + 1],
                i[N * 3 + 2]
            ], G = [
                D[0] - V[0],
                D[1] - V[1],
                D[2] - V[2]
            ], F = [
                K[0] - V[0],
                K[1] - V[1],
                K[2] - V[2]
            ], $ = Ht(G, F), L = .5 * Math.hypot($[0], $[1], $[2]);
            if (L < 1e-18) continue;
            const Y = ft($);
            h ? (!y || On(y, Y) < .99999 || Math.abs(On(y, [
                V[0] - h[0],
                V[1] - h[1],
                V[2] - h[2]
            ])) > 1e-6) && (I = !1) : (h = V, y = Y), u += L, s += (V[0] + D[0] + K[0]) / 3 * L, a += (V[1] + D[1] + K[1]) / 3 * L, d += (V[2] + D[2] + K[2]) / 3 * L, o && o.length >= (C + 1) * 3 ? (l += o[C * 3] * L, c += o[C * 3 + 1] * L, f += o[C * 3 + 2] * L) : (l += $[0], c += $[1], f += $[2]);
        }
        if (u < 1e-18) return null;
        const x = [
            s / u,
            a / u,
            d / u
        ], v = ft([
            l,
            c,
            f
        ]);
        let b = 0, m = 0;
        for(let M = 0; M < t.indexCount; M += 1){
            const B = n[t.firstIndex + M], C = [
                i[B * 3] - x[0],
                i[B * 3 + 1] - x[1],
                i[B * 3 + 2] - x[2]
            ];
            b = Math.max(b, Math.hypot(...C)), m = Math.max(m, Math.abs(On(v, C)));
        }
        I = m <= Math.max(1e-6, b * 1e-5);
        const w = Math.abs(v[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            1,
            0,
            0
        ], S = ft(Ht(w, v)), k = ft(Ht(v, S));
        return {
            subMeshIndex: r,
            centroid: x,
            normal: v,
            area: u,
            ...I ? {
                plane: {
                    origin: x,
                    normal: v,
                    uAxis: S,
                    vAxis: k
                }
            } : {}
        };
    }
    function Xn(e) {
        const t = [];
        for(let r = 0; r < (e.subMeshes?.length ?? 0); r++){
            const n = Tb(e, e.subMeshes[r], r);
            n && t.push(n);
        }
        return t;
    }
    function Es(e, t, r) {
        const n = On(e.normal, t.expectedNormal);
        return n < .55 ? 1 / 0 : St(e.centroid, t.expectedCentroid) / r + (1 - n) * .35;
    }
    function Bb(e, t, r) {
        const n = St(e.start, t.start) + St(e.end, t.end), i = St(e.start, t.end) + St(e.end, t.start), o = Math.min(n, i) / (2 * r), s = St(e.midpoint, t.midpoint) / r, a = St(t.start, t.end), d = Math.abs(e.length - a) / Math.max(r, a, 1e-6);
        return o * .45 + s * .45 + d * .1;
    }
    function ou(e, t, r, n, i = .08, o) {
        const s = new Set(r.map((u)=>u.id)), a = new Map;
        for (const u of r)a.set(`${u.provenance.featureId}::${u.provenance.role}`, u.id);
        const d = new Set, l = new Set, c = [];
        for (const u of e){
            const h = `${u.featureId}::${u.role}`;
            if (l.has(h)) continue;
            let y = null, I = 1 / 0;
            for (const x of t){
                if (d.has(x.ordinal)) continue;
                const v = Bb(x, u, n);
                v < I && (y = x, I = v);
            }
            if (!y || I > i) continue;
            l.add(h), d.add(y.ordinal);
            const g = u.faceIds ? [
                s.has(u.faceIds[0]) ? u.faceIds[0] : "",
                s.has(u.faceIds[1]) ? u.faceIds[1] : ""
            ] : [
                u.faceRoles?.[0] ? a.get(`${u.featureId}::${u.faceRoles[0]}`) ?? "" : "",
                u.faceRoles?.[1] ? a.get(`${u.featureId}::${u.faceRoles[1]}`) ?? "" : ""
            ];
            c.push({
                id: Qi(u.featureId, u.role),
                provenance: {
                    featureId: u.featureId,
                    role: u.role
                },
                faceIds: g,
                startVertex: y.start,
                endVertex: y.end,
                midpoint: y.midpoint,
                occEdgeOrdinal: y.ordinal
            });
        }
        const f = o ?? e.find((u)=>u.featureId)?.featureId ?? "tip";
        for (const u of t){
            if (d.has(u.ordinal)) continue;
            const h = `occ_edge_${u.ordinal}`;
            c.push({
                id: Qi(f, h),
                provenance: {
                    featureId: f,
                    role: h
                },
                faceIds: [
                    "",
                    ""
                ],
                startVertex: u.start,
                endVertex: u.end,
                midpoint: u.midpoint,
                occEdgeOrdinal: u.ordinal
            });
        }
        return c;
    }
    function Pa(e, t, r, n) {
        const i = Xn(r), o = iu(r), s = n?.maxMatchDistanceFraction ?? .08, a = new Set, d = [], l = [
            ...e
        ];
        for(; l.length > 0;){
            let f = -1, u = null, h = 1 / 0;
            for(let g = 0; g < l.length; g++){
                const x = l[g];
                for (const v of i){
                    if (a.has(v.subMeshIndex)) continue;
                    const b = Es(v, x, o);
                    b < h && (h = b, f = g, u = v);
                }
            }
            if (f < 0 || !u || h > s + .35) break;
            const y = l.splice(f, 1)[0];
            a.add(u.subMeshIndex);
            const I = zr(y.featureId, y.role);
            d.push({
                id: I,
                provenance: {
                    featureId: y.featureId,
                    role: y.role,
                    ...y.parentFaceIds ? {
                        parentFaceIds: [
                            ...y.parentFaceIds
                        ]
                    } : {}
                },
                subMeshIndex: u.subMeshIndex,
                normal: u.normal,
                centroid: u.centroid,
                area: u.area
            });
        }
        const c = n?.edgeSamples ? ou(t, n.edgeSamples, d, o, .08, t[0]?.featureId) : [];
        return {
            faces: d,
            edges: c
        };
    }
    function eo(e, t, r, n = 0) {
        const { origin: i, normal: o, uAxis: s, vAxis: a } = e, d = Jr(e), l = Ls(e), c = [
            d,
            ...l
        ], f = ft(o), u = (x, v, b)=>[
                i[0] + s[0] * x + a[0] * v + f[0] * b,
                i[1] + s[1] * x + a[1] * v + f[1] * b,
                i[2] + s[2] * x + a[2] * v + f[2] * b
            ];
        let h = 0, y = 0;
        for (const x of d.points)h += x.x, y += x.y;
        h /= Math.max(1, d.points.length), y /= Math.max(1, d.points.length);
        const I = [
            {
                role: "bottom",
                featureId: r,
                expectedCentroid: u(h, y, n),
                expectedNormal: [
                    -f[0],
                    -f[1],
                    -f[2]
                ]
            },
            {
                role: "top",
                featureId: r,
                expectedCentroid: u(h, y, n + t),
                expectedNormal: [
                    ...f
                ]
            }
        ], g = [];
        for(let x = 0; x < c.length; x++){
            const b = c[x].points, m = x === 0, w = x - 1;
            for(let S = 0; S < b.length; S++){
                const k = (S + 1) % b.length, M = u(b[S].x, b[S].y, n), B = u(b[k].x, b[k].y, n), C = u(b[S].x, b[S].y, n + t), j = u(b[k].x, b[k].y, n + t), N = [
                    B[0] - M[0],
                    B[1] - M[1],
                    B[2] - M[2]
                ];
                let V = ft(Ht(N, f));
                m || (V = [
                    -V[0],
                    -V[1],
                    -V[2]
                ]);
                const D = m ? `side_${S}` : `hole_${w}_side_${S}`;
                I.push({
                    role: D,
                    featureId: r,
                    expectedCentroid: zt(zt(M, B), zt(C, j)),
                    expectedNormal: V
                });
                const K = m ? `edge_bottom_${S}` : `edge_hole_${w}_bottom_${S}`, G = m ? `edge_top_${S}` : `edge_hole_${w}_top_${S}`, F = m ? `edge_vertical_${S}` : `edge_hole_${w}_vertical_${S}`;
                g.push({
                    role: K,
                    featureId: r,
                    midpoint: zt(M, B),
                    start: M,
                    end: B,
                    faceRoles: [
                        "bottom",
                        D
                    ]
                }, {
                    role: G,
                    featureId: r,
                    midpoint: zt(C, j),
                    start: C,
                    end: j,
                    faceRoles: [
                        "top",
                        D
                    ]
                }, {
                    role: F,
                    featureId: r,
                    midpoint: zt(M, C),
                    start: M,
                    end: C,
                    faceRoles: [
                        D,
                        ""
                    ]
                });
            }
        }
        return {
            faces: I,
            edges: g
        };
    }
    function su(e, t, r, n, i, o = 0) {
        const s = eo(e, t, r, o);
        return n ? Pa(s.faces, s.edges, n, {
            edgeSamples: i
        }) : {
            faces: s.faces.map((a)=>({
                    id: zr(a.featureId, a.role),
                    provenance: {
                        featureId: a.featureId,
                        role: a.role
                    },
                    subMeshIndex: -1,
                    normal: a.expectedNormal,
                    centroid: a.expectedCentroid
                })),
            edges: s.edges.map((a)=>({
                    id: Qi(a.featureId, a.role),
                    provenance: {
                        featureId: a.featureId,
                        role: a.role
                    },
                    faceIds: [
                        "",
                        ""
                    ],
                    startVertex: a.start,
                    endVertex: a.end,
                    midpoint: a.midpoint
                }))
        };
    }
    function to(e, t, r, n) {
        const { origin: i, uAxis: o, vAxis: s } = e, a = Jr(e), d = ft(n.direction), l = [], c = [], f = Math.abs(Math.abs(t) - Math.PI * 2) < 1e-6, u = t * .5, h = (y, I)=>[
                i[0] + o[0] * y + s[0] * I,
                i[1] + o[1] * y + s[1] * I,
                i[2] + o[2] * y + s[2] * I
            ];
        for(let y = 0; y < a.points.length; y++){
            const I = (y + 1) % a.points.length, g = h(a.points[y].x, a.points[y].y), x = h(a.points[I].x, a.points[I].y), v = Ho(g, n.origin, d, u), b = Ho(x, n.origin, d, u), m = zt(v, b), w = [
                m[0] - n.origin[0],
                m[1] - n.origin[1],
                m[2] - n.origin[2]
            ], S = ft(Ht(d, Ht(w, d))), k = `profile_side_${y}`;
            l.push({
                role: k,
                featureId: r,
                expectedCentroid: m,
                expectedNormal: S
            }), c.push({
                role: `profile_edge_${y}`,
                featureId: r,
                midpoint: zt(g, x),
                start: g,
                end: x,
                faceRoles: [
                    k,
                    ""
                ]
            });
        }
        if (!f) {
            let y = 0, I = 0;
            for (const b of a.points)y += b.x, I += b.y;
            y /= a.points.length, I /= a.points.length;
            const g = h(y, I), x = Ho(g, n.origin, d, t), v = ft(Ht(d, o));
            l.push({
                role: "start_cap",
                featureId: r,
                expectedCentroid: g,
                expectedNormal: v
            }), l.push({
                role: "end_cap",
                featureId: r,
                expectedCentroid: x,
                expectedNormal: [
                    -v[0],
                    -v[1],
                    -v[2]
                ]
            });
        }
        return {
            faces: l,
            edges: c
        };
    }
    function _i(e, t, r, n, i, o) {
        const a = to(e, t, r, n ?? {
            origin: [
                0,
                0,
                0
            ],
            direction: [
                0,
                0,
                1
            ]
        });
        return i ? Pa(a.faces, a.edges, i, {
            edgeSamples: o
        }) : {
            faces: a.faces.map((d)=>({
                    id: zr(d.featureId, d.role),
                    provenance: {
                        featureId: d.featureId,
                        role: d.role
                    },
                    subMeshIndex: -1,
                    normal: d.expectedNormal,
                    centroid: d.expectedCentroid
                })),
            edges: a.edges.map((d)=>({
                    id: Qi(d.featureId, d.role),
                    provenance: {
                        featureId: d.featureId,
                        role: d.role
                    },
                    faceIds: [
                        "",
                        ""
                    ],
                    startVertex: d.start,
                    endVertex: d.end,
                    midpoint: d.midpoint
                }))
        };
    }
    function Ie(e) {
        const { prior: t, resultMesh: r, generatingFeatureId: n, opKind: i, toolFaceHints: o = [], toolEdgeHints: s = [], resultEdgeSamples: a = [] } = e, d = Xn(r), l = iu(r), c = new Set, f = [], u = new Set, h = t.faces.filter((m)=>m.centroid && m.normal).map((m)=>({
                role: m.provenance.role,
                featureId: m.provenance.featureId,
                expectedCentroid: m.centroid,
                expectedNormal: m.normal,
                parentFaceIds: m.provenance.parentFaceIds
            }));
        for (const m of d){
            let w = null, S = 1 / 0;
            for (const k of h){
                const M = `${k.featureId}::${k.role}`;
                if (u.has(M)) continue;
                const B = Es(m, k, l);
                B < S && (S = B, w = k);
            }
            if (w && S <= .12) {
                u.add(`${w.featureId}::${w.role}`), c.add(m.subMeshIndex);
                const k = t.faces.find((M)=>M.provenance.featureId === w.featureId && M.provenance.role === w.role);
                f.push({
                    id: k?.id ?? zr(w.featureId, w.role),
                    provenance: {
                        featureId: w.featureId,
                        role: w.role,
                        ...w.parentFaceIds ? {
                            parentFaceIds: [
                                ...w.parentFaceIds
                            ]
                        } : {}
                    },
                    subMeshIndex: m.subMeshIndex,
                    normal: m.normal,
                    centroid: m.centroid,
                    area: m.area,
                    ...m.plane ? {
                        plane: m.plane
                    } : {}
                });
            }
        }
        const y = new Set;
        for (const m of d){
            if (c.has(m.subMeshIndex)) continue;
            let w = null, S = null, k = 1 / 0;
            for (const M of o){
                const B = `${M.featureId}::${M.role}`;
                if (y.has(B)) continue;
                const C = {
                    featureId: n,
                    role: M.role.startsWith(`${i}_`) ? M.role : `${i}_${M.role}`,
                    expectedCentroid: M.expectedCentroid,
                    expectedNormal: M.expectedNormal
                }, j = Es(m, C, l);
                j < k && (k = j, w = C, S = B);
            }
            if (w && S && k <= .14) {
                y.add(S), c.add(m.subMeshIndex);
                let M, B = 1 / 0;
                for (const C of t.faces){
                    if (!C.centroid) continue;
                    const j = St(m.centroid, C.centroid) / l;
                    j < B && (B = j, M = [
                        C.id
                    ]);
                }
                B > .35 && (M = void 0), f.push({
                    id: zr(n, w.role),
                    provenance: {
                        featureId: n,
                        role: w.role,
                        ...M ? {
                            parentFaceIds: M
                        } : {}
                    },
                    subMeshIndex: m.subMeshIndex,
                    normal: m.normal,
                    centroid: m.centroid,
                    area: m.area,
                    ...m.plane ? {
                        plane: m.plane
                    } : {}
                });
            }
        }
        const I = `${i}_result_face`;
        for (const m of d){
            if (c.has(m.subMeshIndex)) continue;
            let w, S = 1 / 0;
            for (const k of t.faces){
                if (!k.centroid) continue;
                const M = St(m.centroid, k.centroid) / l;
                M < S && (S = M, w = [
                    k.id
                ]);
            }
            S > .35 && (w = void 0), f.push({
                id: `${zr(n, I)}::${m.subMeshIndex}`,
                provenance: {
                    featureId: n,
                    role: I,
                    ...w ? {
                        parentFaceIds: w
                    } : {}
                },
                subMeshIndex: m.subMeshIndex,
                normal: m.normal,
                centroid: m.centroid,
                area: m.area,
                ...m.plane ? {
                    plane: m.plane
                } : {}
            });
        }
        const g = t.edges.filter((m)=>!!m.midpoint && !m.provenance.role.startsWith("occ_edge_")).map((m)=>({
                role: m.provenance.role,
                featureId: m.provenance.featureId,
                midpoint: m.midpoint,
                start: m.startVertex,
                end: m.endVertex,
                faceIds: m.faceIds
            })), x = s.map((m)=>({
                role: m.role.startsWith(`${i}_`) ? m.role : `${i}_${m.role}`,
                featureId: n,
                midpoint: m.midpoint,
                start: m.start,
                end: m.end,
                faceRoles: [
                    m.faceRoles[0] ? m.faceRoles[0].startsWith(`${i}_`) ? m.faceRoles[0] : `${i}_${m.faceRoles[0]}` : "",
                    m.faceRoles[1] ? m.faceRoles[1].startsWith(`${i}_`) ? m.faceRoles[1] : `${i}_${m.faceRoles[1]}` : ""
                ]
            })), v = ou([
            ...g,
            ...x
        ], a, f, l, .08, n), b = r.subMeshes?.length ?? 0;
        for (const m of f)if (m.subMeshIndex < 0 || m.subMeshIndex >= b) throw new Error(`Semantic topology face ${m.provenance.role} has invalid subMeshIndex ${m.subMeshIndex}`);
        if (f.length > b) throw new Error("Semantic topology published more faces than tessellation submeshes");
        return {
            faces: f,
            edges: v
        };
    }
    function zb(e, t) {
        const r = new Set, n = [];
        for (const s of [
            ...e.faces,
            ...t.faces
        ])s.subMeshIndex < 0 || r.has(s.id) || (r.add(s.id), n.push(s));
        const i = new Set, o = [];
        for (const s of [
            ...e.edges,
            ...t.edges
        ]){
            const a = `${s.provenance.featureId}::${s.provenance.role}`;
            i.has(a) || (i.add(a), o.push(s));
        }
        return {
            faces: n,
            edges: o
        };
    }
    function le(e, t) {
        const r = t.subMeshes?.length ?? 0, n = new Set, i = new Set;
        for (const a of e.faces){
            if (a.subMeshIndex < 0 || a.subMeshIndex >= r) throw new Error(`Face ${a.provenance.role} subMeshIndex ${a.subMeshIndex} out of range 0..${r - 1}`);
            if (n.has(a.subMeshIndex)) throw new Error(`Duplicate subMeshIndex ${a.subMeshIndex} in semantic topology`);
            if (i.has(a.id)) throw new Error(`Duplicate semantic face id ${a.id}`);
            n.add(a.subMeshIndex), i.add(a.id);
        }
        const o = new Set, s = new Set;
        for (const a of e.edges){
            if (o.has(a.id)) throw new Error(`Duplicate semantic edge id ${a.id}`);
            const d = `${a.provenance.featureId}::${a.provenance.role}`;
            if (s.has(d)) throw new Error(`Duplicate semantic edge key ${d}`);
            for (const l of a.faceIds)if (l && !i.has(l)) throw new Error(`Semantic edge ${a.id} references missing face ${l}`);
            o.add(a.id), s.add(d);
        }
    }
    function Fo(e, t) {
        if (t && t !== "auto") return t;
        const r = (e ?? "").toLowerCase();
        if (r.endsWith(".brep") || r.endsWith(".brp")) return "brep";
        if (r.endsWith(".step") || r.endsWith(".stp")) return "step";
        throw new Error('Cannot detect solid import format — pass format: "brep" | "step" or a fileName with extension');
    }
    function au(e) {
        return e instanceof Uint8Array ? new Uint8Array(e) : new Uint8Array(e.slice(0));
    }
    function du(e) {
        const t = Object.keys(e).filter((r)=>/^(Handle_)?Message_Progress(Range|Indicator)/.test(r));
        for (const r of t.sort((n, i)=>n.length - i.length))try {
            return new e[r];
        } catch  {
            continue;
        }
        return Wr(e, "Message_ProgressRange", []);
    }
    function Wr(e, t, r = []) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function cu(e, t, r) {
        const n = e.FS;
        if (!n || typeof n.writeFile != "function") throw new Error("opencascade.js virtual FS is unavailable");
        n.writeFile(t, r);
    }
    function jb(e, t, r) {
        const n = r.length >= 3 && r[0] === 239 && r[1] === 187 && r[2] === 191 ? 3 : 0;
        cu(e, t, n === 0 ? r : r.slice(n));
    }
    function Ma(e, t) {
        try {
            e.FS?.unlink?.(t);
        } catch  {}
    }
    function lu(e) {
        return e === "brep" ? "i.brep" : "/cad_import.step";
    }
    function _o(e, t) {
        if (e === "step") return "i.stp";
        const r = e === "brep" ? "import.brep" : "import.step", i = (t?.split(/[\\/]/).pop()?.trim() || r).replace(/[^A-Za-z0-9._-]+/g, "_"), o = i.length > 0 ? i : r;
        return /\.(brep|brp)$/i.test(o) ? o : `${o}.brep`;
    }
    function Eo(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function uu(e) {
        const t = Eo(e);
        if (t != null) return String(t);
        if (typeof e == "string" && e.length > 0) return e;
        if (!e || typeof e != "object") return String(e);
        const r = Object.prototype.toString.call(e), n = e.constructor?.name;
        return n && n !== "Object" ? n : r;
    }
    function Nb(e, t) {
        const r = [
            e,
            e.startsWith("/") ? e.slice(1) : `/${e.replace(/^\.\//, "")}`,
            e.startsWith("./") ? e.slice(2) : `./${e.replace(/^\//, "")}`,
            t,
            t.startsWith("/") ? t.slice(1) : `/${t.replace(/^\.\//, "")}`
        ];
        return [
            ...new Set(r.filter((n)=>n.length > 0))
        ];
    }
    function fu(e, t) {
        if (typeof e.ReadFile_1 == "function") return e.ReadFile_1(t);
        if (typeof e.ReadFile == "function") return e.ReadFile(t);
        throw new Error("opencascade.js: STEPControl_Reader.ReadFile is not available");
    }
    function Vb(e) {
        const t = e.slice(0, Math.min(e.byteLength, 96));
        let r = "";
        for (const n of t)r += n >= 32 && n <= 126 ? String.fromCharCode(n) : ".";
        return r.trim();
    }
    function pu(e, t) {
        if (typeof t.TransferRoots == "function") {
            t.TransferRoots();
            return;
        }
        if (typeof t.TransferRoots_1 == "function") {
            const r = Wr(e, "Message_ProgressRange", []);
            try {
                t.TransferRoots_1(r);
            } finally{
                r.delete?.();
            }
            return;
        }
        throw new Error("opencascade.js: STEPControl_Reader.TransferRoots is not available");
    }
    function hu(e) {
        const t = typeof e.OneShape == "function" ? e.OneShape() : e.OneShape_1?.();
        if (!t || typeof t.IsNull == "function" && t.IsNull()) throw new Error("STEP import produced an empty shape");
        return t;
    }
    function Kb(e, t, r) {
        const n = Wr(e, "STEPControl_Reader", []);
        try {
            const i = fu(n, t);
            return Eo(i) !== r && i !== !0 ? {
                failure: `STEPControl_Reader status=${uu(i)}`
            } : (pu(e, n), {
                shape: hu(n)
            });
        } finally{
            n.delete?.();
        }
    }
    function Lb(e, t, r) {
        let n;
        try {
            n = Wr(e, "STEPCAFControl_Reader", []);
        } catch (i) {
            return {
                failure: i instanceof Error ? `STEPCAFControl_Reader unavailable: ${i.message}` : "STEPCAFControl_Reader unavailable"
            };
        }
        try {
            const i = fu(n, t);
            if (Eo(i) !== r && i !== !0) return {
                failure: `STEPCAFControl_Reader status=${uu(i)}`
            };
            const s = typeof n.Reader == "function" ? n.Reader() : null;
            if (!s) return {
                failure: "STEPCAFControl_Reader.Reader is not available"
            };
            try {
                return pu(e, s), {
                    shape: hu(s)
                };
            } finally{
                s.delete?.();
            }
        } finally{
            n.delete?.();
        }
    }
    function Hb(e) {
        return {
            positions: e.positions,
            ...e.normals ? {
                normals: e.normals
            } : {},
            ...e.indices ? {
                indices: e.indices
            } : {},
            subMeshes: e.subMeshes.map((t)=>({
                    key: t.key,
                    firstIndex: t.firstIndex,
                    indexCount: t.indexCount
                }))
        };
    }
    function Xt(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function qb(e, t) {
        return Xn(e).map((r)=>{
            const n = `import_face_${r.subMeshIndex}`;
            return {
                id: `${t}::face::${n}`,
                provenance: {
                    featureId: t,
                    role: n
                },
                subMeshIndex: r.subMeshIndex,
                centroid: Xt(r.centroid),
                normal: Xt(r.normal),
                area: r.area,
                ...r.plane ? {
                    plane: {
                        origin: Xt(r.plane.origin),
                        normal: Xt(r.plane.normal),
                        uAxis: Xt(r.plane.uAxis),
                        vAxis: Xt(r.plane.vAxis)
                    }
                } : {}
            };
        });
    }
    function Ub(e, t, r) {
        const n = te(e, t), i = new Map(n.map((o)=>[
                o.ordinal,
                o
            ]));
        return Br(r, [], n).map((o)=>{
            const s = typeof o.occEdgeOrdinal == "number" ? i.get(o.occEdgeOrdinal) : void 0;
            if (!s?.sampledPoints || s.sampledPoints.length < 2) return o;
            const a = s.sampledPoints[0], d = s.sampledPoints[s.sampledPoints.length - 1], l = Math.hypot(a[0] - d[0], a[1] - d[1], a[2] - d[2]) < 1e-6;
            return {
                ...o,
                polyline: s.sampledPoints.map(Xt),
                ...l ? {
                    closed: !0
                } : {}
            };
        });
    }
    function ro(e, t, r) {
        const i = (r.tessellate ?? Ve)(e, t);
        return {
            id: `${r.featureId}:import-solid`,
            name: r.name ?? "Imported BREP",
            featureId: r.featureId,
            faces: qb(i, r.featureId),
            edges: Ub(e, t, r.featureId),
            tessellation: i
        };
    }
    function Zn(e, t, r = lu("brep")) {
        const n = au(t);
        cu(e, r, n);
        let i, o, s;
        try {
            const a = i = Wr(e, "TopoDS_Shape", []), d = o = Wr(e, "BRep_Builder", []), l = s = du(e);
            try {
                if (typeof e.BRepTools?.Read_2 == "function") e.BRepTools.Read_2(a, r, d, l);
                else if (typeof e.BRepTools?.Read == "function") e.BRepTools.Read(a, r, d, l);
                else throw new Error("opencascade.js: BRepTools.Read is not available");
                if (typeof a.IsNull == "function" && a.IsNull()) throw new Error("BREP import produced an empty shape");
                const c = Ur(e, a);
                return i = void 0, c;
            } finally{
                l.delete?.(), d.delete?.(), s = void 0, o = void 0;
            }
        } finally{
            s?.delete?.(), o?.delete?.(), i?.delete?.(), Ma(e, r);
        }
    }
    function Wb(e, t) {
        const r = "w.brep", n = e.FS;
        if (!n || typeof n.readFile != "function") throw new Error("opencascade.js virtual FS is unavailable");
        const i = du(e);
        try {
            if (typeof e.BRepTools?.Write_2 == "function") e.BRepTools.Write_2(t, r, i);
            else if (typeof e.BRepTools?.Write == "function") e.BRepTools.Write(t, r);
            else throw new Error("opencascade.js: BRepTools.Write is not available");
            const o = n.readFile(r);
            return o instanceof Uint8Array ? new Uint8Array(o) : new Uint8Array(o);
        } finally{
            try {
                i.delete?.();
            } catch  {}
            Ma(e, r);
        }
    }
    function Ao(e, t, r = lu("step")) {
        const n = au(t), i = Eo(e.IFSelect_ReturnStatus?.IFSelect_RetDone) ?? 1, o = [];
        for (const s of Nb(r, "i.stp")){
            jb(e, s, n);
            try {
                const a = Kb(e, s, i);
                if ("shape" in a) return Ur(e, a.shape);
                const d = Lb(e, s, i);
                if ("shape" in d) return Ur(e, d.shape);
                o.push(`${s}: ${a.failure}; ${d.failure}`);
            } finally{
                Ma(e, s);
            }
        }
        throw new Error(`STEP ReadFile failed (${o.join("; ")}, bytes=${n.byteLength}, header="${Vb(n)}")`);
    }
    function mu(e, t, r = {}) {
        const n = Fo(r.fileName, r.format), i = _o(n, r.fileName), o = n === "brep" ? Zn(e, t, i) : Ao(e, t, i);
        try {
            const s = Ve(e, o, {
                preserveSourceOrientation: n === "step"
            });
            return {
                format: n,
                mesh: Hb(s),
                ...r.fileName ? {
                    fileName: r.fileName
                } : {}
            };
        } finally{
            o.delete?.();
        }
    }
    function Gb(e, t, r) {
        const n = Fo(r.fileName, r.format), i = _o(n, r.fileName), o = n === "brep" ? Zn(e, t, i) : Ao(e, t, i);
        try {
            return ro(e, o, {
                featureId: r.featureId,
                name: r.name ?? r.fileName
            });
        } finally{
            o.delete?.();
        }
    }
    async function Yb(e, t = {}) {
        const r = await _t();
        return mu(r, e, t);
    }
    class Jb {
        shapes = new Set;
        protectedShapes = new Map;
        track(t) {
            t !== null && typeof t == "object" && this.shapes.add(t);
        }
        protect(t) {
            t === null || typeof t != "object" || this.protectedShapes.set(t, (this.protectedShapes.get(t) ?? 0) + 1);
        }
        unprotect(t) {
            if (t === null || typeof t != "object") return;
            const r = this.protectedShapes.get(t) ?? 0;
            r <= 1 ? this.protectedShapes.delete(t) : this.protectedShapes.set(t, r - 1);
        }
        isProtected(t) {
            return t !== null && typeof t == "object" && this.protectedShapes.has(t);
        }
        release(t) {
            if (!(t === null || typeof t != "object")) {
                if (this.protectedShapes.has(t)) {
                    this.shapes.delete(t);
                    return;
                }
                this.shapes.delete(t) && this.disposeOnce(t);
            }
        }
        releaseAll() {
            for (const t of [
                ...this.shapes
            ])this.release(t);
        }
        disposeOnce(t) {
            if (this.protectedShapes.has(t)) return;
            const r = t;
            try {
                r.delete?.();
            } catch  {}
        }
    }
    function Xb(e) {
        const t = aa(e, 64).points;
        return {
            loops: [],
            origin: e.axisOrigin,
            normal: e.axisDirection,
            uAxis: [
                1,
                0,
                0
            ],
            vAxis: [
                0,
                1,
                0
            ],
            geometry: t.slice(0, -1).map((r, n)=>({
                    kind: "line",
                    start: [
                        ...r
                    ],
                    end: [
                        ...t[n + 1]
                    ]
                }))
        };
    }
    const no = new Map;
    function Zb(e) {
        const t = no.get(e);
        if (t) {
            no.delete(e);
            try {
                t.shape?.delete?.();
            } catch  {}
        }
    }
    const Qb = new Set([
        "sketch",
        "datum_plane",
        "datum_axis",
        "shape_binder",
        "helix"
    ]);
    function ew(e, t, r) {
        if (t === r) return !1;
        const n = new Set, i = (o, s, a)=>{
            if (o === t) return s && a;
            if (n.has(o)) return !1;
            n.add(o);
            const d = e.get(o), l = s || d?.type === "split", c = a || d?.type === "draft";
            return (d?.dependencyIds ?? []).some((f)=>i(f, l, c));
        };
        return i(r, !1, !1);
    }
    function Cd(e, t) {
        return e instanceof Error && e.message ? `${t}: ${e.message}` : typeof e == "number" || typeof e == "string" || typeof e == "bigint" ? `${t}: WASM/OCC exception ${String(e)}` : `${t}: unknown OCC/WASM exception`;
    }
    function vr(e, t) {
        const r = typeof t?.Orientation == "function" ? t.Orientation() : t?.Orientation_1?.();
        if (typeof t?.Oriented == "function" && r !== void 0) return t.Oriented(r);
        const n = Object.keys(e).filter((o)=>o === "TopoDS_Shape" || o.startsWith("TopoDS_Shape_")).sort((o, s)=>+(s !== "TopoDS_Shape") - +(o !== "TopoDS_Shape"));
        let i;
        for (const o of n)try {
            return new e[o](t);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error("OCC TopoDS_Shape copy constructor unavailable");
    }
    function qo(e, t) {
        return {
            loops: [
                {
                    isOuter: !0,
                    points: Array.from({
                        length: 32
                    }, (i, o)=>{
                        const s = o / 32 * Math.PI * 2;
                        return {
                            x: Math.cos(s) * t,
                            y: Math.sin(s) * t
                        };
                    }),
                    segments: [
                        {
                            kind: "circle",
                            center: {
                                x: 0,
                                y: 0
                            },
                            radius: t
                        }
                    ],
                    exactCurve: {
                        kind: "circle",
                        center: {
                            x: 0,
                            y: 0
                        },
                        radius: t
                    }
                }
            ],
            origin: [
                ...e.origin
            ],
            normal: [
                ...e.normal
            ],
            uAxis: [
                ...e.uAxis
            ],
            vAxis: [
                ...e.vAxis
            ]
        };
    }
    function tw(e) {
        const t = Math.abs(e[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            1,
            0,
            0
        ], r = [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ], n = Math.hypot(...r), i = [
            r[0] / n,
            r[1] / n,
            r[2] / n
        ], o = [
            e[1] * i[2] - e[2] * i[1],
            e[2] * i[0] - e[0] * i[2],
            e[0] * i[1] - e[1] * i[0]
        ];
        return {
            uAxis: i,
            vAxis: o
        };
    }
    function $d(e, t, r) {
        const n = e, i = new n.gp_Trsf_1, o = new n.gp_Vec_4(r[0], r[1], r[2]), s = i.SetTranslation_1 ?? i.SetTranslation;
        if (typeof s != "function") throw new Error("OCC gp_Trsf translation API unavailable");
        s.call(i, o);
        const a = new n.BRepBuilderAPI_Transform_2(t, i, !0);
        if (a.Build?.(), a.IsDone?.() === !1) throw new Error("OCC linear pattern transform failed");
        return {
            shape: a.Shape(),
            delete: ()=>a.delete?.()
        };
    }
    function Dd(e, t, r, n, i) {
        const o = e, s = new o.gp_Trsf_1, a = new o.gp_Ax1_2(new o.gp_Pnt_3(r[0], r[1], r[2]), new o.gp_Dir_4(n[0], n[1], n[2])), d = s.SetRotation_1 ?? s.SetRotation;
        if (typeof d != "function") throw new Error("OCC gp_Trsf rotation API unavailable");
        d.call(s, a, i);
        const l = new o.BRepBuilderAPI_Transform_2(t, s, !0);
        if (l.Build?.(), l.IsDone?.() === !1) throw new Error("OCC polar pattern transform failed");
        return {
            shape: l.Shape(),
            delete: ()=>{
                l.delete?.(), a.delete?.();
            }
        };
    }
    function Ei(e, t) {
        return {
            ok: !1,
            protocolVersion: qe,
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            error: t
        };
    }
    function Uo(e, t) {
        return {
            response: Ei(e, {
                code: "cancelled",
                message: "Body replay cancelled or superseded",
                recoverable: !0,
                phase: "execute"
            }),
            transfers: [],
            performanceEvents: In(t, "cancelled")
        };
    }
    function rw(e) {
        return new Map(e.map((t)=>[
                t.id,
                t
            ]));
    }
    function jr(e, t) {
        if (e.attachmentMode === "offset_base") return zh(e.basePlane, e.offset, e.width, e.height);
        if (e.attachmentMode === "three_point" && e.threePoints) {
            const r = jh(e.threePoints[0], e.threePoints[1], e.threePoints[2]);
            return r ? {
                ...r,
                width: e.width,
                height: e.height
            } : null;
        }
        if (e.attachmentMode === "on_datum" && e.baseDatumId && t) {
            const r = t.get(e.baseDatumId);
            if (!r || r.type !== "datum_plane") return null;
            const n = jr(r, t);
            return n ? {
                ...n,
                origin: [
                    n.origin[0] + n.normal[0] * e.offset,
                    n.origin[1] + n.normal[1] * e.offset,
                    n.origin[2] + n.normal[2] * e.offset
                ],
                width: e.width,
                height: e.height
            } : null;
        }
        if (e.attachmentMode === "on_path" && e.pathFeatureId && e.pathParameter !== null && t) {
            const r = t.get(e.pathFeatureId);
            if (!r || r.type !== "helix") return null;
            try {
                return _m(r, e.pathParameter, e.width, e.height);
            } catch  {
                return null;
            }
        }
        return null;
    }
    function As(e, t) {
        if (e.axisRef.kind === "world") return {
            origin: [
                ...e.axisRef.origin
            ],
            direction: [
                ...e.axisRef.direction
            ]
        };
        if (e.axisRef.kind === "datum_axis") {
            const s = t.get(e.axisRef.featureId);
            if (!s || s.type !== "datum_axis") throw new Error(`Datum Axis ${e.axisRef.featureId} is not in Body snapshot`);
            const a = s.axisRef;
            if (a.kind === "world") return {
                origin: [
                    ...a.origin
                ],
                direction: [
                    ...a.direction
                ]
            };
            if (a.kind === "two_point") {
                const S = [
                    a.end[0] - a.start[0],
                    a.end[1] - a.start[1],
                    a.end[2] - a.start[2]
                ], k = Math.hypot(...S);
                if (k < 1e-12) throw new Error("Datum Axis two-point direction is degenerate");
                return {
                    origin: [
                        ...a.start
                    ],
                    direction: S.map((M)=>M / k)
                };
            }
            const d = t.get(a.firstDatumId), l = t.get(a.secondDatumId);
            if (!d || d.type !== "datum_plane" || !l || l.type !== "datum_plane") throw new Error("Datum Axis intersection requires two Datum Planes");
            const c = jr(d, t), f = jr(l, t);
            if (!c || !f) throw new Error("Datum Axis intersection Datum Plane is unresolved");
            const u = (S, k)=>[
                    S[1] * k[2] - S[2] * k[1],
                    S[2] * k[0] - S[0] * k[2],
                    S[0] * k[1] - S[1] * k[0]
                ], h = (S, k)=>S[0] * k[0] + S[1] * k[1] + S[2] * k[2], y = u(c.normal, f.normal), I = h(y, y);
            if (I < 1e-12) throw new Error("Datum Axis intersection planes are parallel");
            const g = h(c.normal, c.origin), x = h(f.normal, f.origin), v = u(f.normal, y), b = u(y, c.normal), m = [
                (g * v[0] + x * b[0]) / I,
                (g * v[1] + x * b[1]) / I,
                (g * v[2] + x * b[2]) / I
            ], w = Math.sqrt(I);
            return {
                origin: m,
                direction: y.map((S)=>S / w)
            };
        }
        const r = t.get(e.axisRef.featureId);
        if (!r || r.type !== "datum_plane") throw new Error(`Datum plane ${e.axisRef.featureId} is not in Body snapshot`);
        const n = jr(r, t);
        if (!n) throw new Error(`Datum plane ${e.axisRef.featureId} cannot be resolved for revolve axis (attachmentMode=${r.attachmentMode})`);
        const i = e.axisRef.axis === "normal" ? n.normal : e.axisRef.axis === "u" ? n.uAxis : n.vAxis, o = Math.hypot(i[0], i[1], i[2]);
        if (o < 1e-12) throw new Error("Resolved revolve axis direction is degenerate");
        return {
            origin: [
                ...n.origin
            ],
            direction: [
                i[0] / o,
                i[1] / o,
                i[2] / o
            ]
        };
    }
    function nw(e, t) {
        if (e.planeRef.kind === "world") return {
            origin: [
                ...e.planeRef.origin
            ],
            normal: [
                ...e.planeRef.normal
            ]
        };
        const r = t.get(e.planeRef.featureId);
        if (!r || r.type !== "datum_plane") throw new Error(`Datum plane ${e.planeRef.featureId} is not in Body snapshot`);
        const n = jr(r, t);
        if (!n) throw new Error(`Datum plane ${e.planeRef.featureId} cannot be resolved for mirror plane`);
        return {
            origin: [
                ...n.origin
            ],
            normal: [
                ...n.normal
            ]
        };
    }
    function or(e, t) {
        const r = Math.hypot(...e);
        if (r <= 1e-9) throw new Error(`${t} is degenerate`);
        return e.map((n)=>n / r);
    }
    function yu(e, t) {
        return Math.hypot(e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]) <= 1e-7;
    }
    function iw(e, t) {
        if (!t.hintPlaneOrigin && !t.hintNormal && !t.hintCentroid) return null;
        const r = e.topology.faces.flatMap((n)=>{
            if (t.hintNormal) {
                const o = n.normal ?? n.plane?.normal;
                if (!o) return [];
                const s = Math.hypot(...t.hintNormal), a = Math.hypot(...o);
                if (s <= 1e-9 || a <= 1e-9) return [];
                if ((t.hintNormal[0] * o[0] + t.hintNormal[1] * o[1] + t.hintNormal[2] * o[2]) / (s * a) < 1 - 1e-4) return [];
            }
            const i = t.hintPlaneOrigin ?? t.hintCentroid;
            if (i && n.plane) {
                const o = Math.abs((i[0] - n.plane.origin[0]) * n.plane.normal[0] + (i[1] - n.plane.origin[1]) * n.plane.normal[1] + (i[2] - n.plane.origin[2]) * n.plane.normal[2]);
                return o > .001 ? [] : [
                    {
                        face: n,
                        distance: o
                    }
                ];
            }
            if (i && n.centroid) {
                const o = Math.hypot(n.centroid[0] - i[0], n.centroid[1] - i[1], n.centroid[2] - i[2]);
                return [
                    {
                        face: n,
                        distance: o
                    }
                ];
            }
            return t.hintNormal ? [
                {
                    face: n,
                    distance: 0
                }
            ] : [];
        });
        return r.sort((n, i)=>n.distance - i.distance), r[0]?.face ?? null;
    }
    function ow(e, t) {
        if (t.hintNormal) {
            const n = e.normal ?? e.plane?.normal;
            if (!n) return !1;
            const i = Math.hypot(...t.hintNormal), o = Math.hypot(...n);
            if (i <= 1e-9 || o <= 1e-9 || (t.hintNormal[0] * n[0] + t.hintNormal[1] * n[1] + t.hintNormal[2] * n[2]) / (i * o) < 1 - 1e-4) return !1;
        }
        const r = t.hintPlaneOrigin ?? t.hintCentroid;
        return r ? e.plane ? Math.abs((r[0] - e.plane.origin[0]) * e.plane.normal[0] + (r[1] - e.plane.origin[1]) * e.plane.normal[1] + (r[2] - e.plane.origin[2]) * e.plane.normal[2]) <= .001 : e.centroid ? Math.hypot(e.centroid[0] - r[0], e.centroid[1] - r[1], e.centroid[2] - r[2]) <= .001 : !1 : !0;
    }
    function Ln(e, t) {
        const r = e.topology.faces.find((n)=>n.provenance.featureId === t.featureId && n.provenance.role === t.role);
        if (r && ow(r, t)) return r;
        if (t.featureId.startsWith("ug:feature:")) {
            const n = iw(e, t);
            if (n) return n;
            if (t.hintPlaneOrigin || t.hintNormal || t.hintCentroid) throw Object.assign(new Error(`Draft face ${t.featureId}:${t.role} geometry is lost`), {
                code: "topology-reference-lost"
            });
            const i = /(?:^|\/)face\[(\d+)\](?:$|\/)/i.exec(t.role), o = i ? Number(i[1]) : Number.NaN;
            if (Number.isInteger(o)) {
                const s = e.topology.faces.filter((a)=>a.provenance.featureId === t.featureId && (a.subMeshIndex === o || a.subMeshIndex === o - 1));
                if (s.length === 1) return s[0];
                if (s.length > 1) {
                    const a = s.find((d)=>d.subMeshIndex === o);
                    if (a) return a;
                }
            }
        }
        throw Object.assign(new Error(`Draft face ${t.featureId}:${t.role} is lost`), {
            code: "topology-reference-lost"
        });
    }
    function sw(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let o = 0;
        try {
            for(; i.More();){
                if (o === r) return n.TopoDS.Face_1(i.Current());
                o++, i.Next();
            }
        } finally{
            i.delete?.();
        }
        return null;
    }
    function gu(e, t) {
        const r = e, n = new r.TopExp_Explorer_2(t, r.TopAbs_ShapeEnum.TopAbs_EDGE, r.TopAbs_ShapeEnum.TopAbs_SHAPE), i = [];
        try {
            for(; n.More();)i.push(r.TopoDS.Edge_1(n.Current())), n.Next();
        } finally{
            n.delete?.();
        }
        return i;
    }
    function Iu(e, t) {
        const r = e?.IsSame;
        return typeof r == "function" && r.call(e, t) === !0;
    }
    function aw(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE), o = [];
        try {
            for(; i.More();){
                const s = n.TopoDS.Face_1(i.Current());
                gu(e, s).some((a)=>Iu(a, r)) && o.push(s), i.Next();
            }
        } finally{
            i.delete?.();
        }
        return o;
    }
    function dw(e, t) {
        return e.topology.faces.find((r)=>r.subMeshIndex === t) ?? e.topology.faces.find((r)=>r.subMeshIndex === t - 1) ?? null;
    }
    function cw(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let o = 0;
        try {
            for(; i.More();){
                const s = n.TopoDS.Face_1(i.Current());
                if (Iu(s, r)) return o;
                o++, i.Next();
            }
        } finally{
            i.delete?.();
        }
        return -1;
    }
    function Td(e, t, r) {
        if (e.id === t.id) return !1;
        const n = e.normal ?? e.plane?.normal;
        return !n || !e.plane ? !1 : !yu(n, r);
    }
    function lw(e, t, r) {
        if (!e.centroid || !t.plane) return !0;
        const n = (e.centroid[0] - t.plane.origin[0]) * r[0] + (e.centroid[1] - t.plane.origin[1]) * r[1] + (e.centroid[2] - t.plane.origin[2]) * r[2];
        return n < .001 && n > -6;
    }
    function uw(e, t, r, n, i) {
        const o = Ln(t, r), s = sw(e, t.shape, o.subMeshIndex), a = [];
        if (s) {
            const l = new Set([
                o.id
            ]);
            for (const c of gu(e, s))for (const f of aw(e, t.shape, c)){
                const u = dw(t, cw(e, t.shape, f));
                !u || l.has(u.id) || !Td(u, o, n) || (l.add(u.id), a.push(u));
            }
        }
        if (a.length > 0) {
            if (!o.plane || !o.plane.normal) return {
                source: o,
                moving: a
            };
            const l = a.map((u)=>{
                const h = u.centroid ?? o.plane.origin, y = Math.abs((h[0] - o.plane.origin[0]) * i[0] + (h[1] - o.plane.origin[1]) * i[1] + (h[2] - o.plane.origin[2]) * i[2]);
                return {
                    face: u,
                    along: y
                };
            }).sort((u, h)=>u.along - h.along), c = l[0].along, f = l.filter((u)=>u.along <= Math.max(c * 2 + 1, 3));
            return {
                source: o,
                moving: f.map((u)=>u.face)
            };
        }
        const d = t.topology.faces.filter((l)=>Td(l, o, n) && lw(l, o, i));
        if (d.length === 0) throw Object.assign(new Error(`UG Draft face ${r.featureId}:${r.role} has no non-parallel adjacent face`), {
            code: "topology-reference-lost"
        });
        return {
            source: o,
            moving: d
        };
    }
    function fw(e, t, r) {
        return Ln(t, r);
    }
    function bu(e, t) {
        const r = e.topology.edges.find((o)=>o.provenance.featureId === t.featureId && o.provenance.role === t.role);
        if (r) return r;
        const n = /^occ_edge_(\d+)$/.exec(t.role)?.[1], i = typeof t.occEdgeOrdinal == "number" && Number.isSafeInteger(t.occEdgeOrdinal) && t.occEdgeOrdinal >= 0 ? t.occEdgeOrdinal : n === void 0 ? void 0 : Number(n);
        if (i !== void 0) {
            const o = e.topology.edges.find((s)=>s.occEdgeOrdinal === i);
            if (o) return o;
        }
        throw Object.assign(new Error(`Draft edge ${t.featureId}:${t.role} is lost`), {
            code: "topology-reference-lost"
        });
    }
    function io(e, t, r) {
        if (e.kind === "world_plane") return {
            origin: [
                ...e.origin
            ],
            normal: or([
                ...e.normal
            ], "Draft plane normal")
        };
        if (e.kind === "datum_plane") {
            const i = r.get(e.featureId);
            if (!i || i.type !== "datum_plane") throw new Error(`Draft Datum Plane ${e.featureId} is missing`);
            const o = jr(i, r);
            if (!o) throw new Error(`Draft Datum Plane ${e.featureId} is unresolved`);
            return {
                origin: [
                    ...o.origin
                ],
                normal: or([
                    ...o.normal
                ], "Draft Datum Plane normal")
            };
        }
        const n = Ln(t, e.selector);
        if (!n.plane) throw new Error(`Draft hinge face ${e.selector.featureId}:${e.selector.role} is not planar`);
        return {
            origin: [
                ...n.plane.origin
            ],
            normal: or([
                ...n.plane.normal
            ], "Draft hinge face normal")
        };
    }
    function pw(e, t, r) {
        const n = e.direction;
        let i;
        if (n.kind === "world") i = [
            ...n.direction
        ];
        else if (n.kind === "datum_axis") i = As({
            id: e.id,
            name: e.name,
            axisRef: {
                kind: "datum_axis",
                featureId: n.featureId
            }
        }, r).direction;
        else if (n.kind === "plane_normal") i = io(n.plane, t, r).normal;
        else {
            const o = bu(t, n.selector);
            i = [
                o.endVertex[0] - o.startVertex[0],
                o.endVertex[1] - o.startVertex[1],
                o.endVertex[2] - o.startVertex[2]
            ];
        }
        return i = or(i, "Draft pull direction"), e.reverseDirection ? i.map((o)=>-o) : i;
    }
    function Bd(e, t, r, n) {
        if (e.kind !== "edge_chain") return io(e, r, n);
        const i = bu(r, e.selectors[0]), o = or([
            i.endVertex[0] - i.startVertex[0],
            i.endVertex[1] - i.startVertex[1],
            i.endVertex[2] - i.startVertex[2]
        ], "Draft hinge edge"), s = [
            o[1] * t[2] - o[2] * t[1],
            o[2] * t[0] - o[0] * t[2],
            o[0] * t[1] - o[1] * t[0]
        ];
        return {
            origin: [
                ...i.startVertex
            ],
            normal: or(s, "Draft edge-hinge plane")
        };
    }
    function hw(e, t) {
        const r = e.variableAngles;
        if (!r.length) return e.reverseAngle ? -e.angle : e.angle;
        const n = [
            ...r
        ].sort((f, u)=>f.location - u.location), i = n.findIndex((f)=>f.location >= t);
        if (i <= 0) {
            const f = n[Math.max(0, i)];
            return f.reversed ? -f.angle : f.angle;
        }
        if (i < 0) {
            const f = n[n.length - 1];
            return f.reversed ? -f.angle : f.angle;
        }
        const o = n[i - 1], s = n[i], a = s.location - o.location, d = a <= 1e-9 ? 0 : (t - o.location) / a, l = o.reversed ? -o.angle : o.angle, c = s.reversed ? -s.angle : s.angle;
        return l + (c - l) * d;
    }
    function mw(e, t, r, n, i) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>Xe(e)
        };
    }
    function yw(e, t, r, n) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: "revolve",
            topology: r,
            tipMesh: n,
            dispose: ()=>qr(e)
        };
    }
    function We(e, t, r, n, i) {
        return {
            shape: e.Shape(),
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>e.delete?.()
        };
    }
    function Ai(e, t) {
        return {
            faces: Xn(e).map((r)=>({
                    id: `${t}::face::legacy_${r.subMeshIndex}`,
                    provenance: {
                        featureId: t,
                        role: `legacy_display_${r.subMeshIndex}`
                    },
                    subMeshIndex: r.subMeshIndex,
                    centroid: r.centroid,
                    normal: r.normal,
                    area: r.area,
                    ...r.plane ? {
                        plane: r.plane
                    } : {}
                })),
            edges: []
        };
    }
    function gw(e, t, r, n, i) {
        return i?.priorTopology ? i.priorTopology : {
            faces: [],
            edges: []
        };
    }
    class Iw {
        constructor(t = _t){
            this.loadOcc = t;
        }
        loadOcc;
        async execute(t) {
            const r = new Zg(t), n = wo(t);
            if (n) return {
                response: Ei(t, n),
                transfers: [],
                performanceEvents: In(r, "failed")
            };
            if (Date.now() > t.deadlineMs) return {
                response: Ei(t, {
                    code: "deadline-exceeded",
                    message: "Body replay deadline exceeded",
                    recoverable: !0,
                    phase: "deadline"
                }),
                transfers: [],
                performanceEvents: In(r, "failed")
            };
            const i = ca(t.snapshot.features), o = new Map(i.map((a)=>[
                    a.id,
                    a
                ]));
            t = {
                ...t,
                snapshot: {
                    ...t.snapshot,
                    features: i
                },
                replayPlan: {
                    ...t.replayPlan,
                    steps: t.replayPlan.steps.map((a)=>a.status === "active" ? {
                            ...a,
                            auxiliaryFeatureIds: [
                                ...o.get(a.featureId)?.dependencyIds ?? a.auxiliaryFeatureIds
                            ].sort()
                        } : a)
                }
            };
            const s = Pb(t);
            try {
                if (!Gt(s)) return Uo(t, r);
                const a = Date.now(), d = new Map, l = new Jb, c = [], f = [];
                let u = null, h = null, y = !1;
                const I = t.presentationMode !== "none", g = t.presentationMode !== "mesh" && t.presentationMode !== "none", x = new $b(t.bodyId), v = [];
                try {
                    const b = performance.now(), m = await (async ()=>{
                        try {
                            return await this.loadOcc();
                        } finally{
                            r.recordOccLoad(performance.now() - b);
                        }
                    })();
                    if (!Gt(s)) return Uo(t, r);
                    const w = (F, $, L)=>{
                        const Y = performance.now(), p = Ve(F, $, L);
                        return r.recordTessellation(p, performance.now() - Y), p;
                    }, S = rw(t.snapshot.features);
                    let k = null;
                    const M = Ol({
                        snapshot: t.snapshot,
                        replayPlan: t.replayPlan,
                        checkpoints: Pr.list(t.bodyId),
                        externalOperands: t.externalOperands,
                        replayProtocolVersion: t.protocolVersion
                    });
                    let B = M.earliestInvalidHistoryIndex ?? t.replayPlan.steps.length;
                    if (M.earliestInvalidHistoryIndex !== null) {
                        const F = t.replayPlan.steps.find(($)=>$.historyIndex === M.earliestInvalidHistoryIndex);
                        F && r.recordCacheInvalidation(F, S.get(F.featureId));
                    }
                    const C = (F)=>{
                        const $ = Pr.lookup(t.bodyId, F.featureId);
                        if (!$ || $.status !== "ok") return !1;
                        const L = Is({
                            snapshot: t.snapshot,
                            step: F,
                            feature: S.get(F.featureId),
                            externalOperands: t.externalOperands
                        });
                        if ($.historyIndex !== F.historyIndex || $.inputFingerprint !== L.inputFingerprint || $.dependencyFingerprint !== L.dependencyFingerprint) return !1;
                        if (F.status === "inactive") return c.push({
                            featureId: F.featureId,
                            status: "inactive"
                        }), !0;
                        if (F.status === "active" && Qb.has(F.kind)) return c.push({
                            featureId: F.featureId,
                            status: "ok"
                        }), !0;
                        const Y = yi({
                            bodyId: $.bodyId,
                            featureId: $.featureId,
                            committedRevision: $.committedRevision,
                            inputFingerprint: $.inputFingerprint,
                            dependencyFingerprint: $.dependencyFingerprint,
                            replayProtocolVersion: $.replayProtocolVersion,
                            runtimeIdentity: $.runtimeIdentity
                        }), p = It.acquire(Y), P = It.lookup(Y);
                        if (!p || !P) return p?.release(), !1;
                        v.push(p), l.protect(p.shape);
                        const R = _s.lookup(t.bodyId, F.featureId), E = vr(m, p.shape);
                        let O = R?.tipMesh ? Od(R.tipMesh) : null;
                        I && !O && (r.setActiveFeatureId(F.featureId), O = w(m, E));
                        const _ = R ? Pd(R.topology) : {
                            faces: [],
                            edges: []
                        };
                        return d.set(F.featureId, {
                            shape: E,
                            generatingFeatureId: R?.generatingFeatureId ?? P.generatingFeatureId,
                            opKind: R?.opKind ?? P.opKind,
                            topology: {
                                faces: _.faces,
                                edges: Br(R?.generatingFeatureId ?? P.generatingFeatureId, _.edges, te(m, E))
                            },
                            tipMesh: O,
                            dispose: ()=>{}
                        }), k = F.featureId, h = F.featureId, c.push({
                            featureId: F.featureId,
                            status: "ok"
                        }), !0;
                    }, j = (F)=>{
                        if (t.cacheResult === !1) return;
                        const $ = [
                            ...c
                        ].reverse().find((p)=>p.featureId === F.featureId);
                        if (!$) return;
                        const L = Is({
                            snapshot: t.snapshot,
                            step: F,
                            feature: S.get(F.featureId),
                            externalOperands: t.externalOperands
                        }), Y = {
                            bodyId: t.bodyId,
                            committedRevision: t.revision,
                            featureId: F.featureId,
                            historyIndex: F.historyIndex,
                            inputFingerprint: L.inputFingerprint,
                            dependencyFingerprint: L.dependencyFingerprint,
                            replayProtocolVersion: t.protocolVersion ?? qe,
                            runtimeIdentity: Jn
                        };
                        if ($.status === "ok" || $.status === "inactive") {
                            x.stageOk({
                                ...Y,
                                status: "ok"
                            }, d.has(F.featureId));
                            return;
                        }
                        if ($.status === "failed") {
                            x.stageFailed({
                                ...Y,
                                status: "failed"
                            });
                            return;
                        }
                        $.status === "skipped" && x.stageSkipped(F.featureId);
                    };
                    for (const F of t.externalOperands ?? []){
                        if (S.has(F.featureId) || d.has(F.featureId)) throw new Error(`External operand feature id ${F.featureId} collides with replay features`);
                        const $ = Rb(F.bodyId);
                        if ($ === null || $ !== F.committedRevision) throw new Error(`External Body Tip ${F.bodyId}:${F.featureId}@${F.committedRevision} is stale or not committed`);
                        const L = Pr.lookup(F.bodyId, F.featureId);
                        if (!L || L.status !== "ok") throw new Error(`External Body Tip ${F.bodyId}:${F.featureId} has no committed checkpoint`);
                        const Y = yi({
                            bodyId: L.bodyId,
                            featureId: L.featureId,
                            committedRevision: L.committedRevision,
                            inputFingerprint: L.inputFingerprint,
                            dependencyFingerprint: L.dependencyFingerprint,
                            replayProtocolVersion: L.replayProtocolVersion,
                            runtimeIdentity: L.runtimeIdentity
                        }), p = It.acquire(Y);
                        if (!p) throw new Error(`External Body Tip ${F.bodyId}:${F.featureId} Shape is not cached`);
                        v.push(p), l.protect(p.shape);
                        const P = vr(m, p.shape);
                        r.setActiveFeatureId(F.featureId);
                        const R = w(m, P);
                        d.set(F.featureId, {
                            shape: P,
                            generatingFeatureId: F.featureId,
                            opKind: "boolean",
                            topology: Ai(R, F.featureId),
                            tipMesh: R,
                            dispose: ()=>{}
                        });
                    }
                    for (const F of t.replayPlan.steps){
                        if (!Gt(s)) return Uo(t, r);
                        const $ = S.get(F.featureId), L = performance.now();
                        r.setActiveFeatureId(F.featureId);
                        let Y = !1;
                        try {
                            if (F.historyIndex < B) {
                                if (C(F)) {
                                    Y = !0, r.recordCacheHit(F, $);
                                    continue;
                                }
                                B = F.historyIndex;
                            }
                            if (F.status === "inactive") {
                                c.push({
                                    featureId: F.featureId,
                                    status: "inactive"
                                });
                                continue;
                            }
                            if (y && qi(F.kind)) {
                                c.push({
                                    featureId: F.featureId,
                                    status: "skipped"
                                });
                                continue;
                            }
                            const p = S.get(F.featureId);
                            if (!p) {
                                c.push({
                                    featureId: F.featureId,
                                    status: "failed",
                                    error: {
                                        code: "missing-feature-parameters",
                                        message: `Feature ${F.featureId} missing from snapshot`,
                                        featureId: F.featureId,
                                        recoverable: !1
                                    }
                                }), y = !0;
                                continue;
                            }
                            try {
                                if (F.kind === "import") {
                                    if (p.type !== "import") throw new Error(`Import replay step ${F.featureId} has mismatched feature type ${p.type}`);
                                    const P = p.sourceBytes;
                                    if (!(P instanceof Uint8Array) || P.byteLength === 0) throw new Error(`Import Feature ${p.id} has no BREP/STEP source bytes`);
                                    const R = Fo(p.sourceLabel, p.sourceFormat ?? "auto"), E = _o(R, p.sourceLabel);
                                    if (R === "brep") {
                                        const _ = Zn(m, P, E);
                                        try {
                                            if (!I) {
                                                d.set(p.id, {
                                                    shape: _,
                                                    generatingFeatureId: p.id,
                                                    opKind: "import",
                                                    topology: {
                                                        faces: [],
                                                        edges: []
                                                    },
                                                    tipMesh: null,
                                                    dispose: ()=>{
                                                        _.delete?.();
                                                    }
                                                }), k = p.id, h = p.id, c.push({
                                                    featureId: p.id,
                                                    status: "ok"
                                                });
                                                continue;
                                            }
                                            if (!g) {
                                                d.set(p.id, {
                                                    shape: _,
                                                    generatingFeatureId: p.id,
                                                    opKind: "import",
                                                    topology: {
                                                        faces: [],
                                                        edges: []
                                                    },
                                                    tipMesh: w(m, _, {
                                                        correctFaceOrientation: !1
                                                    }),
                                                    dispose: ()=>{
                                                        _.delete?.();
                                                    }
                                                }), k = p.id, h = p.id, c.push({
                                                    featureId: p.id,
                                                    status: "ok"
                                                });
                                                continue;
                                            }
                                            const A = ro(m, _, {
                                                featureId: p.id,
                                                name: p.sourceLabel ?? p.name,
                                                tessellate: w
                                            });
                                            d.set(p.id, {
                                                shape: _,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: A.faces,
                                                    edges: A.edges
                                                },
                                                tipMesh: A.tessellation,
                                                dispose: ()=>{
                                                    _.delete?.();
                                                }
                                            }), k = p.id, h = p.id, c.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        } catch (A) {
                                            throw _.delete?.(), A;
                                        }
                                    }
                                    const O = Ao(m, P, E);
                                    try {
                                        if (!I) {
                                            d.set(p.id, {
                                                shape: O,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: [],
                                                    edges: []
                                                },
                                                tipMesh: null,
                                                dispose: ()=>{
                                                    O.delete?.();
                                                }
                                            }), k = p.id, h = p.id, c.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        }
                                        if (!g) {
                                            d.set(p.id, {
                                                shape: O,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: [],
                                                    edges: []
                                                },
                                                tipMesh: w(m, O, {
                                                    correctFaceOrientation: !1
                                                }),
                                                dispose: ()=>{
                                                    O.delete?.();
                                                }
                                            }), k = p.id, h = p.id, c.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        }
                                        const _ = ro(m, O, {
                                            featureId: p.id,
                                            name: p.sourceLabel ?? p.name,
                                            tessellate: w
                                        });
                                        d.set(p.id, {
                                            shape: O,
                                            generatingFeatureId: p.id,
                                            opKind: "import",
                                            topology: {
                                                faces: _.faces,
                                                edges: _.edges
                                            },
                                            tipMesh: _.tessellation,
                                            dispose: ()=>{
                                                O.delete?.();
                                            }
                                        }), k = p.id, h = p.id, c.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (_) {
                                        throw O.delete?.(), _;
                                    }
                                }
                                if (F.kind === "sketch" || F.kind === "datum_plane" || F.kind === "datum_axis" || F.kind === "shape_binder") {
                                    c.push({
                                        featureId: F.featureId,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "draft") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw Object.assign(new Error(`Draft base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const R = pw(p, P, S), E = p.draftFaces.some((oe)=>oe.featureId.startsWith("ug:feature:"));
                                    let O, _;
                                    if (E) {
                                        const fe = p.draftFaces.map((Te)=>Ln(P, Te)).find((Te)=>Te.plane)?.plane;
                                        _ = fe ? [
                                            {
                                                origin: [
                                                    ...fe.origin
                                                ],
                                                normal: or([
                                                    ...fe.normal
                                                ], "UG Draft stationary face")
                                            }
                                        ] : p.hinges.map((Te)=>Bd(Te, R, P, S));
                                        const ge = _[0].normal, De = new Map;
                                        for (const Te of p.draftFaces)for (const Re of uw(m, P, Te, ge, R).moving)De.set(Re.id, Re);
                                        O = [
                                            ...De.values()
                                        ];
                                    } else O = p.draftFaces.map((oe)=>fw(m, P, oe)), _ = p.hinges.map((oe)=>Bd(oe, R, P, S));
                                    const A = p.split.kind === "reference" ? io(p.split.reference, P, S) : p.split.kind === "hinge" ? _[0] : null, T = O.map((oe)=>oe.centroid ? oe.centroid[0] * R[0] + oe.centroid[1] * R[1] + oe.centroid[2] * R[2] : 0), z = Math.min(...T), ee = Math.max(...T) - z;
                                    if (p.variableAngles.length > 1 && ee <= 1e-9) throw new Error("Variable Draft requires selected face segments at distinct pull-direction locations");
                                    if (A && p.split.kind !== "none" && (p.split.sideMode === "dependent" || p.split.sideMode === "independent")) {
                                        const oe = O.map((fe)=>{
                                            const ge = fe.centroid ?? [
                                                0,
                                                0,
                                                0
                                            ];
                                            return (ge[0] - A.origin[0]) * A.normal[0] + (ge[1] - A.origin[1]) * A.normal[1] + (ge[2] - A.origin[2]) * A.normal[2];
                                        });
                                        if (!oe.some((fe)=>fe < 0) || !oe.some((fe)=>fe >= 0)) throw new Error("Split Draft requires selected face segments on both sides of the split reference");
                                    }
                                    const ce = O.flatMap((oe, fe)=>{
                                        const ge = oe.centroid ?? [
                                            0,
                                            0,
                                            0
                                        ], De = A ? (ge[0] - A.origin[0]) * A.normal[0] + (ge[1] - A.origin[1]) * A.normal[1] + (ge[2] - A.origin[2]) * A.normal[2] : 1;
                                        if (p.split.kind !== "none") {
                                            if (p.split.sideMode === "first_only" && De < 0) return [];
                                            if (p.split.sideMode === "second_only" && De >= 0) return [];
                                        }
                                        const Te = ee <= 1e-9 ? .5 : (T[fe] - z) / ee;
                                        let Re = hw(p, Te);
                                        p.split.kind !== "none" && De < 0 && (p.split.sideMode === "dependent" ? Re = -Re : p.split.sideMode === "independent" && (Re = p.reverseSecondSideAngle ? -p.secondSideAngle : p.secondSideAngle));
                                        const Ot = De < 0 && _.length > 1 ? 1 : 0;
                                        return [
                                            {
                                                face: oe,
                                                neutralPlane: _[Ot],
                                                angle: Re
                                            }
                                        ];
                                    }).filter((oe)=>{
                                        const fe = oe.face.normal ?? oe.face.plane?.normal;
                                        return !fe || !yu(fe, oe.neutralPlane.normal);
                                    });
                                    if (ce.length === 0) throw new Error("Draft has no surfaces that intersect the hinge plane");
                                    let ue;
                                    try {
                                        ue = Zi(m, P.shape, ce, R);
                                    } catch (oe) {
                                        if (!E) throw oe;
                                        ue = Zi(m, P.shape, ce.map((fe)=>({
                                                ...fe,
                                                angle: -fe.angle
                                            })), R);
                                    }
                                    const Me = w(m, ue), Fe = Ie({
                                        prior: P.topology,
                                        resultMesh: Me,
                                        generatingFeatureId: p.id,
                                        opKind: "draft",
                                        resultEdgeSamples: te(m, ue)
                                    });
                                    le(Fe, Me), d.set(p.id, {
                                        shape: ue,
                                        generatingFeatureId: p.id,
                                        opKind: "draft",
                                        topology: Fe,
                                        tipMesh: Me,
                                        dispose: ()=>{}
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "split" || p.type === "trim") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw Object.assign(new Error(`${p.type === "trim" ? "Trim Sheet" : "Split"} base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const R = io(p.toolRef, P, S), E = xb(m, P.shape, R, p.keepSide);
                                    try {
                                        const O = w(m, E.shape);
                                        if (O.positions.length === 0 || !O.indices?.length) throw new Error(`${p.type === "trim" ? "Trim Sheet" : "Split"} ${p.keepSide} side is empty; move the tool plane through the base solid`);
                                        const _ = Ie({
                                            prior: P.topology,
                                            resultMesh: O,
                                            generatingFeatureId: p.id,
                                            opKind: "boolean",
                                            resultEdgeSamples: te(m, E.shape)
                                        });
                                        if (le(_, O), E.outputs) for (const A of E.outputs){
                                            const T = w(m, A.shape), z = Ie({
                                                prior: P.topology,
                                                resultMesh: T,
                                                generatingFeatureId: p.id,
                                                opKind: "boolean",
                                                resultEdgeSamples: te(m, A.shape)
                                            });
                                            f.push({
                                                outputId: `${p.id}:${A.side}`,
                                                featureId: p.id,
                                                role: A.side,
                                                tipMesh: T,
                                                faces: z.faces,
                                                edges: z.edges
                                            });
                                        }
                                        d.set(p.id, {
                                            shape: E.shape,
                                            generatingFeatureId: p.id,
                                            opKind: p.type,
                                            topology: _,
                                            tipMesh: O,
                                            dispose: E.dispose
                                        }), k = p.id, h = p.id, c.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (O) {
                                        throw E.dispose(), O;
                                    }
                                }
                                if (p.type === "face_pull") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw Object.assign(new Error(`Face Pull base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const R = p.faceSelectors.map((O)=>Ln(P, O));
                                    if (R.some((O)=>!O.plane)) throw new Error("Face Pull supports planar faces only");
                                    const E = eu(m, P.shape, P.tipMesh, R, p.direction, p.distance, p.operation);
                                    try {
                                        const O = w(m, E.shape), _ = Ie({
                                            prior: P.topology,
                                            resultMesh: O,
                                            generatingFeatureId: p.id,
                                            opKind: p.operation === "add" ? "fuse" : "pocket",
                                            resultEdgeSamples: te(m, E.shape)
                                        });
                                        le(_, O), d.set(p.id, {
                                            shape: E.shape,
                                            generatingFeatureId: p.id,
                                            opKind: "face_pull",
                                            topology: _,
                                            tipMesh: O,
                                            dispose: E.dispose
                                        }), k = p.id, h = p.id, c.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (O) {
                                        throw E.dispose(), O;
                                    }
                                }
                                if (p.type === "multi_transform") {
                                    const P = d.get(p.seedFeatureId);
                                    if (!P) throw new Error(`MultiTransform seed ${p.seedFeatureId} not found`);
                                    let R = P.shape;
                                    const E = [];
                                    for (const _ of p.transforms)if (_.kind === "linear") {
                                        const A = [
                                            _.direction[0] * _.spacing * (_.count - 1),
                                            _.direction[1] * _.spacing * (_.count - 1),
                                            _.direction[2] * _.spacing * (_.count - 1)
                                        ], T = $d(m, R, A);
                                        R = T.shape, E.push(T.delete);
                                    } else if (_.kind === "polar" && _.axisRef.kind === "world") {
                                        const A = Dd(m, R, _.axisRef.origin, _.axisRef.direction, _.angleSpan);
                                        R = A.shape, E.push(A.delete);
                                    } else if (_.kind === "mirror" && _.planeRef.kind === "world") {
                                        const A = Ed(m, R, _.planeRef.origin, _.planeRef.normal);
                                        R = A.shape, E.push(A.delete);
                                    } else throw Object.assign(new Error("MultiTransform datum references require resolved replay support"), {
                                        code: "kernel-unavailable"
                                    });
                                    const O = w(m, R);
                                    d.set(p.id, {
                                        shape: R,
                                        generatingFeatureId: p.id,
                                        opKind: "pattern",
                                        topology: Ai(O, p.id),
                                        tipMesh: O,
                                        dispose: ()=>E.forEach((_)=>_())
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "box" || p.type === "cylinder" || p.type === "cone" || p.type === "sphere") {
                                    const P = ks(m, p), R = F.priorSolidFeatureId ?? k, E = R ? d.get(R) : void 0;
                                    let O = P.shape, _ = null;
                                    if (p.mode === "cut") {
                                        if (!E) throw P.dispose(), new Error(`Primitive ${p.type} cut requires a prior solid`);
                                        _ = Lt(m, E.shape, P.shape, "cut"), O = _.Shape();
                                    } else E && (_ = Lt(m, E.shape, P.shape, "union"), O = _.Shape());
                                    const A = w(m, O), T = Ai(A, p.id), z = {
                                        faces: T.faces,
                                        edges: Br(p.id, T.edges, te(m, O))
                                    };
                                    d.set(p.id, {
                                        shape: O,
                                        generatingFeatureId: p.id,
                                        opKind: "boolean",
                                        topology: z,
                                        tipMesh: A,
                                        dispose: ()=>{
                                            _?.delete?.(), P.dispose();
                                        }
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "boolean") {
                                    const P = d.get(p.targetFeatureId), R = d.get(p.toolFeatureId);
                                    if (!P) throw Object.assign(new Error(`Boolean target ${p.targetFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (!R) throw Object.assign(new Error(`Boolean tool ${p.toolFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const E = p.op === "union" && S.has(p.targetFeatureId) && S.has(p.toolFeatureId) && ew(S, p.targetFeatureId, p.toolFeatureId), O = E ? null : Lt(m, P.shape, R.shape, p.op), _ = E ? vr(m, R.shape) : O.Shape(), A = w(m, _), T = te(m, _), z = Ie({
                                        prior: E ? R.topology : P.topology,
                                        resultMesh: A,
                                        generatingFeatureId: p.id,
                                        opKind: "fuse",
                                        toolFaceHints: E ? [] : R.topology.faces.map((J)=>({
                                                role: J.provenance.role,
                                                featureId: p.id,
                                                expectedCentroid: J.centroid ?? [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                expectedNormal: J.normal ?? [
                                                    0,
                                                    0,
                                                    1
                                                ]
                                            })),
                                        toolEdgeHints: E ? [] : R.topology.edges.filter((J)=>J.midpoint).map((J)=>({
                                                role: J.provenance.role,
                                                featureId: p.id,
                                                midpoint: J.midpoint,
                                                start: J.startVertex,
                                                end: J.endVertex,
                                                faceRoles: [
                                                    "",
                                                    ""
                                                ]
                                            })),
                                        resultEdgeSamples: T
                                    });
                                    le(z, A), d.set(p.id, {
                                        shape: _,
                                        generatingFeatureId: p.id,
                                        opKind: "boolean",
                                        topology: z,
                                        tipMesh: A,
                                        dispose: ()=>O?.delete?.()
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "thickness") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw Object.assign(new Error(`Thickness base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (p.removedFaceSelectors.length === 0) throw new Error("Thickness requires at least one removed face");
                                    const R = p.removedFaceSelectors.map((A)=>{
                                        const T = P.topology.faces.find((z)=>z.provenance.featureId === A.featureId && z.provenance.role === A.role);
                                        if (!T) throw Object.assign(new Error(`Thickness face ${A.featureId}:${A.role} is lost`), {
                                            code: "topology-reference-lost"
                                        });
                                        return T;
                                    }), E = ob(m, P.shape, R, p.thickness, p.inward), O = w(m, E), _ = Ie({
                                        prior: P.topology,
                                        resultMesh: O,
                                        generatingFeatureId: p.id,
                                        opKind: "thickness",
                                        resultEdgeSamples: te(m, E)
                                    });
                                    le(_, O), d.set(p.id, {
                                        shape: E,
                                        generatingFeatureId: p.id,
                                        opKind: "thickness",
                                        topology: _,
                                        tipMesh: O,
                                        dispose: ()=>{}
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "fillet" || p.type === "chamfer") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw Object.assign(new Error(`${p.type} base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (p.edgeSelectors.length === 0) {
                                        d.set(p.id, {
                                            shape: P.shape,
                                            generatingFeatureId: p.id,
                                            opKind: p.type,
                                            topology: P.topology,
                                            tipMesh: P.tipMesh,
                                            dispose: ()=>{}
                                        }), k = p.id, h = p.id, c.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    }
                                    const R = te(m, P.shape);
                                    let E;
                                    try {
                                        E = ZI(R, p.edgeSelectors, P.topology.edges);
                                    } catch (z) {
                                        throw Object.assign(new Error(z instanceof Error ? z.message : String(z)), {
                                            code: "topology-reference-lost"
                                        });
                                    }
                                    const O = p.type === "fillet" ? ko(m, P.shape, E, p.radius) : Xi(m, P.shape, E, p.distance), _ = w(m, O), A = te(m, O), T = Ie({
                                        prior: P.topology,
                                        resultMesh: _,
                                        generatingFeatureId: p.id,
                                        opKind: "fuse",
                                        resultEdgeSamples: A
                                    });
                                    le(T, _), d.set(p.id, {
                                        shape: O,
                                        generatingFeatureId: p.id,
                                        opKind: p.type,
                                        topology: T,
                                        tipMesh: _,
                                        dispose: ()=>O.delete?.()
                                    }), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "extrude") {
                                    const P = t.snapshot.profiles[p.sketchId];
                                    if (!P) throw new Error(`Missing profile ${p.sketchId}`);
                                    const R = zc({
                                        depth: p.depth,
                                        secondDepth: p.secondDepth ?? 0,
                                        symmetric: p.symmetric ?? !1,
                                        mode: p.mode,
                                        startOffset: p.startOffset,
                                        endOffset: p.endOffset
                                    });
                                    if (p.mode === "add") {
                                        const E = at(m, P, R.span, {
                                            startOffset: R.startOffset
                                        }), O = F.priorSolidFeatureId ?? k, _ = p.fusePrior === !1 ? void 0 : O ? d.get(O) : void 0;
                                        if (_) {
                                            const A = new m.BRepAlgoAPI_Fuse_3(_.shape, E.shape);
                                            try {
                                                if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC additive extrude fuse failed");
                                                const T = A.Shape(), z = w(m, T), J = te(m, T), ee = eo(P, R.span, p.id, R.startOffset), Q = Ie({
                                                    prior: _.topology,
                                                    resultMesh: z,
                                                    generatingFeatureId: p.id,
                                                    opKind: "fuse",
                                                    toolFaceHints: ee.faces,
                                                    toolEdgeHints: ee.edges,
                                                    resultEdgeSamples: J
                                                });
                                                le(Q, z), d.set(p.id, We(A, p.id, "fuse", Q, z));
                                            } catch (T) {
                                                throw A.delete?.(), T;
                                            } finally{
                                                Xe(E);
                                            }
                                        } else {
                                            const A = w(m, E.shape), T = te(m, E.shape), z = su(P, p.depth, p.id, A, T, R.startOffset);
                                            le(z, A), d.set(p.id, mw(E, p.id, "extrude", z, A));
                                        }
                                    } else {
                                        const E = F.priorSolidFeatureId ?? k, O = E ? d.get(E) : void 0;
                                        if (!O) throw new Error("Pocket requires a prior solid shape");
                                        const _ = at(m, P, R.span, {
                                            startOffset: R.startOffset
                                        }), A = new m.BRepAlgoAPI_Cut_3(O.shape, _.shape);
                                        try {
                                            if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC pocket cut failed");
                                            const T = A.Shape(), z = w(m, T), J = te(m, T), ee = eo(P, R.span, p.id, R.startOffset), Q = Ie({
                                                prior: O.topology,
                                                resultMesh: z,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                toolFaceHints: ee.faces,
                                                toolEdgeHints: ee.edges,
                                                resultEdgeSamples: J
                                            });
                                            le(Q, z), d.set(p.id, We(A, p.id, "pocket", Q, z));
                                        } catch (T) {
                                            throw A.delete?.(), T;
                                        } finally{
                                            Xe(_);
                                        }
                                    }
                                    k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "hole") {
                                    const P = d.get(p.baseFeatureId);
                                    if (!P) throw new Error(`Hole base ${p.baseFeatureId} not found`);
                                    const R = t.snapshot.profiles[p.sketchId];
                                    if (!R) throw new Error(`Hole sketch profile ${p.sketchId} not found`);
                                    const E = Io(R, p.pointIds), O = Qc(R), _ = p.depthMode === "through" ? Math.max(p.depth, 1e5) : p.depth;
                                    let A = P;
                                    for (const [T, z] of E.entries()){
                                        const J = E.length === 1 ? p.id : `${p.id}::pt-${T}`, { uAxis: ee, vAxis: Q } = tw(O), ce = {
                                            loops: [
                                                {
                                                    isOuter: !0,
                                                    points: [
                                                        {
                                                            x: 0,
                                                            y: 0
                                                        },
                                                        {
                                                            x: 1,
                                                            y: 0
                                                        },
                                                        {
                                                            x: 0,
                                                            y: 1
                                                        }
                                                    ]
                                                }
                                            ],
                                            origin: z.origin,
                                            normal: O,
                                            uAxis: ee,
                                            vAxis: Q
                                        }, ue = [
                                            {
                                                profile: qo(ce, p.diameter / 2),
                                                depth: _
                                            }
                                        ];
                                        if (p.mode === "counterbore" && p.counterboreDiameter && p.counterboreDepth && ue.push({
                                            profile: qo(ce, p.counterboreDiameter / 2),
                                            depth: p.counterboreDepth
                                        }), p.mode === "countersink" && p.countersinkDiameter && p.countersinkAngleDeg) {
                                            const Me = (p.countersinkDiameter - p.diameter) / (2 * Math.tan(p.countersinkAngleDeg * Math.PI / 360));
                                            ue.push({
                                                profile: qo(ce, p.countersinkDiameter / 2),
                                                depth: Me
                                            });
                                        }
                                        for (const [Me, Fe] of ue.entries()){
                                            const oe = T === E.length - 1, fe = Me === ue.length - 1, ge = oe && fe ? p.id : `${J}::cut-${Me}`, De = Math.max(1e-4, Math.min(Fe.depth * 1e-6, .01)), Te = at(m, Fe.profile, Fe.depth + De, {
                                                startOffset: -De
                                            }), Re = new m.BRepAlgoAPI_Cut_3(A.shape, Te.shape);
                                            try {
                                                if (Re.Build(), Re.IsDone?.() === !1) throw new Error("OCC hole cut failed");
                                                const Ot = Re.Shape(), Zr = w(m, Ot), Pt = te(m, Ot), mt = Ie({
                                                    prior: A.topology,
                                                    resultMesh: Zr,
                                                    generatingFeatureId: ge,
                                                    opKind: "pocket",
                                                    resultEdgeSamples: Pt
                                                });
                                                if (le(mt, Zr), A = We(Re, ge, "pocket", mt, Zr), fe) {
                                                    const qt = [
                                                        p.startChamferEnabled ? {
                                                            side: "start",
                                                            offset: p.startChamferOffset,
                                                            angle: p.startChamferAngleDeg,
                                                            axial: 0,
                                                            radius: p.mode === "counterbore" ? p.counterboreDiameter / 2 : p.mode === "countersink" ? p.countersinkDiameter / 2 : p.diameter / 2
                                                        } : null,
                                                        p.endChamferEnabled ? {
                                                            side: "end",
                                                            offset: p.endChamferOffset,
                                                            angle: p.endChamferAngleDeg,
                                                            axial: p.depthMode === "through" ? Number.NaN : _,
                                                            radius: p.diameter / 2
                                                        } : null
                                                    ].filter((Ne)=>!!Ne);
                                                    for (const Ne of qt){
                                                        if (!(Ne.offset > 0) || !(Ne.angle > 1 && Ne.angle < 179)) throw new Error(`Invalid ${Ne.side} hole chamfer parameters`);
                                                        const Qr = te(m, A.shape), gr = LI(Qr, z.origin, O, Ne.radius, Ne.axial);
                                                        if (gr.length === 0) throw new Error(`Hole ${Ne.side} chamfer rim was not resolved`);
                                                        const en = Math.min(Ne.angle, 180 - Ne.angle), Gu = Ne.offset / Math.max(1e-6, Math.tan(en * Math.PI / 180)), ei = Xi(m, A.shape, gr, Gu), Oo = w(m, ei), Yu = te(m, ei), Na = Ie({
                                                            prior: {
                                                                faces: A.topology.faces.filter((Ju)=>Ju.provenance.featureId !== ge),
                                                                edges: A.topology.edges
                                                            },
                                                            resultMesh: Oo,
                                                            generatingFeatureId: ge,
                                                            opKind: "pocket",
                                                            resultEdgeSamples: Yu
                                                        });
                                                        le(Na, Oo), A = {
                                                            shape: ei,
                                                            generatingFeatureId: ge,
                                                            opKind: "chamfer",
                                                            topology: Na,
                                                            tipMesh: Oo,
                                                            dispose: ()=>ei.delete?.()
                                                        };
                                                    }
                                                }
                                                oe && fe || d.set(ge, A);
                                            } catch (Ot) {
                                                throw Re.delete?.(), Ot;
                                            } finally{
                                                Xe(Te);
                                            }
                                        }
                                    }
                                    d.set(p.id, A), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "linear_pattern") {
                                    const P = d.get(p.seedFeatureId);
                                    if (!P) throw new Error(`Linear pattern seed ${p.seedFeatureId} not found`);
                                    let R = p.bodyInputMode === "feature" || !F.priorSolidFeatureId ? P : d.get(F.priorSolidFeatureId);
                                    if (!R) throw new Error(`Linear pattern current Body ${F.priorSolidFeatureId} not found`);
                                    for(let E = 1; E < p.count; E++){
                                        const O = [
                                            p.direction[0] * p.spacing * E,
                                            p.direction[1] * p.spacing * E,
                                            p.direction[2] * p.spacing * E
                                        ], _ = $d(m, P.shape, O);
                                        d.set(`${p.id}::copy-${E}`, {
                                            shape: _.shape,
                                            generatingFeatureId: `${p.id}::copy-${E}`,
                                            opKind: "pattern",
                                            topology: P.topology,
                                            tipMesh: null,
                                            dispose: _.delete
                                        });
                                        const A = new m.BRepAlgoAPI_Fuse_3(R.shape, _.shape);
                                        try {
                                            if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC linear pattern fuse failed");
                                            const T = A.Shape(), z = w(m, T), J = Ie({
                                                prior: R.topology,
                                                resultMesh: z,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: te(m, T)
                                            });
                                            le(J, z), R = We(A, p.id, "fuse", J, z), E < p.count - 1 && d.set(`${p.id}::result-${E}`, R);
                                        } catch (T) {
                                            throw A.delete?.(), T;
                                        }
                                    }
                                    d.set(p.id, R), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "polar_pattern") {
                                    const P = d.get(p.seedFeatureId);
                                    if (!P) throw new Error(`Polar pattern seed ${p.seedFeatureId} not found`);
                                    const R = As({
                                        ...p,
                                        type: "revolve",
                                        sketchId: "",
                                        angle: p.angleSpan,
                                        mode: "add"
                                    }, S);
                                    let E = p.bodyInputMode === "feature" || !F.priorSolidFeatureId ? P : d.get(F.priorSolidFeatureId);
                                    if (!E) throw new Error(`Polar pattern current Body ${F.priorSolidFeatureId} not found`);
                                    for(let O = 1; O < p.count; O++){
                                        const _ = `${p.id}::copy-${O}`, A = Dd(m, P.shape, R.origin, R.direction, p.angleSpan * O / p.count), T = new m.BRepAlgoAPI_Fuse_3(E.shape, A.shape);
                                        try {
                                            if (T.Build(), T.IsDone?.() === !1) throw new Error("OCC polar pattern fuse failed");
                                            const z = T.Shape(), J = w(m, z), ee = Ie({
                                                prior: E.topology,
                                                resultMesh: J,
                                                generatingFeatureId: _,
                                                opKind: "fuse",
                                                resultEdgeSamples: te(m, z)
                                            });
                                            le(ee, J), E = We(T, _, "fuse", ee, J);
                                        } catch (z) {
                                            throw T.delete?.(), z;
                                        } finally{
                                            A.delete();
                                        }
                                    }
                                    d.set(p.id, E), k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "mirror") {
                                    const P = d.get(p.seedFeatureId);
                                    if (!P) throw new Error(`Mirror seed ${p.seedFeatureId} not found`);
                                    const R = p.bodyInputMode === "feature" || !F.priorSolidFeatureId ? P : d.get(F.priorSolidFeatureId);
                                    if (!R) throw new Error(`Mirror current Body ${F.priorSolidFeatureId} not found`);
                                    const E = nw(p, S), O = Ed(m, P.shape, E.origin, E.normal), _ = new m.BRepAlgoAPI_Fuse_3(R.shape, O.shape);
                                    try {
                                        if (_.Build(), _.IsDone?.() === !1) throw new Error("OCC mirror fuse failed");
                                        const A = _.Shape(), T = w(m, A), z = Ie({
                                            prior: R.topology,
                                            resultMesh: T,
                                            generatingFeatureId: p.id,
                                            opKind: "mirror",
                                            resultEdgeSamples: te(m, A)
                                        });
                                        le(z, T), d.set(p.id, We(_, p.id, "mirror", z, T)), k = p.id, h = p.id, c.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } finally{
                                        O.delete();
                                    }
                                }
                                if (p.type === "loft") {
                                    const P = p.sectionSketchIds.map((_)=>{
                                        const A = t.snapshot.profiles[_];
                                        if (!A) throw new Error(`Missing loft profile ${_}`);
                                        return A;
                                    }), R = db(m, P), E = F.priorSolidFeatureId ?? k, O = E ? d.get(E) : void 0;
                                    if (p.mode === "cut") {
                                        if (!O) throw new Error("Loft cut requires a prior solid");
                                        const _ = new m.BRepAlgoAPI_Cut_3(O.shape, R);
                                        try {
                                            if (_.Build(), _.IsDone?.() === !1) throw new Error("OCC loft cut failed");
                                            const A = _.Shape(), T = w(m, A), z = Ie({
                                                prior: O.topology,
                                                resultMesh: T,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                resultEdgeSamples: te(m, A)
                                            });
                                            le(z, T), d.set(p.id, We(_, p.id, "pocket", z, T));
                                        } catch (A) {
                                            throw _.delete?.(), A;
                                        }
                                    } else if (O) {
                                        const _ = new m.BRepAlgoAPI_Fuse_3(O.shape, R);
                                        try {
                                            if (_.Build(), _.IsDone?.() === !1) throw new Error("OCC additive loft fuse failed");
                                            const A = _.Shape(), T = w(m, A), z = Ie({
                                                prior: O.topology,
                                                resultMesh: T,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: te(m, A)
                                            });
                                            le(z, T), d.set(p.id, We(_, p.id, "fuse", z, T));
                                        } catch (A) {
                                            throw _.delete?.(), A;
                                        }
                                    } else {
                                        const _ = w(m, R), A = _i(P[0], 0, p.id, {
                                            origin: P[0].origin,
                                            direction: P[0].normal
                                        }, _, te(m, R));
                                        le(A, _), d.set(p.id, {
                                            shape: R,
                                            generatingFeatureId: p.id,
                                            opKind: "loft",
                                            topology: A,
                                            tipMesh: _,
                                            dispose: ()=>{}
                                        });
                                    }
                                    k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "pipe") {
                                    const R = (p.sectionSketchIds ?? [
                                        p.profileSketchId
                                    ]).map((Q)=>t.snapshot.profiles[Q]), E = p.pathReference?.featureId ?? p.pathSketchId, O = S.get(E), _ = O?.type === "helix" ? O : void 0, A = _ ? Xb(_) : t.snapshot.profiles[E];
                                    if (R.some((Q)=>!Q) || !A) throw new Error(`Missing pipe profile/path for ${p.id}`);
                                    const T = p, z = pb(m, R, A, p.orientation ?? "frenet", {
                                        orientationDirection: T.orientationDirection,
                                        orientationOrigin: T.orientationOrigin,
                                        preserveShape: T.preserveShape,
                                        preserveGuideShape: T.preserveGuideShape,
                                        scalingMethod: T.scalingMethod,
                                        sectionInterpolation: T.sectionInterpolation,
                                        tolAngleDeg: T.tolAngleDeg,
                                        tolDistance: T.tolDistance,
                                        ..._ ? {
                                            analyticHelix: _
                                        } : {}
                                    }), J = F.priorSolidFeatureId ?? k, ee = J ? d.get(J) : void 0;
                                    if (p.mode === "cut") {
                                        if (!ee) throw new Error("Pipe cut requires a prior solid");
                                        const Q = new m.BRepAlgoAPI_Cut_3(ee.shape, z);
                                        try {
                                            if (Q.Build(), Q.IsDone?.() === !1) throw new Error("OCC pipe cut failed");
                                            const ce = Q.Shape(), ue = w(m, ce), Me = Ie({
                                                prior: ee.topology,
                                                resultMesh: ue,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                resultEdgeSamples: te(m, ce)
                                            });
                                            le(Me, ue), d.set(p.id, We(Q, p.id, "pocket", Me, ue));
                                        } catch (ce) {
                                            throw Q.delete?.(), ce;
                                        }
                                    } else if (ee) {
                                        const Q = new m.BRepAlgoAPI_Fuse_3(ee.shape, z);
                                        try {
                                            if (Q.Build(), Q.IsDone?.() === !1) throw new Error("OCC additive pipe fuse failed");
                                            const ce = Q.Shape(), ue = w(m, ce), Me = Ie({
                                                prior: ee.topology,
                                                resultMesh: ue,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: te(m, ce)
                                            });
                                            le(Me, ue), d.set(p.id, We(Q, p.id, "fuse", Me, ue));
                                        } catch (ce) {
                                            throw Q.delete?.(), ce;
                                        }
                                    } else {
                                        const Q = w(m, z), ce = R[0], ue = _i(ce, 0, p.id, {
                                            origin: ce.origin,
                                            direction: ce.normal
                                        }, Q, te(m, z));
                                        le(ue, Q), d.set(p.id, {
                                            shape: z,
                                            generatingFeatureId: p.id,
                                            opKind: "pipe",
                                            topology: ue,
                                            tipMesh: Q,
                                            dispose: ()=>{}
                                        });
                                    }
                                    k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "revolve") {
                                    const P = t.snapshot.profiles[p.sketchId];
                                    if (!P) throw new Error(`Missing profile ${p.sketchId}`);
                                    const R = As(p, S);
                                    if (p.mode === "add") {
                                        const E = Vn(m, P, R.origin, R.direction, p.angle, p.startAngle ?? 0), O = F.priorSolidFeatureId ?? k, _ = p.fusePrior === !1 ? void 0 : O ? d.get(O) : void 0;
                                        if (_) {
                                            const A = new m.BRepAlgoAPI_Fuse_3(_.shape, E.shape);
                                            try {
                                                if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC additive revolve fuse failed");
                                                const T = A.Shape(), z = w(m, T), J = te(m, T), ee = to(P, p.angle, p.id, R), Q = Ie({
                                                    prior: _.topology,
                                                    resultMesh: z,
                                                    generatingFeatureId: p.id,
                                                    opKind: "fuse",
                                                    toolFaceHints: ee.faces,
                                                    toolEdgeHints: ee.edges,
                                                    resultEdgeSamples: J
                                                });
                                                le(Q, z), d.set(p.id, We(A, p.id, "fuse", Q, z));
                                            } catch (T) {
                                                throw A.delete?.(), T;
                                            } finally{
                                                qr(E);
                                            }
                                        } else {
                                            const A = w(m, E.shape), T = te(m, E.shape), z = _i(P, p.angle, p.id, R, A, T);
                                            le(z, A), d.set(p.id, yw(E, p.id, z, A));
                                        }
                                    } else {
                                        const E = F.priorSolidFeatureId ?? k, O = E ? d.get(E) : void 0;
                                        if (!O) throw new Error("Groove requires a prior solid shape");
                                        const _ = Vn(m, P, R.origin, R.direction, p.angle, p.startAngle ?? 0), A = new m.BRepAlgoAPI_Cut_3(O.shape, _.shape);
                                        try {
                                            if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC groove cut failed");
                                            const T = A.Shape(), z = w(m, T), J = te(m, T), ee = to(P, p.angle, p.id, R), Q = Ie({
                                                prior: O.topology,
                                                resultMesh: z,
                                                generatingFeatureId: p.id,
                                                opKind: "groove",
                                                toolFaceHints: ee.faces,
                                                toolEdgeHints: ee.edges,
                                                resultEdgeSamples: J
                                            });
                                            le(Q, z), d.set(p.id, We(A, p.id, "groove", Q, z));
                                        } catch (T) {
                                            throw A.delete?.(), T;
                                        } finally{
                                            qr(_);
                                        }
                                    }
                                    k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "helix") {
                                    c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "thread") {
                                    const P = S.get(p.helixFeatureId);
                                    if (!P || P.type !== "helix") throw new Error(`Thread Helix ${p.helixFeatureId} not found`);
                                    const R = F.priorSolidFeatureId ?? k, E = R ? d.get(R) : void 0;
                                    if (!E) throw new Error("Thread requires a prior solid for add/cut replay");
                                    const O = p.profileKind === "custom_sketch" && p.profileSketchId ? t.snapshot.profiles[p.profileSketchId] : void 0, _ = tu(m, P, p, O);
                                    if (p.mode === "cut") {
                                        const A = new m.BRepAlgoAPI_Cut_3(E.shape, _);
                                        try {
                                            if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC Thread cut failed");
                                            const T = A.Shape(), z = w(m, T), J = Ie({
                                                prior: E.topology,
                                                resultMesh: z,
                                                generatingFeatureId: p.id,
                                                opKind: "thread",
                                                resultEdgeSamples: te(m, T)
                                            });
                                            le(J, z), d.set(p.id, We(A, p.id, "thread", J, z));
                                        } catch (T) {
                                            throw A.delete?.(), T;
                                        }
                                    } else {
                                        const A = new m.BRepAlgoAPI_Fuse_3(E.shape, _);
                                        try {
                                            if (A.Build(), A.IsDone?.() === !1) throw new Error("OCC Thread fuse failed");
                                            const T = A.Shape(), z = w(m, T), J = Ie({
                                                prior: E.topology,
                                                resultMesh: z,
                                                generatingFeatureId: p.id,
                                                opKind: "thread",
                                                resultEdgeSamples: te(m, T)
                                            });
                                            le(J, z), d.set(p.id, We(A, p.id, "thread", J, z));
                                        } catch (T) {
                                            throw A.delete?.(), T;
                                        }
                                    }
                                    k = p.id, h = p.id, c.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                c.push({
                                    featureId: F.featureId,
                                    status: "failed",
                                    error: {
                                        code: "kernel-operation-failed",
                                        message: `Unsupported active step ${F.kind}`,
                                        featureId: F.featureId,
                                        recoverable: !1
                                    }
                                }), y = !0;
                            } catch (P) {
                                const R = Cd(P, `OCC ${F.kind} failed for Feature ${F.featureId}`), O = P.code === "topology-reference-lost" ? "topology-reference-lost" : /load|wasm|initial/i.test(R) ? "kernel-init-failed" : /lost|ambiguous|match edge|not found/i.test(R) ? "topology-reference-lost" : "kernel-operation-failed";
                                c.push({
                                    featureId: F.featureId,
                                    status: "failed",
                                    error: {
                                        code: O,
                                        message: R,
                                        featureId: F.featureId,
                                        phase: F.kind,
                                        recoverable: O === "kernel-init-failed"
                                    }
                                }), qi(F.kind) && (y = !0);
                            }
                        } finally{
                            Y || (r.recordFeatureFromStates(F, c, performance.now() - L, $), j(F));
                        }
                    }
                    const N = t.cacheResult !== !1 && Gt(s) && An(t.bodyId, t.revision);
                    if (N) {
                        const F = x.prefixFeatureIdsToPublish().flatMap(($)=>{
                            const L = d.get($), Y = t.replayPlan.steps.find((p)=>p.featureId === $);
                            return !L || !Y ? [] : [
                                {
                                    bodyId: t.bodyId,
                                    featureId: $,
                                    historyIndex: Y.historyIndex,
                                    generatingFeatureId: L.generatingFeatureId,
                                    opKind: L.opKind,
                                    shape: vr(m, L.shape),
                                    topology: Pd(L.topology),
                                    tipMesh: L.tipMesh ? Od(L.tipMesh) : null
                                }
                            ];
                        });
                        if (Gt(s) && An(t.bodyId, t.revision)) {
                            x.commit({
                                checkpoints: Pr,
                                prefixSolids: _s,
                                solids: F
                            }), Mb(t.bodyId, t.revision);
                            for (const $ of x.invalidateFromHistoryIndexes())It.invalidateFromHistoryIndex(t.bodyId, $);
                            It.invalidateFeatureIds(t.bodyId, x.droppedFeatureIds());
                            for (const $ of F){
                                const L = x.stagedCheckpoints().find((P)=>P.featureId === $.featureId && P.status === "ok"), Y = d.get($.featureId);
                                if (!L || !Y) continue;
                                const p = It.stage({
                                    key: yi({
                                        bodyId: L.bodyId,
                                        featureId: L.featureId,
                                        committedRevision: L.committedRevision,
                                        inputFingerprint: L.inputFingerprint,
                                        dependencyFingerprint: L.dependencyFingerprint,
                                        replayProtocolVersion: L.replayProtocolVersion,
                                        runtimeIdentity: L.runtimeIdentity
                                    }),
                                    shape: vr(m, Y.shape),
                                    historyIndex: $.historyIndex,
                                    generatingFeatureId: $.generatingFeatureId,
                                    opKind: $.opKind
                                });
                                Gt(s) && An(t.bodyId, t.revision) ? It.publish(p) : It.discard(p);
                            }
                        } else for (const $ of F)try {
                            $.shape.delete?.();
                        } catch  {}
                    }
                    let V = {
                        faces: [],
                        edges: []
                    };
                    if (h) {
                        const F = d.get(h);
                        if (F) {
                            if (I && (r.setActiveFeatureId(h), u = F.tipMesh ?? w(m, F.shape), g)) {
                                const $ = te(m, F.shape);
                                V = {
                                    faces: F.topology.faces,
                                    edges: Br(F.generatingFeatureId || h, F.topology.edges, $)
                                }, u && le(V, u);
                            }
                            if (N && Gt(s)) {
                                const $ = Pr.lookup(t.bodyId, h);
                                if ($) {
                                    const L = vr(m, F.shape), Y = no.get(t.bodyId);
                                    try {
                                        Y?.shape.delete?.();
                                    } catch  {}
                                    no.set(t.bodyId, {
                                        key: yi({
                                            bodyId: $.bodyId,
                                            featureId: $.featureId,
                                            committedRevision: $.committedRevision,
                                            inputFingerprint: $.inputFingerprint,
                                            dependencyFingerprint: $.dependencyFingerprint,
                                            replayProtocolVersion: $.replayProtocolVersion,
                                            runtimeIdentity: $.runtimeIdentity
                                        }),
                                        shape: L
                                    });
                                }
                            }
                        }
                    }
                    const D = h ? d.get(h) : void 0, K = t.exportTipBrep && D ? Wb(m, D.shape) : void 0, G = u ? tt(u) : [];
                    return K && G.push(K.buffer), {
                        response: {
                            ok: !0,
                            protocolVersion: qe,
                            requestId: t.requestId,
                            bodyId: t.bodyId,
                            revision: t.revision,
                            result: {
                                featureStates: c,
                                tipMesh: u,
                                ...K ? {
                                    tipBrep: K
                                } : {},
                                faces: V.faces,
                                edges: V.edges,
                                elapsedMs: Date.now() - a,
                                solidExecutionOrder: [
                                    ...t.replayPlan.solidExecutionOrder
                                ],
                                ...f.length > 0 ? {
                                    outputs: f
                                } : {}
                            },
                            transfers: G
                        },
                        transfers: G,
                        performanceEvents: In(r, "ok")
                    };
                } catch (b) {
                    const m = Cd(b, "OCC Body replay failed");
                    return {
                        response: Ei(t, {
                            code: /load|wasm|initial/i.test(m) ? "kernel-init-failed" : "internal",
                            message: m,
                            recoverable: !1,
                            phase: "execute"
                        }),
                        transfers: [],
                        performanceEvents: In(r, "failed")
                    };
                } finally{
                    for (const b of d.values()){
                        try {
                            b.dispose();
                        } catch  {}
                        l.track(b.shape);
                    }
                    d.clear(), l.releaseAll();
                    for (const b of v)try {
                        l.unprotect(b.shape), b.release();
                    } catch  {}
                }
            } finally{
                Cb(s);
            }
        }
    }
    class wu {
        constructor(t = _t, r = new cl().freeze()){
            this.featureHandlers = r, this.legacyExecutor = new Iw(t);
        }
        featureHandlers;
        legacyExecutor;
        execute(t) {
            return this.legacyExecutor.execute(t);
        }
        async executeFeatureBuildReplay(t) {
            const r = [];
            for (const n of t.builds)r.push(await this.featureHandlers.dispatch(n));
            return Object.freeze({
                ok: !0,
                workerProtocolVersion: t.workerProtocolVersion,
                requestId: t.requestId,
                bodyId: t.bodyId,
                revision: t.revision,
                results: Object.freeze(r)
            });
        }
    }
    async function xu(e) {
        return new wu().execute(e);
    }
    class Oe extends Error {
        constructor(t, r, n){
            super(t), this.code = r, this.context = n;
        }
        code;
        context;
        name = "OccBridgeError";
    }
    let bw = 0;
    function ww() {
        return `occ-body-${++bw}`;
    }
    class Os {
        constructor(t = null){
            this.createWorker = t;
        }
        createWorker;
        worker = null;
        pending = new Map;
        disposed = !1;
        consecutiveFailures = 0;
        pendingStaleEvents = [];
        get usesWorker() {
            return this.createWorker !== null;
        }
        async replayBody(t, r = {}) {
            if (this.disposed) throw new Oe("OCC body worker client disposed", "cancelled");
            const n = wo(t);
            return n ? {
                ok: !1,
                protocolVersion: qe,
                requestId: t.requestId,
                bodyId: t.bodyId,
                revision: t.revision,
                error: n
            } : (this.cancelBodyBeforeRevision(t.bodyId, t.revision, t), this.createWorker ? this.replayViaWorker(t, r) : this.replayInProcess(t, r));
        }
        getLastReplayDiagnostics() {
            return xl();
        }
        cancelBodyBeforeRevision(t, r, n) {
            let i = 0;
            for (const [o, s] of [
                ...this.pending
            ])s.request.bodyId === t && s.request.revision < r && this.settleCancel(o, s, n ? "stale" : "cancelled", n) && i++;
            return i;
        }
        cancelRequest(t) {
            const r = this.pending.get(t);
            return r ? this.settleCancel(t, r, "cancelled") : !1;
        }
        forgetBody(t) {
            for (const [r, n] of [
                ...this.pending
            ])n.request.bodyId === t && this.settleCancel(r, n, "cancelled");
            if (this.worker) {
                this.worker.postMessage({
                    type: "reset-body-replay-state",
                    protocolVersion: qe,
                    bodyId: t
                });
                return;
            }
            Zb(t), nu(t);
        }
        dispose() {
            this.disposed = !0;
            for (const [t, r] of [
                ...this.pending
            ])this.settleCancel(t, r);
            this.pending.clear(), this.worker?.terminate(), this.worker = null;
        }
        recreateWorker() {
            for (const [t, r] of [
                ...this.pending
            ])r.settled || (r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), r.reject(new Oe("OCC body worker restarted", "worker", {
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                featureId: "body-replay",
                revision: r.request.revision,
                operation: "body-replay"
            })));
            this.worker?.terminate(), this.worker = null, this.consecutiveFailures = 0;
        }
        takePendingStaleEvents() {
            const t = this.pendingStaleEvents;
            return this.pendingStaleEvents = [], t;
        }
        publishDiagnostics(t) {
            Sl(t);
        }
        settleCancel(t, r, n = "cancelled", i) {
            if (r.settled) return !1;
            r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), this.worker && this.worker.postMessage({
                type: "cancel-body-replay",
                protocolVersion: qe,
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                revision: r.request.revision
            });
            try {
                n === "stale" && i ? this.pendingStaleEvents.push(Fl(r.request, i)) : this.publishDiagnostics([
                    bn(r.request, "cancelled")
                ]);
            } catch  {}
            return r.reject(new Oe("OCC body replay cancelled", "cancelled", {
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                featureId: "body-replay",
                revision: r.request.revision,
                operation: "body-replay"
            })), !0;
        }
        async replayInProcess(t, r) {
            if (r.signal?.aborted) throw this.publishDiagnostics([
                ...this.takePendingStaleEvents(),
                bn(t, "cancelled")
            ]), new Oe("OCC body replay cancelled", "cancelled", {
                requestId: t.requestId,
                bodyId: t.bodyId,
                featureId: "body-replay",
                revision: t.revision,
                operation: "body-replay"
            });
            const n = r.timeoutMs ?? Math.max(1, t.deadlineMs - Date.now());
            let i;
            const o = new Promise((a, d)=>{
                i = setTimeout(()=>{
                    d(new Oe(`OCC body replay deadline exceeded after ${n}ms`, "deadline-exceeded", {
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        featureId: "body-replay",
                        revision: t.revision,
                        operation: "body-replay"
                    }));
                }, n);
            }), s = this.takePendingStaleEvents();
            try {
                const { response: a, performanceEvents: d } = await Promise.race([
                    xu(t),
                    o
                ]);
                return this.publishDiagnostics([
                    ...s,
                    ...d
                ]), a;
            } catch (a) {
                throw a instanceof Oe && (a.code === "deadline-exceeded" || a.code === "cancelled") ? this.publishDiagnostics([
                    ...s,
                    bn(t, a.code === "deadline-exceeded" ? "deadline-exceeded" : "cancelled")
                ]) : s.length > 0 && this.publishDiagnostics(s), a;
            } finally{
                i && clearTimeout(i);
            }
        }
        replayViaWorker(t, r) {
            const n = this.ensureWorker(), i = r.timeoutMs ?? Math.max(1, t.deadlineMs - Date.now());
            return new Promise((o, s)=>{
                const a = {
                    resolve: o,
                    reject: s,
                    request: t,
                    settled: !1,
                    staleEvents: this.takePendingStaleEvents()
                }, d = (c, f)=>{
                    a.settled || (a.settled = !0, a.timeoutId && clearTimeout(a.timeoutId), this.pending.delete(t.requestId), f && n.postMessage({
                        type: "cancel-body-replay",
                        protocolVersion: qe,
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        revision: t.revision
                    }), (c.code === "cancelled" || c.code === "deadline-exceeded") && this.publishDiagnostics([
                        ...a.staleEvents,
                        bn(t, c.code === "deadline-exceeded" ? "deadline-exceeded" : "cancelled")
                    ]), this.consecutiveFailures += 1, (c.code === "deadline-exceeded" || this.consecutiveFailures >= 2) && this.recreateWorker(), s(c));
                }, l = {
                    requestId: t.requestId,
                    bodyId: t.bodyId,
                    featureId: "body-replay",
                    revision: t.revision,
                    operation: "body-replay"
                };
                if (r.signal?.aborted) {
                    d(new Oe("OCC body replay cancelled", "cancelled", l), !1);
                    return;
                }
                r.signal?.addEventListener("abort", ()=>{
                    d(new Oe("OCC body replay cancelled", "cancelled", l), !0);
                }, {
                    once: !0
                }), a.timeoutId = setTimeout(()=>{
                    d(new Oe(`OCC body replay deadline exceeded after ${i}ms`, "deadline-exceeded", l), !0);
                }, i), this.pending.set(t.requestId, a), n.postMessage(t);
            });
        }
        ensureWorker() {
            if (this.worker) return this.worker;
            if (!this.createWorker) throw new Oe("OCC body worker factory missing", "worker");
            const t = this.createWorker();
            return t.onmessage = (r)=>{
                const n = r.data;
                if (pl(n)) return;
                const i = this.pending.get(n.requestId);
                if (!i || i.settled) return;
                const o = fl(i.request, n);
                if (o) {
                    i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), this.consecutiveFailures += 1, this.consecutiveFailures >= 2 && this.recreateWorker(), i.reject(new Oe(o.message, "protocol-invalid", {
                        requestId: i.request.requestId,
                        bodyId: i.request.bodyId,
                        featureId: "body-replay",
                        revision: i.request.revision,
                        operation: "body-replay"
                    }));
                    return;
                }
                i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), this.consecutiveFailures = 0;
                const { performanceEvents: s, ...a } = n;
                this.publishDiagnostics([
                    ...i.staleEvents,
                    ...s ?? []
                ]), i.resolve(a);
            }, t.onerror = (r)=>{
                for (const [n, i] of [
                    ...this.pending
                ])i.settled || (i.settled = !0, i.timeoutId && clearTimeout(i.timeoutId), this.pending.delete(n), i.reject(new Oe(r.message ?? "OCC body worker error", "worker", {
                    requestId: i.request.requestId,
                    bodyId: i.request.bodyId,
                    featureId: "body-replay",
                    revision: i.request.revision,
                    operation: "body-replay"
                })));
                this.recreateWorker();
            }, this.worker = t, t;
        }
    }
    let jt = null;
    function xw(e) {
        return e !== void 0 ? (jt?.dispose(), jt = new Os(e), jt) : (jt || (jt = new Os(null)), jt);
    }
    function Sw() {
        jt?.dispose(), jt = null, kl();
    }
    function Ra(e, t, r) {
        const n = Et(e, t), i = ka(e, n.face, r, t.normal), o = Ve(e, i.shape);
        n.faceMaker.delete?.(), n.wireBuilder.delete?.();
        for (const s of n.innerWireBuilders)s.delete?.();
        return Xe(i), o;
    }
    const kw = Ra;
    function Su(e, t, r, n, i, o, s) {
        const a = at(e, t, r), d = Vn(e, n, i, o, s), l = new e.BRepAlgoAPI_Cut_3(a.shape, d.shape);
        try {
            if (l.Build(), l.IsDone?.() === !1) throw new Error("OCC Groove cut failed");
            return Ve(e, l.Shape());
        } finally{
            l.delete?.(), qr(d), Xe(a);
        }
    }
    async function vw(e, t, r, n, i, o, s) {
        const a = Su(await _t(), e, t, r, n, i, o);
        return {
            mesh: a,
            transfers: tt(a)
        };
    }
    var ku = ((e)=>(e.Right = "right", e.Left = "left", e))(ku || {}), vu = ((e)=>(e.RadialAxial = "radialAxial", e.World = "world", e))(vu || {});
    const Zt = 1e-10, lt = (e, t)=>[
            e[0] + t[0],
            e[1] + t[1],
            e[2] + t[2]
        ], Hn = (e, t)=>[
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], ze = (e, t)=>[
            e[0] * t,
            e[1] * t,
            e[2] * t
        ], qn = (e, t)=>e[0] * t[0] + e[1] * t[1] + e[2] * t[2], Ca = (e, t)=>[
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ], $r = (e)=>Math.hypot(e[0], e[1], e[2]), Nr = (e, t)=>{
        const r = $r(e);
        if (!(r > Zt)) throw new Error(`${t} must be non-zero`);
        return ze(e, 1 / r);
    };
    function Fw(e) {
        const t = [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ],
            [
                0,
                0,
                1
            ]
        ], r = Nr(e, "axisDirection");
        return t.map((n)=>({
                candidate: n,
                alignment: Math.abs(qn(r, n))
            })).sort((n, i)=>n.alignment - i.alignment)[0].candidate;
    }
    const zd = (e, t)=>[
            e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3],
            e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7],
            e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11]
        ];
    function Fu(e) {
        const t = [], r = [];
        if (e.profile || t.push("HelicalSweepFeat: profile is required"), (!(e.radius > Zt) || !Number.isFinite(e.radius)) && t.push("HelicalSweepFeat: radius must be positive"), (!(Math.abs(e.pitch) > Zt) || !Number.isFinite(e.pitch)) && t.push("HelicalSweepFeat: pitch must be non-zero"), (!(e.turns > 0) || !Number.isFinite(e.turns)) && t.push("HelicalSweepFeat: turns must be positive"), $r(e.axisDirection) <= Zt && t.push("HelicalSweepFeat: axisDirection must be non-zero"), e.referenceDirection !== void 0 && ($r(e.referenceDirection) <= Zt && t.push("HelicalSweepFeat: referenceDirection must be non-zero"), $r(Ca(e.axisDirection, e.referenceDirection)) <= Zt && t.push("HelicalSweepFeat: referenceDirection is parallel to helix axis")), (e.maxDegree ?? 5) < 2 && t.push("HelicalSweepFeat: maxDegree must be at least 2"), (!(e.maxSegments ?? 200) || (e.maxSegments ?? 200) < 1) && t.push("HelicalSweepFeat: maxSegments must be positive"), e.profileMode === "radialAxial") {
            const n = e.profile.loops.flatMap((i)=>i.points);
            n.length > 0 && Math.max(...n.map((o)=>o.y)) - Math.min(...n.map((o)=>o.y)) >= Math.abs(e.pitch) && r.push("Adjacent helical turns may overlap");
        }
        return e.orientationDirection !== void 0 && $r(e.orientationDirection) <= Zt && t.push("HelicalSweepFeat: orientationDirection must be non-zero"), {
            valid: t.length === 0,
            errors: t,
            warnings: r
        };
    }
    class Ps {
        constructor(t){
            this.params = t, this.axisOrigin = [
                ...t.axisOrigin
            ], this.axisDirection = Nr(t.axisDirection, "axisDirection");
            const r = t.referenceDirection ?? Fw(this.axisDirection), n = Hn(r, ze(this.axisDirection, qn(r, this.axisDirection)));
            this.radial0 = Nr(n, "referenceDirection"), this.circumferential0 = Ca(this.axisDirection, this.radial0), this.handedness = t.handedness === "left" ? -1 : 1, this.totalSweep = Math.PI * 2 * t.turns;
        }
        params;
        axisOrigin;
        axisDirection;
        radial0;
        circumferential0;
        handedness;
        totalSweep;
        pointAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t, n = lt(ze(this.radial0, Math.cos(r)), ze(this.circumferential0, Math.sin(r)));
            return lt(lt(this.axisOrigin, ze(n, this.params.radius)), ze(this.axisDirection, this.params.pitch * t / (Math.PI * 2)));
        }
        radialAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t;
            return lt(ze(this.radial0, Math.cos(r)), ze(this.circumferential0, Math.sin(r)));
        }
        circumferentialAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t;
            return lt(ze(this.radial0, -Math.sin(r)), ze(this.circumferential0, Math.cos(r)));
        }
        tangentAt(t) {
            return Nr(lt(ze(this.circumferentialAt(t), this.handedness * this.params.radius), ze(this.axisDirection, this.params.pitch / (Math.PI * 2))), "helix tangent");
        }
        transformAt(t) {
            return this.getRigidHelicalTransform(t);
        }
        getRigidHelicalTransform(t) {
            const r = this.handedness * t, n = this.axisDirection, i = Math.cos(r), o = Math.sin(r), s = 1 - i, a = [
                s * n[0] * n[0] + i,
                s * n[0] * n[1] - o * n[2],
                s * n[0] * n[2] + o * n[1],
                s * n[1] * n[0] + o * n[2],
                s * n[1] * n[1] + i,
                s * n[1] * n[2] - o * n[0],
                s * n[2] * n[0] - o * n[1],
                s * n[2] * n[1] + o * n[0],
                s * n[2] * n[2] + i
            ], d = lt(Hn(this.axisOrigin, [
                a[0] * this.axisOrigin[0] + a[1] * this.axisOrigin[1] + a[2] * this.axisOrigin[2],
                a[3] * this.axisOrigin[0] + a[4] * this.axisOrigin[1] + a[5] * this.axisOrigin[2],
                a[6] * this.axisOrigin[0] + a[7] * this.axisOrigin[1] + a[8] * this.axisOrigin[2]
            ]), ze(this.axisDirection, this.params.pitch * t / (Math.PI * 2)));
            return [
                a[0],
                a[1],
                a[2],
                d[0],
                a[3],
                a[4],
                a[5],
                d[1],
                a[6],
                a[7],
                a[8],
                d[2],
                0,
                0,
                0,
                1
            ];
        }
    }
    function _u(e, t, r, n, i, o) {
        if (r === "radialAxial") return {
            x: t.x,
            y: t.y
        };
        const s = [
            e.origin[0] + e.uAxis[0] * t.x + e.vAxis[0] * t.y,
            e.origin[1] + e.uAxis[1] * t.x + e.vAxis[1] * t.y,
            e.origin[2] + e.uAxis[2] * t.x + e.vAxis[2] * t.y
        ], a = Hn(s, n);
        return {
            x: qn(a, i),
            y: qn(a, o)
        };
    }
    function _w(e, t, r, n, i, o) {
        const s = (a)=>_u(e, a, r, n, i, o);
        return t.kind === "line" ? {
            ...t,
            start: s(t.start),
            end: s(t.end)
        } : t.kind === "circle" ? {
            ...t,
            center: s(t.center)
        } : t.kind === "arc" ? {
            ...t,
            center: s(t.center),
            start: s(t.start),
            end: s(t.end)
        } : {
            ...t,
            controls: t.controls.map(s)
        };
    }
    function Ms(e, t, r) {
        const n = e.radialAt(r), i = e.tangentAt(r), o = Nr(Ca(i, n), "helical profile binormal"), s = lt(lt(e.pointAt(r), ze(n, t.profileRadialOffset ?? 0)), ze(i, t.profileAxialOffset ?? 0)), a = ze(o, -1), d = t.profile.loops.map((l)=>({
                ...l,
                points: l.points.map((c)=>_u(t.profile, c, t.profileMode ?? "radialAxial", s, n, a)),
                segments: l.segments?.map((c)=>_w(t.profile, c, t.profileMode ?? "radialAxial", s, n, a))
            }));
        return {
            ...t.profile,
            origin: s,
            normal: ze(i, -1),
            uAxis: n,
            vAxis: a,
            loops: d
        };
    }
    class Eu {
        constructor(t){
            this.oc = t;
        }
        oc;
        name = "occ-single-section-pipeshell";
        build(t, r) {
            if (t.length === 0) throw new Error("Helical sweep requires a start profile");
            const n = {
                axisOrigin: r.axisOrigin,
                axisDirection: r.axisDirection,
                radius: r.radius,
                endRadius: r.radius,
                pitch: Math.abs(r.pitch),
                endPitch: Math.abs(r.pitch),
                height: r.pitch * r.turns,
                handedness: r.pitch < 0 ? (r.handedness ?? "right") === "left" ? "right" : "left" : r.handedness ?? "right",
                startAngle: r.startAngle ?? 0
            };
            let i, o, s, a, d;
            try {
                i = vo(this.oc, n, 32), o = Et(this.oc, t[0]), s = Au(this.oc, "BRepOffsetAPI_MakePipeShell", [
                    i.wire
                ]), r.orientationDirection && Ew(this.oc, s, r.orientationDirection);
                const l = this.oc.BRepBuilderAPI_TransitionMode?.BRepBuilderAPI_Transformed;
                if (l !== void 0 && s.SetTransitionMode?.(l), r.tolerance3d !== void 0 && s.SetTolerance?.(r.tolerance3d, r.boundaryTolerance ?? r.tolerance3d, r.angularTolerance ?? r.tolerance3d), s.SetMaxDegree?.(r.maxDegree ?? 5), s.SetMaxSegments?.(r.maxSegments ?? 200), a = new this.oc.TopExp_Explorer_2(i.wire, this.oc.TopAbs_ShapeEnum.TopAbs_VERTEX, this.oc.TopAbs_ShapeEnum.TopAbs_SHAPE), !a.More()) throw new Error("OCC PipeShell spine has no start vertex");
                if (d = this.oc.TopoDS.Vertex_1(a.Current()), typeof s.Add_2 != "function") throw new Error("OCC PipeShell located profile Add binding is unavailable");
                if (s.Add_2(o.outerWire, d, !1, !0), s.Build?.(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC single-section PipeShell failed to build a valid result");
                return r.makeSolid !== !1 && s.MakeSolid?.(), s.Shape();
            } finally{
                d?.delete?.(), a?.delete?.(), s?.delete?.(), o?.faceMaker.delete?.(), o?.wireBuilder.delete?.();
                for (const l of o?.innerWireBuilders ?? [])l.delete?.();
                i?.builder.delete?.();
                for (const l of i?.resources ?? [])l.delete?.();
            }
        }
    }
    function Ew(e, t, r) {
        const n = Au(e, "gp_Dir", r);
        try {
            for (const i of [
                "SetMode_2",
                "SetMode_1",
                "SetMode_3",
                "SetMode_4"
            ])if (typeof t[i] == "function") try {
                t[i](n);
                return;
            } catch  {}
            throw new Error("OCC PipeShell forced-direction mode is unavailable");
        } finally{
            n.delete?.();
        }
    }
    function Au(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    class Aw {
        constructor(t, r = new Eu(t)){
            this.oc = t, this.backend = r;
        }
        oc;
        backend;
        result = null;
        geometry = null;
        activeParams = null;
        setParams(t) {
            this.result = null, this.activeParams = t, this.geometry = new Ps(t);
        }
        build(t) {
            const r = Date.now(), n = Fu(t);
            if (!n.valid) return this.result = {
                success: !1,
                warnings: n.warnings,
                errors: n.errors
            };
            try {
                const i = this.geometry && this.geometry.params === t ? this.geometry : new Ps(t);
                this.geometry = i, this.activeParams = t;
                const o = Date.now(), s = [
                    Ms(i, t, 0)
                ], a = Date.now() - o, d = [
                    ...n.warnings
                ], l = Date.now(), c = this.backend.build(s, t), f = Date.now() - l;
                return this.result = {
                    success: !0,
                    shape: c,
                    spine: i,
                    transformedProfile: s[0],
                    warnings: d,
                    errors: [],
                    timingsMs: {
                        sectionPreparation: a,
                        backendBuild: f,
                        total: Date.now() - r,
                        sectionCount: s.length
                    }
                };
            } catch (i) {
                return this.result = {
                    success: !1,
                    warnings: n.warnings,
                    errors: [
                        i instanceof Error ? i.message : String(i)
                    ]
                };
            }
        }
        shape() {
            return this.result?.shape;
        }
        spine() {
            return this.geometry ?? void 0;
        }
        simulateSections(t = 20) {
            if (!this.geometry) throw new Error("HelicalSweepFeat has no parameters");
            const r = this.activeParams;
            if (!r) throw new Error("HelicalSweepFeat has no profile parameters");
            return Array.from({
                length: Math.max(2, t)
            }, (n, i)=>Ms(this.geometry, r, this.geometry.totalSweep * i / (Math.max(2, t) - 1)));
        }
        validateFrame(t = 20) {
            if (!this.geometry) throw new Error("HelicalSweepFeat has no parameters");
            let r = 0, n = 0;
            for(let i = 0; i <= t; i += 1){
                const o = this.geometry.totalSweep * i / t, s = zd(this.geometry.getRigidHelicalTransform(o), this.geometry.pointAt(0)), a = Nr(Hn(zd(this.geometry.getRigidHelicalTransform(o), lt(this.geometry.pointAt(0), this.geometry.radialAt(0))), this.geometry.pointAt(o)), "transformed radial");
                r = Math.max(r, $r(Hn(s, this.geometry.pointAt(o)))), n = Math.max(n, 1 - Math.min(1, Math.max(-1, qn(a, this.geometry.radialAt(o)))));
            }
            return {
                valid: r <= 1e-6 && n <= 1e-6,
                maxCenterError: r,
                maxAngularError: n,
                samples: t
            };
        }
    }
    var Ow = {};
    function Gr(e, t, r) {
        const o = new qs().extrude(e, t, r, "HeadlessSpike").tessellation;
        return {
            mesh: o,
            transfers: tt(o)
        };
    }
    function $a(e, t, r, n, i) {
        const a = new qs().revolve(e, t, r, n, i, "HeadlessRevolve").tessellation;
        return {
            mesh: a,
            transfers: tt(a)
        };
    }
    function Yr() {
        return typeof process > "u" ? !1 : Ow.OCC_BRIDGE_HEADLESS_SPIKE === "1";
    }
    const Pw = Gr, Mw = $a;
    function gi(e, t) {
        return {
            protocolVersion: Xr,
            requestId: e.requestId ?? "invalid",
            bodyId: e.bodyId ?? "unknown",
            featureId: e.featureId ?? "unknown",
            revision: e.revision ?? 0,
            operation: e.operation ?? "ping",
            ok: !1,
            error: t
        };
    }
    async function Da(e) {
        const t = pa(e);
        if (t) return {
            response: gi(e, t),
            transfers: []
        };
        if (Date.now() > e.deadlineMs) return {
            response: gi(e, {
                code: "deadline-exceeded",
                message: "OCC request deadline exceeded",
                operation: e.operation,
                recoverable: !0
            }),
            transfers: []
        };
        if (e.operation === "ping") return {
            response: {
                ...e,
                ok: !0,
                result: {
                    type: "pong"
                },
                transfers: []
            },
            transfers: []
        };
        try {
            let r, n;
            if (e.operation === "revolve") {
                const o = e.payload;
                if (Yr()) ({ mesh: r, transfers: n } = $a(o.profile, o.axisOrigin, o.axisDirection, o.angle, e.featureId));
                else {
                    const { revolveProfileWithOcc: s } = await Ts(async ()=>{
                        const { revolveProfileWithOcc: a } = await Promise.resolve().then(()=>NI);
                        return {
                            revolveProfileWithOcc: a
                        };
                    }, []);
                    r = s(await _t(), o.profile, o.axisOrigin, o.axisDirection, o.angle), n = tt(r);
                }
            } else {
                const o = e.payload;
                if (!(o.depth > 0) || o.profile.loops.length === 0) return {
                    response: gi(e, {
                        code: "invalid-profile",
                        message: "Invalid extrude profile/depth",
                        operation: e.operation,
                        recoverable: !0
                    }),
                    transfers: []
                };
                Yr() ? { mesh: r, transfers: n } = Gr(o.profile, o.depth, e.featureId) : (r = Ra(await _t(), o.profile, o.depth), n = tt(r));
            }
            return {
                response: {
                    protocolVersion: Xr,
                    requestId: e.requestId,
                    bodyId: e.bodyId,
                    featureId: e.featureId,
                    revision: e.revision,
                    operation: e.operation,
                    ok: !0,
                    result: {
                        type: "mesh",
                        mesh: r
                    },
                    transfers: n
                },
                transfers: n
            };
        } catch (r) {
            const n = r instanceof Error ? r.message : String(r), i = /load|wasm|initial/i.test(n) ? "kernel-init-failed" : "kernel-operation-failed";
            return {
                response: gi(e, {
                    code: i,
                    message: n,
                    operation: e.operation,
                    recoverable: !0
                }),
                transfers: []
            };
        }
    }
    async function Ou(e, t, r) {
        const n = {
            protocolVersion: 1,
            requestId: "headless",
            operation: "extrude",
            bodyId: "headless-body",
            featureId: r,
            revision: 0,
            deadlineMs: Date.now() + 12e4,
            payload: {
                profile: e,
                depth: t
            }
        }, { response: i } = await Da(n);
        if (i.ok === !1) throw new Error(i.error.message);
        if (i.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: i.result.mesh,
            transfers: i.transfers
        };
    }
    const Rw = Ou;
    function Ta(e, t, r, n) {
        if (n.length === 0) throw new Error("pocketProfilesWithOcc requires at least one cut");
        const i = at(e, t, r), o = [], s = [];
        try {
            let a = i.shape, d = null;
            for (const l of n){
                const c = at(e, l.profile, l.depth, {
                    inward: !0
                });
                o.push(c);
                const f = new e.BRepAlgoAPI_Cut_3(a, c.shape);
                if (s.push(f), f.Build(), f.IsDone?.() === !1) throw new Error("OCC BRepAlgoAPI_Cut failed");
                d = f.Shape(), a = d;
            }
            return Ve(e, d);
        } finally{
            for (const a of s)a.delete?.();
            for (const a of o)Xe(a);
            Xe(i);
        }
    }
    function Cw(e, t, r, n, i) {
        return Ta(e, t, r, [
            {
                profile: n,
                depth: i
            }
        ]);
    }
    function Pu(e, t, r, n) {
        Gr(t, r, n);
        const i = e.positions.slice(0, Math.max(9, Math.floor(e.positions.length * .85))), o = {
            ...e,
            positions: i,
            subMeshes: e.subMeshes.map((s)=>({
                    ...s
                }))
        };
        return {
            mesh: o,
            transfers: tt(o)
        };
    }
    function Rs(e, t, r) {
        let n = e;
        for(let i = 0; i < t.length; i++){
            const o = t[i];
            n = Pu(n, o.profile, o.depth, `${r}-cut-${i}`).mesh;
        }
        return {
            mesh: n,
            transfers: tt(n)
        };
    }
    async function Mu(e, t, r, n) {
        if (r.length === 0) throw new Error("pocketProfilesHeadless requires at least one cut");
        if (Yr()) {
            const i = Gr(e, t, `${n}-base`);
            return Rs(i.mesh, r, n);
        }
        try {
            const i = await _t(), o = Ta(i, e, t, r);
            return {
                mesh: o,
                transfers: tt(o)
            };
        } catch (i) {
            console.warn("[occ-bridge] OCC pocket failed; using MeshBRepBackend fallback", i);
            const o = Gr(e, t, `${n}-base`), s = Rs(o.mesh, r, n), a = i instanceof Error ? i.message : String(i);
            return {
                ...s,
                fallbackWarning: `OCC kernel failed (${a}); MeshBRep fallback used`
            };
        }
    }
    async function $w(e, t, r, n, i) {
        return Mu(e, t, [
            {
                profile: r,
                depth: n
            }
        ], i);
    }
    async function Dw(e, t, r, n) {
        if (Yr()) return Pu(e, t, r, n);
        throw new Error("pocketRectangleHeadless requires pad profile — use pocketProfileHeadless(baseProfile, baseDepth, …)");
    }
    async function Ru(e, t, r, n, i) {
        const o = {
            protocolVersion: 1,
            requestId: "headless",
            operation: "revolve",
            bodyId: "headless-body",
            featureId: i,
            revision: 0,
            deadlineMs: Date.now() + 12e4,
            payload: {
                profile: e,
                axisOrigin: t,
                axisDirection: r,
                angle: n
            }
        }, { response: s } = await Da(o);
        if (s.ok === !1) throw new Error(s.error.message);
        if (s.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: s.result.mesh,
            transfers: s.transfers
        };
    }
    const Tw = Ru;
    function Cu(e, t, r, n) {
        const s = new qs().boolean(e, t, r, n, `Boolean${r}`).tessellation;
        return {
            mesh: s,
            transfers: tt(s)
        };
    }
    async function Bw(e, t, r, n) {
        if (Yr()) return Cu(e, t, r, n);
        throw new Error("OCC boolean on MeshBRep solids is not supported; use OccBodyReplayExecutor / protocol v2");
    }
    const jd = 1e-9;
    class it extends Error {
        constructor(t){
            super(t), this.name = "UgFeatureSnapshotParseError";
        }
    }
    function Pe(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function be(e) {
        return typeof e == "string" ? e : null;
    }
    function Ba(e) {
        return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function $e(e) {
        return !Array.isArray(e) || e.length !== 3 || e.some((t)=>typeof t != "number" || !Number.isFinite(t)) ? null : [
            e[0],
            e[1],
            e[2]
        ];
    }
    function ot(e) {
        if (typeof e == "number") return Number.isFinite(e) ? e : null;
        if (typeof e == "string" && e.trim() !== "") {
            const t = Number(e);
            return Number.isFinite(t) ? t : null;
        }
        return null;
    }
    function zw(e) {
        const t = Pe(e) ? e : {}, r = Pe(t.limits) ? t.limits : {}, n = Pe(r.start) ? r.start : {}, i = Pe(r.end) ? r.end : {}, o = Array.isArray(t.owned_exprs) ? t.owned_exprs.filter(Pe) : [], s = (...l)=>{
            for (const c of l){
                const f = be(t[c])?.split("=")[0]?.trim().toLowerCase(), u = f ? o.find((x)=>be(x.expr_name)?.toLowerCase() === f) : void 0, h = u ? ot(u.value) : null;
                if (h !== null) return h;
                const y = ot(t[c]);
                if (y !== null) return y;
                const I = o.find((x)=>{
                    const v = be(x.desc)?.toLowerCase() ?? "", b = be(x.expr_name)?.toLowerCase() ?? "";
                    return v.includes(c.toLowerCase()) || b === c.toLowerCase();
                }), g = I ? ot(I.value) : null;
                if (g !== null) return g;
            }
            return null;
        }, a = Oi(t.section_ids, "parameters.section_ids"), d = Pe(t) && Array.isArray(t.section_data) ? t.section_data.flatMap((l)=>!Pe(l) || !Array.isArray(l.rules) ? [] : l.rules.flatMap((c)=>!Pe(c) || !Array.isArray(c.curves) ? [] : c.curves.flatMap((f)=>!Pe(f) || !Number.isInteger(f.owner_feature_id) ? [] : [
                        f.owner_feature_id
                    ]))) : [];
        return {
            sectionIds: [
                ...new Set([
                    ...a,
                    ...d
                ])
            ],
            targetFeatureIds: Oi(t.target_feature_ids, "parameters.target_feature_ids"),
            toolFeatureIds: Oi(t.tool_feature_ids, "parameters.tool_feature_ids"),
            booleanOp: be(t.boolean_op ?? t.boolean_operation ?? t.boolean_mode ?? t.operation),
            direction: $e(t.direction),
            axisDirection: $e(t.axis_dir),
            startAngleDegrees: ot(t.start_angle_deg),
            endAngleDegrees: ot(t.end_angle_deg),
            startLimitValue: ot(n.value),
            endLimitValue: ot(i.value),
            symmetric: r.symmetric === !0,
            origin: $e(t.origin),
            axisOrigin: $e(t.axis_origin),
            radiusValue: s("radius"),
            endRadiusValue: s("end radius"),
            diameterValue: s("diameter", "hole diameter"),
            majorDiameterValue: s("major diameter"),
            minorDiameterValue: s("minor diameter"),
            counterboreDiameterValue: s("counter bore diameter", "cbore diam", "counterbore diameter"),
            counterboreDepthValue: s("counter bore depth", "cbore depth", "counterbore depth"),
            heightValue: s("height"),
            lengthValue: s("length"),
            pitchValue: s("pitch"),
            endPitchValue: s("end pitch"),
            turnsValue: s("turns", "coils", "number of turns"),
            angleValue: s("angle", "offset"),
            threadAngleValue: s("thread angle", "angle"),
            offset1Value: s("offset1", "distance"),
            offset2Value: s("offset2"),
            through: t.thru === !0
        };
    }
    function jw(e) {
        const t = Pe(e) ? e : {}, r = Pe(t.local_plane_snapshot) ? t.local_plane_snapshot : {}, n = $e(r.plane_origin) ?? $e(t.origin), i = $e(r.plane_normal) ?? $e(t.normal) ?? $e(t.z_axis), o = $e(r.plane_x_axis) ?? $e(t.x_axis), s = $e(r.plane_y_axis) ?? $e(t.y_axis);
        return !n || !i || !o || !s ? null : {
            origin: n,
            normal: i,
            xAxis: o,
            yAxis: s
        };
    }
    function hn(e, t, r = !1) {
        if (r || !t) return [
            e[0],
            e[1]
        ];
        if (!t) return [
            e[0],
            e[1]
        ];
        const n = [
            e[0] - t.origin[0],
            e[1] - t.origin[1],
            e[2] - t.origin[2]
        ];
        return [
            n[0] * t.xAxis[0] + n[1] * t.xAxis[1] + n[2] * t.xAxis[2],
            n[0] * t.yAxis[0] + n[1] * t.yAxis[1] + n[2] * t.yAxis[2]
        ];
    }
    function Ii(e, t) {
        if (!Array.isArray(e) || e.length < 9) return t;
        const r = e.slice(0, 9).map((n)=>Number(n));
        return r.some((n)=>!Number.isFinite(n)) ? t : [
            r[0] * t[0] + r[3] * t[1] + r[6] * t[2],
            r[1] * t[0] + r[4] * t[1] + r[7] * t[2],
            r[2] * t[0] + r[5] * t[1] + r[8] * t[2]
        ];
    }
    function Nw(e) {
        if (!Array.isArray(e) || e.length < 9) return 1;
        const t = e.slice(0, 9).map((r)=>Number(r));
        return t.some((r)=>!Number.isFinite(r)) ? 1 : t[0] * t[4] - t[1] * t[3];
    }
    function Vw(e, t) {
        if (!Pe(e) || !Array.isArray(e.curves)) return [];
        const r = e.curves.some((i)=>Pe(i) && be(i.type)?.toUpperCase() === "ARC" && Array.isArray(i.matrix)), n = [];
        for(let i = 0; i < e.curves.length; i += 1){
            const o = e.curves[i];
            if (!Pe(o)) continue;
            const s = be(o.type)?.toUpperCase(), d = `ug:curve:${Ba(o.nx_tag) ?? i}`;
            if (s === "POINT") {
                const l = $e(o.point);
                l && n.push({
                    kind: "point",
                    id: d,
                    point: l,
                    point2d: hn(l, t, r)
                });
                continue;
            }
            if (s === "LINE") {
                if (o.is_reference === !0) continue;
                const l = $e(o.start), c = $e(o.end);
                if (l && c) {
                    const f = hn(l, t, r), u = hn(c, t, r), h = Math.hypot(l[0] - c[0], l[1] - c[1], l[2] - c[2]), y = Math.hypot(f[0] - u[0], f[1] - u[1]);
                    h > jd && y > jd && n.push({
                        kind: "line",
                        id: d,
                        start: l,
                        end: c,
                        start2d: f,
                        end2d: u
                    });
                }
                continue;
            }
            if (s === "CIRCLE") {
                if (o.is_reference === !0) continue;
                const l = $e(o.center), c = ot(o.radius);
                if (l && c !== null && c > 0) {
                    const f = Ii(o.matrix, l);
                    n.push({
                        kind: "circle",
                        id: d,
                        center: f,
                        sourceCenter: l,
                        center2d: hn(f, t, r),
                        radius: c
                    });
                }
                continue;
            }
            if (s === "ARC") {
                if (o.is_reference === !0) continue;
                const l = $e(o.center), c = ot(o.radius), f = ot(o.start_angle_rad), u = ot(o.end_angle_rad);
                if (l && c !== null && c > 0 && f !== null && u !== null) {
                    const h = Ii(o.matrix, l), y = Ii(o.matrix, [
                        Math.cos(f) * c,
                        Math.sin(f) * c,
                        0
                    ]), I = Ii(o.matrix, [
                        Math.cos(u) * c,
                        Math.sin(u) * c,
                        0
                    ]), g = Nw(o.matrix) < 0, x = g ? I : y, v = g ? y : I, b = hn(h, t, r);
                    let m = Math.atan2(x[1], x[0]);
                    m < 0 && (m += Math.PI * 2);
                    let w = u - f;
                    for(; w <= 0;)w += Math.PI * 2;
                    const S = [
                        b[0] + x[0],
                        b[1] + x[1]
                    ], k = [
                        b[0] + v[0],
                        b[1] + v[1]
                    ];
                    n.push({
                        kind: "arc",
                        id: d,
                        center: h,
                        sourceCenter: l,
                        center2d: b,
                        start2d: S,
                        end2d: k,
                        radius: c,
                        startAngle: m,
                        endAngle: m + w,
                        sourceStartAngle: f,
                        sourceEndAngle: u,
                        clockwise: !1
                    });
                }
            }
        }
        return n;
    }
    function Oi(e, t, r) {
        if (e === void 0) return [];
        if (!Array.isArray(e) || e.some((n)=>!Number.isInteger(n))) {
            const n = r === void 0 ? "" : ` for feature ${r}`;
            throw new it(`${t} must be an integer array${n}`);
        }
        return e;
    }
    function Kw(e) {
        switch(e.toUpperCase()){
            case "DATUM_CSYS":
                return {
                    normalizedType: "datum_csys",
                    kind: "datum"
                };
            case "DATUM_ON_PATH":
                return {
                    normalizedType: "datum_on_path",
                    kind: "datum"
                };
            case "SKETCH":
                return {
                    normalizedType: "sketch",
                    kind: "sketch"
                };
            case "EXTRUDE":
                return {
                    normalizedType: "extrude",
                    kind: "solid_feature"
                };
            case "SWP104":
                return {
                    normalizedType: "revolve",
                    kind: "solid_feature"
                };
            case "CYLINDER":
                return {
                    normalizedType: "cylinder",
                    kind: "solid_feature"
                };
            case "CHAMFER":
                return {
                    normalizedType: "chamfer",
                    kind: "solid_feature"
                };
            case "BLEND":
                return {
                    normalizedType: "fillet",
                    kind: "solid_feature"
                };
            case "DRAFT":
                return {
                    normalizedType: "draft",
                    kind: "solid_feature"
                };
            case "SPLIT BODY":
                return {
                    normalizedType: "split",
                    kind: "solid_feature"
                };
            case "UNITE":
                return {
                    normalizedType: "boolean",
                    kind: "solid_feature"
                };
            case "SIMPLE HOLE":
            case "CBORE_HOLE":
            case "HOLE PACKAGE":
            case "HOLE ORCHESTRATION":
            case "LINKED HOLE PACKAGE":
                return {
                    normalizedType: "hole",
                    kind: "solid_feature"
                };
            case "SYMBOLIC_THREAD":
                return {
                    normalizedType: "thread",
                    kind: "solid_feature"
                };
            case "HELIX":
                return {
                    normalizedType: "helix",
                    kind: "solid_feature"
                };
            case "SKIN":
                return {
                    normalizedType: "pipe",
                    kind: "solid_feature"
                };
            case "TRIM_SHT":
                return {
                    normalizedType: "trim",
                    kind: "solid_feature"
                };
            case "TEXT":
                return {
                    normalizedType: "text",
                    kind: "sketch"
                };
            case "LINE":
                return {
                    normalizedType: "line",
                    kind: "sketch"
                };
            default:
                return {
                    normalizedType: "unknown",
                    kind: "unknown"
                };
        }
    }
    function Lw(e, t) {
        if (!Pe(e)) throw new it(`references must contain objects for feature ${t}`);
        const r = Ba(e.owner_feature_id);
        return {
            ownerFeatureId: r !== null && Number.isInteger(r) ? r : null,
            kind: be(e.kind) ?? "",
            role: be(e.role) ?? "",
            resultRole: be(e.result_role) ?? "",
            semantic: be(e.semantic) ?? "",
            confidence: be(e.confidence) ?? "",
            required: e.required === !0,
            localId: be(e.local_id) ?? "",
            source: be(e.source) ?? "",
            topologyName: be(e.topology_name) ?? ""
        };
    }
    function Hw(e) {
        const t = Pe(e.meta) ? e.meta : {};
        return {
            schemaVersion: be(e.schema_version),
            exportTool: be(e.export_tool),
            partName: be(t.part_name),
            sourceFile: be(t.source_file),
            nxVersion: be(t.nx_version),
            unit: be(t.unit)
        };
    }
    function za(e) {
        if (!Pe(e)) throw new it("UG snapshot must be a JSON object");
        if (e.export_tool !== void 0 && e.export_tool !== "NGFeatureList/1.0") throw new it(`unsupported UG export tool: ${String(e.export_tool)}`);
        if (!Array.isArray(e.features)) throw new it("UG snapshot is missing a features array");
        const t = new Set, n = e.features.map((d, l)=>{
            if (!Pe(d)) throw new it(`features[${l}] must be an object`);
            const c = d.id;
            if (!Number.isInteger(c)) throw new it(`features[${l}].id must be an integer`);
            if (t.has(c)) throw new it(`duplicate UG feature id: ${String(c)}`);
            t.add(c);
            const f = be(d.type);
            if (!f) throw new it(`feature ${String(c)} is missing type`);
            const u = Kw(f), h = f.toUpperCase() === "SKETCH" || f.toUpperCase() === "DATUM_CSYS" || f.toUpperCase() === "TEXT" ? jw(d.parameters) : null;
            return {
                id: c,
                nxTag: Ba(d._nx_tag_debug),
                name: be(d.name) ?? `${f}(${String(c)})`,
                sourceType: f,
                ...u,
                isInternal: d.is_internal === !0,
                suppressed: d.suppressed === !0,
                parentIds: Oi(d.parent_ids, "parent_ids", c),
                references: Array.isArray(d.references) ? d.references.map((y)=>Lw(y, c)) : [],
                parameterSummary: zw(d.parameters),
                parameters: Pe(d.parameters) ? structuredClone(d.parameters) : {},
                sketchPlaneFrame: h,
                sketchCurves: f.toUpperCase() === "SKETCH" ? Vw(d.parameters, h) : [],
                seriesIndex: l
            };
        }), i = new Set(n.map((d)=>d.id)), o = [
            ...new Set(n.flatMap((d)=>d.parentIds.filter((l)=>!i.has(l))))
        ].sort((d, l)=>d - l), s = [
            ...new Set(n.filter((d)=>d.normalizedType === "unknown").map((d)=>d.sourceType))
        ].sort(), a = [];
        return s.length > 0 && a.push(`unknown UG feature types: ${s.join(", ")}`), o.length > 0 && a.push(`missing parent feature ids: ${o.join(", ")}`), {
            source: Hw(e),
            featureSeries: n,
            byId: new Map(n.map((d)=>[
                    d.id,
                    d
                ])),
            diagnostics: {
                warnings: a,
                unknownFeatureTypes: s,
                missingParentIds: o
            }
        };
    }
    function $u(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (r) {
            throw new it(`UG snapshot JSON parse failed: ${r instanceof Error ? r.message : String(r)}`);
        }
        return za(t);
    }
    class Du {
        profiles = new Map;
        constructor(t = {}){
            this.setProfiles(t);
        }
        setProfiles(t) {
            this.profiles.clear();
            for (const [r, n] of Object.entries(t))this.profiles.set(r, structuredClone(n));
        }
        setProfile(t, r) {
            this.profiles.set(t, structuredClone(r));
        }
        getProfile(t) {
            const r = this.profiles.get(t);
            return r ? structuredClone(r) : void 0;
        }
        get size() {
            return this.profiles.size;
        }
        resolveProfile(t) {
            const r = this.profiles.get(t.sketchId);
            return r ? structuredClone(r) : new Nt(t.sketchId, `UG sketch profile not found: ${t.sketchId}`);
        }
    }
    const qw = "ug:feature:";
    function ie(e) {
        return `${qw}${e}`;
    }
    function Uw(e, t) {
        const r = e.parentIds.map((o)=>t.get(o) ?? ie(o)), n = Qn(e.parameterSummary.booleanOp), i = n === "SUBTRACT" || n === "UNITE" ? e.parameterSummary.targetFeatureIds.map((o)=>t.get(o) ?? ie(o)) : [];
        return [
            ...new Set([
                ...r,
                ...i
            ])
        ];
    }
    function ja(e) {
        return e.required && e.confidence.toLowerCase() === "exact";
    }
    function Ww(e) {
        const t = e.trim().toLowerCase();
        return t === "" || t === "sketch.support" || t === "support";
    }
    function Nd(e) {
        if (!ja(e) || e.ownerFeatureId === null) return null;
        const t = e.kind.toLowerCase(), r = e.resultRole.trim(), n = e.topologyName.trim() || r || e.role.trim();
        return !t.includes("face") && !r.toLowerCase().includes("face") && !e.topologyName.trim() || Ww(n) ? null : {
            featureId: ie(e.ownerFeatureId),
            role: n
        };
    }
    function Gw(e) {
        return e.references.flatMap((t)=>{
            if (!ja(t) || t.ownerFeatureId === null) return [];
            if (!`${t.kind} ${t.resultRole} ${t.role} ${t.topologyName}`.toLowerCase().includes("edge")) return [];
            const n = t.topologyName.trim() || t.resultRole.trim() || t.role.trim();
            return n ? [
                {
                    featureId: ie(t.ownerFeatureId),
                    role: n
                }
            ] : [];
        });
    }
    function Yw(e) {
        const t = ne(e.parameters), r = Array.isArray(t?.chainsets) ? t.chainsets : [], n = [];
        for (const i of r){
            const o = ne(i)?.edges;
            if (Array.isArray(o)) for (const s of o){
                const a = ne(s), d = a?.owner_feature_id, l = typeof a?.topology_name == "string" ? a.topology_name : "", c = Array.isArray(a?.midpoint) ? a.midpoint : null;
                if (!Number.isInteger(d) || !l) continue;
                const f = c && c.length === 3 && c.every((y)=>typeof y == "number" && Number.isFinite(y)) ? c : void 0, u = Array.isArray(a?.sample_points) ? a.sample_points : [], h = u.length >= 2 && u.every((y)=>Array.isArray(y) && y.length === 3 && y.every((I)=>typeof I == "number" && Number.isFinite(I))) ? u.map((y)=>[
                        ...y
                    ]) : void 0;
                n.push({
                    featureId: ie(d),
                    role: l,
                    ...h ? {
                        samplePoints: h
                    } : f ? {
                        hintCentroid: f
                    } : {}
                });
            }
        }
        return n;
    }
    function Jw(e) {
        const t = e.parameters.input_edges;
        return Array.isArray(t) ? t.flatMap((r, n)=>{
            const i = ne(r), o = Array.isArray(i?.midpoint) ? i.midpoint : null, s = o && o.length === 3 && o.every((l)=>typeof l == "number" && Number.isFinite(l)) ? o : void 0, a = Array.isArray(i?.sample_points) ? i.sample_points : [], d = a.length >= 2 && a.every((l)=>Array.isArray(l) && l.length === 3 && l.every((c)=>typeof c == "number" && Number.isFinite(c))) ? a.map((l)=>[
                    ...l
                ]) : void 0;
            return [
                {
                    featureId: ie(Tu(e) ?? e.parentIds.at(-1) ?? e.id),
                    role: `ug_input_edge_${n}`,
                    ...d ? {
                        samplePoints: d
                    } : s ? {
                        hintCentroid: s
                    } : {}
                }
            ];
        }) : [];
    }
    function Tu(e) {
        const t = e.parameterSummary.targetFeatureIds[0];
        if (t !== void 0) return t;
        const n = ne(e.parameters)?.target_body_feature_id;
        return typeof n == "number" && Number.isInteger(n) ? n : e.parentIds.at(-1);
    }
    function Xw(e, t) {
        return [
            ...e.parentIds
        ].map((n)=>t.get(n)).filter((n)=>n !== void 0 && Lu(n)).at(-1)?.id ?? Tu(e);
    }
    function Zw(e, t) {
        const r = Array.isArray(e.where_used) ? e.where_used : [];
        return r.length === 0 ? !0 : r.some((n)=>{
            const i = ne(n);
            return t.nxTag !== null && i?.nx_tag === t.nxTag || typeof i?.name == "string" && i.name === t.name;
        });
    }
    function Bu(e, t) {
        return (Array.isArray(e.parameters.curves) ? e.parameters.curves : []).flatMap((n, i)=>{
            const o = ne(n);
            return o?.type !== "POINT" || o.is_reference === !0 || !Array.isArray(o.point) || !Zw(o, t) ? [] : [
                `ug:curve:${typeof o.nx_tag == "number" && Number.isFinite(o.nx_tag) ? o.nx_tag : i}`
            ];
        });
    }
    function Qw(e) {
        return e.sketchCurves.some((t)=>t.kind === "point");
    }
    function zu(e, t) {
        const r = new Set(e.parentIds);
        return [
            ...t.values()
        ].filter((i)=>i.seriesIndex < e.seriesIndex).filter((i)=>i.normalizedType === "sketch" && Qw(i)).map((i)=>({
                candidate: i,
                pointIds: Bu(i, e),
                direct: r.has(i.id)
            })).filter((i)=>i.pointIds.length > 0).sort((i, o)=>i.direct !== o.direct ? i.direct ? -1 : 1 : i.pointIds.length !== o.pointIds.length ? o.pointIds.length - i.pointIds.length : o.candidate.seriesIndex - i.candidate.seriesIndex)[0]?.candidate ?? null;
    }
    function e0(e, t, r) {
        const n = zu(e, t);
        return n ? r.get(n.id) ?? ie(n.id) : null;
    }
    function t0(e, t, r) {
        const n = e.parameterSummary.targetFeatureIds[0];
        if (n !== void 0) return r.get(n) ?? ie(n);
        const i = e.parentIds.map((o)=>t.get(o)).find((o)=>o && [
                "extrude",
                "revolve",
                "cylinder",
                "fillet",
                "chamfer",
                "draft",
                "split",
                "boolean",
                "hole"
            ].includes(o.normalizedType));
        return i ? r.get(i.id) ?? ie(i.id) : null;
    }
    function Cs(e, t) {
        const r = e.parentIds.map((i)=>t.get(i)?.name).filter((i)=>typeof i == "string"), n = new Set([
            e.name,
            ...r
        ]);
        return [
            ...t.values()
        ].filter((i)=>i.seriesIndex < e.seriesIndex).filter((i)=>i.normalizedType === "hole" && !i.isInternal).filter((i)=>n.has(i.name)).sort((i, o)=>o.seriesIndex - i.seriesIndex)[0] ?? null;
    }
    function r0(e, t, r) {
        const n = e.parentIds.map((f)=>t.get(f)).find((f)=>f?.normalizedType === "hole"), i = e0(n ?? e, t, r);
        if (!i) return null;
        const o = [
            ...t.values()
        ].find((f)=>(r.get(f.id) ?? ie(f.id)) === i)?.id, s = o === void 0 ? void 0 : t.get(o);
        if (!s) return null;
        const a = s.sketchCurves.find((f)=>f.kind === "point"), d = s.sketchPlaneFrame, l = a?.point ?? d?.origin, c = d?.normal;
        return !l || !c || Math.hypot(...c) <= 1e-9 ? null : {
            origin: [
                ...l
            ],
            normal: [
                ...c
            ],
            sketchId: i
        };
    }
    function ju(e, t, r) {
        const n = r0(e, r, t), i = e.parameterSummary.majorDiameterValue ?? null, o = e.parameterSummary.minorDiameterValue ?? null, s = e.parameterSummary.pitchValue ?? null, a = e.parameterSummary.lengthValue ?? null;
        if (!n || i === null || o === null || s === null || a === null) return null;
        const d = i / 2, l = (i - o) / 2;
        if (!(d > 0) || !(s > 0) || !(a > 0) || !(l > 0)) return null;
        const c = `${ie(e.id)}:derived-helix`, f = Cs(e, r), u = f ? t.get(f.id) ?? ie(f.id) : e.parentIds.at(-1) === void 0 ? null : ie(e.parentIds.at(-1));
        if (!u) return null;
        try {
            const h = fo({
                id: c,
                name: `${e.name} Helix`,
                dependencyIds: [
                    u,
                    n.sketchId
                ],
                axisOrigin: n.origin,
                axisDirection: n.normal,
                radius: d,
                endRadius: d,
                pitch: s,
                endPitch: s,
                height: a,
                handedness: "right",
                startAngle: 0,
                suppressed: e.suppressed
            }), y = na({
                id: ie(e.id),
                name: e.name,
                dependencyIds: [
                    u,
                    c
                ],
                helixFeatureId: c,
                mode: "cut",
                profileKind: "metric_triangle",
                profileSketchId: null,
                majorRadius: d,
                pitch: s,
                depth: l,
                suppressed: e.suppressed
            });
            return {
                helix: h,
                thread: y
            };
        } catch  {
            return null;
        }
    }
    function Pn(e, ...t) {
        const r = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const n of r){
            const i = ne(n), o = typeof i?.desc == "string" ? i.desc.toLowerCase() : "";
            if (t.some((s)=>o.includes(s.toLowerCase())) && typeof i?.value == "number" && Number.isFinite(i.value)) return i.value;
        }
        return null;
    }
    function Vd(e) {
        return e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    }
    function n0(e, ...t) {
        const r = new Set(t.map(Vd)), n = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const i of n){
            const o = ne(i), s = typeof o?.desc == "string" ? Vd(o.desc) : "";
            if (r.has(s) && typeof o?.value == "number" && Number.isFinite(o.value)) return o.value;
        }
        return null;
    }
    function nt(e, t, r = []) {
        const n = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const i of t){
            const o = e.parameters[i], s = Mn(o);
            if (s !== null) return s;
            if (typeof o != "string" || o.trim() === "") continue;
            const a = o.split("=")[0].trim().toLowerCase();
            for (const d of n){
                const l = ne(d), c = typeof l?.expr_name == "string" ? l.expr_name.trim().toLowerCase() : "", f = typeof l?.rhs == "string" ? l.rhs.trim().toLowerCase() : "";
                if (!(c !== a && f !== a) && typeof l?.value == "number" && Number.isFinite(l.value)) return l.value;
            }
        }
        return n0(e, ...r);
    }
    function Mn(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (typeof e != "string") return null;
        const t = e.match(/(?:=|^)(-?\d+(?:\.\d+)?)/);
        return t ? Number(t[1]) : null;
    }
    function i0(e) {
        const t = ne(e.parameters), r = t?.origin, n = t?.normal;
        if (!Array.isArray(r) || !Array.isArray(n) || r.length !== 3 || n.length !== 3 || [
            ...r,
            ...n
        ].some((l)=>typeof l != "number" || !Number.isFinite(l))) return null;
        const i = et(n) ?? [
            0,
            0,
            1
        ], o = Math.abs(i[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], s = et([
            o[1] * i[2] - o[2] * i[1],
            o[2] * i[0] - o[0] * i[2],
            o[0] * i[1] - o[1] * i[0]
        ]) ?? [
            1,
            0,
            0
        ], a = [
            i[1] * s[2] - i[2] * s[1],
            i[2] * s[0] - i[0] * s[2],
            i[0] * s[1] - i[1] * s[0]
        ], d = r;
        return [
            d,
            [
                d[0] + s[0],
                d[1] + s[1],
                d[2] + s[2]
            ],
            [
                d[0] + a[0],
                d[1] + a[1],
                d[2] + a[2]
            ]
        ];
    }
    function o0(e, t, r) {
        const n = e.parentIds.map((l)=>t.get(l)).find((l)=>l?.normalizedType === "helix");
        if (!n) return null;
        const i = Pn(e, "percentage", "path percentage"), o = Pn(e, "arclength", "arc length"), s = n.parameterSummary.heightValue ?? (n.parameterSummary.pitchValue !== null && n.parameterSummary.turnsValue !== null ? n.parameterSummary.pitchValue * n.parameterSummary.turnsValue : null), a = i ?? (o !== null && s && s > 0 ? o / s : 0), d = Math.max(0, Math.min(1, a > 1 ? a / 100 : a));
        return {
            pathFeatureId: r.get(n.id) ?? ie(n.id),
            pathParameter: d
        };
    }
    function Nu(e) {
        const t = e.references.find((i)=>ja(i) && i.role.toLowerCase() === "sketch.support");
        if (t?.ownerFeatureId !== null && t?.ownerFeatureId !== void 0) {
            if (t.kind.toLowerCase().includes("datum")) return {
                mode: "associative",
                reference: {
                    kind: "datum",
                    datumFeatureId: ie(t.ownerFeatureId)
                }
            };
            const i = Nd(t);
            if (i) return {
                mode: "associative",
                reference: {
                    kind: "face",
                    faceSelector: i
                }
            };
        }
        const r = e.references.map(Nd).find((i)=>i !== null);
        if (r) return {
            mode: "associative",
            reference: {
                kind: "face",
                faceSelector: r
            }
        };
        const n = ne(e.parameters)?.placement_faces;
        if (Array.isArray(n)) {
            const i = n.find((s)=>{
                const a = ne(s);
                return Number.isInteger(a?.owner_feature_id) && typeof a?.topology_name == "string" && a.topology_name.trim().length > 0;
            }), o = ne(i);
            if (o && Number.isInteger(o.owner_feature_id)) {
                const s = typeof o.topology_name == "string" ? o.topology_name.trim() : "";
                if (s) {
                    const a = Array.isArray(o.plane_origin) && o.plane_origin.length === 3 && o.plane_origin.every((l)=>typeof l == "number" && Number.isFinite(l)) ? o.plane_origin : void 0, d = Array.isArray(o.normal) && o.normal.length === 3 && o.normal.every((l)=>typeof l == "number" && Number.isFinite(l)) ? o.normal : void 0;
                    return {
                        mode: "associative",
                        reference: {
                            kind: "face",
                            faceSelector: {
                                featureId: ie(o.owner_feature_id),
                                role: s,
                                ...a ? {
                                    hintPlaneOrigin: a
                                } : {},
                                ...d ? {
                                    hintNormal: d
                                } : {}
                            }
                        }
                    };
                }
            }
        }
        return {
            mode: "fixed"
        };
    }
    function s0(e) {
        const t = Nu(e);
        if (t.mode !== "associative") return [];
        const r = t.reference;
        return r.kind === "datum" ? [
            r.datumFeatureId
        ] : r.kind === "face" ? [
            r.faceSelector.featureId
        ] : [];
    }
    function a0(e, t, r = new Map) {
        const n = e.normalizedType === "text" ? xo(e, r) : e.normalizedType === "line" ? va(e, r) : e.sketchPlaneFrame ?? {
            origin: [
                0,
                0,
                0
            ],
            normal: [
                0,
                0,
                1
            ],
            xAxis: [
                1,
                0,
                0
            ],
            yAxis: [
                0,
                1,
                0
            ]
        }, i = Nu(e), o = e.normalizedType === "text" && i.mode === "associative" && i.reference.kind === "face" && !(i.reference.faceSelector.hintPlaneOrigin && i.reference.faceSelector.hintNormal) ? {
            mode: "fixed"
        } : i;
        return mr({
            id: `${ie(e.id)}::placement-plane`,
            support: o,
            orientation: {
                mode: "fixed",
                bodyDirection: [
                    ...n.normal
                ],
                reversed: !1
            },
            normalReversed: !1,
            frameSnapshot: {
                origin: [
                    ...n.origin
                ],
                normal: [
                    ...n.normal
                ],
                uAxis: [
                    ...n.xAxis
                ],
                vAxis: [
                    ...n.yAxis
                ]
            },
            helperVisibility: "auto"
        });
    }
    function Ce(e, t) {
        return e !== null && Number.isFinite(e) && e > 0 ? e : t;
    }
    function d0(e) {
        const t = ne(e.parameters);
        return Array.isArray(t?.guide_ids) ? t.guide_ids.filter((r)=>Number.isInteger(r)) : [];
    }
    function Kd(e, t) {
        const r = ne(e.parameters)?.[t];
        return Array.isArray(r) && r.length === 3 && r.every((n)=>typeof n == "number" && Number.isFinite(n)) ? r : void 0;
    }
    function Fr(e, t) {
        const r = ne(e.parameters)?.[t];
        return typeof r == "number" && Number.isFinite(r) ? r : void 0;
    }
    function Mr(e, t) {
        const r = ne(e.parameters)?.[t];
        return typeof r == "string" ? r : void 0;
    }
    function _r(e, t) {
        const r = ne(e.parameters)?.[t];
        return typeof r == "boolean" ? r : void 0;
    }
    function c0(e) {
        const t = ne(e.parameters);
        if (!t) return;
        const r = (...u)=>{
            const h = {};
            for (const y of u){
                const I = t[y];
                (typeof I == "number" || typeof I == "string" || typeof I == "boolean") && (h[y] = I);
            }
            return h;
        }, n = r(...Object.keys(t).filter((u)=>u.startsWith("hs_start_"))), i = r(...Object.keys(t).filter((u)=>u.startsWith("hs_mid_"))), o = r(...Object.keys(t).filter((u)=>u.startsWith("hs_end_"))), s = {}, a = [
            [
                "holeType",
                "hole_type"
            ],
            [
                "holeForm",
                "hole_form"
            ],
            [
                "threadStandard",
                "thread_standard"
            ],
            [
                "threadSize",
                "thread_size"
            ],
            [
                "screwStandard",
                "screw_standard"
            ],
            [
                "screwSize",
                "screw_size"
            ],
            [
                "fit",
                "fit"
            ]
        ];
        for (const [u, h] of a)typeof t[h] == "string" && (s[u] = t[h]);
        const d = [
            [
                "threadedTapDrillDiameter",
                "threaded_tap_drill_diam"
            ],
            [
                "threadedThreadDepth",
                "threaded_thread_depth"
            ],
            [
                "threadedHoleDepth",
                "threaded_hole_depth"
            ],
            [
                "threadedTipAngleDeg",
                "threaded_tip_angle"
            ]
        ];
        for (const [u, h] of d){
            const y = Mn(t[h]);
            y !== null && (s[u] = y);
        }
        const l = (u)=>{
            const h = t[`${u === "start" ? "threaded_start_chamfer" : "threaded_end_chamfer"}`], y = Mn(t[`${u === "start" ? "threaded_start_chamfer_diam" : "threaded_end_chamfer_diam"}`]), I = nt(e, [
                "threaded_tap_drill_diam"
            ], [
                "Tap Drill Diameter"
            ]), g = y !== null && I !== null ? (y - I) / 2 : null, x = Mn(t[`${u === "start" ? "threaded_start_chamfer_angle" : "threaded_end_chamfer_angle"}`]), v = typeof h == "boolean" ? h : typeof h == "number" ? h !== 0 : typeof h == "string" ? [
                "1",
                "true",
                "yes",
                "on"
            ].includes(h.toLowerCase()) : void 0;
            if (h !== void 0 || g !== null || x !== null) return {
                ...v !== void 0 ? {
                    enabled: v
                } : {},
                ...g !== null ? {
                    offset: g
                } : {},
                ...x !== null ? {
                    angleDeg: x
                } : {}
            };
        }, c = l("start"), f = l("end");
        return c && (s.startChamfer = c), f && (s.endChamfer = f), Object.keys(n).length > 0 && (s.start = n), Object.keys(i).length > 0 && (s.mid = i), Object.keys(o).length > 0 && (s.end = o), Object.keys(s).length > 0 ? s : void 0;
    }
    function l0(e) {
        const t = Mr(e, "orientation_method")?.toLowerCase();
        return t?.includes("forced") || t?.includes("fixed") ? "fixed" : t?.includes("parallel") ? "parallel" : "frenet";
    }
    function u0(e) {
        const t = aa(e, 64).points;
        return {
            loops: [],
            geometry: t.slice(0, -1).map((r, n)=>({
                    kind: "line",
                    id: `helix-segment-${n}`,
                    start: {
                        x: r[0],
                        y: r[1],
                        z: r[2]
                    },
                    end: {
                        x: t[n + 1][0],
                        y: t[n + 1][1],
                        z: t[n + 1][2]
                    }
                })),
            origin: [
                ...e.axisOrigin
            ],
            normal: [
                ...e.axisDirection
            ],
            uAxis: [
                1,
                0,
                0
            ],
            vAxis: [
                0,
                1,
                0
            ]
        };
    }
    function Ld(e) {
        const { startLimitValue: t, endLimitValue: r } = e.parameterSummary;
        return t !== null && r !== null ? Ce(Math.abs(t - r), 1) : 1;
    }
    function et(e) {
        if (!e) return null;
        const t = Math.hypot(e[0], e[1], e[2]);
        return t <= 1e-9 ? null : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function ne(e) {
        return e && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function Hd(e) {
        const t = ne(e.parameters), r = ne(t?.tool), n = Array.isArray(r?.objects) ? ne(r.objects[0]) : null, i = Array.isArray(n?.origin) ? n.origin : null, o = Array.isArray(n?.normal) ? n.normal : null;
        return !i || !o || i.length !== 3 || o.length !== 3 || [
            ...i,
            ...o
        ].some((s)=>typeof s != "number" || !Number.isFinite(s)) ? null : {
            origin: i,
            normal: o
        };
    }
    function xt(e) {
        if (!(!Array.isArray(e) || e.length !== 3 || e.some((t)=>typeof t != "number" || !Number.isFinite(t)))) return e;
    }
    function Vu(e) {
        const t = e?.owner_feature_id, r = typeof e?.topology_name == "string" ? e.topology_name : "";
        if (!Number.isInteger(t) || !r) return null;
        const n = xt(e?.plane_origin) ?? xt(e?.origin) ?? xt(e?.center) ?? xt(e?.centroid) ?? xt(e?.midpoint), i = xt(e?.plane_normal) ?? xt(e?.normal);
        return {
            featureId: ie(t),
            role: r,
            ...n ? {
                hintPlaneOrigin: n
            } : {},
            ...i ? {
                hintNormal: i
            } : {}
        };
    }
    function f0(e) {
        const t = ne(e.parameters);
        return (Array.isArray(t?.edge_sets) ? t.edge_sets : []).flatMap((n)=>{
            const i = ne(n);
            return (Array.isArray(i?.edges) ? i.edges : []).flatMap((s)=>{
                const a = ne(s);
                return (Array.isArray(a?.faces) ? a.faces : []).flatMap((l)=>{
                    const c = Vu(ne(l));
                    return c ? [
                        c
                    ] : [];
                });
            });
        });
    }
    function Ku(e) {
        const t = ne(e.parameters), r = Array.isArray(t?.section_data) ? t.section_data : [];
        for (const n of r){
            const i = ne(n), o = Array.isArray(i?.rules) ? i.rules : [];
            for (const s of o){
                const a = ne(s), d = Array.isArray(a?.faces) ? a.faces : [];
                for (const l of d){
                    const c = Vu(ne(l));
                    if (c) return c;
                }
            }
        }
        return null;
    }
    function qd(e, t, r) {
        const n = Number(t.featureId.replace(/^ug:feature:/, "")), i = Number.isInteger(n) ? r.get(n) : void 0, o = i?.normalizedType === "split" ? i : [
            ...e.parameterSummary.targetFeatureIds,
            ...e.parentIds
        ].map((d)=>r.get(d)).find((d)=>d?.normalizedType === "split");
        if (!i || !o) return;
        const s = t.hintPlaneOrigin, a = t.hintNormal;
        if (!(!s || !a)) return {
            splitFeatureId: ie(o.id),
            sourceFeatureId: t.featureId,
            sourceRole: t.role,
            center: s.map((d)=>Object.is(d, -0) ? 0 : d),
            normal: a.map((d)=>Object.is(d, -0) ? 0 : d)
        };
    }
    function p0(e, t) {
        const { startLimitValue: r, endLimitValue: n, direction: i } = e.parameterSummary;
        if (r === null || n === null || r === n) return;
        const o = et(t ?? null) ?? [
            0,
            0,
            1
        ], s = et(i) ?? o, a = s[0] * o[0] + s[1] * o[1] + s[2] * o[2], d = Math.abs(a) <= 1e-9 ? 1 : a, l = r * d, c = n * d;
        return {
            startOffset: Math.min(l, c),
            endOffset: Math.max(l, c)
        };
    }
    function Qn(e) {
        const t = e?.trim().toUpperCase() ?? "";
        return t === "CUT" || t === "REMOVE" || t === "SUBTRACTIVE" ? "SUBTRACT" : t === "ADD" || t === "CREATE" || t === "ADDITIVE" ? "CREATE" : t === "FUSE" || t === "UNION" ? "UNITE" : t;
    }
    function mn(e) {
        return Qn(e) === "SUBTRACT" ? "cut" : "add";
    }
    function h0(e) {
        const t = Qn(e);
        return t === "SUBTRACT" ? "cut" : t === "INTERSECT" ? "intersect" : "union";
    }
    function Ud(e) {
        return Qn(e) === "UNITE";
    }
    function m0(e) {
        const t = e.parameterSummary.startAngleDegrees ?? 0, r = e.parameterSummary.endAngleDegrees ?? 360;
        return Ce(Math.abs(r - t) * Math.PI / 180, Math.PI * 2);
    }
    function y0(e) {
        const t = (e.parameterSummary.startAngleDegrees ?? 0) * Math.PI / 180, r = (e.parameterSummary.endAngleDegrees ?? 360) * Math.PI / 180;
        return r > t ? {
            startAngle: t,
            endAngle: r
        } : {
            startAngle: r,
            endAngle: t + Math.PI * 2
        };
    }
    function g0(e) {
        const t = e.parameterSummary.axisDirection, r = et(t) ?? [
            0,
            0,
            1
        ];
        return {
            kind: "world",
            origin: [
                0,
                0,
                0
            ],
            direction: r
        };
    }
    function I0(e, t) {
        const r = et(e), n = et(t);
        return !r || !n ? !1 : Math.abs(Math.abs(r[0] * n[0] + r[1] * n[1] + r[2] * n[2]) - 1) <= 1e-6;
    }
    function b0(e) {
        const t = ne(e.parameters);
        return (Array.isArray(t?.daxes) ? t.daxes : []).flatMap((n)=>{
            const i = ne(n), o = xt(i?.origin), s = et(xt(i?.direction) ?? null);
            return o && s ? [
                {
                    origin: o,
                    direction: s
                }
            ] : [];
        });
    }
    function w0(e, t) {
        const r = g0(e), n = ne(e.parameters), i = Array.isArray(n?.guide_ids) ? n.guide_ids.filter((a)=>Number.isInteger(a)) : [], s = [
            ...e.parameterSummary.sectionIds.map((a)=>t.get(a)).find((a)=>a?.normalizedType === "sketch" || a?.normalizedType === "text")?.parentIds ?? [],
            ...e.parentIds,
            ...i
        ];
        for (const a of s){
            const d = t.get(a);
            if (!d || d.normalizedType !== "datum_csys") continue;
            const l = b0(d).find((c)=>I0(c.direction, r.direction));
            if (l) return {
                kind: "world",
                origin: [
                    ...l.origin
                ],
                direction: [
                    ...l.direction
                ]
            };
        }
        return r;
    }
    function x0(e) {
        const t = ne(e.parameters), r = (a)=>Array.isArray(a) && a.length === 3 && a.every((d)=>typeof d == "number" && Number.isFinite(d)) ? a : null, n = r(t?.origin ?? [
            t?.origin_x,
            t?.origin_y,
            t?.origin_z
        ]), i = r(t?.x_axis), o = r(t?.y_axis), s = r(t?.z_axis);
        return n && i && o && s ? {
            origin: n,
            xAxis: i,
            yAxis: o,
            zAxis: s
        } : void 0;
    }
    function Wd(e, t, r) {
        const n = e.parameterSummary.sectionIds[0];
        if (n !== void 0) return t.get(n) ?? ie(n);
        const i = e.parentIds.map((o)=>r?.get(o)).find((o)=>o?.normalizedType === "sketch" || o?.normalizedType === "text");
        return i ? t.get(i.id) ?? ie(i.id) : null;
    }
    function S0(e, t, r, n = new Map) {
        const i = ie(e.id), o = [
            ...new Set([
                ...Uw(e, t),
                ...e.normalizedType === "sketch" || e.normalizedType === "text" || e.normalizedType === "line" ? s0(e) : []
            ])
        ], s = {
            id: i,
            name: e.name,
            dependencyIds: o,
            suppressed: e.suppressed
        };
        if (e.normalizedType === "sketch" || e.normalizedType === "text" || e.normalizedType === "line") return {
            supported: !0,
            feature: ia({
                ...s,
                placementPlane: a0(e, r, n)
            })
        };
        if (e.normalizedType === "datum_on_path") {
            const a = i0(e), d = o0(e, n, t);
            return d ? {
                supported: !0,
                feature: Sn({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...s.dependencyIds,
                            d.pathFeatureId
                        ])
                    ],
                    attachmentMode: "on_path",
                    basePlane: "xy",
                    offset: 0,
                    faceSelector: null,
                    threePoints: a,
                    baseDatumId: null,
                    pathFeatureId: d.pathFeatureId,
                    pathParameter: d.pathParameter
                })
            } : a ? {
                supported: !0,
                feature: Sn({
                    ...s,
                    attachmentMode: "three_point",
                    basePlane: "xy",
                    offset: 0,
                    faceSelector: null,
                    threePoints: a,
                    baseDatumId: null
                })
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no origin/normal frame; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "extrude") {
            const a = Wd(e, t, n);
            if (!a) {
                const f = Ku(e);
                if (f) {
                    const u = f.featureId, h = et(e.parameterSummary.direction) ?? [
                        0,
                        0,
                        1
                    ];
                    return {
                        supported: !0,
                        feature: Vc({
                            ...s,
                            dependencyIds: [
                                ...new Set([
                                    ...s.dependencyIds,
                                    u
                                ])
                            ],
                            baseFeatureId: u,
                            faceSelectors: [
                                f
                            ],
                            direction: h,
                            distance: Ld(e),
                            operation: mn(e.parameterSummary.booleanOp) === "cut" ? "cut" : "add",
                            ...qd(e, f, n) ? {
                                splitBranchHint: qd(e, f, n)
                            } : {}
                        })
                    };
                }
                return {
                    supported: !1,
                    diagnostic: `UG feature ${e.id} EXTRUDE has no section_ids; imported as placeholder`,
                    feature: Le({
                        ...s,
                        dependencyIds: [],
                        suppressed: !0,
                        sourceLabel: `UG:${e.sourceType}`
                    })
                };
            }
            const d = e.parameterSummary.sectionIds[0], l = d !== void 0 ? n.get(d) : e.parentIds.map((f)=>n.get(f)).find((f)=>f?.normalizedType === "sketch" || f?.normalizedType === "text"), c = l?.normalizedType === "text" ? xo(l, n).normal : l?.sketchPlaneFrame?.normal ?? null;
            return {
                supported: !0,
                feature: ta({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...s.dependencyIds,
                            a
                        ])
                    ],
                    sketchRef: {
                        sketchId: a,
                        label: e.name
                    },
                    depth: Ld(e),
                    mode: mn(e.parameterSummary.booleanOp),
                    secondDepth: 0,
                    symmetric: e.parameterSummary.symmetric,
                    ...p0(e, c),
                    fusePrior: Ud(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "revolve") {
            const a = Wd(e, t, n);
            return a ? {
                supported: !0,
                feature: Lc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...s.dependencyIds,
                            a
                        ])
                    ],
                    sketchRef: {
                        sketchId: a,
                        label: e.name
                    },
                    axisRef: w0(e, n),
                    ...y0(e),
                    angle: m0(e),
                    mode: mn(e.parameterSummary.booleanOp),
                    fusePrior: Ud(e.parameterSummary.booleanOp)
                })
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} SWP104 has no section_ids; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "cylinder") {
            const a = Ce(e.parameterSummary.radiusValue ?? (e.parameterSummary.diameterValue !== null ? e.parameterSummary.diameterValue / 2 : null), 1), d = Ce(e.parameterSummary.heightValue, 1), l = et(e.parameterSummary.direction ?? e.parameterSummary.axisDirection) ?? [
                0,
                0,
                1
            ];
            return {
                supported: !0,
                feature: Sc({
                    ...s,
                    origin: [
                        ...e.parameterSummary.origin ?? e.parameterSummary.axisOrigin ?? [
                            0,
                            0,
                            0
                        ]
                    ],
                    direction: l,
                    radius: a,
                    height: d,
                    mode: mn(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "helix") {
            const a = Ce(e.parameterSummary.pitchValue, 1), d = Ce(e.parameterSummary.turnsValue, 1), l = Ce(e.parameterSummary.heightValue, a * d), c = Ce(e.parameterSummary.radiusValue, 1), f = Ce(e.parameterSummary.endRadiusValue ?? Pn(e, "end radius"), c), u = Ce(e.parameterSummary.endPitchValue ?? Pn(e, "end pitch"), a), h = Pn(e, "start angle", "initial angle") ?? 0, y = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs.map((I)=>ne(I)).map((I)=>typeof I?.value == "string" ? I.value.toLowerCase() : "").find((I)=>I === "left" || I === "right") : void 0;
            return {
                supported: !0,
                feature: fo({
                    ...s,
                    axisOrigin: [
                        ...e.parameterSummary.axisOrigin ?? e.parameterSummary.origin ?? [
                            0,
                            0,
                            0
                        ]
                    ],
                    axisDirection: et(e.parameterSummary.axisDirection ?? e.parameterSummary.direction) ?? [
                        0,
                        0,
                        1
                    ],
                    radius: c,
                    endRadius: f,
                    pitch: a,
                    endPitch: u,
                    height: l,
                    handedness: y === "left" ? "left" : "right",
                    startAngle: h
                })
            };
        }
        if (e.normalizedType === "split") {
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = Hd(e);
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable split plane; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const l = t.get(a) ?? ie(a);
            return {
                supported: !0,
                feature: Hc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            l
                        ])
                    ],
                    baseFeatureId: l,
                    toolRef: {
                        kind: "world_plane",
                        origin: d.origin,
                        normal: d.normal
                    },
                    keepSide: "both"
                })
            };
        }
        if (e.normalizedType === "trim") {
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = Hd(e), l = ne(e.parameters), c = l?.trim_direction, f = c === "negative" ? "negative" : c === "both" ? "both" : "positive", u = l?.tolerance, h = typeof u == "number" && Number.isFinite(u) && u >= 0 ? u : 1e-7;
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable sheet/plane tool; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const y = t.get(a) ?? ie(a);
            return {
                supported: !0,
                feature: qc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            y
                        ])
                    ],
                    baseFeatureId: y,
                    toolRef: {
                        kind: "world_plane",
                        origin: d.origin,
                        normal: d.normal
                    },
                    keepSide: f,
                    tolerance: h
                })
            };
        }
        if (e.normalizedType === "draft") {
            const a = e.parentIds.at(-1) === void 0 ? o.at(-1) : t.get(e.parentIds.at(-1)) ?? ie(e.parentIds.at(-1)), d = f0(e), l = Array.isArray(e.parameters.edge_sets) ? e.parameters.edge_sets : [], c = ne(l[0])?.angle_value, f = typeof c == "number" && Number.isFinite(c) ? Math.abs(c) : 5, u = Math.min(Math.max(f * Math.PI / 180, 1e-4), Math.PI / 2 - 1e-4);
            if (!a || d.length === 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable draft faces; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const h = d.find((b)=>b.hintPlaneOrigin && b.hintNormal), y = h?.hintPlaneOrigin && h.hintNormal ? {
                kind: "world_plane",
                origin: [
                    ...h.hintPlaneOrigin
                ],
                normal: [
                    ...h.hintNormal
                ]
            } : {
                kind: "world_plane",
                origin: [
                    0,
                    0,
                    0
                ],
                normal: [
                    0,
                    0,
                    1
                ]
            }, I = Mr(e, "method")?.toLowerCase() ?? "", g = I.includes("variable") ? "variable" : I.includes("neutral") ? "neutral_plane" : "constant", x = Fr(e, "angle_tolerance"), v = Fr(e, "distance_tolerance");
            return {
                supported: !0,
                feature: os({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            a
                        ])
                    ],
                    baseFeatureId: a,
                    draftFaces: d,
                    hinges: [
                        y
                    ],
                    direction: {
                        kind: "world",
                        direction: et(e.parameterSummary.direction) ?? [
                            0,
                            0,
                            1
                        ]
                    },
                    reverseDirection: !1,
                    angle: u,
                    reverseAngle: !1,
                    split: {
                        kind: "none"
                    },
                    variableAngles: [],
                    secondSideAngle: u,
                    reverseSecondSideAngle: !1,
                    options: {
                        propagateDraftSurfaces: !0,
                        preserveInlyingRounds: !0,
                        recreateAttachedRounds: !0,
                        extendIntersectSurfaces: !1
                    },
                    method: g,
                    ...x !== void 0 ? {
                        angleTolerance: x
                    } : {},
                    ...v !== void 0 ? {
                        distanceTolerance: v
                    } : {}
                })
            };
        }
        if (e.normalizedType === "boolean") {
            const a = e.parameterSummary.targetFeatureIds[0], d = e.parameterSummary.toolFeatureIds[0];
            if (a === void 0 || d === void 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no target/tool feature ids; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const l = t.get(a) ?? ie(a), c = t.get(d) ?? ie(d);
            return {
                supported: !0,
                feature: Nc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            l,
                            c
                        ])
                    ],
                    targetFeatureId: l,
                    toolFeatureId: c,
                    toolFeatureIds: e.parameterSummary.toolFeatureIds.map((f)=>t.get(f) ?? ie(f)),
                    op: h0(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "hole") {
            if (e.isInternal && [
                "LINKED HOLE PACKAGE",
                "SIMPLE HOLE",
                "CBORE_HOLE"
            ].includes(e.sourceType.toUpperCase())) return {
                supported: !0,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG internal:${e.sourceType}`
                })
            };
            const a = zu(e, n), d = a ? t.get(a.id) ?? ie(a.id) : null, l = t0(e, n, t);
            if (!d || !l) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no dependent point sketch or solid base; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = e.parameters, f = [
                c.hole_form,
                c.hs_start_form,
                c.hole_type
            ].filter((G)=>typeof G == "string").join(" ").toLowerCase(), u = String(c.hole_type ?? "").toLowerCase(), h = u === "holeseries", y = u === "threadedhole", I = e.sourceType.toUpperCase() === "CBORE_HOLE" || f.includes("counterbore") || f.includes("counterbored"), g = !I && (f.includes("countersink") || f.includes("countersunk")), x = Ce(y ? nt(e, [
                "threaded_tap_drill_diam"
            ], [
                "Tap Drill Diameter"
            ]) : h ? nt(e, [
                "hs_mid_hole_diam",
                "hs_start_hole_diam"
            ], [
                "Start Diameter",
                "Hole Diameter"
            ]) : nt(e, [
                "diameter"
            ], [
                "Hole Diameter",
                "Diameter"
            ]) ?? e.parameterSummary.diameterValue, 1), v = Ce(nt(e, [
                "hs_start_cbore_diam",
                "cbore_diam"
            ], [
                "Start Counter Bore Diameter",
                "Counter Bore Diameter",
                "C-Bore Diameter"
            ]) ?? e.parameterSummary.counterboreDiameterValue, x * 2), b = Ce(nt(e, [
                "hs_start_cbore_depth",
                "cbore_depth"
            ], [
                "Start Counter Bore Depth",
                "Counter Bore Depth",
                "C-Bore Depth"
            ]) ?? e.parameterSummary.counterboreDepthValue, Math.max(x / 2, 1)), m = Ce(nt(e, [
                "hs_start_csk_diam",
                "csk_diam",
                "countersink_diam"
            ], [
                "Start Countersink Diameter",
                "Countersink Diameter"
            ]), x * 2), w = Ce(nt(e, [
                "hs_start_csk_angle",
                "csk_angle",
                "countersink_angle"
            ], [
                "Start Countersink Angle",
                "Countersink Angle"
            ]), 90), S = h || e.parameterSummary.through || String(c.depth_limit ?? "").toLowerCase().includes("through"), k = Ce((h ? nt(e, [
                "hs_end_hole_depth",
                "hs_mid_hole_depth",
                "hs_start_hole_depth",
                "depth"
            ], [
                "End Hole Depth",
                "Hole Depth",
                "Depth"
            ]) : nt(e, y ? [
                "threaded_hole_depth",
                "depth"
            ] : [
                "depth"
            ], y ? [
                "Hole Depth"
            ] : [
                "Hole Depth",
                "Depth"
            ])) ?? e.parameterSummary.heightValue ?? (!S && I ? b : null), 1), M = a ? Bu(a, e) : [], B = c0(e), C = y ? [
                ...n.values()
            ].find((G)=>G.isInternal && G.sourceType.toUpperCase() === "SYMBOLIC_THREAD" && Cs(G, n)?.id === e.id) : void 0, j = nt(e, [
                "threaded_thread_depth"
            ], [
                "Thread Depth"
            ]) ?? C?.parameterSummary.lengthValue, N = String(c.thread_rotation ?? "").toLowerCase(), V = y ? {
                representation: "symbolic",
                ...typeof c.thread_standard == "string" ? {
                    standard: c.thread_standard
                } : {},
                ...typeof c.thread_size == "string" ? {
                    size: c.thread_size
                } : {},
                ...C?.parameterSummary.pitchValue != null ? {
                    pitch: C.parameterSummary.pitchValue
                } : {},
                ...C?.parameterSummary.majorDiameterValue != null ? {
                    majorDiameter: C.parameterSummary.majorDiameterValue
                } : {},
                ...C?.parameterSummary.minorDiameterValue != null ? {
                    minorDiameter: C.parameterSummary.minorDiameterValue
                } : {},
                ...j != null ? {
                    depth: j,
                    lengthOption: "value"
                } : {},
                ...N === "left" || N === "right" ? {
                    rotation: N
                } : {}
            } : void 0, D = B?.startChamfer, K = B?.endChamfer;
            return {
                supported: !0,
                feature: Kc({
                    ...s,
                    ...V ? {
                        holeType: "threaded",
                        thread: V
                    } : {},
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            l,
                            d
                        ])
                    ],
                    baseFeatureId: l,
                    sketchId: d,
                    pointIds: M,
                    diameter: x,
                    depth: k,
                    depthMode: S ? "through" : "blind",
                    mode: I ? "counterbore" : g ? "countersink" : "simple",
                    ...I ? {
                        counterboreDiameter: v,
                        counterboreDepth: b
                    } : {},
                    ...g ? {
                        countersinkDiameter: m,
                        countersinkAngleDeg: w
                    } : {},
                    ...D?.enabled && D.offset !== void 0 && D.angleDeg !== void 0 ? {
                        startChamferEnabled: !0,
                        startChamferOffset: D.offset,
                        startChamferAngleDeg: D.angleDeg
                    } : {},
                    ...K?.enabled && K.offset !== void 0 && K.angleDeg !== void 0 ? {
                        endChamferEnabled: !0,
                        endChamferOffset: K.offset,
                        endChamferAngleDeg: K.angleDeg
                    } : {},
                    ...B ? {
                        seriesParameters: B
                    } : {}
                })
            };
        }
        if (e.normalizedType === "thread") {
            const a = e.isInternal && e.sourceType.toUpperCase() === "SYMBOLIC_THREAD" ? Cs(e, n) : null;
            if (a && String(a.parameters.hole_type).toLowerCase() === "threadedhole") return {
                supported: !0,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG internal:${e.sourceType}`
                })
            };
            const d = ju(e, t, n);
            return d ? {
                supported: !0,
                feature: d.thread
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} is missing thread axis point, major/minor diameter, pitch, or length; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "pipe") {
            const a = e.parameterSummary.sectionIds, d = d0(e), l = a[0] === void 0 ? null : t.get(a[0]) ?? ie(a[0]), c = d[0], f = c === void 0 ? null : t.get(c) ?? ie(c);
            if (!l || !f || a.length === 0 || d.length === 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable section or guide ids; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const u = a.map((I)=>t.get(I) ?? ie(I)), h = c === void 0 ? void 0 : n.get(c), y = h?.normalizedType === "helix" ? {
                kind: "helix",
                featureId: f
            } : h?.normalizedType === "sketch" ? {
                kind: "sketch",
                featureId: f
            } : {
                kind: "curve",
                featureId: f
            };
            return {
                supported: !0,
                feature: ra({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            ...u,
                            f
                        ])
                    ],
                    profileSketchId: l,
                    sectionSketchIds: u,
                    pathReference: y,
                    pathSketchId: f,
                    mode: mn(e.parameterSummary.booleanOp),
                    orientation: l0(e),
                    orientationDirection: Kd(e, "orientation_dir"),
                    orientationOrigin: Kd(e, "orientation_origin"),
                    preserveShape: _r(e, "preserve_shape"),
                    preserveGuideShape: _r(e, "preserve_guide_shape"),
                    scalingMethod: Mr(e, "scaling_method"),
                    sectionInterpolation: Mr(e, "section_interpolation"),
                    tolAngleDeg: Fr(e, "tol_angle_deg"),
                    tolDistance: Fr(e, "tol_distance")
                })
            };
        }
        if (e.normalizedType === "fillet" || e.normalizedType === "chamfer") {
            const a = Xw(e, n), d = a !== void 0 ? t.get(a) ?? ie(a) : o.at(-1), l = Yw(e), c = Jw(e), f = Gw(e), u = l.length > 0 ? l : c.length > 0 ? c : f, h = a === void 0 ? void 0 : n.get(a);
            return !d || u.length === 0 || !h || !Lu(h) ? {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable edge selectors; imported as placeholder`,
                feature: Le({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            } : e.normalizedType === "fillet" ? {
                supported: !0,
                feature: $c({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: u,
                    radius: Ce(e.parameterSummary.radiusValue, 1),
                    allInstances: _r(e, "all_instances"),
                    rollOntoEdge: _r(e, "roll_onto_edge"),
                    rollOverSmoothEdge: _r(e, "roll_over_smooth_edge"),
                    tolerance: Fr(e, "tolerance")
                })
            } : {
                supported: !0,
                feature: Cc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: u,
                    distance: Ce(e.parameterSummary.offset2Value ?? Mn(e.parameters.offset2), 1),
                    angle: e.parameterSummary.angleValue !== null ? e.parameterSummary.angleValue * Math.PI / 180 : void 0,
                    reverseOffsets: _r(e, "reverse_offsets"),
                    offsetMethod: Mr(e, "offset_method"),
                    chamferOption: Mr(e, "chamfer_option"),
                    tolerance: Fr(e, "tolerance")
                })
            };
        }
        if (e.sourceType.toUpperCase() === "DATUM_CSYS") {
            const a = e.sketchPlaneFrame;
            return {
                supported: !0,
                feature: Sn({
                    ...s,
                    attachmentMode: a ? "three_point" : "offset_base",
                    basePlane: "xy",
                    offset: 0,
                    faceSelector: null,
                    threePoints: a ? [
                        [
                            ...a.origin
                        ],
                        a.origin.map((d, l)=>d + a.xAxis[l]),
                        a.origin.map((d, l)=>d + a.yAxis[l])
                    ] : null,
                    baseDatumId: null,
                    coordinateSystem: x0(e)
                })
            };
        }
        return {
            supported: !1,
            diagnostic: `UG feature ${e.id} ${e.sourceType} has no Part Design equivalent; imported as placeholder`,
            feature: Le({
                ...s,
                dependencyIds: [],
                suppressed: !0,
                sourceLabel: `UG:${e.sourceType}`
            })
        };
    }
    function k0(e) {
        return Qn(e.parameterSummary.booleanOp);
    }
    function v0(e) {
        if (!(e.normalizedType === "extrude" || e.normalizedType === "revolve" || e.normalizedType === "cylinder" || e.normalizedType === "pipe") || e.normalizedType === "extrude" && e.parameterSummary.sectionIds.length === 0 && Ku(e)) return !1;
        const r = k0(e);
        return r === "" || r === "CREATE";
    }
    function Lu(e) {
        return qi(e.normalizedType);
    }
    function Gd(e, t) {
        if (e.dependencyIds.includes(t) || (e.type === "extrude" || e.type === "revolve") && e.sketchRef.sketchId === t) return !0;
        if (e.type === "sketch") {
            const r = e.placementPlane?.support;
            if (r?.mode === "associative") {
                const n = r.reference;
                if (n.kind === "datum") return n.datumFeatureId === t;
                if (n.kind === "face") return n.faceSelector.featureId === t;
            }
        }
        return e.type === "datum_plane" && (e.baseDatumId === t || e.pathFeatureId === t);
    }
    function Yd(e, t) {
        const r = structuredClone(e);
        if (r.dependencyIds = r.dependencyIds.map((n)=>t.get(n) ?? n), r.type === "extrude" || r.type === "revolve") {
            const n = t.get(r.sketchRef.sketchId);
            n && (r.sketchRef = {
                ...r.sketchRef,
                sketchId: n
            });
        }
        if (r.type === "sketch") {
            const n = r.placementPlane.support;
            if (n.mode === "associative") {
                const i = n.reference;
                if (i.kind === "datum") {
                    const o = t.get(i.datumFeatureId);
                    o && (r.placementPlane.support = {
                        mode: "associative",
                        reference: {
                            kind: "datum",
                            datumFeatureId: o
                        }
                    });
                } else if (i.kind === "face") {
                    const o = t.get(i.faceSelector.featureId);
                    o && (r.placementPlane.support = {
                        mode: "associative",
                        reference: {
                            kind: "face",
                            faceSelector: {
                                ...i.faceSelector,
                                featureId: o
                            }
                        }
                    });
                }
            }
        }
        return r.type === "datum_plane" && r.baseDatumId && (r.baseDatumId = t.get(r.baseDatumId) ?? r.baseDatumId), r.type === "datum_plane" && r.pathFeatureId && (r.pathFeatureId = t.get(r.pathFeatureId) ?? r.pathFeatureId), (r.type === "draft" || r.type === "face_pull" || r.type === "fillet" || r.type === "chamfer" || r.type === "split" || r.type === "trim") && "baseFeatureId" in r && (r.baseFeatureId = t.get(r.baseFeatureId) ?? r.baseFeatureId), r.type === "face_pull" && (r.faceSelectors = r.faceSelectors.map((n)=>({
                ...n,
                featureId: t.get(n.featureId) ?? n.featureId
            }))), r.type === "draft" && (r.draftFaces = r.draftFaces.map((n)=>({
                ...n,
                featureId: t.get(n.featureId) ?? n.featureId
            }))), r;
    }
    function F0(e, t) {
        const r = `${e.id}::b${t}`;
        if (e.type === "datum_plane") return Sn({
            id: r,
            name: e.name,
            dependencyIds: [
                ...e.dependencyIds
            ],
            suppressed: e.suppressed,
            attachmentMode: e.attachmentMode,
            basePlane: e.basePlane,
            offset: e.offset,
            faceSelector: e.faceSelector,
            threePoints: e.threePoints,
            baseDatumId: e.baseDatumId,
            pathFeatureId: e.pathFeatureId,
            pathParameter: e.pathParameter,
            width: e.width,
            height: e.height,
            visible: e.visible,
            coordinateSystemVisible: e.coordinateSystemVisible
        });
        if (e.type === "sketch") return ia({
            id: r,
            name: e.name,
            dependencyIds: [
                ...e.dependencyIds
            ],
            suppressed: e.suppressed,
            sectionOwnership: e.sectionOwnership,
            ownerFeatureId: e.ownerFeatureId,
            placementPlane: e.placementPlane
        });
        const n = structuredClone(e);
        return n.id = r, n;
    }
    function _0(e, t = {}) {
        return Hu(za(e), t);
    }
    function Hu(e, t) {
        const r = new tl({
            id: t.documentId,
            name: t.partName ?? e.source.partName ?? "UG Part"
        }), n = r.createPart({
            id: t.partId,
            name: t.partName ?? e.source.partName ?? "Part"
        }), i = new Map;
        for (const b of e.featureSeries)i.set(b.id, ie(b.id));
        const o = [
            ...e.diagnostics.warnings
        ], s = [], a = new Map(e.featureSeries.map((b)=>[
                b.id,
                b
            ])), d = e.featureSeries.flatMap((b)=>{
            const m = S0(b, i, t.bodyId ?? "body", a);
            m.supported || (s.push(b.id), m.diagnostic && o.push(m.diagnostic));
            const w = [
                {
                    node: b,
                    feature: m.feature
                }
            ];
            if (m.feature.type === "thread") {
                const S = ju(b, i, a);
                S && w.unshift({
                    node: b,
                    feature: S.helix
                });
            }
            return w;
        }), l = new Map(d.map(({ feature: b })=>[
                b.id,
                b
            ])), c = (b, m, w = new Set)=>b === m || w.has(b) ? b === m : (w.add(b), (l.get(b)?.dependencyIds ?? []).some((k)=>c(k, m, w)));
        for (const { node: b, feature: m } of d){
            if (m.type !== "boolean" || b.parameterSummary.toolFeatureIds.length < 2) continue;
            const w = b.parameterSummary.toolFeatureIds.map((M)=>ie(M)).filter((M)=>{
                const B = l.get(M);
                return B !== void 0 && B.id !== m.id && (d.find((C)=>C.feature.id === M)?.node.seriesIndex ?? 1 / 0) < b.seriesIndex;
            }), k = w.filter((M)=>!w.some((B)=>B !== M && c(B, M))).map((M)=>d.find((B)=>B.feature.id === M)).filter((M)=>M !== void 0).sort((M, B)=>B.node.seriesIndex - M.node.seriesIndex)[0]?.feature.id;
            !k || k === m.targetFeatureId || (m.toolFeatureId = k);
        }
        const f = new Map;
        let u = 0;
        for (const { node: b, feature: m } of d){
            if (!Bn(m) || m.type === "import") continue;
            if (v0(b)) {
                f.set(m.id, u), u += 1;
                continue;
            }
            const S = [
                ..."baseFeatureId" in m ? [
                    m.baseFeatureId
                ] : [],
                ...m.type === "boolean" ? [
                    m.targetFeatureId
                ] : [],
                ...b.parameterSummary.targetFeatureIds.map(ie),
                ...m.dependencyIds
            ].find((k)=>f.has(k));
            f.set(m.id, S !== void 0 ? f.get(S) : Math.max(0, u - 1));
        }
        u === 0 && (u = 1);
        let h = !0;
        for(; h;){
            h = !1;
            for (const { feature: b } of d){
                if (f.has(b.id)) continue;
                const m = new Set;
                for (const w of d){
                    const S = f.get(w.feature.id);
                    S !== void 0 && Gd(w.feature, b.id) && m.add(S);
                }
                m.size === 1 && (f.set(b.id, [
                    ...m
                ][0]), h = !0);
            }
        }
        for (const { feature: b } of d)f.has(b.id) || f.set(b.id, 0);
        for(let b = 0; b < u; b++){
            const m = d.filter(({ feature: k })=>f.get(k.id) === b);
            let w;
            for (const { feature: k } of m)k.type === "split" && w?.type === "split" && k.baseFeatureId === w.baseFeatureId && k.keepSide !== "both" && w.keepSide !== "both" && k.keepSide !== w.keepSide && JSON.stringify(k.toolRef) === JSON.stringify(w.toolRef) && (k.bodyInputMode = "feature"), !k.suppressed && Bn(k) && (w = k);
            const S = ca(m.map(({ feature: k })=>k));
            m.forEach((k, M)=>Object.assign(k.feature, S[M]));
        }
        const y = Array.from({
            length: u
        }, ()=>new Map), I = Array.from({
            length: u
        }, ()=>[]);
        for (const { feature: b } of d){
            const m = f.get(b.id), w = new Set([
                m
            ]);
            for (const S of d){
                const k = f.get(S.feature.id);
                k === void 0 || k === m || Gd(S.feature, b.id) && w.add(k);
            }
            for (const S of w){
                if (S === m || b.type !== "datum_plane" && b.type !== "sketch" && b.type !== "helix") continue;
                const k = F0(b, S);
                y[S].set(b.id, k.id), I[S].push(k);
            }
        }
        const g = t.bodyName ?? e.source.partName ?? "Body", x = [];
        for(let b = 0; b < u; b++){
            const m = new el({
                id: b === 0 ? t.bodyId ?? `ug:body:${b}` : `${t.bodyId ?? "ug:body"}:${b}`,
                name: u === 1 ? g : `${g} ${b + 1}`,
                partId: n.id
            });
            r.addBodyToPart(n.id, m);
            const w = y[b];
            for (const S of I[b])m.addFeature(Yd(S, w));
            for (const { feature: S } of d)f.get(S.id) === b && m.addFeature(Yd(S, w));
            x.push(m);
        }
        const v = Yl(e.featureSeries);
        for (const b of x.flatMap((m)=>m.getFeatures()))b.type === "helix" && (v[b.id] = u0(b));
        for (const b of y)for (const [m, w] of b){
            const S = v[m];
            S && !v[w] && (v[w] = structuredClone(S));
        }
        for (const b of x)for (const m of b.getFeatures()){
            if (m.type !== "revolve") continue;
            const w = v[m.sketchRef.sketchId];
            !w || m.axisRef.kind !== "world" || (v[m.sketchRef.sketchId] = Gl(w, m.axisRef.origin, m.axisRef.direction));
        }
        return {
            document: r,
            partId: n.id,
            bodyId: x[0].id,
            bodyIds: x.map((b)=>b.id),
            featureIdByUgId: i,
            featureSeries: x.flatMap((b)=>[
                    ...b.getFeatures()
                ]),
            unsupportedUgFeatureIds: s,
            diagnostics: o,
            snapshot: e,
            profiles: v,
            profileProvider: new Du(v)
        };
    }
    E0 = function(e, t = {}) {
        return Hu($u(e), t);
    };
    let A0 = 0;
    function O0() {
        return `occ-req-${++A0}`;
    }
    class qu {
        constructor(t){
            this.createWorker = t;
        }
        createWorker;
        worker = null;
        pending = new Map;
        error(t, r, n) {
            return new Oe(t, r, {
                requestId: n.requestId,
                bodyId: n.bodyId,
                featureId: n.featureId,
                revision: n.revision,
                operation: n.operation
            });
        }
        extrudeRectangle(t, r, n, i = {}) {
            const o = this.ensureWorker(), s = i.requestId ?? O0(), a = i.timeoutMs ?? 12e4, d = {
                protocolVersion: Xr,
                requestId: s,
                operation: "extrude",
                bodyId: i.bodyId ?? "default-body",
                featureId: n,
                revision: i.revision ?? 0,
                deadlineMs: Date.now() + a,
                payload: {
                    profile: t,
                    depth: r
                }
            };
            return new Promise((l, c)=>{
                const f = {
                    resolve: l,
                    reject: c,
                    request: d,
                    settled: !1
                }, u = (h, y)=>{
                    f.settled || (f.settled = !0, f.timeoutId && clearTimeout(f.timeoutId), this.pending.delete(s), y && o.postMessage(this.cancelEnvelope(d)), c(h));
                };
                if (i.signal?.aborted) {
                    u(this.error("OCC extrude cancelled", "cancelled", d), !1);
                    return;
                }
                i.signal?.addEventListener("abort", ()=>u(this.error("OCC extrude cancelled", "cancelled", d), !0), {
                    once: !0
                }), f.timeoutId = setTimeout(()=>u(this.error(`OCC extrude deadline exceeded after ${a}ms`, "deadline-exceeded", d), !0), a), this.pending.set(s, f), o.postMessage(d);
            });
        }
        cancelRequest(t) {
            const r = this.pending.get(t);
            return !r || r.settled ? !1 : (r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), this.ensureWorker().postMessage(this.cancelEnvelope(r.request)), r.reject(this.error("OCC request cancelled", "cancelled", r.request)), !0);
        }
        cancelBodyBeforeRevision(t, r) {
            let n = 0;
            for (const [i, o] of [
                ...this.pending
            ])o.request.bodyId === t && o.request.revision < r && this.cancelRequest(i) && n++;
            return n;
        }
        dispose() {
            for (const t of this.pending.values())t.timeoutId && clearTimeout(t.timeoutId), t.reject(new Oe("OCC worker disposed", "cancelled"));
            this.pending.clear(), this.worker?.terminate(), this.worker = null;
        }
        cancelEnvelope(t) {
            return {
                protocolVersion: 1,
                type: "cancel",
                requestId: t.requestId,
                bodyId: t.bodyId,
                featureId: t.featureId,
                revision: t.revision
            };
        }
        ensureWorker() {
            if (this.worker) return this.worker;
            const t = this.createWorker();
            return t.onmessage = (r)=>{
                const n = r.data, i = this.pending.get(n.requestId);
                if (!(!i || i.settled)) {
                    if (n.protocolVersion !== 1 || n.bodyId !== i.request.bodyId || n.featureId !== i.request.featureId || n.revision !== i.request.revision || n.operation !== i.request.operation) {
                        i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), i.reject(this.error("OCC response envelope mismatch", "protocol-invalid", i.request));
                        return;
                    }
                    if (i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), n.ok === !1) {
                        i.reject(this.error(n.error.message, n.error.code, i.request));
                        return;
                    }
                    if (n.result.type !== "mesh") {
                        i.reject(this.error("Unexpected OCC result", "protocol-invalid", i.request));
                        return;
                    }
                    i.resolve(n.result.mesh);
                }
            }, t.onerror = (r)=>{
                for (const n of this.pending.values())n.reject(new Oe(r.message ?? "OCC worker error", "worker"));
                this.pending.clear();
            }, this.worker = t, t;
        }
    }
    class P0 {
        constructor(t, r = 1){
            this.maxConcurrent = r, this.host = new qu(t);
        }
        maxConcurrent;
        host;
        queue = [];
        active = 0;
        jobCounter = 0;
        enqueueExtrude(t) {
            return new Promise((r, n)=>{
                this.jobCounter += 1, this.queue.push({
                    job: t,
                    resolve: r,
                    reject: n,
                    requestId: `occ-pool-${this.jobCounter}`
                }), this.pump();
            });
        }
        cancelQueued(t) {
            let r = 0;
            for(let n = this.queue.length - 1; n >= 0; n--){
                const i = this.queue[n];
                i.job.featureId === t && (i.reject(new Oe(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(n, 1), r++);
            }
            return r;
        }
        cancelBodyBeforeRevision(t, r) {
            let n = 0;
            for(let i = this.queue.length - 1; i >= 0; i--){
                const o = this.queue[i];
                (o.job.bodyId ?? "default-body") === t && (o.job.revision ?? 0) < r && (o.reject(new Oe(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(i, 1), n++);
            }
            return n += this.host.cancelBodyBeforeRevision(t, r), n;
        }
        get queueLength() {
            return this.queue.length;
        }
        dispose() {
            for (const t of this.queue)t.reject(new Oe("OCC pool disposed", "cancelled"));
            this.queue.length = 0, this.host.dispose();
        }
        pump() {
            for(; this.active < this.maxConcurrent && this.queue.length > 0;){
                const t = this.queue.shift();
                this.active++, this.runEntry(t).then(t.resolve, t.reject).finally(()=>{
                    this.active--, this.pump();
                });
            }
        }
        async runEntry(t) {
            return this.host.extrudeRectangle(t.job.profile, t.job.depth, t.job.featureId, {
                ...t.job.options,
                bodyId: t.job.bodyId,
                revision: t.job.revision,
                requestId: t.requestId ?? void 0
            });
        }
    }
    function M0(e, t) {
        const [r, n, i] = e.origin, [o, s, a] = e.uAxis, [d, l, c] = e.vAxis;
        return [
            r + o * t.x + d * t.y,
            n + s * t.x + l * t.y,
            i + a * t.x + c * t.y
        ];
    }
    function R0(e, t, r) {
        const n = [], i = {}, o = [];
        if (!e.profile.ok) for (const s of e.profile.diagnostics ?? [])n.push({
            code: s.code,
            message: s.message
        });
        for(let s = 0; s < e.profile.loops.length; s++){
            const a = e.profile.loops[s];
            for (const d of a.edges){
                const c = (d.samples && d.samples.length >= 2 ? d.samples : [
                    d.start,
                    d.end
                ]).map((f)=>M0(t, f));
                o.push({
                    domainEntityId: d.entityId,
                    polyline: c,
                    closed: !!(a.closed && a.edges.length === 1),
                    kind: d.kind,
                    loopIndex: s,
                    isHole: !!a.isHole
                }), i[d.entityId] = `occ-edge-spec:${d.entityId}`;
            }
        }
        return {
            ok: n.filter((s)=>s.code === "not-found" || s.code === "unsupported").length === 0,
            edges: o,
            provenance: i,
            diagnostics: n,
            excludedConstruction: !0
        };
    }
    function C0(e) {
        return !(e.cancelled || e.requestId !== e.responseRequestId || e.requestRevision !== e.responseRevision || e.requestRevision < e.latestPublishedRevision);
    }
    class Uu {
        cleanup = [];
        own(t) {
            return this.cleanup.push(()=>t?.delete?.()), t;
        }
        defer(t) {
            this.cleanup.push(t);
        }
        dispose() {
            for (const t of this.cleanup.splice(0).reverse())try {
                t();
            } catch  {}
        }
    }
    function Ct(e, t, r) {
        let n;
        for (const i of Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)))try {
            return new e[i](...r);
        } catch (o) {
            n = o;
        }
        throw n instanceof Error ? n : new Error(`Missing OCC binding ${t}`);
    }
    function $s(e, t, r) {
        const n = new e.TopExp_Explorer_2(t, e.TopAbs_ShapeEnum.TopAbs_SOLID, e.TopAbs_ShapeEnum.TopAbs_SHAPE), i = [];
        try {
            for(; n.More();){
                const o = r.own(n.Current());
                i.some((s)=>s.IsSame(o)) || i.push(o), n.Next();
            }
        } finally{
            n.delete();
        }
        return i;
    }
    function $0(e, t) {
        const r = Ct(e, "BRepCheck_Analyzer", [
            t,
            !0
        ]);
        try {
            if ((r.IsValid_2?.() ?? r.IsValid?.()) !== !0) throw new Error("OCC produced an invalid Solid");
        } finally{
            r.delete();
        }
    }
    function D0(e, t, r, n) {
        let i = [
            {
                shape: t,
                sides: []
            }
        ];
        for (const o of r){
            const s = new Uu;
            try {
                const a = Math.hypot(...o.normal);
                if (!Number.isFinite(a) || a < 1e-9) throw new Error("Split plane normal is degenerate");
                const d = o.normal.map((I)=>I / a), l = s.own(Ct(e, "gp_Pnt", o.origin)), c = s.own(Ct(e, "gp_Dir", d)), f = s.own(Ct(e, "gp_Pln", [
                    l,
                    c
                ])), u = s.own(Ct(e, "BRepBuilderAPI_MakeFace", [
                    f,
                    -1e6,
                    1e6,
                    -1e6,
                    1e6
                ])), h = s.own(u.Face()), y = [];
                for (const I of [
                    -1,
                    1
                ]){
                    const g = s.own(Ct(e, "gp_Pnt", o.origin.map((b, m)=>b + d[m] * I))), x = s.own(Ct(e, "BRepPrimAPI_MakeHalfSpace", [
                        h,
                        g
                    ])), v = s.own(x.Solid());
                    for (const b of i){
                        const m = s.own(Ct(e, "BRepAlgoAPI_Common", [
                            b.shape,
                            v
                        ]));
                        if (m.Build(), !m.IsDone()) throw new Error("OCC plane split failed");
                        const w = s.own(m.Shape());
                        for (const S of $s(e, w, n))y.push({
                            shape: S,
                            sides: [
                                ...b.sides,
                                I
                            ]
                        });
                    }
                }
                i = y;
            } finally{
                s.dispose();
            }
        }
        return i;
    }
    function Ds(e, t, r) {
        const n = kI(e, t);
        if (!n) throw new Error("OCC solid classification is unavailable");
        try {
            return n.classify(r, 1e-7) === "inside";
        } finally{
            n.dispose();
        }
    }
    function T0(e, t, r) {
        const { positions: n, indices: i } = Ve(e, t), o = [
            1 / 0,
            1 / 0,
            1 / 0
        ], s = [
            -1 / 0,
            -1 / 0,
            -1 / 0
        ];
        for(let c = 0; c < n.length; c++){
            const f = c % 3;
            o[f] = Math.min(o[f], n[c]), s[f] = Math.max(s[f], n[c]);
        }
        const a = o.map((c, f)=>(c + s[f]) / 2);
        if (Ds(e, t, a)) return a;
        const d = Math.max(1e-5, Math.hypot(...s.map((c, f)=>c - o[f])) * 1e-5), l = i?.length ?? n.length / 3;
        for(let c = 0; c + 2 < l; c += 3){
            const f = [
                0,
                1,
                2
            ].map((b)=>{
                const m = (i?.[c + b] ?? c + b) * 3;
                return [
                    n[m],
                    n[m + 1],
                    n[m + 2]
                ];
            }), [u, h, y] = f, I = h.map((b, m)=>b - u[m]), g = y.map((b, m)=>b - u[m]), x = [
                I[1] * g[2] - I[2] * g[1],
                I[2] * g[0] - I[0] * g[2],
                I[0] * g[1] - I[1] * g[0]
            ], v = Math.hypot(...x);
            if (!(v < 1e-12)) for (const b of [
                -1,
                1
            ]){
                const m = u.map((w, S)=>(w + h[S] + y[S]) / 3 + x[S] / v * d * b);
                if (Ds(e, t, m)) return m;
            }
        }
        throw new Error("Cannot find a verified interior point for Split region");
    }
    function Be(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || !e.every((r)=>typeof r == "number" && Number.isFinite(r))) throw new Error(`${t} must contain three finite numbers`);
        return [
            ...e
        ];
    }
    function $t(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`${t} must be positive`);
        return e;
    }
    const Jd = (e, t)=>JSON.stringify(e) === JSON.stringify(t);
    function B0(e, t, r) {
        if (!Array.isArray(r) || r.some((a)=>!/^region-[1-9]\d*$/.test(a.key) || !Array.isArray(a.sides) || a.sides.some((d)=>d !== 1 && d !== -1)) || new Set(r.map((a)=>a.key)).size !== r.length) throw new Error("Invalid persistent region bindings");
        for (const a of r)Be(a.anchor, "region.anchor");
        const n = new Map, i = [];
        for (const a of r){
            const d = t.map((f, u)=>({
                    ...f,
                    i: u
                })).filter((f)=>Jd(f.sides, a.sides)), l = r.filter((f)=>Jd(f.sides, a.sides)), c = d.length === 1 && l.length === 1 ? d : d.filter((f)=>Ds(e, f.shape, a.anchor));
            if (!c.length) {
                i.push(a.key);
                continue;
            }
            if (c.length !== 1 || n.has(c[0].i)) throw new Error(`Ambiguous Split region ${a.key}; repair the region reference`);
            n.set(c[0].i, a);
        }
        let o = Math.max(0, ...r.map((a)=>Number(a.key.replace("region-", "")) || 0)) + 1;
        const s = t.map((a, d)=>({
                shape: a.shape,
                binding: {
                    key: n.get(d)?.key ?? `region-${o++}`,
                    sides: a.sides,
                    anchor: T0(e, a.shape)
                }
            }));
        return {
            active: s,
            lost: i,
            all: [
                ...r.filter((a)=>i.includes(a.key)),
                ...s.map((a)=>a.binding)
            ]
        };
    }
    function z0(e, t) {
        if (!Array.isArray(t) || t.length === 0) throw new Error("Fillet requires edge references");
        const r = (i, o)=>Math.hypot(...i.map((s, a)=>s - o[a])), n = t.map((i)=>{
            const o = Be(i.start, "edge.start"), s = Be(i.end, "edge.end"), a = Be(i.midpoint, "edge.midpoint"), d = $t(i.length, "edge.length"), l = Math.max(1e-6, d * 1e-6), c = e.filter((f)=>Math.abs(f.length - d) < l && r(f.midpoint, a) < l && (r(f.start, o) < l && r(f.end, s) < l || r(f.start, s) < l && r(f.end, o) < l));
            if (c.length !== 1) throw new Error(`Fillet edge reference ${c.length ? "ambiguous" : "lost"}`);
            return c[0].ordinal;
        });
        if (new Set(n).size !== n.length) throw new Error("Duplicate Fillet edge reference");
        return n;
    }
    async function Wu(e) {
        if (e.type !== "part-model.evaluate" || e.protocolVersion !== 1 || !e.requestId?.trim() || !Number.isSafeInteger(e.revision) || e.revision < 0) throw new Error("Invalid PartModel request");
        let t = Vt(e.model);
        t.expressions && (t = Mf(t, t.expressions));
        const r = e.throughFeatureId === void 0 ? t.features.length - 1 : e.throughFeatureId === null ? -1 : t.features.findIndex((d)=>d.envelope.id === e.throughFeatureId);
        if (e.throughFeatureId != null && r < 0) throw new Error("Unknown history endpoint");
        const n = await _t(), i = new Uu, o = new Map, s = [], a = Object.fromEntries(t.features.map((d)=>[
                d.envelope.id,
                e.revision
            ]));
        try {
            for(let c = 0; c <= r; c++){
                let f = t.features[c];
                const u = f.envelope;
                if (u.suppressed) continue;
                const h = {
                    featureId: u.id,
                    featureRevision: e.revision,
                    featurePayloadVersion: u.featurePayloadVersion
                }, y = Ge(u.references), I = y.filter((g)=>!o.has(re(g)));
                if (I.length) {
                    s.push(xe({
                        ...h,
                        status: "blocked",
                        blockedByFeatureIds: I.map((g)=>g.producerFeatureId),
                        diagnostics: [
                            {
                                severity: "error",
                                code: "input-output-unavailable",
                                message: `Missing input ${I.map((g)=>`${g.producerFeatureId}/${g.outputKey}`).join(", ")}`
                            }
                        ]
                    }));
                    continue;
                }
                try {
                    if (u.featurePayloadVersion !== 1) throw new Error(`Unsupported payload version ${u.featurePayloadVersion}`);
                    const g = u.parameters;
                    if (u.typeId === "sketch.profile") {
                        if (y.length !== 1 || g.supportKind !== "face" && ![
                            "plane",
                            "xy",
                            "yz",
                            "zx"
                        ].includes(y[0].outputKey)) throw new Error("草图缺少有效的支撑引用");
                        const C = Ge(g.baseReference);
                        if (C.length !== 1 || re(C[0]) !== re(y[0])) throw new Error("草图参考不一致");
                        const j = o.get(re(y[0])), N = g.supportKind === "face" ? ci(Ve(n, j), String(g.faceKey)) : j;
                        if (g.supportKind === "face") {
                            const R = g.faceFrame, E = Be(R?.origin, "face origin"), O = Be(R?.normal, "face normal");
                            if ([
                                ...N.origin,
                                ...N.normal
                            ].some((_, A)=>Math.abs(_ - [
                                    ...E,
                                    ...O
                                ][A]) > 1e-5)) throw new Error("草图参考 Face 已变化，请重新选择支撑面");
                        }
                        if (!N?.origin || !N.normal) throw new Error("草图支撑不是平面");
                        const V = N.normal, D = Math.abs(V[0]) < .9 ? [
                            1,
                            0,
                            0
                        ] : [
                            0,
                            1,
                            0
                        ], K = D.reduce((R, E, O)=>R + E * V[O], 0), G = D.map((R, E)=>R - K * V[E]), F = Math.hypot(...G), $ = N.uAxis ?? G.map((R)=>R / F), L = N.vAxis ?? [
                            V[1] * $[2] - V[2] * $[1],
                            V[2] * $[0] - V[0] * $[2],
                            V[0] * $[1] - V[1] * $[0]
                        ], Y = {
                            origin: [
                                ...N.origin
                            ],
                            normal: [
                                ...V
                            ],
                            uAxis: [
                                ...$
                            ],
                            vAxis: [
                                ...L
                            ]
                        }, p = g.profile;
                        if (!p || !Array.isArray(p.geometry) || !Array.isArray(p.loops)) throw new Error("草图数据无效");
                        const P = {
                            ...p,
                            ...Y,
                            frame: Y
                        };
                        o.set(re({
                            producerFeatureId: u.id,
                            outputKey: "profile"
                        }), P), s.push(xe({
                            ...h,
                            status: "success",
                            outputs: {
                                profile: {
                                    outputKey: "profile",
                                    kind: "sketch-profile",
                                    data: P
                                }
                            }
                        }));
                        continue;
                    }
                    if (u.typeId === "datum.csys") {
                        const C = Ge(g.baseReference), j = Ge({
                            base: g.baseReference ?? null,
                            x: g.xReference ?? null
                        });
                        if (C.length > 1 || JSON.stringify(y.map(re).sort()) !== JSON.stringify(j.map(re).sort()) || C[0] && g.mode !== "geometry" && C[0].outputKey !== "frame") throw new Error("坐标系参考不一致");
                        if (g.mode === "fixed" && y.length) throw new Error("固定坐标系不能包含关联引用");
                        let N = C[0] ? o.get(re(C[0])) : void 0;
                        if (g.mode === "geometry") {
                            if (C.length !== 1) throw new Error("请选择 XY 支撑面");
                            if (g.supportKind === "face") {
                                const F = ci(Ve(n, N), String(g.faceKey)), $ = g.faceFrame;
                                if (!$ || !Array.isArray($.origin) || !Array.isArray($.normal) || [
                                    ...F.origin,
                                    ...F.normal
                                ].some((L, Y)=>Math.abs(L - Number([
                                        ...$.origin,
                                        ...$.normal
                                    ][Y])) > 1e-5)) throw new Error("参考 Face 已变化，请重新选择 XY 支撑面");
                                N = F;
                            } else if (![
                                "plane",
                                "xy",
                                "yz",
                                "zx"
                            ].includes(C[0].outputKey)) throw new Error("请选择平面输出");
                        }
                        let V = g.xDirection;
                        const D = Ge(g.xReference);
                        if (D.length) {
                            if (g.mode !== "geometry" || D.length !== 1) throw new Error("X 方向引用无效");
                            const F = o.get(re(D[0]));
                            if (g.xKind === "axis" && [
                                "x",
                                "y",
                                "z"
                            ].includes(String(g.xAxisKey)) && D[0].outputKey === "frame") {
                                if (V = F?.[String(g.xAxisKey) + "Axis"], !V) throw new Error("参考坐标轴失效");
                            } else if (g.xKind === "edge") {
                                const $ = te(n, F).find((P)=>P.ordinal === g.xEdgeOrdinal), L = g.xEdgeEvidence;
                                if (!$ || !L || JSON.stringify([
                                    $.start,
                                    $.end
                                ]) !== JSON.stringify([
                                    L.start,
                                    L.end
                                ])) throw new Error("参考直边已变化，请重选 X 方向");
                                const Y = $.end.map((P, R)=>P - $.start[R]), p = Math.hypot(...Y);
                                if (p < 1e-9 || Math.abs($.length - p) > Math.max(1e-7, p * 1e-6)) throw new Error("X 方向必须选择直边");
                                V = Y;
                            } else throw new Error("X 方向引用类型无效");
                        }
                        const K = Ri({
                            ...g,
                            ...V ? {
                                xDirection: V
                            } : {}
                        }, N), G = {
                            frame: {
                                outputKey: "frame",
                                kind: "coordinate-system",
                                data: {
                                    ...K
                                }
                            }
                        };
                        for (const F of [
                            "xy",
                            "yz",
                            "zx"
                        ])G[F] = {
                            outputKey: F,
                            kind: "plane",
                            data: Ci(K, F)
                        };
                        for (const [F, $] of Object.entries(G))o.set(re({
                            producerFeatureId: u.id,
                            outputKey: F
                        }), $.data);
                        s.push(xe({
                            ...h,
                            status: "success",
                            outputs: G
                        }));
                        continue;
                    }
                    if (u.typeId === "datum.plane") {
                        const C = Ge(g.baseReference);
                        let j;
                        if (g.baseKind === "face") {
                            if (C.length !== 1) throw new Error("平面缺少参考实体");
                            j = ci(Ve(n, o.get(re(C[0]))), String(g.faceKey));
                            const G = g.faceFrame;
                            if (!G || [
                                ...j.origin,
                                ...j.normal
                            ].some((F, $)=>Math.abs(F - [
                                    ...G.origin,
                                    ...G.normal
                                ][$]) > 1e-5)) throw new Error("参考面已变化，请重新选择平面参考");
                        } else if (g.baseKind === "datum") {
                            if (C.length !== 1 || ![
                                "plane",
                                "xy",
                                "yz",
                                "zx"
                            ].includes(C[0].outputKey)) throw new Error("请选择已有基准面");
                            j = o.get(re(C[0]));
                        } else j = {
                            origin: Be(g.origin, "origin"),
                            normal: Be(g.normal, "normal")
                        };
                        const N = Number(g.offset), V = Math.hypot(...j.normal);
                        if (!Number.isFinite(N) || !(V > 1e-10)) throw new Error("平面偏移或法向无效");
                        const D = j.normal.map((G)=>G / V);
                        let K = {
                            origin: j.origin.map((G, F)=>G + D[F] * N),
                            normal: D,
                            ...j.uAxis && j.vAxis ? {
                                uAxis: [
                                    ...j.uAxis
                                ],
                                vAxis: [
                                    ...j.vAxis
                                ]
                            } : {}
                        };
                        if (g.planeMode === "rotated") {
                            const G = Ge(g.xReference);
                            if (G.length !== 1) throw new Error("请选择旋转轴");
                            const F = o.get(re(G[0]));
                            let $, L;
                            if (g.xKind === "axis" && G[0].outputKey === "frame" && [
                                "x",
                                "y",
                                "z"
                            ].includes(String(g.xAxisKey))) {
                                const Y = F;
                                $ = Be(Y?.origin, "旋转轴原点"), L = Be(Y?.[String(g.xAxisKey) + "Axis"], "旋转轴方向");
                            } else if (g.xKind === "edge") {
                                const Y = te(n, F).find((R)=>R.ordinal === g.xEdgeOrdinal), p = g.xEdgeEvidence;
                                if (!Y || !p || JSON.stringify([
                                    Y.start,
                                    Y.end
                                ]) !== JSON.stringify([
                                    p.start,
                                    p.end
                                ])) throw new Error("旋转参考边已变化，请重新选择");
                                L = Y.end.map((R, E)=>R - Y.start[E]), $ = Y.start;
                                const P = Math.hypot(...L);
                                if (P < 1e-9 || Math.abs(Y.length - P) > Math.max(1e-7, P * 1e-6)) throw new Error("请选择直边作为旋转轴");
                            } else throw new Error("旋转轴参考类型无效");
                            K = nc(K, $, L, Number(g.angle));
                        }
                        (g.localOriginUV !== void 0 || g.inPlaneAngle !== void 0) && (K = bf(K, g.localOriginUV, g.inPlaneAngle)), g.reverseNormal === !0 && (K = Ci(Ri({
                            mode: "geometry",
                            reverseZ: !0
                        }, K), "xy")), o.set(re({
                            producerFeatureId: u.id,
                            outputKey: "plane"
                        }), K), s.push(xe({
                            ...h,
                            status: "success",
                            outputs: {
                                plane: {
                                    outputKey: "plane",
                                    kind: "plane",
                                    data: K
                                }
                            }
                        }));
                        continue;
                    }
                    const x = (C)=>{
                        const j = u.typeId === "brep.split" ? Ge(u.references.inputs) : y;
                        if (j.length !== C) throw new Error(`Expected ${C} distinct Solid inputs`);
                        return j.map((N)=>o.get(re(N)));
                    }, v = [], b = [], m = (C)=>{
                        if (!C.length) throw new Error("Operation produced no Solid");
                        const j = B0(n, C, g.regions ?? []), N = [
                            ...f.bodyOutputs
                        ], V = [
                            ...t.bodies
                        ];
                        for (const D of j.active){
                            const K = D.binding.key;
                            if (!N.some((G)=>G.outputKey === K)) {
                                const G = `${u.id}:${K}`;
                                N.push({
                                    outputKey: K,
                                    bodyId: G
                                }), V.push({
                                    id: G,
                                    name: `${u.name} · 实体 ${K.slice(7)}`,
                                    kind: "solid",
                                    origin: {
                                        producerFeatureId: u.id,
                                        outputKey: K
                                    }
                                });
                            }
                            v.push({
                                key: K,
                                shape: D.shape
                            });
                        }
                        j.lost.length && b.push({
                            severity: "warning",
                            code: "split-region-lost",
                            message: `Regions disappeared: ${j.lost.join(", ")}`
                        }), f = {
                            ...f,
                            bodyOutputs: N,
                            envelope: Un({
                                ...u,
                                parameters: {
                                    ...g,
                                    regions: j.all
                                }
                            })
                        }, t = Vt({
                            ...t,
                            bodies: V,
                            features: t.features.map((D, K)=>K === c ? f : D)
                        });
                    };
                    let w;
                    switch(u.typeId){
                        case "brep.source":
                            {
                                x(0);
                                const C = String(g.sourceBodyId);
                                if (e.sourceErrors?.[C]) throw new Error(e.sourceErrors[C]);
                                const j = e.sources[C];
                                if (!(j instanceof Uint8Array)) throw new Error(`Source Body ${C} is unavailable`);
                                w = i.own(Zn(n, j));
                                const N = $s(n, w, i);
                                (N.length > 1 || g.regions) && (m(N.map((V)=>({
                                        shape: V,
                                        sides: []
                                    }))), w = void 0);
                                break;
                            }
                        case "brep.pad":
                            {
                                const C = Ge(g.profileReference);
                                if (y.length !== 1 || C.length !== 1 || y[0].outputKey !== "profile" || re(y[0]) !== re(C[0])) throw new Error("请选择明确的草图轮廓引用");
                                const j = o.get(re(y[0]));
                                if (!j?.loops?.length) throw new Error("凸台需要闭合草图轮廓");
                                const N = at(n, j, $t(g.depth, "凸台高度"), {
                                    inward: g.reversed === !0
                                });
                                i.defer(()=>Xe(N)), w = i.own(N.shape);
                                break;
                            }
                        case "brep.box":
                            {
                                x(0);
                                const C = ks(n, {
                                    type: "box",
                                    origin: Be(g.origin, "origin"),
                                    length: $t(g.length, "length"),
                                    width: $t(g.width, "width"),
                                    height: $t(g.height, "height")
                                });
                                i.defer(C.dispose), w = i.own(C.shape);
                                break;
                            }
                        case "brep.split":
                            {
                                const [C] = x(1), j = g.splitTool;
                                let N = g.sourceTool ? [
                                    e.resolvedPlanes?.[u.id]
                                ] : g.planes;
                                if (j) {
                                    const F = Ge(u.references.tool), $ = Ge(j.reference);
                                    if (F.length !== 1 || $.length !== 1 || re(F[0]) !== re($[0])) throw new Error("切割工具引用不一致，请重新选择");
                                    const L = F[0], Y = o.get(re(L));
                                    if (j.kind === "datum" && L.outputKey === "plane") N = [
                                        Y
                                    ];
                                    else if (j.kind === "face" && L.outputKey !== "plane") {
                                        const p = ci(Ve(n, Y), String(j.faceKey)), P = j.faceFrame, R = Be(P?.origin, "face origin"), E = Be(P?.normal, "face normal");
                                        if ([
                                            ...p.origin,
                                            ...p.normal
                                        ].some((O, _)=>Math.abs(O - [
                                                ...R,
                                                ...E
                                            ][_]) > 1e-5)) throw new Error("切割参考面已变化，请重新选择");
                                        N = [
                                            p
                                        ];
                                    } else throw new Error("切割工具必须是基准面或平面面");
                                }
                                if (!Array.isArray(N) || !N.length || N.some((F)=>!F)) throw new Error("Split plane reference is unavailable");
                                const V = g.offset === void 0 ? 0 : Number(g.offset);
                                if (!Number.isFinite(V)) throw new Error("切割偏移必须是有限数值");
                                const D = N.map((F)=>{
                                    const $ = Be(F.origin, "plane.origin"), L = Be(F.normal, "plane.normal"), Y = Math.hypot(...L);
                                    if (Y < 1e-9) throw new Error("切割平面法向不能为零");
                                    return {
                                        origin: $.map((p, P)=>p + L[P] / Y * V),
                                        normal: L
                                    };
                                }), K = g.keepSide ?? "both";
                                if (![
                                    "both",
                                    "positive",
                                    "negative"
                                ].includes(String(K))) throw new Error("请选择有效的保留侧");
                                const G = D0(n, C, D, i);
                                m(G.filter((F)=>K === "both" || F.sides.every(($)=>$ === (K === "positive" ? 1 : -1))));
                                break;
                            }
                        case "brep.fillet":
                            {
                                const [C] = x(1), j = z0(te(n, C), g.edges);
                                w = i.own(ko(n, C, j, $t(g.radius, "radius")));
                                break;
                            }
                        case "brep.hole":
                            {
                                const [C] = x(1), j = Be(g.direction, "direction");
                                if (Math.hypot(...j) < 1e-9) throw new Error("Hole direction is degenerate");
                                const N = ks(n, {
                                    type: "cylinder",
                                    origin: Be(g.origin, "origin"),
                                    direction: j,
                                    radius: $t(g.radius, "radius"),
                                    height: $t(g.depth, "depth")
                                });
                                i.defer(N.dispose), i.own(N.shape);
                                const V = Lt(n, C, N.shape, "cut");
                                i.defer(()=>V.delete?.()), w = V.Shape();
                                break;
                            }
                        case "brep.merge":
                            {
                                if (y.length < 2) throw new Error("Merge requires at least two distinct inputs");
                                const C = x(y.length);
                                w = C[0];
                                for (const j of C.slice(1)){
                                    const N = Lt(n, w, j, "union");
                                    i.defer(()=>N.delete?.()), w = N.Shape();
                                }
                                break;
                            }
                        default:
                            s.push(xe({
                                ...h,
                                status: "unsupported",
                                diagnostics: [
                                    {
                                        severity: "error",
                                        code: "unsupported-model-feature",
                                        message: `Unsupported feature ${u.typeId}`
                                    }
                                ]
                            }));
                            continue;
                    }
                    if (w) {
                        const C = $s(n, w, i);
                        if (C.length !== 1) throw new Error(`${u.name} produced ${C.length} Solids; this operation requires exactly one`);
                        if (v.push({
                            key: "solid",
                            shape: C[0]
                        }), u.typeId === "brep.source" && !f.bodyOutputs.some((j)=>j.outputKey === "solid")) {
                            const j = `${u.id}:solid`;
                            t = Vt({
                                ...t,
                                features: t.features.map((N, V)=>V === c ? {
                                        ...N,
                                        bodyOutputs: [
                                            ...N.bodyOutputs,
                                            {
                                                bodyId: j,
                                                outputKey: "solid"
                                            }
                                        ]
                                    } : N),
                                bodies: [
                                    ...t.bodies,
                                    {
                                        id: j,
                                        name: u.name,
                                        kind: "solid",
                                        origin: {
                                            producerFeatureId: u.id,
                                            outputKey: "solid"
                                        }
                                    }
                                ]
                            });
                        }
                    }
                    const S = {};
                    for (const C of v)$0(n, C.shape), S[C.key] = {
                        outputKey: C.key,
                        kind: "solid",
                        data: {}
                    };
                    const k = xe({
                        ...h,
                        status: "success",
                        outputs: S,
                        diagnostics: b
                    }), B = Ja({
                        model: t,
                        evaluationId: e.requestId,
                        featureRevisions: a,
                        results: [
                            ...s,
                            k
                        ],
                        throughFeatureId: u.id
                    }).features.find((C)=>C.featureId === u.id);
                    if (B.status !== "success") throw new Error(B.diagnostics.map((C)=>C.message).join("; "));
                    s.push(k);
                    for (const C of v)o.set(re({
                        producerFeatureId: u.id,
                        outputKey: C.key
                    }), C.shape);
                } catch (g) {
                    s.push(xe({
                        ...h,
                        status: "failed",
                        diagnostics: [
                            {
                                severity: "error",
                                code: "model-kernel-failed",
                                message: g instanceof Error ? g.message : String(g)
                            }
                        ]
                    }));
                }
            }
            const d = Ja({
                model: t,
                evaluationId: e.requestId,
                featureRevisions: a,
                results: s,
                throughFeatureId: e.throughFeatureId
            }), l = d.currentBodies.map((c)=>{
                const f = o.get(re(c.output)), u = te(n, f);
                return {
                    bodyId: c.bodyId,
                    output: c.output,
                    mesh: Ve(n, f),
                    edgeSamples: u,
                    edges: Br(c.output.producerFeatureId, [], u)
                };
            });
            return {
                requestId: e.requestId,
                revision: e.revision,
                model: t,
                projection: d,
                results: s,
                bodies: l
            };
        } finally{
            i.dispose();
        }
    }
    async function j0(e) {
        try {
            return {
                type: "part-model.result",
                requestId: e.requestId,
                revision: e.revision,
                ok: !0,
                evaluation: await Wu(e)
            };
        } catch (t) {
            return {
                type: "part-model.result",
                requestId: e.requestId,
                revision: e.revision,
                ok: !1,
                error: t instanceof Error ? t.message : String(t)
            };
        }
    }
    N0 = class {
        constructor(t = null){
            this.workerFactory = t;
        }
        workerFactory;
        worker = null;
        cancelPending = null;
        disposed = !1;
        evaluate(t, r) {
            return this.disposed ? Promise.reject(new Error("PartModel client disposed")) : (this.cancel(), r?.aborted ? Promise.reject(new Error("PartModel evaluation cancelled")) : new Promise((n, i)=>{
                let o = !1;
                const s = (c, f)=>{
                    if (!o) {
                        if (o = !0, clearTimeout(l), r?.removeEventListener("abort", d), this.cancelPending = null, f) {
                            i(f);
                            return;
                        }
                        if (!c || c.type !== "part-model.result" || c.requestId !== t.requestId || c.revision !== t.revision) {
                            i(new Error("PartModel response correlation mismatch"));
                            return;
                        }
                        if (c.ok === !1) {
                            i(new Error(c.error));
                            return;
                        }
                        if (c.evaluation.requestId !== t.requestId || c.evaluation.revision !== t.revision || c.evaluation.model.partId !== t.model.partId) {
                            i(new Error("PartModel evaluation correlation mismatch"));
                            return;
                        }
                        n(c.evaluation);
                    }
                }, a = (c)=>{
                    this.worker?.terminate(), this.worker = null, s(void 0, new Error(c));
                }, d = ()=>a("PartModel evaluation cancelled"), l = setTimeout(()=>a("PartModel evaluation timed out"), 12e4);
                if (this.cancelPending = d, r?.addEventListener("abort", d, {
                    once: !0
                }), !this.workerFactory) {
                    j0(t).then((c)=>s(c), (c)=>s(void 0, c));
                    return;
                }
                try {
                    this.worker ??= this.workerFactory(), this.worker.onmessage = (c)=>s(c.data), this.worker.onerror = (c)=>a(c.message || "PartModel worker failed"), this.worker.onmessageerror = ()=>a("PartModel worker message could not be decoded"), this.worker.postMessage(t);
                } catch (c) {
                    a(c instanceof Error ? c.message : String(c));
                }
            }));
        }
        cancel() {
            this.cancelPending?.();
        }
        dispose() {
            this.disposed = !0, this.cancel(), this.worker?.terminate(), this.worker = null;
        }
    };
    Ix = Object.freeze(Object.defineProperty({
        __proto__: null,
        DEFAULT_REPLAY_RUNTIME_IDENTITY: Jn,
        FeatureBuildHandlerRegistry: cl,
        FeatureBuildHandlerRegistryError: Si,
        HelicalHandedness: ku,
        HelicalProfileMode: vu,
        HelicalSweepFeat: Aw,
        HelixGeometry: Ps,
        MESH_TRANSFER_BYTE_THRESHOLD: ol,
        OCC_BODY_REPLAY_PROTOCOL_VERSION: qe,
        OCC_PROTOCOL_SCHEMA_VERSION: Dr,
        OCC_REPLAY_REUSE_ENABLED: wl,
        OCC_WORKER_PROTOCOL_VERSION: Xr,
        OccBodyReplayExecutor: wu,
        OccBodyWorkerClient: Os,
        OccBridgeError: Oe,
        OccHelicalSweepBackend: Eu,
        OccPartModelClient: N0,
        OccReplayCheckpointStore: El,
        OccRequestCoordinator: vy,
        OccWorkerGeneration: Fy,
        OccWorkerHost: qu,
        OccWorkerPool: P0,
        REPLAY_CACHE_ARTIFACT_KINDS: ml,
        REPLAY_CACHE_OUTCOMES: hl,
        REPLAY_CANCELLATION_REASONS: Il,
        REPLAY_DIAGNOSTICS_SCHEMA_VERSION: ga,
        REPLAY_FEATURE_STATUSES: gl,
        REPLAY_PERFORMANCE_EVENT_KINDS: zg,
        REPLAY_REQUEST_OUTCOMES: yl,
        ReplayDerivedCacheScheduler: Qg,
        UgFeatureSnapshotParseError: it,
        UgSketchProfileProvider: Du,
        VersionedOccWorkerFacade: ky,
        acceptOccWorkerResult: C0,
        adaptDomainProfileToWireSpecs: R0,
        assertTopologyMatchesMesh: le,
        bindHintsToTessellation: Pa,
        booleanShapesWithOcc: Lt,
        booleanSolidsHeadless: Bw,
        booleanSolidsHeadlessSpike: Cu,
        buildExtrudeFaceHints: eo,
        buildExtrudeSemanticTopology: su,
        buildFaceFromProfile: Et,
        buildOccReplayDiagnosticsSnapshot: _l,
        buildPrismShapeFromFace: ka,
        buildPrismShapeFromProfile: at,
        buildRevolveFaceHints: to,
        buildRevolveSemanticTopology: _i,
        buildSketchFaceFromProfile: Tl,
        canonicalizeReplayJson: Yi,
        chamferProfileWithOcc: rb,
        chamferShapeWithOcc: Xi,
        collectMeshTransfers: tt,
        collectTransferBuffers: xy,
        createFeatureDocumentFromUgSnapshot: _0,
        createFeatureDocumentFromUgSnapshotJson: E0,
        createOccReplayCheckpoint: gs,
        createProtocolHello: al,
        createReplayCancellationEvent: bn,
        createReplayPerformanceEvent: Je,
        createReplayStaleEvent: Fl,
        detectSolidImportFormat: Fo,
        disposePrismBuild: Xe,
        ensureTipEdgesWithOccOrdinals: Br,
        evaluateOccPartModel: Wu,
        executeOccBodyReplay: xu,
        extractSemanticTopology: gw,
        extrudeProfileHeadless: Ou,
        extrudeProfileHeadlessSpike: Gr,
        extrudeProfileWithOcc: Ra,
        extrudeRectangleHeadless: Rw,
        extrudeRectangleHeadlessSpike: Pw,
        extrudeRectangleWithOcc: kw,
        facePullShapeWithOcc: eu,
        filletProfileWithOcc: eb,
        filletShapeWithOcc: ko,
        findEarliestInvalidReplayBoundary: Ol,
        fingerprintCanonicalJson: lr,
        fingerprintFeatureDependencies: xa,
        fingerprintFeatureInput: wa,
        fingerprintReplayPlan: Wg,
        forgetOccReplayBody: nu,
        getLastOccReplayDiagnostics: xl,
        getOccBodyWorkerClient: xw,
        getOuterLoop: Jr,
        grooveProfileHeadless: vw,
        grooveProfileWithOcc: Su,
        handleOccRequest: Da,
        helixWireWithOcc: vo,
        importBRepSolidFromFileWithOcc: Gb,
        importSolidFromFile: Yb,
        importSolidFromFileWithOcc: mu,
        importedShapeToBRepSolidWithOcc: ro,
        inheritSemanticTopologyAfterBoolean: Ie,
        isOccBodyReplayCancelRequest: pl,
        isOccBodyReplayRequest: Bg,
        isOccBodyReplayResetRequest: Tg,
        isProtocolVersion: wy,
        isReplayPerformanceEvent: Hg,
        isResponseCurrent: Sy,
        listPrismEdgeSamples: JI,
        listPrismEdgeSamplesFromShape: te,
        loadOccModule: _t,
        matchEdgeHintsToOccOrdinals: Zl,
        mergeSemanticTopology: zb,
        meshFromPayload: Iy,
        meshTransferByteSize: sl,
        negotiateProtocol: dl,
        nextBodyReplayRequestId: ww,
        parseReplayPerformanceEvent: ba,
        parseUgFeatureSnapshot: za,
        parseUgFeatureSnapshotJson: $u,
        pocketProfileHeadless: $w,
        pocketProfileWithOcc: Cw,
        pocketProfilesHeadless: Mu,
        pocketProfilesHeadlessSpike: Rs,
        pocketProfilesWithOcc: Ta,
        pocketRectangleHeadless: Dw,
        profilePointToWorld: pt,
        publishOccReplayDiagnostics: Sl,
        readBrepShapeWithOcc: Zn,
        readStepShapeWithOcc: Ao,
        registerBuiltinFeatureHandlers: gg,
        resetOccBodyWorkerClientForTests: Sw,
        resetOccModuleCache: aI,
        resetOccReplayDiagnosticsForTests: kl,
        resolveUgLineFrame: va,
        resolveUgTextFrame: xo,
        resolveUgTextLocalOrigin: Vl,
        resolveUgTextRotation: Ul,
        revolveProfileHeadless: Ru,
        revolveProfileHeadlessSpike: $a,
        revolveProfileWithOcc: _a,
        revolveRectangleHeadless: Tw,
        revolveRectangleHeadlessSpike: Mw,
        revolveRectangleWithOcc: Jl,
        sampleResultFaces: Xn,
        serializeReplayPerformanceEvent: qg,
        shouldUseTransferList: gy,
        solidImportVirtualPath: _o,
        stableReplayJsonString: bl,
        takeUnifiedSameDomainShapeWithOcc: Ur,
        tessellateShape: Ve,
        threadShapeWithOcc: tu,
        topologyFromTessellation: Ai,
        transformProfileAt: Ms,
        ugLineNodeToProfile: ql,
        ugSketchNodeToProfile: Wl,
        ugSketchProfilesByFeatureId: Yl,
        unifySameDomainShapeWithOcc: Ea,
        useHeadlessSpikeKernel: Yr,
        validateHelicalSweepParams: Fu,
        validateOccBodyReplayRequest: wo,
        validateOccBodyReplayResponseCorrelation: fl,
        validateOccRequest: pa,
        validateProtocolEnvelope: by
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Ul as $, L0 as A, K0 as B, Ri as C, Jn as D, Ci as E, nc as F, bf as G, Vt as H, Ja as I, Mf as J, X0 as K, Ic as L, qs as M, U0 as N, N0 as O, Oc as P, W0 as Q, Qg as R, q0 as S, J0 as T, G0 as U, Y0 as V, tl as W, Q0 as X, ql as Y, xo as Z, Wl as _, ix as a, Vl as a0, E0 as a1, Le as a2, Z0 as a3, ex as a4, rx as a5, tx as a6, nx as a7, Sn as a8, Bh as a9, ra as aA, fo as aB, na as aC, mr as aD, sx as aE, lx as aF, Io as aG, Di as aH, bm as aI, gp as aJ, ax as aK, yy as aL, Of as aM, Ga as aN, Pf as aO, H as aP, hy as aQ, yx as aR, Ix as aS, $p as aa, Ip as ab, Sc as ac, bp as ad, wp as ae, cm as af, Nh as ag, cx as ah, ux as ai, Uh as aj, px as ak, mx as al, gx as am, my as an, hx as ao, $c as ap, Cc as aq, aa as ar, ta as as, Lc as at, Kc as au, sm as av, um as aw, dh as ax, am as ay, kh as az, Wg as b, ia as c, fx as d, Zu as e, lr as f, ca as g, ox as h, uo as i, Nt as j, zh as k, jh as l, _m as m, Bn as n, H0 as o, dx as p, nu as q, zc as r, xe as s, el as t, Nc as u, Hc as v, Vc as w, os as x, ci as y, Ge as z, __tla };
