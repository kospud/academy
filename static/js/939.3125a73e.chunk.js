"use strict";(self.webpackChunkgrecords_academy=self.webpackChunkgrecords_academy||[]).push([[939],{7069:(t,e,i)=>{i.d(e,{A:()=>j});i(5043);var n=i(5013),o=i(5464);const s=i.p+"static/media/Course.24dc3d84bcd89471ae6e.webp";var r=i(7374),a=i(7630),d=i(6945),l=i(8738);const h=i.p+"static/media/SoonCourse.ee64fb9fc792db28971f.webp";var c=i(3945),m=i(579);const w=(0,o.I4)(n.A)`
    width: 94%;
    ${a.C3}
    display: flex;
    justify-content: flex-end;
`,f=o.I4.div`
    width: 100%;

    @media(max-width: ${d.u3}){
        width: 100%;
    }
`,x=[{photo:s,title:"\u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",description:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:1},{photo:h,title:"\u0421\u043a\u043e\u0440\u043e"}],v=o.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;
`,u=o.I4.div`
    width: 95%;
`,p=o.I4.img`
width: 100%;
aspect-ratio: 1/1;
object-fit: cover;
`,g=o.I4.a`
color: rgba(204, 51, 39, 1);
font-weight: 600;
display: block;
font-size: 3.3svw;
text-transform: uppercase;

/*@media(max-width: ${d.u3}){
    font-size: 6.6svw;
}*/

@media(max-width: ${d.Qh}){
    font-size: 8.6svw;
}
`,b=o.I4.a`
color: rgba(235, 235, 235, 1);
font-weight: 400;
display: block;

font-size: 1.8svw;
/*@media(max-width: ${d.u3}){
    font-size: 3.7svw;
}*/

@media(max-width: ${d.Qh}){
    font-size: 3.3svw;
}

`;function $(t){let{course:e}=t;const{title:i,description:n,photo:o,id:s}=e;return(0,m.jsx)(v,{children:(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{src:o,alt:"course"}),(0,m.jsx)(r.hK,{}),(0,m.jsx)(g,{children:i}),n&&(0,m.jsx)(b,{children:n}),(0,m.jsx)(r.hK,{}),s&&(0,m.jsx)(r.CY,{to:`/courses/${s}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})}const j=()=>{const t=l.xl||l.v1?2:1;return(0,m.jsx)(w,{type:"div",children:(0,m.jsx)(f,{children:(0,m.jsx)(c.A,{slidesToShow:t,childrenLength:x.length,children:x.map((t=>(0,m.jsx)($,{course:t})))})})})}},5013:(t,e,i)=>{i.d(e,{A:()=>h});i(5043);var n=i(5843),o=i(5464),s=i(579);const r=o.AH`
    opacity: ${t=>{let{inView:e}=t;return e?"1":"0"}};
    transform: ${t=>{let{inView:e}=t;return e?"none":"translateY(4svh)"}};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`,a=o.I4.div`
    ${r}
`,d=o.I4.h1`
    ${r}
`,l={img:o.I4.img`
    ${r}
`,h1:d,div:a,a:o.I4.a`
    ${r}
`};const h=function(t){let{children:e,threshold:i,type:o,...r}=t;const{ref:a,inView:d}=(0,n.Wx)({triggerOnce:!0,threshold:i||.5}),h=l[o];return(0,s.jsx)(h,{inView:0===i||d,ref:a,...r,children:e})}},4316:(t,e,i)=>{i.d(e,{A:()=>A,q:()=>y});i(5043);var n=i(5013),o=i(5464),s=i(3002),r=i(3156),a=i(7980),d=i(5475),l=i(229),h=i(8738),c=i(7630),m=i(6945),w=i(579);const f=(0,o.I4)(n.A)`
    position: relative;
    width: 100%;
    background-color: rgba(204, 51, 39, 1);
    color: rgba(22, 21, 21, 1);
    display: flex;
    justify-content: center;

    @media (max-width: ${m.u3}) {
        //height: 55svh;
    }

    @media (max-width: ${m.Qh}) {
        //min-height: 108svh;
    }
`,x=o.I4.div`
${c.L_}
width: 94%;
display: flex;
justify-content: space-between;
margin-bottom: 8.3svh;

@media (max-width: ${m.Qh}){
    flex-direction: column;
    justify-content: flex-start;
    width: 88%;
    margin-bottom: 20svh;
}
`,v=o.I4.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media(max-width: ${m.Qh}){
        width: 100%;
    }

    @media(max-width: ${m.Qh}){
        ${c.dF}
    }
`,u=o.I4.a`
    font-weight: 900;
    ${c.dF}
    text-align: ${t=>{let{align:e}=t;return e||"start"}};

    font-size: 1.8svw;
    text-transform: uppercase;
    @media(max-width: ${m.u3}){
        font-size: 3.7svw;
    }

    @media(max-width: ${m.Qh}){
        font-size: 8svw;
    }
`,p=o.I4.div`

display: flex;
flex-direction: column;
align-items: ${t=>{let{align:e}=t;return e||"start"}};

a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    ${c.aP}
    font-size: 0.9svw;
    text-transform: uppercase;
    @media (max-width: ${m.u3}){
        font-size: 1.8svw;
    }

    @media(max-width: ${m.Qh}){
        font-size: 4.3svw;
    }
}
`,g=o.I4.div`
    position: absolute;
    bottom: ${t=>{let{bottom:e}=t;return e||"9svh"}};
    left: 50%;
    transform: translateX(-50%);
    width: 10svw;
    font-size: 1.8svw;
    display: flex;
    justify-content: space-around;
    
    a{
        color: rgba(22, 21, 21, 1);
    }

    @media (max-width: ${m.u3}){
        font-size: 3.7svw;
        width: 21svw;
    }

    @media(max-width: ${m.Qh}){
        font-size: 8svw;
        width: 35svw;
    }
