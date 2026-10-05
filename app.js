import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./signals.module.js";import{_ as p,a as m,c as h,d as g,f as _,g as v,h as y,i as b,m as x,n as S,o as C,p as w,r as T,s as E,t as ee,u as te,v as D}from"./years.js";var ne=Object.defineProperty,re=(e,t)=>{let n={};for(var r in e)ne(n,r,{get:e[r],enumerable:!0});return t||ne(n,Symbol.toStringTag,{value:`Module`}),n},O={};function k(e,t=1,n=O){let r=e.schemaVersion??1;if(r>t)throw Error(`このデータは新しい形式（版 ${r}）です。アプリを最新版に更新してから読み込んでください`);let i=e;for(;r<t;){let e=n[r];if(!e)throw Error(`形式 ${r} から ${r+1} への変換がありません`);i=e(structuredClone(i)),r+=1,i.schemaVersion=r}return i}var A={folders:`フォルダ`,notes:`ノート`,terms:`用語`,groups:`グループ`,arrows:`矢印`,stickies:`付箋`,embeds:`差し込み`,weakMemos:`苦手メモ`,priorityMemos:`優先順位メモ`,pins:`ピン`,images:`画像`},j=e=>typeof e==`number`&&Number.isInteger(e),ie=e=>typeof e==`string`;function ae(e,t,n){let r=n?.name??n?.title??n?.text;return`${A[e]} ${t+1}件目${r?`「${String(r).slice(0,20)}」`:``}`}function oe(e,t,n,r=!0){if(e==null){r&&n.push({level:`error`,msg:`${t}：年（when）がありません`});return}if(typeof e!=`object`){n.push({level:`error`,msg:`${t}：年（when）の形が正しくありません`});return}let i=e;j(i.from)||n.push({level:`error`,msg:`${t}：始まりの年（when.from）は整数にしてください（今は ${JSON.stringify(i.from)}）`}),i.to!=null&&!j(i.to)&&n.push({level:`error`,msg:`${t}：終わりの年（when.to）は整数にしてください（今は ${JSON.stringify(i.to)}）`}),j(i.from)&&j(i.to)&&i.to<i.from&&n.push({level:`error`,msg:`${t}：終わりの年が始まりの年より前になっています（${i.from}〜${i.to}）`}),j(i.from)&&(i.from<-5e4||i.from>2100)&&n.push({level:`warn`,msg:`${t}：年 ${i.from} は範囲外のようです`})}function M(e,t,n,r,i=!1){if(!t||typeof t!=`object`){r.push({level:`error`,msg:`${A[e]} ${n+1}件目：中身が正しくありません`});return}let a=t,o=ae(e,n,a);if(!ie(a.id)||!a.id.trim()){r.push({level:`error`,msg:`${o}：ID（id）がありません`});return}e===`terms`&&((!i||`name`in a)&&(!ie(a.name)||!a.name.trim())&&r.push({level:`error`,msg:`${o}：名前（name）が空です`}),(!i||`col`in a)&&(ie(a.col)||r.push({level:`error`,msg:`${o}：列（col）がありません`})),(!i||`when`in a)&&oe(a.when,o,r),(`importance`in a||!i)&&(!j(a.importance)||a.importance<1||a.importance>10)&&r.push({level:`error`,msg:`${o}：重要度（importance）は1〜10の整数にしてください（今は ${JSON.stringify(a.importance)}）`}),`weakness`in a&&!(j(a.weakness)&&a.weakness>=0&&a.weakness<=3)&&r.push({level:`error`,msg:`${o}：苦手度（weakness）は0〜3にしてください`}),`shape`in a&&a.shape!==`point`&&a.shape!==`span`&&r.push({level:`error`,msg:`${o}：形（shape）は "point" か "span" にしてください`}),a.shape===`span`&&a.when&&a.when.to==null&&r.push({level:`warn`,msg:`${o}：期間（span）なのに終わりの年（when.to）がありません`})),e===`notes`&&((!i||`name`in a)&&(ie(a.name)||r.push({level:`error`,msg:`${o}：名前（name）がありません`})),(!i||`kind`in a)&&([`timeline`,`table`,`diagram`,`chart`,`memo`,`board`].includes(a.kind)||r.push({level:`error`,msg:`${o}：種類（kind）が正しくありません`}))),e===`stickies`&&!i&&(!a.anchor||typeof a.anchor!=`object`)&&r.push({level:`error`,msg:`${o}：貼り先（anchor）がありません`})}function N(e){let t=[];if(!e||typeof e!=`object`)return[{level:`error`,msg:`ファイルの中身が読めませんでした（JSONの形ではありません）`}];let n=e;n.format!==`nhnote-backup`&&t.push({level:`error`,msg:`このアプリのバックアップファイルではありません（format が "nhnote-backup" ではありません）`}),j(n.schemaVersion)||t.push({level:`error`,msg:`形式の版（schemaVersion）がありません`});let r=n.collections;if(!r||typeof r!=`object`)return t.push({level:`error`,msg:`データ本体（collections）がありません`}),t;for(let e of D){let n=r[e];if(n!=null){if(!Array.isArray(n)){t.push({level:`error`,msg:`${A[e]}の一覧が配列ではありません`});continue}n.forEach((n,r)=>M(e,n,r,t)),ce(e,n,t)}}return le(r,t),t}function se(e,t){let n=[];if(!e||typeof e!=`object`)return[{level:`error`,msg:`中身が読めませんでした（JSONの形ではありません）`}];let r=e;r.format!==`nhnote-patch`&&n.push({level:`error`,msg:`追加・修正用のデータではありません（format が "nhnote-patch" ではありません）`});let i=r.upsert??{};typeof i!=`object`&&n.push({level:`error`,msg:`upsert の形が正しくありません`});for(let[e,r]of Object.entries(i)){if(!D.includes(e)){n.push({level:`warn`,msg:`知らない種類「${e}」は読み飛ばします`});continue}if(!Array.isArray(r)){n.push({level:`error`,msg:`${A[e]}の一覧が配列ではありません`});continue}r.forEach((r,i)=>{let a=r?.id,o=!t||!t(e,a);M(e,r,i,n,!o)}),ce(e,r,n)}return r.trash!=null&&!Array.isArray(r.trash)&&n.push({level:`error`,msg:`trash は ID の配列にしてください`}),n}function ce(e,t,n){let r=new Set;for(let i of t){let t=i?.id;t&&(r.has(t)&&n.push({level:`error`,msg:`${A[e]}：ID「${t}」が重複しています`}),r.add(t))}}function le(e,t){let n=t=>new Set((e[t]??[]).map(e=>e.id)),r=n(`notes`),i=n(`terms`),a=0;for(let t of e.terms??[])r.has(t.noteId)||a++;a&&t.push({level:`warn`,msg:`ノートが見つからない用語が ${a} 件あります（表示されない可能性があります）`});let o=0;for(let t of e.stickies??[]){let e=t.anchor;e?.kind===`term`&&!i.has(e.termId)&&o++}o&&t.push({level:`warn`,msg:`貼り先の用語が見つからない付箋が ${o} 件あります`})}function ue(e){let t=e.replace(/^﻿/,``).trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i);n&&(t=n[1].trim());try{return JSON.parse(t)}catch{}let r=t.search(/[[{]/);r>0&&(t=t.slice(r));let i=Math.max(t.lastIndexOf(`}`),t.lastIndexOf(`]`));i>=0&&(t=t.slice(0,i+1)),t=t.replace(/[“”]/g,`"`).replace(/[‘’]/g,`'`).replace(/,\s*([}\]])/g,`$1`);try{return JSON.parse(t)}catch(e){throw Error(`JSONとして読めませんでした。コピーした範囲が欠けていないか確認してください（`+(e instanceof Error?e.message:``)+`）`)}}var de=`n-main`;function P(e){let t=Math.random().toString(36).slice(2,7);return`${e}-u-${Date.now().toString(36)}${t}`}var fe=e=>e.to!=null&&e.to>e.from?`span`:`point`,pe=e=>Math.max(1,Math.min(10,Math.round(e)));function me(e){let t=Date.now(),n={id:P(`t`),createdAt:t,updatedAt:t,name:e.name.trim(),yomi:e.yomi?.trim()||void 0,noteId:e.noteId??`n-main`,col:e.col,when:e.when,shape:e.shape??fe(e.when),importance:pe(e.importance??5),importanceBy:`me`,weakness:0,desc:e.desc??``,descBy:e.desc?`me`:void 0,author:`me`,status:`verified`,tags:[]};return h.tx(`「${n.name}」を追加`,e=>e.put(`terms`,n)),n}function he(e,t,n){let r=h.get(`terms`,e);if(!r)return;let i={...t};i.name!=null&&(i.name=i.name.trim()),i.importance!=null&&(i.importance=pe(i.importance),i.importance!==r.importance&&(i.importanceBy=`me`)),i.desc!=null&&i.desc!==r.desc&&(i.descBy=`me`),h.tx(n??`「${r.name}」を編集`,t=>{t.patch(`terms`,e,i)})}function F(e,t){let n=h.get(`terms`,e);if(!n||n.weakness===t)return;let r=t?`「${n.name}」の苦手度を ${t} に`:`「${n.name}」の苦手度を解除`;h.tx(r,n=>{n.patch(`terms`,e,{weakness:t})})}function ge(e){let t=h.get(`terms`,e);if(!t)return 0;let n=(t.weakness+1)%4;return F(e,n),n}function _e(e,t){let n=h.get(`terms`,e);n&&h.tx(`「${n.name}」の重要度を ${pe(t)} に`,n=>{n.patch(`terms`,e,{importance:pe(t),importanceBy:`me`})})}function I(e,t){let n=h.get(`terms`,e);n&&h.tx(t?`「${n.name}」を確認済みに`:`「${n.name}」を未確認に`,n=>{n.patch(`terms`,e,{status:t?`verified`:`unverified`})})}function ve(e){for(let t of h.list(`stickies`))if(t.anchor.kind===`term`&&t.anchor.termId===e)return t}function ye(e,t,n){let r=ve(e),i=h.get(`terms`,e)?.name??``,a=t.trim();if(!r&&!a)return;if(r&&!a){L([{c:`stickies`,id:r.id}],`「${i}」の付箋を削除`);return}let o=Date.now();if(r){if(r.text===t&&(!n||n===r.color))return;h.tx(`「${i}」の付箋を編集`,e=>{e.patch(`stickies`,r.id,{text:t,...n?{color:n}:{}})})}else{let r={id:P(`s`),createdAt:o,updatedAt:o,anchor:{kind:`term`,termId:e},text:t,color:n??`yellow`,author:`me`};h.tx(`「${i}」に付箋`,e=>e.put(`stickies`,r))}}function be(e,t){let n=[];if(e===`terms`){for(let e of h.list(`stickies`))e.anchor.kind===`term`&&e.anchor.termId===t&&n.push({c:`stickies`,id:e.id});for(let e of h.list(`arrows`))(e.from===t||e.to===t)&&n.push({c:`arrows`,id:e.id})}if(e===`notes`){for(let e of h.list(`terms`))e.noteId===t&&n.push({c:`terms`,id:e.id},...be(`terms`,e.id));for(let e of h.list(`embeds`))(e.noteId===t||e.target.kind===`note`&&e.target.id===t)&&n.push({c:`embeds`,id:e.id})}return n}function L(e,t){let n=P(`tg`),r=Date.now(),i=new Map;for(let t of e)for(let e of[t,...be(t.c,t.id)])i.set(e.c+`:`+e.id,e);return h.tx(t,e=>{for(let t of i.values()){let i=e.get(t.c,t.id);i&&!i.deletedAt&&e.patch(t.c,t.id,{deletedAt:r,trashGroup:n})}}),n}function xe(e){let t=h.get(`terms`,e);return t?L([{c:`terms`,id:e}],`「${t.name}」をゴミ箱へ`):null}function R(e,t){for(let n of Object.keys(h.data))for(let r of h.data[n].values())r.trashGroup===e&&t(n,r)}function Se(e,t=`ゴミ箱から戻す`){h.tx(t,t=>{R(e,(e,n)=>{let{deletedAt:r,trashGroup:i,...a}=n;t.put(e,{...a,updatedAt:Date.now()})})})}function Ce(e){let t=new Set;h.tx(`ゴミ箱を空にする`,n=>{for(let r of e)R(r,(e,r)=>{t.add(r.id),n.hardDelete(e,r.id)})},{history:!1}),h.forgetHistoryFor(t)}function z(){let e=new Map;for(let t of Object.keys(h.data))for(let n of h.data[t].values()){let r=n;if(!r.deletedAt||!r.trashGroup)continue;let i=e.get(r.trashGroup);i||(i={group:r.trashGroup,deletedAt:r.deletedAt,items:[],title:``},e.set(r.trashGroup,i)),i.items.push({c:t,rec:r})}let t=e=>{let t=e.rec;return t.name??t.title??t.text??``},n=[`notes`,`terms`,`groups`,`weakMemos`,`priorityMemos`,`stickies`,`arrows`,`embeds`,`pins`,`images`,`folders`];for(let r of e.values())r.items.sort((e,t)=>n.indexOf(e.c)-n.indexOf(t.c)),r.title=t(r.items[0]);return[...e.values()].sort((e,t)=>t.deletedAt-e.deletedAt)}function B(e,t,n=`列の設定を変更`){h.tx(n,n=>{n.patch(`notes`,e,{columns:t})})}function we(e){let t=Date.now(),n=Math.min(0,...h.list(`priorityMemos`).map(e=>e.order)),r={id:P(`pm`),createdAt:t,updatedAt:t,text:e.trim(),order:n-1};return h.tx(`優先順位メモを追加`,e=>e.put(`priorityMemos`,r)),r}var Te=e=>{let t=e;return t?.name??t?.title??t?.text??t?.id??``},Ee=(e,t)=>JSON.stringify(e)===JSON.stringify(t),De=new Set([`weakness`,`importanceBy`,`descBy`,`author`,`status`,`createdAt`,`updatedAt`,`deletedAt`,`trashGroup`,`hide`,`seed`]);function Oe(e,t,n){let r=e.when,i={id:e.id,createdAt:t,updatedAt:t,name:String(e.name).trim(),yomi:e.yomi||void 0,noteId:e.noteId??`n-main`,col:e.col,when:r,shape:e.shape??(r.to!=null&&r.to>r.from?`span`:`point`),importance:e.importance??5,importanceBy:`ai`,weakness:0,desc:e.desc??``,descBy:e.desc?`ai`:void 0,author:`ai`,status:`unverified`,tags:e.tags??[]};return e.refId&&(i.refId=e.refId),n&&(i.seed=n),i}function ke(e,t,n){let r={...e},i=[];for(let[n,a]of Object.entries(t))if(!(De.has(n)||n===`id`)){if(n===`importance`){if(e.importanceBy===`me`){a!==e.importance&&i.push(`重要度`);continue}r.importance=a;continue}if(n===`desc`){if(e.descBy===`me`||e.author===`me`&&e.desc){a!==e.desc&&i.push(`説明`);continue}r.desc=a??``,r.descBy=a?`ai`:void 0;continue}r[n]=a}return(!Ee(r.name,e.name)||!Ee(r.when,e.when)||r.col!==e.col)&&e.author===`ai`&&(r.status=`unverified`),Ee(r,e)||(r.updatedAt=n),{after:r,kept:i}}function Ae(e=[],t=[]){let n=new Set(e.map(e=>e.id));return[...e,...t.filter(e=>!n.has(e.id))]}function je(e,t=h,n=Date.now()){let r={adds:[],updates:[],unchanged:0,skipped:[],trash:[]},i=e.seed?.id;for(let[a,o]of Object.entries(e.upsert??{})){if(!D.includes(a)||!Array.isArray(o))continue;let e=a;for(let a of o){let o=a.id,s=t.get(e,o);if(!s){e===`terms`?r.adds.push({c:e,rec:Oe(a,n,i)}):r.adds.push({c:e,rec:{author:`ai`,...a,createdAt:n,updatedAt:n}});continue}if(s.deletedAt){r.skipped.push({c:e,id:o,name:Te(s),reason:`ゴミ箱にあるため`});continue}if(e===`terms`){let{after:t,kept:i}=ke(s,a,n);if(Ee(t,s)){r.unchanged++,i.length&&r.skipped.push({c:e,id:o,name:Te(s),reason:`あなたの${i.join(`・`)}を守るため`});continue}r.updates.push({c:e,before:s,after:t,kept:i});continue}if(e===`notes`){let t=s,i={...t,columns:Ae(t.columns,a.columns)};if(Ee(i,t)){r.unchanged++;continue}r.updates.push({c:e,before:s,after:{...i,updatedAt:n},kept:[`列の表示・並び`]});continue}if(s.author===`me`){r.skipped.push({c:e,id:o,name:Te(s),reason:`あなたが作ったもののため`});continue}let c={...s};for(let[e,t]of Object.entries(a))De.has(e)||(c[e]=t);if(Ee(c,s)){r.unchanged++;continue}r.updates.push({c:e,before:s,after:{...c,updatedAt:n},kept:[]})}}for(let n of e.trash??[]){let e=!1;for(let i of D){let a=t.get(i,n);if(a){if(e=!0,a.deletedAt)break;a.author===`me`?r.skipped.push({c:i,id:n,name:Te(a),reason:`あなたが作ったもののため削除しません`}):r.trash.push({c:i,id:n,name:Te(a)});break}}e||r.skipped.push({c:`terms`,id:n,name:n,reason:`削除対象が見つかりません`})}return r}function Me(e,t,n=h,r={}){let i=Date.now(),a=P(`tg`);n.tx(t,t=>{for(let n of e.adds)t.put(n.c,n.rec);for(let n of e.updates)t.put(n.c,n.after);for(let n of e.trash)t.patch(n.c,n.id,{deletedAt:i,trashGroup:a})},r)}var Ne=e=>({add:e.adds.length,update:e.updates.length,trash:e.trash.length,skip:e.skipped.length,same:e.unchanged}),V={about:`時代・元号・年表の列の初期値。AIが編集してよい。元号は改元の年（from）と、次の元号がすぐ続かない場合の終わりの年（end）。南北朝の時代（1332〜1392年）は court に south（南朝）・north（北朝の別の元号）を付けて並べる。`,eras:[{id:`kyusekki`,name:`旧石器時代`,from:-36e3,to:-14e3,label:`〜約1万6000年前`},{id:`jomon`,name:`縄文時代`,from:-14e3,to:-400,label:`約1万6000年前〜`},{id:`yayoi`,name:`弥生時代`,from:-400,to:250,label:`前4世紀頃〜`},{id:`kofun`,name:`古墳時代`,from:250,to:592,label:`3世紀中頃〜`},{id:`asuka`,name:`飛鳥時代`,from:592,to:710},{id:`nara`,name:`奈良時代`,from:710,to:794},{id:`heian`,name:`平安時代`,from:794,to:1185},{id:`kamakura`,name:`鎌倉時代`,from:1185,to:1333},{id:`nanboku`,name:`南北朝時代`,from:1333,to:1392,label:`建武の新政を含む`},{id:`muromachi`,name:`室町時代`,from:1392,to:1467},{id:`sengoku`,name:`戦国時代`,from:1467,to:1573},{id:`azuchi`,name:`安土桃山時代`,from:1573,to:1603},{id:`edo`,name:`江戸時代`,from:1603,to:1868},{id:`meiji`,name:`明治時代`,from:1868,to:1912},{id:`taisho`,name:`大正時代`,from:1912,to:1926},{id:`showa`,name:`昭和時代`,from:1926,to:1989},{id:`heisei`,name:`平成時代`,from:1989,to:2019},{id:`reiwa`,name:`令和時代`,from:2019,to:1e4}],gengo:[{name:`大化`,from:645},{name:`白雉`,from:650,end:654},{name:`朱鳥`,from:686,end:686},{name:`大宝`,from:701},{name:`慶雲`,from:704},{name:`和銅`,from:708},{name:`霊亀`,from:715},{name:`養老`,from:717},{name:`神亀`,from:724},{name:`天平`,from:729},{name:`天平感宝`,from:749},{name:`天平勝宝`,from:749},{name:`天平宝字`,from:757},{name:`天平神護`,from:765},{name:`神護景雲`,from:767},{name:`宝亀`,from:770},{name:`天応`,from:781},{name:`延暦`,from:782},{name:`大同`,from:806},{name:`弘仁`,from:810},{name:`天長`,from:824},{name:`承和`,from:834},{name:`嘉祥`,from:848},{name:`仁寿`,from:851},{name:`斉衡`,from:854},{name:`天安`,from:857},{name:`貞観`,from:859},{name:`元慶`,from:877},{name:`仁和`,from:885},{name:`寛平`,from:889},{name:`昌泰`,from:898},{name:`延喜`,from:901},{name:`延長`,from:923},{name:`承平`,from:931},{name:`天慶`,from:938},{name:`天暦`,from:947},{name:`天徳`,from:957},{name:`応和`,from:961},{name:`康保`,from:964},{name:`安和`,from:968},{name:`天禄`,from:970},{name:`天延`,from:973},{name:`貞元`,from:976},{name:`天元`,from:978},{name:`永観`,from:983},{name:`寛和`,from:985},{name:`永延`,from:987},{name:`永祚`,from:989},{name:`正暦`,from:990},{name:`長徳`,from:995},{name:`長保`,from:999},{name:`寛弘`,from:1004},{name:`長和`,from:1012},{name:`寛仁`,from:1017},{name:`治安`,from:1021},{name:`万寿`,from:1024},{name:`長元`,from:1028},{name:`長暦`,from:1037},{name:`長久`,from:1040},{name:`寛徳`,from:1044},{name:`永承`,from:1046},{name:`天喜`,from:1053},{name:`康平`,from:1058},{name:`治暦`,from:1065},{name:`延久`,from:1069},{name:`承保`,from:1074},{name:`承暦`,from:1077},{name:`永保`,from:1081},{name:`応徳`,from:1084},{name:`寛治`,from:1087},{name:`嘉保`,from:1094},{name:`永長`,from:1096},{name:`承徳`,from:1097},{name:`康和`,from:1099},{name:`長治`,from:1104},{name:`嘉承`,from:1106},{name:`天仁`,from:1108},{name:`天永`,from:1110},{name:`永久`,from:1113},{name:`元永`,from:1118},{name:`保安`,from:1120},{name:`天治`,from:1124},{name:`大治`,from:1126},{name:`天承`,from:1131},{name:`長承`,from:1132},{name:`保延`,from:1135},{name:`永治`,from:1141},{name:`康治`,from:1142},{name:`天養`,from:1144},{name:`久安`,from:1145},{name:`仁平`,from:1151},{name:`久寿`,from:1154},{name:`保元`,from:1156},{name:`平治`,from:1159},{name:`永暦`,from:1160},{name:`応保`,from:1161},{name:`長寛`,from:1163},{name:`永万`,from:1165},{name:`仁安`,from:1166},{name:`嘉応`,from:1169},{name:`承安`,from:1171},{name:`安元`,from:1175},{name:`治承`,from:1177},{name:`養和`,from:1181},{name:`寿永`,from:1182},{name:`元暦`,from:1184},{name:`文治`,from:1185},{name:`建久`,from:1190},{name:`正治`,from:1199},{name:`建仁`,from:1201},{name:`元久`,from:1204},{name:`建永`,from:1206},{name:`承元`,from:1207},{name:`建暦`,from:1211},{name:`建保`,from:1213},{name:`承久`,from:1219},{name:`貞応`,from:1222},{name:`元仁`,from:1224},{name:`嘉禄`,from:1225},{name:`安貞`,from:1227},{name:`寛喜`,from:1229},{name:`貞永`,from:1232},{name:`天福`,from:1233},{name:`文暦`,from:1234},{name:`嘉禎`,from:1235},{name:`暦仁`,from:1238},{name:`延応`,from:1239},{name:`仁治`,from:1240},{name:`寛元`,from:1243},{name:`宝治`,from:1247},{name:`建長`,from:1249},{name:`康元`,from:1256},{name:`正嘉`,from:1257},{name:`正元`,from:1259},{name:`文応`,from:1260},{name:`弘長`,from:1261},{name:`文永`,from:1264},{name:`建治`,from:1275},{name:`弘安`,from:1278},{name:`正応`,from:1288},{name:`永仁`,from:1293},{name:`正安`,from:1299},{name:`乾元`,from:1302},{name:`嘉元`,from:1303},{name:`徳治`,from:1306},{name:`延慶`,from:1308},{name:`応長`,from:1311},{name:`正和`,from:1312},{name:`文保`,from:1317},{name:`元応`,from:1319},{name:`元亨`,from:1321},{name:`正中`,from:1324},{name:`嘉暦`,from:1326},{name:`元徳`,from:1329},{name:`元弘`,from:1331},{name:`正慶`,from:1332,end:1333,court:`north`},{name:`建武`,from:1334},{name:`延元`,from:1336,court:`south`},{name:`暦応`,from:1338},{name:`興国`,from:1340,court:`south`},{name:`康永`,from:1342},{name:`貞和`,from:1345},{name:`正平`,from:1346,court:`south`},{name:`観応`,from:1350},{name:`文和`,from:1352},{name:`延文`,from:1356},{name:`康安`,from:1361},{name:`貞治`,from:1362},{name:`応安`,from:1368},{name:`建徳`,from:1370,court:`south`},{name:`文中`,from:1372,court:`south`},{name:`永和`,from:1375},{name:`天授`,from:1375,court:`south`},{name:`康暦`,from:1379},{name:`永徳`,from:1381},{name:`弘和`,from:1381,court:`south`},{name:`至徳`,from:1384},{name:`元中`,from:1384,court:`south`,end:1392},{name:`嘉慶`,from:1387},{name:`康応`,from:1389},{name:`明徳`,from:1390},{name:`応永`,from:1394},{name:`正長`,from:1428},{name:`永享`,from:1429},{name:`嘉吉`,from:1441},{name:`文安`,from:1444},{name:`宝徳`,from:1449},{name:`享徳`,from:1452},{name:`康正`,from:1455},{name:`長禄`,from:1457},{name:`寛正`,from:1460},{name:`文正`,from:1466},{name:`応仁`,from:1467},{name:`文明`,from:1469},{name:`長享`,from:1487},{name:`延徳`,from:1489},{name:`明応`,from:1492},{name:`文亀`,from:1501},{name:`永正`,from:1504},{name:`大永`,from:1521},{name:`享禄`,from:1528},{name:`天文`,from:1532},{name:`弘治`,from:1555},{name:`永禄`,from:1558},{name:`元亀`,from:1570},{name:`天正`,from:1573},{name:`文禄`,from:1592},{name:`慶長`,from:1596},{name:`元和`,from:1615},{name:`寛永`,from:1624},{name:`正保`,from:1644},{name:`慶安`,from:1648},{name:`承応`,from:1652},{name:`明暦`,from:1655},{name:`万治`,from:1658},{name:`寛文`,from:1661},{name:`延宝`,from:1673},{name:`天和`,from:1681},{name:`貞享`,from:1684},{name:`元禄`,from:1688},{name:`宝永`,from:1704},{name:`正徳`,from:1711},{name:`享保`,from:1716},{name:`元文`,from:1736},{name:`寛保`,from:1741},{name:`延享`,from:1744},{name:`寛延`,from:1748},{name:`宝暦`,from:1751},{name:`明和`,from:1764},{name:`安永`,from:1772},{name:`天明`,from:1781},{name:`寛政`,from:1789},{name:`享和`,from:1801},{name:`文化`,from:1804},{name:`文政`,from:1818},{name:`天保`,from:1830},{name:`弘化`,from:1844},{name:`嘉永`,from:1848},{name:`安政`,from:1854},{name:`万延`,from:1860},{name:`文久`,from:1861},{name:`元治`,from:1864},{name:`慶応`,from:1865},{name:`明治`,from:1868},{name:`大正`,from:1912},{name:`昭和`,from:1926},{name:`平成`,from:1989},{name:`令和`,from:2019}],gengoCoverage:{to:9999},columns:[{id:`ruler`,name:`政権担当`,visible:!0},{id:`event`,name:`出来事`,visible:!0},{id:`policy`,name:`政策`,visible:!0},{id:`system`,name:`制度`,visible:!0},{id:`diplomacy`,name:`外交`,visible:!0},{id:`finance`,name:`財政`,visible:!0},{id:`society`,name:`社会`,visible:!0},{id:`industry`,name:`産業`,visible:!0},{id:`culture`,name:`文化`,visible:!0},{id:`situation`,name:`情勢`,visible:!0},{id:`world`,name:`世界の動き`,visible:!1}]},Pe=`0.1.0 (2026-10-04 22:50)`,Fe=7,Ie=864e5;async function Le(){let e=[],t=await x(),n=await g(t,`schemaVersion`);if(n!=null&&n>1)throw Error(`保存されているデータが、このアプリより新しい形式です。アプリを更新してください（ホーム画面のアイコンから開き直すと更新されます）`);n!=null&&n<1&&(await Be(t,n),e.push(`データを新しい形式に変換しました（変換前の控えは「その他 › 端末内の自動バックアップ」にあります）`)),await h.load(t);let r=n==null;if(r){let e=Date.now();await p(t,{schemaVersion:1,createdAt:e}),h.meta={...h.meta,schemaVersion:1,createdAt:e}}return ze(),Ke(),Ve(),{firstRun:r,pendingSeeds:[],notices:e}}async function Re(){let e=[],t=0;try{let n=await He(),r=Object.keys(h.appliedSeeds).length===0,i=n.filter(e=>(h.appliedSeeds[e.id]??0)<e.version);if(!(r&&i.length))return{pending:i,notices:e,applied:t};for(let n of i){let r=await H(n),i=se(r,(e,t)=>!!h.get(e,t));if(i.some(e=>e.level===`error`)){e.push(`初期データ「${n.title}」に問題があったため読み込みませんでした：${i[0].msg}`);continue}Me(je(r),`初期データ「${n.title}」`,h,{history:!1}),h.markSeedApplied(n.id,n.version),t++}return await h.flush(),{pending:[],notices:e,applied:t}}catch{return Object.keys(h.appliedSeeds).length||e.push(`初期データを読み込めませんでした。インターネットにつながった状態でもう一度開いてください`),{pending:[],notices:e,applied:t}}}function ze(){if(h.get(`notes`,`n-main`))return;let e=Date.now(),t={id:de,createdAt:e,updatedAt:e,kind:`timeline`,name:`全体年表`,tags:[],order:0,columns:V.columns.map(e=>({...e}))};h.tx(`全体年表を作成`,e=>e.put(`notes`,t),{history:!1})}async function Be(e,t){let n={};for(let t of D)n[t]=await te(e,t);let r={format:`nhnote-backup`,schemaVersion:t,collections:n};await y(e,{id:`snap-`+Date.now(),at:Date.now(),reason:`形式の変換の前（版 ${t}）`,size:0,dump:r},Fe);let i=k(r);await v(e,i.collections,{schemaVersion:1})}async function Ve(){try{navigator.storage?.persist&&!await navigator.storage.persisted()&&await navigator.storage.persist()}catch{}}async function He(){let e=await fetch(`./seed-index.json`,{cache:`no-cache`});if(!e.ok)throw Error(`seed-index.json を読めません`);return(await e.json()).seeds}async function H(e){let t=await fetch(`./`+e.file,{cache:`no-cache`});if(!t.ok)throw Error(`${e.file} を読めません`);return await t.json()}async function Ue(e){let t=[];for(let n of e){let e=k(await H(n)),r=se(e,(e,t)=>!!h.get(e,t));t.push({seed:n,plan:je(e),issues:r})}return t}async function We(e){await Ge(`初期データ取り込みの前`);for(let t of e)Me(t.plan,`初期データ「${t.seed.title}」を取り込み`),h.markSeedApplied(t.seed.id,t.seed.version);await h.flush()}async function Ge(e){if(!h.db)return;await h.flush();let t=h.dump(Pe),n=JSON.stringify(t.collections).length;await y(h.db,{id:`snap-`+Date.now(),at:Date.now(),reason:e,size:n,dump:t},Fe),h.setMetaValue(`lastSnapshotAt`,Date.now())}async function Ke(){let e=h.meta.lastSnapshotAt??0;Date.now()-e<Ie*.9||setTimeout(()=>{Ge(`毎日の自動保存`).catch(()=>{})},4e3)}async function qe(){return h.db?w(h.db):[]}async function Je(e){if(!h.db)return;let t=await _(h.db,e);if(!t)throw Error(`見つかりません`);await nt(t.dump,`端末内の控え（${new Date(t.at).toLocaleString(`ja-JP`)}）から戻す前`)}var Ye=e=>String(e).padStart(2,`0`);function Xe(e=new Date){return`nihonshi-backup-${e.getFullYear()}${Ye(e.getMonth()+1)}${Ye(e.getDate())}-${Ye(e.getHours())}${Ye(e.getMinutes())}.json`}var Ze=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error),r.readAsDataURL(e)});function Qe(e){let[t,n]=e.split(`,`),r=t.match(/data:([^;]+)/)?.[1]??`application/octet-stream`,i=atob(n),a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=i.charCodeAt(e);return new Blob([a],{type:r})}async function $e(e){let t=e.collections.images??[];return e.collections.images=await Promise.all(t.map(async e=>{let{blob:t,...n}=e;return t instanceof Blob?{...n,dataUrl:await Ze(t)}:n})),e}async function et(){await h.flush();let e=await $e(h.dump(Pe)),t=JSON.stringify(e,null,1),n=Xe(),r=new File([t],n,{type:`application/json`});if(navigator.canShare?.({files:[r]})&&/iPhone|iPad|iPod|Android/.test(navigator.userAgent))try{return await navigator.share({files:[r],title:`日本史ノートのバックアップ`}),h.setMetaValue(`lastBackupAt`,Date.now()),`shared`}catch(e){if(e.name===`AbortError`)return`cancelled`}let i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=n,document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4),h.setMetaValue(`lastBackupAt`,Date.now()),`downloaded`}function tt(e){let t=ue(e);if(t?.format===`nhnote-backup`){let e=N(t),n=t;if(!e.some(e=>e.level===`error`))try{n=k(n)}catch(t){e=[...e,{level:`error`,msg:t.message}]}return{kind:`backup`,dump:n,issues:e}}let n=t,r=se(n,(e,t)=>!!h.get(e,t)),i=null;if(!r.some(e=>e.level===`error`))try{n=k(n),i=je(n)}catch(e){r=[...r,{level:`error`,msg:e.message}]}return{kind:`patch`,patch:n,issues:r,plan:i}}async function nt(e,t=`バックアップから復元する前`){if(!h.db)return;await Ge(t);let n=k(e);n.collections.images&&(n.collections.images=n.collections.images.map(e=>{if(e.dataUrl&&!(e.blob instanceof Blob)){let{dataUrl:t,...n}=e;return{...n,blob:Qe(t)}}return e})),await v(h.db,n.collections,{schemaVersion:1,settings:n.settings,appliedSeeds:n.appliedSeeds??{},history:{undo:[],redo:[]}}),await h.load(h.db),ze(),await h.flush()}async function rt(e,t){await Ge(`「${t}」取り込みの前`),Me(e,`「${t}」を取り込み`),await h.flush()}var it=e=>Object.fromEntries(D.map(t=>[t,e.collections[t]?.filter(e=>!e.deletedAt).length??0])),at=Object.assign;function ot(e,t){for(var n in e)if(n!=`__source`&&e[n]!==t[n])return!0;for(var r in t)if(r!=`__source`&&!(r in e))return!0;return!1}var st=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;function ct(e,t){function r(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:ot(this.props,e)}function i(t){return this.shouldComponentUpdate=r,n(e,t)}return i.displayName=`Memo(`+(e.displayName||e.name)+`)`,i.prototype.isReactComponent=!0,i.type=e,i}var lt=Symbol.for(`react.element`),ut=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dt=/[A-Z0-9]/g,ft=typeof document<`u`,pt=function(e){return/fil|che|rad/.test(e)};f.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(f.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var mt=r.event;r.event=function(e){return mt&&(e=mt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var ht={configurable:!0,get:function(){return this.class}},gt=r.vnode;r.vnode=function(e){if(typeof e.type==`string`)(function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var o in t){var s=t[o];if(!(o==`value`&&`defaultValue`in t&&s==null||ft&&o==`children`&&n==`noscript`||o==`class`||o==`className`)){if(o==`style`&&typeof s==`object`){var c=void 0;for(var l in s)typeof s[l]!=`number`||st.test(l)||(c||=s=at({},s),s[l]+=`px`)}else if(o==`defaultValue`&&`value`in t&&t.value==null)o=`value`;else if(o==`download`&&!0===s)s=``;else if(o==`translate`&&s===`no`)s=!1;else if(o[0]==`o`&&o[1]==`n`){var u=o.toLowerCase();u==`ondoubleclick`?o=`ondblclick`:u!=`onchange`||n!=`input`&&n!=`textarea`||pt(t.type)?u==`onfocus`?o=`onfocusin`:u==`onblur`&&(o=`onfocusout`):u=o=`oninput`,u==`oninput`&&r[o=u]&&(o=`oninputCapture`)}else i&&ut.test(o)?o=o.replace(dt,`-$&`).toLowerCase():s===null&&(s=void 0);r[o]=s}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=a(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=a(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",ht)):t.className&&(r.class=r.className=t.className),e.props=r})(e);else if(typeof e.type==`function`&&(`ref`in e.props&&`prototype`in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=at({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!(`ref`in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=lt,gt&&gt(e)};function _t(e,t,n){if(e){var r=e.__c&&e.__c.__H;r&&(r.__.forEach(function(e){e.__P!=null&&(typeof e.__c==`function`&&e.__c(),e.__c=e.__H=void 0)}),r.__h=e.__c.__h=[]),typeof e.type==`string`&&(e.__u|=8),(e=at({constructor:void 0},e)).__c!=null&&(e.__c.__P==n&&(e.__c.__P=t),e.__c.__g|=4,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return _t(e,t,n)})}return e}function vt(e,t,n){return e&&n&&(typeof e.type==`string`&&(e.__u|=1),e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return vt(e,t,n)}),e.__c&&e.__c.__P==t&&(e.__e&&n.appendChild(e.__e),e.__c.__g|=4,e.__c.__P=n)),e}function yt(){function e(){this.__u=0,this.o=null,this.__b=null}return function(){var e=r.__e;r.__e=function(t,n,r,i){if(t.then){for(var a,o=n;o=o.__;)if((a=o.__c)&&a.__c)return r&&!r.__c&&(n.__c.__H=void 0),a.__c(t,n)}e(t,n,r,i)};var t=r.unmount;r.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),t&&t(e)}}(),(e.prototype=new f).__c=function(e,t){var n=this,r=t.__c;this.o??=[],this.o.push(r);var i=!1,a=function(){!i&&n.__P&&(i=!0,r.__R=null,s())};r.__R=a;var o=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=vt(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.o.pop();)t.__P=o,t.forceUpdate()}};this.__u++||32&t.__u||this.setState({__a:this.__b=this.__v.__k[0]}),e.then(a,a)},e.prototype.componentWillUnmount=function(){this.o=[]},e.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement(`div`),i=this.__v.__k[0].__c;this.__v.__k[0]=_t(this.__b,r,i.__O=i.__P)}this.__b=null}return[n(c,null,t.__a?null:e.children),t.__a&&n(c,null,e.fallback)]},e}var bt=yt();function xt(e){var t,r,i,a=null;function o(o){if(t||(t=e()).then(function(e){e&&(a=e.default||e),i=!0},function(e){r=e,i=!0}),r)throw r;if(!i)throw t;return a?n(a,o):null}return o.displayName=`Lazy`,o}var St=`nhnote.ui`,Ct={v:1,tab:`timeline`,focusYear:645,focusFrom:`init`,level:1,scrollX:0,weakFilter:0,redSheet:!1,weakPen:!1,openTermId:null,dismissed:{},notesFolder:null,openNoteId:null,weakSeg:`list`,groupFilter:null,openGroupId:null,openWeakMemoId:null,showArrows:!0,mapView:{lon:128,lat:36,z:9e3},mapLayers:{terr:!0,borders:!1,relief:!0,pins:!0,pinsByYear:!0}};function wt(){try{let e=localStorage.getItem(St);if(e){let t=JSON.parse(e);if(t&&t.v===1)return{...Ct,...t}}}catch{}return{...Ct}}var U=o(wt()),Tt=null;function Et(){Tt&&=(clearTimeout(Tt),null);try{localStorage.setItem(St,JSON.stringify(U.value))}catch{}}d(()=>{U.value,Tt&&clearTimeout(Tt),Tt=setTimeout(Et,250)});function W(e){U.value={...U.value,...e}}function Dt(e,t){let n=Math.round(e);(n!==U.value.focusYear||t!==U.value.focusFrom)&&(U.value={...U.value,focusYear:n,focusFrom:t})}var Ot=o(null),kt=0;function G(e,t={}){Ot.value={year:e,...t,seq:++kt}}var At=o(null),jt=o(null),Mt=o(null),Nt=o(!1),Pt=null;function Ft(){if(!(`serviceWorker`in navigator))return;let e=!1;navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.register(`./sw.js`,{scope:`./`}).then(e=>{let t=()=>{e.waiting&&navigator.serviceWorker.controller&&(Pt=e.waiting,Nt.value=!0)};t(),e.addEventListener(`updatefound`,()=>{let n=e.installing;n?.addEventListener(`statechange`,()=>{n.state===`installed`&&t()})}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&e.update().catch(()=>{})}),setInterval(()=>e.update().catch(()=>{}),36e5)}).catch(()=>{})}async function It(){await h.flush(),Et(),Pt?Pt.postMessage(`SKIP_WAITING`):location.reload()}function Lt(){let e=/iPhone|iPad|iPod/.test(navigator.userAgent),t=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;return e&&!t}var Rt={table:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-table"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
</svg>`,notebook:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-notebook"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <path d="M13 8l2 0" />
  <path d="M13 12l2 0" />
</svg>`,target:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-target"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>`,map2:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
  <path d="M9 4v13" />
  <path d="M15 7v5.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
