const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const {spawn}=await import('node:child_process');
const port=9452;
const chrome=spawn(CHROME,['--headless=new','--disable-gpu','--hide-scrollbars',`--remote-debugging-port=${port}`,'--user-data-dir=/tmp/cdp-lo','about:blank'],{stdio:'ignore'});
const bekle=ms=>new Promise(r=>setTimeout(r,ms));
let h=null; for(let i=0;i<40&&!h;i++){await bekle(250);try{h=(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t=>t.type==='page');}catch{}}
const ws=new WebSocket(h.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let no=0; const bek=new Map(); let inen=[];
ws.onmessage=e=>{const m=JSON.parse(e.data); if(m.id&&bek.has(m.id)){bek.get(m.id)(m);bek.delete(m.id);}
  if(m.method==='Network.responseReceived'&&/logo/.test(m.params.response.url)) inen.push(m.params.response.url.split('/').pop());};
const cagir=(me,pa={})=>{const id=++no;ws.send(JSON.stringify({id,method:me,params:pa}));return new Promise(r=>bek.set(id,r));};
await cagir('Page.enable'); await cagir('Network.enable');
await cagir('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
for (const kip of ['light','dark']) {
  inen=[];
  await cagir('Page.addScriptToEvaluateOnNewDocument',{source:`try{localStorage.setItem('theme','${kip}')}catch(e){}`});
  await cagir('Page.navigate',{url:'http://localhost:4188/blog'}); await bekle(4500);
  console.log(`${kip.padEnd(6)} kipte inen logo:`, [...new Set(inen)].join(', ')||'yok');
}
ws.close(); chrome.kill();
