(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return a(5790)}])},5790:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return m},default:function(){return p}});var t=a(5893),l=a(9008),r=a.n(l),i=a(7294),n=a(3162),o=a(8813),c=a(3157),d=a(1163),u=JSON.parse('{"wZ":[{"description":"Nighthawk Coders Official 2023-2024 Ubuntu Focal 20.04 Desktop Workspace","docker_registry":"https://index.docker.io/v1/","image_src":"nighthawkcoders.png","name":"aaditgupta21/kasm-nighthawks:1.0.0","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development"],"friendly_name":"Ubuntu Focal","architecture":["amd64"],"compatibility":["1.13.x"],"uncompressed_size_mb":19000,"sha":"39989fa22f2e2ced0a8f4e1d4b4398e5db9c0179"},{"description":"Nighthawk Coders Official 2023-2024 Ubuntu Jammy 22.04 Desktop Workspace","docker_registry":"https://index.docker.io/v1.1/","image_src":"nighthawkcoders.png","name":"nighthawkcoders/kasm_workspaces:1.1","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development"],"friendly_name":"Ubuntu Jammy v1.1","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":4200,"sha":"8f53bc8629abd7941de07cb8df8e0a53cc1792f0"},{"description":"Nighthawk Coders Official 2023-2024 Ubuntu Jammy 22.04 Desktop Workspace","docker_registry":"https://index.docker.io/v1/","image_src":"nighthawkcoders.png","name":"nighthawkcoders/kasm_workspaces:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development"],"friendly_name":"Ubuntu Jammy latest","architecture":["amd64"],"compatibility":["1.14.x"],"uncompressed_size_mb":4200,"sha":"c5f49c1c9777d1798556f6a18bbf859ad10aabe8"},{"description":"Nighthawk Coders Official 2023-2024 Ubuntu Jammy 22.04 Desktop Workspace","docker_registry":"https://index.docker.io/v1/","image_src":"nighthawkcoders.png","name":"nighthawkcoders/kasm_workspaces:1.0","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development"],"friendly_name":"Ubuntu Jammy","architecture":["amd64"],"compatibility":["1.13.x"],"uncompressed_size_mb":4200,"sha":"cb707439aaa86690bc31d24a91bc56463eb5e357"},{"friendly_name":"Ubuntu 22.04 Student Edition","image_src":"nighthawkcoders-stu-edition.png","description":"This Dockerfile creates a Docker image based on Ubuntu, with Google Chrome and Visual Studio Code pre-installed. It\'s designed to provide students with a consistent, ready-to-use development environment on any device.","name":"nighthawkcoders/pusd-student-ubuntu:1.14.0-rolling","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1.1/","categories":["Desktop","Development"],"require_gpu":false,"enabled":true,"image_type":"Container","run_config":{"hostname":"kasm"},"architecture":["amd64","arm64"],"compatibility":["1.14.x"],"uncompressed_size_mb":4200,"sha":"a9ead713baf977c56541fbfd5049e2285dcff6e8"}]}'),m=!0;function p(e){let{workspace:s}=e,l=(0,i.useRef)(null),m=(0,i.useRef)(null),p=(0,i.useRef)(null),[f,b]=(0,i.useState)(null),[g,x]=(0,i.useState)(null),[_,v]=(0,i.useState)(null),[k,w]=(0,i.useState)("png"),[y,j]=(0,i.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,C]=(0,i.useState)(N);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===s)p.current.value="",l.current.value="",m.current.value="",b(null),x(null),v(null),C(N);else if(s&&s[0]){let e=u.wZ.find(e=>e.name===atob(s[0]));if(delete e.sha,p.current.value=e.description,l.current.value=e.name,m.current.value=e.friendly_name,e.categories){let a=[];e.categories.map(e=>a.push({label:e,value:e})),b(a)}if(e.architecture){let t=[];e.architecture.map(e=>t.push({label:e,value:e})),x(t)}j("../../icons/"+e.image_src),C({...S,...e})}},[s]);let D={control:(e,s)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,s){let{data:a}=s;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=L(e.friendly_name)+"."+k,C(e)}},[k]);let U=e=>{let s={...S};s.categories=e.map(e=>e.value),C(s);let a=[];s.categories.map(e=>a.push({label:e,value:e})),b(a)},R=e=>{let s={...S};s.architecture=e.map(e=>e.value),C(s);let a=[];s.architecture.map(e=>a.push({label:e,value:e})),x(a)};function L(e){var s=e.toString().toLowerCase();return(s=(s=(s=s.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let A=()=>{var e=a(5733);let s=new e,t=s.folder(S.friendly_name);if(t.file("workspace.json",JSON.stringify(S,null,2)),_)t.file(S.image_src,_.file);else if(y){let l=fetch(y).then(e=>e.blob());t.file(S.image_src,l)}s.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,L(S.friendly_name)+".zip")})},O=e=>{let s={...S};s[e.target.name]=e.target.value,"icon"===e.target.name&&(delete s.icon,v({value:e.target.value,file:e.target.files[0]}),w(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),j(null)),s.friendly_name&&(s.image_src=L(s.friendly_name)+"."+k),C(s)};return(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Kasm Workspaces"}),(0,t.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,t.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,t.jsx)("input",{type:"file",name:"icon",onChange:O,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,t.jsx)("input",{ref:m,name:"friendly_name",onChange:O,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,t.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:U,styles:D,value:f}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,t.jsx)("input",{ref:p,name:"description",onChange:O,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,t.jsx)("input",{ref:l,name:"name",onChange:O,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,t.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,t.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:R,styles:D,value:g}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,t.jsx)(h,{workspace:S,icon:_,inlineImage:y}),(0,t.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,t.jsx)("button",{onClick:A,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:s,icon:a,inlineImage:l}=e,[r,n]=(0,i.useState)(!1),o=null;if(a){let c=new Blob([a.file]);o=URL.createObjectURL(c),s.image_src=o}return(0,t.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,t.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,t.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:s.image_src,onError(e){null!==l&&(e.target.src=l)},alt:s.friendly_name}),(0,t.jsxs)("div",{className:"flex-col pl-28",children:[(0,t.jsx)("div",{className:"font-bold",children:s.friendly_name||"Friendly Name"}),(0,t.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Del Norte HS Computer Science"," ",(0,t.jsx)("span",{children:void 0})]}),(0,t.jsx)("div",{className:" h-8"})]}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[s.architecture&&s.architecture.map((e,s)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+s)),s.categories.map((e,s)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+s))]}),!1]}),(0,t.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,t.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,t.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,t.jsx)("div",{className:"font-bold",children:s.friendly_name})," ",s.description]}),(0,t.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,t.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,t.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);