</svg>`,dots:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,search:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-search"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>`,undo:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 14l-4 -4l4 -4" />
  <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
</svg>`,redo:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 14l4 -4l-4 -4" />
  <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
</svg>`,eye:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>`,eyeOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
  <path d="M3 3l18 18" />
</svg>`,ballpen:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-ballpen"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 6l7 7l-4 4" />
  <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4" />
  <path d="M4 20l1.768 -1.768" />
</svg>`,zoomIn:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-in"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>`,plus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 5l0 14" />
  <path d="M5 12l14 0" />
</svg>`,x:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-x"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>`,check:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l5 5l10 -10" />
</svg>`,circleCheck:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
</svg>`,sparkles:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
</svg>`,trash:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>`,arrowsMove:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 9l3 3l-3 3" />
  <path d="M15 12h6" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M3 12h6" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>`,chevronRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 6l6 6l-6 6" />
</svg>`,chevronLeft:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 6l-6 6l6 6" />
</svg>`,chevronUp:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 15l6 -6l6 6" />
</svg>`,chevronDown:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 9l6 6l6 -6" />
</svg>`,pin:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
  <path d="M9 15l-4.5 4.5" />
  <path d="M14.5 4l5.5 5.5" />
</svg>`,columns:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-columns"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M12 4l0 16" />
</svg>`,refresh:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>`,download:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-download"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M7 11l5 5l5 -5" />
  <path d="M12 4l0 12" />
</svg>`,upload:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-upload"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M7 9l5 -5l5 5" />
  <path d="M12 4l0 12" />
</svg>`,database:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-database"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
  <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
</svg>`,history:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-history"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 8l0 4l2 2" />
  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
</svg>`,info:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
</svg>`,settings:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>`,alert:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 9v4" />
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
  <path d="M12 16h.01" />
</svg>`,fileImport:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-import"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
</svg>`,clipboard:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M9 12h6" />
  <path d="M9 16h6" />
</svg>`,minus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
</svg>`,moon:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
</svg>`,sun:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`,auto:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-half"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 9a3 3 0 0 0 0 6v-6" />
  <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
</svg>`,adjust:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 6l8 0" />
  <path d="M16 6l4 0" />
  <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12l2 0" />
  <path d="M10 12l10 0" />
  <path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 18l11 0" />
  <path d="M19 18l1 0" />
</svg>`,filter:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-filter"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
</svg>`,cloudDown:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-download"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
  <path d="M12 13l0 9" />
  <path d="M9 19l3 3l3 -3" />
</svg>`,homeShare:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-home-share"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" />
  <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
</svg>`,stack:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-stack-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 12l8 4l8 -4" />
  <path d="M4 16l8 4l8 -4" />
</svg>`,folder:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-folder"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
</svg>`,folderPlus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,pinned:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pinned"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <path d="M12 16l0 5" />
  <path d="M8 4l8 0" />
</svg>`,tag:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-tag"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
</svg>`,clock:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clock"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 7v5l3 3" />
</svg>`,arrowRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
</svg>`,arrowLeft:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg>`,grip:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-grip-vertical"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,square:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-square"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
</svg>`,squareCheck:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-square-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 12l2 2l4 -4" />
</svg>`,copy:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
</svg>`,pencil:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>`,cols3:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-columns-3"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-16" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
</svg>`,chartLine:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-line"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 19l16 0" />
  <path d="M4 15l4 -6l4 2l4 -5l4 4" />
</svg>`,chartBar:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
  <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" />
  <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M4 20h14" />
</svg>`,sitemap:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sitemap"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
  <path d="M12 9l0 3" />
</svg>`,fileText:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M9 9l1 0" />
  <path d="M9 13l6 0" />
  <path d="M9 17l6 0" />
</svg>`,board:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-board"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 9h8" />
  <path d="M12 15h8" />
  <path d="M12 4v16" />
</svg>`,photo:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-photo"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>`,link:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-link"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15l6 -6" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
</svg>`,splitRows:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-rows"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 12l16 0" />
</svg>`,mapPin:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
</svg>`,mapPinPlus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,play:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 4v16l13 -8l-13 -8" />
</svg>`,pause:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" />
  <path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" />
</svg>`,world:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-world"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h16.8" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg>`,leftRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M21 17l-18 0" />
  <path d="M6 10l-3 -3l3 -3" />
  <path d="M3 7l18 0" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>`,upDown:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-up-down"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 3l0 18" />
  <path d="M10 6l-3 -3l-3 3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M17 21l0 -18" />
</svg>`,dotsV:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,bold:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-bold"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
</svg>`,alignLeft:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M4 12l10 0" />
  <path d="M4 18l14 0" />
</svg>`,alignCenter:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-center"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M8 12l8 0" />
  <path d="M6 18l12 0" />
</svg>`,alignRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M10 12l10 0" />
  <path d="M6 18l14 0" />
</svg>`,palette:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-palette"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,box:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-box"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
  <path d="M12 12l8 -4.5" />
  <path d="M12 12l0 9" />
  <path d="M12 12l-8 -4.5" />
</svg>`,frame:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-frame"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7l16 0" />
  <path d="M4 17l16 0" />
  <path d="M7 4l0 16" />
  <path d="M17 4l0 16" />
</svg>`,line:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-line"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7.5 16.5l9 -9" />
</svg>`,zoomOut:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-out"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>`,focus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-focus-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M12 3l0 2" />
  <path d="M3 12l2 0" />
  <path d="M12 19l0 2" />
  <path d="M19 12l2 0" />
</svg>`,tablePlus:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-table-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,rowAdd:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-row-insert-bottom"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M12 15l0 4" />
  <path d="M14 17l-4 0" />
</svg>`,colAdd:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-column-insert-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M15 12l4 0" />
  <path d="M17 10l0 4" />
</svg>`,rowRemove:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-row-remove"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M10 16l4 4" />
  <path d="M10 20l4 -4" />
</svg>`,colRemove:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-column-remove"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M16 10l4 4" />
  <path d="M16 14l4 -4" />
</svg>`,join:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-join"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7h5l3.5 5h9.5" />
  <path d="M3 17h5l3.495 -5" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>`,split:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-split"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M21 17h-8l-3.5 -5h-6.5" />
  <path d="M21 7h-8l-3.495 5" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>`,note:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-note"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M13 20l7 -7" />
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
</svg>`,sticker:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sticker"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
  <path d="M20 12a8 8 0 1 1 -8 -8" />
</svg>`,message:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
</svg>`,listCheck:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-list-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
  <path d="M11 6l9 0" />
  <path d="M11 12l9 0" />
  <path d="M11 18l9 0" />
</svg>`,handClick:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
  <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  <path d="M5 3l-1 -1" />
  <path d="M4 7h-1" />
  <path d="M14 3l1 -1" />
  <path d="M15 6h1" />
</svg>`,clipboardList:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M9 12l.01 0" />
  <path d="M13 12l2 0" />
  <path d="M9 16l.01 0" />
  <path d="M13 16l2 0" />
</svg>`,arrowNarrow:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
</svg>`,linkOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-link-off"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15l3 -3m2 -2l1 -1" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M3 3l18 18" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
</svg>`,textSize:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-text-size"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7v-2h13v2" />
  <path d="M10 5v14" />
  <path d="M12 19h-4" />
  <path d="M15 13v-1h6v1" />
  <path d="M18 12v7" />
  <path d="M17 19h2" />
</svg>`,checkbox:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11l3 3l8 -8" />
  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
</svg>`,circle:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>`,circleDashed:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
</svg>`,calendar:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M11 15h1" />
  <path d="M12 15v3" />
</svg>`,shuffle:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-shuffle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M18 20l3 -3l-3 -3" />
  <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
  <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
</svg>`,lock:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-lock"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
</svg>`,lockOpen:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-lock-open"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 11v-5a4 4 0 0 1 8 0" />
</svg>`,external:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>`,targetArrow:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 7a5 5 0 1 0 5 5" />
  <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
  <path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
  <path d="M15 9l-3 3" />
</svg>`,route:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-route"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
  <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
</svg>`,timelineEvent:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-timeline-event"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 20h-6" />
  <path d="M14 20h6" />
  <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