`,b=o.I4.div`
    position: absolute;
    right: 3%;
    bottom: 9svh;

    @media(max-width: ${m.Qh}){
        right: 50%;
        transform: translate(50%,0);
        bottom: 6svh;
    }

a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    font-size: 0.9svw;
    text-transform: uppercase;
    @media (max-width: ${m.u3}){
        font-size: 1.8svw;
    }

    @media(max-width: ${m.Qh}){
        right: 50%;
        transform: translate(50%,0);
        font-size: 4.3svw;
        bottom: 7svh;
    }
}
`,$=()=>(0,w.jsx)(b,{children:(0,w.jsx)(d.N_,{to:"https://www.blacksoftware.ru/",children:"MADE IN BLACK"})}),j=[{logo:(0,w.jsx)(s.snP,{}),ref:""},{logo:(0,w.jsx)(a.$WO,{}),ref:""},{logo:(0,w.jsx)(r.hFS,{}),ref:""}],y=t=>{let{bottom:e}=t;return(0,w.jsx)(g,{bottom:e,children:j.map((t=>{let{logo:e,ref:i}=t;return(0,w.jsx)("a",{href:i,children:e})}))})},z=[{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",links:[{title:"\u043e\u0444\u0435\u0440\u0442\u0430",ref:""},{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430<br/>\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",ref:""},{title:"\u041e \u043d\u0430\u0441",ref:""},{title:"\u041a\u0443\u0440\u0441\u044b",ref:""},{title:"\u0411\u043b\u043e\u0433",ref:"blog"}],align:"start"},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",links:[{title:"info@akademi.ru",ref:"mailto: info@akademi.ru"},{title:"+7 (000) 000-00-00",ref:"tel:+7 (000) 000-00-00"}],align:"center"},{title:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",links:[{title:'\u041e\u041e\u041e "ACADEMIA"',ref:"mailto: info@akademi.ru"}],align:"end"}],k=[{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",links:[{title:"\u043e\u0444\u0435\u0440\u0442\u0430",ref:""},{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430<br/>\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",ref:""},{title:"\u041e \u043d\u0430\u0441",ref:""},{title:"\u041a\u0443\u0440\u0441\u044b",ref:""},{title:"\u0411\u043b\u043e\u0433",ref:"blog"}],align:"start"},{title:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",links:[{title:'\u041e\u041e\u041e "ACADEMIA"',ref:"mailto: info@akademi.ru"},{title:'\u041e\u041e\u041e "ACADEMIA"',ref:"mailto: info@akademi.ru"},{title:'\u041e\u041e\u041e "ACADEMIA"',ref:"mailto: info@akademi.ru"},{title:'\u041e\u041e\u041e "ACADEMIA"',ref:"mailto: info@akademi.ru"}],align:"end"},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",links:[{title:"info@akademi.ru",ref:"mailto: info@akademi.ru"},{title:"+7 (000) 000-00-00",ref:"tel:+7 (000) 000-00-00"}],align:"center"}];const A=function(){const t=h.xl||h.v1?z:k;return(0,w.jsxs)(f,{type:"div",threshold:.3,children:[(0,w.jsx)(x,{children:t.map((t=>{let{title:e,links:i,align:n}=t;return(0,w.jsxs)(v,{children:[(0,w.jsx)(u,{align:h.xl||h.v1?n:void 0,children:e}),(0,w.jsx)(p,{align:h.xl||h.v1?n:void 0,children:i.map((t=>{let{title:e,ref:i}=t;return(0,w.jsx)(d.N_,{to:i,children:(0,l.Ay)(e)})}))})]})}))}),(0,w.jsx)(y,{}),(0,w.jsx)($,{})]})}},7630:(t,e,i)=>{i.d(e,{C3:()=>s,L_:()=>a,Sp:()=>d,aP:()=>h,dF:()=>l,mj:()=>r});var n=i(5464),o=i(6945);const s=n.AH`
    margin-bottom: 16.6svh;

    @media(max-width: ${o.u3}){
        margin-bottom: 16.6svh;
    }
    @media(max-width: ${o.Qh}){
        margin-bottom: 12svh;
    }
