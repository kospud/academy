"use strict";(self.webpackChunkgrecords_academy=self.webpackChunkgrecords_academy||[]).push([[414],{5492:(t,i,e)=>{e.d(i,{A:()=>A,n:()=>$});e(5043);var d=e(5464),a=e(5013),s=(e(4430),e(9078),e(6450)),n=e(4633),h=e(432),o=e(8463),r=e(7374),l=e(8738),c=e(7630),m=e(6945),x=e(3945),p=e(579);const w=d.I4.div`
width: 96%;
margin-left: 1.8%;
margin-right: 1.8%;
display: flex;
flex-direction: column;
align-items: center;

a{
    display: block;
}

@media (max-width: ${m.Qh}) {
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

@media(max-width: ${m.Qh}){
    width: 35svw;
}
`,g=d.I4.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;

@media(max-width: ${m.Qh}){
    width: 55%;
${c.dF};
align-items: start;
}
`,j=d.I4.a`
    ${c.aP}
    font-size: 0.9svw;

    @media (max-width: ${m.u3}){
        font-size: 1.8svw;
    }
    @media(max-width: ${m.Qh}){
        font-size: 1.9svw;
    }
`,u=d.I4.a`
text-align: center;
${c.dF}
font-size: 0.9svw;
font-weight: 600;
text-transform: uppercase;
    @media (max-width: ${m.u3}){
        font-size: 1.8svw;
    }
    @media(max-width: ${m.Qh}){
        margin-bottom: 2svh;
        width: 80%;
        text-align: start;
        font-size: 3.8svw;
    }
`,v=[{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:n,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:h,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:o,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0}],$=t=>{let{article:i}=t;const{photo:e,title:d,date:a,id:s}=i;return(0,p.jsxs)(w,{children:[(0,p.jsx)(f,{src:e,alt:"photo"}),(0,p.jsxs)(g,{children:[(0,p.jsx)(j,{children:a}),(0,p.jsx)(u,{children:d}),(0,p.jsx)(r.Gr,{to:`/blog/${s}`,children:"\u0427\u0418\u0422\u0410\u0422\u042c"})]})]})},b=(0,d.I4)(a.A)`
width: 94%;
display: flex;
justify-content: center;

@media(max-width: ${m.u3}){
    width: 100%;
}

@media(max-width: ${m.Qh}){
    width: 88%;
}
`,y=d.I4.div`
width: 100%;

@media(max-width: ${m.u3}){
    width: 188%;
}

@media(max-width: ${m.Qh}){
    width: 100%;
}
`,I=d.I4.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 24svh;

@media(max-width: ${m.Qh}){
    justify-content: flex-start;
    margin-top: -5svh;
    margin-bottom: 5svh;
    
}
`;function Q(t){let{articles:i}=t;const e=!l.xl;return(0,p.jsx)(x.A,{slidesToShow:4,childrenLength:i.length,infinite:e,children:i.map((t=>(0,p.jsx)($,{article:t})))})}const z=d.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;function k(t){let{articles:i}=t;return(0,p.jsx)(z,{children:i.map((t=>(0,p.jsx)($,{article:t})))})}const A=function(){return(0,p.jsx)(b,{type:"div",threshold:.3,children:(0,p.jsxs)(y,{children:[l.xl||l.v1?(0,p.jsx)(Q,{articles:v}):(0,p.jsx)(k,{articles:v}),(0,p.jsx)(I,{children:(0,p.jsx)(r.CY,{hover:!0,to:m.hh,children:"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})})]})})}},3082:(t,i,e)=>{e.r(i),e.d(i,{default:()=>g});e(5043);var d=e(6450),a=e(4633),s=e(432),n=e(8463),h=e(7374),o=e(4316),r=e(5492),l=e(5464),c=e(6945),m=e(7630),x=e(579);const p=[{photo:d,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:a,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:n,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:d,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:a,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:s,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0},{photo:n,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2023",id:0}],w=l.I4.div`
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
`,f=l.I4.div`
width: 25%;
${m.mj}

@media (max-width: ${c.u3}){
    width: 50%;
}
@media (max-width: ${c.Qh}){
        width: 100%;
        margin-bottom: 0;
    }
`;const g=function(){const t=p;return(0,x.jsxs)(h.LN,{children:[(0,x.jsx)(h._D,{id:"1",children:(0,x.jsx)(w,{children:t.map((t=>(0,x.jsx)(f,{children:(0,x.jsx)(r.n,{article:t})})))})}),(0,x.jsx)(h.TK,{}),(0,x.jsx)(o.A,{})]})}},6450:(t,i,e)=>{t.exports=e.p+"static/media/article1.d1b1f553de2698e224f0.png"},4633:(t,i,e)=>{t.exports=e.p+"static/media/article2.577b57e88f876219ab66.png"},432:(t,i,e)=>{t.exports=e.p+"static/media/article3.35c60eabed3ffadf8519.png"},8463:(t,i,e)=>{t.exports=e.p+"static/media/article4.287eb9837771d801fbe8.png"}}]);
//# sourceMappingURL=414.ae620523.chunk.js.map