</svg>`},zt=new Map,Bt=e=>e.replace(/\s(class|width|height)="[^"]*"/g,``).replace(`stroke-width="2"`,`stroke-width="1.8"`).replace(`<svg`,`<svg aria-hidden="true" focusable="false"`);function K({name:e,size:t}){let n=zt.get(e);return n||(n=Bt(Rt[e]),zt.set(e,n)),E(`span`,{class:`ic`,style:t?{width:t+`px`,height:t+`px`}:void 0,dangerouslySetInnerHTML:{__html:n}})}var Vt=o([]),Ht=0;function q(e,t={}){let n={id:++Ht,text:e,action:t.action,tone:t.tone??`normal`,ms:t.ms??(t.action?4500:2600),key:t.key};Vt.value=[...(t.key?Vt.value.filter(e=>e.key!==t.key):Vt.value).slice(-2),n],setTimeout(()=>{Vt.value=Vt.value.filter(e=>e.id!==n.id)},n.ms)}function Ut(){return E(`div`,{class:`toasts`,"aria-live":`polite`,children:Vt.value.map(e=>E(`div`,{class:`toast ${e.tone===`error`?`err`:``}`,children:[E(`span`,{class:`t`,children:e.text}),e.action&&E(`button`,{class:`tbtn`,onClick:()=>{e.action.run(),Vt.value=Vt.value.filter(t=>t.id!==e.id)},children:e.action.label})]},e.id))})}var Wt=o(null);function J(e){return new Promise(t=>{Wt.value={...e,resolve:t}})}function Gt(){let e=Wt.value;if(!e)return null;let t=t=>{Wt.value=null,e.resolve(t)};return E(`div`,{class:`dlg-back`,onClick:e=>{e.target===e.currentTarget&&t(!1)},children:E(`div`,{class:`dlg`,role:`dialog`,"aria-modal":`true`,children:[E(`h3`,{children:e.title}),e.body&&E(`div`,{class:`dlg-body`,children:e.body}),E(`div`,{class:`dlg-btns`,children:[E(`button`,{class:`btn`,onClick:()=>t(!1),children:e.cancel??`やめる`}),E(`button`,{class:`btn ${e.danger?`danger`:`primary`}`,onClick:()=>t(!0),children:e.ok})]})]})})}function Kt(){let[e,t]=u(0);return l(()=>{let e=window.visualViewport;if(!e)return;let n=()=>t(Math.max(0,window.innerHeight-e.height-e.offsetTop));return e.addEventListener(`resize`,n),e.addEventListener(`scroll`,n),()=>{e.removeEventListener(`resize`,n),e.removeEventListener(`scroll`,n)}},[]),e}function Y(t){let[n,r]=u(t.full?`full`:`half`),[i,a]=u(0),[o,s]=u(t.open),[c,d]=u(!1),f=e(null),p=Kt();if(l(()=>{if(!t.open)return;let e=e=>{e.key===`Escape`&&t.onClose()};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[t.open,t.onClose]),l(()=>{if(t.open)s(!0),d(!1),r(t.full?`full`:`half`);else if(o){d(!0);let e=setTimeout(()=>{s(!1),d(!1)},220);return()=>clearTimeout(e)}},[t.open]),!o)return null;let m=e=>{f.current={y:e.clientY,t:performance.now()},e.currentTarget.setPointerCapture(e.pointerId)},h=e=>{f.current&&a(e.clientY-f.current.y)},g=e=>{if(!f.current)return;let i=e.clientY-f.current.y,o=i/Math.max(1,performance.now()-f.current.t);f.current=null,a(0),i>120||o>.6?n===`full`&&i<260&&o<1.2?r(`half`):t.onClose():(i<-60||o<-.5)&&r(`full`)};return E(`div`,{class:`sheet-layer ${c?`closing`:``}`,children:[E(`div`,{class:`sheet-back`,onClick:t.onClose}),E(`div`,{class:`sheet ${n} ${t.class??``}`,style:{transform:i?`translateY(${Math.max(i,n===`full`?0:-200)}px)`:void 0,transition:i?`none`:void 0,bottom:p?p+`px`:void 0},role:`dialog`,"aria-modal":`true`,"aria-label":t.title,children:[E(`div`,{class:`sheet-grab`,onPointerDown:m,onPointerMove:h,onPointerUp:g,onPointerCancel:g,children:E(`span`,{})}),t.title&&E(`div`,{class:`sheet-title`,onPointerDown:m,onPointerMove:h,onPointerUp:g,children:[E(`h3`,{children:t.title}),E(`button`,{class:`iconbtn`,"aria-label":`閉じる`,onClick:t.onClose,children:E(K,{name:`x`})})]}),E(`div`,{class:`sheet-body`,children:t.children})]})]})}var qt=e=>{switch(e){case`memo`:return{text:``};case`board`:return{items:[]};case`table`:return{rows:4,cols:3,header:1,cells:Array.from({length:4},()=>Array.from({length:3},()=>({text:``})))};case`diagram`:return{nodes:[],edges:[],grid:24};case`chart`:return{chartType:`line`,xLabel:`年`,yLabel:``,unit:``,series:[{name:`系列1`,points:[]}]};default:return}},Jt={timeline:`年表`,table:`表`,diagram:`図`,chart:`グラフ`,memo:`メモ`,board:`比較ボード`},Yt=e=>Math.max(0,...h.list(e).map(e=>e.order??0))+1;function Xt(e,t,n={}){let r=Date.now(),i={id:P(`n`),createdAt:r,updatedAt:r,kind:e,name:t.trim()||Jt[e],tags:[],order:Yt(`notes`),folderId:n.folderId,lastOpenedAt:r,author:`me`,...e===`timeline`?{columns:V.columns.map(e=>({...e}))}:{content:n.content??qt(e)},...n.when?{when:n.when}:{}};return h.tx(`${Jt[e]}「${i.name}」を作成`,e=>e.put(`notes`,i)),i}function Zt(e,t,n){let r=h.get(`notes`,e);r&&h.tx(n??`「${r.name}」を編集`,n=>{n.patch(`notes`,e,t)})}function Qt(e){let t=h.get(`notes`,e);t&&h.tx(`開く`,e=>{e.put(`notes`,{...t,lastOpenedAt:Date.now()})},{history:!1})}function $t(e,t,n=`中身を編集`){let r=h.get(`notes`,e);r&&h.tx(`「${r.name}」の${n}`,n=>{n.patch(`notes`,e,{content:t})})}function en(e){let t=h.get(`notes`,e);if(!t)return null;let n=Date.now(),r={...structuredClone(t),id:P(`n`),name:`${t.name}のコピー`,createdAt:n,updatedAt:n,lastOpenedAt:n,pinned:!1,order:Yt(`notes`),author:`me`},i=new Map,a=[];for(let t of h.list(`terms`)){if(t.noteId!==e)continue;let o=P(`t`);i.set(t.id,o),a.push({...structuredClone(t),id:o,noteId:r.id,createdAt:n,updatedAt:n,author:`me`})}return h.tx(`「${t.name}」を複製`,t=>{t.put(`notes`,r);for(let e of a)t.put(`terms`,e);for(let a of h.list(`arrows`))a.noteId===e&&i.has(a.from)&&i.has(a.to)&&t.put(`arrows`,{...a,id:P(`a`),noteId:r.id,from:i.get(a.from),to:i.get(a.to),createdAt:n,updatedAt:n})}),r}function tn(e){let t=h.get(`notes`,e);return!t||e===`n-main`?null:L([{c:`notes`,id:e}],`「${t.name}」をゴミ箱へ`)}function nn(e,t){let n=Date.now(),r={id:P(`f`),createdAt:n,updatedAt:n,name:e.trim()||`フォルダ`,parentId:t,order:Yt(`folders`)};return h.tx(`フォルダ「${r.name}」を作成`,e=>e.put(`folders`,r)),r}function rn(e,t){h.get(`folders`,e)&&t.trim()&&h.tx(`フォルダの名前を「${t.trim()}」に`,n=>{n.patch(`folders`,e,{name:t.trim()})})}function an(e){let t=h.get(`folders`,e);t&&h.tx(`フォルダ「${t.name}」を削除`,n=>{for(let r of h.list(`notes`))r.folderId===e&&n.patch(`notes`,r.id,{folderId:t.parentId});for(let r of h.list(`folders`))r.parentId===e&&n.patch(`folders`,r.id,{parentId:t.parentId});n.patch(`folders`,e,{deletedAt:Date.now(),trashGroup:P(`tg`)})})}function on(e){let t=[],n=e?h.get(`folders`,e):void 0,r=0;for(;n&&r++<20;)t.unshift(n),n=n.parentId?h.get(`folders`,n.parentId):void 0;return t}function sn(e,t,n=`並べ替え`){h.tx(n,n=>{t.forEach((t,r)=>{let i=n.get(e,t);i&&i.order!==r&&n.patch(e,t,{order:r})})})}function cn(e,t){let n=Date.now(),r={id:P(`g`),createdAt:n,updatedAt:n,name:e.trim()||`グループ`,weakness:0,memo:``,members:t,order:Yt(`groups`),author:`me`};return h.tx(`グループ「${r.name}」を作成`,e=>e.put(`groups`,r)),r}function ln(e,t,n){let r=h.get(`groups`,e);r&&h.tx(n??`グループ「${r.name}」を編集`,n=>{n.patch(`groups`,e,t)})}function un(e,t){let n=h.get(`groups`,e);if(!n)return;let r=new Set(n.members.filter(e=>e.kind===`term`).map(e=>e.id)),i=t.filter(e=>!r.has(e)).map(e=>({kind:`term`,id:e}));i.length&&ln(e,{members:[...n.members,...i]},`グループ「${n.name}」に${i.length}語を追加`)}function dn(e,t){let n=h.get(`groups`,e);n&&ln(e,{members:n.members.filter(e=>e.kind!==`term`||e.id!==t)},`グループ「${n.name}」から外す`)}var fn=e=>h.list(`groups`).filter(t=>t.members.some(t=>t.kind===`term`&&t.id===e));function pn(e){let t=[];for(let n of e.members)if(n.kind===`term`){let e=h.get(`terms`,n.id);e&&!e.deletedAt&&t.push(e)}else for(let e of h.list(`terms`))e.noteId===n.noteId&&e.when.from>=n.from&&e.when.from<=n.to&&t.push(e);return t.sort((e,t)=>e.when.from-t.when.from)}function mn(e){let t=pn(e);if(!t.length)return e.when;let n=Math.min(...t.map(e=>e.when.from)),r=Math.max(...t.map(e=>e.when.to??e.when.from));return r>n?{from:n,to:r}:{from:n}}function hn(e={}){let t=Date.now(),n=Math.min(0,...h.list(`weakMemos`).map(e=>e.order)),r={id:P(`wm`),createdAt:t,updatedAt:t,title:``,body:``,causes:[],links:[],status:`open`,order:n-1,...e};return h.tx(`苦手メモを作成`,e=>e.put(`weakMemos`,r)),r}function gn(e,t,n=`苦手メモを編集`){h.get(`weakMemos`,e)&&h.tx(n,n=>{n.patch(`weakMemos`,e,t)})}var _n=e=>h.list(`weakMemos`).filter(t=>t.links.some(t=>t.kind===`term`&&t.id===e));function vn(e,t,n=`優先順位メモを編集`){h.get(`priorityMemos`,e)&&h.tx(n,n=>{n.patch(`priorityMemos`,e,t)})}var yn=(e,t)=>e.order-t.order;function bn(e,t,n){let r=e.map(e=>h.get(`terms`,e)).filter(e=>!!e&&!e.deletedAt);if(r.length<2)return null;r.sort((e,t)=>e.when.from-t.when.from);let i=[[`年`,e=>`${e.when.approx?`約`:``}${m(e.when.from)}${e.when.to!=null&&e.when.to!==e.when.from?`〜`+m(e.when.to):``}`],[`時代`,e=>b(e.when.from,V.eras).name],[`分野`,e=>h.get(`notes`,e.noteId)?.columns?.find(t=>t.id===e.col)?.name??``],[`政権担当`,e=>h.list(`terms`).filter(t=>t.noteId===e.noteId&&t.col===`ruler`&&t.shape===`span`&&t.when.from<=e.when.from&&(t.when.to??t.when.from)>=e.when.from).sort((e,t)=>t.importance-e.importance).slice(0,2).map(e=>e.name).join(`・`)],[`目的・背景`,()=>``],[`内容`,e=>e.desc],[`結果・影響`,()=>``],[`違い・見分け方`,()=>``],[`付箋`,e=>h.list(`stickies`).find(t=>t.anchor.kind===`term`&&t.anchor.termId===e.id)?.text??``]],a=[[{text:`項目`,bold:!0},...r.map(e=>({text:e.name,bold:!0,align:`center`}))],...i.map(([e,t])=>[{text:e,bold:!0,color:`gray`},...r.map(e=>({text:t(e)}))])],o={rows:a.length,cols:r.length+1,cells:a,header:1,headerCols:1},s=Math.min(...r.map(e=>e.when.from)),c=Math.max(...r.map(e=>e.when.to??e.when.from));return Xt(`table`,t??`比較：${r.map(e=>e.name).join(` × `)}`,{content:o,folderId:n,when:c>s?{from:s,to:c}:{from:s}})}var xn=[`原因`,`結果`,`影響`,`反発`,`継承`,`対立`,`見直し`,`発展`,`契機`];function Sn(e,t,n,r){if(t===n)return null;let i=Date.now(),a={id:P(`a`),createdAt:i,updatedAt:i,noteId:e,from:t,to:n,label:r.trim()},o=h.get(`terms`,t)?.name,s=h.get(`terms`,n)?.name;return h.tx(`矢印「${o} → ${s}」を引く`,e=>e.put(`arrows`,a)),a}function Cn(e,t,n=`矢印を編集`){h.get(`arrows`,e)&&h.tx(n,n=>{n.patch(`arrows`,e,t)})}function wn(e){let t=h.get(`arrows`,e);t&&Cn(e,{from:t.to,to:t.from},`矢印の向きを逆に`)}var Tn=e=>L([{c:`arrows`,id:e}],`矢印を削除`);function En(e,t,n,r=``,i=`yellow`){let a=Date.now(),o={id:P(`s`),createdAt:a,updatedAt:a,anchor:{kind:`timeline`,noteId:e,year:t,col:n},text:r,color:i,author:`me`};return h.tx(`表に付箋を貼る`,e=>e.put(`stickies`,o)),o}function Dn(e,t,n=`付箋を編集`){h.get(`stickies`,e)&&h.tx(n,n=>{n.patch(`stickies`,e,t)})}var On=e=>L([{c:`stickies`,id:e}],`付箋を削除`),kn=e=>h.list(`stickies`).filter(t=>t.anchor.kind===`timeline`&&t.anchor.noteId===e);function An(e,t,n=`差し込みを変更`){h.get(`embeds`,e)&&h.tx(n,n=>{n.patch(`embeds`,e,t)})}var jn=e=>L([{c:`embeds`,id:e}],`差し込みを外す`),Mn=(e,t=!0)=>e.importance+(t&&e.weakness>0?1:0);function Nn(e,t,n=!0){return Mn(e,n)>=t.minImportance}var Pn=(e,t)=>t.importance-e.importance||e.when.from-t.when.from||e.name.localeCompare(t.name,`ja`);function Fn(e){let{terms:t,columns:n,level:r,eras:i,gengo:a}=e,o=new Set(n.map(e=>e.id)),s=r.bucket===`era`,c=s?0:r.bucket,l=e=>{let t=0;for(let n=0;n<i.length;n++)i[n].from<=e&&(t=n);return t},u=e=>s?l(e):S(e,c),d=new Map,f=e=>{let t=d.get(e);return t||(t={points:new Map},d.set(e,t)),t},p=[],h=0,g=0,_=new Map,v=new Set;for(let n of t){if(n.deletedAt||!o.has(n.col)||e.filter&&!e.filter(n))continue;if(!Nn(n,r,e.weakBonus??!0)){g++;continue}h++;let t=u(n.when.from);if(n.shape===`span`&&n.when.to!=null&&n.when.to>n.when.from){let e=u(n.when.to);f(t),f(e),p.push({t:n,k0:t,k1:e})}else{let e=f(t),r=e.points.get(n.col)??[];r.push(n),e.points.set(n.col,r)}c===1&&(n.when.approx&&n.when.label?_.has(t)||_.set(t,n.when.label):v.add(t))}let y=new Map;for(let t of e.embeds??[]){if(t.deletedAt||!o.has(t.col)||(t.importance??8)<r.minImportance)continue;let e=u(t.year);f(e);let n=y.get(e)??[];n.push(t),y.set(e,n)}for(let t of e.stickies??[])t.anchor.kind===`timeline`&&!t.deletedAt&&f(u(t.anchor.year));let x=[...d.keys()].sort((e,t)=>e-t),w=new Map(x.map((e,t)=>[e,t])),E={},te=new Map,D=new Map;for(let e of p){let t=D.get(e.t.col)??[];t.push(e),D.set(e.t.col,t)}for(let[e,t]of D){t.sort((e,t)=>e.k0-t.k0||t.k1-e.k1||t.t.importance-e.t.importance);let n=[];for(let r of t){let t=w.get(r.k0),i=w.get(r.k1),a=n.findIndex(e=>e<t);a<0?(a=n.length,n.push(i)):n[a]=i;for(let n=t;n<=i;n++){let o=x[n],s=te.get(o);s||(s=new Map,te.set(o,s));let c=s.get(e)??[];c.push({term:r.t,lane:a,start:n===t,end:n===i}),s.set(e,c)}}E[e]=n.length}let ne=[],re=null,O=null;for(let t of x){let o=d.get(t),l,u,f,p,h;if(s)h=i[t],l=h.from,u=h.to-1,f=h.name,p=h.label??`${m(h.from)}〜`;else{[l,u]=T(t,c),h=b(l,i);let n=ee(t,c);if(f=!v.has(t)&&_.get(t)||n.main,p=n.sub,r.gengo){let t=C(l,a,e.gengoTo);t&&(p=c===1?t:`${t}〜`)}}!s&&(!re||re.id!==h.id)&&(ne.push({kind:`era`,key:`era:${h.id}:${t}`,era:h}),re=h);let g={},x=te.get(t),S=y.get(t)??[];for(let t of n){let n=(o.points.get(t.id)??[]).sort(Pn),i=r.maxPerCell??6,a=!!e.expanded?.has(`${t.id}|${l}`),s=a?1/0:i;g[t.id]={points:n.slice(0,s),more:Math.max(0,n.length-s),less:a&&n.length>i,spans:x?.get(t.id)??[],embeds:S.filter(e=>e.col===t.id&&e.display===`collapsed`)}}ne.push({kind:`row`,key:`r:${t}`,bucket:t,from:l,to:u,label:f,sub:p,era:h,cells:g,gapBefore:O!=null&&!s&&t-O>1});for(let e of S)e.display===`expanded`&&ne.push({kind:`embed`,key:`e:${e.id}`,embed:e,era:h,from:l});O=t}return{items:ne,lanes:E,shown:h,hidden:g}}function In(e,t){let n=-1;for(let r=0;r<e.length;r++){let i=e[r];if(i.kind===`row`){if(i.to>=Math.floor(t))return r;n=r}}return n}function Ln(e){return`${e.bucket===`era`?`時代ごと`:`${e.bucket}年刻み`}・重要度${e.minImportance}以上${e.gengo?`・元号`:``}`}var X={HEAD_H:34,ERA_H:36,ROW_MIN:46,GAP_MARK:10,YEAR_W:68,CELL_PAD:6,GAP:4,CHIP_PAD_X:8,CHIP_PAD_Y:4,WEAK_EXTRA:5,LINE:20,MASK_W:84,LANE_W:8,YEAR_LABEL_LINE:20,YEAR_SMALL_SIZE:12,YEAR_SMALL_LINE:16,YEAR_SUB_LINE:14,YEAR_SUB_SIZE:10.5,YEAR_PAD_Y:8,BOTTOM_PAD:220,EMBED_H:300},Rn={ruler:124,event:140,policy:140,system:128,diplomacy:132,finance:120,society:120,industry:120,culture:136,situation:128,world:140},zn=e=>e.width??Rn[e.id]??128,Bn=e=>Math.max(1,Math.min(5,Math.ceil(e/2))),Vn={5:[15,800],4:[14.5,700],3:[14,500],2:[13,400],1:[12.5,400]},Hn=e=>Vn[e],Un=null,Wn=`sans-serif`,Gn=new Map;function Kn(e){Wn=e||`sans-serif`,Gn.clear()}function qn(e,t,n){let r=`${t}|${n}|${e}`,i=Gn.get(r);if(i!=null)return i;Un||=(typeof document<`u`?document.createElement(`canvas`):null)?.getContext(`2d`)??null;let a;return Un?(Un.font=`${n} ${t}px ${Wn}`,a=Un.measureText(e).width):a=[...e].length*t,Gn.set(r,a),a}function Jn(e,t,n,r){if(qn(e,t,n)<=r)return 1;let i=1,a=0;for(let o of e){let e=qn(o,t,n);a+e>r&&a>0?(i++,a=e):a+=e}return i}function Yn(e,t,n,r=!1){let i=e.weakness?X.WEAK_EXTRA:0;if(n)return{w:X.MASK_W+i,h:X.LINE+X.CHIP_PAD_Y*2,years:!1};let[a,o]=Hn(Bn(e.importance)),s=X.CHIP_PAD_X*2+i,c=t-s,l=qn(e.name,a,o);if(r){let t=l+5+qn(Xn(e),11,500);if(t<=c)return{w:Math.ceil(t+s+1),h:X.LINE+X.CHIP_PAD_Y*2,years:!0}}return l<=c?{w:Math.ceil(l+s+1),h:X.LINE+X.CHIP_PAD_Y*2,years:!1}:{w:t,h:Jn(e.name,a,o,c)*X.LINE+X.CHIP_PAD_Y*2,years:!1}}var Xn=e=>{let t=e.when.from,n=e.when.to??t,r=e=>e<0?`前${-e}`:String(e);return t>0&&n>0&&Math.floor(t/100)===Math.floor(n/100)?`${r(t)}–${String(n).slice(-2)}`:`${r(t)}–${r(n)}`},Zn=e=>e.more?`＋${e.more}`:e.less?`閉じる`:``,Qn=e=>({w:Math.ceil(qn(e,13,700)+X.CHIP_PAD_X*2+1),h:X.LINE+X.CHIP_PAD_Y*2,years:!1}),$n=()=>`差し込み`;function er(e){$n=e}var tr=e=>$n(e);function nr(e,t){let n=Math.ceil(qn($n(e),13,600)+X.CHIP_PAD_X*2+20+1);return n<=t?{w:n,h:X.LINE+X.CHIP_PAD_Y*2,years:!1}:{w:t,h:Jn($n(e),13,600,t-X.CHIP_PAD_X*2-20)*X.LINE+X.CHIP_PAD_Y*2,years:!1}}function rr(e,t,n){let r=[];for(let i of e.spans)if(i.start){let e=Yn(i.term,t,n(i.term),!0);r.push({kind:`span`,id:i.term.id,...e})}for(let n of e.embeds){let e=nr(n,t);r.push({kind:`embed`,id:n.id,...e})}for(let i of e.points){let e=Yn(i,t,n(i));r.push({kind:`term`,id:i.id,...e})}let i=Zn(e);if(i){let e=Qn(i);r.push({kind:`more`,id:`more`,...e})}return r}function ir(e,t){let n=[];if(!e.length)return{pos:n,height:0};let r=0,i=0,a=0;for(let o of e)i>0&&i+X.GAP+o.w>t&&(r+=a+X.GAP,i=0,a=0),n.push({x:i>0?i+X.GAP:0,y:r}),i+=(i>0?X.GAP:0)+o.w,a=Math.max(a,o.h);return{pos:n,height:r+a}}function ar(e,t){return e-X.CELL_PAD*2-t-1}function or(e){if(!e||!e.spans.length)return 0;let t=0;for(let n of e.spans)n.lane>t&&(t=n.lane);return(t+1)*X.LANE_W+3}function sr(e,t,n){let r=t.map(zn),i=[],a=X.YEAR_W;for(let e of r)i.push(a),a+=e;let o=e.items.length,s=new Float64Array(o+1),c=new Float64Array(o),l=0;for(let i=0;i<o;i++){let a=e.items[i],o=a.kind===`era`?X.ERA_H:a.kind===`embed`?X.EMBED_H:lr(a,t,r,n);s[i]=l,c[i]=o,l+=o}return s[o]=l,{offsets:s,heights:c,total:l,colX:i,colW:r,totalW:a}}function cr(e){return qn(e,15.5,800)>X.YEAR_W-16}function lr(e,t,n,r){let i=X.ROW_MIN,a=cr(e.label)?Jn(e.label,X.YEAR_SMALL_SIZE,700,X.YEAR_W-16)*X.YEAR_SMALL_LINE:X.YEAR_LABEL_LINE,o=e.sub?Jn(e.sub,X.YEAR_SUB_SIZE,500,X.YEAR_W-16):0;return i=Math.max(i,X.YEAR_PAD_Y*2+a+o*X.YEAR_SUB_LINE),t.forEach((t,a)=>{let o=e.cells[t.id];if(!o)return;let s=ar(n[a],or(o)),c=ir(rr(o,s,r),s).height;c&&(i=Math.max(i,c+X.CELL_PAD*2+1))}),i+(e.gapBefore?X.GAP_MARK:0)}function ur(e,t){let n=0,r=e.heights.length-1;if(r<0)return-1;for(;n<r;){let i=n+r+1>>1;e.offsets[i]<=t?n=i:r=i-1}return n}function dr(e,t,n,r){let i=r(e,n);if(i<0)return 0;let a=e[i],o=a.to-a.from+1,s=n>=a.from?Math.min(.999,(n-a.from)/o):0;return t.offsets[i]+s*t.heights[i]}function fr(e,t,n){let r=ur(t,Math.max(0,n));if(r<0)return null;for(;r<e.length&&e[r].kind!==`row`;)r++;if(r>=e.length){for(r=e.length-1;r>=0&&e[r].kind!==`row`;)r--;if(r<0)return null}let i=e[r],a=Math.max(0,Math.min(.999,(n-t.offsets[r])/t.heights[r]));return i.from+a*(i.to-i.from+1)}function pr(e,t,n,r,i){let a=new Map,o=e.gapBefore?X.GAP_MARK:0;return n.forEach((n,s)=>{let c=e.cells[n.id];if(!c)return;let l=or(c),u=ar(r.colW[s],l),d=rr(c,u,i),{pos:f}=ir(d,u);d.forEach((e,n)=>{(e.kind===`span`||e.kind===`term`)&&a.set(e.id,{x:r.colX[s]+X.CELL_PAD+l+f[n].x,y:t+o+X.CELL_PAD+f[n].y,w:e.w,h:e.h})});for(let e of c.spans)a.has(e.term.id)||a.set(e.term.id,{x:r.colX[s]+X.CELL_PAD+e.lane*X.LANE_W+1,y:t+o+4,w:6,h:20})}),a}var mr=o(new Set),hr=o(!1);function gr(e,t){return t.cols.length&&!t.cols.includes(e.col)?t.manual&&!!e.hide:!!(t.manual&&e.hide||t.minImportance>0&&e.importance>=t.minImportance||t.minWeakness>0&&e.weakness>=t.minWeakness)}function _r(e,t,n,r){return!e||r?e=>!1:e=>gr(e,t)&&!n.has(e.id)}var vr=new Map;function yr(e){vr.set(e,Date.now());let t=new Set(mr.value);t.add(e),mr.value=t}function br(){mr.value=new Set,hr.value=!1}function xr(){hr.value=!0}function Sr(e,t){let n=[];e.minImportance>0&&n.push(`重要度${e.minImportance}以上`),e.minWeakness>0&&n.push(`苦手${e.minWeakness}以上`),e.manual&&n.push(`個別指定`);let r=e.cols.length?`（${e.cols.map(t).join(`・`)}）`:``;return(n.join(`・`)||`対象なし`)+r}function Cr(){let e=h.undo();e?q(`元に戻しました：${e}`,{action:{label:`やり直す`,run:wr},key:`undo`}):q(`元に戻せる操作がありません`)}function wr(){let e=h.redo();e&&q(`やり直しました：${e}`,{action:{label:`元に戻す`,run:Cr},key:`undo`})}function Z(e,t){q(e,{action:{label:`元に戻す`,run:Cr},key:t})}var Tr={10:`最重要`,9:`共通テスト頻出`,8:`共通テストで出る`,7:`二次・私大で頻出`,6:`二次・私大で出る`,5:`標準`,4:`難関私大で時々`,3:`難関私大でたまに`,2:`難関私大でまれ`,1:`細かい知識`};function Er({preset:t,onClose:n,columns:r,noteId:i=de}){let[a,o]=u(``),[s,c]=u(`event`),[d,f]=u(``),[p,m]=u(``),[h,g]=u(5),[_,v]=u(``),y=e(null);l(()=>{t&&(o(``),m(``),v(``),c(t.col??localStorage.getItem(`nhnote.lastCol`)??`event`),f(t.year==null?``:String(t.year)),setTimeout(()=>y.current?.focus(),250))},[t]);let b=()=>{let e=parseInt(d,10),t=p.trim()?parseInt(p,10):void 0;if(!a.trim()){v(`名前を入れてください`);return}if(Number.isNaN(e)){v(`年を数字で入れてください（紀元前は -300 のように）`);return}if(t!=null&&(Number.isNaN(t)||t<e)){v(`終わりの年は始まりより後にしてください`);return}let r=me({name:a,col:s,when:t==null?{from:e}:{from:e,to:t},importance:h,noteId:i});try{localStorage.setItem(`nhnote.lastCol`,s)}catch{}n(),G(e,{termId:r.id}),Z(`「${r.name}」を追加しました`)};return E(Y,{open:!!t,onClose:n,title:`用語を追加`,full:!0,children:E(`div`,{class:`form`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{ref:y,value:a,placeholder:`例：乙巳の変`,onInput:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&b()}})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`列`}),E(`select`,{value:s,onChange:e=>c(e.target.value),children:r.map(e=>E(`option`,{value:e.id,children:[e.name,e.visible?``:`（非表示の列）`]},e.id))})]}),E(`div`,{class:`fld-row`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`年`}),E(`input`,{inputMode:`numeric`,value:d,placeholder:`645`,onInput:e=>f(e.target.value)})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`終わり（期間なら）`}),E(`input`,{inputMode:`numeric`,value:p,placeholder:`なし`,onInput:e=>m(e.target.value)})]})]}),E(`div`,{class:`f-label`,children:[`重要度`,E(`small`,{children:Tr[h]})]}),E(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(e=>E(`button`,{"aria-label":`重要度${e}`,class:e<=h?`on`:``,style:{height:10+e*2.2+`px`},onClick:()=>g(e)},e)),E(`div`,{class:`imp-txt`,children:E(`b`,{children:h})})]}),_&&E(`p`,{class:`err`,children:_}),E(`button`,{class:`btn primary wide`,onClick:b,children:[E(K,{name:`plus`}),`追加する`]}),E(`p`,{class:`hint`,children:`終わりの年を入れると「期間」として、年表に縦線で表示されます。表の空いたマスを長押ししても、その場所に追加できます。`})]})})}function Dr({open:e,onClose:t,level:n,onLevel:r,noteId:i=de}){h.rev.value;let a=h.get(`notes`,i)?.columns??[],o=h.settings.zoomLevels,[s,l]=u(``),d=(e,t)=>{let n=[...a],r=e+t;r<0||r>=n.length||([n[e],n[r]]=[n[r],n[e]],B(i,n,`列の並びを変更`))},f=e=>{let t=a.map((t,n)=>n===e?{...t,visible:!t.visible}:t);t.some(e=>e.visible)&&B(i,t,`列「${a[e].name}」を${a[e].visible?`非表示`:`表示`}に`)},p=()=>{let e=s.trim();e&&(B(i,[...a,{id:P(`col`),name:e,visible:!0}],`列「${e}」を追加`),l(``))};return E(Y,{open:e,onClose:t,title:`表示`,full:!0,children:E(`div`,{class:`form`,children:[E(`div`,{class:`f-label`,children:[`ズーム`,E(`small`,{children:`ピンチでも変えられます`})]}),E(`input`,{type:`range`,class:`range`,min:0,max:o.length-1,step:1,value:o.length-1-n,onInput:e=>r(o.length-1-e.target.value),"aria-label":`ズームの段階`}),E(`div`,{class:`range-ends`,children:[E(`span`,{children:`粗く（時代ごと）`}),E(`span`,{children:`細かく（1年ごと）`})]}),E(`p`,{class:`now`,children:[`いま：`,Ln(o[n])]}),E(`div`,{class:`f-label`,children:`苦手で絞り込み`}),E(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>E(`button`,{class:U.value.weakFilter===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>W({weakFilter:e}),children:e?E(c,{children:[E(`i`,{}),e,`以上`]}):`すべて`},e))}),E(`label`,{class:`switch-row`,children:[E(`span`,{children:`苦手を付けた用語は、縮小しても少し長く残す`}),E(`input`,{type:`checkbox`,class:`switch`,checked:h.settings.weakBonus,onChange:e=>h.setSettings({weakBonus:e.target.checked})})]}),E(`div`,{class:`f-label`,children:[`列`,E(`small`,{children:`表示・並び替え・追加`})]}),E(`div`,{class:`list-box`,children:a.map((e,t)=>E(`div`,{class:`lrow`,children:[E(`input`,{type:`checkbox`,class:`switch sm`,checked:e.visible,onChange:()=>f(t),"aria-label":`${e.name}を表示`}),E(`span`,{class:`nm ${e.visible?``:`off`}`,children:e.name}),E(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>d(t,-1),disabled:t===0,children:E(K,{name:`chevronUp`})}),E(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>d(t,1),disabled:t===a.length-1,children:E(K,{name:`chevronDown`})})]},e.id))}),E(`div`,{class:`add-row`,children:[E(`input`,{value:s,placeholder:`新しい列の名前`,onInput:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&p()}}),E(`button`,{class:`btn`,onClick:p,children:[E(K,{name:`plus`}),`追加`]})]}),E(`p`,{class:`hint`,children:`「西暦・元号・時代」は左端に固定で表示されます。`})]})})}function Or({open:e,onClose:t,columns:n}){h.rev.value;let r=h.settings.redSheet,i=e=>h.setSettings({redSheet:{...r,...e}});return E(Y,{open:e,onClose:t,title:`赤シートで隠すもの`,full:!0,children:E(`div`,{class:`form`,children:[E(`div`,{class:`f-label`,children:[`重要度がこれ以上`,E(`small`,{children:r.minImportance?`${r.minImportance}以上`:`使わない`})]}),E(`div`,{class:`chips-row`,children:[0,10,9,8,7,6,5,4,3,1].map(e=>E(`button`,{class:`chip ${r.minImportance===e?`on`:``}`,onClick:()=>i({minImportance:e}),children:e?`${e}以上`:`なし`},e))}),E(`div`,{class:`f-label`,children:`苦手度がこれ以上`}),E(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>E(`button`,{class:r.minWeakness===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>i({minWeakness:e}),children:e?E(c,{children:[E(`i`,{}),e,`以上`]}):`なし`},e))}),E(`label`,{class:`switch-row`,children:[E(`span`,{children:`個別に指定した用語も隠す`}),E(`input`,{type:`checkbox`,class:`switch`,checked:r.manual,onChange:e=>i({manual:e.target.checked})})]}),E(`div`,{class:`f-label`,children:[`対象の列`,E(`small`,{children:r.cols.length?`${r.cols.length}列だけ`:`すべての列`})]}),E(`div`,{class:`chips-row`,children:n.map(e=>{let t=r.cols.includes(e.id);return E(`button`,{class:`chip ${t?`on`:``}`,onClick:()=>i({cols:t?r.cols.filter(t=>t!==e.id):[...r.cols,e.id]}),children:e.name},e.id)})}),E(`p`,{class:`hint`,children:`隠した語は、どれも同じ幅の赤い板になります（文字数や形から答えが分からないように）。板をタップすると1つずつめくれます。`})]})})}function kr({items:t,getId:n,render:r,onReorder:i,class:a,gap:o=0}){let s=e(null),[c,d]=u(null),f=e({id:``,y0:0,from:0,tops:[],heights:[],timer:null,x0:0,active:!1,pid:0,el:null}),p=t.map(n),m=e(0);l(()=>{let e=s.current;if(!e)return;let t=e=>{f.current.active&&e.preventDefault()};e.addEventListener(`touchmove`,t,{passive:!1});let n=e=>{Date.now()-m.current<300&&(e.stopPropagation(),e.preventDefault())};return e.addEventListener(`click`,n,!0),()=>{e.removeEventListener(`touchmove`,t),e.removeEventListener(`click`,n,!0)}},[]);let h=(e,t)=>{if(t<0||t>=p.length||e===t)return;let n=[...p],[r]=n.splice(e,1);n.splice(t,0,r),i(n)},g=(e,t,n)=>{if(e.target.closest(`input, textarea, select, [contenteditable="true"], .no-drag`))return;let r=f.current;r.id=t,r.y0=e.clientY,r.x0=e.clientX,r.from=n,r.active=!1,r.pid=e.pointerId,r.el=e.currentTarget,r.timer&&clearTimeout(r.timer),r.timer=setTimeout(()=>{let e=[...s.current.querySelectorAll(`:scope > .sort-row`)];r.tops=e.map(e=>e.getBoundingClientRect().top),r.heights=e.map(e=>e.getBoundingClientRect().height),r.active=!0;try{r.el?.setPointerCapture(r.pid)}catch{}navigator.vibrate?.(12),d({id:t,dy:0,target:n})},400)},_=e=>{let t=f.current;if(!t.active){t.timer&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)>8&&(clearTimeout(t.timer),t.timer=null);return}let n=e.clientY-t.y0,r=t.tops[t.from]+t.heights[t.from]/2+n,i=t.from;for(let e=0;e<t.tops.length;e++){let n=t.tops[e]+t.heights[e]/2;if(e<t.from&&r<n){i=e;break}e>t.from&&r>n&&(i=e)}d({id:t.id,dy:n,target:i})},v=()=>{let e=f.current;e.timer&&=(clearTimeout(e.timer),null),e.active&&c&&(m.current=Date.now(),h(e.from,c.target)),e.active=!1,d(null)},y=e=>{if(!c)return 0;let t=f.current,n=(t.heights[t.from]??0)+o;return e>t.from&&e<=c.target?-n:e<t.from&&e>=c.target?n:0};return E(`div`,{class:`sortable ${a??``} ${c?`dragging`:``}`,ref:s,style:o?{display:`flex`,flexDirection:`column`,gap:o+`px`}:void 0,children:t.map((e,n)=>{let i=p[n],a=c?.id===i;return E(`div`,{class:`sort-row ${a?`lifted`:``}`,style:{transform:a?`translateY(${c.dy}px) scale(1.02)`:`translateY(${y(n)}px)`,transition:a?`none`:void 0},onPointerDown:e=>g(e,i,n),onPointerMove:_,onPointerUp:v,onPointerCancel:v,children:r(e,{index:n,count:t.length,dragging:a,up:()=>h(n,n-1),down:()=>h(n,n+1)})},i)})})}var Ar=re({BoardPickSheet:()=>zr,EmbedSheet:()=>Lr,addToBoard:()=>Rr,addToBoardPrompt:()=>Fr,boardTarget:()=>Mr,createEmbed:()=>Ir,embedPinPrompt:()=>Pr,embedPrompt:()=>Nr,embedTarget:()=>jr}),jr=o(null),Mr=o(null);function Nr(e){jr.value={kind:`note`,id:e}}function Pr(e){jr.value={kind:`pin`,id:e}}function Fr(e){Mr.value=e}function Ir(e){let t=Date.now(),n={id:P(`e`),createdAt:t,updatedAt:t,...e};return h.tx(`年表に差し込む`,e=>e.put(`embeds`,n)),n}function Lr(){let e=jr.value,[t,n]=u(``),[r,i]=u(`event`),[a,o]=u(de),[s,c]=u(`collapsed`),[d,f]=u(``);l(()=>{if(e){if(f(``),c(`collapsed`),e.kind===`note`){let t=h.get(`notes`,e.id),r=t?li(t):void 0;n(String(r?.from??Math.floor(U.value.focusYear)))}else{let t=h.get(`pins`,e.id);n(String(t?.when?.from??Math.floor(U.value.focusYear)))}}},[e]);let p=()=>{jr.value=null},m=h.list(`notes`).filter(e=>e.kind===`timeline`),g=h.get(`notes`,a)?.columns??[],_=e?e.kind===`note`?h.get(`notes`,e.id)?.name:h.get(`pins`,e.id)?.title:``;return E(Y,{open:!!e,onClose:p,title:`年表に差し込む`,children:e&&E(`div`,{class:`form`,children:[E(`p`,{class:`hint`,children:[`「`,_,`」を、年表の好きな年・列に置きます。`,e.kind===`pin`?`地図のピンはボタンとして置かれ、タップすると地図が開きます。`:`最初はボタン（タップで開く）として置かれます。`]}),m.length>1&&E(`label`,{class:`fld`,children:[E(`span`,{children:`年表`}),E(`select`,{value:a,onChange:e=>o(e.target.value),children:m.map(e=>E(`option`,{value:e.id,children:e.name},e.id))})]}),E(`div`,{class:`fld-row`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`年`}),E(`input`,{inputMode:`numeric`,value:t,onInput:e=>n(e.target.value)})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`列`}),E(`select`,{value:r,onChange:e=>i(e.target.value),children:g.map(e=>E(`option`,{value:e.id,children:e.name},e.id))})]})]}),e.kind===`note`&&E(`div`,{class:`seg two`,children:[E(`button`,{class:s===`collapsed`?`on`:``,onClick:()=>c(`collapsed`),children:`ボタンで置く`}),E(`button`,{class:s===`expanded`?`on`:``,onClick:()=>c(`expanded`),children:`展開して置く`})]}),d&&E(`p`,{class:`err`,children:d}),E(`button`,{class:`btn primary wide`,onClick:()=>{let n=parseInt(t,10);if(Number.isNaN(n)){f(`年を数字で入れてください`);return}Ir({noteId:a,year:n,col:r,target:e,display:e.kind===`pin`?`collapsed`:s}),p(),q(`「${_}」を年表に差し込みました`,{action:{label:`年表で見る`,run:()=>{W({tab:a===`n-main`?`timeline`:`notes`,openNoteId:a===`n-main`?U.value.openNoteId:a}),G(n)}}})},children:[E(K,{name:`timelineEvent`}),`差し込む`]})]})})}function Rr(e,t){let n=h.get(`notes`,e);if(!n)return;let r=n.content??{items:[]};if(r.items.some(e=>e.kind===t.kind&&e.id===t.id)){q(`すでに入っています`);return}$t(e,{...r,items:[...r.items,t]},`比較ボードに追加`)}function zr(){let e=Mr.value,[t,n]=u(``),r=()=>{Mr.value=null},i=h.list(`notes`).filter(e=>e.kind===`board`),a=e?e.kind===`note`?h.get(`notes`,e.id)?.name:e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:`地図`:``;return E(Y,{open:!!e,onClose:r,title:`比較ボードに追加`,children:e&&E(`div`,{class:`form`,children:[E(`p`,{class:`hint`,children:[`「`,a,`」を入れる比較ボードを選びます。`]}),E(`div`,{class:`list-box`,children:i.map(t=>E(`button`,{class:`lrow btnrow`,onClick:()=>{Rr(t.id,e),r(),Z(`「${t.name}」に追加しました`)},children:[E(K,{name:`board`}),E(`span`,{class:`nm`,children:t.name}),E(`span`,{class:`ct`,children:[(t.content?.items??[]).length,`件`]})]},t.id))}),E(`div`,{class:`add-row`,children:[E(`input`,{value:t,placeholder:`新しい比較ボードの名前`,onInput:e=>n(e.target.value)}),E(`button`,{class:`btn`,onClick:()=>{let n=Xt(`board`,t||`比較ボード`);Rr(n.id,e),r(),Z(`「${n.name}」を作って追加しました`)},children:[E(K,{name:`plus`}),`作る`]})]})]})})}var Br=o(null);function Vr(e,t=null){Br.value={a:e,b:t,sync:!0,ratio:.5}}function Hr(){Br.value=null}var Ur=o(!1);function Wr({target:e,onClose:t}){return E(Y,{open:!!e,onClose:t,title:e?.startsWith(`folder:`)?`フォルダ`:`ノート`,children:e&&(e.startsWith(`folder:`)?E(Gr,{id:e.slice(7),onClose:t}):E(Kr,{id:e,onClose:t}))})}function Gr({id:e,onClose:t}){let n=h.get(`folders`,e),[r,i]=u(n?.name??``),[a,o]=u(``);return n?E(`div`,{class:`form`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>void hi(e,`rename`,r)})]}),E(`div`,{class:`add-row`,children:[E(`input`,{value:a,placeholder:`中に作るフォルダの名前`,onInput:e=>o(e.target.value)}),E(`button`,{class:`btn`,onClick:()=>{a.trim()&&(nn(a,e),o(``),Z(`フォルダを作りました`))},children:[E(K,{name:`folderPlus`}),`作る`]})]}),E(`div`,{class:`action-list`,children:E(`button`,{class:`danger`,onClick:()=>{t(),hi(e,`delete`)},children:[E(K,{name:`trash`}),`このフォルダを削除（中身は残す）`]})})]}):null}function Kr({id:e,onClose:t}){h.rev.value;let n=h.get(`notes`,e),[r,i]=u(n?.name??``),[a,o]=u(n?.tags.join(`、`)??``),[s,c]=u(n?.when?String(n.when.from):``),[d,f]=u(n?.when?.to==null?``:String(n.when.to));if(l(()=>{i(n?.name??``)},[n?.name]),!n)return null;let p=h.list(`folders`),m=e=>on(e).map(e=>e.name).join(` › `),g=()=>{let t=[...new Set(a.split(/[、,，\s#]+/).map(e=>e.trim()).filter(Boolean))];t.join()!==n.tags.join()&&Zt(e,{tags:t},`タグを変更`)},_=()=>{let t=parseInt(s,10),r=parseInt(d,10);if(Number.isNaN(t)){n.when&&Zt(e,{when:void 0},`時期を消す`);return}Zt(e,{when:!Number.isNaN(r)&&r>t?{from:t,to:r}:{from:t}},`時期を設定`)},v=e===de;return E(`div`,{class:`form`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r.trim()&&r!==n.name&&Zt(e,{name:r.trim()},`名前を変更`)}})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`タグ（、で区切る）`}),E(`input`,{value:a,placeholder:`土地制度、外交`,onInput:e=>o(e.target.value),onBlur:g})]}),E(`div`,{class:`fld-row`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`時期（年）`}),E(`input`,{inputMode:`numeric`,value:s,placeholder:`自動`,onInput:e=>c(e.target.value),onBlur:_})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`〜終わり`}),E(`input`,{inputMode:`numeric`,value:d,placeholder:``,onInput:e=>f(e.target.value),onBlur:_})]})]}),E(`p`,{class:`hint`,children:`時期を入れると「この時期のノート」に出て、比較のときに年でそろえられます（空なら中身から自動）。`}),!v&&E(`label`,{class:`fld`,children:[E(`span`,{children:`フォルダ`}),E(`select`,{value:n.folderId??``,onChange:t=>{let n=t.target.value;Zt(e,{folderId:n||void 0},`フォルダを移動`)},children:[E(`option`,{value:``,children:`（いちばん上）`}),p.map(e=>E(`option`,{value:e.id,children:m(e.id)},e.id))]})]}),E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>Zt(e,{pinned:!n.pinned},n.pinned?`ピン留めを外す`:`ピン留め`),children:[E(K,{name:`pinned`}),n.pinned?`ピン留めを外す`:`ピン留めする`]}),!v&&n.kind!==`timeline`&&n.kind!==`board`&&E(`button`,{onClick:()=>{t(),Nr(e)},children:[E(K,{name:`timelineEvent`}),`年表に差し込む`]}),E(`button`,{onClick:()=>{t(),Vr(n.kind===`timeline`?{kind:`timeline`,id:e}:{kind:`note`,id:e})},children:[E(K,{name:`splitRows`}),`並べて見る`]}),E(`button`,{onClick:()=>{t(),Fr({kind:`note`,id:e})},children:[E(K,{name:`board`}),`比較ボードに追加`]}),E(`button`,{onClick:()=>{let n=en(e);n&&(t(),Z(`「${n.name}」を作りました`))},children:[E(K,{name:`copy`}),`複製する`]}),!v&&E(`button`,{class:`danger`,onClick:()=>{tn(e),t(),U.value.openNoteId===e&&W({openNoteId:null}),Z(`「${n.name}」をゴミ箱に入れました`)},children:[E(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}var qr=[[`timeline`,`年表`,`table`,`自分専用の年表（例：室町の外交まとめ）`],[`table`,`表`,`cols3`,`セルの結合・色・強調ができる表`],[`diagram`,`図`,`sitemap`,`箱・文字・矢印・囲み枠の図（流れ図・関係図・系図）`],[`chart`,`グラフ`,`chartLine`,`折れ線・棒グラフ（人口・貿易額・石高など）`],[`memo`,`メモ`,`fileText`,`自由に書くメモ（〔 〕で赤シート）`],[`board`,`比較ボード`,`board`,`比べたいものを集めておく場所`],[`folder`,`フォルダ`,`folder`,`ノートを分けて入れる`],[`import`,`画像から取り込む`,`photo`,`写真の表・図・グラフを、編集できる形に`]];function Jr({mode:e,folderId:t,onClose:n,onMode:r}){let[i,a]=u(``);l(()=>{a(``)},[e]);let o=()=>{if(!e||e===`menu`||e===`import`)return;if(e===`folder`){nn(i||`フォルダ`,t),n(),Z(`フォルダを作りました`);return}let r=Xt(e,i||Jt[e],{folderId:t});n(),fi(r.id)},s=e&&e!==`menu`?qr.find(t=>t[0]===e)?.[1]:``;return E(Y,{open:!!e,onClose:n,title:e===`menu`?`新しく作る`:`${s}を作る`,children:[e===`menu`&&E(`div`,{class:`create-grid`,children:qr.map(([e,t,i,a])=>E(`button`,{class:`create-item`,onClick:()=>{if(e===`import`){n(),W({tab:`notes`}),Ur.value=!0;return}r(e)},children:[E(`span`,{class:`fi`,"data-kind":e,children:E(K,{name:i})}),E(`b`,{children:t}),E(`small`,{children:a})]},e))}),e&&e!==`menu`&&e!==`import`&&E(`div`,{class:`form`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{value:i,placeholder:e===`folder`?`例：古代`:`例：${e===`timeline`?`室町の外交まとめ`:e===`table`?`江戸の三大改革`:e===`diagram`?`摂関政治の系図`:e===`chart`?`江戸時代の人口`:e===`board`?`土地制度の比較`:`覚え方メモ`}`,autoFocus:!0,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&o()}})]}),E(`button`,{class:`btn primary wide`,onClick:o,children:[E(K,{name:e===`folder`?`folderPlus`:ci[e]??`plus`}),`作る`]}),E(`button`,{class:`btn wide ghost`,onClick:()=>r(`menu`),children:`戻る`})]})]})}function Yr(e){let t=[],n=/〔([^〔〕]*)〕/g,r=0,i;for(;i=n.exec(e);)i.index>r&&t.push({text:e.slice(r,i.index),hidden:!1}),t.push({text:i[1],hidden:!0}),r=i.index+i[0].length;return r<e.length&&t.push({text:e.slice(r),hidden:!1}),t}function Xr({text:e,sheet:t,class:n,placeholder:r}){let[i,a]=u(new Set);if(!e)return r?E(`span`,{class:`rt ${n??``} ph`,children:r}):null;let o=Yr(e);return E(`span`,{class:`rt ${n??``}`,children:o.map((e,n)=>e.hidden?t&&!i.has(n)?E(`button`,{class:`rt-mask`,"aria-label":`隠れた語（タップでめくる）`,onClick:e=>{e.stopPropagation(),a(new Set([...i,n]))}},n):E(`mark`,{class:`rt-hid ${t?`peeled`:``}`,children:e.text},n):E(Zr,{text:e.text},n))})}function Zr({text:e}){let t=e.split(`
`);return E(c,{children:t.map((e,t)=>t?[E(`br`,{},`b`+t),e]:e)})}function Qr({note:t}){let n=t.content??{text:``},[r,i]=u(n.text),[a,o]=u(!n.text),s=e(r);s.current=r;let c=()=>{let e=h.get(`notes`,t.id)?.content?.text??``;s.current!==e&&$t(t.id,{text:s.current},`メモを編集`)};l(()=>{a||i(n.text)},[n.text]),l(()=>()=>c(),[]);let d=U.value.redSheet;return E(`div`,{class:`memo-note`,children:[E(`div`,{class:`memo-tools`,children:[E(`button`,{class:`tool ${d?`sheet-on`:``}`,onClick:()=>W({redSheet:!d}),children:[E(K,{name:`eyeOff`}),`赤シート`]}),E(`button`,{class:`tool ${a?`pen-on`:``}`,onClick:()=>{a&&c(),o(!a)},children:[E(K,{name:a?`check`:`pencil`}),a?`書き終わる`:`書く`]})]}),a?E(`textarea`,{class:`memo-area`,value:r,autoFocus:!0,placeholder:`自由に書けます。
〔 〕で囲んだ語は、赤シートで隠れます。
例：大宝律令は〔701〕年に制定。`,onInput:e=>i(e.target.value),onBlur:c}):E(`div`,{class:`memo-read`,onDblClick:()=>o(!0),children:E(Xr,{text:n.text,sheet:d,placeholder:`（空のメモ）`})})]})}var $r=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),ei=function(e,t){return new URL(e,t).href},ti={},ni=function(e){return e.pathname.endsWith(`.css`)},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ei(t,n);let r=s(t);if(r.href in ti)return;ti[r.href]=!0;let i=ni(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:$r,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ri=xt(()=>Q(()=>import(`./TableNote.js`).then(e=>({default:e.TableNote})),[],import.meta.url)),ii=xt(()=>Q(()=>import(`./DiagramNote.js`).then(e=>({default:e.DiagramNote})),[],import.meta.url)),ai=xt(()=>Q(()=>import(`./ChartNote.js`).then(e=>({default:e.ChartNote})),[],import.meta.url)),oi=xt(()=>Q(()=>import(`./BoardNote.js`).then(e=>({default:e.BoardNote})),[],import.meta.url));function si({note:e}){let[t,n]=u(!1),r=()=>W({openNoteId:null,notesFolder:e.folderId??null});if(e.kind===`timeline`)return E(zi,{noteId:e.id,onBack:r});let i=on(e.folderId);return E(`div`,{class:`view note-view`,children:[E(`header`,{class:`appbar`,children:[E(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:r,children:E(K,{name:`chevronLeft`})}),E(`div`,{class:`tt`,children:[E(`div`,{class:`crumb`,children:[`ノート`,i.map(e=>E(c,{children:[E(K,{name:`chevronRight`}),e.name]})),E(K,{name:`chevronRight`}),E(K,{name:ci[e.kind],size:13}),Jt[e.kind]]}),E(`h1`,{class:`title`,children:e.name})]}),E(`button`,{class:`iconbtn`,"aria-label":`ノートの操作`,onClick:()=>n(!0),children:E(K,{name:`dots`})})]}),E(bt,{fallback:E(`div`,{class:`loading`,children:`読み込み中…`}),children:[e.kind===`memo`&&E(Qr,{note:e}),e.kind===`table`&&E(ri,{note:e}),e.kind===`diagram`&&E(ii,{note:e}),e.kind===`chart`&&E(ai,{note:e}),e.kind===`board`&&E(oi,{note:e})]}),E(Wr,{target:t?e.id:null,onClose:()=>n(!1)})]})}var ci={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function li(e){if(e.when)return e.when;if(e.kind===`timeline`){let t=h.list(`terms`).filter(t=>t.noteId===e.id);return t.length?{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}:void 0}if(e.kind===`chart`){let t=(e.content?.series??[]).flatMap(e=>e.points.map(e=>e[0]));return t.length?{from:Math.min(...t),to:Math.max(...t)}:void 0}if(e.kind===`board`){let t=(e.content?.items??[]).map(e=>e.kind===`note`?h.get(`notes`,e.id):void 0).filter(Boolean).map(e=>li(e)).filter(Boolean);return t.length?{from:Math.min(...t.map(e=>e.from)),to:Math.max(...t.map(e=>e.to??e.from))}:void 0}let t=h.list(`terms`).filter(t=>t.noteId===e.id);if(t.length)return{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}}var ui=e=>e?`${m(e.from)}${e.to!=null&&e.to!==e.from?`〜`+m(e.to):``}`:``,di=e=>{if(!e)return``;let t=Math.floor((Date.now()-e)/6e4);if(t<1)return`いま`;if(t<60)return`${t}分前`;let n=Math.floor(t/60);if(n<24)return`${n}時間前`;let r=Math.floor(n/24);return r<30?`${r}日前`:new Date(e).toLocaleDateString(`ja-JP`)};function fi(e){if(Qt(e),e===`n-main`){W({tab:`timeline`});return}W({tab:`notes`,openNoteId:e})}function pi(){h.rev.value;let e=U.value,t=e.openNoteId?h.get(`notes`,e.openNoteId):void 0;return t&&!t.deletedAt?E(si,{note:t},t.id):E(mi,{folderId:e.notesFolder&&h.get(`folders`,e.notesFolder)&&!h.get(`folders`,e.notesFolder).deletedAt?e.notesFolder:null})}function mi({folderId:e}){h.rev.value;let[t,n]=u(null),[r,i]=u(null),[a,o]=u(null),l=h.list(`notes`),d=h.list(`folders`),f=l.filter(t=>(t.folderId??null)===e&&(!a||t.tags.includes(a))).sort(yn),p=d.filter(t=>(t.parentId??null)===e).sort(yn),m=s(()=>[...l].filter(e=>e.lastOpenedAt).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)).slice(0,8),[h.rev.value]),g=l.filter(e=>e.pinned).sort(yn),_=[...new Set(l.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,`ja`)),v=b(Math.floor(T()),V.eras),y=l.filter(e=>e.id!==de).filter(e=>{let t=li(e);return t&&t.from<v.to&&(t.to??t.from)>=v.from}),x=h.list(`groups`).sort(yn),S=on(e),C=e?h.get(`folders`,e):void 0,w=e=>E(`div`,{class:`nrow`,onClick:()=>fi(e.id),children:[E(`span`,{class:`fi`,"data-kind":e.kind,children:E(K,{name:ci[e.kind]})}),E(`span`,{class:`tx`,children:[E(`b`,{children:e.name}),E(`small`,{children:[Jt[e.kind],ui(li(e))&&`・`+ui(li(e)),e.tags.length?`・`+e.tags.map(e=>`#`+e).join(` `):``]})]}),e.pinned&&E(K,{name:`pinned`,size:16}),E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`メニュー`,onClick:t=>{t.stopPropagation(),n(e.id)},children:E(K,{name:`dots`})})]});return E(`div`,{class:`view notes`,children:[e?E(`header`,{class:`appbar`,children:[E(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:()=>W({notesFolder:C?.parentId??null}),children:E(K,{name:`chevronLeft`})}),E(`div`,{class:`tt`,children:[E(`div`,{class:`crumb`,children:[`ノート`,S.slice(0,-1).map(e=>E(c,{children:[E(K,{name:`chevronRight`}),e.name]}))]}),E(`h1`,{class:`title`,children:C?.name})]}),E(`button`,{class:`iconbtn`,"aria-label":`フォルダの操作`,onClick:()=>n(`folder:`+e),children:E(K,{name:`dots`})})]}):E(`header`,{class:`bigbar row`,children:E(`h1`,{class:`big-title`,children:`ノート`})}),E(`div`,{class:`scroll`,children:[!e&&E(c,{children:[E(`button`,{class:`searchbox big`,onClick:()=>_i(),children:[E(K,{name:`search`}),E(`span`,{children:`ノート・用語・メモを検索`})]}),E(`div`,{class:`sec-title`,children:`最近開いた`}),E(`div`,{class:`cards`,children:[E(`button`,{class:`card`,style:{"--c":`var(--era-${v.id})`},onClick:()=>W({tab:`timeline`}),children:[E(`div`,{class:`band`}),E(`div`,{class:`cb`,children:[E(`div`,{class:`kind`,children:[E(K,{name:`table`}),`年表`]}),E(`div`,{class:`nm`,children:`全体年表`}),E(`div`,{class:`when`,children:[v.name,`を表示中`]})]})]}),m.filter(e=>e.id!==`n-main`).map(e=>{let t=li(e),n=t?b(t.from,V.eras):void 0;return E(`button`,{class:`card`,style:{"--c":n?`var(--era-${n.id})`:`var(--accent)`},onClick:()=>fi(e.id),children:[E(`div`,{class:`band`}),E(`div`,{class:`cb`,children:[E(`div`,{class:`kind`,children:[E(K,{name:ci[e.kind]}),Jt[e.kind]]}),E(`div`,{class:`nm`,children:e.name}),E(`div`,{class:`when`,children:di(e.lastOpenedAt)})]})]},e.id)})]}),y.length>0&&E(c,{children:[E(`div`,{class:`sec-title`,children:[`この時期のノート`,E(`small`,{style:{color:`var(--era-${v.id})`},children:v.name})]}),E(`div`,{class:`list`,children:y.slice(0,6).map(e=>E(`div`,{children:w(e)},e.id))})]}),g.length>0&&E(c,{children:[E(`div`,{class:`sec-title`,children:[`ピン留め`,E(`small`,{children:`長押しで並べ替え`})]}),E(kr,{class:`list`,items:g,getId:e=>e.id,onReorder:e=>sn(`notes`,e,`ピン留めを並べ替え`),render:e=>w(e)})]}),x.length>0&&E(c,{children:[E(`div`,{class:`sec-title`,children:[`グループ`,E(`small`,{children:`長押しで並べ替え`})]}),E(kr,{class:`list`,items:x,getId:e=>e.id,onReorder:e=>sn(`groups`,e,`グループを並べ替え`),render:e=>E(`div`,{class:`nrow`,onClick:()=>W({openGroupId:e.id}),children:[E(`span`,{class:`fi`,style:e.weakness?{"--c":`var(--w${e.weakness})`}:void 0,children:E(K,{name:`stack`})}),E(`span`,{class:`tx`,children:[E(`b`,{children:e.name}),E(`small`,{children:[pn(e).length,`語`,ui(mn(e))&&`・`+ui(mn(e)),e.weakness?`・苦手${e.weakness}`:``]})]}),E(K,{name:`chevronRight`})]})})]})]}),E(`div`,{class:`sec-title`,children:[e?`フォルダの中`:`フォルダとノート`,E(`small`,{children:a?E(`button`,{class:`linklike`,onClick:()=>o(null),children:[`#`,a,` ×`]}):`長押しで並べ替え`})]}),p.length>0&&E(kr,{class:`list`,items:p,getId:e=>e.id,onReorder:e=>sn(`folders`,e,`フォルダを並べ替え`),render:e=>E(`div`,{class:`nrow`,onClick:()=>W({notesFolder:e.id}),children:[E(`span`,{class:`fi folder`,children:E(K,{name:`folder`})}),E(`span`,{class:`tx`,children:[E(`b`,{children:e.name}),E(`small`,{children:[l.filter(t=>t.folderId===e.id).length,`件`]})]}),E(K,{name:`chevronRight`})]})}),f.length>0&&E(kr,{class:`list gap`,items:f,getId:e=>e.id,onReorder:e=>sn(`notes`,e,`ノートを並べ替え`),render:e=>w(e)}),!f.length&&!p.length&&E(`div`,{class:`empty`,children:[E(`div`,{class:`empty-ic`,children:E(K,{name:`notebook`,size:30})}),E(`p`,{children:`右下の＋から、年表・表・図・グラフ・メモ・比較ボード・フォルダを作れます。`})]}),!e&&_.length>0&&E(c,{children:[E(`div`,{class:`sec-title`,children:`タグ`}),E(`div`,{class:`tags`,children:_.map(e=>E(`button`,{class:a===e?`on`:``,onClick:()=>o(a===e?null:e),children:[`#`,e]},e))})]})]}),E(`button`,{class:`fab`,"aria-label":`新しく作る`,onClick:()=>i(`menu`),children:E(K,{name:`plus`})}),E(Wr,{target:t,onClose:()=>n(null)}),E(Jr,{mode:r,folderId:e??void 0,onClose:()=>i(null),onMode:i})]});function T(){return U.value.focusYear}}async function hi(e,t,n){let r=h.get(`folders`,e);if(r&&(t===`rename`&&n&&rn(e,n),t===`delete`)){if(!await J({title:`フォルダ「${r.name}」を削除しますか？`,body:`中のノートは消えずに、1つ上の場所に移ります。`,ok:`削除`,danger:!0}))return;an(e),W({notesFolder:r.parentId??null})}}var gi=o(!1);function _i(){gi.value=!0}function vi(){let t=gi.value,[n,r]=u(``),i=e(null);l(()=>{t&&(r(``),setTimeout(()=>i.current?.focus(),260))},[t]);let a=()=>{gi.value=!1},o=s(()=>{let e=n.trim();if(!e)return null;let t=/^-?\d{1,5}$/.test(e)?parseInt(e,10):null;return{terms:h.list(`terms`).filter(n=>t==null?n.name.includes(e)||(n.yomi??``).includes(e)||n.desc.includes(e):n.when.from===t||n.when.to!=null&&n.when.from<=t&&t<=n.when.to).sort((e,t)=>t.importance-e.importance||e.when.from-t.when.from).slice(0,50),notes:h.list(`notes`).filter(t=>t.name.includes(e)||t.tags.some(t=>t.includes(e.replace(/^#/,``)))||t.kind===`memo`&&(t.content?.text??``).includes(e)),groups:h.list(`groups`).filter(t=>t.name.includes(e)||t.memo.includes(e)),memos:h.list(`weakMemos`).filter(t=>t.title.includes(e)||t.body.includes(e)),prios:h.list(`priorityMemos`).filter(t=>t.text.includes(e))}},[n,h.rev.value]),c=e=>h.get(`notes`,e)?.name??``,d=o?o.terms.length+o.notes.length+o.groups.length+o.memos.length+o.prios.length:0;return E(Y,{open:t,onClose:a,title:`検索`,full:!0,children:E(`div`,{class:`form`,children:[E(`div`,{class:`searchbox`,children:[E(K,{name:`search`}),E(`input`,{ref:i,value:n,placeholder:`用語・ノート・メモ・タグ・年（例：743）`,onInput:e=>r(e.target.value)})]}),o&&E(`div`,{class:`results`,children:[o.notes.length>0&&E(`div`,{class:`res-h`,children:`ノート`}),o.notes.map(e=>E(`button`,{class:`res`,onClick:()=>{a(),fi(e.id)},children:[E(K,{name:ci[e.kind]}),E(`span`,{class:`nm`,children:e.name}),E(`span`,{class:`sub`,children:Jt[e.kind]})]},e.id)),o.terms.length>0&&E(`div`,{class:`res-h`,children:`用語`}),o.terms.map(e=>E(`button`,{class:`res`,onClick:()=>{a(),e.noteId===`n-main`?(W({tab:`timeline`}),G(e.when.from,{termId:e.id})):(fi(e.noteId),setTimeout(()=>G(e.when.from,{termId:e.id}),60))},children:[E(`span`,{class:`w ${e.weakness?`wk`+e.weakness:``}`}),E(`span`,{class:`nm`,children:e.name}),E(`span`,{class:`sub`,children:[m(e.when.from),e.noteId===`n-main`?``:`・`+c(e.noteId)]})]},e.id)),o.groups.length>0&&E(`div`,{class:`res-h`,children:`グループ`}),o.groups.map(e=>E(`button`,{class:`res`,onClick:()=>{a(),W({openGroupId:e.id})},children:[E(K,{name:`stack`}),E(`span`,{class:`nm`,children:e.name})]},e.id)),o.memos.length>0&&E(`div`,{class:`res-h`,children:`苦手メモ`}),o.memos.map(e=>E(`button`,{class:`res`,onClick:()=>{a(),W({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[E(K,{name:`note`}),E(`span`,{class:`nm`,children:e.title||e.body.slice(0,30)})]},e.id)),o.prios.length>0&&E(`div`,{class:`res-h`,children:`優先順位メモ`}),o.prios.map(e=>E(`button`,{class:`res`,onClick:()=>{a(),W({tab:`weak`,weakSeg:`priority`})},children:[E(K,{name:`listCheck`}),E(`span`,{class:`nm`,children:e.text})]},e.id)),!d&&E(`p`,{class:`hint center`,children:`見つかりませんでした。`})]})]})})}var yi=o(null);function bi(e,t,n={}){yi.value={title:e,onPick:t,...n}}var xi={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function Si(){let e=yi.value,[t,n]=u(``);l(()=>{e&&n(``)},[e]);let r=()=>{yi.value=null},i=e?h.list(`notes`).filter(n=>(!e.kinds||e.kinds.includes(n.kind))&&(!t.trim()||n.name.includes(t.trim()))).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)):[];return E(Y,{open:!!e,onClose:r,title:e?.title,full:!0,children:e&&E(`div`,{class:`form`,children:[E(`div`,{class:`searchbox`,children:[E(K,{name:`search`}),E(`input`,{value:t,placeholder:`ノートの名前で探す`,onInput:e=>n(e.target.value)})]}),E(`div`,{class:`results`,children:[e.extra?.map(t=>E(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[E(K,{name:t.icon}),E(`span`,{class:`nm`,children:t.label})]},t.id)),i.map(t=>E(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[E(K,{name:xi[t.kind]??`note`}),E(`span`,{class:`nm`,children:t.name}),E(`span`,{class:`sub`,children:Jt[t.kind]})]},t.id)),!i.length&&!e.extra?.length&&E(`p`,{class:`hint center`,children:`ノートがありません。ノートタブの＋から作れます。`})]})]})})}var Ci=o(null),wi=xt(()=>Q(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url));function Ti({at:e,noteId:t,onClose:n,onAdd:r}){let i=e?h.get(`notes`,t)?.columns?.find(t=>t.id===e.col)?.name:``;return E(Y,{open:!!e,onClose:n,title:e?`${m(e.year)}・${i}`:``,children:e&&E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>r(e),children:[E(K,{name:`plus`}),`ここに用語を追加`]}),E(`button`,{onClick:()=>{En(t,e.year,e.col),n(),Z(`付箋を貼りました（タップで書けます）`)},children:[E(K,{name:`sticker`}),`ここに付箋を貼る`]}),E(`button`,{onClick:()=>{n(),bi(`差し込むノートを選ぶ`,n=>{setTimeout(()=>Ei(n,e.year,e.col,t),50)})},children:[E(K,{name:`timelineEvent`}),`ここにノートを差し込む`]}),E(`button`,{onClick:()=>{n(),Dt(e.year,`timeline`),W({tab:`map`})},children:[E(K,{name:`map2`}),`この年の地図を見る`]})]})})}function Ei(e,t,n,r){Q(()=>Promise.resolve().then(()=>Ar).then(i=>{i.createEmbed({noteId:r,year:t,col:n,target:{kind:`note`,id:e},display:`collapsed`}),Z(`「${h.get(`notes`,e)?.name}」を差し込みました`)}),void 0,import.meta.url)}function Di({open:e,onClose:t,noteId:n,onSelect:r,onMap:i,onCompare:a}){let o=h.list(`groups`),[s,c]=u(!1);return l(()=>{e||c(!1)},[e]),E(Y,{open:e,onClose:t,title:`ほかの操作`,children:s?E(`div`,{class:`action-list`,children:[o.map(e=>E(`button`,{onClick:()=>{W({groupFilter:e.id}),t()},children:[E(K,{name:`stack`}),e.name]},e.id)),!o.length&&E(`p`,{class:`hint center`,children:`グループはまだありません。「選んで操作」→「グループ」で作れます。`})]}):E(`div`,{class:`action-list`,children:[E(`button`,{onClick:r,children:[E(K,{name:`handClick`}),`選んで操作（グループ・比較表・赤シート）`]}),E(`button`,{onClick:()=>c(!0),children:[E(K,{name:`filter`}),`グループで絞り込む`]}),E(`button`,{onClick:()=>W({showArrows:!U.value.showArrows}),children:[E(K,{name:`arrowRight`}),`矢印を`,U.value.showArrows?`隠す`:`表示する`]}),E(`button`,{onClick:a,children:[E(K,{name:`splitRows`}),`並べて見る`]}),E(`button`,{onClick:i,children:[E(K,{name:`map2`}),`この時期の地図を見る`]}),E(`p`,{class:`hint`,children:`付箋や差し込みは、表の空いたマスを長押しして置けます。矢印は、用語の詳細 →「矢印を引く」から。`}),n&&null]})})}function Oi({open:e,count:t,onClose:n,onCreate:r}){let[i,a]=u(``);return l(()=>{e&&a(``)},[e]),E(Y,{open:e,onClose:n,title:`グループにする`,children:E(`div`,{class:`form`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:[`グループの名前（`,t,`語）`]}),E(`input`,{value:i,autoFocus:!0,placeholder:`例：享保の改革`,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&r(i)}})]}),E(`button`,{class:`btn primary wide`,onClick:()=>r(i),children:[E(K,{name:`stack`}),`作る`]})]})})}function ki({pair:e,noteId:t,onClose:n}){let[r,i]=u(``);l(()=>{e&&i(``)},[e]);let a=e?h.get(`terms`,e.from):void 0,o=e?h.get(`terms`,e.to):void 0,s=r=>{e&&(Sn(t,e.from,e.to,r),n(),Z(`矢印を引きました`))};return E(Y,{open:!!e,onClose:n,title:`矢印を引く`,children:e&&E(`div`,{class:`form`,children:[E(`p`,{class:`arrow-pair`,children:[E(`b`,{children:a?.name}),E(K,{name:`arrowRight`}),E(`b`,{children:o?.name})]}),E(`div`,{class:`f-label`,children:`ラベル（タップで決定）`}),E(`div`,{class:`chips-row`,children:xn.map(e=>E(`button`,{class:`chip`,onClick:()=>s(e),children:e},e))}),E(`div`,{class:`add-row`,children:[E(`input`,{value:r,placeholder:`自分で書く（なしでもよい）`,onInput:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&s(r)}}),E(`button`,{class:`btn primary`,onClick:()=>s(r),children:`引く`})]})]})})}function Ai({id:e,onClose:t}){h.rev.value;let n=e?h.get(`arrows`,e):void 0,[r,i]=u(``);if(l(()=>{i(n?.label??``)},[e]),e&&(!n||n.deletedAt))return E(Y,{open:!1,onClose:t,children:null});let a=n?h.get(`terms`,n.from):void 0,o=n?h.get(`terms`,n.to):void 0;return E(Y,{open:!!n,onClose:t,title:`矢印`,children:n&&E(`div`,{class:`form`,children:[E(`p`,{class:`arrow-pair`,children:[E(`button`,{class:`linklike`,onClick:()=>W({openTermId:n.from}),children:a?.name}),E(K,{name:`arrowRight`}),E(`button`,{class:`linklike`,onClick:()=>W({openTermId:n.to}),children:o?.name})]}),E(`div`,{class:`chips-row`,children:xn.map(e=>E(`button`,{class:`chip ${n.label===e?`on`:``}`,onClick:()=>{Cn(n.id,{label:e},`矢印のラベルを変更`),i(e)},children:e},e))}),E(`label`,{class:`fld`,children:[E(`span`,{children:`ラベル`}),E(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r!==n.label&&Cn(n.id,{label:r},`矢印のラベルを変更`)}})]}),E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>wn(n.id),children:[E(K,{name:`leftRight`}),`向きを逆にする`]}),E(`button`,{class:`danger`,onClick:()=>{Tn(n.id),t(),Z(`矢印を削除しました`)},children:[E(K,{name:`trash`}),`削除`]})]})]})})}function ji({id:e,onClose:t}){h.rev.value;let n=e?h.get(`stickies`,e):void 0,[r,i]=u(``);l(()=>{i(n?.text??``)},[e]);let a=()=>{n&&r!==n.text&&Dn(n.id,{text:r})};return l(()=>()=>{let t=e?h.get(`stickies`,e):void 0;t&&!t.deletedAt&&t.text!==r&&Dn(t.id,{text:r})},[e,r]),E(Y,{open:!!n&&!n.deletedAt,onClose:()=>{a(),t()},title:`付箋`,children:n&&E(`div`,{class:`form`,children:[E(`div`,{class:`sticky-card c-${n.color}`,children:[E(`textarea`,{rows:4,value:r,autoFocus:!n.text,placeholder:`メモを書く（〔 〕で赤シート）`,onInput:e=>i(e.target.value),onBlur:a}),E(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(e=>E(`button`,{class:`c-${e} ${n.color===e?`on`:``}`,"aria-label":`色：${e}`,onClick:()=>Dn(n.id,{color:e},`付箋の色を変更`)},e))})]}),n.anchor.kind===`timeline`&&E(`div`,{class:`nudge`,children:[E(`span`,{children:`位置`}),E(`button`,{class:`iconbtn sm`,"aria-label":`左へ`,onClick:()=>Dn(n.id,{dx:(n.dx??0)-20},`付箋を動かす`),children:E(K,{name:`chevronLeft`})}),E(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>Dn(n.id,{dy:(n.dy??0)-20},`付箋を動かす`),children:E(K,{name:`chevronUp`})}),E(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>Dn(n.id,{dy:(n.dy??0)+20},`付箋を動かす`),children:E(K,{name:`chevronDown`})}),E(`button`,{class:`iconbtn sm`,"aria-label":`右へ`,onClick:()=>Dn(n.id,{dx:(n.dx??0)+20},`付箋を動かす`),children:E(K,{name:`chevronRight`})}),E(`button`,{class:`btn sm`,onClick:()=>Dn(n.id,{dx:0,dy:0},`付箋を元の位置に`),children:`元の位置`})]}),E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>{a(),Dn(n.id,{collapsed:!n.collapsed},n.collapsed?`付箋を開く`:`付箋を折りたたむ`),t()},children:[E(K,{name:n.collapsed?`note`:`minus`}),n.collapsed?`開いて表示する`:`小さく折りたたむ`]}),E(`button`,{class:`danger`,onClick:()=>{On(n.id),t(),Z(`付箋を削除しました`)},children:[E(K,{name:`trash`}),`はがす（削除）`]})]})]})})}function Mi({id:e,onClose:t}){h.rev.value;let n=e?h.get(`embeds`,e):void 0;return E(Y,{open:!!n&&!n.deletedAt,onClose:t,title:n?tr(n):``,children:n&&E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>{n&&(t(),n.target.kind===`note`?W({tab:`notes`,openNoteId:n.target.id}):(W({tab:`map`}),Q(()=>import(`./mapState.js`).then(e=>e.focusPin(n.target.id)),[],import.meta.url)))},children:[E(K,{name:n.target.kind===`pin`?`map2`:`external`}),n.target.kind===`pin`?`地図で見る`:`開く`]}),n.target.kind===`note`&&E(`button`,{onClick:()=>{An(n.id,{display:n.display===`expanded`?`collapsed`:`expanded`},n.display===`expanded`?`ボタンに戻す`:`展開して表示`),t()},children:[E(K,{name:n.display===`expanded`?`minus`:`arrowsMove`}),n.display===`expanded`?`ボタンに戻す`:`年表の中に展開する`]}),E(`button`,{onClick:()=>{t(),n.target.kind===`note`&&Nr(n.target.id),jn(n.id)},children:[E(K,{name:`arrowsMove`}),`別の年・列へ移す`]}),E(`button`,{class:`danger`,onClick:()=>{jn(n.id),t(),q(`差し込みを外しました（ノートは消えません）`)},children:[E(K,{name:`trash`}),`差し込みを外す`]})]})})}function Ni({item:e,top:t,height:n}){let r=e.embed,i=r.target.kind===`note`?h.get(`notes`,r.target.id):void 0;return E(`div`,{class:`tl-embed`,style:{top:t+`px`,height:n+`px`,"--c":`var(--era-${e.era.id})`},children:E(`div`,{class:`emb-in`,children:[E(`div`,{class:`emb-h`,children:[E(K,{name:`timelineEvent`,size:16}),E(`b`,{children:tr(r)}),E(`small`,{children:m(r.year)}),E(`span`,{class:`sp`}),E(`button`,{class:`btn sm`,"data-eid":r.id,children:`操作`})]}),E(`div`,{class:`emb-body`,style:{height:n-52+`px`},children:i?E(bt,{fallback:E(`div`,{class:`loading`,children:`読み込み中…`}),children:E(wi,{note:i,sheet:U.value.redSheet})}):E(`p`,{class:`hint`,children:`ノートが見つかりません`})})]})})}X.EMBED_H;var Pi=800,Fi=X.HEAD_H+X.ERA_H+2,Ii=1.3,Li={table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`,timeline:`table`};er(e=>(e.target.kind===`note`?h.get(`notes`,e.target.id)?.name:h.get(`pins`,e.target.id)?.title)??`（見つかりません）`);var Ri=e=>{Dt(e,`timeline`),W({tab:`map`})};function zi({noteId:t=de,onBack:n,pane:r}){let a=h.rev.value,o=U.value,d=h.get(`notes`,t),f=s(()=>(d?.columns??[]).filter(e=>e.visible),[d]),p=h.settings.zoomLevels,[m,g]=u(o.level),_=Math.max(0,Math.min(p.length-1,r?m:o.level)),v=e=>{r?g(e):W({level:e})},y=p[_],[x,S]=u(()=>new Set);l(()=>S(new Set),[_]);let C=!r&&t===`n-main`?o.groupFilter:null,w=C?h.get(`groups`,C):void 0,T=s(()=>w?new Set(pn(w).map(e=>e.id)):null,[w,a]),ee=s(()=>h.list(`terms`).filter(e=>e.noteId===t),[a,t]),te=s(()=>h.list(`embeds`).filter(e=>e.noteId===t),[a,t]),D=s(()=>kn(t),[a,t]),ne=s(()=>o.showArrows?h.list(`arrows`).filter(e=>e.noteId===t):[],[a,t,o.showArrows]),re=s(()=>new Set(h.list(`stickies`).flatMap(e=>e.anchor.kind===`term`?[e.anchor.termId]:[])),[a]),O=o.weakFilter,k=s(()=>Fn({terms:ee,columns:f,level:y,eras:V.eras,gengo:V.gengo,gengoTo:V.gengoCoverage.to,weakBonus:h.settings.weakBonus,filter:O||T?e=>(!O||e.weakness>=O)&&(!T||T.has(e.id)):void 0,embeds:T?[]:te,stickies:T?[]:D,expanded:x}),[ee,f,y,O,h.settings.weakBonus,T,te,D,x]),A=h.settings.redSheet,j=s(()=>{let e=new Set;for(let t of A.groups??[]){let n=h.get(`groups`,t);if(n&&!n.deletedAt)for(let t of pn(n))e.add(t.id)}return e},[A.groups,a]),ie=s(()=>{let e=_r(o.redSheet,A,mr.value,hr.value);return!o.redSheet||hr.value||!j.size?e:t=>e(t)||j.has(t.id)&&!mr.value.has(t.id)},[o.redSheet,A,mr.value,hr.value,j]),[ae,oe]=u(0),M=s(()=>sr(k,f,ie),[k,f,ie,ae]),N=e(null),se=e(null),ce=e(null),le=e(0),ue=e(600),P=e([0,0]),[,fe]=u(0),pe=e(M),me=e(k),F=e(_);pe.current=M,me.current=k,F.current=_;let _e=r?r.initialYear:o.focusYear,I=e({year:_e,screenY:Fi}),[ve,ye]=u(null),[be,L]=u(null),[xe,R]=u(null),[Se,Ce]=u(null),[z,B]=u(null),[we,Te]=u(!1),[Ee,De]=u(null),[Oe,ke]=u(null),[Ae,je]=u(null),[Me,Ne]=u(null);i(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue(`--sans`).trim();Kn(e),oe(e=>e+1),document.fonts?.ready.then(()=>{Kn(e),oe(e=>e+1)})},[]);let Pe=e(k.items.length>0);!Pe.current&&k.items.length>0&&(Pe.current=!0,I.current={year:r?r.initialYear:U.value.focusYear,screenY:Fi});let Fe=e(null);if(!I.current&&Fe.current&&Fe.current.geo!==M&&N.current){let e=fr(Fe.current.items,Fe.current.geo,N.current.scrollTop+Fi-X.HEAD_H);e!=null&&(I.current={year:e,screenY:Fi})}Fe.current={geo:M,items:k.items};let Ie=e(r?.follow?.seq??0);if(r?.follow&&r.follow.seq!==Ie.current&&(Ie.current=r.follow.seq,I.current={year:r.follow.year,screenY:Fi}),I.current){let e=I.current,t=dr(k.items,M,e.year,In);le.current=Math.max(0,Math.min(Math.max(0,X.HEAD_H+M.total+X.BOTTOM_PAD-ue.current),t-(e.screenY-X.HEAD_H)))}let Le=Math.max(0,ur(M,le.current-Pi)),Re=Math.min(k.items.length-1,ur(M,le.current+ue.current+Pi));P.current=[Le,Re];let ze=e(!1);i(()=>{let e=N.current;ue.current=e.clientHeight,I.current&&(ze.current=!!r,e.scrollTop=le.current,I.current=null,!r&&o.scrollX&&e.scrollLeft===0&&(e.scrollLeft=o.scrollX)),Be()});function Be(){let e=N.current,t=ce.current;if(!e||!t)return;let n=pe.current,r=me.current.items,i=e.scrollTop,a=ur(n,i);if(a<0){t.style.opacity=`0`;return}let o=a;for(;o<r.length&&r[o].kind===`era`;)o++;let s=(r[Math.min(o,r.length-1)]??r[a]).era,c=0;for(let e=a+1;e<Math.min(r.length,a+4);e++)if(r[e].kind===`era`){let t=n.offsets[e]-i;t<X.ERA_H&&(c=t-X.ERA_H);break}if(p[F.current].bucket===`era`){t.style.opacity=`0`;return}t.style.opacity=`1`,t.style.transform=`translateY(${c}px)`,t.style.setProperty(`--c`,`var(--era-${s.id})`),t.dataset.era!==s.id&&(t.dataset.era=s.id,t.querySelector(`b`).textContent=s.name,t.querySelector(`small`).textContent=s.label??`${s.from}〜${s.to<9999?s.to:``}`)}let Ve=e(null),He=()=>{let e=N.current;le.current=e.scrollTop,ue.current=e.clientHeight;let t=pe.current,n=ur(t,le.current-Pi/2),i=ur(t,le.current+ue.current+Pi/2),[a,o]=P.current;(n<a||i>o)&&fe(e=>e+1),Be(),Ve.current&&clearTimeout(Ve.current),Ve.current=setTimeout(()=>{if(ze.current){ze.current=!1;return}let t=fr(me.current.items,pe.current,e.scrollTop+Fi-X.HEAD_H);t!=null&&(r?r.onYear(t):(Dt(t,`timeline`),W({scrollX:e.scrollLeft})))},120)},H=(e,t)=>{let n=Math.max(0,Math.min(p.length-1,e));if(n===F.current)return;let r=N.current,i=fr(me.current.items,pe.current,r.scrollTop+t-X.HEAD_H);i!=null&&(I.current={year:i,screenY:t}),F.current=n,v(n),ye(Ln(p[n])),se.current?.classList.remove(`lvl-in`),se.current?.offsetWidth,se.current?.classList.add(`lvl-in`)};l(()=>{if(!ve)return;let e=setTimeout(()=>ye(null),1400);return()=>clearTimeout(e)},[ve]),l(()=>{let e=N.current,t=null,n=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY),r=n=>{let r=se.current;r&&t&&(r.style.transition=`none`,r.style.transformOrigin=`${e.scrollLeft+t.mx}px ${e.scrollTop+t.my-X.HEAD_H}px`,r.style.transform=n===1?``:`scale(${n})`)},i=()=>{let e=se.current;e&&(e.style.transition=`transform 160ms ease-out`,e.style.transform=``)},a=r=>{if(r.touches.length!==2)return;let i=e.getBoundingClientRect(),a=(r.touches[0].clientX+r.touches[1].clientX)/2-i.left,o=(r.touches[0].clientY+r.touches[1].clientY)/2-i.top;t={d0:n(r.touches),mx:a,my:o,base:F.current,target:F.current,t:performance.now(),dev:0}},o=e=>{if(!t||e.touches.length!==2)return;e.preventDefault();let i=n(e.touches)/t.d0;t.dev=Math.max(t.dev,Math.abs(i-1));let a=Math.round(Math.log(i)/Math.log(Ii)),o=Math.max(0,Math.min(p.length-1,t.base-a));o!==t.target&&(t.target=o,ye((o===t.base?``:`→ `)+Ln(p[o])),navigator.vibrate?.(5)),r(Math.max(.45,Math.min(2.2,i)))},s=e=>{if(!t||e.touches.length>=2)return;let n=t;t=null,i(),n.target===n.base?performance.now()-n.t<260&&n.dev<.05&&H(F.current+1,n.my):H(n.target,n.my)},c=e=>e.preventDefault();e.addEventListener(`touchstart`,a,{passive:!0}),e.addEventListener(`touchmove`,o,{passive:!1}),e.addEventListener(`touchend`,s),e.addEventListener(`touchcancel`,s),document.addEventListener(`gesturestart`,c);let l=0,u=t=>{if(t.ctrlKey&&(t.preventDefault(),l+=t.deltaY,Math.abs(l)>40)){let n=e.getBoundingClientRect();H(F.current+(l>0?1:-1),t.clientY-n.top),l=0}};return e.addEventListener(`wheel`,u,{passive:!1}),()=>{e.removeEventListener(`touchstart`,a),e.removeEventListener(`touchmove`,o),e.removeEventListener(`touchend`,s),e.removeEventListener(`touchcancel`,s),e.removeEventListener(`wheel`,u),document.removeEventListener(`gesturestart`,c)}},[]),l(()=>{let e=N.current,t=new ResizeObserver(()=>{ue.current=e.clientHeight,fe(e=>e+1)});return t.observe(e),()=>t.disconnect()},[]),l(()=>{if(r)return;let e=Ot.value;if(!e)return;Ot.value=null;let t=e.level??F.current;if(e.termId){let n=h.get(`terms`,e.termId);if(n&&!Nn(n,p[t],h.settings.weakBonus))for(;t>0&&!Nn(n,p[t],h.settings.weakBonus);)t--;At.value=e.termId,setTimeout(()=>{At.value===e.termId&&(At.value=null)},2600)}I.current={year:e.year,screenY:X.HEAD_H+Math.round(ue.current*.35)},t===F.current?fe(e=>e+1):v(t)},[Ot.value]);let Ue=e(null),We=e(null),Ge=e(null),Ke=e=>e.clientY-N.current.getBoundingClientRect().top,qe=e=>{let t=e.target,n=t.closest(`[data-arrow]`);if(n){ke(n.dataset.arrow);return}let r=t.closest(`[data-sticky]`);if(r){je(r.dataset.sticky);return}let i=t.closest(`[data-eid]`);if(i){Ne(i.dataset.eid);return}let a=t.closest(`[data-tid]`);if(a){let e=a.dataset.tid,t=Ci.value;if(t){t!==e&&(Ci.value=null,De({from:t,to:e}));return}if(z){let t=new Set(z);t.has(e)?t.delete(e):t.add(e),B(t);return}if(a.classList.contains(`mask`)){yr(e);return}if(U.value.weakPen){let t=ge(e);q(t?`苦手度 ${t}`:`苦手度を解除`,{ms:1400,key:`pen`});return}W({openTermId:e});return}let o=t.closest(`[data-more],[data-less]`);if(o){let t=o.closest(`[data-cell]`)?.dataset.cell,n=p[F.current]?.bucket;t&&(o.dataset.less||typeof n==`number`&&n<=2)?S(e=>{let n=new Set(e);return o.dataset.less?n.delete(t):n.add(t),n}):H(F.current-1,Ke(e));return}let s=performance.now(),c=Ue.current;c&&s-c.t<320&&Math.hypot(e.clientX-c.x,e.clientY-c.y)<30?(Ue.current=null,H(F.current-1,Ke(e))):Ue.current={t:s,x:e.clientX,y:e.clientY}},Je=e=>{let t=e.target.closest(`[data-cell]`);t&&!e.target.closest(`[data-tid],[data-more],[data-less],[data-eid]`)&&(Ge.current={x:e.clientX,y:e.clientY},We.current=setTimeout(()=>{let[e,n]=t.dataset.cell.split(`|`);Ce({col:e,year:+n}),navigator.vibrate?.(10)},550))},Ye=e=>{e&&Ge.current&&Math.hypot(e.clientX-Ge.current.x,e.clientY-Ge.current.y)<8&&e.type===`pointermove`||(We.current&&=(clearTimeout(We.current),null))},Xe=e=>d?.columns?.find(t=>t.id===e)?.name??e,Ze=r?r.follow?.year??r.initialYear:o.focusYear,Qe=b(Math.floor(Ze),V.eras),$e=s(()=>new Set(k.items.flatMap(e=>e.kind===`row`?[e.era.id]:[])),[k]),et=e=>{let t=V.eras.find(t=>t.id===e);I.current={year:t.from,screenY:Fi},fe(e=>e+1),r?r.onYear(t.from):Dt(t.from,`timeline`)},tt=V.eras.findIndex(e=>e.id===Qe.id),nt=Math.max(0,Math.min(1,(Ze-Qe.from)/Math.max(1,Math.min(Qe.to,2030)-Qe.from))),rt=e(null);l(()=>{(rt.current?.querySelector(`.era-chip.on`))?.scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`})},[Qe.id]);let it=k.items,at=[];for(let e=Le;e<=Re&&e<it.length;e++){let t=it[e];t.kind===`era`?at.push(E(Vi,{era:t.era,top:M.offsets[e],width:M.totalW},t.key)):t.kind===`embed`?at.push(E(Ni,{item:t,top:M.offsets[e],height:M.heights[e]},t.key)):at.push(E(Hi,{item:t,top:M.offsets[e],height:M.heights[e],columns:f,geo:M,isMasked:ie,stickyIds:re,hl:At.value,sel:z},t.key))}let ot=s(()=>{let e=new Map;return it.forEach((t,n)=>{if(t.kind===`row`)for(let r of Object.values(t.cells)){for(let t of r.points)e.set(t.id,n);for(let t of r.spans)(t.start||!e.has(t.term.id))&&e.set(t.term.id,n)}}),e},[k]),st=new Map,ct=e=>{let t=ot.get(e);if(t==null)return null;let n=st.get(t);return n||(n=pr(it[t],M.offsets[t],f,M,ie),st.set(t,n)),n.get(e)??null},lt=[];for(let e of ne){let t=ot.get(e.from),n=ot.get(e.to);if(t==null||n==null||Math.max(t,n)<Le||Math.min(t,n)>Re)continue;let r=ct(e.from),i=ct(e.to);r&&i&&lt.push({a:e,d:Bi(r,i),mid:{x:(r.x+r.w/2+i.x+i.w/2)/2,y:(r.y+r.h/2+i.y+i.h/2)/2}})}let ut=[];for(let e of k.items.length?D:[]){if(e.anchor.kind!==`timeline`)continue;let t=f.findIndex(t=>t.id===e.anchor.col);if(t<0)continue;let n=In(it,e.anchor.year);n<Le||n>Re||ut.push({s:e,x:M.colX[t]+10+(e.dx??0),y:M.offsets[n]+8+(e.dy??0)})}let dt=t===`n-main`?`全体年表`:d?.name??`年表`,ft=on(d?.folderId),pt=z&&E(`div`,{class:`sel-bar`,children:[E(`span`,{class:`t`,children:[z.size,`語を選択`]}),E(`button`,{disabled:!z.size,onClick:()=>Te(!0),children:[E(K,{name:`stack`}),`グループ`]}),E(`button`,{disabled:z.size<2,onClick:()=>{let e=bn([...z]);e&&(B(null),W({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`))},children:[E(K,{name:`cols3`}),`比較表`]}),E(`button`,{disabled:!z.size,onClick:()=>{for(let e of z){let t=h.get(`terms`,e);t&&!t.hide&&he(e,{hide:!0},`「${t.name}」を赤シートの対象に`)}q(`${z.size}語を赤シートの対象にしました`),B(null)},children:[E(K,{name:`eyeOff`}),`赤シート`]}),E(`button`,{disabled:!z.size,onClick:()=>{let e=hn({links:[...z].map(e=>({kind:`term`,id:e}))});B(null),W({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[E(K,{name:`note`}),`苦手メモ`]}),E(`button`,{class:`end`,onClick:()=>B(null),children:`終わる`})]});return E(`div`,{class:`view tl-view ${r?`pane`:``}`,children:[E(`header`,{class:`appbar`,children:[n&&E(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:n,children:E(K,{name:`chevronLeft`})}),E(`div`,{class:`tt`,children:[!r&&E(`div`,{class:`crumb`,children:[`ノート`,ft.map(e=>E(c,{children:[E(K,{name:`chevronRight`}),e.name]})),E(K,{name:`chevronRight`}),`年表`]}),E(`h1`,{class:`title`,children:dt})]}),!r&&E(`button`,{class:`iconbtn`,"aria-label":`検索`,onClick:()=>_i(),children:E(K,{name:`search`})}),!r&&E(`button`,{class:`iconbtn`,"aria-label":`元に戻す`,disabled:!h.canUndo.value,onClick:Cr,children:E(K,{name:`undo`})}),!r&&E(`button`,{class:`iconbtn`,"aria-label":`やり直し`,disabled:!h.canRedo.value,onClick:wr,children:E(K,{name:`redo`})}),r&&E(`button`,{class:`tool zoom sm`,onClick:()=>R(`view`),children:[E(K,{name:`zoomIn`}),y.bucket===`era`?`時代`:`${y.bucket}年`]})]}),!r&&E(c,{children:[E(`div`,{class:`erarail`,ref:rt,children:V.eras.filter(e=>e.id!==`reiwa`||$e.has(`reiwa`)).map(e=>E(`button`,{class:`era-chip ${e.id===Qe.id?`on`:``} ${$e.has(e.id)?``:`nodata`}`,style:{"--c":`var(--era-${e.id})`},onClick:()=>et(e.id),children:e.name.replace(`時代`,``)},e.id))}),E(`div`,{class:`ruler`,"aria-hidden":`true`,children:[V.eras.map(e=>E(`span`,{class:e.id===Qe.id?`on`:``,style:{"--c":`var(--era-${e.id})`}},e.id)),E(`span`,{class:`mk`,style:{left:`calc(${(tt+nt)/V.eras.length*100}% - 1px)`}})]}),E(`div`,{class:`tools`,children:[E(`button`,{class:`tool ${o.redSheet?`sheet-on`:``}`,onClick:()=>{W({redSheet:!o.redSheet}),br()},children:[E(K,{name:`eyeOff`}),`赤シート`]}),E(`button`,{class:`tool`,onClick:()=>R(`view`),children:[E(K,{name:`columns`}),`表示`,O?E(`small`,{children:[`苦手`,O,`+`]}):null]}),E(`button`,{class:`tool ${o.weakPen?`pen-on`:``}`,onClick:()=>W({weakPen:!o.weakPen}),children:[E(K,{name:`ballpen`}),`苦手ペン`]}),E(`button`,{class:`tool icon`,onClick:()=>R(`more`),"aria-label":`ほかの操作`,children:E(K,{name:`dots`})}),E(`button`,{class:`tool zoom`,onClick:()=>R(`view`),"aria-label":`ズームの段階`,children:[E(K,{name:`zoomIn`}),y.bucket===`era`?`時代`:`${y.bucket}年`]})]})]}),o.redSheet&&!r&&E(`div`,{class:`subbar rs`,children:[E(`span`,{class:`t`,children:[Sr(A,Xe),(A.groups??[]).length?`・グループ`:``,`を隠す`]}),E(`button`,{onClick:xr,children:`全部めくる`}),E(`button`,{onClick:br,children:`全部隠す`}),E(`button`,{onClick:()=>R(`red`),"aria-label":`隠す対象`,children:E(K,{name:`adjust`})})]}),o.weakPen&&!r&&E(`div`,{class:`subbar pen`,children:[E(`span`,{class:`t`,children:`苦手ペン：用語をタップするたびに なし→1→2→3`}),E(`button`,{onClick:()=>W({weakPen:!1}),children:`終わる`})]}),w&&E(`div`,{class:`subbar grp`,children:[E(K,{name:`stack`}),E(`span`,{class:`t`,children:[`グループ「`,w.name,`」だけ表示`]}),E(`button`,{onClick:()=>W({openGroupId:w.id}),children:`詳細`}),E(`button`,{onClick:()=>W({groupFilter:null}),children:`解除`})]}),Ci.value&&!r&&E(`div`,{class:`subbar arrow`,children:[E(K,{name:`arrowRight`}),E(`span`,{class:`t`,children:[`矢印の行き先の用語をタップ（「`,h.get(`terms`,Ci.value)?.name,`」から）`]}),E(`button`,{onClick:()=>{Ci.value=null},children:`やめる`})]}),E(`div`,{class:`tl-wrap`,children:[E(`div`,{class:`tl-scroll`,ref:N,onScroll:He,onClick:qe,onDblClick:e=>{e.target.closest(`[data-tid],[data-more],[data-less],[data-sticky],[data-arrow],[data-eid]`)||H(F.current-1,Ke(e))},onPointerDown:Je,onPointerUp:()=>Ye(),onPointerMove:Ye,onPointerCancel:()=>Ye(),children:[E(`div`,{class:`tl-head`,style:{width:M.totalW+`px`},children:[E(`div`,{class:`yr-h`,children:`年`}),f.map((e,t)=>E(`div`,{style:{width:M.colW[t]+`px`},children:e.name},e.id))]}),E(`div`,{class:`tl-body ${o.weakPen?`pen`:``} ${z?`selecting`:``} ${Ci.value?`picking`:``}`,ref:se,style:{height:M.total+X.BOTTOM_PAD+`px`,width:M.totalW+`px`},children:[at,lt.length>0&&E(`svg`,{class:`tl-arrows`,width:M.totalW,height:M.total,"aria-hidden":`true`,children:[E(`defs`,{children:E(`marker`,{id:`ah-${t}`,viewBox:`0 0 10 10`,refX:`8`,refY:`5`,markerWidth:`7`,markerHeight:`7`,orient:`auto-start-reverse`,children:E(`path`,{d:`M0 0 L10 5 L0 10 z`,class:`ah`})})}),lt.map(({a:e,d:n})=>E(`g`,{children:[E(`path`,{d:n,class:`ar`,"marker-end":`url(#ah-${t})`}),E(`path`,{d:n,class:`ar-hit`,"data-arrow":e.id})]},e.id))]}),lt.map(({a:e,mid:t})=>e.label?E(`button`,{class:`ar-label`,"data-arrow":e.id,style:{left:t.x+`px`,top:t.y+`px`},children:e.label},e.id):null),ut.map(({s:e,x:t,y:n})=>E(`button`,{class:`tl-sticky c-${e.color} ${e.collapsed?`folded`:``}`,"data-sticky":e.id,style:{left:t+`px`,top:n+`px`},children:e.collapsed?E(K,{name:`sticker`,size:16}):E(c,{children:[E(`span`,{class:`sh`,children:[E(K,{name:`pin`,size:13}),`付箋`]}),E(`span`,{class:`tx`,children:e.text||`（空の付箋）`})]})},e.id))]}),!it.length&&E(`div`,{class:`tl-empty`,children:ee.length?`この段階で表示する用語がありません。ピンチで拡大してください`:`用語がまだありません。右下の＋から追加できます`})]}),E(`div`,{class:`era-sticky`,ref:ce,"aria-hidden":`true`,children:[E(`b`,{}),E(`small`,{})]}),ve&&E(`div`,{class:`zoom-hint`,children:ve})]}),z?pt:!r&&E(`button`,{class:`fab`,"aria-label":`用語を追加`,onClick:()=>L({year:Math.floor(o.focusYear)}),children:E(K,{name:`plus`})}),E(Er,{preset:be,onClose:()=>L(null),columns:d?.columns??[],noteId:t}),E(Dr,{open:xe===`view`,onClose:()=>R(null),level:_,onLevel:e=>H(e,Fi),noteId:t}),E(Or,{open:xe===`red`,onClose:()=>R(null),columns:d?.columns??[]}),E(Di,{open:xe===`more`,onClose:()=>R(null),noteId:t,onSelect:()=>{B(new Set),R(null)},onMap:()=>{R(null),Ri(Math.floor(o.focusYear))},onCompare:()=>{R(null),Vr({kind:`timeline`,id:t})}}),E(Ti,{at:Se,noteId:t,onClose:()=>Ce(null),onAdd:e=>{Ce(null),L(e)}}),E(Oi,{open:we,count:z?.size??0,onClose:()=>Te(!1),onCreate:e=>{let t=cn(e,[...z??[]].map(e=>({kind:`term`,id:e})));Te(!1),B(null),Z(`グループ「${t.name}」を作りました`)}}),E(ki,{pair:Ee,noteId:t,onClose:()=>De(null)}),E(Ai,{id:Oe,onClose:()=>ke(null)}),E(ji,{id:Ae,onClose:()=>je(null)}),E(Mi,{id:Me,onClose:()=>Ne(null)})]})}function Bi(e,t){let n={x:e.x+e.w/2,y:e.y+e.h/2},r={x:t.x+t.w/2,y:t.y+t.h/2};if(Math.abs(r.y-n.y)<10){let i=r.x>n.x,a=i?e.x+e.w:e.x,o=i?t.x-2:t.x+t.w+2,s=Math.min(40,Math.abs(o-a)/2+10);return`M${a} ${n.y} C ${a+(i?s:-s)} ${n.y-26}, ${o-(i?s:-s)} ${r.y-26}, ${o} ${r.y}`}let i=r.y>n.y,a=i?e.y+e.h:e.y,o=i?t.y-2:t.y+t.h+2,s=Math.min(80,Math.abs(o-a)*.45);return`M${n.x} ${a} C ${n.x} ${a+(i?s:-s)}, ${r.x} ${o-(i?s:-s)}, ${r.x} ${o}`}var Vi=ct(({era:e,top:t,width:n})=>E(`div`,{class:`tl-era`,style:{top:t+`px`,width:n+`px`,"--c":`var(--era-${e.id})`},children:E(`div`,{class:`lbl`,children:[e.name,E(`span`,{class:`yrs`,children:e.label??`${e.from}〜${e.to<9999?e.to:``}`})]})})),Hi=ct(({item:e,top:t,height:n,columns:r,geo:i,isMasked:a,stickyIds:o,hl:s,sel:c})=>E(`div`,{class:`tl-row ${e.gapBefore?`gap`:``}`,style:{top:t+`px`,height:n+`px`,width:i.totalW+`px`,"--c":`var(--era-${e.era.id})`},children:[E(`div`,{class:`yr`,children:[E(`b`,{class:cr(e.label)?`sm`:void 0,children:e.label}),e.sub&&E(`small`,{children:e.sub})]}),r.map((t,n)=>{let r=e.cells[t.id],l=or(r),u=ar(i.colW[n],l);return E(`div`,{class:`cell`,"data-cell":`${t.id}|${e.from}`,style:{width:i.colW[n]+`px`,paddingLeft:X.CELL_PAD+l+`px`},children:[r?.spans.map(e=>E(Ui,{s:e},e.term.id)),r?.spans.filter(e=>e.start).map(e=>E(Gi,{t:e.term,inner:u,masked:a(e.term),sticky:o.has(e.term.id),span:!0,hl:s===e.term.id,selected:!!c?.has(e.term.id)},e.term.id)),r?.embeds.map(e=>E(Wi,{e,inner:u},e.id)),r?.points.map(e=>E(Gi,{t:e,inner:u,masked:a(e),sticky:o.has(e.id),hl:s===e.id,selected:!!c?.has(e.id)},e.id)),r?.more?E(`button`,{class:`more-chip`,"data-more":`1`,style:{width:Qn(Zn(r)).w+`px`},children:Zn(r)}):r?.less?E(`button`,{class:`more-chip less`,"data-less":`1`,style:{width:Qn(Zn(r)).w+`px`},children:Zn(r)}):null]},t.id)})]}));function Ui({s:e}){let t=e.term,n=`ln ${e.start?`s`:``} ${e.end?`e`:``} t${Bn(t.importance)} ${t.weakness?`wk`+t.weakness:``}`;return E(`i`,{class:n,style:{left:X.CELL_PAD+e.lane*X.LANE_W+3+`px`}})}function Wi({e,inner:t}){let n=nr(e,t),r=e.target.kind===`pin`?`pin`:h.get(`notes`,e.target.id)?.kind??`memo`;return E(`button`,{class:`embed-chip k-${r}`,"data-eid":e.id,style:{width:n.w+`px`,minHeight:n.h+`px`},children:[E(K,{name:r===`pin`?`mapPin`:Li[r]??`note`,size:15}),E(`span`,{children:tr(e)})]})}function Gi({t:e,inner:t,masked:n,sticky:r,span:i,hl:a,selected:o}){let s=Yn(e,t,n,i),c=e.weakness?` wk${e.weakness}`:``;if(n)return E(`button`,{class:`mask${c}${o?` sel`:``}`,"data-tid":e.id,"aria-label":`隠れた用語（タップでめくる）`,style:{width:s.w+`px`}});let l=`term t${Bn(e.importance)}${c}${e.status===`unverified`?` unv`:``}${r?` has-sticky`:``}${i?` span-start`:``}${a?` hl`:``}${o?` sel`:``}${mr.value.has(e.id)?` peeled`:``}${Date.now()-(vr.get(e.id)??0)<600?` peeling`:``}`;return E(`button`,{class:l,"data-tid":e.id,style:{width:s.w+`px`,minHeight:s.h+`px`},children:[E(`span`,{class:`tx`,children:e.name}),i&&s.years&&E(`small`,{class:`yrs`,children:Xn(e)})]})}o(0);function Ki(){h.rev.value;let e=U.value.openTermId,t=e?h.get(`terms`,e):void 0,n=!!t&&!t.deletedAt,r=()=>W({openTermId:null});return l(()=>{e&&(!t||t.deletedAt)&&r()},[e,t]),E(Y,{open:n,onClose:r,class:`term-sheet`,children:t&&E(Ji,{t,onClose:r},t.id)})}var qi=e=>{let t=`${m(e.from)}${e.from>0?`年`:``}`,n=C(e.from,V.gengo,V.gengoCoverage.to),r=e.to!=null&&e.to!==e.from?`〜${m(e.to)}${e.to>0?`年`:``}`:``;return`${e.approx?`約`:``}${t}${r}${n&&!r?`・${n}`:``}`};function Ji({t,onClose:n}){let r=h.get(`notes`,t.noteId??`n-main`)?.columns??[],i=r.find(e=>e.id===t.col),a=b(t.when.from,V.eras),o=ve(t.id),[s,d]=u(!1),[f,p]=u(t.name),[m,g]=u(t.yomi??``),[_,v]=u(t.desc),[y,x]=u(o?.text??``),[S,C]=u(!t.desc),[w,T]=u(!1),[ee,te]=u(``),[D,ne]=u(String(t.when.from)),[re,O]=u(t.when.to==null?``:String(t.when.to));l(()=>{v(t.desc)},[t.desc]),l(()=>{x(ve(t.id)?.text??``)},[o?.text]);let k=()=>{let e=h.get(`terms`,t.id);e&&!e.deletedAt&&_!==e.desc&&he(t.id,{desc:_},`「${t.name}」の説明を編集`)},A=()=>{let e=h.get(`terms`,t.id);e&&!e.deletedAt&&ye(t.id,y)},j=e({saveDesc:k,saveSticky:A});j.current={saveDesc:k,saveSticky:A},l(()=>()=>{j.current.saveDesc(),j.current.saveSticky()},[]);let ie=()=>{let e=parseInt(D,10),n=re.trim()?parseInt(re,10):void 0;if(!f.trim()||Number.isNaN(e)||n!=null&&(Number.isNaN(n)||n<e))return!1;let r={...t.when,from:e,to:n};return n??delete r.to,he(t.id,{name:f,yomi:m.trim()||void 0,when:r,shape:n!=null&&n>e?t.shape===`point`?`span`:t.shape:`point`}),!0};return E(`div`,{class:`tsheet`,children:[E(`div`,{class:`sheet-top`,children:[E(`span`,{class:`pill era`,style:{"--c":`var(--era-${a.id})`},children:a.name}),E(`button`,{class:`pill`,onClick:()=>d(!s),children:qi(t.when)}),E(`label`,{class:`pill sel`,children:[i?.name??t.col,E(`select`,{value:t.col,onChange:e=>he(t.id,{col:e.target.value},`「${t.name}」を「${r.find(t=>t.id===e.target.value)?.name}」へ移動`),"aria-label":`列を変える（移動）`,children:r.map(e=>E(`option`,{value:e.id,children:e.name},e.id))})]}),E(`span`,{class:`sp`}),E(`button`,{class:`iconbtn`,"aria-label":`編集`,onClick:()=>d(!s),children:E(K,{name:s?`check`:`ballpen`})})]}),s?E(`div`,{class:`edit-basic`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{value:f,onInput:e=>p(e.target.value)})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`読み`}),E(`input`,{value:m,placeholder:`（なくてもよい）`,onInput:e=>g(e.target.value)})]}),E(`div`,{class:`fld-row`,children:[E(`label`,{class:`fld`,children:[E(`span`,{children:`年（始まり）`}),E(`input`,{inputMode:`numeric`,value:D,onInput:e=>ne(e.target.value)})]}),E(`label`,{class:`fld`,children:[E(`span`,{children:`終わり（期間なら）`}),E(`input`,{inputMode:`numeric`,value:re,placeholder:`なし`,onInput:e=>O(e.target.value)})]})]}),E(`p`,{class:`hint`,children:`紀元前は「-」を付けます（前300年 → -300）。`}),E(`button`,{class:`btn primary wide`,onClick:()=>{ie()&&d(!1)},children:`保存`})]}):E(c,{children:[E(`h2`,{class:`term-title`,children:t.name}),t.yomi&&E(`div`,{class:`yomi`,children:t.yomi})]}),E(`div`,{class:`verify`,children:t.status===`unverified`?E(c,{children:[E(`span`,{class:`unv-badge`,children:[E(K,{name:`sparkles`}),`AI作成・未確認`]}),E(`button`,{class:`linkbtn`,onClick:()=>I(t.id,!0),children:[E(K,{name:`circleCheck`}),`教科書で確認した`]})]}):E(c,{children:[E(`span`,{class:`ok-badge`,children:[E(K,{name:`circleCheck`}),t.author===`me`?`自分で作成`:`確認済み`]}),t.author===`ai`&&E(`button`,{class:`linkbtn sub`,onClick:()=>I(t.id,!1),children:`未確認に戻す`})]})}),E(`div`,{class:`f-label`,children:[`苦手度`,E(`small`,{children:`もう一度押すと解除`})]}),E(`div`,{class:`seg weak`,children:[0,1,2,3].map(e=>E(`button`,{class:t.weakness===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-4)`},onClick:()=>{let n=t.weakness===e?0:e;F(t.id,n),Z(n?`苦手度を ${n} にしました`:`苦手度を解除しました`,`weak`)},children:e?E(c,{children:[E(`i`,{}),e]}):`なし`},e))}),E(`div`,{class:`f-label`,children:[`重要度`,E(`small`,{children:t.importanceBy===`ai`?`AIの初期値（変更できます）`:`自分で設定`})]}),E(`div`,{class:`imp10`,role:`radiogroup`,"aria-label":`重要度`,children:[Array.from({length:10},(e,t)=>t+1).map(e=>E(`button`,{role:`radio`,"aria-checked":t.importance===e,"aria-label":`重要度${e}`,class:e<=t.importance?`on`:``,style:{height:10+e*2.2+`px`},onClick:()=>_e(t.id,e)},e)),E(`div`,{class:`imp-txt`,children:[E(`b`,{children:t.importance}),Tr[t.importance]]})]}),E(`div`,{class:`f-label`,children:`形`}),E(`div`,{class:`seg two`,children:[E(`button`,{class:t.shape===`point`?`on`:``,onClick:()=>he(t.id,{shape:`point`},`「${t.name}」を単発に`),children:`単発（出来事）`}),E(`button`,{class:t.shape===`span`?`on`:``,onClick:()=>{if(t.when.to==null||t.when.to<=t.when.from){d(!0);return}he(t.id,{shape:`span`},`「${t.name}」を期間に`)},children:`期間（線で表示）`})]}),t.shape===`span`&&t.when.to==null&&E(`p`,{class:`hint`,children:`期間にするには「終わり」の年を入れてください。`}),E(`div`,{class:`f-label`,children:[`説明`,E(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),S||!t.desc?E(`textarea`,{class:`desc`,rows:3,value:_,placeholder:`説明を書く…`,onInput:e=>v(e.target.value),onBlur:()=>{k(),_&&C(!1)}}):E(`div`,{class:`desc view`,onClick:()=>C(!0),children:E(Xr,{text:t.desc,sheet:U.value.redSheet})}),E(`div`,{class:`f-label`,children:`付箋`}),E(`div`,{class:`sticky-card c-${o?.color??`yellow`}`,children:[E(`textarea`,{rows:2,value:y,placeholder:`短いメモ（表に印が付きます）`,onInput:e=>x(e.target.value),onBlur:A}),o&&E(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(e=>E(`button`,{class:`c-${e} ${o.color===e?`on`:``}`,"aria-label":`付箋の色：${e}`,onClick:()=>ye(t.id,y||o.text,e)},e))})]}),E(`div`,{class:`f-label`,children:`つながり`}),E(`div`,{class:`links`,children:[fn(t.id).map(e=>E(`button`,{class:`lk`,onClick:()=>W({openGroupId:e.id}),children:[E(K,{name:`stack`}),E(`span`,{class:`grow`,children:[e.name,E(`span`,{class:`sub`,children:`グループ`})]}),E(K,{name:`chevronRight`})]},e.id)),_n(t.id).map(e=>E(`button`,{class:`lk`,onClick:()=>W({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id}),children:[E(K,{name:`note`}),E(`span`,{class:`grow`,children:[e.title||`苦手メモ`,E(`span`,{class:`sub`,children:e.status===`done`?`解決`:e.status===`doing`?`取組中`:`未解決`})]}),E(K,{name:`chevronRight`})]},e.id)),h.list(`arrows`).filter(e=>e.from===t.id||e.to===t.id).map(e=>{let n=h.get(`terms`,e.from===t.id?e.to:e.from);return E(`button`,{class:`lk`,onClick:()=>n&&W({openTermId:n.id}),children:[E(K,{name:`arrowRight`}),E(`span`,{class:`grow`,children:[e.from===t.id?`→ `:`← `,n?.name,e.label&&E(`span`,{class:`sub`,children:[`〈`,e.label,`〉`]})]}),E(K,{name:`chevronRight`})]},e.id)})]}),w?E(`div`,{class:`group-pick`,children:[h.list(`groups`).map(e=>E(`button`,{class:`chip`,onClick:()=>{un(e.id,[t.id]),T(!1),Z(`グループ「${e.name}」に入れました`)},children:e.name},e.id)),E(`div`,{class:`add-row`,children:[E(`input`,{value:ee,placeholder:`新しいグループの名前`,onInput:e=>te(e.target.value)}),E(`button`,{class:`btn`,onClick:()=>{let e=cn(ee||t.name,[{kind:`term`,id:t.id}]);T(!1),te(``),Z(`グループ「${e.name}」を作りました`)},children:[E(K,{name:`plus`}),`作る`]})]})]}):E(`div`,{class:`mini-actions`,children:[E(`button`,{onClick:()=>{Ci.value=t.id,n(),t.noteId===`n-main`&&W({tab:`timeline`})},children:[E(K,{name:`arrowRight`}),`矢印を引く`]}),E(`button`,{onClick:()=>T(!0),children:[E(K,{name:`stack`}),`グループに入れる`]}),E(`button`,{onClick:()=>{let e=hn({title:t.name,links:[{kind:`term`,id:t.id}]});n(),W({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[E(K,{name:`note`}),`苦手メモ`]}),E(`button`,{onClick:()=>{n(),Fr({kind:`term`,id:t.id})},children:[E(K,{name:`board`}),`比較ボードへ`]})]}),E(`div`,{class:`f-label`,children:`赤シート`}),E(`label`,{class:`switch-row`,children:[E(`span`,{children:`この用語をいつも隠す（個別指定）`}),E(`input`,{type:`checkbox`,class:`switch`,checked:!!t.hide,onChange:e=>he(t.id,{hide:e.target.checked},`「${t.name}」の赤シート指定`)})]}),E(`div`,{class:`meta-line`,children:[t.author===`ai`?`AIが作成`:`自分で作成`,`・更新 `,new Date(t.updatedAt).toLocaleDateString(`ja-JP`)]}),E(`div`,{class:`sheet-actions`,children:[E(`button`,{onClick:()=>{n(),W({tab:`timeline`}),G(t.when.from,{termId:t.id})},children:[E(K,{name:`table`}),`年表で見る`]}),E(`button`,{onClick:()=>{n(),Dt(t.when.from,`term`),W({tab:`map`})},children:[E(K,{name:`map2`}),`地図で見る`]}),E(`button`,{onClick:()=>d(!0),children:[E(K,{name:`arrowsMove`}),`年を変える`]}),E(`button`,{class:`danger`,onClick:async()=>{await J({title:`「${t.name}」をゴミ箱に入れますか？`,body:`ゴミ箱からいつでも戻せます。`,ok:`ゴミ箱へ`,danger:!0})&&(xe(t.id),n(),Z(`「${t.name}」をゴミ箱に入れました`))},children:[E(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}var Yi=o([]),Xi=864e5,Zi=e=>{if(!e)return`まだありません`;let t=Math.floor((Date.now()-e)/Xi);return t===0?`今日`:`${t}日前`},Qi={terms:`用語`,notes:`ノート`,stickies:`付箋`,groups:`グループ`,arrows:`矢印`,weakMemos:`苦手メモ`,priorityMemos:`優先順位メモ`,pins:`ピン`,folders:`フォルダ`,embeds:`差し込み`,images:`画像`};function $i(){h.rev.value;let[t,n]=u(null),r=e(null),i=h.meta.lastBackupAt??0,a=z().length,o=async()=>{try{await et()!==`cancelled`&&q(`バックアップを書き出しました`)}catch(e){q(`書き出せませんでした：`+e.message,{tone:`error`})}},s=async(e,t)=>{let n;try{n=tt(e)}catch(e){await J({title:`読み込めませんでした`,body:e.message,ok:`OK`});return}if(n.issues.filter(e=>e.level===`error`).length){await J({title:`データに問題があります`,body:E(na,{issues:n.issues}),ok:`OK`,cancel:`閉じる`});return}n.kind===`backup`?await l(n.dump,n.issues):n.plan&&await d(n.plan,n.issues,t)},l=async(e,t)=>{let n=it(e);if(await J({title:`バックアップから復元しますか？`,body:E(c,{children:[E(`p`,{children:[`いまのデータを、このバックアップ（`,new Date(e.exportedAt).toLocaleString(`ja-JP`),`）の内容に`,E(`b`,{children:`置き換えます`}),`。`]}),E(`p`,{class:`counts`,children:Object.entries(n).filter(([,e])=>e).map(([e,t])=>`${Qi[e]??e} ${t}`).join(`・`)||`（空）`}),E(`p`,{class:`hint`,children:`置き換える前のデータは「端末内の自動バックアップ」に控えを残すので、あとから戻せます。`}),t.length>0&&E(na,{issues:t})]}),ok:`復元する`,danger:!0}))try{await nt(e),q(`復元しました`)}catch(e){q(`復元できませんでした：`+e.message,{tone:`error`})}},d=async(e,t,n)=>{let r=Ne(e);if(!r.add&&!r.update&&!r.trash){await J({title:`変更はありません`,body:r.skip?E(ra,{plan:e}):`すでに同じ内容です。`,ok:`OK`});return}await J({title:`取り込みますか？`,body:E(c,{children:[E(`p`,{class:`counts big`,children:[`追加 `,r.add,`件・変更 `,r.update,`件`,r.trash?`・削除 ${r.trash}件`:``]}),r.skip>0&&E(c,{children:[E(`p`,{children:[`見送り `,r.skip,`件（あなたの編集を守るため など）`]}),E(ra,{plan:e})]}),E(ia,{plan:e}),E(`p`,{class:`hint`,children:`取り込む前のデータは控えを残します。取り込んだあとも「元に戻す」で戻せます。`}),t.length>0&&E(na,{issues:t})]}),ok:`取り込む`})&&(await rt(e,n),Z(`取り込みました（追加${r.add}・変更${r.update}）`))},f=async e=>{let t=e.target.files?.[0];e.target.value=``,t&&await s(await t.text(),t.name)},p=async()=>{try{let e=await Ue(Yi.value),t=e.reduce((e,t)=>e+t.plan.adds.length,0),n=e.reduce((e,t)=>e+t.plan.updates.length,0);if(!await J({title:`新しい初期データを取り込みますか？`,body:E(c,{children:[E(`p`,{class:`counts big`,children:[`追加 `,t,`件・変更 `,n,`件`]}),E(`p`,{children:e.map(e=>e.seed.title).join(`・`)}),E(`p`,{class:`hint`,children:`あなたが書いた説明・付箋、自分で変えた重要度・苦手度はそのままです。`})]}),ok:`取り込む`}))return;await We(e),Yi.value=[],Z(`初期データを取り込みました`)}catch(e){q(`読み込めませんでした：`+e.message,{tone:`error`})}},m=Date.now()-Math.max(i,h.meta.createdAt??0)>h.settings.backupReminderDays*Xi;return E(`div`,{class:`view more`,children:[E(`header`,{class:`bigbar`,children:E(`h1`,{class:`big-title`,children:`その他`})}),E(`div`,{class:`scroll`,children:[Yi.value.length>0&&E(ea,{icon:`cloudDown`,title:`新しい初期データがあります`,tone:`info`,children:[E(`p`,{children:Yi.value.map(e=>e.title).join(`・`)}),E(`button`,{class:`btn primary`,onClick:p,children:`内容を確認して取り込む`})]}),E(ea,{icon:`database`,title:`バックアップ`,tone:m?`warn`:void 0,children:[E(`p`,{children:[`最後のバックアップ：`,E(`b`,{children:Zi(i)}),m&&E(`span`,{class:`due`,children:`（そろそろ書き出しておきましょう）`})]}),E(`div`,{class:`btns`,children:[E(`button`,{class:`btn primary`,onClick:o,children:[E(K,{name:`download`}),`書き出す`]}),E(`button`,{class:`btn`,onClick:()=>r.current?.click(),children:[E(K,{name:`upload`}),`ファイルから読み込む`]})]}),E(`p`,{class:`hint`,children:`書き出すと共有メニューが開くので「"ファイル"に保存」→ iCloud Drive などを選びます。読み込みは、バックアップ（復元）とAIの追加・修正データの両方に使えます。`}),E(`input`,{ref:r,type:`file`,accept:`application/json,.json,text/plain`,hidden:!0,onChange:f})]}),E(ea,{icon:`sparkles`,title:`AIの追加・修正データ`,children:[E(`p`,{children:`Claude が作った「追加・修正用データ」を取り込みます。IDで照合して、新しいものは追加、あるものは更新します。`}),E(`div`,{class:`btns`,children:[E(`button`,{class:`btn`,onClick:()=>r.current?.click(),children:[E(K,{name:`fileImport`}),`ファイルを選ぶ`]}),E(`button`,{class:`btn`,onClick:()=>n(`paste`),children:[E(K,{name:`clipboard`}),`貼り付ける`]})]})]}),E(`div`,{class:`menu`,children:[E(ta,{icon:`trash`,label:`ゴミ箱`,value:a?`${a}件`:`空`,onClick:()=>n(`trash`)}),E(ta,{icon:`history`,label:`端末内の自動バックアップ`,value:`毎日・取り込み前`,onClick:()=>n(`snaps`)})]}),E(ea,{icon:`settings`,title:`表示`,children:[E(`div`,{class:`seg three`,children:[[`auto`,`自動`,`auto`],[`light`,`ライト`,`sun`],[`dark`,`ダーク`,`moon`]].map(([e,t,n])=>E(`button`,{class:h.settings.theme===e?`on`:``,onClick:()=>h.setSettings({theme:e}),children:[E(K,{name:n}),t]},e))}),E(`label`,{class:`switch-row`,children:[E(`span`,{children:`バックアップのお知らせ（日数）`}),E(`select`,{value:h.settings.backupReminderDays,onChange:e=>h.setSettings({backupReminderDays:+e.target.value}),children:[3,7,14,30].map(e=>E(`option`,{value:e,children:[e,`日`]},e))})]})]}),E(ca,{})]}),E(aa,{open:t===`trash`,onClose:()=>n(null)}),E(oa,{open:t===`snaps`,onClose:()=>n(null)}),E(sa,{open:t===`paste`,onClose:()=>n(null),onSubmit:e=>{n(null),s(e,`貼り付けたデータ`)}})]})}function ea({icon:e,title:t,tone:n,children:r}){return E(`section`,{class:`card ${n??``}`,children:[E(`h2`,{children:[E(K,{name:e}),t]}),r]})}function ta({icon:e,label:t,value:n,onClick:r}){return E(`button`,{class:`mrow`,onClick:r,children:[E(`span`,{class:`fi`,children:E(K,{name:e})}),E(`span`,{class:`nm`,children:t}),E(`span`,{class:`ct`,children:n}),E(K,{name:`chevronRight`})]})}function na({issues:e}){return E(`ul`,{class:`issues`,children:[e.slice(0,12).map((e,t)=>E(`li`,{class:e.level,children:[e.level===`error`?`✕`:`！`,` `,e.msg]},t)),e.length>12&&E(`li`,{children:[`ほか `,e.length-12,`件`]})]})}function ra({plan:e}){return E(`ul`,{class:`issues`,children:e.skipped.slice(0,6).map((e,t)=>E(`li`,{children:[`「`,e.name,`」：`,e.reason]},t))})}function ia({plan:e}){let t=[...e.adds.slice(0,5).map(e=>`＋ ${e.rec.name??e.rec.id}`),...e.updates.slice(0,5).map(e=>`↻ ${e.after.name??e.after.id}`)];return t.length?E(`ul`,{class:`issues ok`,children:[t.map((e,t)=>E(`li`,{children:e},t)),e.adds.length+e.updates.length>t.length&&E(`li`,{children:`…`})]}):null}function aa({open:e,onClose:t}){h.rev.value;let n=e?z():[],r=async(e,t)=>{await J({title:t?`ゴミ箱を空にしますか？`:`完全に削除しますか？`,body:`完全に削除したものは元に戻せません。`,ok:`完全に削除`,danger:!0})&&(Ce(e),q(`完全に削除しました`))};return E(Y,{open:e,onClose:t,title:`ゴミ箱`,full:!0,children:E(`div`,{class:`form`,children:[!n.length&&E(`p`,{class:`hint center`,children:`ゴミ箱は空です。`}),n.map(e=>E(`div`,{class:`trash-row`,children:[E(`div`,{class:`tx`,children:[E(`b`,{children:e.title||`（名前なし）`}),E(`small`,{children:[new Date(e.deletedAt).toLocaleString(`ja-JP`),e.items.length>1?`・関係するもの ${e.items.length-1}件も一緒`:``]})]}),E(`button`,{class:`btn sm`,onClick:()=>{Se(e.group,`「${e.title}」を戻す`),Z(`「${e.title}」を戻しました`)},children:`戻す`}),E(`button`,{class:`iconbtn sm danger`,"aria-label":`完全に削除`,onClick:()=>void r([e.group],!1),children:E(K,{name:`trash`})})]},e.group)),n.length>0&&E(`button`,{class:`btn danger wide`,onClick:()=>void r(n.map(e=>e.group),!0),children:`ゴミ箱を空にする`})]})})}function oa({open:e,onClose:t}){let[n,r]=u([]);l(()=>{e&&qe().then(r)},[e]);let i=async e=>{if(await J({title:`この時点に戻しますか？`,body:`${new Date(e.at).toLocaleString(`ja-JP`)} の状態に戻します。いまの状態も控えとして残します。`,ok:`戻す`,danger:!0}))try{await Je(e.id),q(`戻しました`),t()}catch(e){q(`戻せませんでした：`+e.message,{tone:`error`})}};return E(Y,{open:e,onClose:t,title:`端末内の自動バックアップ`,full:!0,children:E(`div`,{class:`form`,children:[E(`p`,{class:`hint`,children:`1日1回と、取り込み・復元・形式の変換の前に、自動で控えを作っています（最新7個）。iPhoneの中だけにあるので、機種変更などに備えて「書き出す」バックアップも取ってください。`}),!n.length&&E(`p`,{class:`hint center`,children:`まだありません。`}),n.map(e=>E(`div`,{class:`trash-row`,children:[E(`div`,{class:`tx`,children:[E(`b`,{children:new Date(e.at).toLocaleString(`ja-JP`)}),E(`small`,{children:[e.reason,e.size?`・${Math.round(e.size/1024)}KB`:``]})]}),E(`button`,{class:`btn sm`,onClick:()=>void i(e),children:`この時点に戻す`})]},e.id))]})})}function sa({open:e,onClose:t,onSubmit:n}){let[r,i]=u(``);return l(()=>{e&&i(``)},[e]),E(Y,{open:e,onClose:t,title:`貼り付けて取り込む`,full:!0,children:E(`div`,{class:`form`,children:[E(`p`,{class:`hint`,children:"Claude の返事をそのまま貼り付けてかまいません（前後の説明文や ```json の囲みは自動で取り除きます）。"}),E(`textarea`,{class:`paste`,rows:10,value:r,placeholder:`ここに貼り付け`,onInput:e=>i(e.target.value)}),E(`button`,{class:`btn primary wide`,disabled:!r.trim(),onClick:()=>n(r),children:`内容を確認する`})]})})}function ca(){let[e,t]=u(``);return l(()=>{navigator.storage?.estimate?.().then(e=>{e.usage!=null&&t(`${(e.usage/1024/1024).toFixed(1)}MB 使用中`)})},[]),E(`section`,{class:`card about`,children:[E(`h2`,{children:[E(K,{name:`info`}),`このアプリについて`]}),E(`p`,{children:[`日本史ノート　版 `,Pe]}),E(`p`,{class:`hint`,children:[`データはこの端末の中（このアプリ専用の保存場所）にだけ保存されます。`,e]}),E(`p`,{class:`hint`,children:`アイコン：Tabler Icons（MIT）。`})]})}var la={about:`苦手の原因と、原因ごとの解決策の提案ルール。AI・ユーザーが編集してよい。rank が小さいほど先に提案（1＝いちばん早く解決できそう）。action: copyPrompt（AIへの質問文をコピー）/ redsheet（赤シートで反復）/ compareTable（比較表を作る）/ orderQuiz（並べ替え練習）/ timeline（年表で前後を見る）/ map（地図で確認）/ none（説明だけ）。prompt の {terms} は対象の用語の一覧に置き換わる。`,version:1,causes:[{id:`flow`,label:`流れ（前後関係・因果）が分かっていない`,short:`流れ`},{id:`term`,label:`用語を覚えていないだけ`,short:`用語`},{id:`detail`,label:`付属知識（人物・場所・中身）が曖昧`,short:`付属知識`},{id:`year`,label:`年代・順番が覚えられない`,short:`年代・順番`},{id:`confuse`,label:`似た用語と混同している`,short:`混同`},{id:`source`,label:`史料・図版が読めない`,short:`史料・図版`},{id:`meaning`,label:`そもそも意味が理解できていない`,short:`意味`}],solutions:[{id:`ai-flow`,causes:[`flow`],rank:1,title:`AIに流れを説明してもらう`,detail:`原因 → 出来事 → 結果・影響を、時系列で説明してもらう`,action:`copyPrompt`,prompt:`次の用語について、前後の流れ（原因 → 出来事 → 結果・影響）を、大学受験日本史のレベルで時系列の箇条書きにして説明してください。最後に、流れを1行で要約してください。`},{id:`tl-flow`,causes:[`flow`,`year`],rank:2,title:`年表で前後を並べて見る`,detail:`その年の前後を1年刻みで見て、同じ時期の出来事を確認する`,action:`timeline`},{id:`book-flow`,causes:[`flow`,`meaning`],rank:3,title:`参考書の通史を読む`,detail:`教科書・通史の参考書で、その前後の見開きを通して読む`,action:`none`},{id:`yt-flow`,causes:[`flow`,`meaning`],rank:4,title:`YouTubeの解説を見る`,detail:`「{terms} 解説」で検索して、流れの解説動画を1本見る`,action:`none`},{id:`arrow-flow`,causes:[`flow`],rank:5,title:`年表に矢印で因果を書き込む`,detail:`用語の詳細 →「矢印を引く」で、原因・結果をつなぐ`,action:`none`},{id:`red-term`,causes:[`term`],rank:1,title:`赤シートで反復する`,detail:`この用語を赤シートの対象にして、年表でくり返し確認する`,action:`redsheet`},{id:`write-term`,causes:[`term`],rank:2,title:`書いて覚える`,detail:`漢字で3回書き、何も見ずに書けるか確かめる`,action:`none`},{id:`ai-quiz`,causes:[`term`,`detail`],rank:3,title:`AIに一問一答を作ってもらう`,detail:`その用語の一問一答を作ってもらい、解いてみる`,action:`copyPrompt`,prompt:`次の用語について、大学受験日本史レベルの一問一答を10問作ってください。答えは最後にまとめて書いてください。`},{id:`ai-detail`,causes:[`detail`],rank:1,title:`AIに人物・場所・中身を1枚にまとめてもらう`,detail:`関係する人物・場所・内容・結果を表に整理してもらう`,action:`copyPrompt`,prompt:`次の用語について、関係する人物・場所・内容・結果を「項目｜内容」の表に整理してください。入試で問われやすい点には★を付けてください。`},{id:`sticky-detail`,causes:[`detail`],rank:2,title:`付箋に要点を書く`,detail:`用語の付箋に、人物・場所・中身を1行ずつ書いておく`,action:`none`},{id:`map-detail`,causes:[`detail`],rank:3,title:`地図で場所を確認する`,detail:`その年の地図を開いて、場所と周りの国を確認する`,action:`map`},{id:`goro-year`,causes:[`year`],rank:1,title:`語呂合わせを作る`,detail:`年号の語呂合わせを作ってもらい、気に入ったものを付箋に書く`,action:`copyPrompt`,prompt:`次の出来事の年号について、覚えやすい語呂合わせを3つずつ作ってください。年号と出来事の対応も表にしてください。`},{id:`order-year`,causes:[`year`],rank:2,title:`並べ替え練習`,detail:`関係する用語を、起きた順に並べ替えてみる`,action:`orderQuiz`},{id:`compare-confuse`,causes:[`confuse`],rank:1,title:`比較表を作る`,detail:`混同している用語を並べて、時期・目的・内容・結果を比べる`,action:`compareTable`},{id:`ai-confuse`,causes:[`confuse`],rank:2,title:`AIに違いを説明してもらう`,detail:`違いと見分け方を説明してもらう`,action:`copyPrompt`,prompt:`次の用語の違いを、時期・目的・内容・結果の観点で比較表にしてください。混同しやすいポイントと、見分け方のコツも書いてください。`},{id:`ai-source`,causes:[`source`],rank:1,title:`史料の要点と現代語訳をAIに聞く`,detail:`入試でよく出る史料の、要点・現代語訳・読み取りのポイントを確認する`,action:`copyPrompt`,prompt:`次の用語に関係する史料（入試でよく出るもの）について、原文のキーワード・現代語訳・入試で問われる読み取りのポイントを教えてください。`},{id:`book-source`,causes:[`source`],rank:2,title:`資料集（図説）で確認する`,detail:`資料集で史料・図版と解説をセットで読む`,action:`none`},{id:`ai-meaning`,causes:[`meaning`],rank:1,title:`AIにかみ砕いて説明してもらう`,detail:`やさしい言葉で説明してから、入試レベルの説明に言い直してもらう`,action:`copyPrompt`,prompt:`次の用語の意味を、まず中学生にも分かる言葉で説明し、そのあと大学受験日本史で必要な説明に言い直してください。具体例も1つ挙げてください。`},{id:`text-meaning`,causes:[`meaning`],rank:2,title:`教科書の本文で前後の文脈を読む`,detail:`その用語が出てくる段落を、前後も含めて読む`,action:`none`}],question:{header:`日本史（大学受験：共通テスト〜国公立二次・難関私大、山川『詳説日本史』準拠）の質問です。`,footer:`最後に、覚えるべき要点を3行でまとめてください。`}};function ua(){let e=h.settings.rules;return e&&Array.isArray(e.causes)&&Array.isArray(e.solutions)?e:la}function da(e){return e.length?ua().solutions.map(t=>({s:t,hit:t.causes.filter(t=>e.includes(t)).length})).filter(e=>e.hit>0).sort((e,t)=>e.s.rank-t.s.rank||t.hit-e.hit).map(e=>e.s):[]}var fa=(e,t)=>e.replace(/\{terms\}/g,t.map(e=>e.name).join(`・`)||`（用語）`);function pa(e){let t=(h.get(`notes`,e.noteId)?.columns??[]).find(t=>t.id===e.col)?.name??``,n=b(e.when.from,V.eras).name,r=`${e.when.approx?`約`:``}${m(e.when.from)}${e.when.to!=null&&e.when.to!==e.when.from?`〜${m(e.when.to)}`:``}${e.when.from>0?`年`:``}`;return`・${e.name}（${r}／${n}${t?`・`+t:``}）`}function ma(e){let t=ua(),n=[t.question.header,``];e.terms.length&&n.push(`【対象】`,...e.terms.map(pa),``);let r=e.memo;r&&(r.title.trim()||r.body.trim())&&n.push(`【分からないこと】`,[r.title.trim(),r.body.trim()].filter(Boolean).join(`
`),``),r?.causes.length&&n.push(`【自分で考えた原因】`,...r.causes.map(e=>`・`+(t.causes.find(t=>t.id===e)?.label??e)),``);let i=[];if(e.solution?.prompt)i.push(fa(e.solution.prompt,e.terms));else for(let t of da(r?.causes??[]))if(t.prompt&&!i.includes(fa(t.prompt,e.terms))&&(i.push(fa(t.prompt,e.terms)),i.length>=2))break;return i.length||i.push(`次の用語について、大学受験日本史で必要なことを分かりやすく説明してください。`),n.push(`【お願い】`,...i,``,t.question.footer),n.join(`
`)}var ha=fa;function ga(){h.rev.value;let e=U.value.weakSeg,t=h.list(`terms`).filter(e=>e.weakness>0).length+h.list(`groups`).filter(e=>e.weakness>0).length,n=h.list(`weakMemos`).filter(e=>e.status!==`done`).length,r=h.list(`priorityMemos`).filter(e=>!e.done).length;return E(`div`,{class:`view weak`,children:[E(`header`,{class:`bigbar`,children:E(`h1`,{class:`big-title`,children:`苦手`})}),E(`div`,{class:`segtabs`,role:`tablist`,children:[E(`button`,{role:`tab`,class:e===`priority`?`on`:``,onClick:()=>W({weakSeg:`priority`}),children:[`優先順位`,r?E(`span`,{class:`n`,children:r}):null]}),E(`button`,{role:`tab`,class:e===`list`?`on`:``,onClick:()=>W({weakSeg:`list`}),children:[`苦手一覧`,t?E(`span`,{class:`n`,children:t}):null]}),E(`button`,{role:`tab`,class:e===`memos`?`on`:``,onClick:()=>W({weakSeg:`memos`}),children:[`苦手メモ`,n?E(`span`,{class:`n`,children:n}):null]})]}),e===`priority`&&E(_a,{}),e===`list`&&E(va,{}),e===`memos`&&E(ba,{})]})}function _a(){let[t,n]=u(``),[r,i]=u(null),[a,o]=u(``),[s,l]=u(!1),d=e(null),f=h.list(`priorityMemos`).sort(yn),p=f.filter(e=>!e.done),m=f.filter(e=>e.done),g=()=>{t.trim()&&(we(t),n(``),d.current?.focus())},_=e=>{a.trim()&&a!==e.text&&vn(e.id,{text:a.trim()}),i(null)},v=(e,t)=>E(`div`,{class:`pm-row ${e.done?`done`:``}`,children:[E(`span`,{class:`rank`,children:e.done?``:t.index+1}),E(`button`,{class:`chk no-drag ${e.done?`on`:``}`,"aria-label":e.done?`済みを外す`:`済みにする`,onClick:()=>vn(e.id,{done:!e.done},e.done?`優先順位メモを戻す`:`優先順位メモを済みに`),children:E(K,{name:`check`})}),r===e.id?E(`input`,{class:`pm-edit`,value:a,autoFocus:!0,onInput:e=>o(e.target.value),onBlur:()=>_(e),onKeyDown:t=>{t.key===`Enter`&&_(e),t.key===`Escape`&&i(null)}}):E(`span`,{class:`tx`,onClick:()=>{i(e.id),o(e.text)},children:e.text}),!e.done&&E(c,{children:[E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:E(K,{name:`chevronUp`})}),E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:E(K,{name:`chevronDown`})})]}),E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`削除`,onClick:()=>{L([{c:`priorityMemos`,id:e.id}],`優先順位メモを削除`),Z(`削除しました`)},children:E(K,{name:`x`})})]});return E(`div`,{class:`scroll`,children:[E(`p`,{class:`lead`,children:`やることや優先順位を、ざっくり書いておく場所です。長押しで持ち上げて並べ替えられます。`}),E(`div`,{class:`add-row pad`,children:[E(`input`,{ref:d,value:t,placeholder:`例：江戸の三大改革を比較して整理する`,onInput:e=>n(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g()}}),E(`button`,{class:`btn primary`,onClick:g,children:[E(K,{name:`plus`}),`追加`]})]}),!p.length&&!m.length&&E(`div`,{class:`empty`,children:[E(`div`,{class:`empty-ic`,children:E(K,{name:`listCheck`,size:30})}),E(`p`,{children:`まだありません。上の欄に書いて「追加」を押してください。`})]}),E(kr,{class:`pm-list`,items:p,getId:e=>e.id,onReorder:e=>sn(`priorityMemos`,[...e,...m.map(e=>e.id)],`優先順位メモを並べ替え`),render:(e,t)=>v(e,t)}),m.length>0&&E(c,{children:[E(`button`,{class:`show-done`,onClick:()=>l(!s),children:[E(K,{name:s?`chevronUp`:`chevronDown`}),`済み `,m.length,`件`]}),s&&E(`div`,{class:`pm-list`,children:m.map(e=>E(`div`,{children:v(e,{index:0,count:0,up:()=>{},down:()=>{}})},e.id))})]})]})}function va(){let e=h.rev.value,[t,n]=u(0),r=s(()=>h.list(`terms`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness||e.when.from-t.when.from),[e,t]),i=h.list(`groups`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness),a=e=>h.list(`terms`).filter(t=>t.weakness===e).length,o=(e,t)=>h.get(`notes`,e)?.columns?.find(e=>e.id===t)?.name??``;return E(`div`,{class:`scroll`,children:[E(`div`,{class:`metrics`,children:[3,2,1].map(e=>E(`div`,{class:`metric`,style:{"--mc":`var(--w${e})`},children:[E(`small`,{children:[`苦手 `,e]}),E(`b`,{children:a(e)})]},e))}),E(`div`,{class:`filters`,children:[0,3,2,1].map(e=>E(`button`,{class:t===e?`on`:``,style:{"--wc":`var(--w${e})`},onClick:()=>n(e),children:e?E(c,{children:[E(`i`,{}),e]}):`すべて`},e))}),E(`div`,{class:`wk-list`,children:[!r.length&&!i.length&&E(`div`,{class:`empty`,children:[E(`div`,{class:`empty-ic`,children:E(K,{name:`target`,size:30})}),E(`p`,{children:`まだありません。年表で用語をタップし、苦手度（1〜3）を付けるとここに並びます。`})]}),i.map(e=>E(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[E(`button`,{class:`row1`,onClick:()=>W({openGroupId:e.id}),children:[E(`span`,{class:`lv`,children:e.weakness}),E(`span`,{class:`nm`,children:e.name}),E(K,{name:`chevronRight`})]}),E(`div`,{class:`meta`,children:[E(K,{name:`stack`,size:13}),` グループ・`,pn(e).length,`語`]})]},e.id)),r.map(e=>{let t=b(e.when.from,V.eras);return E(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[E(`button`,{class:`row1`,onClick:()=>W({openTermId:e.id}),children:[E(`span`,{class:`lv`,children:e.weakness}),E(`span`,{class:`nm`,children:e.name}),E(K,{name:`chevronRight`})]}),E(`div`,{class:`meta`,children:[t.name.replace(`時代`,``),`・`,m(e.when.from),`・`,o(e.noteId,e.col)]}),E(`div`,{class:`ask`,children:[E(`button`,{onClick:()=>{W({tab:`timeline`}),G(e.when.from,{termId:e.id})},children:[E(K,{name:`table`}),`年表で見る`]}),E(`button`,{onClick:()=>{W({weakSeg:`memos`,openWeakMemoId:hn({title:e.name,links:[{kind:`term`,id:e.id}]}).id})},children:[E(K,{name:`note`}),`苦手メモ`]})]})]},e.id)})]})]})}var ya={open:`未解決`,doing:`取組中`,done:`解決`};function ba(){let[e,t]=u(`active`),n=h.list(`weakMemos`).sort(yn),r=n.filter(t=>e===`all`?!0:e===`done`?t.status===`done`:t.status!==`done`),i=ua().causes,a=e=>e.links.map(e=>e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:e.kind===`note`?h.get(`notes`,e.id)?.name:``).filter(Boolean).join(`・`);return E(`div`,{class:`scroll`,children:[E(`div`,{class:`filters`,children:[[`active`,`done`,`all`].map(n=>E(`button`,{class:e===n?`on`:``,onClick:()=>t(n),children:n===`active`?`未解決・取組中`:n===`done`?`解決`:`すべて`},n)),E(`button`,{class:`add`,onClick:()=>{W({openWeakMemoId:hn().id})},children:[E(K,{name:`plus`}),`苦手メモ`]})]}),!r.length&&E(`div`,{class:`empty`,children:[E(`div`,{class:`empty-ic`,children:E(K,{name:`note`,size:30})}),E(`p`,{children:`苦手メモは、詳しく書きたいときだけ作ります。用語の詳細や苦手一覧の「苦手メモ」からも作れます。`})]}),E(kr,{class:`wk-list`,gap:10,items:r,getId:e=>e.id,onReorder:e=>sn(`weakMemos`,[...e,...n.filter(t=>!e.includes(t.id)).map(e=>e.id)],`苦手メモを並べ替え`),render:(e,t)=>{let n=da(e.causes)[0];return E(`div`,{class:`wk-item memo ${e.status}`,style:{"--wc":e.status===`done`?`#6BAF7A`:e.status===`doing`?`var(--accent)`:`var(--w2)`},onClick:()=>W({openWeakMemoId:e.id}),children:[E(`div`,{class:`row1`,children:[E(`span`,{class:`rank`,children:t.index+1}),E(`span`,{class:`nm`,children:e.title||a(e)||`（題名なし）`}),E(`span`,{class:`st ${e.status}`,children:ya[e.status]})]}),a(e)&&e.title&&E(`div`,{class:`meta`,children:a(e)}),e.body&&E(`div`,{class:`memo-body`,children:E(Xr,{text:e.body.length>80?e.body.slice(0,80)+`…`:e.body,sheet:!1})}),e.causes.length>0&&E(`div`,{class:`causes`,children:e.causes.map(e=>E(`span`,{children:i.find(t=>t.id===e)?.short??e},e))}),n&&E(`div`,{class:`suggest`,children:[E(K,{name:`sparkles`}),E(`span`,{children:n.title})]}),E(`div`,{class:`ord no-drag`,onClick:e=>e.stopPropagation(),children:[E(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:E(K,{name:`chevronUp`})}),E(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:E(K,{name:`chevronDown`})})]})]})}})]})}function xa(){let t=jt.value,[n,r]=u(``),[i,a]=u([]),o=e(null);l(()=>{t&&(r(``),a([]),setTimeout(()=>o.current?.focus(),260))},[t]);let c=s(()=>{if(!t)return[];let e=n.trim(),r=new Set(t.exclude??[]),i=/^-?\d{1,5}$/.test(e)?parseInt(e,10):null;return h.list(`terms`).filter(e=>!r.has(e.id)&&!e.refId).filter(t=>!e||(i==null?t.name.includes(e)||(t.yomi??``).includes(e):t.when.from===i)).sort((t,n)=>(e?n.importance-t.importance:0)||t.when.from-n.when.from).slice(0,80)},[n,t,h.rev.value]),d=()=>{jt.value=null};if(!t)return E(Y,{open:!1,onClose:d,children:null});let f=e=>{if(!t.multi){t.onPick([e]),d();return}a(i.includes(e)?i.filter(t=>t!==e):[...i,e])};return E(Y,{open:!0,onClose:d,title:t.title,full:!0,children:E(`div`,{class:`form`,children:[E(`div`,{class:`searchbox`,children:[E(K,{name:`search`}),E(`input`,{ref:o,value:n,placeholder:`用語・読み・年で探す`,onInput:e=>r(e.target.value)})]}),E(`div`,{class:`results`,children:[c.map(e=>E(`button`,{class:`res ${i.includes(e.id)?`picked`:``}`,onClick:()=>f(e.id),children:[E(`span`,{class:`w ${e.weakness?`wk`+e.weakness:``}`}),E(`span`,{class:`nm`,children:e.name}),E(`span`,{class:`sub`,children:m(e.when.from)}),t.multi&&E(`span`,{class:`chk ${i.includes(e.id)?`on`:``}`,children:E(K,{name:`check`})})]},e.id)),!c.length&&E(`p`,{class:`hint center`,children:`見つかりません`})]}),t.multi&&E(`div`,{class:`pick-bar`,children:E(`button`,{class:`btn primary wide`,disabled:!i.length,onClick:()=>{t.onPick(i),d()},children:[i.length,`語を選ぶ`]})})]})})}function Sa(e,t,n={}){jt.value={title:e,onPick:t,...n}}async function Ca(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.top=`-1000px`,t.style.fontSize=`16px`,document.body.append(t),t.select(),t.setSelectionRange(0,e.length);let n=document.execCommand(`copy`);return t.remove(),n}catch{return!1}}function wa(e){let t=new Map;for(let n of e.links){if(n.kind===`term`){let e=h.get(`terms`,n.id);e&&!e.deletedAt&&t.set(e.id,e)}if(n.kind===`group`){let e=h.get(`groups`,n.id);if(e)for(let n of pn(e))t.set(n.id,n)}}return[...t.values()].sort((e,t)=>e.when.from-t.when.from)}function Ta(){h.rev.value;let e=U.value.openWeakMemoId,t=e?h.get(`weakMemos`,e):void 0,n=()=>W({openWeakMemoId:null});return l(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),E(Y,{open:!!t&&!t.deletedAt,onClose:n,full:!0,class:`memo-sheet`,children:t&&E(Da,{id:t.id,onClose:n},t.id)})}var Ea={copyPrompt:[`質問文をコピー`,`copy`],redsheet:[`赤シートで練習`,`eyeOff`],compareTable:[`比較表を作る`,`cols3`],orderQuiz:[`並べ替え練習`,`shuffle`],timeline:[`年表で見る`,`table`],map:[`地図で見る`,`map2`]};function Da({id:e,onClose:t}){let n=h.get(`weakMemos`,e),r=ua(),i=wa(n),[a,o]=u(n.title),[d,f]=u(n.body),[p,m]=u(!n.body),g=s(()=>da(n.causes),[n.causes.join(`,`)]),_=()=>{a!==n.title&&gn(e,{title:a})},v=()=>{d!==n.body&&gn(e,{body:d}),d&&m(!1)};l(()=>()=>{let t=h.get(`weakMemos`,e);t&&!t.deletedAt&&(a!==t.title||d!==t.body)&&gn(e,{title:a,body:d})},[a,d]);let y=t=>gn(e,{causes:n.causes.includes(t)?n.causes.filter(e=>e!==t):[...n.causes,t]},`原因を変更`),b=t=>{let r=new Set(n.links.map(e=>e.kind+`:`+e.id)),i=t.filter(e=>!r.has(e.kind+`:`+e.id));i.length&&gn(e,{links:[...n.links,...i]},`つながりを追加`)},x=e=>(e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:e.kind===`note`?h.get(`notes`,e.id)?.name:``)??`（なし）`,S=async e=>{let t=await Ca(ma({terms:i,memo:{title:a,body:d,causes:n.causes},solution:e}));q(t?`質問文をコピーしました。Claude アプリに貼り付けてください`:`コピーできませんでした`,{tone:t?`normal`:`error`})},C=async r=>{switch(r.action){case`copyPrompt`:await S(r);break;case`redsheet`:if(!i.length){q(`先に用語をつないでください`);return}for(let e of i)e.hide||he(e.id,{hide:!0},`「${e.name}」を赤シートの対象に`);n.status===`open`&&gn(e,{status:`doing`},`取組中にする`),t(),W({tab:`timeline`,redSheet:!0}),G(i[0].when.from,{termId:i[0].id}),q(`赤シートの対象にしました。板をタップしてめくって確認しましょう`);break;case`compareTable`:{let e=bn(i.map(e=>e.id));if(!e){q(`比較表には2語以上をつないでください`);return}t(),W({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`);break}case`orderQuiz`:{let e=i.map(e=>e.id);if(e.length<3&&i[0]){let t=i[0],n=h.list(`terms`).filter(e=>e.noteId===t.noteId&&e.shape===`point`&&e.importance>=6&&Math.abs(e.when.from-t.when.from)<=30).sort((e,n)=>Math.abs(e.when.from-t.when.from)-Math.abs(n.when.from-t.when.from)).slice(0,6).map(e=>e.id);e=[...new Set([...e,...n])]}if(e.length<2){q(`並べ替えには2語以上が必要です`);return}Mt.value=e;break}case`timeline`:if(!i[0]){q(`先に用語をつないでください`);return}t(),W({tab:`timeline`,level:1}),G(i[0].when.from,{termId:i[0].id,level:1});break;case`map`:i[0]&&Dt(i[0].when.from,`memo`),t(),W({tab:`map`})}};return E(`div`,{class:`tsheet`,children:[E(`input`,{class:`title-input`,value:a,placeholder:`何が苦手？（例：三世一身法と墾田永年私財法の違い）`,onInput:e=>o(e.target.value),onBlur:_}),E(`div`,{class:`seg three status`,children:[`open`,`doing`,`done`].map(t=>E(`button`,{class:n.status===t?`on`:``,onClick:()=>gn(e,{status:t},`解決状況を変更`),children:t===`open`?`未解決`:t===`doing`?`取組中`:`解決`},t))}),E(`div`,{class:`f-label`,children:`つながっている用語・グループ`}),E(`div`,{class:`chips-row`,children:[n.links.map(t=>E(`span`,{class:`chip link`,children:[E(`button`,{class:`nm`,onClick:()=>{t.kind===`term`?W({openTermId:t.id}):t.kind===`group`&&W({openGroupId:t.id})},children:[t.kind===`group`&&E(K,{name:`stack`,size:14}),x(t)]}),E(`button`,{class:`x`,"aria-label":`外す`,onClick:()=>gn(e,{links:n.links.filter(e=>e!==t)},`つながりを外す`),children:E(K,{name:`x`,size:14})})]},t.kind+t.id)),E(`button`,{class:`chip add`,onClick:()=>Sa(`つなぐ用語を選ぶ`,e=>b(e.map(e=>({kind:`term`,id:e}))),{multi:!0}),children:[E(K,{name:`plus`,size:15}),`用語`]})]}),E(`div`,{class:`f-label`,children:[`なぜ分からない？`,E(`small`,{children:`当てはまるものを選ぶ（いくつでも）`})]}),E(`div`,{class:`cause-list`,children:r.causes.map(e=>E(`button`,{class:`cause ${n.causes.includes(e.id)?`on`:``}`,onClick:()=>y(e.id),children:[E(`span`,{class:`box`,children:E(K,{name:`check`,size:15})}),e.label]},e.id))}),g.length>0&&E(c,{children:[E(`div`,{class:`f-label`,children:`解決策の提案`}),E(`div`,{class:`sol-list`,children:g.map((e,t)=>{let[n,r]=Ea[e.action]??[``,`info`];return E(`div`,{class:`sol ${t===0?`best`:``}`,children:[t===0&&E(`div`,{class:`badge-best`,children:[E(K,{name:`sparkles`,size:14}),`いちばん早く解決できそう`]}),E(`b`,{children:e.title}),E(`p`,{children:ha(e.detail,i)}),n&&E(`button`,{class:`btn sm`,onClick:()=>void C(e),children:[E(K,{name:r}),n]})]},e.id)})})]}),E(`button`,{class:`btn primary wide`,onClick:()=>void S(),children:[E(K,{name:`clipboard`}),`AIに聞く質問文をコピー`]}),E(`p`,{class:`hint`,children:`対象の用語・分からないこと・原因から、Claude アプリに貼る質問文を作ります。`}),E(`div`,{class:`f-label`,children:[`メモ`,E(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),p?E(`textarea`,{class:`desc`,rows:5,value:d,placeholder:`分からない点・調べたこと・解決したことなど`,onInput:e=>f(e.target.value),onBlur:v}):E(`div`,{class:`desc view`,onClick:()=>m(!0),children:E(Xr,{text:n.body,sheet:U.value.redSheet})}),E(`div`,{class:`meta-line`,children:[`作成 `,new Date(n.createdAt).toLocaleDateString(`ja-JP`),`・更新 `,new Date(n.updatedAt).toLocaleDateString(`ja-JP`)]}),E(`div`,{class:`sheet-actions`,children:E(`button`,{class:`danger`,onClick:async()=>{await J({title:`この苦手メモをゴミ箱に入れますか？`,ok:`ゴミ箱へ`,danger:!0})&&(L([{c:`weakMemos`,id:e}],`苦手メモをゴミ箱へ`),t(),Z(`苦手メモをゴミ箱に入れました`))},children:[E(K,{name:`trash`}),`ゴミ箱へ`]})})]})}function Oa(){let e=Mt.value,[t,n]=u([]),[r,i]=u(!1),a=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.join()===[...e].sort((e,t)=>o(e)-o(t)).join()&&t.length>1?[...t.slice(1),t[0]]:t},o=e=>h.get(`terms`,e)?.when.from??0;l(()=>{e&&(n(a(e)),i(!1))},[e]);let s=()=>{Mt.value=null},c=[...t].sort((e,t)=>o(e)-o(t)),d=t.filter((e,t)=>o(e)===o(c[t])).length;return E(Y,{open:!!e,onClose:s,title:`並べ替え練習`,full:!0,children:E(`div`,{class:`form`,children:[E(`p`,{class:`hint`,children:`起きた順（古い順）に並べ替えてください。長押しで持ち上げるか、矢印ボタンで動かせます。`}),E(kr,{class:`quiz-list`,items:t,getId:e=>e,onReorder:e=>{n(e),i(!1)},render:(e,t)=>{let n=h.get(`terms`,e),i=r&&o(e)===o(c[t.index]);return E(`div`,{class:`quiz-row ${r?i?`ok`:`ng`:``}`,children:[E(`span`,{class:`rank`,children:t.index+1}),E(`span`,{class:`nm`,children:n?.name}),r&&E(`span`,{class:`yr`,children:n?m(n.when.from):``}),E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:E(K,{name:`chevronUp`})}),E(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:E(K,{name:`chevronDown`})})]})}}),r&&E(`p`,{class:`quiz-score`,children:d===t.length?`全問正解！`:`${t.length}問中 ${d}問正解`}),E(`div`,{class:`btn-row`,children:[E(`button`,{class:`btn primary`,onClick:()=>i(!0),children:[E(K,{name:`check`}),`答え合わせ`]}),E(`button`,{class:`btn`,onClick:()=>{n(a(t)),i(!1)},children:[E(K,{name:`shuffle`}),`もう一度`]})]})]})})}function ka(){h.rev.value;let e=U.value.openGroupId,t=e?h.get(`groups`,e):void 0,n=()=>W({openGroupId:null});return l(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),E(Y,{open:!!t&&!t.deletedAt,onClose:n,class:`group-sheet`,children:t&&E(Aa,{id:t.id,onClose:n},t.id)})}function Aa({id:e,onClose:t}){let n=h.get(`groups`,e),r=pn(n),i=mn(n),[a,o]=u(n.name),[s,l]=u(n.memo),[d,f]=u(!1),p=h.settings.redSheet,g=(p.groups??[]).includes(e);return E(`div`,{class:`tsheet`,children:[E(`div`,{class:`sheet-top`,children:[E(`span`,{class:`pill`,children:[E(K,{name:`stack`}),`グループ`]}),i&&E(`span`,{class:`pill`,children:[m(i.from),i.to?`〜`+m(i.to):``]}),E(`span`,{class:`pill`,children:[r.length,`語`]})]}),E(`input`,{class:`title-input`,value:a,onInput:e=>o(e.target.value),onBlur:()=>{a.trim()&&a!==n.name&&ln(e,{name:a.trim()},`グループの名前を変更`)},"aria-label":`グループの名前`}),E(`div`,{class:`f-label`,children:`苦手度`}),E(`div`,{class:`seg weak`,children:[0,1,2,3].map(t=>E(`button`,{class:n.weakness===t?`on`:``,style:{"--wc":t?`var(--w${t})`:`var(--ink-4)`},onClick:()=>{let r=n.weakness===t?0:t;ln(e,{weakness:r},r?`グループの苦手度を ${r} に`:`グループの苦手度を解除`)},children:t?E(c,{children:[E(`i`,{}),t]}):`なし`},t))}),E(`div`,{class:`f-label`,children:[`重要度`,E(`small`,{children:n.importance?Tr[n.importance]:`付けない`})]}),E(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(t=>E(`button`,{"aria-label":`重要度${t}`,class:n.importance&&t<=n.importance?`on`:``,style:{height:10+t*2.2+`px`},onClick:()=>ln(e,{importance:n.importance===t?void 0:t},`グループの重要度を変更`)},t)),E(`div`,{class:`imp-txt`,children:E(`b`,{children:n.importance??`−`})})]}),E(`div`,{class:`f-label`,children:[`メモ`,E(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),d?E(`textarea`,{class:`desc`,rows:4,value:s,onInput:e=>l(e.target.value),onBlur:()=>{s!==n.memo&&ln(e,{memo:s},`グループのメモを編集`),f(!1)},autoFocus:!0}):E(`div`,{class:`desc view`,onClick:()=>f(!0),children:E(Xr,{text:n.memo,sheet:U.value.redSheet,placeholder:`メモを書く…`})}),E(`div`,{class:`f-label`,children:[`中の用語`,E(`small`,{children:`タップで詳細`})]}),E(`div`,{class:`member-list`,children:[r.map(t=>E(`div`,{class:`mrow2`,children:[E(`span`,{class:`w ${t.weakness?`wk`+t.weakness:``}`}),E(`button`,{class:`nm`,onClick:()=>W({openTermId:t.id}),children:[t.name,E(`small`,{children:m(t.when.from)})]}),E(`button`,{class:`iconbtn sm`,"aria-label":`グループから外す`,onClick:()=>dn(e,t.id),children:E(K,{name:`x`})})]},t.id)),E(`button`,{class:`btn sm add`,onClick:()=>Sa(`グループに用語を追加`,t=>un(e,t),{multi:!0,exclude:r.map(e=>e.id)}),children:[E(K,{name:`plus`}),`用語を追加`]})]}),E(`div`,{class:`action-list`,children:[E(`button`,{onClick:()=>{t(),W({groupFilter:e,tab:`timeline`}),i&&G(i.from)},children:[E(K,{name:`filter`}),`年表でこのグループだけ表示`]}),E(`button`,{onClick:()=>{let t=p.groups??[];h.setSettings({redSheet:{...p,groups:g?t.filter(t=>t!==e):[...t,e]}}),q(g?`赤シートの対象から外しました`:`赤シートの対象にしました（年表の「赤シート」で隠れます）`)},children:[E(K,{name:`eyeOff`}),g?`赤シートの対象から外す`:`赤シートで隠す`]}),E(`button`,{onClick:()=>{let e=bn(r.map(e=>e.id),`比較：${n.name}`);if(!e){q(`比較表には2語以上が必要です`);return}t(),W({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`)},children:[E(K,{name:`columns`}),`比較表を作る`]}),E(`button`,{onClick:()=>{let r=hn({title:n.name,links:[{kind:`group`,id:e}]});t(),W({tab:`weak`,weakSeg:`memos`,openWeakMemoId:r.id})},children:[E(K,{name:`target`}),`苦手メモを書く`]}),E(`button`,{class:`danger`,onClick:async()=>{await J({title:`グループ「${n.name}」をゴミ箱に入れますか？`,body:`中の用語は消えません。`,ok:`ゴミ箱へ`,danger:!0})&&(L([{c:`groups`,id:e}],`グループ「${n.name}」をゴミ箱へ`),t(),Z(`グループをゴミ箱に入れました`))},children:[E(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}var ja=()=>({text:``});function Ma(e){let t=Array.from({length:e.rows},(t,n)=>Array.from({length:e.cols},(t,r)=>({...e.cells[n]?.[r]??ja()})));return{...e,cells:t,colW:e.colW?Array.from({length:e.cols},(t,n)=>e.colW[n]??120):void 0}}function Na(e,t,n,r){let i=Ma(e);i.cells[t][n]={...i.cells[t][n],...r};for(let e of Object.keys(i.cells[t][n]))i.cells[t][n][e]===void 0&&delete i.cells[t][n][e];return i}function Pa(e,t){let n=Ma(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e<t&&e+a>t&&(i.rs=a+1)}return n.cells.splice(t,0,Array.from({length:n.cols},ja)),n.rows+=1,n.header&&t<n.header&&(n.header+=1),n}function Fa(e,t){if(e.rows<=1)return e;let n=Ma(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e===t&&a>1&&t+1<n.rows?n.cells[t+1][r]={...i,rs:a-1}:e<t&&e+a>t&&(i.rs=a-1)}return n.cells.splice(t,1),--n.rows,n.header&&t<n.header&&--n.header,Ba(n)}function Ia(e,t){let n=Ma(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r<t&&r+a>t&&(i.cs=a+1)}for(let e of n.cells)e.splice(t,0,ja());return n.cols+=1,n.colW&&n.colW.splice(t,0,120),n.headerCols&&t<n.headerCols&&(n.headerCols+=1),n}function La(e,t){if(e.cols<=1)return e;let n=Ma(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r===t&&a>1&&t+1<n.cols?n.cells[e][t+1]={...i,cs:a-1}:r<t&&r+a>t&&(i.cs=a-1)}for(let e of n.cells)e.splice(t,1);return--n.cols,n.colW&&n.colW.splice(t,1),n.headerCols&&t<n.headerCols&&--n.headerCols,Ba(n)}function Ra(e,t,n,r){let i=Ma(e),a=i.cells[t][n],o=a.rs??1,s=a.cs??1,c=r===`right`?t:t+o,l=r===`right`?n+s:n;if(c>=i.rows||l>=i.cols)return null;let u=i.cells[c][l];if(r===`right`&&(u.rs??1)!==o||r===`down`&&(u.cs??1)!==s)return null;let d=[a.text,u.text].filter(e=>e.trim()).join(r===`right`?` `:`
`);return r===`right`?a.cs=s+(u.cs??1):a.rs=o+(u.rs??1),a.text=d,i.cells[c][l]=ja(),i}function za(e,t,n){return Na(e,t,n,{rs:void 0,cs:void 0})}function Ba(e){for(let t=0;t<e.rows;t++)for(let n=0;n<e.cols;n++){let r=e.cells[t][n];r.rs&&t+r.rs>e.rows&&(r.rs=e.rows-t),r.cs&&n+r.cs>e.cols&&(r.cs=e.cols-n),r.rs===1&&delete r.rs,r.cs===1&&delete r.cs}return e}function Va(e){let t=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.startsWith(`|`)||e.includes(`|`)&&e.split(`|`).length>2);if(t.length<2)return null;let n=t.filter(e=>!/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(e)).map(e=>e.replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())),r=Math.max(...n.map(e=>e.length)),i=t.findIndex(e=>/^\|?\s*:?-{2,}/.test(e));return{rows:n.length,cols:r,cells:n.map(e=>Array.from({length:r},(t,n)=>({text:e[n]??``}))),header:i>0?i:1}}var Ha={table:`この写真の表を、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "table",
  "title": "表の題名（写真に無ければ内容から短く）",
  "header": 1,
  "rows": [
    ["見出し1", "見出し2", "見出し3"],
    ["中身", "中身", "中身"]
  ],
  "merges": [ { "r": 0, "c": 0, "rs": 1, "cs": 2 } ],
  "bold": [ [0, 0] ],
  "colors": [ { "r": 1, "c": 2, "color": "yellow" } ]
}

