"use strict";(self.webpackChunkgrecords_academy=self.webpackChunkgrecords_academy||[]).push([[888],{9572:(e,t,s)=>{s.r(t),s.d(t,{default:()=>de});var i=s(5043),r=s(5464),a=s(5843),n=s(579);const o=r.AH`
    opacity: ${e=>{let{inView:t}=e;return t?"1":"0"}};
    transform: ${e=>{let{inView:t}=e;return t?"none":"translateY(4svh)"}};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`,l=r.I4.div`
    ${o}
`,d=r.I4.h1`
    ${o}
`,c={img:r.I4.img`
    ${o}
`,h1:d,div:l,a:r.I4.a`
    ${o}
`};const u=function(e){let{children:t,threshold:s,type:i,...r}=e;const{ref:o,inView:l}=(0,a.Wx)({triggerOnce:!0,threshold:s}),d=c[i];return(0,n.jsx)(d,{inView:l,ref:o,...r,children:t})};var h=s(5475),p=s(652);const C=s.p+"static/media/disk.fad3711362280129687d.webp";var m=s(6622),f=s(1173);const x=r.Ay.div`
width: 100%;
height: 100dvh;
background-color: #161515;
overflow: hidden;
color: rgba(235, 235, 235, 1);
overscroll-behavior-y: none;
`,g=e=>{let{children:t}=e;const s=(0,i.useRef)(null),{setScrollbar:r}=(0,i.useContext)(f.x);return(0,i.useEffect)((()=>{if(s.current){const e=m.A.init(s.current,{damping:.08,alwaysShowTracks:!1,delegateTo:document,renderByPixels:!0});return r(e),()=>{r(void 0),e.destroy()}}}),[]),(0,n.jsx)(x,{id:"page",ref:s,children:t})},w=r.Ay.div`
width: 100%;
height: 100svh;
position: relative;
overflow: hidden;
`,v=r.Ay.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100svw;
height: 44svw;
z-index: 1;
`,H=r.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
`,y=r.Ay.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 94%;
overflow: hidden;
`,V=e=>{let{header:t}=e;const s=t;return(0,n.jsx)(y,{children:(0,n.jsx)(s,{width:"100%"})})},b=r.Ay.h2`
width: 46svw;
    font-size: 3.3svw;
    position: absolute;
top: 63.6%;
left: 50%;
transform: translate(-50%);
text-align: center;

@media (max-width: 600px) {
    top: 55%;
}
`,j=r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`,L=(0,r.Ay)(u)`
margin: 0;
margin-top: -2.4svw;
margin-bottom: 8.3svh;
width: 100%;
height: 8.3svw;
font-size: 7.7svw;
text-align: center;
font-weight: 700;
letter-spacing: -0.4svw;
color: #CC3327;

@media (max-width: 600px){
    font-size: 10svw;
    margin-top: 2.7svh;
    margin-bottom: 5.5svh;
}
`,E=(0,r.Ay)(u)`
    width: 100%;
    display: flex;
    margin-bottom: 8.3svh;
    z-index: 1;
`,z=r.Ay.div`
height: 4.15svh;
`,A=r.Ay.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`,I=r.Ay.a`
    display: block;
        width: 66%;
        font-size: 18px;
        font-weight: ${e=>{let{weight:t}=e;return t}};
        text-align: left;
        letter-spacing: -2%;

        @media (max-width: 1600px){
        font-size: 16px;
      }

    @media (max-width: 1400px){
        font-size: 14px;
      }

    @media (max-width: 600px){
      font-size: 16px;
    }

    @media (max-width: 360px){
        font-size: 14px;
      }

`,M=(0,r.Ay)(u)`
display: block;
width: 46.9%;
font-size: 1.8svw;
font-weight: 600;
margin-bottom: 8.3svh;
z-index: 1;
text-align: center;
span{
    font-style: italic;
    color: #CC3327;
}
`,P=e=>{let{children:t,to:s,style:i}=e;return(0,n.jsxs)(h.N_,{to:s,style:{textDecoration:"none",color:"inherit",fontSize:"1.8svw",fontWeight:"600",...i},children:[t," ",(0,n.jsx)(p.lt,{style:{scale:"1.4",transform:"translateY(5%)"}})]})},k=r.Ay.div`
    height: 102svh;
    aspect-ratio: 1/1;
    background-image: url(${C});
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
`,Z=r.I4.div`
width: 22.7svw;
aspect-ratio: 1/1;
position: absolute;
z-index: ${e=>{let{zIndex:t}=e;return t}};
//transform: rotate(${e=>{let{rotate:t}=e;return t}}deg);
filter: drop-shadow(0px 4px 10px #00000090);


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;const _=function(e){let{src:t,id:s,rotate:i,zIndex:r}=e;return(0,n.jsx)(Z,{id:s,rotate:i,zIndex:r,children:(0,n.jsx)("img",{src:t,alt:"album"})})};var B,q;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)({}).hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},$.apply(null,arguments)}function S(e,t){let{title:s,titleId:r,...a}=e;return i.createElement("svg",$({width:1826,height:282,viewBox:"0 0 1826 282",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),s?i.createElement("title",{id:r},s):null,B||(B=i.createElement("g",{filter:"url(#filter0_d_1_18398)"},i.createElement("path",{d:"M111.631 230.672H76.7897L71.7272 173.672H44.6283L38.6724 230.672H8L34.2056 2.07812H85.4256L111.631 230.672ZM58.9222 33.5469L47.904 143.688H68.7493L58.9222 33.5469Z",fill:"#CC3327"}),i.createElement("path",{d:"M156.197 230.672H122.249V2.07812H156.197V100.047H156.793L183.594 2.07812H216.947L185.977 109.25L218.436 230.672H182.105L156.793 117.266H156.197V230.672Z",fill:"#CC3327"}),i.createElement("path",{d:"M323.342 230.672H288.5L283.438 173.672H256.339L250.383 230.672H219.711L245.916 2.07812H297.136L323.342 230.672ZM270.633 33.5469L259.615 143.688H280.46L270.633 33.5469Z",fill:"#CC3327"}),i.createElement("path",{d:"M323.239 201.281H325.324C331.875 201.281 335.151 192.177 335.151 173.969V2.07812H422.404V201.281H431.933V266H401.558V230.672H353.912V266H323.239V201.281ZM364.335 201.281H388.753V32.6562H367.908V174.266C367.908 186.932 366.717 195.938 364.335 201.281Z",fill:"#CC3327"}),i.createElement("path",{d:"M521.007 230.672H444.177V2.07812H521.007V31.4688H478.721V89.9531H518.923V119.344H478.721V201.281H521.007V230.672Z",fill:"#CC3327"}),i.createElement("path",{d:"M618.825 2.07812H669.449V230.672H639.67V47.5H638.777L618.527 230.672H589.343L568.498 47.5H567.902V230.672H537.528V2.07812H588.152L605.424 164.766H606.02L618.825 2.07812Z",fill:"#CC3327"}),i.createElement("path",{d:"M690.785 2.07812H722.351V124.094H722.947L747.961 2.07812H779.527V230.672H747.961V108.656H747.366L722.351 230.672H690.785V2.07812Z",fill:"#CC3327"}),i.createElement("path",{d:"M888.553 230.672H854.903V133.297H854.307L829.888 230.672H794.451L820.359 133.594C816.587 132.604 813.212 131.12 810.234 129.141C802.889 123.995 799.216 107.667 799.216 80.1562V52.8437C799.216 31.0729 802.194 17.2187 808.15 11.2812C814.106 5.14583 828.003 2.07812 849.84 2.07812H888.553V230.672ZM854.903 29.3906H842.396C840.41 29.3906 839.021 29.5885 838.227 29.9844C835.447 31.3698 834.058 39.7812 834.058 55.2188V80.4531C834.058 96.6823 835.547 105.589 838.524 107.172C839.517 107.766 840.807 108.062 842.396 108.062H854.903V29.3906Z",fill:"#CC3327"}),i.createElement("path",{d:"M1039.87 196.828V137.453H1027.07V106.875H1074.42V196.828C1074.42 203.755 1073.82 209.297 1072.63 213.453C1068.86 226.318 1054.37 232.75 1029.15 232.75C1013.47 232.75 1002.45 230.672 996.098 226.516C987.958 221.172 983.888 211.276 983.888 196.828V35.9219C983.888 21.474 987.958 11.5781 996.098 6.23437C1002.45 2.07812 1013.47 0 1029.15 0C1054.37 0 1068.86 6.43229 1072.63 19.2969C1073.82 23.4531 1074.42 28.9948 1074.42 35.9219V78.6719H1039.87V35.9219C1039.87 31.9635 1039.08 29.4896 1037.49 28.5C1036.1 27.3125 1033.32 26.7187 1029.15 26.7187C1024.98 26.7187 1022.1 27.3125 1020.52 28.5C1019.13 29.4896 1018.43 31.9635 1018.43 35.9219V196.828C1018.43 200.786 1019.13 203.359 1020.52 204.547C1022.1 205.536 1024.98 206.031 1029.15 206.031C1033.32 206.031 1036.1 205.536 1037.49 204.547C1039.08 203.359 1039.87 200.786 1039.87 196.828Z",fill:"#CC3327"}),i.createElement("path",{d:"M1092.99 230.672V2.07812H1132C1153.84 2.07812 1167.74 5.14583 1173.69 11.2812C1179.65 17.2187 1182.63 31.0729 1182.63 52.8437V80.1562C1182.63 107.667 1179.05 123.995 1171.91 129.141C1169.13 131.12 1165.65 132.604 1161.48 133.594L1187.39 230.672H1151.95L1127.54 133.297H1126.94V230.672H1092.99ZM1126.94 29.3906V108.062H1139.45C1141.23 108.062 1142.62 107.766 1143.62 107.172C1146.4 105.589 1147.78 97.375 1147.78 82.5312V51.3594C1147.78 38.2969 1146.49 31.1719 1143.91 29.9844C1143.12 29.5885 1141.63 29.3906 1139.45 29.3906H1126.94Z",fill:"#CC3327"}),i.createElement("path",{d:"M1279.15 230.672H1202.32V2.07812H1279.15V31.4688H1236.87V89.9531H1277.07V119.344H1236.87V201.281H1279.15V230.672Z",fill:"#CC3327"}),i.createElement("path",{d:"M1349.87 78.6719V35.9219C1349.87 31.9635 1349.08 29.4896 1347.49 28.5C1346.1 27.3125 1343.32 26.7187 1339.15 26.7187C1334.98 26.7187 1332.1 27.3125 1330.51 28.5C1328.93 29.4896 1328.13 31.9635 1328.13 35.9219V196.828C1328.13 200.786 1328.93 203.359 1330.51 204.547C1332.1 205.536 1334.98 206.031 1339.15 206.031C1343.32 206.031 1346.1 205.536 1347.49 204.547C1349.08 203.359 1349.87 200.786 1349.87 196.828V148.141H1384.41V196.828C1384.41 203.755 1383.82 209.297 1382.63 213.453C1378.86 226.318 1364.36 232.75 1339.15 232.75C1323.47 232.75 1312.45 230.672 1306.1 226.516C1297.96 221.172 1293.89 211.276 1293.89 196.828V35.9219C1293.89 21.474 1297.96 11.5781 1306.1 6.23437C1312.45 2.07812 1323.47 0 1339.15 0C1364.36 0 1378.86 6.43229 1382.63 19.2969C1383.82 23.4531 1384.41 28.9948 1384.41 35.9219V78.6719H1349.87Z",fill:"#CC3327"}),i.createElement("path",{d:"M1400.9 35.9219C1400.9 21.276 1404.97 11.3802 1413.11 6.23437C1419.47 2.07812 1430.49 0 1446.17 0C1471.38 0 1485.87 6.43229 1489.65 19.2969C1490.84 23.4531 1491.43 28.9948 1491.43 35.9219V196.828C1491.43 203.755 1490.84 209.297 1489.65 213.453C1485.87 226.318 1471.38 232.75 1446.17 232.75C1430.49 232.75 1419.47 230.672 1413.11 226.516C1404.97 221.37 1400.9 211.474 1400.9 196.828V35.9219ZM1456.89 196.828V35.9219C1456.89 31.9635 1456.1 29.4896 1454.51 28.5C1453.12 27.3125 1450.34 26.7187 1446.17 26.7187C1442 26.7187 1439.12 27.3125 1437.53 28.5C1435.94 29.4896 1435.15 31.9635 1435.15 35.9219V196.828C1435.15 200.786 1435.94 203.359 1437.53 204.547C1439.12 205.536 1442 206.031 1446.17 206.031C1450.34 206.031 1453.12 205.536 1454.51 204.547C1456.1 203.359 1456.89 200.786 1456.89 196.828Z",fill:"#CC3327"}),i.createElement("path",{d:"M1511.47 230.672V2.07812H1550.48C1572.32 2.07812 1586.21 5.14583 1592.17 11.2812C1598.13 17.2187 1601.1 31.0729 1601.1 52.8437V80.1562C1601.1 107.667 1597.53 123.995 1590.38 129.141C1587.6 131.12 1584.13 132.604 1579.96 133.594L1605.87 230.672H1570.43L1546.01 133.297H1545.42V230.672H1511.47ZM1545.42 29.3906V108.062H1557.92C1559.71 108.062 1561.1 107.766 1562.09 107.172C1564.87 105.589 1566.26 97.375 1566.26 82.5312V51.3594C1566.26 38.2969 1564.97 31.1719 1562.39 29.9844C1561.6 29.5885 1560.11 29.3906 1557.92 29.3906H1545.42Z",fill:"#CC3327"}),i.createElement("path",{d:"M1655.34 29.3906V203.359H1665.17C1669.94 203.359 1673.11 201.578 1674.7 198.016C1675.49 195.839 1675.89 191.88 1675.89 186.141V47.2031C1675.89 35.3281 1672.42 29.3906 1665.47 29.3906H1655.34ZM1621.1 230.672V2.07812H1673.81C1680.56 2.07812 1686.12 2.67186 1690.48 3.85936C1703.78 7.42186 1710.43 21.5729 1710.43 46.3125V189.406C1710.43 204.25 1708.05 214.641 1703.29 220.578C1697.93 227.307 1688.1 230.672 1673.81 230.672H1621.1Z",fill:"#CC3327"}),i.createElement("path",{d:"M1728.07 145.766H1762.02V196.828C1762.02 200.786 1762.81 203.359 1764.4 204.547C1765.99 205.536 1768.86 206.031 1773.03 206.031C1777.2 206.031 1779.98 205.536 1781.37 204.547C1782.96 203.359 1783.75 200.786 1783.75 196.828V169.516C1783.75 162.984 1782.56 157.443 1780.18 152.891C1778.59 149.724 1776.21 146.062 1773.03 141.906C1772.04 140.521 1764.89 131.812 1751.59 115.781C1742.26 104.5 1735.91 95.5937 1732.53 89.0625C1729.56 83.3229 1728.07 74.8125 1728.07 63.5312V34.7344C1728.07 20.2865 1732.14 10.5885 1740.28 5.64062C1746.43 1.88021 1757.35 0 1773.03 0C1798.45 0 1812.84 6.43229 1816.21 19.2969C1817.4 23.651 1818 29.1927 1818 35.9219V82.2344H1783.75V35.9219C1783.75 31.9635 1782.96 29.4896 1781.37 28.5C1779.98 27.3125 1777.2 26.7187 1773.03 26.7187C1768.86 26.7187 1765.99 27.3125 1764.4 28.5C1762.81 29.4896 1762.02 31.9635 1762.02 35.9219V62.3437C1762.02 67.6875 1763.31 72.6354 1765.89 77.1875C1767.08 79.3646 1769.46 82.7292 1773.03 87.2812C1780.18 95.9896 1787.23 104.698 1794.18 113.406C1803.71 125.083 1809.96 133.99 1812.94 140.125C1816.31 146.854 1818 155.76 1818 166.844V198.016C1818 212.464 1813.93 222.161 1805.79 227.109C1799.64 230.87 1788.72 232.75 1773.03 232.75C1747.62 232.75 1733.23 226.318 1729.85 213.453C1728.66 209.099 1728.07 203.557 1728.07 196.828V145.766Z",fill:"#CC3327"}))),q||(q=i.createElement("defs",null,i.createElement("filter",{id:"filter0_d_1_18398",x:.169761,y:0,width:1825.66,height:281.66,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dy:7.83024}),i.createElement("feGaussianBlur",{stdDeviation:3.91512}),i.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),i.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_18398"}),i.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_18398",result:"shape"})))))}const T=i.forwardRef(S);s.p;var U=s(4851);const O=s.p+"static/media/Metalica.6b8b3ba211bc87c488ec.webp",F=s.p+"static/media/Bowie.ee64fb9fc792db28971f.webp",D=s.p+"static/media/Hendrix.a57501bb3a72dd7b1b03.webp",R=s.p+"static/media/ACDC.432d1b136259acfb9541.webp",W=s.p+"static/media/AnyAlbum.63e25a88e53bfc10acf8.webp",G=s.p+"static/media/PinkFloyd.b8862ae1ad51236defbd.webp";var N=s(8270),Y=s(4404),X=s(3334),J=s(229);const K=s.p+"static/media/Course.24dc3d84bcd89471ae6e.webp",Q=(0,r.I4)(u)`
    width: 94%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16.6svh;
`,ee=[{photo:K,title:"\u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",description:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:1}],te=r.I4.div`
    width: 50%;
`,se=r.I4.img`
width: 100%;
aspect-ratio: 1/1;
object-fit: cover;
`,ie=r.I4.a`
font-size: 3.3svw;
color: rgba(204, 51, 39, 1);
font-weight: 600;
display: block;
`,re=r.I4.a`
font-size: 1.8svw;
color: rgba(235, 235, 235, 1);
font-weight: 400;
display: block;
`,ae=r.I4.div`
height: 4.9svw;
width: 13.5svw;
display: flex;
justify-content: center;
align-Items: center;
border: 0.3svw solid rgba(204, 51, 39, 1);

a{
    display: block;
    color: rgba(204, 51, 39, 1);
    font-Size: 1.8svw;
    font-Weight: 800;
}
`;function ne(e){let{course:t}=e;const{title:s,description:i,photo:r,id:a}=t;return(0,n.jsxs)(te,{children:[(0,n.jsx)(se,{src:K,alt:"course"}),(0,n.jsx)(z,{}),(0,n.jsx)(ie,{children:s.toUpperCase()}),(0,n.jsx)(re,{children:i}),(0,n.jsx)(z,{}),(0,n.jsx)(h.N_,{to:`/academy/course/${a}`,style:{textDecoration:"none"},children:(0,n.jsx)(ae,{children:(0,n.jsx)("a",{children:"\u041f\u0415\u0420\u0415\u0419\u0422\u0418"})})})]})}const oe=()=>(0,n.jsx)(Q,{type:"div",threshold:.5,children:ee.map((e=>(0,n.jsx)(ne,{course:e})))}),le=[{src:O,startPosition:{x:"100%",y:"80%",rotate:23.33},endPosition:{x:"-88%",y:"100%",rotate:-3.33},rotate:23.33,zIndex:3},{src:F,startPosition:{x:"10%",y:"30%",rotate:12.4},endPosition:{x:"-98%",y:"50%",rotate:22.4},rotate:12.4,zIndex:2},{src:D,startPosition:{x:"130%",y:"20%",rotate:-20},endPosition:{x:"-90%",y:"10%",rotate:10},rotate:12.4,zIndex:1},{src:G,startPosition:{x:"210%",y:"90%",rotate:-6},endPosition:{x:"430%",y:"100%",rotate:10},rotate:12.4,zIndex:1},{src:R,startPosition:{x:"240%",y:"10%",rotate:-12},endPosition:{x:"425%",y:"10%",rotate:-20},rotate:12.4,zIndex:1},{src:W,startPosition:{x:"320%",y:"60%",rotate:10},endPosition:{x:"430%",y:"60%",rotate:-5},rotate:12.4,zIndex:1}];const de=function(){const[e,t]=(0,i.useState)(!0);N.Ay.registerPlugin(Y.u);const{scrollbar:s}=(0,i.useContext)(f.x);return(0,X.L)((()=>{if(s){Y.u.scrollerProxy("#page",{scrollTop(e){return arguments.length&&e&&(s.scrollTop=e),s.scrollTop},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight})}),s.addListener(Y.u.update);const e=N.Ay.timeline({scrollTrigger:{trigger:"#topBlock",start:"top top",end:"bottom -50%",scrub:!0,pin:!0,scroller:"#page"}});le.forEach(((t,s)=>{let{startPosition:i,endPosition:r}=t;e.fromTo(`#a${s}`,i,r,0)}));N.Ay.timeline({scrollTrigger:{trigger:"#contentBlock",start:"-=50% top",end:"bottom -50%",scrub:!0,scroller:"#page"}}).fromTo("#disk",{rotate:720},{rotate:0},0)}}),[s]),(0,i.useEffect)((()=>{(async()=>{const e=le.map((e=>{let{src:t}=e;return(e=>new Promise(((t,s)=>{const i=new Image;i.src=e,i.onload=t})))(t)}));await Promise.all(e),t(!1)})()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U.A,{isLoading:e}),(0,n.jsxs)(g,{children:[(0,n.jsxs)(w,{id:"topBlock",children:[(0,n.jsx)(v,{children:le.map(((e,t)=>(0,n.jsx)(_,{id:`a${t}`,src:e.src,rotate:e.rotate,zIndex:e.zIndex},t)))}),(0,n.jsx)(V,{header:T}),(0,n.jsx)(b,{children:"\u043a\u0443\u0440\u0441\u044b \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u0432 \u0448\u043e\u0443-\u0431\u0438\u0437\u043d\u0435\u0441\u0435".toUpperCase()})]}),(0,n.jsxs)(H,{children:[(0,n.jsxs)(j,{id:"contentBlock",children:[(0,n.jsx)(k,{id:"disk"}),(0,n.jsx)(L,{type:"h1",threshold:.5,children:"\u043e \u043d\u0430\u0441".toUpperCase()}),(0,n.jsx)(E,{type:"div",threshold:.5,style:{justifyContent:"flex-end"},children:(0,n.jsxs)(A,{children:[(0,n.jsx)(I,{weight:500,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ".toUpperCase()}),(0,n.jsx)(z,{}),(0,n.jsx)(I,{weight:300,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."})]})}),(0,n.jsx)(M,{type:"a",threshold:.5,children:(0,J.Ay)("\u0417\u0414\u0415\u0421\u042c <span>\u0411\u0423\u0414\u0415\u0422</span> \u041d\u0410\u041f\u0418\u0421\u0410\u041d\u041e \u0427\u0422\u041e-\u0422\u041e \u0418\u041d\u0422\u0415\u0420\u0415\u0421\u041d\u041e\u0415, \u041d\u041e \u0427\u0422\u041e \u041c\u042b \u041f\u041e\u041a\u0410 <span>\u041d\u0415 \u041f\u0420\u0418\u0414\u0423\u041c\u0410\u041b\u0418</span>. \u0417\u0414\u0415\u0421\u042c <span>\u0411\u0423\u0414\u0415\u0422</span> \u041d\u0410\u041f\u0418\u0421\u0410\u041d\u041e \u0427\u0422\u041e-\u0422\u041e \u0418\u041d\u0422\u0415\u0420\u0415\u0421\u041d\u041e\u0415, \u041d\u041e \u0427\u0422\u041e \u041c\u042b \u041f\u041e\u041a\u0410 <span>\u041d\u0415 \u041f\u0420\u0418\u0414\u0423\u041c\u0410\u041b\u0418</span>.".toUpperCase())}),(0,n.jsx)(E,{type:"div",threshold:.5,style:{justifyContent:"flex-end"},children:(0,n.jsxs)(A,{children:[(0,n.jsx)(I,{weight:300,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."}),(0,n.jsx)(z,{}),(0,n.jsx)(I,{weight:300,children:"Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]})}),(0,n.jsx)(P,{style:{transform:"translateX(50%)",marginBottom:"16.6svh"},to:"/",children:"\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415"})]}),(0,n.jsxs)(j,{children:[(0,n.jsx)(L,{type:"h1",threshold:.5,children:"\u041d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b".toUpperCase()}),(0,n.jsx)(oe,{})]})]})]})]})}}}]);
//# sourceMappingURL=888.ce54b215.chunk.js.map