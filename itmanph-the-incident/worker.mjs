// IT MAN PH — The Incident V9: cloud-synchronized settings via Cloudflare KV.
// All updates are verified on the server. Do NOT put the admin secret in public HTML.
const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const simple=(message,status)=>new Response(message,{status,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}});
const key='seminar-settings-v1';
function secureEqual(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let d=0;for(let i=0;i<a.length;i++)d|=a.charCodeAt(i)^b.charCodeAt(i);return d===0}
function authorized(request,env,password){return typeof env.ADMIN_PASSWORD==='string'&&env.ADMIN_PASSWORD.length>=12&&secureEqual(password,env.ADMIN_PASSWORD)}
export default {
 async fetch(request,env){
  const path=new URL(request.url).pathname;
  if(!path.startsWith('/api/'))return env.ASSETS.fetch(request);
  if(!env.SETTINGS)return simple('SETTINGS KV binding is missing.',503);
  if(path==='/api/settings'&&request.method==='GET'){
    const settings=await env.SETTINGS.get(key);
    return json({version:settings?await digest(settings):'',settings:settings?JSON.parse(settings):null});
  }
  if(path==='/api/admin/login'&&request.method==='POST'){
    let data;try{data=await request.json()}catch{return simple('Invalid JSON',400)}
    return authorized(request,env,data?.password)?json({ok:true}):simple('Unauthorized',401);
  }
  if(path==='/api/admin/settings'&&request.method==='PUT'){
    if(!authorized(request,env,request.headers.get('X-Admin-Password')))return simple('Unauthorized',401);
    const raw=await request.text();
    if(raw.length>8_000_000)return simple('Settings too large. Compress uploaded images (limit 8 MB).',413);
    let value;try{value=JSON.parse(raw)}catch{return simple('Invalid JSON',400)}
    if(!value||typeof value!=='object'||!value.seminar||!Array.isArray(value.slides)||value.slides.length!==39||!value.media||typeof value.media!=='object')return simple('Invalid presentation settings structure',400);
    await env.SETTINGS.put(key,JSON.stringify(value));
    return json({ok:true});
  }
  return simple('Not found',404);
 }
};
async function digest(s){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(bytes).slice(0,8)).map(b=>b.toString(16).padStart(2,'0')).join('')}
