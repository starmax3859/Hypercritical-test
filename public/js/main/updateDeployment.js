const fs=require("fs"),path=require("path");class UpdateDeploymentDatePlugin{apply(e){e.hooks.afterEmit.tapAsync("UpdateDeploymentDatePlugin",((e,t)=>{const o=path.join(e.outputOptions.path,"index.html");fs.readFile(o,"utf8",((e,l)=>{if(e)return console.error(e),void t();const s=/<!--\s*Hypercritical Last deployed: .* -->\n?/,n=`\x3c!-- Hypercritical Last deployed: ${(new Date).toUTCString()} by uzitrake --\x3e\n`;if(s.test(l)){const e=l.replace(s,n);fs.writeFile(o,e,"utf8",(e=>{e?console.error(e):console.log("Deployment date updated successfully."),t()}))}else{const e=n+l;fs.writeFile(o,e,"utf8",(e=>{e?console.error(e):console.log("Deployment date added newly."),t()}))}}))}))}}module.exports=UpdateDeploymentDatePlugin;