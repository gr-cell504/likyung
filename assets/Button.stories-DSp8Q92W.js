import{R as P}from"./index-0yr9KlQE.js";const x=({primary:s=!1,size:e="medium",label:B="Button",onClick:S,..._})=>{const L={fontFamily:"Arial, sans-serif",fontWeight:700,border:s?"none":"1px solid #333",borderRadius:"4px",cursor:"pointer",fontSize:e==="small"?"12px":e==="large"?"16px":"14px",padding:e==="small"?"8px 12px":e==="large"?"12px 24px":"10px 16px",backgroundColor:s?"#1ea7fd":"transparent",color:s?"white":"#333"};return P.createElement("button",{type:"button",style:L,onClick:S,..._},B)};x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},label:{defaultValue:{value:"'Button'",computed:!1},required:!1}}};const q={title:"Example/Button",component:x,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{primary:!0,label:"Primary Button"}},r={args:{primary:!1,label:"Secondary Button"}},t={args:{size:"large",label:"Large Button"}},o={args:{size:"small",label:"Small Button"}};var l,n,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Primary Button'
  }
}`,...(u=(n=a.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Secondary Button'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,i,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Button'
  }
}`,...(g=(i=t.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const v=["Primary","Secondary","Large","Small"];export{t as Large,a as Primary,r as Secondary,o as Small,v as __namedExportsOrder,q as default};
