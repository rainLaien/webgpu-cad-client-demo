import { _ as Gi, __tla as __tla_0 } from "./editor-module-sDEHG0Nh.js";
let Og, Qy, Fe, mg, gg, bg, Ba, Ig, wg, pg, kr, Sl, xu, no, su, ia, la, au, yt, du, Yl, vl, Fg, _g, qn, Rl, Eg, $g, kg, rp, Ag, ya, ma, pf, ho, _a, Sa, Ul, Jl, Gu, Wl, dl, Fa, zn, mo, _t, pn, sf, ou, xg, np, A, tp, Pg, Rg, vg, yo, Fl, Wd, _l, ff, ag, bo, xe, Ta, xa, va, il, Pi, Sg, hg, wa, ea, cg, ug, dg, lg, fg, yg, od;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const vr = new Set;
    let bi = !1;
    Wd = function(e, t, r = 2) {
        const n = t && t.length, i = n ? t[0] * r : e.length;
        vr.size && vr.clear();
        let o = Bs(e, 0, i, r, !0);
        const s = [];
        if (!o || o.next === o.prev) return s;
        let a = 0, d = 0, c = 0;
        if (n && (o = Xd(e, t, o, r)), e.length > 80 * r) {
            a = e[0], d = e[1];
            let u = a, p = d;
            for(let f = r; f < i; f += r){
                const m = e[f], y = e[f + 1];
                m < a && (a = m), y < d && (d = y), m > u && (u = m), y > p && (p = y);
            }
            c = Math.max(u - a, p - d), c = c !== 0 ? 32767 / c : 0;
        }
        return wi(o, s, a, d, c), s;
    };
    function Bs(e, t, r, n, i) {
        let o = null;
        if (i === lc(e, t, r, n) > 0) for(let s = t; s < r; s += n)o = Ho(s / n | 0, e[s], e[s + 1], o);
        else for(let s = r - n; s >= t; s -= n)o = Ho(s / n | 0, e[s], e[s + 1], o);
        return o && Er(o, o.next) && (Or(o), o = o.next), o;
    }
    function bt(e, t = e) {
        const r = t === e;
        let n = e, i;
        do i = !1, n !== n.next && (vr.size === 0 || !vr.has(n)) && (Er(n, n.next) || ae(n.prev, n, n.next) === 0) ? ((r || n === t) && (t = n.prev), bi = !0, Or(n), n = n.prev, i = !0) : (r || n !== t) && (n = n.next, i = !r);
        while (i || n !== t);
        return t;
    }
    function wi(e, t, r, n, i) {
        i && oc(e, r, n, i);
        let o = e, s = !1;
        for(; e.prev !== e.next;){
            const a = e.prev, d = e.next;
            if (ae(a, e, d) < 0 && (i ? Yd(e, r, n, i) : Gd(e))) {
                t.push(a.i, e.i, d.i), Or(e), e = d, o = d;
                continue;
            }
            if (e = d, e === o) {
                if (bi = !1, e = bt(e), bi) {
                    o = e;
                    continue;
                }
                if (!s) {
                    e = Zd(e, t), o = e, s = !0;
                    continue;
                }
                Jd(e, t, r, n, i);
                break;
            }
        }
    }
    function Gd(e) {
        const t = e.prev, r = e, n = e.next, i = t.x, o = r.x, s = n.x, a = t.y, d = r.y, c = n.y, u = Math.min(i, o, s), p = Math.min(a, d, c), f = Math.max(i, o, s), m = Math.max(a, d, c);
        let y = n.next;
        for(; y !== t;){
            if (y.x >= u && y.x <= f && y.y >= p && y.y <= m && !(i === y.x && a === y.y) && ln(i, a, o, d, s, c, y.x, y.y) && ae(y.prev, y, y.next) >= 0) return !1;
            y = y.next;
        }
        return !0;
    }
    function Yd(e, t, r, n) {
        const i = e.prev, o = e, s = e.next, a = i.x, d = o.x, c = s.x, u = i.y, p = o.y, f = s.y, m = Math.min(a, d, c), y = Math.min(u, p, f), x = Math.max(a, d, c), _ = Math.max(u, p, f), g = Fi(m, y, t, r, n), l = Fi(x, _, t, r, n);
        let b = e.prevZ;
        for(; b && b.z >= g;){
            if (b.x >= m && b.x <= x && b.y >= y && b.y <= _ && b !== s && !(a === b.x && u === b.y) && ln(a, u, d, p, c, f, b.x, b.y) && ae(b.prev, b, b.next) >= 0) return !1;
            b = b.prevZ;
        }
        let h = e.nextZ;
        for(; h && h.z <= l;){
            if (h.x >= m && h.x <= x && h.y >= y && h.y <= _ && h !== s && !(a === h.x && u === h.y) && ln(a, u, d, p, c, f, h.x, h.y) && ae(h.prev, h, h.next) >= 0) return !1;
            h = h.nextZ;
        }
        return !0;
    }
    function Zd(e, t) {
        let r = e, n = !1;
        do {
            const i = r.prev, o = r.next.next;
            Vs(i, r, r.next, o, !1) && Ar(i, o) && Ar(o, i) && (t.push(i.i, r.i, o.i), Or(r), Or(r.next), r = e = o, n = !0), r = r.next;
        }while (r !== e);
        return n ? bt(r) : r;
    }
    function Jd(e, t, r, n, i) {
        let o = e;
        do {
            let s = o.next.next;
            for(; s !== o.prev;){
                if (o.i !== s.i && dc(o, s)) {
                    let a = Ns(o, s);
                    o = bt(o, o.next), a = bt(a, a.next), wi(o, t, r, n, i), wi(a, t, r, n, i);
                    return;
                }
                s = s.next;
            }
            o = o.next;
        }while (o !== e);
    }
    let ki = !1;
    function Xd(e, t, r, n) {
        const i = [];
        for(let o = 0, s = t.length; o < s; o++){
            const a = t[o] * n, d = o < s - 1 ? t[o + 1] * n : e.length, c = Bs(e, a, d, n, !1);
            c === c.next && vr.add(c), i.push(ac(c));
        }
        i.sort(Qd), tc(e.length / n, t.length), zs(r, r), ki = !0;
        for(let o = 0; o < i.length; o++)r = ec(i[o], r);
        return ki = !1, bt(r);
    }
    function Qd(e, t) {
        return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
    }
    function ec(e, t) {
        const r = nc(e, t);
        if (!r) return t;
        const n = Ns(r, e), i = n.next;
        return zs(r, i.next), bt(n, n.next), bt(r, r.next);
    }
    const js = 16;
    let te = new Float64Array(0), un = 0;
    const xi = [], Si = [];
    function tc(e, t) {
        const r = Math.ceil((e + 2 * t) / js) + t + 2;
        te.length < r * 4 && (te = new Float64Array(r * 4)), un = 0;
    }
    function zs(e, t) {
        let r = e;
        do {
            const n = un++;
            xi[n] = r;
            let i = 1 / 0, o = 1 / 0, s = -1 / 0, a = -1 / 0, d = 0;
            do {
                const u = r.next;
                r.z = n, r.x < i && (i = r.x), r.x > s && (s = r.x), r.y < o && (o = r.y), r.y > a && (a = r.y), u.x < i && (i = u.x), u.x > s && (s = u.x), u.y < o && (o = u.y), u.y > a && (a = u.y), r = u;
            }while (++d < js && r !== t);
            Si[n] = r;
            const c = n * 4;
            te[c] = i, te[c + 1] = o, te[c + 2] = s, te[c + 3] = a;
        }while (r !== t);
    }
    function rc(e, t) {
        const r = e.z * 4;
        t.x < te[r] && (te[r] = t.x), t.y < te[r + 1] && (te[r + 1] = t.y), t.x > te[r + 2] && (te[r + 2] = t.x), t.y > te[r + 3] && (te[r + 3] = t.y);
    }
    function Ko(e) {
        let t = Si[e];
        for(; t.prev.next !== t;)t = t.next;
        return Si[e] = t, t;
    }
    function qo(e) {
        let t = xi[e];
        for(; t.prev.next !== t;)t = t.next;
        return xi[e] = t, t;
    }
    function nc(e, t) {
        let r = t;
        const n = e.x, i = e.y;
        let o = -1 / 0, s;
        if (Er(e, r)) return r;
        for(let f = 0, m = 0; f < un; f++, m += 4){
            if (i < te[m + 1] || i > te[m + 3] || te[m] > n || te[m + 2] <= o) continue;
            const y = Ko(f);
            r = qo(f);
            do {
                if (r.prev.next === r) {
                    if (Er(e, r.next)) return r.next;
                    if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                        const x = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (x <= n && x > o && (o = x, s = r.x < r.next.x ? r : r.next, x === n)) return s;
                    }
                }
                r = r.next;
            }while (r !== y);
        }
        if (!s) return null;
        const a = s.x, d = s.y, c = Math.min(i, d), u = Math.max(i, d);
        let p = 1 / 0;
        for(let f = 0, m = 0; f < un; f++, m += 4){
            if (te[m + 2] < a || te[m] > n || te[m + 3] < c || te[m + 1] > u) continue;
            const y = Ko(f);
            r = qo(f);
            do {
                if (r.prev.next === r && n >= r.x && r.x >= a && n !== r.x && ln(i < d ? n : o, i, a, d, i < d ? o : n, i, r.x, r.y)) {
                    const x = Math.abs(i - r.y) / (n - r.x);
                    (Ar(r, e) || r.y === i && r.next.y === i && r.next.x > n) && (x < p || x === p && (r.x > s.x || r.x === s.x && ic(s, r))) && (s = r, p = x);
                }
                r = r.next;
            }while (r !== y);
        }
        return s;
    }
    function ic(e, t) {
        return ae(e.prev, e, t.prev) < 0 && ae(t.next, e, e.next) < 0;
    }
    const Ee = [];
    let ur = [], ut = new Uint32Array(0), lr = new Uint32Array(0);
    const fr = new Uint32Array(256);
    function oc(e, t, r, n) {
        let i = e, o = 0;
        do i.z = Fi(i.x, i.y, t, r, n), Ee[o++] = i, i = i.next;
        while (i !== e);
        sc(o);
        let s = null;
        for(let a = 0; a < o; a++){
            const d = Ee[a];
            d.prevZ = s, s && (s.nextZ = d), s = d;
        }
        s.nextZ = null;
    }
    function sc(e) {
        if (e <= 32) {
            for(let t = 1; t < e; t++){
                const r = Ee[t], n = r.z;
                let i = t - 1;
                for(; i >= 0 && Ee[i].z > n;)Ee[i + 1] = Ee[i], i--;
                Ee[i + 1] = r;
            }
            return;
        }
        ut.length < e && (ut = new Uint32Array(e), lr = new Uint32Array(e), ur = new Array(e));
        for(let t = 0; t < e; t++)ut[t] = Ee[t].z;
        Nr(e, Ee, ut, ur, lr, 0), Nr(e, ur, lr, Ee, ut, 8), Nr(e, Ee, ut, ur, lr, 16), Nr(e, ur, lr, Ee, ut, 24);
    }
    function Nr(e, t, r, n, i, o) {
        fr.fill(0);
        for(let a = 0; a < e; a++)fr[r[a] >>> o & 255]++;
        let s = 0;
        for(let a = 0; a < 256; a++){
            const d = fr[a];
            fr[a] = s, s += d;
        }
        for(let a = 0; a < e; a++){
            const d = r[a], c = fr[d >>> o & 255]++;
            n[c] = t[a], i[c] = d;
        }
    }
    function Fi(e, t, r, n, i) {
        return e = (e - r) * i | 0, t = (t - n) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
    }
    function ac(e) {
        let t = e, r = e;
        do (t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next;
        while (t !== e);
        return r;
    }
    function ln(e, t, r, n, i, o, s, a) {
        return (i - s) * (t - a) >= (e - s) * (o - a) && (e - s) * (n - a) >= (r - s) * (t - a) && (r - s) * (o - a) >= (i - s) * (n - a);
    }
    function dc(e, t) {
        const r = Er(e, t) && ae(e.prev, e, e.next) > 0 && ae(t.prev, t, t.next) > 0;
        return e.next.i !== t.i && (r || Ar(e, t) && Ar(t, e) && (ae(e.prev, e, t.prev) !== 0 || ae(e, t.prev, t) !== 0)) && !cc(e, t) && (r || uc(e, t));
    }
    function ae(e, t, r) {
        return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
    }
    function Er(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function Vs(e, t, r, n, i = !0) {
        const o = ae(e, t, r), s = ae(e, t, n), a = ae(r, n, e), d = ae(r, n, t);
        return (o > 0 && s < 0 || o < 0 && s > 0) && (a > 0 && d < 0 || a < 0 && d > 0) ? !0 : i ? !!(o === 0 && Kr(e, r, t) || s === 0 && Kr(e, n, t) || a === 0 && Kr(r, e, n) || d === 0 && Kr(r, t, n)) : !1;
    }
    function Kr(e, t, r) {
        return t.x <= Math.max(e.x, r.x) && t.x >= Math.min(e.x, r.x) && t.y <= Math.max(e.y, r.y) && t.y >= Math.min(e.y, r.y);
    }
    function cc(e, t) {
        const r = Math.min(e.x, t.x), n = Math.max(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.y, t.y);
        let s = e;
        do {
            const a = s.next;
            if (s.x > n && a.x > n || s.x < r && a.x < r || s.y > o && a.y > o || s.y < i && a.y < i) {
                s = a;
                continue;
            }
            if (s.i !== e.i && a.i !== e.i && s.i !== t.i && a.i !== t.i && Vs(s, a, e, t)) return !0;
            s = a;
        }while (s !== e);
        return !1;
    }
    function Ar(e, t) {
        return ae(e.prev, e, e.next) < 0 ? ae(e, t, e.next) >= 0 && ae(e, e.prev, t) >= 0 : ae(e, t, e.prev) < 0 || ae(e, e.next, t) < 0;
    }
    function uc(e, t) {
        let r = e, n = !1;
        const i = (e.x + t.x) / 2, o = (e.y + t.y) / 2;
        do {
            const s = r.next;
            r.y > o != s.y > o && i < (s.x - r.x) * (o - r.y) / (s.y - r.y) + r.x && (n = !n), r = s;
        }while (r !== e);
        return n;
    }
    function Ns(e, t) {
        const r = _i(e.i, e.x, e.y), n = _i(t.i, t.x, t.y), i = e.next, o = t.prev;
        return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n;
    }
    function Ho(e, t, r, n) {
        const i = _i(e, t, r);
        return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
    }
    function Or(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), ki && rc(e.prev, e.next);
    }
    function _i(e, t, r) {
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
    function lc(e, t, r, n) {
        let i = 0;
        for(let o = t, s = r - n; o < r; o += n)i += (e[s] - e[o]) * (e[o + 1] + e[s + 1]), s = o;
        return i;
    }
    const fc = 1;
    ag = function(e, t, r) {
        return pc({
            version: fc,
            identity: e,
            revision: t,
            profile: r
        });
    };
    function pc(e) {
        return Object.freeze(e.identity), Object.freeze(e.revision), Object.freeze(e), e;
    }
    function vi(e) {
        return e !== null && typeof e == "object";
    }
    function hc(e) {
        const t = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && t !== Object.prototype && t !== null) throw new Error("mutation payload and state must contain only plain structured data");
    }
    function Ks(e, t) {
        if (!(!vi(e) || t.has(e))) {
            t.add(e);
            for (const r of Object.values(e))Ks(r, t);
        }
    }
    function mc(e, t) {
        if (Array.isArray(e) !== Array.isArray(t) || Array.isArray(e) && e.length !== t.length || !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
        const r = Object.keys(e), n = Object.keys(t);
        return r.length === n.length && n.every((i)=>Object.hasOwn(e, i));
    }
    function yc(e) {
        return Array.isArray(e) ? new Array(e.length) : Object.create(Object.getPrototypeOf(e));
    }
    function gc(e, t, r) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        });
    }
    function Ic(e, t) {
        const r = new WeakSet;
        Ks(e, r);
        const n = new WeakMap;
        let i = 0, o = 0;
        const s = (d, c)=>{
            if (typeof c == "function" || typeof c == "symbol") throw new Error("mutation payload and state must contain only plain structured data");
            if (!vi(c)) return c;
            if (hc(c), r.has(c) && Object.isFrozen(c)) return o += 1, c;
            if (n.has(c)) return n.get(c);
            const u = vi(d) && mc(d, c) ? d : void 0, p = yc(c);
            n.set(c, p);
            let f = u !== void 0;
            for (const m of Object.keys(c)){
                const y = u === void 0 ? void 0 : u[m], x = s(y, c[m]);
                gc(p, m, x), f && x !== y && (f = !1);
            }
            return f && u !== void 0 && r.has(u) && Object.isFrozen(u) ? (n.set(c, u), o += 1, u) : (i += 1, Object.freeze(p));
        }, a = s(e, t);
        return Object.freeze({
            state: a,
            stats: Object.freeze({
                allocatedNodes: i,
                sharedNodes: o
            })
        });
    }
    function gt(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function Yi(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`${t} must be a non-negative safe integer`);
    }
    function qs(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return e;
        t.add(e);
        for (const r of Object.values(e))qs(r, t);
        return Object.freeze(e);
    }
    function Hs(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return;
        t.add(e);
        const r = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && r !== Object.prototype && r !== null) throw new Error("mutation payload and state must contain only plain structured data");
        for (const n of Object.values(e))Hs(n, t);
    }
    function Ls(e) {
        return Hs(e), qs(structuredClone(e));
    }
    dg = function(e) {
        if (gt(e.intentId, "intentId"), gt(e.bodyId, "bodyId"), gt(e.operation, "operation"), Yi(e.baseRevision, "baseRevision"), e.mode !== void 0 && e.mode !== "commit" && e.mode !== "preview") throw new Error("mode must be commit or preview");
        return Object.freeze({
            intentId: e.intentId,
            bodyId: e.bodyId,
            baseRevision: e.baseRevision,
            operation: e.operation,
            mode: e.mode ?? "commit",
            payload: Ls(e.payload)
        });
    };
    cg = function(e) {
        return gt(e.bodyId, "bodyId"), Yi(e.revision, "revision"), Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision,
            baseRevision: null,
            phase: "committed",
            intentId: null,
            state: Ls(e.state)
        });
    };
    ug = function(e, t, r) {
        if (e.phase !== "committed") throw new Error("mutation base must be a committed revision");
        if (t.bodyId !== e.bodyId) throw new Error("mutation intent Body does not match its base revision");
        if (t.baseRevision !== e.revision) throw new Error("mutation intent base revision is stale");
        Yi(e.revision + 1, "candidate revision");
        const n = r(e.state, t.payload), i = Ic(e.state, n);
        return Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision + 1,
            baseRevision: e.revision,
            phase: t.mode === "preview" ? "preview" : "candidate",
            intentId: t.intentId,
            state: i.state
        });
    };
    lg = function(e, t) {
        return gt(t, "evaluationId"), Object.freeze({
            status: "accepted",
            evaluationId: t,
            candidate: e
        });
    };
    fg = function(e, t, r) {
        return gt(t, "evaluationId"), gt(r, "diagnostic"), Object.freeze({
            status: "rejected",
            evaluationId: t,
            candidate: e,
            diagnostic: r
        });
    };
    function bc(e, t) {
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
    pg = class {
        _current;
        constructor(t){
            if (t.phase !== "committed") throw new Error("initial mutation root must be committed");
            this._current = t;
        }
        get current() {
            return this._current;
        }
        commit(t) {
            const r = bc(this._current, t);
            return r.status === "committed" && (this._current = r.committedRevision), r;
        }
    };
    const wc = new Set([
        "solidid",
        "mesh",
        "occhandle"
    ]);
    function kc(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function Lo(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function Us(e, t) {
        if (wc.has(kc(e))) throw new Error(`${t}.${e} is evaluation state and cannot be persisted`);
    }
    function fn(e, t, r, n) {
        if (e === null || typeof e == "string" || typeof e == "boolean") return;
        if (typeof e == "number") {
            if (!Number.isFinite(e)) throw new Error(`${t} must contain only finite numbers`);
            return;
        }
        if (typeof e != "object") throw new Error(`${t} must contain only JSON values`);
        if (r.has(e)) throw new Error(`${t} must not contain cycles`);
        const i = new Set(r);
        if (i.add(e), Array.isArray(e)) {
            e.forEach((s, a)=>fn(s, `${t}[${a}]`, i, n));
            return;
        }
        const o = Object.getPrototypeOf(e);
        if (o !== Object.prototype && o !== null) throw new Error(`${t} must contain only plain JSON objects`);
        for (const [s, a] of Object.entries(e))n || Us(s, t), fn(a, `${t}.${s}`, i, n);
    }
    function Zi(e) {
        if (e !== null && typeof e == "object") {
            for (const t of Object.values(e))Zi(t);
            Object.freeze(e);
        }
        return e;
    }
    function Uo(e, t) {
        for (const [r, n] of Object.entries(e))Us(r, t), fn(n, `${t}.${r}`, new Set, !1);
        return Zi(structuredClone(e));
    }
    function Ji(e) {
        for (const [t, r] of Object.entries(e))fn(r, `outputs.${t}`, new Set, !0);
        return Zi(structuredClone(e));
    }
    function or(e) {
        if (Lo(e.id, "FeatureEnvelope.id"), Lo(e.typeId, "FeatureEnvelope.typeId"), !Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("FeatureEnvelope.timestamp must be a non-negative safe integer");
        const t = Uo(e.parameters ?? {}, "parameters"), r = Uo(e.references ?? {}, "references");
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
    const xc = new Set([
        "clean",
        "dirty",
        "failed",
        "blocked",
        "unsupported"
    ]);
    function Sc(e) {
        return Ji(e);
    }
    function Fc(e) {
        if (e.featureId.trim().length === 0) throw new Error("FeatureEvaluationState.featureId must not be empty");
        if (!Number.isSafeInteger(e.revision) || e.revision < 0) throw new Error("FeatureEvaluationState.revision must be a non-negative safe integer");
        if (!xc.has(e.status)) throw new Error(`Invalid FeatureEvaluationState.status: ${String(e.status)}`);
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
            outputs: Sc(e.outputs ?? {}),
            diagnostics: t,
            runtimeArtifacts: Object.freeze({
                ...e.runtimeArtifacts ?? {}
            })
        });
    }
    const Ws = Object.freeze([
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
    ]), _c = new Set([
        "id",
        "type",
        "name",
        "suppressed",
        "timestamp"
    ]);
    new Set(Ws);
    const vc = Object.freeze({
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
    function Gs(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function Ec(e) {
        const t = Gs(e);
        return t === "solidid" || t === "mesh" || t === "occhandle" || t.includes("occ") && t.endsWith("handle");
    }
    function Ac(e, t) {
        return Gs(e) === "solidid" && (t === null || typeof t == "string");
    }
    function Oc(e) {
        if (e.id.trim().length === 0 || e.type.trim().length === 0) throw new Error("Legacy Feature id and type must not be empty");
        if (!Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("Legacy Feature timestamp must be a non-negative safe integer");
    }
    function Pc(e, t = {}) {
        const r = e;
        Oc(r);
        const n = new Set([
            "dependencyIds",
            ...vc[r.type] ?? [],
            ...t.referenceKeys ?? []
        ]), i = {}, o = {}, s = {}, a = {};
        for (const [u, p] of Object.entries(r))_c.has(u) || p === void 0 || (Ec(u) ? Ac(u, p) ? s[u] = p : a[u] = p : n.has(u) ? o[u] = p : i[u] = p);
        const d = or({
            id: r.id,
            typeId: r.type,
            name: r.name,
            suppressed: r.suppressed,
            timestamp: r.timestamp,
            parameters: i,
            references: o
        }), c = typeof s.solidId == "string" && s.solidId.length > 0;
        return Object.freeze({
            envelope: d,
            evaluationState: Fc({
                featureId: r.id,
                revision: t.evaluationRevision ?? 0,
                status: t.evaluationStatus ?? (c ? "clean" : "dirty"),
                outputs: s,
                runtimeArtifacts: a
            })
        });
    }
    function Ys(e, t) {
        for (const [r, n] of Object.entries(t)){
            if (Object.hasOwn(e, r)) throw new Error(`Legacy Feature field collision: ${r}`);
            e[r] = n;
        }
    }
    function ri(e, t) {
        Ys(e, structuredClone(t));
    }
    function $c(e, t) {
        if (t && t.featureId !== e.id) throw new Error("Evaluation state does not belong to FeatureEnvelope");
        const r = {
            id: e.id,
            type: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp
        };
        return ri(r, e.parameters), ri(r, e.references), t && (ri(r, t.outputs), Ys(r, t.runtimeArtifacts)), r;
    }
    function Rc(e) {
        const t = or({
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
    const Cc = Object.freeze([
        "info",
        "warning",
        "error"
    ]);
    function ni(e, t) {
        if (e.trim().length === 0) throw new Error(`Diagnostic.${t} must not be empty`);
        return e;
    }
    function Mc(e) {
        if (!Cc.includes(e.severity)) throw new Error(`Invalid Diagnostic.severity: ${String(e.severity)}`);
        const t = e.path === void 0 ? void 0 : ni(e.path, "path");
        return Object.freeze({
            severity: e.severity,
            code: ni(e.code, "code"),
            message: ni(e.message, "message"),
            ...t ? {
                path: t
            } : {},
            details: Ji(e.details ?? {})
        });
    }
    class Cn extends Error {
        code;
        producerFeatureId;
        outputKey;
        semanticId;
        constructor(t, r, n){
            super(r), this.name = "SemanticIdentityValidationError", this.code = t, this.producerFeatureId = n.producerFeatureId, this.outputKey = n.outputKey, this.semanticId = n.semanticId;
        }
    }
    const Dc = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, Tc = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function Zs(e) {
        return e.trim().toLowerCase();
    }
    function Xi(e, t = {}) {
        const r = Zs(e);
        if (!Dc.test(r)) throw new Cn("invalid-output-key", `Invalid semantic outputKey ${JSON.stringify(e)}`, {
            producerFeatureId: t.producerFeatureId ?? "",
            outputKey: e,
            semanticId: t.semanticId
        });
        return r;
    }
    function Bc(e, t) {
        const r = Zs(e);
        if (!Tc.test(r)) throw new Cn("invalid-semantic-id", `Invalid semanticId ${JSON.stringify(e)} for producer ${JSON.stringify(t.producerFeatureId)} outputKey ${JSON.stringify(t.outputKey)}`, {
            ...t,
            semanticId: e
        });
        return r;
    }
    function Ei(e) {
        const t = e.producerFeatureId.trim();
        if (t.length === 0) throw new Cn("invalid-producer-feature-id", "Semantic identity producerFeatureId must not be empty", e);
        const r = Xi(e.outputKey, e);
        return Object.freeze({
            producerFeatureId: t,
            outputKey: r,
            semanticId: Bc(e.semanticId, {
                producerFeatureId: t,
                outputKey: r
            })
        });
    }
    function jc(e, t) {
        if (e.trim().length === 0) throw new Error(`SemanticOutput.${t} must not be empty`);
        return e;
    }
    function zc(e) {
        return Object.freeze({
            outputKey: Xi(e.outputKey),
            kind: jc(e.kind, "kind"),
            data: Ji(e.data ?? {})
        });
    }
    function Vc(e) {
        const t = new Set, r = Object.entries(e).map(([n, i])=>{
            const o = Xi(n), s = zc(i);
            if (s.outputKey !== o) throw new Error(`SemanticOutput map key ${n} does not match outputKey ${s.outputKey}`);
            if (t.has(o)) throw new Cn("duplicate-semantic-identity", `Duplicate normalized SemanticOutput map key ${JSON.stringify(o)}`, {
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
    const Nc = Object.freeze([
        "success",
        "failed",
        "blocked",
        "unsupported"
    ]), Kc = Object.freeze({
        generated: Object.freeze([]),
        modified: Object.freeze([]),
        deleted: Object.freeze([])
    });
    function Mn(e, t) {
        if (e.trim().length === 0) throw new Error(`FeatureBuildResult.${t} must not be empty`);
        return e;
    }
    function qc(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("FeatureBuildResult.featureRevision must be a non-negative safe integer");
        return e;
    }
    function Hc(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("FeatureBuildResult.featurePayloadVersion must be a positive safe integer");
        return e;
    }
    function Qi(e, t) {
        const r = e.map((n)=>Mn(n, t));
        return Object.freeze([
            ...new Set(r)
        ]);
    }
    function Wo(e, t) {
        return Object.freeze({
            inputSemanticId: Mn(e.inputSemanticId, `${t}.inputSemanticId`),
            outputSemanticIds: Qi(e.outputSemanticIds, `${t}.outputSemanticIds`)
        });
    }
    function Lc(e = Kc) {
        return Object.freeze({
            generated: Object.freeze(e.generated.map((t, r)=>Wo(t, `shapeHistory.generated[${r}]`))),
            modified: Object.freeze(e.modified.map((t, r)=>Wo(t, `shapeHistory.modified[${r}]`))),
            deleted: Qi(e.deleted, "shapeHistory.deleted")
        });
    }
    function Uc(e) {
        if (!e) return;
        if (!Number.isFinite(e.durationMs) || e.durationMs < 0) throw new Error("FeatureBuildResult.metrics.durationMs must be finite and non-negative");
        const t = Object.fromEntries(Object.entries(e.counters ?? {}).map(([r, n])=>{
            if (Mn(r, "metrics counter key"), !Number.isFinite(n) || n < 0) throw new Error(`FeatureBuildResult.metrics.${r} must be finite and non-negative`);
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
        if (!Nc.includes(e.status)) throw new Error(`Invalid FeatureBuildResult.status: ${String(e.status)}`);
        const t = Object.freeze((e.diagnostics ?? []).map((i)=>Mc(i)));
        if (e.status !== "success" && t.length === 0) throw new Error(`FeatureBuildResult ${e.status} requires a diagnostic`);
        const r = Uc(e.metrics), n = {
            featureId: Mn(e.featureId, "featureId"),
            featureRevision: qc(e.featureRevision),
            featurePayloadVersion: Hc(e.featurePayloadVersion),
            outputs: Vc(e.status === "success" ? e.outputs ?? {} : {}),
            shapeHistory: Lc(e.status === "success" ? e.shapeHistory : void 0),
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
            const i = Qi(e.blockedByFeatureIds, "blockedByFeatureIds");
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
    class Js extends Error {
        cycle;
        constructor(t){
            super(`Feature dependency cycle: ${t.join(" -> ")}`), this.name = "CycleDetectedError", this.cycle = t;
        }
    }
    function Xs(e, t, r) {
        const n = eo(e, r);
        if (n) throw new Js(n);
        const i = new Map;
        for (const a of e)i.set(a, t.get(a)?.length ?? 0);
        const o = e.filter((a)=>(i.get(a) ?? 0) === 0), s = [];
        for(; o.length > 0;){
            const a = o.shift();
            s.push(a);
            for (const d of r.get(a) ?? []){
                const c = (i.get(d) ?? 0) - 1;
                i.set(d, c), c === 0 && o.push(d);
            }
        }
        return s;
    }
    function eo(e, t) {
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
                    let c = o;
                    for(; c && c !== s;)d.unshift(c), c = n.get(c) ?? null;
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
    function Go(e, t, r, n) {
        const i = new Set(e), o = new Set(i), s = [
            ...i
        ];
        for(; s.length > 0;){
            const d = s.shift();
            for (const c of n.get(d) ?? [])o.has(c) || (o.add(c), s.push(c));
        }
        return Xs(t, r, n).filter((d)=>o.has(d));
    }
    class Wc {
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
            return Xs(this._nodeIds, this._dependencies, this._dependents);
        }
        findCycle() {
            return eo(this._nodeIds, this._dependents);
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
            return Go([
                t
            ], this._nodeIds, this._dependencies, this._dependents);
        }
        getDownstreamClosure(t) {
            return Go(t, this._nodeIds, this._dependencies, this._dependents);
        }
    }
    function Yo(e, t, r) {
        const n = r.get(e) - r.get(t);
        return n !== 0 ? n : e < t ? -1 : e > t ? 1 : 0;
    }
    function Gc(e, t) {
        const r = e.nodeIds(), n = new Set(r);
        if (t.length !== r.length) throw new Error("FeatureExecutionPlanner historyOrder must contain every graph Feature exactly once");
        const i = new Map;
        return t.forEach((o, s)=>{
            if (!n.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains unknown Feature ${o}`);
            if (i.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains duplicate Feature ${o}`);
            i.set(o, s);
        }), i;
    }
    function Yc(e, t) {
        const r = Gc(e, t), n = e.findCycle();
        if (n) throw new Js(n);
        const i = new Map(e.nodeIds().map((d)=>[
                d,
                e.dependenciesOf(d).length
            ])), o = e.nodeIds().filter((d)=>i.get(d) === 0).sort((d, c)=>Yo(d, c, r)), s = [];
        for(; o.length > 0;){
            const d = o.shift();
            s.push(Object.freeze({
                featureId: d,
                historyIndex: r.get(d)
            }));
            for (const c of e.dependentsOf(d)){
                const u = i.get(c) - 1;
                i.set(c, u), u === 0 && o.push(c);
            }
            o.sort((c, u)=>Yo(c, u, r));
        }
        const a = Object.freeze(s);
        return Object.freeze({
            steps: a,
            featureIds: Object.freeze(a.map((d)=>d.featureId))
        });
    }
    function Zc(e) {
        const t = e.map((r)=>r.key);
        if (new Set(t).size !== t.length) throw new Error("Feature reference schema contains duplicate keys");
        return Object.freeze({
            fields: Object.freeze(e.map((r)=>Object.freeze({
                    ...r
                })))
        });
    }
    class Qs extends Error {
        code;
        identity;
        constructor(t, r, n){
            super(r), this.name = "ShapeHistoryValidationError", this.code = t, this.identity = n;
        }
    }
    function wt(e) {
        return [
            e.producerFeatureId,
            e.outputKey,
            e.semanticId
        ].join("\0");
    }
    function Ai(e, t) {
        const r = wt(e), n = wt(t);
        return r < n ? -1 : r > n ? 1 : 0;
    }
    function Zo(e) {
        const t = new Map;
        for (const r of e){
            const n = Ei(r.input);
            if (r.outputs.length === 0) throw new Qs("empty-history-outputs", `ShapeHistory mapping for ${JSON.stringify(n.semanticId)} must contain at least one output`, n);
            const i = wt(n);
            let o = t.get(i);
            o || (o = {
                input: n,
                outputs: new Map
            }, t.set(i, o));
            for (const s of r.outputs){
                const a = Ei(s);
                o.outputs.set(wt(a), a);
            }
        }
        return Object.freeze([
            ...t.values()
        ].sort((r, n)=>Ai(r.input, n.input)).map((r)=>Object.freeze({
                input: r.input,
                outputs: Object.freeze([
                    ...r.outputs.values()
                ].sort(Ai))
            })));
    }
    function Jc(e) {
        const t = new Map;
        for (const r of e){
            const n = Ei(r);
            t.set(wt(n), n);
        }
        return Object.freeze([
            ...t.values()
        ].sort(Ai));
    }
    function Qt(e = {}) {
        const t = Zo(e.generated ?? []), r = Zo(e.modified ?? []), n = Jc(e.deleted ?? []), i = new Set(r.map((o)=>wt(o.input)));
        for (const o of n)if (i.has(wt(o))) throw new Qs("deleted-modified-conflict", `Semantic identity ${JSON.stringify(o.semanticId)} cannot be both modified and deleted`, o);
        return Object.freeze({
            generated: t,
            modified: r,
            deleted: n
        });
    }
    class Ge extends Error {
        typeId;
        constructor(t, r){
            super(`Feature codec ${t}: ${r}`), this.name = "FeatureCodecError", this.typeId = t;
        }
    }
    function St(e, t, r) {
        const n = or({
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
    function Xc(e) {
        return Object.freeze({
            parameters: e.parameters,
            references: e.references
        });
    }
    function N() {
        return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e)=>{
            const t = Math.random() * 16 | 0;
            return (e === "x" ? t : t & 3 | 8).toString(16);
        });
    }
    yt = class extends Error {
        featureId;
        constructor(t, r){
            super(r), this.name = "RecomputeError", this.featureId = t;
        }
    };
    function Oi(e) {
        let t = 0;
        const r = e.length;
        for(let n = 0; n < r; n++){
            const i = (n + 1) % r;
            t += e[n].x * e[i].y - e[i].x * e[n].y;
        }
        return t * .5;
    }
    function sr(e) {
        const t = e.loops.find((n)=>n.isOuter);
        if (t && t.points.length >= 3) return t;
        const r = e.loops[0];
        if (!r || r.points.length < 3) throw new Error("profileLoops: profile must have an outer loop with at least 3 points");
        return r;
    }
    function to(e) {
        const t = sr(e);
        return e.loops.filter((r)=>r !== t && !r.isOuter);
    }
    hg = function(e) {
        if (e.length === 0) return new yt("profile", "Profile must have at least one closed loop");
        const t = e.filter((o)=>o.points.length >= 3).map((o)=>({
                points: o.points.map((s)=>({
                        x: s.x,
                        y: s.y
                    })),
                area: Oi(o.points),
                segments: o.segments,
                exactCurve: o.exactCurve
            }));
        if (t.length === 0) return new yt("profile", "Profile loop must have at least 3 points");
        let r = 0, n = 0;
        for(let o = 0; o < t.length; o++){
            const s = Math.abs(t[o].area);
            s > n && (n = s, r = o);
        }
        const i = t[r].area >= 0;
        return t.map((o, s)=>{
            const a = s === r;
            let d = o.points, c = o.segments ? [
                ...o.segments
            ] : void 0;
            return a || o.area >= 0 === i && (d = [
                ...d
            ].reverse(), c && (c = Qc(c))), (!c || c.length === 0) && o.exactCurve?.kind === "circle" && (c = [
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
                ...c && c.length > 0 ? {
                    segments: c
                } : {},
                ...o.exactCurve ? {
                    exactCurve: o.exactCurve
                } : {}
            };
        });
    };
    function Qc(e) {
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
    function ro(e, t) {
        if (e.loops.length === 0) return new yt(t, "Profile has no loops");
        const r = e.loops.filter((i)=>i.isOuter);
        if (r.length !== 1) return new yt(t, r.length === 0 ? "Profile missing outer loop" : "Profile must have exactly one outer loop");
        for (const i of e.loops)if (i.points.length < 3) {
            const o = i.isOuter ? "outer" : "hole";
            return new yt(t, `${o} loop must have at least 3 points`);
        }
        const n = Math.abs(Oi(r[0].points));
        for (const i of e.loops.filter((o)=>!o.isOuter))if (Math.abs(Oi(i.points)) >= n) return new yt(t, "Hole loop must be smaller than the outer boundary");
        return null;
    }
    const qr = 64;
    ea = function(e) {
        if (e.kind === "line") return [
            e.start,
            e.end
        ];
        if (e.kind === "circle") {
            const t = qr;
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
            const i = Math.max(2, Math.ceil(Math.abs(n) / (Math.PI * 2) * qr));
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
            const r = qr;
            return Array.from({
                length: r + 1
            }, (n, i)=>ta(t, i / r));
        }
        return e.kind === "spline" ? eu(e.controls, qr) : [];
    };
    function ta(e, t) {
        if (e.length === 1) return {
            ...e[0]
        };
        const r = [];
        for(let n = 0; n < e.length - 1; n++)r.push({
            x: e[n].x * (1 - t) + e[n + 1].x * t,
            y: e[n].y * (1 - t) + e[n + 1].y * t
        });
        return ta(r, t);
    }
    function Jo(e, t, r, n, i) {
        return .5 * (2 * t + (-e + r) * i + (2 * e - 5 * t + 4 * r - n) * i * i + (-e + 3 * t - 3 * r + n) * i * i * i);
    }
    function eu(e, t) {
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
                const c = d / t;
                r.push({
                    x: Jo(i.x, o.x, s.x, a.x, c),
                    y: Jo(i.y, o.y, s.y, a.y, c)
                });
            }
        }
        return r;
    }
    no = class {
        createFromTessellation(t, r, n) {
            const i = n.subMeshes.map((o, s)=>this._buildFaceFromSubMesh(o, s, r, n));
            return {
                id: N(),
                name: t,
                featureId: r,
                faces: i,
                edges: [],
                tessellation: n
            };
        }
        extrude(t, r, n, i = "Extrude") {
            const o = ro(t, n);
            if (o) throw new Error(o.message);
            const { origin: s, normal: a, uAxis: d, vAxis: c } = t, u = sr(t), p = to(t), f = [
                u,
                ...p
            ], m = (z, J, me)=>[
                    s[0] + d[0] * z + c[0] * J + a[0] * me,
                    s[1] + d[1] * z + c[1] * J + a[1] * me,
                    s[2] + d[2] * z + c[2] * J + a[2] * me
                ], y = [], x = [];
            for (const z of f){
                z !== u && x.push(y.length / 2);
                for (const J of z.points)y.push(J.x, J.y);
            }
            const _ = Wd(y, x.length > 0 ? x : void 0), g = [], l = [];
            for (const z of f)for (const J of z.points)g.push(...m(J.x, J.y, 0)), l.push(...m(J.x, J.y, r));
            const b = g.length / 3, h = [], I = [], S = [], k = [];
            for(let z = 0; z < f.length; z++){
                const J = f[z], me = J.points, ue = z === 0, At = J.segments && J.segments.length > 0 ? J.segments : J.exactCurve?.kind === "circle" ? [
                    {
                        kind: "circle",
                        center: J.exactCurve.center,
                        radius: J.exactCurve.radius
                    }
                ] : null;
                if (At) {
                    for(let le = 0; le < At.length; le++){
                        const ye = At[le], ve = ea(ye), $e = S.length;
                        let Ke = 0;
                        const Ot = ye.kind === "circle", Pt = Ot ? ve.length : Math.max(0, ve.length - 1);
                        for(let Se = 0; Se < Pt; Se++){
                            const Qe = Se, jr = Ot ? (Se + 1) % ve.length : Se + 1, $t = ve[Qe], Rt = ve[jr], zr = m($t.x, $t.y, 0), Vr = m(Rt.x, Rt.y, 0), Ld = m($t.x, $t.y, r), Ud = m(Rt.x, Rt.y, r);
                            let Ct = He(Vt([
                                Vr[0] - zr[0],
                                Vr[1] - zr[1],
                                Vr[2] - zr[2]
                            ], a));
                            if (ye.kind === "circle" || ye.kind === "arc") {
                                const cr = {
                                    x: ($t.x + Rt.x) / 2,
                                    y: ($t.y + Rt.y) / 2
                                }, Xn = ye.center.x, Qn = ye.center.y, ei = m(Xn + (cr.x - Xn), Qn + (cr.y - Qn), 0), ti = m(Xn, Qn, 0);
                                Ct = He([
                                    ei[0] - ti[0],
                                    ei[1] - ti[1],
                                    ei[2] - ti[2]
                                ]);
                            }
                            ue || (Ct = [
                                -Ct[0],
                                -Ct[1],
                                -Ct[2]
                            ]);
                            const Mt = h.length / 3;
                            h.push(...zr, ...Vr, ...Ud, ...Ld);
                            for(let cr = 0; cr < 4; cr++)I.push(...Ct);
                            S.push(Mt, Mt + 1, Mt + 2, Mt, Mt + 2, Mt + 3), Ke += 6;
                        }
                        if (Ke > 0) {
                            const Se = At.length === 1 && (ye.kind === "circle" || ye.kind === "bezier" || ye.kind === "spline") ? ue ? "side" : `hole_${z - 1}_side` : ue ? `side_${le}` : `hole_${z - 1}_side_${le}`;
                            k.push({
                                key: Se,
                                firstIndex: $e,
                                indexCount: Ke
                            });
                        }
                    }
                    continue;
                }
                for(let le = 0; le < me.length; le++){
                    const ye = (le + 1) % me.length, ve = m(me[le].x, me[le].y, 0), $e = m(me[ye].x, me[ye].y, 0), Ke = m(me[le].x, me[le].y, r), Ot = m(me[ye].x, me[ye].y, r), Pt = [
                        $e[0] - ve[0],
                        $e[1] - ve[1],
                        $e[2] - ve[2]
                    ];
                    let Se = He(Vt(Pt, a));
                    ue || (Se = [
                        -Se[0],
                        -Se[1],
                        -Se[2]
                    ]);
                    const Qe = h.length / 3;
                    h.push(...ve, ...$e, ...Ot, ...Ke);
                    for(let jr = 0; jr < 4; jr++)I.push(...Se);
                    S.push(Qe, Qe + 1, Qe + 2, Qe, Qe + 2, Qe + 3), k.push({
                        key: ue ? `side_${le}` : `hole_${z - 1}_side_${le}`,
                        firstIndex: S.length - 6,
                        indexCount: 6
                    });
                }
            }
            const w = [], F = [], v = [
                -a[0],
                -a[1],
                -a[2]
            ];
            for(let z = 0; z < b; z++)w.push(...v), F.push(...a);
            const E = _.slice().reverse(), C = _.map((z)=>z + b), R = 2 * b, O = S.map((z)=>z + R), H = new Float32Array([
                ...g,
                ...l,
                ...h
            ]), D = new Float32Array([
                ...w,
                ...F,
                ...I
            ]), X = new Uint32Array([
                ...E,
                ...C,
                ...O
            ]), Q = {
                key: "bottom",
                firstIndex: 0,
                indexCount: E.length
            }, Z = {
                key: "top",
                firstIndex: E.length,
                indexCount: C.length
            }, _e = E.length + C.length, Ne = k.map((z)=>({
                    key: z.key,
                    firstIndex: _e + z.firstIndex,
                    indexCount: z.indexCount
                })), Je = {
                positions: H,
                normals: D,
                indices: X,
                subMeshes: [
                    Q,
                    Z,
                    ...Ne
                ]
            }, Xe = Je.subMeshes.map((z, J)=>this._buildFaceFromSubMesh(z, J, n, Je)), Et = new Map(Xe.map((z)=>[
                    z.provenance.role,
                    z.id
                ])), dr = this._buildExtrudeEdges(f, m, r, n, Et);
            return {
                id: N(),
                name: i,
                featureId: n,
                faces: Xe,
                edges: dr,
                tessellation: Je
            };
        }
        revolve(t, r, n, i, o, s = "Revolve") {
            const { origin: a, normal: d, uAxis: c, vAxis: u, loops: p } = t, f = p.find((w)=>w.isOuter) ?? p[0];
            if (!f || f.points.length < 2) throw new Error("MeshBRepBackend.revolve: profile must have at least 2 points");
            const m = this._normalize(n), y = (w, F)=>[
                    a[0] + c[0] * w + u[0] * F,
                    a[1] + c[1] * w + u[1] * F,
                    a[2] + c[2] * w + u[2] * F
                ], x = f.points.map((w)=>y(w.x, w.y)), _ = Math.max(12, Math.ceil(Math.abs(i) / (Math.PI / 16))), g = [];
            for(let w = 0; w <= _; w++){
                const F = w / _ * i;
                g.push(x.map((v)=>this._rotateAroundAxis(v, r, m, F)));
            }
            const l = [], b = [], h = [], I = x.length;
            for (const w of g)for (const F of w)l.push(...F), b.push(0, 0, 0);
            for(let w = 0; w < _; w++)for(let F = 0; F < I; F++){
                const v = (F + 1) % I, E = w * I + F, C = w * I + v, R = (w + 1) * I + v, O = (w + 1) * I + F;
                h.push(E, C, R, E, R, O);
            }
            this._accumulateNormals(l, h, b);
            const S = {
                positions: new Float32Array(l),
                normals: new Float32Array(b),
                indices: new Uint32Array(h),
                subMeshes: [
                    {
                        key: "revolve",
                        firstIndex: 0,
                        indexCount: h.length
                    }
                ]
            }, k = S.subMeshes.map((w, F)=>this._buildFaceFromSubMesh(w, F, o, S));
            return {
                id: N(),
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
            const d = t.tessellation.normals ?? new Float32Array(o.length), c = r.tessellation.normals ?? new Float32Array(s.length), u = new Float32Array(d.length + c.length);
            u.set(d, 0), u.set(c, d.length);
            const p = o.length / 3, f = t.tessellation.indices ?? new Uint32Array(0), m = r.tessellation.indices ?? new Uint32Array(0), y = new Uint32Array(f.length + m.length);
            y.set(f, 0);
            for(let g = 0; g < m.length; g++)y[f.length + g] = m[g] + p;
            const x = {
                positions: a,
                normals: u,
                indices: y,
                subMeshes: [
                    {
                        key: "union_a",
                        firstIndex: 0,
                        indexCount: f.length
                    },
                    {
                        key: "union_b",
                        firstIndex: f.length,
                        indexCount: m.length
                    }
                ]
            }, _ = x.subMeshes.map((g, l)=>this._buildFaceFromSubMesh(g, l, n, x));
            return {
                id: N(),
                name: i,
                featureId: n,
                faces: _,
                edges: [],
                tessellation: x
            };
        }
        _cutSolid(t, r, n, i) {
            const o = t.tessellation, s = Math.max(9, Math.floor(o.positions.length * .85)), a = {
                ...o,
                positions: o.positions.slice(0, s),
                normals: o.normals?.slice(0, s),
                indices: o.indices,
                subMeshes: o.subMeshes.map((c)=>({
                        ...c
                    }))
            }, d = a.subMeshes.map((c, u)=>this._buildFaceFromSubMesh(c, u, n, a));
            return {
                id: N(),
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
                id: N(),
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
                const c = t[a].points, u = a === 0, p = a - 1;
                for(let f = 0; f < c.length; f++){
                    const m = (f + 1) % c.length, y = r(c[f].x, c[f].y, 0), x = r(c[m].x, c[m].y, 0), _ = r(c[f].x, c[f].y, n), g = r(c[m].x, c[m].y, n), l = u ? `side_${f}` : `hole_${p}_side_${f}`, b = o.get(l) ?? "", h = o.get("bottom") ?? "", I = o.get("top") ?? "", S = u ? `edge_bottom_${f}` : `edge_hole_${p}_bottom_${f}`, k = u ? `edge_top_${f}` : `edge_hole_${p}_top_${f}`, w = u ? `edge_vertical_${f}` : `edge_hole_${p}_vertical_${f}`;
                    s.push(this._makeEdge(i, S, [
                        h,
                        b
                    ], y, x), this._makeEdge(i, k, [
                        I,
                        b
                    ], _, g), this._makeEdge(i, w, [
                        b,
                        ""
                    ], y, _));
                }
            }
            return s;
        }
        _makeEdge(t, r, n, i, o) {
            return {
                id: N(),
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
            let a = 0, d = 0, c = 0, u = 0, p = 0, f = 0, m = 0;
            const y = t.indexCount / 3;
            for(let _ = 0; _ < y; _++){
                const g = t.firstIndex + _ * 3, l = s[g], b = s[g + 1], h = s[g + 2], I = [
                    n[l * 3],
                    n[l * 3 + 1],
                    n[l * 3 + 2]
                ], S = [
                    n[b * 3],
                    n[b * 3 + 1],
                    n[b * 3 + 2]
                ], k = [
                    n[h * 3],
                    n[h * 3 + 1],
                    n[h * 3 + 2]
                ], w = (I[0] + S[0] + k[0]) / 3, F = (I[1] + S[1] + k[1]) / 3, v = (I[2] + S[2] + k[2]) / 3, E = [
                    S[0] - I[0],
                    S[1] - I[1],
                    S[2] - I[2]
                ], C = [
                    k[0] - I[0],
                    k[1] - I[1],
                    k[2] - I[2]
                ], R = Vt(E, C), O = ra(R) * .5;
                a += w * O, d += F * O, c += v * O, u += R[0], p += R[1], f += R[2], m += O;
            }
            m > 0 && (a /= m, d /= m, c /= m);
            const x = He([
                u,
                p,
                f
            ]);
            return {
                centroid: [
                    a,
                    d,
                    c
                ],
                normal: x,
                area: m
            };
        }
        _computePlane(t, r) {
            const n = tu(t), i = He(Vt(t, n));
            return {
                origin: r,
                normal: t,
                uAxis: n,
                vAxis: i
            };
        }
        _normalize(t) {
            return He(t);
        }
        _rotateAroundAxis(t, r, n, i) {
            const o = [
                t[0] - r[0],
                t[1] - r[1],
                t[2] - r[2]
            ], s = n, a = Math.cos(i), d = Math.sin(i), c = o[0] * s[0] + o[1] * s[1] + o[2] * s[2], u = [
                s[1] * o[2] - s[2] * o[1],
                s[2] * o[0] - s[0] * o[2],
                s[0] * o[1] - s[1] * o[0]
            ], p = [
                o[0] * a + u[0] * d + s[0] * c * (1 - a),
                o[1] * a + u[1] * d + s[1] * c * (1 - a),
                o[2] * a + u[2] * d + s[2] * c * (1 - a)
            ];
            return [
                p[0] + r[0],
                p[1] + r[1],
                p[2] + r[2]
            ];
        }
        _accumulateNormals(t, r, n) {
            for(let i = 0; i < r.length; i += 3){
                const o = r[i], s = r[i + 1], a = r[i + 2], d = [
                    t[o * 3],
                    t[o * 3 + 1],
                    t[o * 3 + 2]
                ], c = [
                    t[s * 3],
                    t[s * 3 + 1],
                    t[s * 3 + 2]
                ], u = [
                    t[a * 3],
                    t[a * 3 + 1],
                    t[a * 3 + 2]
                ], p = He(Vt([
                    c[0] - d[0],
                    c[1] - d[1],
                    c[2] - d[2]
                ], [
                    u[0] - d[0],
                    u[1] - d[1],
                    u[2] - d[2]
                ]));
                for (const f of [
                    o,
                    s,
                    a
                ])n[f * 3] += p[0], n[f * 3 + 1] += p[1], n[f * 3 + 2] += p[2];
            }
            for(let i = 0; i < n.length; i += 3){
                const o = He([
                    n[i],
                    n[i + 1],
                    n[i + 2]
                ]);
                n[i] = o[0], n[i + 1] = o[1], n[i + 2] = o[2];
            }
        }
    };
    function Vt(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function ra(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    }
    function He(e) {
        const t = ra(e);
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
    function tu(e) {
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
        ], He(Vt(e, r));
    }
    pn = Ws;
    class Dt extends Error {
        code;
        featureType;
        issues;
        constructor(t, r, n, i = []){
            super(n), this.name = "FeatureDefinitionError", this.code = t, this.featureType = r, this.issues = i;
        }
    }
    function ru(e) {
        return Object.freeze({
            ...e
        });
    }
    function nu(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t,
                enumValues: t.enumValues ? Object.freeze([
                    ...t.enumValues
                ]) : void 0
            })));
    }
    function iu(e) {
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
    function Hr(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t
            })));
    }
    function Xo(e) {
        return Object.freeze([
            ...new Set(e.filter((t)=>t.length > 0))
        ]);
    }
    class Ft {
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
                fields: nu(t.parameterSchema)
            }), n = Zc(t.referenceSchema), i = [
                ...r.fields.map((o)=>o.key),
                ...n.fields.map((o)=>o.key)
            ];
            if (new Set(i).size !== i.length) throw new Error(`Feature definition ${t.type} has duplicate schema keys`);
            this.type = t.type, this.metadata = Object.freeze({
                ...t.metadata,
                typeId: t.type,
                category: t.capabilities.category
            }), this.schemaVersion = t.schemaVersion, this.capabilities = ru(t.capabilities), this.parameterSchema = r, this.referenceSchema = n, this.codec = Object.freeze(t.codec), this.parameters = Object.freeze([
                ...n.fields.map((o)=>Object.freeze({
                        key: o.key,
                        kind: iu(o.kind),
                        required: o.required
                    })),
                ...r.fields
            ]);
        }
        createDraft(t) {
            return this.createTypedDraft(t);
        }
        draftFromEnvelope(t, r) {
            if (t.typeId !== this.metadata.typeId) throw new Dt("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            const n = this.codec.decode(Xc(t));
            if (!this.isTypedDraft(n)) throw new Dt("invalid-draft", this.type, `Feature codec ${this.type} returned an invalid draft`);
            return this.normalizeTypedDraft(n, r);
        }
        normalizeDraft(t, r) {
            if (!this.isTypedDraft(t)) throw new Dt("invalid-draft", this.type, `Invalid ${this.type} draft shape`);
            return this.normalizeTypedDraft(t, r);
        }
        validateDraft(t, r) {
            return this.isTypedDraft(t) ? Hr(this.validateTypedDraft(this.normalizeTypedDraft(t, r), r)) : Hr([
                {
                    severity: "error",
                    code: "invalid-draft",
                    message: `Invalid ${this.type} draft shape`
                }
            ]);
        }
        collectDependencies(t, r) {
            const n = this.normalizeDraft(t, r);
            return Xo(this.collectTypedDependencies(n, r));
        }
        draftFromFeature(t, r) {
            const n = this.requireFeatureType(t);
            return this.createTypedEditDraft(n, r);
        }
        prepareDraft(t, r) {
            if (!this.isTypedDraft(t)) return Object.freeze({
                draft: t,
                dependencyIds: Object.freeze([]),
                issues: Hr([
                    {
                        severity: "error",
                        code: "invalid-draft",
                        message: `Invalid ${this.type} draft shape`
                    }
                ])
            });
            const n = this.normalizeTypedDraft(t, r), i = Hr(this.validateTypedDraft(n, r)), o = Xo(this.collectTypedDependencies(n, r));
            return Object.freeze({
                draft: n,
                dependencyIds: o,
                issues: i
            });
        }
        buildEnvelope(t, r, n) {
            const i = this.requirePreparedDraft(r, n), o = this.codec.encode(i.draft);
            return or({
                ...t,
                typeId: this.metadata.typeId,
                parameters: o.parameters,
                references: o.references
            });
        }
        reviseEnvelope(t, r, n) {
            if (t.typeId !== this.metadata.typeId) throw new Dt("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            return this.buildEnvelope({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                timestamp: t.timestamp
            }, r, n);
        }
        createBuildSpec(t, r) {
            const n = this.draftFromEnvelope(t, r), i = this.requirePreparedDraft(n, r), o = this.codec.encode(i.draft);
            return Rc({
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
            if (t.type !== this.type) throw new Dt("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.type}`);
            return t;
        }
        requirePreparedDraft(t, r) {
            const n = this.prepareDraft(t, r), i = n.issues.filter((o)=>o.severity === "error");
            if (i.length > 0) {
                const o = i.some((s)=>s.code === "invalid-draft") ? "invalid-draft" : "draft-validation-failed";
                throw new Dt(o, this.type, `Cannot materialize invalid ${this.type} draft`, n.issues);
            }
            return n;
        }
    }
    class Lr extends Error {
        code;
        featureType;
        missingTypes;
        constructor(t, r, n = {}){
            super(r), this.name = "FeatureDefinitionRegistryError", this.code = t, this.featureType = n.featureType, this.missingTypes = Object.freeze([
                ...n.missingTypes ?? []
            ]);
        }
    }
    ou = class {
        definitions = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new Lr("registry-frozen", "Feature definition registry is frozen");
            if (this.definitions.has(t.type)) throw new Lr("duplicate-definition", `Duplicate feature definition: ${t.type}`, {
                featureType: t.type
            });
            return this.definitions.set(t.type, t), this;
        }
        get(t) {
            return this.definitions.get(t);
        }
        require(t) {
            const r = this.get(t);
            if (!r) throw new Lr("unknown-definition", `Unknown feature definition: ${t}`, {
                featureType: t
            });
            return r;
        }
        list() {
            return Object.freeze(pn.flatMap((t)=>{
                const r = this.definitions.get(t);
                return r ? [
                    r
                ] : [];
            }));
        }
        missingTypes() {
            return Object.freeze(pn.filter((t)=>!this.definitions.has(t)));
        }
        assertComplete() {
            const t = this.missingTypes();
            if (t.length > 0) throw new Lr("incomplete-registry", `Feature definition registry is missing: ${t.join(", ")}`, {
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
    function Y(e, t) {
        return {
            id: e,
            name: t.name,
            type: t.type,
            suppressed: t.suppressed ?? !1,
            dependencyIds: t.dependencyIds ? [
                ...t.dependencyIds
            ] : [],
            timestamp: Date.now()
        };
    }
    function Mr(e, t) {
        if (t.length !== 3 || t.some((r)=>!Number.isFinite(r))) throw new Error(`${e} must be a finite 3D vector`);
    }
    function na(e) {
        if (Mr("Primitive direction", e), Math.hypot(...e) <= 1e-9) throw new Error("Primitive direction must be non-zero");
    }
    function Dn(e) {
        return Y(e.id ?? N(), {
            name: e.name,
            type: e.type,
            dependencyIds: e.dependencyIds,
            suppressed: e.suppressed
        });
    }
    function Tn(e) {
        if (e !== "add" && e !== "cut") throw new Error("Primitive mode must be add or cut");
        return e;
    }
    su = function(e) {
        if (!(e.length > 0) || !(e.width > 0) || !(e.height > 0)) throw new Error("Box dimensions must be positive");
        return Mr("Box origin", e.origin), {
            ...Dn({
                ...e,
                type: "box"
            }),
            type: "box",
            mode: Tn(e.mode),
            origin: [
                ...e.origin
            ],
            length: e.length,
            width: e.width,
            height: e.height,
            solidId: null
        };
    };
    ia = function(e) {
        if (!(e.radius > 0) || !(e.height > 0)) throw new Error("Cylinder radius and height must be positive");
        return Mr("Cylinder origin", e.origin), na(e.direction), {
            ...Dn({
                ...e,
                type: "cylinder"
            }),
            type: "cylinder",
            mode: Tn(e.mode),
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
    au = function(e) {
        if (!(e.bottomRadius > 0) || !(e.topRadius >= 0) || !(e.height > 0) || e.bottomRadius === 0 && e.topRadius === 0) throw new Error("Cone radii and height are invalid");
        return Mr("Cone origin", e.origin), na(e.direction), {
            ...Dn({
                ...e,
                type: "cone"
            }),
            type: "cone",
            mode: Tn(e.mode),
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
    du = function(e) {
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Sphere radius must be positive");
        return Mr("Sphere center", e.center), {
            ...Dn({
                ...e,
                type: "sphere"
            }),
            type: "sphere",
            mode: Tn(e.mode),
            center: [
                ...e.center
            ],
            radius: e.radius,
            solidId: null
        };
    };
    function cu(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function oa(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Qr(e) {
        return [
            ...e
        ];
    }
    function uu(e) {
        const { mode: t, origin: r, length: n, width: i, height: o } = e.parameters;
        if (t !== "add" && t !== "cut" || !oa(r) || typeof n != "number" || typeof i != "number" || typeof o != "number") throw new Ge("box", "invalid parameter payload");
        return {
            mode: t,
            origin: Qr(r),
            length: n,
            width: i,
            height: o
        };
    }
    const lu = Object.freeze({
        encode: (e)=>St("box", {
                mode: e.mode,
                origin: e.origin,
                length: e.length,
                width: e.width,
                height: e.height
            }, {}),
        decode: uu
    });
    class fu extends Ft {
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
                codec: lu
            });
        }
        isTypedDraft(t) {
            return cu(t) ? (t.mode === "add" || t.mode === "cut") && oa(t.origin) && typeof t.length == "number" && typeof t.width == "number" && typeof t.height == "number" : !1;
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
                origin: Qr(t.origin),
                length: t.length,
                width: t.width,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: Qr(t.origin)
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
            return t.mode === "cut" && !pu(r) && n.push({
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
            return su({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: Qr(r.origin)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function pu(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function hu(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function hn(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function rt(e) {
        return [
            ...e
        ];
    }
    const mu = Object.freeze({
        encode: (e)=>St("cone", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                bottomRadius: e.bottomRadius,
                topRadius: e.topRadius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, bottomRadius: i, topRadius: o, height: s } = e.parameters;
            if (t !== "add" && t !== "cut" || !hn(r) || !hn(n) || typeof i != "number" || typeof o != "number" || typeof s != "number") throw new Ge("cone", "invalid parameter payload");
            return {
                mode: t,
                origin: rt(r),
                direction: rt(n),
                bottomRadius: i,
                topRadius: o,
                height: s
            };
        }
    });
    class yu extends Ft {
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
                codec: mu
            });
        }
        isTypedDraft(t) {
            return hu(t) ? (t.mode === "add" || t.mode === "cut") && hn(t.origin) && hn(t.direction) && typeof t.bottomRadius == "number" && typeof t.topRadius == "number" && typeof t.height == "number" : !1;
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
                origin: rt(t.origin),
                direction: rt(t.direction),
                bottomRadius: t.bottomRadius,
                topRadius: t.topRadius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: rt(t.origin),
                direction: rt(t.direction)
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
            }), t.mode === "cut" && !gu(r) && n.push({
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
            return au({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: rt(r.origin),
                direction: rt(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function gu(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function Iu(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function mn(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function nt(e) {
        return [
            ...e
        ];
    }
    const bu = Object.freeze({
        encode: (e)=>St("cylinder", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                radius: e.radius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, radius: i, height: o } = e.parameters;
            if (t !== "add" && t !== "cut" || !mn(r) || !mn(n) || typeof i != "number" || typeof o != "number") throw new Ge("cylinder", "invalid parameter payload");
            return {
                mode: t,
                origin: nt(r),
                direction: nt(n),
                radius: i,
                height: o
            };
        }
    });
    class wu extends Ft {
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
                codec: bu
            });
        }
        isTypedDraft(t) {
            return Iu(t) ? (t.mode === "add" || t.mode === "cut") && mn(t.origin) && mn(t.direction) && typeof t.radius == "number" && typeof t.height == "number" : !1;
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
                origin: nt(t.origin),
                direction: nt(t.direction),
                radius: t.radius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: nt(t.origin),
                direction: nt(t.direction)
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
            return t.mode === "cut" && !ku(r) && n.push({
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
            return ia({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: nt(r.origin),
                direction: nt(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function ku(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    xu = {
        propagateDraftSurfaces: !0,
        preserveInlyingRounds: !0,
        recreateAttachedRounds: !0,
        extendIntersectSurfaces: !1
    };
    function sa(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r)) || Math.hypot(...e) <= 1e-9) throw new Error(`${t} must be a finite non-zero vector`);
    }
    function ii(e, t) {
        if (!Number.isFinite(e) || e <= 0 || e >= Math.PI / 2) throw new Error(`${t} must be greater than 0 and less than 90 degrees`);
    }
    function io(e) {
        if (e.kind === "world_plane") sa(e.normal, "Draft plane normal");
        else {
            if (e.kind === "datum_plane" && !e.featureId) throw new Error("Draft datum plane reference is empty");
            if (e.kind === "face" && !e.selector.featureId) throw new Error("Draft face reference is empty");
        }
    }
    function Su(e) {
        if (e.kind === "edge_chain") {
            if (!e.selectors.length) throw new Error("Draft edge-chain hinge is empty");
            return;
        }
        io(e);
    }
    function Fu(e) {
        if (e.kind === "world") sa(e.direction, "Draft pull direction");
        else {
            if (e.kind === "datum_axis" && !e.featureId) throw new Error("Draft axis reference is empty");
            if (e.kind === "plane_normal") io(e.plane);
            else if (e.kind === "edge" && !e.selector.featureId) throw new Error("Draft direction edge is empty");
        }
    }
    Pi = function(e) {
        if (!e.baseFeatureId) throw new Error("Draft requires a base feature");
        if (!e.draftFaces.length) throw new Error("Draft requires at least one draft face");
        if (e.hinges.length < 1 || e.hinges.length > 2) throw new Error("Draft requires one or two hinges");
        if (e.hinges.forEach(Su), Fu(e.direction), ii(e.angle, "Draft angle"), ii(e.secondSideAngle, "Draft second-side angle"), e.split.kind === "reference" && io(e.split.reference), e.split.kind === "none" && e.hinges.length > 1) throw new Error("A second Draft hinge requires a split definition");
        const t = e.variableAngles.map((r)=>structuredClone(r)).sort((r, n)=>r.location - n.location);
        for (const r of t){
            if (!r.id) throw new Error("Draft angle control id is empty");
            if (!Number.isFinite(r.location) || r.location < 0 || r.location > 1) throw new Error("Draft angle control location must be between 0 and 1");
            ii(r.angle, "Draft variable angle");
        }
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "draft",
                dependencyIds: e.dependencyIds,
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
            solidId: null
        };
    };
    const aa = "result";
    function wr(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
    }
    function da(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function _u(e, t) {
        return e === void 0 ? void 0 : da(e, t);
    }
    function vu(e, t) {
        if (e !== void 0) {
            if (!Array.isArray(e)) throw new Error(`${t} must be an array`);
            return Object.freeze(e.map((r, n)=>da(r, `${t}[${n}]`)));
        }
    }
    function Eu(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function ca(e, t) {
        if (e !== "face" && e !== "edge" && e !== "vertex") throw new Error(`${t} must be face, edge, or vertex`);
    }
    function $i(e) {
        wr(e.producerFeatureId, "producerFeatureId"), wr(e.outputKey, "outputKey"), ca(e.subshapeKind, "subshapeKind"), wr(e.semanticId, "semanticId");
        const t = _u(e.hintCentroid, "hintCentroid"), r = vu(e.samplePoints, "samplePoints");
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
    function Au(e, t) {
        if (!Eu(e)) throw new Error("Topology reference must be an object");
        if (Object.hasOwn(e, "producerFeatureId") || Object.hasOwn(e, "outputKey") || Object.hasOwn(e, "subshapeKind") || Object.hasOwn(e, "semanticId")) {
            if (ca(e.subshapeKind, "subshapeKind"), e.subshapeKind !== t) throw new Error(`Expected ${t} topology reference, received ${e.subshapeKind}`);
            return Object.freeze({
                reference: $i({
                    producerFeatureId: e.producerFeatureId,
                    outputKey: e.outputKey,
                    subshapeKind: e.subshapeKind,
                    semanticId: e.semanticId,
                    hintCentroid: e.hintCentroid,
                    samplePoints: e.samplePoints
                })
            });
        }
        wr(e.featureId, "featureId"), wr(e.role, "role");
        let n;
        if (e.occEdgeOrdinal !== void 0) {
            if (t !== "edge" || typeof e.occEdgeOrdinal != "number" || !Number.isSafeInteger(e.occEdgeOrdinal) || e.occEdgeOrdinal < 0) throw new Error("occEdgeOrdinal must be a non-negative edge ordinal");
            n = e.occEdgeOrdinal;
        }
        return Object.freeze({
            reference: $i({
                producerFeatureId: e.featureId,
                outputKey: aa,
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
    function ua(e) {
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
    function yn(e, t) {
        if (e.subshapeKind && e.subshapeKind !== t) throw new Error(`Expected ${t} selector, received ${e.subshapeKind}`);
        return $i({
            producerFeatureId: e.featureId,
            outputKey: e.outputKey ?? aa,
            subshapeKind: t,
            semanticId: e.role,
            hintCentroid: e.hintCentroid,
            samplePoints: e.samplePoints
        });
    }
    function Dr(e, t) {
        const r = Au(e, t), n = r.reference;
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
    mg = function(e, t, r) {
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
    yg = function(e, t, r, n) {
        return r.resolve({
            featureId: e,
            role: t,
            hintCentroid: n
        });
    };
    function Ur(e, t) {
        return `${e}:${t}`;
    }
    function Nt(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return Math.sqrt(r * r + n * n + i * i);
    }
    function Qo(e) {
        return e.midpoint ? e.midpoint : [
            (e.startVertex[0] + e.endVertex[0]) / 2,
            (e.startVertex[1] + e.endVertex[1]) / 2,
            (e.startVertex[2] + e.endVertex[2]) / 2
        ];
    }
    la = class {
        _byKey = new Map;
        _edgesByKey = new Map;
        _allFaces = [];
        _allEdges = [];
        static fromSolid(t, r = []) {
            const n = new la;
            for (const i of t){
                const o = Ur(i.provenance.featureId, i.provenance.role), s = n._byKey.get(o) ?? [];
                s.push(i), n._byKey.set(o, s), n._allFaces.push(i);
            }
            for (const i of r){
                const o = Ur(i.provenance.featureId, i.provenance.role), s = n._edgesByKey.get(o) ?? [];
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
            const r = Ur(t.featureId, t.role), n = this._byKey.get(r) ?? [];
            if (n.length === 0) return {
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
                    const d = Nt(t.hintCentroid, a.centroid);
                    d < o && (o = d, i = a);
                }
                if (n.filter((a)=>a.centroid && Math.abs(Nt(t.hintCentroid, a.centroid) - o) < 1e-6).length === 1) return {
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
            const r = Ur(t.featureId, t.role), n = this._edgesByKey.get(r) ?? [];
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
                    const d = Qo(a);
                    if (!d) continue;
                    const c = Nt(t.hintCentroid, d);
                    c < o && (o = c, i = a);
                }
                if (n.filter((a)=>{
                    const d = Qo(a);
                    return d != null && Math.abs(Nt(t.hintCentroid, d) - o) < 1e-6;
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
                const d = Ou(r, a.startVertex, a.endVertex);
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
    function Ou(e, t, r) {
        const n = [
            r[0] - t[0],
            r[1] - t[1],
            r[2] - t[2]
        ], i = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], o = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
        if (o < 1e-12) return Nt(e, t);
        let s = (i[0] * n[0] + i[1] * n[1] + i[2] * n[2]) / o;
        s = Math.max(0, Math.min(1, s));
        const a = [
            t[0] + n[0] * s,
            t[1] + n[1] * s,
            t[2] + n[2] * s
        ];
        return Nt(e, a);
    }
    function Pe(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function er(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Bn(e) {
        return Pe(e) && typeof e.featureId == "string" && typeof e.role == "string";
    }
    function oo(e) {
        return Pe(e) ? e.kind === "world_plane" ? er(e.origin) && er(e.normal) : e.kind === "datum_plane" ? typeof e.featureId == "string" : e.kind === "face" ? Bn(e.selector) : !1 : !1;
    }
    function Pu(e) {
        return Pe(e) ? e.kind === "edge_chain" ? Array.isArray(e.selectors) && e.selectors.every(Bn) : oo(e) : !1;
    }
    function $u(e) {
        return Pe(e) ? e.kind === "world" ? er(e.direction) : e.kind === "datum_axis" ? typeof e.featureId == "string" : e.kind === "plane_normal" ? oo(e.plane) : e.kind === "edge" ? Bn(e.selector) : !1 : !1;
    }
    const Ri = new Set([
        "dependent",
        "independent",
        "first_only",
        "second_only"
    ]);
    function Ru(e) {
        return Pe(e) ? e.kind === "none" ? !0 : e.kind === "hinge" ? Ri.has(e.sideMode) : e.kind === "reference" && Ri.has(e.sideMode) && oo(e.reference) : !1;
    }
    function Cu(e) {
        return Pe(e) && typeof e.id == "string" && typeof e.location == "number" && typeof e.angle == "number" && typeof e.reversed == "boolean";
    }
    function Mu(e) {
        return Pe(e) && typeof e.propagateDraftSurfaces == "boolean" && typeof e.preserveInlyingRounds == "boolean" && typeof e.recreateAttachedRounds == "boolean" && typeof e.extendIntersectSurfaces == "boolean";
    }
    function fa(e) {
        return Pe(e) && typeof e.baseFeatureId == "string" && Array.isArray(e.draftFaces) && e.draftFaces.every(Bn) && Array.isArray(e.hinges) && e.hinges.every(Pu) && $u(e.direction) && typeof e.reverseDirection == "boolean" && typeof e.angle == "number" && typeof e.reverseAngle == "boolean" && Ru(e.split) && Array.isArray(e.variableAngles) && e.variableAngles.every(Cu) && typeof e.secondSideAngle == "number" && typeof e.reverseSecondSideAngle == "boolean" && Mu(e.options);
    }
    function pa(e) {
        return yn(e, "face");
    }
    function ha(e) {
        return yn(e, "edge");
    }
    function so(e) {
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
                    selector: pa(e.selector)
                };
        }
    }
    function Du(e) {
        return e.kind === "edge_chain" ? {
            kind: e.kind,
            selectors: e.selectors.map(ha)
        } : so(e);
    }
    function Tu(e) {
        switch(e.kind){
            case "world":
            case "datum_axis":
                return structuredClone(e);
            case "plane_normal":
                return {
                    kind: e.kind,
                    plane: so(e.plane)
                };
            case "edge":
                return {
                    kind: e.kind,
                    selector: ha(e.selector)
                };
        }
    }
    function Bu(e) {
        return e.kind !== "reference" ? structuredClone(e) : {
            kind: e.kind,
            sideMode: e.sideMode,
            reference: so(e.reference)
        };
    }
    function ao(e) {
        if (!Pe(e)) throw new Error("invalid Draft plane reference");
        if (e.kind === "world_plane" && er(e.origin) && er(e.normal)) return {
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
            selector: Dr(e.selector, "face")
        };
        throw new Error("invalid Draft plane reference");
    }
    function ju(e) {
        if (Pe(e) && e.kind === "edge_chain") {
            if (!Array.isArray(e.selectors)) throw new Error("invalid Draft edge chain");
            return {
                kind: "edge_chain",
                selectors: e.selectors.map((t)=>Dr(t, "edge"))
            };
        }
        return ao(e);
    }
    function zu(e) {
        if (!Pe(e)) throw new Error("invalid Draft direction");
        if (e.kind === "world" && er(e.direction)) return {
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
            plane: ao(e.plane)
        };
        if (e.kind === "edge") return {
            kind: "edge",
            selector: Dr(e.selector, "edge")
        };
        throw new Error("invalid Draft direction");
    }
    function Vu(e) {
        if (!Pe(e)) throw new Error("invalid Draft split");
        if (e.kind === "none") return {
            kind: "none"
        };
        if ((e.kind === "hinge" || e.kind === "reference") && Ri.has(e.sideMode)) return e.kind === "hinge" ? {
            kind: "hinge",
            sideMode: e.sideMode
        } : {
            kind: "reference",
            sideMode: e.sideMode,
            reference: ao(e.reference)
        };
        throw new Error("invalid Draft split");
    }
    function Nu(e) {
        try {
            const t = {
                baseFeatureId: e.references.baseFeatureId,
                draftFaces: Array.isArray(e.references.draftFaces) ? e.references.draftFaces.map((r)=>Dr(r, "face")) : e.references.draftFaces,
                hinges: Array.isArray(e.references.hinges) ? e.references.hinges.map(ju) : e.references.hinges,
                direction: zu(e.references.direction),
                split: Vu(e.references.split),
                reverseDirection: e.parameters.reverseDirection,
                angle: e.parameters.angle,
                reverseAngle: e.parameters.reverseAngle,
                variableAngles: e.parameters.variableAngles,
                secondSideAngle: e.parameters.secondSideAngle,
                reverseSecondSideAngle: e.parameters.reverseSecondSideAngle,
                options: e.parameters.options
            };
            if (!fa(t)) throw new Error("invalid Draft payload shape");
            return structuredClone(t);
        } catch (t) {
            throw new Ge("draft", t instanceof Error ? t.message : "invalid payload");
        }
    }
    const Ku = Object.freeze({
        encode (e) {
            return St("draft", {
                reverseDirection: e.reverseDirection,
                angle: e.angle,
                reverseAngle: e.reverseAngle,
                variableAngles: e.variableAngles,
                secondSideAngle: e.secondSideAngle,
                reverseSecondSideAngle: e.reverseSecondSideAngle,
                options: e.options
            }, {
                baseFeatureId: e.baseFeatureId,
                draftFaces: e.draftFaces.map(pa),
                hinges: e.hinges.map(Du),
                direction: Tu(e.direction),
                split: Bu(e.split)
            });
        },
        decode: Nu
    });
    function co(e) {
        return e.kind === "world_plane" ? [] : e.kind === "datum_plane" ? [
            e.featureId
        ] : [
            e.selector.featureId
        ];
    }
    function qu(e) {
        return e.kind === "edge_chain" ? e.selectors.map((t)=>t.featureId) : co(e);
    }
    function Hu(e) {
        switch(e.kind){
            case "world":
                return [];
            case "datum_axis":
                return [
                    e.featureId
                ];
            case "plane_normal":
                return co(e.plane);
            case "edge":
                return [
                    e.selector.featureId
                ];
        }
    }
    function Lu(e) {
        return e.kind === "reference" ? co(e.reference) : [];
    }
    function es(e) {
        return [
            e.baseFeatureId,
            ...e.draftFaces.map((t)=>t.featureId),
            ...e.hinges.flatMap(qu),
            ...Hu(e.direction),
            ...Lu(e.split)
        ];
    }
    function Uu(e, t) {
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
    class Wu extends Ft {
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
                codec: Ku
            });
        }
        isTypedDraft(t) {
            return fa(t);
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
                options: structuredClone(xu)
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
            const n = Uu(es(t), r);
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
                Pi({
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
            return es(t);
        }
        buildTypedFeature(t, r, n, i) {
            return Pi({
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
    ma = function(e) {
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "chamfer",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "chamfer",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(ua),
            distance: e.distance,
            secondDistance: e.secondDistance,
            solidId: null
        };
    };
    ya = function(e) {
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "fillet",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "fillet",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(ua),
            radius: e.radius,
            solidId: null
        };
    };
    Gu = function(e) {
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "thickness",
                dependencyIds: e.dependencyIds,
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
    function mt(e) {
        return e !== null && typeof e == "object" && !Array.isArray(e);
    }
    function gn(e) {
        if (Array.isArray(e)) return e.map(gn);
        if (!mt(e)) return structuredClone(e);
        const t = Object.getPrototypeOf(e);
        return t !== Object.prototype && t !== null ? structuredClone(e) : Object.fromEntries(Object.entries(e).filter(([r, n])=>r !== "occEdgeOrdinal" && n !== void 0).map(([r, n])=>[
                r,
                gn(n)
            ]));
    }
    function Yu(e) {
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
    function ts(e, t) {
        const r = {};
        for (const n of t)Object.hasOwn(e, n) && e[n] !== void 0 && (r[n] = gn(e[n]));
        return r;
    }
    function uo(e) {
        const t = gn(e);
        return Object.freeze(t);
    }
    function Ci(e, t, r) {
        return !mt(e) || Object.keys(e).some((n)=>!t.all.has(n)) || !t.required.every((n)=>Object.hasOwn(e, n) && e[n] !== void 0 && e[n] !== null && e[n] !== "") ? !1 : r.parameterSchema.every((n)=>{
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
                    return typeof i == "string" && i.length > 0 || mt(i);
                case "feature_list":
                    return Array.isArray(i) && i.every((o)=>typeof o == "string" && o.length > 0 || mt(o));
                case "topology":
                    return mt(i);
                case "topology_list":
                    return Array.isArray(i) && i.every(mt);
            }
        });
    }
    function Zu(e, t) {
        return Object.freeze({
            encode (r) {
                if (!Ci(r, t, e)) throw new Ge(e.type, "invalid structured draft payload");
                return St(e.type, ts(r, t.parameter), ts(r, t.reference));
            },
            decode (r) {
                if (Object.keys(r.parameters).some((i)=>!t.parameter.includes(i)) || Object.keys(r.references).some((i)=>!t.reference.includes(i))) throw new Ge(e.type, "payload field is on the wrong plane");
                const n = uo({
                    ...r.parameters,
                    ...r.references
                });
                if (!Ci(n, t, e)) throw new Ge(e.type, "invalid structured payload fields");
                return n;
            }
        });
    }
    class re extends Ft {
        definitionOptions;
        payloadKeys;
        constructor(t){
            const r = Yu(t);
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
                codec: Zu(t, r)
            }), this.definitionOptions = t, this.payloadKeys = r;
        }
        isTypedDraft(t) {
            return Ci(t, this.payloadKeys, this.definitionOptions);
        }
        createTypedDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.createDraft(t));
        }
        createTypedEditDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.draftFromFeature(t));
        }
        normalizeTypedDraft(t) {
            return uo(t);
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
    function ne(e) {
        const { id: t, name: r, type: n, suppressed: i, dependencyIds: o, timestamp: s, ...a } = e;
        return delete a.solidId, delete a.plane, uo(a);
    }
    function de(...e) {
        const t = [], r = (n)=>{
            if (typeof n == "string") {
                n.trim() && t.push(n);
                return;
            }
            if (Array.isArray(n)) {
                n.forEach(r);
                return;
            }
            if (mt(n)) for (const [i, o] of Object.entries(n))(i === "featureId" || i.endsWith("FeatureId") || i.endsWith("DatumId") || i === "sketchId" || i.endsWith("SketchId") || i.endsWith("FeatureIds") || i.endsWith("SketchIds") || typeof o == "object") && r(o);
        };
        return e.forEach(r), Object.freeze([
            ...new Set(t)
        ]);
    }
    function ie(e, t, r, n) {
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
    const lo = Object.freeze({
        category: "dress_up",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function fo(e) {
        return e.priorSolidFeatureId ?? "";
    }
    function po(e, t) {
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
    function In(e, t, r = !1) {
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
    class Ju extends re {
        constructor(){
            super({
                type: "fillet",
                labelKey: "partDesign.feature.fillet",
                iconKey: "part-design-fillet",
                sortOrder: 600,
                capabilities: lo,
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
                        baseFeatureId: fo(t),
                        edgeSelectors: [],
                        radius: 1
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...In(t, "radius"),
                        ...po(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>ie(t, r, n, ya)
            });
        }
    }
    class Xu extends re {
        constructor(){
            super({
                type: "chamfer",
                labelKey: "partDesign.feature.chamfer",
                iconKey: "part-design-chamfer",
                sortOrder: 610,
                capabilities: lo,
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
                        baseFeatureId: fo(t),
                        edgeSelectors: [],
                        distance: 1
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...In(t, "distance"),
                        ...In(t, "secondDistance", !0),
                        ...po(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>ie(t, r, n, ma)
            });
        }
    }
    class Qu extends re {
        constructor(){
            super({
                type: "thickness",
                labelKey: "partDesign.feature.thickness",
                iconKey: "part-design-thickness",
                sortOrder: 620,
                capabilities: lo,
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
                        baseFeatureId: fo(t),
                        removedFaceSelectors: [],
                        thickness: 1,
                        inward: !1
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.removedFaceSelectors),
                validate: (t)=>[
                        ...In(t, "thickness"),
                        ...po(t, "removedFaceSelectors")
                    ],
                build: (t, r, n)=>ie(t, r, n, Gu)
            });
        }
    }
    function ga(e, t = "depth") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid extrude ${t}: expected positive finite number`);
        return e;
    }
    function Ia(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw new Error("Invalid extrude secondDepth: expected non-negative finite number");
        return e;
    }
    function ba(e) {
        return Number.isFinite(e.startOffset) && Number.isFinite(e.endOffset);
    }
    function jn(e, t) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new Error("Invalid extrude from: expected a finite number");
        if (typeof t != "number" || !Number.isFinite(t)) throw new Error("Invalid extrude to: expected a finite number");
        if (e === t) throw new Error("Invalid extrude from–to: start and end must differ");
        const r = Math.min(e, t), n = Math.max(e, t);
        return {
            startOffset: r,
            endOffset: n,
            span: n - r
        };
    }
    function el(e) {
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
    wa = function(e) {
        if (ba(e)) return jn(e.startOffset, e.endOffset);
        const t = ga(e.depth), r = Ia(e.secondDepth);
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
    ho = function(e) {
        if (e.mode !== "add" && e.mode !== "cut") throw new Error(`Invalid extrude mode: ${String(e.mode)}`);
        const t = ba(e) ? jn(e.startOffset, e.endOffset) : wa({
            depth: ga(e.depth),
            secondDepth: Ia(e.secondDepth ?? 0),
            symmetric: e.symmetric ?? !1,
            mode: e.mode
        }), r = el(t);
        return {
            ...Y(e.id ?? N(), {
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
            ...e.fusePrior === !1 ? {
                fusePrior: !1
            } : {},
            solidId: null
        };
    };
    function Mi(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function oi(e) {
        return structuredClone(e);
    }
    function ka(e) {
        return e === void 0 || typeof e == "boolean";
    }
    function tl(e) {
        if (!Number.isFinite(e.startOffset) || !Number.isFinite(e.endOffset) || e.startOffset === e.endOffset) return e;
        const t = jn(e.startOffset, e.endOffset);
        return {
            ...e,
            startOffset: t.startOffset,
            endOffset: t.endOffset
        };
    }
    const rl = Object.freeze({
        encode (e) {
            return St("extrude", {
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
            if (!Mi(t) || typeof t.sketchId != "string" || typeof r != "number" || typeof n != "number" || i !== "add" && i !== "cut" || !ka(o)) throw new Ge("extrude", "invalid parameter/reference payload");
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
    class nl extends Ft {
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
                codec: rl
            });
        }
        isTypedDraft(t) {
            return !Mi(t) || !Mi(t.sketchRef) ? !1 : typeof t.sketchRef.sketchId == "string" && typeof t.startOffset == "number" && typeof t.endOffset == "number" && (t.mode === "add" || t.mode === "cut") && ka(t.fusePrior);
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
                sketchRef: oi(t.sketchRef),
                startOffset: t.startOffset,
                endOffset: t.endOffset,
                mode: t.mode,
                ...t.fusePrior !== void 0 ? {
                    fusePrior: t.fusePrior
                } : {}
            };
        }
        normalizeTypedDraft(t) {
            const r = oi(t.sketchRef);
            return r.sketchId = r.sketchId.trim(), tl({
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
                jn(t.startOffset, t.endOffset);
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
            return ho({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                sketchRef: oi(r.sketchRef),
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
    xa = function(e) {
        if (e.targetFeatureId === e.toolFeatureId) throw new Error("Boolean target and tool must be different features");
        if (e.op !== "union" && e.op !== "cut" && e.op !== "intersect") throw new Error(`Unsupported Boolean op: ${String(e.op)}`);
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "boolean",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
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
    };
    il = function(e) {
        if (!e.baseFeatureId) throw new Error("Face Pull requires a base feature");
        if (e.faceSelectors.length === 0) throw new Error("Face Pull requires at least one planar face");
        const t = Math.hypot(...e.direction);
        if (!Number.isFinite(t) || t <= 1e-9) throw new Error("Face Pull direction is invalid");
        if (!Number.isFinite(e.distance) || e.distance <= 0) throw new Error("Face Pull distance must be positive");
        if (e.operation !== "add" && e.operation !== "cut") throw new Error("Face Pull operation is invalid");
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "face_pull",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "face_pull",
            baseFeatureId: e.baseFeatureId,
            faceSelectors: structuredClone(e.faceSelectors),
            direction: e.direction.map((r)=>r / t),
            distance: e.distance,
            operation: e.operation,
            solidId: null
        };
    };
    function ol(e, t) {
        if (!e.every(Number.isFinite)) throw new Error(`Helix ${t} must be finite`);
        if (!(Math.hypot(...e) > 0)) throw new Error(`Helix ${t} must be non-zero`);
        return [
            ...e
        ];
    }
    function sl(e) {
        if (!e.every(Number.isFinite)) throw new Error("Helix axis origin must be finite");
        return [
            ...e
        ];
    }
    zn = function(e) {
        const t = e.endRadius ?? e.radius, r = e.endPitch ?? e.pitch;
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Helix radius must be positive");
        if (!(t > 0) || !Number.isFinite(t)) throw new Error("Helix end radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Helix pitch must be positive");
        if (!(r > 0) || !Number.isFinite(r)) throw new Error("Helix end pitch must be positive");
        if (!(e.height > 0) || !Number.isFinite(e.height)) throw new Error("Helix height must be positive");
        if (e.handedness !== "right" && e.handedness !== "left") throw new Error("Helix handedness is invalid");
        if (!Number.isFinite(e.startAngle)) throw new Error("Helix start angle must be finite");
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "helix",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "helix",
            axisOrigin: sl(e.axisOrigin),
            axisDirection: ol(e.axisDirection, "axis direction"),
            radius: e.radius,
            endRadius: t,
            pitch: e.pitch,
            endPitch: r,
            height: e.height,
            handedness: e.handedness,
            startAngle: e.startAngle
        };
    };
    function Tt(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid hole ${t}: expected positive finite number`);
        return e;
    }
    function rs(e, t) {
        if (typeof e != "string" || e.length === 0) throw new Error(`Invalid hole ${t}: expected non-empty string`);
        return e;
    }
    function Bt(e) {
        return typeof e == "number" && Number.isFinite(e) && e > 0;
    }
    function al(e, t, r, n) {
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
    Sa = function(e) {
        const t = Tt(e.diameter, "diameter"), r = Tt(e.depth, "depth"), n = rs(e.sketchId, "sketchId"), i = rs(e.baseFeatureId, "baseFeatureId");
        if (e.depthMode !== "blind" && e.depthMode !== "through") throw new Error(`Invalid hole depthMode: ${String(e.depthMode)}`);
        if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink") throw new Error(`Invalid hole mode: ${String(e.mode)}`);
        const o = al(e.mode, t, r, e.depthMode);
        let s = e.counterboreDiameter, a = e.counterboreDepth, d = e.countersinkDiameter, c = e.countersinkAngleDeg;
        if (e.mode === "counterbore") {
            Bt(s) || (s = o.counterboreDiameter), Bt(a) || (a = o.counterboreDepth);
            const f = Tt(s, "counterboreDiameter"), m = Tt(a, "counterboreDepth");
            if (f <= t) throw new Error("Invalid hole counterboreDiameter: expected greater than diameter");
            if (m > r && e.depthMode === "blind") throw new Error("Invalid hole counterboreDepth: expected <= depth for blind mode");
            s = f, a = m;
        }
        if (e.mode === "countersink") {
            Bt(d) || (d = o.countersinkDiameter), Bt(c) || (c = o.countersinkAngleDeg);
            const f = Tt(d, "countersinkDiameter"), m = Tt(c, "countersinkAngleDeg");
            if (f <= t) throw new Error("Invalid hole countersinkDiameter: expected greater than diameter");
            if (m <= 1 || m >= 179) throw new Error("Invalid hole countersinkAngleDeg: expected in (1, 179)");
            d = f, c = m;
        }
        for (const f of [
            "start",
            "end"
        ]){
            const m = e[`${f}ChamferEnabled`], y = e[`${f}ChamferOffset`], x = e[`${f}ChamferAngleDeg`];
            if (m) {
                if (!Bt(y)) throw new Error(`Invalid hole ${f}ChamferOffset: expected positive finite number`);
                if (!Bt(x) || x <= 1 || x >= 179) throw new Error(`Invalid hole ${f}ChamferAngleDeg: expected in (1, 179)`);
            }
        }
        const u = e.pointIds?.filter((f)=>typeof f == "string" && f.length > 0).map((f)=>f);
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "hole",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "hole",
            baseFeatureId: i,
            sketchId: n,
            ...u && u.length > 0 ? {
                pointIds: [
                    ...u
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
                countersinkAngleDeg: c
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
            solidId: null
        };
    };
    dl = function(e) {
        if (e.sectionSketchIds.length < 2) throw new Error("Loft requires at least two section sketches");
        if (e.sectionSketchIds.some((t)=>!t)) throw new Error("Loft section sketch ids are required");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Loft mode must be add or cut");
        return {
            ...Y(e.id ?? N(), {
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
    Fa = function(e) {
        if (!e.profileSketchId || !e.pathSketchId) throw new Error("Pipe requires profile and path sketch ids");
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
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "pipe",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "pipe",
            profileSketchId: e.profileSketchId,
            sectionSketchIds: t,
            pathSketchId: e.pathSketchId,
            mode: e.mode,
            orientation: r,
            solidId: null
        };
    };
    function cl(e, t = "angle") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error(`Invalid revolve ${t}: expected radians in (0, 2π]`);
        return e;
    }
    _a = function(e) {
        const t = cl(e.angle);
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "revolve",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "revolve",
            sketchRef: e.sketchRef,
            axisRef: structuredClone(e.axisRef),
            angle: t,
            mode: e.mode ?? "add",
            ...e.fusePrior === !1 ? {
                fusePrior: !1
            } : {},
            solidId: null
        };
    };
    function ns(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must be a finite 3D vector`);
    }
    va = function(e) {
        if (!e.baseFeatureId) throw new Error("Split requires a base feature");
        if (![
            "positive",
            "negative",
            "both"
        ].includes(e.keepSide)) throw new Error("Split keep side is invalid");
        if (e.toolRef.kind === "world_plane" && (ns(e.toolRef.origin, "Split plane origin"), ns(e.toolRef.normal, "Split plane normal"), Math.hypot(...e.toolRef.normal) <= 1e-9)) throw new Error("Split plane normal must be non-zero");
        if (e.toolRef.kind === "datum_plane" && !e.toolRef.featureId) throw new Error("Split Datum Plane reference is required");
        if (e.toolRef.kind === "face" && (!e.toolRef.selector.featureId || !e.toolRef.selector.role)) throw new Error("Split face reference is required");
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "split",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "split",
            baseFeatureId: e.baseFeatureId,
            toolRef: structuredClone(e.toolRef),
            keepSide: e.keepSide,
            solidId: null
        };
    };
    mo = function(e) {
        if (!e.helixFeatureId) throw new Error("Thread requires a Helix feature");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Thread mode must be add or cut");
        if (e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch") throw new Error("Unsupported Thread profile");
        if (e.profileKind === "custom_sketch" && !e.profileSketchId) throw new Error("Custom Thread profile requires a Sketch");
        if (!(e.majorRadius > 0) || !Number.isFinite(e.majorRadius)) throw new Error("Thread major radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Thread pitch must be positive");
        if (!(e.depth > 0) || !Number.isFinite(e.depth) || e.depth >= e.majorRadius) throw new Error("Thread depth must be positive and smaller than major radius");
        if (e.depth > e.pitch * .75) throw new Error("Thread depth is too large for the metric profile");
        return {
            ...Y(e.id ?? N(), {
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
    function Ea(e) {
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
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "trim",
                dependencyIds: e.dependencyIds,
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
    const Ve = Object.freeze({
        category: "operation",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Tr(e) {
        return e.priorSolidFeatureId ?? e.suggestedFeatureIds?.[0] ?? "";
    }
    function Te(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function bn(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function wn(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Aa(e) {
        return bn(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function Oa(e) {
        const t = e.toolRef;
        if (!bn(t)) return [
            Te("invalid-tool-reference", "toolRef", "Tool reference must be structured")
        ];
        switch(t.kind){
            case "world_plane":
                return wn(t.origin) && wn(t.normal) && Math.hypot(...t.normal) > 1e-9 ? [] : [
                    Te("invalid-tool-reference", "toolRef", "World plane must have a finite non-zero normal")
                ];
            case "datum_plane":
                return typeof t.featureId == "string" && t.featureId.length > 0 ? [] : [
                    Te("invalid-tool-reference", "toolRef", "Datum Plane id is required")
                ];
            case "face":
                return Aa(t.selector) ? [] : [
                    Te("invalid-tool-reference", "toolRef", "Face selector is invalid")
                ];
            default:
                return [
                    Te("invalid-tool-reference", "toolRef", "Unsupported tool reference kind")
                ];
        }
    }
    function ul(e, t) {
        const r = e[t];
        return Array.isArray(r) && r.length > 0 && r.every(Aa) ? [] : [
            Te(`invalid-${t}`, t, `${t} requires valid topology references`)
        ];
    }
    function ll(e) {
        const t = [];
        (!bn(e.sketchRef) || typeof e.sketchRef.sketchId != "string" || e.sketchRef.sketchId.length === 0) && t.push(Te("invalid-sketch-reference", "sketchRef", "Revolve sketch id is required"));
        const r = e.axisRef;
        return bn(r) ? ((r.kind === "world" ? wn(r.origin) && wn(r.direction) && Math.hypot(...r.direction) > 1e-9 : r.kind === "datum" ? typeof r.featureId == "string" && r.featureId.length > 0 && (r.axis === "normal" || r.axis === "u" || r.axis === "v") : r.kind === "datum_axis" && typeof r.featureId == "string" && r.featureId.length > 0) || t.push(Te("invalid-axis-reference", "axisRef", "Revolve axis reference is invalid")), t) : (t.push(Te("invalid-axis-reference", "axisRef", "Revolve axis must be structured")), t);
    }
    class fl extends re {
        constructor(){
            super({
                type: "split",
                labelKey: "partDesign.feature.split",
                iconKey: "part-design-split",
                sortOrder: 310,
                capabilities: Ve,
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
                        baseFeatureId: Tr(t),
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.toolRef),
                validate: Oa,
                build: (t, r, n)=>ie(t, r, n, va)
            });
        }
    }
    class pl extends re {
        constructor(){
            super({
                type: "trim",
                labelKey: "partDesign.feature.trim",
                iconKey: "part-design-trim",
                sortOrder: 320,
                capabilities: Ve,
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
                        baseFeatureId: Tr(t),
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.toolRef),
                validate: Oa,
                build: (t, r, n)=>ie(t, r, n, Ea)
            });
        }
    }
    class hl extends re {
        constructor(){
            super({
                type: "face_pull",
                labelKey: "partDesign.feature.facePull",
                iconKey: "part-design-face-pull",
                sortOrder: 330,
                capabilities: Ve,
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
                        baseFeatureId: Tr(t),
                        faceSelectors: [],
                        direction: [
                            0,
                            0,
                            1
                        ],
                        distance: 10,
                        operation: "add"
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.faceSelectors),
                validate: (t)=>ul(t, "faceSelectors"),
                build: (t, r, n)=>ie(t, r, n, il)
            });
        }
    }
    class ml extends re {
        constructor(){
            super({
                type: "hole",
                labelKey: "partDesign.feature.hole",
                iconKey: "part-design-hole",
                sortOrder: 340,
                capabilities: Ve,
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
                    "pointIds"
                ],
                createDraft: (t)=>({
                        baseFeatureId: Tr(t),
                        sketchId: t.suggestedFeatureIds?.[0] ?? "",
                        diameter: 5,
                        depth: 10,
                        depthMode: "blind",
                        mode: "simple"
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseFeatureId, t.sketchId),
                validate: (t)=>t.pointIds === void 0 || Array.isArray(t.pointIds) && t.pointIds.every((r)=>typeof r == "string" && r.length > 0) ? [] : [
                        Te("invalid-point-ids", "pointIds", "Hole point ids must be non-empty strings")
                    ],
                build: (t, r, n)=>ie(t, r, n, Sa)
            });
        }
    }
    class yl extends re {
        constructor(){
            super({
                type: "revolve",
                labelKey: "partDesign.feature.revolve",
                iconKey: "part-design-revolve",
                sortOrder: 350,
                capabilities: {
                    ...Ve,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t, r)=>de(t.sketchRef, t.axisRef, t.mode === "cut" || t.fusePrior !== !1 ? r.priorSolidFeatureId : null),
                validate: ll,
                build: (t, r, n)=>ie(t, r, n, _a)
            });
        }
    }
    class gl extends re {
        constructor(){
            super({
                type: "boolean",
                labelKey: "partDesign.feature.boolean",
                iconKey: "part-design-boolean",
                sortOrder: 360,
                capabilities: Ve,
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
                        targetFeatureId: Tr(t),
                        toolFeatureId: t.suggestedFeatureIds?.[0] ?? "",
                        op: "union"
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.targetFeatureId, t.toolFeatureId),
                build: (t, r, n)=>ie(t, r, n, xa)
            });
        }
    }
    class Il extends re {
        constructor(){
            super({
                type: "loft",
                labelKey: "partDesign.feature.loft",
                iconKey: "part-design-loft",
                sortOrder: 370,
                capabilities: {
                    ...Ve,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t, r)=>de(t.sectionSketchIds, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ie(t, r, n, dl)
            });
        }
    }
    class bl extends re {
        constructor(){
            super({
                type: "pipe",
                labelKey: "partDesign.feature.pipe",
                iconKey: "part-design-pipe",
                sortOrder: 380,
                capabilities: {
                    ...Ve,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t, r)=>de(t.profileSketchId, t.sectionSketchIds, t.pathSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ie(t, r, n, Fa)
            });
        }
    }
    class wl extends re {
        constructor(){
            super({
                type: "helix",
                labelKey: "partDesign.feature.helix",
                iconKey: "part-design-helix",
                sortOrder: 390,
                capabilities: {
                    ...Ve,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: ()=>[],
                build: (t, r, n)=>ie(t, r, n, zn)
            });
        }
    }
    class kl extends re {
        constructor(){
            super({
                type: "thread",
                labelKey: "partDesign.feature.thread",
                iconKey: "part-design-thread",
                sortOrder: 400,
                capabilities: {
                    ...Ve,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t, r)=>de(t.helixFeatureId, t.profileSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>ie(t, r, n, mo)
            });
        }
    }
    function Wr(e) {
        return e.length === 3 && e.every(Number.isFinite);
    }
    function xl(e) {
        if (e.kind === "world") {
            if (!Wr(e.origin) || !Wr(e.direction) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Datum Axis world direction must be a finite non-zero vector");
            return;
        }
        if (e.kind === "two_point") {
            if (!Wr(e.start) || !Wr(e.end) || Math.hypot(e.end[0] - e.start[0], e.end[1] - e.start[1], e.end[2] - e.start[2]) <= 1e-9) throw new Error("Datum Axis two points must be finite and distinct");
            return;
        }
        if (!e.firstDatumId || !e.secondDatumId || e.firstDatumId === e.secondDatumId) throw new Error("Datum Axis requires two different Datum Plane references");
    }
    Sl = function(e) {
        return xl(e.axisRef), {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "datum_axis",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "datum_axis",
            axisRef: structuredClone(e.axisRef)
        };
    };
    kr = function(e) {
        return {
            ...Y(e.id ?? N(), {
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
            plane: null
        };
    };
    Fl = function(e, t, r = 100, n = 100) {
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
    _l = function(e, t, r) {
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
        ], c = [
            o[1] * d[2] - o[2] * d[1],
            o[2] * d[0] - o[0] * d[2],
            o[0] * d[1] - o[1] * d[0]
        ], u = Math.hypot(c[0], c[1], c[2]), p = u > 1e-9 ? [
            c[0] / u,
            c[1] / u,
            c[2] / u
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
            vAxis: p,
            width: 100,
            height: 100
        };
    };
    Fe = function(e) {
        return {
            ...Y(e.id ?? N(), {
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
    vl = function(e) {
        if (!e.sourceBodyId || !e.sourceFeatureId) throw new Error("ShapeBinder requires a source Body and feature");
        return {
            ...Y(e.id ?? N(), {
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
    const El = 2, Al = {
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
    }, Ir = 1e-9;
    function Gr(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function Ol(e) {
        return {
            origin: Gr(e.origin),
            normal: Gr(e.normal),
            uAxis: Gr(e.uAxis),
            vAxis: Gr(e.vAxis)
        };
    }
    function en(e) {
        return Math.hypot(e[0], e[1], e[2]);
    }
    function Pl(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function $l(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function br(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must contain three finite values`);
    }
    Rl = function(e) {
        br(e.origin, "Sketch plane origin"), br(e.normal, "Sketch plane normal"), br(e.uAxis, "Sketch plane U axis"), br(e.vAxis, "Sketch plane V axis");
        const t = en(e.normal), r = en(e.uAxis), n = en(e.vAxis), i = $l(Pl(e.uAxis, e.vAxis), e.normal);
        if (t <= Ir || r <= Ir || n <= Ir) throw new Error("Sketch plane frame axes must be non-degenerate");
        if (i <= Ir * t * r * n) throw new Error("Sketch plane frame must be right-handed and non-degenerate");
    };
    _t = function(e) {
        if (!e.id) throw new Error("Sketch plane placement requires a stable id");
        const t = Ol(e.frameSnapshot ?? Al);
        Rl(t);
        const r = e.orientation ?? {
            mode: "support-default",
            role: "right",
            reversed: !1
        };
        if (r.mode === "fixed" && (br(r.bodyDirection, "Fixed sketch orientation"), en(r.bodyDirection) <= Ir)) throw new Error("Fixed sketch orientation must be non-degenerate");
        return {
            schemaVersion: El,
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
    gg = function(e) {
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
        return _t({
            id: e.id,
            support: r,
            orientation: s,
            normalReversed: t.normalReversed ?? !1,
            frameSnapshot: e.frameSnapshot,
            helperVisibility: e.helperVisibility
        });
    };
    Ig = function(e) {
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
    bg = function(e) {
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
    yo = function(e) {
        const t = e.sectionOwnership ?? "independent";
        if (t === "internal" && !e.ownerFeatureId) throw new Error("Internal sketch sections require an ownerFeatureId");
        return {
            ...Y(e.id, {
                name: e.name,
                type: "sketch",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "sketch",
            sectionOwnership: t,
            placementPlane: _t({
                ...e.placementPlane ? structuredClone(e.placementPlane) : {},
                id: e.placementPlane?.id ?? `${e.id}::placement-plane`
            }),
            ...e.ownerFeatureId ? {
                ownerFeatureId: e.ownerFeatureId
            } : {}
        };
    };
    wg = function(e) {
        return e.type === "sketch" && e.sectionOwnership !== "internal";
    };
    const Vn = Object.freeze({
        category: "reference",
        producesSolid: !1,
        priorSolid: "none",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function ft(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function Pa(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Cl(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Ml(e) {
        return Pa(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function Dl(e) {
        if (!Array.isArray(e) || e.length !== 3 || !e.every(Cl)) return !1;
        const [t, r, n] = e, i = r[0] - t[0], o = r[1] - t[1], s = r[2] - t[2], a = n[0] - t[0], d = n[1] - t[1], c = n[2] - t[2];
        return Math.hypot(o * c - s * d, s * a - i * c, i * d - o * a) > 1e-9;
    }
    function Tl(e) {
        const t = [];
        return (typeof e.width != "number" || e.width <= 0) && t.push(ft("invalid-width", "width", "Datum Plane width must be positive")), (typeof e.height != "number" || e.height <= 0) && t.push(ft("invalid-height", "height", "Datum Plane height must be positive")), e.attachmentMode === "on_face" && !Ml(e.faceSelector) ? t.push(ft("invalid-face-reference", "faceSelector", "Datum Plane face is required")) : e.attachmentMode === "on_datum" && (typeof e.baseDatumId != "string" || e.baseDatumId.length === 0) ? t.push(ft("invalid-datum-reference", "baseDatumId", "Base Datum Plane is required")) : e.attachmentMode === "three_point" && !Dl(e.threePoints) ? t.push(ft("invalid-three-points", "threePoints", "Three non-collinear points are required")) : e.attachmentMode === "on_path" && (typeof e.pathFeatureId != "string" || e.pathFeatureId.length === 0 || typeof e.pathParameter != "number" || e.pathParameter < 0 || e.pathParameter > 1) && t.push(ft("invalid-path-reference", "pathFeatureId", "Path and normalized parameter are required")), t;
    }
    class Bl extends re {
        constructor(){
            super({
                type: "sketch",
                labelKey: "partDesign.feature.sketch",
                iconKey: "part-design-sketch",
                sortOrder: 10,
                capabilities: {
                    ...Vn,
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
                        placementPlane: _t({
                            id: "__sketch-draft-plane__"
                        })
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.ownerFeatureId, t.placementPlane),
                validate: (t)=>Pa(t.placementPlane) && typeof t.placementPlane.id == "string" && t.placementPlane.id.length > 0 ? [] : [
                        ft("invalid-placement-plane", "placementPlane", "Sketch placement is required")
                    ],
                build: (t, r, n)=>ie(t, r, n, yo)
            });
        }
    }
    class jl extends re {
        constructor(){
            super({
                type: "datum_plane",
                labelKey: "partDesign.feature.datumPlane",
                iconKey: "part-design-datum-plane",
                sortOrder: 20,
                capabilities: {
                    ...Vn,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.baseDatumId, t.faceSelector, t.pathFeatureId),
                validate: Tl,
                build: (t, r, n)=>ie(t, r, n, kr)
            });
        }
    }
    class zl extends re {
        constructor(){
            super({
                type: "datum_axis",
                labelKey: "partDesign.feature.datumAxis",
                iconKey: "part-design-datum-axis",
                sortOrder: 30,
                capabilities: {
                    ...Vn,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.axisRef),
                build: (t, r, n)=>ie(t, r, n, Sl)
            });
        }
    }
    class Vl extends re {
        constructor(){
            super({
                type: "shape_binder",
                labelKey: "partDesign.feature.shapeBinder",
                iconKey: "part-design-shape-binder",
                sortOrder: 40,
                capabilities: {
                    ...Vn,
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.sourceFeatureId),
                build: (t, r, n)=>ie(t, r, n, vl)
            });
        }
    }
    class Nl extends re {
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
                draftFromFeature: (t)=>ne(t),
                dependencies: ()=>[],
                build: (t, r, n)=>ie(t, r, n, Fe)
            });
        }
    }
    function Kl(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function $a(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function tn(e) {
        return [
            ...e
        ];
    }
    const ql = Object.freeze({
        encode: (e)=>St("sphere", {
                mode: e.mode,
                center: e.center,
                radius: e.radius
            }, {}),
        decode (e) {
            const { mode: t, center: r, radius: n } = e.parameters;
            if (t !== "add" && t !== "cut" || !$a(r) || typeof n != "number") throw new Ge("sphere", "invalid parameter payload");
            return {
                mode: t,
                center: tn(r),
                radius: n
            };
        }
    });
    class Hl extends Ft {
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
                codec: ql
            });
        }
        isTypedDraft(t) {
            return Kl(t) ? (t.mode === "add" || t.mode === "cut") && $a(t.center) && typeof t.radius == "number" : !1;
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
                center: tn(t.center),
                radius: t.radius
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                center: tn(t.center)
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
            }), t.mode === "cut" && !Ll(r) && n.push({
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
            return du({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                center: tn(r.center)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Ll(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    Ul = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Linear pattern count must be an integer >= 2");
        if (!Number.isFinite(e.spacing) || e.spacing <= 0) throw new Error("Linear pattern spacing must be positive and finite");
        if (!e.direction.every(Number.isFinite) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Linear pattern direction must be non-zero");
        const t = Math.hypot(...e.direction);
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "linear_pattern",
                dependencyIds: e.dependencyIds,
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
    Wl = function(e) {
        if (!e.seedFeatureId) throw new Error("Mirror requires a seed feature");
        if (e.planeRef.kind === "world") {
            if (!e.planeRef.origin.every(Number.isFinite) || !e.planeRef.normal.every(Number.isFinite) || Math.hypot(...e.planeRef.normal) <= 1e-9) throw new Error("Mirror world plane normal must be non-zero");
        } else if (!e.planeRef.featureId) throw new Error("Mirror datum plane reference is required");
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "mirror",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "mirror",
            seedFeatureId: e.seedFeatureId,
            planeRef: structuredClone(e.planeRef),
            solidId: null
        };
    };
    function Gl(e) {
        if (e.kind === "linear") {
            if (e.direction.length !== 3 || e.direction.some((t)=>!Number.isFinite(t)) || Math.hypot(...e.direction) <= 1e-9 || !Number.isInteger(e.count) || e.count < 2 || !(e.spacing > 0)) throw new Error("MultiTransform linear step is invalid");
        } else if (e.kind === "polar" && (!Number.isInteger(e.count) || e.count < 2 || !(e.angleSpan > 0) || e.angleSpan > Math.PI * 2 + 1e-9)) throw new Error("MultiTransform polar step is invalid");
    }
    Yl = function(e) {
        if (!e.seedFeatureId || !e.transforms.length) throw new Error("MultiTransform requires a seed and at least one transform");
        return e.transforms.forEach(Gl), {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "multi_transform",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "multi_transform",
            seedFeatureId: e.seedFeatureId,
            transforms: structuredClone(e.transforms),
            solidId: null
        };
    };
    function Zl(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error("Polar pattern angleSpan must be in (0, 2π] radians");
        return e;
    }
    Jl = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Polar pattern count must be an integer >= 2");
        const t = Zl(e.angleSpan);
        if (e.axisRef.kind === "world") {
            const r = e.axisRef.direction;
            if (!r.every(Number.isFinite) || Math.hypot(...r) <= 1e-9) throw new Error("Polar pattern world axis direction must be non-zero");
        }
        return {
            ...Y(e.id ?? N(), {
                name: e.name,
                type: "polar_pattern",
                dependencyIds: e.dependencyIds,
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
    const Nn = Object.freeze({
        category: "transform",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Kn(e) {
        return e.suggestedFeatureIds?.[0] ?? e.priorSolidFeatureId ?? "";
    }
    function xr(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function go(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function kn(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Ra(e) {
        return go(e) ? e.kind === "world" ? kn(e.origin) && kn(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum" ? typeof e.featureId == "string" && e.featureId.length > 0 && (e.axis === "normal" || e.axis === "u" || e.axis === "v") : e.kind === "datum_axis" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function Ca(e) {
        return go(e) ? e.kind === "world" ? kn(e.origin) && kn(e.normal) && Math.hypot(...e.normal) > 1e-9 : e.kind === "datum" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function Xl(e) {
        if (!Array.isArray(e.transforms) || e.transforms.length === 0) return [
            xr("invalid-transforms", "transforms", "At least one transform is required")
        ];
        for (const t of e.transforms){
            if (!go(t)) return [
                xr("invalid-transforms", "transforms", "Transform must be structured")
            ];
            if (t.kind !== "linear" && !(t.kind === "polar" && Ra(t.axisRef)) && !(t.kind === "mirror" && Ca(t.planeRef))) return [
                xr("invalid-transforms", "transforms", "Transform kind or reference is invalid")
            ];
        }
        return [];
    }
    class Ql extends re {
        constructor(){
            super({
                type: "multi_transform",
                labelKey: "partDesign.feature.multiTransform",
                iconKey: "part-design-multi-transform",
                sortOrder: 700,
                capabilities: Nn,
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
                        seedFeatureId: Kn(t),
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.seedFeatureId, t.transforms),
                validate: Xl,
                build: (t, r, n)=>ie(t, r, n, Yl)
            });
        }
    }
    class ef extends re {
        constructor(){
            super({
                type: "linear_pattern",
                labelKey: "partDesign.feature.linearPattern",
                iconKey: "part-design-linear-pattern",
                sortOrder: 710,
                capabilities: Nn,
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
                        seedFeatureId: Kn(t),
                        direction: [
                            1,
                            0,
                            0
                        ],
                        count: 2,
                        spacing: 10
                    }),
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.seedFeatureId),
                build: (t, r, n)=>ie(t, r, n, Ul)
            });
        }
    }
    class tf extends re {
        constructor(){
            super({
                type: "polar_pattern",
                labelKey: "partDesign.feature.polarPattern",
                iconKey: "part-design-polar-pattern",
                sortOrder: 720,
                capabilities: Nn,
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
                        seedFeatureId: Kn(t),
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.seedFeatureId, t.axisRef),
                validate: (t)=>Ra(t.axisRef) ? [] : [
                        xr("invalid-axis-reference", "axisRef", "Polar pattern axis is invalid")
                    ],
                build: (t, r, n)=>ie(t, r, n, Jl)
            });
        }
    }
    class rf extends re {
        constructor(){
            super({
                type: "mirror",
                labelKey: "partDesign.feature.mirror",
                iconKey: "part-design-mirror",
                sortOrder: 730,
                capabilities: Nn,
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
                        seedFeatureId: Kn(t),
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
                draftFromFeature: (t)=>ne(t),
                dependencies: (t)=>de(t.seedFeatureId, t.planeRef),
                validate: (t)=>Ca(t.planeRef) ? [] : [
                        xr("invalid-plane-reference", "planeRef", "Mirror plane is invalid")
                    ],
                build: (t, r, n)=>ie(t, r, n, Wl)
            });
        }
    }
    const nf = Object.freeze({
        sketch: ()=>new Bl,
        datum_plane: ()=>new jl,
        datum_axis: ()=>new zl,
        draft: ()=>new Wu,
        box: ()=>new fu,
        cylinder: ()=>new wu,
        cone: ()=>new yu,
        sphere: ()=>new Hl,
        split: ()=>new fl,
        trim: ()=>new pl,
        face_pull: ()=>new hl,
        multi_transform: ()=>new Ql,
        shape_binder: ()=>new Vl,
        extrude: ()=>new nl,
        hole: ()=>new ml,
        linear_pattern: ()=>new ef,
        polar_pattern: ()=>new tf,
        revolve: ()=>new yl,
        boolean: ()=>new gl,
        fillet: ()=>new Ju,
        chamfer: ()=>new Xu,
        thickness: ()=>new Qu,
        mirror: ()=>new rf,
        loft: ()=>new Il,
        pipe: ()=>new bl,
        helix: ()=>new wl,
        thread: ()=>new kl,
        import: ()=>new Nl
    });
    function of(e) {
        return nf[e]();
    }
    sf = function() {
        return Object.freeze(pn.map((e)=>of(e)));
    };
    kg = function() {
        const e = new ou;
        for (const t of sf())e.register(t);
        return e.freeze({
            requireComplete: !0
        });
    };
    const af = Object.freeze({
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
    class df extends Error {
        from;
        to;
        constructor(t, r){
            super(`Invalid feature lifecycle transition: ${t} -> ${r}`), this.name = "FeatureLifecycleTransitionError", this.from = t, this.to = r;
        }
    }
    function cf(e, t) {
        return af[e].has(t);
    }
    xg = function(e, t) {
        if (!cf(e, t)) throw new df(e, t);
        return t;
    };
    function uf(e) {
        return e === "editing" || e === "applying" || e === "failed" || e === "cancelling";
    }
    Sg = function(e) {
        const t = uf(e.phase) && e.operation !== null, r = e.phase === "applying" || e.phase === "cancelling" || !!e.externallyBusy, n = e.operation === "create" ? e.supportsCreate : e.operation === "edit" ? e.supportsEdit : !1, i = t && n && e.hasCommitAction && e.canCommit && !e.hasValidationErrors && !r;
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
    function Di(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Pr(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Io(e) {
        const t = Pr(e.axisDirection), r = Math.abs(t[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], n = Pr(Di(r, t)), i = Di(t, n);
        return {
            axis: t,
            u: n,
            v: i
        };
    }
    function Ma(e) {
        const t = e.endPitch - e.pitch;
        return Math.abs(t) <= 1e-12 ? e.height / e.pitch : e.height * Math.log(e.endPitch / e.pitch) / t;
    }
    function lf(e, t) {
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
        const r = Math.max(0, Math.min(1, t)), n = e.endPitch - e.pitch, i = Ma(e);
        if (!Number.isFinite(i) || i <= 0 || i > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const o = e.handedness === "left" ? -1 : 1, s = Math.abs(n) <= 1e-12 ? i * r : e.height * Math.log((e.pitch + n * r) / e.pitch) / n, a = e.startAngle + o * s * Math.PI * 2, d = o * 2 * Math.PI * (Math.abs(n) <= 1e-12 ? i : e.height / (e.pitch + n * r)), c = e.radius + (e.endRadius - e.radius) * r, u = e.endRadius - e.radius, { axis: p, u: f, v: m } = Io(e), y = Math.cos(a), x = Math.sin(a), _ = [
            f[0] * y + m[0] * x,
            f[1] * y + m[1] * x,
            f[2] * y + m[2] * x
        ], g = [
            -f[0] * x + m[0] * y,
            -f[1] * x + m[1] * y,
            -f[2] * x + m[2] * y
        ], l = [
            e.axisOrigin[0] + _[0] * c + p[0] * e.height * r,
            e.axisOrigin[1] + _[1] * c + p[1] * e.height * r,
            e.axisOrigin[2] + _[2] * c + p[2] * e.height * r
        ], b = [
            _[0] * u + g[0] * c * d + p[0] * e.height,
            _[1] * u + g[1] * c * d + p[1] * e.height,
            _[2] * u + g[2] * c * d + p[2] * e.height
        ];
        return {
            point: l,
            tangent: Pr(b)
        };
    }
    ff = function(e, t, r = 100, n = 100) {
        const { point: i, tangent: o } = lf(e, t), { axis: s } = Io(e), a = [
            i[0] - e.axisOrigin[0],
            i[1] - e.axisOrigin[1],
            i[2] - e.axisOrigin[2]
        ], d = a[0] * s[0] + a[1] * s[1] + a[2] * s[2], c = [
            a[0] - s[0] * d,
            a[1] - s[1] * d,
            a[2] - s[2] * d
        ], u = Pr(c), p = o[0] * u[0] + o[1] * u[1] + o[2] * u[2], f = [
            u[0] - o[0] * p,
            u[1] - o[1] * p,
            u[2] - o[2] * p
        ], m = Pr(f), y = Di(o, m);
        return {
            origin: i,
            normal: o,
            uAxis: m,
            vAxis: y,
            width: r,
            height: n
        };
    };
    pf = function(e, t = 32) {
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
        const r = e.endPitch - e.pitch, n = Ma(e);
        if (!Number.isFinite(n) || n <= 0 || n > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const { axis: i, u: o, v: s } = Io(e), a = Math.max(1, Math.ceil(n * t)), d = [], c = e.handedness === "left" ? -1 : 1;
        for(let u = 0; u <= a; u += 1){
            const p = u / a, f = Math.abs(r) <= 1e-12 ? n * p : e.height * Math.log((e.pitch + r * p) / e.pitch) / r, m = e.startAngle + c * f * Math.PI * 2, y = e.radius + (e.endRadius - e.radius) * p, x = Math.cos(m) * y, _ = Math.sin(m) * y;
            d.push([
                e.axisOrigin[0] + o[0] * x + s[0] * _ + i[0] * e.height * p,
                e.axisOrigin[1] + o[1] * x + s[1] * _ + i[1] * e.height * p,
                e.axisOrigin[2] + o[2] * x + s[2] * _ + i[2] * e.height * p
            ]);
        }
        return {
            points: d,
            turns: n
        };
    };
    class tt extends Error {
        code;
        bodyId;
        featureId;
        dependencyId;
        constructor(t, r){
            super(t), this.name = "BodyInvariantError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId, this.dependencyId = r.dependencyId;
        }
    }
    const hf = new Set([
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
    bo = function(e) {
        return hf.has(e.type);
    };
    function Ti(e) {
        const { bodyId: t, features: r, tipFeatureId: n, foreignFeatureIds: i } = e, o = new Map;
        for(let u = 0; u < r.length; u++){
            const p = r[u];
            if (o.has(p.id)) throw new tt(`Body ${t}: duplicate feature id ${p.id}`, {
                code: "duplicate-feature-id",
                bodyId: t,
                featureId: p.id
            });
            o.set(p.id, u);
        }
        const s = new Map, a = new Map;
        for (const u of r)s.set(u.id, []), a.set(u.id, []);
        for (const u of r){
            const p = o.get(u.id);
            for (const f of u.dependencyIds){
                const m = o.get(f);
                if (m === void 0) throw i?.has(f) ? new tt(`Body ${t}: feature ${u.id} depends on cross-body feature ${f}`, {
                    code: "cross-body-dependency",
                    bodyId: t,
                    featureId: u.id,
                    dependencyId: f
                }) : new tt(`Body ${t}: feature ${u.id} has unknown dependency ${f}`, {
                    code: "unknown-dependency",
                    bodyId: t,
                    featureId: u.id,
                    dependencyId: f
                });
                if (m >= p) throw new tt(`Body ${t}: feature ${u.id} has forward or self dependency ${f}`, {
                    code: "forward-dependency",
                    bodyId: t,
                    featureId: u.id,
                    dependencyId: f
                });
                s.get(u.id).push(f), a.get(f).push(u.id);
            }
        }
        const d = r.map((u)=>u.id), c = eo(d, a);
        if (c) throw new tt(`Body ${t}: dependency cycle ${c.join(" -> ")}`, {
            code: "dependency-cycle",
            bodyId: t,
            featureId: c[0]
        });
        if (n !== null) {
            const u = r.find((p)=>p.id === n);
            if (!u) throw new tt(`Body ${t}: tipFeatureId ${n} is not in body history`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
            if (u.suppressed) throw new tt(`Body ${t}: tipFeatureId ${n} references a suppressed feature`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
        }
    }
    function Bi(e, t) {
        const r = new Set;
        for (const n of t)if (n.id !== e) for (const i of n.getFeatures())r.add(i.id);
        return r;
    }
    Fg = function(e, t) {
        const r = e.getBody(t.sourceBodyId);
        if (!r) return {
            status: "source_missing",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: null
        };
        const n = r.getFeature(t.sourceFeatureId);
        return !n || !bo(n) ? {
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
    qn = function(e, t) {
        const n = (e.geometry ?? []).filter((d)=>d.kind === "point"), i = t && t.length > 0 ? n.filter((d)=>t.includes(d.id)) : n;
        if (i.length === 0) throw new Error(t && t.length > 0 ? "Hole sketch does not contain the requested point ids" : "Hole sketch has no definition points");
        const o = e.origin, s = e.uAxis, a = e.vAxis;
        if (!o || !s || !a || o.length !== 3 || s.length !== 3 || a.length !== 3) throw new Error("Hole sketch profile is missing a valid world frame");
        return i.map((d)=>{
            const c = d.point.x, u = d.point.y;
            if (!Number.isFinite(c) || !Number.isFinite(u)) throw new Error(`Hole sketch point ${d.id} has non-finite coordinates`);
            return {
                id: d.id,
                uv: {
                    x: c,
                    y: u
                },
                origin: [
                    o[0] + s[0] * c + a[0] * u,
                    o[1] + s[1] * c + a[1] * u,
                    o[2] + s[2] * c + a[2] * u
                ]
            };
        });
    };
    function Da(e) {
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
    _g = function(e, t) {
        if (!e) return !1;
        try {
            return qn(e, t), !0;
        } catch  {
            return !1;
        }
    };
    function mf(e) {
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
    function ji(e) {
        return Array.isArray(e) ? e.map(ji) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([t, r])=>[
                t,
                ji(r)
            ])) : e;
    }
    Ta = class {
        id;
        name;
        _partId;
        tipFeatureId = null;
        origin;
        _features = [];
        constructor(t){
            this.id = t.id ?? N(), this.name = t.name, this._partId = t.partId ?? "", this.origin = mf(this.id);
        }
        get partId() {
            return this._partId;
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
                    placementPlane: ji(s.placementPlane)
                } : {
                    ...s,
                    dependencyIds: [
                        ...s.dependencyIds
                    ]
                });
            Ti({
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
                for (const c of Object.keys(d))c in s || delete d[c];
                return Object.assign(d, s), a;
            });
            this._features.length = 0, this._features.push(...o), this.tipFeatureId = r;
        }
        setFeatureSuppressed(t, r) {
            const n = this.getFeature(t);
            if (!n) throw new Error(`PartBody.setFeatureSuppressed: unknown feature ${t}`);
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
            Ti({
                bodyId: this.id,
                features: this._features,
                tipFeatureId: this.tipFeatureId,
                foreignFeatureIds: t
            });
        }
        _refreshTipToLastSolid() {
            const t = [
                ...this._features
            ].reverse().find((n)=>!n.suppressed && bo(n));
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
    function wo() {
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
    class yf {
        id;
        name;
        visible;
        transform;
        _bodyIds = [];
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? N(), this.name = t.name ?? "Part", this.visible = t.visible ?? !0, this.transform = t.transform ? {
                origin: [
                    ...t.transform.origin
                ],
                rotation: [
                    ...t.transform.rotation
                ]
            } : wo();
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
    class Ce extends Error {
        code;
        partId;
        bodyId;
        constructor(t, r){
            super(t), this.name = "PartInvariantError", this.code = r.code, this.partId = r.partId, this.bodyId = r.bodyId;
        }
    }
    function gf(e) {
        const { parts: t, bodies: r } = e, n = new Map(t.map((s)=>[
                s.id,
                s
            ])), i = new Map;
        for (const s of t){
            const a = new Set;
            for (const d of s.getBodies()){
                if (a.has(d.id)) throw new Ce(`Part ${s.id}: duplicate body membership ${d.id}`, {
                    code: "duplicate-body-id",
                    partId: s.id,
                    bodyId: d.id
                });
                if (a.add(d.id), !d.partId) throw new Ce(`Body ${d.id}: missing owning partId`, {
                    code: "body-missing-part-id",
                    bodyId: d.id,
                    partId: s.id
                });
                if (d.partId !== s.id) throw new Ce(`Body ${d.id}: partId ${d.partId} does not match owner Part ${s.id}`, {
                    code: "body-part-mismatch",
                    partId: s.id,
                    bodyId: d.id
                });
                const c = i.get(d.id);
                if (c !== void 0 && c !== s.id) throw new Ce(`Body ${d.id}: shared by Parts ${c} and ${s.id}`, {
                    code: "body-shared-across-parts",
                    partId: s.id,
                    bodyId: d.id
                });
                i.set(d.id, s.id);
            }
        }
        const o = new Set;
        for (const s of r){
            if (o.has(s.id)) throw new Ce(`Document: duplicate body id ${s.id} in flat index`, {
                code: "duplicate-body-id",
                bodyId: s.id
            });
            if (o.add(s.id), !s.partId) throw new Ce(`Body ${s.id}: missing owning partId`, {
                code: "body-missing-part-id",
                bodyId: s.id
            });
            const a = n.get(s.partId);
            if (!a) throw new Ce(`Body ${s.id}: unknown owning Part ${s.partId}`, {
                code: "body-unknown-part",
                bodyId: s.id,
                partId: s.partId
            });
            if (!a.hasBody(s.id)) throw new Ce(`Body ${s.id}: Part ${s.partId} does not list this body`, {
                code: "orphan-body-index",
                partId: s.partId,
                bodyId: s.id
            });
            if (i.get(s.id) !== s.partId) throw new Ce(`Body ${s.id}: ownership index mismatch`, {
                code: "body-part-mismatch",
                partId: s.partId,
                bodyId: s.id
            });
        }
        for (const s of t)for (const a of s.getBodies())if (!o.has(a.id)) throw new Ce(`Part ${s.id}: body ${a.id} missing from document index`, {
            code: "part-unknown-body",
            partId: s.id,
            bodyId: a.id
        });
    }
    Ba = class {
        id;
        name;
        _partOrder = [];
        _parts = new Map;
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? N(), this.name = t.name ?? "PRT";
        }
        addPart(t) {
            if (this._parts.has(t.id)) throw new Error(`FeatureDocument.addPart: duplicate part id ${t.id}`);
            if (t.getBodies().length > 0) throw new Error(`FeatureDocument.addPart: Part ${t.id} must be empty; add bodies via addBody`);
            this._partOrder.push(t.id), this._parts.set(t.id, t);
        }
        createPart(t = {}) {
            const r = new yf(t);
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
            const n = Bi(t.id, this.getBodies());
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
            for (const r of t)r.assertInvariants(Bi(r.id, t));
        }
        assertPartOwnershipInvariants() {
            gf({
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
    function If(e) {
        return e.type;
    }
    function bf(e) {
        return [
            ...new Set(e.dependencyIds)
        ].sort();
    }
    vg = function(e) {
        const t = e.getFeatures(), r = t.map((p)=>p.id), n = new Map(r.map((p, f)=>[
                p,
                f
            ])), i = new Map(t.map((p)=>[
                p.id,
                p
            ])), o = Yc(new Wc(t), r), s = e.tipFeatureId, a = s === null ? -1 : t.findIndex((p)=>p.id === s), d = [], c = [];
        let u = null;
        for (const p of o.featureIds){
            const f = i.get(p), m = n.get(p);
            if (!(a >= 0 && m <= a)) {
                d.push({
                    featureId: f.id,
                    type: f.type,
                    status: "inactive",
                    reason: a < 0 ? "no_tip" : "after_tip",
                    historyIndex: m
                });
                continue;
            }
            if (f.suppressed) {
                d.push({
                    featureId: f.id,
                    type: f.type,
                    status: "inactive",
                    reason: "suppressed",
                    historyIndex: m
                });
                continue;
            }
            const x = If(f), _ = bo(f), g = {
                featureId: f.id,
                type: f.type,
                status: "active",
                kind: x,
                historyIndex: m,
                priorSolidFeatureId: _ && x !== "import" ? u : null,
                auxiliaryFeatureIds: bf(f)
            };
            d.push(g), (_ && x !== "import" || x === "import") && (c.push(f.id), u = f.id);
        }
        return {
            bodyId: e.id,
            tipFeatureId: s,
            historyOrder: r,
            steps: d,
            solidExecutionOrder: c
        };
    };
    const zi = 1, $r = 2, is = $r, xn = 3, tr = 4;
    A = class extends Error {
        code;
        bodyId;
        featureId;
        constructor(t, r){
            super(t), this.name = "FeatureDocumentLoadError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId;
        }
    };
    function os(e) {
        const t = {
            sketchId: e.sketchId
        };
        return e.label !== void 0 && (t.label = e.label), e.sectionMode !== void 0 && (t.sectionMode = e.sectionMode), t;
    }
    function wf(e) {
        const t = {
            id: e.id,
            name: e.name,
            suppressed: e.suppressed,
            dependencyIds: [
                ...e.dependencyIds
            ],
            timestamp: e.timestamp
        };
        switch(e.type){
            case "sketch":
                return {
                    ...t,
                    type: "sketch",
                    sectionOwnership: e.sectionOwnership ?? "independent",
                    placementPlane: structuredClone(e.placementPlane ?? _t({
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
                    sketchRef: os(e.sketchRef),
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
                    sketchRef: os(e.sketchRef),
                    axisRef: structuredClone(e.axisRef),
                    angle: e.angle,
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
                    plane: e.plane ? structuredClone(e.plane) : null
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
                    options: structuredClone(e.options)
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
                    edgeSelectors: e.edgeSelectors.map((r)=>yn(r, "edge")),
                    radius: e.radius
                };
            case "chamfer":
                return {
                    ...t,
                    type: "chamfer",
                    baseFeatureId: e.baseFeatureId,
                    edgeSelectors: e.edgeSelectors.map((r)=>yn(r, "edge")),
                    distance: e.distance,
                    ...e.secondDistance !== void 0 ? {
                        secondDistance: e.secondDistance
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
                    orientation: e.orientation
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
                    throw new A(`FeatureSerializer: cannot persist feature type ${String(r.type)}`, {
                        code: "corrupt-feature",
                        featureId: r.id
                    });
                }
        }
    }
    function T(e, t, r, n) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new A(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function q(e, t, r, n) {
        if (typeof e != "string" || e.length === 0) throw new A(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function ss(e, t, r) {
        try {
            return Dr(e, "edge");
        } catch (n) {
            throw new A(`Body ${t}: feature ${r} has invalid edge selector: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function kf(e, t, r) {
        if (typeof e != "object" || e === null || !("id" in e)) throw new A(`Body ${t}: sketch ${r} is missing placementPlane`, {
            code: "corrupt-feature",
            bodyId: t,
            featureId: r
        });
        try {
            return _t(structuredClone(e));
        } catch (n) {
            throw new A(`Body ${t}: sketch ${r} has invalid placementPlane: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function xf(e, t) {
        const r = {
            id: q(e.id, "id", t, String(e.id ?? "?")),
            name: q(e.name, "name", t, e.id),
            suppressed: !!e.suppressed,
            dependencyIds: Array.isArray(e.dependencyIds) ? [
                ...e.dependencyIds
            ] : [],
            timestamp: T(e.timestamp, "timestamp", t, e.id)
        };
        switch(e.type){
            case "sketch":
                return {
                    ...r,
                    type: "sketch",
                    sectionOwnership: e.sectionOwnership ?? "independent",
                    placementPlane: kf(e.placementPlane, t, e.id),
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
                    if (!e.sketchRef?.sketchId || e.mode !== "add" && e.mode !== "cut") throw new A(`Body ${t}: extrude ${e.id} is missing sketchRef/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return {
                            ...ho({
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
                        throw new A(`Body ${t}: extrude ${e.id} ${n instanceof Error ? n.message : "is invalid"}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "hole":
                {
                    if (!e.baseFeatureId || !e.sketchId) throw new A(`Body ${t}: hole ${e.id} is missing baseFeatureId/sketchId`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink" || e.depthMode !== "blind" && e.depthMode !== "through") throw new A(`Body ${t}: hole ${e.id} has invalid mode/depthMode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    const n = Array.isArray(e.pointIds) ? e.pointIds.filter((o)=>typeof o == "string" && o.length > 0) : void 0;
                    return {
                        ...r,
                        type: "hole",
                        baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                        sketchId: q(e.sketchId, "sketchId", t, e.id),
                        ...n && n.length > 0 ? {
                            pointIds: n
                        } : {},
                        diameter: T(e.diameter, "diameter", t, e.id),
                        depth: T(e.depth, "depth", t, e.id),
                        depthMode: e.depthMode,
                        mode: e.mode,
                        ...e.counterboreDiameter !== void 0 ? {
                            counterboreDiameter: T(e.counterboreDiameter, "counterboreDiameter", t, e.id)
                        } : {},
                        ...e.counterboreDepth !== void 0 ? {
                            counterboreDepth: T(e.counterboreDepth, "counterboreDepth", t, e.id)
                        } : {},
                        ...e.countersinkDiameter !== void 0 ? {
                            countersinkDiameter: T(e.countersinkDiameter, "countersinkDiameter", t, e.id)
                        } : {},
                        ...e.countersinkAngleDeg !== void 0 ? {
                            countersinkAngleDeg: T(e.countersinkAngleDeg, "countersinkAngleDeg", t, e.id)
                        } : {},
                        ...e.startChamferEnabled ? {
                            startChamferEnabled: !0,
                            startChamferOffset: T(e.startChamferOffset, "startChamferOffset", t, e.id),
                            startChamferAngleDeg: T(e.startChamferAngleDeg, "startChamferAngleDeg", t, e.id)
                        } : {},
                        ...e.endChamferEnabled ? {
                            endChamferEnabled: !0,
                            endChamferOffset: T(e.endChamferOffset, "endChamferOffset", t, e.id),
                            endChamferAngleDeg: T(e.endChamferAngleDeg, "endChamferAngleDeg", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "linear_pattern":
                {
                    if (!e.seedFeatureId || !Array.isArray(e.direction)) throw new A(`Body ${t}: linear pattern ${e.id} is missing seed/direction`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "linear_pattern",
                        seedFeatureId: q(e.seedFeatureId, "seedFeatureId", t, e.id),
                        direction: [
                            T(e.direction[0], "direction[0]", t, e.id),
                            T(e.direction[1], "direction[1]", t, e.id),
                            T(e.direction[2], "direction[2]", t, e.id)
                        ],
                        count: T(e.count, "count", t, e.id),
                        spacing: T(e.spacing, "spacing", t, e.id),
                        solidId: null
                    };
                }
            case "polar_pattern":
                {
                    if (!e.seedFeatureId || !e.axisRef) throw new A(`Body ${t}: polar pattern ${e.id} is missing seed/axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "polar_pattern",
                        seedFeatureId: q(e.seedFeatureId, "seedFeatureId", t, e.id),
                        axisRef: structuredClone(e.axisRef),
                        count: T(e.count, "count", t, e.id),
                        angleSpan: T(e.angleSpan, "angleSpan", t, e.id),
                        solidId: null
                    };
                }
            case "revolve":
                {
                    if (!e.sketchRef?.sketchId || !e.axisRef) throw new A(`Body ${t}: revolve ${e.id} is missing sketchRef/axisRef`, {
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
                        angle: T(e.angle, "angle", t, e.id),
                        mode: e.mode ?? "add",
                        ...e.fusePrior === !1 ? {
                            fusePrior: !1
                        } : {},
                        solidId: null
                    };
                }
            case "boolean":
                {
                    if (!e.targetFeatureId || !e.toolFeatureId || !e.op) throw new A(`Body ${t}: boolean ${e.id} is missing target/tool/op`, {
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
                    if (!e.attachmentMode || !e.basePlane) throw new A(`Body ${t}: datum_plane ${e.id} is missing attachmentMode/basePlane`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "datum_plane",
                        attachmentMode: e.attachmentMode,
                        basePlane: e.basePlane,
                        offset: T(e.offset, "offset", t, e.id),
                        baseDatumId: e.baseDatumId ?? null,
                        faceSelector: e.faceSelector ?? null,
                        threePoints: e.threePoints ?? null,
                        pathFeatureId: e.pathFeatureId ?? null,
                        pathParameter: e.pathParameter ?? null,
                        width: e.width ?? 100,
                        height: e.height ?? 100,
                        visible: e.visible ?? !0,
                        coordinateSystemVisible: e.coordinateSystemVisible ?? !0,
                        plane: e.plane ?? null
                    };
                }
            case "datum_axis":
                {
                    if (!e.axisRef) throw new A(`Body ${t}: datum_axis ${e.id} is missing axisRef`, {
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
                    if (!e.baseFeatureId || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !Array.isArray(e.hinges) || e.hinges.length === 0 || !e.direction || !e.split || !Array.isArray(e.variableAngles) || !e.options) throw new A(`Body ${t}: draft ${e.id} is missing the Creo-style Draft contract`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "draft",
                        baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                        draftFaces: structuredClone(e.draftFaces),
                        hinges: structuredClone(e.hinges),
                        direction: structuredClone(e.direction),
                        reverseDirection: !!e.reverseDirection,
                        angle: T(e.angle, "angle", t, e.id),
                        reverseAngle: !!e.reverseAngle,
                        split: structuredClone(e.split),
                        variableAngles: structuredClone(e.variableAngles),
                        secondSideAngle: T(e.secondSideAngle, "secondSideAngle", t, e.id),
                        reverseSecondSideAngle: !!e.reverseSecondSideAngle,
                        options: structuredClone(e.options),
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
                    length: T(e.length, "length", t, e.id),
                    width: T(e.width, "width", t, e.id),
                    height: T(e.height, "height", t, e.id),
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
                    radius: T(e.radius, "radius", t, e.id),
                    height: T(e.height, "height", t, e.id),
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
                    bottomRadius: T(e.bottomRadius, "bottomRadius", t, e.id),
                    topRadius: T(e.topRadius, "topRadius", t, e.id),
                    height: T(e.height, "height", t, e.id),
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
                    radius: T(e.radius, "radius", t, e.id),
                    solidId: null
                };
            case "split":
                return {
                    ...r,
                    type: "split",
                    baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    solidId: null
                };
            case "trim":
                return {
                    ...r,
                    type: "trim",
                    baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    tolerance: T(e.tolerance ?? 1e-7, "tolerance", t, e.id),
                    solidId: null
                };
            case "face_pull":
                return {
                    ...r,
                    type: "face_pull",
                    baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                    faceSelectors: structuredClone(e.faceSelectors),
                    direction: [
                        ...e.direction
                    ],
                    distance: T(e.distance, "distance", t, e.id),
                    operation: e.operation ?? "add",
                    solidId: null
                };
            case "multi_transform":
                return {
                    ...r,
                    type: "multi_transform",
                    seedFeatureId: q(e.seedFeatureId, "seedFeatureId", t, e.id),
                    transforms: structuredClone(e.transforms),
                    solidId: null
                };
            case "shape_binder":
                return {
                    ...r,
                    type: "shape_binder",
                    sourceBodyId: q(e.sourceBodyId, "sourceBodyId", t, e.id),
                    sourceFeatureId: q(e.sourceFeatureId, "sourceFeatureId", t, e.id),
                    status: e.status === "stale" || e.status === "source_missing" ? e.status : "resolved",
                    solidId: null
                };
            case "fillet":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new A(`Body ${t}: fillet ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "fillet",
                        baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>ss(i, t, e.id)),
                        radius: T(e.radius, "radius", t, e.id),
                        solidId: null
                    };
                }
            case "chamfer":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new A(`Body ${t}: chamfer ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "chamfer",
                        baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>ss(i, t, e.id)),
                        distance: T(e.distance, "distance", t, e.id),
                        ...e.secondDistance !== void 0 ? {
                            secondDistance: T(e.secondDistance, "secondDistance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "thickness":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0) throw new A(`Body ${t}: thickness ${e.id} is missing baseFeatureId/removedFaceSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "thickness",
                        baseFeatureId: q(e.baseFeatureId, "baseFeatureId", t, e.id),
                        removedFaceSelectors: e.removedFaceSelectors.map((i)=>({
                                featureId: q(i.featureId, "removedFaceSelectors.featureId", t, e.id),
                                role: q(i.role, "removedFaceSelectors.role", t, e.id),
                                ...i.hintCentroid ? {
                                    hintCentroid: [
                                        ...i.hintCentroid
                                    ]
                                } : {}
                            })),
                        thickness: T(e.thickness, "thickness", t, e.id),
                        inward: e.inward ?? !0,
                        solidId: null
                    };
                }
            case "mirror":
                {
                    if (!e.seedFeatureId || !e.planeRef) throw new A(`Body ${t}: mirror ${e.id} is missing seedFeatureId/planeRef`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "mirror",
                        seedFeatureId: q(e.seedFeatureId, "seedFeatureId", t, e.id),
                        planeRef: structuredClone(e.planeRef),
                        solidId: null
                    };
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.mode) throw new A(`Body ${t}: loft ${e.id} is missing sectionSketchIds/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "loft",
                        sectionSketchIds: e.sectionSketchIds.map((i)=>q(i, "sectionSketchIds[]", t, e.id)),
                        mode: e.mode === "cut" ? "cut" : "add",
                        solidId: null
                    };
                }
            case "pipe":
                {
                    if (!e.profileSketchId || !e.pathSketchId || e.profileSketchId === e.pathSketchId || e.mode !== "add" && e.mode !== "cut") throw new A(`Body ${t}: pipe ${e.id} has invalid profile/path/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return Fa({
                        id: q(e.id, "id", t, String(e.id)),
                        name: q(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        profileSketchId: q(e.profileSketchId, "profileSketchId", t, e.id),
                        sectionSketchIds: Array.isArray(e.sectionSketchIds) ? e.sectionSketchIds.map((n)=>q(n, "sectionSketchIds[]", t, e.id)) : void 0,
                        pathSketchId: q(e.pathSketchId, "pathSketchId", t, e.id),
                        mode: e.mode,
                        orientation: e.orientation === "parallel" || e.orientation === "fixed" ? e.orientation : "frenet"
                    });
                }
            case "helix":
                {
                    const n = e.axisOrigin, i = e.axisDirection;
                    if (!Array.isArray(n) || n.length !== 3 || !Array.isArray(i) || i.length !== 3) throw new A(`Body ${t}: helix ${e.id} has invalid axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return zn({
                            id: q(e.id, "id", t, String(e.id)),
                            name: q(e.name, "name", t, e.id),
                            dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                            suppressed: e.suppressed === !0,
                            axisOrigin: n.map((o)=>T(o, "axisOrigin[]", t, e.id)),
                            axisDirection: i.map((o)=>T(o, "axisDirection[]", t, e.id)),
                            radius: T(e.radius, "radius", t, e.id),
                            endRadius: T(e.endRadius, "endRadius", t, e.id),
                            pitch: T(e.pitch, "pitch", t, e.id),
                            endPitch: T(e.endPitch, "endPitch", t, e.id),
                            height: T(e.height, "height", t, e.id),
                            handedness: e.handedness === "left" ? "left" : "right",
                            startAngle: T(e.startAngle, "startAngle", t, e.id)
                        });
                    } catch (o) {
                        throw o instanceof A ? o : new A(`Body ${t}: invalid helix ${e.id}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "thread":
                try {
                    return mo({
                        id: q(e.id, "id", t, String(e.id)),
                        name: q(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        helixFeatureId: q(e.helixFeatureId, "helixFeatureId", t, e.id),
                        mode: e.mode === "cut" ? "cut" : "add",
                        profileKind: e.profileKind === "custom_sketch" ? "custom_sketch" : "metric_triangle",
                        profileSketchId: e.profileSketchId === null ? null : q(e.profileSketchId, "profileSketchId", t, e.id),
                        majorRadius: T(e.majorRadius, "majorRadius", t, e.id),
                        pitch: T(e.pitch, "pitch", t, e.id),
                        depth: T(e.depth, "depth", t, e.id)
                    });
                } catch (n) {
                    throw n instanceof A ? n : new A(`Body ${t}: invalid thread ${e.id}`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                }
            default:
                {
                    const n = e;
                    throw new A(`Body ${t}: unknown feature type in v3 payload`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: n.id
                    });
                }
        }
    }
    function ko(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("documentFormatVersion must be a positive safe integer");
        return e;
    }
    ko(1);
    function ja(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("featurePayloadVersion must be a positive safe integer");
        return e;
    }
    const Sf = ja(1);
    function Ff(e, t) {
        if (typeof e != "object" || e === null || e.schemaVersion !== tr) throw new A("LegacyV4DocumentAdapter: expected schemaVersion 4", {
            code: "invalid-schema"
        });
        return t(e);
    }
    function _f(e) {
        return e.type === "extrude" && "sketchRef" in e && "depth" in e && "mode" in e;
    }
    function vf(e) {
        return e.type === "datum_plane" && "attachmentMode" in e;
    }
    function Ef(e, t) {
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
            if (!_f(e)) throw new A(`Body ${t}: extrude feature ${e.id} is missing v1 parameters`, {
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
            if (!vf(e)) throw new A(`Body ${t}: datum_plane feature ${e.id} is missing v1 parameters`, {
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
        if (e.type === "revolve" || e.type === "boolean") throw new A(`Body ${t}: feature ${e.id} type "${e.type}" cannot be migrated from v1 (missing specialized fields)`, {
            code: "migration-failed",
            bodyId: t,
            featureId: e.id
        });
        const n = e;
        throw new A(`Body ${t}: feature ${n.id} has unmigratable type "${String(n.type)}"`, {
            code: "migration-failed",
            bodyId: t,
            featureId: n.id
        });
    }
    function Af(e) {
        if (e.schemaVersion !== zi) throw new A(`migrateFeatureDocumentV1ToV2: expected schemaVersion 1, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const t = [], r = e.bodies.map((i)=>{
            const o = i.features.map((s)=>Ef(s, i.id));
            return t.push(`body ${i.id}: migrated ${o.length} feature(s)`), {
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: o
            };
        });
        return {
            document: {
                schemaVersion: is,
                id: e.id,
                name: e.name,
                bodies: r
            },
            log: {
                fromVersion: zi,
                toVersion: is,
                bodyIds: r.map((i)=>i.id),
                notes: t
            }
        };
    }
    const Of = {
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
    function Sn(e) {
        return Array.isArray(e) ? e.map(Sn) : typeof e != "object" || e === null ? e : Object.fromEntries(Object.entries(e).sort(([t], [r])=>t.localeCompare(r)).map(([t, r])=>[
                t,
                Sn(r)
            ]));
    }
    function Pf(e, t) {
        return JSON.stringify(Sn(e)) === JSON.stringify(Sn(t));
    }
    function $f(e) {
        if (e.type === "extrude" || e.type === "revolve") return e.sketchRef;
    }
    function Rf(e, t, r) {
        const n = e.map($f).filter((o)=>o?.sketchId === t).map((o)=>o.attachment).filter((o)=>o !== void 0);
        if (n.length === 0) return;
        const i = n[0];
        if (n.some((o)=>!Pf(i, o))) throw new A(`Body ${r}: sketch ${t} has conflicting legacy consumer attachments`, {
            code: "migration-failed",
            bodyId: r,
            featureId: t
        });
        return structuredClone(i);
    }
    function Cf(e) {
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
    function Mf(e, t, r) {
        return e ? e.kind === "base" ? Cf(t) ? {
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
    function Df(e) {
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
    function Tf(e, t, r, n) {
        const i = n.sketchAttachments?.[e.id] ?? Rf(r, e.id, t), o = n.sketchFrames?.[e.id];
        return {
            ...structuredClone(e),
            type: "sketch",
            placementPlane: _t({
                id: `${e.id}::placement-plane`,
                support: Mf(i, o, t),
                orientation: Df(i),
                normalReversed: i?.normalReversed ?? !1,
                frameSnapshot: o ?? Of
            })
        };
    }
    function Bf(e) {
        if (e.type !== "extrude" && e.type !== "revolve" || !e.sketchRef || typeof e.sketchRef != "object") return structuredClone(e);
        const { attachment: t, ...r } = e.sketchRef;
        return {
            ...structuredClone(e),
            sketchRef: structuredClone(r)
        };
    }
    function as(e, t = {}) {
        if (e.schemaVersion !== $r) throw new A(`migrateFeatureDocumentV2ToV3: expected schemaVersion 2, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const r = [], n = e.bodies.map((i)=>({
                ...structuredClone(i),
                features: i.features.map((o)=>o.type !== "sketch" ? Bf(o) : (r.push(o.id), Tf(o, i.id, i.features, t)))
            }));
        return {
            document: {
                schemaVersion: xn,
                id: e.id,
                name: e.name,
                bodies: n
            },
            log: {
                fromVersion: $r,
                toVersion: xn,
                migratedSketchIds: r,
                notes: [
                    `migrated ${r.length} private sketch plane(s)`
                ]
            }
        };
    }
    const jf = "LegacyPart";
    function za(e) {
        return `${e}::LegacyPart`;
    }
    function zf(e, t) {
        if (!e || typeof e.id != "string" || typeof e.name != "string") throw new A(`migrateV3ToV4: invalid body at index ${t}`, {
            code: "invalid-schema",
            bodyId: e?.id
        });
        if (!Array.isArray(e.features)) throw new A(`migrateV3ToV4: body ${e.id} has malformed features`, {
            code: "invalid-schema",
            bodyId: e.id
        });
        const r = new Set;
        for (const n of e.features){
            if (!n || typeof n.id != "string") throw new A(`migrateV3ToV4: body ${e.id} has malformed feature entry`, {
                code: "invalid-schema",
                bodyId: e.id
            });
            if (r.has(n.id)) throw new A(`migrateV3ToV4: body ${e.id} has duplicate feature id ${n.id}`, {
                code: "invalid-schema",
                bodyId: e.id,
                featureId: n.id
            });
            r.add(n.id);
        }
    }
    function Vf(e) {
        if (e.schemaVersion !== xn) throw new A(`migrateV3ToV4: expected schemaVersion 3, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.bodies)) throw new A("migrateV3ToV4: invalid v3 envelope", {
            code: "invalid-schema"
        });
        const t = new Set;
        for(let i = 0; i < e.bodies.length; i++){
            const o = e.bodies[i];
            if (zf(o, i), t.has(o.id)) throw new A(`migrateV3ToV4: duplicate body id ${o.id}`, {
                code: "invalid-schema",
                bodyId: o.id
            });
            t.add(o.id);
        }
        const r = za(e.id), n = {
            id: r,
            name: jf,
            visible: !0,
            transform: wo(),
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
                schemaVersion: tr,
                id: e.id,
                name: e.name,
                parts: [
                    n
                ]
            }
        };
    }
    const Va = ko(5), Nf = Sf;
    function Na(e) {
        return wf(e);
    }
    function Kf(e, t) {
        return xf(e, t);
    }
    function qf(e) {
        return {
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: e.getFeatures().map(Na)
        };
    }
    function Hf(e) {
        const t = e.getParts();
        return t.length > 0 ? {
            schemaVersion: tr,
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
                    bodies: r.getBodies().map(qf)
                }))
        } : {
            schemaVersion: tr,
            id: e.id,
            name: e.name,
            parts: []
        };
    }
    function Vi(e) {
        return Array.isArray(e) ? e.map(Vi) : We(e) ? Object.fromEntries(Object.entries(e).filter(([, t])=>t !== void 0).map(([t, r])=>[
                t,
                Vi(r)
            ])) : e;
    }
    function Lf(e) {
        const t = Vi(Na(e)), { envelope: r } = Pc(t);
        return Object.freeze({
            ...r,
            featurePayloadVersion: Nf
        });
    }
    function Uf(e) {
        return Object.freeze({
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: Object.freeze(e.getFeatures().map(Lf))
        });
    }
    function Wf(e) {
        return Object.freeze({
            documentFormatVersion: Va,
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
                    bodies: Object.freeze(t.getBodies().map(Uf))
                })))
        });
    }
    Eg = function(e, t = {}) {
        return t.format === "v5" ? Wf(e) : Hf(e);
    };
    function We(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function it(e, t) {
        if (typeof e != "string" || e.length === 0) throw new A(`FeatureDocument v5: ${t} must be a non-empty string`, {
            code: "invalid-schema"
        });
        return e;
    }
    function ds(e, t, r) {
        if (!Array.isArray(e) || e.length !== t || e.some((n)=>typeof n != "number" || !Number.isFinite(n))) throw new A(`FeatureDocument v5: ${r} must contain ${t} finite numbers`, {
            code: "invalid-schema"
        });
        return [
            ...e
        ];
    }
    function Gf(e, t) {
        if (!We(e) || !We(e.parameters) || !We(e.references)) throw new A(`Body ${t}: invalid v5 Feature envelope`, {
            code: "corrupt-feature",
            bodyId: t
        });
        try {
            const r = or({
                id: it(e.id, "feature.id"),
                typeId: it(e.typeId, "feature.typeId"),
                name: typeof e.name == "string" ? e.name : "",
                suppressed: e.suppressed === !0,
                timestamp: e.timestamp,
                parameters: e.parameters,
                references: e.references
            });
            return Object.freeze({
                ...r,
                featurePayloadVersion: ja(e.featurePayloadVersion)
            });
        } catch (r) {
            throw r instanceof A ? r : new A(`Body ${t}: invalid v5 Feature ${String(e.id ?? "?")}: ${r instanceof Error ? r.message : String(r)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: typeof e.id == "string" ? e.id : void 0
            });
        }
    }
    function Yf(e) {
        if (!We(e)) throw new A("FeatureDocument v5: payload is not an object", {
            code: "invalid-schema"
        });
        let t;
        try {
            t = ko(e.documentFormatVersion);
        } catch  {
            throw new A("FeatureDocument v5: invalid documentFormatVersion", {
                code: "unsupported-version"
            });
        }
        if (t !== Va) throw new A(`FeatureDocument v5: unsupported documentFormatVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (!Array.isArray(e.parts)) throw new A("FeatureDocument v5: parts must be an array", {
            code: "invalid-schema"
        });
        const r = e.parts.map((n, i)=>{
            if (!We(n) || !Array.isArray(n.bodies)) throw new A(`FeatureDocument v5: invalid part at index ${i}`, {
                code: "invalid-schema"
            });
            const o = it(n.id, `parts[${i}].id`);
            if (!We(n.transform)) throw new A(`FeatureDocument v5: Part ${o} has invalid transform`, {
                code: "invalid-schema"
            });
            const s = n.bodies.map((a, d)=>{
                if (!We(a) || !Array.isArray(a.features)) throw new A(`FeatureDocument v5: invalid Body at ${o}[${d}]`, {
                    code: "invalid-schema"
                });
                const c = it(a.id, `parts.${o}.bodies[${d}].id`);
                let u;
                if (a.tipFeatureId === null) u = null;
                else if (typeof a.tipFeatureId == "string") u = a.tipFeatureId;
                else throw new A(`FeatureDocument v5: Body ${c} has invalid tipFeatureId`, {
                    code: "invalid-schema",
                    bodyId: c
                });
                return Object.freeze({
                    id: c,
                    name: it(a.name, `Body ${c}.name`),
                    tipFeatureId: u,
                    features: Object.freeze(a.features.map((p)=>Gf(p, c)))
                });
            });
            return Object.freeze({
                id: o,
                name: it(n.name, `Part ${o}.name`),
                visible: n.visible !== !1,
                transform: Object.freeze({
                    origin: Object.freeze(ds(n.transform.origin, 3, `Part ${o}.origin`)),
                    rotation: Object.freeze(ds(n.transform.rotation, 9, `Part ${o}.rotation`))
                }),
                bodies: Object.freeze(s)
            });
        });
        return Object.freeze({
            documentFormatVersion: t,
            id: it(e.id, "document.id"),
            name: it(e.name, "document.name"),
            parts: Object.freeze(r)
        });
    }
    function Zf(e) {
        const t = or({
            id: e.id,
            typeId: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp,
            parameters: e.parameters,
            references: e.references
        });
        return $c(t);
    }
    function xo(e, t) {
        const r = [];
        for (const n of e){
            if (!n?.id || !n?.name || !Array.isArray(n.features)) throw new A(`FeatureSerializer: invalid body payload ${String(n?.id ?? "?")}`, {
                code: "invalid-schema",
                bodyId: n?.id
            });
            const i = n.features.map((o)=>Kf(o, n.id));
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
    function Jf(e) {
        const t = e.map((r)=>({
                id: r.id,
                getFeatures: ()=>r.features
            }));
        for (const r of e)try {
            Ti({
                bodyId: r.id,
                features: r.features,
                tipFeatureId: r.tipFeatureId,
                foreignFeatureIds: Bi(r.id, t)
            });
        } catch (n) {
            throw n instanceof tt ? new A(n.message, {
                code: "invariant-violation",
                bodyId: n.bodyId,
                featureId: n.featureId
            }) : n;
        }
    }
    function So(e, t, r, n) {
        Jf(n);
        const i = new Ba({
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
            const s = new Ta({
                id: o.id,
                name: o.name,
                partId: o.partId
            });
            s.restoreFeatureState(o.features, o.tipFeatureId), i.addBody(s);
        }
        return i;
    }
    function Xf(e) {
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
        }), r.push(...xo(n.bodies.map((i)=>({
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: i.features.map(Zf)
            })), n.id));
        return So(e.id, e.name, t, r);
    }
    function Qf(e) {
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.parts)) throw new A("FeatureSerializer: invalid v4 document envelope", {
            code: "invalid-schema"
        });
        const t = [], r = [];
        for (const n of e.parts){
            if (!n?.id || !n?.name || !Array.isArray(n.bodies)) throw new A(`FeatureSerializer: invalid part payload ${String(n?.id ?? "?")}`, {
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
                } : wo(),
                bodyIds: n.bodies.map((i)=>i.id)
            }), r.push(...xo(n.bodies, n.id));
        }
        return So(e.id, e.name, t, r);
    }
    Ag = function(e, t = {}) {
        if (!We(e)) throw new A("FeatureSerializer: payload is not an object", {
            code: "invalid-schema"
        });
        if (Object.hasOwn(e, "documentFormatVersion")) return Xf(Yf(e));
        const r = e.schemaVersion;
        if (r === tr) return Ff(e, Qf);
        let n;
        if (r === xn) n = e;
        else if (r === $r) n = as(e, t).document;
        else if (r === zi) {
            const { document: d } = Af(e);
            n = as(d, t).document;
        } else throw new A(`FeatureSerializer: unsupported schema version ${String(r)}`, {
            code: "unsupported-version"
        });
        const { document: i, legacyPartId: o } = Vf(n), s = i.parts.map((d)=>({
                id: d.id,
                name: d.name,
                visible: d.visible,
                transform: d.transform,
                bodyIds: d.bodies.map((c)=>c.id)
            })), a = [];
        for (const d of i.parts)a.push(...xo(d.bodies, d.id));
        if (o !== za(n.id)) throw new A("migrateV3ToV4: legacy Part id mismatch", {
            code: "invalid-schema"
        });
        return So(i.id, i.name, s, a);
    };
    let ep;
    ep = "featureDocument";
    Og = 2;
    function si(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    tp = function(e) {
        if (typeof e != "object" || e === null) return !1;
        const t = e;
        if (t.kind !== "feature-document-project-slice" || t.sliceVersion !== 1 && t.sliceVersion !== 2 || typeof t.featureDocument != "object" || t.featureDocument === null) return !1;
        const r = si(t.profiles), n = t.bodyProfiles === void 0 || si(t.bodyProfiles);
        return t.sliceVersion === 1 ? r : n && (r || si(t.bodyProfiles));
    };
    rp = function(e) {
        if (!tp(e)) throw new A("FeatureDocument project slice is missing or invalid", {
            code: "invalid-schema"
        });
        const t = e.featureDocument.schemaVersion;
        if (t !== 1 && t !== $r && t !== 3 && t !== tr) throw new A(`FeatureDocument project slice has unsupported schemaVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (e.derivedCache && e.derivedCache.kind !== "derivedCache") throw new A('FeatureDocument project slice derivedCache must set kind: "derivedCache"', {
            code: "invalid-schema"
        });
        if (e.derivedCache && delete e.derivedCache, e.sketchDocument != null) {
            const r = e.sketchDocument;
            if (typeof r.schemaVersion != "number" || typeof r.id != "string" || typeof r.revision != "number" || !Array.isArray(r.sketches)) throw new A("FeatureDocument project slice sketchDocument is invalid", {
                code: "invalid-schema"
            });
        }
        return e.profiles == null && (e.profiles = {}), e;
    };
    Pg = function(e) {
        if (typeof e != "object" || e === null) return null;
        const t = e[ep];
        return t == null ? null : rp(t);
    };
    function Kt(e, t = 0) {
        if (t > 14 || e == null) return !1;
        if (ArrayBuffer.isView(e)) return !0;
        if (Array.isArray(e)) return e.some((r)=>Kt(r, t + 1));
        if (typeof e != "object") return !1;
        for (const r of Object.values(e))if (Kt(r, t + 1)) return !0;
        return !1;
    }
    np = function(e) {
        if (e == null || typeof e != "object") return !1;
        const t = e;
        return !!(t.derivedCache != null || t.tessellation != null || t.tipMesh != null || t.meshes != null || t.meshCache != null || Kt(t.profiles) || Kt(t.bodyProfiles) || Kt(t.derivedCache) || Kt(t.featureDocument));
    };
    $g = function(e, t = "project slice") {
        if (np(e)) throw new Error(`${t} contains display geometry (tessellation/mesh typed arrays or derivedCache). Only OCC-rebuildable semantic objects may be persisted.`);
    };
    const Ka = 256 * 1024;
    function Oe(e) {
        const t = new Set, r = [], n = (i)=>{
            if (!i) return;
            const o = i.buffer;
            t.has(o) || (t.add(o), r.push(o));
        };
        return n(e.positions), n(e.normals), n(e.indices), n(e.uvs), n(e.colors), r;
    }
    function qa(e) {
        return Oe(e).reduce((t, r)=>t + r.byteLength, 0);
    }
    function ip(e) {
        return qa(e) >= Ka;
    }
    const ar = 1;
    function Fo(e) {
        const t = e;
        return !t || t.protocolVersion !== ar || !t.requestId || !t.bodyId || !t.featureId || !Number.isInteger(t.revision) || t.revision < 0 || !Number.isFinite(t.deadlineMs) || !t.operation || !t.payload ? {
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
    function op(e) {
        return e.mesh;
    }
    const Lt = ar;
    function sp(e) {
        return Fo(e);
    }
    function ap(e) {
        return e === Lt;
    }
    function Ha(e) {
        return {
            type: "hello",
            protocolVersion: Lt,
            capabilities: e
        };
    }
    function La(e) {
        if (!e || typeof e != "object" || e.type !== "hello") return {
            accepted: !1,
            protocolVersion: Lt,
            reason: "invalid hello"
        };
        const t = e.protocolVersion;
        return t === Lt ? {
            accepted: !0,
            protocolVersion: t
        } : {
            accepted: !1,
            protocolVersion: Lt,
            reason: `unsupported protocol version ${t}`
        };
    }
    function dp(e) {
        if (!e || typeof e != "object") return [];
        const t = [];
        for (const r of Object.values(e))r instanceof ArrayBuffer ? t.push(r) : ArrayBuffer.isView(r) && t.push(r.buffer.slice(0));
        return t;
    }
    function cp(e, t) {
        return e.requestId === t.requestId && t.revision >= e.revision;
    }
    class up {
        constructor(t){
            this.client = t;
        }
        client;
        negotiated = !1;
        negotiate() {
            const t = La(Ha({
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
    class lp {
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
    class fp {
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
    class rn extends Error {
        constructor(t){
            super(t), this.name = "FeatureBuildHandlerRegistryError";
        }
    }
    class Ua {
        handlers = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new rn("Feature build handler registry is frozen");
            if (!t.typeId.trim()) throw new rn("Feature build handler typeId is required");
            if (this.handlers.has(t.typeId)) throw new rn(`Duplicate Feature build handler: ${t.typeId}`);
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
    class pp {
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
    function nn(e) {
        return Qt({
            deleted: [
                e
            ]
        }).deleted[0];
    }
    function jt(e) {
        const t = nn(e);
        return [
            t.producerFeatureId,
            t.outputKey,
            t.semanticId
        ].join("\0");
    }
    function lt(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function hp(e) {
        const t = Qt({
            deleted: e.outputIdentities
        }).deleted, r = new Set(t.map(jt)), n = new Set, i = [], o = [], s = [];
        for (const a of e.evidence){
            const d = nn(a.input), c = jt(d);
            if (n.has(c)) throw new Error(`Duplicate Boolean history classification for ${lt(d)}`);
            if (n.add(c), a.outcome === "retained") {
                const u = nn(a.output);
                if (jt(d) !== jt(u)) throw new Error(`Boolean retained evidence changed identity ${lt(d)}`);
                if (!r.has(jt(u))) throw new Error(`Boolean retained output is missing: ${lt(u)}`);
                continue;
            }
            if (a.outcome === "modified") {
                if (a.outputs.length === 0) throw new Error(`Boolean modified evidence has no outputs: ${lt(d)}`);
                for (const u of a.outputs){
                    const p = nn(u);
                    if (!r.has(jt(p))) throw new Error(`Boolean modified output is missing: ${lt(p)}`);
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
            if (!a.reason.trim()) throw new Error(`Boolean unresolved history reason is required for ${lt(d)}`);
            s.push(Object.freeze({
                severity: "warning",
                code: "boolean-history-unresolved",
                message: `Boolean ${e.operation} could not prove topology identity for ${lt(d)}: ${a.reason}`,
                details: {
                    operation: e.operation,
                    producerFeatureId: d.producerFeatureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }
            }));
        }
        return Object.freeze({
            history: Qt({
                modified: i,
                deleted: o
            }),
            outputIdentities: t,
            diagnostics: Object.freeze(s)
        });
    }
    function mp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function ai(e, t) {
        if (typeof e != "string" || !e.trim()) throw new Error(`Topology reference ${t} must be a non-empty string`);
        return e;
    }
    function cs(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`Topology reference ${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function kt(e, t, r) {
        if (!mp(e)) throw new Error(`${r} must be a topology reference object`);
        if (Object.hasOwn(e, "occEdgeOrdinal")) throw new Error(`${r} cannot contain a runtime OCC ordinal`);
        if (e.subshapeKind !== t) throw new Error(`${r}.subshapeKind must be ${t}`);
        const n = e.hintCentroid === void 0 ? void 0 : cs(e.hintCentroid, `${r}.hintCentroid`), i = e.samplePoints === void 0 ? void 0 : Array.isArray(e.samplePoints) ? Object.freeze(e.samplePoints.map((o, s)=>cs(o, `${r}.samplePoints[${s}]`))) : (()=>{
            throw new Error(`${r}.samplePoints must be an array`);
        })();
        return Object.freeze({
            producerFeatureId: ai(e.producerFeatureId, `${r}.producerFeatureId`),
            outputKey: ai(e.outputKey, `${r}.outputKey`),
            subshapeKind: t,
            semanticId: ai(e.semanticId, `${r}.semanticId`),
            ...n ? {
                hintCentroid: n
            } : {},
            ...i ? {
                samplePoints: i
            } : {}
        });
    }
    function xt(e, t, r) {
        if (!Array.isArray(e)) throw new Error(`${r} must be an array`);
        return Object.freeze(e.map((n, i)=>kt(n, t, `${r}[${i}]`)));
    }
    function yp(e, t, r) {
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
    async function vt(e, t, r) {
        const n = [];
        for (const i of t){
            const o = await r.resolve(i);
            if (o.status !== "resolved") return Object.freeze({
                status: "failed",
                result: yp(e, i, o)
            });
            n.push(o.value);
        }
        return Object.freeze({
            status: "resolved",
            values: Object.freeze(n)
        });
    }
    function _o(e, t, r, n) {
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
    function gp(e) {
        const t = e.parameters.operation;
        if (t !== "union" && t !== "cut" && t !== "intersect") throw new Error(`Unsupported Boolean operation: ${String(t)}`);
        return t;
    }
    function di(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class Ip {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "boolean";
        async build(t) {
            const r = [
                kt(t.references.target, "solid", "references.target"),
                kt(t.references.tool, "solid", "references.tool")
            ], n = await vt(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = gp(t), o = await this.kernel.build(t, n.values), s = hp({
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
                            inputSemanticId: di(d.input),
                            outputSemanticIds: d.outputs.map(di)
                        })),
                    deleted: s.history.deleted.map(di)
                },
                diagnostics: s.diagnostics
            });
        }
    }
    class bp {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "chamfer";
        async build(t) {
            const r = xt(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await vt(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return _o(t, "chamfer", i.solidData, i.diagnostics);
        }
    }
    class wp {
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
    const kp = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, xp = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function Le(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function us(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function ls(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                inputSemanticId: Le(t.input),
                outputSemanticIds: Object.freeze(t.outputs.map(Le))
            })));
    }
    function Sp(e) {
        const t = e.topologyOutputs.map((d, c)=>Object.freeze({
                outputKey: us(d.outputKey, kp, `topologyOutputs[${c}].outputKey`),
                kind: d.kind,
                semanticId: us(d.semanticId, xp, `topologyOutputs[${c}].semanticId`),
                ...d.data ? {
                    data: d.data
                } : {}
            })), r = t.map((d)=>d.outputKey);
        if (r.includes("solid")) throw new Error("Runner topology output key solid is reserved");
        if (new Set(r).size !== r.length) throw new Error("Runner topology output keys must be unique");
        const n = Qt(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Runner requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((d)=>Le({
                    producerFeatureId: e.featureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }))
        ]), s = new Set;
        for (const d of [
            ...n.generated,
            ...n.modified
        ])for (const c of d.outputs){
            const u = Le(c);
            if (!o.has(u)) throw new Error(`ShapeHistory output ${u} is not a published runner output`);
            s.add(u);
        }
        for (const d of o)if (!s.has(d)) throw new Error(`Published runner output ${d} has no ShapeHistory evidence`);
        const a = new Set([
            ...n.generated.map((d)=>Le(d.input)),
            ...n.modified.map((d)=>Le(d.input)),
            ...n.deleted.map(Le)
        ]);
        for (const d of e.sourceReferences){
            const c = Le(d);
            if (!a.has(c)) throw new Error(`Runner input ${c} has no explicit ShapeHistory evidence`);
        }
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: ls(n.generated),
            modified: ls(n.modified),
            deleted: Object.freeze(n.deleted.map(Le))
        });
    }
    function Fp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Sr(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`${t} must be a positive finite number`);
        return e;
    }
    function _p(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function vp(e) {
        if (e !== "frenet" && e !== "fixed" && e !== "surface_normal") throw new Error("parameters.orientation must be frenet, fixed, or surface_normal");
        return e;
    }
    function Ep(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function Ap(e, t, r, n) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.sectionLaw must contain at least two controls");
        const i = new Set;
        let o = -1 / 0;
        const s = e.map((a, d)=>{
            if (!Fp(a)) throw new Error(`parameters.sectionLaw[${d}] must be an object`);
            const c = _p(a.id, `parameters.sectionLaw[${d}].id`);
            if (i.has(c)) throw new Error(`parameters.sectionLaw contains duplicate id ${c}`);
            if (i.add(c), typeof a.position != "number" || !Number.isFinite(a.position) || a.position < 0 || a.position > 1) throw new Error(`parameters.sectionLaw[${d}].position must be finite and between 0 and 1`);
            if (a.position <= o) throw new Error("parameters.sectionLaw positions must be strictly increasing");
            o = a.position;
            const u = Sr(a.widthScale, `parameters.sectionLaw[${d}].widthScale`), p = Sr(a.heightScale, `parameters.sectionLaw[${d}].heightScale`), f = t * u * r * p, m = Math.max(1, n) * 1e-9;
            if (Math.abs(f - n) > m) throw new Error(`parameters.sectionLaw[${d}] violates area constraint ${n}`);
            return Object.freeze({
                id: c,
                position: a.position,
                widthScale: u,
                heightScale: p
            });
        });
        if (s[0].position !== 0 || s[s.length - 1].position !== 1) throw new Error("parameters.sectionLaw must cover positions 0 and 1");
        return Object.freeze(s);
    }
    function fs(e, t, r) {
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
    function ci(e, t) {
        return Object.freeze({
            reference: e,
            value: t
        });
    }
    class Op {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "custom-die-casting-runner";
        async build(t) {
            const r = fs(xt(t.references.profileCurveReferences, "edge", "references.profileCurveReferences"), "references.profileCurveReferences", 2), n = kt(t.references.spineReference, "edge", "references.spineReference"), i = fs(xt(t.references.surfaceReferences, "face", "references.surfaceReferences"), "references.surfaceReferences", 1), o = Sr(t.parameters.width, "parameters.width"), s = Sr(t.parameters.height, "parameters.height"), a = Sr(t.parameters.areaConstraint, "parameters.areaConstraint"), d = Ap(t.parameters.sectionLaw, o, s, a), c = vp(t.parameters.orientation), u = Ep(t.parameters.continuity), p = Object.freeze([
                ...r,
                n,
                ...i
            ]), f = await vt(t, p, this.references);
            if (f.status === "failed") return f.result;
            const m = r.length, y = Object.freeze(r.map((I, S)=>ci(I, f.values[S]))), x = ci(n, f.values[m]), _ = Object.freeze(i.map((I, S)=>ci(I, f.values[m + 1 + S]))), g = await this.kernel.build(t, Object.freeze({
                profileCurves: y,
                spine: x,
                surfaces: _,
                width: o,
                height: s,
                areaConstraint: a,
                sectionLaw: d,
                orientation: c,
                continuity: u
            })), l = Sp({
                featureId: t.featureId,
                sourceReferences: p,
                topologyOutputs: g.topologyOutputs,
                historyEvidence: g.historyEvidence
            }), b = l.topologyOutputs.map((I)=>Object.freeze({
                    producerFeatureId: t.featureId,
                    outputKey: I.outputKey,
                    semanticId: I.semanticId
                })), h = Object.fromEntries([
                [
                    "solid",
                    {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...g.solidData,
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
                ...l.topologyOutputs.map((I)=>[
                        I.outputKey,
                        {
                            outputKey: I.outputKey,
                            kind: I.kind,
                            data: {
                                ...I.data,
                                semanticIdentity: {
                                    producerFeatureId: t.featureId,
                                    outputKey: I.outputKey,
                                    semanticId: I.semanticId
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
                outputs: h,
                shapeHistory: {
                    generated: l.generated,
                    modified: l.modified,
                    deleted: l.deleted
                },
                diagnostics: g.diagnostics
            });
        }
    }
    class Pp {
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
    function ps(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class $p {
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
                            inputSemanticId: ps(r.modifiedInput),
                            outputSemanticIds: [
                                ps(n)
                            ]
                        }
                    ],
                    deleted: []
                },
                diagnostics: r.diagnostics
            });
        }
    }
    function Rp(e) {
        return e.replaceAll("_", "-");
    }
    function hs(e) {
        return e.startsWith("side_") || /^hole_\d+_side_\d+$/.test(e);
    }
    function Cp(e, t, r) {
        return {
            producerFeatureId: e,
            outputKey: t,
            semanticId: r
        };
    }
    function Mp(e) {
        const t = new Map;
        for (const u of e.faces){
            if (!u.role.trim()) throw new Error("Extrude face role must not be empty");
            if (t.has(u.role)) throw new Error(`Duplicate Extrude face role: ${u.role}`);
            t.set(u.role, u);
        }
        for (const u of [
            "top",
            "bottom"
        ])if (!t.has(u)) throw new Error(`Extrude topology is missing required ${u} face`);
        const r = new Map;
        for (const u of e.profile.sides){
            if (r.has(u.outputRole)) throw new Error(`Duplicate Extrude profile side mapping: ${u.outputRole}`);
            r.set(u.outputRole, u);
        }
        const n = [
            ...t.keys()
        ].filter(hs).sort();
        if (n.length === 0) throw new Error("Extrude topology must contain at least one side face");
        for (const u of n)if (!r.has(u)) throw new Error(`Extrude side face ${u} has no explicit profile semantic source`);
        for (const u of r.keys())if (!t.has(u) || !hs(u)) throw new Error(`Extrude profile semantic source targets missing side face ${u}`);
        const i = [], o = (u, p, f, m, y = {})=>{
            const x = Cp(e.featureId, u, f);
            return i.push([
                u,
                {
                    outputKey: u,
                    kind: p,
                    data: {
                        ...y,
                        role: m,
                        semanticIdentity: x
                    }
                }
            ]), x;
        }, s = o("solid", "solid", "solid:result", "solid", e.solidData), a = o("top", "topology-face", "face:top", "top", t.get("top")?.data), d = o("bottom", "topology-face", "face:bottom", "bottom", t.get("bottom")?.data), c = [
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
        for (const u of n){
            const p = Rp(u), f = o(p, "topology-face", `face:${u}`, u, t.get(u)?.data), m = r.get(u);
            c.push({
                input: {
                    producerFeatureId: e.profile.producerFeatureId,
                    outputKey: e.profile.outputKey,
                    semanticId: m.inputSemanticId
                },
                outputs: [
                    f
                ]
            });
        }
        return Object.freeze({
            outputs: Object.freeze(Object.fromEntries(i)),
            shapeHistory: Qt({
                generated: c
            })
        });
    }
    function ms(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function pr(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`Extrude profile semantic reference ${t} is required`);
        return e;
    }
    function Dp(e) {
        if (!ms(e) || !Array.isArray(e.sides)) throw new Error("Extrude request requires references.profile with explicit semantic sides");
        const t = e.sides.map((r, n)=>{
            if (!ms(r)) throw new Error(`Extrude profile semantic side ${n} must be an object`);
            return Object.freeze({
                inputSemanticId: pr(r.inputSemanticId, `sides[${n}].inputSemanticId`),
                outputRole: pr(r.outputRole, `sides[${n}].outputRole`)
            });
        });
        return Object.freeze({
            producerFeatureId: pr(e.producerFeatureId, "producerFeatureId"),
            outputKey: pr(e.outputKey, "outputKey"),
            wireSemanticId: pr(e.wireSemanticId, "wireSemanticId"),
            sides: Object.freeze(t)
        });
    }
    function ys(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class Tp {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "extrude";
        async build(t) {
            const r = await this.kernel.build(t), n = Mp({
                featureId: t.featureId,
                profile: Dp(t.references.profile),
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
                            inputSemanticId: ys(i.input),
                            outputSemanticIds: i.outputs.map(ys)
                        })),
                    modified: [],
                    deleted: []
                }
            });
        }
    }
    class Bp {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "fillet";
        async build(t) {
            const r = xt(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await vt(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return _o(t, "fillet", i.solidData, i.diagnostics);
        }
    }
    class jp {
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
    class zp {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "thickness";
        async build(t) {
            const r = xt(t.references.removedFaceSelectors, "face", "references.removedFaceSelectors");
            if (r.length === 0) throw new Error("Thickness requires at least one removed face reference");
            const n = await vt(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return _o(t, "thickness", i.solidData, i.diagnostics);
        }
    }
    const Vp = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, Np = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function Me(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function gs(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function Kp(e) {
        return Me(e);
    }
    function qp(e) {
        const t = e.topologyOutputs.map((u, p)=>Object.freeze({
                outputKey: gs(u.outputKey, Vp, `topologyOutputs[${p}].outputKey`),
                kind: u.kind,
                semanticId: gs(u.semanticId, Np, `topologyOutputs[${p}].semanticId`),
                ...u.data ? {
                    data: u.data
                } : {}
            })), r = t.map((u)=>u.outputKey);
        if (r.includes("solid")) throw new Error("topology output key solid is reserved for the primary output");
        if (new Set(r).size !== r.length) throw new Error("Variable-radius fillet topology output keys must be unique");
        const n = Qt(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Variable-radius fillet requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((u)=>Me({
                    producerFeatureId: e.featureId,
                    outputKey: u.outputKey,
                    semanticId: u.semanticId
                }))
        ]), s = new Set;
        for (const u of [
            ...n.generated,
            ...n.modified
        ])for (const p of u.outputs){
            const f = Me(p);
            if (!o.has(f)) throw new Error(`ShapeHistory output ${f} is not a published variable-radius fillet output`);
            s.add(f);
        }
        if (!s.has(i)) throw new Error("ShapeHistory must map the primary solid output explicitly");
        for (const u of o)if (!s.has(u)) throw new Error(`Published output ${u} has no ShapeHistory evidence`);
        if (!n.modified.some((u)=>u.input.producerFeatureId === e.baseFeatureId && u.outputs.some((p)=>Me(p) === i))) throw new Error("ShapeHistory must explicitly modify the selected base into the solid output");
        const d = new Set([
            ...n.generated.map((u)=>Me(u.input)),
            ...n.modified.map((u)=>Me(u.input)),
            ...n.deleted.map(Me)
        ]);
        for (const u of e.selectedEdges){
            const p = Kp(u);
            if (!d.has(p)) throw new Error(`Selected edge ${p} has no explicit ShapeHistory evidence`);
        }
        const c = (u)=>Object.freeze(u.map((p)=>Object.freeze({
                    inputSemanticId: Me(p.input),
                    outputSemanticIds: Object.freeze(p.outputs.map(Me))
                })));
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: c(n.generated),
            modified: c(n.modified),
            deleted: Object.freeze(n.deleted.map(Me))
        });
    }
    function Hp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Wa(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function Lp(e) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.radiusLaw must contain at least two controls");
        const t = new Set;
        let r = -1 / 0;
        const n = e.map((i, o)=>{
            if (!Hp(i)) throw new Error(`parameters.radiusLaw[${o}] must be an object`);
            const s = Wa(i.id, `parameters.radiusLaw[${o}].id`);
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
    function Up(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function Wp(e) {
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
    class Gp {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "variable-radius-fillet";
        async build(t) {
            const r = Wa(t.references.baseFeatureId, "references.baseFeatureId"), n = Wp(xt(t.references.edgeReferences, "edge", "references.edgeReferences")), i = Lp(t.parameters.radiusLaw), o = Up(t.parameters.continuity);
            if (typeof t.parameters.tangentPropagation != "boolean") throw new Error("parameters.tangentPropagation must be boolean");
            const s = await vt(t, n, this.references);
            if (s.status === "failed") return s.result;
            const a = Object.freeze(n.map((m, y)=>Object.freeze({
                    reference: m,
                    value: s.values[y]
                }))), d = await this.kernel.build(t, Object.freeze({
                baseFeatureId: r,
                edges: a,
                radiusLaw: i,
                continuity: o,
                tangentPropagation: t.parameters.tangentPropagation
            })), c = qp({
                featureId: t.featureId,
                baseFeatureId: r,
                selectedEdges: n,
                topologyOutputs: d.topologyOutputs,
                historyEvidence: d.historyEvidence
            }), u = Object.freeze({
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            }), p = c.topologyOutputs.map((m)=>Object.freeze({
                    producerFeatureId: t.featureId,
                    outputKey: m.outputKey,
                    semanticId: m.semanticId
                })), f = Object.fromEntries([
                [
                    "solid",
                    {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...d.solidData,
                            operation: "variable-radius-fillet",
                            semanticIdentity: u,
                            topologyIdentities: p
                        }
                    }
                ],
                ...c.topologyOutputs.map((m)=>[
                        m.outputKey,
                        {
                            outputKey: m.outputKey,
                            kind: m.kind,
                            data: {
                                ...m.data,
                                semanticIdentity: {
                                    producerFeatureId: t.featureId,
                                    outputKey: m.outputKey,
                                    semanticId: m.semanticId
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
                outputs: f,
                shapeHistory: {
                    generated: c.generated,
                    modified: c.modified,
                    deleted: c.deleted
                },
                diagnostics: d.diagnostics
            });
        }
    }
    function Yp(e, t) {
        const r = {};
        return e.forEach((n, i)=>{
            (r[n.field] ??= []).push(t[i]);
        }), Object.freeze(Object.fromEntries(Object.entries(r).map(([n, i])=>[
                n,
                Object.freeze(i)
            ])));
    }
    class vo {
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
            ]), n = await vt(t, r.map((a)=>a.reference), this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, Yp(r, n.values)), o = new Set(this.spec.outputs.map((a)=>a.outputKey));
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
    const Zp = Object.freeze({
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
                        reference: kt(t, "face", "references.faceSelector")
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
    function Jp(e, t) {
        const r = (n)=>new vo(Zp[n], e[n], t);
        return Object.freeze({
            sketch: r("sketch"),
            datum_plane: r("datum_plane"),
            datum_axis: r("datum_axis"),
            shape_binder: r("shape_binder"),
            import: r("import")
        });
    }
    function Xp(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Is(e) {
        const t = e.references.toolRef;
        if (!Xp(t)) throw new Error("references.toolRef must be an object");
        if (Object.hasOwn(t, "subshapeKind")) return [
            {
                field: "toolRef",
                reference: kt(t, "face", "references.toolRef")
            }
        ];
        if (t.kind === "world_plane" || t.kind === "datum_plane") return [];
        if (t.kind === "face") return [
            {
                field: "toolRef",
                reference: kt(t.selector, "face", "references.toolRef.selector")
            }
        ];
        throw new Error(`references.toolRef has unsupported kind ${String(t.kind)}`);
    }
    function Qp(e) {
        return xt(e.references.faceSelectors, "face", "references.faceSelectors").map((t)=>({
                field: "faceSelectors",
                reference: t
            }));
    }
    function et(e, t) {
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
    const eh = Object.freeze({
        split: et("split", Is),
        trim: et("trim", Is),
        face_pull: et("face_pull", Qp),
        hole: et("hole"),
        revolve: et("revolve"),
        loft: et("loft"),
        pipe: et("pipe"),
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
        thread: et("thread")
    });
    function th(e, t) {
        const r = (n)=>new vo(eh[n], e[n], t);
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
    function Yr(e) {
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
    const rh = Object.freeze({
        multi_transform: Yr("multi_transform"),
        linear_pattern: Yr("linear_pattern"),
        polar_pattern: Yr("polar_pattern"),
        mirror: Yr("mirror")
    });
    function nh(e, t) {
        const r = (n)=>new vo(rh[n], e[n], t);
        return Object.freeze({
            multi_transform: r("multi_transform"),
            linear_pattern: r("linear_pattern"),
            polar_pattern: r("polar_pattern"),
            mirror: r("mirror")
        });
    }
    function ih(e, t) {
        const r = Jp(t.referenceFeatures, t.topologyReferences), n = th(t.operationFeatures, t.topologyReferences), i = nh(t.transformFeatures, t.topologyReferences), o = Object.freeze({
            sketch: r.sketch,
            datum_plane: r.datum_plane,
            datum_axis: r.datum_axis,
            draft: new $p(t.draft),
            box: new pp(t.box),
            cylinder: new Pp(t.cylinder),
            cone: new wp(t.cone),
            sphere: new jp(t.sphere),
            split: n.split,
            trim: n.trim,
            face_pull: n.face_pull,
            multi_transform: i.multi_transform,
            shape_binder: r.shape_binder,
            extrude: new Tp(t.extrude),
            hole: n.hole,
            linear_pattern: i.linear_pattern,
            polar_pattern: i.polar_pattern,
            revolve: n.revolve,
            boolean: new Ip(t.boolean.kernel, t.boolean.references),
            fillet: new Bp(t.fillet.kernel, t.fillet.references),
            chamfer: new bp(t.chamfer.kernel, t.chamfer.references),
            thickness: new zp(t.thickness.kernel, t.thickness.references),
            mirror: i.mirror,
            loft: n.loft,
            pipe: n.pipe,
            helix: n.helix,
            thread: n.thread,
            import: r.import
        }), s = Object.freeze([
            ...pn.map((c)=>o[c]),
            ...t.variableRadiusFillet ? [
                new Gp(t.variableRadiusFillet.kernel, t.variableRadiusFillet.references)
            ] : [],
            ...t.customDieCastingRunner ? [
                new Op(t.customDieCastingRunner.kernel, t.customDieCastingRunner.references)
            ] : []
        ]), a = [];
        try {
            for (const c of s)a.push(e.register(c));
        } catch (c) {
            for (const u of [
                ...a
            ].reverse())u();
            throw c;
        }
        let d = !1;
        return ()=>{
            if (!d) {
                d = !0;
                for (const c of [
                    ...a
                ].reverse())c();
            }
        };
    }
    function W(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function M(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function $(e) {
        return typeof e == "string" && e.length > 0;
    }
    const oh = new Set([
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
    ]), sh = new Set([
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
    ]), ah = new Set([
        "union",
        "cut",
        "common",
        "intersect"
    ]), hr = new Set([
        "add",
        "cut"
    ]), dh = new Set([
        "offset_base",
        "on_face",
        "on_datum",
        "three_point",
        "on_path"
    ]), ch = new Set([
        "xy",
        "xz",
        "yz"
    ]), uh = new Set([
        "normal",
        "u",
        "v"
    ]);
    function P(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function lh(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function V(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Hn(e) {
        return W(e) && $(e.featureId) && $(e.role);
    }
    function Eo(e) {
        return W(e) ? e.kind === "world_plane" ? V(e.origin) && V(e.normal) : e.kind === "datum_plane" ? $(e.featureId) : e.kind === "face" ? Hn(e.selector) : !1 : !1;
    }
    function fh(e) {
        return Eo(e) || W(e) && e.kind === "edge_chain" && Array.isArray(e.selectors) && e.selectors.length > 0 && e.selectors.every(Hn);
    }
    function ph(e) {
        return W(e) ? e.kind === "world" ? V(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum_axis" ? $(e.featureId) : e.kind === "plane_normal" ? Eo(e.plane) : e.kind === "edge" ? Hn(e.selector) : !1 : !1;
    }
    function hh(e, t) {
        return !W(e) || !$(e.kind) ? P(`Revolve ${t} missing axisRef`, t) : e.kind === "world" ? !V(e.origin) || !V(e.direction) ? P(`Revolve ${t} world axis requires origin/direction`, t) : null : e.kind === "datum" ? !$(e.featureId) || !uh.has(String(e.axis)) ? P(`Revolve ${t} datum axis requires featureId/axis`, t) : null : e.kind === "datum_axis" ? $(e.featureId) ? null : P(`Revolve ${t} datum axis requires featureId`, t) : P(`Revolve ${t} has unknown axisRef.kind`, t);
    }
    function zt(e, t, r) {
        if (!W(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!Array.isArray(e.loops) || e.loops.length === 0) {
            const i = Array.isArray(e.geometry) ? e.geometry : [], o = i.reduce((a, d)=>(W(d) && typeof d.kind == "string" && (a[d.kind] = (a[d.kind] ?? 0) + 1), a), {}), s = Object.entries(o).map(([a, d])=>`${a}=${d}`).join(", ");
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
            if (!W(o) || !Array.isArray(o.points) || o.points.length < 3) return {
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
            for (const s of o.points)if (!W(s) || !M(s.x) || !M(s.y)) return {
                code: "missing-profile",
                message: `Sketch profile ${r} has invalid loop point`,
                featureId: t,
                recoverable: !1
            };
        }
        if (!V(e.origin) || !V(e.normal) || !V(e.uAxis) || !V(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = ro(e, t);
        return n ? {
            code: "missing-profile",
            message: n.message,
            featureId: t,
            recoverable: !1
        } : null;
    }
    function mh(e, t, r) {
        if (!W(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        const n = e;
        try {
            qn(n), Da(n);
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
    function yh(e, t, r) {
        if (!W(e)) return {
            code: "missing-profile",
            message: `Missing sketch path profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!V(e.origin) || !V(e.normal) || !V(e.uAxis) || !V(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch path profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = Array.isArray(e.geometry) ? e.geometry.filter((o)=>W(o) && (o.kind === "line" || o.kind === "bezier" || o.kind === "spline")) : [], i = Array.isArray(e.loops) ? e.loops.find((o)=>W(o) && o.isOuter)?.points : void 0;
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
            for (const a of s)if (!W(a) || !M(a.x) || !M(a.y)) return {
                code: "missing-profile",
                message: `Sketch path profile ${r} has invalid open path geometry`,
                featureId: t,
                recoverable: !1
            };
        }
        return null;
    }
    function bs(e, t, r) {
        if (!Array.isArray(e)) return P(`${r} ${t} requires edgeSelectors array`, t);
        for (const n of e){
            if (!W(n) || !$(n.featureId) || !$(n.role)) return P(`${r} ${t} has invalid edge selector`, t);
            if (n.hintCentroid !== void 0 && !V(n.hintCentroid)) return P(`${r} ${t} has invalid edge selector hint`, t);
            if (n.samplePoints !== void 0 && (!Array.isArray(n.samplePoints) || n.samplePoints.length < 2 || n.samplePoints.some((i)=>!V(i)))) return P(`${r} ${t} has invalid edge selector samplePoints`, t);
            if (n.occEdgeOrdinal !== void 0 && (typeof n.occEdgeOrdinal != "number" || !Number.isInteger(n.occEdgeOrdinal) || n.occEdgeOrdinal < 0)) return P(`${r} ${t} has invalid edge selector occEdgeOrdinal`, t);
        }
        return null;
    }
    function gh(e, t) {
        if (!W(e) || !$(e.id) || !$(e.type)) return P("Feature snapshot missing id/type");
        if (!oh.has(e.type)) return null;
        if (!$(e.name) || typeof e.suppressed != "boolean" || !lh(e.dependencyIds) || !M(e.timestamp)) return P(`Feature ${e.id} missing name/suppressed/dependencyIds/timestamp`, e.id);
        const r = e.id;
        switch(e.type){
            case "sketch":
            case "import":
                return null;
            case "datum_plane":
                {
                    if (!dh.has(String(e.attachmentMode)) || !ch.has(String(e.basePlane)) || !M(e.offset) || !M(e.width) || !M(e.height)) return P(`Datum ${r} missing attachmentMode/basePlane/offset/size`, r);
                    if (e.attachmentMode === "on_face") {
                        if (!W(e.faceSelector) || !$(e.faceSelector.featureId) || !$(e.faceSelector.role)) return P(`Datum ${r} attachmentMode on_face requires faceSelector`, r);
                    } else if (e.attachmentMode === "on_datum") {
                        if (!$(e.baseDatumId)) return P(`Datum ${r} attachmentMode on_datum requires baseDatumId`, r);
                    } else if (e.faceSelector !== null && e.faceSelector !== void 0 && (!W(e.faceSelector) || !$(e.faceSelector.featureId) || !$(e.faceSelector.role))) return P(`Datum ${r} has invalid faceSelector`, r);
                    if (e.attachmentMode === "three_point") {
                        if (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(V)) return P(`Datum ${r} attachmentMode three_point requires threePoints`, r);
                    } else if (e.threePoints !== null && e.threePoints !== void 0 && (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(V))) return P(`Datum ${r} has invalid threePoints`, r);
                    if (e.attachmentMode === "on_path") {
                        if (!$(e.pathFeatureId) || !M(e.pathParameter) || e.pathParameter < 0 || e.pathParameter > 1) return P(`Datum ${r} attachmentMode on_path requires pathFeatureId and pathParameter in [0,1]`, r);
                    } else if (e.pathFeatureId !== null && e.pathFeatureId !== void 0 && (!$(e.pathFeatureId) || e.pathParameter !== null && !M(e.pathParameter))) return P(`Datum ${r} has invalid path association`, r);
                    return null;
                }
            case "datum_axis":
                return !W(e.axisRef) || !$(e.axisRef.kind) ? P(`Datum Axis ${r} requires axisRef`, r) : e.axisRef.kind === "world" && (!V(e.axisRef.origin) || !V(e.axisRef.direction)) ? P(`Datum Axis ${r} has invalid world axis`, r) : e.axisRef.kind === "two_point" && (!V(e.axisRef.start) || !V(e.axisRef.end)) ? P(`Datum Axis ${r} has invalid two-point axis`, r) : e.axisRef.kind === "datum_intersection" && (!$(e.axisRef.firstDatumId) || !$(e.axisRef.secondDatumId) || e.axisRef.firstDatumId === e.axisRef.secondDatumId) ? P(`Datum Axis ${r} has invalid Datum Plane references`, r) : null;
            case "draft":
                return !$(e.baseFeatureId) || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !e.draftFaces.every(Hn) || !Array.isArray(e.hinges) || e.hinges.length < 1 || e.hinges.length > 2 || !e.hinges.every(fh) || !ph(e.direction) || !M(e.angle) || e.angle <= 0 || e.angle >= Math.PI / 2 || !W(e.split) || ![
                    "none",
                    "hinge",
                    "reference"
                ].includes(String(e.split.kind)) || !Array.isArray(e.variableAngles) || !M(e.secondSideAngle) || e.secondSideAngle <= 0 || e.secondSideAngle >= Math.PI / 2 || !W(e.options) ? P(`Draft ${r} has invalid Creo-style parameters`, r) : e.split.kind === "reference" && !Eo(e.split.reference) ? P(`Draft ${r} has invalid split reference`, r) : e.variableAngles.every((n)=>W(n) && $(n.id) && M(n.location) && n.location >= 0 && n.location <= 1 && M(n.angle) && n.angle > 0 && n.angle < Math.PI / 2) ? null : P(`Draft ${r} has invalid variable angle controls`, r);
            case "box":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !V(e.origin) || !M(e.length) || !M(e.width) || !M(e.height) || e.length <= 0 || e.width <= 0 || e.height <= 0 ? P(`Box ${r} has invalid parameters`, r) : null;
            case "cylinder":
            case "cone":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !V(e.origin) || !V(e.direction) || Math.hypot(...e.direction) <= 1e-9 || !M(e.height) || e.height <= 0 || e.type === "cylinder" && (!M(e.radius) || e.radius <= 0) || e.type === "cone" && (!M(e.bottomRadius) || !M(e.topRadius) || e.bottomRadius <= 0 || e.topRadius < 0) ? P(`Primitive ${r} has invalid parameters`, r) : null;
            case "sphere":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !V(e.center) || !M(e.radius) || e.radius <= 0 ? P(`Sphere ${r} has invalid parameters`, r) : null;
            case "split":
                return !$(e.baseFeatureId) || !W(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) ? P(`Split ${r} has invalid base/tool/keepSide`, r) : null;
            case "trim":
                return !$(e.baseFeatureId) || !W(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) || typeof e.tolerance != "number" || !Number.isFinite(e.tolerance) || e.tolerance < 0 ? P(`Trim Sheet ${r} has invalid base/tool/keepSide/tolerance`, r) : null;
            case "face_pull":
                if (!$(e.baseFeatureId) || !Array.isArray(e.faceSelectors) || e.faceSelectors.length === 0 || !V(e.direction) || !M(e.distance) || e.distance <= 0 || ![
                    "add",
                    "cut"
                ].includes(String(e.operation))) return P(`Face Pull ${r} has invalid base/faces/direction/distance/operation`, r);
                for (const n of e.faceSelectors)if (!W(n) || !$(n.featureId) || !$(n.role)) return P(`Face Pull ${r} has an invalid face selector`, r);
                return null;
            case "multi_transform":
                return !$(e.seedFeatureId) || !Array.isArray(e.transforms) || e.transforms.length === 0 ? P(`MultiTransform ${r} has invalid seed/transforms`, r) : null;
            case "shape_binder":
                return !$(e.sourceBodyId) || !$(e.sourceFeatureId) || ![
                    "resolved",
                    "stale",
                    "source_missing"
                ].includes(String(e.status)) ? P(`ShapeBinder ${r} has invalid source/status`, r) : null;
            case "extrude":
                {
                    const i = !(e.startOffset !== void 0 || e.endOffset !== void 0) || M(e.startOffset) && M(e.endOffset) && e.startOffset !== e.endOffset;
                    if (!$(e.sketchId) || !M(e.depth) || e.depth <= 0 || !i || e.secondDepth !== void 0 && (!M(e.secondDepth) || e.secondDepth < 0) || e.symmetric !== void 0 && typeof e.symmetric != "boolean" || !hr.has(String(e.mode))) return P(`Extrude ${r} has invalid sketchId/from-to/depth/secondDepth/symmetric/mode`, r);
                    const o = zt(t[e.sketchId], r, e.sketchId);
                    return o || null;
                }
            case "hole":
                {
                    if (!$(e.baseFeatureId) || !$(e.sketchId) || !M(e.diameter) || !M(e.depth) || ![
                        "blind",
                        "through"
                    ].includes(String(e.depthMode)) || ![
                        "simple",
                        "counterbore",
                        "countersink"
                    ].includes(String(e.mode))) return P(`Hole ${r} has invalid parameters`, r);
                    if (e.pointIds !== void 0 && (!Array.isArray(e.pointIds) || e.pointIds.some((o)=>!$(o)))) return P(`Hole ${r} has invalid pointIds`, r);
                    const n = t[e.sketchId];
                    if (!n) return P(`Hole ${r} missing sketch profile ${String(e.sketchId)}`, r);
                    const i = mh(n, r, e.sketchId);
                    if (i) return i;
                    try {
                        qn(n, Array.isArray(e.pointIds) ? e.pointIds : void 0);
                    } catch (o) {
                        return P(`Hole ${r}: ${o instanceof Error ? o.message : String(o)}`, r);
                    }
                    if (e.mode === "counterbore" && (!M(e.counterboreDiameter) || !M(e.counterboreDepth))) return P(`Hole ${r} counterbore parameters are required`, r);
                    if (e.mode === "countersink" && (!M(e.countersinkDiameter) || !M(e.countersinkAngleDeg))) return P(`Hole ${r} countersink parameters are required`, r);
                    for (const o of [
                        "start",
                        "end"
                    ]){
                        const s = e[`${o}ChamferEnabled`];
                        if (s !== void 0 && typeof s != "boolean") return P(`Hole ${r} ${o}ChamferEnabled is invalid`, r);
                        if (s && (!M(e[`${o}ChamferOffset`]) || e[`${o}ChamferOffset`] <= 0 || !M(e[`${o}ChamferAngleDeg`]) || !(e[`${o}ChamferAngleDeg`] > 1 && e[`${o}ChamferAngleDeg`] < 179))) return P(`Hole ${r} ${o}Chamfer parameters are invalid`, r);
                    }
                    return null;
                }
            case "linear_pattern":
                return !$(e.seedFeatureId) || !V(e.direction) || !Number.isInteger(e.count) || e.count < 2 || !M(e.spacing) || e.spacing <= 0 ? P(`Linear pattern ${r} has invalid seed/count/spacing/direction`, r) : null;
            case "polar_pattern":
                {
                    const n = e.axisRef;
                    return !$(e.seedFeatureId) || !Number.isInteger(e.count) || e.count < 2 || !M(e.angleSpan) || e.angleSpan <= 0 || e.angleSpan > Math.PI * 2 + 1e-9 || !n || n.kind === "world" && (!V(n.origin) || !V(n.direction) || Math.hypot(...n.direction) <= 1e-9) || n.kind === "datum" && (!$(n.featureId) || ![
                        "normal",
                        "u",
                        "v"
                    ].includes(String(n.axis))) ? P(`Polar pattern ${r} has invalid seed/count/angle/axis`, r) : null;
                }
            case "revolve":
                {
                    if (!$(e.sketchId) || !M(e.angle) || !hr.has(String(e.mode))) return P(`Revolve ${r} missing sketchId/angle/mode`, r);
                    const n = hh(e.axisRef, r);
                    if (n) return n;
                    const i = zt(t[e.sketchId], r, e.sketchId);
                    return i || null;
                }
            case "boolean":
                return !$(e.targetFeatureId) || !$(e.toolFeatureId) || !ah.has(String(e.op)) ? P(`Boolean ${r} missing target/tool/op`, r) : e.targetBodyId !== void 0 && !$(e.targetBodyId) || e.toolBodyId !== void 0 && !$(e.toolBodyId) ? P(`Boolean ${r} has invalid Body references`, r) : null;
            case "fillet":
                return !$(e.baseFeatureId) || !M(e.radius) ? P(`Fillet ${r} missing baseFeatureId/radius`, r) : bs(e.edgeSelectors, r, "Fillet");
            case "chamfer":
                return !$(e.baseFeatureId) || !M(e.distance) ? P(`Chamfer ${r} missing baseFeatureId/distance`, r) : e.secondDistance !== void 0 && !M(e.secondDistance) ? P(`Chamfer ${r} has invalid secondDistance`, r) : bs(e.edgeSelectors, r, "Chamfer");
            case "thickness":
                return !$(e.baseFeatureId) || !M(e.thickness) || e.thickness <= 0 || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0 ? P(`Thickness ${r} missing baseFace/thickness/selectors`, r) : e.removedFaceSelectors.every((i)=>W(i) && $(i.featureId) && $(i.role) && (i.hintCentroid === void 0 || V(i.hintCentroid))) ? null : P(`Thickness ${r} has invalid removed face selectors`, r);
            case "mirror":
                {
                    const n = e.planeRef;
                    return !$(e.seedFeatureId) || !n || !$(n.kind) || n.kind === "world" && (!V(n.origin) || !V(n.normal) || Math.hypot(...n.normal) <= 1e-9) || n.kind === "datum" && !$(n.featureId) ? P(`Mirror ${r} has invalid seed/plane`, r) : null;
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.sectionSketchIds.every((n)=>$(n)) || !hr.has(String(e.mode))) return P(`Loft ${r} has invalid sections/mode`, r);
                    for (const n of e.sectionSketchIds){
                        const i = zt(t[n], r, n);
                        if (i) return i;
                    }
                    return null;
                }
            case "pipe":
                {
                    if (!$(e.profileSketchId) || !$(e.pathSketchId) || e.profileSketchId === e.pathSketchId || !hr.has(String(e.mode))) return P(`Pipe ${r} has invalid profile/path/mode`, r);
                    const n = Array.isArray(e.sectionSketchIds) && e.sectionSketchIds.length > 0 ? e.sectionSketchIds : [
                        e.profileSketchId
                    ];
                    if (!n.every((s)=>$(s)) || n.includes(e.pathSketchId)) return P(`Pipe ${r} has invalid section/path references`, r);
                    const i = zt(t[e.profileSketchId], r, e.profileSketchId);
                    if (i) return i;
                    for (const s of n){
                        const a = zt(t[s], r, s);
                        if (a) return a;
                    }
                    const o = yh(t[e.pathSketchId], r, e.pathSketchId);
                    return o || (e.orientation !== void 0 && !new Set([
                        "frenet",
                        "parallel",
                        "fixed"
                    ]).has(String(e.orientation)) ? P(`Pipe ${r} has invalid orientation`, r) : null);
                }
            case "helix":
                return !V(e.axisOrigin) || !V(e.axisDirection) || Math.hypot(...e.axisDirection) <= 1e-9 || !M(e.radius) || e.radius <= 0 || !M(e.endRadius) || e.endRadius <= 0 || !M(e.pitch) || e.pitch <= 0 || !M(e.endPitch) || e.endPitch <= 0 || !M(e.height) || e.height <= 0 || !M(e.startAngle) || e.handedness !== "right" && e.handedness !== "left" ? P(`Helix ${r} has invalid axis or dimensions`, r) : null;
            case "thread":
                return !$(e.helixFeatureId) || !hr.has(String(e.mode)) || e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch" || e.profileKind === "custom_sketch" && !$(e.profileSketchId) || !M(e.majorRadius) || e.majorRadius <= 0 || !M(e.pitch) || e.pitch <= 0 || !M(e.depth) || e.depth <= 0 || e.depth >= e.majorRadius ? P(`Thread ${r} has invalid Helix/profile/dimensions`, r) : e.profileKind === "custom_sketch" ? zt(t[e.profileSketchId], r, e.profileSketchId) : null;
            default:
                return P(`Unknown feature type ${String(e.type)}`, r);
        }
    }
    function Ih(e) {
        return sh.has(e);
    }
    const Ye = 2;
    function Be(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function bh(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function ke(e) {
        return typeof e == "string" && e.length > 0;
    }
    const wh = new Set([
        "suppressed",
        "after_tip",
        "no_tip"
    ]);
    function be(e, t) {
        return {
            code: "protocol-invalid",
            message: e,
            recoverable: !1
        };
    }
    function se(e, t) {
        return {
            code: "invalid-plan",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Ga(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Fn(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function kh(e, t) {
        return !Be(e) || !ke(e.featureId) || !ke(e.type) ? se(`replayPlan.steps[${t}] is invalid`) : !Number.isInteger(e.historyIndex) || e.historyIndex !== t ? se(`replayPlan.steps[${t}] historyIndex must equal array index ${t}`, e.featureId) : e.status === "inactive" ? wh.has(String(e.reason)) ? null : se(`replayPlan.steps[${t}] has invalid inactive reason`, e.featureId) : e.status !== "active" ? se(`replayPlan.steps[${t}] has invalid status`, e.featureId) : ke(e.kind) ? e.kind !== e.type ? se(`replayPlan.steps[${t}] kind ${e.kind} does not match type ${e.type}`, e.featureId) : e.priorSolidFeatureId !== null && !ke(e.priorSolidFeatureId) ? se(`replayPlan.steps[${t}] has invalid priorSolidFeatureId`, e.featureId) : Fn(e.auxiliaryFeatureIds) ? null : se(`replayPlan.steps[${t}] missing auxiliaryFeatureIds`, e.featureId) : se(`replayPlan.steps[${t}] has invalid kind`, e.featureId);
    }
    function xh(e, t) {
        if (!Be(e)) return se("replayPlan must be an object");
        if (e.bodyId !== t) return {
            code: "correlation-mismatch",
            message: `replayPlan.bodyId ${String(e.bodyId)} does not match request bodyId ${t}`,
            recoverable: !1
        };
        if (!Array.isArray(e.historyOrder) || !Array.isArray(e.steps) || !Array.isArray(e.solidExecutionOrder)) return se("replayPlan missing historyOrder/steps/solidExecutionOrder");
        if (e.tipFeatureId !== null && !ke(e.tipFeatureId)) return se("replayPlan.tipFeatureId is invalid");
        if (!Fn(e.historyOrder) || !Fn(e.solidExecutionOrder)) return se("replayPlan historyOrder/solidExecutionOrder must be string arrays");
        const r = new Set;
        for(let i = 0; i < e.steps.length; i++){
            const o = kh(e.steps[i], i);
            if (o) return o;
            const s = e.steps[i];
            if (r.has(s.featureId)) return se(`replayPlan has duplicate feature id ${s.featureId}`, s.featureId);
            r.add(s.featureId);
        }
        if (e.historyOrder.length !== e.steps.length) return se("replayPlan historyOrder length must match steps length");
        for(let i = 0; i < e.historyOrder.length; i++){
            const o = e.steps[i];
            if (o.featureId !== e.historyOrder[i]) return se(`replayPlan historyOrder/steps mismatch at ${i}`, o.featureId);
        }
        const n = [];
        for (const i of e.steps)i.status === "active" && Ih(i.kind) && n.push(i.featureId);
        return e.solidExecutionOrder.length !== n.length || e.solidExecutionOrder.some((i, o)=>i !== n[o]) ? se("replayPlan.solidExecutionOrder must match active solid steps in history order") : null;
    }
    function Sh(e, t) {
        return !Be(e) || !ke(e.id) || !ke(e.type) || !ke(e.name) || typeof e.suppressed != "boolean" || !Fn(e.dependencyIds) ? Ga("Feature snapshot generic envelope is invalid") : gh(e, t);
    }
    function Ln(e) {
        if (!Be(e)) return be("Body replay request must be an object");
        if (e.protocolVersion !== Ye) return be(`Unsupported body-replay protocol version ${String(e.protocolVersion)}`);
        if (!ke(e.requestId) || !ke(e.bodyId)) return be("Body replay request missing requestId/bodyId");
        if (!Number.isInteger(e.revision) || e.revision < 0) return be("Body replay request has invalid revision");
        if (!bh(e.deadlineMs)) return be("Body replay request has invalid deadlineMs");
        if (e.presentationMode !== void 0 && e.presentationMode !== "full" && e.presentationMode !== "mesh" && e.presentationMode !== "none") return be("Body replay request has invalid presentationMode");
        if (!Be(e.snapshot) || !Be(e.replayPlan)) return be("Body replay request missing snapshot/replayPlan");
        if (e.externalOperands !== void 0) {
            if (!Array.isArray(e.externalOperands)) return be("Body replay request externalOperands must be an array");
            const d = new Set;
            for (const c of e.externalOperands){
                if (!Be(c) || !ke(c.bodyId) || !ke(c.featureId)) return be("Body replay request has an invalid external operand");
                if (c.bodyId === e.bodyId) return be(`External operand ${c.featureId} belongs to the replay Body`);
                if (d.has(c.featureId)) return be(`Duplicate external operand feature id ${c.featureId}`);
                d.add(c.featureId);
            }
        }
        const t = e.snapshot;
        if (t.bodyId !== e.bodyId) return {
            code: "correlation-mismatch",
            message: `snapshot.bodyId ${String(t.bodyId)} does not match request bodyId ${e.bodyId}`,
            recoverable: !1
        };
        if (!Array.isArray(t.features) || !Be(t.profiles)) return be("snapshot missing features/profiles");
        const r = xh(e.replayPlan, e.bodyId);
        if (r) return r;
        const n = e.replayPlan, i = n.tipFeatureId ?? null, o = t.tipFeatureId ?? null;
        if (i !== o) return {
            code: "correlation-mismatch",
            message: "snapshot.tipFeatureId does not match replayPlan.tipFeatureId",
            recoverable: !1
        };
        const s = new Set, a = new Map;
        for (const d of t.features){
            const c = Sh(d, t.profiles);
            if (c) return c;
            const u = d.id;
            if (s.has(u)) return Ga(`Duplicate feature id ${u} in snapshot`, u);
            s.add(u), a.set(u, d.type);
        }
        if (s.size !== n.steps.length) return se("snapshot feature set size must equal replayPlan.steps length");
        for (const d of n.steps){
            if (!s.has(d.featureId)) return se(`replayPlan step ${d.featureId} missing from snapshot`, d.featureId);
            const c = a.get(d.featureId);
            if (c !== d.type) return se(`snapshot type ${c} mismatches plan type ${d.type} for ${d.featureId}`, d.featureId);
        }
        for (const d of s)if (!n.steps.some((c)=>c.featureId === d)) return se(`snapshot feature ${d} is not present in replayPlan`, d);
        return null;
    }
    function Ya(e, t) {
        return Be(t) ? t.protocolVersion !== Ye ? be(`Unexpected response protocol version ${String(t.protocolVersion)}`) : t.requestId !== e.requestId || t.bodyId !== e.bodyId || t.revision !== e.revision ? {
            code: "correlation-mismatch",
            message: "Body replay response correlation fields do not match request",
            recoverable: !1
        } : typeof t.ok != "boolean" ? be("Body replay response missing ok flag") : null : be("Body replay response must be an object");
    }
    function Za(e) {
        return Be(e) ? e.type === "cancel-body-replay" && e.protocolVersion === Ye && ke(e.requestId) && ke(e.bodyId) && Number.isInteger(e.revision) && e.revision >= 0 : !1;
    }
    function Fh(e) {
        return Ln(e) === null;
    }
    let on = null;
    async function _h(e) {
        const t = await e;
        return t?.ready && typeof t.ready.then == "function" ? t.ready : t;
    }
    function vh(e) {
        const t = e.default;
        return typeof t == "string" && t.length > 0 ? t : null;
    }
    function Eh() {
        return typeof process < "u" && !!process.versions?.node;
    }
    async function Ah() {
        const e = await Gi(()=>import("./opencascade.wasm-CLkcJ_OV.js"), []), t = vh(e);
        if (!t) throw new Error("opencascade.js: failed to resolve WASM asset URL — check vite wasm sidecar plugin");
        return {
            locateFile (r) {
                return r.endsWith(".wasm") ? t : r;
            }
        };
    }
    async function dt() {
        return on || (on = (async ()=>{
            const { default: e } = await Gi(async ()=>{
                const { default: i } = await import("./opencascade.wasm-mn6um57V.js");
                return {
                    default: i
                };
            }, []);
            if (typeof e != "function") throw new Error("opencascade.js: expected factory export from opencascade.wasm.js");
            const r = Eh() ? await (await import("./loadOccModule.node.ts")).resolveWasmForNode() : await Ah();
            return _h(e({
                locateFile: r.locateFile,
                wasmBinary: r.wasmBinary
            }));
        })()), on;
    }
    function Oh() {
        on = null;
    }
    function Ze(e, t, r) {
        const { origin: n, uAxis: i, vAxis: o } = e;
        return [
            n[0] + i[0] * t + o[0] * r,
            n[1] + i[1] * t + o[1] * r,
            n[2] + i[2] * t + o[2] * r
        ];
    }
    function G(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Rr(e, t, r) {
        const n = [
            "Handle_Geom_TrimmedCurve",
            "Handle_Geom_Circle",
            "Handle_Geom_Curve"
        ];
        let i;
        for (const s of n)try {
            const a = G(e, s, [
                t
            ]);
            try {
                const d = G(e, "BRepBuilderAPI_MakeEdge", [
                    a
                ]), c = d.Edge();
                return d.delete?.(), r ? r.push(a) : a.delete?.(), c;
            } catch (d) {
                a.delete?.(), i = d;
            }
        } catch (a) {
            i = a;
        }
        try {
            const s = G(e, "BRepBuilderAPI_MakeEdge", [
                t
            ]), a = s.Edge();
            return s.delete?.(), a;
        } catch (s) {
            i = s;
        }
        const o = i instanceof Error ? i.message : String(i);
        throw new Error(`occProfileWire: MakeEdge from Geom curve failed (${o})`);
    }
    function pt(e) {
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
    function Ph(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function $h(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Ao(e, t, r, n) {
        const i = Ze(t, r.x, r.y), o = Ze(t, n.x, n.y), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Pnt_3(o[0], o[1], o[2]), d = new e.BRepBuilderAPI_MakeEdge_3(s, a), c = d.Edge();
        return d.delete?.(), s.delete?.(), a.delete?.(), c;
    }
    function Rh(e, t, r, n) {
        if (!(n > 1e-12)) throw new Error("occProfileWire: circle radius must be positive");
        const i = Ze(t, r.x, r.y), o = pt(t.normal), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Dir_4(o[0], o[1], o[2]), d = [
            ()=>{
                const p = G(e, "gp_Ax2", [
                    s,
                    a
                ]), f = G(e, "gp_Circ", [
                    p,
                    n
                ]), m = G(e, "BRepBuilderAPI_MakeEdge", [
                    f
                ]);
                return {
                    edge: m.Edge(),
                    dispose: ()=>{
                        m.delete?.(), f.delete?.(), p.delete?.();
                    }
                };
            },
            ()=>{
                const p = G(e, "gp_Ax2", [
                    s,
                    a
                ]), f = G(e, "Geom_Circle", [
                    p,
                    n
                ]), m = G(e, "BRepBuilderAPI_MakeEdge", [
                    f
                ]);
                return {
                    edge: m.Edge(),
                    dispose: ()=>{
                        m.delete?.(), f.delete?.(), p.delete?.();
                    }
                };
            },
            ()=>{
                const p = G(e, "GC_MakeCircle", [
                    s,
                    a,
                    n
                ]), f = typeof p.Value == "function" ? p.Value() : p, m = G(e, "BRepBuilderAPI_MakeEdge", [
                    f
                ]);
                return {
                    edge: m.Edge(),
                    dispose: ()=>{
                        m.delete?.(), p.delete?.();
                    }
                };
            }
        ];
        let c;
        for (const p of d)try {
            const f = p(), m = f.edge;
            return f.dispose(), a.delete?.(), s.delete?.(), m;
        } catch (f) {
            c = f;
        }
        a.delete?.(), s.delete?.();
        const u = c instanceof Error ? c.message : String(c);
        throw new Error(`occProfileWire: circle edge failed (${u})`);
    }
    function Ja(e) {
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
    function Ch(e, t, r) {
        const n = Ja(r), i = Ze(t, r.start.x, r.start.y), o = Ze(t, r.end.x, r.end.y), s = Ze(t, r.center.x, r.center.y), a = new e.gp_Pnt_3(i[0], i[1], i[2]), d = new e.gp_Pnt_3(o[0], o[1], o[2]), c = new e.gp_Pnt_3(s[0], s[1], s[2]), u = pt(t.normal), p = pt(t.uAxis), f = pt(t.vAxis), m = pt($h(u, p)), y = Ph(m, f) < 0 ? -1 : 1, x = n.startAngle * y, _ = n.sweep * y, g = x + _, l = (I)=>typeof I.Value == "function" ? I.Value() : typeof I.Value_1 == "function" ? I.Value_1() : I, b = [
            ()=>{
                const I = new e.gp_Dir_4(u[0], u[1], u[2]), S = new e.gp_Dir_4(p[0], p[1], p[2]), k = G(e, "gp_Ax2", [
                    c,
                    I,
                    S
                ]), w = G(e, "gp_Circ", [
                    k,
                    r.radius
                ]), F = G(e, "BRepBuilderAPI_MakeEdge", [
                    w,
                    x,
                    g
                ]);
                return {
                    edge: F.Edge(),
                    dispose: ()=>{
                        F.delete?.(), w.delete?.(), k.delete?.(), S.delete?.(), I.delete?.();
                    }
                };
            },
            ()=>{
                const I = pt(t.normal), S = new e.gp_Dir_4(I[0], I[1], I[2]), k = G(e, "gp_Ax2", [
                    c,
                    S
                ]), w = G(e, "gp_Circ", [
                    k,
                    r.radius
                ]), F = _ >= 0, v = G(e, "GC_MakeArcOfCircle", [
                    w,
                    a,
                    d,
                    F
                ]), E = l(v);
                return {
                    edge: Rr(e, E),
                    dispose: ()=>{
                        v.delete?.(), w.delete?.(), k.delete?.(), S.delete?.();
                    }
                };
            },
            ()=>{
                const I = pt(t.normal), S = new e.gp_Dir_4(I[0], I[1], I[2]), k = G(e, "gp_Ax2", [
                    c,
                    S
                ]), w = G(e, "Geom_Circle", [
                    k,
                    r.radius
                ]), F = G(e, "Handle_Geom_Curve", [
                    w
                ]), v = G(e, "Geom_TrimmedCurve", [
                    F,
                    Math.min(x, g),
                    Math.max(x, g),
                    _ >= 0,
                    !0
                ]);
                return {
                    edge: Rr(e, v),
                    dispose: ()=>{
                        v.delete?.(), F.delete?.(), w.delete?.(), k.delete?.(), S.delete?.();
                    }
                };
            }
        ], h = [];
        for (const I of b)try {
            const S = I(), k = S.edge;
            return S.dispose(), a.delete?.(), d.delete?.(), c.delete?.(), k;
        } catch (S) {
            h.push(S instanceof Error ? S.message : String(S));
        }
        throw a.delete?.(), d.delete?.(), c.delete?.(), new Error(`occProfileWire: arc edge failed (${h.join(" | ")})`);
    }
    function Mh(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: bezier needs ≥2 controls");
        const i = r.map((o)=>{
            const s = Ze(t, o.x, o.y);
            return new e.gp_Pnt_3(s[0], s[1], s[2]);
        });
        try {
            const o = G(e, "TColgp_Array1OfPnt", [
                1,
                i.length
            ]);
            for(let d = 0; d < i.length; d++)typeof o.SetValue == "function" ? o.SetValue(d + 1, i[d]) : o.set(d + 1, i[d]);
            const s = G(e, "Geom_BezierCurve", [
                o
            ]), a = Rr(e, s, n);
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
    function Dh(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: spline needs ≥2 controls");
        const o = Qa({
            kind: "spline",
            controls: r.map((s)=>({
                    x: s.x,
                    y: s.y
                }))
        }).map((s)=>{
            const a = Ze(t, s.x, s.y);
            return new e.gp_Pnt_3(a[0], a[1], a[2]);
        });
        try {
            const s = G(e, "TColgp_Array1OfPnt", [
                1,
                o.length
            ]);
            for(let a = 0; a < o.length; a++)typeof s.SetValue == "function" ? s.SetValue(a + 1, o[a]) : s.set(a + 1, o[a]);
            try {
                const a = G(e, "GeomAPI_PointsToBSpline", [
                    s
                ]), d = typeof a.Curve == "function" ? a.Curve() : a, c = Rr(e, d, n);
                if (n) n.push(a, d, s, ...o);
                else {
                    a.delete?.(), s.delete?.();
                    for (const u of o)u.delete?.();
                }
                return c;
            } catch  {
                const a = G(e, "Geom_BezierCurve", [
                    s
                ]), d = Rr(e, a, n);
                if (n) n.push(a, s, ...o);
                else {
                    a.delete?.(), s.delete?.();
                    for (const c of o)c.delete?.();
                }
                return d;
            }
        } catch (s) {
            for (const a of o)a.delete?.();
            throw s;
        }
    }
    function Xa(e, t, r, n) {
        if (r.kind === "line") return Ao(e, t, r.start, r.end);
        if (r.kind === "circle") return Rh(e, t, r.center, r.radius);
        if (r.kind === "arc") return Ch(e, t, r);
        if (r.kind === "bezier") return Mh(e, t, r.controls, n);
        if (r.kind === "spline") return Dh(e, t, r.controls, n);
        throw new Error("occProfileWire: unsupported profile segment kind");
    }
    function Th(e) {
        return e.segments && e.segments.length > 0 ? e.segments : e.exactCurve?.kind === "circle" ? [
            {
                kind: "circle",
                center: e.exactCurve.center,
                radius: e.exactCurve.radius
            }
        ] : null;
    }
    function Bh(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1;
        for (const i of r)try {
            const o = Xa(e, t, i);
            n.Add_1(o);
        } catch (o) {
            typeof console < "u" && console.warn("[occProfileWire] segment edge failed, chord fallback", i.kind, o);
            const s = Qa(i);
            for(let a = 0; a < s.length - 1; a++)n.Add_1(Ao(e, t, s[a], s[a + 1]));
        }
        return {
            wire: n.Wire(),
            wireBuilder: n
        };
    }
    function Qa(e) {
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
            const { startAngle: t, sweep: r } = Ja(e), n = Math.max(2, Math.ceil(Math.abs(r) / (Math.PI * 2) * 64));
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
            const r = (o, s, a, d, c)=>.5 * (2 * s + (-o + a) * c + (2 * o - 5 * s + 4 * a - d) * c * c + (-o + 3 * s - 3 * a + d) * c * c * c), n = [
                {
                    ...t[0]
                }
            ], i = 16;
            for(let o = 0; o < t.length - 1; o++){
                const s = t[Math.max(0, o - 1)], a = t[o], d = t[o + 1], c = t[Math.min(t.length - 1, o + 2)];
                for(let u = 1; u <= i; u++){
                    const p = u / i;
                    n.push({
                        x: r(s.x, a.x, d.x, c.x, p),
                        y: r(s.y, a.y, d.y, c.y, p)
                    });
                }
            }
            return n;
        }
        return [];
    }
    function jh(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1, i = r.points;
        for(let o = 0; o < i.length; o++){
            const s = (o + 1) % i.length;
            n.Add_1(Ao(e, t, i[o], i[s]));
        }
        return {
            wire: n.Wire(),
            wireBuilder: n
        };
    }
    function ws(e, t, r) {
        const n = Th(r);
        return n && n.length > 0 ? Bh(e, t, n) : jh(e, t, r);
    }
    function zh(e, t) {
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
    function ct(e, t) {
        const r = ro(t, "occ-profile");
        if (r) throw new Error(r.message);
        const n = sr(t), { wire: i, wireBuilder: o } = ws(e, t, n), s = new e.BRepBuilderAPI_MakeFace_15(i, !0), a = [];
        for (const c of to(t)){
            const u = ws(e, t, c);
            zh(s, u.wire), a.push(u.wireBuilder);
        }
        const d = s.Face();
        if (!d) throw new Error("occProfileWire: closed profile did not produce a Face");
        return {
            face: d,
            outerWire: i,
            wireBuilder: o,
            faceMaker: s,
            innerWireBuilders: a
        };
    }
    function ed(e, t, r = 0) {
        if (r === 0) return ct(e, t);
        const n = {
            ...t,
            origin: [
                t.origin[0] + t.normal[0] * r,
                t.origin[1] + t.normal[1] * r,
                t.origin[2] + t.normal[2] * r
            ]
        };
        return ct(e, n);
    }
    function Oo(e, t, r, n) {
        const i = new e.gp_Vec_4(n[0] * r, n[1] * r, n[2] * r), o = new e.BRepPrimAPI_MakePrism_1(t, i, !1, !0);
        return {
            shape: o.Shape(),
            prism: o,
            prismVec: i
        };
    }
    function ze(e, t, r, n) {
        const i = n?.startOffset ?? 0, o = ed(e, t, i), s = n?.inward ? -1 : 1, a = t.normal.map((c)=>c * s);
        return {
            ...Oo(e, o.face, r, a),
            ...o
        };
    }
    function Ae(e) {
        e.prismVec.delete?.(), e.prism.delete?.(), e.faceMaker?.delete?.(), e.wireBuilder?.delete?.();
        for (const t of e.innerWireBuilders ?? [])t.delete?.();
    }
    function Vh(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Nh(e) {
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
    function Ut(e, t) {
        return [
            e[t * 3],
            e[t * 3 + 1],
            e[t * 3 + 2]
        ];
    }
    function td(e, t, r, n) {
        const i = Ut(e, t), o = Ut(e, r), s = Ut(e, n);
        return Vh([
            o[0] - i[0],
            o[1] - i[1],
            o[2] - i[2]
        ], [
            s[0] - i[0],
            s[1] - i[1],
            s[2] - i[2]
        ]);
    }
    function rd(e, t, r, n, i, o) {
        const s = new Float64Array(n * 3), a = o / 3;
        for(let c = 0; c < a; c++){
            const u = i + c * 3, p = t[u], f = t[u + 1], m = t[u + 2], y = td(e, p, f, m), x = [
                p - r,
                f - r,
                m - r
            ];
            for (const _ of x){
                if (_ < 0 || _ >= n) continue;
                const g = _ * 3;
                s[g] += y[0], s[g + 1] += y[1], s[g + 2] += y[2];
            }
        }
        const d = [];
        for(let c = 0; c < n; c++){
            const u = c * 3;
            d.push(Nh([
                s[u],
                s[u + 1],
                s[u + 2]
            ]));
        }
        return d;
    }
    function Kh(e, t) {
        const r = t.Orientation_1?.(), n = e.TopAbs_Orientation?.TopAbs_REVERSED;
        return r != null && n != null ? r === n : !1;
    }
    function qh(e) {
        let t = 1 / 0, r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, s = -1 / 0;
        for(let a = 0; a < e.length; a += 3){
            const d = e[a], c = e[a + 1], u = e[a + 2];
            t = Math.min(t, d), r = Math.min(r, c), n = Math.min(n, u), i = Math.max(i, d), o = Math.max(o, c), s = Math.max(s, u);
        }
        return Number.isFinite(t) ? Math.max(Math.hypot(i - t, o - r, s - n), 1e-6) : 1;
    }
    function Hh(e, t, r) {
        for(let n = t; n < t + r; n += 3){
            const i = e[n + 1];
            e[n + 1] = e[n + 2], e[n + 2] = i;
        }
    }
    function Lh(e, t, r, n) {
        const i = rd(e, t, n.baseVertex, n.nodeCount, n.subFirst, n.indexCount);
        for(let o = 0; o < n.nodeCount; o++){
            const s = (n.baseVertex + o) * 3, a = i[o];
            r[s] = a[0], r[s + 1] = a[1], r[s + 2] = a[2];
        }
    }
    function Uh(e, t, r, n, i, o) {
        const s = Math.floor(n.indexCount / 3);
        for(let a = 0; a < s; a++){
            const d = n.subFirst + a * 3, c = t[d], u = t[d + 1], p = t[d + 2], f = Ut(e, c), m = Ut(e, u), y = Ut(e, p), x = td(e, c, u, p), _ = Math.hypot(x[0], x[1], x[2]);
            if (_ < 1e-12) continue;
            const g = [
                x[0] / _,
                x[1] / _,
                x[2] / _
            ], l = [
                (f[0] + m[0] + y[0]) / 3,
                (f[1] + m[1] + y[1]) / 3,
                (f[2] + m[2] + y[2]) / 3
            ];
            for (const b of [
                1,
                4,
                16
            ]){
                const h = o * b, I = [
                    l[0] + g[0] * h,
                    l[1] + g[1] * h,
                    l[2] + g[2] * h
                ], S = [
                    l[0] - g[0] * h,
                    l[1] - g[1] * h,
                    l[2] - g[2] * h
                ], k = Math.max(h * .1, 1e-9), w = i(I, k), F = i(S, k);
                if (w === "outside" && F === "inside") return !1;
                if (w === "inside" && F === "outside") return Hh(t, n.subFirst, n.indexCount), Lh(e, t, r, n), !0;
            }
        }
        return !1;
    }
    function Wh(e, t) {
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
    function Gh(e) {
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
    function Yh(e, t, r) {
        const n = e.BRep_Tool, i = (typeof n.Triangulation == "function" ? n.Triangulation : null) ?? (typeof n.Triangulation_2 == "function" ? n.Triangulation_2 : null);
        if (!i) throw new TypeError("opencascade.js: BRep_Tool.Triangulation is not available");
        return i(t, r);
    }
    function j(e, t, r = {}) {
        const n = r.deflection ?? .5;
        new e.BRepMesh_IncrementalMesh_2(t, n, !1, n, !1).delete?.();
        const o = [], s = [], a = [], d = [], c = [], u = new e.TopExp_Explorer_2(t, e.TopAbs_ShapeEnum.TopAbs_FACE, e.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let p = 0;
        for(; u.More();){
            const m = e.TopoDS.Face_1(u.Current()), y = Kh(e, m), x = new e.TopLoc_Location_1, _ = Yh(e, m, x);
            if (!_.IsNull()) {
                const g = _.get(), l = g.NbNodes(), b = g.NbTriangles(), h = o.length / 3, I = a.length, S = x.Transformation();
                for(let F = 1; F <= l; F++){
                    const v = g.Node(F), E = v.Transformed(S);
                    o.push(E.X(), E.Y(), E.Z()), v.delete?.(), E.delete?.();
                }
                for(let F = 1; F <= b; F++){
                    const v = g.Triangle(F), [E, C, R] = Gh(v), O = h + E - 1;
                    let H = h + C - 1, D = h + R - 1;
                    if (y) {
                        const X = H;
                        H = D, D = X;
                    }
                    a.push(O, H, D), v.delete?.();
                }
                const k = rd(o, a, h, l, I, b * 3);
                for (const F of k)s.push(F[0], F[1], F[2]);
                const w = `face_${p}`;
                d.push({
                    key: w,
                    firstIndex: I,
                    indexCount: b * 3
                }), c.push({
                    key: w,
                    baseVertex: h,
                    nodeCount: l,
                    subFirst: I,
                    indexCount: b * 3
                }), p++;
            }
            x.delete?.(), u.Next();
        }
        u.delete?.();
        const f = r.correctOutwardOrientation === !1 ? null : Wh(e, t);
        if (f) {
            const m = Math.max(qh(o) * 1e-6, 1e-7);
            try {
                for (const y of c)Uh(o, a, s, y, f.classify, m);
            } finally{
                f.dispose();
            }
        }
        return {
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
    const Zh = 1e-6;
    function B(e) {
        return {
            x: e[0],
            y: e[1]
        };
    }
    function Ie(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y) <= Zh;
    }
    function _n(e) {
        return B((e.kind === "line", e.start2d));
    }
    function Wt(e) {
        return B((e.kind === "line", e.end2d));
    }
    function nd(e) {
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
    const Ni = 2;
    function Jh(e, t, r) {
        return {
            ...e,
            clockwise: !1
        };
    }
    function qt(e, t, r) {
        return Ie(B(e.start2d), t) ? {
            ...e,
            start2d: [
                r.x,
                r.y
            ]
        } : Ie(B(e.end2d), t) ? {
            ...e,
            end2d: [
                r.x,
                r.y
            ]
        } : e;
    }
    function Xh(e) {
        const t = [
            ...e
        ];
        for(let r = 0; r < t.length; r += 1){
            const n = t[r];
            if (n.kind !== "arc") continue;
            const i = B(n.center2d), o = t.flatMap((x, _)=>x.kind !== "line" || _ === r ? [] : [
                    B(x.start2d),
                    B(x.end2d)
                ]), s = B(n.start2d), a = B(n.end2d), d = o.some((x)=>Ie(x, s)), c = o.some((x)=>Ie(x, a));
            if (d && c) continue;
            const u = o.map((x)=>({
                    candidate: x,
                    error: Math.abs(Math.hypot(x.x - i.x, x.y - i.y) - n.radius)
                })).sort((x, _)=>x.error - _.error), p = u[0], f = u.find((x)=>p && !Ie(x.candidate, p.candidate));
            if (!p || !f || p.error > Ni || f.error > Ni) continue;
            const m = B(n.start2d), y = B(n.end2d);
            t[r] = {
                ...n,
                clockwise: !1
            };
            for(let x = 0; x < t.length; x += 1){
                const _ = t[x];
                _.kind === "line" && (t[x] = qt(qt(_, p.candidate, m), f.candidate, y));
            }
        }
        return t;
    }
    function Qh(e, t, r) {
        const n = [
            ...r
        ], i = [
            ...t
        ], o = [
            ...e
        ];
        for(; n.length >= 2 && i.length > 0;){
            let p = null;
            for(let I = 0; I < i.length; I += 1){
                const S = i[I], k = B(S.center2d);
                for(let w = 0; w < n.length; w += 1)for(let F = w + 1; F < n.length; F += 1){
                    const v = n[w], E = n[F], C = Math.abs(Math.hypot(v.x - k.x, v.y - k.y) - S.radius) + Math.abs(Math.hypot(E.x - k.x, E.y - k.y) - S.radius);
                    (!p || C < p.error) && (p = {
                        arcIndex: I,
                        startIndex: w,
                        endIndex: F,
                        error: C
                    });
                }
            }
            if (!p || p.error > Ni * 2) break;
            const f = i.splice(p.arcIndex, 1)[0], m = n[p.startIndex], y = n[p.endIndex];
            n.splice(Math.max(p.startIndex, p.endIndex), 1), n.splice(Math.min(p.startIndex, p.endIndex), 1), B(f.center2d);
            const x = Math.hypot(m.x - f.start2d[0], m.y - f.start2d[1]) + Math.hypot(y.x - f.end2d[0], y.y - f.end2d[1]), _ = Math.hypot(y.x - f.start2d[0], y.y - f.start2d[1]) + Math.hypot(m.x - f.end2d[0], m.y - f.end2d[1]), g = x <= _ ? m : y, l = x <= _ ? y : m, b = B(f.start2d), h = B(f.end2d);
            for(let I = 0; I < o.length; I += 1){
                const S = o[I];
                S.kind === "line" && (o[I] = qt(qt(S, g, b), l, h));
            }
            o.push({
                ...f,
                clockwise: !1
            });
        }
        if (i.length > 0 && n.length === i.length * 2) {
            const p = [
                ...n
            ];
            for (const f of i){
                let m = null;
                for(let h = 0; h < p.length; h += 1)for(let I = h + 1; I < p.length; I += 1){
                    const S = p[h], k = p[I], w = Math.min(Math.hypot(S.x - f.start2d[0], S.y - f.start2d[1]) + Math.hypot(k.x - f.end2d[0], k.y - f.end2d[1]), Math.hypot(k.x - f.start2d[0], k.y - f.start2d[1]) + Math.hypot(S.x - f.end2d[0], S.y - f.end2d[1]));
                    (!m || w < m.score) && (m = {
                        i: h,
                        j: I,
                        score: w
                    });
                }
                if (!m) break;
                const y = p[m.i], x = p[m.j], _ = Math.hypot(y.x - f.start2d[0], y.y - f.start2d[1]) + Math.hypot(x.x - f.end2d[0], x.y - f.end2d[1]), g = Math.hypot(x.x - f.start2d[0], x.y - f.start2d[1]) + Math.hypot(y.x - f.end2d[0], y.y - f.end2d[1]), l = _ <= g ? y : x, b = _ <= g ? x : y;
                for(let h = 0; h < o.length; h += 1){
                    const I = o[h];
                    I.kind === "line" && (o[h] = qt(qt(I, l, B(f.start2d)), b, B(f.end2d)));
                }
                o.push(Jh(f)), p.splice(m.j, 1), p.splice(m.i, 1);
            }
        }
        const s = _n(o[0]);
        let a = Wt(o[0]);
        const d = [
            o[0]
        ], c = new Set(o.map((p, f)=>f));
        for(c.delete(0); c.size > 0 && !Ie(s, a);){
            let p = -1, f;
            for (const m of c){
                const y = o[m];
                if (Ie(_n(y), a)) {
                    p = m, f = y;
                    break;
                }
                if (Ie(Wt(y), a)) {
                    p = m, f = nd(y);
                    break;
                }
            }
            if (p < 0 || !f) break;
            c.delete(p), d.push(f), a = Wt(f);
        }
        if (!Ie(s, a) || d.length < 3) return null;
        const u = id(d);
        return u.length < 3 ? null : {
            points: u,
            isOuter: !0,
            segments: d.map(Ki)
        };
    }
    function Ki(e) {
        if (e.kind === "line") return {
            kind: "line",
            id: e.id,
            start: B(e.start2d),
            end: B(e.end2d)
        };
        if (e.kind === "circle") return {
            kind: "circle",
            id: e.id,
            center: B(e.center2d),
            radius: e.radius
        };
        if (e.kind === "arc") return {
            kind: "arc",
            id: e.id,
            center: B(e.center2d),
            radius: e.radius,
            start: B(e.start2d),
            end: B(e.end2d),
            startAngle: e.startAngle,
            endAngle: e.endAngle,
            clockwise: !1
        };
        throw new Error(`Unsupported UG curve kind ${e.kind}`);
    }
    function em(e, t = 24) {
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
    function id(e) {
        const t = [];
        for (const r of e){
            const n = r.kind === "line" ? [
                B(r.start2d),
                B(r.end2d)
            ] : em(r);
            t.length > 0 && Ie(t[t.length - 1], n[0]) ? t.push(...n.slice(1)) : t.push(...n);
        }
        return t.length > 1 && Ie(t[0], t[t.length - 1]) && t.pop(), t;
    }
    function ks(e) {
        let t = 0;
        for(let r = 0; r < e.length; r += 1){
            const n = e[(r + 1) % e.length], i = e[r];
            t += i.x * n.y - n.x * i.y;
        }
        return t / 2;
    }
    function tm(e) {
        const t = e.filter((o)=>o.kind === "circle");
        let r = e.filter((o)=>o.kind === "line" || o.kind === "arc");
        const n = t.map((o)=>({
                points: Array.from({
                    length: 48
                }, (a, d)=>{
                    const c = d / 48 * Math.PI * 2;
                    return {
                        x: o.center2d[0] + Math.cos(c) * o.radius,
                        y: o.center2d[1] + Math.sin(c) * o.radius
                    };
                }),
                isOuter: !0,
                segments: [
                    Ki(o)
                ]
            })), i = new Set(r.map((o, s)=>s));
        for(r = Xh(r); i.size > 0;){
            const o = i.values().next().value;
            i.delete(o);
            const s = [
                r[o]
            ], a = _n(s[0]);
            let d = Wt(s[0]);
            for(; !Ie(a, d);){
                let c = -1, u;
                for (const p of i){
                    const f = r[p];
                    if (Ie(_n(f), d)) {
                        c = p, u = f;
                        break;
                    }
                    if (Ie(Wt(f), d)) {
                        c = p, u = nd(f);
                        break;
                    }
                }
                if (c < 0 || !u) break;
                i.delete(c), s.push(u), d = Wt(u);
            }
            if (Ie(a, d) && s.length > 1) {
                const c = id(s);
                c.length >= 3 && n.push({
                    points: c,
                    isOuter: !0,
                    segments: s.map(Ki)
                });
            }
        }
        if (n.length > 1) {
            const o = n.reduce((s, a, d)=>Math.abs(ks(a.points)) > Math.abs(ks(n[s].points)) ? d : s, 0);
            return n.map((s, a)=>({
                    ...s,
                    isOuter: a === o
                }));
        }
        if (n.length > 0) return n;
        if (t.length === 0 && r.some((o)=>o.kind === "arc")) {
            const o = r.filter((u)=>u.kind === "line"), s = o.flatMap((u)=>[
                    B(u.start2d),
                    B(u.end2d)
                ]), a = s.map((u, p)=>s.filter((f, m)=>m !== p && Ie(u, f)).length), d = s.filter((u, p)=>a[p] === 0), c = r.filter((u)=>u.kind === "arc");
            if (d.length === 4 && c.length >= 2) {
                const u = Qh(o, c, d);
                if (u) return [
                    u
                ];
            }
        }
        return n;
    }
    function rm(e) {
        return e.map((t)=>t.kind === "point" ? {
                kind: "point",
                id: t.id,
                point: {
                    id: t.id,
                    ...B(t.point2d)
                }
            } : t.kind === "line" ? {
                kind: "line",
                id: t.id,
                start: {
                    id: `${t.id}:start`,
                    ...B(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...B(t.end2d)
                }
            } : t.kind === "circle" ? {
                kind: "circle",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...B(t.center2d)
                },
                radius: t.radius
            } : {
                kind: "arc",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...B(t.center2d)
                },
                start: {
                    id: `${t.id}:start`,
                    ...B(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...B(t.end2d)
                },
                radius: t.radius,
                startAngle: t.startAngle,
                endAngle: t.endAngle,
                clockwise: !1
            });
    }
    function nm(e) {
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
    od = function(e) {
        const t = nm(e);
        return {
            loops: tm(e.sketchCurves),
            geometry: rm(e.sketchCurves),
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
    function im(e, t, r) {
        if (e.loops.length > 0 || !e.geometry?.length) return e;
        const n = e.geometry.filter((F)=>F.kind === "line");
        if (n.length < 1 || n.length !== e.geometry.filter((F)=>F.kind !== "point").length) return e;
        const i = 1e-5, o = (F, v)=>Math.hypot(F.x - v.x, F.y - v.y) <= i, s = n.flatMap((F)=>[
                B([
                    F.start.x,
                    F.start.y
                ]),
                B([
                    F.end.x,
                    F.end.y
                ])
            ]), a = s.filter((F, v)=>s.every((E, C)=>v === C || !o(F, E)));
        if (a.length !== 2) return e;
        const d = [
            t[0] - e.origin[0],
            t[1] - e.origin[1],
            t[2] - e.origin[2]
        ], c = d[0] * e.uAxis[0] + d[1] * e.uAxis[1] + d[2] * e.uAxis[2], u = d[0] * e.vAxis[0] + d[1] * e.vAxis[1] + d[2] * e.vAxis[2], p = r[0] * e.uAxis[0] + r[1] * e.uAxis[1] + r[2] * e.uAxis[2], f = r[0] * e.vAxis[0] + r[1] * e.vAxis[1] + r[2] * e.vAxis[2], m = Math.hypot(p, f);
        if (m <= i) return e;
        const y = (F)=>{
            const v = ((F.x - c) * p + (F.y - u) * f) / (m * m);
            return {
                x: c + p * v,
                y: u + f * v
            };
        }, x = [];
        let _ = a[0];
        const g = new Set;
        for(; g.size < n.length;){
            const F = n.findIndex((R, O)=>g.has(O) ? !1 : o(_, B([
                    R.start.x,
                    R.start.y
                ])) || o(_, B([
                    R.end.x,
                    R.end.y
                ])));
            if (F < 0) return e;
            const v = n[F];
            g.add(F);
            const E = B([
                v.start.x,
                v.start.y
            ]), C = B([
                v.end.x,
                v.end.y
            ]);
            o(_, C) ? (x.push({
                ...v,
                start: v.end,
                end: v.start
            }), _ = E) : (x.push(v), _ = C);
        }
        if (!o(_, a[1])) return e;
        const l = a[0], b = a[1], h = y(l), I = y(b), S = (F, v, E)=>({
                kind: "line",
                id: F,
                start: v,
                end: E
            }), k = x.map((F)=>S(F.id, B([
                F.start.x,
                F.start.y
            ]), B([
                F.end.x,
                F.end.y
            ])));
        k.push(S("ug:revolve-closure:last", b, I)), o(I, h) || k.push(S("ug:revolve-closure:axis", I, h)), k.push(S("ug:revolve-closure:first", h, l));
        const w = k.map((F)=>F.start);
        return {
            ...e,
            loops: [
                {
                    points: w,
                    isOuter: !0,
                    segments: k
                }
            ]
        };
    }
    function sd(e) {
        const t = {};
        for (const r of e)r.normalizedType === "sketch" && (t[`ug:feature:${r.id}`] = od(r));
        return t;
    }
    function Cr(e, t, r, n, i) {
        const o = im(t, r, n), { face: s, wireBuilder: a, faceMaker: d } = ct(e, o), c = new e.gp_Ax1_2(new e.gp_Pnt_3(r[0], r[1], r[2]), new e.gp_Dir_4(n[0], n[1], n[2])), u = new e.BRepPrimAPI_MakeRevol_1(s, c, i, !0);
        return {
            shape: u.Shape(),
            revol: u,
            axis: c,
            wireBuilder: a,
            faceMaker: d
        };
    }
    function rr(e) {
        e.revol.delete?.(), e.axis.delete?.(), e.faceMaker.delete?.(), e.wireBuilder.delete?.();
    }
    function Po(e, t, r, n, i) {
        const o = Cr(e, t, r, n, i);
        try {
            return j(e, o.shape);
        } finally{
            rr(o);
        }
    }
    const ad = Po, om = Object.freeze(Object.defineProperty({
        __proto__: null,
        buildRevolveShapeWithOcc: Cr,
        disposeRevolveShape: rr,
        revolveProfileWithOcc: Po,
        revolveRectangleWithOcc: ad
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Gt(e, t, r, n) {
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
                    const s = i;
                    throw new Error(`Unsupported boolean op ${String(s)}`);
                }
        }
        if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error(`OCC boolean ${n} failed to build a valid result`);
        return o;
    }
    function sm(e, t, r, n, i) {
        const o = e.filter((s)=>{
            const a = s.sampledPoints ?? [
                s.start,
                s.midpoint,
                s.end
            ];
            if (a.length < 4) return !1;
            const d = a.map((p)=>{
                const f = p[0] - t[0], m = p[1] - t[1], y = p[2] - t[2], x = f * r[0] + m * r[1] + y * r[2], _ = f - x * r[0], g = m - x * r[1], l = y - x * r[2];
                return {
                    radial: Math.hypot(_, g, l),
                    axial: x
                };
            });
            return Math.max(...d.map((p)=>Math.abs(p.radial - n))) > Math.max(.15, n * .2) ? !1 : Number.isFinite(i) ? Math.max(...d.map((p)=>Math.abs(p.axial - i))) <= Math.max(.25, n * .35) : !0;
        });
        if (!Number.isFinite(i) && o.length > 0) {
            const s = Math.max(...o.map((a)=>{
                const d = a.sampledPoints ?? [
                    a.start,
                    a.midpoint,
                    a.end
                ];
                return d.reduce((c, u)=>{
                    const p = u[0] - t[0], f = u[1] - t[1], m = u[2] - t[2];
                    return c + p * r[0] + f * r[1] + m * r[2];
                }, 0) / d.length;
            }));
            return o.filter((a)=>{
                const d = a.sampledPoints ?? [
                    a.start,
                    a.midpoint,
                    a.end
                ], c = d.reduce((u, p)=>{
                    const f = p[0] - t[0], m = p[1] - t[1], y = p[2] - t[2];
                    return u + f * r[0] + m * r[1] + y * r[2];
                }, 0) / d.length;
                return Math.abs(c - s) <= .5;
            }).map((a)=>a.ordinal);
        }
        return o.map((s)=>s.ordinal);
    }
    function dd(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Zr(e, t) {
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
    function $o(e, t, r) {
        const n = dd(e, "TopExp_Explorer", [
            t,
            e.TopAbs_ShapeEnum?.TopAbs_EDGE ?? e.TopAbs_EDGE,
            e.TopAbs_ShapeEnum?.TopAbs_SHAPE ?? e.TopAbs_SHAPE
        ]), i = [];
        try {
            for(; n.More();){
                const o = n.Current(), s = e.TopoDS?.Edge_1 ? e.TopoDS.Edge_1(o) : o;
                if (i.some((c)=>typeof c?.IsSame == "function" && c.IsSame(s))) {
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
    function K(e, t) {
        const r = [];
        return $o(e, t, (n, i)=>{
            try {
                const o = dd(e, "BRepAdaptor_Curve", [
                    n
                ]), s = typeof o.FirstParameter == "function" ? o.FirstParameter() : 0, a = typeof o.LastParameter == "function" ? o.LastParameter() : 1, d = o.Value(s), c = o.Value(a), u = o.Value((s + a) / 2), p = Zr(e, d), f = Zr(e, c), m = Zr(e, u);
                let y = 0;
                const x = [
                    p
                ];
                let _ = p;
                for(let g = 1; g <= 8; g++){
                    const l = s + (a - s) * g / 8, b = o.Value(l), h = Zr(e, b);
                    y += Math.hypot(h[0] - _[0], h[1] - _[1], h[2] - _[2]), _ = h, x.push(h), b.delete?.();
                }
                r.push({
                    ordinal: i,
                    start: p,
                    end: f,
                    midpoint: m,
                    length: y,
                    sampledPoints: x
                }), o.delete?.(), d.delete?.(), c.delete?.(), u.delete?.();
            } catch  {}
        }), r;
    }
    function am(e, t) {
        return Ro(e, t);
    }
    function dm(e, t, r = 1.5) {
        if (e.length === 0) throw new Error("OCC prism has no edges to match");
        const n = new Set, i = [];
        for (const o of t){
            if (o.samplePoints.length < 2) throw new Error(`Edge "${o.role}" has insufficient source samples`);
            let s = null, a = Number.POSITIVE_INFINITY;
            for (const d of e){
                if (n.has(d.ordinal)) continue;
                const c = d.sampledPoints ?? [
                    d.start,
                    d.midpoint,
                    d.end
                ];
                let u = 0, p = 0;
                for (const m of o.samplePoints){
                    let y = Number.POSITIVE_INFINITY;
                    for (const x of c)y = Math.min(y, am(m, x));
                    u = Math.max(u, y), p += y;
                }
                const f = Math.sqrt(p / o.samplePoints.length) + Math.sqrt(u);
                f < a && (a = f, s = d);
            }
            if (!s || a > r * 2) throw new Error(`Failed to match sampled edge "${o.role}" to OCC prism (score=${a.toFixed(4)})`);
            n.add(s.ordinal), i.push(s.ordinal);
        }
        return [
            ...new Set(i)
        ].sort((o, s)=>o - s);
    }
    function cm(e, t, r) {
        const n = ze(e, t, r);
        try {
            return K(e, n.shape);
        } finally{
            Ae(n);
        }
    }
    function Ro(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function cd(e, t, r = 1.5) {
        if (e.length === 0) throw new Error("OCC prism has no edges to match");
        const n = r * r, i = new Set, o = [];
        for (const s of t){
            let a = null, d = Number.POSITIVE_INFINITY;
            for (const c of e){
                if (i.has(c.ordinal)) continue;
                const u = Ro(s.midpoint, c.midpoint);
                u < d && (d = u, a = c);
            }
            if (!a || d > n) {
                const c = s.role.startsWith("feature_edge_") ? " (tessellation display role has no OCC identity — tip must publish occEdgeOrdinal)" : "";
                throw new Error(`Failed to match edge "${s.role}" to OCC prism (nearest dist²=${d.toFixed(4)})${c}`);
            }
            i.add(a.ordinal), o.push(a.ordinal);
        }
        return [
            ...new Set(o)
        ].sort((s, a)=>s - a);
    }
    function vn(e, t, r, n = 1.5) {
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
            const c = d.midpoint ?? [
                (d.startVertex[0] + d.endVertex[0]) / 2,
                (d.startVertex[1] + d.endVertex[1]) / 2,
                (d.startVertex[2] + d.endVertex[2]) / 2
            ];
            let u = null, p = Number.POSITIVE_INFINITY;
            for (const f of r){
                if (a.has(f.ordinal)) continue;
                const m = Ro(c, f.midpoint);
                m < p && (p = m, u = f);
            }
            !u || p > i || (a.add(u.ordinal), s.set(u.ordinal, {
                ...d,
                startVertex: [
                    ...u.start
                ],
                endVertex: [
                    ...u.end
                ],
                midpoint: [
                    ...u.midpoint
                ],
                occEdgeOrdinal: u.ordinal
            }));
        }
        return r.map((d)=>{
            const c = s.get(d.ordinal);
            if (c) return {
                ...c,
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
                    ...c.faceIds
                ],
                provenance: {
                    ...c.provenance
                },
                occEdgeOrdinal: d.ordinal
            };
            const u = `occ_edge_${d.ordinal}`;
            return {
                id: `${e}::${u}`,
                provenance: {
                    featureId: e,
                    role: u
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
    function um(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Co(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Fillet radius must be a positive finite number");
        if (r.length === 0) throw new Error("Fillet requires at least one edge");
        const i = new Set(r), o = e.ChFi3d_FilletShape?.ChFi3d_Rational ?? e.ChFi3d_Rational, s = um(e, "BRepFilletAPI_MakeFillet", o === void 0 ? [
            t
        ] : [
            t,
            o
        ]);
        let a = 0;
        try {
            if ($o(e, t, (d, c)=>{
                if (i.has(c)) {
                    if (typeof s.Add_2 == "function") s.Add_2(n, d);
                    else if (typeof s.Add == "function") s.Add(n, d);
                    else throw new Error("OCC fillet Add binding is unavailable");
                    a++;
                }
            }), a !== i.size) throw new Error(`Fillet edge resolution failed: requested ${i.size}, found ${a}`);
            if (typeof s.Build == "function" && s.Build(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC fillet failed to build a valid result");
            return s.Shape();
        } finally{
            s.delete?.();
        }
    }
    function lm(e, t, r, n, i) {
        const o = ze(e, t, r);
        try {
            const s = Co(e, o.shape, n, i);
            return j(e, s);
        } finally{
            Ae(o);
        }
    }
    function fm(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function En(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Chamfer distance must be a positive finite number");
        if (r.length === 0) throw new Error("Chamfer requires at least one edge");
        const i = new Set(r), o = fm(e, "BRepFilletAPI_MakeChamfer", [
            t
        ]);
        let s = 0;
        try {
            if ($o(e, t, (a, d)=>{
                if (i.has(d)) {
                    if (typeof o.Add_2 == "function") o.Add_2(n, a);
                    else if (typeof o.Add == "function") o.Add(n, a);
                    else throw new Error("OCC chamfer Add binding is unavailable");
                    s++;
                }
            }), s !== i.size) throw new Error(`Chamfer edge resolution failed: requested ${i.size}, found ${s}`);
            if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error("OCC chamfer failed to build a valid result");
            return o.Shape();
        } finally{
            o.delete?.();
        }
    }
    function pm(e, t, r, n, i) {
        const o = ze(e, t, r);
        try {
            return j(e, En(e, o.shape, n, i));
        } finally{
            Ae(o);
        }
    }
    function Jr(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function hm(e, t) {
        const r = e;
        return new (r.gp_Pnt_3 ?? r.gp_Pnt)(t[0], t[1], t[2]);
    }
    function mm(e, t) {
        const r = e;
        return new (r.gp_Dir_4 ?? r.gp_Dir)(t[0], t[1], t[2]);
    }
    function ym(e, t) {
        const r = t.origin ?? t.center ?? [
            0,
            0,
            0
        ], n = hm(e, r), i = [
            n
        ];
        let o;
        try {
            if (t.type === "box") o = Jr(e, "BRepPrimAPI_MakeBox", [
                n,
                t.length,
                t.width,
                t.height
            ]);
            else if (t.type === "sphere") o = Jr(e, "BRepPrimAPI_MakeSphere", [
                n,
                t.radius
            ]);
            else {
                const s = mm(e, t.direction ?? [
                    0,
                    0,
                    1
                ]);
                i.push(s);
                const a = new (e.gp_Ax2_3 ?? e.gp_Ax2_2)(n, s);
                i.push(a), t.type === "cylinder" ? o = Jr(e, "BRepPrimAPI_MakeCylinder", [
                    a,
                    t.radius,
                    t.height
                ]) : o = Jr(e, "BRepPrimAPI_MakeCone", [
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
    function xs(e, t) {
        const r = e, n = Object.keys(r).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new r[o];
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function gm(e, t, r, n, i) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Thickness offset must be positive and finite");
        if (r.length === 0) throw new Error("Thickness requires at least one removed face");
        const o = e, s = xs(e, "BRepOffsetAPI_MakeThickSolid"), a = xs(e, "TopTools_ListOfShape"), d = new Set(r.map((f)=>f.subMeshIndex)), c = new o.TopExp_Explorer_2(t, o.TopAbs_ShapeEnum.TopAbs_FACE, o.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let u = 0, p = 0;
        try {
            for(; c.More();){
                if (d.has(u)) {
                    const x = a.Append ?? a.Append_1 ?? a.append;
                    if (typeof x != "function") throw new Error("OCC TopTools_ListOfShape append binding is unavailable");
                    x.call(a, o.TopoDS.Face_1(c.Current())), p++;
                }
                u++, c.Next();
            }
            if (p !== d.size) throw Object.assign(new Error("Thickness face selector is lost on the current base solid"), {
                code: "topology-reference-lost"
            });
            const f = s.MakeThickSolidByJoin_1 ?? s.MakeThickSolidByJoin;
            if (typeof f != "function") throw new Error("OCC MakeThickSolidByJoin binding is unavailable");
            const m = o.BRepOffset_Mode?.BRepOffset_Skin ?? 0, y = o.GeomAbs_JoinType?.GeomAbs_Arc ?? 0;
            if (f.call(s, t, a, i ? -n : n, 1e-6, m, !1, !1, y, !1), s.Build?.(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC thickness failed to build a valid shell");
            return s.Shape();
        } finally{
            c.delete?.(), a.delete?.(), s.delete?.();
        }
    }
    function Ss(e, t, r, n) {
        const i = e, o = new i.gp_Trsf_1, s = new i.gp_Pnt_3(r[0], r[1], r[2]), a = new i.gp_Dir_4(n[0], n[1], n[2]), d = new (i.gp_Ax2_3 ?? i.gp_Ax2_2)(s, a), c = o.SetMirror_3 ?? o.SetMirror_2 ?? o.SetMirror_1 ?? o.SetMirror;
        if (typeof c != "function") throw new Error("OCC mirror transform API unavailable");
        c.call(o, d);
        const u = new i.BRepBuilderAPI_Transform_2(t, o, !0);
        if (u.Build?.(), u.IsDone?.() === !1) throw new Error("OCC mirror transform failed");
        return {
            shape: u.Shape(),
            delete: ()=>{
                u.delete?.(), d.delete?.(), s.delete?.(), a.delete?.(), o.delete?.();
            }
        };
    }
    function Im(e, t) {
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
    function bm(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function wm(e, t) {
        if (t.length < 2) throw new Error("Loft requires at least two section profiles");
        for(let i = 1; i < t.length; i++)if (Im(t[i - 1], t[i])) throw new Error(`Loft sections ${i} and ${i + 1} are coplanar; use distinct section planes`);
        const r = bm(e, "BRepOffsetAPI_ThruSections", [
            !0,
            !1,
            1e-6
        ]), n = t.map((i)=>ct(e, i));
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
    function km(e, t) {
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
    function sn(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function Fs(e, t, r = !0) {
        const i = (t.geometry ?? []).flatMap((u)=>u.kind === "line" ? [
                {
                    kind: "line",
                    start: u.start,
                    end: u.end
                }
            ] : u.kind === "bezier" ? [
                {
                    kind: "bezier",
                    controls: u.controls
                }
            ] : u.kind === "spline" ? [
                {
                    kind: "spline",
                    controls: u.controls,
                    tension: u.tension
                }
            ] : []), o = [
            ...(t.loops.find((u)=>u.isOuter) ?? t.loops[0])?.points ?? []
        ];
        if (i.length === 0) for(let u = 0; u < o.length - 1; u++)i.push({
            kind: "line",
            start: o[u],
            end: o[u + 1]
        });
        if (i.length === 0) throw new Error("Pipe path requires at least one curve segment");
        const s = sn(e, "BRepBuilderAPI_MakeWire", []), a = [], d = s.Add_1 ?? s.Add;
        if (typeof d != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
        const c = r ? i : i.flatMap((u)=>{
            const p = ea(u), f = [];
            for(let m = 0; m < p.length - 1; m++)f.push({
                kind: "line",
                start: p[m],
                end: p[m + 1]
            });
            return u.kind === "circle" && p.length > 2 && f.push({
                kind: "line",
                start: p[p.length - 1],
                end: p[0]
            }), f;
        });
        for (const u of c)d.call(s, Xa(e, t, u, a));
        return {
            wire: s.Wire(),
            points: [],
            builder: s,
            resources: a
        };
    }
    function xm(e, t, r, n = "frenet") {
        const i = Array.isArray(t) ? t : [
            t
        ];
        if (i.length === 0) throw new Error("Pipe requires at least one section profile");
        for(let c = 1; c < i.length; c++)if (km(i[c - 1], i[c])) throw new Error(`Pipe sections ${c} and ${c + 1} are coplanar; place sections along the path`);
        const o = i.map((c)=>ct(e, c)), s = (r.geometry ?? []).some((c)=>c.kind === "bezier" || c.kind === "spline");
        let a = Fs(e, r, !0), d;
        try {
            if (i.length > 1) {
                d = sn(e, "BRepOffsetAPI_MakePipeShell", [
                    a.wire
                ]);
                const u = d.Add_1 ?? d.Add_2 ?? d.AddWire ?? d.Add;
                if (typeof u != "function") throw new Error("OCC PipeShell section binding is unavailable");
                for (const p of o)try {
                    u.call(d, p.outerWire, !1, !1);
                } catch  {
                    u.call(d, p.outerWire);
                }
                if (d.Build?.(), typeof d.IsDone == "function" && !d.IsDone()) throw new Error("OCC multi-section PipeShell failed");
                return d.Shape();
            }
            const c = o[0];
            try {
                d = sn(e, "BRepOffsetAPI_MakePipe", [
                    a.wire,
                    c.face
                ]);
            } catch (u) {
                if (!s) throw u;
                a.builder.delete?.();
                for (const p of a.resources)p.delete?.();
                a = Fs(e, r, !1), d = sn(e, "BRepOffsetAPI_MakePipe", [
                    a.wire,
                    c.face
                ]);
            }
            if (d.Build?.(), typeof d.IsDone == "function" && !d.IsDone()) throw new Error("OCC pipe failed to build a valid result");
            return d.Shape();
        } finally{
            d?.delete?.(), a.builder.delete?.();
            for (const c of a.resources)c.delete?.();
            for (const c of o){
                c.faceMaker.delete?.(), c.wireBuilder.delete?.();
                for (const u of c.innerWireBuilders)u.delete?.();
            }
        }
    }
    function mr(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Sm(e, t, r) {
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
    const Fm = {
        0: "Draft_NoError",
        1: "Draft_FaceRecomputation",
        2: "Draft_EdgeRecomputation",
        3: "Draft_VertexRecomputation"
    };
    function ud(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function _s(e) {
        const t = ud(e);
        return t != null ? `${Fm[t] ?? "Draft_UnknownError"} (${t})` : typeof e == "string" && e.length > 0 ? e : "Draft_UnknownError";
    }
    function vs(e) {
        switch(ud(e)){
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
    function _m(e, t) {
        const r = e.face.plane?.normal;
        if (r && Math.hypot(r[1] * e.neutralPlane.normal[2] - r[2] * e.neutralPlane.normal[1], r[2] * e.neutralPlane.normal[0] - r[0] * e.neutralPlane.normal[2], r[0] * e.neutralPlane.normal[1] - r[1] * e.neutralPlane.normal[0]) <= 1e-7) throw new Error(`Draft surface ${e.face.provenance.featureId}:${e.face.provenance.role} is parallel to the hinge plane, so no rotation hinge line exists`);
        if (Math.abs(t[0] * e.neutralPlane.normal[0] + t[1] * e.neutralPlane.normal[1] + t[2] * e.neutralPlane.normal[2]) <= 1e-7) throw new Error("Draft pull direction lies in the hinge plane; select a direction that crosses the hinge plane");
    }
    function vm(e, t, r, n) {
        if (r.length === 0) throw new Error("Draft requires at least one face operation");
        const i = e, o = mr(i, "gp_Dir", n), s = mr(i, "BRepOffsetAPI_DraftAngle", []), a = [];
        try {
            s.Init(t);
            for (const u of r){
                if (!Number.isFinite(u.angle) || Math.abs(u.angle) <= 0 || Math.abs(u.angle) >= Math.PI / 2) throw new Error("Draft angle is invalid");
                _m(u, n);
                const p = mr(i, "gp_Pnt", u.neutralPlane.origin), f = mr(i, "gp_Dir", u.neutralPlane.normal), m = mr(i, "gp_Pln", [
                    p,
                    f
                ]);
                a.push(m, f, p);
                const y = Sm(e, t, u.face);
                if (s.Add(y, o, u.angle, m, !0), typeof s.AddDone == "function" && !s.AddDone()) {
                    const x = s.Status?.();
                    try {
                        s.Remove?.(y);
                    } catch  {}
                    throw new Error(`OCC draft add failed for ${u.face.provenance.featureId}:${u.face.provenance.role}: ${_s(x)}; ${vs(x)}`);
                }
            }
            s.Build?.();
            const d = typeof s.Status == "function" ? s.Status() : 0, c = s.ModifiedShape?.(t) ?? s.Shape?.();
            if (!c || typeof s.IsDone == "function" && !s.IsDone()) throw new Error(`OCC draft build failed: ${_s(d)}; ${vs(d)}`);
            return c;
        } finally{
            s.delete?.();
            for (const d of a.reverse())d.delete?.();
            o.delete?.();
        }
    }
    function qe(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Em(e, t, r, n) {
        const i = e, o = Math.hypot(...r.normal);
        if (o <= 1e-9) throw new Error("Split plane normal is degenerate");
        const s = r.normal.map((m)=>m / o), a = qe(i, "gp_Pnt", r.origin), d = qe(i, "gp_Dir", s), c = qe(i, "gp_Pln", [
            a,
            d
        ]), u = qe(i, "BRepBuilderAPI_MakeFace", [
            c,
            -1e6,
            1e6,
            -1e6,
            1e6
        ]), p = u.Face?.() ?? u.Shape?.();
        if (!p) throw new Error("OCC Split failed to construct the splitting plane");
        const f = [
            u,
            c,
            d,
            a
        ];
        try {
            const m = (x)=>{
                const _ = x > 0 ? "positive" : "negative", g = qe(i, "gp_Pnt", [
                    r.origin[0] + s[0] * x,
                    r.origin[1] + s[1] * x,
                    r.origin[2] + s[2] * x
                ]), l = qe(i, "BRepPrimAPI_MakeHalfSpace", [
                    p,
                    g
                ]);
                if (f.unshift(l, g), l.Build?.(), l.IsDone?.() === !1) throw new Error("OCC Split half-space construction failed");
                const b = l.Solid?.() ?? l.Shape?.(), h = qe(i, "BRepAlgoAPI_Common", [
                    t,
                    b
                ]);
                if (f.unshift(h), h.Build?.(), h.IsDone?.() === !1) throw new Error(`OCC Split ${_} side intersection failed`);
                const I = h.Shape?.();
                if (!I) throw new Error(`OCC Split produced no ${_} side result`);
                return I;
            };
            let y;
            if (n === "both") {
                const x = m(1), _ = m(-1), g = qe(i, "TopoDS_Compound", []), l = qe(i, "BRep_Builder", []);
                f.unshift(l), l.MakeCompound(g), l.Add(g, x), l.Add(g, _), y = g;
            } else y = m(n === "positive" ? 1 : -1);
            return {
                shape: y,
                dispose: ()=>f.forEach((x)=>x.delete?.())
            };
        } catch (m) {
            throw f.forEach((y)=>y.delete?.()), m;
        }
    }
    function Fr(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} unavailable`);
    }
    function Am(e, t, r, n) {
        const i = t.subMeshes[r.subMeshIndex];
        if (!i) throw new Error(`Face Pull submesh ${r.subMeshIndex} is lost`);
        const o = t.indices ? Array.from(t.indices.slice(i.firstIndex, i.firstIndex + i.indexCount)) : Array.from({
            length: i.indexCount
        }, (x, _)=>i.firstIndex + _), s = new Map;
        for(let x = 0; x + 2 < o.length; x += 3){
            const _ = [
                o[x],
                o[x + 1],
                o[x + 2]
            ];
            for(let g = 0; g < 3; g += 1){
                const l = _[g], b = _[(g + 1) % 3], h = l < b ? `${l}:${b}` : `${b}:${l}`, I = s.get(h);
                s.set(h, I ? {
                    ...I,
                    count: I.count + 1
                } : {
                    first: l,
                    second: b,
                    count: 1
                });
            }
        }
        const a = new Map;
        for (const x of s.values())x.count === 1 && ((a.get(x.first) ?? a.set(x.first, []).get(x.first)).push(x.second), (a.get(x.second) ?? a.set(x.second, []).get(x.second)).push(x.first));
        const d = a.keys().next().value;
        if (d === void 0) throw new Error("Face Pull could not resolve the selected face boundary");
        const c = [
            d
        ];
        let u = -1, p = d;
        for(; c.length <= a.size + 1;){
            const x = a.get(p)?.find((_)=>_ !== u);
            if (x === void 0) throw new Error("Face Pull selected face boundary is open");
            if (x === d) break;
            c.push(x), u = p, p = x;
        }
        if (c.length < 3) throw new Error("Face Pull selected face boundary is degenerate");
        const f = Fr(e, "BRepBuilderAPI_MakePolygon", []);
        n.push(f);
        const m = f.Add_1 ?? f.Add;
        for (const x of c){
            const _ = Fr(e, "gp_Pnt", [
                t.positions[x * 3],
                t.positions[x * 3 + 1],
                t.positions[x * 3 + 2]
            ]);
            n.push(_), m.call(f, _);
        }
        f.Close?.();
        const y = Fr(e, "BRepBuilderAPI_MakeFace", [
            f.Wire(),
            !0
        ]);
        return n.push(y), y.Face?.() ?? y.Shape();
    }
    function ld(e, t, r, n, i, o, s) {
        const a = e, d = Fr(a, "gp_Vec", [
            i[0] * o,
            i[1] * o,
            i[2] * o
        ]), c = [], u = [], p = [];
        let f;
        try {
            const m = n.map((_)=>{
                const g = Fr(a, "BRepPrimAPI_MakePrism", [
                    Am(a, r, _, p),
                    d,
                    !0,
                    !0
                ]);
                if (g.Build?.(), g.IsDone?.() === !1) throw new Error("OCC Face Pull prism failed");
                return c.push(g), g.Shape();
            });
            let y = m[0];
            for(let _ = 1; _ < m.length; _ += 1){
                const g = Gt(e, y, m[_], "union");
                u.push(g), y = g.Shape();
            }
            return f = Gt(e, t, y, s === "add" ? "union" : "cut"), {
                shape: f.Shape(),
                dispose: ()=>{
                    f?.delete?.();
                    for (const _ of u.reverse())_.delete?.();
                    for (const _ of c.reverse())_.delete?.();
                    for (const _ of p.reverse())_.delete?.();
                    d.delete?.();
                }
            };
        } catch (m) {
            f?.delete?.();
            for (const y of u.reverse())y.delete?.();
            for (const y of c.reverse())y.delete?.();
            for (const y of p.reverse())y.delete?.();
            throw d.delete?.(), m;
        }
    }
    function ui(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function fd(e, t, r = 32) {
        const n = e, i = (c)=>ui(n, "gp_Pnt", [
                c[0],
                c[1],
                c[2]
            ]), o = ui(n, "BRepBuilderAPI_MakeWire", []), s = [], a = o.Add_1 ?? o.Add;
        if (typeof a != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
        const { points: d } = pf(t, r);
        for(let c = 0; c < d.length - 1; c += 1){
            const u = i(d[c]), p = i(d[c + 1]), f = ui(n, "BRepBuilderAPI_MakeEdge", [
                u,
                p
            ]);
            s.push(u, p, f), a.call(o, f.Edge?.() ?? f.edge?.() ?? f);
        }
        return {
            wire: o.Wire(),
            builder: o,
            resources: s
        };
    }
    function yr(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function li(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Om(e, t) {
        const r = yr(e.axisDirection), n = Math.abs(r[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], i = yr(li(n, r)), o = yr(li(r, i)), s = e.handedness === "left" ? -1 : 1, a = yr([
            o[0] * s + r[0] * e.pitch / (Math.PI * 2 * e.radius),
            o[1] * s + r[1] * e.pitch / (Math.PI * 2 * e.radius),
            o[2] * s + r[2] * e.pitch / (Math.PI * 2 * e.radius)
        ]), d = yr(li(a, i)), c = t.majorRadius - t.depth;
        return {
            loops: [
                {
                    isOuter: !0,
                    points: [
                        {
                            x: c,
                            y: -t.pitch / 2
                        },
                        {
                            x: t.majorRadius,
                            y: 0
                        },
                        {
                            x: c,
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
    function pd(e, t, r, n) {
        if (r.profileKind === "custom_sketch" && !n) throw new Error("Custom Thread profile is unavailable");
        if (Math.abs(r.pitch - t.pitch) > 1e-9) throw new Error("Thread pitch must match Helix pitch");
        if (Math.abs(r.majorRadius - t.radius) > Math.max(1e-7, t.radius * 1e-6)) throw new Error("Thread major radius must match Helix radius");
        if (r.profileKind === "metric_triangle" && r.depth > Math.min(t.pitch, t.endPitch) * .75) throw new Error("Thread profile would self-intersect");
        const i = ct(e, n ?? Om(t, r)), o = fd(e, t, 8), s = e, a = Object.keys(s).filter((u)=>u === "BRepOffsetAPI_MakePipe" || u.startsWith("BRepOffsetAPI_MakePipe_"));
        let d, c;
        try {
            for (const u of a)try {
                d = new s[u](o.wire, i.face);
                break;
            } catch (p) {
                c = p;
            }
            if (!d) throw c instanceof Error ? c : new Error("OCC MakePipe binding is unavailable");
            if (d.Build?.(), typeof d.IsDone == "function" && !d.IsDone()) throw new Error("OCC Thread sweep failed");
            return d.Shape();
        } finally{
            d?.delete?.(), o.builder.delete?.();
            for (const u of o.resources)u.delete?.();
            i.faceMaker.delete?.(), i.wireBuilder.delete?.();
            for (const u of i.innerWireBuilders)u.delete?.();
        }
    }
    function je(e) {
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
    function at(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function ot(e, t) {
        return [
            (e[0] + t[0]) / 2,
            (e[1] + t[1]) / 2,
            (e[2] + t[2]) / 2
        ];
    }
    function Pm(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function Ue(e, t) {
        return Math.sqrt(Pm(e, t));
    }
    function _r(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Yt(e, t) {
        return `${e}::face::${t}`;
    }
    function An(e, t) {
        return `${e}::edge::${t}`;
    }
    function fi(e, t, r, n) {
        const i = je(r), o = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], s = Math.cos(n), a = Math.sin(n), d = _r(i, o), c = at(i, o);
        return [
            t[0] + o[0] * s + c[0] * a + i[0] * d * (1 - s),
            t[1] + o[1] * s + c[1] * a + i[1] * d * (1 - s),
            t[2] + o[2] * s + c[2] * a + i[2] * d * (1 - s)
        ];
    }
    function hd(e) {
        const t = e.positions;
        if (!t || t.length < 3) return 1;
        let r = 1 / 0, n = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0, a = -1 / 0;
        for(let c = 0; c < t.length; c += 3)r = Math.min(r, t[c]), n = Math.min(n, t[c + 1]), i = Math.min(i, t[c + 2]), o = Math.max(o, t[c]), s = Math.max(s, t[c + 1]), a = Math.max(a, t[c + 2]);
        const d = Math.hypot(o - r, s - n, a - i);
        return Math.max(d, .001);
    }
    function $m(e, t, r) {
        const n = e.indices, i = e.positions, o = e.normals;
        if (!n || t.indexCount < 3) return null;
        let s = 0, a = 0, d = 0, c = 0, u = 0, p = 0, f = 0, m = null, y = null, x = !0;
        const _ = Math.floor(t.indexCount / 3);
        for(let w = 0; w < _; w++){
            const F = t.firstIndex + w * 3, v = n[F], E = n[F + 1], C = n[F + 2], R = [
                i[v * 3],
                i[v * 3 + 1],
                i[v * 3 + 2]
            ], O = [
                i[E * 3],
                i[E * 3 + 1],
                i[E * 3 + 2]
            ], H = [
                i[C * 3],
                i[C * 3 + 1],
                i[C * 3 + 2]
            ], D = [
                O[0] - R[0],
                O[1] - R[1],
                O[2] - R[2]
            ], X = [
                H[0] - R[0],
                H[1] - R[1],
                H[2] - R[2]
            ], Q = at(D, X), Z = .5 * Math.hypot(Q[0], Q[1], Q[2]);
            if (Z < 1e-18) continue;
            const _e = je(Q);
            m ? (!y || _r(y, _e) < .99999 || Math.abs(_r(y, [
                R[0] - m[0],
                R[1] - m[1],
                R[2] - m[2]
            ])) > 1e-6) && (x = !1) : (m = R, y = _e), f += Z, s += (R[0] + O[0] + H[0]) / 3 * Z, a += (R[1] + O[1] + H[1]) / 3 * Z, d += (R[2] + O[2] + H[2]) / 3 * Z, o && o.length >= (v + 1) * 3 ? (c += o[v * 3] * Z, u += o[v * 3 + 1] * Z, p += o[v * 3 + 2] * Z) : (c += Q[0], u += Q[1], p += Q[2]);
        }
        if (f < 1e-18) return null;
        const g = [
            s / f,
            a / f,
            d / f
        ], l = je([
            c,
            u,
            p
        ]);
        let b = 0, h = 0;
        for(let w = 0; w < t.indexCount; w += 1){
            const F = n[t.firstIndex + w], v = [
                i[F * 3] - g[0],
                i[F * 3 + 1] - g[1],
                i[F * 3 + 2] - g[2]
            ];
            b = Math.max(b, Math.hypot(...v)), h = Math.max(h, Math.abs(_r(l, v)));
        }
        x = h <= Math.max(1e-6, b * 1e-5);
        const I = Math.abs(l[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            1,
            0,
            0
        ], S = je(at(I, l)), k = je(at(l, S));
        return {
            subMeshIndex: r,
            centroid: g,
            normal: l,
            area: f,
            ...x ? {
                plane: {
                    origin: g,
                    normal: l,
                    uAxis: S,
                    vAxis: k
                }
            } : {}
        };
    }
    function Br(e) {
        const t = [];
        for(let r = 0; r < (e.subMeshes?.length ?? 0); r++){
            const n = $m(e, e.subMeshes[r], r);
            n && t.push(n);
        }
        return t;
    }
    function qi(e, t, r) {
        const n = _r(e.normal, t.expectedNormal);
        return n < .55 ? 1 / 0 : Ue(e.centroid, t.expectedCentroid) / r + (1 - n) * .35;
    }
    function Rm(e, t, r) {
        const n = Ue(e.start, t.start) + Ue(e.end, t.end), i = Ue(e.start, t.end) + Ue(e.end, t.start), o = Math.min(n, i) / (2 * r), s = Ue(e.midpoint, t.midpoint) / r, a = Ue(t.start, t.end), d = Math.abs(e.length - a) / Math.max(r, a, 1e-6);
        return o * .45 + s * .45 + d * .1;
    }
    function md(e, t, r, n, i = .08, o) {
        const s = new Set(r.map((f)=>f.id)), a = new Map;
        for (const f of r)a.set(`${f.provenance.featureId}::${f.provenance.role}`, f.id);
        const d = new Set, c = new Set, u = [];
        for (const f of e){
            const m = `${f.featureId}::${f.role}`;
            if (c.has(m)) continue;
            let y = null, x = 1 / 0;
            for (const g of t){
                if (d.has(g.ordinal)) continue;
                const l = Rm(g, f, n);
                l < x && (y = g, x = l);
            }
            if (!y || x > i) continue;
            c.add(m), d.add(y.ordinal);
            const _ = f.faceIds ? [
                s.has(f.faceIds[0]) ? f.faceIds[0] : "",
                s.has(f.faceIds[1]) ? f.faceIds[1] : ""
            ] : [
                f.faceRoles?.[0] ? a.get(`${f.featureId}::${f.faceRoles[0]}`) ?? "" : "",
                f.faceRoles?.[1] ? a.get(`${f.featureId}::${f.faceRoles[1]}`) ?? "" : ""
            ];
            u.push({
                id: An(f.featureId, f.role),
                provenance: {
                    featureId: f.featureId,
                    role: f.role
                },
                faceIds: _,
                startVertex: y.start,
                endVertex: y.end,
                midpoint: y.midpoint,
                occEdgeOrdinal: y.ordinal
            });
        }
        const p = o ?? e.find((f)=>f.featureId)?.featureId ?? "tip";
        for (const f of t){
            if (d.has(f.ordinal)) continue;
            const m = `occ_edge_${f.ordinal}`;
            u.push({
                id: An(p, m),
                provenance: {
                    featureId: p,
                    role: m
                },
                faceIds: [
                    "",
                    ""
                ],
                startVertex: f.start,
                endVertex: f.end,
                midpoint: f.midpoint,
                occEdgeOrdinal: f.ordinal
            });
        }
        return u;
    }
    function Mo(e, t, r, n) {
        const i = Br(r), o = hd(r), s = n?.maxMatchDistanceFraction ?? .08, a = new Set, d = [], c = [
            ...e
        ];
        for(; c.length > 0;){
            let p = -1, f = null, m = 1 / 0;
            for(let _ = 0; _ < c.length; _++){
                const g = c[_];
                for (const l of i){
                    if (a.has(l.subMeshIndex)) continue;
                    const b = qi(l, g, o);
                    b < m && (m = b, p = _, f = l);
                }
            }
            if (p < 0 || !f || m > s + .35) break;
            const y = c.splice(p, 1)[0];
            a.add(f.subMeshIndex);
            const x = Yt(y.featureId, y.role);
            d.push({
                id: x,
                provenance: {
                    featureId: y.featureId,
                    role: y.role,
                    ...y.parentFaceIds ? {
                        parentFaceIds: [
                            ...y.parentFaceIds
                        ]
                    } : {}
                },
                subMeshIndex: f.subMeshIndex,
                normal: f.normal,
                centroid: f.centroid,
                area: f.area
            });
        }
        const u = n?.edgeSamples ? md(t, n.edgeSamples, d, o, .08, t[0]?.featureId) : [];
        return {
            faces: d,
            edges: u
        };
    }
    function On(e, t, r, n = 0) {
        const { origin: i, normal: o, uAxis: s, vAxis: a } = e, d = sr(e), c = to(e), u = [
            d,
            ...c
        ], p = je(o), f = (g, l, b)=>[
                i[0] + s[0] * g + a[0] * l + p[0] * b,
                i[1] + s[1] * g + a[1] * l + p[1] * b,
                i[2] + s[2] * g + a[2] * l + p[2] * b
            ];
        let m = 0, y = 0;
        for (const g of d.points)m += g.x, y += g.y;
        m /= Math.max(1, d.points.length), y /= Math.max(1, d.points.length);
        const x = [
            {
                role: "bottom",
                featureId: r,
                expectedCentroid: f(m, y, n),
                expectedNormal: [
                    -p[0],
                    -p[1],
                    -p[2]
                ]
            },
            {
                role: "top",
                featureId: r,
                expectedCentroid: f(m, y, n + t),
                expectedNormal: [
                    ...p
                ]
            }
        ], _ = [];
        for(let g = 0; g < u.length; g++){
            const b = u[g].points, h = g === 0, I = g - 1;
            for(let S = 0; S < b.length; S++){
                const k = (S + 1) % b.length, w = f(b[S].x, b[S].y, n), F = f(b[k].x, b[k].y, n), v = f(b[S].x, b[S].y, n + t), E = f(b[k].x, b[k].y, n + t), C = [
                    F[0] - w[0],
                    F[1] - w[1],
                    F[2] - w[2]
                ];
                let R = je(at(C, p));
                h || (R = [
                    -R[0],
                    -R[1],
                    -R[2]
                ]);
                const O = h ? `side_${S}` : `hole_${I}_side_${S}`;
                x.push({
                    role: O,
                    featureId: r,
                    expectedCentroid: ot(ot(w, F), ot(v, E)),
                    expectedNormal: R
                });
                const H = h ? `edge_bottom_${S}` : `edge_hole_${I}_bottom_${S}`, D = h ? `edge_top_${S}` : `edge_hole_${I}_top_${S}`, X = h ? `edge_vertical_${S}` : `edge_hole_${I}_vertical_${S}`;
                _.push({
                    role: H,
                    featureId: r,
                    midpoint: ot(w, F),
                    start: w,
                    end: F,
                    faceRoles: [
                        "bottom",
                        O
                    ]
                }, {
                    role: D,
                    featureId: r,
                    midpoint: ot(v, E),
                    start: v,
                    end: E,
                    faceRoles: [
                        "top",
                        O
                    ]
                }, {
                    role: X,
                    featureId: r,
                    midpoint: ot(w, v),
                    start: w,
                    end: v,
                    faceRoles: [
                        O,
                        ""
                    ]
                });
            }
        }
        return {
            faces: x,
            edges: _
        };
    }
    function yd(e, t, r, n, i, o = 0) {
        const s = On(e, t, r, o);
        return n ? Mo(s.faces, s.edges, n, {
            edgeSamples: i
        }) : {
            faces: s.faces.map((a)=>({
                    id: Yt(a.featureId, a.role),
                    provenance: {
                        featureId: a.featureId,
                        role: a.role
                    },
                    subMeshIndex: -1,
                    normal: a.expectedNormal,
                    centroid: a.expectedCentroid
                })),
            edges: s.edges.map((a)=>({
                    id: An(a.featureId, a.role),
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
    function Pn(e, t, r, n) {
        const { origin: i, uAxis: o, vAxis: s } = e, a = sr(e), d = je(n.direction), c = [], u = [], p = Math.abs(Math.abs(t) - Math.PI * 2) < 1e-6, f = t * .5, m = (y, x)=>[
                i[0] + o[0] * y + s[0] * x,
                i[1] + o[1] * y + s[1] * x,
                i[2] + o[2] * y + s[2] * x
            ];
        for(let y = 0; y < a.points.length; y++){
            const x = (y + 1) % a.points.length, _ = m(a.points[y].x, a.points[y].y), g = m(a.points[x].x, a.points[x].y), l = fi(_, n.origin, d, f), b = fi(g, n.origin, d, f), h = ot(l, b), I = [
                h[0] - n.origin[0],
                h[1] - n.origin[1],
                h[2] - n.origin[2]
            ], S = je(at(d, at(I, d))), k = `profile_side_${y}`;
            c.push({
                role: k,
                featureId: r,
                expectedCentroid: h,
                expectedNormal: S
            }), u.push({
                role: `profile_edge_${y}`,
                featureId: r,
                midpoint: ot(_, g),
                start: _,
                end: g,
                faceRoles: [
                    k,
                    ""
                ]
            });
        }
        if (!p) {
            let y = 0, x = 0;
            for (const b of a.points)y += b.x, x += b.y;
            y /= a.points.length, x /= a.points.length;
            const _ = m(y, x), g = fi(_, n.origin, d, t), l = je(at(d, o));
            c.push({
                role: "start_cap",
                featureId: r,
                expectedCentroid: _,
                expectedNormal: l
            }), c.push({
                role: "end_cap",
                featureId: r,
                expectedCentroid: g,
                expectedNormal: [
                    -l[0],
                    -l[1],
                    -l[2]
                ]
            });
        }
        return {
            faces: c,
            edges: u
        };
    }
    function an(e, t, r, n, i, o) {
        const a = Pn(e, t, r, n ?? {
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
        return i ? Mo(a.faces, a.edges, i, {
            edgeSamples: o
        }) : {
            faces: a.faces.map((d)=>({
                    id: Yt(d.featureId, d.role),
                    provenance: {
                        featureId: d.featureId,
                        role: d.role
                    },
                    subMeshIndex: -1,
                    normal: d.expectedNormal,
                    centroid: d.expectedCentroid
                })),
            edges: a.edges.map((d)=>({
                    id: An(d.featureId, d.role),
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
    function ee(e) {
        const { prior: t, resultMesh: r, generatingFeatureId: n, opKind: i, toolFaceHints: o = [], toolEdgeHints: s = [], resultEdgeSamples: a = [] } = e, d = Br(r), c = hd(r), u = new Set, p = [], f = new Set, m = t.faces.filter((h)=>h.centroid && h.normal).map((h)=>({
                role: h.provenance.role,
                featureId: h.provenance.featureId,
                expectedCentroid: h.centroid,
                expectedNormal: h.normal,
                parentFaceIds: h.provenance.parentFaceIds
            }));
        for (const h of d){
            let I = null, S = 1 / 0;
            for (const k of m){
                const w = `${k.featureId}::${k.role}`;
                if (f.has(w)) continue;
                const F = qi(h, k, c);
                F < S && (S = F, I = k);
            }
            if (I && S <= .12) {
                f.add(`${I.featureId}::${I.role}`), u.add(h.subMeshIndex);
                const k = t.faces.find((w)=>w.provenance.featureId === I.featureId && w.provenance.role === I.role);
                p.push({
                    id: k?.id ?? Yt(I.featureId, I.role),
                    provenance: {
                        featureId: I.featureId,
                        role: I.role,
                        ...I.parentFaceIds ? {
                            parentFaceIds: [
                                ...I.parentFaceIds
                            ]
                        } : {}
                    },
                    subMeshIndex: h.subMeshIndex,
                    normal: h.normal,
                    centroid: h.centroid,
                    area: h.area,
                    ...h.plane ? {
                        plane: h.plane
                    } : {}
                });
            }
        }
        const y = new Set;
        for (const h of d){
            if (u.has(h.subMeshIndex)) continue;
            let I = null, S = null, k = 1 / 0;
            for (const w of o){
                const F = `${w.featureId}::${w.role}`;
                if (y.has(F)) continue;
                const v = {
                    featureId: n,
                    role: w.role.startsWith(`${i}_`) ? w.role : `${i}_${w.role}`,
                    expectedCentroid: w.expectedCentroid,
                    expectedNormal: w.expectedNormal
                }, E = qi(h, v, c);
                E < k && (k = E, I = v, S = F);
            }
            if (I && S && k <= .14) {
                y.add(S), u.add(h.subMeshIndex);
                let w, F = 1 / 0;
                for (const v of t.faces){
                    if (!v.centroid) continue;
                    const E = Ue(h.centroid, v.centroid) / c;
                    E < F && (F = E, w = [
                        v.id
                    ]);
                }
                F > .35 && (w = void 0), p.push({
                    id: Yt(n, I.role),
                    provenance: {
                        featureId: n,
                        role: I.role,
                        ...w ? {
                            parentFaceIds: w
                        } : {}
                    },
                    subMeshIndex: h.subMeshIndex,
                    normal: h.normal,
                    centroid: h.centroid,
                    area: h.area,
                    ...h.plane ? {
                        plane: h.plane
                    } : {}
                });
            }
        }
        const x = `${i}_result_face`;
        for (const h of d){
            if (u.has(h.subMeshIndex)) continue;
            let I, S = 1 / 0;
            for (const k of t.faces){
                if (!k.centroid) continue;
                const w = Ue(h.centroid, k.centroid) / c;
                w < S && (S = w, I = [
                    k.id
                ]);
            }
            S > .35 && (I = void 0), p.push({
                id: `${Yt(n, x)}::${h.subMeshIndex}`,
                provenance: {
                    featureId: n,
                    role: x,
                    ...I ? {
                        parentFaceIds: I
                    } : {}
                },
                subMeshIndex: h.subMeshIndex,
                normal: h.normal,
                centroid: h.centroid,
                area: h.area,
                ...h.plane ? {
                    plane: h.plane
                } : {}
            });
        }
        const _ = t.edges.filter((h)=>!!h.midpoint && !h.provenance.role.startsWith("occ_edge_")).map((h)=>({
                role: h.provenance.role,
                featureId: h.provenance.featureId,
                midpoint: h.midpoint,
                start: h.startVertex,
                end: h.endVertex,
                faceIds: h.faceIds
            })), g = s.map((h)=>({
                role: h.role.startsWith(`${i}_`) ? h.role : `${i}_${h.role}`,
                featureId: n,
                midpoint: h.midpoint,
                start: h.start,
                end: h.end,
                faceRoles: [
                    h.faceRoles[0] ? h.faceRoles[0].startsWith(`${i}_`) ? h.faceRoles[0] : `${i}_${h.faceRoles[0]}` : "",
                    h.faceRoles[1] ? h.faceRoles[1].startsWith(`${i}_`) ? h.faceRoles[1] : `${i}_${h.faceRoles[1]}` : ""
                ]
            })), l = md([
            ..._,
            ...g
        ], a, p, c, .08, n), b = r.subMeshes?.length ?? 0;
        for (const h of p)if (h.subMeshIndex < 0 || h.subMeshIndex >= b) throw new Error(`Semantic topology face ${h.provenance.role} has invalid subMeshIndex ${h.subMeshIndex}`);
        if (p.length > b) throw new Error("Semantic topology published more faces than tessellation submeshes");
        return {
            faces: p,
            edges: l
        };
    }
    function Cm(e, t) {
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
    function L(e, t) {
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
            for (const c of a.faceIds)if (c && !i.has(c)) throw new Error(`Semantic edge ${a.id} references missing face ${c}`);
            o.add(a.id), s.add(d);
        }
    }
    function Un(e, t) {
        if (t && t !== "auto") return t;
        const r = (e ?? "").toLowerCase();
        if (r.endsWith(".brep") || r.endsWith(".brp")) return "brep";
        if (r.endsWith(".step") || r.endsWith(".stp")) return "step";
        throw new Error('Cannot detect solid import format — pass format: "brep" | "step" or a fileName with extension');
    }
    function gd(e) {
        return e instanceof Uint8Array ? new Uint8Array(e) : new Uint8Array(e.slice(0));
    }
    function Zt(e, t, r = []) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Id(e, t, r) {
        const n = e.FS;
        if (!n || typeof n.writeFile != "function") throw new Error("opencascade.js virtual FS is unavailable");
        n.writeFile(t, r);
    }
    function Mm(e, t, r) {
        const n = r.length >= 3 && r[0] === 239 && r[1] === 187 && r[2] === 191 ? 3 : 0;
        Id(e, t, n === 0 ? r : r.slice(n));
    }
    function bd(e, t) {
        try {
            e.FS?.unlink?.(t);
        } catch  {}
    }
    function wd(e) {
        return e === "brep" ? "/cad_import.brep" : "/cad_import.step";
    }
    function Wn(e, t) {
        if (e === "step") return "i.stp";
        const r = e === "brep" ? "import.brep" : "import.step", i = (t?.split(/[\\/]/).pop()?.trim() || r).replace(/[^A-Za-z0-9._-]+/g, "_"), o = i.length > 0 ? i : r;
        return /\.(brep|brp)$/i.test(o) ? o : `${o}.brep`;
    }
    function Gn(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function kd(e) {
        const t = Gn(e);
        if (t != null) return String(t);
        if (typeof e == "string" && e.length > 0) return e;
        if (!e || typeof e != "object") return String(e);
        const r = Object.prototype.toString.call(e), n = e.constructor?.name;
        return n && n !== "Object" ? n : r;
    }
    function Dm(e, t) {
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
    function xd(e, t) {
        if (typeof e.ReadFile_1 == "function") return e.ReadFile_1(t);
        if (typeof e.ReadFile == "function") return e.ReadFile(t);
        throw new Error("opencascade.js: STEPControl_Reader.ReadFile is not available");
    }
    function Tm(e) {
        const t = e.slice(0, Math.min(e.byteLength, 96));
        let r = "";
        for (const n of t)r += n >= 32 && n <= 126 ? String.fromCharCode(n) : ".";
        return r.trim();
    }
    function Sd(e, t) {
        if (typeof t.TransferRoots == "function") {
            t.TransferRoots();
            return;
        }
        if (typeof t.TransferRoots_1 == "function") {
            const r = Zt(e, "Message_ProgressRange", []);
            try {
                t.TransferRoots_1(r);
            } finally{
                r.delete?.();
            }
            return;
        }
        throw new Error("opencascade.js: STEPControl_Reader.TransferRoots is not available");
    }
    function Fd(e) {
        const t = typeof e.OneShape == "function" ? e.OneShape() : e.OneShape_1?.();
        if (!t || typeof t.IsNull == "function" && t.IsNull()) throw new Error("STEP import produced an empty shape");
        return t;
    }
    function Bm(e, t, r) {
        const n = Zt(e, "STEPControl_Reader", []);
        try {
            const i = xd(n, t);
            return Gn(i) !== r && i !== !0 ? {
                failure: `STEPControl_Reader status=${kd(i)}`
            } : (Sd(e, n), {
                shape: Fd(n)
            });
        } finally{
            n.delete?.();
        }
    }
    function jm(e, t, r) {
        let n;
        try {
            n = Zt(e, "STEPCAFControl_Reader", []);
        } catch (i) {
            return {
                failure: i instanceof Error ? `STEPCAFControl_Reader unavailable: ${i.message}` : "STEPCAFControl_Reader unavailable"
            };
        }
        try {
            const i = xd(n, t);
            if (Gn(i) !== r && i !== !0) return {
                failure: `STEPCAFControl_Reader status=${kd(i)}`
            };
            const s = typeof n.Reader == "function" ? n.Reader() : null;
            if (!s) return {
                failure: "STEPCAFControl_Reader.Reader is not available"
            };
            try {
                return Sd(e, s), {
                    shape: Fd(s)
                };
            } finally{
                s.delete?.();
            }
        } finally{
            n.delete?.();
        }
    }
    function zm(e) {
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
    function ht(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function Vm(e, t) {
        return Br(e).map((r)=>{
            const n = `import_face_${r.subMeshIndex}`;
            return {
                id: `${t}::face::${n}`,
                provenance: {
                    featureId: t,
                    role: n
                },
                subMeshIndex: r.subMeshIndex,
                centroid: ht(r.centroid),
                normal: ht(r.normal),
                area: r.area,
                ...r.plane ? {
                    plane: {
                        origin: ht(r.plane.origin),
                        normal: ht(r.plane.normal),
                        uAxis: ht(r.plane.uAxis),
                        vAxis: ht(r.plane.vAxis)
                    }
                } : {}
            };
        });
    }
    function Nm(e, t, r) {
        const n = K(e, t), i = new Map(n.map((o)=>[
                o.ordinal,
                o
            ]));
        return vn(r, [], n).map((o)=>{
            const s = typeof o.occEdgeOrdinal == "number" ? i.get(o.occEdgeOrdinal) : void 0;
            if (!s?.sampledPoints || s.sampledPoints.length < 2) return o;
            const a = s.sampledPoints[0], d = s.sampledPoints[s.sampledPoints.length - 1], c = Math.hypot(a[0] - d[0], a[1] - d[1], a[2] - d[2]) < 1e-6;
            return {
                ...o,
                polyline: s.sampledPoints.map(ht),
                ...c ? {
                    closed: !0
                } : {}
            };
        });
    }
    function $n(e, t, r) {
        const n = j(e, t);
        return {
            id: `${r.featureId}:import-solid`,
            name: r.name ?? "Imported BREP",
            featureId: r.featureId,
            faces: Vm(n, r.featureId),
            edges: Nm(e, t, r.featureId),
            tessellation: n
        };
    }
    function Yn(e, t, r = wd("brep")) {
        const n = gd(t);
        Id(e, r, n);
        try {
            const i = Zt(e, "TopoDS_Shape", []), o = Zt(e, "BRep_Builder", []), s = Zt(e, "Message_ProgressRange", []);
            try {
                if (typeof e.BRepTools?.Read_2 == "function") e.BRepTools.Read_2(i, r, o, s);
                else if (typeof e.BRepTools?.Read == "function") e.BRepTools.Read(i, r, o, s);
                else throw new Error("opencascade.js: BRepTools.Read is not available");
                if (typeof i.IsNull == "function" && i.IsNull()) throw new Error("BREP import produced an empty shape");
                return i;
            } finally{
                s.delete?.(), o.delete?.();
            }
        } finally{
            bd(e, r);
        }
    }
    function Zn(e, t, r = wd("step")) {
        const n = gd(t), i = Gn(e.IFSelect_ReturnStatus?.IFSelect_RetDone) ?? 1, o = [];
        for (const s of Dm(r, "i.stp")){
            Mm(e, s, n);
            try {
                const a = Bm(e, s, i);
                if ("shape" in a) return a.shape;
                const d = jm(e, s, i);
                if ("shape" in d) return d.shape;
                o.push(`${s}: ${a.failure}; ${d.failure}`);
            } finally{
                bd(e, s);
            }
        }
        throw new Error(`STEP ReadFile failed (${o.join("; ")}, bytes=${n.byteLength}, header="${Tm(n)}")`);
    }
    function _d(e, t, r = {}) {
        const n = Un(r.fileName, r.format), i = Wn(n, r.fileName), o = n === "brep" ? Yn(e, t, i) : Zn(e, t, i);
        try {
            const s = j(e, o);
            return {
                format: n,
                mesh: zm(s),
                ...r.fileName ? {
                    fileName: r.fileName
                } : {}
            };
        } finally{
            o.delete?.();
        }
    }
    function Km(e, t, r) {
        const n = Un(r.fileName, r.format), i = Wn(n, r.fileName), o = n === "brep" ? Yn(e, t, i) : Zn(e, t, i);
        try {
            return $n(e, o, {
                featureId: r.featureId,
                name: r.name ?? r.fileName
            });
        } finally{
            o.delete?.();
        }
    }
    async function qm(e, t = {}) {
        const r = await dt();
        return _d(r, e, t);
    }
    class Hm {
        shapes = new Set;
        track(t) {
            t !== null && typeof t == "object" && this.shapes.add(t);
        }
        release(t) {
            if (t === null || typeof t != "object" || !this.shapes.delete(t)) return;
            const r = t;
            try {
                r.delete?.();
            } catch  {}
        }
        releaseAll() {
            for (const t of [
                ...this.shapes
            ])this.release(t);
        }
    }
    const pi = new Map;
    function Lm(e, t, r) {
        if (t === r || e.get(t)?.type !== "split") return !1;
        const n = new Set, i = (o, s)=>{
            if (o === t) return s;
            if (n.has(o)) return !1;
            n.add(o);
            const a = e.get(o);
            return (a?.dependencyIds ?? []).some((d)=>i(d, s || a?.type === "draft"));
        };
        return i(r, !1);
    }
    function Es(e, t) {
        return e instanceof Error && e.message ? `${t}: ${e.message}` : typeof e == "number" || typeof e == "string" || typeof e == "bigint" ? `${t}: WASM/OCC exception ${String(e)}` : `${t}: unknown OCC/WASM exception`;
    }
    function hi(e, t) {
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
    function mi(e, t) {
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
    function Um(e) {
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
    function As(e, t, r) {
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
    function Os(e, t, r, n, i) {
        const o = e, s = new o.gp_Trsf_1, a = new o.gp_Ax1_2(new o.gp_Pnt_3(r[0], r[1], r[2]), new o.gp_Dir_4(n[0], n[1], n[2])), d = s.SetRotation_1 ?? s.SetRotation;
        if (typeof d != "function") throw new Error("OCC gp_Trsf rotation API unavailable");
        d.call(s, a, i);
        const c = new o.BRepBuilderAPI_Transform_2(t, s, !0);
        if (c.Build?.(), c.IsDone?.() === !1) throw new Error("OCC polar pattern transform failed");
        return {
            shape: c.Shape(),
            delete: ()=>{
                c.delete?.(), a.delete?.();
            }
        };
    }
    function yi(e, t) {
        return {
            ok: !1,
            protocolVersion: Ye,
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            error: t
        };
    }
    function Wm(e) {
        return new Map(e.map((t)=>[
                t.id,
                t
            ]));
    }
    function Jt(e, t) {
        if (e.attachmentMode === "offset_base") return Fl(e.basePlane, e.offset, e.width, e.height);
        if (e.attachmentMode === "three_point" && e.threePoints) {
            const r = _l(e.threePoints[0], e.threePoints[1], e.threePoints[2]);
            return r ? {
                ...r,
                width: e.width,
                height: e.height
            } : null;
        }
        if (e.attachmentMode === "on_datum" && e.baseDatumId && t) {
            const r = t.get(e.baseDatumId);
            if (!r || r.type !== "datum_plane") return null;
            const n = Jt(r, t);
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
                return ff(r, e.pathParameter, e.width, e.height);
            } catch  {
                return null;
            }
        }
        return null;
    }
    function Hi(e, t) {
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
                    direction: S.map((w)=>w / k)
                };
            }
            const d = t.get(a.firstDatumId), c = t.get(a.secondDatumId);
            if (!d || d.type !== "datum_plane" || !c || c.type !== "datum_plane") throw new Error("Datum Axis intersection requires two Datum Planes");
            const u = Jt(d, t), p = Jt(c, t);
            if (!u || !p) throw new Error("Datum Axis intersection Datum Plane is unresolved");
            const f = (S, k)=>[
                    S[1] * k[2] - S[2] * k[1],
                    S[2] * k[0] - S[0] * k[2],
                    S[0] * k[1] - S[1] * k[0]
                ], m = (S, k)=>S[0] * k[0] + S[1] * k[1] + S[2] * k[2], y = f(u.normal, p.normal), x = m(y, y);
            if (x < 1e-12) throw new Error("Datum Axis intersection planes are parallel");
            const _ = m(u.normal, u.origin), g = m(p.normal, p.origin), l = f(p.normal, y), b = f(y, u.normal), h = [
                (_ * l[0] + g * b[0]) / x,
                (_ * l[1] + g * b[1]) / x,
                (_ * l[2] + g * b[2]) / x
            ], I = Math.sqrt(x);
            return {
                origin: h,
                direction: y.map((S)=>S / I)
            };
        }
        const r = t.get(e.axisRef.featureId);
        if (!r || r.type !== "datum_plane") throw new Error(`Datum plane ${e.axisRef.featureId} is not in Body snapshot`);
        const n = Jt(r, t);
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
    function Gm(e, t) {
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
        const n = Jt(r, t);
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
    function Xt(e, t) {
        const r = Math.hypot(...e);
        if (r <= 1e-9) throw new Error(`${t} is degenerate`);
        return e.map((n)=>n / r);
    }
    function Jn(e, t) {
        const r = e.topology.faces.find((n)=>n.provenance.featureId === t.featureId && n.provenance.role === t.role);
        if (r) return r;
        if (t.featureId.startsWith("ug:feature:")) {
            const n = /(?:^|\/)face\[(\d+)\](?:$|\/)/i.exec(t.role), i = n ? Number(n[1]) : Number.NaN;
            if (Number.isInteger(i)) {
                const o = e.topology.faces.filter((s)=>s.provenance.featureId === t.featureId && (s.subMeshIndex === i || s.subMeshIndex === i - 1));
                if (o.length === 1) return o[0];
                if (o.length > 1) {
                    const s = o.find((a)=>a.subMeshIndex === i);
                    if (s) return s;
                }
            }
        }
        throw Object.assign(new Error(`Draft face ${t.featureId}:${t.role} is lost`), {
            code: "topology-reference-lost"
        });
    }
    function Ym(e, t, r) {
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
    function vd(e, t) {
        const r = e, n = new r.TopExp_Explorer_2(t, r.TopAbs_ShapeEnum.TopAbs_EDGE, r.TopAbs_ShapeEnum.TopAbs_SHAPE), i = [];
        try {
            for(; n.More();)i.push(r.TopoDS.Edge_1(n.Current())), n.Next();
        } finally{
            n.delete?.();
        }
        return i;
    }
    function Li(e, t) {
        const r = e?.IsSame;
        return typeof r == "function" && r.call(e, t) === !0;
    }
    function Zm(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE), o = [];
        try {
            for(; i.More();){
                const s = n.TopoDS.Face_1(i.Current());
                vd(e, s).some((a)=>Li(a, r)) && o.push(s), i.Next();
            }
        } finally{
            i.delete?.();
        }
        return o;
    }
    function Jm(e, t) {
        return e.topology.faces.find((r)=>r.subMeshIndex === t) ?? e.topology.faces.find((r)=>r.subMeshIndex === t - 1) ?? null;
    }
    function Xm(e, t, r) {
        const n = Jn(t, r);
        console.info("[UG Draft] source face resolved", {
            selector: r,
            centroid: n.centroid ?? null,
            normal: n.normal ?? null,
            plane: n.plane ?? null
        });
        const i = Ym(e, t.shape, n.subMeshIndex);
        if (!i) throw Object.assign(new Error(`UG Draft source face ${r.featureId}:${r.role} has no OCC face`), {
            code: "topology-reference-lost"
        });
        const o = vd(e, i), s = [];
        for (const d of o)for (const c of Zm(e, t.shape, d))s.some((u)=>u === c || Li(u, c)) || s.push(c);
        const a = s.map((d)=>{
            const c = (()=>{
                const u = e, p = new u.TopExp_Explorer_2(t.shape, u.TopAbs_ShapeEnum.TopAbs_FACE, u.TopAbs_ShapeEnum.TopAbs_SHAPE);
                let f = 0;
                try {
                    for(; p.More();){
                        const m = u.TopoDS.Face_1(p.Current());
                        if (Li(m, d)) return f;
                        f++, p.Next();
                    }
                } finally{
                    p.delete?.();
                }
                return -1;
            })();
            return Jm(t, c);
        }).find((d)=>d && d.id !== n.id && d.plane);
        if (!a) throw Object.assign(new Error(`UG Draft face ${r.featureId}:${r.role} has no adjacent planar face`), {
            code: "topology-reference-lost"
        });
        return console.info("[UG Draft] adjacent planar face selected", {
            sourceSelector: r,
            sourceCentroid: n.centroid ?? null,
            sourceNormal: n.normal ?? null,
            faceId: a.id,
            provenance: a.provenance,
            centroid: a.centroid ?? null,
            normal: a.normal ?? null,
            plane: a.plane ?? null
        }), a;
    }
    function Qm(e, t, r) {
        return r.featureId.startsWith("ug:feature:") ? Xm(e, t, r) : Jn(t, r);
    }
    function Ed(e, t) {
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
    function Rn(e, t, r) {
        if (e.kind === "world_plane") return {
            origin: [
                ...e.origin
            ],
            normal: Xt([
                ...e.normal
            ], "Draft plane normal")
        };
        if (e.kind === "datum_plane") {
            const i = r.get(e.featureId);
            if (!i || i.type !== "datum_plane") throw new Error(`Draft Datum Plane ${e.featureId} is missing`);
            const o = Jt(i, r);
            if (!o) throw new Error(`Draft Datum Plane ${e.featureId} is unresolved`);
            return {
                origin: [
                    ...o.origin
                ],
                normal: Xt([
                    ...o.normal
                ], "Draft Datum Plane normal")
            };
        }
        const n = Jn(t, e.selector);
        if (!n.plane) throw new Error(`Draft hinge face ${e.selector.featureId}:${e.selector.role} is not planar`);
        return {
            origin: [
                ...n.plane.origin
            ],
            normal: Xt([
                ...n.plane.normal
            ], "Draft hinge face normal")
        };
    }
    function ey(e, t, r) {
        const n = e.direction;
        let i;
        if (n.kind === "world") i = [
            ...n.direction
        ];
        else if (n.kind === "datum_axis") i = Hi({
            id: e.id,
            name: e.name,
            axisRef: {
                kind: "datum_axis",
                featureId: n.featureId
            }
        }, r).direction;
        else if (n.kind === "plane_normal") i = Rn(n.plane, t, r).normal;
        else {
            const o = Ed(t, n.selector);
            i = [
                o.endVertex[0] - o.startVertex[0],
                o.endVertex[1] - o.startVertex[1],
                o.endVertex[2] - o.startVertex[2]
            ];
        }
        return i = Xt(i, "Draft pull direction"), e.reverseDirection ? i.map((o)=>-o) : i;
    }
    function ty(e, t, r, n) {
        if (e.kind !== "edge_chain") return Rn(e, r, n);
        const i = Ed(r, e.selectors[0]), o = Xt([
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
            normal: Xt(s, "Draft edge-hinge plane")
        };
    }
    function ry(e, t) {
        const r = e.variableAngles;
        if (!r.length) return e.reverseAngle ? -e.angle : e.angle;
        const n = [
            ...r
        ].sort((p, f)=>p.location - f.location), i = n.findIndex((p)=>p.location >= t);
        if (i <= 0) {
            const p = n[Math.max(0, i)];
            return p.reversed ? -p.angle : p.angle;
        }
        if (i < 0) {
            const p = n[n.length - 1];
            return p.reversed ? -p.angle : p.angle;
        }
        const o = n[i - 1], s = n[i], a = s.location - o.location, d = a <= 1e-9 ? 0 : (t - o.location) / a, c = o.reversed ? -o.angle : o.angle, u = s.reversed ? -s.angle : s.angle;
        return c + (u - c) * d;
    }
    function ny(e, t, r, n, i) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>Ae(e)
        };
    }
    function iy(e, t, r, n) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: "revolve",
            topology: r,
            tipMesh: n,
            dispose: ()=>rr(e)
        };
    }
    function we(e, t, r, n, i) {
        return {
            shape: e.Shape(),
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>e.delete?.()
        };
    }
    function dn(e, t) {
        return {
            faces: Br(e).map((r)=>({
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
    function oy(e, t, r, n, i) {
        return i?.priorTopology ? i.priorTopology : {
            faces: [],
            edges: []
        };
    }
    class sy {
        constructor(t = dt){
            this.loadOcc = t;
        }
        loadOcc;
        async execute(t) {
            const r = Ln(t);
            if (r) return {
                response: yi(t, r),
                transfers: []
            };
            if (Date.now() > t.deadlineMs) return {
                response: yi(t, {
                    code: "deadline-exceeded",
                    message: "Body replay deadline exceeded",
                    recoverable: !0,
                    phase: "deadline"
                }),
                transfers: []
            };
            const n = Date.now(), i = new Map, o = new Hm, s = [];
            let a = null, d = null, c = !1;
            const u = t.presentationMode !== "none", p = t.presentationMode !== "mesh" && t.presentationMode !== "none";
            try {
                const f = await this.loadOcc(), m = Wm(t.snapshot.features);
                let y = null;
                for (const g of t.externalOperands ?? []){
                    if (m.has(g.featureId) || i.has(g.featureId)) throw new Error(`External operand feature id ${g.featureId} collides with replay features`);
                    const l = pi.get(g.bodyId);
                    if (!l || l.featureId !== g.featureId) throw new Error(`External Body Tip ${g.bodyId}:${g.featureId} is not cached`);
                    const b = hi(f, l.shape), h = j(f, b);
                    i.set(g.featureId, {
                        shape: b,
                        generatingFeatureId: g.featureId,
                        opKind: "boolean",
                        topology: dn(h, g.featureId),
                        tipMesh: h,
                        dispose: ()=>{}
                    });
                }
                for (const g of t.replayPlan.steps){
                    if (g.status === "inactive") {
                        s.push({
                            featureId: g.featureId,
                            status: "inactive"
                        });
                        continue;
                    }
                    if (c && (g.kind === "extrude" || g.kind === "import" || g.kind === "revolve" || g.kind === "boolean" || g.kind === "fillet" || g.kind === "chamfer" || g.kind === "thickness" || g.kind === "mirror" || g.kind === "loft" || g.kind === "pipe" || g.kind === "face_pull")) {
                        s.push({
                            featureId: g.featureId,
                            status: "skipped"
                        });
                        continue;
                    }
                    const l = m.get(g.featureId);
                    if (!l) {
                        s.push({
                            featureId: g.featureId,
                            status: "failed",
                            error: {
                                code: "missing-feature-parameters",
                                message: `Feature ${g.featureId} missing from snapshot`,
                                featureId: g.featureId,
                                recoverable: !1
                            }
                        }), c = !0;
                        continue;
                    }
                    try {
                        if (g.kind === "import") {
                            if (l.type !== "import") throw new Error(`Import replay step ${g.featureId} has mismatched feature type ${l.type}`);
                            const b = l.sourceBytes;
                            if (!(b instanceof Uint8Array) || b.byteLength === 0) throw new Error(`Import Feature ${l.id} has no BREP/STEP source bytes`);
                            const h = Un(l.sourceLabel, l.sourceFormat ?? "auto"), I = Wn(h, l.sourceLabel);
                            if (h === "brep") {
                                const k = Yn(f, b, I);
                                try {
                                    if (!u) {
                                        i.set(l.id, {
                                            shape: k,
                                            generatingFeatureId: l.id,
                                            opKind: "import",
                                            topology: {
                                                faces: [],
                                                edges: []
                                            },
                                            tipMesh: null,
                                            dispose: ()=>{
                                                k.delete?.();
                                            }
                                        }), y = l.id, d = l.id, s.push({
                                            featureId: l.id,
                                            status: "ok"
                                        });
                                        continue;
                                    }
                                    if (!p) {
                                        i.set(l.id, {
                                            shape: k,
                                            generatingFeatureId: l.id,
                                            opKind: "import",
                                            topology: {
                                                faces: [],
                                                edges: []
                                            },
                                            tipMesh: j(f, k, {
                                                deflection: 2,
                                                correctOutwardOrientation: !1
                                            }),
                                            dispose: ()=>{
                                                k.delete?.();
                                            }
                                        }), y = l.id, d = l.id, s.push({
                                            featureId: l.id,
                                            status: "ok"
                                        });
                                        continue;
                                    }
                                    const w = $n(f, k, {
                                        featureId: l.id,
                                        name: l.sourceLabel ?? l.name
                                    });
                                    i.set(l.id, {
                                        shape: k,
                                        generatingFeatureId: l.id,
                                        opKind: "import",
                                        topology: {
                                            faces: w.faces,
                                            edges: w.edges
                                        },
                                        tipMesh: w.tessellation,
                                        dispose: ()=>{
                                            k.delete?.();
                                        }
                                    }), y = l.id, d = l.id, s.push({
                                        featureId: l.id,
                                        status: "ok"
                                    });
                                    continue;
                                } catch (w) {
                                    throw k.delete?.(), w;
                                }
                            }
                            const S = Zn(f, b, I);
                            try {
                                if (!u) {
                                    i.set(l.id, {
                                        shape: S,
                                        generatingFeatureId: l.id,
                                        opKind: "import",
                                        topology: {
                                            faces: [],
                                            edges: []
                                        },
                                        tipMesh: null,
                                        dispose: ()=>{
                                            S.delete?.();
                                        }
                                    }), y = l.id, d = l.id, s.push({
                                        featureId: l.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (!p) {
                                    i.set(l.id, {
                                        shape: S,
                                        generatingFeatureId: l.id,
                                        opKind: "import",
                                        topology: {
                                            faces: [],
                                            edges: []
                                        },
                                        tipMesh: j(f, S, {
                                            deflection: 2,
                                            correctOutwardOrientation: !1
                                        }),
                                        dispose: ()=>{
                                            S.delete?.();
                                        }
                                    }), y = l.id, d = l.id, s.push({
                                        featureId: l.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                const k = $n(f, S, {
                                    featureId: l.id,
                                    name: l.sourceLabel ?? l.name
                                });
                                i.set(l.id, {
                                    shape: S,
                                    generatingFeatureId: l.id,
                                    opKind: "import",
                                    topology: {
                                        faces: k.faces,
                                        edges: k.edges
                                    },
                                    tipMesh: k.tessellation,
                                    dispose: ()=>{
                                        S.delete?.();
                                    }
                                }), y = l.id, d = l.id, s.push({
                                    featureId: l.id,
                                    status: "ok"
                                });
                                continue;
                            } catch (k) {
                                throw S.delete?.(), k;
                            }
                        }
                        if (g.kind === "sketch" || g.kind === "datum_plane" || g.kind === "datum_axis" || g.kind === "shape_binder") {
                            s.push({
                                featureId: g.featureId,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "draft") {
                            const b = i.get(l.baseFeatureId);
                            if (!b) throw Object.assign(new Error(`Draft base ${l.baseFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            const h = l.draftFaces.map((D)=>Qm(f, b, D)), I = ey(l, b, m), S = l.hinges.map((D)=>ty(D, I, b, m));
                            l.draftFaces.some((D)=>D.featureId.startsWith("ug:feature:")) && console.info("[UG Draft] resolved draft context", {
                                featureId: l.id,
                                draftFaces: h.map((D)=>({
                                        faceId: D.id,
                                        provenance: D.provenance,
                                        centroid: D.centroid ?? null,
                                        normal: D.normal ?? null,
                                        plane: D.plane ?? null
                                    })),
                                direction: I,
                                hingePlanes: S
                            });
                            const k = l.split.kind === "reference" ? Rn(l.split.reference, b, m) : l.split.kind === "hinge" ? S[0] : null, w = h.map((D)=>D.centroid ? D.centroid[0] * I[0] + D.centroid[1] * I[1] + D.centroid[2] * I[2] : 0), F = Math.min(...w), E = Math.max(...w) - F;
                            if (l.variableAngles.length > 1 && E <= 1e-9) throw new Error("Variable Draft requires selected face segments at distinct pull-direction locations");
                            if (k && l.split.kind !== "none" && (l.split.sideMode === "dependent" || l.split.sideMode === "independent")) {
                                const D = h.map((X)=>{
                                    const Q = X.centroid ?? [
                                        0,
                                        0,
                                        0
                                    ];
                                    return (Q[0] - k.origin[0]) * k.normal[0] + (Q[1] - k.origin[1]) * k.normal[1] + (Q[2] - k.origin[2]) * k.normal[2];
                                });
                                if (!D.some((X)=>X < 0) || !D.some((X)=>X >= 0)) throw new Error("Split Draft requires selected face segments on both sides of the split reference");
                            }
                            const C = h.flatMap((D, X)=>{
                                const Q = D.centroid ?? [
                                    0,
                                    0,
                                    0
                                ], Z = k ? (Q[0] - k.origin[0]) * k.normal[0] + (Q[1] - k.origin[1]) * k.normal[1] + (Q[2] - k.origin[2]) * k.normal[2] : 1;
                                if (l.split.kind !== "none") {
                                    if (l.split.sideMode === "first_only" && Z < 0) return [];
                                    if (l.split.sideMode === "second_only" && Z >= 0) return [];
                                }
                                const _e = E <= 1e-9 ? .5 : (w[X] - F) / E;
                                let Ne = ry(l, _e);
                                l.split.kind !== "none" && Z < 0 && (l.split.sideMode === "dependent" ? Ne = -Ne : l.split.sideMode === "independent" && (Ne = l.reverseSecondSideAngle ? -l.secondSideAngle : l.secondSideAngle));
                                const Je = Z < 0 && S.length > 1 ? 1 : 0;
                                return [
                                    {
                                        face: D,
                                        neutralPlane: S[Je],
                                        angle: Ne
                                    }
                                ];
                            }), R = vm(f, b.shape, C, I), O = j(f, R), H = ee({
                                prior: b.topology,
                                resultMesh: O,
                                generatingFeatureId: l.id,
                                opKind: "draft",
                                resultEdgeSamples: K(f, R)
                            });
                            L(H, O), i.set(l.id, {
                                shape: R,
                                generatingFeatureId: l.id,
                                opKind: "draft",
                                topology: H,
                                tipMesh: O,
                                dispose: ()=>{}
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "split" || l.type === "trim") {
                            const b = i.get(l.baseFeatureId);
                            if (!b) throw Object.assign(new Error(`${l.type === "trim" ? "Trim Sheet" : "Split"} base ${l.baseFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            const h = Rn(l.toolRef, b, m), I = Em(f, b.shape, h, l.keepSide);
                            try {
                                const S = j(f, I.shape);
                                if (S.positions.length === 0 || !S.indices?.length) throw new Error(`${l.type === "trim" ? "Trim Sheet" : "Split"} ${l.keepSide} side is empty; move the tool plane through the base solid`);
                                const k = ee({
                                    prior: b.topology,
                                    resultMesh: S,
                                    generatingFeatureId: l.id,
                                    opKind: "boolean",
                                    resultEdgeSamples: K(f, I.shape)
                                });
                                L(k, S), i.set(l.id, {
                                    shape: I.shape,
                                    generatingFeatureId: l.id,
                                    opKind: l.type,
                                    topology: k,
                                    tipMesh: S,
                                    dispose: I.dispose
                                }), y = l.id, d = l.id, s.push({
                                    featureId: l.id,
                                    status: "ok"
                                });
                                continue;
                            } catch (S) {
                                throw I.dispose(), S;
                            }
                        }
                        if (l.type === "face_pull") {
                            const b = i.get(l.baseFeatureId);
                            if (!b) throw Object.assign(new Error(`Face Pull base ${l.baseFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            const h = l.faceSelectors.map((S)=>Jn(b, S));
                            if (h.some((S)=>!S.plane)) throw new Error("Face Pull supports planar faces only");
                            const I = ld(f, b.shape, b.tipMesh, h, l.direction, l.distance, l.operation);
                            try {
                                const S = j(f, I.shape), k = ee({
                                    prior: b.topology,
                                    resultMesh: S,
                                    generatingFeatureId: l.id,
                                    opKind: l.operation === "add" ? "fuse" : "pocket",
                                    resultEdgeSamples: K(f, I.shape)
                                });
                                L(k, S), i.set(l.id, {
                                    shape: I.shape,
                                    generatingFeatureId: l.id,
                                    opKind: "face_pull",
                                    topology: k,
                                    tipMesh: S,
                                    dispose: I.dispose
                                }), y = l.id, d = l.id, s.push({
                                    featureId: l.id,
                                    status: "ok"
                                });
                                continue;
                            } catch (S) {
                                throw I.dispose(), S;
                            }
                        }
                        if (l.type === "multi_transform") {
                            const b = i.get(l.seedFeatureId);
                            if (!b) throw new Error(`MultiTransform seed ${l.seedFeatureId} not found`);
                            let h = b.shape;
                            const I = [];
                            for (const k of l.transforms)if (k.kind === "linear") {
                                const w = [
                                    k.direction[0] * k.spacing * (k.count - 1),
                                    k.direction[1] * k.spacing * (k.count - 1),
                                    k.direction[2] * k.spacing * (k.count - 1)
                                ], F = As(f, h, w);
                                h = F.shape, I.push(F.delete);
                            } else if (k.kind === "polar" && k.axisRef.kind === "world") {
                                const w = Os(f, h, k.axisRef.origin, k.axisRef.direction, k.angleSpan);
                                h = w.shape, I.push(w.delete);
                            } else if (k.kind === "mirror" && k.planeRef.kind === "world") {
                                const w = Ss(f, h, k.planeRef.origin, k.planeRef.normal);
                                h = w.shape, I.push(w.delete);
                            } else throw Object.assign(new Error("MultiTransform datum references require resolved replay support"), {
                                code: "kernel-unavailable"
                            });
                            const S = j(f, h);
                            i.set(l.id, {
                                shape: h,
                                generatingFeatureId: l.id,
                                opKind: "pattern",
                                topology: dn(S, l.id),
                                tipMesh: S,
                                dispose: ()=>I.forEach((k)=>k())
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "box" || l.type === "cylinder" || l.type === "cone" || l.type === "sphere") {
                            const b = ym(f, l), h = g.priorSolidFeatureId ?? y, I = h ? i.get(h) : void 0;
                            let S = b.shape, k = null;
                            if (l.mode === "cut") {
                                if (!I) throw b.dispose(), new Error(`Primitive ${l.type} cut requires a prior solid`);
                                k = Gt(f, I.shape, b.shape, "cut"), S = k.Shape();
                            } else I && (k = Gt(f, I.shape, b.shape, "union"), S = k.Shape());
                            const w = j(f, S), F = dn(w, l.id), v = {
                                faces: F.faces,
                                edges: vn(l.id, F.edges, K(f, S))
                            };
                            i.set(l.id, {
                                shape: S,
                                generatingFeatureId: l.id,
                                opKind: "boolean",
                                topology: v,
                                tipMesh: w,
                                dispose: ()=>{
                                    k?.delete?.(), b.dispose();
                                }
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "boolean") {
                            const b = i.get(l.targetFeatureId), h = i.get(l.toolFeatureId);
                            if (!b) throw Object.assign(new Error(`Boolean target ${l.targetFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            if (!h) throw Object.assign(new Error(`Boolean tool ${l.toolFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            const I = l.op === "union" && m.has(l.targetFeatureId) && m.has(l.toolFeatureId) && Lm(m, l.targetFeatureId, l.toolFeatureId), S = I ? null : Gt(f, b.shape, h.shape, l.op), k = I ? hi(f, h.shape) : S.Shape(), w = j(f, k), F = K(f, k), v = ee({
                                prior: I ? h.topology : b.topology,
                                resultMesh: w,
                                generatingFeatureId: l.id,
                                opKind: "fuse",
                                toolFaceHints: I ? [] : h.topology.faces.map((E)=>({
                                        role: E.provenance.role,
                                        featureId: l.id,
                                        expectedCentroid: E.centroid ?? [
                                            0,
                                            0,
                                            0
                                        ],
                                        expectedNormal: E.normal ?? [
                                            0,
                                            0,
                                            1
                                        ]
                                    })),
                                toolEdgeHints: I ? [] : h.topology.edges.filter((E)=>E.midpoint).map((E)=>({
                                        role: E.provenance.role,
                                        featureId: l.id,
                                        midpoint: E.midpoint,
                                        start: E.startVertex,
                                        end: E.endVertex,
                                        faceRoles: [
                                            "",
                                            ""
                                        ]
                                    })),
                                resultEdgeSamples: F
                            });
                            L(v, w), i.set(l.id, {
                                shape: k,
                                generatingFeatureId: l.id,
                                opKind: "boolean",
                                topology: v,
                                tipMesh: w,
                                dispose: ()=>S?.delete?.()
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "thickness") {
                            const b = i.get(l.baseFeatureId);
                            if (!b) throw Object.assign(new Error(`Thickness base ${l.baseFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            if (l.removedFaceSelectors.length === 0) throw new Error("Thickness requires at least one removed face");
                            const h = l.removedFaceSelectors.map((w)=>{
                                const F = b.topology.faces.find((v)=>v.provenance.featureId === w.featureId && v.provenance.role === w.role);
                                if (!F) throw Object.assign(new Error(`Thickness face ${w.featureId}:${w.role} is lost`), {
                                    code: "topology-reference-lost"
                                });
                                return F;
                            }), I = gm(f, b.shape, h, l.thickness, l.inward), S = j(f, I), k = ee({
                                prior: b.topology,
                                resultMesh: S,
                                generatingFeatureId: l.id,
                                opKind: "thickness",
                                resultEdgeSamples: K(f, I)
                            });
                            L(k, S), i.set(l.id, {
                                shape: I,
                                generatingFeatureId: l.id,
                                opKind: "thickness",
                                topology: k,
                                tipMesh: S,
                                dispose: ()=>{}
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "fillet" || l.type === "chamfer") {
                            const b = i.get(l.baseFeatureId);
                            if (!b) throw Object.assign(new Error(`${l.type} base ${l.baseFeatureId} not found`), {
                                code: "topology-reference-lost"
                            });
                            if (l.edgeSelectors.length === 0) {
                                i.set(l.id, {
                                    shape: b.shape,
                                    generatingFeatureId: l.id,
                                    opKind: l.type,
                                    topology: b.topology,
                                    tipMesh: b.tipMesh,
                                    dispose: ()=>{}
                                }), y = l.id, d = l.id, s.push({
                                    featureId: l.id,
                                    status: "ok"
                                });
                                continue;
                            }
                            const h = K(f, b.shape), I = new Set(h.map((O)=>O.ordinal)), S = [], k = [], w = [];
                            for (const O of l.edgeSelectors){
                                const H = typeof O.occEdgeOrdinal == "number" && Number.isInteger(O.occEdgeOrdinal) ? O.occEdgeOrdinal : void 0;
                                if (H !== void 0) {
                                    if (!I.has(H)) throw Object.assign(new Error(`${l.type} edge ${O.featureId}:${O.role} occEdgeOrdinal=${H} is not on the base solid`), {
                                        code: "topology-reference-lost"
                                    });
                                    S.push(H);
                                    continue;
                                }
                                if (O.samplePoints && O.samplePoints.length >= 2) {
                                    w.push({
                                        role: O.role,
                                        samplePoints: O.samplePoints.map((Z)=>[
                                                ...Z
                                            ])
                                    });
                                    continue;
                                }
                                const D = b.topology.edges.find((Z)=>Z.provenance.featureId === O.featureId && Z.provenance.role === O.role), X = typeof D?.occEdgeOrdinal == "number" && Number.isInteger(D.occEdgeOrdinal) ? D.occEdgeOrdinal : void 0;
                                if (X !== void 0 && I.has(X)) {
                                    S.push(X);
                                    continue;
                                }
                                if (O.role.startsWith("feature_edge_")) throw Object.assign(new Error(`${l.type} edge ${O.featureId}:${O.role} has no occEdgeOrdinal (tessellation role is not OCC edge identity — re-pick after tip refresh)`), {
                                    code: "topology-reference-lost"
                                });
                                const Q = O.hintCentroid ?? D?.midpoint ?? (D ? [
                                    (D.startVertex[0] + D.endVertex[0]) / 2,
                                    (D.startVertex[1] + D.endVertex[1]) / 2,
                                    (D.startVertex[2] + D.endVertex[2]) / 2
                                ] : void 0);
                                if (!Q) throw Object.assign(new Error(`${l.type} edge ${O.featureId}:${O.role} is lost (no occEdgeOrdinal or midpoint)`), {
                                    code: "topology-reference-lost"
                                });
                                k.push({
                                    role: O.role,
                                    midpoint: [
                                        ...Q
                                    ]
                                });
                            }
                            if (w.length > 0) try {
                                S.push(...dm(h, w));
                            } catch (O) {
                                throw Object.assign(new Error(O instanceof Error ? O.message : String(O)), {
                                    code: "topology-reference-lost"
                                });
                            }
                            if (k.length > 0) try {
                                S.push(...cd(h, k));
                            } catch (O) {
                                throw Object.assign(new Error(O instanceof Error ? O.message : String(O)), {
                                    code: "topology-reference-lost"
                                });
                            }
                            const F = [
                                ...new Set(S)
                            ].sort((O, H)=>O - H), v = l.type === "fillet" ? Co(f, b.shape, F, l.radius) : En(f, b.shape, F, l.distance), E = j(f, v), C = K(f, v), R = ee({
                                prior: b.topology,
                                resultMesh: E,
                                generatingFeatureId: l.id,
                                opKind: "fuse",
                                resultEdgeSamples: C
                            });
                            L(R, E), i.set(l.id, {
                                shape: v,
                                generatingFeatureId: l.id,
                                opKind: l.type,
                                topology: R,
                                tipMesh: E,
                                dispose: ()=>{}
                            }), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "extrude") {
                            const b = t.snapshot.profiles[l.sketchId];
                            if (!b) throw new Error(`Missing profile ${l.sketchId}`);
                            const h = wa({
                                depth: l.depth,
                                secondDepth: l.secondDepth ?? 0,
                                symmetric: l.symmetric ?? !1,
                                mode: l.mode,
                                startOffset: l.startOffset,
                                endOffset: l.endOffset
                            });
                            if (l.mode === "add") {
                                const I = ze(f, b, h.span, {
                                    startOffset: h.startOffset
                                }), S = g.priorSolidFeatureId ?? y, k = l.fusePrior === !1 ? void 0 : S ? i.get(S) : void 0;
                                if (k) {
                                    const w = new f.BRepAlgoAPI_Fuse_3(k.shape, I.shape);
                                    try {
                                        if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC additive extrude fuse failed");
                                        const F = w.Shape(), v = j(f, F), E = K(f, F), C = On(b, h.span, l.id, h.startOffset), R = ee({
                                            prior: k.topology,
                                            resultMesh: v,
                                            generatingFeatureId: l.id,
                                            opKind: "fuse",
                                            toolFaceHints: C.faces,
                                            toolEdgeHints: C.edges,
                                            resultEdgeSamples: E
                                        });
                                        L(R, v), i.set(l.id, we(w, l.id, "fuse", R, v));
                                    } catch (F) {
                                        throw w.delete?.(), F;
                                    } finally{
                                        Ae(I);
                                    }
                                } else {
                                    const w = j(f, I.shape), F = K(f, I.shape), v = yd(b, l.depth, l.id, w, F, h.startOffset);
                                    L(v, w), i.set(l.id, ny(I, l.id, "extrude", v, w));
                                }
                            } else {
                                const I = g.priorSolidFeatureId ?? y, S = I ? i.get(I) : void 0;
                                if (!S) throw new Error("Pocket requires a prior solid shape");
                                const k = ze(f, b, h.span, {
                                    startOffset: h.startOffset
                                }), w = new f.BRepAlgoAPI_Cut_3(S.shape, k.shape);
                                try {
                                    if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC pocket cut failed");
                                    const F = w.Shape(), v = j(f, F), E = K(f, F), C = On(b, h.span, l.id, h.startOffset), R = ee({
                                        prior: S.topology,
                                        resultMesh: v,
                                        generatingFeatureId: l.id,
                                        opKind: "pocket",
                                        toolFaceHints: C.faces,
                                        toolEdgeHints: C.edges,
                                        resultEdgeSamples: E
                                    });
                                    L(R, v), i.set(l.id, we(w, l.id, "pocket", R, v));
                                } catch (F) {
                                    throw w.delete?.(), F;
                                } finally{
                                    Ae(k);
                                }
                            }
                            y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "hole") {
                            const b = i.get(l.baseFeatureId) ?? (g.priorSolidFeatureId ? i.get(g.priorSolidFeatureId) : void 0);
                            if (!b) throw new Error(`Hole base ${l.baseFeatureId} not found`);
                            const h = t.snapshot.profiles[l.sketchId];
                            if (!h) throw new Error(`Hole sketch profile ${l.sketchId} not found`);
                            const I = qn(h, l.pointIds), S = Da(h), k = l.depthMode === "through" ? Math.max(l.depth, 1e5) : l.depth;
                            let w = b;
                            for (const [F, v] of I.entries()){
                                const E = I.length === 1 ? l.id : `${l.id}::pt-${F}`, { uAxis: C, vAxis: R } = Um(S), O = {
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
                                    origin: v.origin,
                                    normal: S,
                                    uAxis: C,
                                    vAxis: R
                                }, H = [
                                    {
                                        profile: mi(O, l.diameter / 2),
                                        depth: k
                                    }
                                ];
                                if (l.mode === "counterbore" && l.counterboreDiameter && l.counterboreDepth && H.push({
                                    profile: mi(O, l.counterboreDiameter / 2),
                                    depth: l.counterboreDepth
                                }), l.mode === "countersink" && l.countersinkDiameter && l.countersinkAngleDeg) {
                                    const D = (l.countersinkDiameter - l.diameter) / (2 * Math.tan(l.countersinkAngleDeg * Math.PI / 360));
                                    H.push({
                                        profile: mi(O, l.countersinkDiameter / 2),
                                        depth: D
                                    });
                                }
                                for (const [D, X] of H.entries()){
                                    const Q = F === I.length - 1, Z = D === H.length - 1, _e = Q && Z ? l.id : `${E}::cut-${D}`, Ne = Math.max(1e-4, Math.min(X.depth * 1e-6, .01)), Je = ze(f, X.profile, X.depth + Ne, {
                                        startOffset: -Ne
                                    }), Xe = new f.BRepAlgoAPI_Cut_3(w.shape, Je.shape);
                                    try {
                                        if (Xe.Build(), Xe.IsDone?.() === !1) throw new Error("OCC hole cut failed");
                                        const Et = Xe.Shape(), dr = j(f, Et), z = K(f, Et), J = ee({
                                            prior: w.topology,
                                            resultMesh: dr,
                                            generatingFeatureId: _e,
                                            opKind: "pocket",
                                            resultEdgeSamples: z
                                        });
                                        if (L(J, dr), w = we(Xe, _e, "pocket", J, dr), Z) {
                                            const me = [
                                                l.startChamferEnabled ? {
                                                    side: "start",
                                                    offset: l.startChamferOffset,
                                                    angle: l.startChamferAngleDeg,
                                                    axial: 0,
                                                    radius: l.mode === "counterbore" ? l.counterboreDiameter / 2 : l.mode === "countersink" ? l.countersinkDiameter / 2 : l.diameter / 2
                                                } : null,
                                                l.endChamferEnabled ? {
                                                    side: "end",
                                                    offset: l.endChamferOffset,
                                                    angle: l.endChamferAngleDeg,
                                                    axial: l.depthMode === "through" ? Number.NaN : k,
                                                    radius: l.diameter / 2
                                                } : null
                                            ].filter((ue)=>!!ue);
                                            for (const ue of me){
                                                if (!(ue.offset > 0) || !(ue.angle > 1 && ue.angle < 179)) throw new Error(`Invalid ${ue.side} hole chamfer parameters`);
                                                const At = K(f, w.shape), le = sm(At, v.origin, S, ue.radius, ue.axial);
                                                if (le.length === 0) throw new Error(`Hole ${ue.side} chamfer rim was not resolved`);
                                                const ye = Math.min(ue.angle, 180 - ue.angle), ve = ue.offset / Math.max(1e-6, Math.tan(ye * Math.PI / 180)), $e = En(f, w.shape, le, ve), Ke = j(f, $e), Ot = K(f, $e), Pt = ee({
                                                    prior: w.topology,
                                                    resultMesh: Ke,
                                                    generatingFeatureId: _e,
                                                    opKind: "pocket",
                                                    resultEdgeSamples: Ot
                                                });
                                                L(Pt, Ke), w = {
                                                    shape: $e,
                                                    generatingFeatureId: _e,
                                                    opKind: "chamfer",
                                                    topology: Pt,
                                                    tipMesh: Ke,
                                                    dispose: ()=>$e.delete?.()
                                                };
                                            }
                                        }
                                        Q && Z || i.set(_e, w);
                                    } catch (Et) {
                                        throw Xe.delete?.(), Et;
                                    } finally{
                                        Ae(Je);
                                    }
                                }
                            }
                            i.set(l.id, w), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "linear_pattern") {
                            const b = i.get(l.seedFeatureId);
                            if (!b) throw new Error(`Linear pattern seed ${l.seedFeatureId} not found`);
                            let h = b;
                            for(let I = 1; I < l.count; I++){
                                const S = [
                                    l.direction[0] * l.spacing * I,
                                    l.direction[1] * l.spacing * I,
                                    l.direction[2] * l.spacing * I
                                ], k = As(f, b.shape, S);
                                i.set(`${l.id}::copy-${I}`, {
                                    shape: k.shape,
                                    generatingFeatureId: `${l.id}::copy-${I}`,
                                    opKind: "pattern",
                                    topology: b.topology,
                                    tipMesh: null,
                                    dispose: k.delete
                                });
                                const w = new f.BRepAlgoAPI_Fuse_3(h.shape, k.shape);
                                try {
                                    if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC linear pattern fuse failed");
                                    const F = w.Shape(), v = j(f, F), E = ee({
                                        prior: h.topology,
                                        resultMesh: v,
                                        generatingFeatureId: l.id,
                                        opKind: "fuse",
                                        resultEdgeSamples: K(f, F)
                                    });
                                    L(E, v), h = we(w, l.id, "fuse", E, v), I < l.count - 1 && i.set(`${l.id}::result-${I}`, h);
                                } catch (F) {
                                    throw w.delete?.(), F;
                                }
                            }
                            i.set(l.id, h), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "polar_pattern") {
                            const b = i.get(l.seedFeatureId);
                            if (!b) throw new Error(`Polar pattern seed ${l.seedFeatureId} not found`);
                            const h = Hi({
                                ...l,
                                type: "revolve",
                                sketchId: "",
                                angle: l.angleSpan,
                                mode: "add"
                            }, m);
                            let I = b;
                            for(let S = 1; S < l.count; S++){
                                const k = `${l.id}::copy-${S}`, w = Os(f, b.shape, h.origin, h.direction, l.angleSpan * S / l.count), F = new f.BRepAlgoAPI_Fuse_3(I.shape, w.shape);
                                try {
                                    if (F.Build(), F.IsDone?.() === !1) throw new Error("OCC polar pattern fuse failed");
                                    const v = F.Shape(), E = j(f, v), C = ee({
                                        prior: I.topology,
                                        resultMesh: E,
                                        generatingFeatureId: k,
                                        opKind: "fuse",
                                        resultEdgeSamples: K(f, v)
                                    });
                                    L(C, E), I = we(F, k, "fuse", C, E);
                                } catch (v) {
                                    throw F.delete?.(), v;
                                } finally{
                                    w.delete();
                                }
                            }
                            i.set(l.id, I), y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "mirror") {
                            const b = i.get(l.seedFeatureId);
                            if (!b) throw new Error(`Mirror seed ${l.seedFeatureId} not found`);
                            const h = Gm(l, m), I = Ss(f, b.shape, h.origin, h.normal), S = new f.BRepAlgoAPI_Fuse_3(b.shape, I.shape);
                            try {
                                if (S.Build(), S.IsDone?.() === !1) throw new Error("OCC mirror fuse failed");
                                const k = S.Shape(), w = j(f, k), F = ee({
                                    prior: b.topology,
                                    resultMesh: w,
                                    generatingFeatureId: l.id,
                                    opKind: "mirror",
                                    resultEdgeSamples: K(f, k)
                                });
                                L(F, w), i.set(l.id, we(S, l.id, "mirror", F, w)), y = l.id, d = l.id, s.push({
                                    featureId: l.id,
                                    status: "ok"
                                });
                                continue;
                            } finally{
                                I.delete();
                            }
                        }
                        if (l.type === "loft") {
                            const b = l.sectionSketchIds.map((k)=>{
                                const w = t.snapshot.profiles[k];
                                if (!w) throw new Error(`Missing loft profile ${k}`);
                                return w;
                            }), h = wm(f, b), I = g.priorSolidFeatureId ?? y, S = I ? i.get(I) : void 0;
                            if (l.mode === "cut") {
                                if (!S) throw new Error("Loft cut requires a prior solid");
                                const k = new f.BRepAlgoAPI_Cut_3(S.shape, h);
                                try {
                                    if (k.Build(), k.IsDone?.() === !1) throw new Error("OCC loft cut failed");
                                    const w = k.Shape(), F = j(f, w), v = ee({
                                        prior: S.topology,
                                        resultMesh: F,
                                        generatingFeatureId: l.id,
                                        opKind: "pocket",
                                        resultEdgeSamples: K(f, w)
                                    });
                                    L(v, F), i.set(l.id, we(k, l.id, "pocket", v, F));
                                } catch (w) {
                                    throw k.delete?.(), w;
                                }
                            } else if (S) {
                                const k = new f.BRepAlgoAPI_Fuse_3(S.shape, h);
                                try {
                                    if (k.Build(), k.IsDone?.() === !1) throw new Error("OCC additive loft fuse failed");
                                    const w = k.Shape(), F = j(f, w), v = ee({
                                        prior: S.topology,
                                        resultMesh: F,
                                        generatingFeatureId: l.id,
                                        opKind: "fuse",
                                        resultEdgeSamples: K(f, w)
                                    });
                                    L(v, F), i.set(l.id, we(k, l.id, "fuse", v, F));
                                } catch (w) {
                                    throw k.delete?.(), w;
                                }
                            } else {
                                const k = j(f, h), w = an(b[0], 0, l.id, {
                                    origin: b[0].origin,
                                    direction: b[0].normal
                                }, k, K(f, h));
                                L(w, k), i.set(l.id, {
                                    shape: h,
                                    generatingFeatureId: l.id,
                                    opKind: "loft",
                                    topology: w,
                                    tipMesh: k,
                                    dispose: ()=>{}
                                });
                            }
                            y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "pipe") {
                            const h = (l.sectionSketchIds ?? [
                                l.profileSketchId
                            ]).map((F)=>t.snapshot.profiles[F]), I = t.snapshot.profiles[l.pathSketchId];
                            if (h.some((F)=>!F) || !I) throw new Error(`Missing pipe profile/path for ${l.id}`);
                            const S = xm(f, h, I, l.orientation ?? "frenet"), k = g.priorSolidFeatureId ?? y, w = k ? i.get(k) : void 0;
                            if (l.mode === "cut") {
                                if (!w) throw new Error("Pipe cut requires a prior solid");
                                const F = new f.BRepAlgoAPI_Cut_3(w.shape, S);
                                try {
                                    if (F.Build(), F.IsDone?.() === !1) throw new Error("OCC pipe cut failed");
                                    const v = F.Shape(), E = j(f, v), C = ee({
                                        prior: w.topology,
                                        resultMesh: E,
                                        generatingFeatureId: l.id,
                                        opKind: "pocket",
                                        resultEdgeSamples: K(f, v)
                                    });
                                    L(C, E), i.set(l.id, we(F, l.id, "pocket", C, E));
                                } catch (v) {
                                    throw F.delete?.(), v;
                                }
                            } else if (w) {
                                const F = new f.BRepAlgoAPI_Fuse_3(w.shape, S);
                                try {
                                    if (F.Build(), F.IsDone?.() === !1) throw new Error("OCC additive pipe fuse failed");
                                    const v = F.Shape(), E = j(f, v), C = ee({
                                        prior: w.topology,
                                        resultMesh: E,
                                        generatingFeatureId: l.id,
                                        opKind: "fuse",
                                        resultEdgeSamples: K(f, v)
                                    });
                                    L(C, E), i.set(l.id, we(F, l.id, "fuse", C, E));
                                } catch (v) {
                                    throw F.delete?.(), v;
                                }
                            } else {
                                const F = j(f, S), v = h[0], E = an(v, 0, l.id, {
                                    origin: v.origin,
                                    direction: v.normal
                                }, F, K(f, S));
                                L(E, F), i.set(l.id, {
                                    shape: S,
                                    generatingFeatureId: l.id,
                                    opKind: "pipe",
                                    topology: E,
                                    tipMesh: F,
                                    dispose: ()=>{}
                                });
                            }
                            y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "revolve") {
                            const b = t.snapshot.profiles[l.sketchId];
                            if (!b) throw new Error(`Missing profile ${l.sketchId}`);
                            const h = Hi(l, m);
                            if (l.mode === "add") {
                                const I = Cr(f, b, h.origin, h.direction, l.angle), S = g.priorSolidFeatureId ?? y, k = l.fusePrior === !1 ? void 0 : S ? i.get(S) : void 0;
                                if (k) {
                                    const w = new f.BRepAlgoAPI_Fuse_3(k.shape, I.shape);
                                    try {
                                        if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC additive revolve fuse failed");
                                        const F = w.Shape(), v = j(f, F), E = K(f, F), C = Pn(b, l.angle, l.id, h), R = ee({
                                            prior: k.topology,
                                            resultMesh: v,
                                            generatingFeatureId: l.id,
                                            opKind: "fuse",
                                            toolFaceHints: C.faces,
                                            toolEdgeHints: C.edges,
                                            resultEdgeSamples: E
                                        });
                                        L(R, v), i.set(l.id, we(w, l.id, "fuse", R, v));
                                    } catch (F) {
                                        throw w.delete?.(), F;
                                    } finally{
                                        rr(I);
                                    }
                                } else {
                                    const w = j(f, I.shape), F = K(f, I.shape), v = an(b, l.angle, l.id, h, w, F);
                                    L(v, w), i.set(l.id, iy(I, l.id, v, w));
                                }
                            } else {
                                const I = g.priorSolidFeatureId ?? y, S = I ? i.get(I) : void 0;
                                if (!S) throw new Error("Groove requires a prior solid shape");
                                const k = Cr(f, b, h.origin, h.direction, l.angle), w = new f.BRepAlgoAPI_Cut_3(S.shape, k.shape);
                                try {
                                    if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC groove cut failed");
                                    const F = w.Shape(), v = j(f, F), E = K(f, F), C = Pn(b, l.angle, l.id, h), R = ee({
                                        prior: S.topology,
                                        resultMesh: v,
                                        generatingFeatureId: l.id,
                                        opKind: "groove",
                                        toolFaceHints: C.faces,
                                        toolEdgeHints: C.edges,
                                        resultEdgeSamples: E
                                    });
                                    L(R, v), i.set(l.id, we(w, l.id, "groove", R, v));
                                } catch (F) {
                                    throw w.delete?.(), F;
                                } finally{
                                    rr(k);
                                }
                            }
                            y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "helix") {
                            s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        if (l.type === "thread") {
                            const b = m.get(l.helixFeatureId);
                            if (!b || b.type !== "helix") throw new Error(`Thread Helix ${l.helixFeatureId} not found`);
                            const h = g.priorSolidFeatureId ?? y, I = h ? i.get(h) : void 0;
                            if (!I) throw new Error("Thread requires a prior solid for add/cut replay");
                            const S = l.profileKind === "custom_sketch" && l.profileSketchId ? t.snapshot.profiles[l.profileSketchId] : void 0, k = pd(f, b, l, S);
                            if (l.mode === "cut") {
                                const w = new f.BRepAlgoAPI_Cut_3(I.shape, k);
                                try {
                                    if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC Thread cut failed");
                                    const F = w.Shape(), v = j(f, F), E = ee({
                                        prior: I.topology,
                                        resultMesh: v,
                                        generatingFeatureId: l.id,
                                        opKind: "thread",
                                        resultEdgeSamples: K(f, F)
                                    });
                                    L(E, v), i.set(l.id, we(w, l.id, "thread", E, v));
                                } catch (F) {
                                    throw w.delete?.(), F;
                                }
                            } else {
                                const w = new f.BRepAlgoAPI_Fuse_3(I.shape, k);
                                try {
                                    if (w.Build(), w.IsDone?.() === !1) throw new Error("OCC Thread fuse failed");
                                    const F = w.Shape(), v = j(f, F), E = ee({
                                        prior: I.topology,
                                        resultMesh: v,
                                        generatingFeatureId: l.id,
                                        opKind: "thread",
                                        resultEdgeSamples: K(f, F)
                                    });
                                    L(E, v), i.set(l.id, we(w, l.id, "thread", E, v));
                                } catch (F) {
                                    throw w.delete?.(), F;
                                }
                            }
                            y = l.id, d = l.id, s.push({
                                featureId: l.id,
                                status: "ok"
                            });
                            continue;
                        }
                        s.push({
                            featureId: g.featureId,
                            status: "failed",
                            error: {
                                code: "kernel-operation-failed",
                                message: `Unsupported active step ${g.kind}`,
                                featureId: g.featureId,
                                recoverable: !1
                            }
                        }), c = !0;
                    } catch (b) {
                        const h = Es(b, `OCC ${g.kind} failed for Feature ${g.featureId}`), S = b.code === "topology-reference-lost" ? "topology-reference-lost" : /load|wasm|initial/i.test(h) ? "kernel-init-failed" : /lost|ambiguous|match edge|not found/i.test(h) ? "topology-reference-lost" : "kernel-operation-failed";
                        s.push({
                            featureId: g.featureId,
                            status: "failed",
                            error: {
                                code: S,
                                message: h,
                                featureId: g.featureId,
                                phase: g.kind,
                                recoverable: S === "kernel-init-failed"
                            }
                        }), (g.kind === "extrude" || g.kind === "import" || g.kind === "revolve" || g.kind === "boolean" || g.kind === "fillet" || g.kind === "chamfer" || g.kind === "thickness" || g.kind === "mirror" || g.kind === "loft" || g.kind === "pipe" || g.kind === "face_pull") && (c = !0);
                    }
                }
                let x = {
                    faces: [],
                    edges: []
                };
                if (d) {
                    const g = i.get(d);
                    if (g) {
                        if (u && (a = g.tipMesh ?? j(f, g.shape), p)) {
                            const l = K(f, g.shape);
                            x = {
                                faces: g.topology.faces,
                                edges: vn(g.generatingFeatureId || d, g.topology.edges, l)
                            }, a && L(x, a);
                        }
                        if (t.cacheResult !== !1) {
                            const l = hi(f, g.shape), b = pi.get(t.bodyId);
                            try {
                                b?.shape.delete?.();
                            } catch  {}
                            pi.set(t.bodyId, {
                                featureId: d,
                                shape: l
                            });
                        }
                    }
                }
                const _ = a ? Oe(a) : [];
                return {
                    response: {
                        ok: !0,
                        protocolVersion: Ye,
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        revision: t.revision,
                        result: {
                            featureStates: s,
                            tipMesh: a,
                            faces: x.faces,
                            edges: x.edges,
                            elapsedMs: Date.now() - n,
                            solidExecutionOrder: [
                                ...t.replayPlan.solidExecutionOrder
                            ]
                        },
                        transfers: _
                    },
                    transfers: _
                };
            } catch (f) {
                const m = Es(f, "OCC Body replay failed");
                return {
                    response: yi(t, {
                        code: /load|wasm|initial/i.test(m) ? "kernel-init-failed" : "internal",
                        message: m,
                        recoverable: !1,
                        phase: "execute"
                    }),
                    transfers: []
                };
            } finally{
                for (const f of i.values()){
                    try {
                        f.dispose();
                    } catch  {}
                    o.track(f.shape);
                }
                i.clear(), o.releaseAll();
            }
        }
    }
    class Ad {
        constructor(t = dt, r = new Ua().freeze()){
            this.featureHandlers = r, this.legacyExecutor = new sy(t);
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
    async function Od(e) {
        return new Ad().execute(e);
    }
    class fe extends Error {
        constructor(t, r, n){
            super(t), this.code = r, this.context = n;
        }
        code;
        context;
        name = "OccBridgeError";
    }
    let ay = 0;
    function dy() {
        return `occ-body-${++ay}`;
    }
    class Ui {
        constructor(t = null){
            this.createWorker = t;
        }
        createWorker;
        worker = null;
        pending = new Map;
        disposed = !1;
        consecutiveFailures = 0;
        get usesWorker() {
            return this.createWorker !== null;
        }
        async replayBody(t, r = {}) {
            if (this.disposed) throw new fe("OCC body worker client disposed", "cancelled");
            const n = Ln(t);
            return n ? {
                ok: !1,
                protocolVersion: Ye,
                requestId: t.requestId,
                bodyId: t.bodyId,
                revision: t.revision,
                error: n
            } : (this.cancelBodyBeforeRevision(t.bodyId, t.revision), this.createWorker ? this.replayViaWorker(t, r) : this.replayInProcess(t, r));
        }
        cancelBodyBeforeRevision(t, r) {
            let n = 0;
            for (const [i, o] of [
                ...this.pending
            ])o.request.bodyId === t && o.request.revision < r && this.settleCancel(i, o) && n++;
            return n;
        }
        cancelRequest(t) {
            const r = this.pending.get(t);
            return r ? this.settleCancel(t, r) : !1;
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
            ])r.settled || (r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), r.reject(new fe("OCC body worker restarted", "worker", {
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                featureId: "body-replay",
                revision: r.request.revision,
                operation: "body-replay"
            })));
            this.worker?.terminate(), this.worker = null, this.consecutiveFailures = 0;
        }
        settleCancel(t, r) {
            return r.settled ? !1 : (r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), this.worker && this.worker.postMessage({
                type: "cancel-body-replay",
                protocolVersion: Ye,
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                revision: r.request.revision
            }), r.reject(new fe("OCC body replay cancelled", "cancelled", {
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                featureId: "body-replay",
                revision: r.request.revision,
                operation: "body-replay"
            })), !0);
        }
        async replayInProcess(t, r) {
            if (r.signal?.aborted) throw new fe("OCC body replay cancelled", "cancelled", {
                requestId: t.requestId,
                bodyId: t.bodyId,
                featureId: "body-replay",
                revision: t.revision,
                operation: "body-replay"
            });
            const n = r.timeoutMs ?? Math.max(1, t.deadlineMs - Date.now());
            let i;
            const o = new Promise((s, a)=>{
                i = setTimeout(()=>{
                    a(new fe(`OCC body replay deadline exceeded after ${n}ms`, "deadline-exceeded", {
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        featureId: "body-replay",
                        revision: t.revision,
                        operation: "body-replay"
                    }));
                }, n);
            });
            try {
                const { response: s } = await Promise.race([
                    Od(t),
                    o
                ]);
                return s;
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
                    settled: !1
                }, d = (u, p)=>{
                    a.settled || (a.settled = !0, a.timeoutId && clearTimeout(a.timeoutId), this.pending.delete(t.requestId), p && n.postMessage({
                        type: "cancel-body-replay",
                        protocolVersion: Ye,
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        revision: t.revision
                    }), this.consecutiveFailures += 1, (u.code === "deadline-exceeded" || this.consecutiveFailures >= 2) && this.recreateWorker(), s(u));
                }, c = {
                    requestId: t.requestId,
                    bodyId: t.bodyId,
                    featureId: "body-replay",
                    revision: t.revision,
                    operation: "body-replay"
                };
                if (r.signal?.aborted) {
                    d(new fe("OCC body replay cancelled", "cancelled", c), !1);
                    return;
                }
                r.signal?.addEventListener("abort", ()=>{
                    d(new fe("OCC body replay cancelled", "cancelled", c), !0);
                }, {
                    once: !0
                }), a.timeoutId = setTimeout(()=>{
                    d(new fe(`OCC body replay deadline exceeded after ${i}ms`, "deadline-exceeded", c), !0);
                }, i), this.pending.set(t.requestId, a), n.postMessage(t);
            });
        }
        ensureWorker() {
            if (this.worker) return this.worker;
            if (!this.createWorker) throw new fe("OCC body worker factory missing", "worker");
            const t = this.createWorker();
            return t.onmessage = (r)=>{
                const n = r.data;
                if (Za(n)) return;
                const i = this.pending.get(n.requestId);
                if (!i || i.settled) return;
                const o = Ya(i.request, n);
                if (o) {
                    i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), this.consecutiveFailures += 1, this.consecutiveFailures >= 2 && this.recreateWorker(), i.reject(new fe(o.message, "protocol-invalid", {
                        requestId: i.request.requestId,
                        bodyId: i.request.bodyId,
                        featureId: "body-replay",
                        revision: i.request.revision,
                        operation: "body-replay"
                    }));
                    return;
                }
                i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), this.consecutiveFailures = 0, i.resolve(n);
            }, t.onerror = (r)=>{
                for (const [n, i] of [
                    ...this.pending
                ])i.settled || (i.settled = !0, i.timeoutId && clearTimeout(i.timeoutId), this.pending.delete(n), i.reject(new fe(r.message ?? "OCC body worker error", "worker", {
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
    let st = null;
    function cy(e) {
        return e !== void 0 ? (st?.dispose(), st = new Ui(e), st) : (st || (st = new Ui(null)), st);
    }
    function uy() {
        st?.dispose(), st = null;
    }
    function Do(e, t, r) {
        const n = ct(e, t), i = Oo(e, n.face, r, t.normal), o = j(e, i.shape);
        n.faceMaker.delete?.(), n.wireBuilder.delete?.();
        for (const s of n.innerWireBuilders)s.delete?.();
        return Ae(i), o;
    }
    const ly = Do;
    function Pd(e, t, r, n, i, o, s) {
        const a = ze(e, t, r), d = Cr(e, n, i, o, s), c = new e.BRepAlgoAPI_Cut_3(a.shape, d.shape);
        try {
            if (c.Build(), c.IsDone?.() === !1) throw new Error("OCC Groove cut failed");
            return j(e, c.Shape());
        } finally{
            c.delete?.(), rr(d), Ae(a);
        }
    }
    async function fy(e, t, r, n, i, o, s) {
        const a = Pd(await dt(), e, t, r, n, i, o);
        return {
            mesh: a,
            transfers: Oe(a)
        };
    }
    var py = {};
    function nr(e, t, r) {
        const o = new no().extrude(e, t, r, "HeadlessSpike").tessellation;
        return {
            mesh: o,
            transfers: Oe(o)
        };
    }
    function To(e, t, r, n, i) {
        const a = new no().revolve(e, t, r, n, i, "HeadlessRevolve").tessellation;
        return {
            mesh: a,
            transfers: Oe(a)
        };
    }
    function ir() {
        return typeof process > "u" ? !1 : py.OCC_BRIDGE_HEADLESS_SPIKE === "1";
    }
    const hy = nr, my = To;
    function Xr(e, t) {
        return {
            protocolVersion: ar,
            requestId: e.requestId ?? "invalid",
            bodyId: e.bodyId ?? "unknown",
            featureId: e.featureId ?? "unknown",
            revision: e.revision ?? 0,
            operation: e.operation ?? "ping",
            ok: !1,
            error: t
        };
    }
    async function Bo(e) {
        const t = Fo(e);
        if (t) return {
            response: Xr(e, t),
            transfers: []
        };
        if (Date.now() > e.deadlineMs) return {
            response: Xr(e, {
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
                if (ir()) ({ mesh: r, transfers: n } = To(o.profile, o.axisOrigin, o.axisDirection, o.angle, e.featureId));
                else {
                    const { revolveProfileWithOcc: s } = await Gi(async ()=>{
                        const { revolveProfileWithOcc: a } = await Promise.resolve().then(()=>om);
                        return {
                            revolveProfileWithOcc: a
                        };
                    }, []);
                    r = s(await dt(), o.profile, o.axisOrigin, o.axisDirection, o.angle), n = Oe(r);
                }
            } else {
                const o = e.payload;
                if (!(o.depth > 0) || o.profile.loops.length === 0) return {
                    response: Xr(e, {
                        code: "invalid-profile",
                        message: "Invalid extrude profile/depth",
                        operation: e.operation,
                        recoverable: !0
                    }),
                    transfers: []
                };
                ir() ? { mesh: r, transfers: n } = nr(o.profile, o.depth, e.featureId) : (r = Do(await dt(), o.profile, o.depth), n = Oe(r));
            }
            return {
                response: {
                    protocolVersion: ar,
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
                response: Xr(e, {
                    code: i,
                    message: n,
                    operation: e.operation,
                    recoverable: !0
                }),
                transfers: []
            };
        }
    }
    async function $d(e, t, r) {
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
        }, { response: i } = await Bo(n);
        if (i.ok === !1) throw new Error(i.error.message);
        if (i.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: i.result.mesh,
            transfers: i.transfers
        };
    }
    const yy = $d;
    function jo(e, t, r, n) {
        if (n.length === 0) throw new Error("pocketProfilesWithOcc requires at least one cut");
        const i = ze(e, t, r), o = [], s = [];
        try {
            let a = i.shape, d = null;
            for (const c of n){
                const u = ze(e, c.profile, c.depth, {
                    inward: !0
                });
                o.push(u);
                const p = new e.BRepAlgoAPI_Cut_3(a, u.shape);
                if (s.push(p), p.Build(), p.IsDone?.() === !1) throw new Error("OCC BRepAlgoAPI_Cut failed");
                d = p.Shape(), a = d;
            }
            return j(e, d);
        } finally{
            for (const a of s)a.delete?.();
            for (const a of o)Ae(a);
            Ae(i);
        }
    }
    function gy(e, t, r, n, i) {
        return jo(e, t, r, [
            {
                profile: n,
                depth: i
            }
        ]);
    }
    function Rd(e, t, r, n) {
        nr(t, r, n);
        const i = e.positions.slice(0, Math.max(9, Math.floor(e.positions.length * .85))), o = {
            ...e,
            positions: i,
            subMeshes: e.subMeshes.map((s)=>({
                    ...s
                }))
        };
        return {
            mesh: o,
            transfers: Oe(o)
        };
    }
    function Wi(e, t, r) {
        let n = e;
        for(let i = 0; i < t.length; i++){
            const o = t[i];
            n = Rd(n, o.profile, o.depth, `${r}-cut-${i}`).mesh;
        }
        return {
            mesh: n,
            transfers: Oe(n)
        };
    }
    async function Cd(e, t, r, n) {
        if (r.length === 0) throw new Error("pocketProfilesHeadless requires at least one cut");
        if (ir()) {
            const i = nr(e, t, `${n}-base`);
            return Wi(i.mesh, r, n);
        }
        try {
            const i = await dt(), o = jo(i, e, t, r);
            return {
                mesh: o,
                transfers: Oe(o)
            };
        } catch (i) {
            console.warn("[occ-bridge] OCC pocket failed; using MeshBRepBackend fallback", i);
            const o = nr(e, t, `${n}-base`), s = Wi(o.mesh, r, n), a = i instanceof Error ? i.message : String(i);
            return {
                ...s,
                fallbackWarning: `OCC kernel failed (${a}); MeshBRep fallback used`
            };
        }
    }
    async function Iy(e, t, r, n, i) {
        return Cd(e, t, [
            {
                profile: r,
                depth: n
            }
        ], i);
    }
    async function by(e, t, r, n) {
        if (ir()) return Rd(e, t, r, n);
        throw new Error("pocketRectangleHeadless requires pad profile — use pocketProfileHeadless(baseProfile, baseDepth, …)");
    }
    async function Md(e, t, r, n, i) {
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
        }, { response: s } = await Bo(o);
        if (s.ok === !1) throw new Error(s.error.message);
        if (s.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: s.result.mesh,
            transfers: s.transfers
        };
    }
    const wy = Md;
    function Dd(e, t, r, n) {
        const s = new no().boolean(e, t, r, n, `Boolean${r}`).tessellation;
        return {
            mesh: s,
            transfers: Oe(s)
        };
    }
    async function ky(e, t, r, n) {
        if (ir()) return Dd(e, t, r, n);
        throw new Error("OCC boolean on MeshBRep solids is not supported; use OccBodyReplayExecutor / protocol v2");
    }
    class Re extends Error {
        constructor(t){
            super(t), this.name = "UgFeatureSnapshotParseError";
        }
    }
    function ce(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function oe(e) {
        return typeof e == "string" ? e : null;
    }
    function zo(e) {
        return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function pe(e) {
        return !Array.isArray(e) || e.length !== 3 || e.some((t)=>typeof t != "number" || !Number.isFinite(t)) ? null : [
            e[0],
            e[1],
            e[2]
        ];
    }
    function De(e) {
        if (typeof e == "number") return Number.isFinite(e) ? e : null;
        if (typeof e == "string" && e.trim() !== "") {
            const t = Number(e);
            return Number.isFinite(t) ? t : null;
        }
        return null;
    }
    function xy(e) {
        const t = ce(e) ? e : {}, r = ce(t.limits) ? t.limits : {}, n = ce(r.start) ? r.start : {}, i = ce(r.end) ? r.end : {}, o = Array.isArray(t.owned_exprs) ? t.owned_exprs.filter(ce) : [], s = (...c)=>{
            for (const u of c){
                const p = De(t[u]);
                if (p !== null) return p;
                const f = o.find((y)=>{
                    const x = oe(y.desc)?.toLowerCase() ?? "", _ = oe(y.expr_name)?.toLowerCase() ?? "";
                    return x.includes(u.toLowerCase()) || _ === u.toLowerCase();
                }), m = f ? De(f.value) : null;
                if (m !== null) return m;
            }
            return null;
        }, a = cn(t.section_ids, "parameters.section_ids"), d = ce(t) && Array.isArray(t.section_data) ? t.section_data.flatMap((c)=>!ce(c) || !Array.isArray(c.rules) ? [] : c.rules.flatMap((u)=>!ce(u) || !Array.isArray(u.curves) ? [] : u.curves.flatMap((p)=>!ce(p) || !Number.isInteger(p.owner_feature_id) ? [] : [
                        p.owner_feature_id
                    ]))) : [];
        return {
            sectionIds: [
                ...new Set([
                    ...a,
                    ...d
                ])
            ],
            targetFeatureIds: cn(t.target_feature_ids, "parameters.target_feature_ids"),
            toolFeatureIds: cn(t.tool_feature_ids, "parameters.tool_feature_ids"),
            booleanOp: oe(t.boolean_op),
            direction: pe(t.direction),
            axisDirection: pe(t.axis_dir),
            startAngleDegrees: De(t.start_angle_deg),
            endAngleDegrees: De(t.end_angle_deg),
            startLimitValue: De(n.value),
            endLimitValue: De(i.value),
            symmetric: r.symmetric === !0,
            origin: pe(t.origin),
            axisOrigin: pe(t.axis_origin),
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
    function Sy(e) {
        const t = ce(e) ? e : {}, r = ce(t.local_plane_snapshot) ? t.local_plane_snapshot : {}, n = pe(r.plane_origin) ?? pe(t.origin), i = pe(r.plane_normal) ?? pe(t.normal) ?? pe(t.z_axis), o = pe(r.plane_x_axis) ?? pe(t.x_axis), s = pe(r.plane_y_axis) ?? pe(t.y_axis);
        return !n || !i || !o || !s ? null : {
            origin: n,
            normal: i,
            xAxis: o,
            yAxis: s
        };
    }
    function gr(e, t, r = !1) {
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
    function gi(e, t) {
        if (!Array.isArray(e) || e.length < 9) return t;
        const r = e.slice(0, 9).map((n)=>Number(n));
        return r.some((n)=>!Number.isFinite(n)) ? t : [
            r[0] * t[0] + r[3] * t[1] + r[6] * t[2],
            r[1] * t[0] + r[4] * t[1] + r[7] * t[2],
            r[2] * t[0] + r[5] * t[1] + r[8] * t[2]
        ];
    }
    function Fy(e) {
        if (!Array.isArray(e) || e.length < 9) return 1;
        const t = e.slice(0, 9).map((r)=>Number(r));
        return t.some((r)=>!Number.isFinite(r)) ? 1 : t[0] * t[4] - t[1] * t[3];
    }
    function _y(e, t) {
        if (!ce(e) || !Array.isArray(e.curves)) return [];
        const r = e.curves.some((i)=>ce(i) && oe(i.type)?.toUpperCase() === "ARC" && Array.isArray(i.matrix)), n = [];
        for(let i = 0; i < e.curves.length; i += 1){
            const o = e.curves[i];
            if (!ce(o)) continue;
            const s = oe(o.type)?.toUpperCase(), d = `ug:curve:${zo(o.nx_tag) ?? i}`;
            if (s === "POINT") {
                const c = pe(o.point);
                c && n.push({
                    kind: "point",
                    id: d,
                    point: c,
                    point2d: gr(c, t, r)
                });
                continue;
            }
            if (s === "LINE") {
                if (o.is_reference === !0) continue;
                const c = pe(o.start), u = pe(o.end);
                c && u && n.push({
                    kind: "line",
                    id: d,
                    start: c,
                    end: u,
                    start2d: gr(c, t, r),
                    end2d: gr(u, t, r)
                });
                continue;
            }
            if (s === "CIRCLE") {
                if (o.is_reference === !0) continue;
                const c = pe(o.center), u = De(o.radius);
                c && u !== null && u > 0 && n.push({
                    kind: "circle",
                    id: d,
                    center: c,
                    center2d: gr(c, t, r),
                    radius: u
                });
                continue;
            }
            if (s === "ARC") {
                if (o.is_reference === !0) continue;
                const c = pe(o.center), u = De(o.radius), p = De(o.start_angle_rad), f = De(o.end_angle_rad);
                if (c && u !== null && u > 0 && p !== null && f !== null) {
                    const m = gi(o.matrix, c), y = gi(o.matrix, [
                        Math.cos(p) * u,
                        Math.sin(p) * u,
                        0
                    ]), x = gi(o.matrix, [
                        Math.cos(f) * u,
                        Math.sin(f) * u,
                        0
                    ]), _ = Fy(o.matrix) < 0, g = _ ? x : y, l = _ ? y : x, b = gr(m, t, r);
                    let h = Math.atan2(g[1], g[0]);
                    h < 0 && (h += Math.PI * 2);
                    let I = f - p;
                    for(; I <= 0;)I += Math.PI * 2;
                    const S = [
                        b[0] + g[0],
                        b[1] + g[1]
                    ], k = [
                        b[0] + l[0],
                        b[1] + l[1]
                    ];
                    n.push({
                        kind: "arc",
                        id: d,
                        center: m,
                        sourceCenter: c,
                        center2d: b,
                        start2d: S,
                        end2d: k,
                        radius: u,
                        startAngle: h,
                        endAngle: h + I,
                        sourceStartAngle: p,
                        sourceEndAngle: f,
                        clockwise: !1
                    });
                }
            }
        }
        return n;
    }
    function cn(e, t, r) {
        if (e === void 0) return [];
        if (!Array.isArray(e) || e.some((n)=>!Number.isInteger(n))) {
            const n = r === void 0 ? "" : ` for feature ${r}`;
            throw new Re(`${t} must be an integer array${n}`);
        }
        return e;
    }
    function vy(e) {
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
            default:
                return {
                    normalizedType: "unknown",
                    kind: "unknown"
                };
        }
    }
    function Ey(e, t) {
        if (!ce(e)) throw new Re(`references must contain objects for feature ${t}`);
        const r = zo(e.owner_feature_id);
        return {
            ownerFeatureId: r !== null && Number.isInteger(r) ? r : null,
            kind: oe(e.kind) ?? "",
            role: oe(e.role) ?? "",
            resultRole: oe(e.result_role) ?? "",
            semantic: oe(e.semantic) ?? "",
            confidence: oe(e.confidence) ?? "",
            required: e.required === !0,
            localId: oe(e.local_id) ?? "",
            source: oe(e.source) ?? "",
            topologyName: oe(e.topology_name) ?? ""
        };
    }
    function Ay(e) {
        const t = ce(e.meta) ? e.meta : {};
        return {
            schemaVersion: oe(e.schema_version),
            exportTool: oe(e.export_tool),
            partName: oe(t.part_name),
            sourceFile: oe(t.source_file),
            nxVersion: oe(t.nx_version),
            unit: oe(t.unit)
        };
    }
    function Vo(e) {
        if (!ce(e)) throw new Re("UG snapshot must be a JSON object");
        if (e.export_tool !== void 0 && e.export_tool !== "NGFeatureList/1.0") throw new Re(`unsupported UG export tool: ${String(e.export_tool)}`);
        if (!Array.isArray(e.features)) throw new Re("UG snapshot is missing a features array");
        const t = new Set, n = e.features.map((d, c)=>{
            if (!ce(d)) throw new Re(`features[${c}] must be an object`);
            const u = d.id;
            if (!Number.isInteger(u)) throw new Re(`features[${c}].id must be an integer`);
            if (t.has(u)) throw new Re(`duplicate UG feature id: ${String(u)}`);
            t.add(u);
            const p = oe(d.type);
            if (!p) throw new Re(`feature ${String(u)} is missing type`);
            const f = vy(p), m = p.toUpperCase() === "SKETCH" || p.toUpperCase() === "DATUM_CSYS" ? Sy(d.parameters) : null;
            return {
                id: u,
                nxTag: zo(d._nx_tag_debug),
                name: oe(d.name) ?? `${p}(${String(u)})`,
                sourceType: p,
                ...f,
                suppressed: d.suppressed === !0,
                parentIds: cn(d.parent_ids, "parent_ids", u),
                references: Array.isArray(d.references) ? d.references.map((y)=>Ey(y, u)) : [],
                parameterSummary: xy(d.parameters),
                parameters: ce(d.parameters) ? structuredClone(d.parameters) : {},
                sketchPlaneFrame: m,
                sketchCurves: p.toUpperCase() === "SKETCH" ? _y(d.parameters, m) : [],
                seriesIndex: c
            };
        }), i = new Set(n.map((d)=>d.id)), o = [
            ...new Set(n.flatMap((d)=>d.parentIds.filter((c)=>!i.has(c))))
        ].sort((d, c)=>d - c), s = [
            ...new Set(n.filter((d)=>d.normalizedType === "unknown").map((d)=>d.sourceType))
        ].sort(), a = [];
        return s.length > 0 && a.push(`unknown UG feature types: ${s.join(", ")}`), o.length > 0 && a.push(`missing parent feature ids: ${o.join(", ")}`), {
            source: Ay(e),
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
    function Td(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (r) {
            throw new Re(`UG snapshot JSON parse failed: ${r instanceof Error ? r.message : String(r)}`);
        }
        return Vo(t);
    }
    class Bd {
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
            return r ? structuredClone(r) : new yt(t.sketchId, `UG sketch profile not found: ${t.sketchId}`);
        }
    }
    const Oy = "ug:feature:";
    function U(e) {
        return `${Oy}${e}`;
    }
    function Py(e, t) {
        return e.parentIds.map((r)=>t.get(r) ?? U(r));
    }
    function No(e) {
        return e.required && e.confidence.toLowerCase() === "exact";
    }
    function $y(e) {
        const t = e.trim().toLowerCase();
        return t === "" || t === "sketch.support" || t === "support";
    }
    function Ps(e) {
        if (!No(e) || e.ownerFeatureId === null) return null;
        const t = e.kind.toLowerCase(), r = e.resultRole.trim(), n = e.topologyName.trim() || r || e.role.trim();
        return !t.includes("face") && !r.toLowerCase().includes("face") && !e.topologyName.trim() || $y(n) ? null : {
            featureId: U(e.ownerFeatureId),
            role: n
        };
    }
    function Ry(e) {
        return e.references.flatMap((t)=>{
            if (!No(t) || t.ownerFeatureId === null) return [];
            if (!`${t.kind} ${t.resultRole} ${t.role} ${t.topologyName}`.toLowerCase().includes("edge")) return [];
            const n = t.topologyName.trim() || t.resultRole.trim() || t.role.trim();
            return n ? [
                {
                    featureId: U(t.ownerFeatureId),
                    role: n
                }
            ] : [];
        });
    }
    function Cy(e) {
        const t = he(e.parameters), r = Array.isArray(t?.chainsets) ? t.chainsets : [], n = [];
        for (const i of r){
            const o = he(i)?.edges;
            if (Array.isArray(o)) for (const s of o){
                const a = he(s), d = a?.owner_feature_id, c = typeof a?.topology_name == "string" ? a.topology_name : "", u = Array.isArray(a?.midpoint) ? a.midpoint : null;
                if (!Number.isInteger(d) || !c) continue;
                const p = u && u.length === 3 && u.every((y)=>typeof y == "number" && Number.isFinite(y)) ? u : void 0, f = Array.isArray(a?.sample_points) ? a.sample_points : [], m = f.length >= 2 && f.every((y)=>Array.isArray(y) && y.length === 3 && y.every((x)=>typeof x == "number" && Number.isFinite(x))) ? f.map((y)=>[
                        ...y
                    ]) : void 0;
                n.push({
                    featureId: U(d),
                    role: c,
                    ...m ? {
                        samplePoints: m
                    } : p ? {
                        hintCentroid: p
                    } : {}
                });
            }
        }
        return n;
    }
    function My(e) {
        const t = e.parameters.input_edges;
        return Array.isArray(t) ? t.flatMap((r, n)=>{
            const i = he(r), o = Array.isArray(i?.midpoint) ? i.midpoint : null, s = o && o.length === 3 && o.every((c)=>typeof c == "number" && Number.isFinite(c)) ? o : void 0, a = Array.isArray(i?.sample_points) ? i.sample_points : [], d = a.length >= 2 && a.every((c)=>Array.isArray(c) && c.length === 3 && c.every((u)=>typeof u == "number" && Number.isFinite(u))) ? a.map((c)=>[
                    ...c
                ]) : void 0;
            return [
                {
                    featureId: U(jd(e) ?? e.parentIds.at(-1) ?? e.id),
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
    function jd(e) {
        const t = e.parameterSummary.targetFeatureIds[0];
        if (t !== void 0) return t;
        const n = he(e.parameters)?.target_body_feature_id;
        return typeof n == "number" && Number.isInteger(n) ? n : e.parentIds.at(-1);
    }
    function $s(e) {
        const t = e.parameters.curves;
        return Array.isArray(t) && t.some((r)=>{
            const n = he(r);
            return n?.type === "POINT" && n.is_reference !== !0 && Array.isArray(n.point);
        });
    }
    function zd(e, t, r) {
        const n = e.parentIds.map((o)=>t.get(o)).find((o)=>o?.normalizedType === "sketch" && $s(o));
        if (n) return r.get(n.id) ?? U(n.id);
        const i = [
            ...t.values()
        ].filter((o)=>o.seriesIndex < e.seriesIndex).filter((o)=>o.normalizedType === "sketch" && $s(o)).sort((o, s)=>s.seriesIndex - o.seriesIndex)[0];
        return i ? r.get(i.id) ?? U(i.id) : null;
    }
    function Dy(e, t, r) {
        const n = e.parameterSummary.targetFeatureIds[0];
        if (n !== void 0) return r.get(n) ?? U(n);
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
        return i ? r.get(i.id) ?? U(i.id) : null;
    }
    function Ty(e, t, r) {
        const n = e.parentIds.map((p)=>t.get(p)).find((p)=>p?.normalizedType === "hole"), i = zd(n ?? e, t, r);
        if (!i) return null;
        const o = [
            ...t.values()
        ].find((p)=>(r.get(p.id) ?? U(p.id)) === i)?.id, s = o === void 0 ? void 0 : t.get(o);
        if (!s) return null;
        const a = s.sketchCurves.find((p)=>p.kind === "point"), d = s.sketchPlaneFrame, c = a?.point ?? d?.origin, u = d?.normal;
        return !c || !u || Math.hypot(...u) <= 1e-9 ? null : {
            origin: [
                ...c
            ],
            normal: [
                ...u
            ],
            sketchId: i
        };
    }
    function Vd(e, t, r) {
        const n = Ty(e, r, t), i = e.parameterSummary.majorDiameterValue ?? null, o = e.parameterSummary.minorDiameterValue ?? null, s = e.parameterSummary.pitchValue ?? null, a = e.parameterSummary.lengthValue ?? null;
        if (!n || i === null || o === null || s === null || a === null) return null;
        const d = i / 2, c = (i - o) / 2;
        if (!(d > 0) || !(s > 0) || !(a > 0) || !(c > 0)) return null;
        const u = `${U(e.id)}:derived-helix`, p = e.parentIds.at(-1) === void 0 ? null : U(e.parentIds.at(-1));
        if (!p) return null;
        try {
            const f = zn({
                id: u,
                name: `${e.name} Helix`,
                dependencyIds: [
                    p,
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
            }), m = mo({
                id: U(e.id),
                name: e.name,
                dependencyIds: [
                    p,
                    u
                ],
                helixFeatureId: u,
                mode: "cut",
                profileKind: "metric_triangle",
                profileSketchId: null,
                majorRadius: d,
                pitch: s,
                depth: c,
                suppressed: e.suppressed
            });
            return {
                helix: f,
                thread: m
            };
        } catch  {
            return null;
        }
    }
    function Ht(e, ...t) {
        const r = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const n of r){
            const i = he(n), o = typeof i?.desc == "string" ? i.desc.toLowerCase() : "";
            if (t.some((s)=>o.includes(s.toLowerCase())) && typeof i?.value == "number" && Number.isFinite(i.value)) return i.value;
        }
        return null;
    }
    function By(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (typeof e != "string") return null;
        const t = e.match(/(?:=|^)(-?\d+(?:\.\d+)?)/);
        return t ? Number(t[1]) : null;
    }
    function jy(e) {
        const t = he(e.parameters), r = t?.origin, n = t?.normal;
        if (!Array.isArray(r) || !Array.isArray(n) || r.length !== 3 || n.length !== 3 || [
            ...r,
            ...n
        ].some((c)=>typeof c != "number" || !Number.isFinite(c))) return null;
        const i = It(n) ?? [
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
        ], s = It([
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
    function zy(e, t, r) {
        const n = e.parentIds.map((c)=>t.get(c)).find((c)=>c?.normalizedType === "helix");
        if (!n) return null;
        const i = Ht(e, "percentage", "path percentage"), o = Ht(e, "arclength", "arc length"), s = n.parameterSummary.heightValue ?? (n.parameterSummary.pitchValue !== null && n.parameterSummary.turnsValue !== null ? n.parameterSummary.pitchValue * n.parameterSummary.turnsValue : null), a = i ?? (o !== null && s && s > 0 ? o / s : 0), d = Math.max(0, Math.min(1, a > 1 ? a / 100 : a));
        return {
            pathFeatureId: r.get(n.id) ?? U(n.id),
            pathParameter: d
        };
    }
    function Nd(e) {
        const t = e.references.find((n)=>No(n) && n.role.toLowerCase() === "sketch.support");
        if (t?.ownerFeatureId !== null && t?.ownerFeatureId !== void 0) {
            if (t.kind.toLowerCase().includes("datum")) return {
                mode: "associative",
                reference: {
                    kind: "datum",
                    datumFeatureId: U(t.ownerFeatureId)
                }
            };
            const n = Ps(t);
            if (n) return {
                mode: "associative",
                reference: {
                    kind: "face",
                    faceSelector: n
                }
            };
        }
        const r = e.references.map(Ps).find((n)=>n !== null);
        return r ? {
            mode: "associative",
            reference: {
                kind: "face",
                faceSelector: r
            }
        } : {
            mode: "fixed"
        };
    }
    function Vy(e) {
        const t = Nd(e);
        if (t.mode !== "associative") return [];
        const r = t.reference;
        return r.kind === "datum" ? [
            r.datumFeatureId
        ] : r.kind === "face" ? [
            r.faceSelector.featureId
        ] : [];
    }
    function Ny(e, t) {
        const r = e.sketchPlaneFrame;
        if (r) return _t({
            id: `${U(e.id)}::placement-plane`,
            support: Nd(e),
            orientation: {
                mode: "fixed",
                bodyDirection: [
                    ...r.normal
                ],
                reversed: !1
            },
            normalReversed: !1,
            frameSnapshot: {
                origin: [
                    ...r.origin
                ],
                normal: [
                    ...r.normal
                ],
                uAxis: [
                    ...r.xAxis
                ],
                vAxis: [
                    ...r.yAxis
                ]
            },
            helperVisibility: "auto"
        });
    }
    function ge(e, t) {
        return e !== null && Number.isFinite(e) && e > 0 ? e : t;
    }
    function Ky(e) {
        const { startLimitValue: t, endLimitValue: r } = e.parameterSummary;
        return t !== null && r !== null ? ge(Math.abs(t - r), 1) : 1;
    }
    function It(e) {
        if (!e) return null;
        const t = Math.hypot(e[0], e[1], e[2]);
        return t <= 1e-9 ? null : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function he(e) {
        return e && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function Rs(e) {
        const t = he(e.parameters), r = he(t?.tool), n = Array.isArray(r?.objects) ? he(r.objects[0]) : null, i = Array.isArray(n?.origin) ? n.origin : null, o = Array.isArray(n?.normal) ? n.normal : null;
        return !i || !o || i.length !== 3 || o.length !== 3 || [
            ...i,
            ...o
        ].some((s)=>typeof s != "number" || !Number.isFinite(s)) ? null : {
            origin: i,
            normal: o
        };
    }
    function qy(e) {
        const t = he(e.parameters);
        return (Array.isArray(t?.edge_sets) ? t.edge_sets : []).flatMap((n)=>{
            const i = he(n);
            return (Array.isArray(i?.edges) ? i.edges : []).flatMap((s)=>{
                const a = he(s);
                return (Array.isArray(a?.faces) ? a.faces : []).flatMap((c)=>{
                    const u = he(c), p = u?.owner_feature_id, f = typeof u?.topology_name == "string" ? u.topology_name : "";
                    return Number.isInteger(p) && f ? [
                        {
                            featureId: U(p),
                            role: f
                        }
                    ] : [];
                });
            });
        });
    }
    function Hy(e, t) {
        const { startLimitValue: r, endLimitValue: n, direction: i } = e.parameterSummary;
        if (r === null || n === null || r === n) return;
        const o = It(t ?? null) ?? [
            0,
            0,
            1
        ], s = It(i) ?? o, a = s[0] * o[0] + s[1] * o[1] + s[2] * o[2], d = Math.abs(a) <= 1e-9 ? 1 : a, c = r * d, u = n * d;
        return {
            startOffset: Math.min(c, u),
            endOffset: Math.max(c, u)
        };
    }
    function Ii(e) {
        return e?.toUpperCase() === "SUBTRACT" ? "cut" : "add";
    }
    function Ly(e) {
        const t = e?.toUpperCase();
        return t === "SUBTRACT" ? "cut" : t === "INTERSECT" ? "intersect" : "union";
    }
    function Cs(e) {
        return e?.toUpperCase() === "UNITE";
    }
    function Uy(e) {
        const t = e.parameterSummary.endAngleDegrees ?? 360;
        return ge(Math.abs(t) * Math.PI / 180, Math.PI * 2);
    }
    function Wy(e) {
        const t = e.parameterSummary.axisDirection, r = t && Math.hypot(...t) > 1e-9 ? t : [
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
            direction: [
                r[0],
                r[1],
                r[2]
            ]
        };
    }
    function Ms(e, t) {
        const r = e.parameterSummary.sectionIds[0];
        return r === void 0 ? null : t.get(r) ?? U(r);
    }
    function Gy(e, t, r, n = new Map) {
        const i = U(e.id), o = [
            ...new Set([
                ...Py(e, t),
                ...e.normalizedType === "sketch" ? Vy(e) : []
            ])
        ], s = {
            id: i,
            name: e.name,
            dependencyIds: o,
            suppressed: e.suppressed
        };
        if (e.normalizedType === "sketch") return {
            supported: !0,
            feature: yo({
                ...s,
                placementPlane: Ny(e)
            })
        };
        if (e.normalizedType === "datum_on_path") {
            const a = jy(e), d = zy(e, n, t);
            return d ? {
                supported: !0,
                feature: kr({
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
                feature: kr({
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
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "extrude") {
            const a = Ms(e, t);
            if (!a) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} EXTRUDE has no section_ids; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const d = e.parameterSummary.sectionIds[0], c = d === void 0 ? null : n.get(d)?.sketchPlaneFrame?.normal ?? null;
            return {
                supported: !0,
                feature: ho({
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
                    depth: Ky(e),
                    mode: Ii(e.parameterSummary.booleanOp),
                    secondDepth: 0,
                    symmetric: e.parameterSummary.symmetric,
                    ...Hy(e, c),
                    fusePrior: Cs(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "revolve") {
            const a = Ms(e, t);
            return a ? {
                supported: !0,
                feature: _a({
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
                    axisRef: Wy(e),
                    angle: Uy(e),
                    mode: Ii(e.parameterSummary.booleanOp),
                    fusePrior: Cs(e.parameterSummary.booleanOp)
                })
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} SWP104 has no section_ids; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "cylinder") {
            const a = ge(e.parameterSummary.radiusValue ?? (e.parameterSummary.diameterValue !== null ? e.parameterSummary.diameterValue / 2 : null), 1), d = ge(e.parameterSummary.heightValue, 1), c = It(e.parameterSummary.direction ?? e.parameterSummary.axisDirection) ?? [
                0,
                0,
                1
            ];
            return {
                supported: !0,
                feature: ia({
                    ...s,
                    origin: [
                        ...e.parameterSummary.origin ?? e.parameterSummary.axisOrigin ?? [
                            0,
                            0,
                            0
                        ]
                    ],
                    direction: c,
                    radius: a,
                    height: d,
                    mode: Ii(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "helix") {
            const a = ge(e.parameterSummary.pitchValue, 1), d = ge(e.parameterSummary.turnsValue, 1), c = ge(e.parameterSummary.heightValue, a * d), u = ge(e.parameterSummary.radiusValue, 1);
            return {
                supported: !0,
                feature: zn({
                    ...s,
                    axisOrigin: [
                        ...e.parameterSummary.axisOrigin ?? e.parameterSummary.origin ?? [
                            0,
                            0,
                            0
                        ]
                    ],
                    axisDirection: It(e.parameterSummary.axisDirection ?? e.parameterSummary.direction) ?? [
                        0,
                        0,
                        1
                    ],
                    radius: u,
                    endRadius: ge(e.parameterSummary.endRadiusValue, u),
                    pitch: a,
                    endPitch: ge(e.parameterSummary.endPitchValue, a),
                    height: c,
                    handedness: "right",
                    startAngle: 0
                })
            };
        }
        if (e.normalizedType === "split") {
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = Rs(e);
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable split plane; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = t.get(a) ?? U(a);
            return {
                supported: !0,
                feature: va({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            c
                        ])
                    ],
                    baseFeatureId: c,
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
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = Rs(e), c = he(e.parameters), u = c?.trim_direction, p = u === "negative" ? "negative" : u === "both" ? "both" : "positive", f = c?.tolerance, m = typeof f == "number" && Number.isFinite(f) && f >= 0 ? f : 1e-7;
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable sheet/plane tool; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const y = t.get(a) ?? U(a);
            return {
                supported: !0,
                feature: Ea({
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
                    keepSide: p,
                    tolerance: m
                })
            };
        }
        if (e.normalizedType === "draft") {
            const a = e.parentIds.at(-1) === void 0 ? o.at(-1) : t.get(e.parentIds.at(-1)) ?? U(e.parentIds.at(-1)), d = qy(e), c = Array.isArray(e.parameters.edge_sets) ? e.parameters.edge_sets : [], u = he(c[0])?.angle_value, p = typeof u == "number" && Number.isFinite(u) ? Math.abs(u) : 5, f = Math.min(Math.max(p * Math.PI / 180, 1e-4), Math.PI / 2 - 1e-4);
            if (!a || d.length === 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable draft faces; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const m = {
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
            };
            return {
                supported: !0,
                feature: Pi({
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
                        m
                    ],
                    direction: {
                        kind: "world",
                        direction: It(e.parameterSummary.direction) ?? [
                            0,
                            0,
                            1
                        ]
                    },
                    reverseDirection: !1,
                    angle: f,
                    reverseAngle: !1,
                    split: {
                        kind: "none"
                    },
                    variableAngles: [],
                    secondSideAngle: f,
                    reverseSecondSideAngle: !1,
                    options: {
                        propagateDraftSurfaces: !0,
                        preserveInlyingRounds: !0,
                        recreateAttachedRounds: !0,
                        extendIntersectSurfaces: !1
                    }
                })
            };
        }
        if (e.normalizedType === "boolean") {
            const a = e.parameterSummary.targetFeatureIds[0], d = e.parameterSummary.toolFeatureIds[0];
            if (a === void 0 || d === void 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no target/tool feature ids; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = t.get(a) ?? U(a), u = t.get(d) ?? U(d);
            return {
                supported: !0,
                feature: xa({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            c,
                            u
                        ])
                    ],
                    targetFeatureId: c,
                    toolFeatureId: u,
                    op: Ly(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "hole") {
            const a = zd(e, n, t), d = Dy(e, n, t);
            if (!a || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no dependent point sketch or solid base; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = e.parameters, u = [
                c.hole_form,
                c.hs_start_form,
                c.hole_type
            ].filter((g)=>typeof g == "string").join(" ").toLowerCase(), p = e.sourceType.toUpperCase() === "CBORE_HOLE" || u.includes("counterbore") || u.includes("counterbored"), f = ge(e.parameterSummary.diameterValue ?? Ht(e, "start diameter", "hole diameter", "tap drill diameter"), 1), m = ge(e.parameterSummary.counterboreDiameterValue ?? Ht(e, "counter bore diameter", "counterbore diameter"), f * 2), y = ge(e.parameterSummary.counterboreDepthValue ?? Ht(e, "counter bore depth", "counterbore depth"), Math.max(f / 2, 1)), x = e.parameterSummary.through || String(c.depth_limit ?? "").toLowerCase().includes("through"), _ = ge(e.parameterSummary.heightValue ?? Ht(e, "thread depth", "hole depth") ?? (p ? y : null), 1);
            return {
                supported: !0,
                feature: Sa({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d,
                            a
                        ])
                    ],
                    baseFeatureId: d,
                    sketchId: a,
                    diameter: f,
                    depth: _,
                    depthMode: x ? "through" : "blind",
                    mode: p ? "counterbore" : "simple",
                    ...p ? {
                        counterboreDiameter: m,
                        counterboreDepth: y
                    } : {}
                })
            };
        }
        if (e.normalizedType === "thread") {
            const a = Vd(e, t, n);
            return a ? {
                supported: !0,
                feature: a.thread
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} is missing thread axis point, major/minor diameter, pitch, or length; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "pipe") return {
            supported: !1,
            diagnostic: `UG feature ${e.id} ${e.sourceType} has a non-sketch guide path; current Pipe replay accepts sketch paths only`,
            feature: Fe({
                ...s,
                dependencyIds: [],
                sourceLabel: `UG:${e.sourceType}`
            })
        };
        if (e.normalizedType === "fillet" || e.normalizedType === "chamfer") {
            const a = jd(e), d = a !== void 0 ? t.get(a) ?? U(a) : o.at(-1), c = [
                ...Ry(e),
                ...Cy(e),
                ...My(e)
            ], u = a === void 0 ? void 0 : n.get(a);
            return !d || c.length === 0 || !u || !Kd(u) ? {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable edge selectors; imported as placeholder`,
                feature: Fe({
                    ...s,
                    dependencyIds: [],
                    sourceLabel: `UG:${e.sourceType}`
                })
            } : e.normalizedType === "fillet" ? {
                supported: !0,
                feature: ya({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: c,
                    radius: ge(e.parameterSummary.radiusValue, 1)
                })
            } : {
                supported: !0,
                feature: ma({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: c,
                    distance: ge(e.parameterSummary.offset2Value ?? By(e.parameters.offset2), 1)
                })
            };
        }
        if (e.sourceType.toUpperCase() === "DATUM_CSYS") {
            const a = e.sketchPlaneFrame;
            return {
                supported: !0,
                feature: kr({
                    ...s,
                    attachmentMode: a ? "three_point" : "offset_base",
                    basePlane: "xy",
                    offset: 0,
                    faceSelector: null,
                    threePoints: a ? [
                        [
                            ...a.origin
                        ],
                        a.origin.map((d, c)=>d + a.xAxis[c]),
                        a.origin.map((d, c)=>d + a.yAxis[c])
                    ] : null,
                    baseDatumId: null
                })
            };
        }
        return {
            supported: !1,
            diagnostic: `UG feature ${e.id} ${e.sourceType} has no Part Design equivalent; imported as placeholder`,
            feature: Fe({
                ...s,
                dependencyIds: [],
                suppressed: !0,
                sourceLabel: `UG:${e.sourceType}`
            })
        };
    }
    function Yy(e) {
        return (e.parameterSummary.booleanOp ?? "").toUpperCase();
    }
    function Zy(e) {
        return (e.normalizedType === "extrude" || e.normalizedType === "revolve" || e.normalizedType === "cylinder") && Yy(e) === "CREATE";
    }
    function Kd(e) {
        return e.normalizedType === "extrude" || e.normalizedType === "revolve" || e.normalizedType === "cylinder" || e.normalizedType === "fillet" || e.normalizedType === "chamfer" || e.normalizedType === "draft" || e.normalizedType === "split" || e.normalizedType === "boolean" || e.normalizedType === "hole" || e.normalizedType === "pipe";
    }
    function Ds(e, t) {
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
    function Ts(e, t) {
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
        return r.type === "datum_plane" && r.baseDatumId && (r.baseDatumId = t.get(r.baseDatumId) ?? r.baseDatumId), r.type === "datum_plane" && r.pathFeatureId && (r.pathFeatureId = t.get(r.pathFeatureId) ?? r.pathFeatureId), r;
    }
    function Jy(e, t) {
        const r = `${e.id}::b${t}`;
        if (e.type === "datum_plane") return kr({
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
        if (e.type === "sketch") return yo({
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
    function Xy(e, t = {}) {
        return qd(Vo(e), t);
    }
    function qd(e, t) {
        const r = new Ba({
            id: t.documentId,
            name: t.partName ?? e.source.partName ?? "UG Part"
        }), n = r.createPart({
            id: t.partId,
            name: t.partName ?? e.source.partName ?? "Part"
        }), i = new Map;
        for (const g of e.featureSeries)i.set(g.id, U(g.id));
        const o = [
            ...e.diagnostics.warnings
        ], s = [], a = new Map(e.featureSeries.map((g)=>[
                g.id,
                g
            ])), d = e.featureSeries.flatMap((g)=>{
            const l = Gy(g, i, t.bodyId ?? "body", a);
            l.supported || (s.push(g.id), l.diagnostic && o.push(l.diagnostic));
            const b = [
                {
                    node: g,
                    feature: l.feature
                }
            ];
            if (l.feature.type === "thread") {
                const h = Vd(g, i, a);
                h && b.unshift({
                    node: g,
                    feature: h.helix
                });
            }
            return b;
        }), c = new Map;
        let u = 0;
        for (const { node: g, feature: l } of d){
            if (!Kd(g) || l.type === "import") continue;
            if (Zy(g)) {
                c.set(l.id, u), u += 1;
                continue;
            }
            const b = g.parentIds.map((h)=>U(h)).find((h)=>c.has(h));
            c.set(l.id, b !== void 0 ? c.get(b) : Math.max(0, u - 1));
        }
        u === 0 && (u = 1);
        let p = !0;
        for(; p;){
            p = !1;
            for (const { feature: g } of d){
                if (c.has(g.id)) continue;
                const l = new Set;
                for (const b of d){
                    const h = c.get(b.feature.id);
                    h !== void 0 && Ds(b.feature, g.id) && l.add(h);
                }
                l.size === 1 && (c.set(g.id, [
                    ...l
                ][0]), p = !0);
            }
        }
        for (const { feature: g } of d)c.has(g.id) || c.set(g.id, 0);
        const f = Array.from({
            length: u
        }, ()=>new Map), m = Array.from({
            length: u
        }, ()=>[]);
        for (const { feature: g } of d){
            const l = c.get(g.id), b = new Set([
                l
            ]);
            for (const h of d){
                const I = c.get(h.feature.id);
                I === void 0 || I === l || Ds(h.feature, g.id) && b.add(I);
            }
            for (const h of b){
                if (h === l || g.type !== "datum_plane" && g.type !== "sketch") continue;
                const I = Jy(g, h);
                f[h].set(g.id, I.id), m[h].push(I);
            }
        }
        const y = t.bodyName ?? e.source.partName ?? "Body", x = [];
        for(let g = 0; g < u; g++){
            const l = new Ta({
                id: g === 0 ? t.bodyId ?? `ug:body:${g}` : `${t.bodyId ?? "ug:body"}:${g}`,
                name: u === 1 ? y : `${y} ${g + 1}`,
                partId: n.id
            });
            r.addBodyToPart(n.id, l);
            const b = f[g];
            for (const h of m[g])l.addFeature(Ts(h, b));
            for (const { feature: h } of d)c.get(h.id) === g && l.addFeature(Ts(h, b));
            x.push(l);
        }
        const _ = sd(e.featureSeries);
        for (const g of f)for (const [l, b] of g){
            const h = _[l];
            h && !_[b] && (_[b] = structuredClone(h));
        }
        return {
            document: r,
            partId: n.id,
            bodyId: x[0].id,
            bodyIds: x.map((g)=>g.id),
            featureIdByUgId: i,
            featureSeries: x.flatMap((g)=>[
                    ...g.getFeatures()
                ]),
            unsupportedUgFeatureIds: s,
            diagnostics: o,
            snapshot: e,
            profiles: _,
            profileProvider: new Bd(_)
        };
    }
    Qy = function(e, t = {}) {
        return qd(Td(e), t);
    };
    let eg = 0;
    function tg() {
        return `occ-req-${++eg}`;
    }
    class Hd {
        constructor(t){
            this.createWorker = t;
        }
        createWorker;
        worker = null;
        pending = new Map;
        error(t, r, n) {
            return new fe(t, r, {
                requestId: n.requestId,
                bodyId: n.bodyId,
                featureId: n.featureId,
                revision: n.revision,
                operation: n.operation
            });
        }
        extrudeRectangle(t, r, n, i = {}) {
            const o = this.ensureWorker(), s = i.requestId ?? tg(), a = i.timeoutMs ?? 12e4, d = {
                protocolVersion: ar,
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
            return new Promise((c, u)=>{
                const p = {
                    resolve: c,
                    reject: u,
                    request: d,
                    settled: !1
                }, f = (m, y)=>{
                    p.settled || (p.settled = !0, p.timeoutId && clearTimeout(p.timeoutId), this.pending.delete(s), y && o.postMessage(this.cancelEnvelope(d)), u(m));
                };
                if (i.signal?.aborted) {
                    f(this.error("OCC extrude cancelled", "cancelled", d), !1);
                    return;
                }
                i.signal?.addEventListener("abort", ()=>f(this.error("OCC extrude cancelled", "cancelled", d), !0), {
                    once: !0
                }), p.timeoutId = setTimeout(()=>f(this.error(`OCC extrude deadline exceeded after ${a}ms`, "deadline-exceeded", d), !0), a), this.pending.set(s, p), o.postMessage(d);
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
            for (const t of this.pending.values())t.timeoutId && clearTimeout(t.timeoutId), t.reject(new fe("OCC worker disposed", "cancelled"));
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
                for (const n of this.pending.values())n.reject(new fe(r.message ?? "OCC worker error", "worker"));
                this.pending.clear();
            }, this.worker = t, t;
        }
    }
    class rg {
        constructor(t, r = 1){
            this.maxConcurrent = r, this.host = new Hd(t);
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
                i.job.featureId === t && (i.reject(new fe(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(n, 1), r++);
            }
            return r;
        }
        cancelBodyBeforeRevision(t, r) {
            let n = 0;
            for(let i = this.queue.length - 1; i >= 0; i--){
                const o = this.queue[i];
                (o.job.bodyId ?? "default-body") === t && (o.job.revision ?? 0) < r && (o.reject(new fe(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(i, 1), n++);
            }
            return n += this.host.cancelBodyBeforeRevision(t, r), n;
        }
        get queueLength() {
            return this.queue.length;
        }
        dispose() {
            for (const t of this.queue)t.reject(new fe("OCC pool disposed", "cancelled"));
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
    function ng(e, t) {
        const [r, n, i] = e.origin, [o, s, a] = e.uAxis, [d, c, u] = e.vAxis;
        return [
            r + o * t.x + d * t.y,
            n + s * t.x + c * t.y,
            i + a * t.x + u * t.y
        ];
    }
    function ig(e, t, r) {
        const n = [], i = {}, o = [];
        if (!e.profile.ok) for (const s of e.profile.diagnostics ?? [])n.push({
            code: s.code,
            message: s.message
        });
        for(let s = 0; s < e.profile.loops.length; s++){
            const a = e.profile.loops[s];
            for (const d of a.edges){
                const u = (d.samples && d.samples.length >= 2 ? d.samples : [
                    d.start,
                    d.end
                ]).map((p)=>ng(t, p));
                o.push({
                    domainEntityId: d.entityId,
                    polyline: u,
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
    function og(e) {
        return !(e.cancelled || e.requestId !== e.responseRequestId || e.requestRevision !== e.responseRevision || e.requestRevision < e.latestPublishedRevision);
    }
    Rg = Object.freeze(Object.defineProperty({
        __proto__: null,
        FeatureBuildHandlerRegistry: Ua,
        FeatureBuildHandlerRegistryError: rn,
        MESH_TRANSFER_BYTE_THRESHOLD: Ka,
        OCC_BODY_REPLAY_PROTOCOL_VERSION: Ye,
        OCC_PROTOCOL_SCHEMA_VERSION: Lt,
        OCC_WORKER_PROTOCOL_VERSION: ar,
        OccBodyReplayExecutor: Ad,
        OccBodyWorkerClient: Ui,
        OccBridgeError: fe,
        OccRequestCoordinator: lp,
        OccWorkerGeneration: fp,
        OccWorkerHost: Hd,
        OccWorkerPool: rg,
        UgFeatureSnapshotParseError: Re,
        UgSketchProfileProvider: Bd,
        VersionedOccWorkerFacade: up,
        acceptOccWorkerResult: og,
        adaptDomainProfileToWireSpecs: ig,
        assertTopologyMatchesMesh: L,
        bindHintsToTessellation: Mo,
        booleanShapesWithOcc: Gt,
        booleanSolidsHeadless: ky,
        booleanSolidsHeadlessSpike: Dd,
        buildExtrudeFaceHints: On,
        buildExtrudeSemanticTopology: yd,
        buildFaceFromProfile: ct,
        buildPrismShapeFromFace: Oo,
        buildPrismShapeFromProfile: ze,
        buildRevolveFaceHints: Pn,
        buildRevolveSemanticTopology: an,
        buildSketchFaceFromProfile: ed,
        chamferProfileWithOcc: pm,
        chamferShapeWithOcc: En,
        collectMeshTransfers: Oe,
        collectTransferBuffers: dp,
        createFeatureDocumentFromUgSnapshot: Xy,
        createFeatureDocumentFromUgSnapshotJson: Qy,
        createProtocolHello: Ha,
        detectSolidImportFormat: Un,
        disposePrismBuild: Ae,
        ensureTipEdgesWithOccOrdinals: vn,
        executeOccBodyReplay: Od,
        extractSemanticTopology: oy,
        extrudeProfileHeadless: $d,
        extrudeProfileHeadlessSpike: nr,
        extrudeProfileWithOcc: Do,
        extrudeRectangleHeadless: yy,
        extrudeRectangleHeadlessSpike: hy,
        extrudeRectangleWithOcc: ly,
        facePullShapeWithOcc: ld,
        filletProfileWithOcc: lm,
        filletShapeWithOcc: Co,
        getOccBodyWorkerClient: cy,
        getOuterLoop: sr,
        grooveProfileHeadless: fy,
        grooveProfileWithOcc: Pd,
        handleOccRequest: Bo,
        helixWireWithOcc: fd,
        importBRepSolidFromFileWithOcc: Km,
        importSolidFromFile: qm,
        importSolidFromFileWithOcc: _d,
        importedShapeToBRepSolidWithOcc: $n,
        inheritSemanticTopologyAfterBoolean: ee,
        isOccBodyReplayCancelRequest: Za,
        isOccBodyReplayRequest: Fh,
        isProtocolVersion: ap,
        isResponseCurrent: cp,
        listPrismEdgeSamples: cm,
        listPrismEdgeSamplesFromShape: K,
        loadOccModule: dt,
        matchEdgeHintsToOccOrdinals: cd,
        mergeSemanticTopology: Cm,
        meshFromPayload: op,
        meshTransferByteSize: qa,
        negotiateProtocol: La,
        nextBodyReplayRequestId: dy,
        parseUgFeatureSnapshot: Vo,
        parseUgFeatureSnapshotJson: Td,
        pocketProfileHeadless: Iy,
        pocketProfileWithOcc: gy,
        pocketProfilesHeadless: Cd,
        pocketProfilesHeadlessSpike: Wi,
        pocketProfilesWithOcc: jo,
        pocketRectangleHeadless: by,
        profilePointToWorld: Ze,
        readBrepShapeWithOcc: Yn,
        readStepShapeWithOcc: Zn,
        registerBuiltinFeatureHandlers: ih,
        resetOccBodyWorkerClientForTests: uy,
        resetOccModuleCache: Oh,
        revolveProfileHeadless: Md,
        revolveProfileHeadlessSpike: To,
        revolveProfileWithOcc: Po,
        revolveRectangleHeadless: wy,
        revolveRectangleHeadlessSpike: my,
        revolveRectangleWithOcc: ad,
        sampleResultFaces: Br,
        shouldUseTransferList: ip,
        solidImportVirtualPath: Wn,
        tessellateShape: j,
        threadShapeWithOcc: pd,
        topologyFromTessellation: dn,
        ugSketchNodeToProfile: od,
        ugSketchProfilesByFeatureId: sd,
        useHeadlessSpikeKernel: ir,
        validateOccBodyReplayRequest: Ln,
        validateOccBodyReplayResponseCorrelation: Ya,
        validateOccRequest: Fo,
        validateProtocolEnvelope: sp
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Og as $, Qy as A, Fe as B, mg as C, gg as D, bg as E, Ba as F, Ig as G, wg as H, pg as I, kr as J, Sl as K, xu as L, no as M, su as N, ia as O, la as P, au as Q, yt as R, du as S, Yl as T, vl as U, Fg as V, _g as W, qn as X, Rl as Y, Eg as Z, $g as _, kg as a, rp as a0, Ag as a1, ya as a2, ma as a3, pf as a4, ho as a5, _a as a6, Sa as a7, Ul as a8, Jl as a9, Gu as aa, Wl as ab, dl as ac, Fa as ad, zn as ae, mo as af, _t as ag, pn as ah, sf as ai, ou as aj, xg as ak, np as al, A as am, tp as an, Pg as ao, Rg as ap, vg as b, yo as c, Fl as d, Wd as e, _l as f, ff as g, ag as h, bo as i, xe as j, Ta as k, xa as l, va as m, il as n, Pi as o, Sg as p, hg as q, wa as r, ea as s, cg as t, ug as u, dg as v, lg as w, fg as x, yg as y, od as z, __tla };
