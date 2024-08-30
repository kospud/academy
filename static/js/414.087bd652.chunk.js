"use strict";(self.webpackChunkgrecords_academy=self.webpackChunkgrecords_academy||[]).push([[414],{5492:(t,i,e)=>{e.d(i,{A:()=>A,n:()=>$});e(5043);var d=e(5464),n=e(952),s=(e(4430),e(9078),e(6450)),a=e(4633),o=e(432),r=e(8463),l=e(7374),h=e(8738),c=e(7630),x=e(6945),m=e(3945),p=e(579);const w=d.I4.div`
width: 96%;
margin-left: 1.8%;
margin-right: 1.8%;
display: flex;
flex-direction: column;
align-items: center;

a{
    display: block;
}

@media (max-width: ${x.Qh}) {
    width: 100%;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
}
`,f=d.I4.img`
width: 100%;
aspect-ratio: 9/10;
object-fit: cover;
${c.dF}

@media(max-width: ${x.Qh}){
    width: 35svw;
}
`,v=d.I4.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;

@media(max-width: ${x.Qh}){
    width: 55%;
${c.dF};
align-items: start;
}
`,u=d.I4.a`
    ${c.aP}
    font-size: 0.9svw;

    @media (max-width: ${x.u3}){
        font-size: 1.8svw;
    }
    @media(max-width: ${x.Qh}){
        font-size: 1.9svw;
    }
`,j=d.I4.a`
text-align: center;
${c.dF}
font-size: 0.9svw;
font-weight: 600;
text-transform: uppercase;
    @media (max-width: ${x.u3}){
        font-size: 1.8svw;
    }
    @media(max-width: ${x.Qh}){
        margin-bottom: 2svh;
        width: 80%;
        text-align: start;
        font-size: 3.8svw;
    }
`,g=[{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:a,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:o,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:r,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0}],$=t=>{let{article:i}=t;const{photo:e,title:d,date:n,id:s}=i;return(0,p.jsxs)(w,{children:[(0,p.jsx)(f,{src:e,alt:"photo"}),(0,p.jsxs)(v,{children:[(0,p.jsx)(u,{children:n}),(0,p.jsx)(j,{children:d}),(0,p.jsx)(l.Gr,{to:`/blog/${s}`,children:"\u0427\u0418\u0422\u0410\u0422\u042c"})]})]})},y=(0,d.I4)(n.A)`
width: 94%;
display: flex;
justify-content: center;

@media(max-width: ${x.u3}){
    width: 100%;
}

@media(max-width: ${x.Qh}){
    width: 88%;
}
`,b=d.I4.div`
width: 100%;

@media(max-width: ${x.u3}){
    width: 188%;
}

@media(max-width: ${x.Qh}){
    width: 100%;
}
`,I=d.I4.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 24svh;

@media(max-width: ${x.Qh}){
    justify-content: flex-start;
    margin-top: -5svh;
    margin-bottom: 5svh;
    
}
`;function Q(t){let{articles:i}=t;const e=!h.xl;return(0,p.jsx)(m.A,{slidesToShow:4,childrenLength:i.length,infinite:e,children:i.map((t=>(0,p.jsx)($,{article:t})))})}const z=d.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;function k(t){let{articles:i}=t;return(0,p.jsx)(z,{children:i.map((t=>(0,p.jsx)($,{article:t})))})}const A=function(){return(0,p.jsx)(y,{type:"div",threshold:.3,children:(0,p.jsxs)(b,{children:[h.xl||h.v1?(0,p.jsx)(Q,{articles:g}):(0,p.jsx)(k,{articles:g}),(0,p.jsx)(I,{children:(0,p.jsx)(l.CY,{hover:!0,to:x.hh,children:"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})})]})})}},3082:(t,i,e)=>{e.r(i),e.d(i,{default:()=>v});e(5043);var d=e(6450),n=e(4633),s=e(432),a=e(8463),o=e(7374),r=e(5221),l=e(5492),h=e(5464),c=e(6945),x=e(7630),m=e(579);const p=[{photo:d,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:n,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:a,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:d,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:n,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:a,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0}],w=h.I4.div`
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    flex-wrap: wrap;
    display: flex;
    margin-top: 16svh;
    @media (max-width: ${c.Qh}){
        width: 88%;
        margin-top: 12svh
    }
`,f=h.I4.div`
width: 25%;
${x.mj}

@media (max-width: ${c.u3}){
    width: 50%;
}
@media (max-width: ${c.Qh}){
        width: 100%;
        margin-bottom: 0;
    }
`;const v=function(){const t=p;return(0,m.jsxs)(o.LN,{children:[(0,m.jsx)(o._D,{id:"1",children:(0,m.jsx)(w,{children:t.map((t=>(0,m.jsx)(f,{children:(0,m.jsx)(l.n,{article:t})})))})}),(0,m.jsx)(o.TK,{}),(0,m.jsx)(r.A,{})]})}},3945:(t,i,e)=>{e.d(i,{A:()=>m});var d=e(5043),n=e(2382),s=(e(4430),e(9078),e(5464)),a=e(7196),o=e(6945),r=e(579),l=function(t){return t[t.prev=0]="prev",t[t.next=1]="next",t}(l||{});const h=s.I4.div`
    position: relative;
`,c=s.I4.div`
width: fit-content;
height: fit-content;
font-size: 7.7svw;
color: #c9c9c9;
opacity: 0.5;
transition: opacity .1s ease-in-out;
pointer-events: auto;
cursor: pointer;
&:hover{
    opacity: 0.9;
}
@media(max-width: ${o.u3}){
    font-size: 15.4svw;
    
}

@media (max-width: ${o.Qh}) {
    font-size: 20svw;
}
`,x=s.I4.div`
width: 100svw;
z-index: 1;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${o.u3}){
    width: 110svw;
    
}

@media (max-width: ${o.Qh}) {
    width: 113svw;
}
`;const m=function(t){let{children:i,slidesToShow:e,childrenLength:s,infinite:o}=t;const m=(0,d.useRef)(null),p=null!==o&&void 0!==o?o:s>e,w={arrows:!1,slidesToScroll:1,infinite:p,dots:p,slidesToShow:e};return(0,r.jsxs)(h,{children:[p&&(0,r.jsxs)(x,{children:[(0,r.jsx)(c,{type:l.prev,onClick:()=>{var t;null===(t=m.current)||void 0===t||t.slickPrev()},children:(0,r.jsx)(a.WZN,{})}),(0,r.jsx)(c,{type:l.next,onClick:()=>{var t;null===(t=m.current)||void 0===t||t.slickNext()},children:(0,r.jsx)(a.pjv,{})})]}),(0,r.jsx)(n.A,{ref:m,...w,children:i})]})}},6450:(t,i,e)=>{t.exports=e.p+"static/media/article1.d1b1f553de2698e224f0.png"},4633:(t,i,e)=>{t.exports=e.p+"static/media/article2.577b57e88f876219ab66.png"},432:(t,i,e)=>{t.exports=e.p+"static/media/article3.35c60eabed3ffadf8519.png"},8463:(t,i,e)=>{t.exports=e.p+"static/media/article4.287eb9837771d801fbe8.png"}}]);
//# sourceMappingURL=414.087bd652.chunk.js.map