`,r=n.AH`
    margin-bottom: 8.3svh;

    @media(max-width: ${o.u3}){
        margin-bottom: 7.8svh;
    }
    @media(max-width: ${o.Qh}){
        margin-bottom: 8.1svh;
    }
`,a=n.AH`
margin-top: 8.3svh;

@media(max-width: ${o.u3}){
    margin-top: 11.7svh;
}

@media(max-width: ${o.Qh}){
    margin-top: 7.7svh;
}
`,d=n.AH`
margin-bottom: 5.5svh;
`,l=n.AH`
    margin-bottom: 4.1svh;

    @media(max-width: ${o.u3}){
        margin-bottom: 5svh;
    }

    @media(max-width: ${o.Qh}){
        margin-bottom: 3.2svh;
    }
`,h=n.AH`
margin-bottom: 2svh;
`},7374:(t,e,i)=>{i.d(e,{aR:()=>V,my:()=>G,Gr:()=>B,LN:()=>O,TK:()=>_,Cc:()=>E,ft:()=>L,rM:()=>T,mU:()=>P,Fw:()=>F,zY:()=>N,_D:()=>H,sg:()=>M,OO:()=>J,lQ:()=>R,CY:()=>X,hK:()=>W});var n=i(5464),o=i(5013),s=i(5475),r=i(5043),a=i(6720);const d=i.p+"static/media/disk.fad3711362280129687d.webp";var l=i(8738),h=i(579);const c=n.Ay.div`
  width: ${t=>{let{isOpen:e}=t;return e?"42px":"68px"}};
  height: ${t=>{let{isOpen:e}=t;return e?"42px":"14px"}}; 
  z-index: 4;
  cursor: pointer;
  position: relative;
  //clip-path: ${t=>{let{isOpen:e}=t;return e?"inset(7px 0px 7px 0px)":"none"}};
  transition: width 0.3s ease, height 0.3s ease;
  
  div {
    position: absolute;
    background-color: #dfdfdf;
    height: 2px;
    width: 100%;
    transition: top 0.3s ease, bottom 0.3s ease, transform 0.3s ease, background-color 0.1s ease;
    z-index: 4;
    border-radius: 1px;
    
    
    &:nth-child(1) {
      top: ${t=>{let{isOpen:e}=t;return e?"20px":"0"}};
      transform: ${t=>{let{isOpen:e}=t;return e?"rotate(45deg)":"rotate(0)"}}; /* Поворот и сдвиг полоски */
    }
    
    &:nth-child(2) {
      bottom: ${t=>{let{isOpen:e}=t;return e?"20px":"0"}};
      transform: ${t=>{let{isOpen:e}=t;return e?"rotate(-45deg) ":"rotate(0)"}}; /* Поворот и сдвиг полоски */
    }
  }
  
  &:hover {
    div {
      background-color: #adadad;
    }
  }
