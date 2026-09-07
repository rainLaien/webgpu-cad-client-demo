import { p as cu, e as lu, _ as cs, __tla as __tla_0 } from "./editor-module-CTbqIS1s.js";
let jd, U0, H0, W0, Tn, G0, gc, X0, dl, Y0, Xi, ll, cl, Is, il, D0, qd, je, ag, Z0, Q0, tw, ew, rw, cn, Hp, Kf, _f, nw, Ef, Af, yh, Wp, dw, lw, Qp, fw, yw, hw, xm, mw, gw, Sm, pw, Jd, Yd, $s, As, oc, ic, ph, Ih, yp, hh, Op, Os, qi, Ps, or, ow, cw, Yi, yi, _h, vf, sw, km, j, tg, Rs, uw, uu, tr, iw, Hi, Rt, qp, Up, Ch, Ds, L0, wl, aw, ze, ec, yc, rc, sc, nc, To, J0, $d, q0;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const wn = new Set;
    let Fo = !1;
    uu = function(e, t, r = 2) {
        const n = t && t.length, i = n ? t[0] * r : e.length;
        wn.size && wn.clear();
        let o = gd(e, 0, i, r, !0);
        const s = [];
        if (!o || o.next === o.prev) return s;
        let a = 0, d = 0, c = 0;
        if (n && (o = yu(e, t, o, r)), e.length > 80 * r) {
            a = e[0], d = e[1];
            let l = a, f = d;
            for(let u = r; u < i; u += r){
                const h = e[u], m = e[u + 1];
                h < a && (a = h), m < d && (d = m), h > l && (l = h), m > f && (f = m);
            }
            c = Math.max(l - a, f - d), c = c !== 0 ? 32767 / c : 0;
        }
        return vo(o, s, a, d, c), s;
    };
    function gd(e, t, r, n, i) {
        let o = null;
        if (i === Ou(e, t, r, n) > 0) for(let s = t; s < r; s += n)o = ma(s / n | 0, e[s], e[s + 1], o);
        else for(let s = r - n; s >= t; s -= n)o = ma(s / n | 0, e[s], e[s + 1], o);
        return o && xn(o, o.next) && (kn(o), o = o.next), o;
    }
    function Zt(e, t = e) {
        const r = t === e;
        let n = e, i;
        do i = !1, n !== n.next && (wn.size === 0 || !wn.has(n)) && (xn(n, n.next) || ke(n.prev, n, n.next) === 0) ? ((r || n === t) && (t = n.prev), Fo = !0, kn(n), n = n.prev, i = !0) : (r || n !== t) && (n = n.next, i = !r);
        while (i || n !== t);
        return t;
    }
    function vo(e, t, r, n, i) {
        i && ku(e, r, n, i);
        let o = e, s = !1;
        for(; e.prev !== e.next;){
            const a = e.prev, d = e.next;
            if (ke(a, e, d) < 0 && (i ? pu(e, r, n, i) : fu(e))) {
                t.push(a.i, e.i, d.i), kn(e), e = d, o = d;
                continue;
            }
            if (e = d, e === o) {
                if (Fo = !1, e = Zt(e), Fo) {
                    o = e;
                    continue;
                }
                if (!s) {
                    e = hu(e, t), o = e, s = !0;
                    continue;
                }
                mu(e, t, r, n, i);
                break;
            }
        }
    }
    function fu(e) {
        const t = e.prev, r = e, n = e.next, i = t.x, o = r.x, s = n.x, a = t.y, d = r.y, c = n.y, l = Math.min(i, o, s), f = Math.min(a, d, c), u = Math.max(i, o, s), h = Math.max(a, d, c);
        let m = n.next;
        for(; m !== t;){
            if (m.x >= l && m.x <= u && m.y >= f && m.y <= h && !(i === m.x && a === m.y) && hi(i, a, o, d, s, c, m.x, m.y) && ke(m.prev, m, m.next) >= 0) return !1;
            m = m.next;
        }
        return !0;
    }
    function pu(e, t, r, n) {
        const i = e.prev, o = e, s = e.next, a = i.x, d = o.x, c = s.x, l = i.y, f = o.y, u = s.y, h = Math.min(a, d, c), m = Math.min(l, f, u), I = Math.max(a, d, c), w = Math.max(l, f, u), y = Oo(h, m, t, r, n), x = Oo(I, w, t, r, n);
        let b = e.prevZ;
        for(; b && b.z >= y;){
            if (b.x >= h && b.x <= I && b.y >= m && b.y <= w && b !== s && !(a === b.x && l === b.y) && hi(a, l, d, f, c, u, b.x, b.y) && ke(b.prev, b, b.next) >= 0) return !1;
            b = b.prevZ;
        }
        let g = e.nextZ;
        for(; g && g.z <= x;){
            if (g.x >= h && g.x <= I && g.y >= m && g.y <= w && g !== s && !(a === g.x && l === g.y) && hi(a, l, d, f, c, u, g.x, g.y) && ke(g.prev, g, g.next) >= 0) return !1;
            g = g.nextZ;
        }
        return !0;
    }
    function hu(e, t) {
        let r = e, n = !1;
        do {
            const i = r.prev, o = r.next.next;
            wd(i, r, r.next, o, !1) && Sn(i, o) && Sn(o, i) && (t.push(i.i, r.i, o.i), kn(r), kn(r.next), r = e = o, n = !0), r = r.next;
        }while (r !== e);
        return n ? Zt(r) : r;
    }
    function mu(e, t, r, n, i) {
        let o = e;
        do {
            let s = o.next.next;
            for(; s !== o.prev;){
                if (o.i !== s.i && _u(o, s)) {
                    let a = xd(o, s);
                    o = Zt(o, o.next), a = Zt(a, a.next), vo(o, t, r, n, i), vo(a, t, r, n, i);
                    return;
                }
                s = s.next;
            }
            o = o.next;
        }while (o !== e);
    }
    let _o = !1;
    function yu(e, t, r, n) {
        const i = [];
        for(let o = 0, s = t.length; o < s; o++){
            const a = t[o] * n, d = o < s - 1 ? t[o + 1] * n : e.length, c = gd(e, a, d, n, !1);
            c === c.next && wn.add(c), i.push(vu(c));
        }
        i.sort(gu), bu(e.length / n, t.length), bd(r, r), _o = !0;
        for(let o = 0; o < i.length; o++)r = Iu(i[o], r);
        return _o = !1, Zt(r);
    }
    function gu(e, t) {
        return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
    }
    function Iu(e, t) {
        const r = xu(e, t);
        if (!r) return t;
        const n = xd(r, e), i = n.next;
        return bd(r, i.next), Zt(n, n.next), Zt(r, r.next);
    }
    const Id = 16;
    let me = new Float64Array(0), pi = 0;
    const Eo = [], Ao = [];
    function bu(e, t) {
        const r = Math.ceil((e + 2 * t) / Id) + t + 2;
        me.length < r * 4 && (me = new Float64Array(r * 4)), pi = 0;
    }
    function bd(e, t) {
        let r = e;
        do {
            const n = pi++;
            Eo[n] = r;
            let i = 1 / 0, o = 1 / 0, s = -1 / 0, a = -1 / 0, d = 0;
            do {
                const l = r.next;
                r.z = n, r.x < i && (i = r.x), r.x > s && (s = r.x), r.y < o && (o = r.y), r.y > a && (a = r.y), l.x < i && (i = l.x), l.x > s && (s = l.x), l.y < o && (o = l.y), l.y > a && (a = l.y), r = l;
            }while (++d < Id && r !== t);
            Ao[n] = r;
            const c = n * 4;
            me[c] = i, me[c + 1] = o, me[c + 2] = s, me[c + 3] = a;
        }while (r !== t);
    }
    function wu(e, t) {
        const r = e.z * 4;
        t.x < me[r] && (me[r] = t.x), t.y < me[r + 1] && (me[r + 1] = t.y), t.x > me[r + 2] && (me[r + 2] = t.x), t.y > me[r + 3] && (me[r + 3] = t.y);
    }
    function pa(e) {
        let t = Ao[e];
        for(; t.prev.next !== t;)t = t.next;
        return Ao[e] = t, t;
    }
    function ha(e) {
        let t = Eo[e];
        for(; t.prev.next !== t;)t = t.next;
        return Eo[e] = t, t;
    }
    function xu(e, t) {
        let r = t;
        const n = e.x, i = e.y;
        let o = -1 / 0, s;
        if (xn(e, r)) return r;
        for(let u = 0, h = 0; u < pi; u++, h += 4){
            if (i < me[h + 1] || i > me[h + 3] || me[h] > n || me[h + 2] <= o) continue;
            const m = pa(u);
            r = ha(u);
            do {
                if (r.prev.next === r) {
                    if (xn(e, r.next)) return r.next;
                    if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                        const I = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (I <= n && I > o && (o = I, s = r.x < r.next.x ? r : r.next, I === n)) return s;
                    }
                }
                r = r.next;
            }while (r !== m);
        }
        if (!s) return null;
        const a = s.x, d = s.y, c = Math.min(i, d), l = Math.max(i, d);
        let f = 1 / 0;
        for(let u = 0, h = 0; u < pi; u++, h += 4){
            if (me[h + 2] < a || me[h] > n || me[h + 3] < c || me[h + 1] > l) continue;
            const m = pa(u);
            r = ha(u);
            do {
                if (r.prev.next === r && n >= r.x && r.x >= a && n !== r.x && hi(i < d ? n : o, i, a, d, i < d ? o : n, i, r.x, r.y)) {
                    const I = Math.abs(i - r.y) / (n - r.x);
                    (Sn(r, e) || r.y === i && r.next.y === i && r.next.x > n) && (I < f || I === f && (r.x > s.x || r.x === s.x && Su(s, r))) && (s = r, f = I);
                }
                r = r.next;
            }while (r !== m);
        }
        return s;
    }
    function Su(e, t) {
        return ke(e.prev, e, t.prev) < 0 && ke(t.next, e, e.next) < 0;
    }
    const Ke = [];
    let Hr = [], jt = new Uint32Array(0), qr = new Uint32Array(0);
    const Ur = new Uint32Array(256);
    function ku(e, t, r, n) {
        let i = e, o = 0;
        do i.z = Oo(i.x, i.y, t, r, n), Ke[o++] = i, i = i.next;
        while (i !== e);
        Fu(o);
        let s = null;
        for(let a = 0; a < o; a++){
            const d = Ke[a];
            d.prevZ = s, s && (s.nextZ = d), s = d;
        }
        s.nextZ = null;
    }
    function Fu(e) {
        if (e <= 32) {
            for(let t = 1; t < e; t++){
                const r = Ke[t], n = r.z;
                let i = t - 1;
                for(; i >= 0 && Ke[i].z > n;)Ke[i + 1] = Ke[i], i--;
                Ke[i + 1] = r;
            }
            return;
        }
        jt.length < e && (jt = new Uint32Array(e), qr = new Uint32Array(e), Hr = new Array(e));
        for(let t = 0; t < e; t++)jt[t] = Ke[t].z;
        zn(e, Ke, jt, Hr, qr, 0), zn(e, Hr, qr, Ke, jt, 8), zn(e, Ke, jt, Hr, qr, 16), zn(e, Hr, qr, Ke, jt, 24);
    }
    function zn(e, t, r, n, i, o) {
        Ur.fill(0);
        for(let a = 0; a < e; a++)Ur[r[a] >>> o & 255]++;
        let s = 0;
        for(let a = 0; a < 256; a++){
            const d = Ur[a];
            Ur[a] = s, s += d;
        }
        for(let a = 0; a < e; a++){
            const d = r[a], c = Ur[d >>> o & 255]++;
            n[c] = t[a], i[c] = d;
        }
    }
    function Oo(e, t, r, n, i) {
        return e = (e - r) * i | 0, t = (t - n) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
    }
    function vu(e) {
        let t = e, r = e;
        do (t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next;
        while (t !== e);
        return r;
    }
    function hi(e, t, r, n, i, o, s, a) {
        return (i - s) * (t - a) >= (e - s) * (o - a) && (e - s) * (n - a) >= (r - s) * (t - a) && (r - s) * (o - a) >= (i - s) * (n - a);
    }
    function _u(e, t) {
        const r = xn(e, t) && ke(e.prev, e, e.next) > 0 && ke(t.prev, t, t.next) > 0;
        return e.next.i !== t.i && (r || Sn(e, t) && Sn(t, e) && (ke(e.prev, e, t.prev) !== 0 || ke(e, t.prev, t) !== 0)) && !Eu(e, t) && (r || Au(e, t));
    }
    function ke(e, t, r) {
        return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
    }
    function xn(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function wd(e, t, r, n, i = !0) {
        const o = ke(e, t, r), s = ke(e, t, n), a = ke(r, n, e), d = ke(r, n, t);
        return (o > 0 && s < 0 || o < 0 && s > 0) && (a > 0 && d < 0 || a < 0 && d > 0) ? !0 : i ? !!(o === 0 && Nn(e, r, t) || s === 0 && Nn(e, n, t) || a === 0 && Nn(r, e, n) || d === 0 && Nn(r, t, n)) : !1;
    }
    function Nn(e, t, r) {
        return t.x <= Math.max(e.x, r.x) && t.x >= Math.min(e.x, r.x) && t.y <= Math.max(e.y, r.y) && t.y >= Math.min(e.y, r.y);
    }
    function Eu(e, t) {
        const r = Math.min(e.x, t.x), n = Math.max(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.y, t.y);
        let s = e;
        do {
            const a = s.next;
            if (s.x > n && a.x > n || s.x < r && a.x < r || s.y > o && a.y > o || s.y < i && a.y < i) {
                s = a;
                continue;
            }
            if (s.i !== e.i && a.i !== e.i && s.i !== t.i && a.i !== t.i && wd(s, a, e, t)) return !0;
            s = a;
        }while (s !== e);
        return !1;
    }
    function Sn(e, t) {
        return ke(e.prev, e, e.next) < 0 ? ke(e, t, e.next) >= 0 && ke(e, e.prev, t) >= 0 : ke(e, t, e.prev) < 0 || ke(e, e.next, t) < 0;
    }
    function Au(e, t) {
        let r = e, n = !1;
        const i = (e.x + t.x) / 2, o = (e.y + t.y) / 2;
        do {
            const s = r.next;
            r.y > o != s.y > o && i < (s.x - r.x) * (o - r.y) / (s.y - r.y) + r.x && (n = !n), r = s;
        }while (r !== e);
        return n;
    }
    function xd(e, t) {
        const r = Po(e.i, e.x, e.y), n = Po(t.i, t.x, t.y), i = e.next, o = t.prev;
        return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n;
    }
    function ma(e, t, r, n) {
        const i = Po(e, t, r);
        return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
    }
    function kn(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), _o && wu(e.prev, e.next);
    }
    function Po(e, t, r) {
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
    function Ou(e, t, r, n) {
        let i = 0;
        for(let o = t, s = r - n; o < r; o += n)i += (e[s] - e[o]) * (e[o + 1] + e[s + 1]), s = o;
        return i;
    }
    const Pu = 1;
    L0 = function(e, t, r) {
        return Ru({
            version: Pu,
            identity: e,
            revision: t,
            profile: r
        });
    };
    function Ru(e) {
        return Object.freeze(e.identity), Object.freeze(e.revision), Object.freeze(e), e;
    }
    function Ro(e) {
        return e !== null && typeof e == "object";
    }
    function Mu(e) {
        const t = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && t !== Object.prototype && t !== null) throw new Error("mutation payload and state must contain only plain structured data");
    }
    function Sd(e, t) {
        if (!(!Ro(e) || t.has(e))) {
            t.add(e);
            for (const r of Object.values(e))Sd(r, t);
        }
    }
    function Cu(e, t) {
        if (Array.isArray(e) !== Array.isArray(t) || Array.isArray(e) && e.length !== t.length || !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
        const r = Object.keys(e), n = Object.keys(t);
        return r.length === n.length && n.every((i)=>Object.hasOwn(e, i));
    }
    function $u(e) {
        return Array.isArray(e) ? new Array(e.length) : Object.create(Object.getPrototypeOf(e));
    }
    function Du(e, t, r) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        });
    }
    function Tu(e, t) {
        const r = new WeakSet;
        Sd(e, r);
        const n = new WeakMap;
        let i = 0, o = 0;
        const s = (d, c)=>{
            if (typeof c == "function" || typeof c == "symbol") throw new Error("mutation payload and state must contain only plain structured data");
            if (!Ro(c)) return c;
            if (Mu(c), r.has(c) && Object.isFrozen(c)) return o += 1, c;
            if (n.has(c)) return n.get(c);
            const l = Ro(d) && Cu(d, c) ? d : void 0, f = $u(c);
            n.set(c, f);
            let u = l !== void 0;
            for (const h of Object.keys(c)){
                const m = l === void 0 ? void 0 : l[h], I = s(m, c[h]);
                Du(f, h, I), u && I !== m && (u = !1);
            }
            return u && l !== void 0 && r.has(l) && Object.isFrozen(l) ? (n.set(c, l), o += 1, l) : (i += 1, Object.freeze(f));
        }, a = s(e, t);
        return Object.freeze({
            state: a,
            stats: Object.freeze({
                allocatedNodes: i,
                sharedNodes: o
            })
        });
    }
    function Gt(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function ls(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`${t} must be a non-negative safe integer`);
    }
    function kd(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return e;
        t.add(e);
        for (const r of Object.values(e))kd(r, t);
        return Object.freeze(e);
    }
    function Fd(e, t = new WeakSet) {
        if (e === null || typeof e != "object" || t.has(e)) return;
        t.add(e);
        const r = Object.getPrototypeOf(e);
        if (!Array.isArray(e) && r !== Object.prototype && r !== null) throw new Error("mutation payload and state must contain only plain structured data");
        for (const n of Object.values(e))Fd(n, t);
    }
    function vd(e) {
        return Fd(e), kd(structuredClone(e));
    }
    H0 = function(e) {
        if (Gt(e.intentId, "intentId"), Gt(e.bodyId, "bodyId"), Gt(e.operation, "operation"), ls(e.baseRevision, "baseRevision"), e.mode !== void 0 && e.mode !== "commit" && e.mode !== "preview") throw new Error("mode must be commit or preview");
        return Object.freeze({
            intentId: e.intentId,
            bodyId: e.bodyId,
            baseRevision: e.baseRevision,
            operation: e.operation,
            mode: e.mode ?? "commit",
            payload: vd(e.payload)
        });
    };
    q0 = function(e) {
        return Gt(e.bodyId, "bodyId"), ls(e.revision, "revision"), Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision,
            baseRevision: null,
            phase: "committed",
            intentId: null,
            state: vd(e.state)
        });
    };
    U0 = function(e, t, r) {
        if (e.phase !== "committed") throw new Error("mutation base must be a committed revision");
        if (t.bodyId !== e.bodyId) throw new Error("mutation intent Body does not match its base revision");
        if (t.baseRevision !== e.revision) throw new Error("mutation intent base revision is stale");
        ls(e.revision + 1, "candidate revision");
        const n = r(e.state, t.payload), i = Tu(e.state, n);
        return Object.freeze({
            bodyId: e.bodyId,
            revision: e.revision + 1,
            baseRevision: e.revision,
            phase: t.mode === "preview" ? "preview" : "candidate",
            intentId: t.intentId,
            state: i.state
        });
    };
    W0 = function(e, t) {
        return Gt(t, "evaluationId"), Object.freeze({
            status: "accepted",
            evaluationId: t,
            candidate: e
        });
    };
    G0 = function(e, t, r) {
        return Gt(t, "evaluationId"), Gt(r, "diagnostic"), Object.freeze({
            status: "rejected",
            evaluationId: t,
            candidate: e,
            diagnostic: r
        });
    };
    function Bu(e, t) {
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
    Y0 = class {
        _current;
        constructor(t){
            if (t.phase !== "committed") throw new Error("initial mutation root must be committed");
            this._current = t;
        }
        get current() {
            return this._current;
        }
        commit(t) {
            const r = Bu(this._current, t);
            return r.status === "committed" && (this._current = r.committedRevision), r;
        }
    };
    const ju = new Set([
        "solidid",
        "mesh",
        "occhandle"
    ]);
    function zu(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function ya(e, t) {
        if (e.trim().length === 0) throw new Error(`${t} must not be empty`);
    }
    function _d(e, t) {
        if (ju.has(zu(e))) throw new Error(`${t}.${e} is evaluation state and cannot be persisted`);
    }
    function mi(e, t, r, n) {
        if (e === null || typeof e == "string" || typeof e == "boolean") return;
        if (typeof e == "number") {
            if (!Number.isFinite(e)) throw new Error(`${t} must contain only finite numbers`);
            return;
        }
        if (typeof e != "object") throw new Error(`${t} must contain only JSON values`);
        if (r.has(e)) throw new Error(`${t} must not contain cycles`);
        const i = new Set(r);
        if (i.add(e), Array.isArray(e)) {
            e.forEach((s, a)=>mi(s, `${t}[${a}]`, i, n));
            return;
        }
        const o = Object.getPrototypeOf(e);
        if (o !== Object.prototype && o !== null) throw new Error(`${t} must contain only plain JSON objects`);
        for (const [s, a] of Object.entries(e))n || _d(s, t), mi(a, `${t}.${s}`, i, n);
    }
    function us(e) {
        if (e !== null && typeof e == "object") {
            for (const t of Object.values(e))us(t);
            Object.freeze(e);
        }
        return e;
    }
    function ga(e, t) {
        for (const [r, n] of Object.entries(e))_d(r, t), mi(n, `${t}.${r}`, new Set, !1);
        return us(structuredClone(e));
    }
    function fs(e) {
        for (const [t, r] of Object.entries(e))mi(r, `outputs.${t}`, new Set, !0);
        return us(structuredClone(e));
    }
    function Nr(e) {
        if (ya(e.id, "FeatureEnvelope.id"), ya(e.typeId, "FeatureEnvelope.typeId"), !Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("FeatureEnvelope.timestamp must be a non-negative safe integer");
        const t = ga(e.parameters ?? {}, "parameters"), r = ga(e.references ?? {}, "references");
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
    const Nu = new Set([
        "clean",
        "dirty",
        "failed",
        "blocked",
        "unsupported"
    ]);
    function Vu(e) {
        return fs(e);
    }
    function Ku(e) {
        if (e.featureId.trim().length === 0) throw new Error("FeatureEvaluationState.featureId must not be empty");
        if (!Number.isSafeInteger(e.revision) || e.revision < 0) throw new Error("FeatureEvaluationState.revision must be a non-negative safe integer");
        if (!Nu.has(e.status)) throw new Error(`Invalid FeatureEvaluationState.status: ${String(e.status)}`);
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
            outputs: Vu(e.outputs ?? {}),
            diagnostics: t,
            runtimeArtifacts: Object.freeze({
                ...e.runtimeArtifacts ?? {}
            })
        });
    }
    const Ed = Object.freeze([
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
    ]), Lu = new Set([
        "id",
        "type",
        "name",
        "suppressed",
        "timestamp"
    ]);
    new Set(Ed);
    const Hu = Object.freeze({
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
    function Ad(e) {
        return e.replace(/[-_\s]/g, "").toLowerCase();
    }
    function qu(e) {
        const t = Ad(e);
        return t === "solidid" || t === "mesh" || t === "occhandle" || t.includes("occ") && t.endsWith("handle");
    }
    function Uu(e, t) {
        return Ad(e) === "solidid" && (t === null || typeof t == "string");
    }
    function Wu(e) {
        if (e.id.trim().length === 0 || e.type.trim().length === 0) throw new Error("Legacy Feature id and type must not be empty");
        if (!Number.isSafeInteger(e.timestamp) || e.timestamp < 0) throw new Error("Legacy Feature timestamp must be a non-negative safe integer");
    }
    function Gu(e, t = {}) {
        const r = e;
        Wu(r);
        const n = new Set([
            "dependencyIds",
            ...Hu[r.type] ?? [],
            ...t.referenceKeys ?? []
        ]), i = {}, o = {}, s = {}, a = {};
        for (const [l, f] of Object.entries(r))Lu.has(l) || f === void 0 || (qu(l) ? Uu(l, f) ? s[l] = f : a[l] = f : n.has(l) ? o[l] = f : i[l] = f);
        const d = Nr({
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
            evaluationState: Ku({
                featureId: r.id,
                revision: t.evaluationRevision ?? 0,
                status: t.evaluationStatus ?? (c ? "clean" : "dirty"),
                outputs: s,
                runtimeArtifacts: a
            })
        });
    }
    function Od(e, t) {
        for (const [r, n] of Object.entries(t)){
            if (Object.hasOwn(e, r)) throw new Error(`Legacy Feature field collision: ${r}`);
            e[r] = n;
        }
    }
    function ao(e, t) {
        Od(e, structuredClone(t));
    }
    function Yu(e, t) {
        if (t && t.featureId !== e.id) throw new Error("Evaluation state does not belong to FeatureEnvelope");
        const r = {
            id: e.id,
            type: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp
        };
        return ao(r, e.parameters), ao(r, e.references), t && (ao(r, t.outputs), Od(r, t.runtimeArtifacts)), r;
    }
    function Ju(e) {
        const t = Nr({
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
    const Zu = Object.freeze([
        "info",
        "warning",
        "error"
    ]);
    function co(e, t) {
        if (e.trim().length === 0) throw new Error(`Diagnostic.${t} must not be empty`);
        return e;
    }
    function Xu(e) {
        if (!Zu.includes(e.severity)) throw new Error(`Invalid Diagnostic.severity: ${String(e.severity)}`);
        const t = e.path === void 0 ? void 0 : co(e.path, "path");
        return Object.freeze({
            severity: e.severity,
            code: co(e.code, "code"),
            message: co(e.message, "message"),
            ...t ? {
                path: t
            } : {},
            details: fs(e.details ?? {})
        });
    }
    class zi extends Error {
        code;
        producerFeatureId;
        outputKey;
        semanticId;
        constructor(t, r, n){
            super(r), this.name = "SemanticIdentityValidationError", this.code = t, this.producerFeatureId = n.producerFeatureId, this.outputKey = n.outputKey, this.semanticId = n.semanticId;
        }
    }
    const Qu = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, ef = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function Pd(e) {
        return e.trim().toLowerCase();
    }
    function ps(e, t = {}) {
        const r = Pd(e);
        if (!Qu.test(r)) throw new zi("invalid-output-key", `Invalid semantic outputKey ${JSON.stringify(e)}`, {
            producerFeatureId: t.producerFeatureId ?? "",
            outputKey: e,
            semanticId: t.semanticId
        });
        return r;
    }
    function tf(e, t) {
        const r = Pd(e);
        if (!ef.test(r)) throw new zi("invalid-semantic-id", `Invalid semanticId ${JSON.stringify(e)} for producer ${JSON.stringify(t.producerFeatureId)} outputKey ${JSON.stringify(t.outputKey)}`, {
            ...t,
            semanticId: e
        });
        return r;
    }
    function Mo(e) {
        const t = e.producerFeatureId.trim();
        if (t.length === 0) throw new zi("invalid-producer-feature-id", "Semantic identity producerFeatureId must not be empty", e);
        const r = ps(e.outputKey, e);
        return Object.freeze({
            producerFeatureId: t,
            outputKey: r,
            semanticId: tf(e.semanticId, {
                producerFeatureId: t,
                outputKey: r
            })
        });
    }
    function rf(e, t) {
        if (e.trim().length === 0) throw new Error(`SemanticOutput.${t} must not be empty`);
        return e;
    }
    function nf(e) {
        return Object.freeze({
            outputKey: ps(e.outputKey),
            kind: rf(e.kind, "kind"),
            data: fs(e.data ?? {})
        });
    }
    function of(e) {
        const t = new Set, r = Object.entries(e).map(([n, i])=>{
            const o = ps(n), s = nf(i);
            if (s.outputKey !== o) throw new Error(`SemanticOutput map key ${n} does not match outputKey ${s.outputKey}`);
            if (t.has(o)) throw new zi("duplicate-semantic-identity", `Duplicate normalized SemanticOutput map key ${JSON.stringify(o)}`, {
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
    const sf = Object.freeze([
        "success",
        "failed",
        "blocked",
        "unsupported"
    ]), af = Object.freeze({
        generated: Object.freeze([]),
        modified: Object.freeze([]),
        deleted: Object.freeze([])
    });
    function Ni(e, t) {
        if (e.trim().length === 0) throw new Error(`FeatureBuildResult.${t} must not be empty`);
        return e;
    }
    function df(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("FeatureBuildResult.featureRevision must be a non-negative safe integer");
        return e;
    }
    function cf(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("FeatureBuildResult.featurePayloadVersion must be a positive safe integer");
        return e;
    }
    function hs(e, t) {
        const r = e.map((n)=>Ni(n, t));
        return Object.freeze([
            ...new Set(r)
        ]);
    }
    function Ia(e, t) {
        return Object.freeze({
            inputSemanticId: Ni(e.inputSemanticId, `${t}.inputSemanticId`),
            outputSemanticIds: hs(e.outputSemanticIds, `${t}.outputSemanticIds`)
        });
    }
    function lf(e = af) {
        return Object.freeze({
            generated: Object.freeze(e.generated.map((t, r)=>Ia(t, `shapeHistory.generated[${r}]`))),
            modified: Object.freeze(e.modified.map((t, r)=>Ia(t, `shapeHistory.modified[${r}]`))),
            deleted: hs(e.deleted, "shapeHistory.deleted")
        });
    }
    function uf(e) {
        if (!e) return;
        if (!Number.isFinite(e.durationMs) || e.durationMs < 0) throw new Error("FeatureBuildResult.metrics.durationMs must be finite and non-negative");
        const t = Object.fromEntries(Object.entries(e.counters ?? {}).map(([r, n])=>{
            if (Ni(r, "metrics counter key"), !Number.isFinite(n) || n < 0) throw new Error(`FeatureBuildResult.metrics.${r} must be finite and non-negative`);
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
    ze = function(e) {
        if (!sf.includes(e.status)) throw new Error(`Invalid FeatureBuildResult.status: ${String(e.status)}`);
        const t = Object.freeze((e.diagnostics ?? []).map((i)=>Xu(i)));
        if (e.status !== "success" && t.length === 0) throw new Error(`FeatureBuildResult ${e.status} requires a diagnostic`);
        const r = uf(e.metrics), n = {
            featureId: Ni(e.featureId, "featureId"),
            featureRevision: df(e.featureRevision),
            featurePayloadVersion: cf(e.featurePayloadVersion),
            outputs: of(e.status === "success" ? e.outputs ?? {} : {}),
            shapeHistory: lf(e.status === "success" ? e.shapeHistory : void 0),
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
            const i = hs(e.blockedByFeatureIds, "blockedByFeatureIds");
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
    class Rd extends Error {
        cycle;
        constructor(t){
            super(`Feature dependency cycle: ${t.join(" -> ")}`), this.name = "CycleDetectedError", this.cycle = t;
        }
    }
    function Md(e, t, r) {
        const n = ms(e, r);
        if (n) throw new Rd(n);
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
    function ms(e, t) {
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
    function ba(e, t, r, n) {
        const i = new Set(e), o = new Set(i), s = [
            ...i
        ];
        for(; s.length > 0;){
            const d = s.shift();
            for (const c of n.get(d) ?? [])o.has(c) || (o.add(c), s.push(c));
        }
        return Md(t, r, n).filter((d)=>o.has(d));
    }
    class ff {
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
            return Md(this._nodeIds, this._dependencies, this._dependents);
        }
        findCycle() {
            return ms(this._nodeIds, this._dependents);
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
            return ba([
                t
            ], this._nodeIds, this._dependencies, this._dependents);
        }
        getDownstreamClosure(t) {
            return ba(t, this._nodeIds, this._dependencies, this._dependents);
        }
    }
    function wa(e, t, r) {
        const n = r.get(e) - r.get(t);
        return n !== 0 ? n : e < t ? -1 : e > t ? 1 : 0;
    }
    function pf(e, t) {
        const r = e.nodeIds(), n = new Set(r);
        if (t.length !== r.length) throw new Error("FeatureExecutionPlanner historyOrder must contain every graph Feature exactly once");
        const i = new Map;
        return t.forEach((o, s)=>{
            if (!n.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains unknown Feature ${o}`);
            if (i.has(o)) throw new Error(`FeatureExecutionPlanner historyOrder contains duplicate Feature ${o}`);
            i.set(o, s);
        }), i;
    }
    function hf(e, t) {
        const r = pf(e, t), n = e.findCycle();
        if (n) throw new Rd(n);
        const i = new Map(e.nodeIds().map((d)=>[
                d,
                e.dependenciesOf(d).length
            ])), o = e.nodeIds().filter((d)=>i.get(d) === 0).sort((d, c)=>wa(d, c, r)), s = [];
        for(; o.length > 0;){
            const d = o.shift();
            s.push(Object.freeze({
                featureId: d,
                historyIndex: r.get(d)
            }));
            for (const c of e.dependentsOf(d)){
                const l = i.get(c) - 1;
                i.set(c, l), l === 0 && o.push(c);
            }
            o.sort((c, l)=>wa(c, l, r));
        }
        const a = Object.freeze(s);
        return Object.freeze({
            steps: a,
            featureIds: Object.freeze(a.map((d)=>d.featureId))
        });
    }
    function mf(e) {
        const t = e.map((r)=>r.key);
        if (new Set(t).size !== t.length) throw new Error("Feature reference schema contains duplicate keys");
        return Object.freeze({
            fields: Object.freeze(e.map((r)=>Object.freeze({
                    ...r
                })))
        });
    }
    class Cd extends Error {
        code;
        identity;
        constructor(t, r, n){
            super(r), this.name = "ShapeHistoryValidationError", this.code = t, this.identity = n;
        }
    }
    function Xt(e) {
        return [
            e.producerFeatureId,
            e.outputKey,
            e.semanticId
        ].join("\0");
    }
    function Co(e, t) {
        const r = Xt(e), n = Xt(t);
        return r < n ? -1 : r > n ? 1 : 0;
    }
    function xa(e) {
        const t = new Map;
        for (const r of e){
            const n = Mo(r.input);
            if (r.outputs.length === 0) throw new Cd("empty-history-outputs", `ShapeHistory mapping for ${JSON.stringify(n.semanticId)} must contain at least one output`, n);
            const i = Xt(n);
            let o = t.get(i);
            o || (o = {
                input: n,
                outputs: new Map
            }, t.set(i, o));
            for (const s of r.outputs){
                const a = Mo(s);
                o.outputs.set(Xt(a), a);
            }
        }
        return Object.freeze([
            ...t.values()
        ].sort((r, n)=>Co(r.input, n.input)).map((r)=>Object.freeze({
                input: r.input,
                outputs: Object.freeze([
                    ...r.outputs.values()
                ].sort(Co))
            })));
    }
    function yf(e) {
        const t = new Map;
        for (const r of e){
            const n = Mo(r);
            t.set(Xt(n), n);
        }
        return Object.freeze([
            ...t.values()
        ].sort(Co));
    }
    function Mr(e = {}) {
        const t = xa(e.generated ?? []), r = xa(e.modified ?? []), n = yf(e.deleted ?? []), i = new Set(r.map((o)=>Xt(o.input)));
        for (const o of n)if (i.has(Xt(o))) throw new Cd("deleted-modified-conflict", `Semantic identity ${JSON.stringify(o.semanticId)} cannot be both modified and deleted`, o);
        return Object.freeze({
            generated: t,
            modified: r,
            deleted: n
        });
    }
    class bt extends Error {
        typeId;
        constructor(t, r){
            super(`Feature codec ${t}: ${r}`), this.name = "FeatureCodecError", this.typeId = t;
        }
    }
    function nr(e, t, r) {
        const n = Nr({
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
    function gf(e) {
        return Object.freeze({
            parameters: e.parameters,
            references: e.references
        });
    }
    function ne() {
        return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e)=>{
            const t = Math.random() * 16 | 0;
            return (e === "x" ? t : t & 3 | 8).toString(16);
        });
    }
    Rt = class extends Error {
        featureId;
        constructor(t, r){
            super(r), this.name = "RecomputeError", this.featureId = t;
        }
    };
    function $o(e) {
        let t = 0;
        const r = e.length;
        for(let n = 0; n < r; n++){
            const i = (n + 1) % r;
            t += e[n].x * e[i].y - e[i].x * e[n].y;
        }
        return t * .5;
    }
    function Vr(e) {
        const t = e.loops.find((n)=>n.isOuter);
        if (t && t.points.length >= 3) return t;
        const r = e.loops[0];
        if (!r || r.points.length < 3) throw new Error("profileLoops: profile must have an outer loop with at least 3 points");
        return r;
    }
    function Do(e) {
        return e.loops.filter((t)=>t.isOuter && t.points.length >= 3);
    }
    function ys(e) {
        const t = Vr(e);
        return e.loops.filter((r)=>r !== t && !r.isOuter);
    }
    J0 = function(e) {
        if (e.length === 0) return new Rt("profile", "Profile must have at least one closed loop");
        const t = e.filter((o)=>o.points.length >= 3).map((o)=>({
                points: o.points.map((s)=>({
                        x: s.x,
                        y: s.y
                    })),
                area: $o(o.points),
                segments: o.segments,
                exactCurve: o.exactCurve
            }));
        if (t.length === 0) return new Rt("profile", "Profile loop must have at least 3 points");
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
            ].reverse(), c && (c = If(c))), (!c || c.length === 0) && o.exactCurve?.kind === "circle" && (c = [
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
    function If(e) {
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
    function gs(e, t) {
        if (e.loops.length === 0) return new Rt(t, "Profile has no loops");
        const r = e.loops.filter((n)=>n.isOuter);
        if (r.length === 0) return new Rt(t, "Profile missing outer loop");
        for (const n of e.loops)if (n.points.length < 3) {
            const i = n.isOuter ? "outer" : "hole";
            return new Rt(t, `${i} loop must have at least 3 points`);
        }
        for (const n of e.loops.filter((i)=>!i.isOuter)){
            const i = r.find((o)=>bf(n.points[0], o.points));
            if (!i) return new Rt(t, "Hole loop must be inside its outer boundary");
            if (Math.abs($o(n.points)) >= Math.abs($o(i.points))) return new Rt(t, "Hole loop must be smaller than the outer boundary");
        }
        return null;
    }
    function bf(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    const Vn = 64;
    $d = function(e) {
        if (e.kind === "line") return [
            e.start,
            e.end
        ];
        if (e.kind === "circle") {
            const t = Vn;
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
            const i = Math.max(2, Math.ceil(Math.abs(n) / (Math.PI * 2) * Vn));
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
            const r = Vn;
            return Array.from({
                length: r + 1
            }, (n, i)=>Dd(t, i / r));
        }
        return e.kind === "spline" ? wf(e.controls, Vn) : [];
    };
    function Dd(e, t) {
        if (e.length === 1) return {
            ...e[0]
        };
        const r = [];
        for(let n = 0; n < e.length - 1; n++)r.push({
            x: e[n].x * (1 - t) + e[n + 1].x * t,
            y: e[n].y * (1 - t) + e[n + 1].y * t
        });
        return Dd(r, t);
    }
    function Sa(e, t, r, n, i) {
        return .5 * (2 * t + (-e + r) * i + (2 * e - 5 * t + 4 * r - n) * i * i + (-e + 3 * t - 3 * r + n) * i * i * i);
    }
    function wf(e, t) {
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
                    x: Sa(i.x, o.x, s.x, a.x, c),
                    y: Sa(i.y, o.y, s.y, a.y, c)
                });
            }
        }
        return r;
    }
    Is = class {
        createFromTessellation(t, r, n) {
            const i = n.subMeshes.map((o, s)=>this._buildFaceFromSubMesh(o, s, r, n));
            return {
                id: ne(),
                name: t,
                featureId: r,
                faces: i,
                edges: [],
                tessellation: n
            };
        }
        extrude(t, r, n, i = "Extrude") {
            const o = gs(t, n);
            if (o) throw new Error(o.message);
            const { origin: s, normal: a, uAxis: d, vAxis: c } = t;
            Vr(t);
            const l = ys(t), f = Do(t).flatMap(($)=>[
                    $,
                    ...l.filter((z)=>ka(z.points[0], $.points))
                ]), u = ($, z, W)=>[
                    s[0] + d[0] * $ + c[0] * z + a[0] * W,
                    s[1] + d[1] * $ + c[1] * z + a[1] * W,
                    s[2] + d[2] * $ + c[2] * z + a[2] * W
                ], h = [];
            let m = 0;
            for (const $ of Do(t)){
                const z = [
                    $,
                    ...l.filter((N)=>ka(N.points[0], $.points))
                ], W = [], Y = [];
                for (const N of z){
                    N !== $ && Y.push(W.length / 2);
                    for (const G of N.points)W.push(G.x, G.y);
                }
                for (const N of uu(W, Y.length > 0 ? Y : void 0))h.push(m + N);
                m += z.reduce((N, G)=>N + G.points.length, 0);
            }
            const I = [], w = [];
            for (const $ of f)for (const z of $.points)I.push(...u(z.x, z.y, 0)), w.push(...u(z.x, z.y, r));
            const y = I.length / 3, x = [], b = [], g = [], S = [];
            for(let $ = 0; $ < f.length; $++){
                const z = f[$], W = z.points, Y = z.isOuter, N = z.segments && z.segments.length > 0 ? z.segments : z.exactCurve?.kind === "circle" ? [
                    {
                        kind: "circle",
                        center: z.exactCurve.center,
                        radius: z.exactCurve.radius
                    }
                ] : null;
                if (N) {
                    for(let G = 0; G < N.length; G++){
                        const Z = N[G], be = $d(Z), ee = g.length;
                        let oe = 0;
                        const we = Z.kind === "circle", De = we ? be.length : Math.max(0, be.length - 1);
                        for(let de = 0; de < De; de++){
                            const pe = de, Ge = we ? (de + 1) % be.length : de + 1, Ze = be[pe], xt = be[Ge], Dt = u(Ze.x, Ze.y, 0), ar = u(xt.x, xt.y, 0), Te = u(Ze.x, Ze.y, r), so = u(xt.x, xt.y, r);
                            let ct = ft(Ir([
                                ar[0] - Dt[0],
                                ar[1] - Dt[1],
                                ar[2] - Dt[2]
                            ], a));
                            if (Z.kind === "circle" || Z.kind === "arc") {
                                const Tt = {
                                    x: (Ze.x + xt.x) / 2,
                                    y: (Ze.y + xt.y) / 2
                                }, kt = Z.center.x, Bt = Z.center.y, Lr = u(kt + (Tt.x - kt), Bt + (Tt.y - Bt), 0), dr = u(kt, Bt, 0);
                                ct = ft([
                                    Lr[0] - dr[0],
                                    Lr[1] - dr[1],
                                    Lr[2] - dr[2]
                                ]);
                            }
                            Y || (ct = [
                                -ct[0],
                                -ct[1],
                                -ct[2]
                            ]);
                            const St = x.length / 3;
                            x.push(...Dt, ...ar, ...so, ...Te);
                            for(let Tt = 0; Tt < 4; Tt++)b.push(...ct);
                            g.push(St, St + 1, St + 2, St, St + 2, St + 3), oe += 6;
                        }
                        if (oe > 0) {
                            const de = N.length === 1 && (Z.kind === "circle" || Z.kind === "bezier" || Z.kind === "spline") ? Y ? "side" : `hole_${$ - 1}_side` : Y ? `side_${G}` : `hole_${$ - 1}_side_${G}`;
                            S.push({
                                key: de,
                                firstIndex: ee,
                                indexCount: oe
                            });
                        }
                    }
                    continue;
                }
                for(let G = 0; G < W.length; G++){
                    const Z = (G + 1) % W.length, be = u(W[G].x, W[G].y, 0), ee = u(W[Z].x, W[Z].y, 0), oe = u(W[G].x, W[G].y, r), we = u(W[Z].x, W[Z].y, r), De = [
                        ee[0] - be[0],
                        ee[1] - be[1],
                        ee[2] - be[2]
                    ];
                    let de = ft(Ir(De, a));
                    Y || (de = [
                        -de[0],
                        -de[1],
                        -de[2]
                    ]);
                    const pe = x.length / 3;
                    x.push(...be, ...ee, ...we, ...oe);
                    for(let Ge = 0; Ge < 4; Ge++)b.push(...de);
                    g.push(pe, pe + 1, pe + 2, pe, pe + 2, pe + 3), S.push({
                        key: Y ? `side_${G}` : `hole_${$ - 1}_side_${G}`,
                        firstIndex: g.length - 6,
                        indexCount: 6
                    });
                }
            }
            const F = [], R = [], A = [
                -a[0],
                -a[1],
                -a[2]
            ];
            for(let $ = 0; $ < y; $++)F.push(...A), R.push(...a);
            const D = h.slice().reverse(), V = h.map(($)=>$ + y), X = 2 * y, k = g.map(($)=>$ + X), T = new Float32Array([
                ...I,
                ...w,
                ...x
            ]), C = new Float32Array([
                ...F,
                ...R,
                ...b
            ]), q = new Uint32Array([
                ...D,
                ...V,
                ...k
            ]), p = {
                key: "bottom",
                firstIndex: 0,
                indexCount: D.length
            }, E = {
                key: "top",
                firstIndex: D.length,
                indexCount: V.length
            }, O = D.length + V.length, M = S.map(($)=>({
                    key: $.key,
                    firstIndex: O + $.firstIndex,
                    indexCount: $.indexCount
                })), P = {
                positions: T,
                normals: C,
                indices: q,
                subMeshes: [
                    p,
                    E,
                    ...M
                ]
            }, _ = P.subMeshes.map(($, z)=>this._buildFaceFromSubMesh($, z, n, P)), v = new Map(_.map(($)=>[
                    $.provenance.role,
                    $.id
                ])), B = this._buildExtrudeEdges(f, u, r, n, v);
            return {
                id: ne(),
                name: i,
                featureId: n,
                faces: _,
                edges: B,
                tessellation: P
            };
        }
        revolve(t, r, n, i, o, s = "Revolve") {
            const { origin: a, normal: d, uAxis: c, vAxis: l, loops: f } = t, u = f.find((A)=>A.isOuter) ?? f[0];
            if (!u || u.points.length < 2) throw new Error("MeshBRepBackend.revolve: profile must have at least 2 points");
            const h = this._normalize(n), m = (A, D)=>[
                    a[0] + c[0] * A + l[0] * D,
                    a[1] + c[1] * A + l[1] * D,
                    a[2] + c[2] * A + l[2] * D
                ], I = u.points.map((A)=>m(A.x, A.y)), w = Math.max(12, Math.ceil(Math.abs(i) / (Math.PI / 16))), y = [];
            for(let A = 0; A <= w; A++){
                const D = A / w * i;
                y.push(I.map((V)=>this._rotateAroundAxis(V, r, h, D)));
            }
            const x = [], b = [], g = [], S = I.length;
            for (const A of y)for (const D of A)x.push(...D), b.push(0, 0, 0);
            for(let A = 0; A < w; A++)for(let D = 0; D < S; D++){
                const V = (D + 1) % S, X = A * S + D, k = A * S + V, T = (A + 1) * S + V, C = (A + 1) * S + D;
                g.push(X, k, T, X, T, C);
            }
            this._accumulateNormals(x, g, b);
            const F = {
                positions: new Float32Array(x),
                normals: new Float32Array(b),
                indices: new Uint32Array(g),
                subMeshes: [
                    {
                        key: "revolve",
                        firstIndex: 0,
                        indexCount: g.length
                    }
                ]
            }, R = F.subMeshes.map((A, D)=>this._buildFaceFromSubMesh(A, D, o, F));
            return {
                id: ne(),
                name: s,
                featureId: o,
                faces: R,
                edges: [],
                tessellation: F
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
            const d = t.tessellation.normals ?? new Float32Array(o.length), c = r.tessellation.normals ?? new Float32Array(s.length), l = new Float32Array(d.length + c.length);
            l.set(d, 0), l.set(c, d.length);
            const f = o.length / 3, u = t.tessellation.indices ?? new Uint32Array(0), h = r.tessellation.indices ?? new Uint32Array(0), m = new Uint32Array(u.length + h.length);
            m.set(u, 0);
            for(let y = 0; y < h.length; y++)m[u.length + y] = h[y] + f;
            const I = {
                positions: a,
                normals: l,
                indices: m,
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
            }, w = I.subMeshes.map((y, x)=>this._buildFaceFromSubMesh(y, x, n, I));
            return {
                id: ne(),
                name: i,
                featureId: n,
                faces: w,
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
                subMeshes: o.subMeshes.map((c)=>({
                        ...c
                    }))
            }, d = a.subMeshes.map((c, l)=>this._buildFaceFromSubMesh(c, l, n, a));
            return {
                id: ne(),
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
                id: ne(),
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
                const c = t[a].points, l = a === 0, f = a - 1;
                for(let u = 0; u < c.length; u++){
                    const h = (u + 1) % c.length, m = r(c[u].x, c[u].y, 0), I = r(c[h].x, c[h].y, 0), w = r(c[u].x, c[u].y, n), y = r(c[h].x, c[h].y, n), x = l ? `side_${u}` : `hole_${f}_side_${u}`, b = o.get(x) ?? "", g = o.get("bottom") ?? "", S = o.get("top") ?? "", F = l ? `edge_bottom_${u}` : `edge_hole_${f}_bottom_${u}`, R = l ? `edge_top_${u}` : `edge_hole_${f}_top_${u}`, A = l ? `edge_vertical_${u}` : `edge_hole_${f}_vertical_${u}`;
                    s.push(this._makeEdge(i, F, [
                        g,
                        b
                    ], m, I), this._makeEdge(i, R, [
                        S,
                        b
                    ], w, y), this._makeEdge(i, A, [
                        b,
                        ""
                    ], m, w));
                }
            }
            return s;
        }
        _makeEdge(t, r, n, i, o) {
            return {
                id: ne(),
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
            let a = 0, d = 0, c = 0, l = 0, f = 0, u = 0, h = 0;
            const m = t.indexCount / 3;
            for(let w = 0; w < m; w++){
                const y = t.firstIndex + w * 3, x = s[y], b = s[y + 1], g = s[y + 2], S = [
                    n[x * 3],
                    n[x * 3 + 1],
                    n[x * 3 + 2]
                ], F = [
                    n[b * 3],
                    n[b * 3 + 1],
                    n[b * 3 + 2]
                ], R = [
                    n[g * 3],
                    n[g * 3 + 1],
                    n[g * 3 + 2]
                ], A = (S[0] + F[0] + R[0]) / 3, D = (S[1] + F[1] + R[1]) / 3, V = (S[2] + F[2] + R[2]) / 3, X = [
                    F[0] - S[0],
                    F[1] - S[1],
                    F[2] - S[2]
                ], k = [
                    R[0] - S[0],
                    R[1] - S[1],
                    R[2] - S[2]
                ], T = Ir(X, k), C = Td(T) * .5;
                a += A * C, d += D * C, c += V * C, l += T[0], f += T[1], u += T[2], h += C;
            }
            h > 0 && (a /= h, d /= h, c /= h);
            const I = ft([
                l,
                f,
                u
            ]);
            return {
                centroid: [
                    a,
                    d,
                    c
                ],
                normal: I,
                area: h
            };
        }
        _computePlane(t, r) {
            const n = xf(t), i = ft(Ir(t, n));
            return {
                origin: r,
                normal: t,
                uAxis: n,
                vAxis: i
            };
        }
        _normalize(t) {
            return ft(t);
        }
        _rotateAroundAxis(t, r, n, i) {
            const o = [
                t[0] - r[0],
                t[1] - r[1],
                t[2] - r[2]
            ], s = n, a = Math.cos(i), d = Math.sin(i), c = o[0] * s[0] + o[1] * s[1] + o[2] * s[2], l = [
                s[1] * o[2] - s[2] * o[1],
                s[2] * o[0] - s[0] * o[2],
                s[0] * o[1] - s[1] * o[0]
            ], f = [
                o[0] * a + l[0] * d + s[0] * c * (1 - a),
                o[1] * a + l[1] * d + s[1] * c * (1 - a),
                o[2] * a + l[2] * d + s[2] * c * (1 - a)
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
                ], c = [
                    t[s * 3],
                    t[s * 3 + 1],
                    t[s * 3 + 2]
                ], l = [
                    t[a * 3],
                    t[a * 3 + 1],
                    t[a * 3 + 2]
                ], f = ft(Ir([
                    c[0] - d[0],
                    c[1] - d[1],
                    c[2] - d[2]
                ], [
                    l[0] - d[0],
                    l[1] - d[1],
                    l[2] - d[2]
                ]));
                for (const u of [
                    o,
                    s,
                    a
                ])n[u * 3] += f[0], n[u * 3 + 1] += f[1], n[u * 3 + 2] += f[2];
            }
            for(let i = 0; i < n.length; i += 3){
                const o = ft([
                    n[i],
                    n[i + 1],
                    n[i + 2]
                ]);
                n[i] = o[0], n[i + 1] = o[1], n[i + 2] = o[2];
            }
        }
    };
    function ka(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    function Ir(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Td(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    }
    function ft(e) {
        const t = Td(e);
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
    function xf(e) {
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
        ], ft(Ir(e, r));
    }
    yi = Ed;
    class cr extends Error {
        code;
        featureType;
        issues;
        constructor(t, r, n, i = []){
            super(n), this.name = "FeatureDefinitionError", this.code = t, this.featureType = r, this.issues = i;
        }
    }
    function Sf(e) {
        return Object.freeze({
            ...e
        });
    }
    function kf(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t,
                enumValues: t.enumValues ? Object.freeze([
                    ...t.enumValues
                ]) : void 0
            })));
    }
    function Ff(e) {
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
    function Kn(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                ...t
            })));
    }
    function Fa(e) {
        return Object.freeze([
            ...new Set(e.filter((t)=>t.length > 0))
        ]);
    }
    class ir {
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
                fields: kf(t.parameterSchema)
            }), n = mf(t.referenceSchema), i = [
                ...r.fields.map((o)=>o.key),
                ...n.fields.map((o)=>o.key)
            ];
            if (new Set(i).size !== i.length) throw new Error(`Feature definition ${t.type} has duplicate schema keys`);
            this.type = t.type, this.metadata = Object.freeze({
                ...t.metadata,
                typeId: t.type,
                category: t.capabilities.category
            }), this.schemaVersion = t.schemaVersion, this.capabilities = Sf(t.capabilities), this.parameterSchema = r, this.referenceSchema = n, this.codec = Object.freeze(t.codec), this.parameters = Object.freeze([
                ...n.fields.map((o)=>Object.freeze({
                        key: o.key,
                        kind: Ff(o.kind),
                        required: o.required
                    })),
                ...r.fields
            ]);
        }
        createDraft(t) {
            return this.createTypedDraft(t);
        }
        draftFromEnvelope(t, r) {
            if (t.typeId !== this.metadata.typeId) throw new cr("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            const n = this.codec.decode(gf(t));
            if (!this.isTypedDraft(n)) throw new cr("invalid-draft", this.type, `Feature codec ${this.type} returned an invalid draft`);
            return this.normalizeTypedDraft(n, r);
        }
        normalizeDraft(t, r) {
            if (!this.isTypedDraft(t)) throw new cr("invalid-draft", this.type, `Invalid ${this.type} draft shape`);
            return this.normalizeTypedDraft(t, r);
        }
        validateDraft(t, r) {
            return this.isTypedDraft(t) ? Kn(this.validateTypedDraft(this.normalizeTypedDraft(t, r), r)) : Kn([
                {
                    severity: "error",
                    code: "invalid-draft",
                    message: `Invalid ${this.type} draft shape`
                }
            ]);
        }
        collectDependencies(t, r) {
            const n = this.normalizeDraft(t, r);
            return Fa(this.collectTypedDependencies(n, r));
        }
        draftFromFeature(t, r) {
            const n = this.requireFeatureType(t);
            return this.createTypedEditDraft(n, r);
        }
        prepareDraft(t, r) {
            if (!this.isTypedDraft(t)) return Object.freeze({
                draft: t,
                dependencyIds: Object.freeze([]),
                issues: Kn([
                    {
                        severity: "error",
                        code: "invalid-draft",
                        message: `Invalid ${this.type} draft shape`
                    }
                ])
            });
            const n = this.normalizeTypedDraft(t, r), i = Kn(this.validateTypedDraft(n, r)), o = Fa(this.collectTypedDependencies(n, r));
            return Object.freeze({
                draft: n,
                dependencyIds: o,
                issues: i
            });
        }
        buildEnvelope(t, r, n) {
            const i = this.requirePreparedDraft(r, n), o = this.codec.encode(i.draft);
            return Nr({
                ...t,
                typeId: this.metadata.typeId,
                parameters: o.parameters,
                references: o.references
            });
        }
        reviseEnvelope(t, r, n) {
            if (t.typeId !== this.metadata.typeId) throw new cr("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.typeId}`);
            return this.buildEnvelope({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                timestamp: t.timestamp
            }, r, n);
        }
        createBuildSpec(t, r) {
            const n = this.draftFromEnvelope(t, r), i = this.requirePreparedDraft(n, r), o = this.codec.encode(i.draft);
            return Ju({
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
            if (t.type !== this.type) throw new cr("feature-type-mismatch", this.type, `Feature definition ${this.type} cannot handle ${t.type}`);
            return t;
        }
        requirePreparedDraft(t, r) {
            const n = this.prepareDraft(t, r), i = n.issues.filter((o)=>o.severity === "error");
            if (i.length > 0) {
                const o = i.some((s)=>s.code === "invalid-draft") ? "invalid-draft" : "draft-validation-failed";
                throw new cr(o, this.type, `Cannot materialize invalid ${this.type} draft`, n.issues);
            }
            return n;
        }
    }
    class Ln extends Error {
        code;
        featureType;
        missingTypes;
        constructor(t, r, n = {}){
            super(r), this.name = "FeatureDefinitionRegistryError", this.code = t, this.featureType = n.featureType, this.missingTypes = Object.freeze([
                ...n.missingTypes ?? []
            ]);
        }
    }
    vf = class {
        definitions = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new Ln("registry-frozen", "Feature definition registry is frozen");
            if (this.definitions.has(t.type)) throw new Ln("duplicate-definition", `Duplicate feature definition: ${t.type}`, {
                featureType: t.type
            });
            return this.definitions.set(t.type, t), this;
        }
        get(t) {
            return this.definitions.get(t);
        }
        require(t) {
            const r = this.get(t);
            if (!r) throw new Ln("unknown-definition", `Unknown feature definition: ${t}`, {
                featureType: t
            });
            return r;
        }
        list() {
            return Object.freeze(yi.flatMap((t)=>{
                const r = this.definitions.get(t);
                return r ? [
                    r
                ] : [];
            }));
        }
        missingTypes() {
            return Object.freeze(yi.filter((t)=>!this.definitions.has(t)));
        }
        assertComplete() {
            const t = this.missingTypes();
            if (t.length > 0) throw new Ln("incomplete-registry", `Feature definition registry is missing: ${t.join(", ")}`, {
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
    function ue(e, t) {
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
    function Cn(e, t) {
        if (t.length !== 3 || t.some((r)=>!Number.isFinite(r))) throw new Error(`${e} must be a finite 3D vector`);
    }
    function Bd(e) {
        if (Cn("Primitive direction", e), Math.hypot(...e) <= 1e-9) throw new Error("Primitive direction must be non-zero");
    }
    function Vi(e) {
        return ue(e.id ?? ne(), {
            name: e.name,
            type: e.type,
            dependencyIds: e.dependencyIds,
            suppressed: e.suppressed
        });
    }
    function Ki(e) {
        if (e !== "add" && e !== "cut") throw new Error("Primitive mode must be add or cut");
        return e;
    }
    _f = function(e) {
        if (!(e.length > 0) || !(e.width > 0) || !(e.height > 0)) throw new Error("Box dimensions must be positive");
        return Cn("Box origin", e.origin), {
            ...Vi({
                ...e,
                type: "box"
            }),
            type: "box",
            mode: Ki(e.mode),
            origin: [
                ...e.origin
            ],
            length: e.length,
            width: e.width,
            height: e.height,
            solidId: null
        };
    };
    jd = function(e) {
        if (!(e.radius > 0) || !(e.height > 0)) throw new Error("Cylinder radius and height must be positive");
        return Cn("Cylinder origin", e.origin), Bd(e.direction), {
            ...Vi({
                ...e,
                type: "cylinder"
            }),
            type: "cylinder",
            mode: Ki(e.mode),
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
    Ef = function(e) {
        if (!(e.bottomRadius > 0) || !(e.topRadius >= 0) || !(e.height > 0) || e.bottomRadius === 0 && e.topRadius === 0) throw new Error("Cone radii and height are invalid");
        return Cn("Cone origin", e.origin), Bd(e.direction), {
            ...Vi({
                ...e,
                type: "cone"
            }),
            type: "cone",
            mode: Ki(e.mode),
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
    Af = function(e) {
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Sphere radius must be positive");
        return Cn("Sphere center", e.center), {
            ...Vi({
                ...e,
                type: "sphere"
            }),
            type: "sphere",
            mode: Ki(e.mode),
            center: [
                ...e.center
            ],
            radius: e.radius,
            solidId: null
        };
    };
    function Of(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function zd(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function ri(e) {
        return [
            ...e
        ];
    }
    function Pf(e) {
        const { mode: t, origin: r, length: n, width: i, height: o } = e.parameters;
        if (t !== "add" && t !== "cut" || !zd(r) || typeof n != "number" || typeof i != "number" || typeof o != "number") throw new bt("box", "invalid parameter payload");
        return {
            mode: t,
            origin: ri(r),
            length: n,
            width: i,
            height: o
        };
    }
    const Rf = Object.freeze({
        encode: (e)=>nr("box", {
                mode: e.mode,
                origin: e.origin,
                length: e.length,
                width: e.width,
                height: e.height
            }, {}),
        decode: Pf
    });
    class Mf extends ir {
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
                codec: Rf
            });
        }
        isTypedDraft(t) {
            return Of(t) ? (t.mode === "add" || t.mode === "cut") && zd(t.origin) && typeof t.length == "number" && typeof t.width == "number" && typeof t.height == "number" : !1;
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
                origin: ri(t.origin),
                length: t.length,
                width: t.width,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: ri(t.origin)
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
            return t.mode === "cut" && !Cf(r) && n.push({
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
            return _f({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: ri(r.origin)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Cf(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function $f(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function gi(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function _t(e) {
        return [
            ...e
        ];
    }
    const Df = Object.freeze({
        encode: (e)=>nr("cone", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                bottomRadius: e.bottomRadius,
                topRadius: e.topRadius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, bottomRadius: i, topRadius: o, height: s } = e.parameters;
            if (t !== "add" && t !== "cut" || !gi(r) || !gi(n) || typeof i != "number" || typeof o != "number" || typeof s != "number") throw new bt("cone", "invalid parameter payload");
            return {
                mode: t,
                origin: _t(r),
                direction: _t(n),
                bottomRadius: i,
                topRadius: o,
                height: s
            };
        }
    });
    class Tf extends ir {
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
                codec: Df
            });
        }
        isTypedDraft(t) {
            return $f(t) ? (t.mode === "add" || t.mode === "cut") && gi(t.origin) && gi(t.direction) && typeof t.bottomRadius == "number" && typeof t.topRadius == "number" && typeof t.height == "number" : !1;
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
                origin: _t(t.origin),
                direction: _t(t.direction),
                bottomRadius: t.bottomRadius,
                topRadius: t.topRadius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: _t(t.origin),
                direction: _t(t.direction)
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
            }), t.mode === "cut" && !Bf(r) && n.push({
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
            return Ef({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: _t(r.origin),
                direction: _t(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Bf(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    function jf(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ii(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Et(e) {
        return [
            ...e
        ];
    }
    const zf = Object.freeze({
        encode: (e)=>nr("cylinder", {
                mode: e.mode,
                origin: e.origin,
                direction: e.direction,
                radius: e.radius,
                height: e.height
            }, {}),
        decode (e) {
            const { mode: t, origin: r, direction: n, radius: i, height: o } = e.parameters;
            if (t !== "add" && t !== "cut" || !Ii(r) || !Ii(n) || typeof i != "number" || typeof o != "number") throw new bt("cylinder", "invalid parameter payload");
            return {
                mode: t,
                origin: Et(r),
                direction: Et(n),
                radius: i,
                height: o
            };
        }
    });
    class Nf extends ir {
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
                codec: zf
            });
        }
        isTypedDraft(t) {
            return jf(t) ? (t.mode === "add" || t.mode === "cut") && Ii(t.origin) && Ii(t.direction) && typeof t.radius == "number" && typeof t.height == "number" : !1;
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
                origin: Et(t.origin),
                direction: Et(t.direction),
                radius: t.radius,
                height: t.height
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                origin: Et(t.origin),
                direction: Et(t.direction)
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
            return t.mode === "cut" && !Vf(r) && n.push({
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
            return jd({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                origin: Et(r.origin),
                direction: Et(r.direction)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function Vf(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    Kf = {
        propagateDraftSurfaces: !0,
        preserveInlyingRounds: !0,
        recreateAttachedRounds: !0,
        extendIntersectSurfaces: !1
    };
    function Nd(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r)) || Math.hypot(...e) <= 1e-9) throw new Error(`${t} must be a finite non-zero vector`);
    }
    function lo(e, t) {
        if (!Number.isFinite(e) || e <= 0 || e >= Math.PI / 2) throw new Error(`${t} must be greater than 0 and less than 90 degrees`);
    }
    function bs(e) {
        if (e.kind === "world_plane") Nd(e.normal, "Draft plane normal");
        else {
            if (e.kind === "datum_plane" && !e.featureId) throw new Error("Draft datum plane reference is empty");
            if (e.kind === "face" && !e.selector.featureId) throw new Error("Draft face reference is empty");
        }
    }
    function Lf(e) {
        if (e.kind === "edge_chain") {
            if (!e.selectors.length) throw new Error("Draft edge-chain hinge is empty");
            return;
        }
        bs(e);
    }
    function Hf(e) {
        if (e.kind === "world") Nd(e.direction, "Draft pull direction");
        else {
            if (e.kind === "datum_axis" && !e.featureId) throw new Error("Draft axis reference is empty");
            if (e.kind === "plane_normal") bs(e.plane);
            else if (e.kind === "edge" && !e.selector.featureId) throw new Error("Draft direction edge is empty");
        }
    }
    To = function(e) {
        if (!e.baseFeatureId) throw new Error("Draft requires a base feature");
        if (!e.draftFaces.length) throw new Error("Draft requires at least one draft face");
        if (e.hinges.length < 1 || e.hinges.length > 2) throw new Error("Draft requires one or two hinges");
        if (e.hinges.forEach(Lf), Hf(e.direction), lo(e.angle, "Draft angle"), lo(e.secondSideAngle, "Draft second-side angle"), e.split.kind === "reference" && bs(e.split.reference), e.split.kind === "none" && e.hinges.length > 1) throw new Error("A second Draft hinge requires a split definition");
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
            lo(r.angle, "Draft variable angle");
        }
        return {
            ...ue(e.id ?? ne(), {
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
    const Vd = "result";
    function dn(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
    }
    function Kd(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function qf(e, t) {
        return e === void 0 ? void 0 : Kd(e, t);
    }
    function Uf(e, t) {
        if (e !== void 0) {
            if (!Array.isArray(e)) throw new Error(`${t} must be an array`);
            return Object.freeze(e.map((r, n)=>Kd(r, `${t}[${n}]`)));
        }
    }
    function Wf(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ld(e, t) {
        if (e !== "face" && e !== "edge" && e !== "vertex") throw new Error(`${t} must be face, edge, or vertex`);
    }
    function Bo(e) {
        dn(e.producerFeatureId, "producerFeatureId"), dn(e.outputKey, "outputKey"), Ld(e.subshapeKind, "subshapeKind"), dn(e.semanticId, "semanticId");
        const t = qf(e.hintCentroid, "hintCentroid"), r = Uf(e.samplePoints, "samplePoints");
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
    function Gf(e, t) {
        if (!Wf(e)) throw new Error("Topology reference must be an object");
        if (Object.hasOwn(e, "producerFeatureId") || Object.hasOwn(e, "outputKey") || Object.hasOwn(e, "subshapeKind") || Object.hasOwn(e, "semanticId")) {
            if (Ld(e.subshapeKind, "subshapeKind"), e.subshapeKind !== t) throw new Error(`Expected ${t} topology reference, received ${e.subshapeKind}`);
            return Object.freeze({
                reference: Bo({
                    producerFeatureId: e.producerFeatureId,
                    outputKey: e.outputKey,
                    subshapeKind: e.subshapeKind,
                    semanticId: e.semanticId,
                    hintCentroid: e.hintCentroid,
                    samplePoints: e.samplePoints
                })
            });
        }
        dn(e.featureId, "featureId"), dn(e.role, "role");
        let n;
        if (e.occEdgeOrdinal !== void 0) {
            if (t !== "edge" || typeof e.occEdgeOrdinal != "number" || !Number.isSafeInteger(e.occEdgeOrdinal) || e.occEdgeOrdinal < 0) throw new Error("occEdgeOrdinal must be a non-negative edge ordinal");
            n = e.occEdgeOrdinal;
        }
        return Object.freeze({
            reference: Bo({
                producerFeatureId: e.featureId,
                outputKey: Vd,
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
    function Hd(e) {
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
    function bi(e, t) {
        if (e.subshapeKind && e.subshapeKind !== t) throw new Error(`Expected ${t} selector, received ${e.subshapeKind}`);
        return Bo({
            producerFeatureId: e.featureId,
            outputKey: e.outputKey ?? Vd,
            subshapeKind: t,
            semanticId: e.role,
            hintCentroid: e.hintCentroid,
            samplePoints: e.samplePoints
        });
    }
    function $n(e, t) {
        const r = Gf(e, t), n = r.reference;
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
    X0 = function(e, t, r, n) {
        return r.resolve({
            featureId: e,
            role: t,
            hintCentroid: n
        });
    };
    function Hn(e, t) {
        return `${e}:${t}`;
    }
    function Yf(e, t) {
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
    function ht(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return Math.sqrt(r * r + n * n + i * i);
    }
    function Wr(e) {
        return e.midpoint ? e.midpoint : [
            (e.startVertex[0] + e.endVertex[0]) / 2,
            (e.startVertex[1] + e.endVertex[1]) / 2,
            (e.startVertex[2] + e.endVertex[2]) / 2
        ];
    }
    function Jf(e) {
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
    qd = class {
        _byKey = new Map;
        _edgesByKey = new Map;
        _allFaces = [];
        _allEdges = [];
        static fromSolid(t, r = []) {
            const n = new qd;
            for (const i of t){
                const o = Hn(i.provenance.featureId, i.provenance.role), s = n._byKey.get(o) ?? [];
                s.push(i), n._byKey.set(o, s), n._allFaces.push(i);
            }
            for (const i of r){
                const o = Hn(i.provenance.featureId, i.provenance.role), s = n._edgesByKey.get(o) ?? [];
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
            const r = Hn(t.featureId, t.role);
            let n = this._byKey.get(r) ?? [];
            if (n.length === 0 && (n = Yf(t, this._allFaces)), n.length === 0) return {
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
                    const d = ht(t.hintCentroid, a.centroid);
                    d < o && (o = d, i = a);
                }
                if (n.filter((a)=>a.centroid && Math.abs(ht(t.hintCentroid, a.centroid) - o) < 1e-6).length === 1) return {
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
            const r = Hn(t.featureId, t.role);
            let n = this._edgesByKey.get(r) ?? [];
            if (n.length === 0) {
                const i = Jf(t);
                if (!i) return {
                    outcome: "lost",
                    edgeId: null,
                    edge: null,
                    candidates: []
                };
                if (n = this._allEdges.filter((o)=>o.provenance.featureId === t.featureId), n.length > 1 && i) {
                    let o = n[0], s = ht(i, Wr(o));
                    for (const d of n.slice(1)){
                        const c = ht(i, Wr(d));
                        c < s && (o = d, s = c);
                    }
                    const a = n.filter((d)=>Math.abs(ht(i, Wr(d)) - s) < 1e-6);
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
                    const d = Wr(a);
                    if (!d) continue;
                    const c = ht(t.hintCentroid, d);
                    c < o && (o = c, i = a);
                }
                if (n.filter((a)=>{
                    const d = Wr(a);
                    return d != null && Math.abs(ht(t.hintCentroid, d) - o) < 1e-6;
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
                const d = Zf(r, a.startVertex, a.endVertex);
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
    function Zf(e, t, r) {
        const n = [
            r[0] - t[0],
            r[1] - t[1],
            r[2] - t[2]
        ], i = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], o = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
        if (o < 1e-12) return ht(e, t);
        let s = (i[0] * n[0] + i[1] * n[1] + i[2] * n[2]) / o;
        s = Math.max(0, Math.min(1, s));
        const a = [
            t[0] + n[0] * s,
            t[1] + n[1] * s,
            t[2] + n[2] * s
        ];
        return ht(e, a);
    }
    function We(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Cr(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function Li(e) {
        return We(e) && typeof e.featureId == "string" && typeof e.role == "string";
    }
    function ws(e) {
        return We(e) ? e.kind === "world_plane" ? Cr(e.origin) && Cr(e.normal) : e.kind === "datum_plane" ? typeof e.featureId == "string" : e.kind === "face" ? Li(e.selector) : !1 : !1;
    }
    function Xf(e) {
        return We(e) ? e.kind === "edge_chain" ? Array.isArray(e.selectors) && e.selectors.every(Li) : ws(e) : !1;
    }
    function Qf(e) {
        return We(e) ? e.kind === "world" ? Cr(e.direction) : e.kind === "datum_axis" ? typeof e.featureId == "string" : e.kind === "plane_normal" ? ws(e.plane) : e.kind === "edge" ? Li(e.selector) : !1 : !1;
    }
    const jo = new Set([
        "dependent",
        "independent",
        "first_only",
        "second_only"
    ]);
    function ep(e) {
        return We(e) ? e.kind === "none" ? !0 : e.kind === "hinge" ? jo.has(e.sideMode) : e.kind === "reference" && jo.has(e.sideMode) && ws(e.reference) : !1;
    }
    function tp(e) {
        return We(e) && typeof e.id == "string" && typeof e.location == "number" && typeof e.angle == "number" && typeof e.reversed == "boolean";
    }
    function rp(e) {
        return We(e) && typeof e.propagateDraftSurfaces == "boolean" && typeof e.preserveInlyingRounds == "boolean" && typeof e.recreateAttachedRounds == "boolean" && typeof e.extendIntersectSurfaces == "boolean";
    }
    function Ud(e) {
        return We(e) && typeof e.baseFeatureId == "string" && Array.isArray(e.draftFaces) && e.draftFaces.every(Li) && Array.isArray(e.hinges) && e.hinges.every(Xf) && Qf(e.direction) && typeof e.reverseDirection == "boolean" && typeof e.angle == "number" && typeof e.reverseAngle == "boolean" && ep(e.split) && Array.isArray(e.variableAngles) && e.variableAngles.every(tp) && typeof e.secondSideAngle == "number" && typeof e.reverseSecondSideAngle == "boolean" && rp(e.options);
    }
    function Wd(e) {
        return bi(e, "face");
    }
    function Gd(e) {
        return bi(e, "edge");
    }
    function xs(e) {
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
                    selector: Wd(e.selector)
                };
        }
    }
    function np(e) {
        return e.kind === "edge_chain" ? {
            kind: e.kind,
            selectors: e.selectors.map(Gd)
        } : xs(e);
    }
    function ip(e) {
        switch(e.kind){
            case "world":
            case "datum_axis":
                return structuredClone(e);
            case "plane_normal":
                return {
                    kind: e.kind,
                    plane: xs(e.plane)
                };
            case "edge":
                return {
                    kind: e.kind,
                    selector: Gd(e.selector)
                };
        }
    }
    function op(e) {
        return e.kind !== "reference" ? structuredClone(e) : {
            kind: e.kind,
            sideMode: e.sideMode,
            reference: xs(e.reference)
        };
    }
    function Ss(e) {
        if (!We(e)) throw new Error("invalid Draft plane reference");
        if (e.kind === "world_plane" && Cr(e.origin) && Cr(e.normal)) return {
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
            selector: $n(e.selector, "face")
        };
        throw new Error("invalid Draft plane reference");
    }
    function sp(e) {
        if (We(e) && e.kind === "edge_chain") {
            if (!Array.isArray(e.selectors)) throw new Error("invalid Draft edge chain");
            return {
                kind: "edge_chain",
                selectors: e.selectors.map((t)=>$n(t, "edge"))
            };
        }
        return Ss(e);
    }
    function ap(e) {
        if (!We(e)) throw new Error("invalid Draft direction");
        if (e.kind === "world" && Cr(e.direction)) return {
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
            plane: Ss(e.plane)
        };
        if (e.kind === "edge") return {
            kind: "edge",
            selector: $n(e.selector, "edge")
        };
        throw new Error("invalid Draft direction");
    }
    function dp(e) {
        if (!We(e)) throw new Error("invalid Draft split");
        if (e.kind === "none") return {
            kind: "none"
        };
        if ((e.kind === "hinge" || e.kind === "reference") && jo.has(e.sideMode)) return e.kind === "hinge" ? {
            kind: "hinge",
            sideMode: e.sideMode
        } : {
            kind: "reference",
            sideMode: e.sideMode,
            reference: Ss(e.reference)
        };
        throw new Error("invalid Draft split");
    }
    function cp(e) {
        try {
            const t = {
                baseFeatureId: e.references.baseFeatureId,
                draftFaces: Array.isArray(e.references.draftFaces) ? e.references.draftFaces.map((r)=>$n(r, "face")) : e.references.draftFaces,
                hinges: Array.isArray(e.references.hinges) ? e.references.hinges.map(sp) : e.references.hinges,
                direction: ap(e.references.direction),
                split: dp(e.references.split),
                reverseDirection: e.parameters.reverseDirection,
                angle: e.parameters.angle,
                reverseAngle: e.parameters.reverseAngle,
                variableAngles: e.parameters.variableAngles,
                secondSideAngle: e.parameters.secondSideAngle,
                reverseSecondSideAngle: e.parameters.reverseSecondSideAngle,
                options: e.parameters.options
            };
            if (!Ud(t)) throw new Error("invalid Draft payload shape");
            return structuredClone(t);
        } catch (t) {
            throw new bt("draft", t instanceof Error ? t.message : "invalid payload");
        }
    }
    const lp = Object.freeze({
        encode (e) {
            return nr("draft", {
                reverseDirection: e.reverseDirection,
                angle: e.angle,
                reverseAngle: e.reverseAngle,
                variableAngles: e.variableAngles,
                secondSideAngle: e.secondSideAngle,
                reverseSecondSideAngle: e.reverseSecondSideAngle,
                options: e.options
            }, {
                baseFeatureId: e.baseFeatureId,
                draftFaces: e.draftFaces.map(Wd),
                hinges: e.hinges.map(np),
                direction: ip(e.direction),
                split: op(e.split)
            });
        },
        decode: cp
    });
    function ks(e) {
        return e.kind === "world_plane" ? [] : e.kind === "datum_plane" ? [
            e.featureId
        ] : [
            e.selector.featureId
        ];
    }
    function up(e) {
        return e.kind === "edge_chain" ? e.selectors.map((t)=>t.featureId) : ks(e);
    }
    function fp(e) {
        switch(e.kind){
            case "world":
                return [];
            case "datum_axis":
                return [
                    e.featureId
                ];
            case "plane_normal":
                return ks(e.plane);
            case "edge":
                return [
                    e.selector.featureId
                ];
        }
    }
    function pp(e) {
        return e.kind === "reference" ? ks(e.reference) : [];
    }
    function va(e) {
        return [
            e.baseFeatureId,
            ...e.draftFaces.map((t)=>t.featureId),
            ...e.hinges.flatMap(up),
            ...fp(e.direction),
            ...pp(e.split)
        ];
    }
    function hp(e, t) {
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
    class mp extends ir {
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
                codec: lp
            });
        }
        isTypedDraft(t) {
            return Ud(t);
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
                options: structuredClone(Kf)
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
            const n = hp(va(t), r);
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
                To({
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
            return va(t);
        }
        buildTypedFeature(t, r, n, i) {
            return To({
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
    Yd = function(e) {
        return {
            ...ue(e.id ?? ne(), {
                name: e.name,
                type: "chamfer",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "chamfer",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(Hd),
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
    Jd = function(e) {
        return {
            ...ue(e.id ?? ne(), {
                name: e.name,
                type: "fillet",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "fillet",
            baseFeatureId: e.baseFeatureId,
            edgeSelectors: e.edgeSelectors.map(Hd),
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
    yp = function(e) {
        return {
            ...ue(e.id ?? ne(), {
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
    function qt(e) {
        return e !== null && typeof e == "object" && !Array.isArray(e);
    }
    function wi(e) {
        if (Array.isArray(e)) return e.map(wi);
        if (!qt(e)) return structuredClone(e);
        const t = Object.getPrototypeOf(e);
        return t !== Object.prototype && t !== null ? structuredClone(e) : Object.fromEntries(Object.entries(e).filter(([r, n])=>r !== "occEdgeOrdinal" && n !== void 0).map(([r, n])=>[
                r,
                wi(n)
            ]));
    }
    function gp(e) {
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
    function _a(e, t) {
        const r = {};
        for (const n of t)Object.hasOwn(e, n) && e[n] !== void 0 && (r[n] = wi(e[n]));
        return r;
    }
    function Fs(e) {
        const t = wi(e);
        return Object.freeze(t);
    }
    function zo(e, t, r) {
        return !qt(e) || Object.keys(e).some((n)=>!t.all.has(n)) || !t.required.every((n)=>Object.hasOwn(e, n) && e[n] !== void 0 && e[n] !== null && e[n] !== "") ? !1 : r.parameterSchema.every((n)=>{
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
                    return typeof i == "string" && i.length > 0 || qt(i);
                case "feature_list":
                    return Array.isArray(i) && i.every((o)=>typeof o == "string" && o.length > 0 || qt(o));
                case "topology":
                    return qt(i);
                case "topology_list":
                    return Array.isArray(i) && i.every(qt);
            }
        });
    }
    function Ip(e, t) {
        return Object.freeze({
            encode (r) {
                if (!zo(r, t, e)) throw new bt(e.type, "invalid structured draft payload");
                return nr(e.type, _a(r, t.parameter), _a(r, t.reference));
            },
            decode (r) {
                if (Object.keys(r.parameters).some((i)=>!t.parameter.includes(i)) || Object.keys(r.references).some((i)=>!t.reference.includes(i))) throw new bt(e.type, "payload field is on the wrong plane");
                const n = Fs({
                    ...r.parameters,
                    ...r.references
                });
                if (!zo(n, t, e)) throw new bt(e.type, "invalid structured payload fields");
                return n;
            }
        });
    }
    class ye extends ir {
        definitionOptions;
        payloadKeys;
        constructor(t){
            const r = gp(t);
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
                codec: Ip(t, r)
            }), this.definitionOptions = t, this.payloadKeys = r;
        }
        isTypedDraft(t) {
            return zo(t, this.payloadKeys, this.definitionOptions);
        }
        createTypedDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.createDraft(t));
        }
        createTypedEditDraft(t) {
            return this.normalizeTypedDraft(this.definitionOptions.draftFromFeature(t));
        }
        normalizeTypedDraft(t) {
            return Fs(t);
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
    function ge(e) {
        const { id: t, name: r, type: n, suppressed: i, dependencyIds: o, timestamp: s, ...a } = e;
        return delete a.solidId, delete a.plane, Fs(a);
    }
    function Fe(...e) {
        const t = [], r = (n)=>{
            if (typeof n == "string") {
                n.trim() && t.push(n);
                return;
            }
            if (Array.isArray(n)) {
                n.forEach(r);
                return;
            }
            if (qt(n)) for (const [i, o] of Object.entries(n))(i === "featureId" || i.endsWith("FeatureId") || i.endsWith("DatumId") || i === "sketchId" || i.endsWith("SketchId") || i.endsWith("FeatureIds") || i.endsWith("SketchIds") || typeof o == "object") && r(o);
        };
        return e.forEach(r), Object.freeze([
            ...new Set(t)
        ]);
    }
    function Ie(e, t, r, n) {
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
    const vs = Object.freeze({
        category: "dress_up",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function _s(e) {
        return e.priorSolidFeatureId ?? "";
    }
    function Es(e, t) {
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
    function xi(e, t, r = !1) {
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
    class bp extends ye {
        constructor(){
            super({
                type: "fillet",
                labelKey: "partDesign.feature.fillet",
                iconKey: "part-design-fillet",
                sortOrder: 600,
                capabilities: vs,
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
                        baseFeatureId: _s(t),
                        edgeSelectors: [],
                        radius: 1
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...xi(t, "radius"),
                        ...Es(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>Ie(t, r, n, Jd)
            });
        }
    }
    class wp extends ye {
        constructor(){
            super({
                type: "chamfer",
                labelKey: "partDesign.feature.chamfer",
                iconKey: "part-design-chamfer",
                sortOrder: 610,
                capabilities: vs,
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
                        baseFeatureId: _s(t),
                        edgeSelectors: [],
                        distance: 1
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.edgeSelectors),
                validate: (t)=>[
                        ...xi(t, "distance"),
                        ...xi(t, "secondDistance", !0),
                        ...Es(t, "edgeSelectors")
                    ],
                build: (t, r, n)=>Ie(t, r, n, Yd)
            });
        }
    }
    class xp extends ye {
        constructor(){
            super({
                type: "thickness",
                labelKey: "partDesign.feature.thickness",
                iconKey: "part-design-thickness",
                sortOrder: 620,
                capabilities: vs,
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
                        baseFeatureId: _s(t),
                        removedFaceSelectors: [],
                        thickness: 1,
                        inward: !1
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.removedFaceSelectors),
                validate: (t)=>[
                        ...xi(t, "thickness"),
                        ...Es(t, "removedFaceSelectors")
                    ],
                build: (t, r, n)=>Ie(t, r, n, yp)
            });
        }
    }
    function Zd(e, t = "depth") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid extrude ${t}: expected positive finite number`);
        return e;
    }
    function Xd(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw new Error("Invalid extrude secondDepth: expected non-negative finite number");
        return e;
    }
    function Qd(e) {
        return Number.isFinite(e.startOffset) && Number.isFinite(e.endOffset);
    }
    Hi = function(e, t) {
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
    function Sp(e) {
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
    ec = function(e) {
        if (Qd(e)) return Hi(e.startOffset, e.endOffset);
        const t = Zd(e.depth), r = Xd(e.secondDepth);
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
    As = function(e) {
        if (e.mode !== "add" && e.mode !== "cut") throw new Error(`Invalid extrude mode: ${String(e.mode)}`);
        const t = Qd(e) ? Hi(e.startOffset, e.endOffset) : ec({
            depth: Zd(e.depth),
            secondDepth: Xd(e.secondDepth ?? 0),
            symmetric: e.symmetric ?? !1,
            mode: e.mode
        }), r = Sp(t);
        return {
            ...ue(e.id ?? ne(), {
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
    function No(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function uo(e) {
        return structuredClone(e);
    }
    function tc(e) {
        return e === void 0 || typeof e == "boolean";
    }
    function kp(e) {
        if (!Number.isFinite(e.startOffset) || !Number.isFinite(e.endOffset) || e.startOffset === e.endOffset) return e;
        const t = Hi(e.startOffset, e.endOffset);
        return {
            ...e,
            startOffset: t.startOffset,
            endOffset: t.endOffset
        };
    }
    const Fp = Object.freeze({
        encode (e) {
            return nr("extrude", {
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
            if (!No(t) || typeof t.sketchId != "string" || typeof r != "number" || typeof n != "number" || i !== "add" && i !== "cut" || !tc(o)) throw new bt("extrude", "invalid parameter/reference payload");
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
    class vp extends ir {
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
                codec: Fp
            });
        }
        isTypedDraft(t) {
            return !No(t) || !No(t.sketchRef) ? !1 : typeof t.sketchRef.sketchId == "string" && typeof t.startOffset == "number" && typeof t.endOffset == "number" && (t.mode === "add" || t.mode === "cut") && tc(t.fusePrior);
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
                sketchRef: uo(t.sketchRef),
                startOffset: t.startOffset,
                endOffset: t.endOffset,
                mode: t.mode,
                ...t.fusePrior !== void 0 ? {
                    fusePrior: t.fusePrior
                } : {}
            };
        }
        normalizeTypedDraft(t) {
            const r = uo(t.sketchRef);
            return r.sketchId = r.sketchId.trim(), kp({
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
                Hi(t.startOffset, t.endOffset);
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
            return As({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                sketchRef: uo(r.sketchRef),
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
    rc = function(e) {
        if (e.targetFeatureId === e.toolFeatureId) throw new Error("Boolean target and tool must be different features");
        if (e.op !== "union" && e.op !== "cut" && e.op !== "intersect") throw new Error(`Unsupported Boolean op: ${String(e.op)}`);
        return {
            ...ue(e.id ?? ne(), {
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
    nc = function(e) {
        if (!e.baseFeatureId) throw new Error("Face Pull requires a base feature");
        if (e.faceSelectors.length === 0) throw new Error("Face Pull requires at least one planar face");
        const t = Math.hypot(...e.direction);
        if (!Number.isFinite(t) || t <= 1e-9) throw new Error("Face Pull direction is invalid");
        if (!Number.isFinite(e.distance) || e.distance <= 0) throw new Error("Face Pull distance must be positive");
        if (e.operation !== "add" && e.operation !== "cut") throw new Error("Face Pull operation is invalid");
        return {
            ...ue(e.id ?? ne(), {
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
    function _p(e, t) {
        if (!e.every(Number.isFinite)) throw new Error(`Helix ${t} must be finite`);
        if (!(Math.hypot(...e) > 0)) throw new Error(`Helix ${t} must be non-zero`);
        return [
            ...e
        ];
    }
    function Ep(e) {
        if (!e.every(Number.isFinite)) throw new Error("Helix axis origin must be finite");
        return [
            ...e
        ];
    }
    qi = function(e) {
        const t = e.endRadius ?? e.radius, r = e.endPitch ?? e.pitch;
        if (!(e.radius > 0) || !Number.isFinite(e.radius)) throw new Error("Helix radius must be positive");
        if (!(t > 0) || !Number.isFinite(t)) throw new Error("Helix end radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Helix pitch must be positive");
        if (!(r > 0) || !Number.isFinite(r)) throw new Error("Helix end pitch must be positive");
        if (!(e.height > 0) || !Number.isFinite(e.height)) throw new Error("Helix height must be positive");
        if (e.handedness !== "right" && e.handedness !== "left") throw new Error("Helix handedness is invalid");
        if (!Number.isFinite(e.startAngle)) throw new Error("Helix start angle must be finite");
        return {
            ...ue(e.id ?? ne(), {
                name: e.name,
                type: "helix",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "helix",
            axisOrigin: Ep(e.axisOrigin),
            axisDirection: _p(e.axisDirection, "axis direction"),
            radius: e.radius,
            endRadius: t,
            pitch: e.pitch,
            endPitch: r,
            height: e.height,
            handedness: e.handedness,
            startAngle: e.startAngle
        };
    };
    function lr(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`Invalid hole ${t}: expected positive finite number`);
        return e;
    }
    function Ea(e, t) {
        if (typeof e != "string" || e.length === 0) throw new Error(`Invalid hole ${t}: expected non-empty string`);
        return e;
    }
    function ur(e) {
        return typeof e == "number" && Number.isFinite(e) && e > 0;
    }
    function Ap(e, t, r, n) {
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
    ic = function(e) {
        const t = lr(e.diameter, "diameter"), r = lr(e.depth, "depth"), n = Ea(e.sketchId, "sketchId"), i = Ea(e.baseFeatureId, "baseFeatureId");
        if (e.depthMode !== "blind" && e.depthMode !== "through") throw new Error(`Invalid hole depthMode: ${String(e.depthMode)}`);
        if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink") throw new Error(`Invalid hole mode: ${String(e.mode)}`);
        const o = Ap(e.mode, t, r, e.depthMode);
        let s = e.counterboreDiameter, a = e.counterboreDepth, d = e.countersinkDiameter, c = e.countersinkAngleDeg;
        if (e.mode === "counterbore") {
            ur(s) || (s = o.counterboreDiameter), ur(a) || (a = o.counterboreDepth);
            const u = lr(s, "counterboreDiameter"), h = lr(a, "counterboreDepth");
            if (u <= t) throw new Error("Invalid hole counterboreDiameter: expected greater than diameter");
            if (h > r && e.depthMode === "blind") throw new Error("Invalid hole counterboreDepth: expected <= depth for blind mode");
            s = u, a = h;
        }
        if (e.mode === "countersink") {
            ur(d) || (d = o.countersinkDiameter), ur(c) || (c = o.countersinkAngleDeg);
            const u = lr(d, "countersinkDiameter"), h = lr(c, "countersinkAngleDeg");
            if (u <= t) throw new Error("Invalid hole countersinkDiameter: expected greater than diameter");
            if (h <= 1 || h >= 179) throw new Error("Invalid hole countersinkAngleDeg: expected in (1, 179)");
            d = u, c = h;
        }
        for (const u of [
            "start",
            "end"
        ]){
            const h = e[`${u}ChamferEnabled`], m = e[`${u}ChamferOffset`], I = e[`${u}ChamferAngleDeg`];
            if (h) {
                if (!ur(m)) throw new Error(`Invalid hole ${u}ChamferOffset: expected positive finite number`);
                if (!ur(I) || I <= 1 || I >= 179) throw new Error(`Invalid hole ${u}ChamferAngleDeg: expected in (1, 179)`);
            }
        }
        const l = e.pointIds?.filter((u)=>typeof u == "string" && u.length > 0).map((u)=>u);
        return {
            ...ue(e.id ?? ne(), {
                name: e.name,
                type: "hole",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "hole",
            baseFeatureId: i,
            sketchId: n,
            ...l && l.length > 0 ? {
                pointIds: [
                    ...l
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
            ...e.seriesParameters ? {
                seriesParameters: structuredClone(e.seriesParameters)
            } : {},
            solidId: null
        };
    };
    Op = function(e) {
        if (e.sectionSketchIds.length < 2) throw new Error("Loft requires at least two section sketches");
        if (e.sectionSketchIds.some((t)=>!t)) throw new Error("Loft section sketch ids are required");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Loft mode must be add or cut");
        return {
            ...ue(e.id ?? ne(), {
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
    Os = function(e) {
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
            ...ue(e.id ?? ne(), {
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
    function Pp(e, t = "angle") {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error(`Invalid revolve ${t}: expected radians in (0, 2π]`);
        return e;
    }
    oc = function(e) {
        const t = Pp(e.angle), r = e.startAngle ?? 0, n = e.endAngle ?? r + t;
        if (!Number.isFinite(r) || !Number.isFinite(n) || n <= r) throw new Error("Invalid revolve start/end angle interval");
        return {
            ...ue(e.id ?? ne(), {
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
    function Aa(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must be a finite 3D vector`);
    }
    sc = function(e) {
        if (!e.baseFeatureId) throw new Error("Split requires a base feature");
        if (![
            "positive",
            "negative",
            "both"
        ].includes(e.keepSide)) throw new Error("Split keep side is invalid");
        if (e.toolRef.kind === "world_plane" && (Aa(e.toolRef.origin, "Split plane origin"), Aa(e.toolRef.normal, "Split plane normal"), Math.hypot(...e.toolRef.normal) <= 1e-9)) throw new Error("Split plane normal must be non-zero");
        if (e.toolRef.kind === "datum_plane" && !e.toolRef.featureId) throw new Error("Split Datum Plane reference is required");
        if (e.toolRef.kind === "face" && (!e.toolRef.selector.featureId || !e.toolRef.selector.role)) throw new Error("Split face reference is required");
        return {
            ...ue(e.id ?? ne(), {
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
    Ps = function(e) {
        if (!e.helixFeatureId) throw new Error("Thread requires a Helix feature");
        if (e.mode !== "add" && e.mode !== "cut") throw new Error("Thread mode must be add or cut");
        if (e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch") throw new Error("Unsupported Thread profile");
        if (e.profileKind === "custom_sketch" && !e.profileSketchId) throw new Error("Custom Thread profile requires a Sketch");
        if (!(e.majorRadius > 0) || !Number.isFinite(e.majorRadius)) throw new Error("Thread major radius must be positive");
        if (!(e.pitch > 0) || !Number.isFinite(e.pitch)) throw new Error("Thread pitch must be positive");
        if (!(e.depth > 0) || !Number.isFinite(e.depth) || e.depth >= e.majorRadius) throw new Error("Thread depth must be positive and smaller than major radius");
        if (e.depth > e.pitch * .75) throw new Error("Thread depth is too large for the metric profile");
        return {
            ...ue(e.id ?? ne(), {
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
    function ac(e) {
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
            ...ue(e.id ?? ne(), {
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
    const at = Object.freeze({
        category: "operation",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Dn(e) {
        return e.priorSolidFeatureId ?? e.suggestedFeatureIds?.[0] ?? "";
    }
    function rt(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function Si(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function ki(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function dc(e) {
        return Si(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function cc(e) {
        const t = e.toolRef;
        if (!Si(t)) return [
            rt("invalid-tool-reference", "toolRef", "Tool reference must be structured")
        ];
        switch(t.kind){
            case "world_plane":
                return ki(t.origin) && ki(t.normal) && Math.hypot(...t.normal) > 1e-9 ? [] : [
                    rt("invalid-tool-reference", "toolRef", "World plane must have a finite non-zero normal")
                ];
            case "datum_plane":
                return typeof t.featureId == "string" && t.featureId.length > 0 ? [] : [
                    rt("invalid-tool-reference", "toolRef", "Datum Plane id is required")
                ];
            case "face":
                return dc(t.selector) ? [] : [
                    rt("invalid-tool-reference", "toolRef", "Face selector is invalid")
                ];
            default:
                return [
                    rt("invalid-tool-reference", "toolRef", "Unsupported tool reference kind")
                ];
        }
    }
    function Rp(e, t) {
        const r = e[t];
        return Array.isArray(r) && r.length > 0 && r.every(dc) ? [] : [
            rt(`invalid-${t}`, t, `${t} requires valid topology references`)
        ];
    }
    function Mp(e) {
        const t = [];
        (!Si(e.sketchRef) || typeof e.sketchRef.sketchId != "string" || e.sketchRef.sketchId.length === 0) && t.push(rt("invalid-sketch-reference", "sketchRef", "Revolve sketch id is required"));
        const r = e.axisRef;
        return Si(r) ? ((r.kind === "world" ? ki(r.origin) && ki(r.direction) && Math.hypot(...r.direction) > 1e-9 : r.kind === "datum" ? typeof r.featureId == "string" && r.featureId.length > 0 && (r.axis === "normal" || r.axis === "u" || r.axis === "v") : r.kind === "datum_axis" && typeof r.featureId == "string" && r.featureId.length > 0) || t.push(rt("invalid-axis-reference", "axisRef", "Revolve axis reference is invalid")), t) : (t.push(rt("invalid-axis-reference", "axisRef", "Revolve axis must be structured")), t);
    }
    class Cp extends ye {
        constructor(){
            super({
                type: "split",
                labelKey: "partDesign.feature.split",
                iconKey: "part-design-split",
                sortOrder: 310,
                capabilities: at,
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
                        baseFeatureId: Dn(t),
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.toolRef),
                validate: cc,
                build: (t, r, n)=>Ie(t, r, n, sc)
            });
        }
    }
    class $p extends ye {
        constructor(){
            super({
                type: "trim",
                labelKey: "partDesign.feature.trim",
                iconKey: "part-design-trim",
                sortOrder: 320,
                capabilities: at,
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
                        baseFeatureId: Dn(t),
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.toolRef),
                validate: cc,
                build: (t, r, n)=>Ie(t, r, n, ac)
            });
        }
    }
    class Dp extends ye {
        constructor(){
            super({
                type: "face_pull",
                labelKey: "partDesign.feature.facePull",
                iconKey: "part-design-face-pull",
                sortOrder: 330,
                capabilities: at,
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
                        baseFeatureId: Dn(t),
                        faceSelectors: [],
                        direction: [
                            0,
                            0,
                            1
                        ],
                        distance: 10,
                        operation: "add"
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.faceSelectors),
                validate: (t)=>Rp(t, "faceSelectors"),
                build: (t, r, n)=>Ie(t, r, n, nc)
            });
        }
    }
    class Tp extends ye {
        constructor(){
            super({
                type: "hole",
                labelKey: "partDesign.feature.hole",
                iconKey: "part-design-hole",
                sortOrder: 340,
                capabilities: at,
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
                        baseFeatureId: Dn(t),
                        sketchId: t.suggestedFeatureIds?.[0] ?? "",
                        diameter: 5,
                        depth: 10,
                        depthMode: "blind",
                        mode: "simple"
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseFeatureId, t.sketchId),
                validate: (t)=>t.pointIds === void 0 || Array.isArray(t.pointIds) && t.pointIds.every((r)=>typeof r == "string" && r.length > 0) ? [] : [
                        rt("invalid-point-ids", "pointIds", "Hole point ids must be non-empty strings")
                    ],
                build: (t, r, n)=>Ie(t, r, n, ic)
            });
        }
    }
    class Bp extends ye {
        constructor(){
            super({
                type: "revolve",
                labelKey: "partDesign.feature.revolve",
                iconKey: "part-design-revolve",
                sortOrder: 350,
                capabilities: {
                    ...at,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t, r)=>Fe(t.sketchRef, t.axisRef, t.mode === "cut" || t.fusePrior !== !1 ? r.priorSolidFeatureId : null),
                validate: Mp,
                build: (t, r, n)=>Ie(t, r, n, oc)
            });
        }
    }
    class jp extends ye {
        constructor(){
            super({
                type: "boolean",
                labelKey: "partDesign.feature.boolean",
                iconKey: "part-design-boolean",
                sortOrder: 360,
                capabilities: at,
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
                        targetFeatureId: Dn(t),
                        toolFeatureId: t.suggestedFeatureIds?.[0] ?? "",
                        op: "union"
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.targetFeatureId, t.toolFeatureId),
                build: (t, r, n)=>Ie(t, r, n, rc)
            });
        }
    }
    class zp extends ye {
        constructor(){
            super({
                type: "loft",
                labelKey: "partDesign.feature.loft",
                iconKey: "part-design-loft",
                sortOrder: 370,
                capabilities: {
                    ...at,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t, r)=>Fe(t.sectionSketchIds, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>Ie(t, r, n, Op)
            });
        }
    }
    class Np extends ye {
        constructor(){
            super({
                type: "pipe",
                labelKey: "partDesign.feature.pipe",
                iconKey: "part-design-pipe",
                sortOrder: 380,
                capabilities: {
                    ...at,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t, r)=>Fe(t.profileSketchId, t.sectionSketchIds, t.pathSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>Ie(t, r, n, Os)
            });
        }
    }
    class Vp extends ye {
        constructor(){
            super({
                type: "helix",
                labelKey: "partDesign.feature.helix",
                iconKey: "part-design-helix",
                sortOrder: 390,
                capabilities: {
                    ...at,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: ()=>[],
                build: (t, r, n)=>Ie(t, r, n, qi)
            });
        }
    }
    class Kp extends ye {
        constructor(){
            super({
                type: "thread",
                labelKey: "partDesign.feature.thread",
                iconKey: "part-design-thread",
                sortOrder: 400,
                capabilities: {
                    ...at,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t, r)=>Fe(t.helixFeatureId, t.profileSketchId, t.mode === "cut" ? r.priorSolidFeatureId : null),
                build: (t, r, n)=>Ie(t, r, n, Ps)
            });
        }
    }
    function qn(e) {
        return e.length === 3 && e.every(Number.isFinite);
    }
    function Lp(e) {
        if (e.kind === "world") {
            if (!qn(e.origin) || !qn(e.direction) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Datum Axis world direction must be a finite non-zero vector");
            return;
        }
        if (e.kind === "two_point") {
            if (!qn(e.start) || !qn(e.end) || Math.hypot(e.end[0] - e.start[0], e.end[1] - e.start[1], e.end[2] - e.start[2]) <= 1e-9) throw new Error("Datum Axis two points must be finite and distinct");
            return;
        }
        if (!e.firstDatumId || !e.secondDatumId || e.firstDatumId === e.secondDatumId) throw new Error("Datum Axis requires two different Datum Plane references");
    }
    Hp = function(e) {
        return Lp(e.axisRef), {
            ...ue(e.id ?? ne(), {
                name: e.name,
                type: "datum_axis",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "datum_axis",
            axisRef: structuredClone(e.axisRef)
        };
    };
    cn = function(e) {
        return {
            ...ue(e.id ?? ne(), {
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
    qp = function(e, t, r = 100, n = 100) {
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
    Up = function(e, t, r) {
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
        ], l = Math.hypot(c[0], c[1], c[2]), f = l > 1e-9 ? [
            c[0] / l,
            c[1] / l,
            c[2] / l
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
    je = function(e) {
        return {
            ...ue(e.id ?? ne(), {
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
    Wp = function(e) {
        if (!e.sourceBodyId || !e.sourceFeatureId) throw new Error("ShapeBinder requires a source Body and feature");
        return {
            ...ue(e.id ?? ne(), {
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
    const Gp = 2, Yp = {
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
    }, rn = 1e-9;
    function Un(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function Jp(e) {
        return {
            origin: Un(e.origin),
            normal: Un(e.normal),
            uAxis: Un(e.uAxis),
            vAxis: Un(e.vAxis)
        };
    }
    function ni(e) {
        return Math.hypot(e[0], e[1], e[2]);
    }
    function Zp(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Xp(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function nn(e, t) {
        if (e.length !== 3 || e.some((r)=>!Number.isFinite(r))) throw new Error(`${t} must contain three finite values`);
    }
    Qp = function(e) {
        nn(e.origin, "Sketch plane origin"), nn(e.normal, "Sketch plane normal"), nn(e.uAxis, "Sketch plane U axis"), nn(e.vAxis, "Sketch plane V axis");
        const t = ni(e.normal), r = ni(e.uAxis), n = ni(e.vAxis), i = Xp(Zp(e.uAxis, e.vAxis), e.normal);
        if (t <= rn || r <= rn || n <= rn) throw new Error("Sketch plane frame axes must be non-degenerate");
        if (i <= rn * t * r * n) throw new Error("Sketch plane frame must be right-handed and non-degenerate");
    };
    or = function(e) {
        if (!e.id) throw new Error("Sketch plane placement requires a stable id");
        const t = Jp(e.frameSnapshot ?? Yp);
        Qp(t);
        const r = e.orientation ?? {
            mode: "support-default",
            role: "right",
            reversed: !1
        };
        if (r.mode === "fixed" && (nn(r.bodyDirection, "Fixed sketch orientation"), ni(r.bodyDirection) <= rn)) throw new Error("Fixed sketch orientation must be non-degenerate");
        return {
            schemaVersion: Gp,
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
    Q0 = function(e) {
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
        return or({
            id: e.id,
            support: r,
            orientation: s,
            normalReversed: t.normalReversed ?? !1,
            frameSnapshot: e.frameSnapshot,
            helperVisibility: e.helperVisibility
        });
    };
    ew = function(e) {
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
    tw = function(e) {
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
    Rs = function(e) {
        const t = e.sectionOwnership ?? "independent";
        if (t === "internal" && !e.ownerFeatureId) throw new Error("Internal sketch sections require an ownerFeatureId");
        return {
            ...ue(e.id, {
                name: e.name,
                type: "sketch",
                dependencyIds: e.dependencyIds,
                suppressed: e.suppressed
            }),
            type: "sketch",
            sectionOwnership: t,
            placementPlane: or({
                ...e.placementPlane ? structuredClone(e.placementPlane) : {},
                id: e.placementPlane?.id ?? `${e.id}::placement-plane`
            }),
            ...e.ownerFeatureId ? {
                ownerFeatureId: e.ownerFeatureId
            } : {}
        };
    };
    rw = function(e) {
        return e.type === "sketch" && e.sectionOwnership !== "internal";
    };
    const Ui = Object.freeze({
        category: "reference",
        producesSolid: !1,
        priorSolid: "none",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Vt(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function lc(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function eh(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function th(e) {
        return lc(e) && typeof e.featureId == "string" && e.featureId.length > 0 && typeof e.role == "string" && e.role.length > 0;
    }
    function rh(e) {
        if (!Array.isArray(e) || e.length !== 3 || !e.every(eh)) return !1;
        const [t, r, n] = e, i = r[0] - t[0], o = r[1] - t[1], s = r[2] - t[2], a = n[0] - t[0], d = n[1] - t[1], c = n[2] - t[2];
        return Math.hypot(o * c - s * d, s * a - i * c, i * d - o * a) > 1e-9;
    }
    function nh(e) {
        const t = [];
        return (typeof e.width != "number" || e.width <= 0) && t.push(Vt("invalid-width", "width", "Datum Plane width must be positive")), (typeof e.height != "number" || e.height <= 0) && t.push(Vt("invalid-height", "height", "Datum Plane height must be positive")), e.attachmentMode === "on_face" && !th(e.faceSelector) ? t.push(Vt("invalid-face-reference", "faceSelector", "Datum Plane face is required")) : e.attachmentMode === "on_datum" && (typeof e.baseDatumId != "string" || e.baseDatumId.length === 0) ? t.push(Vt("invalid-datum-reference", "baseDatumId", "Base Datum Plane is required")) : e.attachmentMode === "three_point" && !rh(e.threePoints) ? t.push(Vt("invalid-three-points", "threePoints", "Three non-collinear points are required")) : e.attachmentMode === "on_path" && (typeof e.pathFeatureId != "string" || e.pathFeatureId.length === 0 || typeof e.pathParameter != "number" || e.pathParameter < 0 || e.pathParameter > 1) && t.push(Vt("invalid-path-reference", "pathFeatureId", "Path and normalized parameter are required")), t;
    }
    class ih extends ye {
        constructor(){
            super({
                type: "sketch",
                labelKey: "partDesign.feature.sketch",
                iconKey: "part-design-sketch",
                sortOrder: 10,
                capabilities: {
                    ...Ui,
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
                        placementPlane: or({
                            id: "__sketch-draft-plane__"
                        })
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.ownerFeatureId, t.placementPlane),
                validate: (t)=>lc(t.placementPlane) && typeof t.placementPlane.id == "string" && t.placementPlane.id.length > 0 ? [] : [
                        Vt("invalid-placement-plane", "placementPlane", "Sketch placement is required")
                    ],
                build: (t, r, n)=>Ie(t, r, n, Rs)
            });
        }
    }
    class oh extends ye {
        constructor(){
            super({
                type: "datum_plane",
                labelKey: "partDesign.feature.datumPlane",
                iconKey: "part-design-datum-plane",
                sortOrder: 20,
                capabilities: {
                    ...Ui,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.baseDatumId, t.faceSelector, t.pathFeatureId),
                validate: nh,
                build: (t, r, n)=>Ie(t, r, n, cn)
            });
        }
    }
    class sh extends ye {
        constructor(){
            super({
                type: "datum_axis",
                labelKey: "partDesign.feature.datumAxis",
                iconKey: "part-design-datum-axis",
                sortOrder: 30,
                capabilities: {
                    ...Ui,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.axisRef),
                build: (t, r, n)=>Ie(t, r, n, Hp)
            });
        }
    }
    class ah extends ye {
        constructor(){
            super({
                type: "shape_binder",
                labelKey: "partDesign.feature.shapeBinder",
                iconKey: "part-design-shape-binder",
                sortOrder: 40,
                capabilities: {
                    ...Ui,
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.sourceFeatureId),
                build: (t, r, n)=>Ie(t, r, n, Wp)
            });
        }
    }
    class dh extends ye {
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
                draftFromFeature: (t)=>ge(t),
                dependencies: ()=>[],
                build: (t, r, n)=>Ie(t, r, n, je)
            });
        }
    }
    function ch(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function uc(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number");
    }
    function ii(e) {
        return [
            ...e
        ];
    }
    const lh = Object.freeze({
        encode: (e)=>nr("sphere", {
                mode: e.mode,
                center: e.center,
                radius: e.radius
            }, {}),
        decode (e) {
            const { mode: t, center: r, radius: n } = e.parameters;
            if (t !== "add" && t !== "cut" || !uc(r) || typeof n != "number") throw new bt("sphere", "invalid parameter payload");
            return {
                mode: t,
                center: ii(r),
                radius: n
            };
        }
    });
    class uh extends ir {
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
                codec: lh
            });
        }
        isTypedDraft(t) {
            return ch(t) ? (t.mode === "add" || t.mode === "cut") && uc(t.center) && typeof t.radius == "number" : !1;
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
                center: ii(t.center),
                radius: t.radius
            };
        }
        normalizeTypedDraft(t) {
            return {
                ...t,
                center: ii(t.center)
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
            }), t.mode === "cut" && !fh(r) && n.push({
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
            return Af({
                id: t.id,
                name: t.name,
                suppressed: t.suppressed,
                dependencyIds: [
                    ...i
                ],
                ...r,
                center: ii(r.center)
            });
        }
        reviseTypedFeature(t, r, n, i) {
            return this.buildTypedFeature(t, r, n, i);
        }
    }
    function fh(e) {
        if (!e.priorSolidFeatureId) return !1;
        const t = e.historyFeatureIds.indexOf(e.priorSolidFeatureId);
        return t >= 0 && t < e.historyIndex;
    }
    ph = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Linear pattern count must be an integer >= 2");
        if (!Number.isFinite(e.spacing) || e.spacing <= 0) throw new Error("Linear pattern spacing must be positive and finite");
        if (!e.direction.every(Number.isFinite) || Math.hypot(...e.direction) <= 1e-9) throw new Error("Linear pattern direction must be non-zero");
        const t = Math.hypot(...e.direction);
        return {
            ...ue(e.id ?? ne(), {
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
    hh = function(e) {
        if (!e.seedFeatureId) throw new Error("Mirror requires a seed feature");
        if (e.planeRef.kind === "world") {
            if (!e.planeRef.origin.every(Number.isFinite) || !e.planeRef.normal.every(Number.isFinite) || Math.hypot(...e.planeRef.normal) <= 1e-9) throw new Error("Mirror world plane normal must be non-zero");
        } else if (!e.planeRef.featureId) throw new Error("Mirror datum plane reference is required");
        return {
            ...ue(e.id ?? ne(), {
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
    function mh(e) {
        if (e.kind === "linear") {
            if (e.direction.length !== 3 || e.direction.some((t)=>!Number.isFinite(t)) || Math.hypot(...e.direction) <= 1e-9 || !Number.isInteger(e.count) || e.count < 2 || !(e.spacing > 0)) throw new Error("MultiTransform linear step is invalid");
        } else if (e.kind === "polar" && (!Number.isInteger(e.count) || e.count < 2 || !(e.angleSpan > 0) || e.angleSpan > Math.PI * 2 + 1e-9)) throw new Error("MultiTransform polar step is invalid");
    }
    yh = function(e) {
        if (!e.seedFeatureId || !e.transforms.length) throw new Error("MultiTransform requires a seed and at least one transform");
        return e.transforms.forEach(mh), {
            ...ue(e.id ?? ne(), {
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
    function gh(e) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > Math.PI * 2 + 1e-9) throw new Error("Polar pattern angleSpan must be in (0, 2π] radians");
        return e;
    }
    Ih = function(e) {
        if (!Number.isInteger(e.count) || e.count < 2) throw new Error("Polar pattern count must be an integer >= 2");
        const t = gh(e.angleSpan);
        if (e.axisRef.kind === "world") {
            const r = e.axisRef.direction;
            if (!r.every(Number.isFinite) || Math.hypot(...r) <= 1e-9) throw new Error("Polar pattern world axis direction must be non-zero");
        }
        return {
            ...ue(e.id ?? ne(), {
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
    const Wi = Object.freeze({
        category: "transform",
        producesSolid: !0,
        priorSolid: "required",
        supportsCreate: !0,
        supportsEdit: !0,
        supportsPreview: !0
    });
    function Gi(e) {
        return e.suggestedFeatureIds?.[0] ?? e.priorSolidFeatureId ?? "";
    }
    function ln(e, t, r) {
        return {
            severity: "error",
            code: e,
            field: t,
            message: r
        };
    }
    function Ms(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Fi(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function fc(e) {
        return Ms(e) ? e.kind === "world" ? Fi(e.origin) && Fi(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum" ? typeof e.featureId == "string" && e.featureId.length > 0 && (e.axis === "normal" || e.axis === "u" || e.axis === "v") : e.kind === "datum_axis" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function pc(e) {
        return Ms(e) ? e.kind === "world" ? Fi(e.origin) && Fi(e.normal) && Math.hypot(...e.normal) > 1e-9 : e.kind === "datum" && typeof e.featureId == "string" && e.featureId.length > 0 : !1;
    }
    function bh(e) {
        if (!Array.isArray(e.transforms) || e.transforms.length === 0) return [
            ln("invalid-transforms", "transforms", "At least one transform is required")
        ];
        for (const t of e.transforms){
            if (!Ms(t)) return [
                ln("invalid-transforms", "transforms", "Transform must be structured")
            ];
            if (t.kind !== "linear" && !(t.kind === "polar" && fc(t.axisRef)) && !(t.kind === "mirror" && pc(t.planeRef))) return [
                ln("invalid-transforms", "transforms", "Transform kind or reference is invalid")
            ];
        }
        return [];
    }
    class wh extends ye {
        constructor(){
            super({
                type: "multi_transform",
                labelKey: "partDesign.feature.multiTransform",
                iconKey: "part-design-multi-transform",
                sortOrder: 700,
                capabilities: Wi,
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
                        seedFeatureId: Gi(t),
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.seedFeatureId, t.transforms),
                validate: bh,
                build: (t, r, n)=>Ie(t, r, n, yh)
            });
        }
    }
    class xh extends ye {
        constructor(){
            super({
                type: "linear_pattern",
                labelKey: "partDesign.feature.linearPattern",
                iconKey: "part-design-linear-pattern",
                sortOrder: 710,
                capabilities: Wi,
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
                        seedFeatureId: Gi(t),
                        direction: [
                            1,
                            0,
                            0
                        ],
                        count: 2,
                        spacing: 10
                    }),
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.seedFeatureId),
                build: (t, r, n)=>Ie(t, r, n, ph)
            });
        }
    }
    class Sh extends ye {
        constructor(){
            super({
                type: "polar_pattern",
                labelKey: "partDesign.feature.polarPattern",
                iconKey: "part-design-polar-pattern",
                sortOrder: 720,
                capabilities: Wi,
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
                        seedFeatureId: Gi(t),
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.seedFeatureId, t.axisRef),
                validate: (t)=>fc(t.axisRef) ? [] : [
                        ln("invalid-axis-reference", "axisRef", "Polar pattern axis is invalid")
                    ],
                build: (t, r, n)=>Ie(t, r, n, Ih)
            });
        }
    }
    class kh extends ye {
        constructor(){
            super({
                type: "mirror",
                labelKey: "partDesign.feature.mirror",
                iconKey: "part-design-mirror",
                sortOrder: 730,
                capabilities: Wi,
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
                        seedFeatureId: Gi(t),
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
                draftFromFeature: (t)=>ge(t),
                dependencies: (t)=>Fe(t.seedFeatureId, t.planeRef),
                validate: (t)=>pc(t.planeRef) ? [] : [
                        ln("invalid-plane-reference", "planeRef", "Mirror plane is invalid")
                    ],
                build: (t, r, n)=>Ie(t, r, n, hh)
            });
        }
    }
    const Fh = Object.freeze({
        sketch: ()=>new ih,
        datum_plane: ()=>new oh,
        datum_axis: ()=>new sh,
        draft: ()=>new mp,
        box: ()=>new Mf,
        cylinder: ()=>new Nf,
        cone: ()=>new Tf,
        sphere: ()=>new uh,
        split: ()=>new Cp,
        trim: ()=>new $p,
        face_pull: ()=>new Dp,
        multi_transform: ()=>new wh,
        shape_binder: ()=>new ah,
        extrude: ()=>new vp,
        hole: ()=>new Tp,
        linear_pattern: ()=>new xh,
        polar_pattern: ()=>new Sh,
        revolve: ()=>new Bp,
        boolean: ()=>new jp,
        fillet: ()=>new bp,
        chamfer: ()=>new wp,
        thickness: ()=>new xp,
        mirror: ()=>new kh,
        loft: ()=>new zp,
        pipe: ()=>new Np,
        helix: ()=>new Vp,
        thread: ()=>new Kp,
        import: ()=>new dh
    });
    function vh(e) {
        return Fh[e]();
    }
    _h = function() {
        return Object.freeze(yi.map((e)=>vh(e)));
    };
    nw = function() {
        const e = new vf;
        for (const t of _h())e.register(t);
        return e.freeze({
            requireComplete: !0
        });
    };
    function Eh(e) {
        return e.canonicalUnit;
    }
    iw = function(e, t, r) {
        const n = cu(e.expression);
        if (!n.ok) throw new Error("error" in n ? n.error.message : "Invalid expression");
        const i = lu([
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
            unit: Eh(o),
            parameterKeys: Object.freeze([
                ...n.value.identifiers
            ])
        };
    };
    ow = function(e) {
        return Object.freeze({
            expression: e.trim(),
            parameterKeys: Object.freeze([])
        });
    };
    const Ah = Object.freeze({
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
    class Oh extends Error {
        from;
        to;
        constructor(t, r){
            super(`Invalid feature lifecycle transition: ${t} -> ${r}`), this.name = "FeatureLifecycleTransitionError", this.from = t, this.to = r;
        }
    }
    function Ph(e, t) {
        return Ah[e].has(t);
    }
    sw = function(e, t) {
        if (!Ph(e, t)) throw new Oh(e, t);
        return t;
    };
    function Rh(e) {
        return e === "editing" || e === "applying" || e === "failed" || e === "cancelling";
    }
    aw = function(e) {
        const t = Rh(e.phase) && e.operation !== null, r = e.phase === "applying" || e.phase === "cancelling" || !!e.externallyBusy, n = e.operation === "create" ? e.supportsCreate : e.operation === "edit" ? e.supportsEdit : !1, i = t && n && e.hasCommitAction && e.canCommit && !e.hasValidationErrors && !r;
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
    function Vo(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Fn(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Cs(e) {
        const t = Fn(e.axisDirection), r = Math.abs(t[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], n = Fn(Vo(r, t)), i = Vo(t, n);
        return {
            axis: t,
            u: n,
            v: i
        };
    }
    function hc(e) {
        const t = e.endPitch - e.pitch;
        return Math.abs(t) <= 1e-12 ? e.height / e.pitch : e.height * Math.log(e.endPitch / e.pitch) / t;
    }
    function Mh(e, t) {
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
        const r = Math.max(0, Math.min(1, t)), n = e.endPitch - e.pitch, i = hc(e);
        if (!Number.isFinite(i) || i <= 0 || i > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const o = e.handedness === "left" ? -1 : 1, s = Math.abs(n) <= 1e-12 ? i * r : e.height * Math.log((e.pitch + n * r) / e.pitch) / n, a = e.startAngle + o * s * Math.PI * 2, d = o * 2 * Math.PI * (Math.abs(n) <= 1e-12 ? i : e.height / (e.pitch + n * r)), c = e.radius + (e.endRadius - e.radius) * r, l = e.endRadius - e.radius, { axis: f, u, v: h } = Cs(e), m = Math.cos(a), I = Math.sin(a), w = [
            u[0] * m + h[0] * I,
            u[1] * m + h[1] * I,
            u[2] * m + h[2] * I
        ], y = [
            -u[0] * I + h[0] * m,
            -u[1] * I + h[1] * m,
            -u[2] * I + h[2] * m
        ], x = [
            e.axisOrigin[0] + w[0] * c + f[0] * e.height * r,
            e.axisOrigin[1] + w[1] * c + f[1] * e.height * r,
            e.axisOrigin[2] + w[2] * c + f[2] * e.height * r
        ], b = [
            w[0] * l + y[0] * c * d + f[0] * e.height,
            w[1] * l + y[1] * c * d + f[1] * e.height,
            w[2] * l + y[2] * c * d + f[2] * e.height
        ];
        return {
            point: x,
            tangent: Fn(b)
        };
    }
    Ch = function(e, t, r = 100, n = 100) {
        const { point: i, tangent: o } = Mh(e, t), { axis: s } = Cs(e), a = [
            i[0] - e.axisOrigin[0],
            i[1] - e.axisOrigin[1],
            i[2] - e.axisOrigin[2]
        ], d = a[0] * s[0] + a[1] * s[1] + a[2] * s[2], c = [
            a[0] - s[0] * d,
            a[1] - s[1] * d,
            a[2] - s[2] * d
        ], l = Fn(c), f = o[0] * l[0] + o[1] * l[1] + o[2] * l[2], u = [
            l[0] - o[0] * f,
            l[1] - o[1] * f,
            l[2] - o[2] * f
        ], h = Fn(u), m = Vo(o, h);
        return {
            origin: i,
            normal: o,
            uAxis: h,
            vAxis: m,
            width: r,
            height: n
        };
    };
    $s = function(e, t = 32) {
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
        const r = e.endPitch - e.pitch, n = hc(e);
        if (!Number.isFinite(n) || n <= 0 || n > 1e4) throw new Error("Helix turn count must be between 0 and 10000");
        const { axis: i, u: o, v: s } = Cs(e), a = Math.max(1, Math.ceil(n * t)), d = [], c = e.handedness === "left" ? -1 : 1;
        for(let l = 0; l <= a; l += 1){
            const f = l / a, u = Math.abs(r) <= 1e-12 ? n * f : e.height * Math.log((e.pitch + r * f) / e.pitch) / r, h = e.startAngle + c * u * Math.PI * 2, m = e.radius + (e.endRadius - e.radius) * f, I = Math.cos(h) * m, w = Math.sin(h) * m;
            d.push([
                e.axisOrigin[0] + o[0] * I + s[0] * w + i[0] * e.height * f,
                e.axisOrigin[1] + o[1] * I + s[1] * w + i[1] * e.height * f,
                e.axisOrigin[2] + o[2] * I + s[2] * w + i[2] * e.height * f
            ]);
        }
        return {
            points: d,
            turns: n
        };
    };
    class vt extends Error {
        code;
        bodyId;
        featureId;
        dependencyId;
        constructor(t, r){
            super(t), this.name = "BodyInvariantError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId, this.dependencyId = r.dependencyId;
        }
    }
    const $h = new Set([
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
    Ds = function(e) {
        return $h.has(e.type);
    };
    function Ko(e) {
        const { bodyId: t, features: r, tipFeatureId: n, foreignFeatureIds: i } = e, o = new Map;
        for(let l = 0; l < r.length; l++){
            const f = r[l];
            if (o.has(f.id)) throw new vt(`Body ${t}: duplicate feature id ${f.id}`, {
                code: "duplicate-feature-id",
                bodyId: t,
                featureId: f.id
            });
            o.set(f.id, l);
        }
        const s = new Map, a = new Map;
        for (const l of r)s.set(l.id, []), a.set(l.id, []);
        for (const l of r){
            const f = o.get(l.id);
            for (const u of l.dependencyIds){
                const h = o.get(u);
                if (h === void 0) throw i?.has(u) ? new vt(`Body ${t}: feature ${l.id} depends on cross-body feature ${u}`, {
                    code: "cross-body-dependency",
                    bodyId: t,
                    featureId: l.id,
                    dependencyId: u
                }) : new vt(`Body ${t}: feature ${l.id} has unknown dependency ${u}`, {
                    code: "unknown-dependency",
                    bodyId: t,
                    featureId: l.id,
                    dependencyId: u
                });
                if (h >= f) throw new vt(`Body ${t}: feature ${l.id} has forward or self dependency ${u}`, {
                    code: "forward-dependency",
                    bodyId: t,
                    featureId: l.id,
                    dependencyId: u
                });
                s.get(l.id).push(u), a.get(u).push(l.id);
            }
        }
        const d = r.map((l)=>l.id), c = ms(d, a);
        if (c) throw new vt(`Body ${t}: dependency cycle ${c.join(" -> ")}`, {
            code: "dependency-cycle",
            bodyId: t,
            featureId: c[0]
        });
        if (n !== null) {
            const l = r.find((f)=>f.id === n);
            if (!l) throw new vt(`Body ${t}: tipFeatureId ${n} is not in body history`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
            if (l.suppressed) throw new vt(`Body ${t}: tipFeatureId ${n} references a suppressed feature`, {
                code: "invalid-tip",
                bodyId: t,
                featureId: n
            });
        }
    }
    function Lo(e, t) {
        const r = new Set;
        for (const n of t)if (n.id !== e) for (const i of n.getFeatures())r.add(i.id);
        return r;
    }
    dw = function(e, t) {
        const r = e.getBody(t.sourceBodyId);
        if (!r) return {
            status: "source_missing",
            sourceBodyId: t.sourceBodyId,
            sourceFeatureId: t.sourceFeatureId,
            solidId: null
        };
        const n = r.getFeature(t.sourceFeatureId);
        return !n || !Ds(n) ? {
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
    Yi = function(e, t) {
        const n = (e.geometry ?? []).filter((d)=>d.kind === "point"), i = t && t.length > 0 ? n.filter((d)=>t.includes(d.id)) : n;
        if (i.length === 0) throw new Error(t && t.length > 0 ? "Hole sketch does not contain the requested point ids" : "Hole sketch has no definition points");
        const o = e.origin, s = e.uAxis, a = e.vAxis;
        if (!o || !s || !a || o.length !== 3 || s.length !== 3 || a.length !== 3) throw new Error("Hole sketch profile is missing a valid world frame");
        return i.map((d)=>{
            const c = d.point.x, l = d.point.y;
            if (!Number.isFinite(c) || !Number.isFinite(l)) throw new Error(`Hole sketch point ${d.id} has non-finite coordinates`);
            return {
                id: d.id,
                uv: {
                    x: c,
                    y: l
                },
                origin: [
                    o[0] + s[0] * c + a[0] * l,
                    o[1] + s[1] * c + a[1] * l,
                    o[2] + s[2] * c + a[2] * l
                ]
            };
        });
    };
    function mc(e) {
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
    cw = function(e, t) {
        if (!e) return !1;
        try {
            return Yi(e, t), !0;
        } catch  {
            return !1;
        }
    };
    lw = function(e, t) {
        const r = new Set((e.geometry ?? []).filter((o)=>o.kind === "point").map((o)=>o.id)), n = new Set, i = [];
        for (const o of t)!r.has(o) || n.has(o) || (n.add(o), i.push(o));
        return i;
    };
    function Dh(e) {
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
    function Ho(e) {
        return Array.isArray(e) ? e.map(Ho) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([t, r])=>[
                t,
                Ho(r)
            ])) : e;
    }
    yc = class {
        id;
        name;
        _partId;
        tipFeatureId = null;
        origin;
        _parameters = new Map;
        _features = [];
        constructor(t){
            this.id = t.id ?? ne(), this.name = t.name, this._partId = t.partId ?? "", this.origin = Dh(this.id);
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
                    placementPlane: Ho(s.placementPlane)
                } : {
                    ...s,
                    dependencyIds: [
                        ...s.dependencyIds
                    ]
                });
            Ko({
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
            Ko({
                bodyId: this.id,
                features: this._features,
                tipFeatureId: this.tipFeatureId,
                foreignFeatureIds: t
            });
        }
        _refreshTipToLastSolid() {
            const t = [
                ...this._features
            ].reverse().find((n)=>!n.suppressed && Ds(n));
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
    function Ts() {
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
    class Th {
        id;
        name;
        visible;
        transform;
        _bodyIds = [];
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? ne(), this.name = t.name ?? "Part", this.visible = t.visible ?? !0, this.transform = t.transform ? {
                origin: [
                    ...t.transform.origin
                ],
                rotation: [
                    ...t.transform.rotation
                ]
            } : Ts();
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
    class Xe extends Error {
        code;
        partId;
        bodyId;
        constructor(t, r){
            super(t), this.name = "PartInvariantError", this.code = r.code, this.partId = r.partId, this.bodyId = r.bodyId;
        }
    }
    function Bh(e) {
        const { parts: t, bodies: r } = e, n = new Map(t.map((s)=>[
                s.id,
                s
            ])), i = new Map;
        for (const s of t){
            const a = new Set;
            for (const d of s.getBodies()){
                if (a.has(d.id)) throw new Xe(`Part ${s.id}: duplicate body membership ${d.id}`, {
                    code: "duplicate-body-id",
                    partId: s.id,
                    bodyId: d.id
                });
                if (a.add(d.id), !d.partId) throw new Xe(`Body ${d.id}: missing owning partId`, {
                    code: "body-missing-part-id",
                    bodyId: d.id,
                    partId: s.id
                });
                if (d.partId !== s.id) throw new Xe(`Body ${d.id}: partId ${d.partId} does not match owner Part ${s.id}`, {
                    code: "body-part-mismatch",
                    partId: s.id,
                    bodyId: d.id
                });
                const c = i.get(d.id);
                if (c !== void 0 && c !== s.id) throw new Xe(`Body ${d.id}: shared by Parts ${c} and ${s.id}`, {
                    code: "body-shared-across-parts",
                    partId: s.id,
                    bodyId: d.id
                });
                i.set(d.id, s.id);
            }
        }
        const o = new Set;
        for (const s of r){
            if (o.has(s.id)) throw new Xe(`Document: duplicate body id ${s.id} in flat index`, {
                code: "duplicate-body-id",
                bodyId: s.id
            });
            if (o.add(s.id), !s.partId) throw new Xe(`Body ${s.id}: missing owning partId`, {
                code: "body-missing-part-id",
                bodyId: s.id
            });
            const a = n.get(s.partId);
            if (!a) throw new Xe(`Body ${s.id}: unknown owning Part ${s.partId}`, {
                code: "body-unknown-part",
                bodyId: s.id,
                partId: s.partId
            });
            if (!a.hasBody(s.id)) throw new Xe(`Body ${s.id}: Part ${s.partId} does not list this body`, {
                code: "orphan-body-index",
                partId: s.partId,
                bodyId: s.id
            });
            if (i.get(s.id) !== s.partId) throw new Xe(`Body ${s.id}: ownership index mismatch`, {
                code: "body-part-mismatch",
                partId: s.partId,
                bodyId: s.id
            });
        }
        for (const s of t)for (const a of s.getBodies())if (!o.has(a.id)) throw new Xe(`Part ${s.id}: body ${a.id} missing from document index`, {
            code: "part-unknown-body",
            partId: s.id,
            bodyId: a.id
        });
    }
    gc = class {
        id;
        name;
        _partOrder = [];
        _parts = new Map;
        _bodies = new Map;
        constructor(t = {}){
            this.id = t.id ?? ne(), this.name = t.name ?? "PRT";
        }
        addPart(t) {
            if (this._parts.has(t.id)) throw new Error(`FeatureDocument.addPart: duplicate part id ${t.id}`);
            if (t.getBodies().length > 0) throw new Error(`FeatureDocument.addPart: Part ${t.id} must be empty; add bodies via addBody`);
            this._partOrder.push(t.id), this._parts.set(t.id, t);
        }
        createPart(t = {}) {
            const r = new Th(t);
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
            const n = Lo(t.id, this.getBodies());
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
            for (const r of t)r.assertInvariants(Lo(r.id, t));
        }
        assertPartOwnershipInvariants() {
            Bh({
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
    function jh(e) {
        return e.type;
    }
    function zh(e) {
        return [
            ...new Set(e.dependencyIds)
        ].sort();
    }
    uw = function(e) {
        const t = e.getFeatures(), r = t.map((f)=>f.id), n = new Map(r.map((f, u)=>[
                f,
                u
            ])), i = new Map(t.map((f)=>[
                f.id,
                f
            ])), o = hf(new ff(t), r), s = e.tipFeatureId, a = s === null ? -1 : t.findIndex((f)=>f.id === s), d = [], c = [];
        let l = null;
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
            const I = jh(u), w = Ds(u), y = {
                featureId: u.id,
                type: u.type,
                status: "active",
                kind: I,
                historyIndex: h,
                priorSolidFeatureId: w && I !== "import" ? l : null,
                auxiliaryFeatureIds: zh(u)
            };
            d.push(y), (w && I !== "import" || I === "import") && (c.push(u.id), l = u.id);
        }
        return {
            bodyId: e.id,
            tipFeatureId: s,
            historyOrder: r,
            steps: d,
            solidExecutionOrder: c
        };
    };
    const qo = 1, vn = 2, Oa = vn, vi = 3, $r = 4;
    j = class extends Error {
        code;
        bodyId;
        featureId;
        constructor(t, r){
            super(t), this.name = "FeatureDocumentLoadError", this.code = r.code, this.bodyId = r.bodyId, this.featureId = r.featureId;
        }
    };
    function Pa(e) {
        const t = {
            sketchId: e.sketchId
        };
        return e.label !== void 0 && (t.label = e.label), e.sectionMode !== void 0 && (t.sectionMode = e.sectionMode), t;
    }
    function Nh(e) {
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
                    placementPlane: structuredClone(e.placementPlane ?? or({
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
                    sketchRef: Pa(e.sketchRef),
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
                    sketchRef: Pa(e.sketchRef),
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
                    edgeSelectors: e.edgeSelectors.map((r)=>bi(r, "edge")),
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
                    edgeSelectors: e.edgeSelectors.map((r)=>bi(r, "edge")),
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
                    throw new j(`FeatureSerializer: cannot persist feature type ${String(r.type)}`, {
                        code: "corrupt-feature",
                        featureId: r.id
                    });
                }
        }
    }
    function H(e, t, r, n) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new j(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function se(e, t, r, n) {
        if (typeof e != "string" || e.length === 0) throw new j(`Body ${r}: feature ${n} has invalid ${t}`, {
            code: "corrupt-feature",
            bodyId: r,
            featureId: n
        });
        return e;
    }
    function Ra(e, t, r) {
        try {
            return $n(e, "edge");
        } catch (n) {
            throw new j(`Body ${t}: feature ${r} has invalid edge selector: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function Vh(e, t, r) {
        if (typeof e != "object" || e === null || !("id" in e)) throw new j(`Body ${t}: sketch ${r} is missing placementPlane`, {
            code: "corrupt-feature",
            bodyId: t,
            featureId: r
        });
        try {
            return or(structuredClone(e));
        } catch (n) {
            throw new j(`Body ${t}: sketch ${r} has invalid placementPlane: ${n instanceof Error ? n.message : String(n)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: r
            });
        }
    }
    function Kh(e, t) {
        const r = {
            id: se(e.id, "id", t, String(e.id ?? "?")),
            name: se(e.name, "name", t, e.id),
            suppressed: !!e.suppressed,
            dependencyIds: Array.isArray(e.dependencyIds) ? [
                ...e.dependencyIds
            ] : [],
            timestamp: H(e.timestamp, "timestamp", t, e.id)
        };
        switch(e.type){
            case "sketch":
                return {
                    ...r,
                    type: "sketch",
                    sectionOwnership: e.sectionOwnership ?? "independent",
                    placementPlane: Vh(e.placementPlane, t, e.id),
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
                    if (!e.sketchRef?.sketchId || e.mode !== "add" && e.mode !== "cut") throw new j(`Body ${t}: extrude ${e.id} is missing sketchRef/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return {
                            ...As({
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
                        throw new j(`Body ${t}: extrude ${e.id} ${n instanceof Error ? n.message : "is invalid"}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "hole":
                {
                    if (!e.baseFeatureId || !e.sketchId) throw new j(`Body ${t}: hole ${e.id} is missing baseFeatureId/sketchId`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    if (e.mode !== "simple" && e.mode !== "counterbore" && e.mode !== "countersink" || e.depthMode !== "blind" && e.depthMode !== "through") throw new j(`Body ${t}: hole ${e.id} has invalid mode/depthMode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    const n = Array.isArray(e.pointIds) ? e.pointIds.filter((o)=>typeof o == "string" && o.length > 0) : void 0;
                    return {
                        ...r,
                        type: "hole",
                        baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                        sketchId: se(e.sketchId, "sketchId", t, e.id),
                        ...n && n.length > 0 ? {
                            pointIds: n
                        } : {},
                        diameter: H(e.diameter, "diameter", t, e.id),
                        depth: H(e.depth, "depth", t, e.id),
                        depthMode: e.depthMode,
                        mode: e.mode,
                        ...e.counterboreDiameter !== void 0 ? {
                            counterboreDiameter: H(e.counterboreDiameter, "counterboreDiameter", t, e.id)
                        } : {},
                        ...e.counterboreDepth !== void 0 ? {
                            counterboreDepth: H(e.counterboreDepth, "counterboreDepth", t, e.id)
                        } : {},
                        ...e.countersinkDiameter !== void 0 ? {
                            countersinkDiameter: H(e.countersinkDiameter, "countersinkDiameter", t, e.id)
                        } : {},
                        ...e.countersinkAngleDeg !== void 0 ? {
                            countersinkAngleDeg: H(e.countersinkAngleDeg, "countersinkAngleDeg", t, e.id)
                        } : {},
                        ...e.startChamferEnabled ? {
                            startChamferEnabled: !0,
                            startChamferOffset: H(e.startChamferOffset, "startChamferOffset", t, e.id),
                            startChamferAngleDeg: H(e.startChamferAngleDeg, "startChamferAngleDeg", t, e.id)
                        } : {},
                        ...e.endChamferEnabled ? {
                            endChamferEnabled: !0,
                            endChamferOffset: H(e.endChamferOffset, "endChamferOffset", t, e.id),
                            endChamferAngleDeg: H(e.endChamferAngleDeg, "endChamferAngleDeg", t, e.id)
                        } : {},
                        ...e.seriesParameters && typeof e.seriesParameters == "object" ? {
                            seriesParameters: structuredClone(e.seriesParameters)
                        } : {},
                        solidId: null
                    };
                }
            case "linear_pattern":
                {
                    if (!e.seedFeatureId || !Array.isArray(e.direction)) throw new j(`Body ${t}: linear pattern ${e.id} is missing seed/direction`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "linear_pattern",
                        seedFeatureId: se(e.seedFeatureId, "seedFeatureId", t, e.id),
                        direction: [
                            H(e.direction[0], "direction[0]", t, e.id),
                            H(e.direction[1], "direction[1]", t, e.id),
                            H(e.direction[2], "direction[2]", t, e.id)
                        ],
                        count: H(e.count, "count", t, e.id),
                        spacing: H(e.spacing, "spacing", t, e.id),
                        solidId: null
                    };
                }
            case "polar_pattern":
                {
                    if (!e.seedFeatureId || !e.axisRef) throw new j(`Body ${t}: polar pattern ${e.id} is missing seed/axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "polar_pattern",
                        seedFeatureId: se(e.seedFeatureId, "seedFeatureId", t, e.id),
                        axisRef: structuredClone(e.axisRef),
                        count: H(e.count, "count", t, e.id),
                        angleSpan: H(e.angleSpan, "angleSpan", t, e.id),
                        solidId: null
                    };
                }
            case "revolve":
                {
                    if (!e.sketchRef?.sketchId || !e.axisRef) throw new j(`Body ${t}: revolve ${e.id} is missing sketchRef/axisRef`, {
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
                        angle: H(e.angle, "angle", t, e.id),
                        ...e.startAngle !== void 0 ? {
                            startAngle: H(e.startAngle, "startAngle", t, e.id)
                        } : {},
                        ...e.endAngle !== void 0 ? {
                            endAngle: H(e.endAngle, "endAngle", t, e.id)
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
                    if (!e.targetFeatureId || !e.toolFeatureId || !e.op) throw new j(`Body ${t}: boolean ${e.id} is missing target/tool/op`, {
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
                    if (!e.attachmentMode || !e.basePlane) throw new j(`Body ${t}: datum_plane ${e.id} is missing attachmentMode/basePlane`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "datum_plane",
                        attachmentMode: e.attachmentMode,
                        basePlane: e.basePlane,
                        offset: H(e.offset, "offset", t, e.id),
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
                    if (!e.axisRef) throw new j(`Body ${t}: datum_axis ${e.id} is missing axisRef`, {
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
                    if (!e.baseFeatureId || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !Array.isArray(e.hinges) || e.hinges.length === 0 || !e.direction || !e.split || !Array.isArray(e.variableAngles) || !e.options) throw new j(`Body ${t}: draft ${e.id} is missing the Creo-style Draft contract`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "draft",
                        baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                        draftFaces: structuredClone(e.draftFaces),
                        hinges: structuredClone(e.hinges),
                        direction: structuredClone(e.direction),
                        reverseDirection: !!e.reverseDirection,
                        angle: H(e.angle, "angle", t, e.id),
                        reverseAngle: !!e.reverseAngle,
                        split: structuredClone(e.split),
                        variableAngles: structuredClone(e.variableAngles),
                        secondSideAngle: H(e.secondSideAngle, "secondSideAngle", t, e.id),
                        reverseSecondSideAngle: !!e.reverseSecondSideAngle,
                        options: structuredClone(e.options),
                        ...e.method ? {
                            method: e.method
                        } : {},
                        ...e.angleTolerance !== void 0 ? {
                            angleTolerance: H(e.angleTolerance, "angleTolerance", t, e.id)
                        } : {},
                        ...e.distanceTolerance !== void 0 ? {
                            distanceTolerance: H(e.distanceTolerance, "distanceTolerance", t, e.id)
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
                    length: H(e.length, "length", t, e.id),
                    width: H(e.width, "width", t, e.id),
                    height: H(e.height, "height", t, e.id),
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
                    radius: H(e.radius, "radius", t, e.id),
                    height: H(e.height, "height", t, e.id),
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
                    bottomRadius: H(e.bottomRadius, "bottomRadius", t, e.id),
                    topRadius: H(e.topRadius, "topRadius", t, e.id),
                    height: H(e.height, "height", t, e.id),
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
                    radius: H(e.radius, "radius", t, e.id),
                    solidId: null
                };
            case "split":
                return {
                    ...r,
                    type: "split",
                    baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    solidId: null
                };
            case "trim":
                return {
                    ...r,
                    type: "trim",
                    baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                    toolRef: structuredClone(e.toolRef),
                    keepSide: e.keepSide ?? "positive",
                    tolerance: H(e.tolerance ?? 1e-7, "tolerance", t, e.id),
                    solidId: null
                };
            case "face_pull":
                return {
                    ...r,
                    type: "face_pull",
                    baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                    faceSelectors: structuredClone(e.faceSelectors),
                    direction: [
                        ...e.direction
                    ],
                    distance: H(e.distance, "distance", t, e.id),
                    operation: e.operation ?? "add",
                    solidId: null
                };
            case "multi_transform":
                return {
                    ...r,
                    type: "multi_transform",
                    seedFeatureId: se(e.seedFeatureId, "seedFeatureId", t, e.id),
                    transforms: structuredClone(e.transforms),
                    solidId: null
                };
            case "shape_binder":
                return {
                    ...r,
                    type: "shape_binder",
                    sourceBodyId: se(e.sourceBodyId, "sourceBodyId", t, e.id),
                    sourceFeatureId: se(e.sourceFeatureId, "sourceFeatureId", t, e.id),
                    status: e.status === "stale" || e.status === "source_missing" ? e.status : "resolved",
                    solidId: null
                };
            case "fillet":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new j(`Body ${t}: fillet ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "fillet",
                        baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>Ra(i, t, e.id)),
                        radius: H(e.radius, "radius", t, e.id),
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
                            tolerance: H(e.tolerance, "tolerance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "chamfer":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.edgeSelectors) || e.edgeSelectors.length === 0) throw new j(`Body ${t}: chamfer ${e.id} is missing baseFeatureId/edgeSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "chamfer",
                        baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                        edgeSelectors: e.edgeSelectors.map((i)=>Ra(i, t, e.id)),
                        distance: H(e.distance, "distance", t, e.id),
                        ...e.secondDistance !== void 0 ? {
                            secondDistance: H(e.secondDistance, "secondDistance", t, e.id)
                        } : {},
                        ...e.angle !== void 0 ? {
                            angle: H(e.angle, "angle", t, e.id)
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
                            tolerance: H(e.tolerance, "tolerance", t, e.id)
                        } : {},
                        solidId: null
                    };
                }
            case "thickness":
                {
                    if (!e.baseFeatureId || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0) throw new j(`Body ${t}: thickness ${e.id} is missing baseFeatureId/removedFaceSelectors`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "thickness",
                        baseFeatureId: se(e.baseFeatureId, "baseFeatureId", t, e.id),
                        removedFaceSelectors: e.removedFaceSelectors.map((i)=>({
                                featureId: se(i.featureId, "removedFaceSelectors.featureId", t, e.id),
                                role: se(i.role, "removedFaceSelectors.role", t, e.id),
                                ...i.hintCentroid ? {
                                    hintCentroid: [
                                        ...i.hintCentroid
                                    ]
                                } : {}
                            })),
                        thickness: H(e.thickness, "thickness", t, e.id),
                        inward: e.inward ?? !0,
                        solidId: null
                    };
                }
            case "mirror":
                {
                    if (!e.seedFeatureId || !e.planeRef) throw new j(`Body ${t}: mirror ${e.id} is missing seedFeatureId/planeRef`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "mirror",
                        seedFeatureId: se(e.seedFeatureId, "seedFeatureId", t, e.id),
                        planeRef: structuredClone(e.planeRef),
                        solidId: null
                    };
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.mode) throw new j(`Body ${t}: loft ${e.id} is missing sectionSketchIds/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return {
                        ...r,
                        type: "loft",
                        sectionSketchIds: e.sectionSketchIds.map((i)=>se(i, "sectionSketchIds[]", t, e.id)),
                        mode: e.mode === "cut" ? "cut" : "add",
                        solidId: null
                    };
                }
            case "pipe":
                {
                    if (!e.profileSketchId || !e.pathSketchId || e.profileSketchId === e.pathSketchId || e.mode !== "add" && e.mode !== "cut") throw new j(`Body ${t}: pipe ${e.id} has invalid profile/path/mode`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    return Os({
                        id: se(e.id, "id", t, String(e.id)),
                        name: se(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        profileSketchId: se(e.profileSketchId, "profileSketchId", t, e.id),
                        sectionSketchIds: Array.isArray(e.sectionSketchIds) ? e.sectionSketchIds.map((n)=>se(n, "sectionSketchIds[]", t, e.id)) : void 0,
                        pathSketchId: se(e.pathSketchId, "pathSketchId", t, e.id),
                        mode: e.mode,
                        orientation: e.orientation === "parallel" || e.orientation === "fixed" ? e.orientation : "frenet"
                    });
                }
            case "helix":
                {
                    const n = e.axisOrigin, i = e.axisDirection;
                    if (!Array.isArray(n) || n.length !== 3 || !Array.isArray(i) || i.length !== 3) throw new j(`Body ${t}: helix ${e.id} has invalid axis`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                    try {
                        return qi({
                            id: se(e.id, "id", t, String(e.id)),
                            name: se(e.name, "name", t, e.id),
                            dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                            suppressed: e.suppressed === !0,
                            axisOrigin: n.map((o)=>H(o, "axisOrigin[]", t, e.id)),
                            axisDirection: i.map((o)=>H(o, "axisDirection[]", t, e.id)),
                            radius: H(e.radius, "radius", t, e.id),
                            endRadius: H(e.endRadius, "endRadius", t, e.id),
                            pitch: H(e.pitch, "pitch", t, e.id),
                            endPitch: H(e.endPitch, "endPitch", t, e.id),
                            height: H(e.height, "height", t, e.id),
                            handedness: e.handedness === "left" ? "left" : "right",
                            startAngle: H(e.startAngle, "startAngle", t, e.id)
                        });
                    } catch (o) {
                        throw o instanceof j ? o : new j(`Body ${t}: invalid helix ${e.id}`, {
                            code: "corrupt-feature",
                            bodyId: t,
                            featureId: e.id
                        });
                    }
                }
            case "thread":
                try {
                    return Ps({
                        id: se(e.id, "id", t, String(e.id)),
                        name: se(e.name, "name", t, e.id),
                        dependencyIds: Array.isArray(e.dependencyIds) ? e.dependencyIds : [],
                        suppressed: e.suppressed === !0,
                        helixFeatureId: se(e.helixFeatureId, "helixFeatureId", t, e.id),
                        mode: e.mode === "cut" ? "cut" : "add",
                        profileKind: e.profileKind === "custom_sketch" ? "custom_sketch" : "metric_triangle",
                        profileSketchId: e.profileSketchId === null ? null : se(e.profileSketchId, "profileSketchId", t, e.id),
                        majorRadius: H(e.majorRadius, "majorRadius", t, e.id),
                        pitch: H(e.pitch, "pitch", t, e.id),
                        depth: H(e.depth, "depth", t, e.id)
                    });
                } catch (n) {
                    throw n instanceof j ? n : new j(`Body ${t}: invalid thread ${e.id}`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: e.id
                    });
                }
            default:
                {
                    const n = e;
                    throw new j(`Body ${t}: unknown feature type in v3 payload`, {
                        code: "corrupt-feature",
                        bodyId: t,
                        featureId: n.id
                    });
                }
        }
    }
    function Bs(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("documentFormatVersion must be a positive safe integer");
        return e;
    }
    Bs(1);
    function Ic(e) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error("featurePayloadVersion must be a positive safe integer");
        return e;
    }
    const Lh = Ic(1);
    function Hh(e, t) {
        if (typeof e != "object" || e === null || e.schemaVersion !== $r) throw new j("LegacyV4DocumentAdapter: expected schemaVersion 4", {
            code: "invalid-schema"
        });
        return t(e);
    }
    function qh(e) {
        return e.type === "extrude" && "sketchRef" in e && "depth" in e && "mode" in e;
    }
    function Uh(e) {
        return e.type === "datum_plane" && "attachmentMode" in e;
    }
    function Wh(e, t) {
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
            if (!qh(e)) throw new j(`Body ${t}: extrude feature ${e.id} is missing v1 parameters`, {
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
            if (!Uh(e)) throw new j(`Body ${t}: datum_plane feature ${e.id} is missing v1 parameters`, {
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
        if (e.type === "revolve" || e.type === "boolean") throw new j(`Body ${t}: feature ${e.id} type "${e.type}" cannot be migrated from v1 (missing specialized fields)`, {
            code: "migration-failed",
            bodyId: t,
            featureId: e.id
        });
        const n = e;
        throw new j(`Body ${t}: feature ${n.id} has unmigratable type "${String(n.type)}"`, {
            code: "migration-failed",
            bodyId: t,
            featureId: n.id
        });
    }
    function Gh(e) {
        if (e.schemaVersion !== qo) throw new j(`migrateFeatureDocumentV1ToV2: expected schemaVersion 1, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const t = [], r = e.bodies.map((i)=>{
            const o = i.features.map((s)=>Wh(s, i.id));
            return t.push(`body ${i.id}: migrated ${o.length} feature(s)`), {
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: o
            };
        });
        return {
            document: {
                schemaVersion: Oa,
                id: e.id,
                name: e.name,
                bodies: r
            },
            log: {
                fromVersion: qo,
                toVersion: Oa,
                bodyIds: r.map((i)=>i.id),
                notes: t
            }
        };
    }
    const Yh = {
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
    function _i(e) {
        return Array.isArray(e) ? e.map(_i) : typeof e != "object" || e === null ? e : Object.fromEntries(Object.entries(e).sort(([t], [r])=>t.localeCompare(r)).map(([t, r])=>[
                t,
                _i(r)
            ]));
    }
    function Jh(e, t) {
        return JSON.stringify(_i(e)) === JSON.stringify(_i(t));
    }
    function Zh(e) {
        if (e.type === "extrude" || e.type === "revolve") return e.sketchRef;
    }
    function Xh(e, t, r) {
        const n = e.map(Zh).filter((o)=>o?.sketchId === t).map((o)=>o.attachment).filter((o)=>o !== void 0);
        if (n.length === 0) return;
        const i = n[0];
        if (n.some((o)=>!Jh(i, o))) throw new j(`Body ${r}: sketch ${t} has conflicting legacy consumer attachments`, {
            code: "migration-failed",
            bodyId: r,
            featureId: t
        });
        return structuredClone(i);
    }
    function Qh(e) {
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
    function em(e, t, r) {
        return e ? e.kind === "base" ? Qh(t) ? {
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
    function tm(e) {
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
    function rm(e, t, r, n) {
        const i = n.sketchAttachments?.[e.id] ?? Xh(r, e.id, t), o = n.sketchFrames?.[e.id];
        return {
            ...structuredClone(e),
            type: "sketch",
            placementPlane: or({
                id: `${e.id}::placement-plane`,
                support: em(i, o, t),
                orientation: tm(i),
                normalReversed: i?.normalReversed ?? !1,
                frameSnapshot: o ?? Yh
            })
        };
    }
    function nm(e) {
        if (e.type !== "extrude" && e.type !== "revolve" || !e.sketchRef || typeof e.sketchRef != "object") return structuredClone(e);
        const { attachment: t, ...r } = e.sketchRef;
        return {
            ...structuredClone(e),
            sketchRef: structuredClone(r)
        };
    }
    function Ma(e, t = {}) {
        if (e.schemaVersion !== vn) throw new j(`migrateFeatureDocumentV2ToV3: expected schemaVersion 2, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        const r = [], n = e.bodies.map((i)=>({
                ...structuredClone(i),
                features: i.features.map((o)=>o.type !== "sketch" ? nm(o) : (r.push(o.id), rm(o, i.id, i.features, t)))
            }));
        return {
            document: {
                schemaVersion: vi,
                id: e.id,
                name: e.name,
                bodies: n
            },
            log: {
                fromVersion: vn,
                toVersion: vi,
                migratedSketchIds: r,
                notes: [
                    `migrated ${r.length} private sketch plane(s)`
                ]
            }
        };
    }
    const im = "LegacyPart";
    function bc(e) {
        return `${e}::LegacyPart`;
    }
    function om(e, t) {
        if (!e || typeof e.id != "string" || typeof e.name != "string") throw new j(`migrateV3ToV4: invalid body at index ${t}`, {
            code: "invalid-schema",
            bodyId: e?.id
        });
        if (!Array.isArray(e.features)) throw new j(`migrateV3ToV4: body ${e.id} has malformed features`, {
            code: "invalid-schema",
            bodyId: e.id
        });
        const r = new Set;
        for (const n of e.features){
            if (!n || typeof n.id != "string") throw new j(`migrateV3ToV4: body ${e.id} has malformed feature entry`, {
                code: "invalid-schema",
                bodyId: e.id
            });
            if (r.has(n.id)) throw new j(`migrateV3ToV4: body ${e.id} has duplicate feature id ${n.id}`, {
                code: "invalid-schema",
                bodyId: e.id,
                featureId: n.id
            });
            r.add(n.id);
        }
    }
    function sm(e) {
        if (e.schemaVersion !== vi) throw new j(`migrateV3ToV4: expected schemaVersion 3, got ${String(e.schemaVersion)}`, {
            code: "invalid-schema"
        });
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.bodies)) throw new j("migrateV3ToV4: invalid v3 envelope", {
            code: "invalid-schema"
        });
        const t = new Set;
        for(let i = 0; i < e.bodies.length; i++){
            const o = e.bodies[i];
            if (om(o, i), t.has(o.id)) throw new j(`migrateV3ToV4: duplicate body id ${o.id}`, {
                code: "invalid-schema",
                bodyId: o.id
            });
            t.add(o.id);
        }
        const r = bc(e.id), n = {
            id: r,
            name: im,
            visible: !0,
            transform: Ts(),
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
                schemaVersion: $r,
                id: e.id,
                name: e.name,
                parts: [
                    n
                ]
            }
        };
    }
    const wc = Bs(5), am = Lh;
    function xc(e) {
        return Nh(e);
    }
    function dm(e, t) {
        return Kh(e, t);
    }
    function cm(e) {
        return {
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: e.getFeatures().map(xc)
        };
    }
    function lm(e) {
        const t = e.getParts();
        return t.length > 0 ? {
            schemaVersion: $r,
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
                    bodies: r.getBodies().map(cm)
                }))
        } : {
            schemaVersion: $r,
            id: e.id,
            name: e.name,
            parts: []
        };
    }
    function Uo(e) {
        return Array.isArray(e) ? e.map(Uo) : It(e) ? Object.fromEntries(Object.entries(e).filter(([, t])=>t !== void 0).map(([t, r])=>[
                t,
                Uo(r)
            ])) : e;
    }
    function um(e) {
        const t = Uo(xc(e)), { envelope: r } = Gu(t);
        return Object.freeze({
            ...r,
            featurePayloadVersion: am
        });
    }
    function fm(e) {
        return Object.freeze({
            id: e.id,
            name: e.name,
            tipFeatureId: e.tipFeatureId,
            features: Object.freeze(e.getFeatures().map(um))
        });
    }
    function pm(e) {
        return Object.freeze({
            documentFormatVersion: wc,
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
                    bodies: Object.freeze(t.getBodies().map(fm))
                })))
        });
    }
    fw = function(e, t = {}) {
        return t.format === "v5" ? pm(e) : lm(e);
    };
    function It(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function At(e, t) {
        if (typeof e != "string" || e.length === 0) throw new j(`FeatureDocument v5: ${t} must be a non-empty string`, {
            code: "invalid-schema"
        });
        return e;
    }
    function Ca(e, t, r) {
        if (!Array.isArray(e) || e.length !== t || e.some((n)=>typeof n != "number" || !Number.isFinite(n))) throw new j(`FeatureDocument v5: ${r} must contain ${t} finite numbers`, {
            code: "invalid-schema"
        });
        return [
            ...e
        ];
    }
    function hm(e, t) {
        if (!It(e) || !It(e.parameters) || !It(e.references)) throw new j(`Body ${t}: invalid v5 Feature envelope`, {
            code: "corrupt-feature",
            bodyId: t
        });
        try {
            const r = Nr({
                id: At(e.id, "feature.id"),
                typeId: At(e.typeId, "feature.typeId"),
                name: typeof e.name == "string" ? e.name : "",
                suppressed: e.suppressed === !0,
                timestamp: e.timestamp,
                parameters: e.parameters,
                references: e.references
            });
            return Object.freeze({
                ...r,
                featurePayloadVersion: Ic(e.featurePayloadVersion)
            });
        } catch (r) {
            throw r instanceof j ? r : new j(`Body ${t}: invalid v5 Feature ${String(e.id ?? "?")}: ${r instanceof Error ? r.message : String(r)}`, {
                code: "corrupt-feature",
                bodyId: t,
                featureId: typeof e.id == "string" ? e.id : void 0
            });
        }
    }
    function mm(e) {
        if (!It(e)) throw new j("FeatureDocument v5: payload is not an object", {
            code: "invalid-schema"
        });
        let t;
        try {
            t = Bs(e.documentFormatVersion);
        } catch  {
            throw new j("FeatureDocument v5: invalid documentFormatVersion", {
                code: "unsupported-version"
            });
        }
        if (t !== wc) throw new j(`FeatureDocument v5: unsupported documentFormatVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (!Array.isArray(e.parts)) throw new j("FeatureDocument v5: parts must be an array", {
            code: "invalid-schema"
        });
        const r = e.parts.map((n, i)=>{
            if (!It(n) || !Array.isArray(n.bodies)) throw new j(`FeatureDocument v5: invalid part at index ${i}`, {
                code: "invalid-schema"
            });
            const o = At(n.id, `parts[${i}].id`);
            if (!It(n.transform)) throw new j(`FeatureDocument v5: Part ${o} has invalid transform`, {
                code: "invalid-schema"
            });
            const s = n.bodies.map((a, d)=>{
                if (!It(a) || !Array.isArray(a.features)) throw new j(`FeatureDocument v5: invalid Body at ${o}[${d}]`, {
                    code: "invalid-schema"
                });
                const c = At(a.id, `parts.${o}.bodies[${d}].id`);
                let l;
                if (a.tipFeatureId === null) l = null;
                else if (typeof a.tipFeatureId == "string") l = a.tipFeatureId;
                else throw new j(`FeatureDocument v5: Body ${c} has invalid tipFeatureId`, {
                    code: "invalid-schema",
                    bodyId: c
                });
                return Object.freeze({
                    id: c,
                    name: At(a.name, `Body ${c}.name`),
                    tipFeatureId: l,
                    features: Object.freeze(a.features.map((f)=>hm(f, c)))
                });
            });
            return Object.freeze({
                id: o,
                name: At(n.name, `Part ${o}.name`),
                visible: n.visible !== !1,
                transform: Object.freeze({
                    origin: Object.freeze(Ca(n.transform.origin, 3, `Part ${o}.origin`)),
                    rotation: Object.freeze(Ca(n.transform.rotation, 9, `Part ${o}.rotation`))
                }),
                bodies: Object.freeze(s)
            });
        });
        return Object.freeze({
            documentFormatVersion: t,
            id: At(e.id, "document.id"),
            name: At(e.name, "document.name"),
            parts: Object.freeze(r)
        });
    }
    function ym(e) {
        const t = Nr({
            id: e.id,
            typeId: e.typeId,
            name: e.name,
            suppressed: e.suppressed,
            timestamp: e.timestamp,
            parameters: e.parameters,
            references: e.references
        });
        return Yu(t);
    }
    function js(e, t) {
        const r = [];
        for (const n of e){
            if (!n?.id || !n?.name || !Array.isArray(n.features)) throw new j(`FeatureSerializer: invalid body payload ${String(n?.id ?? "?")}`, {
                code: "invalid-schema",
                bodyId: n?.id
            });
            const i = n.features.map((o)=>dm(o, n.id));
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
    function gm(e) {
        const t = e.map((r)=>({
                id: r.id,
                getFeatures: ()=>r.features
            }));
        for (const r of e)try {
            Ko({
                bodyId: r.id,
                features: r.features,
                tipFeatureId: r.tipFeatureId,
                foreignFeatureIds: Lo(r.id, t)
            });
        } catch (n) {
            throw n instanceof vt ? new j(n.message, {
                code: "invariant-violation",
                bodyId: n.bodyId,
                featureId: n.featureId
            }) : n;
        }
    }
    function zs(e, t, r, n) {
        gm(n);
        const i = new gc({
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
            const s = new yc({
                id: o.id,
                name: o.name,
                partId: o.partId
            });
            s.restoreFeatureState(o.features, o.tipFeatureId), i.addBody(s);
        }
        return i;
    }
    function Im(e) {
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
        }), r.push(...js(n.bodies.map((i)=>({
                id: i.id,
                name: i.name,
                tipFeatureId: i.tipFeatureId,
                features: i.features.map(ym)
            })), n.id));
        return zs(e.id, e.name, t, r);
    }
    function bm(e) {
        if (typeof e.id != "string" || typeof e.name != "string" || !Array.isArray(e.parts)) throw new j("FeatureSerializer: invalid v4 document envelope", {
            code: "invalid-schema"
        });
        const t = [], r = [];
        for (const n of e.parts){
            if (!n?.id || !n?.name || !Array.isArray(n.bodies)) throw new j(`FeatureSerializer: invalid part payload ${String(n?.id ?? "?")}`, {
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
                } : Ts(),
                bodyIds: n.bodies.map((i)=>i.id)
            }), r.push(...js(n.bodies, n.id));
        }
        return zs(e.id, e.name, t, r);
    }
    pw = function(e, t = {}) {
        if (!It(e)) throw new j("FeatureSerializer: payload is not an object", {
            code: "invalid-schema"
        });
        if (Object.hasOwn(e, "documentFormatVersion")) return Im(mm(e));
        const r = e.schemaVersion;
        if (r === $r) return Hh(e, bm);
        let n;
        if (r === vi) n = e;
        else if (r === vn) n = Ma(e, t).document;
        else if (r === qo) {
            const { document: d } = Gh(e);
            n = Ma(d, t).document;
        } else throw new j(`FeatureSerializer: unsupported schema version ${String(r)}`, {
            code: "unsupported-version"
        });
        const { document: i, legacyPartId: o } = sm(n), s = i.parts.map((d)=>({
                id: d.id,
                name: d.name,
                visible: d.visible,
                transform: d.transform,
                bodyIds: d.bodies.map((c)=>c.id)
            })), a = [];
        for (const d of i.parts)a.push(...js(d.bodies, d.id));
        if (o !== bc(n.id)) throw new j("migrateV3ToV4: legacy Part id mismatch", {
            code: "invalid-schema"
        });
        return zs(i.id, i.name, s, a);
    };
    let wm;
    wm = "featureDocument";
    hw = 2;
    function fo(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    xm = function(e) {
        if (typeof e != "object" || e === null) return !1;
        const t = e;
        if (t.kind !== "feature-document-project-slice" || t.sliceVersion !== 1 && t.sliceVersion !== 2 || typeof t.featureDocument != "object" || t.featureDocument === null) return !1;
        const r = fo(t.profiles), n = t.bodyProfiles === void 0 || fo(t.bodyProfiles);
        return t.sliceVersion === 1 ? r : n && (r || fo(t.bodyProfiles));
    };
    Sm = function(e) {
        if (!xm(e)) throw new j("FeatureDocument project slice is missing or invalid", {
            code: "invalid-schema"
        });
        const t = e.featureDocument.schemaVersion;
        if (t !== 1 && t !== vn && t !== 3 && t !== $r) throw new j(`FeatureDocument project slice has unsupported schemaVersion ${String(t)}`, {
            code: "unsupported-version"
        });
        if (e.derivedCache && e.derivedCache.kind !== "derivedCache") throw new j('FeatureDocument project slice derivedCache must set kind: "derivedCache"', {
            code: "invalid-schema"
        });
        if (e.derivedCache && delete e.derivedCache, e.sketchDocument != null) {
            const r = e.sketchDocument;
            if (typeof r.schemaVersion != "number" || typeof r.id != "string" || typeof r.revision != "number" || !Array.isArray(r.sketches)) throw new j("FeatureDocument project slice sketchDocument is invalid", {
                code: "invalid-schema"
            });
        }
        return e.profiles == null && (e.profiles = {}), e;
    };
    mw = function(e) {
        if (typeof e != "object" || e === null) return null;
        const t = e[wm];
        return t == null ? null : Sm(t);
    };
    function kr(e, t = 0) {
        if (t > 14 || e == null) return !1;
        if (ArrayBuffer.isView(e)) return !0;
        if (Array.isArray(e)) return e.some((r)=>kr(r, t + 1));
        if (typeof e != "object") return !1;
        for (const r of Object.values(e))if (kr(r, t + 1)) return !0;
        return !1;
    }
    km = function(e) {
        if (e == null || typeof e != "object") return !1;
        const t = e;
        return !!(t.derivedCache != null || t.tessellation != null || t.tipMesh != null || t.meshes != null || t.meshCache != null || kr(t.profiles) || kr(t.bodyProfiles) || kr(t.derivedCache) || kr(t.featureDocument));
    };
    yw = function(e, t = "project slice") {
        if (km(e)) throw new Error(`${t} contains display geometry (tessellation/mesh typed arrays or derivedCache). Only OCC-rebuildable semantic objects may be persisted.`);
    };
    const Sc = 256 * 1024;
    function Ue(e) {
        const t = new Set, r = [], n = (i)=>{
            if (!i) return;
            const o = i.buffer;
            t.has(o) || (t.add(o), r.push(o));
        };
        return n(e.positions), n(e.normals), n(e.indices), n(e.uvs), n(e.colors), r;
    }
    function kc(e) {
        return Ue(e).reduce((t, r)=>t + r.byteLength, 0);
    }
    function Fm(e) {
        return kc(e) >= Sc;
    }
    const Kr = 1;
    function Ns(e) {
        const t = e;
        return !t || t.protocolVersion !== Kr || !t.requestId || !t.bodyId || !t.featureId || !Number.isInteger(t.revision) || t.revision < 0 || !Number.isFinite(t.deadlineMs) || !t.operation || !t.payload ? {
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
    function vm(e) {
        return e.mesh;
    }
    const _r = Kr;
    function _m(e) {
        return Ns(e);
    }
    function Em(e) {
        return e === _r;
    }
    function Fc(e) {
        return {
            type: "hello",
            protocolVersion: _r,
            capabilities: e
        };
    }
    function vc(e) {
        if (!e || typeof e != "object" || e.type !== "hello") return {
            accepted: !1,
            protocolVersion: _r,
            reason: "invalid hello"
        };
        const t = e.protocolVersion;
        return t === _r ? {
            accepted: !0,
            protocolVersion: t
        } : {
            accepted: !1,
            protocolVersion: _r,
            reason: `unsupported protocol version ${t}`
        };
    }
    function Am(e) {
        if (!e || typeof e != "object") return [];
        const t = [];
        for (const r of Object.values(e))r instanceof ArrayBuffer ? t.push(r) : ArrayBuffer.isView(r) && t.push(r.buffer.slice(0));
        return t;
    }
    function Om(e, t) {
        return e.requestId === t.requestId && t.revision >= e.revision;
    }
    class Pm {
        constructor(t){
            this.client = t;
        }
        client;
        negotiated = !1;
        negotiate() {
            const t = vc(Fc({
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
    class Rm {
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
    class Mm {
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
    class oi extends Error {
        constructor(t){
            super(t), this.name = "FeatureBuildHandlerRegistryError";
        }
    }
    class _c {
        handlers = new Map;
        frozen = !1;
        register(t) {
            if (this.frozen) throw new oi("Feature build handler registry is frozen");
            if (!t.typeId.trim()) throw new oi("Feature build handler typeId is required");
            if (this.handlers.has(t.typeId)) throw new oi(`Duplicate Feature build handler: ${t.typeId}`);
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
            if (!r) return ze({
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
                return ze({
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
    class Cm {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "box";
        async build(t) {
            const r = await this.kernel.build(t);
            return ze({
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
    function si(e) {
        return Mr({
            deleted: [
                e
            ]
        }).deleted[0];
    }
    function fr(e) {
        const t = si(e);
        return [
            t.producerFeatureId,
            t.outputKey,
            t.semanticId
        ].join("\0");
    }
    function zt(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function $m(e) {
        const t = Mr({
            deleted: e.outputIdentities
        }).deleted, r = new Set(t.map(fr)), n = new Set, i = [], o = [], s = [];
        for (const a of e.evidence){
            const d = si(a.input), c = fr(d);
            if (n.has(c)) throw new Error(`Duplicate Boolean history classification for ${zt(d)}`);
            if (n.add(c), a.outcome === "retained") {
                const l = si(a.output);
                if (fr(d) !== fr(l)) throw new Error(`Boolean retained evidence changed identity ${zt(d)}`);
                if (!r.has(fr(l))) throw new Error(`Boolean retained output is missing: ${zt(l)}`);
                continue;
            }
            if (a.outcome === "modified") {
                if (a.outputs.length === 0) throw new Error(`Boolean modified evidence has no outputs: ${zt(d)}`);
                for (const l of a.outputs){
                    const f = si(l);
                    if (!r.has(fr(f))) throw new Error(`Boolean modified output is missing: ${zt(f)}`);
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
            if (!a.reason.trim()) throw new Error(`Boolean unresolved history reason is required for ${zt(d)}`);
            s.push(Object.freeze({
                severity: "warning",
                code: "boolean-history-unresolved",
                message: `Boolean ${e.operation} could not prove topology identity for ${zt(d)}: ${a.reason}`,
                details: {
                    operation: e.operation,
                    producerFeatureId: d.producerFeatureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }
            }));
        }
        return Object.freeze({
            history: Mr({
                modified: i,
                deleted: o
            }),
            outputIdentities: t,
            diagnostics: Object.freeze(s)
        });
    }
    function Dm(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function po(e, t) {
        if (typeof e != "string" || !e.trim()) throw new Error(`Topology reference ${t} must be a non-empty string`);
        return e;
    }
    function $a(e, t) {
        if (!Array.isArray(e) || e.length !== 3 || e.some((r)=>typeof r != "number" || !Number.isFinite(r))) throw new Error(`Topology reference ${t} must be a finite 3D point`);
        return Object.freeze([
            e[0],
            e[1],
            e[2]
        ]);
    }
    function Qt(e, t, r) {
        if (!Dm(e)) throw new Error(`${r} must be a topology reference object`);
        if (Object.hasOwn(e, "occEdgeOrdinal")) throw new Error(`${r} cannot contain a runtime OCC ordinal`);
        if (e.subshapeKind !== t) throw new Error(`${r}.subshapeKind must be ${t}`);
        const n = e.hintCentroid === void 0 ? void 0 : $a(e.hintCentroid, `${r}.hintCentroid`), i = e.samplePoints === void 0 ? void 0 : Array.isArray(e.samplePoints) ? Object.freeze(e.samplePoints.map((o, s)=>$a(o, `${r}.samplePoints[${s}]`))) : (()=>{
            throw new Error(`${r}.samplePoints must be an array`);
        })();
        return Object.freeze({
            producerFeatureId: po(e.producerFeatureId, `${r}.producerFeatureId`),
            outputKey: po(e.outputKey, `${r}.outputKey`),
            subshapeKind: t,
            semanticId: po(e.semanticId, `${r}.semanticId`),
            ...n ? {
                hintCentroid: n
            } : {},
            ...i ? {
                samplePoints: i
            } : {}
        });
    }
    function er(e, t, r) {
        if (!Array.isArray(e)) throw new Error(`${r} must be an array`);
        return Object.freeze(e.map((n, i)=>Qt(n, t, `${r}[${i}]`)));
    }
    function Tm(e, t, r) {
        const n = r.status === "lost" ? "topology-reference-lost" : "topology-reference-ambiguous";
        return ze({
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
    async function sr(e, t, r) {
        const n = [];
        for (const i of t){
            const o = await r.resolve(i);
            if (o.status !== "resolved") return Object.freeze({
                status: "failed",
                result: Tm(e, i, o)
            });
            n.push(o.value);
        }
        return Object.freeze({
            status: "resolved",
            values: Object.freeze(n)
        });
    }
    function Vs(e, t, r, n) {
        return ze({
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
    function Bm(e) {
        const t = e.parameters.operation;
        if (t !== "union" && t !== "cut" && t !== "intersect") throw new Error(`Unsupported Boolean operation: ${String(t)}`);
        return t;
    }
    function ho(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class jm {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "boolean";
        async build(t) {
            const r = [
                Qt(t.references.target, "solid", "references.target"),
                Qt(t.references.tool, "solid", "references.tool")
            ], n = await sr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = Bm(t), o = await this.kernel.build(t, n.values), s = $m({
                operation: i,
                outputIdentities: o.outputIdentities,
                evidence: o.historyEvidence
            }), a = {
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            };
            return ze({
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
                            inputSemanticId: ho(d.input),
                            outputSemanticIds: d.outputs.map(ho)
                        })),
                    deleted: s.history.deleted.map(ho)
                },
                diagnostics: s.diagnostics
            });
        }
    }
    class zm {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "chamfer";
        async build(t) {
            const r = er(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await sr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return Vs(t, "chamfer", i.solidData, i.diagnostics);
        }
    }
    class Nm {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "cone";
        async build(t) {
            const r = await this.kernel.build(t);
            return ze({
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
    const Vm = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, Km = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function mt(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function Da(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function Ta(e) {
        return Object.freeze(e.map((t)=>Object.freeze({
                inputSemanticId: mt(t.input),
                outputSemanticIds: Object.freeze(t.outputs.map(mt))
            })));
    }
    function Lm(e) {
        const t = e.topologyOutputs.map((d, c)=>Object.freeze({
                outputKey: Da(d.outputKey, Vm, `topologyOutputs[${c}].outputKey`),
                kind: d.kind,
                semanticId: Da(d.semanticId, Km, `topologyOutputs[${c}].semanticId`),
                ...d.data ? {
                    data: d.data
                } : {}
            })), r = t.map((d)=>d.outputKey);
        if (r.includes("solid")) throw new Error("Runner topology output key solid is reserved");
        if (new Set(r).size !== r.length) throw new Error("Runner topology output keys must be unique");
        const n = Mr(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Runner requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((d)=>mt({
                    producerFeatureId: e.featureId,
                    outputKey: d.outputKey,
                    semanticId: d.semanticId
                }))
        ]), s = new Set;
        for (const d of [
            ...n.generated,
            ...n.modified
        ])for (const c of d.outputs){
            const l = mt(c);
            if (!o.has(l)) throw new Error(`ShapeHistory output ${l} is not a published runner output`);
            s.add(l);
        }
        for (const d of o)if (!s.has(d)) throw new Error(`Published runner output ${d} has no ShapeHistory evidence`);
        const a = new Set([
            ...n.generated.map((d)=>mt(d.input)),
            ...n.modified.map((d)=>mt(d.input)),
            ...n.deleted.map(mt)
        ]);
        for (const d of e.sourceReferences){
            const c = mt(d);
            if (!a.has(c)) throw new Error(`Runner input ${c} has no explicit ShapeHistory evidence`);
        }
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: Ta(n.generated),
            modified: Ta(n.modified),
            deleted: Object.freeze(n.deleted.map(mt))
        });
    }
    function Hm(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function un(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw new Error(`${t} must be a positive finite number`);
        return e;
    }
    function qm(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function Um(e) {
        if (e !== "frenet" && e !== "fixed" && e !== "surface_normal") throw new Error("parameters.orientation must be frenet, fixed, or surface_normal");
        return e;
    }
    function Wm(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function Gm(e, t, r, n) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.sectionLaw must contain at least two controls");
        const i = new Set;
        let o = -1 / 0;
        const s = e.map((a, d)=>{
            if (!Hm(a)) throw new Error(`parameters.sectionLaw[${d}] must be an object`);
            const c = qm(a.id, `parameters.sectionLaw[${d}].id`);
            if (i.has(c)) throw new Error(`parameters.sectionLaw contains duplicate id ${c}`);
            if (i.add(c), typeof a.position != "number" || !Number.isFinite(a.position) || a.position < 0 || a.position > 1) throw new Error(`parameters.sectionLaw[${d}].position must be finite and between 0 and 1`);
            if (a.position <= o) throw new Error("parameters.sectionLaw positions must be strictly increasing");
            o = a.position;
            const l = un(a.widthScale, `parameters.sectionLaw[${d}].widthScale`), f = un(a.heightScale, `parameters.sectionLaw[${d}].heightScale`), u = t * l * r * f, h = Math.max(1, n) * 1e-9;
            if (Math.abs(u - n) > h) throw new Error(`parameters.sectionLaw[${d}] violates area constraint ${n}`);
            return Object.freeze({
                id: c,
                position: a.position,
                widthScale: l,
                heightScale: f
            });
        });
        if (s[0].position !== 0 || s[s.length - 1].position !== 1) throw new Error("parameters.sectionLaw must cover positions 0 and 1");
        return Object.freeze(s);
    }
    function Ba(e, t, r) {
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
    function mo(e, t) {
        return Object.freeze({
            reference: e,
            value: t
        });
    }
    class Ym {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "custom-die-casting-runner";
        async build(t) {
            const r = Ba(er(t.references.profileCurveReferences, "edge", "references.profileCurveReferences"), "references.profileCurveReferences", 2), n = Qt(t.references.spineReference, "edge", "references.spineReference"), i = Ba(er(t.references.surfaceReferences, "face", "references.surfaceReferences"), "references.surfaceReferences", 1), o = un(t.parameters.width, "parameters.width"), s = un(t.parameters.height, "parameters.height"), a = un(t.parameters.areaConstraint, "parameters.areaConstraint"), d = Gm(t.parameters.sectionLaw, o, s, a), c = Um(t.parameters.orientation), l = Wm(t.parameters.continuity), f = Object.freeze([
                ...r,
                n,
                ...i
            ]), u = await sr(t, f, this.references);
            if (u.status === "failed") return u.result;
            const h = r.length, m = Object.freeze(r.map((S, F)=>mo(S, u.values[F]))), I = mo(n, u.values[h]), w = Object.freeze(i.map((S, F)=>mo(S, u.values[h + 1 + F]))), y = await this.kernel.build(t, Object.freeze({
                profileCurves: m,
                spine: I,
                surfaces: w,
                width: o,
                height: s,
                areaConstraint: a,
                sectionLaw: d,
                orientation: c,
                continuity: l
            })), x = Lm({
                featureId: t.featureId,
                sourceReferences: f,
                topologyOutputs: y.topologyOutputs,
                historyEvidence: y.historyEvidence
            }), b = x.topologyOutputs.map((S)=>Object.freeze({
                    producerFeatureId: t.featureId,
                    outputKey: S.outputKey,
                    semanticId: S.semanticId
                })), g = Object.fromEntries([
                [
                    "solid",
                    {
                        outputKey: "solid",
                        kind: "solid",
                        data: {
                            ...y.solidData,
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
                ...x.topologyOutputs.map((S)=>[
                        S.outputKey,
                        {
                            outputKey: S.outputKey,
                            kind: S.kind,
                            data: {
                                ...S.data,
                                semanticIdentity: {
                                    producerFeatureId: t.featureId,
                                    outputKey: S.outputKey,
                                    semanticId: S.semanticId
                                }
                            }
                        }
                    ])
            ]);
            return ze({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: g,
                shapeHistory: {
                    generated: x.generated,
                    modified: x.modified,
                    deleted: x.deleted
                },
                diagnostics: y.diagnostics
            });
        }
    }
    class Jm {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "cylinder";
        async build(t) {
            const r = await this.kernel.build(t);
            return ze({
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
    function ja(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class Zm {
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
            return ze({
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
                            inputSemanticId: ja(r.modifiedInput),
                            outputSemanticIds: [
                                ja(n)
                            ]
                        }
                    ],
                    deleted: []
                },
                diagnostics: r.diagnostics
            });
        }
    }
    function Xm(e) {
        return e.replaceAll("_", "-");
    }
    function za(e) {
        return e.startsWith("side_") || /^hole_\d+_side_\d+$/.test(e);
    }
    function Qm(e, t, r) {
        return {
            producerFeatureId: e,
            outputKey: t,
            semanticId: r
        };
    }
    function ey(e) {
        const t = new Map;
        for (const l of e.faces){
            if (!l.role.trim()) throw new Error("Extrude face role must not be empty");
            if (t.has(l.role)) throw new Error(`Duplicate Extrude face role: ${l.role}`);
            t.set(l.role, l);
        }
        for (const l of [
            "top",
            "bottom"
        ])if (!t.has(l)) throw new Error(`Extrude topology is missing required ${l} face`);
        const r = new Map;
        for (const l of e.profile.sides){
            if (r.has(l.outputRole)) throw new Error(`Duplicate Extrude profile side mapping: ${l.outputRole}`);
            r.set(l.outputRole, l);
        }
        const n = [
            ...t.keys()
        ].filter(za).sort();
        if (n.length === 0) throw new Error("Extrude topology must contain at least one side face");
        for (const l of n)if (!r.has(l)) throw new Error(`Extrude side face ${l} has no explicit profile semantic source`);
        for (const l of r.keys())if (!t.has(l) || !za(l)) throw new Error(`Extrude profile semantic source targets missing side face ${l}`);
        const i = [], o = (l, f, u, h, m = {})=>{
            const I = Qm(e.featureId, l, u);
            return i.push([
                l,
                {
                    outputKey: l,
                    kind: f,
                    data: {
                        ...m,
                        role: h,
                        semanticIdentity: I
                    }
                }
            ]), I;
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
        for (const l of n){
            const f = Xm(l), u = o(f, "topology-face", `face:${l}`, l, t.get(l)?.data), h = r.get(l);
            c.push({
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
            shapeHistory: Mr({
                generated: c
            })
        });
    }
    function Na(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Gr(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`Extrude profile semantic reference ${t} is required`);
        return e;
    }
    function ty(e) {
        if (!Na(e) || !Array.isArray(e.sides)) throw new Error("Extrude request requires references.profile with explicit semantic sides");
        const t = e.sides.map((r, n)=>{
            if (!Na(r)) throw new Error(`Extrude profile semantic side ${n} must be an object`);
            return Object.freeze({
                inputSemanticId: Gr(r.inputSemanticId, `sides[${n}].inputSemanticId`),
                outputRole: Gr(r.outputRole, `sides[${n}].outputRole`)
            });
        });
        return Object.freeze({
            producerFeatureId: Gr(e.producerFeatureId, "producerFeatureId"),
            outputKey: Gr(e.outputKey, "outputKey"),
            wireSemanticId: Gr(e.wireSemanticId, "wireSemanticId"),
            sides: Object.freeze(t)
        });
    }
    function Va(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    class ry {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "extrude";
        async build(t) {
            const r = await this.kernel.build(t), n = ey({
                featureId: t.featureId,
                profile: ty(t.references.profile),
                solidData: r.solidData,
                faces: r.faces
            });
            return ze({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: n.outputs,
                shapeHistory: {
                    generated: n.shapeHistory.generated.map((i)=>({
                            inputSemanticId: Va(i.input),
                            outputSemanticIds: i.outputs.map(Va)
                        })),
                    modified: [],
                    deleted: []
                }
            });
        }
    }
    class ny {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "fillet";
        async build(t) {
            const r = er(t.references.edgeSelectors, "edge", "references.edgeSelectors"), n = await sr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return Vs(t, "fillet", i.solidData, i.diagnostics);
        }
    }
    class iy {
        constructor(t){
            this.kernel = t;
        }
        kernel;
        typeId = "sphere";
        async build(t) {
            const r = await this.kernel.build(t);
            return ze({
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
    class oy {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "thickness";
        async build(t) {
            const r = er(t.references.removedFaceSelectors, "face", "references.removedFaceSelectors");
            if (r.length === 0) throw new Error("Thickness requires at least one removed face reference");
            const n = await sr(t, r, this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, n.values);
            return Vs(t, "thickness", i.solidData, i.diagnostics);
        }
    }
    const sy = /^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$/, ay = /^[a-z][a-z0-9-]*(?::[a-z0-9][a-z0-9._-]*)+$/;
    function Qe(e) {
        return `${e.producerFeatureId}:${e.outputKey}:${e.semanticId}`;
    }
    function Ka(e, t, r) {
        if (e.trim() !== e || !t.test(e)) throw new Error(`${r} must already be canonical`);
        return e;
    }
    function dy(e) {
        return Qe(e);
    }
    function cy(e) {
        const t = e.topologyOutputs.map((l, f)=>Object.freeze({
                outputKey: Ka(l.outputKey, sy, `topologyOutputs[${f}].outputKey`),
                kind: l.kind,
                semanticId: Ka(l.semanticId, ay, `topologyOutputs[${f}].semanticId`),
                ...l.data ? {
                    data: l.data
                } : {}
            })), r = t.map((l)=>l.outputKey);
        if (r.includes("solid")) throw new Error("topology output key solid is reserved for the primary output");
        if (new Set(r).size !== r.length) throw new Error("Variable-radius fillet topology output keys must be unique");
        const n = Mr(e.historyEvidence);
        if (n.generated.length === 0 && n.modified.length === 0 && n.deleted.length === 0) throw new Error("Variable-radius fillet requires explicit ShapeHistory evidence");
        const i = `${e.featureId}:solid:solid:result`, o = new Set([
            i,
            ...t.map((l)=>Qe({
                    producerFeatureId: e.featureId,
                    outputKey: l.outputKey,
                    semanticId: l.semanticId
                }))
        ]), s = new Set;
        for (const l of [
            ...n.generated,
            ...n.modified
        ])for (const f of l.outputs){
            const u = Qe(f);
            if (!o.has(u)) throw new Error(`ShapeHistory output ${u} is not a published variable-radius fillet output`);
            s.add(u);
        }
        if (!s.has(i)) throw new Error("ShapeHistory must map the primary solid output explicitly");
        for (const l of o)if (!s.has(l)) throw new Error(`Published output ${l} has no ShapeHistory evidence`);
        if (!n.modified.some((l)=>l.input.producerFeatureId === e.baseFeatureId && l.outputs.some((f)=>Qe(f) === i))) throw new Error("ShapeHistory must explicitly modify the selected base into the solid output");
        const d = new Set([
            ...n.generated.map((l)=>Qe(l.input)),
            ...n.modified.map((l)=>Qe(l.input)),
            ...n.deleted.map(Qe)
        ]);
        for (const l of e.selectedEdges){
            const f = dy(l);
            if (!d.has(f)) throw new Error(`Selected edge ${f} has no explicit ShapeHistory evidence`);
        }
        const c = (l)=>Object.freeze(l.map((f)=>Object.freeze({
                    inputSemanticId: Qe(f.input),
                    outputSemanticIds: Object.freeze(f.outputs.map(Qe))
                })));
        return Object.freeze({
            topologyOutputs: Object.freeze(t),
            generated: c(n.generated),
            modified: c(n.modified),
            deleted: Object.freeze(n.deleted.map(Qe))
        });
    }
    function ly(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Ec(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`${t} must be a non-empty string`);
        return e.trim();
    }
    function uy(e) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("parameters.radiusLaw must contain at least two controls");
        const t = new Set;
        let r = -1 / 0;
        const n = e.map((i, o)=>{
            if (!ly(i)) throw new Error(`parameters.radiusLaw[${o}] must be an object`);
            const s = Ec(i.id, `parameters.radiusLaw[${o}].id`);
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
    function fy(e) {
        if (e !== "c0" && e !== "c1" && e !== "c2") throw new Error("parameters.continuity must be c0, c1, or c2");
        return e;
    }
    function py(e) {
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
    class hy {
        constructor(t, r){
            this.kernel = t, this.references = r;
        }
        kernel;
        references;
        typeId = "variable-radius-fillet";
        async build(t) {
            const r = Ec(t.references.baseFeatureId, "references.baseFeatureId"), n = py(er(t.references.edgeReferences, "edge", "references.edgeReferences")), i = uy(t.parameters.radiusLaw), o = fy(t.parameters.continuity);
            if (typeof t.parameters.tangentPropagation != "boolean") throw new Error("parameters.tangentPropagation must be boolean");
            const s = await sr(t, n, this.references);
            if (s.status === "failed") return s.result;
            const a = Object.freeze(n.map((h, m)=>Object.freeze({
                    reference: h,
                    value: s.values[m]
                }))), d = await this.kernel.build(t, Object.freeze({
                baseFeatureId: r,
                edges: a,
                radiusLaw: i,
                continuity: o,
                tangentPropagation: t.parameters.tangentPropagation
            })), c = cy({
                featureId: t.featureId,
                baseFeatureId: r,
                selectedEdges: n,
                topologyOutputs: d.topologyOutputs,
                historyEvidence: d.historyEvidence
            }), l = Object.freeze({
                producerFeatureId: t.featureId,
                outputKey: "solid",
                semanticId: "solid:result"
            }), f = c.topologyOutputs.map((h)=>Object.freeze({
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
                            semanticIdentity: l,
                            topologyIdentities: f
                        }
                    }
                ],
                ...c.topologyOutputs.map((h)=>[
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
            return ze({
                featureId: t.featureId,
                featureRevision: t.featureRevision,
                featurePayloadVersion: t.featurePayloadVersion,
                status: "success",
                primaryOutputKey: "solid",
                outputs: u,
                shapeHistory: {
                    generated: c.generated,
                    modified: c.modified,
                    deleted: c.deleted
                },
                diagnostics: d.diagnostics
            });
        }
    }
    function my(e, t) {
        const r = {};
        return e.forEach((n, i)=>{
            (r[n.field] ??= []).push(t[i]);
        }), Object.freeze(Object.fromEntries(Object.entries(r).map(([n, i])=>[
                n,
                Object.freeze(i)
            ])));
    }
    class Ks {
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
            ]), n = await sr(t, r.map((a)=>a.reference), this.references);
            if (n.status === "failed") return n.result;
            const i = await this.kernel.build(t, my(r, n.values)), o = new Set(this.spec.outputs.map((a)=>a.outputKey));
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
            return ze({
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
    const yy = Object.freeze({
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
                        reference: Qt(t, "face", "references.faceSelector")
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
    function gy(e, t) {
        const r = (n)=>new Ks(yy[n], e[n], t);
        return Object.freeze({
            sketch: r("sketch"),
            datum_plane: r("datum_plane"),
            datum_axis: r("datum_axis"),
            shape_binder: r("shape_binder"),
            import: r("import")
        });
    }
    function Iy(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function La(e) {
        const t = e.references.toolRef;
        if (!Iy(t)) throw new Error("references.toolRef must be an object");
        if (Object.hasOwn(t, "subshapeKind")) return [
            {
                field: "toolRef",
                reference: Qt(t, "face", "references.toolRef")
            }
        ];
        if (t.kind === "world_plane" || t.kind === "datum_plane") return [];
        if (t.kind === "face") return [
            {
                field: "toolRef",
                reference: Qt(t.selector, "face", "references.toolRef.selector")
            }
        ];
        throw new Error(`references.toolRef has unsupported kind ${String(t.kind)}`);
    }
    function by(e) {
        return er(e.references.faceSelectors, "face", "references.faceSelectors").map((t)=>({
                field: "faceSelectors",
                reference: t
            }));
    }
    function Ft(e, t) {
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
    const wy = Object.freeze({
        split: Ft("split", La),
        trim: Ft("trim", La),
        face_pull: Ft("face_pull", by),
        hole: Ft("hole"),
        revolve: Ft("revolve"),
        loft: Ft("loft"),
        pipe: Ft("pipe"),
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
        thread: Ft("thread")
    });
    function xy(e, t) {
        const r = (n)=>new Ks(wy[n], e[n], t);
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
    function Wn(e) {
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
    const Sy = Object.freeze({
        multi_transform: Wn("multi_transform"),
        linear_pattern: Wn("linear_pattern"),
        polar_pattern: Wn("polar_pattern"),
        mirror: Wn("mirror")
    });
    function ky(e, t) {
        const r = (n)=>new Ks(Sy[n], e[n], t);
        return Object.freeze({
            multi_transform: r("multi_transform"),
            linear_pattern: r("linear_pattern"),
            polar_pattern: r("polar_pattern"),
            mirror: r("mirror")
        });
    }
    function Fy(e, t) {
        const r = gy(t.referenceFeatures, t.topologyReferences), n = xy(t.operationFeatures, t.topologyReferences), i = ky(t.transformFeatures, t.topologyReferences), o = Object.freeze({
            sketch: r.sketch,
            datum_plane: r.datum_plane,
            datum_axis: r.datum_axis,
            draft: new Zm(t.draft),
            box: new Cm(t.box),
            cylinder: new Jm(t.cylinder),
            cone: new Nm(t.cone),
            sphere: new iy(t.sphere),
            split: n.split,
            trim: n.trim,
            face_pull: n.face_pull,
            multi_transform: i.multi_transform,
            shape_binder: r.shape_binder,
            extrude: new ry(t.extrude),
            hole: n.hole,
            linear_pattern: i.linear_pattern,
            polar_pattern: i.polar_pattern,
            revolve: n.revolve,
            boolean: new jm(t.boolean.kernel, t.boolean.references),
            fillet: new ny(t.fillet.kernel, t.fillet.references),
            chamfer: new zm(t.chamfer.kernel, t.chamfer.references),
            thickness: new oy(t.thickness.kernel, t.thickness.references),
            mirror: i.mirror,
            loft: n.loft,
            pipe: n.pipe,
            helix: n.helix,
            thread: n.thread,
            import: r.import
        }), s = Object.freeze([
            ...yi.map((c)=>o[c]),
            ...t.variableRadiusFillet ? [
                new hy(t.variableRadiusFillet.kernel, t.variableRadiusFillet.references)
            ] : [],
            ...t.customDieCastingRunner ? [
                new Ym(t.customDieCastingRunner.kernel, t.customDieCastingRunner.references)
            ] : []
        ]), a = [];
        try {
            for (const c of s)a.push(e.register(c));
        } catch (c) {
            for (const l of [
                ...a
            ].reverse())l();
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
    function ce(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function U(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function L(e) {
        return typeof e == "string" && e.length > 0;
    }
    const vy = new Set([
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
    ]), _y = new Set([
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
    ]), Ey = new Set([
        "union",
        "cut",
        "common",
        "intersect"
    ]), Yr = new Set([
        "add",
        "cut"
    ]), Ay = new Set([
        "offset_base",
        "on_face",
        "on_datum",
        "three_point",
        "on_path"
    ]), Oy = new Set([
        "xy",
        "xz",
        "yz"
    ]), Py = new Set([
        "normal",
        "u",
        "v"
    ]);
    function K(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Ry(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function re(e) {
        return Array.isArray(e) && e.length === 3 && e.every((t)=>typeof t == "number" && Number.isFinite(t));
    }
    function Ji(e) {
        return ce(e) && L(e.featureId) && L(e.role);
    }
    function Ls(e) {
        return ce(e) ? e.kind === "world_plane" ? re(e.origin) && re(e.normal) : e.kind === "datum_plane" ? L(e.featureId) : e.kind === "face" ? Ji(e.selector) : !1 : !1;
    }
    function My(e) {
        return Ls(e) || ce(e) && e.kind === "edge_chain" && Array.isArray(e.selectors) && e.selectors.length > 0 && e.selectors.every(Ji);
    }
    function Cy(e) {
        return ce(e) ? e.kind === "world" ? re(e.direction) && Math.hypot(...e.direction) > 1e-9 : e.kind === "datum_axis" ? L(e.featureId) : e.kind === "plane_normal" ? Ls(e.plane) : e.kind === "edge" ? Ji(e.selector) : !1 : !1;
    }
    function $y(e, t) {
        return !ce(e) || !L(e.kind) ? K(`Revolve ${t} missing axisRef`, t) : e.kind === "world" ? !re(e.origin) || !re(e.direction) ? K(`Revolve ${t} world axis requires origin/direction`, t) : null : e.kind === "datum" ? !L(e.featureId) || !Py.has(String(e.axis)) ? K(`Revolve ${t} datum axis requires featureId/axis`, t) : null : e.kind === "datum_axis" ? L(e.featureId) ? null : K(`Revolve ${t} datum axis requires featureId`, t) : K(`Revolve ${t} has unknown axisRef.kind`, t);
    }
    function pr(e, t, r) {
        if (!ce(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!Array.isArray(e.loops) || e.loops.length === 0) {
            const i = Array.isArray(e.geometry) ? e.geometry : [], o = i.reduce((a, d)=>(ce(d) && typeof d.kind == "string" && (a[d.kind] = (a[d.kind] ?? 0) + 1), a), {}), s = Object.entries(o).map(([a, d])=>`${a}=${d}`).join(", ");
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
            if (!ce(o) || !Array.isArray(o.points) || o.points.length < 3) return {
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
            for (const s of o.points)if (!ce(s) || !U(s.x) || !U(s.y)) return {
                code: "missing-profile",
                message: `Sketch profile ${r} has invalid loop point`,
                featureId: t,
                recoverable: !1
            };
        }
        if (!re(e.origin) || !re(e.normal) || !re(e.uAxis) || !re(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = gs(e, t);
        return n ? {
            code: "missing-profile",
            message: n.message,
            featureId: t,
            recoverable: !1
        } : null;
    }
    function Dy(e, t, r) {
        if (!ce(e)) return {
            code: "missing-profile",
            message: `Missing sketch profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        const n = e;
        try {
            Yi(n), mc(n);
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
    function Ty(e, t, r) {
        if (!ce(e)) return {
            code: "missing-profile",
            message: `Missing sketch path profile for ${r}`,
            featureId: t,
            recoverable: !1
        };
        if (!re(e.origin) || !re(e.normal) || !re(e.uAxis) || !re(e.vAxis)) return {
            code: "missing-profile",
            message: `Sketch path profile ${r} requires origin/normal/uAxis/vAxis`,
            featureId: t,
            recoverable: !1
        };
        const n = Array.isArray(e.geometry) ? e.geometry.filter((o)=>ce(o) && (o.kind === "line" || o.kind === "bezier" || o.kind === "spline")) : [], i = Array.isArray(e.loops) ? e.loops.find((o)=>ce(o) && o.isOuter)?.points : void 0;
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
            for (const a of s)if (!ce(a) || !U(a.x) || !U(a.y)) return {
                code: "missing-profile",
                message: `Sketch path profile ${r} has invalid open path geometry`,
                featureId: t,
                recoverable: !1
            };
        }
        return null;
    }
    function Ha(e, t, r) {
        if (!Array.isArray(e)) return K(`${r} ${t} requires edgeSelectors array`, t);
        for (const n of e){
            if (!ce(n) || !L(n.featureId) || !L(n.role)) return K(`${r} ${t} has invalid edge selector`, t);
            if (n.hintCentroid !== void 0 && !re(n.hintCentroid)) return K(`${r} ${t} has invalid edge selector hint`, t);
            if (n.samplePoints !== void 0 && (!Array.isArray(n.samplePoints) || n.samplePoints.length < 2 || n.samplePoints.some((i)=>!re(i)))) return K(`${r} ${t} has invalid edge selector samplePoints`, t);
            if (n.occEdgeOrdinal !== void 0 && (typeof n.occEdgeOrdinal != "number" || !Number.isInteger(n.occEdgeOrdinal) || n.occEdgeOrdinal < 0)) return K(`${r} ${t} has invalid edge selector occEdgeOrdinal`, t);
        }
        return null;
    }
    function By(e, t) {
        if (!ce(e) || !L(e.id) || !L(e.type)) return K("Feature snapshot missing id/type");
        if (!vy.has(e.type)) return null;
        if (!L(e.name) || typeof e.suppressed != "boolean" || !Ry(e.dependencyIds) || !U(e.timestamp)) return K(`Feature ${e.id} missing name/suppressed/dependencyIds/timestamp`, e.id);
        const r = e.id;
        switch(e.type){
            case "sketch":
            case "import":
                return null;
            case "datum_plane":
                {
                    if (!Ay.has(String(e.attachmentMode)) || !Oy.has(String(e.basePlane)) || !U(e.offset) || !U(e.width) || !U(e.height)) return K(`Datum ${r} missing attachmentMode/basePlane/offset/size`, r);
                    if (e.attachmentMode === "on_face") {
                        if (!ce(e.faceSelector) || !L(e.faceSelector.featureId) || !L(e.faceSelector.role)) return K(`Datum ${r} attachmentMode on_face requires faceSelector`, r);
                    } else if (e.attachmentMode === "on_datum") {
                        if (!L(e.baseDatumId)) return K(`Datum ${r} attachmentMode on_datum requires baseDatumId`, r);
                    } else if (e.faceSelector !== null && e.faceSelector !== void 0 && (!ce(e.faceSelector) || !L(e.faceSelector.featureId) || !L(e.faceSelector.role))) return K(`Datum ${r} has invalid faceSelector`, r);
                    if (e.attachmentMode === "three_point") {
                        if (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(re)) return K(`Datum ${r} attachmentMode three_point requires threePoints`, r);
                    } else if (e.threePoints !== null && e.threePoints !== void 0 && (!Array.isArray(e.threePoints) || e.threePoints.length !== 3 || !e.threePoints.every(re))) return K(`Datum ${r} has invalid threePoints`, r);
                    if (e.attachmentMode === "on_path") {
                        if (!L(e.pathFeatureId) || !U(e.pathParameter) || e.pathParameter < 0 || e.pathParameter > 1) return K(`Datum ${r} attachmentMode on_path requires pathFeatureId and pathParameter in [0,1]`, r);
                    } else if (e.pathFeatureId !== null && e.pathFeatureId !== void 0 && (!L(e.pathFeatureId) || e.pathParameter !== null && !U(e.pathParameter))) return K(`Datum ${r} has invalid path association`, r);
                    return null;
                }
            case "datum_axis":
                return !ce(e.axisRef) || !L(e.axisRef.kind) ? K(`Datum Axis ${r} requires axisRef`, r) : e.axisRef.kind === "world" && (!re(e.axisRef.origin) || !re(e.axisRef.direction)) ? K(`Datum Axis ${r} has invalid world axis`, r) : e.axisRef.kind === "two_point" && (!re(e.axisRef.start) || !re(e.axisRef.end)) ? K(`Datum Axis ${r} has invalid two-point axis`, r) : e.axisRef.kind === "datum_intersection" && (!L(e.axisRef.firstDatumId) || !L(e.axisRef.secondDatumId) || e.axisRef.firstDatumId === e.axisRef.secondDatumId) ? K(`Datum Axis ${r} has invalid Datum Plane references`, r) : null;
            case "draft":
                return !L(e.baseFeatureId) || !Array.isArray(e.draftFaces) || e.draftFaces.length === 0 || !e.draftFaces.every(Ji) || !Array.isArray(e.hinges) || e.hinges.length < 1 || e.hinges.length > 2 || !e.hinges.every(My) || !Cy(e.direction) || !U(e.angle) || e.angle <= 0 || e.angle >= Math.PI / 2 || !ce(e.split) || ![
                    "none",
                    "hinge",
                    "reference"
                ].includes(String(e.split.kind)) || !Array.isArray(e.variableAngles) || !U(e.secondSideAngle) || e.secondSideAngle <= 0 || e.secondSideAngle >= Math.PI / 2 || !ce(e.options) ? K(`Draft ${r} has invalid Creo-style parameters`, r) : e.split.kind === "reference" && !Ls(e.split.reference) ? K(`Draft ${r} has invalid split reference`, r) : e.variableAngles.every((n)=>ce(n) && L(n.id) && U(n.location) && n.location >= 0 && n.location <= 1 && U(n.angle) && n.angle > 0 && n.angle < Math.PI / 2) ? null : K(`Draft ${r} has invalid variable angle controls`, r);
            case "box":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !re(e.origin) || !U(e.length) || !U(e.width) || !U(e.height) || e.length <= 0 || e.width <= 0 || e.height <= 0 ? K(`Box ${r} has invalid parameters`, r) : null;
            case "cylinder":
            case "cone":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !re(e.origin) || !re(e.direction) || Math.hypot(...e.direction) <= 1e-9 || !U(e.height) || e.height <= 0 || e.type === "cylinder" && (!U(e.radius) || e.radius <= 0) || e.type === "cone" && (!U(e.bottomRadius) || !U(e.topRadius) || e.bottomRadius <= 0 || e.topRadius < 0) ? K(`Primitive ${r} has invalid parameters`, r) : null;
            case "sphere":
                return ![
                    "add",
                    "cut"
                ].includes(String(e.mode)) || !re(e.center) || !U(e.radius) || e.radius <= 0 ? K(`Sphere ${r} has invalid parameters`, r) : null;
            case "split":
                return !L(e.baseFeatureId) || !ce(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) ? K(`Split ${r} has invalid base/tool/keepSide`, r) : null;
            case "trim":
                return !L(e.baseFeatureId) || !ce(e.toolRef) || ![
                    "positive",
                    "negative",
                    "both"
                ].includes(String(e.keepSide)) || typeof e.tolerance != "number" || !Number.isFinite(e.tolerance) || e.tolerance < 0 ? K(`Trim Sheet ${r} has invalid base/tool/keepSide/tolerance`, r) : null;
            case "face_pull":
                if (!L(e.baseFeatureId) || !Array.isArray(e.faceSelectors) || e.faceSelectors.length === 0 || !re(e.direction) || !U(e.distance) || e.distance <= 0 || ![
                    "add",
                    "cut"
                ].includes(String(e.operation))) return K(`Face Pull ${r} has invalid base/faces/direction/distance/operation`, r);
                for (const n of e.faceSelectors)if (!ce(n) || !L(n.featureId) || !L(n.role)) return K(`Face Pull ${r} has an invalid face selector`, r);
                return null;
            case "multi_transform":
                return !L(e.seedFeatureId) || !Array.isArray(e.transforms) || e.transforms.length === 0 ? K(`MultiTransform ${r} has invalid seed/transforms`, r) : null;
            case "shape_binder":
                return !L(e.sourceBodyId) || !L(e.sourceFeatureId) || ![
                    "resolved",
                    "stale",
                    "source_missing"
                ].includes(String(e.status)) ? K(`ShapeBinder ${r} has invalid source/status`, r) : null;
            case "extrude":
                {
                    const i = !(e.startOffset !== void 0 || e.endOffset !== void 0) || U(e.startOffset) && U(e.endOffset) && e.startOffset !== e.endOffset;
                    if (!L(e.sketchId) || !U(e.depth) || e.depth <= 0 || !i || e.secondDepth !== void 0 && (!U(e.secondDepth) || e.secondDepth < 0) || e.symmetric !== void 0 && typeof e.symmetric != "boolean" || !Yr.has(String(e.mode))) return K(`Extrude ${r} has invalid sketchId/from-to/depth/secondDepth/symmetric/mode`, r);
                    const o = pr(t[e.sketchId], r, e.sketchId);
                    return o || null;
                }
            case "hole":
                {
                    if (!L(e.baseFeatureId) || !L(e.sketchId) || !U(e.diameter) || !U(e.depth) || ![
                        "blind",
                        "through"
                    ].includes(String(e.depthMode)) || ![
                        "simple",
                        "counterbore",
                        "countersink"
                    ].includes(String(e.mode))) return K(`Hole ${r} has invalid parameters`, r);
                    if (e.pointIds !== void 0 && (!Array.isArray(e.pointIds) || e.pointIds.some((o)=>!L(o)))) return K(`Hole ${r} has invalid pointIds`, r);
                    const n = t[e.sketchId];
                    if (!n) return K(`Hole ${r} missing sketch profile ${String(e.sketchId)}`, r);
                    const i = Dy(n, r, e.sketchId);
                    if (i) return i;
                    try {
                        Yi(n, Array.isArray(e.pointIds) ? e.pointIds : void 0);
                    } catch (o) {
                        return K(`Hole ${r}: ${o instanceof Error ? o.message : String(o)}`, r);
                    }
                    if (e.mode === "counterbore" && (!U(e.counterboreDiameter) || !U(e.counterboreDepth))) return K(`Hole ${r} counterbore parameters are required`, r);
                    if (e.mode === "countersink" && (!U(e.countersinkDiameter) || !U(e.countersinkAngleDeg))) return K(`Hole ${r} countersink parameters are required`, r);
                    for (const o of [
                        "start",
                        "end"
                    ]){
                        const s = e[`${o}ChamferEnabled`];
                        if (s !== void 0 && typeof s != "boolean") return K(`Hole ${r} ${o}ChamferEnabled is invalid`, r);
                        if (s && (!U(e[`${o}ChamferOffset`]) || e[`${o}ChamferOffset`] <= 0 || !U(e[`${o}ChamferAngleDeg`]) || !(e[`${o}ChamferAngleDeg`] > 1 && e[`${o}ChamferAngleDeg`] < 179))) return K(`Hole ${r} ${o}Chamfer parameters are invalid`, r);
                    }
                    return null;
                }
            case "linear_pattern":
                return !L(e.seedFeatureId) || !re(e.direction) || !Number.isInteger(e.count) || e.count < 2 || !U(e.spacing) || e.spacing <= 0 ? K(`Linear pattern ${r} has invalid seed/count/spacing/direction`, r) : null;
            case "polar_pattern":
                {
                    const n = e.axisRef;
                    return !L(e.seedFeatureId) || !Number.isInteger(e.count) || e.count < 2 || !U(e.angleSpan) || e.angleSpan <= 0 || e.angleSpan > Math.PI * 2 + 1e-9 || !n || n.kind === "world" && (!re(n.origin) || !re(n.direction) || Math.hypot(...n.direction) <= 1e-9) || n.kind === "datum" && (!L(n.featureId) || ![
                        "normal",
                        "u",
                        "v"
                    ].includes(String(n.axis))) ? K(`Polar pattern ${r} has invalid seed/count/angle/axis`, r) : null;
                }
            case "revolve":
                {
                    if (!L(e.sketchId) || !U(e.angle) || !Yr.has(String(e.mode))) return K(`Revolve ${r} missing sketchId/angle/mode`, r);
                    const n = $y(e.axisRef, r);
                    if (n) return n;
                    const i = pr(t[e.sketchId], r, e.sketchId);
                    return i || null;
                }
            case "boolean":
                return !L(e.targetFeatureId) || !L(e.toolFeatureId) || !Ey.has(String(e.op)) ? K(`Boolean ${r} missing target/tool/op`, r) : e.targetBodyId !== void 0 && !L(e.targetBodyId) || e.toolBodyId !== void 0 && !L(e.toolBodyId) ? K(`Boolean ${r} has invalid Body references`, r) : null;
            case "fillet":
                return !L(e.baseFeatureId) || !U(e.radius) ? K(`Fillet ${r} missing baseFeatureId/radius`, r) : Ha(e.edgeSelectors, r, "Fillet");
            case "chamfer":
                return !L(e.baseFeatureId) || !U(e.distance) ? K(`Chamfer ${r} missing baseFeatureId/distance`, r) : e.secondDistance !== void 0 && !U(e.secondDistance) ? K(`Chamfer ${r} has invalid secondDistance`, r) : Ha(e.edgeSelectors, r, "Chamfer");
            case "thickness":
                return !L(e.baseFeatureId) || !U(e.thickness) || e.thickness <= 0 || !Array.isArray(e.removedFaceSelectors) || e.removedFaceSelectors.length === 0 ? K(`Thickness ${r} missing baseFace/thickness/selectors`, r) : e.removedFaceSelectors.every((i)=>ce(i) && L(i.featureId) && L(i.role) && (i.hintCentroid === void 0 || re(i.hintCentroid))) ? null : K(`Thickness ${r} has invalid removed face selectors`, r);
            case "mirror":
                {
                    const n = e.planeRef;
                    return !L(e.seedFeatureId) || !n || !L(n.kind) || n.kind === "world" && (!re(n.origin) || !re(n.normal) || Math.hypot(...n.normal) <= 1e-9) || n.kind === "datum" && !L(n.featureId) ? K(`Mirror ${r} has invalid seed/plane`, r) : null;
                }
            case "loft":
                {
                    if (!Array.isArray(e.sectionSketchIds) || e.sectionSketchIds.length < 2 || !e.sectionSketchIds.every((n)=>L(n)) || !Yr.has(String(e.mode))) return K(`Loft ${r} has invalid sections/mode`, r);
                    for (const n of e.sectionSketchIds){
                        const i = pr(t[n], r, n);
                        if (i) return i;
                    }
                    return null;
                }
            case "pipe":
                {
                    if (!L(e.profileSketchId) || !L(e.pathSketchId) || e.profileSketchId === e.pathSketchId || !Yr.has(String(e.mode))) return K(`Pipe ${r} has invalid profile/path/mode`, r);
                    const n = Array.isArray(e.sectionSketchIds) && e.sectionSketchIds.length > 0 ? e.sectionSketchIds : [
                        e.profileSketchId
                    ];
                    if (!n.every((s)=>L(s)) || n.includes(e.pathSketchId)) return K(`Pipe ${r} has invalid section/path references`, r);
                    const i = pr(t[e.profileSketchId], r, e.profileSketchId);
                    if (i) return i;
                    for (const s of n){
                        const a = pr(t[s], r, s);
                        if (a) return a;
                    }
                    const o = Ty(t[e.pathSketchId], r, e.pathSketchId);
                    return o || (e.orientation !== void 0 && !new Set([
                        "frenet",
                        "parallel",
                        "fixed"
                    ]).has(String(e.orientation)) ? K(`Pipe ${r} has invalid orientation`, r) : null);
                }
            case "helix":
                return !re(e.axisOrigin) || !re(e.axisDirection) || Math.hypot(...e.axisDirection) <= 1e-9 || !U(e.radius) || e.radius <= 0 || !U(e.endRadius) || e.endRadius <= 0 || !U(e.pitch) || e.pitch <= 0 || !U(e.endPitch) || e.endPitch <= 0 || !U(e.height) || e.height <= 0 || !U(e.startAngle) || e.handedness !== "right" && e.handedness !== "left" ? K(`Helix ${r} has invalid axis or dimensions`, r) : null;
            case "thread":
                return !L(e.helixFeatureId) || !Yr.has(String(e.mode)) || e.profileKind !== "metric_triangle" && e.profileKind !== "custom_sketch" || e.profileKind === "custom_sketch" && !L(e.profileSketchId) || !U(e.majorRadius) || e.majorRadius <= 0 || !U(e.pitch) || e.pitch <= 0 || !U(e.depth) || e.depth <= 0 || e.depth >= e.majorRadius ? K(`Thread ${r} has invalid Helix/profile/dimensions`, r) : e.profileKind === "custom_sketch" ? pr(t[e.profileSketchId], r, e.profileSketchId) : null;
            default:
                return K(`Unknown feature type ${String(e.type)}`, r);
        }
    }
    function jy(e) {
        return _y.has(e);
    }
    const Ce = 2;
    function Je(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function zy(e) {
        return typeof e == "number" && Number.isFinite(e);
    }
    function $e(e) {
        return typeof e == "string" && e.length > 0;
    }
    const Ny = new Set([
        "suppressed",
        "after_tip",
        "no_tip"
    ]);
    function Me(e, t) {
        return {
            code: "protocol-invalid",
            message: e,
            recoverable: !1
        };
    }
    function Se(e, t) {
        return {
            code: "invalid-plan",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Ac(e, t) {
        return {
            code: "missing-feature-parameters",
            message: e,
            recoverable: !1,
            ...t ? {
                featureId: t
            } : {}
        };
    }
    function Ei(e) {
        return Array.isArray(e) && e.every((t)=>typeof t == "string");
    }
    function Vy(e, t) {
        return !Je(e) || !$e(e.featureId) || !$e(e.type) ? Se(`replayPlan.steps[${t}] is invalid`) : !Number.isInteger(e.historyIndex) || e.historyIndex !== t ? Se(`replayPlan.steps[${t}] historyIndex must equal array index ${t}`, e.featureId) : e.status === "inactive" ? Ny.has(String(e.reason)) ? null : Se(`replayPlan.steps[${t}] has invalid inactive reason`, e.featureId) : e.status !== "active" ? Se(`replayPlan.steps[${t}] has invalid status`, e.featureId) : $e(e.kind) ? e.kind !== e.type ? Se(`replayPlan.steps[${t}] kind ${e.kind} does not match type ${e.type}`, e.featureId) : e.priorSolidFeatureId !== null && !$e(e.priorSolidFeatureId) ? Se(`replayPlan.steps[${t}] has invalid priorSolidFeatureId`, e.featureId) : Ei(e.auxiliaryFeatureIds) ? null : Se(`replayPlan.steps[${t}] missing auxiliaryFeatureIds`, e.featureId) : Se(`replayPlan.steps[${t}] has invalid kind`, e.featureId);
    }
    function Ky(e, t) {
        if (!Je(e)) return Se("replayPlan must be an object");
        if (e.bodyId !== t) return {
            code: "correlation-mismatch",
            message: `replayPlan.bodyId ${String(e.bodyId)} does not match request bodyId ${t}`,
            recoverable: !1
        };
        if (!Array.isArray(e.historyOrder) || !Array.isArray(e.steps) || !Array.isArray(e.solidExecutionOrder)) return Se("replayPlan missing historyOrder/steps/solidExecutionOrder");
        if (e.tipFeatureId !== null && !$e(e.tipFeatureId)) return Se("replayPlan.tipFeatureId is invalid");
        if (!Ei(e.historyOrder) || !Ei(e.solidExecutionOrder)) return Se("replayPlan historyOrder/solidExecutionOrder must be string arrays");
        const r = new Set;
        for(let i = 0; i < e.steps.length; i++){
            const o = Vy(e.steps[i], i);
            if (o) return o;
            const s = e.steps[i];
            if (r.has(s.featureId)) return Se(`replayPlan has duplicate feature id ${s.featureId}`, s.featureId);
            r.add(s.featureId);
        }
        if (e.historyOrder.length !== e.steps.length) return Se("replayPlan historyOrder length must match steps length");
        for(let i = 0; i < e.historyOrder.length; i++){
            const o = e.steps[i];
            if (o.featureId !== e.historyOrder[i]) return Se(`replayPlan historyOrder/steps mismatch at ${i}`, o.featureId);
        }
        const n = [];
        for (const i of e.steps)i.status === "active" && jy(i.kind) && n.push(i.featureId);
        return e.solidExecutionOrder.length !== n.length || e.solidExecutionOrder.some((i, o)=>i !== n[o]) ? Se("replayPlan.solidExecutionOrder must match active solid steps in history order") : null;
    }
    function Ly(e, t) {
        return !Je(e) || !$e(e.id) || !$e(e.type) || !$e(e.name) || typeof e.suppressed != "boolean" || !Ei(e.dependencyIds) ? Ac("Feature snapshot generic envelope is invalid") : By(e, t);
    }
    function Zi(e) {
        if (!Je(e)) return Me("Body replay request must be an object");
        if (e.protocolVersion !== Ce) return Me(`Unsupported body-replay protocol version ${String(e.protocolVersion)}`);
        if (!$e(e.requestId) || !$e(e.bodyId)) return Me("Body replay request missing requestId/bodyId");
        if (!Number.isInteger(e.revision) || e.revision < 0) return Me("Body replay request has invalid revision");
        if (!zy(e.deadlineMs)) return Me("Body replay request has invalid deadlineMs");
        if (e.presentationMode !== void 0 && e.presentationMode !== "full" && e.presentationMode !== "mesh" && e.presentationMode !== "none") return Me("Body replay request has invalid presentationMode");
        if (!Je(e.snapshot) || !Je(e.replayPlan)) return Me("Body replay request missing snapshot/replayPlan");
        if (e.externalOperands !== void 0) {
            if (!Array.isArray(e.externalOperands)) return Me("Body replay request externalOperands must be an array");
            const d = new Set;
            for (const c of e.externalOperands){
                if (!Je(c) || !$e(c.bodyId) || !$e(c.featureId) || !Number.isSafeInteger(c.committedRevision) || c.committedRevision < 0) return Me("Body replay request has an invalid external operand");
                if (c.bodyId === e.bodyId) return Me(`External operand ${c.featureId} belongs to the replay Body`);
                if (d.has(c.featureId)) return Me(`Duplicate external operand feature id ${c.featureId}`);
                d.add(c.featureId);
            }
        }
        const t = e.snapshot;
        if (t.bodyId !== e.bodyId) return {
            code: "correlation-mismatch",
            message: `snapshot.bodyId ${String(t.bodyId)} does not match request bodyId ${e.bodyId}`,
            recoverable: !1
        };
        if (!Array.isArray(t.features) || !Je(t.profiles)) return Me("snapshot missing features/profiles");
        const r = Ky(e.replayPlan, e.bodyId);
        if (r) return r;
        const n = e.replayPlan, i = n.tipFeatureId ?? null, o = t.tipFeatureId ?? null;
        if (i !== o) return {
            code: "correlation-mismatch",
            message: "snapshot.tipFeatureId does not match replayPlan.tipFeatureId",
            recoverable: !1
        };
        const s = new Set, a = new Map;
        for (const d of t.features){
            const c = Ly(d, t.profiles);
            if (c) return c;
            const l = d.id;
            if (s.has(l)) return Ac(`Duplicate feature id ${l} in snapshot`, l);
            s.add(l), a.set(l, d.type);
        }
        if (s.size !== n.steps.length) return Se("snapshot feature set size must equal replayPlan.steps length");
        for (const d of n.steps){
            if (!s.has(d.featureId)) return Se(`replayPlan step ${d.featureId} missing from snapshot`, d.featureId);
            const c = a.get(d.featureId);
            if (c !== d.type) return Se(`snapshot type ${c} mismatches plan type ${d.type} for ${d.featureId}`, d.featureId);
        }
        for (const d of s)if (!n.steps.some((c)=>c.featureId === d)) return Se(`snapshot feature ${d} is not present in replayPlan`, d);
        return null;
    }
    function Oc(e, t) {
        return Je(t) ? t.protocolVersion !== Ce ? Me(`Unexpected response protocol version ${String(t.protocolVersion)}`) : t.requestId !== e.requestId || t.bodyId !== e.bodyId || t.revision !== e.revision ? {
            code: "correlation-mismatch",
            message: "Body replay response correlation fields do not match request",
            recoverable: !1
        } : typeof t.ok != "boolean" ? Me("Body replay response missing ok flag") : null : Me("Body replay response must be an object");
    }
    function Pc(e) {
        return Je(e) ? e.type === "cancel-body-replay" && e.protocolVersion === Ce && $e(e.requestId) && $e(e.bodyId) && Number.isInteger(e.revision) && e.revision >= 0 : !1;
    }
    function Hy(e) {
        return Je(e) ? e.type === "reset-body-replay-state" && e.protocolVersion === Ce && $e(e.bodyId) : !1;
    }
    function qy(e) {
        return Zi(e) === null;
    }
    const Hs = 1, Uy = Object.freeze([
        "request",
        "feature",
        "tessellation",
        "cache",
        "stale",
        "cancellation"
    ]), Rc = Object.freeze([
        "hit",
        "miss",
        "invalidation"
    ]), Mc = Object.freeze([
        "checkpoint",
        "shape",
        "mesh",
        "path",
        "brep"
    ]), Cc = Object.freeze([
        "ok",
        "failed",
        "cancelled",
        "stale"
    ]), $c = Object.freeze([
        "ok",
        "failed",
        "skipped",
        "inactive"
    ]), Dc = Object.freeze([
        "cancelled",
        "deadline-exceeded"
    ]);
    function Le(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`ReplayPerformanceEvent.${t} must not be empty`);
        return e;
    }
    function Wo(e, t) {
        if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw new Error(`ReplayPerformanceEvent.${t} must be a finite non-negative number`);
        return e;
    }
    function br(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`ReplayPerformanceEvent.${t} must be a non-negative safe integer`);
        return e;
    }
    function Wy(e, t) {
        if (!Number.isSafeInteger(e) || e < 1) throw new Error(`ReplayPerformanceEvent.${t} must be a positive safe integer`);
        return e;
    }
    function Jr(e, t, r) {
        if (!t.includes(e)) throw new Error(`ReplayPerformanceEvent.${r} is invalid: ${String(e)}`);
        return e;
    }
    function yo(e, t) {
        if (e !== void 0) return Le(e, t);
    }
    function Gy(e) {
        return Object.freeze({
            occRuntimeId: Le(e.occRuntimeId, "runtimeIdentity.occRuntimeId"),
            wasmBuildId: Le(e.wasmBuildId, "runtimeIdentity.wasmBuildId")
        });
    }
    function Yy(e, t) {
        if (typeof e.cacheResult != "boolean") throw new Error("ReplayPerformanceEvent.dimensions.cacheResult must be a boolean");
        const r = t.featureId ? Le(e.featureId ?? "", "dimensions.featureId") : yo(e.featureId, "dimensions.featureId"), n = t.inputFingerprint ? Le(e.inputFingerprint ?? "", "dimensions.inputFingerprint") : yo(e.inputFingerprint, "dimensions.inputFingerprint"), i = t.dependencyFingerprint ? Le(e.dependencyFingerprint ?? "", "dimensions.dependencyFingerprint") : yo(e.dependencyFingerprint, "dimensions.dependencyFingerprint");
        return Object.freeze({
            requestId: Le(e.requestId, "dimensions.requestId"),
            bodyId: Le(e.bodyId, "dimensions.bodyId"),
            revision: br(e.revision, "dimensions.revision"),
            replayProtocolVersion: Wy(e.replayProtocolVersion, "dimensions.replayProtocolVersion"),
            runtimeIdentity: Gy(e.runtimeIdentity),
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
    function hr(e, t, r) {
        return {
            schemaVersion: Hs,
            kind: e,
            dimensions: Yy(t.dimensions, r),
            timestampMs: Wo(t.timestampMs, "timestampMs"),
            durationMs: Wo(t.durationMs, "durationMs")
        };
    }
    function Ve(e) {
        switch(e.kind){
            case "request":
                {
                    const t = e.earliestReplayedFeatureId;
                    return t !== null && Le(t, "earliestReplayedFeatureId"), Object.freeze({
                        ...hr("request", e, {}),
                        kind: "request",
                        occLoadMs: Wo(e.occLoadMs, "occLoadMs"),
                        executedStepCount: br(e.executedStepCount, "executedStepCount"),
                        earliestReplayedFeatureId: t,
                        featureCount: br(e.featureCount, "featureCount"),
                        outcome: Jr(e.outcome, Cc, "outcome")
                    });
                }
            case "feature":
                return Object.freeze({
                    ...hr("feature", e, {
                        featureId: !0,
                        inputFingerprint: !0,
                        dependencyFingerprint: !0
                    }),
                    kind: "feature",
                    historyIndex: br(e.historyIndex, "historyIndex"),
                    status: Jr(e.status, $c, "status")
                });
            case "tessellation":
                return Object.freeze({
                    ...hr("tessellation", e, {
                        featureId: !0
                    }),
                    kind: "tessellation",
                    vertexCount: br(e.vertexCount, "vertexCount"),
                    triangleCount: br(e.triangleCount, "triangleCount")
                });
            case "cache":
                return Object.freeze({
                    ...hr("cache", e, {
                        featureId: !0,
                        inputFingerprint: !0,
                        dependencyFingerprint: !0
                    }),
                    kind: "cache",
                    artifactKind: Jr(e.artifactKind, Mc, "artifactKind"),
                    outcome: Jr(e.outcome, Rc, "outcome"),
                    reason: Le(e.reason, "reason")
                });
            case "stale":
                return Object.freeze({
                    ...hr("stale", e, {}),
                    kind: "stale",
                    discardedRequestId: Le(e.discardedRequestId, "discardedRequestId"),
                    currentRequestId: Le(e.currentRequestId, "currentRequestId"),
                    publishedCache: !1
                });
            case "cancellation":
                return Object.freeze({
                    ...hr("cancellation", e, {}),
                    kind: "cancellation",
                    reason: Jr(e.reason, Dc, "reason"),
                    publishedCache: !1
                });
            default:
                {
                    const t = e;
                    throw new Error(`ReplayPerformanceEvent.kind is invalid: ${String(t.kind)}`);
                }
        }
    }
    function qs(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function Jy(e) {
        return qs(e) && typeof e.occRuntimeId == "string" && typeof e.wasmBuildId == "string";
    }
    function Zy(e) {
        return qs(e) && typeof e.requestId == "string" && typeof e.bodyId == "string" && typeof e.revision == "number" && typeof e.replayProtocolVersion == "number" && typeof e.cacheResult == "boolean" && Jy(e.runtimeIdentity) && (e.featureId === void 0 || typeof e.featureId == "string") && (e.inputFingerprint === void 0 || typeof e.inputFingerprint == "string") && (e.dependencyFingerprint === void 0 || typeof e.dependencyFingerprint == "string");
    }
    function Us(e) {
        if (!qs(e) || !Zy(e.dimensions)) throw new Error("ReplayPerformanceEvent must be a JSON object with dimensions");
        if (e.schemaVersion !== Hs) throw new Error(`ReplayPerformanceEvent.schemaVersion is invalid: ${String(e.schemaVersion)}`);
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
                return Ve({
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
                return Ve({
                    ...t,
                    kind: "feature",
                    historyIndex: e.historyIndex,
                    status: e.status
                });
            case "tessellation":
                if (typeof e.vertexCount != "number" || typeof e.triangleCount != "number") throw new Error("ReplayPerformanceEvent.tessellation fields are invalid");
                return Ve({
                    ...t,
                    kind: "tessellation",
                    vertexCount: e.vertexCount,
                    triangleCount: e.triangleCount
                });
            case "cache":
                if (typeof e.artifactKind != "string" || typeof e.outcome != "string" || typeof e.reason != "string") throw new Error("ReplayPerformanceEvent.cache fields are invalid");
                return Ve({
                    ...t,
                    kind: "cache",
                    artifactKind: e.artifactKind,
                    outcome: e.outcome,
                    reason: e.reason
                });
            case "stale":
                if (typeof e.discardedRequestId != "string" || typeof e.currentRequestId != "string") throw new Error("ReplayPerformanceEvent.stale fields are invalid");
                return Ve({
                    ...t,
                    kind: "stale",
                    discardedRequestId: e.discardedRequestId,
                    currentRequestId: e.currentRequestId
                });
            case "cancellation":
                if (typeof e.reason != "string") throw new Error("ReplayPerformanceEvent.cancellation fields are invalid");
                return Ve({
                    ...t,
                    kind: "cancellation",
                    reason: e.reason
                });
            default:
                throw new Error(`ReplayPerformanceEvent.kind is invalid: ${String(e.kind)}`);
        }
    }
    function Xy(e) {
        try {
            return Us(e), !0;
        } catch  {
            return !1;
        }
    }
    function Qy(e) {
        return JSON.stringify(Us(e));
    }
    const eg = new Set([
        "name",
        "timestamp"
    ]);
    function Ai(e) {
        if (e === null || typeof e == "string" || typeof e == "boolean") return e;
        if (typeof e == "number") {
            if (!Number.isFinite(e)) throw new Error("Replay fingerprint cannot contain non-finite numbers");
            return Object.is(e, -0) ? 0 : e;
        }
        if (!(typeof e > "u")) {
            if (e instanceof Uint8Array) return Object.freeze({
                $bytes: e.byteLength,
                $checksum: rg(e)
            });
            if (Array.isArray(e)) return e.map((t)=>Ai(t));
            if (typeof e == "object") {
                const t = e, r = Object.keys(t).filter((i)=>t[i] !== void 0).sort(), n = {};
                for (const i of r)n[i] = Ai(t[i]);
                return n;
            }
            throw new Error(`Replay fingerprint cannot contain ${typeof e}`);
        }
    }
    function Tc(e) {
        return JSON.stringify(Ai(e)) ?? "null";
    }
    tr = function(e) {
        return Tc(e);
    };
    function Ws(e, t) {
        if (!e) return tr({
            missing: !0
        });
        const r = e, n = {};
        for (const i of Object.keys(r))eg.has(i) || (n[i] = r[i]);
        return t && (n.profile = t), Array.isArray(n.dependencyIds) && (n.dependencyIds = [
            ...n.dependencyIds
        ].map(String).sort()), tr(n);
    }
    function Gs(e, t) {
        return tr({
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
    tg = function(e) {
        return tr({
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
    function rg(e) {
        let t = 2166136261;
        for(let r = 0; r < e.length; r += 1)t ^= e[r], t = Math.imul(t, 16777619);
        return (t >>> 0).toString(16).padStart(8, "0");
    }
    Tn = Object.freeze({
        occRuntimeId: "opencascade.js@1.1.1",
        wasmBuildId: "opencascade.js/dist/opencascade.wasm.wasm"
    });
    function ng(e) {
        return Ws(e);
    }
    function ig(e, t) {
        return Gs(e, t);
    }
    function og(e) {
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
    class sg {
        constructor(t, r = Tn){
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
                this.events.push(Ve({
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
                this.events.push(Ve({
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
                this.events.push(Ve({
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
            return this.events.push(Ve({
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
                replayProtocolVersion: this.request.protocolVersion ?? Ce,
                runtimeIdentity: this.runtimeIdentity,
                cacheResult: this.request.cacheResult !== !1,
                ...t ? {
                    featureId: t
                } : {},
                ...r || n ? {
                    inputFingerprint: ng(r),
                    dependencyFingerprint: ig(r, n)
                } : {}
            };
        }
    }
    function on(e, t) {
        try {
            return e.finish(t);
        } catch  {
            return Object.freeze([]);
        }
    }
    const Bc = !0;
    let fn = null;
    function jc() {
        return fn;
    }
    function zc(e) {
        try {
            return fn = Lc(e), fn;
        } catch  {
            return fn;
        }
    }
    function Nc() {
        fn = null;
    }
    function Vc(e) {
        return {
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            replayProtocolVersion: e.protocolVersion ?? Ce,
            runtimeIdentity: Tn,
            cacheResult: e.cacheResult !== !1
        };
    }
    function sn(e, t) {
        return Ve({
            kind: "cancellation",
            dimensions: Vc(e),
            timestampMs: Date.now(),
            durationMs: 0,
            reason: t
        });
    }
    function Kc(e, t) {
        return Ve({
            kind: "stale",
            dimensions: Vc(e),
            timestampMs: Date.now(),
            durationMs: 0,
            discardedRequestId: e.requestId,
            currentRequestId: t.requestId
        });
    }
    function Lc(e) {
        const t = og(e), r = e[e.length - 1], n = e.filter((i)=>i.kind === "cache");
        return Object.freeze({
            reuseEnabled: Bc,
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
    class Hc {
        bodies = new Map;
        publish(t) {
            const r = qc(t);
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
    function Go(e) {
        return qc(e);
    }
    function qc(e) {
        if (!e.bodyId.trim() || !e.featureId.trim()) throw new Error("OccReplayCheckpoint requires bodyId and featureId");
        if (!Number.isSafeInteger(e.committedRevision) || e.committedRevision < 0) throw new Error("OccReplayCheckpoint.committedRevision must be a non-negative safe integer");
        if (!Number.isSafeInteger(e.historyIndex) || e.historyIndex < 0) throw new Error("OccReplayCheckpoint.historyIndex must be a non-negative safe integer");
        if (e.status !== "ok" && e.status !== "failed") throw new Error(`OccReplayCheckpoint.status is invalid: ${String(e.status)}`);
        if (!Number.isSafeInteger(e.replayProtocolVersion) || e.replayProtocolVersion <= 0) throw new Error("OccReplayCheckpoint.replayProtocolVersion must be a positive safe integer");
        const t = Gn(e.runtimeIdentity?.occRuntimeId, "runtimeIdentity.occRuntimeId"), r = Gn(e.runtimeIdentity?.wasmBuildId, "runtimeIdentity.wasmBuildId");
        return Object.freeze({
            bodyId: e.bodyId,
            committedRevision: e.committedRevision,
            featureId: e.featureId,
            historyIndex: e.historyIndex,
            inputFingerprint: Gn(e.inputFingerprint, "inputFingerprint"),
            dependencyFingerprint: Gn(e.dependencyFingerprint, "dependencyFingerprint"),
            replayProtocolVersion: e.replayProtocolVersion,
            runtimeIdentity: Object.freeze({
                occRuntimeId: t,
                wasmBuildId: r
            }),
            status: e.status
        });
    }
    function Gn(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`OccReplayCheckpoint.${t} must not be empty`);
        return e;
    }
    ag = class {
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
    function Yo(e) {
        const t = dg(e.feature, e.snapshot.profiles);
        return {
            inputFingerprint: Ws(e.feature, t),
            dependencyFingerprint: tr({
                local: Gs(e.feature, e.step.status === "active" ? e.step : void 0),
                active: e.step.status === "active",
                inactiveReason: e.step.status === "inactive" ? e.step.reason : null,
                externals: lg(e.feature, e.snapshot.bodyId, e.externalOperands ?? [])
            })
        };
    }
    function Uc(e) {
        const t = e.replayProtocolVersion ?? Ce, r = e.runtimeIdentity ?? Tn, n = new Map(e.snapshot.features.map((d)=>[
                d.id,
                d
            ])), i = new Map(e.checkpoints.filter((d)=>d.bodyId === e.snapshot.bodyId).map((d)=>[
                d.featureId,
                d
            ])), o = new Set;
        let s = null, a = null;
        for (const d of e.replayPlan.steps){
            const c = n.get(d.featureId), l = i.get(d.featureId), f = Yo({
                snapshot: e.snapshot,
                step: d,
                feature: c,
                externalOperands: e.externalOperands
            }), h = cg(c, d).some((I)=>o.has(I)), m = !l || l.bodyId !== e.snapshot.bodyId || l.historyIndex !== d.historyIndex || l.inputFingerprint !== f.inputFingerprint || l.dependencyFingerprint !== f.dependencyFingerprint || l.replayProtocolVersion !== t || l.runtimeIdentity.occRuntimeId !== r.occRuntimeId || l.runtimeIdentity.wasmBuildId !== r.wasmBuildId || c?.suppressed === !0 != (d.status === "inactive" && d.reason === "suppressed");
            (h || m) && (o.add(d.featureId), (a === null || d.historyIndex < a) && (s = d.featureId, a = d.historyIndex));
        }
        return Object.freeze({
            earliestInvalidFeatureId: s,
            earliestInvalidHistoryIndex: a,
            invalidFeatureIds: Object.freeze([
                ...o
            ])
        });
    }
    function dg(e, t) {
        if (e?.type === "sketch") return t[e.id];
        if (e && "sketchId" in e && typeof e.sketchId == "string") return t[e.sketchId];
    }
    function cg(e, t) {
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
    function lg(e, t, r) {
        if (!e) return [];
        const n = new Set, i = e, o = typeof i.sourceBodyId == "string" ? i.sourceBodyId : null, s = typeof i.sourceFeatureId == "string" ? i.sourceFeatureId : null, a = typeof i.toolBodyId == "string" ? i.toolBodyId : null, d = typeof i.toolFeatureId == "string" ? i.toolFeatureId : null, c = typeof i.targetBodyId == "string" ? i.targetBodyId : null;
        if (o && o !== t && s && n.add(`${o}:${s}`), a && a !== t && d && n.add(`${a}:${d}`), c && c !== t) {
            const l = typeof i.targetFeatureId == "string" ? i.targetFeatureId : "";
            n.add(`${c}:${l}`);
        }
        return Object.freeze(r.filter((l)=>n.has(`${l.bodyId}:${l.featureId}`)).map((l)=>Object.freeze({
                bodyId: l.bodyId,
                featureId: l.featureId,
                committedRevision: l.committedRevision
            })).sort((l, f)=>`${l.bodyId}:${l.featureId}`.localeCompare(`${f.bodyId}:${f.featureId}`)));
    }
    let ai = null;
    async function ug(e) {
        const t = await e;
        return t?.ready && typeof t.ready.then == "function" ? t.ready : t;
    }
    function fg(e) {
        const t = e.default;
        return typeof t == "string" && t.length > 0 ? t : null;
    }
    function pg() {
        return typeof process < "u" && !!process.versions?.node;
    }
    async function hg() {
        const e = await cs(()=>import("./opencascade.wasm-CLkcJ_OV.js"), []), t = fg(e);
        if (!t) throw new Error("opencascade.js: failed to resolve WASM asset URL — check vite wasm sidecar plugin");
        return {
            locateFile (r) {
                return r.endsWith(".wasm") ? t : r;
            }
        };
    }
    async function $t() {
        return ai || (ai = (async ()=>{
            const { default: e } = await cs(async ()=>{
                const { default: i } = await import("./opencascade.wasm-mn6um57V.js");
                return {
                    default: i
                };
            }, []);
            if (typeof e != "function") throw new Error("opencascade.js: expected factory export from opencascade.wasm.js");
            const r = pg() ? await (await import("./loadOccModule.node.ts")).resolveWasmForNode() : await hg();
            return ug(e({
                locateFile: r.locateFile,
                wasmBinary: r.wasmBinary
            }));
        })()), ai;
    }
    function mg() {
        ai = null;
    }
    function it(e, t, r) {
        const { origin: n, uAxis: i, vAxis: o } = e;
        return [
            n[0] + i[0] * t + o[0] * r,
            n[1] + i[1] * t + o[1] * r,
            n[2] + i[2] * t + o[2] * r
        ];
    }
    function le(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function _n(e, t, r) {
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
            const a = le(e, s, [
                t
            ]);
            try {
                let d;
                try {
                    d = le(e, "BRepBuilderAPI_MakeEdge", [
                        a
                    ]);
                } catch  {
                    d = le(e, "BRepBuilderAPI_MakeEdge", [
                        a,
                        0,
                        1
                    ]);
                }
                const c = d.Edge();
                return d.delete?.(), r ? r.push(a) : a.delete?.(), c;
            } catch (d) {
                a.delete?.(), i = d;
            }
        } catch (a) {
            i = a;
        }
        try {
            const s = le(e, "BRepBuilderAPI_MakeEdge", [
                t
            ]), a = s.Edge();
            return s.delete?.(), a;
        } catch (s) {
            i = s;
        }
        const o = i instanceof Error ? i.message : String(i);
        throw new Error(`occProfileWire: MakeEdge from Geom curve failed (${o})`);
    }
    function Kt(e) {
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
    function Wc(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Gc(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function yg(e) {
        const t = [
            ...e.uAxis
        ], r = [
            ...e.vAxis
        ], n = [
            ...e.normal
        ];
        if (Wc(Gc(t, r), n) >= 0) return e;
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
    function Ys(e, t, r, n) {
        const i = it(t, r.x, r.y), o = it(t, n.x, n.y), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Pnt_3(o[0], o[1], o[2]), d = new e.BRepBuilderAPI_MakeEdge_3(s, a), c = d.Edge();
        return d.delete?.(), s.delete?.(), a.delete?.(), c;
    }
    function gg(e, t, r, n) {
        if (!(n > 1e-12)) throw new Error("occProfileWire: circle radius must be positive");
        const i = it(t, r.x, r.y), o = Kt(t.normal), s = new e.gp_Pnt_3(i[0], i[1], i[2]), a = new e.gp_Dir_4(o[0], o[1], o[2]), d = [
            ()=>{
                const f = le(e, "gp_Ax2", [
                    s,
                    a
                ]), u = le(e, "gp_Circ", [
                    f,
                    n
                ]), h = le(e, "BRepBuilderAPI_MakeEdge", [
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
                const f = le(e, "gp_Ax2", [
                    s,
                    a
                ]), u = le(e, "Geom_Circle", [
                    f,
                    n
                ]), h = le(e, "BRepBuilderAPI_MakeEdge", [
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
                const f = le(e, "GC_MakeCircle", [
                    s,
                    a,
                    n
                ]), u = typeof f.Value == "function" ? f.Value() : f, h = le(e, "BRepBuilderAPI_MakeEdge", [
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
        let c;
        for (const f of d)try {
            const u = f(), h = u.edge;
            return u.dispose(), a.delete?.(), s.delete?.(), h;
        } catch (u) {
            c = u;
        }
        a.delete?.(), s.delete?.();
        const l = c instanceof Error ? c.message : String(c);
        throw new Error(`occProfileWire: circle edge failed (${l})`);
    }
    function Yc(e) {
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
    function Ig(e, t, r) {
        const n = Yc(r), i = it(t, r.start.x, r.start.y), o = it(t, r.end.x, r.end.y), s = it(t, r.center.x, r.center.y), a = new e.gp_Pnt_3(i[0], i[1], i[2]), d = new e.gp_Pnt_3(o[0], o[1], o[2]), c = new e.gp_Pnt_3(s[0], s[1], s[2]), l = Kt(t.normal), f = Kt(t.uAxis), u = Kt(t.vAxis), h = Kt(Gc(l, f)), m = Wc(h, u) < 0 ? -1 : 1, I = n.startAngle * m, w = n.sweep * m, y = I + w, x = (S)=>typeof S.Value == "function" ? S.Value() : typeof S.Value_1 == "function" ? S.Value_1() : S, b = [
            ()=>{
                const S = new e.gp_Dir_4(l[0], l[1], l[2]), F = new e.gp_Dir_4(f[0], f[1], f[2]), R = le(e, "gp_Ax2", [
                    c,
                    S,
                    F
                ]), A = le(e, "gp_Circ", [
                    R,
                    r.radius
                ]), D = le(e, "BRepBuilderAPI_MakeEdge", [
                    A,
                    I,
                    y
                ]);
                return {
                    edge: D.Edge(),
                    dispose: ()=>{
                        D.delete?.(), A.delete?.(), R.delete?.(), F.delete?.(), S.delete?.();
                    }
                };
            },
            ()=>{
                const S = Kt(t.normal), F = new e.gp_Dir_4(S[0], S[1], S[2]), R = le(e, "gp_Ax2", [
                    c,
                    F
                ]), A = le(e, "gp_Circ", [
                    R,
                    r.radius
                ]), D = w >= 0, V = le(e, "GC_MakeArcOfCircle", [
                    A,
                    a,
                    d,
                    D
                ]), X = x(V);
                return {
                    edge: _n(e, X),
                    dispose: ()=>{
                        V.delete?.(), A.delete?.(), R.delete?.(), F.delete?.();
                    }
                };
            },
            ()=>{
                const S = Kt(t.normal), F = new e.gp_Dir_4(S[0], S[1], S[2]), R = le(e, "gp_Ax2", [
                    c,
                    F
                ]), A = le(e, "Geom_Circle", [
                    R,
                    r.radius
                ]), D = le(e, "Handle_Geom_Curve", [
                    A
                ]), V = le(e, "Geom_TrimmedCurve", [
                    D,
                    Math.min(I, y),
                    Math.max(I, y),
                    w >= 0,
                    !0
                ]);
                return {
                    edge: _n(e, V),
                    dispose: ()=>{
                        V.delete?.(), D.delete?.(), A.delete?.(), R.delete?.(), F.delete?.();
                    }
                };
            }
        ], g = [];
        for (const S of b)try {
            const F = S(), R = F.edge;
            return F.dispose(), a.delete?.(), d.delete?.(), c.delete?.(), R;
        } catch (F) {
            g.push(F instanceof Error ? F.message : String(F));
        }
        throw a.delete?.(), d.delete?.(), c.delete?.(), new Error(`occProfileWire: arc edge failed (${g.join(" | ")})`);
    }
    function bg(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: bezier needs ≥2 controls");
        const i = r.map((o)=>{
            const s = it(t, o.x, o.y);
            return new e.gp_Pnt_3(s[0], s[1], s[2]);
        });
        try {
            const o = new e.TColgp_Array1OfPnt_2(1, i.length);
            for(let d = 0; d < i.length; d++)typeof o.SetValue == "function" ? o.SetValue(d + 1, i[d]) : o.set(d + 1, i[d]);
            const s = new e.Geom_BezierCurve_1(o), a = _n(e, s, n);
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
    function wg(e, t, r, n) {
        if (r.length < 2) throw new Error("occProfileWire: spline needs ≥2 controls");
        const o = Xc({
            kind: "spline",
            controls: r.map((s)=>({
                    x: s.x,
                    y: s.y
                }))
        }).map((s)=>{
            const a = it(t, s.x, s.y);
            return new e.gp_Pnt_3(a[0], a[1], a[2]);
        });
        try {
            const s = le(e, "TColgp_Array1OfPnt", [
                1,
                o.length
            ]);
            for(let a = 0; a < o.length; a++)typeof s.SetValue == "function" ? s.SetValue(a + 1, o[a]) : s.set(a + 1, o[a]);
            try {
                const a = le(e, "GeomAPI_PointsToBSpline", [
                    s
                ]), d = typeof a.Curve == "function" ? a.Curve() : a, c = _n(e, d, n);
                if (n) n.push(a, d, s, ...o);
                else {
                    a.delete?.(), s.delete?.();
                    for (const l of o)l.delete?.();
                }
                return c;
            } catch  {
                const a = le(e, "Geom_BezierCurve", [
                    s
                ]), d = _n(e, a, n);
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
    function Jc(e, t, r, n) {
        if (r.kind === "line") return Ys(e, t, r.start, r.end);
        if (r.kind === "circle") return gg(e, t, r.center, r.radius);
        if (r.kind === "arc") return Ig(e, t, r);
        if (r.kind === "bezier") return bg(e, t, r.controls, n);
        if (r.kind === "spline") return wg(e, t, r.controls, n);
        throw new Error("occProfileWire: unsupported profile segment kind");
    }
    function Zc(e) {
        return e.segments && e.segments.length > 0 ? e.segments : e.exactCurve?.kind === "circle" ? [
            {
                kind: "circle",
                center: e.exactCurve.center,
                radius: e.exactCurve.radius
            }
        ] : null;
    }
    function xg(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1;
        let i = !1;
        for (const o of r)try {
            const s = Jc(e, t, o);
            n.Add_1(s);
        } catch (s) {
            i = !0, typeof console < "u" && console.warn("[occProfileWire] segment edge failed, chord fallback", o.kind, s);
            break;
        }
        if (i) {
            n.delete?.();
            const o = new e.BRepBuilderAPI_MakeWire_1;
            for (const s of r){
                const a = Xc(s);
                for(let d = 0; d < a.length - 1; d++)o.Add_1(Ys(e, t, a[d], a[d + 1]));
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
    function Xc(e) {
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
            const { startAngle: t, sweep: r } = Yc(e), n = Math.max(2, Math.ceil(Math.abs(r) / (Math.PI * 2) * 64));
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
                for(let l = 1; l <= i; l++){
                    const f = l / i;
                    n.push({
                        x: r(s.x, a.x, d.x, c.x, f),
                        y: r(s.y, a.y, d.y, c.y, f)
                    });
                }
            }
            return n;
        }
        return [];
    }
    function Sg(e, t, r) {
        const n = new e.BRepBuilderAPI_MakeWire_1, i = r.points;
        for(let o = 0; o < i.length; o++){
            const s = (o + 1) % i.length;
            n.Add_1(Ys(e, t, i[o], i[s]));
        }
        return {
            wire: n.Wire(),
            wireBuilder: n
        };
    }
    function go(e, t, r) {
        const n = Zc(r);
        return n && n.length > 0 ? xg(e, t, n) : Sg(e, t, r);
    }
    function kg(e, t) {
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
    function Fg(e) {
        const t = e;
        if (typeof t.Reverse == "function") return t.Reverse(), e;
        if (typeof t.Reversed == "function") return t.Reversed();
        throw new Error("occProfileWire: OCC wire orientation cannot be reversed");
    }
    function wt(e, t) {
        const r = yg(t), n = gs(r, "occ-profile");
        if (n) throw new Error(n.message);
        const i = Vr(r), o = Do(r), s = go(e, r, i), a = [], d = [], c = [];
        for (const u of o){
            const h = u === i ? s : go(e, r, u), m = new e.BRepBuilderAPI_MakeFace_15(h.wire, !0);
            a.push(m);
            for (const w of ys(r)){
                if (!vg(w.points[0], u.points)) continue;
                const y = go(e, r, w), x = Zc(w), b = x?.length === 1 && x[0]?.kind === "circle" ? Fg(y.wire) : y.wire;
                kg(m, b), d.push(y.wireBuilder);
            }
            const I = m.Face();
            if (!I) throw new Error("occProfileWire: closed profile did not produce a Face");
            c.push(I);
        }
        let l = c[0], f;
        if (c.length > 1) {
            const u = new e.TopoDS_Compound, h = new e.BRep_Builder;
            f = h, h.MakeCompound(u);
            for (const m of c)h.Add(u, m);
            l = u;
        }
        return {
            face: l,
            outerWire: s.wire,
            wireBuilder: s.wireBuilder,
            faceMaker: f ?? a[0],
            faceMakers: f ? a : [],
            innerWireBuilders: d
        };
    }
    function vg(e, t) {
        let r = !1;
        for(let n = 0, i = t.length - 1; n < t.length; i = n++){
            const o = t[n], s = t[i];
            o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y) + o.x && (r = !r);
        }
        return r;
    }
    function Qc(e, t, r = 0) {
        if (r === 0) return wt(e, t);
        const n = {
            ...t,
            origin: [
                t.origin[0] + t.normal[0] * r,
                t.origin[1] + t.normal[1] * r,
                t.origin[2] + t.normal[2] * r
            ]
        };
        return wt(e, n);
    }
    function Js(e, t, r, n) {
        const i = new e.gp_Vec_4(n[0] * r, n[1] * r, n[2] * r), o = new e.BRepPrimAPI_MakePrism_1(t, i, !1, !0);
        return {
            shape: o.Shape(),
            prism: o,
            prismVec: i
        };
    }
    function ot(e, t, r, n) {
        const i = n?.startOffset ?? 0, o = Qc(e, t, i), s = n?.inward ? -1 : 1, a = t.normal.map((c)=>c * s);
        return {
            ...Js(e, o.face, r, a),
            ...o
        };
    }
    function qe(e) {
        e.prismVec.delete?.(), e.prism.delete?.(), e.faceMaker?.delete?.();
        for (const t of e.faceMakers ?? [])t.delete?.();
        e.wireBuilder?.delete?.();
        for (const t of e.innerWireBuilders ?? [])t.delete?.();
    }
    function _g(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Eg(e) {
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
    function Io(e, t) {
        return [
            e[t * 3],
            e[t * 3 + 1],
            e[t * 3 + 2]
        ];
    }
    function Ag(e, t, r, n) {
        const i = Io(e, t), o = Io(e, r), s = Io(e, n);
        return _g([
            o[0] - i[0],
            o[1] - i[1],
            o[2] - i[2]
        ], [
            s[0] - i[0],
            s[1] - i[1],
            s[2] - i[2]
        ]);
    }
    function Og(e, t, r, n, i, o) {
        const s = new Float64Array(n * 3), a = o / 3;
        for(let c = 0; c < a; c++){
            const l = i + c * 3, f = t[l], u = t[l + 1], h = t[l + 2], m = Ag(e, f, u, h), I = [
                f - r,
                u - r,
                h - r
            ];
            for (const w of I){
                if (w < 0 || w >= n) continue;
                const y = w * 3;
                s[y] += m[0], s[y + 1] += m[1], s[y + 2] += m[2];
            }
        }
        const d = [];
        for(let c = 0; c < n; c++){
            const l = c * 3;
            d.push(Eg([
                s[l],
                s[l + 1],
                s[l + 2]
            ]));
        }
        return d;
    }
    function Pg(e, t) {
        const r = t.Orientation_1?.(), n = e.TopAbs_Orientation?.TopAbs_REVERSED;
        return r != null && n != null ? r === n : !1;
    }
    function Rg(e) {
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
    function Mg(e, t, r) {
        const n = e.BRep_Tool, i = (typeof n.Triangulation == "function" ? n.Triangulation : null) ?? (typeof n.Triangulation_2 == "function" ? n.Triangulation_2 : null);
        if (!i) throw new TypeError("opencascade.js: BRep_Tool.Triangulation is not available");
        return i(t, r);
    }
    function dt(e, t, r = {}) {
        new e.BRepMesh_IncrementalMesh_2(t, .5, !1, .5, !1).delete?.();
        const o = [], s = [], a = [], d = [], c = new e.TopExp_Explorer_2(t, e.TopAbs_ShapeEnum.TopAbs_FACE, e.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let l = 0;
        for(; c.More();){
            const f = e.TopoDS.Face_1(c.Current()), u = r.preserveSourceOrientation ? !1 : Pg(e, f), h = new e.TopLoc_Location_1, m = Mg(e, f, h);
            if (!m.IsNull()) {
                const I = m.get(), w = I.NbNodes(), y = I.NbTriangles(), x = o.length / 3, b = a.length, g = h.Transformation();
                for(let R = 1; R <= w; R++){
                    const A = I.Node(R), D = A.Transformed(g);
                    o.push(D.X(), D.Y(), D.Z()), A.delete?.(), D.delete?.();
                }
                for(let R = 1; R <= y; R++){
                    const A = I.Triangle(R), [D, V, X] = Rg(A), k = x + D - 1;
                    let T = x + V - 1, C = x + X - 1;
                    if (u) {
                        const q = T;
                        T = C, C = q;
                    }
                    a.push(k, T, C), A.delete?.();
                }
                const S = Og(o, a, x, w, b, y * 3);
                for (const R of S)s.push(R[0], R[1], R[2]);
                const F = `face_${l}`;
                d.push({
                    key: F,
                    firstIndex: b,
                    indexCount: y * 3
                }), l++;
            }
            h.delete?.(), c.Next();
        }
        return c.delete?.(), {
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
    const Cg = 1e-6;
    function J(e) {
        return {
            x: e[0],
            y: e[1]
        };
    }
    function Re(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y) <= Cg;
    }
    function Oi(e) {
        return J((e.kind === "line", e.start2d));
    }
    function Er(e) {
        return J((e.kind === "line", e.end2d));
    }
    function el(e) {
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
    const Jo = 2;
    function $g(e, t, r) {
        return {
            ...e,
            clockwise: !1
        };
    }
    function Fr(e, t, r) {
        return Re(J(e.start2d), t) ? {
            ...e,
            start2d: [
                r.x,
                r.y
            ]
        } : Re(J(e.end2d), t) ? {
            ...e,
            end2d: [
                r.x,
                r.y
            ]
        } : e;
    }
    function Dg(e) {
        const t = [
            ...e
        ];
        for(let r = 0; r < t.length; r += 1){
            const n = t[r];
            if (n.kind !== "arc") continue;
            const i = J(n.center2d), o = t.flatMap((I, w)=>I.kind !== "line" || w === r ? [] : [
                    J(I.start2d),
                    J(I.end2d)
                ]), s = J(n.start2d), a = J(n.end2d), d = o.some((I)=>Re(I, s)), c = o.some((I)=>Re(I, a));
            if (d && c) continue;
            const l = o.map((I)=>({
                    candidate: I,
                    error: Math.abs(Math.hypot(I.x - i.x, I.y - i.y) - n.radius)
                })).sort((I, w)=>I.error - w.error), f = l[0], u = l.find((I)=>f && !Re(I.candidate, f.candidate));
            if (!f || !u || f.error > Jo || u.error > Jo) continue;
            const h = J(n.start2d), m = J(n.end2d);
            t[r] = {
                ...n,
                clockwise: !1
            };
            for(let I = 0; I < t.length; I += 1){
                const w = t[I];
                w.kind === "line" && (t[I] = Fr(Fr(w, f.candidate, h), u.candidate, m));
            }
        }
        return t;
    }
    function Tg(e, t, r) {
        const n = [
            ...r
        ], i = [
            ...t
        ], o = [
            ...e
        ];
        for(; n.length >= 2 && i.length > 0;){
            let f = null;
            for(let S = 0; S < i.length; S += 1){
                const F = i[S], R = J(F.center2d);
                for(let A = 0; A < n.length; A += 1)for(let D = A + 1; D < n.length; D += 1){
                    const V = n[A], X = n[D], k = Math.abs(Math.hypot(V.x - R.x, V.y - R.y) - F.radius) + Math.abs(Math.hypot(X.x - R.x, X.y - R.y) - F.radius);
                    (!f || k < f.error) && (f = {
                        arcIndex: S,
                        startIndex: A,
                        endIndex: D,
                        error: k
                    });
                }
            }
            if (!f || f.error > Jo * 2) break;
            const u = i.splice(f.arcIndex, 1)[0], h = n[f.startIndex], m = n[f.endIndex];
            n.splice(Math.max(f.startIndex, f.endIndex), 1), n.splice(Math.min(f.startIndex, f.endIndex), 1), J(u.center2d);
            const I = Math.hypot(h.x - u.start2d[0], h.y - u.start2d[1]) + Math.hypot(m.x - u.end2d[0], m.y - u.end2d[1]), w = Math.hypot(m.x - u.start2d[0], m.y - u.start2d[1]) + Math.hypot(h.x - u.end2d[0], h.y - u.end2d[1]), y = I <= w ? h : m, x = I <= w ? m : h, b = J(u.start2d), g = J(u.end2d);
            for(let S = 0; S < o.length; S += 1){
                const F = o[S];
                F.kind === "line" && (o[S] = Fr(Fr(F, y, b), x, g));
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
                for(let g = 0; g < f.length; g += 1)for(let S = g + 1; S < f.length; S += 1){
                    const F = f[g], R = f[S], A = Math.min(Math.hypot(F.x - u.start2d[0], F.y - u.start2d[1]) + Math.hypot(R.x - u.end2d[0], R.y - u.end2d[1]), Math.hypot(R.x - u.start2d[0], R.y - u.start2d[1]) + Math.hypot(F.x - u.end2d[0], F.y - u.end2d[1]));
                    (!h || A < h.score) && (h = {
                        i: g,
                        j: S,
                        score: A
                    });
                }
                if (!h) break;
                const m = f[h.i], I = f[h.j], w = Math.hypot(m.x - u.start2d[0], m.y - u.start2d[1]) + Math.hypot(I.x - u.end2d[0], I.y - u.end2d[1]), y = Math.hypot(I.x - u.start2d[0], I.y - u.start2d[1]) + Math.hypot(m.x - u.end2d[0], m.y - u.end2d[1]), x = w <= y ? m : I, b = w <= y ? I : m;
                for(let g = 0; g < o.length; g += 1){
                    const S = o[g];
                    S.kind === "line" && (o[g] = Fr(Fr(S, x, J(u.start2d)), b, J(u.end2d)));
                }
                o.push($g(u)), f.splice(h.j, 1), f.splice(h.i, 1);
            }
        }
        const s = Oi(o[0]);
        let a = Er(o[0]);
        const d = [
            o[0]
        ], c = new Set(o.map((f, u)=>u));
        for(c.delete(0); c.size > 0 && !Re(s, a);){
            let f = -1, u;
            for (const h of c){
                const m = o[h];
                if (Re(Oi(m), a)) {
                    f = h, u = m;
                    break;
                }
                if (Re(Er(m), a)) {
                    f = h, u = el(m);
                    break;
                }
            }
            if (f < 0 || !u) break;
            c.delete(f), d.push(u), a = Er(u);
        }
        if (!Re(s, a) || d.length < 3) return null;
        const l = tl(d);
        return l.length < 3 ? null : {
            points: l,
            isOuter: !0,
            segments: d.map(Zo)
        };
    }
    function Zo(e) {
        if (e.kind === "line") return {
            kind: "line",
            id: e.id,
            start: J(e.start2d),
            end: J(e.end2d)
        };
        if (e.kind === "circle") return {
            kind: "circle",
            id: e.id,
            center: J(e.center2d),
            radius: e.radius
        };
        if (e.kind === "arc") return {
            kind: "arc",
            id: e.id,
            center: J(e.center2d),
            radius: e.radius,
            start: J(e.start2d),
            end: J(e.end2d),
            startAngle: e.startAngle,
            endAngle: e.endAngle,
            clockwise: !1
        };
        throw new Error(`Unsupported UG curve kind ${e.kind}`);
    }
    function Bg(e, t = 24) {
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
    function tl(e) {
        const t = [];
        for (const r of e){
            const n = r.kind === "line" ? [
                J(r.start2d),
                J(r.end2d)
            ] : Bg(r);
            t.length > 0 && Re(t[t.length - 1], n[0]) ? t.push(...n.slice(1)) : t.push(...n);
        }
        return t.length > 1 && Re(t[0], t[t.length - 1]) && t.pop(), t;
    }
    function qa(e) {
        let t = 0;
        for(let r = 0; r < e.length; r += 1){
            const n = e[(r + 1) % e.length], i = e[r];
            t += i.x * n.y - n.x * i.y;
        }
        return t / 2;
    }
    function jg(e) {
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
                    Zo(o)
                ]
            })), i = new Set(r.map((o, s)=>s));
        for(r = Dg(r); i.size > 0;){
            const o = i.values().next().value;
            i.delete(o);
            const s = [
                r[o]
            ], a = Oi(s[0]);
            let d = Er(s[0]);
            for(; !Re(a, d);){
                let c = -1, l;
                for (const f of i){
                    const u = r[f];
                    if (Re(Oi(u), d)) {
                        c = f, l = u;
                        break;
                    }
                    if (Re(Er(u), d)) {
                        c = f, l = el(u);
                        break;
                    }
                }
                if (c < 0 || !l) break;
                i.delete(c), s.push(l), d = Er(l);
            }
            if (Re(a, d) && s.length > 1) {
                const c = tl(s);
                c.length >= 3 && n.push({
                    points: c,
                    isOuter: !0,
                    segments: s.map(Zo)
                });
            }
        }
        if (n.length > 1) {
            const o = n.reduce((s, a, d)=>Math.abs(qa(a.points)) > Math.abs(qa(n[s].points)) ? d : s, 0);
            return n.map((s, a)=>({
                    ...s,
                    isOuter: a === o
                }));
        }
        if (n.length > 0) return n;
        if (t.length === 0 && r.some((o)=>o.kind === "arc")) {
            const o = r.filter((l)=>l.kind === "line"), s = o.flatMap((l)=>[
                    J(l.start2d),
                    J(l.end2d)
                ]), a = s.map((l, f)=>s.filter((u, h)=>h !== f && Re(l, u)).length), d = s.filter((l, f)=>a[f] === 0), c = r.filter((l)=>l.kind === "arc");
            if (d.length === 4 && c.length >= 2) {
                const l = Tg(o, c, d);
                if (l) return [
                    l
                ];
            }
        }
        return n;
    }
    function zg(e) {
        return e.map((t)=>t.kind === "point" ? {
                kind: "point",
                id: t.id,
                point: {
                    id: t.id,
                    ...J(t.point2d)
                }
            } : t.kind === "line" ? {
                kind: "line",
                id: t.id,
                start: {
                    id: `${t.id}:start`,
                    ...J(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...J(t.end2d)
                }
            } : t.kind === "circle" ? {
                kind: "circle",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...J(t.center2d)
                },
                radius: t.radius
            } : {
                kind: "arc",
                id: t.id,
                center: {
                    id: `${t.id}:center`,
                    ...J(t.center2d)
                },
                start: {
                    id: `${t.id}:start`,
                    ...J(t.start2d)
                },
                end: {
                    id: `${t.id}:end`,
                    ...J(t.end2d)
                },
                radius: t.radius,
                startAngle: t.startAngle,
                endAngle: t.endAngle,
                clockwise: !1
            });
    }
    function st(e) {
        return e && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function Pe(e) {
        if (!Array.isArray(e) || e.length < 3) return null;
        const t = e.slice(0, 3).map((r)=>Number(r));
        return t.some((r)=>!Number.isFinite(r)) ? null : t;
    }
    function fe(e) {
        const t = Math.hypot(e[0], e[1], e[2]);
        return t <= 1e-9 ? null : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Mt(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Xo(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Ng(e, t, r) {
        const n = Math.cos(r), i = Math.sin(r);
        return {
            x: e * n - t * i,
            y: e * i + t * n
        };
    }
    function rl(e) {
        const t = Ne(e.text_type) ?? 0;
        return t === 1 ? "on_curve" : t === 2 ? "on_face" : "planar";
    }
    function nl(e) {
        const t = ol(e, "Height") ?? Yt(e, [
            "planar_height_val",
            "frame_on_path_height_val"
        ], []) ?? 1, r = Yt(e, [
            "planar_length_val",
            "frame_on_path_length_val"
        ], [
            "Length"
        ]) ?? 0, n = Yt(e, [
            "frame_on_path_offset_val"
        ], [
            "Offset"
        ]) ?? Ne(e.frame_on_path_offset_rhs) ?? 0;
        return {
            length: r,
            height: t > 0 ? t : 1,
            offset: n
        };
    }
    il = function(e, t) {
        const r = st(e.parameters) ?? {}, n = rl(r), { length: i, height: o, offset: s } = nl(r);
        if (n === "on_face") return {
            x: 0,
            y: 0
        };
        const a = Ne(r[n === "planar" ? "planar_anchor" : "frame_on_path_anchor"]) ?? (n === "planar" ? void 0 : 4), d = Kg(a, i, o);
        return Ng(d.x, d.y + s, t);
    };
    function En(e) {
        const t = fe(e) ?? [
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
        ], n = fe([
            r[0] - t[0] * Mt(r, t),
            r[1] - t[1] * Mt(r, t),
            r[2] - t[2] * Mt(r, t)
        ]) ?? [
            1,
            0,
            0
        ], i = fe(Xo(t, n)) ?? [
            0,
            1,
            0
        ];
        return {
            xAxis: n,
            yAxis: i
        };
    }
    function ol(e, t) {
        const r = Array.isArray(e.owned_exprs) ? e.owned_exprs : [];
        for (const n of r){
            const i = st(n);
            if (!(typeof i?.desc != "string" || i.desc.toLowerCase() !== t.toLowerCase()) && typeof i.value == "number" && Number.isFinite(i.value)) return i.value;
        }
        return null;
    }
    function Ne(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (typeof e != "string" || e.trim() === "") return null;
        const t = e.includes("=") ? e.slice(e.lastIndexOf("=") + 1) : e, r = Number(t.trim());
        return Number.isFinite(r) ? r : null;
    }
    function Wt(e) {
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
    function Yt(e, t, r) {
        for (const n of t){
            const i = Ne(e[n]);
            if (i !== null) return i;
        }
        for (const n of r){
            const i = ol(e, n);
            if (i !== null) return i;
        }
        return null;
    }
    function Vg(e) {
        const t = Pe(e.csys_origin), r = Pe(e.csys_x_axis), n = Pe(e.csys_y_axis), i = r ? fe(r) : null, o = n ? fe(n) : null;
        if (!t || !i || !o) return null;
        const s = i[0] * o[0] + i[1] * o[1] + i[2] * o[2], a = fe([
            o[0] - i[0] * s,
            o[1] - i[1] * s,
            o[2] - i[2] * s
        ]);
        if (!a) return null;
        const d = fe([
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
    function Kg(e, t, r) {
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
    function Lg(e, t) {
        return e.parentIds.map((r)=>t.get(r)).find((r)=>r?.sourceType.toUpperCase() === "LINE") ?? null;
    }
    function sl(e, t) {
        const r = Lg(e, t), n = st(r?.parameters) ?? {}, i = Pe(n.start), o = Pe(n.end);
        if (!i || !o) return null;
        const s = fe([
            o[0] - i[0],
            o[1] - i[1],
            o[2] - i[2]
        ]);
        if (!s) return null;
        const a = st(e.parameters) ?? {}, d = Wt(a.frame_on_path_anchor_pos_is_percent), c = Wt(a.frame_on_path_anchor_pos_is_parameter), l = Yt(a, [
            "frame_on_path_anchor_pos_val"
        ], [
            "Parameter"
        ]) ?? Ne(a.frame_on_path_anchor_pos_rhs) ?? 50, f = d === !0 || d !== !1 && c !== !0 && Math.abs(l) > 1 ? l / 100 : l, u = Math.max(0, Math.min(1, Wt(a.frame_on_path_anchor_pos_is_flipped) ? 1 - f : f));
        return {
            point: [
                i[0] + (o[0] - i[0]) * u,
                i[1] + (o[1] - i[1]) * u,
                i[2] + (o[2] - i[2]) * u
            ],
            direction: s
        };
    }
    function Hg(e) {
        const t = Array.isArray(e.placement_faces) ? e.placement_faces : [];
        for (const r of t){
            const n = st(r);
            if (!n) continue;
            const i = Pe(n.plane_origin) ?? Pe(n.origin), o = fe(Pe(n.normal) ?? Pe(n.plane_normal) ?? [
                0,
                0,
                0
            ]);
            if (!i || !o) continue;
            const s = fe(Pe(n.x_axis) ?? Pe(n.plane_x_axis) ?? [
                0,
                0,
                0
            ]), a = fe(Pe(n.y_axis) ?? Pe(n.plane_y_axis) ?? [
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
            const d = En(o);
            return {
                origin: i,
                normal: o,
                xAxis: d.xAxis,
                yAxis: d.yAxis
            };
        }
        return null;
    }
    function al(e, t) {
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
    Xi = function(e, t = new Map) {
        if (e.sketchPlaneFrame) return e.sketchPlaneFrame;
        const r = st(e.parameters) ?? {}, n = Vg(r), i = Ne(r.text_type) ?? 0;
        if (i !== 1 && i !== 2 && n) return n;
        const o = Hg(r) ?? al(e, t) ?? n ?? Xs(e), s = sl(e, t);
        if (!s) return o;
        const a = fe(o.normal) ?? [
            0,
            0,
            1
        ], d = fe(o.xAxis) ?? En(a).xAxis, c = fe(o.yAxis) ?? En(a).yAxis;
        return {
            origin: s.point,
            normal: a,
            xAxis: d,
            yAxis: c
        };
    };
    function Zs(e, t = new Map) {
        const r = st(e.parameters) ?? {}, n = Pe(r.start), i = Pe(r.end), o = n && i ? [
            (n[0] + i[0]) / 2,
            (n[1] + i[1]) / 2,
            (n[2] + i[2]) / 2
        ] : null, s = al(e, t);
        if (s) {
            const f = fe(s.normal) ?? [
                0,
                0,
                1
            ];
            return {
                origin: o ?? s.origin,
                normal: f,
                xAxis: fe(s.xAxis) ?? En(f).xAxis,
                yAxis: fe(s.yAxis) ?? En(f).yAxis
            };
        }
        const a = n && i ? fe([
            i[0] - n[0],
            i[1] - n[1],
            i[2] - n[2]
        ]) : null;
        if (!o || !a) return Xs(e);
        const d = Math.abs(a[2]) > .9 ? [
            1,
            0,
            0
        ] : [
            0,
            0,
            1
        ], c = fe(Xo(d, a)) ?? [
            0,
            1,
            0
        ], l = fe(Xo(a, c)) ?? [
            0,
            0,
            1
        ];
        return {
            origin: o,
            normal: l,
            xAxis: a,
            yAxis: c
        };
    }
    function Ua(e, t) {
        const r = [
            e[0] - t.origin[0],
            e[1] - t.origin[1],
            e[2] - t.origin[2]
        ];
        return [
            Mt(r, t.xAxis),
            Mt(r, t.yAxis)
        ];
    }
    dl = function(e, t = new Map) {
        const r = st(e.parameters) ?? {}, n = Pe(r.start), i = Pe(r.end), o = Zs(e, t), s = n ? Ua(n, o) : [
            0,
            0
        ], a = i ? Ua(i, o) : [
            0,
            0
        ], d = Qo(e.id);
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
    cl = function(e, t, r) {
        const n = st(e.parameters) ?? {}, i = Yt(n, [
            "rotation",
            "angle"
        ], [
            "Rotation",
            "Angle"
        ]) ?? 0, o = sl(e, t);
        if (!o) return i;
        const s = fe(r.normal), a = fe(r.xAxis), d = fe(r.yAxis);
        if (!s || !a || !d) return i;
        const c = Mt(o.direction, s), l = fe([
            o.direction[0] - s[0] * c,
            o.direction[1] - s[1] * c,
            o.direction[2] - s[2] * c
        ]);
        return l ? i + Math.atan2(Mt(l, d), Mt(l, a)) : i;
    };
    function qg(e, t) {
        const r = st(e.parameters) ?? {}, n = typeof r.text_string == "string" ? r.text_string : "", i = typeof r.font == "string" ? r.font : "Arial", o = rl(r), { length: s, height: a } = nl(r), d = Yt(r, [
            "frame_on_path_wscale",
            "frame_on_path_wscale_val",
            "wscale",
            "width_scale"
        ], [
            "W Scale",
            "Width Scale"
        ]), c = Ne(r.planar_wscale), l = o === "planar" ? c !== null && c > 0 ? c / 100 : 1 : d !== null && d > 0 ? d / 100 : s > 0 ? s / Math.max(a * Math.max(1, n.length) * .6, a * .5) : 1, f = Xi(e, t), u = cl(e, t, f), h = il(e, u), m = Wt(r.frame_on_path_anchor_pos_is_percent), I = Wt(r.frame_on_path_anchor_pos_is_parameter), w = Wt(r.frame_on_path_anchor_pos_is_flipped) ?? !1, y = o === "planar" ? void 0 : Yt(r, [
            "frame_on_path_anchor_pos_val"
        ], [
            "Parameter"
        ]) ?? Ne(r.frame_on_path_anchor_pos_rhs) ?? .5, x = y === void 0 ? void 0 : m === !0 || m !== !1 && I !== !0 && Math.abs(y) > 1 ? y / 100 : y, b = x === void 0 ? 0 : Math.max(0, Math.min(1, w ? 1 - x : x)), g = o === "on_face" ? 4 : Ne(r[o === "planar" ? "planar_anchor" : "frame_on_path_anchor"]) ?? (o === "planar" ? void 0 : 4), S = {
            id: `${Qo(e.id)}:origin`,
            x: h.x,
            y: h.y
        };
        return {
            loops: [],
            geometry: [
                {
                    kind: "text",
                    id: Qo(e.id),
                    origin: S,
                    content: n,
                    height: a > 0 ? a : 1,
                    rotation: u,
                    font: i,
                    widthScale: l,
                    alignCenter: o === "on_face",
                    placementType: o,
                    anchor: g,
                    ...x !== void 0 ? {
                        anchorPosition: b
                    } : {},
                    ...m === !0 ? {
                        anchorPositionMode: "percent"
                    } : I === !0 ? {
                        anchorPositionMode: "parameter"
                    } : {},
                    ...w ? {
                        anchorPositionFlipped: !0
                    } : {},
                    ...Wt(r.frame_on_path_is_apex_reversed) ? {
                        apexReversed: !0
                    } : {},
                    ...Number.isInteger(Ne(r.font_style)) ? {
                        fontStyle: Ne(r.font_style)
                    } : {},
                    ...Number.isInteger(Ne(r.script)) ? {
                        script: Ne(r.script)
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
    function Qo(e) {
        return `ug:feature:${e}`;
    }
    function Xs(e) {
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
    ll = function(e) {
        const t = Xs(e);
        return {
            loops: jg(e.sketchCurves),
            geometry: zg(e.sketchCurves),
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
    function ul(e, t, r) {
        if (e.loops.length > 0 || !e.geometry?.length) return e;
        const n = e.geometry.filter((C)=>C.kind === "line");
        if (n.length < 1 || n.length !== e.geometry.filter((C)=>C.kind !== "point").length) return e;
        const i = 1e-5, o = (C, q)=>Math.hypot(C.x - q.x, C.y - q.y) <= i, s = n.flatMap((C)=>[
                J([
                    C.start.x,
                    C.start.y
                ]),
                J([
                    C.end.x,
                    C.end.y
                ])
            ]), a = s.filter((C, q)=>s.every((p, E)=>q === E || !o(C, p)));
        if (a.length !== 2) return e;
        const d = [
            t[0] - e.origin[0],
            t[1] - e.origin[1],
            t[2] - e.origin[2]
        ], c = d[0] * e.uAxis[0] + d[1] * e.uAxis[1] + d[2] * e.uAxis[2], l = d[0] * e.vAxis[0] + d[1] * e.vAxis[1] + d[2] * e.vAxis[2], f = r[0] * e.uAxis[0] + r[1] * e.uAxis[1] + r[2] * e.uAxis[2], u = r[0] * e.vAxis[0] + r[1] * e.vAxis[1] + r[2] * e.vAxis[2], h = Math.hypot(f, u);
        if (h <= i) return e;
        const m = (C)=>{
            const q = ((C.x - c) * f + (C.y - l) * u) / (h * h);
            return {
                x: c + f * q,
                y: l + u * q
            };
        }, I = [];
        let w = a[0];
        const y = new Set;
        for(; y.size < n.length;){
            const C = n.findIndex((O, M)=>y.has(M) ? !1 : o(w, J([
                    O.start.x,
                    O.start.y
                ])) || o(w, J([
                    O.end.x,
                    O.end.y
                ])));
            if (C < 0) return e;
            const q = n[C];
            y.add(C);
            const p = J([
                q.start.x,
                q.start.y
            ]), E = J([
                q.end.x,
                q.end.y
            ]);
            o(w, E) ? (I.push({
                ...q,
                start: q.end,
                end: q.start
            }), w = p) : (I.push(q), w = E);
        }
        if (!o(w, a[1])) return e;
        const x = a[0], b = a[1], g = m(x), S = m(b), F = (C, q, p)=>o(q, p) ? null : {
                kind: "line",
                id: C,
                start: q,
                end: p
            }, A = I.map((C)=>F(C.id, J([
                C.start.x,
                C.start.y
            ]), J([
                C.end.x,
                C.end.y
            ]))).filter((C)=>C !== null), D = F("ug:revolve-closure:last", b, S);
        D && A.push(D);
        const V = F("ug:revolve-closure:axis", S, g);
        V && A.push(V);
        const X = F("ug:revolve-closure:first", g, x);
        X && A.push(X);
        const k = A.map((C)=>C.start), T = A.filter((C)=>C.kind === "line" && C.id?.startsWith("ug:revolve-closure") === !0).map((C)=>({
                kind: "line",
                id: C.id,
                start: {
                    id: `${C.id}:start`,
                    ...C.start
                },
                end: {
                    id: `${C.id}:end`,
                    ...C.end
                }
            }));
        return {
            ...e,
            loops: [
                {
                    points: k,
                    isOuter: !0,
                    segments: A
                }
            ],
            geometry: [
                ...e.geometry ?? [],
                ...T
            ]
        };
    }
    function fl(e) {
        const t = {}, r = new Map(e.map((n)=>[
                n.id,
                n
            ]));
        for (const n of e)n.normalizedType === "sketch" && (t[`ug:feature:${n.id}`] = ll(n)), n.normalizedType === "text" && (t[`ug:feature:${n.id}`] = qg(n, r)), n.normalizedType === "line" && (t[`ug:feature:${n.id}`] = dl(n, r));
        return t;
    }
    function Ug(e, t, r) {
        const n = Math.hypot(...r), i = Math.hypot(...e.normal);
        if (n <= 1e-12 || i <= 1e-12) return `axisLength=${n}; normalLength=${i}`;
        const o = r.map((w)=>w / n), s = e.normal.map((w)=>w / i), a = o[0] * s[0] + o[1] * s[1] + o[2] * s[2], d = [
            t[0] - e.origin[0],
            t[1] - e.origin[1],
            t[2] - e.origin[2]
        ], c = d[0] * s[0] + d[1] * s[1] + d[2] * s[2], l = [
            s[1] * o[2] - s[2] * o[1],
            s[2] * o[0] - s[0] * o[2],
            s[0] * o[1] - s[1] * o[0]
        ], f = Math.hypot(...l);
        let u = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, m = 0;
        if (f > 1e-12) for (const w of e.loops)for (const y of w.points){
            const x = it(e, y.x, y.y), b = [
                x[0] - t[0],
                x[1] - t[1],
                x[2] - t[2]
            ], g = (b[0] * l[0] + b[1] * l[1] + b[2] * l[2]) / f;
            u = Math.min(u, g), h = Math.max(h, g), m += 1;
        }
        const I = u < -1e-7 && h > 1e-7;
        return [
            `axisLength=${n}`,
            `axisNormalDot=${a}`,
            `axisPlaneOffset=${c}`,
            `profileLoops=${e.loops.length}`,
            `profilePoints=${m}`,
            `signedRadialRange=[${u},${h}]`,
            `profileCrossesAxis=${I}`
        ].join("; ");
    }
    function An(e, t, r, n, i, o = 0) {
        const s = ul(t, r, n), a = Ug(s, r, n);
        if (Math.hypot(...n) <= 1e-12) throw new Error(`OCC revolve input has a degenerate axis; ${a}`);
        let c, l, f;
        try {
            ({ face: c, wireBuilder: l, faceMaker: f } = wt(e, s));
        } catch (w) {
            throw new Error(`OCC revolve profile face construction failed; ${a}; cause=${String(w)}`);
        }
        const u = new e.gp_Ax1_2(new e.gp_Pnt_3(r[0], r[1], r[2]), new e.gp_Dir_4(n[0], n[1], n[2]));
        let h = c, m;
        if (Math.abs(o) > 1e-12) {
            const w = e, y = new w.gp_Trsf_1, x = y.SetRotation_1 ?? y.SetRotation, b = w.BRepBuilderAPI_Transform_2 ?? w.BRepBuilderAPI_Transform;
            if (typeof x != "function" || typeof b != "function") throw y.delete?.(), u.delete?.(), f.delete?.(), l.delete?.(), new Error("OCC revolve start angle transform binding is unavailable");
            x.call(y, u, o);
            const g = new b(c, y, !0);
            if (g.Build?.(), g.IsDone?.() === !1) throw g.delete?.(), y.delete?.(), u.delete?.(), f.delete?.(), l.delete?.(), new Error("OCC revolve start angle transform failed");
            h = g.Shape(), m = {
                delete: ()=>{
                    g.delete?.(), y.delete?.();
                }
            };
        }
        let I;
        try {
            const w = new e.BRepPrimAPI_MakeRevol_1(h, u, i, !0);
            return I = w, {
                shape: w.Shape(),
                revol: w,
                axis: u,
                wireBuilder: l,
                faceMaker: f,
                faceTransform: m
            };
        } catch (w) {
            m?.delete?.();
            try {
                I?.delete?.();
            } catch  {}
            throw u.delete?.(), f.delete?.(), l.delete?.(), new Error(`OCC revolve kernel rejected the face/axis; ${a}; angle=${i}; cause=${String(w)}`);
        }
    }
    function Dr(e) {
        e.revol.delete?.(), e.axis.delete?.(), e.faceMaker.delete?.(), e.faceTransform?.delete?.(), e.wireBuilder.delete?.();
    }
    function Qs(e, t, r, n, i) {
        const o = An(e, t, r, n, i);
        try {
            return dt(e, o.shape);
        } finally{
            Dr(o);
        }
    }
    const pl = Qs, Wg = Object.freeze(Object.defineProperty({
        __proto__: null,
        buildRevolveShapeWithOcc: An,
        disposeRevolveShape: Dr,
        revolveProfileWithOcc: Qs,
        revolveRectangleWithOcc: pl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Gg(e, t) {
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
    function Yg(e, t, r, n, i) {
        const o = e, s = o.ShapeUpgrade_UnifySameDomain_2;
        if (typeof s == "function") return new s(t, r, n, i);
        const a = o.ShapeUpgrade_UnifySameDomain_1;
        if (typeof a == "function") {
            const d = new a;
            try {
                return d.Initialize(t, r, n, i), d;
            } catch (c) {
                throw d.delete?.(), c;
            }
        }
        throw new Error("OCC ShapeUpgrade_UnifySameDomain is unavailable");
    }
    function ea(e, t, r = {}) {
        const n = r.unifyEdges ?? !0, i = r.unifyFaces ?? !0, o = r.concatBSplines ?? !1;
        let s;
        try {
            s = Yg(e, t, n, i, o), r.linearTolerance !== void 0 && s.SetLinearTolerance(r.linearTolerance), r.angularTolerance !== void 0 && s.SetAngularTolerance(r.angularTolerance), s.Build();
            const a = Gg(e, s.Shape());
            return {
                shape: a,
                applied: !0,
                dispose: ()=>a.delete?.()
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
    function Tr(e, t, r = {}) {
        const n = ea(e, t, r);
        return n.applied ? (t.delete?.(), n.shape) : t;
    }
    function Ar(e, t, r, n) {
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
                    const d = i;
                    throw new Error(`Unsupported boolean op ${String(d)}`);
                }
        }
        if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error(`OCC boolean ${n} failed to build a valid result`);
        const s = ea(e, o.Shape());
        let a = !1;
        return {
            Shape: ()=>s.shape,
            IsDone: ()=>o.IsDone?.() ?? !0,
            delete: ()=>{
                a || (a = !0, s.dispose(), o.delete?.());
            }
        };
    }
    function Jg(e, t, r, n, i) {
        const o = e.filter((s)=>{
            const a = s.sampledPoints ?? [
                s.start,
                s.midpoint,
                s.end
            ];
            if (a.length < 4) return !1;
            const d = a.map((f)=>{
                const u = f[0] - t[0], h = f[1] - t[1], m = f[2] - t[2], I = u * r[0] + h * r[1] + m * r[2], w = u - I * r[0], y = h - I * r[1], x = m - I * r[2];
                return {
                    radial: Math.hypot(w, y, x),
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
                return d.reduce((c, l)=>{
                    const f = l[0] - t[0], u = l[1] - t[1], h = l[2] - t[2];
                    return c + f * r[0] + u * r[1] + h * r[2];
                }, 0) / d.length;
            }));
            return o.filter((a)=>{
                const d = a.sampledPoints ?? [
                    a.start,
                    a.midpoint,
                    a.end
                ], c = d.reduce((l, f)=>{
                    const u = f[0] - t[0], h = f[1] - t[1], m = f[2] - t[2];
                    return l + u * r[0] + h * r[1] + m * r[2];
                }, 0) / d.length;
                return Math.abs(c - s) <= .5;
            }).map((a)=>a.ordinal);
        }
        return o.map((s)=>s.ordinal);
    }
    function hl(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function di(e, t) {
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
    const Zg = 3, Xg = 7, Qg = .1;
    function eI(e, t, r) {
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
    function tI(e, t, r, n, i, o) {
        const s = [
            i
        ], a = (d, c, l, f, u)=>{
            const h = (d + l) / 2, m = t.Value(h), I = di(e, m);
            if (m.delete?.(), u < Zg || u < Xg && eI(I, c, f) > Qg) {
                a(d, c, h, I, u + 1), a(h, I, l, f, u + 1);
                return;
            }
            s.push(f);
        };
        return a(r, i, n, o, 0), s;
    }
    function ta(e, t, r) {
        const n = hl(e, "TopExp_Explorer", [
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
    function ie(e, t) {
        const r = [];
        return ta(e, t, (n, i)=>{
            try {
                const o = hl(e, "BRepAdaptor_Curve", [
                    n
                ]), s = typeof o.FirstParameter == "function" ? o.FirstParameter() : 0, a = typeof o.LastParameter == "function" ? o.LastParameter() : 1, d = o.Value(s), c = o.Value(a), l = o.Value((s + a) / 2), f = di(e, d), u = di(e, c), h = di(e, l), m = tI(e, o, s, a, f, u);
                let I = 0;
                for(let w = 1; w < m.length; w++){
                    const y = m[w - 1], x = m[w];
                    I += Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]);
                }
                r.push({
                    ordinal: i,
                    start: f,
                    end: u,
                    midpoint: h,
                    length: I,
                    sampledPoints: m
                }), o.delete?.(), d.delete?.(), c.delete?.(), l.delete?.();
            } catch  {}
        }), r;
    }
    function rI(e, t) {
        return Qi(e, t);
    }
    function nI(e, t, r = 1.5) {
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
                let l = 0, f = 0;
                for (const h of o.samplePoints){
                    let m = Number.POSITIVE_INFINITY;
                    for (const I of c)m = Math.min(m, rI(h, I));
                    l = Math.max(l, m), f += m;
                }
                const u = Math.sqrt(f / o.samplePoints.length) + Math.sqrt(l);
                u < a && (a = u, s = d);
            }
            if (!s || a > r * 2) throw new Error(`Failed to match sampled edge "${o.role}" to OCC prism (score=${a.toFixed(4)})`);
            n.add(s.ordinal), i.push(s.ordinal);
        }
        return [
            ...new Set(i)
        ].sort((o, s)=>o - s);
    }
    function iI(e, t, r) {
        const n = ot(e, t, r);
        try {
            return ie(e, n.shape);
        } finally{
            qe(n);
        }
    }
    function Qi(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function Wa(e) {
        const t = e.sampledPoints?.map((s)=>[
                ...s
            ]), r = Qi(e.start, e.end) <= 1e-12, n = [
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
    function ml(e, t, r = 1.5) {
        if (e.length === 0) throw new Error("OCC prism has no edges to match");
        const n = r * r, i = new Set, o = [];
        for (const s of t){
            let a = null, d = Number.POSITIVE_INFINITY;
            for (const c of e){
                if (i.has(c.ordinal)) continue;
                const l = Qi(s.midpoint, c.midpoint);
                l < d && (d = l, a = c);
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
    function pn(e, t, r, n = 1.5) {
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
            let l = null, f = Number.POSITIVE_INFINITY;
            for (const u of r){
                if (a.has(u.ordinal)) continue;
                const h = Qi(c, u.midpoint);
                h < f && (f = h, l = u);
            }
            !l || f > i || (a.add(l.ordinal), s.set(l.ordinal, {
                ...d,
                startVertex: [
                    ...l.start
                ],
                endVertex: [
                    ...l.end
                ],
                midpoint: [
                    ...l.midpoint
                ],
                occEdgeOrdinal: l.ordinal
            }));
        }
        return r.map((d)=>{
            const c = s.get(d.ordinal);
            if (c) return {
                ...c,
                ...Wa(d),
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
            const l = `occ_edge_${d.ordinal}`;
            return {
                id: `${e}::${l}`,
                ...Wa(d),
                provenance: {
                    featureId: e,
                    role: l
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
    function oI(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function ra(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Fillet radius must be a positive finite number");
        if (r.length === 0) throw new Error("Fillet requires at least one edge");
        const i = new Set(r), o = e.ChFi3d_FilletShape?.ChFi3d_Rational ?? e.ChFi3d_Rational, s = oI(e, "BRepFilletAPI_MakeFillet", o === void 0 ? [
            t
        ] : [
            t,
            o
        ]);
        let a = 0;
        try {
            if (ta(e, t, (d, c)=>{
                if (i.has(c)) {
                    if (typeof s.Add_2 == "function") s.Add_2(n, d);
                    else if (typeof s.Add == "function") s.Add(n, d);
                    else throw new Error("OCC fillet Add binding is unavailable");
                    a++;
                }
            }), a !== i.size) throw new Error(`Fillet edge resolution failed: requested ${i.size}, found ${a}`);
            if (typeof s.Build == "function" && s.Build(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC fillet failed to build a valid result");
            return Tr(e, s.Shape());
        } finally{
            s.delete?.();
        }
    }
    function sI(e, t, r, n, i) {
        const o = ot(e, t, r);
        let s;
        try {
            return s = ra(e, o.shape, n, i), dt(e, s);
        } finally{
            s?.delete?.(), qe(o);
        }
    }
    function aI(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function Pi(e, t, r, n) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Chamfer distance must be a positive finite number");
        if (r.length === 0) throw new Error("Chamfer requires at least one edge");
        const i = new Set(r), o = aI(e, "BRepFilletAPI_MakeChamfer", [
            t
        ]);
        let s = 0;
        try {
            if (ta(e, t, (a, d)=>{
                if (i.has(d)) {
                    if (typeof o.Add_2 == "function") o.Add_2(n, a);
                    else if (typeof o.Add == "function") o.Add(n, a);
                    else throw new Error("OCC chamfer Add binding is unavailable");
                    s++;
                }
            }), s !== i.size) throw new Error(`Chamfer edge resolution failed: requested ${i.size}, found ${s}`);
            if (o.Build?.(), typeof o.IsDone == "function" && !o.IsDone()) throw new Error("OCC chamfer failed to build a valid result");
            return Tr(e, o.Shape());
        } finally{
            o.delete?.();
        }
    }
    function dI(e, t, r, n, i) {
        const o = ot(e, t, r);
        let s;
        try {
            return s = Pi(e, o.shape, n, i), dt(e, s);
        } finally{
            s?.delete?.(), qe(o);
        }
    }
    function Yn(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function cI(e, t) {
        const r = e;
        return new (r.gp_Pnt_3 ?? r.gp_Pnt)(t[0], t[1], t[2]);
    }
    function lI(e, t) {
        const r = e;
        return new (r.gp_Dir_4 ?? r.gp_Dir)(t[0], t[1], t[2]);
    }
    function uI(e, t) {
        const r = t.origin ?? t.center ?? [
            0,
            0,
            0
        ], n = cI(e, r), i = [
            n
        ];
        let o;
        try {
            if (t.type === "box") o = Yn(e, "BRepPrimAPI_MakeBox", [
                n,
                t.length,
                t.width,
                t.height
            ]);
            else if (t.type === "sphere") o = Yn(e, "BRepPrimAPI_MakeSphere", [
                n,
                t.radius
            ]);
            else {
                const s = lI(e, t.direction ?? [
                    0,
                    0,
                    1
                ]);
                i.push(s);
                const a = new (e.gp_Ax2_3 ?? e.gp_Ax2_2)(n, s);
                i.push(a), t.type === "cylinder" ? o = Yn(e, "BRepPrimAPI_MakeCylinder", [
                    a,
                    t.radius,
                    t.height
                ]) : o = Yn(e, "BRepPrimAPI_MakeCone", [
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
    function Ga(e, t) {
        const r = e, n = Object.keys(r).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new r[o];
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function fI(e, t, r, n, i) {
        if (!(n > 0) || !Number.isFinite(n)) throw new Error("Thickness offset must be positive and finite");
        if (r.length === 0) throw new Error("Thickness requires at least one removed face");
        const o = e, s = Ga(e, "BRepOffsetAPI_MakeThickSolid"), a = Ga(e, "TopTools_ListOfShape"), d = new Set(r.map((u)=>u.subMeshIndex)), c = new o.TopExp_Explorer_2(t, o.TopAbs_ShapeEnum.TopAbs_FACE, o.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let l = 0, f = 0;
        try {
            for(; c.More();){
                if (d.has(l)) {
                    const I = a.Append ?? a.Append_1 ?? a.append;
                    if (typeof I != "function") throw new Error("OCC TopTools_ListOfShape append binding is unavailable");
                    I.call(a, o.TopoDS.Face_1(c.Current())), f++;
                }
                l++, c.Next();
            }
            if (f !== d.size) throw Object.assign(new Error("Thickness face selector is lost on the current base solid"), {
                code: "topology-reference-lost"
            });
            const u = s.MakeThickSolidByJoin_1 ?? s.MakeThickSolidByJoin;
            if (typeof u != "function") throw new Error("OCC MakeThickSolidByJoin binding is unavailable");
            const h = o.BRepOffset_Mode?.BRepOffset_Skin ?? 0, m = o.GeomAbs_JoinType?.GeomAbs_Arc ?? 0;
            if (u.call(s, t, a, i ? -n : n, 1e-6, h, !1, !1, m, !1), s.Build?.(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC thickness failed to build a valid shell");
            return s.Shape();
        } finally{
            c.delete?.(), a.delete?.(), s.delete?.();
        }
    }
    function Ya(e, t, r, n) {
        const i = e, o = new i.gp_Trsf_1, s = new i.gp_Pnt_3(r[0], r[1], r[2]), a = new i.gp_Dir_4(n[0], n[1], n[2]), d = new (i.gp_Ax2_3 ?? i.gp_Ax2_2)(s, a), c = o.SetMirror_3 ?? o.SetMirror_2 ?? o.SetMirror_1 ?? o.SetMirror;
        if (typeof c != "function") throw new Error("OCC mirror transform API unavailable");
        c.call(o, d);
        const l = new i.BRepBuilderAPI_Transform_2(t, o, !0);
        if (l.Build?.(), l.IsDone?.() === !1) throw new Error("OCC mirror transform failed");
        return {
            shape: l.Shape(),
            delete: ()=>{
                l.delete?.(), d.delete?.(), s.delete?.(), a.delete?.(), o.delete?.();
            }
        };
    }
    function pI(e, t) {
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
    function hI(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function mI(e, t) {
        if (t.length < 2) throw new Error("Loft requires at least two section profiles");
        for(let i = 1; i < t.length; i++)if (pI(t[i - 1], t[i])) throw new Error(`Loft sections ${i} and ${i + 1} are coplanar; use distinct section planes`);
        const r = hI(e, "BRepOffsetAPI_ThruSections", [
            !0,
            !1,
            1e-6
        ]), n = t.map((i)=>wt(e, i));
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
    function es(e) {
        for(let t = e.length - 1; t >= 0; t -= 1)e[t]?.delete?.();
    }
    function yI(e) {
        const t = e.handedness === "left" ? -1 : 1, r = e.pitch / (Math.PI * 2), n = Math.hypot(1, r), i = e.height / e.pitch;
        return {
            direction: [
                t / n,
                r / n
            ],
            endParameter: i * Math.PI * 2 * n
        };
    }
    function gI(e, t) {
        const r = e;
        if (Math.abs(t.radius) <= 1e-12) throw new Error("Analytic Helix radius must be non-zero");
        if (t.pitch <= 0) throw new Error("Analytic Helix pitch must be positive");
        const n = (s, a)=>an(r, s, a), i = [], o = (s)=>(i.push(s), s);
        try {
            const s = o(n("gp_Pnt", [
                ...t.axisOrigin
            ])), a = o(n("gp_Dir", [
                ...t.axisDirection
            ])), d = o(n("gp_Ax3", [
                s,
                a
            ])), c = o(n("gp_Cylinder", [
                d,
                t.radius
            ])), l = o(n("Geom_CylindricalSurface", [
                c
            ])), f = o(n("gp_Pnt2d", [
                t.startAngle,
                0
            ])), u = yI(t), h = o(n("gp_Dir2d", u.direction)), m = o(n("Geom2d_Line", [
                f,
                h
            ])), I = o(n("Handle_Geom2d_Curve", [
                m
            ])), w = o(n("Handle_Geom_Surface", [
                l
            ])), y = o(n("BRepBuilderAPI_MakeEdge", [
                I,
                w,
                0,
                u.endParameter
            ])), x = y.Edge?.() ?? y.edge?.();
            if (!x) throw new Error("OCC failed to create the analytic Helix edge");
            return {
                edge: x,
                resources: i
            };
        } catch (s) {
            throw es(i), s;
        }
    }
    function an(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function eo(e, t, r = 32) {
        const n = e;
        if (t.radius === t.endRadius && t.pitch === t.endPitch) {
            const d = gI(e, t);
            let c;
            try {
                c = an(n, "BRepBuilderAPI_MakeWire", []);
                const l = c.Add_1 ?? c.Add;
                if (typeof l != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
                l.call(c, d.edge);
                const f = c.Wire(), u = n.BRepLib?.BuildCurves3d_2;
                if (typeof u != "function") throw new Error("OCC BRepLib.BuildCurves3d binding is unavailable");
                if (u.call(n.BRepLib, f) === !1) throw new Error("OCC failed to build the analytic Helix 3-D curve");
                return {
                    wire: f,
                    builder: c,
                    resources: d.resources
                };
            } catch (l) {
                throw c?.delete?.(), es(d.resources), l;
            }
        }
        const o = (d)=>an(n, "gp_Pnt", [
                d[0],
                d[1],
                d[2]
            ]), s = an(n, "BRepBuilderAPI_MakeWire", []), a = [];
        try {
            const d = s.Add_1 ?? s.Add;
            if (typeof d != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
            const { points: c } = $s(t, r);
            for(let l = 0; l < c.length - 1; l += 1){
                const f = o(c[l]);
                a.push(f);
                const u = o(c[l + 1]);
                a.push(u);
                const h = an(n, "BRepBuilderAPI_MakeEdge", [
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
            throw s.delete?.(), es(a), d;
        }
    }
    function II(e, t) {
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
    function hn(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    function bI(e, t, r) {
        const n = e, i = n.gp_Pnt_3 ?? n.gp_Pnt, o = n.BRepBuilderAPI_MakeEdge_3 ?? n.BRepBuilderAPI_MakeEdge;
        if (typeof i != "function" || typeof o != "function") throw new Error("OCC 3D line edge binding is unavailable");
        const s = new i(t[0], t[1], t[2]), a = new i(r[0], r[1], r[2]), d = new o(s, a);
        try {
            return d.Edge();
        } finally{
            d.delete?.(), s.delete?.(), a.delete?.();
        }
    }
    function Ja(e, t, r = !0) {
        const i = (t.geometry ?? []).flatMap((l)=>l.kind === "line" ? [
                {
                    kind: "line",
                    start: l.start,
                    end: l.end
                }
            ] : l.kind === "bezier" ? [
                {
                    kind: "bezier",
                    controls: l.controls
                }
            ] : l.kind === "spline" ? [
                {
                    kind: "spline",
                    controls: l.controls,
                    tension: l.tension
                }
            ] : []), o = [
            ...(t.loops.find((l)=>l.isOuter) ?? t.loops[0])?.points ?? []
        ];
        if (i.length === 0) for(let l = 0; l < o.length - 1; l++)i.push({
            kind: "line",
            start: o[l],
            end: o[l + 1]
        });
        if (i.length === 0) throw new Error("Pipe path requires at least one curve segment");
        const s = hn(e, "BRepBuilderAPI_MakeWire", []), a = [], d = s.Add_1 ?? s.Add;
        if (typeof d != "function") throw new Error("OCC MakeWire.Add binding is unavailable");
        const c = r ? i : i.flatMap((l)=>{
            const f = $d(l), u = [];
            for(let h = 0; h < f.length - 1; h++)u.push({
                kind: "line",
                start: f[h],
                end: f[h + 1]
            });
            return l.kind === "circle" && f.length > 2 && u.push({
                kind: "line",
                start: f[f.length - 1],
                end: f[0]
            }), u;
        });
        for (const l of c){
            const f = l.start, u = l.end, h = Array.isArray(f) ? f : f && typeof f == "object" && Number.isFinite(f.z) ? [
                f.x,
                f.y,
                f.z
            ] : null, m = Array.isArray(u) ? u : u && typeof u == "object" && Number.isFinite(u.z) ? [
                u.x,
                u.y,
                u.z
            ] : null;
            h && m ? d.call(s, bI(e, h, m)) : d.call(s, Jc(e, t, l, a));
        }
        return {
            wire: s.Wire(),
            points: [],
            builder: s,
            resources: a
        };
    }
    function wI(e, t, r, n = "frenet", i = {}) {
        const o = Array.isArray(t) ? t : [
            t
        ];
        if (o.length === 0) throw new Error("Pipe requires at least one section profile");
        for(let l = 1; l < o.length; l++)if (II(o[l - 1], o[l])) throw new Error(`Pipe sections ${l} and ${l + 1} are coplanar; place sections along the path`);
        if (i.scalingMethod && i.scalingMethod.toLowerCase() !== "constant") throw new Error(`Unsupported UG Pipe scaling method: ${i.scalingMethod}`);
        if (i.sectionInterpolation && i.sectionInterpolation.toLowerCase() !== "linear") throw new Error(`Unsupported UG Pipe section interpolation: ${i.sectionInterpolation}`);
        const s = o.map((l)=>wt(e, l)), a = (r.geometry ?? []).some((l)=>l.kind === "bezier" || l.kind === "spline");
        let d = i.analyticHelix ? eo(e, i.analyticHelix, 64) : Ja(e, r, !0), c;
        try {
            const l = i.preserveShape !== !1;
            if (o.length > 1 || i.preserveShape === !0 || n === "fixed" && i.orientationDirection !== void 0) {
                c = hn(e, "BRepOffsetAPI_MakePipeShell", [
                    d.wire
                ]), n === "fixed" && i.orientationDirection && kI(e, c, i.orientationDirection);
                const h = e.BRepBuilderAPI_TransitionMode?.BRepBuilderAPI_Transformed;
                if (h !== void 0 && c.SetTransitionMode?.(h), i.tolDistance !== void 0 || i.tolAngleDeg !== void 0) {
                    const m = i.tolDistance ?? 1e-4, I = i.tolAngleDeg === void 0 ? .01 : i.tolAngleDeg * Math.PI / 180;
                    c.SetTolerance?.(m, m, I);
                }
                c.SetMaxDegree?.(5), c.SetMaxSegments?.(200);
                for(let m = 0; m < s.length; m += 1){
                    const I = s[m], w = s.length === 1 ? SI(e, d.wire, o[m].origin, i.tolDistance) : void 0;
                    try {
                        xI(c, I.outerWire, w, l);
                    } finally{
                        w?.delete?.();
                    }
                }
                if (c.Build?.(), typeof c.IsDone == "function" && !c.IsDone()) throw new Error("OCC PipeShell failed to build the UG sweep");
                return c.MakeSolid?.(), c.Shape();
            }
            const u = s[0];
            try {
                c = hn(e, "BRepOffsetAPI_MakePipe", [
                    d.wire,
                    u.face
                ]);
            } catch (h) {
                if (!a) throw h;
                d.builder.delete?.();
                for (const m of d.resources)m.delete?.();
                d = Ja(e, r, !1), c = hn(e, "BRepOffsetAPI_MakePipe", [
                    d.wire,
                    u.face
                ]);
            }
            if (c.Build?.(), typeof c.IsDone == "function" && !c.IsDone()) throw new Error("OCC pipe failed to build a valid result");
            return c.Shape();
        } finally{
            c?.delete?.(), d.builder.delete?.();
            for (const l of d.resources)l.delete?.();
            for (const l of s){
                l.faceMaker.delete?.(), l.wireBuilder.delete?.();
                for (const f of l.innerWireBuilders)f.delete?.();
            }
        }
    }
    function xI(e, t, r, n) {
        if (r) {
            if (typeof e.Add_2 != "function") throw new Error("OCC located PipeShell section binding is unavailable");
            e.Add_2(t, r, !1, n);
            return;
        }
        if (typeof e.Add_1 != "function") throw new Error("OCC PipeShell section binding is unavailable");
        e.Add_1(t, !1, n);
    }
    function SI(e, t, r, n = 1e-4) {
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
    function kI(e, t, r) {
        const n = hn(e, "gp_Dir", [
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
    function Zr(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function FI(e, t, r) {
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
    const vI = {
        0: "Draft_NoError",
        1: "Draft_FaceRecomputation",
        2: "Draft_EdgeRecomputation",
        3: "Draft_VertexRecomputation"
    };
    function yl(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function Jn(e) {
        const t = yl(e);
        return t != null ? `${vI[t] ?? "Draft_UnknownError"} (${t})` : typeof e == "string" && e.length > 0 ? e : "Draft_UnknownError";
    }
    function Zn(e) {
        switch(yl(e)){
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
    function _I(e, t) {
        const r = e.face.plane?.normal;
        if (r && Math.hypot(r[1] * e.neutralPlane.normal[2] - r[2] * e.neutralPlane.normal[1], r[2] * e.neutralPlane.normal[0] - r[0] * e.neutralPlane.normal[2], r[0] * e.neutralPlane.normal[1] - r[1] * e.neutralPlane.normal[0]) <= 1e-7) throw new Error(`Draft surface ${e.face.provenance.featureId}:${e.face.provenance.role} is parallel to the hinge plane, so no rotation hinge line exists`);
        if (Math.abs(t[0] * e.neutralPlane.normal[0] + t[1] * e.neutralPlane.normal[1] + t[2] * e.neutralPlane.normal[2]) <= 1e-7) throw new Error("Draft pull direction lies in the hinge plane; select a direction that crosses the hinge plane");
    }
    function EI(e, t, r, n) {
        try {
            return Ri(e, t, [
                r
            ], n);
        } catch  {
            return Ri(e, t, [
                {
                    ...r,
                    angle: -r.angle
                }
            ], n);
        }
    }
    function bo(e, t, r, n) {
        let i = t, o = 0, s = null;
        for (const a of r)try {
            i = EI(e, i, a, n), o += 1;
        } catch (d) {
            s = d instanceof Error ? d.message : String(d);
        }
        if (o !== r.length) throw new Error(s ?? "OCC draft add failed for every selected surface");
        return i;
    }
    function Ri(e, t, r, n) {
        if (r.length === 0) throw new Error("Draft requires at least one face operation");
        const i = e, o = Zr(i, "gp_Dir", n), s = Zr(i, "BRepOffsetAPI_DraftAngle", []), a = [];
        try {
            s.Init(t);
            let d = 0, c = null;
            for (const u of r){
                if (!Number.isFinite(u.angle) || Math.abs(u.angle) <= 0 || Math.abs(u.angle) >= Math.PI / 2) throw new Error("Draft angle is invalid");
                _I(u, n);
                const h = Zr(i, "gp_Pnt", u.neutralPlane.origin), m = Zr(i, "gp_Dir", u.neutralPlane.normal), I = Zr(i, "gp_Pln", [
                    h,
                    m
                ]);
                a.push(I, m, h);
                let w;
                try {
                    if (w = FI(e, t, u.face), s.Add(w, o, u.angle, I, !0), typeof s.AddDone == "function" && !s.AddDone()) {
                        const y = s.Status?.();
                        try {
                            s.Remove?.(w);
                        } catch  {}
                        c = `OCC draft add failed for ${u.face.provenance.featureId}:${u.face.provenance.role}: ${Jn(y)}; ${Zn(y)}`;
                        continue;
                    }
                    d += 1;
                } catch (y) {
                    try {
                        s.Remove?.(w);
                    } catch  {}
                    c = y instanceof Error ? y.message : `WASM/OCC exception ${String(y)}`;
                }
            }
            if (d === 0 || c) throw new Error(c ?? "OCC draft add failed for every selected surface");
            try {
                s.Build?.();
            } catch (u) {
                if (r.length > 1) return bo(e, t, r, n);
                const h = typeof s.Status == "function" ? s.Status() : 0;
                throw new Error(`OCC draft build failed: ${Jn(h)}; ${Zn(h)}` + (u instanceof Error ? `; ${u.message}` : ""));
            }
            const l = typeof s.Status == "function" ? s.Status() : 0;
            let f;
            try {
                f = s.ModifiedShape?.(t) ?? s.Shape?.();
            } catch (u) {
                if (r.length > 1) return bo(e, t, r, n);
                throw new Error(`OCC draft build failed: ${Jn(l)}; ${Zn(l)}` + (u instanceof Error ? `; ${u.message}` : ` WASM/OCC exception ${String(u)}`));
            }
            if (!f || typeof s.IsDone == "function" && !s.IsDone()) {
                if (r.length > 1) return bo(e, t, r, n);
                throw new Error(`OCC draft build failed: ${Jn(l)}; ${Zn(l)}`);
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
    function lt(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function AI(e, t, r, n) {
        const i = e, o = Math.hypot(...r.normal);
        if (o <= 1e-9) throw new Error("Split plane normal is degenerate");
        const s = r.normal.map((h)=>h / o), a = lt(i, "gp_Pnt", r.origin), d = lt(i, "gp_Dir", s), c = lt(i, "gp_Pln", [
            a,
            d
        ]), l = lt(i, "BRepBuilderAPI_MakeFace", [
            c,
            -1e6,
            1e6,
            -1e6,
            1e6
        ]), f = l.Face?.() ?? l.Shape?.();
        if (!f) throw new Error("OCC Split failed to construct the splitting plane");
        const u = [
            l,
            c,
            d,
            a
        ];
        try {
            const h = (I)=>{
                const w = I > 0 ? "positive" : "negative", y = lt(i, "gp_Pnt", [
                    r.origin[0] + s[0] * I,
                    r.origin[1] + s[1] * I,
                    r.origin[2] + s[2] * I
                ]), x = lt(i, "BRepPrimAPI_MakeHalfSpace", [
                    f,
                    y
                ]);
                if (u.unshift(x, y), x.Build?.(), x.IsDone?.() === !1) throw new Error("OCC Split half-space construction failed");
                const b = x.Solid?.() ?? x.Shape?.(), g = lt(i, "BRepAlgoAPI_Common", [
                    t,
                    b
                ]);
                if (u.unshift(g), g.Build?.(), g.IsDone?.() === !1) throw new Error(`OCC Split ${w} side intersection failed`);
                const S = g.Shape?.();
                if (!S) throw new Error(`OCC Split produced no ${w} side result`);
                return S;
            };
            let m;
            if (n === "both") {
                const I = h(1), w = h(-1), y = lt(i, "TopoDS_Compound", []), x = lt(i, "BRep_Builder", []);
                u.unshift(x), x.MakeCompound(y), x.Add(y, I), x.Add(y, w), m = y;
            } else m = h(n === "positive" ? 1 : -1);
            return {
                shape: m,
                dispose: ()=>u.forEach((I)=>I.delete?.())
            };
        } catch (h) {
            throw u.forEach((m)=>m.delete?.()), h;
        }
    }
    function mn(e, t, r) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} unavailable`);
    }
    function OI(e, t, r, n) {
        const i = t.subMeshes[r.subMeshIndex];
        if (!i) throw new Error(`Face Pull submesh ${r.subMeshIndex} is lost`);
        const o = t.indices ? Array.from(t.indices.slice(i.firstIndex, i.firstIndex + i.indexCount)) : Array.from({
            length: i.indexCount
        }, (I, w)=>i.firstIndex + w), s = new Map;
        for(let I = 0; I + 2 < o.length; I += 3){
            const w = [
                o[I],
                o[I + 1],
                o[I + 2]
            ];
            for(let y = 0; y < 3; y += 1){
                const x = w[y], b = w[(y + 1) % 3], g = x < b ? `${x}:${b}` : `${b}:${x}`, S = s.get(g);
                s.set(g, S ? {
                    ...S,
                    count: S.count + 1
                } : {
                    first: x,
                    second: b,
                    count: 1
                });
            }
        }
        const a = new Map;
        for (const I of s.values())I.count === 1 && ((a.get(I.first) ?? a.set(I.first, []).get(I.first)).push(I.second), (a.get(I.second) ?? a.set(I.second, []).get(I.second)).push(I.first));
        const d = a.keys().next().value;
        if (d === void 0) throw new Error("Face Pull could not resolve the selected face boundary");
        const c = [
            d
        ];
        let l = -1, f = d;
        for(; c.length <= a.size + 1;){
            const I = a.get(f)?.find((w)=>w !== l);
            if (I === void 0) throw new Error("Face Pull selected face boundary is open");
            if (I === d) break;
            c.push(I), l = f, f = I;
        }
        if (c.length < 3) throw new Error("Face Pull selected face boundary is degenerate");
        const u = mn(e, "BRepBuilderAPI_MakePolygon", []);
        n.push(u);
        const h = u.Add_1 ?? u.Add;
        for (const I of c){
            const w = mn(e, "gp_Pnt", [
                t.positions[I * 3],
                t.positions[I * 3 + 1],
                t.positions[I * 3 + 2]
            ]);
            n.push(w), h.call(u, w);
        }
        u.Close?.();
        const m = mn(e, "BRepBuilderAPI_MakeFace", [
            u.Wire(),
            !0
        ]);
        return n.push(m), m.Face?.() ?? m.Shape();
    }
    function gl(e, t, r, n, i, o, s) {
        const a = e, d = mn(a, "gp_Vec", [
            i[0] * o,
            i[1] * o,
            i[2] * o
        ]), c = [], l = [], f = [];
        let u;
        try {
            const h = n.map((w)=>{
                const y = mn(a, "BRepPrimAPI_MakePrism", [
                    OI(a, r, w, f),
                    d,
                    !0,
                    !0
                ]);
                if (y.Build?.(), y.IsDone?.() === !1) throw new Error("OCC Face Pull prism failed");
                return c.push(y), y.Shape();
            });
            let m = h[0];
            for(let w = 1; w < h.length; w += 1){
                const y = Ar(e, m, h[w], "union");
                l.push(y), m = y.Shape();
            }
            return u = Ar(e, t, m, s === "add" ? "union" : "cut"), {
                shape: u.Shape(),
                dispose: ()=>{
                    u?.delete?.();
                    for (const w of l.reverse())w.delete?.();
                    for (const w of c.reverse())w.delete?.();
                    for (const w of f.reverse())w.delete?.();
                    d.delete?.();
                }
            };
        } catch (h) {
            u?.delete?.();
            for (const m of l.reverse())m.delete?.();
            for (const m of c.reverse())m.delete?.();
            for (const m of f.reverse())m.delete?.();
            throw d.delete?.(), h;
        }
    }
    function Xr(e) {
        const t = Math.hypot(...e);
        return [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function wo(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function PI(e, t) {
        const r = Xr(e.axisDirection), n = Math.abs(r[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            0,
            1,
            0
        ], i = Xr(wo(n, r)), o = Xr(wo(r, i)), s = e.handedness === "left" ? -1 : 1, a = Xr([
            o[0] * s + r[0] * e.pitch / (Math.PI * 2 * e.radius),
            o[1] * s + r[1] * e.pitch / (Math.PI * 2 * e.radius),
            o[2] * s + r[2] * e.pitch / (Math.PI * 2 * e.radius)
        ]), d = Xr(wo(a, i)), c = t.majorRadius - t.depth;
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
    function Il(e, t, r, n) {
        if (r.profileKind === "custom_sketch" && !n) throw new Error("Custom Thread profile is unavailable");
        if (Math.abs(r.pitch - t.pitch) > 1e-9) throw new Error("Thread pitch must match Helix pitch");
        if (Math.abs(r.majorRadius - t.radius) > Math.max(1e-7, t.radius * 1e-6)) throw new Error("Thread major radius must match Helix radius");
        if (r.profileKind === "metric_triangle" && r.depth > Math.min(t.pitch, t.endPitch) * .75) throw new Error("Thread profile would self-intersect");
        const i = wt(e, n ?? PI(t, r)), o = eo(e, t, 8), s = e, a = Object.keys(s).filter((l)=>l === "BRepOffsetAPI_MakePipe" || l.startsWith("BRepOffsetAPI_MakePipe_"));
        let d, c;
        try {
            for (const l of a)try {
                d = new s[l](o.wire, i.face);
                break;
            } catch (f) {
                c = f;
            }
            if (!d) throw c instanceof Error ? c : new Error("OCC MakePipe binding is unavailable");
            if (d.Build?.(), typeof d.IsDone == "function" && !d.IsDone()) throw new Error("OCC Thread sweep failed");
            return d.Shape();
        } finally{
            d?.delete?.(), o.builder.delete?.();
            for (const l of o.resources)l.delete?.();
            i.faceMaker.delete?.(), i.wireBuilder.delete?.();
            for (const l of i.innerWireBuilders)l.delete?.();
        }
    }
    class RI {
        bodies = new Map;
        publish(t) {
            let r = this.bodies.get(t.bodyId);
            r || (r = new Map, this.bodies.set(t.bodyId, r));
            const n = r.get(t.featureId);
            n && n.shape !== t.shape && Xn(n.shape), r.set(t.featureId, t);
        }
        lookup(t, r) {
            return this.bodies.get(t)?.get(r) ?? null;
        }
        drop(t, r) {
            const n = this.bodies.get(t);
            if (!n) return !1;
            const i = n.get(r);
            return i ? (Xn(i.shape), n.delete(r), n.size === 0 && this.bodies.delete(t), !0) : !1;
        }
        invalidateFromHistoryIndex(t, r) {
            const n = this.bodies.get(t);
            if (!n) return 0;
            let i = 0;
            for (const [o, s] of [
                ...n
            ])s.historyIndex >= r && (Xn(s.shape), n.delete(o), i += 1);
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
                for (const n of r.values())Xn(n.shape);
                this.bodies.delete(t);
            }
        }
        clear() {
            for (const t of [
                ...this.bodies.keys()
            ])this.clearBody(t);
        }
    }
    function Za(e) {
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
    function Xa(e) {
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
    function Xn(e) {
        const t = e;
        try {
            t.delete?.();
        } catch  {}
    }
    function MI(e) {
        return ts(e);
    }
    function CI(e, t) {
        return e.bodyId === t.bodyId && e.featureId === t.featureId && e.committedRevision === t.committedRevision && e.prefixFingerprint === t.prefixFingerprint && e.replayProtocolVersion === t.replayProtocolVersion && e.runtimeIdentity.occRuntimeId === t.runtimeIdentity.occRuntimeId && e.runtimeIdentity.wasmBuildId === t.runtimeIdentity.wasmBuildId;
    }
    class $I {
        slots = new Map;
        staged = new Map;
        nextGeneration = 1;
        stage(t) {
            const r = ts(t.key), n = bl(t.historyIndex, "historyIndex"), i = Ut(t.generatingFeatureId, "generatingFeatureId"), o = Ut(t.opKind, "opKind"), s = this.nextGeneration;
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
            const n = Qr(t.key.bodyId, t.key.featureId);
            let i = this.slots.get(n);
            i || (i = {
                live: null,
                retiring: []
            }, this.slots.set(n, i)), this.retireLive(i);
            const o = new DI(t, r.shape);
            return i.live = o, Qa(o);
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
            return r ? Qa(r) : null;
        }
        discard(t) {
            const r = this.staged.get(t.generation);
            !r || r.candidate !== t || (this.staged.delete(t.generation), wr(r.shape));
        }
        drop(t, r) {
            this.discardStaged(t, r);
            const n = Qr(t, r), i = this.slots.get(n);
            i && (this.retireLive(i), !i.live && i.retiring.length === 0 && this.slots.delete(n));
        }
        invalidateFeatureIds(t, r) {
            let n = 0;
            for (const i of r){
                const o = this.slots.has(Qr(t, i)), s = [
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
            ])o.candidate.key.bodyId !== t || o.candidate.historyIndex < r || (this.staged.delete(i), wr(o.shape), n += 1);
            return n;
        }
        clearBody(t) {
            for (const [n, i] of [
                ...this.staged
            ])i.candidate.key.bodyId === t && (this.staged.delete(n), wr(i.shape));
            const r = `${t}\0`;
            for (const [n, i] of [
                ...this.slots
            ])n.startsWith(r) && (this.retireLive(i), !i.live && i.retiring.length === 0 && this.slots.delete(n));
        }
        clear() {
            for (const t of this.staged.values())wr(t.shape);
            this.staged.clear();
            for (const [t, r] of [
                ...this.slots
            ])this.retireLive(r), !r.live && r.retiring.length === 0 && this.slots.delete(t);
        }
        discardStaged(t, r) {
            for (const [n, i] of [
                ...this.staged
            ])i.candidate.key.bodyId !== t || i.candidate.key.featureId !== r || (this.staged.delete(n), wr(i.shape));
        }
        liveMatching(t) {
            const r = this.slots.get(Qr(t.bodyId, t.featureId));
            return r?.live && CI(r.live.key, ts(t)) ? r.live : null;
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
            const r = Qr(t.key.bodyId, t.key.featureId), n = this.slots.get(r);
            n && (n.retiring = n.retiring.filter((i)=>i !== t), !n.live && n.retiring.length === 0 && this.slots.delete(r));
        }
    }
    class DI {
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
            this.shape = null, wr(t);
        }
    }
    function Qa(e) {
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
    function Qr(e, t) {
        return `${e}\0${t}`;
    }
    function ts(e) {
        return Object.freeze({
            bodyId: Ut(e.bodyId, "bodyId"),
            featureId: Ut(e.featureId, "featureId"),
            committedRevision: bl(e.committedRevision, "committedRevision"),
            prefixFingerprint: Ut(e.prefixFingerprint, "prefixFingerprint"),
            replayProtocolVersion: TI(e.replayProtocolVersion, "replayProtocolVersion"),
            runtimeIdentity: Object.freeze({
                occRuntimeId: Ut(e.runtimeIdentity?.occRuntimeId, "runtimeIdentity.occRuntimeId"),
                wasmBuildId: Ut(e.runtimeIdentity?.wasmBuildId, "runtimeIdentity.wasmBuildId")
            })
        });
    }
    function Ut(e, t) {
        if (typeof e != "string" || e.trim().length === 0) throw new Error(`OccShapeCache.${t} must not be empty`);
        return e;
    }
    function bl(e, t) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error(`OccShapeCache.${t} must be a non-negative safe integer`);
        return e;
    }
    function TI(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0) throw new Error(`OccShapeCache.${t} must be a positive safe integer`);
        return e;
    }
    function wr(e) {
        const t = e;
        try {
            t.delete?.();
        } catch  {}
    }
    const xr = new Hc, rs = new RI, pt = new $I, rr = new Map, na = new Set, On = new Map;
    let ed = 1;
    function BI(e) {
        const t = Object.freeze({
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            generation: ed
        });
        if (ed += 1, !yn(e.bodyId, e.revision)) return t;
        const r = rr.get(e.bodyId);
        return (!r || e.revision >= r.revision) && rr.set(e.bodyId, t), t;
    }
    function yn(e, t) {
        const r = On.get(e);
        return r === void 0 || t >= r;
    }
    function jI(e, t) {
        if (!Number.isSafeInteger(t) || t < 0) return;
        const r = On.get(e) ?? -1;
        t > r && On.set(e, t);
    }
    function zI(e) {
        return On.get(e) ?? null;
    }
    function Nt(e) {
        if (na.has(e.requestId) || !yn(e.bodyId, e.revision)) return !1;
        const t = rr.get(e.bodyId);
        return !!t && t.generation === e.generation && t.requestId === e.requestId;
    }
    function NI(e) {
        na.delete(e.requestId);
        const t = rr.get(e.bodyId);
        t?.generation === e.generation && t.requestId === e.requestId && rr.delete(e.bodyId);
    }
    wl = function(e) {
        if (!e.trim()) return;
        const t = rr.get(e);
        t && (na.add(t.requestId), rr.delete(e)), On.delete(e), xr.clearBody(e), rs.clearBody(e), pt.clearBody(e);
    };
    class VI {
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
            this.checkpoints.push(Go(t)), r ? this.prefixFeatureIds.add(t.featureId) : this.dropPrefixIds.add(t.featureId);
        }
        stageFailed(t) {
            this.checkpoints.push(Go({
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
    function Qn(e) {
        return MI({
            bodyId: e.bodyId,
            featureId: e.featureId,
            committedRevision: e.committedRevision,
            prefixFingerprint: tr({
                input: e.inputFingerprint,
                dependencies: e.dependencyFingerprint
            }),
            replayProtocolVersion: e.replayProtocolVersion,
            runtimeIdentity: e.runtimeIdentity
        });
    }
    function nt(e) {
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
    function Ct(e, t) {
        return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ];
    }
    function Ot(e, t) {
        return [
            (e[0] + t[0]) / 2,
            (e[1] + t[1]) / 2,
            (e[2] + t[2]) / 2
        ];
    }
    function KI(e, t) {
        const r = e[0] - t[0], n = e[1] - t[1], i = e[2] - t[2];
        return r * r + n * n + i * i;
    }
    function gt(e, t) {
        return Math.sqrt(KI(e, t));
    }
    function gn(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Or(e, t) {
        return `${e}::face::${t}`;
    }
    function Mi(e, t) {
        return `${e}::edge::${t}`;
    }
    function xo(e, t, r, n) {
        const i = nt(r), o = [
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], s = Math.cos(n), a = Math.sin(n), d = gn(i, o), c = Ct(i, o);
        return [
            t[0] + o[0] * s + c[0] * a + i[0] * d * (1 - s),
            t[1] + o[1] * s + c[1] * a + i[1] * d * (1 - s),
            t[2] + o[2] * s + c[2] * a + i[2] * d * (1 - s)
        ];
    }
    function xl(e) {
        const t = e.positions;
        if (!t || t.length < 3) return 1;
        let r = 1 / 0, n = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0, a = -1 / 0;
        for(let c = 0; c < t.length; c += 3)r = Math.min(r, t[c]), n = Math.min(n, t[c + 1]), i = Math.min(i, t[c + 2]), o = Math.max(o, t[c]), s = Math.max(s, t[c + 1]), a = Math.max(a, t[c + 2]);
        const d = Math.hypot(o - r, s - n, a - i);
        return Math.max(d, .001);
    }
    function LI(e, t, r) {
        const n = e.indices, i = e.positions, o = e.normals;
        if (!n || t.indexCount < 3) return null;
        let s = 0, a = 0, d = 0, c = 0, l = 0, f = 0, u = 0, h = null, m = null, I = !0;
        const w = Math.floor(t.indexCount / 3);
        for(let A = 0; A < w; A++){
            const D = t.firstIndex + A * 3, V = n[D], X = n[D + 1], k = n[D + 2], T = [
                i[V * 3],
                i[V * 3 + 1],
                i[V * 3 + 2]
            ], C = [
                i[X * 3],
                i[X * 3 + 1],
                i[X * 3 + 2]
            ], q = [
                i[k * 3],
                i[k * 3 + 1],
                i[k * 3 + 2]
            ], p = [
                C[0] - T[0],
                C[1] - T[1],
                C[2] - T[2]
            ], E = [
                q[0] - T[0],
                q[1] - T[1],
                q[2] - T[2]
            ], O = Ct(p, E), M = .5 * Math.hypot(O[0], O[1], O[2]);
            if (M < 1e-18) continue;
            const P = nt(O);
            h ? (!m || gn(m, P) < .99999 || Math.abs(gn(m, [
                T[0] - h[0],
                T[1] - h[1],
                T[2] - h[2]
            ])) > 1e-6) && (I = !1) : (h = T, m = P), u += M, s += (T[0] + C[0] + q[0]) / 3 * M, a += (T[1] + C[1] + q[1]) / 3 * M, d += (T[2] + C[2] + q[2]) / 3 * M, o && o.length >= (V + 1) * 3 ? (c += o[V * 3] * M, l += o[V * 3 + 1] * M, f += o[V * 3 + 2] * M) : (c += O[0], l += O[1], f += O[2]);
        }
        if (u < 1e-18) return null;
        const y = [
            s / u,
            a / u,
            d / u
        ], x = nt([
            c,
            l,
            f
        ]);
        let b = 0, g = 0;
        for(let A = 0; A < t.indexCount; A += 1){
            const D = n[t.firstIndex + A], V = [
                i[D * 3] - y[0],
                i[D * 3 + 1] - y[1],
                i[D * 3 + 2] - y[2]
            ];
            b = Math.max(b, Math.hypot(...V)), g = Math.max(g, Math.abs(gn(x, V)));
        }
        I = g <= Math.max(1e-6, b * 1e-5);
        const S = Math.abs(x[2]) < .9 ? [
            0,
            0,
            1
        ] : [
            1,
            0,
            0
        ], F = nt(Ct(S, x)), R = nt(Ct(x, F));
        return {
            subMeshIndex: r,
            centroid: y,
            normal: x,
            area: u,
            ...I ? {
                plane: {
                    origin: y,
                    normal: x,
                    uAxis: F,
                    vAxis: R
                }
            } : {}
        };
    }
    function Bn(e) {
        const t = [];
        for(let r = 0; r < (e.subMeshes?.length ?? 0); r++){
            const n = LI(e, e.subMeshes[r], r);
            n && t.push(n);
        }
        return t;
    }
    function ns(e, t, r) {
        const n = gn(e.normal, t.expectedNormal);
        return n < .55 ? 1 / 0 : gt(e.centroid, t.expectedCentroid) / r + (1 - n) * .35;
    }
    function HI(e, t, r) {
        const n = gt(e.start, t.start) + gt(e.end, t.end), i = gt(e.start, t.end) + gt(e.end, t.start), o = Math.min(n, i) / (2 * r), s = gt(e.midpoint, t.midpoint) / r, a = gt(t.start, t.end), d = Math.abs(e.length - a) / Math.max(r, a, 1e-6);
        return o * .45 + s * .45 + d * .1;
    }
    function Sl(e, t, r, n, i = .08, o) {
        const s = new Set(r.map((u)=>u.id)), a = new Map;
        for (const u of r)a.set(`${u.provenance.featureId}::${u.provenance.role}`, u.id);
        const d = new Set, c = new Set, l = [];
        for (const u of e){
            const h = `${u.featureId}::${u.role}`;
            if (c.has(h)) continue;
            let m = null, I = 1 / 0;
            for (const y of t){
                if (d.has(y.ordinal)) continue;
                const x = HI(y, u, n);
                x < I && (m = y, I = x);
            }
            if (!m || I > i) continue;
            c.add(h), d.add(m.ordinal);
            const w = u.faceIds ? [
                s.has(u.faceIds[0]) ? u.faceIds[0] : "",
                s.has(u.faceIds[1]) ? u.faceIds[1] : ""
            ] : [
                u.faceRoles?.[0] ? a.get(`${u.featureId}::${u.faceRoles[0]}`) ?? "" : "",
                u.faceRoles?.[1] ? a.get(`${u.featureId}::${u.faceRoles[1]}`) ?? "" : ""
            ];
            l.push({
                id: Mi(u.featureId, u.role),
                provenance: {
                    featureId: u.featureId,
                    role: u.role
                },
                faceIds: w,
                startVertex: m.start,
                endVertex: m.end,
                midpoint: m.midpoint,
                occEdgeOrdinal: m.ordinal
            });
        }
        const f = o ?? e.find((u)=>u.featureId)?.featureId ?? "tip";
        for (const u of t){
            if (d.has(u.ordinal)) continue;
            const h = `occ_edge_${u.ordinal}`;
            l.push({
                id: Mi(f, h),
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
        return l;
    }
    function ia(e, t, r, n) {
        const i = Bn(r), o = xl(r), s = n?.maxMatchDistanceFraction ?? .08, a = new Set, d = [], c = [
            ...e
        ];
        for(; c.length > 0;){
            let f = -1, u = null, h = 1 / 0;
            for(let w = 0; w < c.length; w++){
                const y = c[w];
                for (const x of i){
                    if (a.has(x.subMeshIndex)) continue;
                    const b = ns(x, y, o);
                    b < h && (h = b, f = w, u = x);
                }
            }
            if (f < 0 || !u || h > s + .35) break;
            const m = c.splice(f, 1)[0];
            a.add(u.subMeshIndex);
            const I = Or(m.featureId, m.role);
            d.push({
                id: I,
                provenance: {
                    featureId: m.featureId,
                    role: m.role,
                    ...m.parentFaceIds ? {
                        parentFaceIds: [
                            ...m.parentFaceIds
                        ]
                    } : {}
                },
                subMeshIndex: u.subMeshIndex,
                normal: u.normal,
                centroid: u.centroid,
                area: u.area
            });
        }
        const l = n?.edgeSamples ? Sl(t, n.edgeSamples, d, o, .08, t[0]?.featureId) : [];
        return {
            faces: d,
            edges: l
        };
    }
    function Ci(e, t, r, n = 0) {
        const { origin: i, normal: o, uAxis: s, vAxis: a } = e, d = Vr(e), c = ys(e), l = [
            d,
            ...c
        ], f = nt(o), u = (y, x, b)=>[
                i[0] + s[0] * y + a[0] * x + f[0] * b,
                i[1] + s[1] * y + a[1] * x + f[1] * b,
                i[2] + s[2] * y + a[2] * x + f[2] * b
            ];
        let h = 0, m = 0;
        for (const y of d.points)h += y.x, m += y.y;
        h /= Math.max(1, d.points.length), m /= Math.max(1, d.points.length);
        const I = [
            {
                role: "bottom",
                featureId: r,
                expectedCentroid: u(h, m, n),
                expectedNormal: [
                    -f[0],
                    -f[1],
                    -f[2]
                ]
            },
            {
                role: "top",
                featureId: r,
                expectedCentroid: u(h, m, n + t),
                expectedNormal: [
                    ...f
                ]
            }
        ], w = [];
        for(let y = 0; y < l.length; y++){
            const b = l[y].points, g = y === 0, S = y - 1;
            for(let F = 0; F < b.length; F++){
                const R = (F + 1) % b.length, A = u(b[F].x, b[F].y, n), D = u(b[R].x, b[R].y, n), V = u(b[F].x, b[F].y, n + t), X = u(b[R].x, b[R].y, n + t), k = [
                    D[0] - A[0],
                    D[1] - A[1],
                    D[2] - A[2]
                ];
                let T = nt(Ct(k, f));
                g || (T = [
                    -T[0],
                    -T[1],
                    -T[2]
                ]);
                const C = g ? `side_${F}` : `hole_${S}_side_${F}`;
                I.push({
                    role: C,
                    featureId: r,
                    expectedCentroid: Ot(Ot(A, D), Ot(V, X)),
                    expectedNormal: T
                });
                const q = g ? `edge_bottom_${F}` : `edge_hole_${S}_bottom_${F}`, p = g ? `edge_top_${F}` : `edge_hole_${S}_top_${F}`, E = g ? `edge_vertical_${F}` : `edge_hole_${S}_vertical_${F}`;
                w.push({
                    role: q,
                    featureId: r,
                    midpoint: Ot(A, D),
                    start: A,
                    end: D,
                    faceRoles: [
                        "bottom",
                        C
                    ]
                }, {
                    role: p,
                    featureId: r,
                    midpoint: Ot(V, X),
                    start: V,
                    end: X,
                    faceRoles: [
                        "top",
                        C
                    ]
                }, {
                    role: E,
                    featureId: r,
                    midpoint: Ot(A, V),
                    start: A,
                    end: V,
                    faceRoles: [
                        C,
                        ""
                    ]
                });
            }
        }
        return {
            faces: I,
            edges: w
        };
    }
    function kl(e, t, r, n, i, o = 0) {
        const s = Ci(e, t, r, o);
        return n ? ia(s.faces, s.edges, n, {
            edgeSamples: i
        }) : {
            faces: s.faces.map((a)=>({
                    id: Or(a.featureId, a.role),
                    provenance: {
                        featureId: a.featureId,
                        role: a.role
                    },
                    subMeshIndex: -1,
                    normal: a.expectedNormal,
                    centroid: a.expectedCentroid
                })),
            edges: s.edges.map((a)=>({
                    id: Mi(a.featureId, a.role),
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
    function $i(e, t, r, n) {
        const { origin: i, uAxis: o, vAxis: s } = e, a = Vr(e), d = nt(n.direction), c = [], l = [], f = Math.abs(Math.abs(t) - Math.PI * 2) < 1e-6, u = t * .5, h = (m, I)=>[
                i[0] + o[0] * m + s[0] * I,
                i[1] + o[1] * m + s[1] * I,
                i[2] + o[2] * m + s[2] * I
            ];
        for(let m = 0; m < a.points.length; m++){
            const I = (m + 1) % a.points.length, w = h(a.points[m].x, a.points[m].y), y = h(a.points[I].x, a.points[I].y), x = xo(w, n.origin, d, u), b = xo(y, n.origin, d, u), g = Ot(x, b), S = [
                g[0] - n.origin[0],
                g[1] - n.origin[1],
                g[2] - n.origin[2]
            ], F = nt(Ct(d, Ct(S, d))), R = `profile_side_${m}`;
            c.push({
                role: R,
                featureId: r,
                expectedCentroid: g,
                expectedNormal: F
            }), l.push({
                role: `profile_edge_${m}`,
                featureId: r,
                midpoint: Ot(w, y),
                start: w,
                end: y,
                faceRoles: [
                    R,
                    ""
                ]
            });
        }
        if (!f) {
            let m = 0, I = 0;
            for (const b of a.points)m += b.x, I += b.y;
            m /= a.points.length, I /= a.points.length;
            const w = h(m, I), y = xo(w, n.origin, d, t), x = nt(Ct(d, o));
            c.push({
                role: "start_cap",
                featureId: r,
                expectedCentroid: w,
                expectedNormal: x
            }), c.push({
                role: "end_cap",
                featureId: r,
                expectedCentroid: y,
                expectedNormal: [
                    -x[0],
                    -x[1],
                    -x[2]
                ]
            });
        }
        return {
            faces: c,
            edges: l
        };
    }
    function ci(e, t, r, n, i, o) {
        const a = $i(e, t, r, n ?? {
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
        return i ? ia(a.faces, a.edges, i, {
            edgeSamples: o
        }) : {
            faces: a.faces.map((d)=>({
                    id: Or(d.featureId, d.role),
                    provenance: {
                        featureId: d.featureId,
                        role: d.role
                    },
                    subMeshIndex: -1,
                    normal: d.expectedNormal,
                    centroid: d.expectedCentroid
                })),
            edges: a.edges.map((d)=>({
                    id: Mi(d.featureId, d.role),
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
    function he(e) {
        const { prior: t, resultMesh: r, generatingFeatureId: n, opKind: i, toolFaceHints: o = [], toolEdgeHints: s = [], resultEdgeSamples: a = [] } = e, d = Bn(r), c = xl(r), l = new Set, f = [], u = new Set, h = t.faces.filter((g)=>g.centroid && g.normal).map((g)=>({
                role: g.provenance.role,
                featureId: g.provenance.featureId,
                expectedCentroid: g.centroid,
                expectedNormal: g.normal,
                parentFaceIds: g.provenance.parentFaceIds
            }));
        for (const g of d){
            let S = null, F = 1 / 0;
            for (const R of h){
                const A = `${R.featureId}::${R.role}`;
                if (u.has(A)) continue;
                const D = ns(g, R, c);
                D < F && (F = D, S = R);
            }
            if (S && F <= .12) {
                u.add(`${S.featureId}::${S.role}`), l.add(g.subMeshIndex);
                const R = t.faces.find((A)=>A.provenance.featureId === S.featureId && A.provenance.role === S.role);
                f.push({
                    id: R?.id ?? Or(S.featureId, S.role),
                    provenance: {
                        featureId: S.featureId,
                        role: S.role,
                        ...S.parentFaceIds ? {
                            parentFaceIds: [
                                ...S.parentFaceIds
                            ]
                        } : {}
                    },
                    subMeshIndex: g.subMeshIndex,
                    normal: g.normal,
                    centroid: g.centroid,
                    area: g.area,
                    ...g.plane ? {
                        plane: g.plane
                    } : {}
                });
            }
        }
        const m = new Set;
        for (const g of d){
            if (l.has(g.subMeshIndex)) continue;
            let S = null, F = null, R = 1 / 0;
            for (const A of o){
                const D = `${A.featureId}::${A.role}`;
                if (m.has(D)) continue;
                const V = {
                    featureId: n,
                    role: A.role.startsWith(`${i}_`) ? A.role : `${i}_${A.role}`,
                    expectedCentroid: A.expectedCentroid,
                    expectedNormal: A.expectedNormal
                }, X = ns(g, V, c);
                X < R && (R = X, S = V, F = D);
            }
            if (S && F && R <= .14) {
                m.add(F), l.add(g.subMeshIndex);
                let A, D = 1 / 0;
                for (const V of t.faces){
                    if (!V.centroid) continue;
                    const X = gt(g.centroid, V.centroid) / c;
                    X < D && (D = X, A = [
                        V.id
                    ]);
                }
                D > .35 && (A = void 0), f.push({
                    id: Or(n, S.role),
                    provenance: {
                        featureId: n,
                        role: S.role,
                        ...A ? {
                            parentFaceIds: A
                        } : {}
                    },
                    subMeshIndex: g.subMeshIndex,
                    normal: g.normal,
                    centroid: g.centroid,
                    area: g.area,
                    ...g.plane ? {
                        plane: g.plane
                    } : {}
                });
            }
        }
        const I = `${i}_result_face`;
        for (const g of d){
            if (l.has(g.subMeshIndex)) continue;
            let S, F = 1 / 0;
            for (const R of t.faces){
                if (!R.centroid) continue;
                const A = gt(g.centroid, R.centroid) / c;
                A < F && (F = A, S = [
                    R.id
                ]);
            }
            F > .35 && (S = void 0), f.push({
                id: `${Or(n, I)}::${g.subMeshIndex}`,
                provenance: {
                    featureId: n,
                    role: I,
                    ...S ? {
                        parentFaceIds: S
                    } : {}
                },
                subMeshIndex: g.subMeshIndex,
                normal: g.normal,
                centroid: g.centroid,
                area: g.area,
                ...g.plane ? {
                    plane: g.plane
                } : {}
            });
        }
        const w = t.edges.filter((g)=>!!g.midpoint && !g.provenance.role.startsWith("occ_edge_")).map((g)=>({
                role: g.provenance.role,
                featureId: g.provenance.featureId,
                midpoint: g.midpoint,
                start: g.startVertex,
                end: g.endVertex,
                faceIds: g.faceIds
            })), y = s.map((g)=>({
                role: g.role.startsWith(`${i}_`) ? g.role : `${i}_${g.role}`,
                featureId: n,
                midpoint: g.midpoint,
                start: g.start,
                end: g.end,
                faceRoles: [
                    g.faceRoles[0] ? g.faceRoles[0].startsWith(`${i}_`) ? g.faceRoles[0] : `${i}_${g.faceRoles[0]}` : "",
                    g.faceRoles[1] ? g.faceRoles[1].startsWith(`${i}_`) ? g.faceRoles[1] : `${i}_${g.faceRoles[1]}` : ""
                ]
            })), x = Sl([
            ...w,
            ...y
        ], a, f, c, .08, n), b = r.subMeshes?.length ?? 0;
        for (const g of f)if (g.subMeshIndex < 0 || g.subMeshIndex >= b) throw new Error(`Semantic topology face ${g.provenance.role} has invalid subMeshIndex ${g.subMeshIndex}`);
        if (f.length > b) throw new Error("Semantic topology published more faces than tessellation submeshes");
        return {
            faces: f,
            edges: x
        };
    }
    function qI(e, t) {
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
    function ae(e, t) {
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
    function to(e, t) {
        if (t && t !== "auto") return t;
        const r = (e ?? "").toLowerCase();
        if (r.endsWith(".brep") || r.endsWith(".brp")) return "brep";
        if (r.endsWith(".step") || r.endsWith(".stp")) return "step";
        throw new Error('Cannot detect solid import format — pass format: "brep" | "step" or a fileName with extension');
    }
    function Fl(e) {
        return e instanceof Uint8Array ? new Uint8Array(e) : new Uint8Array(e.slice(0));
    }
    function UI(e) {
        const t = Object.keys(e).filter((r)=>/^(Handle_)?Message_Progress(Range|Indicator)/.test(r));
        for (const r of t.sort((n, i)=>n.length - i.length))try {
            return new e[r];
        } catch  {
            continue;
        }
        return Br(e, "Message_ProgressRange", []);
    }
    function Br(e, t, r = []) {
        const n = Object.keys(e).filter((o)=>o === t || o.startsWith(`${t}_`)).sort((o, s)=>+(s !== t) - +(o !== t));
        let i;
        for (const o of n)try {
            return new e[o](...r);
        } catch (s) {
            i = s;
        }
        throw i instanceof Error ? i : new Error(`OCC binding ${t} is unavailable`);
    }
    function vl(e, t, r) {
        const n = e.FS;
        if (!n || typeof n.writeFile != "function") throw new Error("opencascade.js virtual FS is unavailable");
        n.writeFile(t, r);
    }
    function WI(e, t, r) {
        const n = r.length >= 3 && r[0] === 239 && r[1] === 187 && r[2] === 191 ? 3 : 0;
        vl(e, t, n === 0 ? r : r.slice(n));
    }
    function _l(e, t) {
        try {
            e.FS?.unlink?.(t);
        } catch  {}
    }
    function El(e) {
        return e === "brep" ? "/cad_import.brep" : "/cad_import.step";
    }
    function ro(e, t) {
        if (e === "step") return "i.stp";
        const r = e === "brep" ? "import.brep" : "import.step", i = (t?.split(/[\\/]/).pop()?.trim() || r).replace(/[^A-Za-z0-9._-]+/g, "_"), o = i.length > 0 ? i : r;
        return /\.(brep|brp)$/i.test(o) ? o : `${o}.brep`;
    }
    function no(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (!e || typeof e != "object") return null;
        const t = e.value;
        if (typeof t == "number" && Number.isFinite(t)) return t;
        const r = e.valueOf?.();
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    }
    function Al(e) {
        const t = no(e);
        if (t != null) return String(t);
        if (typeof e == "string" && e.length > 0) return e;
        if (!e || typeof e != "object") return String(e);
        const r = Object.prototype.toString.call(e), n = e.constructor?.name;
        return n && n !== "Object" ? n : r;
    }
    function GI(e, t) {
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
    function Ol(e, t) {
        if (typeof e.ReadFile_1 == "function") return e.ReadFile_1(t);
        if (typeof e.ReadFile == "function") return e.ReadFile(t);
        throw new Error("opencascade.js: STEPControl_Reader.ReadFile is not available");
    }
    function YI(e) {
        const t = e.slice(0, Math.min(e.byteLength, 96));
        let r = "";
        for (const n of t)r += n >= 32 && n <= 126 ? String.fromCharCode(n) : ".";
        return r.trim();
    }
    function Pl(e, t) {
        if (typeof t.TransferRoots == "function") {
            t.TransferRoots();
            return;
        }
        if (typeof t.TransferRoots_1 == "function") {
            const r = Br(e, "Message_ProgressRange", []);
            try {
                t.TransferRoots_1(r);
            } finally{
                r.delete?.();
            }
            return;
        }
        throw new Error("opencascade.js: STEPControl_Reader.TransferRoots is not available");
    }
    function Rl(e) {
        const t = typeof e.OneShape == "function" ? e.OneShape() : e.OneShape_1?.();
        if (!t || typeof t.IsNull == "function" && t.IsNull()) throw new Error("STEP import produced an empty shape");
        return t;
    }
    function JI(e, t, r) {
        const n = Br(e, "STEPControl_Reader", []);
        try {
            const i = Ol(n, t);
            return no(i) !== r && i !== !0 ? {
                failure: `STEPControl_Reader status=${Al(i)}`
            } : (Pl(e, n), {
                shape: Rl(n)
            });
        } finally{
            n.delete?.();
        }
    }
    function ZI(e, t, r) {
        let n;
        try {
            n = Br(e, "STEPCAFControl_Reader", []);
        } catch (i) {
            return {
                failure: i instanceof Error ? `STEPCAFControl_Reader unavailable: ${i.message}` : "STEPCAFControl_Reader unavailable"
            };
        }
        try {
            const i = Ol(n, t);
            if (no(i) !== r && i !== !0) return {
                failure: `STEPCAFControl_Reader status=${Al(i)}`
            };
            const s = typeof n.Reader == "function" ? n.Reader() : null;
            if (!s) return {
                failure: "STEPCAFControl_Reader.Reader is not available"
            };
            try {
                return Pl(e, s), {
                    shape: Rl(s)
                };
            } finally{
                s.delete?.();
            }
        } finally{
            n.delete?.();
        }
    }
    function XI(e) {
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
    function Lt(e) {
        return [
            e[0],
            e[1],
            e[2]
        ];
    }
    function QI(e, t) {
        return Bn(e).map((r)=>{
            const n = `import_face_${r.subMeshIndex}`;
            return {
                id: `${t}::face::${n}`,
                provenance: {
                    featureId: t,
                    role: n
                },
                subMeshIndex: r.subMeshIndex,
                centroid: Lt(r.centroid),
                normal: Lt(r.normal),
                area: r.area,
                ...r.plane ? {
                    plane: {
                        origin: Lt(r.plane.origin),
                        normal: Lt(r.plane.normal),
                        uAxis: Lt(r.plane.uAxis),
                        vAxis: Lt(r.plane.vAxis)
                    }
                } : {}
            };
        });
    }
    function eb(e, t, r) {
        const n = ie(e, t), i = new Map(n.map((o)=>[
                o.ordinal,
                o
            ]));
        return pn(r, [], n).map((o)=>{
            const s = typeof o.occEdgeOrdinal == "number" ? i.get(o.occEdgeOrdinal) : void 0;
            if (!s?.sampledPoints || s.sampledPoints.length < 2) return o;
            const a = s.sampledPoints[0], d = s.sampledPoints[s.sampledPoints.length - 1], c = Math.hypot(a[0] - d[0], a[1] - d[1], a[2] - d[2]) < 1e-6;
            return {
                ...o,
                polyline: s.sampledPoints.map(Lt),
                ...c ? {
                    closed: !0
                } : {}
            };
        });
    }
    function Di(e, t, r) {
        const i = (r.tessellate ?? dt)(e, t);
        return {
            id: `${r.featureId}:import-solid`,
            name: r.name ?? "Imported BREP",
            featureId: r.featureId,
            faces: QI(i, r.featureId),
            edges: eb(e, t, r.featureId),
            tessellation: i
        };
    }
    function io(e, t, r = El("brep")) {
        const n = Fl(t);
        vl(e, r, n);
        try {
            const i = Br(e, "TopoDS_Shape", []), o = Br(e, "BRep_Builder", []), s = UI(e);
            try {
                if (typeof e.BRepTools?.Read_2 == "function") e.BRepTools.Read_2(i, r, o, s);
                else if (typeof e.BRepTools?.Read == "function") e.BRepTools.Read(i, r, o, s);
                else throw new Error("opencascade.js: BRepTools.Read is not available");
                if (typeof i.IsNull == "function" && i.IsNull()) throw new Error("BREP import produced an empty shape");
                return Tr(e, i);
            } finally{
                s.delete?.(), o.delete?.();
            }
        } finally{
            _l(e, r);
        }
    }
    function oo(e, t, r = El("step")) {
        const n = Fl(t), i = no(e.IFSelect_ReturnStatus?.IFSelect_RetDone) ?? 1, o = [];
        for (const s of GI(r, "i.stp")){
            WI(e, s, n);
            try {
                const a = JI(e, s, i);
                if ("shape" in a) return Tr(e, a.shape);
                const d = ZI(e, s, i);
                if ("shape" in d) return Tr(e, d.shape);
                o.push(`${s}: ${a.failure}; ${d.failure}`);
            } finally{
                _l(e, s);
            }
        }
        throw new Error(`STEP ReadFile failed (${o.join("; ")}, bytes=${n.byteLength}, header="${YI(n)}")`);
    }
    function Ml(e, t, r = {}) {
        const n = to(r.fileName, r.format), i = ro(n, r.fileName), o = n === "brep" ? io(e, t, i) : oo(e, t, i);
        try {
            const s = dt(e, o, {
                preserveSourceOrientation: n === "step"
            });
            return {
                format: n,
                mesh: XI(s),
                ...r.fileName ? {
                    fileName: r.fileName
                } : {}
            };
        } finally{
            o.delete?.();
        }
    }
    function tb(e, t, r) {
        const n = to(r.fileName, r.format), i = ro(n, r.fileName), o = n === "brep" ? io(e, t, i) : oo(e, t, i);
        try {
            return Di(e, o, {
                featureId: r.featureId,
                name: r.name ?? r.fileName
            });
        } finally{
            o.delete?.();
        }
    }
    async function rb(e, t = {}) {
        const r = await $t();
        return Ml(r, e, t);
    }
    class nb {
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
    function ib(e) {
        const t = $s(e, 64).points;
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
    const Ti = new Map;
    function ob(e) {
        const t = Ti.get(e);
        if (t) {
            Ti.delete(e);
            try {
                t.shape?.delete?.();
            } catch  {}
        }
    }
    const sb = new Set([
        "sketch",
        "datum_plane",
        "datum_axis",
        "shape_binder",
        "helix"
    ]);
    function ab(e, t, r) {
        if (t === r) return !1;
        const n = new Set, i = (o, s, a)=>{
            if (o === t) return s && a;
            if (n.has(o)) return !1;
            n.add(o);
            const d = e.get(o), c = s || d?.type === "split", l = a || d?.type === "draft";
            return (d?.dependencyIds ?? []).some((f)=>i(f, c, l));
        };
        return i(r, !1, !1);
    }
    function td(e, t) {
        return e instanceof Error && e.message ? `${t}: ${e.message}` : typeof e == "number" || typeof e == "string" || typeof e == "bigint" ? `${t}: WASM/OCC exception ${String(e)}` : `${t}: unknown OCC/WASM exception`;
    }
    function mr(e, t) {
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
    function So(e, t) {
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
    function db(e) {
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
    function rd(e, t, r) {
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
    function nd(e, t, r, n, i) {
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
    function li(e, t) {
        return {
            ok: !1,
            protocolVersion: Ce,
            requestId: e.requestId,
            bodyId: e.bodyId,
            revision: e.revision,
            error: t
        };
    }
    function ko(e, t) {
        return {
            response: li(e, {
                code: "cancelled",
                message: "Body replay cancelled or superseded",
                recoverable: !0,
                phase: "execute"
            }),
            transfers: [],
            performanceEvents: on(t, "cancelled")
        };
    }
    function cb(e) {
        return new Map(e.map((t)=>[
                t.id,
                t
            ]));
    }
    function Pr(e, t) {
        if (e.attachmentMode === "offset_base") return qp(e.basePlane, e.offset, e.width, e.height);
        if (e.attachmentMode === "three_point" && e.threePoints) {
            const r = Up(e.threePoints[0], e.threePoints[1], e.threePoints[2]);
            return r ? {
                ...r,
                width: e.width,
                height: e.height
            } : null;
        }
        if (e.attachmentMode === "on_datum" && e.baseDatumId && t) {
            const r = t.get(e.baseDatumId);
            if (!r || r.type !== "datum_plane") return null;
            const n = Pr(r, t);
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
                return Ch(r, e.pathParameter, e.width, e.height);
            } catch  {
                return null;
            }
        }
        return null;
    }
    function is(e, t) {
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
                const F = [
                    a.end[0] - a.start[0],
                    a.end[1] - a.start[1],
                    a.end[2] - a.start[2]
                ], R = Math.hypot(...F);
                if (R < 1e-12) throw new Error("Datum Axis two-point direction is degenerate");
                return {
                    origin: [
                        ...a.start
                    ],
                    direction: F.map((A)=>A / R)
                };
            }
            const d = t.get(a.firstDatumId), c = t.get(a.secondDatumId);
            if (!d || d.type !== "datum_plane" || !c || c.type !== "datum_plane") throw new Error("Datum Axis intersection requires two Datum Planes");
            const l = Pr(d, t), f = Pr(c, t);
            if (!l || !f) throw new Error("Datum Axis intersection Datum Plane is unresolved");
            const u = (F, R)=>[
                    F[1] * R[2] - F[2] * R[1],
                    F[2] * R[0] - F[0] * R[2],
                    F[0] * R[1] - F[1] * R[0]
                ], h = (F, R)=>F[0] * R[0] + F[1] * R[1] + F[2] * R[2], m = u(l.normal, f.normal), I = h(m, m);
            if (I < 1e-12) throw new Error("Datum Axis intersection planes are parallel");
            const w = h(l.normal, l.origin), y = h(f.normal, f.origin), x = u(f.normal, m), b = u(m, l.normal), g = [
                (w * x[0] + y * b[0]) / I,
                (w * x[1] + y * b[1]) / I,
                (w * x[2] + y * b[2]) / I
            ], S = Math.sqrt(I);
            return {
                origin: g,
                direction: m.map((F)=>F / S)
            };
        }
        const r = t.get(e.axisRef.featureId);
        if (!r || r.type !== "datum_plane") throw new Error(`Datum plane ${e.axisRef.featureId} is not in Body snapshot`);
        const n = Pr(r, t);
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
    function lb(e, t) {
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
        const n = Pr(r, t);
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
    function Jt(e, t) {
        const r = Math.hypot(...e);
        if (r <= 1e-9) throw new Error(`${t} is degenerate`);
        return e.map((n)=>n / r);
    }
    function Cl(e, t) {
        return Math.hypot(e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]) <= 1e-7;
    }
    function ub(e, t) {
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
    function fb(e, t) {
        if (t.hintNormal) {
            const n = e.normal ?? e.plane?.normal;
            if (!n) return !1;
            const i = Math.hypot(...t.hintNormal), o = Math.hypot(...n);
            if (i <= 1e-9 || o <= 1e-9 || (t.hintNormal[0] * n[0] + t.hintNormal[1] * n[1] + t.hintNormal[2] * n[2]) / (i * o) < 1 - 1e-4) return !1;
        }
        const r = t.hintPlaneOrigin ?? t.hintCentroid;
        return r ? e.plane ? Math.abs((r[0] - e.plane.origin[0]) * e.plane.normal[0] + (r[1] - e.plane.origin[1]) * e.plane.normal[1] + (r[2] - e.plane.origin[2]) * e.plane.normal[2]) <= .001 : e.centroid ? Math.hypot(e.centroid[0] - r[0], e.centroid[1] - r[1], e.centroid[2] - r[2]) <= .001 : !1 : !0;
    }
    function Pn(e, t) {
        const r = e.topology.faces.find((n)=>n.provenance.featureId === t.featureId && n.provenance.role === t.role);
        if (r && fb(r, t)) return r;
        if (t.featureId.startsWith("ug:feature:")) {
            const n = ub(e, t);
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
    function pb(e, t, r) {
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
    function $l(e, t) {
        const r = e, n = new r.TopExp_Explorer_2(t, r.TopAbs_ShapeEnum.TopAbs_EDGE, r.TopAbs_ShapeEnum.TopAbs_SHAPE), i = [];
        try {
            for(; n.More();)i.push(r.TopoDS.Edge_1(n.Current())), n.Next();
        } finally{
            n.delete?.();
        }
        return i;
    }
    function Dl(e, t) {
        const r = e?.IsSame;
        return typeof r == "function" && r.call(e, t) === !0;
    }
    function hb(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE), o = [];
        try {
            for(; i.More();){
                const s = n.TopoDS.Face_1(i.Current());
                $l(e, s).some((a)=>Dl(a, r)) && o.push(s), i.Next();
            }
        } finally{
            i.delete?.();
        }
        return o;
    }
    function mb(e, t) {
        return e.topology.faces.find((r)=>r.subMeshIndex === t) ?? e.topology.faces.find((r)=>r.subMeshIndex === t - 1) ?? null;
    }
    function yb(e, t, r) {
        const n = e, i = new n.TopExp_Explorer_2(t, n.TopAbs_ShapeEnum.TopAbs_FACE, n.TopAbs_ShapeEnum.TopAbs_SHAPE);
        let o = 0;
        try {
            for(; i.More();){
                const s = n.TopoDS.Face_1(i.Current());
                if (Dl(s, r)) return o;
                o++, i.Next();
            }
        } finally{
            i.delete?.();
        }
        return -1;
    }
    function id(e, t, r) {
        if (e.id === t.id) return !1;
        const n = e.normal ?? e.plane?.normal;
        return !n || !e.plane ? !1 : !Cl(n, r);
    }
    function gb(e, t, r) {
        if (!e.centroid || !t.plane) return !0;
        const n = (e.centroid[0] - t.plane.origin[0]) * r[0] + (e.centroid[1] - t.plane.origin[1]) * r[1] + (e.centroid[2] - t.plane.origin[2]) * r[2];
        return n < .001 && n > -6;
    }
    function Ib(e, t, r, n, i) {
        const o = Pn(t, r), s = pb(e, t.shape, o.subMeshIndex), a = [];
        if (s) {
            const c = new Set([
                o.id
            ]);
            for (const l of $l(e, s))for (const f of hb(e, t.shape, l)){
                const u = mb(t, yb(e, t.shape, f));
                !u || c.has(u.id) || !id(u, o, n) || (c.add(u.id), a.push(u));
            }
        }
        if (a.length > 0) {
            if (!o.plane || !o.plane.normal) return {
                source: o,
                moving: a
            };
            const c = a.map((u)=>{
                const h = u.centroid ?? o.plane.origin, m = Math.abs((h[0] - o.plane.origin[0]) * i[0] + (h[1] - o.plane.origin[1]) * i[1] + (h[2] - o.plane.origin[2]) * i[2]);
                return {
                    face: u,
                    along: m
                };
            }).sort((u, h)=>u.along - h.along), l = c[0].along, f = c.filter((u)=>u.along <= Math.max(l * 2 + 1, 3));
            return {
                source: o,
                moving: f.map((u)=>u.face)
            };
        }
        const d = t.topology.faces.filter((c)=>id(c, o, n) && gb(c, o, i));
        if (d.length === 0) throw Object.assign(new Error(`UG Draft face ${r.featureId}:${r.role} has no non-parallel adjacent face`), {
            code: "topology-reference-lost"
        });
        return {
            source: o,
            moving: d
        };
    }
    function bb(e, t, r) {
        return Pn(t, r);
    }
    function Tl(e, t) {
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
    function Bi(e, t, r) {
        if (e.kind === "world_plane") return {
            origin: [
                ...e.origin
            ],
            normal: Jt([
                ...e.normal
            ], "Draft plane normal")
        };
        if (e.kind === "datum_plane") {
            const i = r.get(e.featureId);
            if (!i || i.type !== "datum_plane") throw new Error(`Draft Datum Plane ${e.featureId} is missing`);
            const o = Pr(i, r);
            if (!o) throw new Error(`Draft Datum Plane ${e.featureId} is unresolved`);
            return {
                origin: [
                    ...o.origin
                ],
                normal: Jt([
                    ...o.normal
                ], "Draft Datum Plane normal")
            };
        }
        const n = Pn(t, e.selector);
        if (!n.plane) throw new Error(`Draft hinge face ${e.selector.featureId}:${e.selector.role} is not planar`);
        return {
            origin: [
                ...n.plane.origin
            ],
            normal: Jt([
                ...n.plane.normal
            ], "Draft hinge face normal")
        };
    }
    function wb(e, t, r) {
        const n = e.direction;
        let i;
        if (n.kind === "world") i = [
            ...n.direction
        ];
        else if (n.kind === "datum_axis") i = is({
            id: e.id,
            name: e.name,
            axisRef: {
                kind: "datum_axis",
                featureId: n.featureId
            }
        }, r).direction;
        else if (n.kind === "plane_normal") i = Bi(n.plane, t, r).normal;
        else {
            const o = Tl(t, n.selector);
            i = [
                o.endVertex[0] - o.startVertex[0],
                o.endVertex[1] - o.startVertex[1],
                o.endVertex[2] - o.startVertex[2]
            ];
        }
        return i = Jt(i, "Draft pull direction"), e.reverseDirection ? i.map((o)=>-o) : i;
    }
    function od(e, t, r, n) {
        if (e.kind !== "edge_chain") return Bi(e, r, n);
        const i = Tl(r, e.selectors[0]), o = Jt([
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
            normal: Jt(s, "Draft edge-hinge plane")
        };
    }
    function xb(e, t) {
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
        const o = n[i - 1], s = n[i], a = s.location - o.location, d = a <= 1e-9 ? 0 : (t - o.location) / a, c = o.reversed ? -o.angle : o.angle, l = s.reversed ? -s.angle : s.angle;
        return c + (l - c) * d;
    }
    function Sb(e, t, r, n, i) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>qe(e)
        };
    }
    function kb(e, t, r, n) {
        return {
            shape: e.shape,
            generatingFeatureId: t,
            opKind: "revolve",
            topology: r,
            tipMesh: n,
            dispose: ()=>Dr(e)
        };
    }
    function Be(e, t, r, n, i) {
        return {
            shape: e.Shape(),
            generatingFeatureId: t,
            opKind: r,
            topology: n,
            tipMesh: i,
            dispose: ()=>e.delete?.()
        };
    }
    function ui(e, t) {
        return {
            faces: Bn(e).map((r)=>({
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
    function Fb(e, t, r, n, i) {
        return i?.priorTopology ? i.priorTopology : {
            faces: [],
            edges: []
        };
    }
    class vb {
        constructor(t = $t){
            this.loadOcc = t;
        }
        loadOcc;
        async execute(t) {
            const r = new sg(t), n = Zi(t);
            if (n) return {
                response: li(t, n),
                transfers: [],
                performanceEvents: on(r, "failed")
            };
            if (Date.now() > t.deadlineMs) return {
                response: li(t, {
                    code: "deadline-exceeded",
                    message: "Body replay deadline exceeded",
                    recoverable: !0,
                    phase: "deadline"
                }),
                transfers: [],
                performanceEvents: on(r, "failed")
            };
            const i = BI(t);
            try {
                if (!Nt(i)) return ko(t, r);
                const o = Date.now(), s = new Map, a = new nb, d = [];
                let c = null, l = null, f = !1;
                const u = t.presentationMode !== "none", h = t.presentationMode !== "mesh" && t.presentationMode !== "none", m = new VI(t.bodyId), I = [];
                try {
                    const w = performance.now(), y = await (async ()=>{
                        try {
                            return await this.loadOcc();
                        } finally{
                            r.recordOccLoad(performance.now() - w);
                        }
                    })();
                    if (!Nt(i)) return ko(t, r);
                    const x = (k, T, C)=>{
                        const q = performance.now(), p = dt(k, T, C);
                        return r.recordTessellation(p, performance.now() - q), p;
                    }, b = cb(t.snapshot.features);
                    let g = null;
                    const S = Uc({
                        snapshot: t.snapshot,
                        replayPlan: t.replayPlan,
                        checkpoints: xr.list(t.bodyId),
                        externalOperands: t.externalOperands,
                        replayProtocolVersion: t.protocolVersion
                    });
                    let F = S.earliestInvalidHistoryIndex ?? t.replayPlan.steps.length;
                    if (S.earliestInvalidHistoryIndex !== null) {
                        const k = t.replayPlan.steps.find((T)=>T.historyIndex === S.earliestInvalidHistoryIndex);
                        k && r.recordCacheInvalidation(k, b.get(k.featureId));
                    }
                    const R = (k)=>{
                        const T = xr.lookup(t.bodyId, k.featureId);
                        if (!T || T.status !== "ok") return !1;
                        const C = Yo({
                            snapshot: t.snapshot,
                            step: k,
                            feature: b.get(k.featureId),
                            externalOperands: t.externalOperands
                        });
                        if (T.historyIndex !== k.historyIndex || T.inputFingerprint !== C.inputFingerprint || T.dependencyFingerprint !== C.dependencyFingerprint) return !1;
                        if (k.status === "inactive") return d.push({
                            featureId: k.featureId,
                            status: "inactive"
                        }), !0;
                        if (k.status === "active" && sb.has(k.kind)) return d.push({
                            featureId: k.featureId,
                            status: "ok"
                        }), !0;
                        const q = Qn({
                            bodyId: T.bodyId,
                            featureId: T.featureId,
                            committedRevision: T.committedRevision,
                            inputFingerprint: T.inputFingerprint,
                            dependencyFingerprint: T.dependencyFingerprint,
                            replayProtocolVersion: T.replayProtocolVersion,
                            runtimeIdentity: T.runtimeIdentity
                        }), p = pt.acquire(q), E = pt.lookup(q);
                        if (!p || !E) return p?.release(), !1;
                        I.push(p), a.protect(p.shape);
                        const O = rs.lookup(t.bodyId, k.featureId), M = mr(y, p.shape);
                        let P = O?.tipMesh ? Za(O.tipMesh) : null;
                        u && !P && (r.setActiveFeatureId(k.featureId), P = x(y, M));
                        const _ = O ? Xa(O.topology) : {
                            faces: [],
                            edges: []
                        };
                        return s.set(k.featureId, {
                            shape: M,
                            generatingFeatureId: O?.generatingFeatureId ?? E.generatingFeatureId,
                            opKind: O?.opKind ?? E.opKind,
                            topology: {
                                faces: _.faces,
                                edges: pn(O?.generatingFeatureId ?? E.generatingFeatureId, _.edges, ie(y, M))
                            },
                            tipMesh: P,
                            dispose: ()=>{}
                        }), g = k.featureId, l = k.featureId, d.push({
                            featureId: k.featureId,
                            status: "ok"
                        }), !0;
                    }, A = (k)=>{
                        if (t.cacheResult === !1) return;
                        const T = [
                            ...d
                        ].reverse().find((p)=>p.featureId === k.featureId);
                        if (!T) return;
                        const C = Yo({
                            snapshot: t.snapshot,
                            step: k,
                            feature: b.get(k.featureId),
                            externalOperands: t.externalOperands
                        }), q = {
                            bodyId: t.bodyId,
                            committedRevision: t.revision,
                            featureId: k.featureId,
                            historyIndex: k.historyIndex,
                            inputFingerprint: C.inputFingerprint,
                            dependencyFingerprint: C.dependencyFingerprint,
                            replayProtocolVersion: t.protocolVersion ?? Ce,
                            runtimeIdentity: Tn
                        };
                        if (T.status === "ok" || T.status === "inactive") {
                            m.stageOk({
                                ...q,
                                status: "ok"
                            }, s.has(k.featureId));
                            return;
                        }
                        if (T.status === "failed") {
                            m.stageFailed({
                                ...q,
                                status: "failed"
                            });
                            return;
                        }
                        T.status === "skipped" && m.stageSkipped(k.featureId);
                    };
                    for (const k of t.externalOperands ?? []){
                        if (b.has(k.featureId) || s.has(k.featureId)) throw new Error(`External operand feature id ${k.featureId} collides with replay features`);
                        const T = zI(k.bodyId);
                        if (T === null || T !== k.committedRevision) throw new Error(`External Body Tip ${k.bodyId}:${k.featureId}@${k.committedRevision} is stale or not committed`);
                        const C = xr.lookup(k.bodyId, k.featureId);
                        if (!C || C.status !== "ok") throw new Error(`External Body Tip ${k.bodyId}:${k.featureId} has no committed checkpoint`);
                        const q = Qn({
                            bodyId: C.bodyId,
                            featureId: C.featureId,
                            committedRevision: C.committedRevision,
                            inputFingerprint: C.inputFingerprint,
                            dependencyFingerprint: C.dependencyFingerprint,
                            replayProtocolVersion: C.replayProtocolVersion,
                            runtimeIdentity: C.runtimeIdentity
                        }), p = pt.acquire(q);
                        if (!p) throw new Error(`External Body Tip ${k.bodyId}:${k.featureId} Shape is not cached`);
                        I.push(p), a.protect(p.shape);
                        const E = mr(y, p.shape);
                        r.setActiveFeatureId(k.featureId);
                        const O = x(y, E);
                        s.set(k.featureId, {
                            shape: E,
                            generatingFeatureId: k.featureId,
                            opKind: "boolean",
                            topology: ui(O, k.featureId),
                            tipMesh: O,
                            dispose: ()=>{}
                        });
                    }
                    for (const k of t.replayPlan.steps){
                        if (!Nt(i)) return ko(t, r);
                        const T = b.get(k.featureId), C = performance.now();
                        r.setActiveFeatureId(k.featureId);
                        let q = !1;
                        try {
                            if (k.historyIndex < F) {
                                if (R(k)) {
                                    q = !0, r.recordCacheHit(k, T);
                                    continue;
                                }
                                F = k.historyIndex;
                            }
                            if (k.status === "inactive") {
                                d.push({
                                    featureId: k.featureId,
                                    status: "inactive"
                                });
                                continue;
                            }
                            if (f && (k.kind === "extrude" || k.kind === "import" || k.kind === "revolve" || k.kind === "boolean" || k.kind === "fillet" || k.kind === "chamfer" || k.kind === "thickness" || k.kind === "mirror" || k.kind === "loft" || k.kind === "pipe" || k.kind === "face_pull" || k.kind === "draft")) {
                                d.push({
                                    featureId: k.featureId,
                                    status: "skipped"
                                });
                                continue;
                            }
                            const p = b.get(k.featureId);
                            if (!p) {
                                d.push({
                                    featureId: k.featureId,
                                    status: "failed",
                                    error: {
                                        code: "missing-feature-parameters",
                                        message: `Feature ${k.featureId} missing from snapshot`,
                                        featureId: k.featureId,
                                        recoverable: !1
                                    }
                                }), f = !0;
                                continue;
                            }
                            try {
                                if (k.kind === "import") {
                                    if (p.type !== "import") throw new Error(`Import replay step ${k.featureId} has mismatched feature type ${p.type}`);
                                    const E = p.sourceBytes;
                                    if (!(E instanceof Uint8Array) || E.byteLength === 0) throw new Error(`Import Feature ${p.id} has no BREP/STEP source bytes`);
                                    const O = to(p.sourceLabel, p.sourceFormat ?? "auto"), M = ro(O, p.sourceLabel);
                                    if (O === "brep") {
                                        const _ = io(y, E, M);
                                        try {
                                            if (!u) {
                                                s.set(p.id, {
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
                                                }), g = p.id, l = p.id, d.push({
                                                    featureId: p.id,
                                                    status: "ok"
                                                });
                                                continue;
                                            }
                                            if (!h) {
                                                s.set(p.id, {
                                                    shape: _,
                                                    generatingFeatureId: p.id,
                                                    opKind: "import",
                                                    topology: {
                                                        faces: [],
                                                        edges: []
                                                    },
                                                    tipMesh: x(y, _, {
                                                        correctFaceOrientation: !1
                                                    }),
                                                    dispose: ()=>{
                                                        _.delete?.();
                                                    }
                                                }), g = p.id, l = p.id, d.push({
                                                    featureId: p.id,
                                                    status: "ok"
                                                });
                                                continue;
                                            }
                                            const v = Di(y, _, {
                                                featureId: p.id,
                                                name: p.sourceLabel ?? p.name,
                                                tessellate: x
                                            });
                                            s.set(p.id, {
                                                shape: _,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: v.faces,
                                                    edges: v.edges
                                                },
                                                tipMesh: v.tessellation,
                                                dispose: ()=>{
                                                    _.delete?.();
                                                }
                                            }), g = p.id, l = p.id, d.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        } catch (v) {
                                            throw _.delete?.(), v;
                                        }
                                    }
                                    const P = oo(y, E, M);
                                    try {
                                        if (!u) {
                                            s.set(p.id, {
                                                shape: P,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: [],
                                                    edges: []
                                                },
                                                tipMesh: null,
                                                dispose: ()=>{
                                                    P.delete?.();
                                                }
                                            }), g = p.id, l = p.id, d.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        }
                                        if (!h) {
                                            s.set(p.id, {
                                                shape: P,
                                                generatingFeatureId: p.id,
                                                opKind: "import",
                                                topology: {
                                                    faces: [],
                                                    edges: []
                                                },
                                                tipMesh: x(y, P, {
                                                    correctFaceOrientation: !1
                                                }),
                                                dispose: ()=>{
                                                    P.delete?.();
                                                }
                                            }), g = p.id, l = p.id, d.push({
                                                featureId: p.id,
                                                status: "ok"
                                            });
                                            continue;
                                        }
                                        const _ = Di(y, P, {
                                            featureId: p.id,
                                            name: p.sourceLabel ?? p.name,
                                            tessellate: x
                                        });
                                        s.set(p.id, {
                                            shape: P,
                                            generatingFeatureId: p.id,
                                            opKind: "import",
                                            topology: {
                                                faces: _.faces,
                                                edges: _.edges
                                            },
                                            tipMesh: _.tessellation,
                                            dispose: ()=>{
                                                P.delete?.();
                                            }
                                        }), g = p.id, l = p.id, d.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (_) {
                                        throw P.delete?.(), _;
                                    }
                                }
                                if (k.kind === "sketch" || k.kind === "datum_plane" || k.kind === "datum_axis" || k.kind === "shape_binder") {
                                    d.push({
                                        featureId: k.featureId,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "draft") {
                                    const E = s.get(p.baseFeatureId);
                                    if (!E) throw Object.assign(new Error(`Draft base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const O = wb(p, E, b), M = p.draftFaces.some((ee)=>ee.featureId.startsWith("ug:feature:"));
                                    let P, _;
                                    if (M) {
                                        const oe = p.draftFaces.map((de)=>Pn(E, de)).find((de)=>de.plane)?.plane;
                                        _ = oe ? [
                                            {
                                                origin: [
                                                    ...oe.origin
                                                ],
                                                normal: Jt([
                                                    ...oe.normal
                                                ], "UG Draft stationary face")
                                            }
                                        ] : p.hinges.map((de)=>od(de, O, E, b));
                                        const we = _[0].normal, De = new Map;
                                        for (const de of p.draftFaces)for (const pe of Ib(y, E, de, we, O).moving)De.set(pe.id, pe);
                                        P = [
                                            ...De.values()
                                        ];
                                    } else P = p.draftFaces.map((ee)=>bb(y, E, ee)), _ = p.hinges.map((ee)=>od(ee, O, E, b));
                                    const v = p.split.kind === "reference" ? Bi(p.split.reference, E, b) : p.split.kind === "hinge" ? _[0] : null, B = P.map((ee)=>ee.centroid ? ee.centroid[0] * O[0] + ee.centroid[1] * O[1] + ee.centroid[2] * O[2] : 0), $ = Math.min(...B), W = Math.max(...B) - $;
                                    if (p.variableAngles.length > 1 && W <= 1e-9) throw new Error("Variable Draft requires selected face segments at distinct pull-direction locations");
                                    if (v && p.split.kind !== "none" && (p.split.sideMode === "dependent" || p.split.sideMode === "independent")) {
                                        const ee = P.map((oe)=>{
                                            const we = oe.centroid ?? [
                                                0,
                                                0,
                                                0
                                            ];
                                            return (we[0] - v.origin[0]) * v.normal[0] + (we[1] - v.origin[1]) * v.normal[1] + (we[2] - v.origin[2]) * v.normal[2];
                                        });
                                        if (!ee.some((oe)=>oe < 0) || !ee.some((oe)=>oe >= 0)) throw new Error("Split Draft requires selected face segments on both sides of the split reference");
                                    }
                                    const N = P.flatMap((ee, oe)=>{
                                        const we = ee.centroid ?? [
                                            0,
                                            0,
                                            0
                                        ], De = v ? (we[0] - v.origin[0]) * v.normal[0] + (we[1] - v.origin[1]) * v.normal[1] + (we[2] - v.origin[2]) * v.normal[2] : 1;
                                        if (p.split.kind !== "none") {
                                            if (p.split.sideMode === "first_only" && De < 0) return [];
                                            if (p.split.sideMode === "second_only" && De >= 0) return [];
                                        }
                                        const de = W <= 1e-9 ? .5 : (B[oe] - $) / W;
                                        let pe = xb(p, de);
                                        p.split.kind !== "none" && De < 0 && (p.split.sideMode === "dependent" ? pe = -pe : p.split.sideMode === "independent" && (pe = p.reverseSecondSideAngle ? -p.secondSideAngle : p.secondSideAngle));
                                        const Ge = De < 0 && _.length > 1 ? 1 : 0;
                                        return [
                                            {
                                                face: ee,
                                                neutralPlane: _[Ge],
                                                angle: pe
                                            }
                                        ];
                                    }).filter((ee)=>{
                                        const oe = ee.face.normal ?? ee.face.plane?.normal;
                                        return !oe || !Cl(oe, ee.neutralPlane.normal);
                                    });
                                    if (N.length === 0) throw new Error("Draft has no surfaces that intersect the hinge plane");
                                    let G;
                                    try {
                                        G = Ri(y, E.shape, N, O);
                                    } catch (ee) {
                                        if (!M) throw ee;
                                        G = Ri(y, E.shape, N.map((oe)=>({
                                                ...oe,
                                                angle: -oe.angle
                                            })), O);
                                    }
                                    const Z = x(y, G), be = he({
                                        prior: E.topology,
                                        resultMesh: Z,
                                        generatingFeatureId: p.id,
                                        opKind: "draft",
                                        resultEdgeSamples: ie(y, G)
                                    });
                                    ae(be, Z), s.set(p.id, {
                                        shape: G,
                                        generatingFeatureId: p.id,
                                        opKind: "draft",
                                        topology: be,
                                        tipMesh: Z,
                                        dispose: ()=>{}
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "split" || p.type === "trim") {
                                    const E = s.get(p.baseFeatureId);
                                    if (!E) throw Object.assign(new Error(`${p.type === "trim" ? "Trim Sheet" : "Split"} base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const O = Bi(p.toolRef, E, b), M = AI(y, E.shape, O, p.keepSide);
                                    try {
                                        const P = x(y, M.shape);
                                        if (P.positions.length === 0 || !P.indices?.length) throw new Error(`${p.type === "trim" ? "Trim Sheet" : "Split"} ${p.keepSide} side is empty; move the tool plane through the base solid`);
                                        const _ = he({
                                            prior: E.topology,
                                            resultMesh: P,
                                            generatingFeatureId: p.id,
                                            opKind: "boolean",
                                            resultEdgeSamples: ie(y, M.shape)
                                        });
                                        ae(_, P), s.set(p.id, {
                                            shape: M.shape,
                                            generatingFeatureId: p.id,
                                            opKind: p.type,
                                            topology: _,
                                            tipMesh: P,
                                            dispose: M.dispose
                                        }), g = p.id, l = p.id, d.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (P) {
                                        throw M.dispose(), P;
                                    }
                                }
                                if (p.type === "face_pull") {
                                    const E = s.get(p.baseFeatureId);
                                    if (!E) throw Object.assign(new Error(`Face Pull base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const O = p.faceSelectors.map((P)=>Pn(E, P));
                                    if (O.some((P)=>!P.plane)) throw new Error("Face Pull supports planar faces only");
                                    const M = gl(y, E.shape, E.tipMesh, O, p.direction, p.distance, p.operation);
                                    try {
                                        const P = x(y, M.shape), _ = he({
                                            prior: E.topology,
                                            resultMesh: P,
                                            generatingFeatureId: p.id,
                                            opKind: p.operation === "add" ? "fuse" : "pocket",
                                            resultEdgeSamples: ie(y, M.shape)
                                        });
                                        ae(_, P), s.set(p.id, {
                                            shape: M.shape,
                                            generatingFeatureId: p.id,
                                            opKind: "face_pull",
                                            topology: _,
                                            tipMesh: P,
                                            dispose: M.dispose
                                        }), g = p.id, l = p.id, d.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } catch (P) {
                                        throw M.dispose(), P;
                                    }
                                }
                                if (p.type === "multi_transform") {
                                    const E = s.get(p.seedFeatureId);
                                    if (!E) throw new Error(`MultiTransform seed ${p.seedFeatureId} not found`);
                                    let O = E.shape;
                                    const M = [];
                                    for (const _ of p.transforms)if (_.kind === "linear") {
                                        const v = [
                                            _.direction[0] * _.spacing * (_.count - 1),
                                            _.direction[1] * _.spacing * (_.count - 1),
                                            _.direction[2] * _.spacing * (_.count - 1)
                                        ], B = rd(y, O, v);
                                        O = B.shape, M.push(B.delete);
                                    } else if (_.kind === "polar" && _.axisRef.kind === "world") {
                                        const v = nd(y, O, _.axisRef.origin, _.axisRef.direction, _.angleSpan);
                                        O = v.shape, M.push(v.delete);
                                    } else if (_.kind === "mirror" && _.planeRef.kind === "world") {
                                        const v = Ya(y, O, _.planeRef.origin, _.planeRef.normal);
                                        O = v.shape, M.push(v.delete);
                                    } else throw Object.assign(new Error("MultiTransform datum references require resolved replay support"), {
                                        code: "kernel-unavailable"
                                    });
                                    const P = x(y, O);
                                    s.set(p.id, {
                                        shape: O,
                                        generatingFeatureId: p.id,
                                        opKind: "pattern",
                                        topology: ui(P, p.id),
                                        tipMesh: P,
                                        dispose: ()=>M.forEach((_)=>_())
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "box" || p.type === "cylinder" || p.type === "cone" || p.type === "sphere") {
                                    const E = uI(y, p), O = k.priorSolidFeatureId ?? g, M = O ? s.get(O) : void 0;
                                    let P = E.shape, _ = null;
                                    if (p.mode === "cut") {
                                        if (!M) throw E.dispose(), new Error(`Primitive ${p.type} cut requires a prior solid`);
                                        _ = Ar(y, M.shape, E.shape, "cut"), P = _.Shape();
                                    } else M && (_ = Ar(y, M.shape, E.shape, "union"), P = _.Shape());
                                    const v = x(y, P), B = ui(v, p.id), $ = {
                                        faces: B.faces,
                                        edges: pn(p.id, B.edges, ie(y, P))
                                    };
                                    s.set(p.id, {
                                        shape: P,
                                        generatingFeatureId: p.id,
                                        opKind: "boolean",
                                        topology: $,
                                        tipMesh: v,
                                        dispose: ()=>{
                                            _?.delete?.(), E.dispose();
                                        }
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "boolean") {
                                    const E = s.get(p.targetFeatureId), O = s.get(p.toolFeatureId);
                                    if (!E) throw Object.assign(new Error(`Boolean target ${p.targetFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (!O) throw Object.assign(new Error(`Boolean tool ${p.toolFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    const M = p.op === "union" && b.has(p.targetFeatureId) && b.has(p.toolFeatureId) && ab(b, p.targetFeatureId, p.toolFeatureId), P = M ? null : Ar(y, E.shape, O.shape, p.op), _ = M ? mr(y, O.shape) : P.Shape(), v = x(y, _), B = ie(y, _), $ = he({
                                        prior: M ? O.topology : E.topology,
                                        resultMesh: v,
                                        generatingFeatureId: p.id,
                                        opKind: "fuse",
                                        toolFaceHints: M ? [] : O.topology.faces.map((z)=>({
                                                role: z.provenance.role,
                                                featureId: p.id,
                                                expectedCentroid: z.centroid ?? [
                                                    0,
                                                    0,
                                                    0
                                                ],
                                                expectedNormal: z.normal ?? [
                                                    0,
                                                    0,
                                                    1
                                                ]
                                            })),
                                        toolEdgeHints: M ? [] : O.topology.edges.filter((z)=>z.midpoint).map((z)=>({
                                                role: z.provenance.role,
                                                featureId: p.id,
                                                midpoint: z.midpoint,
                                                start: z.startVertex,
                                                end: z.endVertex,
                                                faceRoles: [
                                                    "",
                                                    ""
                                                ]
                                            })),
                                        resultEdgeSamples: B
                                    });
                                    ae($, v), s.set(p.id, {
                                        shape: _,
                                        generatingFeatureId: p.id,
                                        opKind: "boolean",
                                        topology: $,
                                        tipMesh: v,
                                        dispose: ()=>P?.delete?.()
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "thickness") {
                                    const E = s.get(p.baseFeatureId);
                                    if (!E) throw Object.assign(new Error(`Thickness base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (p.removedFaceSelectors.length === 0) throw new Error("Thickness requires at least one removed face");
                                    const O = p.removedFaceSelectors.map((v)=>{
                                        const B = E.topology.faces.find(($)=>$.provenance.featureId === v.featureId && $.provenance.role === v.role);
                                        if (!B) throw Object.assign(new Error(`Thickness face ${v.featureId}:${v.role} is lost`), {
                                            code: "topology-reference-lost"
                                        });
                                        return B;
                                    }), M = fI(y, E.shape, O, p.thickness, p.inward), P = x(y, M), _ = he({
                                        prior: E.topology,
                                        resultMesh: P,
                                        generatingFeatureId: p.id,
                                        opKind: "thickness",
                                        resultEdgeSamples: ie(y, M)
                                    });
                                    ae(_, P), s.set(p.id, {
                                        shape: M,
                                        generatingFeatureId: p.id,
                                        opKind: "thickness",
                                        topology: _,
                                        tipMesh: P,
                                        dispose: ()=>{}
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "fillet" || p.type === "chamfer") {
                                    const E = s.get(p.baseFeatureId);
                                    if (!E) throw Object.assign(new Error(`${p.type} base ${p.baseFeatureId} not found`), {
                                        code: "topology-reference-lost"
                                    });
                                    if (p.edgeSelectors.length === 0) {
                                        s.set(p.id, {
                                            shape: E.shape,
                                            generatingFeatureId: p.id,
                                            opKind: p.type,
                                            topology: E.topology,
                                            tipMesh: E.tipMesh,
                                            dispose: ()=>{}
                                        }), g = p.id, l = p.id, d.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    }
                                    const O = ie(y, E.shape), M = new Set(O.map((N)=>N.ordinal)), P = [], _ = [], v = [];
                                    for (const N of p.edgeSelectors){
                                        const G = typeof N.occEdgeOrdinal == "number" && Number.isInteger(N.occEdgeOrdinal) ? N.occEdgeOrdinal : void 0;
                                        if (G !== void 0 && M.has(G)) {
                                            P.push(G);
                                            continue;
                                        }
                                        if (N.samplePoints && N.samplePoints.length >= 2) {
                                            v.push({
                                                role: N.role,
                                                samplePoints: N.samplePoints.map((oe)=>[
                                                        ...oe
                                                    ])
                                            });
                                            continue;
                                        }
                                        const Z = E.topology.edges.find((oe)=>oe.provenance.featureId === N.featureId && oe.provenance.role === N.role), be = typeof Z?.occEdgeOrdinal == "number" && Number.isInteger(Z.occEdgeOrdinal) ? Z.occEdgeOrdinal : void 0;
                                        if (be !== void 0 && M.has(be)) {
                                            P.push(be);
                                            continue;
                                        }
                                        if (N.role.startsWith("feature_edge_")) throw Object.assign(new Error(`${p.type} edge ${N.featureId}:${N.role} has no occEdgeOrdinal (tessellation role is not OCC edge identity — re-pick after tip refresh)`), {
                                            code: "topology-reference-lost"
                                        });
                                        const ee = N.hintCentroid ?? Z?.midpoint ?? (Z ? [
                                            (Z.startVertex[0] + Z.endVertex[0]) / 2,
                                            (Z.startVertex[1] + Z.endVertex[1]) / 2,
                                            (Z.startVertex[2] + Z.endVertex[2]) / 2
                                        ] : void 0);
                                        if (!ee) throw Object.assign(new Error(`${p.type} edge ${N.featureId}:${N.role} is lost (no occEdgeOrdinal or midpoint)`), {
                                            code: "topology-reference-lost"
                                        });
                                        _.push({
                                            role: N.role,
                                            midpoint: [
                                                ...ee
                                            ]
                                        });
                                    }
                                    if (v.length > 0) try {
                                        P.push(...nI(O, v));
                                    } catch (N) {
                                        throw Object.assign(new Error(N instanceof Error ? N.message : String(N)), {
                                            code: "topology-reference-lost"
                                        });
                                    }
                                    if (_.length > 0) try {
                                        P.push(...ml(O, _));
                                    } catch (N) {
                                        throw Object.assign(new Error(N instanceof Error ? N.message : String(N)), {
                                            code: "topology-reference-lost"
                                        });
                                    }
                                    const B = [
                                        ...new Set(P)
                                    ].sort((N, G)=>N - G), $ = p.type === "fillet" ? ra(y, E.shape, B, p.radius) : Pi(y, E.shape, B, p.distance), z = x(y, $), W = ie(y, $), Y = he({
                                        prior: E.topology,
                                        resultMesh: z,
                                        generatingFeatureId: p.id,
                                        opKind: "fuse",
                                        resultEdgeSamples: W
                                    });
                                    ae(Y, z), s.set(p.id, {
                                        shape: $,
                                        generatingFeatureId: p.id,
                                        opKind: p.type,
                                        topology: Y,
                                        tipMesh: z,
                                        dispose: ()=>$.delete?.()
                                    }), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "extrude") {
                                    const E = t.snapshot.profiles[p.sketchId];
                                    if (!E) throw new Error(`Missing profile ${p.sketchId}`);
                                    const O = ec({
                                        depth: p.depth,
                                        secondDepth: p.secondDepth ?? 0,
                                        symmetric: p.symmetric ?? !1,
                                        mode: p.mode,
                                        startOffset: p.startOffset,
                                        endOffset: p.endOffset
                                    });
                                    if (p.mode === "add") {
                                        const M = ot(y, E, O.span, {
                                            startOffset: O.startOffset
                                        }), P = k.priorSolidFeatureId ?? g, _ = p.fusePrior === !1 ? void 0 : P ? s.get(P) : void 0;
                                        if (_) {
                                            const v = new y.BRepAlgoAPI_Fuse_3(_.shape, M.shape);
                                            try {
                                                if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC additive extrude fuse failed");
                                                const B = v.Shape(), $ = x(y, B), z = ie(y, B), W = Ci(E, O.span, p.id, O.startOffset), Y = he({
                                                    prior: _.topology,
                                                    resultMesh: $,
                                                    generatingFeatureId: p.id,
                                                    opKind: "fuse",
                                                    toolFaceHints: W.faces,
                                                    toolEdgeHints: W.edges,
                                                    resultEdgeSamples: z
                                                });
                                                ae(Y, $), s.set(p.id, Be(v, p.id, "fuse", Y, $));
                                            } catch (B) {
                                                throw v.delete?.(), B;
                                            } finally{
                                                qe(M);
                                            }
                                        } else {
                                            const v = x(y, M.shape), B = ie(y, M.shape), $ = kl(E, p.depth, p.id, v, B, O.startOffset);
                                            ae($, v), s.set(p.id, Sb(M, p.id, "extrude", $, v));
                                        }
                                    } else {
                                        const M = k.priorSolidFeatureId ?? g, P = M ? s.get(M) : void 0;
                                        if (!P) throw new Error("Pocket requires a prior solid shape");
                                        const _ = ot(y, E, O.span, {
                                            startOffset: O.startOffset
                                        }), v = new y.BRepAlgoAPI_Cut_3(P.shape, _.shape);
                                        try {
                                            if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC pocket cut failed");
                                            const B = v.Shape(), $ = x(y, B), z = ie(y, B), W = Ci(E, O.span, p.id, O.startOffset), Y = he({
                                                prior: P.topology,
                                                resultMesh: $,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                toolFaceHints: W.faces,
                                                toolEdgeHints: W.edges,
                                                resultEdgeSamples: z
                                            });
                                            ae(Y, $), s.set(p.id, Be(v, p.id, "pocket", Y, $));
                                        } catch (B) {
                                            throw v.delete?.(), B;
                                        } finally{
                                            qe(_);
                                        }
                                    }
                                    g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "hole") {
                                    const E = s.get(p.baseFeatureId) ?? (k.priorSolidFeatureId ? s.get(k.priorSolidFeatureId) : void 0);
                                    if (!E) throw new Error(`Hole base ${p.baseFeatureId} not found`);
                                    const O = t.snapshot.profiles[p.sketchId];
                                    if (!O) throw new Error(`Hole sketch profile ${p.sketchId} not found`);
                                    const M = Yi(O, p.pointIds), P = mc(O), _ = p.depthMode === "through" ? Math.max(p.depth, 1e5) : p.depth;
                                    let v = E;
                                    for (const [B, $] of M.entries()){
                                        const z = M.length === 1 ? p.id : `${p.id}::pt-${B}`, { uAxis: W, vAxis: Y } = db(P), N = {
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
                                            origin: $.origin,
                                            normal: P,
                                            uAxis: W,
                                            vAxis: Y
                                        }, G = [
                                            {
                                                profile: So(N, p.diameter / 2),
                                                depth: _
                                            }
                                        ];
                                        if (p.mode === "counterbore" && p.counterboreDiameter && p.counterboreDepth && G.push({
                                            profile: So(N, p.counterboreDiameter / 2),
                                            depth: p.counterboreDepth
                                        }), p.mode === "countersink" && p.countersinkDiameter && p.countersinkAngleDeg) {
                                            const Z = (p.countersinkDiameter - p.diameter) / (2 * Math.tan(p.countersinkAngleDeg * Math.PI / 360));
                                            G.push({
                                                profile: So(N, p.countersinkDiameter / 2),
                                                depth: Z
                                            });
                                        }
                                        for (const [Z, be] of G.entries()){
                                            const ee = B === M.length - 1, oe = Z === G.length - 1, we = ee && oe ? p.id : `${z}::cut-${Z}`, De = Math.max(1e-4, Math.min(be.depth * 1e-6, .01)), de = ot(y, be.profile, be.depth + De, {
                                                startOffset: -De
                                            }), pe = new y.BRepAlgoAPI_Cut_3(v.shape, de.shape);
                                            try {
                                                if (pe.Build(), pe.IsDone?.() === !1) throw new Error("OCC hole cut failed");
                                                const Ge = pe.Shape(), Ze = x(y, Ge), xt = ie(y, Ge), Dt = he({
                                                    prior: v.topology,
                                                    resultMesh: Ze,
                                                    generatingFeatureId: we,
                                                    opKind: "pocket",
                                                    resultEdgeSamples: xt
                                                });
                                                if (ae(Dt, Ze), v = Be(pe, we, "pocket", Dt, Ze), oe) {
                                                    const ar = [
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
                                                    ].filter((Te)=>!!Te);
                                                    for (const Te of ar){
                                                        if (!(Te.offset > 0) || !(Te.angle > 1 && Te.angle < 179)) throw new Error(`Invalid ${Te.side} hole chamfer parameters`);
                                                        const so = ie(y, v.shape), ct = Jg(so, $.origin, P, Te.radius, Te.axial);
                                                        if (ct.length === 0) throw new Error(`Hole ${Te.side} chamfer rim was not resolved`);
                                                        const St = Math.min(Te.angle, 180 - Te.angle), Tt = Te.offset / Math.max(1e-6, Math.tan(St * Math.PI / 180)), kt = Pi(y, v.shape, ct, Tt), Bt = x(y, kt), Lr = ie(y, kt), dr = he({
                                                            prior: {
                                                                faces: v.topology.faces.filter((du)=>du.provenance.featureId !== we),
                                                                edges: v.topology.edges
                                                            },
                                                            resultMesh: Bt,
                                                            generatingFeatureId: we,
                                                            opKind: "pocket",
                                                            resultEdgeSamples: Lr
                                                        });
                                                        ae(dr, Bt), v = {
                                                            shape: kt,
                                                            generatingFeatureId: we,
                                                            opKind: "chamfer",
                                                            topology: dr,
                                                            tipMesh: Bt,
                                                            dispose: ()=>kt.delete?.()
                                                        };
                                                    }
                                                }
                                                ee && oe || s.set(we, v);
                                            } catch (Ge) {
                                                throw pe.delete?.(), Ge;
                                            } finally{
                                                qe(de);
                                            }
                                        }
                                    }
                                    s.set(p.id, v), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "linear_pattern") {
                                    const E = s.get(p.seedFeatureId);
                                    if (!E) throw new Error(`Linear pattern seed ${p.seedFeatureId} not found`);
                                    let O = E;
                                    for(let M = 1; M < p.count; M++){
                                        const P = [
                                            p.direction[0] * p.spacing * M,
                                            p.direction[1] * p.spacing * M,
                                            p.direction[2] * p.spacing * M
                                        ], _ = rd(y, E.shape, P);
                                        s.set(`${p.id}::copy-${M}`, {
                                            shape: _.shape,
                                            generatingFeatureId: `${p.id}::copy-${M}`,
                                            opKind: "pattern",
                                            topology: E.topology,
                                            tipMesh: null,
                                            dispose: _.delete
                                        });
                                        const v = new y.BRepAlgoAPI_Fuse_3(O.shape, _.shape);
                                        try {
                                            if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC linear pattern fuse failed");
                                            const B = v.Shape(), $ = x(y, B), z = he({
                                                prior: O.topology,
                                                resultMesh: $,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: ie(y, B)
                                            });
                                            ae(z, $), O = Be(v, p.id, "fuse", z, $), M < p.count - 1 && s.set(`${p.id}::result-${M}`, O);
                                        } catch (B) {
                                            throw v.delete?.(), B;
                                        }
                                    }
                                    s.set(p.id, O), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "polar_pattern") {
                                    const E = s.get(p.seedFeatureId);
                                    if (!E) throw new Error(`Polar pattern seed ${p.seedFeatureId} not found`);
                                    const O = is({
                                        ...p,
                                        type: "revolve",
                                        sketchId: "",
                                        angle: p.angleSpan,
                                        mode: "add"
                                    }, b);
                                    let M = E;
                                    for(let P = 1; P < p.count; P++){
                                        const _ = `${p.id}::copy-${P}`, v = nd(y, E.shape, O.origin, O.direction, p.angleSpan * P / p.count), B = new y.BRepAlgoAPI_Fuse_3(M.shape, v.shape);
                                        try {
                                            if (B.Build(), B.IsDone?.() === !1) throw new Error("OCC polar pattern fuse failed");
                                            const $ = B.Shape(), z = x(y, $), W = he({
                                                prior: M.topology,
                                                resultMesh: z,
                                                generatingFeatureId: _,
                                                opKind: "fuse",
                                                resultEdgeSamples: ie(y, $)
                                            });
                                            ae(W, z), M = Be(B, _, "fuse", W, z);
                                        } catch ($) {
                                            throw B.delete?.(), $;
                                        } finally{
                                            v.delete();
                                        }
                                    }
                                    s.set(p.id, M), g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "mirror") {
                                    const E = s.get(p.seedFeatureId);
                                    if (!E) throw new Error(`Mirror seed ${p.seedFeatureId} not found`);
                                    const O = lb(p, b), M = Ya(y, E.shape, O.origin, O.normal), P = new y.BRepAlgoAPI_Fuse_3(E.shape, M.shape);
                                    try {
                                        if (P.Build(), P.IsDone?.() === !1) throw new Error("OCC mirror fuse failed");
                                        const _ = P.Shape(), v = x(y, _), B = he({
                                            prior: E.topology,
                                            resultMesh: v,
                                            generatingFeatureId: p.id,
                                            opKind: "mirror",
                                            resultEdgeSamples: ie(y, _)
                                        });
                                        ae(B, v), s.set(p.id, Be(P, p.id, "mirror", B, v)), g = p.id, l = p.id, d.push({
                                            featureId: p.id,
                                            status: "ok"
                                        });
                                        continue;
                                    } finally{
                                        M.delete();
                                    }
                                }
                                if (p.type === "loft") {
                                    const E = p.sectionSketchIds.map((_)=>{
                                        const v = t.snapshot.profiles[_];
                                        if (!v) throw new Error(`Missing loft profile ${_}`);
                                        return v;
                                    }), O = mI(y, E), M = k.priorSolidFeatureId ?? g, P = M ? s.get(M) : void 0;
                                    if (p.mode === "cut") {
                                        if (!P) throw new Error("Loft cut requires a prior solid");
                                        const _ = new y.BRepAlgoAPI_Cut_3(P.shape, O);
                                        try {
                                            if (_.Build(), _.IsDone?.() === !1) throw new Error("OCC loft cut failed");
                                            const v = _.Shape(), B = x(y, v), $ = he({
                                                prior: P.topology,
                                                resultMesh: B,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                resultEdgeSamples: ie(y, v)
                                            });
                                            ae($, B), s.set(p.id, Be(_, p.id, "pocket", $, B));
                                        } catch (v) {
                                            throw _.delete?.(), v;
                                        }
                                    } else if (P) {
                                        const _ = new y.BRepAlgoAPI_Fuse_3(P.shape, O);
                                        try {
                                            if (_.Build(), _.IsDone?.() === !1) throw new Error("OCC additive loft fuse failed");
                                            const v = _.Shape(), B = x(y, v), $ = he({
                                                prior: P.topology,
                                                resultMesh: B,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: ie(y, v)
                                            });
                                            ae($, B), s.set(p.id, Be(_, p.id, "fuse", $, B));
                                        } catch (v) {
                                            throw _.delete?.(), v;
                                        }
                                    } else {
                                        const _ = x(y, O), v = ci(E[0], 0, p.id, {
                                            origin: E[0].origin,
                                            direction: E[0].normal
                                        }, _, ie(y, O));
                                        ae(v, _), s.set(p.id, {
                                            shape: O,
                                            generatingFeatureId: p.id,
                                            opKind: "loft",
                                            topology: v,
                                            tipMesh: _,
                                            dispose: ()=>{}
                                        });
                                    }
                                    g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "pipe") {
                                    const O = (p.sectionSketchIds ?? [
                                        p.profileSketchId
                                    ]).map((Y)=>t.snapshot.profiles[Y]), M = p.pathReference?.featureId ?? p.pathSketchId, P = b.get(M), _ = P?.type === "helix" ? P : void 0, v = _ ? ib(_) : t.snapshot.profiles[M];
                                    if (O.some((Y)=>!Y) || !v) throw new Error(`Missing pipe profile/path for ${p.id}`);
                                    const B = p, $ = wI(y, O, v, p.orientation ?? "frenet", {
                                        orientationDirection: B.orientationDirection,
                                        orientationOrigin: B.orientationOrigin,
                                        preserveShape: B.preserveShape,
                                        preserveGuideShape: B.preserveGuideShape,
                                        scalingMethod: B.scalingMethod,
                                        sectionInterpolation: B.sectionInterpolation,
                                        tolAngleDeg: B.tolAngleDeg,
                                        tolDistance: B.tolDistance,
                                        ..._ ? {
                                            analyticHelix: _
                                        } : {}
                                    }), z = k.priorSolidFeatureId ?? g, W = z ? s.get(z) : void 0;
                                    if (p.mode === "cut") {
                                        if (!W) throw new Error("Pipe cut requires a prior solid");
                                        const Y = new y.BRepAlgoAPI_Cut_3(W.shape, $);
                                        try {
                                            if (Y.Build(), Y.IsDone?.() === !1) throw new Error("OCC pipe cut failed");
                                            const N = Y.Shape(), G = x(y, N), Z = he({
                                                prior: W.topology,
                                                resultMesh: G,
                                                generatingFeatureId: p.id,
                                                opKind: "pocket",
                                                resultEdgeSamples: ie(y, N)
                                            });
                                            ae(Z, G), s.set(p.id, Be(Y, p.id, "pocket", Z, G));
                                        } catch (N) {
                                            throw Y.delete?.(), N;
                                        }
                                    } else if (W) {
                                        const Y = new y.BRepAlgoAPI_Fuse_3(W.shape, $);
                                        try {
                                            if (Y.Build(), Y.IsDone?.() === !1) throw new Error("OCC additive pipe fuse failed");
                                            const N = Y.Shape(), G = x(y, N), Z = he({
                                                prior: W.topology,
                                                resultMesh: G,
                                                generatingFeatureId: p.id,
                                                opKind: "fuse",
                                                resultEdgeSamples: ie(y, N)
                                            });
                                            ae(Z, G), s.set(p.id, Be(Y, p.id, "fuse", Z, G));
                                        } catch (N) {
                                            throw Y.delete?.(), N;
                                        }
                                    } else {
                                        const Y = x(y, $), N = O[0], G = ci(N, 0, p.id, {
                                            origin: N.origin,
                                            direction: N.normal
                                        }, Y, ie(y, $));
                                        ae(G, Y), s.set(p.id, {
                                            shape: $,
                                            generatingFeatureId: p.id,
                                            opKind: "pipe",
                                            topology: G,
                                            tipMesh: Y,
                                            dispose: ()=>{}
                                        });
                                    }
                                    g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "revolve") {
                                    const E = t.snapshot.profiles[p.sketchId];
                                    if (!E) throw new Error(`Missing profile ${p.sketchId}`);
                                    const O = is(p, b);
                                    if (p.mode === "add") {
                                        const M = An(y, E, O.origin, O.direction, p.angle, p.startAngle ?? 0), P = k.priorSolidFeatureId ?? g, _ = p.fusePrior === !1 ? void 0 : P ? s.get(P) : void 0;
                                        if (_) {
                                            const v = new y.BRepAlgoAPI_Fuse_3(_.shape, M.shape);
                                            try {
                                                if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC additive revolve fuse failed");
                                                const B = v.Shape(), $ = x(y, B), z = ie(y, B), W = $i(E, p.angle, p.id, O), Y = he({
                                                    prior: _.topology,
                                                    resultMesh: $,
                                                    generatingFeatureId: p.id,
                                                    opKind: "fuse",
                                                    toolFaceHints: W.faces,
                                                    toolEdgeHints: W.edges,
                                                    resultEdgeSamples: z
                                                });
                                                ae(Y, $), s.set(p.id, Be(v, p.id, "fuse", Y, $));
                                            } catch (B) {
                                                throw v.delete?.(), B;
                                            } finally{
                                                Dr(M);
                                            }
                                        } else {
                                            const v = x(y, M.shape), B = ie(y, M.shape), $ = ci(E, p.angle, p.id, O, v, B);
                                            ae($, v), s.set(p.id, kb(M, p.id, $, v));
                                        }
                                    } else {
                                        const M = k.priorSolidFeatureId ?? g, P = M ? s.get(M) : void 0;
                                        if (!P) throw new Error("Groove requires a prior solid shape");
                                        const _ = An(y, E, O.origin, O.direction, p.angle, p.startAngle ?? 0), v = new y.BRepAlgoAPI_Cut_3(P.shape, _.shape);
                                        try {
                                            if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC groove cut failed");
                                            const B = v.Shape(), $ = x(y, B), z = ie(y, B), W = $i(E, p.angle, p.id, O), Y = he({
                                                prior: P.topology,
                                                resultMesh: $,
                                                generatingFeatureId: p.id,
                                                opKind: "groove",
                                                toolFaceHints: W.faces,
                                                toolEdgeHints: W.edges,
                                                resultEdgeSamples: z
                                            });
                                            ae(Y, $), s.set(p.id, Be(v, p.id, "groove", Y, $));
                                        } catch (B) {
                                            throw v.delete?.(), B;
                                        } finally{
                                            Dr(_);
                                        }
                                    }
                                    g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "helix") {
                                    d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                if (p.type === "thread") {
                                    const E = b.get(p.helixFeatureId);
                                    if (!E || E.type !== "helix") throw new Error(`Thread Helix ${p.helixFeatureId} not found`);
                                    const O = k.priorSolidFeatureId ?? g, M = O ? s.get(O) : void 0;
                                    if (!M) throw new Error("Thread requires a prior solid for add/cut replay");
                                    const P = p.profileKind === "custom_sketch" && p.profileSketchId ? t.snapshot.profiles[p.profileSketchId] : void 0, _ = Il(y, E, p, P);
                                    if (p.mode === "cut") {
                                        const v = new y.BRepAlgoAPI_Cut_3(M.shape, _);
                                        try {
                                            if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC Thread cut failed");
                                            const B = v.Shape(), $ = x(y, B), z = he({
                                                prior: M.topology,
                                                resultMesh: $,
                                                generatingFeatureId: p.id,
                                                opKind: "thread",
                                                resultEdgeSamples: ie(y, B)
                                            });
                                            ae(z, $), s.set(p.id, Be(v, p.id, "thread", z, $));
                                        } catch (B) {
                                            throw v.delete?.(), B;
                                        }
                                    } else {
                                        const v = new y.BRepAlgoAPI_Fuse_3(M.shape, _);
                                        try {
                                            if (v.Build(), v.IsDone?.() === !1) throw new Error("OCC Thread fuse failed");
                                            const B = v.Shape(), $ = x(y, B), z = he({
                                                prior: M.topology,
                                                resultMesh: $,
                                                generatingFeatureId: p.id,
                                                opKind: "thread",
                                                resultEdgeSamples: ie(y, B)
                                            });
                                            ae(z, $), s.set(p.id, Be(v, p.id, "thread", z, $));
                                        } catch (B) {
                                            throw v.delete?.(), B;
                                        }
                                    }
                                    g = p.id, l = p.id, d.push({
                                        featureId: p.id,
                                        status: "ok"
                                    });
                                    continue;
                                }
                                d.push({
                                    featureId: k.featureId,
                                    status: "failed",
                                    error: {
                                        code: "kernel-operation-failed",
                                        message: `Unsupported active step ${k.kind}`,
                                        featureId: k.featureId,
                                        recoverable: !1
                                    }
                                }), f = !0;
                            } catch (E) {
                                const O = td(E, `OCC ${k.kind} failed for Feature ${k.featureId}`), P = E.code === "topology-reference-lost" ? "topology-reference-lost" : /load|wasm|initial/i.test(O) ? "kernel-init-failed" : /lost|ambiguous|match edge|not found/i.test(O) ? "topology-reference-lost" : "kernel-operation-failed";
                                d.push({
                                    featureId: k.featureId,
                                    status: "failed",
                                    error: {
                                        code: P,
                                        message: O,
                                        featureId: k.featureId,
                                        phase: k.kind,
                                        recoverable: P === "kernel-init-failed"
                                    }
                                }), (k.kind === "extrude" || k.kind === "import" || k.kind === "revolve" || k.kind === "boolean" || k.kind === "fillet" || k.kind === "chamfer" || k.kind === "thickness" || k.kind === "mirror" || k.kind === "loft" || k.kind === "pipe" || k.kind === "face_pull" || k.kind === "draft") && (f = !0);
                            }
                        } finally{
                            q || (r.recordFeatureFromStates(k, d, performance.now() - C, T), A(k));
                        }
                    }
                    const D = t.cacheResult !== !1 && Nt(i) && yn(t.bodyId, t.revision);
                    if (D) {
                        const k = m.prefixFeatureIdsToPublish().flatMap((T)=>{
                            const C = s.get(T), q = t.replayPlan.steps.find((p)=>p.featureId === T);
                            return !C || !q ? [] : [
                                {
                                    bodyId: t.bodyId,
                                    featureId: T,
                                    historyIndex: q.historyIndex,
                                    generatingFeatureId: C.generatingFeatureId,
                                    opKind: C.opKind,
                                    shape: mr(y, C.shape),
                                    topology: Xa(C.topology),
                                    tipMesh: C.tipMesh ? Za(C.tipMesh) : null
                                }
                            ];
                        });
                        if (Nt(i) && yn(t.bodyId, t.revision)) {
                            m.commit({
                                checkpoints: xr,
                                prefixSolids: rs,
                                solids: k
                            }), jI(t.bodyId, t.revision);
                            for (const T of m.invalidateFromHistoryIndexes())pt.invalidateFromHistoryIndex(t.bodyId, T);
                            pt.invalidateFeatureIds(t.bodyId, m.droppedFeatureIds());
                            for (const T of k){
                                const C = m.stagedCheckpoints().find((E)=>E.featureId === T.featureId && E.status === "ok"), q = s.get(T.featureId);
                                if (!C || !q) continue;
                                const p = pt.stage({
                                    key: Qn({
                                        bodyId: C.bodyId,
                                        featureId: C.featureId,
                                        committedRevision: C.committedRevision,
                                        inputFingerprint: C.inputFingerprint,
                                        dependencyFingerprint: C.dependencyFingerprint,
                                        replayProtocolVersion: C.replayProtocolVersion,
                                        runtimeIdentity: C.runtimeIdentity
                                    }),
                                    shape: mr(y, q.shape),
                                    historyIndex: T.historyIndex,
                                    generatingFeatureId: T.generatingFeatureId,
                                    opKind: T.opKind
                                });
                                Nt(i) && yn(t.bodyId, t.revision) ? pt.publish(p) : pt.discard(p);
                            }
                        } else for (const T of k)try {
                            T.shape.delete?.();
                        } catch  {}
                    }
                    let V = {
                        faces: [],
                        edges: []
                    };
                    if (l) {
                        const k = s.get(l);
                        if (k) {
                            if (u && (r.setActiveFeatureId(l), c = k.tipMesh ?? x(y, k.shape), h)) {
                                const T = ie(y, k.shape);
                                V = {
                                    faces: k.topology.faces,
                                    edges: pn(k.generatingFeatureId || l, k.topology.edges, T)
                                }, c && ae(V, c);
                            }
                            if (D && Nt(i)) {
                                const T = xr.lookup(t.bodyId, l);
                                if (T) {
                                    const C = mr(y, k.shape), q = Ti.get(t.bodyId);
                                    try {
                                        q?.shape.delete?.();
                                    } catch  {}
                                    Ti.set(t.bodyId, {
                                        key: Qn({
                                            bodyId: T.bodyId,
                                            featureId: T.featureId,
                                            committedRevision: T.committedRevision,
                                            inputFingerprint: T.inputFingerprint,
                                            dependencyFingerprint: T.dependencyFingerprint,
                                            replayProtocolVersion: T.replayProtocolVersion,
                                            runtimeIdentity: T.runtimeIdentity
                                        }),
                                        shape: C
                                    });
                                }
                            }
                        }
                    }
                    const X = c ? Ue(c) : [];
                    return {
                        response: {
                            ok: !0,
                            protocolVersion: Ce,
                            requestId: t.requestId,
                            bodyId: t.bodyId,
                            revision: t.revision,
                            result: {
                                featureStates: d,
                                tipMesh: c,
                                faces: V.faces,
                                edges: V.edges,
                                elapsedMs: Date.now() - o,
                                solidExecutionOrder: [
                                    ...t.replayPlan.solidExecutionOrder
                                ]
                            },
                            transfers: X
                        },
                        transfers: X,
                        performanceEvents: on(r, "ok")
                    };
                } catch (w) {
                    const y = td(w, "OCC Body replay failed");
                    return {
                        response: li(t, {
                            code: /load|wasm|initial/i.test(y) ? "kernel-init-failed" : "internal",
                            message: y,
                            recoverable: !1,
                            phase: "execute"
                        }),
                        transfers: [],
                        performanceEvents: on(r, "failed")
                    };
                } finally{
                    for (const w of s.values()){
                        try {
                            w.dispose();
                        } catch  {}
                        a.track(w.shape);
                    }
                    s.clear(), a.releaseAll();
                    for (const w of I)try {
                        a.unprotect(w.shape), w.release();
                    } catch  {}
                }
            } finally{
                NI(i);
            }
        }
    }
    class Bl {
        constructor(t = $t, r = new _c().freeze()){
            this.featureHandlers = r, this.legacyExecutor = new vb(t);
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
    async function jl(e) {
        return new Bl().execute(e);
    }
    class ve extends Error {
        constructor(t, r, n){
            super(t), this.code = r, this.context = n;
        }
        code;
        context;
        name = "OccBridgeError";
    }
    let _b = 0;
    function Eb() {
        return `occ-body-${++_b}`;
    }
    class os {
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
            if (this.disposed) throw new ve("OCC body worker client disposed", "cancelled");
            const n = Zi(t);
            return n ? {
                ok: !1,
                protocolVersion: Ce,
                requestId: t.requestId,
                bodyId: t.bodyId,
                revision: t.revision,
                error: n
            } : (this.cancelBodyBeforeRevision(t.bodyId, t.revision, t), this.createWorker ? this.replayViaWorker(t, r) : this.replayInProcess(t, r));
        }
        getLastReplayDiagnostics() {
            return jc();
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
                    protocolVersion: Ce,
                    bodyId: t
                });
                return;
            }
            ob(t), wl(t);
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
            ])r.settled || (r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), r.reject(new ve("OCC body worker restarted", "worker", {
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
            zc(t);
        }
        settleCancel(t, r, n = "cancelled", i) {
            if (r.settled) return !1;
            r.settled = !0, r.timeoutId && clearTimeout(r.timeoutId), this.pending.delete(t), this.worker && this.worker.postMessage({
                type: "cancel-body-replay",
                protocolVersion: Ce,
                requestId: r.request.requestId,
                bodyId: r.request.bodyId,
                revision: r.request.revision
            });
            try {
                n === "stale" && i ? this.pendingStaleEvents.push(Kc(r.request, i)) : this.publishDiagnostics([
                    sn(r.request, "cancelled")
                ]);
            } catch  {}
            return r.reject(new ve("OCC body replay cancelled", "cancelled", {
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
                sn(t, "cancelled")
            ]), new ve("OCC body replay cancelled", "cancelled", {
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
                    d(new ve(`OCC body replay deadline exceeded after ${n}ms`, "deadline-exceeded", {
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
                    jl(t),
                    o
                ]);
                return this.publishDiagnostics([
                    ...s,
                    ...d
                ]), a;
            } catch (a) {
                throw a instanceof ve && (a.code === "deadline-exceeded" || a.code === "cancelled") ? this.publishDiagnostics([
                    ...s,
                    sn(t, a.code === "deadline-exceeded" ? "deadline-exceeded" : "cancelled")
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
                }, d = (l, f)=>{
                    a.settled || (a.settled = !0, a.timeoutId && clearTimeout(a.timeoutId), this.pending.delete(t.requestId), f && n.postMessage({
                        type: "cancel-body-replay",
                        protocolVersion: Ce,
                        requestId: t.requestId,
                        bodyId: t.bodyId,
                        revision: t.revision
                    }), (l.code === "cancelled" || l.code === "deadline-exceeded") && this.publishDiagnostics([
                        ...a.staleEvents,
                        sn(t, l.code === "deadline-exceeded" ? "deadline-exceeded" : "cancelled")
                    ]), this.consecutiveFailures += 1, (l.code === "deadline-exceeded" || this.consecutiveFailures >= 2) && this.recreateWorker(), s(l));
                }, c = {
                    requestId: t.requestId,
                    bodyId: t.bodyId,
                    featureId: "body-replay",
                    revision: t.revision,
                    operation: "body-replay"
                };
                if (r.signal?.aborted) {
                    d(new ve("OCC body replay cancelled", "cancelled", c), !1);
                    return;
                }
                r.signal?.addEventListener("abort", ()=>{
                    d(new ve("OCC body replay cancelled", "cancelled", c), !0);
                }, {
                    once: !0
                }), a.timeoutId = setTimeout(()=>{
                    d(new ve(`OCC body replay deadline exceeded after ${i}ms`, "deadline-exceeded", c), !0);
                }, i), this.pending.set(t.requestId, a), n.postMessage(t);
            });
        }
        ensureWorker() {
            if (this.worker) return this.worker;
            if (!this.createWorker) throw new ve("OCC body worker factory missing", "worker");
            const t = this.createWorker();
            return t.onmessage = (r)=>{
                const n = r.data;
                if (Pc(n)) return;
                const i = this.pending.get(n.requestId);
                if (!i || i.settled) return;
                const o = Oc(i.request, n);
                if (o) {
                    i.settled = !0, this.pending.delete(n.requestId), i.timeoutId && clearTimeout(i.timeoutId), this.consecutiveFailures += 1, this.consecutiveFailures >= 2 && this.recreateWorker(), i.reject(new ve(o.message, "protocol-invalid", {
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
                ])i.settled || (i.settled = !0, i.timeoutId && clearTimeout(i.timeoutId), this.pending.delete(n), i.reject(new ve(r.message ?? "OCC body worker error", "worker", {
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
    let Pt = null;
    function Ab(e) {
        return e !== void 0 ? (Pt?.dispose(), Pt = new os(e), Pt) : (Pt || (Pt = new os(null)), Pt);
    }
    function Ob() {
        Pt?.dispose(), Pt = null, Nc();
    }
    function oa(e, t, r) {
        const n = wt(e, t), i = Js(e, n.face, r, t.normal), o = dt(e, i.shape);
        n.faceMaker.delete?.(), n.wireBuilder.delete?.();
        for (const s of n.innerWireBuilders)s.delete?.();
        return qe(i), o;
    }
    const Pb = oa;
    function zl(e, t, r, n, i, o, s) {
        const a = ot(e, t, r), d = An(e, n, i, o, s), c = new e.BRepAlgoAPI_Cut_3(a.shape, d.shape);
        try {
            if (c.Build(), c.IsDone?.() === !1) throw new Error("OCC Groove cut failed");
            return dt(e, c.Shape());
        } finally{
            c.delete?.(), Dr(d), qe(a);
        }
    }
    async function Rb(e, t, r, n, i, o, s) {
        const a = zl(await $t(), e, t, r, n, i, o);
        return {
            mesh: a,
            transfers: Ue(a)
        };
    }
    var Nl = ((e)=>(e.Right = "right", e.Left = "left", e))(Nl || {}), Vl = ((e)=>(e.RadialAxial = "radialAxial", e.World = "world", e))(Vl || {});
    const Ht = 1e-10, et = (e, t)=>[
            e[0] + t[0],
            e[1] + t[1],
            e[2] + t[2]
        ], Rn = (e, t)=>[
            e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]
        ], Oe = (e, t)=>[
            e[0] * t,
            e[1] * t,
            e[2] * t
        ], Mn = (e, t)=>e[0] * t[0] + e[1] * t[1] + e[2] * t[2], sa = (e, t)=>[
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]
        ], vr = (e)=>Math.hypot(e[0], e[1], e[2]), Rr = (e, t)=>{
        const r = vr(e);
        if (!(r > Ht)) throw new Error(`${t} must be non-zero`);
        return Oe(e, 1 / r);
    };
    function Mb(e) {
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
        ], r = Rr(e, "axisDirection");
        return t.map((n)=>({
                candidate: n,
                alignment: Math.abs(Mn(r, n))
            })).sort((n, i)=>n.alignment - i.alignment)[0].candidate;
    }
    const sd = (e, t)=>[
            e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3],
            e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7],
            e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11]
        ];
    function Kl(e) {
        const t = [], r = [];
        if (e.profile || t.push("HelicalSweepFeat: profile is required"), (!(e.radius > Ht) || !Number.isFinite(e.radius)) && t.push("HelicalSweepFeat: radius must be positive"), (!(Math.abs(e.pitch) > Ht) || !Number.isFinite(e.pitch)) && t.push("HelicalSweepFeat: pitch must be non-zero"), (!(e.turns > 0) || !Number.isFinite(e.turns)) && t.push("HelicalSweepFeat: turns must be positive"), vr(e.axisDirection) <= Ht && t.push("HelicalSweepFeat: axisDirection must be non-zero"), e.referenceDirection !== void 0 && (vr(e.referenceDirection) <= Ht && t.push("HelicalSweepFeat: referenceDirection must be non-zero"), vr(sa(e.axisDirection, e.referenceDirection)) <= Ht && t.push("HelicalSweepFeat: referenceDirection is parallel to helix axis")), (e.maxDegree ?? 5) < 2 && t.push("HelicalSweepFeat: maxDegree must be at least 2"), (!(e.maxSegments ?? 200) || (e.maxSegments ?? 200) < 1) && t.push("HelicalSweepFeat: maxSegments must be positive"), e.profileMode === "radialAxial") {
            const n = e.profile.loops.flatMap((i)=>i.points);
            n.length > 0 && Math.max(...n.map((o)=>o.y)) - Math.min(...n.map((o)=>o.y)) >= Math.abs(e.pitch) && r.push("Adjacent helical turns may overlap");
        }
        return e.orientationDirection !== void 0 && vr(e.orientationDirection) <= Ht && t.push("HelicalSweepFeat: orientationDirection must be non-zero"), {
            valid: t.length === 0,
            errors: t,
            warnings: r
        };
    }
    class ss {
        constructor(t){
            this.params = t, this.axisOrigin = [
                ...t.axisOrigin
            ], this.axisDirection = Rr(t.axisDirection, "axisDirection");
            const r = t.referenceDirection ?? Mb(this.axisDirection), n = Rn(r, Oe(this.axisDirection, Mn(r, this.axisDirection)));
            this.radial0 = Rr(n, "referenceDirection"), this.circumferential0 = sa(this.axisDirection, this.radial0), this.handedness = t.handedness === "left" ? -1 : 1, this.totalSweep = Math.PI * 2 * t.turns;
        }
        params;
        axisOrigin;
        axisDirection;
        radial0;
        circumferential0;
        handedness;
        totalSweep;
        pointAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t, n = et(Oe(this.radial0, Math.cos(r)), Oe(this.circumferential0, Math.sin(r)));
            return et(et(this.axisOrigin, Oe(n, this.params.radius)), Oe(this.axisDirection, this.params.pitch * t / (Math.PI * 2)));
        }
        radialAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t;
            return et(Oe(this.radial0, Math.cos(r)), Oe(this.circumferential0, Math.sin(r)));
        }
        circumferentialAt(t) {
            const r = (this.params.startAngle ?? 0) + this.handedness * t;
            return et(Oe(this.radial0, -Math.sin(r)), Oe(this.circumferential0, Math.cos(r)));
        }
        tangentAt(t) {
            return Rr(et(Oe(this.circumferentialAt(t), this.handedness * this.params.radius), Oe(this.axisDirection, this.params.pitch / (Math.PI * 2))), "helix tangent");
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
            ], d = et(Rn(this.axisOrigin, [
                a[0] * this.axisOrigin[0] + a[1] * this.axisOrigin[1] + a[2] * this.axisOrigin[2],
                a[3] * this.axisOrigin[0] + a[4] * this.axisOrigin[1] + a[5] * this.axisOrigin[2],
                a[6] * this.axisOrigin[0] + a[7] * this.axisOrigin[1] + a[8] * this.axisOrigin[2]
            ]), Oe(this.axisDirection, this.params.pitch * t / (Math.PI * 2)));
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
    function Ll(e, t, r, n, i, o) {
        if (r === "radialAxial") return {
            x: t.x,
            y: t.y
        };
        const s = [
            e.origin[0] + e.uAxis[0] * t.x + e.vAxis[0] * t.y,
            e.origin[1] + e.uAxis[1] * t.x + e.vAxis[1] * t.y,
            e.origin[2] + e.uAxis[2] * t.x + e.vAxis[2] * t.y
        ], a = Rn(s, n);
        return {
            x: Mn(a, i),
            y: Mn(a, o)
        };
    }
    function Cb(e, t, r, n, i, o) {
        const s = (a)=>Ll(e, a, r, n, i, o);
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
    function as(e, t, r) {
        const n = e.radialAt(r), i = e.tangentAt(r), o = Rr(sa(i, n), "helical profile binormal"), s = et(et(e.pointAt(r), Oe(n, t.profileRadialOffset ?? 0)), Oe(i, t.profileAxialOffset ?? 0)), a = Oe(o, -1), d = t.profile.loops.map((c)=>({
                ...c,
                points: c.points.map((l)=>Ll(t.profile, l, t.profileMode ?? "radialAxial", s, n, a)),
                segments: c.segments?.map((l)=>Cb(t.profile, l, t.profileMode ?? "radialAxial", s, n, a))
            }));
        return {
            ...t.profile,
            origin: s,
            normal: Oe(i, -1),
            uAxis: n,
            vAxis: a,
            loops: d
        };
    }
    class Hl {
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
                i = eo(this.oc, n, 32), o = wt(this.oc, t[0]), s = ql(this.oc, "BRepOffsetAPI_MakePipeShell", [
                    i.wire
                ]), r.orientationDirection && $b(this.oc, s, r.orientationDirection);
                const c = this.oc.BRepBuilderAPI_TransitionMode?.BRepBuilderAPI_Transformed;
                if (c !== void 0 && s.SetTransitionMode?.(c), r.tolerance3d !== void 0 && s.SetTolerance?.(r.tolerance3d, r.boundaryTolerance ?? r.tolerance3d, r.angularTolerance ?? r.tolerance3d), s.SetMaxDegree?.(r.maxDegree ?? 5), s.SetMaxSegments?.(r.maxSegments ?? 200), a = new this.oc.TopExp_Explorer_2(i.wire, this.oc.TopAbs_ShapeEnum.TopAbs_VERTEX, this.oc.TopAbs_ShapeEnum.TopAbs_SHAPE), !a.More()) throw new Error("OCC PipeShell spine has no start vertex");
                if (d = this.oc.TopoDS.Vertex_1(a.Current()), typeof s.Add_2 != "function") throw new Error("OCC PipeShell located profile Add binding is unavailable");
                if (s.Add_2(o.outerWire, d, !1, !0), s.Build?.(), typeof s.IsDone == "function" && !s.IsDone()) throw new Error("OCC single-section PipeShell failed to build a valid result");
                return r.makeSolid !== !1 && s.MakeSolid?.(), s.Shape();
            } finally{
                d?.delete?.(), a?.delete?.(), s?.delete?.(), o?.faceMaker.delete?.(), o?.wireBuilder.delete?.();
                for (const c of o?.innerWireBuilders ?? [])c.delete?.();
                i?.builder.delete?.();
                for (const c of i?.resources ?? [])c.delete?.();
            }
        }
    }
    function $b(e, t, r) {
        const n = ql(e, "gp_Dir", r);
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
    function ql(e, t, r) {
        const n = e, i = Object.keys(n).filter((s)=>s === t || s.startsWith(`${t}_`)).sort((s, a)=>+(a !== t) - +(s !== t));
        let o;
        for (const s of i)try {
            return new n[s](...r);
        } catch (a) {
            o = a;
        }
        throw o instanceof Error ? o : new Error(`OCC binding ${t} is unavailable`);
    }
    class Db {
        constructor(t, r = new Hl(t)){
            this.oc = t, this.backend = r;
        }
        oc;
        backend;
        result = null;
        geometry = null;
        activeParams = null;
        setParams(t) {
            this.result = null, this.activeParams = t, this.geometry = new ss(t);
        }
        build(t) {
            const r = Date.now(), n = Kl(t);
            if (!n.valid) return this.result = {
                success: !1,
                warnings: n.warnings,
                errors: n.errors
            };
            try {
                const i = this.geometry && this.geometry.params === t ? this.geometry : new ss(t);
                this.geometry = i, this.activeParams = t;
                const o = Date.now(), s = [
                    as(i, t, 0)
                ], a = Date.now() - o, d = [
                    ...n.warnings
                ], c = Date.now(), l = this.backend.build(s, t), f = Date.now() - c;
                return this.result = {
                    success: !0,
                    shape: l,
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
            }, (n, i)=>as(this.geometry, r, this.geometry.totalSweep * i / (Math.max(2, t) - 1)));
        }
        validateFrame(t = 20) {
            if (!this.geometry) throw new Error("HelicalSweepFeat has no parameters");
            let r = 0, n = 0;
            for(let i = 0; i <= t; i += 1){
                const o = this.geometry.totalSweep * i / t, s = sd(this.geometry.getRigidHelicalTransform(o), this.geometry.pointAt(0)), a = Rr(Rn(sd(this.geometry.getRigidHelicalTransform(o), et(this.geometry.pointAt(0), this.geometry.radialAt(0))), this.geometry.pointAt(o)), "transformed radial");
                r = Math.max(r, vr(Rn(s, this.geometry.pointAt(o)))), n = Math.max(n, 1 - Math.min(1, Math.max(-1, Mn(a, this.geometry.radialAt(o)))));
            }
            return {
                valid: r <= 1e-6 && n <= 1e-6,
                maxCenterError: r,
                maxAngularError: n,
                samples: t
            };
        }
    }
    var Tb = {};
    function jr(e, t, r) {
        const o = new Is().extrude(e, t, r, "HeadlessSpike").tessellation;
        return {
            mesh: o,
            transfers: Ue(o)
        };
    }
    function aa(e, t, r, n, i) {
        const a = new Is().revolve(e, t, r, n, i, "HeadlessRevolve").tessellation;
        return {
            mesh: a,
            transfers: Ue(a)
        };
    }
    function zr() {
        return typeof process > "u" ? !1 : Tb.OCC_BRIDGE_HEADLESS_SPIKE === "1";
    }
    const Bb = jr, jb = aa;
    function ei(e, t) {
        return {
            protocolVersion: Kr,
            requestId: e.requestId ?? "invalid",
            bodyId: e.bodyId ?? "unknown",
            featureId: e.featureId ?? "unknown",
            revision: e.revision ?? 0,
            operation: e.operation ?? "ping",
            ok: !1,
            error: t
        };
    }
    async function da(e) {
        const t = Ns(e);
        if (t) return {
            response: ei(e, t),
            transfers: []
        };
        if (Date.now() > e.deadlineMs) return {
            response: ei(e, {
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
                if (zr()) ({ mesh: r, transfers: n } = aa(o.profile, o.axisOrigin, o.axisDirection, o.angle, e.featureId));
                else {
                    const { revolveProfileWithOcc: s } = await cs(async ()=>{
                        const { revolveProfileWithOcc: a } = await Promise.resolve().then(()=>Wg);
                        return {
                            revolveProfileWithOcc: a
                        };
                    }, []);
                    r = s(await $t(), o.profile, o.axisOrigin, o.axisDirection, o.angle), n = Ue(r);
                }
            } else {
                const o = e.payload;
                if (!(o.depth > 0) || o.profile.loops.length === 0) return {
                    response: ei(e, {
                        code: "invalid-profile",
                        message: "Invalid extrude profile/depth",
                        operation: e.operation,
                        recoverable: !0
                    }),
                    transfers: []
                };
                zr() ? { mesh: r, transfers: n } = jr(o.profile, o.depth, e.featureId) : (r = oa(await $t(), o.profile, o.depth), n = Ue(r));
            }
            return {
                response: {
                    protocolVersion: Kr,
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
                response: ei(e, {
                    code: i,
                    message: n,
                    operation: e.operation,
                    recoverable: !0
                }),
                transfers: []
            };
        }
    }
    async function Ul(e, t, r) {
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
        }, { response: i } = await da(n);
        if (i.ok === !1) throw new Error(i.error.message);
        if (i.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: i.result.mesh,
            transfers: i.transfers
        };
    }
    const zb = Ul;
    function ca(e, t, r, n) {
        if (n.length === 0) throw new Error("pocketProfilesWithOcc requires at least one cut");
        const i = ot(e, t, r), o = [], s = [];
        try {
            let a = i.shape, d = null;
            for (const c of n){
                const l = ot(e, c.profile, c.depth, {
                    inward: !0
                });
                o.push(l);
                const f = new e.BRepAlgoAPI_Cut_3(a, l.shape);
                if (s.push(f), f.Build(), f.IsDone?.() === !1) throw new Error("OCC BRepAlgoAPI_Cut failed");
                d = f.Shape(), a = d;
            }
            return dt(e, d);
        } finally{
            for (const a of s)a.delete?.();
            for (const a of o)qe(a);
            qe(i);
        }
    }
    function Nb(e, t, r, n, i) {
        return ca(e, t, r, [
            {
                profile: n,
                depth: i
            }
        ]);
    }
    function Wl(e, t, r, n) {
        jr(t, r, n);
        const i = e.positions.slice(0, Math.max(9, Math.floor(e.positions.length * .85))), o = {
            ...e,
            positions: i,
            subMeshes: e.subMeshes.map((s)=>({
                    ...s
                }))
        };
        return {
            mesh: o,
            transfers: Ue(o)
        };
    }
    function ds(e, t, r) {
        let n = e;
        for(let i = 0; i < t.length; i++){
            const o = t[i];
            n = Wl(n, o.profile, o.depth, `${r}-cut-${i}`).mesh;
        }
        return {
            mesh: n,
            transfers: Ue(n)
        };
    }
    async function Gl(e, t, r, n) {
        if (r.length === 0) throw new Error("pocketProfilesHeadless requires at least one cut");
        if (zr()) {
            const i = jr(e, t, `${n}-base`);
            return ds(i.mesh, r, n);
        }
        try {
            const i = await $t(), o = ca(i, e, t, r);
            return {
                mesh: o,
                transfers: Ue(o)
            };
        } catch (i) {
            console.warn("[occ-bridge] OCC pocket failed; using MeshBRepBackend fallback", i);
            const o = jr(e, t, `${n}-base`), s = ds(o.mesh, r, n), a = i instanceof Error ? i.message : String(i);
            return {
                ...s,
                fallbackWarning: `OCC kernel failed (${a}); MeshBRep fallback used`
            };
        }
    }
    async function Vb(e, t, r, n, i) {
        return Gl(e, t, [
            {
                profile: r,
                depth: n
            }
        ], i);
    }
    async function Kb(e, t, r, n) {
        if (zr()) return Wl(e, t, r, n);
        throw new Error("pocketRectangleHeadless requires pad profile — use pocketProfileHeadless(baseProfile, baseDepth, …)");
    }
    async function Yl(e, t, r, n, i) {
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
        }, { response: s } = await da(o);
        if (s.ok === !1) throw new Error(s.error.message);
        if (s.result.type !== "mesh") throw new Error("Unexpected response type");
        return {
            mesh: s.result.mesh,
            transfers: s.transfers
        };
    }
    const Lb = Yl;
    function Jl(e, t, r, n) {
        const s = new Is().boolean(e, t, r, n, `Boolean${r}`).tessellation;
        return {
            mesh: s,
            transfers: Ue(s)
        };
    }
    async function Hb(e, t, r, n) {
        if (zr()) return Jl(e, t, r, n);
        throw new Error("OCC boolean on MeshBRep solids is not supported; use OccBodyReplayExecutor / protocol v2");
    }
    const ad = 1e-9;
    class Ye extends Error {
        constructor(t){
            super(t), this.name = "UgFeatureSnapshotParseError";
        }
    }
    function _e(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function xe(e) {
        return typeof e == "string" ? e : null;
    }
    function la(e) {
        return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function Ae(e) {
        return !Array.isArray(e) || e.length !== 3 || e.some((t)=>typeof t != "number" || !Number.isFinite(t)) ? null : [
            e[0],
            e[1],
            e[2]
        ];
    }
    function tt(e) {
        if (typeof e == "number") return Number.isFinite(e) ? e : null;
        if (typeof e == "string" && e.trim() !== "") {
            const t = Number(e);
            return Number.isFinite(t) ? t : null;
        }
        return null;
    }
    function qb(e) {
        const t = _e(e) ? e : {}, r = _e(t.limits) ? t.limits : {}, n = _e(r.start) ? r.start : {}, i = _e(r.end) ? r.end : {}, o = Array.isArray(t.owned_exprs) ? t.owned_exprs.filter(_e) : [], s = (...c)=>{
            for (const l of c){
                const f = tt(t[l]);
                if (f !== null) return f;
                const u = o.find((m)=>{
                    const I = xe(m.desc)?.toLowerCase() ?? "", w = xe(m.expr_name)?.toLowerCase() ?? "";
                    return I.includes(l.toLowerCase()) || w === l.toLowerCase();
                }), h = u ? tt(u.value) : null;
                if (h !== null) return h;
            }
            return null;
        }, a = fi(t.section_ids, "parameters.section_ids"), d = _e(t) && Array.isArray(t.section_data) ? t.section_data.flatMap((c)=>!_e(c) || !Array.isArray(c.rules) ? [] : c.rules.flatMap((l)=>!_e(l) || !Array.isArray(l.curves) ? [] : l.curves.flatMap((f)=>!_e(f) || !Number.isInteger(f.owner_feature_id) ? [] : [
                        f.owner_feature_id
                    ]))) : [];
        return {
            sectionIds: [
                ...new Set([
                    ...a,
                    ...d
                ])
            ],
            targetFeatureIds: fi(t.target_feature_ids, "parameters.target_feature_ids"),
            toolFeatureIds: fi(t.tool_feature_ids, "parameters.tool_feature_ids"),
            booleanOp: xe(t.boolean_op ?? t.boolean_operation ?? t.boolean_mode ?? t.operation),
            direction: Ae(t.direction),
            axisDirection: Ae(t.axis_dir),
            startAngleDegrees: tt(t.start_angle_deg),
            endAngleDegrees: tt(t.end_angle_deg),
            startLimitValue: tt(n.value),
            endLimitValue: tt(i.value),
            symmetric: r.symmetric === !0,
            origin: Ae(t.origin),
            axisOrigin: Ae(t.axis_origin),
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
    function Ub(e) {
        const t = _e(e) ? e : {}, r = _e(t.local_plane_snapshot) ? t.local_plane_snapshot : {}, n = Ae(r.plane_origin) ?? Ae(t.origin), i = Ae(r.plane_normal) ?? Ae(t.normal) ?? Ae(t.z_axis), o = Ae(r.plane_x_axis) ?? Ae(t.x_axis), s = Ae(r.plane_y_axis) ?? Ae(t.y_axis);
        return !n || !i || !o || !s ? null : {
            origin: n,
            normal: i,
            xAxis: o,
            yAxis: s
        };
    }
    function en(e, t, r = !1) {
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
    function ti(e, t) {
        if (!Array.isArray(e) || e.length < 9) return t;
        const r = e.slice(0, 9).map((n)=>Number(n));
        return r.some((n)=>!Number.isFinite(n)) ? t : [
            r[0] * t[0] + r[3] * t[1] + r[6] * t[2],
            r[1] * t[0] + r[4] * t[1] + r[7] * t[2],
            r[2] * t[0] + r[5] * t[1] + r[8] * t[2]
        ];
    }
    function Wb(e) {
        if (!Array.isArray(e) || e.length < 9) return 1;
        const t = e.slice(0, 9).map((r)=>Number(r));
        return t.some((r)=>!Number.isFinite(r)) ? 1 : t[0] * t[4] - t[1] * t[3];
    }
    function Gb(e, t) {
        if (!_e(e) || !Array.isArray(e.curves)) return [];
        const r = e.curves.some((i)=>_e(i) && xe(i.type)?.toUpperCase() === "ARC" && Array.isArray(i.matrix)), n = [];
        for(let i = 0; i < e.curves.length; i += 1){
            const o = e.curves[i];
            if (!_e(o)) continue;
            const s = xe(o.type)?.toUpperCase(), d = `ug:curve:${la(o.nx_tag) ?? i}`;
            if (s === "POINT") {
                const c = Ae(o.point);
                c && n.push({
                    kind: "point",
                    id: d,
                    point: c,
                    point2d: en(c, t, r)
                });
                continue;
            }
            if (s === "LINE") {
                if (o.is_reference === !0) continue;
                const c = Ae(o.start), l = Ae(o.end);
                if (c && l) {
                    const f = en(c, t, r), u = en(l, t, r), h = Math.hypot(c[0] - l[0], c[1] - l[1], c[2] - l[2]), m = Math.hypot(f[0] - u[0], f[1] - u[1]);
                    h > ad && m > ad && n.push({
                        kind: "line",
                        id: d,
                        start: c,
                        end: l,
                        start2d: f,
                        end2d: u
                    });
                }
                continue;
            }
            if (s === "CIRCLE") {
                if (o.is_reference === !0) continue;
                const c = Ae(o.center), l = tt(o.radius);
                if (c && l !== null && l > 0) {
                    const f = ti(o.matrix, c);
                    n.push({
                        kind: "circle",
                        id: d,
                        center: f,
                        sourceCenter: c,
                        center2d: en(f, t, r),
                        radius: l
                    });
                }
                continue;
            }
            if (s === "ARC") {
                if (o.is_reference === !0) continue;
                const c = Ae(o.center), l = tt(o.radius), f = tt(o.start_angle_rad), u = tt(o.end_angle_rad);
                if (c && l !== null && l > 0 && f !== null && u !== null) {
                    const h = ti(o.matrix, c), m = ti(o.matrix, [
                        Math.cos(f) * l,
                        Math.sin(f) * l,
                        0
                    ]), I = ti(o.matrix, [
                        Math.cos(u) * l,
                        Math.sin(u) * l,
                        0
                    ]), w = Wb(o.matrix) < 0, y = w ? I : m, x = w ? m : I, b = en(h, t, r);
                    let g = Math.atan2(y[1], y[0]);
                    g < 0 && (g += Math.PI * 2);
                    let S = u - f;
                    for(; S <= 0;)S += Math.PI * 2;
                    const F = [
                        b[0] + y[0],
                        b[1] + y[1]
                    ], R = [
                        b[0] + x[0],
                        b[1] + x[1]
                    ];
                    n.push({
                        kind: "arc",
                        id: d,
                        center: h,
                        sourceCenter: c,
                        center2d: b,
                        start2d: F,
                        end2d: R,
                        radius: l,
                        startAngle: g,
                        endAngle: g + S,
                        sourceStartAngle: f,
                        sourceEndAngle: u,
                        clockwise: !1
                    });
                }
            }
        }
        return n;
    }
    function fi(e, t, r) {
        if (e === void 0) return [];
        if (!Array.isArray(e) || e.some((n)=>!Number.isInteger(n))) {
            const n = r === void 0 ? "" : ` for feature ${r}`;
            throw new Ye(`${t} must be an integer array${n}`);
        }
        return e;
    }
    function Yb(e) {
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
    function Jb(e, t) {
        if (!_e(e)) throw new Ye(`references must contain objects for feature ${t}`);
        const r = la(e.owner_feature_id);
        return {
            ownerFeatureId: r !== null && Number.isInteger(r) ? r : null,
            kind: xe(e.kind) ?? "",
            role: xe(e.role) ?? "",
            resultRole: xe(e.result_role) ?? "",
            semantic: xe(e.semantic) ?? "",
            confidence: xe(e.confidence) ?? "",
            required: e.required === !0,
            localId: xe(e.local_id) ?? "",
            source: xe(e.source) ?? "",
            topologyName: xe(e.topology_name) ?? ""
        };
    }
    function Zb(e) {
        const t = _e(e.meta) ? e.meta : {};
        return {
            schemaVersion: xe(e.schema_version),
            exportTool: xe(e.export_tool),
            partName: xe(t.part_name),
            sourceFile: xe(t.source_file),
            nxVersion: xe(t.nx_version),
            unit: xe(t.unit)
        };
    }
    function ua(e) {
        if (!_e(e)) throw new Ye("UG snapshot must be a JSON object");
        if (e.export_tool !== void 0 && e.export_tool !== "NGFeatureList/1.0") throw new Ye(`unsupported UG export tool: ${String(e.export_tool)}`);
        if (!Array.isArray(e.features)) throw new Ye("UG snapshot is missing a features array");
        const t = new Set, n = e.features.map((d, c)=>{
            if (!_e(d)) throw new Ye(`features[${c}] must be an object`);
            const l = d.id;
            if (!Number.isInteger(l)) throw new Ye(`features[${c}].id must be an integer`);
            if (t.has(l)) throw new Ye(`duplicate UG feature id: ${String(l)}`);
            t.add(l);
            const f = xe(d.type);
            if (!f) throw new Ye(`feature ${String(l)} is missing type`);
            const u = Yb(f), h = f.toUpperCase() === "SKETCH" || f.toUpperCase() === "DATUM_CSYS" || f.toUpperCase() === "TEXT" ? Ub(d.parameters) : null;
            return {
                id: l,
                nxTag: la(d._nx_tag_debug),
                name: xe(d.name) ?? `${f}(${String(l)})`,
                sourceType: f,
                ...u,
                isInternal: d.is_internal === !0,
                suppressed: d.suppressed === !0,
                parentIds: fi(d.parent_ids, "parent_ids", l),
                references: Array.isArray(d.references) ? d.references.map((m)=>Jb(m, l)) : [],
                parameterSummary: qb(d.parameters),
                parameters: _e(d.parameters) ? structuredClone(d.parameters) : {},
                sketchPlaneFrame: h,
                sketchCurves: f.toUpperCase() === "SKETCH" ? Gb(d.parameters, h) : [],
                seriesIndex: c
            };
        }), i = new Set(n.map((d)=>d.id)), o = [
            ...new Set(n.flatMap((d)=>d.parentIds.filter((c)=>!i.has(c))))
        ].sort((d, c)=>d - c), s = [
            ...new Set(n.filter((d)=>d.normalizedType === "unknown").map((d)=>d.sourceType))
        ].sort(), a = [];
        return s.length > 0 && a.push(`unknown UG feature types: ${s.join(", ")}`), o.length > 0 && a.push(`missing parent feature ids: ${o.join(", ")}`), {
            source: Zb(e),
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
    function Zl(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (r) {
            throw new Ye(`UG snapshot JSON parse failed: ${r instanceof Error ? r.message : String(r)}`);
        }
        return ua(t);
    }
    class Xl {
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
            return r ? structuredClone(r) : new Rt(t.sketchId, `UG sketch profile not found: ${t.sketchId}`);
        }
    }
    const Xb = "ug:feature:";
    function te(e) {
        return `${Xb}${e}`;
    }
    function Qb(e, t) {
        const r = e.parentIds.map((o)=>t.get(o) ?? te(o)), n = jn(e.parameterSummary.booleanOp), i = n === "SUBTRACT" || n === "UNITE" ? e.parameterSummary.targetFeatureIds.map((o)=>t.get(o) ?? te(o)) : [];
        return [
            ...new Set([
                ...r,
                ...i
            ])
        ];
    }
    function fa(e) {
        return e.required && e.confidence.toLowerCase() === "exact";
    }
    function e0(e) {
        const t = e.trim().toLowerCase();
        return t === "" || t === "sketch.support" || t === "support";
    }
    function dd(e) {
        if (!fa(e) || e.ownerFeatureId === null) return null;
        const t = e.kind.toLowerCase(), r = e.resultRole.trim(), n = e.topologyName.trim() || r || e.role.trim();
        return !t.includes("face") && !r.toLowerCase().includes("face") && !e.topologyName.trim() || e0(n) ? null : {
            featureId: te(e.ownerFeatureId),
            role: n
        };
    }
    function t0(e) {
        return e.references.flatMap((t)=>{
            if (!fa(t) || t.ownerFeatureId === null) return [];
            if (!`${t.kind} ${t.resultRole} ${t.role} ${t.topologyName}`.toLowerCase().includes("edge")) return [];
            const n = t.topologyName.trim() || t.resultRole.trim() || t.role.trim();
            return n ? [
                {
                    featureId: te(t.ownerFeatureId),
                    role: n
                }
            ] : [];
        });
    }
    function r0(e) {
        const t = Q(e.parameters), r = Array.isArray(t?.chainsets) ? t.chainsets : [], n = [];
        for (const i of r){
            const o = Q(i)?.edges;
            if (Array.isArray(o)) for (const s of o){
                const a = Q(s), d = a?.owner_feature_id, c = typeof a?.topology_name == "string" ? a.topology_name : "", l = Array.isArray(a?.midpoint) ? a.midpoint : null;
                if (!Number.isInteger(d) || !c) continue;
                const f = l && l.length === 3 && l.every((m)=>typeof m == "number" && Number.isFinite(m)) ? l : void 0, u = Array.isArray(a?.sample_points) ? a.sample_points : [], h = u.length >= 2 && u.every((m)=>Array.isArray(m) && m.length === 3 && m.every((I)=>typeof I == "number" && Number.isFinite(I))) ? u.map((m)=>[
                        ...m
                    ]) : void 0;
                n.push({
                    featureId: te(d),
                    role: c,
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
    function n0(e) {
        const t = e.parameters.input_edges;
        return Array.isArray(t) ? t.flatMap((r, n)=>{
            const i = Q(r), o = Array.isArray(i?.midpoint) ? i.midpoint : null, s = o && o.length === 3 && o.every((c)=>typeof c == "number" && Number.isFinite(c)) ? o : void 0, a = Array.isArray(i?.sample_points) ? i.sample_points : [], d = a.length >= 2 && a.every((c)=>Array.isArray(c) && c.length === 3 && c.every((l)=>typeof l == "number" && Number.isFinite(l))) ? a.map((c)=>[
                    ...c
                ]) : void 0;
            return [
                {
                    featureId: te(Ql(e) ?? e.parentIds.at(-1) ?? e.id),
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
    function Ql(e) {
        const t = e.parameterSummary.targetFeatureIds[0];
        if (t !== void 0) return t;
        const n = Q(e.parameters)?.target_body_feature_id;
        return typeof n == "number" && Number.isInteger(n) ? n : e.parentIds.at(-1);
    }
    function i0(e, t) {
        return [
            ...e.parentIds
        ].map((n)=>t.get(n)).filter((n)=>n !== void 0 && ji(n)).at(-1)?.id ?? Ql(e);
    }
    function o0(e, t) {
        const r = Array.isArray(e.where_used) ? e.where_used : [];
        return r.length === 0 ? !0 : r.some((n)=>{
            const i = Q(n);
            return t.nxTag !== null && i?.nx_tag === t.nxTag || typeof i?.name == "string" && i.name === t.name;
        });
    }
    function eu(e, t) {
        return (Array.isArray(e.parameters.curves) ? e.parameters.curves : []).flatMap((n, i)=>{
            const o = Q(n);
            return o?.type !== "POINT" || o.is_reference === !0 || !Array.isArray(o.point) || !o0(o, t) ? [] : [
                `ug:curve:${typeof o.nx_tag == "number" && Number.isFinite(o.nx_tag) ? o.nx_tag : i}`
            ];
        });
    }
    function s0(e) {
        return e.sketchCurves.some((t)=>t.kind === "point");
    }
    function tu(e, t) {
        const r = new Set(e.parentIds);
        return [
            ...t.values()
        ].filter((i)=>i.seriesIndex < e.seriesIndex).filter((i)=>i.normalizedType === "sketch" && s0(i)).map((i)=>({
                candidate: i,
                pointIds: eu(i, e),
                direct: r.has(i.id)
            })).filter((i)=>i.pointIds.length > 0).sort((i, o)=>i.direct !== o.direct ? i.direct ? -1 : 1 : i.pointIds.length !== o.pointIds.length ? o.pointIds.length - i.pointIds.length : o.candidate.seriesIndex - i.candidate.seriesIndex)[0]?.candidate ?? null;
    }
    function a0(e, t, r) {
        const n = tu(e, t);
        return n ? r.get(n.id) ?? te(n.id) : null;
    }
    function d0(e, t, r) {
        const n = e.parameterSummary.targetFeatureIds[0];
        if (n !== void 0) return r.get(n) ?? te(n);
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
        return i ? r.get(i.id) ?? te(i.id) : null;
    }
    function c0(e, t) {
        const r = e.parentIds.map((i)=>t.get(i)?.name).filter((i)=>typeof i == "string"), n = new Set([
            e.name,
            ...r
        ]);
        return [
            ...t.values()
        ].filter((i)=>i.seriesIndex < e.seriesIndex).filter((i)=>i.normalizedType === "hole" && !i.isInternal).filter((i)=>n.has(i.name)).sort((i, o)=>o.seriesIndex - i.seriesIndex)[0] ?? null;
    }
    function l0(e, t, r) {
        const n = e.parentIds.map((f)=>t.get(f)).find((f)=>f?.normalizedType === "hole"), i = a0(n ?? e, t, r);
        if (!i) return null;
        const o = [
            ...t.values()
        ].find((f)=>(r.get(f.id) ?? te(f.id)) === i)?.id, s = o === void 0 ? void 0 : t.get(o);
        if (!s) return null;
        const a = s.sketchCurves.find((f)=>f.kind === "point"), d = s.sketchPlaneFrame, c = a?.point ?? d?.origin, l = d?.normal;
        return !c || !l || Math.hypot(...l) <= 1e-9 ? null : {
            origin: [
                ...c
            ],
            normal: [
                ...l
            ],
            sketchId: i
        };
    }
    function ru(e, t, r) {
        const n = l0(e, r, t), i = e.parameterSummary.majorDiameterValue ?? null, o = e.parameterSummary.minorDiameterValue ?? null, s = e.parameterSummary.pitchValue ?? null, a = e.parameterSummary.lengthValue ?? null;
        if (!n || i === null || o === null || s === null || a === null) return null;
        const d = i / 2, c = (i - o) / 2;
        if (!(d > 0) || !(s > 0) || !(a > 0) || !(c > 0)) return null;
        const l = `${te(e.id)}:derived-helix`, f = c0(e, r), u = f ? t.get(f.id) ?? te(f.id) : e.parentIds.at(-1) === void 0 ? null : te(e.parentIds.at(-1));
        if (!u) return null;
        try {
            const h = qi({
                id: l,
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
            }), m = Ps({
                id: te(e.id),
                name: e.name,
                dependencyIds: [
                    u,
                    l
                ],
                helixFeatureId: l,
                mode: "cut",
                profileKind: "metric_triangle",
                profileSketchId: null,
                majorRadius: d,
                pitch: s,
                depth: c,
                suppressed: e.suppressed
            });
            return {
                helix: h,
                thread: m
            };
        } catch  {
            return null;
        }
    }
    function In(e, ...t) {
        const r = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const n of r){
            const i = Q(n), o = typeof i?.desc == "string" ? i.desc.toLowerCase() : "";
            if (t.some((s)=>o.includes(s.toLowerCase())) && typeof i?.value == "number" && Number.isFinite(i.value)) return i.value;
        }
        return null;
    }
    function cd(e) {
        return e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    }
    function u0(e, ...t) {
        const r = new Set(t.map(cd)), n = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const i of n){
            const o = Q(i), s = typeof o?.desc == "string" ? cd(o.desc) : "";
            if (r.has(s) && typeof o?.value == "number" && Number.isFinite(o.value)) return o.value;
        }
        return null;
    }
    function ut(e, t, r = []) {
        const n = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs : [];
        for (const i of t){
            const o = e.parameters[i], s = bn(o);
            if (s !== null) return s;
            if (typeof o != "string" || o.trim() === "") continue;
            const a = o.split("=")[0].trim().toLowerCase();
            for (const d of n){
                const c = Q(d), l = typeof c?.expr_name == "string" ? c.expr_name.trim().toLowerCase() : "", f = typeof c?.rhs == "string" ? c.rhs.trim().toLowerCase() : "";
                if (!(l !== a && f !== a) && typeof c?.value == "number" && Number.isFinite(c.value)) return c.value;
            }
        }
        return u0(e, ...r);
    }
    function bn(e) {
        if (typeof e == "number" && Number.isFinite(e)) return e;
        if (typeof e != "string") return null;
        const t = e.match(/(?:=|^)(-?\d+(?:\.\d+)?)/);
        return t ? Number(t[1]) : null;
    }
    function f0(e) {
        const t = Q(e.parameters), r = t?.origin, n = t?.normal;
        if (!Array.isArray(r) || !Array.isArray(n) || r.length !== 3 || n.length !== 3 || [
            ...r,
            ...n
        ].some((c)=>typeof c != "number" || !Number.isFinite(c))) return null;
        const i = He(n) ?? [
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
        ], s = He([
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
    function p0(e, t, r) {
        const n = e.parentIds.map((c)=>t.get(c)).find((c)=>c?.normalizedType === "helix");
        if (!n) return null;
        const i = In(e, "percentage", "path percentage"), o = In(e, "arclength", "arc length"), s = n.parameterSummary.heightValue ?? (n.parameterSummary.pitchValue !== null && n.parameterSummary.turnsValue !== null ? n.parameterSummary.pitchValue * n.parameterSummary.turnsValue : null), a = i ?? (o !== null && s && s > 0 ? o / s : 0), d = Math.max(0, Math.min(1, a > 1 ? a / 100 : a));
        return {
            pathFeatureId: r.get(n.id) ?? te(n.id),
            pathParameter: d
        };
    }
    function nu(e) {
        const t = e.references.find((i)=>fa(i) && i.role.toLowerCase() === "sketch.support");
        if (t?.ownerFeatureId !== null && t?.ownerFeatureId !== void 0) {
            if (t.kind.toLowerCase().includes("datum")) return {
                mode: "associative",
                reference: {
                    kind: "datum",
                    datumFeatureId: te(t.ownerFeatureId)
                }
            };
            const i = dd(t);
            if (i) return {
                mode: "associative",
                reference: {
                    kind: "face",
                    faceSelector: i
                }
            };
        }
        const r = e.references.map(dd).find((i)=>i !== null);
        if (r) return {
            mode: "associative",
            reference: {
                kind: "face",
                faceSelector: r
            }
        };
        const n = Q(e.parameters)?.placement_faces;
        if (Array.isArray(n)) {
            const i = n.find((s)=>{
                const a = Q(s);
                return Number.isInteger(a?.owner_feature_id) && typeof a?.topology_name == "string" && a.topology_name.trim().length > 0;
            }), o = Q(i);
            if (o && Number.isInteger(o.owner_feature_id)) {
                const s = typeof o.topology_name == "string" ? o.topology_name.trim() : "";
                if (s) {
                    const a = Array.isArray(o.plane_origin) && o.plane_origin.length === 3 && o.plane_origin.every((c)=>typeof c == "number" && Number.isFinite(c)) ? o.plane_origin : void 0, d = Array.isArray(o.normal) && o.normal.length === 3 && o.normal.every((c)=>typeof c == "number" && Number.isFinite(c)) ? o.normal : void 0;
                    return {
                        mode: "associative",
                        reference: {
                            kind: "face",
                            faceSelector: {
                                featureId: te(o.owner_feature_id),
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
    function h0(e) {
        const t = nu(e);
        if (t.mode !== "associative") return [];
        const r = t.reference;
        return r.kind === "datum" ? [
            r.datumFeatureId
        ] : r.kind === "face" ? [
            r.faceSelector.featureId
        ] : [];
    }
    function m0(e, t, r = new Map) {
        const n = e.normalizedType === "text" ? Xi(e, r) : e.normalizedType === "line" ? Zs(e, r) : e.sketchPlaneFrame ?? {
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
        }, i = nu(e), o = e.normalizedType === "text" && i.mode === "associative" && i.reference.kind === "face" && !(i.reference.faceSelector.hintPlaneOrigin && i.reference.faceSelector.hintNormal) ? {
            mode: "fixed"
        } : i;
        return or({
            id: `${te(e.id)}::placement-plane`,
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
    function Ee(e, t) {
        return e !== null && Number.isFinite(e) && e > 0 ? e : t;
    }
    function y0(e) {
        const t = Q(e.parameters);
        return Array.isArray(t?.guide_ids) ? t.guide_ids.filter((r)=>Number.isInteger(r)) : [];
    }
    function ld(e, t) {
        const r = Q(e.parameters)?.[t];
        return Array.isArray(r) && r.length === 3 && r.every((n)=>typeof n == "number" && Number.isFinite(n)) ? r : void 0;
    }
    function yr(e, t) {
        const r = Q(e.parameters)?.[t];
        return typeof r == "number" && Number.isFinite(r) ? r : void 0;
    }
    function Sr(e, t) {
        const r = Q(e.parameters)?.[t];
        return typeof r == "string" ? r : void 0;
    }
    function gr(e, t) {
        const r = Q(e.parameters)?.[t];
        return typeof r == "boolean" ? r : void 0;
    }
    function g0(e) {
        const t = Q(e.parameters);
        if (!t) return;
        const r = (...u)=>{
            const h = {};
            for (const m of u){
                const I = t[m];
                (typeof I == "number" || typeof I == "string" || typeof I == "boolean") && (h[m] = I);
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
            const m = bn(t[h]);
            m !== null && (s[u] = m);
        }
        const c = (u)=>{
            const h = t[`${u === "start" ? "threaded_start_chamfer" : "threaded_end_chamfer"}`], m = bn(t[`${u === "start" ? "threaded_start_chamfer_diam" : "threaded_end_chamfer_diam"}`]), I = bn(t[`${u === "start" ? "threaded_start_chamfer_angle" : "threaded_end_chamfer_angle"}`]), w = typeof h == "boolean" ? h : typeof h == "number" ? h !== 0 : typeof h == "string" ? [
                "1",
                "true",
                "yes",
                "on"
            ].includes(h.toLowerCase()) : void 0;
            if (h !== void 0 || m !== null || I !== null) return {
                ...w !== void 0 ? {
                    enabled: w
                } : {},
                ...m !== null ? {
                    offset: m
                } : {},
                ...I !== null ? {
                    angleDeg: I
                } : {}
            };
        }, l = c("start"), f = c("end");
        return l && (s.startChamfer = l), f && (s.endChamfer = f), Object.keys(n).length > 0 && (s.start = n), Object.keys(i).length > 0 && (s.mid = i), Object.keys(o).length > 0 && (s.end = o), Object.keys(s).length > 0 ? s : void 0;
    }
    function I0(e) {
        const t = Sr(e, "orientation_method")?.toLowerCase();
        return t?.includes("forced") || t?.includes("fixed") ? "fixed" : t?.includes("parallel") ? "parallel" : "frenet";
    }
    function b0(e) {
        const t = $s(e, 64).points;
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
    function ud(e) {
        const { startLimitValue: t, endLimitValue: r } = e.parameterSummary;
        return t !== null && r !== null ? Ee(Math.abs(t - r), 1) : 1;
    }
    function He(e) {
        if (!e) return null;
        const t = Math.hypot(e[0], e[1], e[2]);
        return t <= 1e-9 ? null : [
            e[0] / t,
            e[1] / t,
            e[2] / t
        ];
    }
    function Q(e) {
        return e && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function fd(e) {
        const t = Q(e.parameters), r = Q(t?.tool), n = Array.isArray(r?.objects) ? Q(r.objects[0]) : null, i = Array.isArray(n?.origin) ? n.origin : null, o = Array.isArray(n?.normal) ? n.normal : null;
        return !i || !o || i.length !== 3 || o.length !== 3 || [
            ...i,
            ...o
        ].some((s)=>typeof s != "number" || !Number.isFinite(s)) ? null : {
            origin: i,
            normal: o
        };
    }
    function yt(e) {
        if (!(!Array.isArray(e) || e.length !== 3 || e.some((t)=>typeof t != "number" || !Number.isFinite(t)))) return e;
    }
    function iu(e) {
        const t = e?.owner_feature_id, r = typeof e?.topology_name == "string" ? e.topology_name : "";
        if (!Number.isInteger(t) || !r) return null;
        const n = yt(e?.plane_origin) ?? yt(e?.origin) ?? yt(e?.center) ?? yt(e?.centroid) ?? yt(e?.midpoint), i = yt(e?.plane_normal) ?? yt(e?.normal);
        return {
            featureId: te(t),
            role: r,
            ...n ? {
                hintPlaneOrigin: n
            } : {},
            ...i ? {
                hintNormal: i
            } : {}
        };
    }
    function w0(e) {
        const t = Q(e.parameters);
        return (Array.isArray(t?.edge_sets) ? t.edge_sets : []).flatMap((n)=>{
            const i = Q(n);
            return (Array.isArray(i?.edges) ? i.edges : []).flatMap((s)=>{
                const a = Q(s);
                return (Array.isArray(a?.faces) ? a.faces : []).flatMap((c)=>{
                    const l = iu(Q(c));
                    return l ? [
                        l
                    ] : [];
                });
            });
        });
    }
    function ou(e) {
        const t = Q(e.parameters), r = Array.isArray(t?.section_data) ? t.section_data : [];
        for (const n of r){
            const i = Q(n), o = Array.isArray(i?.rules) ? i.rules : [];
            for (const s of o){
                const a = Q(s), d = Array.isArray(a?.faces) ? a.faces : [];
                for (const c of d){
                    const l = iu(Q(c));
                    if (l) return l;
                }
            }
        }
        return null;
    }
    function x0(e, t) {
        const { startLimitValue: r, endLimitValue: n, direction: i } = e.parameterSummary;
        if (r === null || n === null || r === n) return;
        const o = He(t ?? null) ?? [
            0,
            0,
            1
        ], s = He(i) ?? o, a = s[0] * o[0] + s[1] * o[1] + s[2] * o[2], d = Math.abs(a) <= 1e-9 ? 1 : a, c = r * d, l = n * d;
        return {
            startOffset: Math.min(c, l),
            endOffset: Math.max(c, l)
        };
    }
    function jn(e) {
        const t = e?.trim().toUpperCase() ?? "";
        return t === "CUT" || t === "REMOVE" || t === "SUBTRACTIVE" ? "SUBTRACT" : t === "ADD" || t === "CREATE" || t === "ADDITIVE" ? "CREATE" : t === "FUSE" || t === "UNION" ? "UNITE" : t;
    }
    function tn(e) {
        return jn(e) === "SUBTRACT" ? "cut" : "add";
    }
    function S0(e) {
        const t = jn(e);
        return t === "SUBTRACT" ? "cut" : t === "INTERSECT" ? "intersect" : "union";
    }
    function pd(e) {
        return jn(e) === "UNITE";
    }
    function k0(e) {
        const t = e.parameterSummary.startAngleDegrees ?? 0, r = e.parameterSummary.endAngleDegrees ?? 360;
        return Ee(Math.abs(r - t) * Math.PI / 180, Math.PI * 2);
    }
    function F0(e) {
        const t = (e.parameterSummary.startAngleDegrees ?? 0) * Math.PI / 180, r = (e.parameterSummary.endAngleDegrees ?? 360) * Math.PI / 180;
        return r > t ? {
            startAngle: t,
            endAngle: r
        } : {
            startAngle: r,
            endAngle: t + Math.PI * 2
        };
    }
    function v0(e) {
        const t = e.parameterSummary.axisDirection, r = He(t) ?? [
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
    function _0(e, t) {
        const r = He(e), n = He(t);
        return !r || !n ? !1 : Math.abs(Math.abs(r[0] * n[0] + r[1] * n[1] + r[2] * n[2]) - 1) <= 1e-6;
    }
    function E0(e) {
        const t = Q(e.parameters);
        return (Array.isArray(t?.daxes) ? t.daxes : []).flatMap((n)=>{
            const i = Q(n), o = yt(i?.origin), s = He(yt(i?.direction) ?? null);
            return o && s ? [
                {
                    origin: o,
                    direction: s
                }
            ] : [];
        });
    }
    function A0(e, t) {
        const r = v0(e), n = Q(e.parameters), i = Array.isArray(n?.guide_ids) ? n.guide_ids.filter((a)=>Number.isInteger(a)) : [], s = [
            ...e.parameterSummary.sectionIds.map((a)=>t.get(a)).find((a)=>a?.normalizedType === "sketch" || a?.normalizedType === "text")?.parentIds ?? [],
            ...e.parentIds,
            ...i
        ];
        for (const a of s){
            const d = t.get(a);
            if (!d || d.normalizedType !== "datum_csys") continue;
            const c = E0(d).find((l)=>_0(l.direction, r.direction));
            if (c) return {
                kind: "world",
                origin: [
                    ...c.origin
                ],
                direction: [
                    ...c.direction
                ]
            };
        }
        return r;
    }
    function O0(e) {
        const t = Q(e.parameters), r = (a)=>Array.isArray(a) && a.length === 3 && a.every((d)=>typeof d == "number" && Number.isFinite(d)) ? a : null, n = r(t?.origin ?? [
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
    function hd(e, t, r) {
        const n = e.parameterSummary.sectionIds[0];
        if (n !== void 0) return t.get(n) ?? te(n);
        const i = e.parentIds.map((o)=>r?.get(o)).find((o)=>o?.normalizedType === "sketch" || o?.normalizedType === "text");
        return i ? t.get(i.id) ?? te(i.id) : null;
    }
    function P0(e, t, r, n = new Map) {
        const i = te(e.id), o = [
            ...new Set([
                ...Qb(e, t),
                ...e.normalizedType === "sketch" || e.normalizedType === "text" || e.normalizedType === "line" ? h0(e) : []
            ])
        ], s = {
            id: i,
            name: e.name,
            dependencyIds: o,
            suppressed: e.suppressed
        };
        if (e.normalizedType === "sketch" || e.normalizedType === "text" || e.normalizedType === "line") return {
            supported: !0,
            feature: Rs({
                ...s,
                placementPlane: m0(e, r, n)
            })
        };
        if (e.normalizedType === "datum_on_path") {
            const a = f0(e), d = p0(e, n, t);
            return d ? {
                supported: !0,
                feature: cn({
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
                feature: cn({
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
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "extrude") {
            const a = hd(e, t, n);
            if (!a) {
                const f = ou(e);
                if (f) {
                    const u = f.featureId, h = He(e.parameterSummary.direction) ?? [
                        0,
                        0,
                        1
                    ];
                    return {
                        supported: !0,
                        feature: nc({
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
                            distance: ud(e),
                            operation: tn(e.parameterSummary.booleanOp) === "cut" ? "cut" : "add"
                        })
                    };
                }
                return {
                    supported: !1,
                    diagnostic: `UG feature ${e.id} EXTRUDE has no section_ids; imported as placeholder`,
                    feature: je({
                        ...s,
                        dependencyIds: [],
                        suppressed: !0,
                        sourceLabel: `UG:${e.sourceType}`
                    })
                };
            }
            const d = e.parameterSummary.sectionIds[0], c = d !== void 0 ? n.get(d) : e.parentIds.map((f)=>n.get(f)).find((f)=>f?.normalizedType === "sketch" || f?.normalizedType === "text"), l = c?.normalizedType === "text" ? Xi(c, n).normal : c?.sketchPlaneFrame?.normal ?? null;
            return {
                supported: !0,
                feature: As({
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
                    depth: ud(e),
                    mode: tn(e.parameterSummary.booleanOp),
                    secondDepth: 0,
                    symmetric: e.parameterSummary.symmetric,
                    ...x0(e, l),
                    fusePrior: pd(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "revolve") {
            const a = hd(e, t, n);
            return a ? {
                supported: !0,
                feature: oc({
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
                    axisRef: A0(e, n),
                    ...F0(e),
                    angle: k0(e),
                    mode: tn(e.parameterSummary.booleanOp),
                    fusePrior: pd(e.parameterSummary.booleanOp)
                })
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} SWP104 has no section_ids; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "cylinder") {
            const a = Ee(e.parameterSummary.radiusValue ?? (e.parameterSummary.diameterValue !== null ? e.parameterSummary.diameterValue / 2 : null), 1), d = Ee(e.parameterSummary.heightValue, 1), c = He(e.parameterSummary.direction ?? e.parameterSummary.axisDirection) ?? [
                0,
                0,
                1
            ];
            return {
                supported: !0,
                feature: jd({
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
                    mode: tn(e.parameterSummary.booleanOp)
                })
            };
        }
        if (e.normalizedType === "helix") {
            const a = Ee(e.parameterSummary.pitchValue, 1), d = Ee(e.parameterSummary.turnsValue, 1), c = Ee(e.parameterSummary.heightValue, a * d), l = Ee(e.parameterSummary.radiusValue, 1), f = Ee(e.parameterSummary.endRadiusValue ?? In(e, "end radius"), l), u = Ee(e.parameterSummary.endPitchValue ?? In(e, "end pitch"), a), h = In(e, "start angle", "initial angle") ?? 0, m = Array.isArray(e.parameters.owned_exprs) ? e.parameters.owned_exprs.map((I)=>Q(I)).map((I)=>typeof I?.value == "string" ? I.value.toLowerCase() : "").find((I)=>I === "left" || I === "right") : void 0;
            return {
                supported: !0,
                feature: qi({
                    ...s,
                    axisOrigin: [
                        ...e.parameterSummary.axisOrigin ?? e.parameterSummary.origin ?? [
                            0,
                            0,
                            0
                        ]
                    ],
                    axisDirection: He(e.parameterSummary.axisDirection ?? e.parameterSummary.direction) ?? [
                        0,
                        0,
                        1
                    ],
                    radius: l,
                    endRadius: f,
                    pitch: a,
                    endPitch: u,
                    height: c,
                    handedness: m === "left" ? "left" : "right",
                    startAngle: h
                })
            };
        }
        if (e.normalizedType === "split") {
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = fd(e);
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable split plane; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = t.get(a) ?? te(a);
            return {
                supported: !0,
                feature: sc({
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
            const a = e.parameterSummary.targetFeatureIds[0] ?? e.parentIds.at(-1), d = fd(e), c = Q(e.parameters), l = c?.trim_direction, f = l === "negative" ? "negative" : l === "both" ? "both" : "positive", u = c?.tolerance, h = typeof u == "number" && Number.isFinite(u) && u >= 0 ? u : 1e-7;
            if (a === void 0 || !d) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable sheet/plane tool; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const m = t.get(a) ?? te(a);
            return {
                supported: !0,
                feature: ac({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            m
                        ])
                    ],
                    baseFeatureId: m,
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
            const a = e.parentIds.at(-1) === void 0 ? o.at(-1) : t.get(e.parentIds.at(-1)) ?? te(e.parentIds.at(-1)), d = w0(e), c = Array.isArray(e.parameters.edge_sets) ? e.parameters.edge_sets : [], l = Q(c[0])?.angle_value, f = typeof l == "number" && Number.isFinite(l) ? Math.abs(l) : 5, u = Math.min(Math.max(f * Math.PI / 180, 1e-4), Math.PI / 2 - 1e-4);
            if (!a || d.length === 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable draft faces; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const h = d.find((b)=>b.hintPlaneOrigin && b.hintNormal), m = h?.hintPlaneOrigin && h.hintNormal ? {
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
            }, I = Sr(e, "method")?.toLowerCase() ?? "", w = I.includes("variable") ? "variable" : I.includes("neutral") ? "neutral_plane" : "constant", y = yr(e, "angle_tolerance"), x = yr(e, "distance_tolerance");
            return {
                supported: !0,
                feature: To({
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
                        direction: He(e.parameterSummary.direction) ?? [
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
                    method: w,
                    ...y !== void 0 ? {
                        angleTolerance: y
                    } : {},
                    ...x !== void 0 ? {
                        distanceTolerance: x
                    } : {}
                })
            };
        }
        if (e.normalizedType === "boolean") {
            const a = e.parameterSummary.targetFeatureIds[0], d = e.parameterSummary.toolFeatureIds[0];
            if (a === void 0 || d === void 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no target/tool feature ids; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const c = t.get(a) ?? te(a), l = t.get(d) ?? te(d);
            return {
                supported: !0,
                feature: rc({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            c,
                            l
                        ])
                    ],
                    targetFeatureId: c,
                    toolFeatureId: l,
                    toolFeatureIds: e.parameterSummary.toolFeatureIds.map((f)=>t.get(f) ?? te(f)),
                    op: S0(e.parameterSummary.booleanOp)
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
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG internal:${e.sourceType}`
                })
            };
            const a = tu(e, n), d = a ? t.get(a.id) ?? te(a.id) : null, c = d0(e, n, t);
            if (!d || !c) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no dependent point sketch or solid base; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const l = e.parameters, f = [
                l.hole_form,
                l.hs_start_form,
                l.hole_type
            ].filter((k)=>typeof k == "string").join(" ").toLowerCase(), u = String(l.hole_type ?? "").toLowerCase(), h = u === "holeseries", m = u === "threadedhole", I = e.sourceType.toUpperCase() === "CBORE_HOLE" || f.includes("counterbore") || f.includes("counterbored"), w = !I && (f.includes("countersink") || f.includes("countersunk")), y = Ee(m ? ut(e, [
                "threaded_tap_drill_diam"
            ], [
                "Tap Drill Diameter"
            ]) : h ? ut(e, [
                "hs_mid_hole_diam",
                "hs_start_hole_diam"
            ], [
                "Start Diameter",
                "Hole Diameter"
            ]) : ut(e, [
                "diameter"
            ], [
                "Hole Diameter",
                "Diameter"
            ]) ?? e.parameterSummary.diameterValue, 1), x = Ee(ut(e, [
                "hs_start_cbore_diam",
                "cbore_diam"
            ], [
                "Start Counter Bore Diameter",
                "Counter Bore Diameter",
                "C-Bore Diameter"
            ]) ?? e.parameterSummary.counterboreDiameterValue, y * 2), b = Ee(ut(e, [
                "hs_start_cbore_depth",
                "cbore_depth"
            ], [
                "Start Counter Bore Depth",
                "Counter Bore Depth",
                "C-Bore Depth"
            ]) ?? e.parameterSummary.counterboreDepthValue, Math.max(y / 2, 1)), g = Ee(ut(e, [
                "hs_start_csk_diam",
                "csk_diam",
                "countersink_diam"
            ], [
                "Start Countersink Diameter",
                "Countersink Diameter"
            ]), y * 2), S = Ee(ut(e, [
                "hs_start_csk_angle",
                "csk_angle",
                "countersink_angle"
            ], [
                "Start Countersink Angle",
                "Countersink Angle"
            ]), 90), F = h || e.parameterSummary.through || String(l.depth_limit ?? "").toLowerCase().includes("through"), R = Ee((h ? ut(e, [
                "hs_end_hole_depth",
                "hs_mid_hole_depth",
                "hs_start_hole_depth",
                "depth"
            ], [
                "End Hole Depth",
                "Hole Depth",
                "Depth"
            ]) : ut(e, m ? [
                "threaded_hole_depth",
                "depth"
            ] : [
                "depth"
            ], m ? [
                "Hole Depth",
                "Thread Depth"
            ] : [
                "Hole Depth",
                "Depth"
            ])) ?? e.parameterSummary.heightValue ?? (!F && I ? b : null), 1), A = a ? eu(a, e) : [], D = g0(e), V = D?.startChamfer, X = D?.endChamfer;
            return {
                supported: !0,
                feature: ic({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            c,
                            d
                        ])
                    ],
                    baseFeatureId: c,
                    sketchId: d,
                    pointIds: A,
                    diameter: y,
                    depth: R,
                    depthMode: F ? "through" : "blind",
                    mode: I ? "counterbore" : w ? "countersink" : "simple",
                    ...I ? {
                        counterboreDiameter: x,
                        counterboreDepth: b
                    } : {},
                    ...w ? {
                        countersinkDiameter: g,
                        countersinkAngleDeg: S
                    } : {},
                    ...V?.enabled && V.offset !== void 0 && V.angleDeg !== void 0 ? {
                        startChamferEnabled: !0,
                        startChamferOffset: V.offset,
                        startChamferAngleDeg: V.angleDeg
                    } : {},
                    ...X?.enabled && X.offset !== void 0 && X.angleDeg !== void 0 ? {
                        endChamferEnabled: !0,
                        endChamferOffset: X.offset,
                        endChamferAngleDeg: X.angleDeg
                    } : {},
                    ...D ? {
                        seriesParameters: D
                    } : {}
                })
            };
        }
        if (e.normalizedType === "thread") {
            const a = ru(e, t, n);
            return a ? {
                supported: !0,
                feature: a.thread
            } : {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} is missing thread axis point, major/minor diameter, pitch, or length; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
        }
        if (e.normalizedType === "pipe") {
            const a = e.parameterSummary.sectionIds, d = y0(e), c = a[0] === void 0 ? null : t.get(a[0]) ?? te(a[0]), l = d[0], f = l === void 0 ? null : t.get(l) ?? te(l);
            if (!c || !f || a.length === 0 || d.length === 0) return {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable section or guide ids; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            };
            const u = a.map((I)=>t.get(I) ?? te(I)), h = l === void 0 ? void 0 : n.get(l), m = h?.normalizedType === "helix" ? {
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
                feature: Os({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            ...u,
                            f
                        ])
                    ],
                    profileSketchId: c,
                    sectionSketchIds: u,
                    pathReference: m,
                    pathSketchId: f,
                    mode: tn(e.parameterSummary.booleanOp),
                    orientation: I0(e),
                    orientationDirection: ld(e, "orientation_dir"),
                    orientationOrigin: ld(e, "orientation_origin"),
                    preserveShape: gr(e, "preserve_shape"),
                    preserveGuideShape: gr(e, "preserve_guide_shape"),
                    scalingMethod: Sr(e, "scaling_method"),
                    sectionInterpolation: Sr(e, "section_interpolation"),
                    tolAngleDeg: yr(e, "tol_angle_deg"),
                    tolDistance: yr(e, "tol_distance")
                })
            };
        }
        if (e.normalizedType === "fillet" || e.normalizedType === "chamfer") {
            const a = i0(e, n), d = a !== void 0 ? t.get(a) ?? te(a) : o.at(-1), c = r0(e), l = n0(e), f = t0(e), u = c.length > 0 ? c : l.length > 0 ? l : f, h = a === void 0 ? void 0 : n.get(a);
            return !d || u.length === 0 || !h || !ji(h) ? {
                supported: !1,
                diagnostic: `UG feature ${e.id} ${e.sourceType} has no resolvable edge selectors; imported as placeholder`,
                feature: je({
                    ...s,
                    dependencyIds: [],
                    suppressed: !0,
                    sourceLabel: `UG:${e.sourceType}`
                })
            } : e.normalizedType === "fillet" ? {
                supported: !0,
                feature: Jd({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: u,
                    radius: Ee(e.parameterSummary.radiusValue, 1),
                    allInstances: gr(e, "all_instances"),
                    rollOntoEdge: gr(e, "roll_onto_edge"),
                    rollOverSmoothEdge: gr(e, "roll_over_smooth_edge"),
                    tolerance: yr(e, "tolerance")
                })
            } : {
                supported: !0,
                feature: Yd({
                    ...s,
                    dependencyIds: [
                        ...new Set([
                            ...o,
                            d
                        ])
                    ],
                    baseFeatureId: d,
                    edgeSelectors: u,
                    distance: Ee(e.parameterSummary.offset2Value ?? bn(e.parameters.offset2), 1),
                    angle: e.parameterSummary.angleValue !== null ? e.parameterSummary.angleValue * Math.PI / 180 : void 0,
                    reverseOffsets: gr(e, "reverse_offsets"),
                    offsetMethod: Sr(e, "offset_method"),
                    chamferOption: Sr(e, "chamfer_option"),
                    tolerance: yr(e, "tolerance")
                })
            };
        }
        if (e.sourceType.toUpperCase() === "DATUM_CSYS") {
            const a = e.sketchPlaneFrame;
            return {
                supported: !0,
                feature: cn({
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
                    baseDatumId: null,
                    coordinateSystem: O0(e)
                })
            };
        }
        return {
            supported: !1,
            diagnostic: `UG feature ${e.id} ${e.sourceType} has no Part Design equivalent; imported as placeholder`,
            feature: je({
                ...s,
                dependencyIds: [],
                suppressed: !0,
                sourceLabel: `UG:${e.sourceType}`
            })
        };
    }
    function R0(e) {
        return jn(e.parameterSummary.booleanOp);
    }
    function M0(e) {
        if (!(e.normalizedType === "extrude" || e.normalizedType === "revolve" || e.normalizedType === "cylinder" || e.normalizedType === "pipe") || e.normalizedType === "extrude" && e.parameterSummary.sectionIds.length === 0 && ou(e)) return !1;
        const r = R0(e);
        return r === "" || r === "CREATE";
    }
    function ji(e) {
        return e.normalizedType === "extrude" || e.normalizedType === "revolve" || e.normalizedType === "cylinder" || e.normalizedType === "fillet" || e.normalizedType === "chamfer" || e.normalizedType === "draft" || e.normalizedType === "split" || e.normalizedType === "boolean" || e.normalizedType === "hole" || e.normalizedType === "pipe";
    }
    function md(e, t) {
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
    function yd(e, t) {
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
    function C0(e, t) {
        const r = `${e.id}::b${t}`;
        if (e.type === "datum_plane") return cn({
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
        if (e.type === "sketch") return Rs({
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
    function $0(e, t = {}) {
        return su(ua(e), t);
    }
    function su(e, t) {
        const r = new gc({
            id: t.documentId,
            name: t.partName ?? e.source.partName ?? "UG Part"
        }), n = r.createPart({
            id: t.partId,
            name: t.partName ?? e.source.partName ?? "Part"
        }), i = new Map;
        for (const b of e.featureSeries)i.set(b.id, te(b.id));
        const o = [
            ...e.diagnostics.warnings
        ], s = [], a = new Map(e.featureSeries.map((b)=>[
                b.id,
                b
            ])), d = e.featureSeries.flatMap((b)=>{
            const g = P0(b, i, t.bodyId ?? "body", a);
            g.supported || (s.push(b.id), g.diagnostic && o.push(g.diagnostic));
            const S = [
                {
                    node: b,
                    feature: g.feature
                }
            ];
            if (g.feature.type === "thread") {
                const F = ru(b, i, a);
                F && S.unshift({
                    node: b,
                    feature: F.helix
                });
            }
            return S;
        }), c = new Map(d.map(({ feature: b })=>[
                b.id,
                b
            ])), l = (b, g, S = new Set)=>b === g || S.has(b) ? b === g : (S.add(b), (c.get(b)?.dependencyIds ?? []).some((R)=>l(R, g, S)));
        for (const { node: b, feature: g } of d){
            if (g.type !== "boolean" || b.parameterSummary.toolFeatureIds.length < 2) continue;
            const S = b.parameterSummary.toolFeatureIds.map((A)=>te(A)).filter((A)=>{
                const D = c.get(A);
                return D !== void 0 && D.id !== g.id && (d.find((V)=>V.feature.id === A)?.node.seriesIndex ?? 1 / 0) < b.seriesIndex;
            }), R = S.filter((A)=>!S.some((D)=>D !== A && l(D, A))).map((A)=>d.find((D)=>D.feature.id === A)).filter((A)=>A !== void 0).sort((A, D)=>D.node.seriesIndex - A.node.seriesIndex)[0]?.feature.id;
            !R || R === g.targetFeatureId || (g.toolFeatureId = R);
        }
        const f = new Map;
        let u = 0;
        for (const { node: b, feature: g } of d){
            if (!ji(b) || g.type === "import") continue;
            if (M0(b)) {
                f.set(g.id, u), u += 1;
                continue;
            }
            const S = g.dependencyIds.find((F)=>f.has(F));
            f.set(g.id, S !== void 0 ? f.get(S) : Math.max(0, u - 1));
        }
        u === 0 && (u = 1);
        let h = !0;
        for(; h;){
            h = !1;
            for (const { feature: b } of d){
                if (f.has(b.id)) continue;
                const g = new Set;
                for (const S of d){
                    const F = f.get(S.feature.id);
                    F !== void 0 && md(S.feature, b.id) && g.add(F);
                }
                g.size === 1 && (f.set(b.id, [
                    ...g
                ][0]), h = !0);
            }
        }
        for (const { node: b, feature: g } of d){
            if (f.has(g.id) || b.normalizedType !== "trim") continue;
            const S = b.parentIds.map((F)=>f.get(te(F))).find((F)=>F !== void 0);
            S !== void 0 && f.set(g.id, S);
        }
        for (const { feature: b } of d)f.has(b.id) || f.set(b.id, 0);
        for (const { node: b, feature: g } of d){
            if (g.type !== "fillet" && g.type !== "chamfer" && g.type !== "draft" && g.type !== "face_pull") continue;
            const S = f.get(g.id);
            if (S === void 0) continue;
            const F = g.type === "fillet" || g.type === "chamfer", R = d.filter((D)=>D.node.seriesIndex < b.seriesIndex && f.get(D.feature.id) === S && ji(D.node) && D.feature.type !== "import" && (!F || D.feature.type !== "fillet" && D.feature.type !== "chamfer") && !D.feature.suppressed).sort((D, V)=>V.node.seriesIndex - D.node.seriesIndex)[0]?.feature;
            if (!R || R.id === g.baseFeatureId) continue;
            const A = g.baseFeatureId;
            g.baseFeatureId = R.id, g.dependencyIds = [
                ...new Set([
                    ...g.dependencyIds.filter((D)=>D !== A),
                    R.id
                ])
            ];
        }
        const m = Array.from({
            length: u
        }, ()=>new Map), I = Array.from({
            length: u
        }, ()=>[]);
        for (const { feature: b } of d){
            const g = f.get(b.id), S = new Set([
                g
            ]);
            for (const F of d){
                const R = f.get(F.feature.id);
                R === void 0 || R === g || md(F.feature, b.id) && S.add(R);
            }
            for (const F of S){
                if (F === g || b.type !== "datum_plane" && b.type !== "sketch" && b.type !== "helix") continue;
                const R = C0(b, F);
                m[F].set(b.id, R.id), I[F].push(R);
            }
        }
        const w = t.bodyName ?? e.source.partName ?? "Body", y = [];
        for(let b = 0; b < u; b++){
            const g = new yc({
                id: b === 0 ? t.bodyId ?? `ug:body:${b}` : `${t.bodyId ?? "ug:body"}:${b}`,
                name: u === 1 ? w : `${w} ${b + 1}`,
                partId: n.id
            });
            r.addBodyToPart(n.id, g);
            const S = m[b];
            for (const F of I[b])g.addFeature(yd(F, S));
            for (const { feature: F } of d)f.get(F.id) === b && g.addFeature(yd(F, S));
            y.push(g);
        }
        const x = fl(e.featureSeries);
        for (const b of y.flatMap((g)=>g.getFeatures()))b.type === "helix" && (x[b.id] = b0(b));
        for (const b of m)for (const [g, S] of b){
            const F = x[g];
            F && !x[S] && (x[S] = structuredClone(F));
        }
        for (const b of y)for (const g of b.getFeatures()){
            if (g.type !== "revolve") continue;
            const S = x[g.sketchRef.sketchId];
            !S || g.axisRef.kind !== "world" || (x[g.sketchRef.sketchId] = ul(S, g.axisRef.origin, g.axisRef.direction));
        }
        return {
            document: r,
            partId: n.id,
            bodyId: y[0].id,
            bodyIds: y.map((b)=>b.id),
            featureIdByUgId: i,
            featureSeries: y.flatMap((b)=>[
                    ...b.getFeatures()
                ]),
            unsupportedUgFeatureIds: s,
            diagnostics: o,
            snapshot: e,
            profiles: x,
            profileProvider: new Xl(x)
        };
    }
    D0 = function(e, t = {}) {
        return su(Zl(e), t);
    };
    let T0 = 0;
    function B0() {
        return `occ-req-${++T0}`;
    }
    class au {
        constructor(t){
            this.createWorker = t;
        }
        createWorker;
        worker = null;
        pending = new Map;
        error(t, r, n) {
            return new ve(t, r, {
                requestId: n.requestId,
                bodyId: n.bodyId,
                featureId: n.featureId,
                revision: n.revision,
                operation: n.operation
            });
        }
        extrudeRectangle(t, r, n, i = {}) {
            const o = this.ensureWorker(), s = i.requestId ?? B0(), a = i.timeoutMs ?? 12e4, d = {
                protocolVersion: Kr,
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
            return new Promise((c, l)=>{
                const f = {
                    resolve: c,
                    reject: l,
                    request: d,
                    settled: !1
                }, u = (h, m)=>{
                    f.settled || (f.settled = !0, f.timeoutId && clearTimeout(f.timeoutId), this.pending.delete(s), m && o.postMessage(this.cancelEnvelope(d)), l(h));
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
            for (const t of this.pending.values())t.timeoutId && clearTimeout(t.timeoutId), t.reject(new ve("OCC worker disposed", "cancelled"));
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
                for (const n of this.pending.values())n.reject(new ve(r.message ?? "OCC worker error", "worker"));
                this.pending.clear();
            }, this.worker = t, t;
        }
    }
    class j0 {
        constructor(t, r = 1){
            this.maxConcurrent = r, this.host = new au(t);
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
                i.job.featureId === t && (i.reject(new ve(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(n, 1), r++);
            }
            return r;
        }
        cancelBodyBeforeRevision(t, r) {
            let n = 0;
            for(let i = this.queue.length - 1; i >= 0; i--){
                const o = this.queue[i];
                (o.job.bodyId ?? "default-body") === t && (o.job.revision ?? 0) < r && (o.reject(new ve(`Queued OCC job cancelled for ${t}`, "cancelled")), this.queue.splice(i, 1), n++);
            }
            return n += this.host.cancelBodyBeforeRevision(t, r), n;
        }
        get queueLength() {
            return this.queue.length;
        }
        dispose() {
            for (const t of this.queue)t.reject(new ve("OCC pool disposed", "cancelled"));
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
    function z0(e, t) {
        const [r, n, i] = e.origin, [o, s, a] = e.uAxis, [d, c, l] = e.vAxis;
        return [
            r + o * t.x + d * t.y,
            n + s * t.x + c * t.y,
            i + a * t.x + l * t.y
        ];
    }
    function N0(e, t, r) {
        const n = [], i = {}, o = [];
        if (!e.profile.ok) for (const s of e.profile.diagnostics ?? [])n.push({
            code: s.code,
            message: s.message
        });
        for(let s = 0; s < e.profile.loops.length; s++){
            const a = e.profile.loops[s];
            for (const d of a.edges){
                const l = (d.samples && d.samples.length >= 2 ? d.samples : [
                    d.start,
                    d.end
                ]).map((f)=>z0(t, f));
                o.push({
                    domainEntityId: d.entityId,
                    polyline: l,
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
    function V0(e) {
        return !(e.cancelled || e.requestId !== e.responseRequestId || e.requestRevision !== e.responseRevision || e.requestRevision < e.latestPublishedRevision);
    }
    gw = Object.freeze(Object.defineProperty({
        __proto__: null,
        DEFAULT_REPLAY_RUNTIME_IDENTITY: Tn,
        FeatureBuildHandlerRegistry: _c,
        FeatureBuildHandlerRegistryError: oi,
        HelicalHandedness: Nl,
        HelicalProfileMode: Vl,
        HelicalSweepFeat: Db,
        HelixGeometry: ss,
        MESH_TRANSFER_BYTE_THRESHOLD: Sc,
        OCC_BODY_REPLAY_PROTOCOL_VERSION: Ce,
        OCC_PROTOCOL_SCHEMA_VERSION: _r,
        OCC_REPLAY_REUSE_ENABLED: Bc,
        OCC_WORKER_PROTOCOL_VERSION: Kr,
        OccBodyReplayExecutor: Bl,
        OccBodyWorkerClient: os,
        OccBridgeError: ve,
        OccHelicalSweepBackend: Hl,
        OccReplayCheckpointStore: Hc,
        OccRequestCoordinator: Rm,
        OccWorkerGeneration: Mm,
        OccWorkerHost: au,
        OccWorkerPool: j0,
        REPLAY_CACHE_ARTIFACT_KINDS: Mc,
        REPLAY_CACHE_OUTCOMES: Rc,
        REPLAY_CANCELLATION_REASONS: Dc,
        REPLAY_DIAGNOSTICS_SCHEMA_VERSION: Hs,
        REPLAY_FEATURE_STATUSES: $c,
        REPLAY_PERFORMANCE_EVENT_KINDS: Uy,
        REPLAY_REQUEST_OUTCOMES: Cc,
        ReplayDerivedCacheScheduler: ag,
        UgFeatureSnapshotParseError: Ye,
        UgSketchProfileProvider: Xl,
        VersionedOccWorkerFacade: Pm,
        acceptOccWorkerResult: V0,
        adaptDomainProfileToWireSpecs: N0,
        assertTopologyMatchesMesh: ae,
        bindHintsToTessellation: ia,
        booleanShapesWithOcc: Ar,
        booleanSolidsHeadless: Hb,
        booleanSolidsHeadlessSpike: Jl,
        buildExtrudeFaceHints: Ci,
        buildExtrudeSemanticTopology: kl,
        buildFaceFromProfile: wt,
        buildOccReplayDiagnosticsSnapshot: Lc,
        buildPrismShapeFromFace: Js,
        buildPrismShapeFromProfile: ot,
        buildRevolveFaceHints: $i,
        buildRevolveSemanticTopology: ci,
        buildSketchFaceFromProfile: Qc,
        canonicalizeReplayJson: Ai,
        chamferProfileWithOcc: dI,
        chamferShapeWithOcc: Pi,
        collectMeshTransfers: Ue,
        collectTransferBuffers: Am,
        createFeatureDocumentFromUgSnapshot: $0,
        createFeatureDocumentFromUgSnapshotJson: D0,
        createOccReplayCheckpoint: Go,
        createProtocolHello: Fc,
        createReplayCancellationEvent: sn,
        createReplayPerformanceEvent: Ve,
        createReplayStaleEvent: Kc,
        detectSolidImportFormat: to,
        disposePrismBuild: qe,
        ensureTipEdgesWithOccOrdinals: pn,
        executeOccBodyReplay: jl,
        extractSemanticTopology: Fb,
        extrudeProfileHeadless: Ul,
        extrudeProfileHeadlessSpike: jr,
        extrudeProfileWithOcc: oa,
        extrudeRectangleHeadless: zb,
        extrudeRectangleHeadlessSpike: Bb,
        extrudeRectangleWithOcc: Pb,
        facePullShapeWithOcc: gl,
        filletProfileWithOcc: sI,
        filletShapeWithOcc: ra,
        findEarliestInvalidReplayBoundary: Uc,
        fingerprintCanonicalJson: tr,
        fingerprintFeatureDependencies: Gs,
        fingerprintFeatureInput: Ws,
        fingerprintReplayPlan: tg,
        forgetOccReplayBody: wl,
        getLastOccReplayDiagnostics: jc,
        getOccBodyWorkerClient: Ab,
        getOuterLoop: Vr,
        grooveProfileHeadless: Rb,
        grooveProfileWithOcc: zl,
        handleOccRequest: da,
        helixWireWithOcc: eo,
        importBRepSolidFromFileWithOcc: tb,
        importSolidFromFile: rb,
        importSolidFromFileWithOcc: Ml,
        importedShapeToBRepSolidWithOcc: Di,
        inheritSemanticTopologyAfterBoolean: he,
        isOccBodyReplayCancelRequest: Pc,
        isOccBodyReplayRequest: qy,
        isOccBodyReplayResetRequest: Hy,
        isProtocolVersion: Em,
        isReplayPerformanceEvent: Xy,
        isResponseCurrent: Om,
        listPrismEdgeSamples: iI,
        listPrismEdgeSamplesFromShape: ie,
        loadOccModule: $t,
        matchEdgeHintsToOccOrdinals: ml,
        mergeSemanticTopology: qI,
        meshFromPayload: vm,
        meshTransferByteSize: kc,
        negotiateProtocol: vc,
        nextBodyReplayRequestId: Eb,
        parseReplayPerformanceEvent: Us,
        parseUgFeatureSnapshot: ua,
        parseUgFeatureSnapshotJson: Zl,
        pocketProfileHeadless: Vb,
        pocketProfileWithOcc: Nb,
        pocketProfilesHeadless: Gl,
        pocketProfilesHeadlessSpike: ds,
        pocketProfilesWithOcc: ca,
        pocketRectangleHeadless: Kb,
        profilePointToWorld: it,
        publishOccReplayDiagnostics: zc,
        readBrepShapeWithOcc: io,
        readStepShapeWithOcc: oo,
        registerBuiltinFeatureHandlers: Fy,
        resetOccBodyWorkerClientForTests: Ob,
        resetOccModuleCache: mg,
        resetOccReplayDiagnosticsForTests: Nc,
        resolveUgLineFrame: Zs,
        resolveUgTextFrame: Xi,
        resolveUgTextLocalOrigin: il,
        resolveUgTextRotation: cl,
        revolveProfileHeadless: Yl,
        revolveProfileHeadlessSpike: aa,
        revolveProfileWithOcc: Qs,
        revolveRectangleHeadless: Lb,
        revolveRectangleHeadlessSpike: jb,
        revolveRectangleWithOcc: pl,
        sampleResultFaces: Bn,
        serializeReplayPerformanceEvent: Qy,
        shouldUseTransferList: Fm,
        solidImportVirtualPath: ro,
        stableReplayJsonString: Tc,
        takeUnifiedSameDomainShapeWithOcc: Tr,
        tessellateShape: dt,
        threadShapeWithOcc: Il,
        topologyFromTessellation: ui,
        transformProfileAt: as,
        ugLineNodeToProfile: dl,
        ugSketchNodeToProfile: ll,
        ugSketchProfilesByFeatureId: fl,
        unifySameDomainShapeWithOcc: ea,
        useHeadlessSpikeKernel: zr,
        validateHelicalSweepParams: Kl,
        validateOccBodyReplayRequest: Zi,
        validateOccBodyReplayResponseCorrelation: Oc,
        validateOccRequest: Ns,
        validateProtocolEnvelope: _m
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { jd as $, U0 as A, H0 as B, W0 as C, Tn as D, G0 as E, gc as F, X0 as G, dl as H, Y0 as I, Xi as J, ll as K, cl as L, Is as M, il as N, D0 as O, qd as P, je as Q, ag as R, Z0 as S, Q0 as T, tw as U, ew as V, rw as W, cn as X, Hp as Y, Kf as Z, _f as _, nw as a, Ef as a0, Af as a1, yh as a2, Wp as a3, dw as a4, lw as a5, Qp as a6, fw as a7, yw as a8, hw as a9, xm as aA, mw as aB, gw as aC, Sm as aa, pw as ab, Jd as ac, Yd as ad, $s as ae, As as af, oc as ag, ic as ah, ph as ai, Ih as aj, yp as ak, hh as al, Op as am, Os as an, qi as ao, Ps as ap, or as aq, ow as ar, cw as as, Yi as at, yi as au, _h as av, vf as aw, sw as ax, km as ay, j as az, tg as b, Rs as c, uw as d, uu as e, tr as f, iw as g, Hi as h, Rt as i, qp as j, Up as k, Ch as l, Ds as m, L0 as n, wl as o, aw as p, ze as q, ec as r, yc as s, rc as t, sc as u, nc as v, To as w, J0 as x, $d as y, q0 as z, __tla };