【決まり】
・rows は上の行から順に、各行は左から右へ。どの行も同じマスの数にする
・結合されたマスは、左上のマスに文字を入れ、結合で隠れるマスは "" にして、merges に書く（r＝行、c＝列。0から数える。rs＝縦に何マス、cs＝横に何マス）
・header は見出しの行の数
・文字は写真のとおりに（旧字体・送り仮名もそのまま）。読めない字は「？」にし、推測で補わない
・太字のマスは bold に [行, 列] で、色の付いたマスは colors に（yellow / pink / green / blue / gray / red のうち近いもの）。無ければ空の配列 []
・赤字や太字で強調された重要語は、〔 〕で囲む（アプリの赤シートで隠せるようになります）
・JSON 以外の説明は書かない`,diagram:`この写真の図（流れ図・関係図・系図など）を、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "diagram",
  "title": "図の題名",
  "nodes": [
    { "id": "a", "text": "箱の中の文字", "col": 0, "row": 0, "w": 3, "h": 1, "kind": "box" }
  ],
  "edges": [
    { "from": "a", "to": "b", "label": "矢印に書かれた文字（無ければ空）", "style": "arrow" }
  ]
}

【決まり】
・写真全体を「横12マス × 縦12マス」の方眼だと考え、それぞれの箱が左から何マス目（col）・上から何マス目（row）にあるか、幅（w）・高さ（h）が何マス分かで答える（0から数える）。だいたいでよいので、元の配置になるべく近く
・kind は box（枠のある箱）/ text（枠の無い文字）/ frame（いくつかの箱を囲む大きな枠）
・矢印の向きは from → to。矢印の無い線は style を "line"、両向きは "double"
・系図は、親子を上下、兄弟を左右に並べる。婚姻は "line"
・文字は写真のとおりに。読めない字は「？」にし、推測で補わない
・重要語は〔 〕で囲む（アプリの赤シートで隠せるようになります）
・JSON 以外の説明は書かない`,chart:`この写真のグラフを、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "chart",
  "title": "グラフの題名",
  "chartType": "line",
  "xLabel": "年",
  "yLabel": "縦軸の名前",
  "unit": "単位（例：万人、万石、千両）",
  "series": [
    { "name": "系列の名前", "points": [[1600, 1200], [1700, 2800]] }
  ],
  "notes": [ { "x": 1732, "text": "享保の飢饉" } ],
  "source": "写真に出典があれば"
}

