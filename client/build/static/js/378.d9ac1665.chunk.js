"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[378],{6148:(e,t,n)=>{n.d(t,{Fr:()=>s,Pv:()=>a,RJ:()=>o});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",o="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2791),o=n(5294);const s=async(e,t,n)=>await(0,o.Z)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(n),data:t}),i=e=>{const[t,n]=(0,a.useState)(null),[o,i]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),i(""),l(!0);try{let o=await s(e,t,a);n(o.data)}catch(o){i(o.massage)}finally{l(!1)}},response:t,error:o,isLoading:r}}},7378:(e,t,n)=>{n.r(t),n.d(t,{default:()=>te});var a=n(7630),o=n(4395),s=n(697),i=n(4663),r=n(6098),l=n(7607),d=n(2167),c=n(4035),m=n(4371),p=n(2155),g=n(3512),u=n(5803),h=n(6148),x=n(184);const f=(0,a.ZP)(o.Z)({maxWidth:"100%",background:"#f5f5f5",boxShadow:"none"}),j=(0,a.ZP)(s.Z)({minWidth:680,maxWidth:720,height:46,marginLeft:80,background:"#EAF1FB",borderRadius:8,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px","& >div":{width:"100%",padding:"0 5px"}}),b=(0,a.ZP)(s.Z)({width:"100%",display:"flex",justifyContent:"end","& >svg":{marginLeft:10,marginRight:0}}),Z=e=>{let{toggleDrawer:t}=e;return(0,x.jsx)(f,{position:"static",children:(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(l.Z,{onClick:t,color:"action"}),(0,x.jsx)("img",{src:h.Pv,alt:"logo",style:{width:110,marginLeft:10}}),(0,x.jsxs)(j,{children:[(0,x.jsx)(d.Z,{color:"action"}),(0,x.jsx)(r.ZP,{placeholder:"Search Mail"}),(0,x.jsx)(c.Z,{color:"action"})]}),(0,x.jsxs)(b,{children:[(0,x.jsx)(m.Z,{color:"action"}),(0,x.jsx)(p.Z,{color:"action"}),(0,x.jsx)(g.Z,{color:"action"}),(0,x.jsx)(u.Z,{color:"action"})]})]})})};var w=n(9953),y=n(2791),v=n(5905),S=n(4294),P=n(493),k=n(4852),D=n(4287),C=n(3026),E=n(2192),B=n(3513),T=n(4220),O=n(662);const R=[{name:"inbox",title:"Inbox",icon:D.Z},{name:"starred",title:"Starred",icon:C.Z},{name:"sent",title:"Sent",icon:E.Z},{name:"drafts",title:"Drafts",icon:B.Z},{name:"bin",title:"Bin",icon:T.Z},{name:"allmail",title:"All Mail",icon:O.Z}];var M=n(9818),A=n(890),F=n(539),H=n(6739),L=n(9825),_=n(4373),W=n(5372);const z={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},Y=(0,a.ZP)(s.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px",background:"#f2f6fc","& > p":{fontSize:14,fontWeight:600}}),I=(0,a.ZP)(s.Z)({display:"flex",flexDirection:"column",padding:"0 15px","& >div":{fontSize:14,borderBottom:"1px solid #f5f5f5",marginTop:10}}),N=(0,a.ZP)(s.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px",alignItems:"center",marginBottom:10}),U=(0,a.ZP)(S.Z)({background:"#0B57D0",color:"#fff",borderRadius:"20px",width:"100px",fontWeight:500,textTransform:"none",cursor:"pointer"}),G=e=>{let{openDialog:t,setOpenDialog:n}=e;const[a,o]=(0,y.useState)({}),s=(0,_.Z)(W.Y.saveSentEmail),i=(0,_.Z)(W.Y.saveDraftEmails),l={Host:"smtp.elasticemail.com",Username:"learningsmtp@yopmail.com",Password:"E6916B85B6A0DB2CBE7563C62A14DD698F1A",Port:2525},d=e=>{o({...a,[e.target.name]:e.target.value}),console.log(a)};return(0,x.jsxs)(M.Z,{open:t,PaperProps:{sx:z},children:[(0,x.jsxs)(Y,{children:[(0,x.jsx)(A.Z,{children:" New Message"}),(0,x.jsx)(H.Z,{fontSize:"small",onClick:e=>(e=>{e.preventDefault();const t={to:a.to,from:"anasua20august@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Anasua",starred:!1,type:"drafts"};i.call(t),i.error||(n(!1),o({}))})(e)})]}),(0,x.jsxs)(I,{children:[(0,x.jsx)(r.ZP,{placeholder:"Recipients",name:"to",onChange:e=>d(e)}),(0,x.jsx)(r.ZP,{placeholder:"Subject",name:"subject",onChange:e=>d(e)})]}),(0,x.jsx)(F.Z,{multiline:!0,rows:15,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},onChange:e=>d(e),name:"body"}),(0,x.jsxs)(N,{children:[(0,x.jsx)(U,{onClick:e=>(e=>{e.preventDefault(),window.Email&&window.Email.send({...l,To:a.to,From:"anasua20august@gmail.com",Subject:a.subject,Body:a.body}).then((e=>alert(e)));const t={to:a.to,from:"anasua20august@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Anasua",starred:!1,type:"sent"};s.call(t),s.error||(n(!1),o({})),n(!1)})(e),children:"Send"}),(0,x.jsx)(L.Z,{onClick:()=>n(!1)})]})]})};var J=n(7689),q=n(1087),K=n(5806);const Q=(0,a.ZP)(S.Z)({Background:"#c2e7ff",color:"#001d35",padding:15,borderRadius:16,minwidth:140,textTransform:"none"}),V=(0,a.ZP)(s.Z)({padding:8,"& > ul":{padding:"10px 0 0 5px",fontsize:14,fontweight:500,curser:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"& >ul> a> li >svg":{marginRight:20}}),X=()=>{const[e,t]=(0,y.useState)(!1),{type:n}=(0,J.UO)();return(0,x.jsxs)(V,{children:[(0,x.jsxs)(Q,{onClick:()=>{t(!0)},children:[(0,x.jsx)(v.Z,{}),"Compose"]}),(0,x.jsx)(P.Z,{children:R.map((e=>(0,x.jsx)(q.OL,{to:"".concat(K._.emails.path,"/").concat(e.name),children:(0,x.jsxs)(k.ZP,{style:n===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,x.jsx)(e.icon,{fontSize:"small"})," ",e.title]})},e.name)))}),(0,x.jsx)(G,{openDialog:e,setOpenDialog:t})]})},$=e=>{let{openDrawer:t}=e;return(0,x.jsx)(w.ZP,{anchor:"left",open:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{marginTop:"64px",width:250,background:"#f5f5f5",borderRight:"none",height:"calc(100vh-64px)"}},children:(0,x.jsx)(X,{})})};var ee=n(8927);const te=()=>{const[e,t]=(0,y.useState)(!0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{toggleDrawer:()=>{t((e=>!e))}}),(0,x.jsxs)(s.Z,{children:[(0,x.jsx)($,{openDrawer:e}),(0,x.jsx)(y.Suspense,{fallback:(0,x.jsx)(ee.Z,{}),children:(0,x.jsx)(J.j3,{context:{openDrawer:e}})})]})]})}},5372:(e,t,n)=>{n.d(t,{Y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=378.d9ac1665.chunk.js.map