`;const m=function(t){let{isOpen:e,setIsOpen:i}=t;return(0,h.jsxs)(c,{isOpen:e,onClick:()=>i(!e),children:[(0,h.jsx)("div",{}),(0,h.jsx)("div",{})]})},w=i.p+"static/media/logoWhite.501f59a6627e41e4c100.webp";var f=i(4316),x=i(6945);const v=n.I4.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10svh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`,u=n.I4.div`
width: 94%;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: ${x.Qh}){
    width: 88%;
}
`;const p=[{title:"\u041e \u043d\u0430\u0441",link:x.Sf},{title:"\u041a\u0443\u0440\u0441\u044b",link:""},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",link:""}];function g(){const t={textDecoration:"none",fontSize:"1.25svw",color:"rgba(235, 235, 235, 1)",fontWeight:600,textTransform:"uppercase"};return(0,h.jsx)(u,{children:p.map((e=>{let{title:i,link:n}=e;return(0,h.jsx)(s.N_,{to:n,style:t,children:i})}))})}const b=n.I4.img`
    width: 4dvw;
    min-width: 94px;
    z-index: 4;
`;function $(){const[t,e]=(0,r.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k,{isOpen:t,setIsOpen:e}),(0,h.jsxs)(u,{children:[(0,h.jsx)(b,{src:w,alt:"logo"}),(0,h.jsx)(m,{isOpen:t,setIsOpen:e})]})]})}const j=n.I4.div`
    position: absolute;
    top: 0;
    width: 100svw;
    height: 100dvh;
    background-color: rgba(204, 51, 39, 1);
    transform: ${t=>{let{isOpen:e}=t;return e?"translateY(0)":"translateY(-150dvh)"}};
    transition: transform .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`,y=n.I4.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color: rgba(22, 21, 21, 1);
height: 44.5%;
a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    font-size: 6.6svw;
    text-transform: uppercase;
    @media (max-width: ${x.u3}){
        font-size: 6.6svw;
    }

    @media(max-width: ${x.Qh}){
        font-size: 15svw;
    }
}
`,z=[{title:"\u041e \u043d\u0430\u0441",link:x.Sf},{title:"\u043a\u0443\u0440\u0441\u044b",link:""},{title:"\u0411\u043b\u043e\u0433",link:""},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",link:""}];function k(t){let{isOpen:e,setIsOpen:i}=t;const[n,o]=(0,r.useState)(0),a=()=>{i(!1)};return(0,h.jsxs)(j,{onWheel:t=>{t.stopPropagation(),t.preventDefault()},onTouchStart:t=>{o(t.touches[0].clientY)},onTouchMove:t=>{t.preventDefault(),t.stopPropagation();const e=t.touches[0].clientY;n-e>50&&i(!1)},isOpen:e,children:[(0,h.jsx)(y,{children:z.map((t=>{let{title:e,link:i}=t;return(0,h.jsx)(s.N_,{onClick:a,to:i,children:e})}))}),(0,h.jsx)(f.q,{bottom:"6svh"})]})}const A=function(){return(0,h.jsx)(v,{children:l.xl?(0,h.jsx)(g,{}):(0,h.jsx)($,{})})};var I=i(7630),Q=i(229);n.AH`
    font-size: 0.9svw;

    @media (max-width: ${x.u3}){
        font-size: 1.8svw;
    }
    @media (max-width: ${x.Qh}){
        font-size: 4.3svw;
    }
`,n.AH`
    font-size: 3.3svw;

    @media (max-width: ${x.u3}){
        font-size: 6.6svw;
    }
    @media (max-width: ${x.Qh}){
        font-size: 11.1svw;
    }
`,n.AH`
font-size: 7.7svw;

@media (max-width: ${x.u3}){
        font-size: 15.4svw;
    }
    @media (max-width: ${x.Qh}){
        font-size: 15.4svw;
    }
`,n.AH`
font-size: 1.8svw;
@media (max-width: ${x.u3}){
        font-size: 3.7svw;
    }
    @media (max-width: ${x.Qh}){
        font-size: 8svw;
    }
`;const C=n.Ay.div`
width: 100%;
background-color: #161515;
overflow: hidden;
color: rgba(235, 235, 235, 1);
overscroll-behavior-y: none;
position: relative;
`,O=t=>{let{children:e}=t;return(0,h.jsx)(C,{id:"page",children:e})},S=n.Ay.div`
width: 100%;
height: 100svh;
position: relative;
//overflow: hidden;
`,H=t=>{let{children:e,id:i}=t;return(0,h.jsxs)(S,{id:i,children:[(0,h.jsx)(A,{}),e]})},M=n.Ay.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100svw;
height: 44svw;
z-index: 1;
pointer-events: none;
`,_=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
`,D=n.Ay.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 94%;
display: flex;
flex-direction: column;
align-items: center;
`,N=t=>{let{lines:e,smallHeader:i,children:n}=t;const o=e.map((t=>t));return(0,h.jsxs)(D,{children:[o.map(((t,e)=>(0,h.jsx)("div",{children:(0,h.jsx)(t,{style:{width:"100%",flexGrow:0,height:"auto"}},e)}))),(0,h.jsx)(W,{}),i&&(0,h.jsx)(Y,{children:i}),n&&n]})},Y=n.Ay.h2`
    width: 46svw;
    font-size: 3.3svw;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    @media(max-width: ${x.u3}){
        width: 55svw;
        font-size: 3.7svw;
    }
    @media (max-width: ${x.Qh}) {
        width: 61svw;
        font-size: 4.3svw;
    }

`,E=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`,L=(0,n.Ay)(o.A)`
margin: 0;
margin-top: -2.4svw;
${I.mj}
max-width: 95%;
font-size: 7.7svw;
text-align: center;
font-weight: 700;
letter-spacing: -0.4svw;
color: #CC3327;
text-transform: uppercase;
word-break: ${t=>{let{wordBreak:e}=t;return e?"break-all":"normal"}};

@media(max-width: ${x.u3}){
    font-size: 15.4svw;
}

@media (max-width: ${x.Qh}) {
    font-size: 15svw;
    //width: fit-content;
}
`,T=(0,n.Ay)(o.A)`
    width: 94%;
    display: flex;
    ${I.mj}
    z-index: 1;
    justify-content: ${l.v1||l.xl?"flex-end":"center"};

    @media (max-width: ${x.Qh}){
        flex-direction: column;
        width: 88%;
    }
`,W=n.Ay.div`
height: 4.15svh;

@media (max-width: ${x.u3}){
    height: 3.9svh;
}

@media (max-width: ${x.Qh}){
    height: 3.2svh;
}
`,F=n.Ay.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${x.u3}) {
        width: 62%;
    }
    @media (max-width: ${x.Qh}) {
        width: 100%;
    }
`,P=n.Ay.a`
    display: block;
        width: 69%;
        font-weight: ${t=>{let{weight:e}=t;return e}};
        text-align: justify;
        letter-spacing: -2%;
        font-size: 0.9svw;
        text-transform: ${t=>{let{upperCase:e}=t;return e?"uppercase":"none"}};

        @media (max-width: ${x.u3}){
            width: 100%;
            font-size: 1.8svw;
        }
        @media (max-width: ${x.Qh}){
            width: 100%;
            font-size: 3.8svw;
        }
`,K=(0,n.Ay)(o.A)`
display: block;
width: 46.9%;
font-weight: 600;
${I.mj}
z-index: 1;
text-align: center;
font-size: 1.8svw;
text-transform: uppercase;

@media(max-width: ${x.u3}){
    width: 94%;
    font-size: 3.7svw;
}

@media(max-width: ${x.Qh}){
    width: 94%;
    font-size: 8.6svw;
}
span{
    font-style: italic;
    color: #CC3327;
    font-weight: 900;
}
`,V=t=>{let{children:e,phrase:i}=t;return(0,h.jsx)(K,{type:"a",children:(0,Q.Ay)(i)})},q=(0,n.Ay)(s.N_)`
            display: block;
            text-decoration: none;
            color: inherit;
            font-weight: 600;
            font-size: 1.8svw;
            text-transform: uppercase;
    @media (max-width: ${x.u3}){
        font-size: 3.7svw;
    }
    @media (max-width: ${x.Qh}){
        font-size: 4.3svw;
    }
`,B=t=>{let{children:e,to:i,style:n}=t;return(0,h.jsxs)(q,{to:i,style:{...n},children:[e," ",(0,h.jsx)(a.lt,{style:{scale:"1.4",transform:"translateY(6%)"}})]})},G=n.Ay.div`
    height: 102svh;
    aspect-ratio: 1/1;
    background-image: url(${d});
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%,-50%);
    z-index: 0;

    &::before{
        content:'';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(204, 51, 39, 1);
        width: 33.5%;
        aspect-ratio: 1/1;
        border-radius: 100%;
    }

    &::after{
        content:'';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #000000;
        width: 2%;
        aspect-ratio: 1/1;
        border-radius: 100%;
        z-index: 1;
    }

    @media(max-width: ${x.u3}){
        height: 80svh;
    }
`,R=n.AH`
    background-color: ${t=>{let{hover:e}=t;return e?"rgba(204, 51, 39, 1)":"inherit"}};
    border: solid rgba(204, 51, 39, 1);
    text-decoration: none;
    color: ${t=>{let{hover:e}=t;return e?"rgba(235, 235, 235, 1)":"rgba(204, 51, 39, 1)"}};
    font-Weight: 800;
    font-size: 1.8svw;
    text-transform: uppercase;
    padding-top: 1svw;
    padding-bottom: 1svw;
    padding-right: 3svw;
    padding-left: 3svw;
    border-radius: 5px;
    display: block;
    width: fit-content;
    font-family: inherit;
    transition: background-color .1s ease-in-out, color .1s ease-in-out;
    cursor: pointer;
    user-select: none;
    @media(max-width: ${x.u3}){
        font-size: 3.7svw;
    }
    @media(max-width: ${x.Qh}){
        font-size: 5.7svw;
        padding-top: 3svw;
        padding-bottom: 3svw;
        padding-right: 5svw;
        padding-left: 5svw;
    }
`,U=(0,n.Ay)(s.N_)`
   ${R}
`,X=t=>{let{to:e,style:i,onClick:n,hover:o,children:s}=t;const[a,d]=(0,r.useState)(o||!1);return(0,h.jsx)(U,{onMouseEnter:()=>d(!a),onMouseLeave:()=>d(!a),to:e,style:i,onClick:n,hover:a,children:s})},Z=n.Ay.button`
${R}
`,J=t=>{let{style:e,onClick:i,hover:n,children:o}=t;const[s,a]=(0,r.useState)(n||!1);return(0,h.jsx)(Z,{onMouseEnter:()=>a(!s),onMouseLeave:()=>a(!s),style:e,onClick:i,hover:s,children:o})}},3945:(t,e,i)=>{i.d(e,{A:()=>w});var n=i(5043),o=i(2382),s=(i(4430),i(9078),i(5464)),r=i(7196),a=i(6945),d=i(579),l=function(t){return t[t.prev=0]="prev",t[t.next=1]="next",t}(l||{});const h=s.I4.div`
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
@media(max-width: ${a.u3}){
    font-size: 15.4svw;
    
}

@media (max-width: ${a.Qh}) {
    font-size: 20svw;
}
`,m=s.I4.div`
width: 100svw;
z-index: 1;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${a.u3}){
    width: 110svw;
    
}

@media (max-width: ${a.Qh}) {
    width: 113svw;
}
`;const w=function(t){let{children:e,slidesToShow:i,childrenLength:s,infinite:a}=t;const w=(0,n.useRef)(null),f=null!==a&&void 0!==a?a:s>i,x={arrows:!1,slidesToScroll:1,infinite:f,dots:f,slidesToShow:i};return(0,d.jsxs)(h,{children:[f&&(0,d.jsxs)(m,{children:[(0,d.jsx)(c,{type:l.prev,onClick:()=>{var t;null===(t=w.current)||void 0===t||t.slickPrev()},children:(0,d.jsx)(r.WZN,{})}),(0,d.jsx)(c,{type:l.next,onClick:()=>{var t;null===(t=w.current)||void 0===t||t.slickNext()},children:(0,d.jsx)(r.pjv,{})})]}),(0,d.jsx)(o.A,{ref:w,...x,children:e})]})}}}]);
//# sourceMappingURL=939.3125a73e.chunk.js.map