【決まり】
・chartType は、折れ線グラフなら "line"、棒グラフなら "bar"
・points は [年, 値] の組。横軸が年でないとき（地域名など）は、左から 1, 2, 3 … の番号にし、その名前を notes に書く
・値は、数字が書いてあればその数字を、無ければ目盛りから読み取れる範囲で
・グラフに書き込まれた出来事は notes に
・JSON 以外の説明は書かない`},$=e=>e==null?``:String(e);function Ua(e){let t=[],n=Array.isArray(e.rows)?e.rows:[];if(!n.length)throw Error(`表の中身（rows）がありません`);let r=Math.max(...n.map(e=>Array.isArray(e)?e.length:0));n.some(e=>!Array.isArray(e)||e.length!==r)&&t.push(`行によってマスの数が違ったので、足りないマスを空にしました`);let i=n.map(e=>Array.from({length:r},(t,n)=>({text:$(e?.[n])})));for(let n of e.merges??[])i[n.r]?.[n.c]?((n.rs??1)>1&&(i[n.r][n.c].rs=Math.min(n.rs,i.length-n.r)),(n.cs??1)>1&&(i[n.r][n.c].cs=Math.min(n.cs,r-n.c))):t.push(`結合 ${n.r}行${n.c}列 が表の外です`);for(let t of e.bold??[])i[t[0]]?.[t[1]]&&(i[t[0]][t[1]].bold=!0);for(let t of e.colors??[])i[t.r]?.[t.c]&&(i[t.r][t.c].color=[`yellow`,`pink`,`green`,`blue`,`gray`,`red`].includes(t.color)?t.color:`yellow`);return{kind:`table`,title:$(e.title)||`取り込んだ表`,content:{rows:i.length,cols:r,cells:i,header:typeof e.header==`number`?e.header:1},warnings:t}}function Wa(e){let t=[],n=e.nodes??[];if(!n.length)throw Error(`図の箱（nodes）がありません`);let r=new Map,i=n.map((e,t)=>{let n=P(`dn`);r.set($(e.id??t),n);let i=Number(e.col??e.x??0),a=Number(e.row??e.y??0),o=Math.max(1,Number(e.w??3)),s=Math.max(1,Number(e.h??1));return{id:n,kind:[`box`,`text`,`frame`].includes($(e.kind))?$(e.kind):`box`,x:Math.round(i*5),y:Math.round(a*3),w:Math.max(2,Math.round(o*5)-1),h:Math.max(1,Math.round(s*3)-1),text:$(e.text)}}),a=(e.edges??[]).flatMap(e=>{let n=r.get($(e.from)),i=r.get($(e.to));if(!n||!i)return t.push(`つなぐ先が見つからない矢印を飛ばしました（${$(e.from)} → ${$(e.to)}）`),[];let a=[`arrow`,`line`,`double`].includes($(e.style))?$(e.style):`arrow`;return[{id:P(`de`),from:n,to:i,label:$(e.label)||void 0,style:a}]});return{kind:`diagram`,title:$(e.title)||`取り込んだ図`,content:{nodes:i,edges:a,grid:24},warnings:t}}function Ga(e){let t=[],n=e.series??[];if(!n.length)throw Error(`グラフのデータ（series）がありません`);let r=n.map((e,n)=>{let r=(e.points??[]).flatMap(e=>{let n=Array.isArray(e)?e:[e?.x,e?.y],r=Number(n[0]),i=Number(String(n[1]).replace(/,/g,``));return Number.isNaN(r)||Number.isNaN(i)?(t.push(`数字として読めない点を飛ばしました（${JSON.stringify(e)}）`),[]):[[r,i]]});return{name:$(e.name)||`系列${n+1}`,points:r.sort((e,t)=>e[0]-t[0])}}),i=(e.notes??[]).flatMap(e=>Number.isNaN(Number(e.x))?[]:[{x:Number(e.x),text:$(e.text)}]);return{kind:`chart`,title:$(e.title)||`取り込んだグラフ`,content:{chartType:e.chartType===`bar`?`bar`:`line`,xLabel:$(e.xLabel)||`年`,yLabel:$(e.yLabel),unit:$(e.unit),series:r,notes:i,source:$(e.source)||void 0},warnings:t}}function Ka(e,t){let n=e.trim();if(!n)throw Error(`貼り付けた内容が空です`);let r=null;try{r=ue(n)}catch(e){let t=Va(n);if(t)return{kind:`table`,title:`取り込んだ表`,content:t,warnings:[`Markdownの表として読み取りました`]};throw e}Array.isArray(r)&&(r={type:t??`table`,rows:r});let i=$(r.type)||t||(r.rows?`table`:r.nodes?`diagram`:r.series?`chart`:``);if(i===`table`)return Ua(r);if(i===`diagram`)return Wa(r);if(i===`chart`)return Ga(r);throw Error(`表・図・グラフのどれか分かりませんでした（"type" を確認してください）`)}var qa=xt(()=>Q(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url)),Ja=[[`table`,`表`,`cols3`],[`diagram`,`図`,`sitemap`],[`chart`,`グラフ`,`chartLine`]];function Ya(){let t=Ur.value,[n,r]=u(`table`),[i,a]=u(``),[o,s]=u(null),[d,f]=u(``),[p,m]=u(``),[g,_]=u(null),v=e(null),y=e(null);l(()=>{t&&(a(``),s(null),f(``),_(null))},[t]);let b=()=>{Ur.value=!1},x=async()=>{let e=await Ca(Ha[n]);q(e?`指示文をコピーしました。Claude アプリで写真を添付して、貼り付けて送ってください`:`コピーできませんでした`,{tone:e?`normal`:`error`,ms:5e3})},S=(e=i)=>{f(``);try{let t=Ka(e,n);s(t),m(t.title),r(t.kind)}catch(e){s(null),f(e.message)}},C=async e=>{let t=e.target.files?.[0];if(e.target.value=``,!t)return;let n=await t.text();a(n),S(n)},w=()=>{if(!o)return;let e;if(g){let t=Date.now(),n={id:P(`img`),createdAt:t,updatedAt:t,name:g.name,type:g.type,blob:g};h.tx(`取り込み元の画像を保存`,e=>e.put(`images`,n)),e=n.id}let t=Xt(o.kind,p||o.title,{content:o.content});e&&h.tx(`画像をつなぐ`,n=>{n.patch(`notes`,t.id,{imageId:e})}),b(),W({tab:`notes`,openNoteId:t.id}),Z(`「${t.name}」を作りました。編集できます`)},T=o?{id:`draft`,createdAt:0,updatedAt:0,kind:o.kind,name:p,tags:[],order:0,content:o.content}:null;return E(Y,{open:t,onClose:b,title:`画像から取り込む`,full:!0,children:E(`div`,{class:`form import`,children:[E(`div`,{class:`f-label`,children:`① 何を取り込む？`}),E(`div`,{class:`seg three`,children:Ja.map(([e,t,i])=>E(`button`,{class:n===e?`on`:``,onClick:()=>r(e),children:[E(K,{name:i}),t]},e))}),E(`button`,{class:`btn primary wide`,onClick:()=>void x(),children:[E(K,{name:`clipboard`}),`指示文をコピー`]}),E(`ol`,{class:`steps`,children:[E(`li`,{children:[`iPhone の `,E(`b`,{children:`Claude アプリ`}),`を開き、新しいチャットで `,E(`b`,{children:`写真を添付`}),`する（教科書・参考書の表や図を撮ったもの）`]}),E(`li`,{children:[`コピーした`,E(`b`,{children:`指示文を貼り付けて送る`})]}),E(`li`,{children:[`返ってきた結果を`,E(`b`,{children:`長押し →「コピー」`}),`して、このアプリに戻る`]})]}),E(`p`,{class:`hint`,children:`コツ：Claude アプリの「プロジェクト」に指示文を登録しておくと、次からは写真と「表」の一言だけで送れます（手順書を参照）。`}),E(`div`,{class:`f-label`,children:`② 結果を貼り付ける`}),E(`textarea`,{class:`paste`,rows:6,value:i,placeholder:`ここに貼り付け（前後の説明文があっても大丈夫です）`,onInput:e=>a(e.target.value)}),E(`div`,{class:`btn-row`,children:[E(`button`,{class:`btn`,onClick:()=>S(),disabled:!i.trim(),children:[E(K,{name:`check`}),`内容を確認`]}),E(`button`,{class:`btn`,onClick:()=>v.current?.click(),children:[E(K,{name:`fileImport`}),`ファイルから`]})]}),E(`input`,{ref:v,type:`file`,accept:`.json,.txt,.md,application/json,text/plain,text/markdown`,hidden:!0,onChange:C}),d&&E(`p`,{class:`err`,children:d}),o&&T&&E(c,{children:[E(`div`,{class:`f-label`,children:`③ 確かめて作る`}),o.warnings.length>0&&E(`ul`,{class:`issues`,children:o.warnings.map((e,t)=>E(`li`,{children:[`！ `,e]},t))}),E(`div`,{class:`import-pv`,children:E(bt,{fallback:E(`div`,{class:`loading`,children:`表示の準備中…`}),children:E(qa,{note:T,sheet:!1,height:260})})}),E(`label`,{class:`fld`,children:[E(`span`,{children:`名前`}),E(`input`,{value:p,onInput:e=>m(e.target.value)})]}),E(`label`,{class:`switch-row`,children:[E(`span`,{children:`元の画像も一緒に保存する（見比べ用。データは重くなります）`}),E(`input`,{type:`checkbox`,class:`switch`,checked:!!g,onChange:e=>{e.target.checked?y.current?.click():_(null)}})]}),g&&E(`p`,{class:`hint`,children:[`画像：`,g.name,`（`,Math.round(g.size/1024),`KB）`]}),E(`input`,{ref:y,type:`file`,accept:`image/*`,hidden:!0,onChange:e=>{let t=e.target.files?.[0];t&&_(t)}}),E(`button`,{class:`btn primary wide`,onClick:w,children:[E(K,{name:`plus`}),`編集できる`,o.kind===`table`?`表`:o.kind===`diagram`?`図`:`グラフ`,`として作る`]}),E(`p`,{class:`hint`,children:`取り込んだ内容は、この iPhone の中だけに保存されます（GitHub には上がりません）。`})]})]})})}var Xa=xt(()=>Q(()=>import(`./MapView.js`).then(e=>({default:e.MapView})),[],import.meta.url)),Za=xt(()=>Q(()=>import(`./CompareView.js`).then(e=>({default:e.CompareView})),[],import.meta.url)),Qa=[{id:`timeline`,icon:`table`,label:`年表`},{id:`notes`,icon:`notebook`,label:`ノート`},{id:`weak`,icon:`target`,label:`苦手`},{id:`map`,icon:`map2`,label:`地図`},{id:`more`,icon:`dots`,label:`その他`}],$a=864e5;function eo(){h.rev.value;let e=U.value.tab,t=h.list(`terms`).filter(e=>e.weakness>0).length,n=h.meta.lastBackupAt??0,r=h.meta.createdAt??Date.now(),i=Date.now()-Math.max(n,r)>h.settings.backupReminderDays*$a,[a]=u(Lt),o=Br.value;return l(()=>{let e=e=>{e.target.closest(`input,textarea,select`)||(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`z`&&(e.preventDefault(),e.shiftKey?wr():Cr())};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[]),E(`div`,{class:`app`,children:[a&&!U.value.dismissed.iosTab&&E(`div`,{class:`banner warn`,children:[E(K,{name:`homeShare`}),E(`span`,{children:[`Safariで直接開いています。共有ボタン →「ホーム画面に追加」で追加し、`,E(`b`,{children:`ホーム画面のアイコンから`}),`開いてください（ここで入れたデータは、アイコンから開いたアプリとは別扱いになります）。`]}),E(`button`,{class:`iconbtn sm`,"aria-label":`閉じる`,onClick:()=>W({dismissed:{...U.value.dismissed,iosTab:Date.now()}}),children:E(K,{name:`x`})})]}),Nt.value&&E(`div`,{class:`banner info`,children:[E(K,{name:`refresh`}),E(`span`,{children:`新しいバージョンがあります。`}),E(`button`,{class:`btn sm primary`,onClick:()=>void It(),children:`更新する`})]}),E(`main`,{class:`screen-area`,children:o?E(bt,{fallback:E(`div`,{class:`loading`,children:`読み込み中…`}),children:E(Za,{})}):E(c,{children:[e===`timeline`&&E(zi,{}),e===`notes`&&E(pi,{}),e===`weak`&&E(ga,{}),e===`map`&&E(bt,{fallback:E(`div`,{class:`loading`,children:`地図を読み込み中…`}),children:E(Xa,{})}),e===`more`&&E($i,{})]})}),E(`nav`,{class:`tabbar`,children:Qa.map(n=>E(`button`,{class:`tab ${e===n.id&&!o?`on`:``}`,onClick:()=>{o&&(Br.value=null),W({tab:n.id})},"aria-current":e===n.id?`page`:void 0,children:[E(K,{name:n.icon}),n.label,n.id===`weak`&&t>0&&E(`span`,{class:`badge`,children:t}),n.id===`more`&&(i||Yi.value.length>0)&&E(`span`,{class:`dot`})]},n.id))}),E(Ki,{}),E(ka,{}),E(Ta,{}),E(Oa,{}),E(Lr,{}),E(zr,{}),E(Ya,{}),E(vi,{}),E(Si,{}),E(xa,{}),E(Ut,{}),E(Gt,{})]})}var to=document.getElementById(`app`),no=matchMedia(`(prefers-color-scheme: dark)`);function ro(){h.rev.value;let e=h.settings.theme,t=e===`dark`||e===`auto`&&no.matches,n=document.documentElement;n.classList.toggle(`theme-dark`,t),n.classList.toggle(`theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?`#171513`:`#F4F0E6`);try{localStorage.setItem(`nhnote.theme`,e)}catch{}}d(ro),no.addEventListener(`change`,ro);var io=()=>{h.flush(),Et()};document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&io()}),addEventListener(`pagehide`,io),h.onError=e=>q(e,{tone:`error`,ms:6e3}),Le().then(e=>{t(E(eo,{}),to),document.getElementById(`splash`)?.remove();for(let t of e.notices)q(t,{ms:6e3});Ft(),Re().then(e=>{Yi.value=e.pending;for(let t of e.notices)q(t,{ms:6e3})})}).catch(e=>{document.getElementById(`splash`)?.remove(),to.innerHTML=``;let t=document.createElement(`div`);t.className=`fatal`,t.innerHTML=`<h1>起動できませんでした</h1><p></p><p class="hint">データは消えていません。アプリを閉じて開き直してください。直らない場合は、この画面のスクリーンショットを保存しておいてください。</p>`,t.querySelector(`p`).textContent=e instanceof Error?e.message:String(e),to.append(t),Ft()});export{G as A,bn as C,J as D,Y as E,bt as F,V as I,de as L,W as M,U as N,q as O,xt as P,P as R,Jt as S,$t as T,Vr as _,La as a,Z as b,za as c,bi as d,Q as f,Br as g,Hr as h,Ma as i,Dt as j,K as k,Sa as l,Xr as m,Pa as n,Fa as o,Qr as p,Ra as r,Na as s,Ia as t,zi as u,Pr as v,pn as w,gr as x,kr as y};