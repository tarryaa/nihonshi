import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./signals.module.js";import{_ as p,a as m,c as h,d as g,f as _,g as v,h as y,i as b,m as x,n as S,o as ee,p as C,r as w,s as T,t as te,u as ne,v as E}from"./years.js";var re=Object.defineProperty,ie=(e,t)=>{let n={};for(var r in e)re(n,r,{get:e[r],enumerable:!0});return t||re(n,Symbol.toStringTag,{value:`Module`}),n},D={};function O(e,t=1,n=D){let r=e.schemaVersion??1;if(r>t)throw Error(`このデータは新しい形式（版 ${r}）です。アプリを最新版に更新してから読み込んでください`);let i=e;for(;r<t;){let e=n[r];if(!e)throw Error(`形式 ${r} から ${r+1} への変換がありません`);i=e(structuredClone(i)),r+=1,i.schemaVersion=r}return i}var k={folders:`フォルダ`,notes:`ノート`,terms:`用語`,groups:`グループ`,arrows:`矢印`,stickies:`付箋`,embeds:`差し込み`,weakMemos:`苦手メモ`,priorityMemos:`優先順位メモ`,pins:`ピン`,images:`画像`},A=e=>typeof e==`number`&&Number.isInteger(e),ae=e=>typeof e==`string`;function oe(e,t,n){let r=n?.name??n?.title??n?.text;return`${k[e]} ${t+1}件目${r?`「${String(r).slice(0,20)}」`:``}`}function se(e,t,n,r=!0){if(e==null){r&&n.push({level:`error`,msg:`${t}：年（when）がありません`});return}if(typeof e!=`object`){n.push({level:`error`,msg:`${t}：年（when）の形が正しくありません`});return}let i=e;A(i.from)||n.push({level:`error`,msg:`${t}：始まりの年（when.from）は整数にしてください（今は ${JSON.stringify(i.from)}）`}),i.to!=null&&!A(i.to)&&n.push({level:`error`,msg:`${t}：終わりの年（when.to）は整数にしてください（今は ${JSON.stringify(i.to)}）`}),A(i.from)&&A(i.to)&&i.to<i.from&&n.push({level:`error`,msg:`${t}：終わりの年が始まりの年より前になっています（${i.from}〜${i.to}）`}),A(i.from)&&(i.from<-5e4||i.from>2100)&&n.push({level:`warn`,msg:`${t}：年 ${i.from} は範囲外のようです`})}function ce(e,t,n,r,i=!1){if(!t||typeof t!=`object`){r.push({level:`error`,msg:`${k[e]} ${n+1}件目：中身が正しくありません`});return}let a=t,o=oe(e,n,a);if(!ae(a.id)||!a.id.trim()){r.push({level:`error`,msg:`${o}：ID（id）がありません`});return}e===`terms`&&((!i||`name`in a)&&(!ae(a.name)||!a.name.trim())&&r.push({level:`error`,msg:`${o}：名前（name）が空です`}),(!i||`col`in a)&&(ae(a.col)||r.push({level:`error`,msg:`${o}：列（col）がありません`})),(!i||`when`in a)&&se(a.when,o,r),(`importance`in a||!i)&&(!A(a.importance)||a.importance<1||a.importance>10)&&r.push({level:`error`,msg:`${o}：重要度（importance）は1〜10の整数にしてください（今は ${JSON.stringify(a.importance)}）`}),`weakness`in a&&!(A(a.weakness)&&a.weakness>=0&&a.weakness<=3)&&r.push({level:`error`,msg:`${o}：苦手度（weakness）は0〜3にしてください`}),`shape`in a&&a.shape!==`point`&&a.shape!==`span`&&r.push({level:`error`,msg:`${o}：形（shape）は "point" か "span" にしてください`}),a.shape===`span`&&a.when&&a.when.to==null&&r.push({level:`warn`,msg:`${o}：期間（span）なのに終わりの年（when.to）がありません`})),e===`notes`&&((!i||`name`in a)&&(ae(a.name)||r.push({level:`error`,msg:`${o}：名前（name）がありません`})),(!i||`kind`in a)&&([`timeline`,`table`,`diagram`,`chart`,`memo`,`board`].includes(a.kind)||r.push({level:`error`,msg:`${o}：種類（kind）が正しくありません`}))),e===`stickies`&&!i&&(!a.anchor||typeof a.anchor!=`object`)&&r.push({level:`error`,msg:`${o}：貼り先（anchor）がありません`})}function le(e){let t=[];if(!e||typeof e!=`object`)return[{level:`error`,msg:`ファイルの中身が読めませんでした（JSONの形ではありません）`}];let n=e;n.format!==`nhnote-backup`&&t.push({level:`error`,msg:`このアプリのバックアップファイルではありません（format が "nhnote-backup" ではありません）`}),A(n.schemaVersion)||t.push({level:`error`,msg:`形式の版（schemaVersion）がありません`});let r=n.collections;if(!r||typeof r!=`object`)return t.push({level:`error`,msg:`データ本体（collections）がありません`}),t;for(let e of E){let n=r[e];if(n!=null){if(!Array.isArray(n)){t.push({level:`error`,msg:`${k[e]}の一覧が配列ではありません`});continue}n.forEach((n,r)=>ce(e,n,r,t)),M(e,n,t)}}return ue(r,t),t}function j(e,t){let n=[];if(!e||typeof e!=`object`)return[{level:`error`,msg:`中身が読めませんでした（JSONの形ではありません）`}];let r=e;r.format!==`nhnote-patch`&&n.push({level:`error`,msg:`追加・修正用のデータではありません（format が "nhnote-patch" ではありません）`});let i=r.upsert??{};typeof i!=`object`&&n.push({level:`error`,msg:`upsert の形が正しくありません`});for(let[e,r]of Object.entries(i)){if(!E.includes(e)){n.push({level:`warn`,msg:`知らない種類「${e}」は読み飛ばします`});continue}if(!Array.isArray(r)){n.push({level:`error`,msg:`${k[e]}の一覧が配列ではありません`});continue}r.forEach((r,i)=>{let a=r?.id,o=!t||!t(e,a);ce(e,r,i,n,!o)}),M(e,r,n)}return r.trash!=null&&!Array.isArray(r.trash)&&n.push({level:`error`,msg:`trash は ID の配列にしてください`}),n}function M(e,t,n){let r=new Set;for(let i of t){let t=i?.id;t&&(r.has(t)&&n.push({level:`error`,msg:`${k[e]}：ID「${t}」が重複しています`}),r.add(t))}}function ue(e,t){let n=t=>new Set((e[t]??[]).map(e=>e.id)),r=n(`notes`),i=n(`terms`),a=0;for(let t of e.terms??[])r.has(t.noteId)||a++;a&&t.push({level:`warn`,msg:`ノートが見つからない用語が ${a} 件あります（表示されない可能性があります）`});let o=0;for(let t of e.stickies??[]){let e=t.anchor;e?.kind===`term`&&!i.has(e.termId)&&o++}o&&t.push({level:`warn`,msg:`貼り先の用語が見つからない付箋が ${o} 件あります`})}function de(e){let t=e.replace(/^﻿/,``).trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i);n&&(t=n[1].trim());try{return JSON.parse(t)}catch{}let r=t.search(/[[{]/);r>0&&(t=t.slice(r));let i=Math.max(t.lastIndexOf(`}`),t.lastIndexOf(`]`));i>=0&&(t=t.slice(0,i+1)),t=t.replace(/[“”]/g,`"`).replace(/[‘’]/g,`'`).replace(/,\s*([}\]])/g,`$1`);try{return JSON.parse(t)}catch(e){throw Error(`JSONとして読めませんでした。コピーした範囲が欠けていないか確認してください（`+(e instanceof Error?e.message:``)+`）`)}}var fe=`n-main`;function N(e){let t=Math.random().toString(36).slice(2,7);return`${e}-u-${Date.now().toString(36)}${t}`}var pe=e=>e.to!=null&&e.to>e.from?`span`:`point`,me=e=>Math.max(1,Math.min(10,Math.round(e)));function he(e){let t=Date.now(),n={id:N(`t`),createdAt:t,updatedAt:t,name:e.name.trim(),yomi:e.yomi?.trim()||void 0,noteId:e.noteId??`n-main`,col:e.col,when:e.when,shape:e.shape??pe(e.when),importance:me(e.importance??5),importanceBy:`me`,weakness:0,desc:e.desc??``,descBy:e.desc?`me`:void 0,author:`me`,status:`verified`,tags:[]};return h.tx(`「${n.name}」を追加`,e=>e.put(`terms`,n)),n}function ge(e,t,n){let r=h.get(`terms`,e);if(!r)return;let i={...t};i.name!=null&&(i.name=i.name.trim()),i.importance!=null&&(i.importance=me(i.importance),i.importance!==r.importance&&(i.importanceBy=`me`)),i.desc!=null&&i.desc!==r.desc&&(i.descBy=`me`),h.tx(n??`「${r.name}」を編集`,t=>{t.patch(`terms`,e,i)})}function _e(e,t){let n=h.get(`terms`,e);if(!n||n.weakness===t)return;let r=t?`「${n.name}」の苦手度を ${t} に`:`「${n.name}」の苦手度を解除`;h.tx(r,n=>{n.patch(`terms`,e,{weakness:t})})}function ve(e){let t=h.get(`terms`,e);if(!t)return 0;let n=(t.weakness+1)%4;return _e(e,n),n}function ye(e,t){let n=h.get(`terms`,e);n&&h.tx(`「${n.name}」の重要度を ${me(t)} に`,n=>{n.patch(`terms`,e,{importance:me(t),importanceBy:`me`})})}function be(e,t){let n=h.get(`terms`,e);n&&h.tx(t?`「${n.name}」を確認済みに`:`「${n.name}」を未確認に`,n=>{n.patch(`terms`,e,{status:t?`verified`:`unverified`})})}function xe(e){for(let t of h.list(`stickies`))if(t.anchor.kind===`term`&&t.anchor.termId===e)return t}function Se(e,t,n){let r=xe(e),i=h.get(`terms`,e)?.name??``,a=t.trim();if(!r&&!a)return;if(r&&!a){P([{c:`stickies`,id:r.id}],`「${i}」の付箋を削除`);return}let o=Date.now();if(r){if(r.text===t&&(!n||n===r.color))return;h.tx(`「${i}」の付箋を編集`,e=>{e.patch(`stickies`,r.id,{text:t,...n?{color:n}:{}})})}else{let r={id:N(`s`),createdAt:o,updatedAt:o,anchor:{kind:`term`,termId:e},text:t,color:n??`yellow`,author:`me`};h.tx(`「${i}」に付箋`,e=>e.put(`stickies`,r))}}function Ce(e,t){let n=[];if(e===`terms`){for(let e of h.list(`stickies`))e.anchor.kind===`term`&&e.anchor.termId===t&&n.push({c:`stickies`,id:e.id});for(let e of h.list(`arrows`))(e.from===t||e.to===t)&&n.push({c:`arrows`,id:e.id})}if(e===`notes`){for(let e of h.list(`terms`))e.noteId===t&&n.push({c:`terms`,id:e.id},...Ce(`terms`,e.id));for(let e of h.list(`embeds`))(e.noteId===t||e.target.kind===`note`&&e.target.id===t)&&n.push({c:`embeds`,id:e.id})}return n}function P(e,t){let n=N(`tg`),r=Date.now(),i=new Map;for(let t of e)for(let e of[t,...Ce(t.c,t.id)])i.set(e.c+`:`+e.id,e);return h.tx(t,e=>{for(let t of i.values()){let i=e.get(t.c,t.id);i&&!i.deletedAt&&e.patch(t.c,t.id,{deletedAt:r,trashGroup:n})}}),n}function we(e){let t=h.get(`terms`,e);return t?P([{c:`terms`,id:e}],`「${t.name}」をゴミ箱へ`):null}function Te(e,t){for(let n of Object.keys(h.data))for(let r of h.data[n].values())r.trashGroup===e&&t(n,r)}function Ee(e,t=`ゴミ箱から戻す`){h.tx(t,t=>{Te(e,(e,n)=>{let{deletedAt:r,trashGroup:i,...a}=n;t.put(e,{...a,updatedAt:Date.now()})})})}function De(e){let t=new Set;h.tx(`ゴミ箱を空にする`,n=>{for(let r of e)Te(r,(e,r)=>{t.add(r.id),n.hardDelete(e,r.id)})},{history:!1}),h.forgetHistoryFor(t)}function Oe(){let e=new Map;for(let t of Object.keys(h.data))for(let n of h.data[t].values()){let r=n;if(!r.deletedAt||!r.trashGroup)continue;let i=e.get(r.trashGroup);i||(i={group:r.trashGroup,deletedAt:r.deletedAt,items:[],title:``},e.set(r.trashGroup,i)),i.items.push({c:t,rec:r})}let t=e=>{let t=e.rec;return t.name??t.title??t.text??``},n=[`notes`,`terms`,`groups`,`weakMemos`,`priorityMemos`,`stickies`,`arrows`,`embeds`,`pins`,`images`,`folders`];for(let r of e.values())r.items.sort((e,t)=>n.indexOf(e.c)-n.indexOf(t.c)),r.title=t(r.items[0]);return[...e.values()].sort((e,t)=>t.deletedAt-e.deletedAt)}function ke(e,t,n=`列の設定を変更`){h.tx(n,n=>{n.patch(`notes`,e,{columns:t})})}function Ae(e){let t=Date.now(),n=Math.min(0,...h.list(`priorityMemos`).map(e=>e.order)),r={id:N(`pm`),createdAt:t,updatedAt:t,text:e.trim(),order:n-1};return h.tx(`優先順位メモを追加`,e=>e.put(`priorityMemos`,r)),r}var je=e=>{let t=e;return t?.name??t?.title??t?.text??t?.id??``},F=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Me=new Set([`weakness`,`importanceBy`,`descBy`,`author`,`status`,`createdAt`,`updatedAt`,`deletedAt`,`trashGroup`,`hide`,`seed`]);function I(e,t,n){let r=e.when,i={id:e.id,createdAt:t,updatedAt:t,name:String(e.name).trim(),yomi:e.yomi||void 0,noteId:e.noteId??`n-main`,col:e.col,when:r,shape:e.shape??(r.to!=null&&r.to>r.from?`span`:`point`),importance:e.importance??5,importanceBy:`ai`,weakness:0,desc:e.desc??``,descBy:e.desc?`ai`:void 0,author:`ai`,status:`unverified`,tags:e.tags??[]};return e.refId&&(i.refId=e.refId),n&&(i.seed=n),i}function Ne(e,t,n){let r={...e},i=[];for(let[n,a]of Object.entries(t))if(!(Me.has(n)||n===`id`)){if(n===`importance`){if(e.importanceBy===`me`){a!==e.importance&&i.push(`重要度`);continue}r.importance=a;continue}if(n===`desc`){if(e.descBy===`me`||e.author===`me`&&e.desc){a!==e.desc&&i.push(`説明`);continue}r.desc=a??``,r.descBy=a?`ai`:void 0;continue}r[n]=a}return(!F(r.name,e.name)||!F(r.when,e.when)||r.col!==e.col)&&e.author===`ai`&&(r.status=`unverified`),F(r,e)||(r.updatedAt=n),{after:r,kept:i}}function Pe(e=[],t=[]){let n=new Set(e.map(e=>e.id));return[...e,...t.filter(e=>!n.has(e.id))]}function Fe(e,t=h,n=Date.now()){let r={adds:[],updates:[],unchanged:0,skipped:[],trash:[]},i=e.seed?.id;for(let[a,o]of Object.entries(e.upsert??{})){if(!E.includes(a)||!Array.isArray(o))continue;let e=a;for(let a of o){let o=a.id,s=t.get(e,o);if(!s){e===`terms`?r.adds.push({c:e,rec:I(a,n,i)}):r.adds.push({c:e,rec:{author:`ai`,...a,createdAt:n,updatedAt:n}});continue}if(s.deletedAt){r.skipped.push({c:e,id:o,name:je(s),reason:`ゴミ箱にあるため`});continue}if(e===`terms`){let{after:t,kept:i}=Ne(s,a,n);if(F(t,s)){r.unchanged++,i.length&&r.skipped.push({c:e,id:o,name:je(s),reason:`あなたの${i.join(`・`)}を守るため`});continue}r.updates.push({c:e,before:s,after:t,kept:i});continue}if(e===`notes`){let t=s,i={...t,columns:Pe(t.columns,a.columns)};if(F(i,t)){r.unchanged++;continue}r.updates.push({c:e,before:s,after:{...i,updatedAt:n},kept:[`列の表示・並び`]});continue}if(s.author===`me`){r.skipped.push({c:e,id:o,name:je(s),reason:`あなたが作ったもののため`});continue}let c={...s};for(let[e,t]of Object.entries(a))Me.has(e)||(c[e]=t);if(F(c,s)){r.unchanged++;continue}r.updates.push({c:e,before:s,after:{...c,updatedAt:n},kept:[]})}}for(let n of e.trash??[]){let e=!1;for(let i of E){let a=t.get(i,n);if(a){if(e=!0,a.deletedAt)break;a.author===`me`?r.skipped.push({c:i,id:n,name:je(a),reason:`あなたが作ったもののため削除しません`}):r.trash.push({c:i,id:n,name:je(a)});break}}e||r.skipped.push({c:`terms`,id:n,name:n,reason:`削除対象が見つかりません`})}return r}function Ie(e,t,n=h,r={}){let i=Date.now(),a=N(`tg`);n.tx(t,t=>{for(let n of e.adds)t.put(n.c,n.rec);for(let n of e.updates)t.put(n.c,n.after);for(let n of e.trash)t.patch(n.c,n.id,{deletedAt:i,trashGroup:a})},r)}var Le=e=>({add:e.adds.length,update:e.updates.length,trash:e.trash.length,skip:e.skipped.length,same:e.unchanged}),L={about:`時代・元号・年表の列の初期値。AIが編集してよい。元号は改元の年（from）と、次の元号がすぐ続かない場合の終わりの年（end）。南北朝の時代（1332〜1392年）は court に south（南朝）・north（北朝の別の元号）を付けて並べる。`,eras:[{id:`kyusekki`,name:`旧石器時代`,from:-36e3,to:-14e3,label:`〜約1万6000年前`},{id:`jomon`,name:`縄文時代`,from:-14e3,to:-400,label:`約1万6000年前〜`},{id:`yayoi`,name:`弥生時代`,from:-400,to:250,label:`前4世紀頃〜`},{id:`kofun`,name:`古墳時代`,from:250,to:592,label:`3世紀中頃〜`},{id:`asuka`,name:`飛鳥時代`,from:592,to:710},{id:`nara`,name:`奈良時代`,from:710,to:794},{id:`heian`,name:`平安時代`,from:794,to:1185},{id:`kamakura`,name:`鎌倉時代`,from:1185,to:1333},{id:`nanboku`,name:`南北朝時代`,from:1333,to:1392,label:`建武の新政を含む`},{id:`muromachi`,name:`室町時代`,from:1392,to:1467},{id:`sengoku`,name:`戦国時代`,from:1467,to:1573},{id:`azuchi`,name:`安土桃山時代`,from:1573,to:1603},{id:`edo`,name:`江戸時代`,from:1603,to:1868},{id:`meiji`,name:`明治時代`,from:1868,to:1912},{id:`taisho`,name:`大正時代`,from:1912,to:1926},{id:`showa`,name:`昭和時代`,from:1926,to:1989},{id:`heisei`,name:`平成時代`,from:1989,to:2019},{id:`reiwa`,name:`令和時代`,from:2019,to:1e4}],gengo:[{name:`大化`,from:645},{name:`白雉`,from:650,end:654},{name:`朱鳥`,from:686,end:686},{name:`大宝`,from:701},{name:`慶雲`,from:704},{name:`和銅`,from:708},{name:`霊亀`,from:715},{name:`養老`,from:717},{name:`神亀`,from:724},{name:`天平`,from:729},{name:`天平感宝`,from:749},{name:`天平勝宝`,from:749},{name:`天平宝字`,from:757},{name:`天平神護`,from:765},{name:`神護景雲`,from:767},{name:`宝亀`,from:770},{name:`天応`,from:781},{name:`延暦`,from:782},{name:`大同`,from:806},{name:`弘仁`,from:810},{name:`天長`,from:824},{name:`承和`,from:834},{name:`嘉祥`,from:848},{name:`仁寿`,from:851},{name:`斉衡`,from:854},{name:`天安`,from:857},{name:`貞観`,from:859},{name:`元慶`,from:877},{name:`仁和`,from:885},{name:`寛平`,from:889},{name:`昌泰`,from:898},{name:`延喜`,from:901},{name:`延長`,from:923},{name:`承平`,from:931},{name:`天慶`,from:938},{name:`天暦`,from:947},{name:`天徳`,from:957},{name:`応和`,from:961},{name:`康保`,from:964},{name:`安和`,from:968},{name:`天禄`,from:970},{name:`天延`,from:973},{name:`貞元`,from:976},{name:`天元`,from:978},{name:`永観`,from:983},{name:`寛和`,from:985},{name:`永延`,from:987},{name:`永祚`,from:989},{name:`正暦`,from:990},{name:`長徳`,from:995},{name:`長保`,from:999},{name:`寛弘`,from:1004},{name:`長和`,from:1012},{name:`寛仁`,from:1017},{name:`治安`,from:1021},{name:`万寿`,from:1024},{name:`長元`,from:1028},{name:`長暦`,from:1037},{name:`長久`,from:1040},{name:`寛徳`,from:1044},{name:`永承`,from:1046},{name:`天喜`,from:1053},{name:`康平`,from:1058},{name:`治暦`,from:1065},{name:`延久`,from:1069},{name:`承保`,from:1074},{name:`承暦`,from:1077},{name:`永保`,from:1081},{name:`応徳`,from:1084},{name:`寛治`,from:1087},{name:`嘉保`,from:1094},{name:`永長`,from:1096},{name:`承徳`,from:1097},{name:`康和`,from:1099},{name:`長治`,from:1104},{name:`嘉承`,from:1106},{name:`天仁`,from:1108},{name:`天永`,from:1110},{name:`永久`,from:1113},{name:`元永`,from:1118},{name:`保安`,from:1120},{name:`天治`,from:1124},{name:`大治`,from:1126},{name:`天承`,from:1131},{name:`長承`,from:1132},{name:`保延`,from:1135},{name:`永治`,from:1141},{name:`康治`,from:1142},{name:`天養`,from:1144},{name:`久安`,from:1145},{name:`仁平`,from:1151},{name:`久寿`,from:1154},{name:`保元`,from:1156},{name:`平治`,from:1159},{name:`永暦`,from:1160},{name:`応保`,from:1161},{name:`長寛`,from:1163},{name:`永万`,from:1165},{name:`仁安`,from:1166},{name:`嘉応`,from:1169},{name:`承安`,from:1171},{name:`安元`,from:1175},{name:`治承`,from:1177},{name:`養和`,from:1181},{name:`寿永`,from:1182},{name:`元暦`,from:1184},{name:`文治`,from:1185},{name:`建久`,from:1190},{name:`正治`,from:1199},{name:`建仁`,from:1201},{name:`元久`,from:1204},{name:`建永`,from:1206},{name:`承元`,from:1207},{name:`建暦`,from:1211},{name:`建保`,from:1213},{name:`承久`,from:1219},{name:`貞応`,from:1222},{name:`元仁`,from:1224},{name:`嘉禄`,from:1225},{name:`安貞`,from:1227},{name:`寛喜`,from:1229},{name:`貞永`,from:1232},{name:`天福`,from:1233},{name:`文暦`,from:1234},{name:`嘉禎`,from:1235},{name:`暦仁`,from:1238},{name:`延応`,from:1239},{name:`仁治`,from:1240},{name:`寛元`,from:1243},{name:`宝治`,from:1247},{name:`建長`,from:1249},{name:`康元`,from:1256},{name:`正嘉`,from:1257},{name:`正元`,from:1259},{name:`文応`,from:1260},{name:`弘長`,from:1261},{name:`文永`,from:1264},{name:`建治`,from:1275},{name:`弘安`,from:1278},{name:`正応`,from:1288},{name:`永仁`,from:1293},{name:`正安`,from:1299},{name:`乾元`,from:1302},{name:`嘉元`,from:1303},{name:`徳治`,from:1306},{name:`延慶`,from:1308},{name:`応長`,from:1311},{name:`正和`,from:1312},{name:`文保`,from:1317},{name:`元応`,from:1319},{name:`元亨`,from:1321},{name:`正中`,from:1324},{name:`嘉暦`,from:1326},{name:`元徳`,from:1329},{name:`元弘`,from:1331},{name:`正慶`,from:1332,end:1333,court:`north`},{name:`建武`,from:1334},{name:`延元`,from:1336,court:`south`},{name:`暦応`,from:1338},{name:`興国`,from:1340,court:`south`},{name:`康永`,from:1342},{name:`貞和`,from:1345},{name:`正平`,from:1346,court:`south`},{name:`観応`,from:1350},{name:`文和`,from:1352},{name:`延文`,from:1356},{name:`康安`,from:1361},{name:`貞治`,from:1362},{name:`応安`,from:1368},{name:`建徳`,from:1370,court:`south`},{name:`文中`,from:1372,court:`south`},{name:`永和`,from:1375},{name:`天授`,from:1375,court:`south`},{name:`康暦`,from:1379},{name:`永徳`,from:1381},{name:`弘和`,from:1381,court:`south`},{name:`至徳`,from:1384},{name:`元中`,from:1384,court:`south`,end:1392},{name:`嘉慶`,from:1387},{name:`康応`,from:1389},{name:`明徳`,from:1390},{name:`応永`,from:1394},{name:`正長`,from:1428},{name:`永享`,from:1429},{name:`嘉吉`,from:1441},{name:`文安`,from:1444},{name:`宝徳`,from:1449},{name:`享徳`,from:1452},{name:`康正`,from:1455},{name:`長禄`,from:1457},{name:`寛正`,from:1460},{name:`文正`,from:1466},{name:`応仁`,from:1467},{name:`文明`,from:1469},{name:`長享`,from:1487},{name:`延徳`,from:1489},{name:`明応`,from:1492},{name:`文亀`,from:1501},{name:`永正`,from:1504},{name:`大永`,from:1521},{name:`享禄`,from:1528},{name:`天文`,from:1532},{name:`弘治`,from:1555},{name:`永禄`,from:1558},{name:`元亀`,from:1570},{name:`天正`,from:1573},{name:`文禄`,from:1592},{name:`慶長`,from:1596},{name:`元和`,from:1615},{name:`寛永`,from:1624},{name:`正保`,from:1644},{name:`慶安`,from:1648},{name:`承応`,from:1652},{name:`明暦`,from:1655},{name:`万治`,from:1658},{name:`寛文`,from:1661},{name:`延宝`,from:1673},{name:`天和`,from:1681},{name:`貞享`,from:1684},{name:`元禄`,from:1688},{name:`宝永`,from:1704},{name:`正徳`,from:1711},{name:`享保`,from:1716},{name:`元文`,from:1736},{name:`寛保`,from:1741},{name:`延享`,from:1744},{name:`寛延`,from:1748},{name:`宝暦`,from:1751},{name:`明和`,from:1764},{name:`安永`,from:1772},{name:`天明`,from:1781},{name:`寛政`,from:1789},{name:`享和`,from:1801},{name:`文化`,from:1804},{name:`文政`,from:1818},{name:`天保`,from:1830},{name:`弘化`,from:1844},{name:`嘉永`,from:1848},{name:`安政`,from:1854},{name:`万延`,from:1860},{name:`文久`,from:1861},{name:`元治`,from:1864},{name:`慶応`,from:1865},{name:`明治`,from:1868},{name:`大正`,from:1912},{name:`昭和`,from:1926},{name:`平成`,from:1989},{name:`令和`,from:2019}],gengoCoverage:{to:9999},columns:[{id:`ruler`,name:`政権担当`,visible:!0},{id:`event`,name:`出来事`,visible:!0},{id:`policy`,name:`政策`,visible:!0},{id:`system`,name:`制度`,visible:!0},{id:`diplomacy`,name:`外交`,visible:!0},{id:`finance`,name:`財政`,visible:!0},{id:`society`,name:`社会`,visible:!0},{id:`industry`,name:`産業`,visible:!0},{id:`culture`,name:`文化`,visible:!0},{id:`situation`,name:`情勢`,visible:!0},{id:`world`,name:`世界の動き`,visible:!1}]},R=`0.1.0 (2026-10-06 17:46)`,Re=7,ze=864e5;async function z(){let e=[],t=await x(),n=await g(t,`schemaVersion`);if(n!=null&&n>1)throw Error(`保存されているデータが、このアプリより新しい形式です。アプリを更新してください（ホーム画面のアイコンから開き直すと更新されます）`);n!=null&&n<1&&(await He(t,n),e.push(`データを新しい形式に変換しました（変換前の控えは「その他 › 端末内の自動バックアップ」にあります）`)),await h.load(t);let r=n==null;if(r){let e=Date.now();await p(t,{schemaVersion:1,createdAt:e}),h.meta={...h.meta,schemaVersion:1,createdAt:e}}return Ve(),Ye(),Ue(),{firstRun:r,pendingSeeds:[],notices:e}}async function Be(){let e=[],t=0;try{let n=await We(),r=Object.keys(h.appliedSeeds).length===0,i=n.filter(e=>(h.appliedSeeds[e.id]??0)<e.version);if(!(r&&i.length))return{pending:i,notices:e,applied:t};for(let n of i){let r=await Ge(n),i=j(r,(e,t)=>!!h.get(e,t));if(i.some(e=>e.level===`error`)){e.push(`初期データ「${n.title}」に問題があったため読み込みませんでした：${i[0].msg}`);continue}Ie(Fe(r),`初期データ「${n.title}」`,h,{history:!1}),h.markSeedApplied(n.id,n.version),t++}return await h.flush(),{pending:[],notices:e,applied:t}}catch{return Object.keys(h.appliedSeeds).length||e.push(`初期データを読み込めませんでした。インターネットにつながった状態でもう一度開いてください`),{pending:[],notices:e,applied:t}}}function Ve(){if(h.get(`notes`,`n-main`))return;let e=Date.now(),t={id:fe,createdAt:e,updatedAt:e,kind:`timeline`,name:`全体年表`,tags:[],order:0,columns:L.columns.map(e=>({...e}))};h.tx(`全体年表を作成`,e=>e.put(`notes`,t),{history:!1})}async function He(e,t){let n={};for(let t of E)n[t]=await ne(e,t);let r={format:`nhnote-backup`,schemaVersion:t,collections:n};await y(e,{id:`snap-`+Date.now(),at:Date.now(),reason:`形式の変換の前（版 ${t}）`,size:0,dump:r},Re);let i=O(r);await v(e,i.collections,{schemaVersion:1})}async function Ue(){try{navigator.storage?.persist&&!await navigator.storage.persisted()&&await navigator.storage.persist()}catch{}}async function We(){let e=await fetch(`./seed-index.json`,{cache:`no-cache`});if(!e.ok)throw Error(`seed-index.json を読めません`);return(await e.json()).seeds}async function Ge(e){let t=await fetch(`./`+e.file,{cache:`no-cache`});if(!t.ok)throw Error(`${e.file} を読めません`);return await t.json()}async function Ke(e){let t=[];for(let n of e){let e=O(await Ge(n)),r=j(e,(e,t)=>!!h.get(e,t));t.push({seed:n,plan:Fe(e),issues:r})}return t}async function qe(e){await Je(`初期データ取り込みの前`);for(let t of e)Ie(t.plan,`初期データ「${t.seed.title}」を取り込み`),h.markSeedApplied(t.seed.id,t.seed.version);await h.flush()}async function Je(e){if(!h.db)return;await h.flush();let t=h.dump(R),n=JSON.stringify(t.collections).length;await y(h.db,{id:`snap-`+Date.now(),at:Date.now(),reason:e,size:n,dump:t},Re),h.setMetaValue(`lastSnapshotAt`,Date.now())}async function Ye(){let e=h.meta.lastSnapshotAt??0;Date.now()-e<ze*.9||setTimeout(()=>{Je(`毎日の自動保存`).catch(()=>{})},4e3)}async function Xe(){return h.db?C(h.db):[]}async function Ze(e){if(!h.db)return;let t=await _(h.db,e);if(!t)throw Error(`見つかりません`);await at(t.dump,`端末内の控え（${new Date(t.at).toLocaleString(`ja-JP`)}）から戻す前`)}var Qe=e=>String(e).padStart(2,`0`);function $e(e=new Date){return`nihonshi-backup-${e.getFullYear()}${Qe(e.getMonth()+1)}${Qe(e.getDate())}-${Qe(e.getHours())}${Qe(e.getMinutes())}.json`}var et=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error),r.readAsDataURL(e)});function tt(e){let[t,n]=e.split(`,`),r=t.match(/data:([^;]+)/)?.[1]??`application/octet-stream`,i=atob(n),a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=i.charCodeAt(e);return new Blob([a],{type:r})}async function nt(e){let t=e.collections.images??[];return e.collections.images=await Promise.all(t.map(async e=>{let{blob:t,...n}=e;return t instanceof Blob?{...n,dataUrl:await et(t)}:n})),e}async function rt(){await h.flush();let e=await nt(h.dump(R)),t=JSON.stringify(e,null,1),n=$e(),r=new File([t],n,{type:`application/json`});if(navigator.canShare?.({files:[r]})&&/iPhone|iPad|iPod|Android/.test(navigator.userAgent))try{return await navigator.share({files:[r],title:`日本史ノートのバックアップ`}),h.setMetaValue(`lastBackupAt`,Date.now()),`shared`}catch(e){if(e.name===`AbortError`)return`cancelled`}let i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=n,document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4),h.setMetaValue(`lastBackupAt`,Date.now()),`downloaded`}function it(e){let t=de(e);if(t?.format===`nhnote-backup`){let e=le(t),n=t;if(!e.some(e=>e.level===`error`))try{n=O(n)}catch(t){e=[...e,{level:`error`,msg:t.message}]}return{kind:`backup`,dump:n,issues:e}}let n=t,r=j(n,(e,t)=>!!h.get(e,t)),i=null;if(!r.some(e=>e.level===`error`))try{n=O(n),i=Fe(n)}catch(e){r=[...r,{level:`error`,msg:e.message}]}return{kind:`patch`,patch:n,issues:r,plan:i}}async function at(e,t=`バックアップから復元する前`){if(!h.db)return;await Je(t);let n=O(e);n.collections.images&&(n.collections.images=n.collections.images.map(e=>{if(e.dataUrl&&!(e.blob instanceof Blob)){let{dataUrl:t,...n}=e;return{...n,blob:tt(t)}}return e})),await v(h.db,n.collections,{schemaVersion:1,settings:n.settings,appliedSeeds:n.appliedSeeds??{},history:{undo:[],redo:[]}}),await h.load(h.db),Ve(),await h.flush()}async function ot(e,t){await Je(`「${t}」取り込みの前`),Ie(e,`「${t}」を取り込み`),await h.flush()}var st=e=>Object.fromEntries(E.map(t=>[t,e.collections[t]?.filter(e=>!e.deletedAt).length??0])),ct=Object.assign;function lt(e,t){for(var n in e)if(n!=`__source`&&e[n]!==t[n])return!0;for(var r in t)if(r!=`__source`&&!(r in e))return!0;return!1}var ut=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;function dt(e,t){function r(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:lt(this.props,e)}function i(t){return this.shouldComponentUpdate=r,n(e,t)}return i.displayName=`Memo(`+(e.displayName||e.name)+`)`,i.prototype.isReactComponent=!0,i.type=e,i}var ft=Symbol.for(`react.element`),pt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mt=/[A-Z0-9]/g,ht=typeof document<`u`,gt=function(e){return/fil|che|rad/.test(e)};f.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(f.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var _t=r.event;r.event=function(e){return _t&&(e=_t(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var vt={configurable:!0,get:function(){return this.class}},yt=r.vnode;r.vnode=function(e){if(typeof e.type==`string`)(function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var o in t){var s=t[o];if(!(o==`value`&&`defaultValue`in t&&s==null||ht&&o==`children`&&n==`noscript`||o==`class`||o==`className`)){if(o==`style`&&typeof s==`object`){var c=void 0;for(var l in s)typeof s[l]!=`number`||ut.test(l)||(c||=s=ct({},s),s[l]+=`px`)}else if(o==`defaultValue`&&`value`in t&&t.value==null)o=`value`;else if(o==`download`&&!0===s)s=``;else if(o==`translate`&&s===`no`)s=!1;else if(o[0]==`o`&&o[1]==`n`){var u=o.toLowerCase();u==`ondoubleclick`?o=`ondblclick`:u!=`onchange`||n!=`input`&&n!=`textarea`||gt(t.type)?u==`onfocus`?o=`onfocusin`:u==`onblur`&&(o=`onfocusout`):u=o=`oninput`,u==`oninput`&&r[o=u]&&(o=`oninputCapture`)}else i&&pt.test(o)?o=o.replace(mt,`-$&`).toLowerCase():s===null&&(s=void 0);r[o]=s}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=a(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=a(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",vt)):t.className&&(r.class=r.className=t.className),e.props=r})(e);else if(typeof e.type==`function`&&(`ref`in e.props&&`prototype`in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=ct({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!(`ref`in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=ft,yt&&yt(e)};function bt(e,t,n){if(e){var r=e.__c&&e.__c.__H;r&&(r.__.forEach(function(e){e.__P!=null&&(typeof e.__c==`function`&&e.__c(),e.__c=e.__H=void 0)}),r.__h=e.__c.__h=[]),typeof e.type==`string`&&(e.__u|=8),(e=ct({constructor:void 0},e)).__c!=null&&(e.__c.__P==n&&(e.__c.__P=t),e.__c.__g|=4,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return bt(e,t,n)})}return e}function xt(e,t,n){return e&&n&&(typeof e.type==`string`&&(e.__u|=1),e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return xt(e,t,n)}),e.__c&&e.__c.__P==t&&(e.__e&&n.appendChild(e.__e),e.__c.__g|=4,e.__c.__P=n)),e}function St(){function e(){this.__u=0,this.o=null,this.__b=null}return function(){var e=r.__e;r.__e=function(t,n,r,i){if(t.then){for(var a,o=n;o=o.__;)if((a=o.__c)&&a.__c)return r&&!r.__c&&(n.__c.__H=void 0),a.__c(t,n)}e(t,n,r,i)};var t=r.unmount;r.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),t&&t(e)}}(),(e.prototype=new f).__c=function(e,t){var n=this,r=t.__c;this.o??=[],this.o.push(r);var i=!1,a=function(){!i&&n.__P&&(i=!0,r.__R=null,s())};r.__R=a;var o=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=xt(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.o.pop();)t.__P=o,t.forceUpdate()}};this.__u++||32&t.__u||this.setState({__a:this.__b=this.__v.__k[0]}),e.then(a,a)},e.prototype.componentWillUnmount=function(){this.o=[]},e.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement(`div`),i=this.__v.__k[0].__c;this.__v.__k[0]=bt(this.__b,r,i.__O=i.__P)}this.__b=null}return[n(c,null,t.__a?null:e.children),t.__a&&n(c,null,e.fallback)]},e}var Ct=St();function wt(e){var t,r,i,a=null;function o(o){if(t||(t=e()).then(function(e){e&&(a=e.default||e),i=!0},function(e){r=e,i=!0}),r)throw r;if(!i)throw t;return a?n(a,o):null}return o.displayName=`Lazy`,o}var Tt=`nhnote.ui`,Et={v:1,tab:`timeline`,focusYear:645,focusFrom:`init`,level:1,scrollX:0,weakFilter:0,redSheet:!1,weakPen:!1,openTermId:null,dismissed:{},notesFolder:null,openNoteId:null,weakSeg:`list`,groupFilter:null,openGroupId:null,openWeakMemoId:null,showArrows:!0,mapView:{lon:128,lat:36,z:9e3},mapLayers:{terr:!0,borders:!1,relief:!0,pins:!0,pinsByYear:!0}};function Dt(){try{let e=localStorage.getItem(Tt);if(e){let t=JSON.parse(e);if(t&&t.v===1)return{...Et,...t}}}catch{}return{...Et}}var B=o(Dt()),V=null;function Ot(){V&&=(clearTimeout(V),null);try{localStorage.setItem(Tt,JSON.stringify(B.value))}catch{}}d(()=>{B.value,V&&clearTimeout(V),V=setTimeout(Ot,250)});function H(e){B.value={...B.value,...e}}function kt(e,t){let n=Math.round(e);(n!==B.value.focusYear||t!==B.value.focusFrom)&&(B.value={...B.value,focusYear:n,focusFrom:t})}var At=o(null),jt=0;function U(e,t={}){At.value={year:e,...t,seq:++jt}}var Mt=o(null),Nt=o(null),Pt=o(null),Ft=o(!1),It=null;function Lt(){if(!(`serviceWorker`in navigator))return;let e=!1;navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.register(`./sw.js`,{scope:`./`}).then(e=>{let t=()=>{e.waiting&&navigator.serviceWorker.controller&&(It=e.waiting,Ft.value=!0)};t(),e.addEventListener(`updatefound`,()=>{let n=e.installing;n?.addEventListener(`statechange`,()=>{n.state===`installed`&&t()})}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&e.update().catch(()=>{})}),setInterval(()=>e.update().catch(()=>{}),36e5)}).catch(()=>{})}async function Rt(){await h.flush(),Ot(),It?It.postMessage(`SKIP_WAITING`):location.reload()}function zt(){let e=/iPhone|iPad|iPod/.test(navigator.userAgent),t=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;return e&&!t}var Bt={table:`<svg
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
</svg>`,eraser:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eraser"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
  <path d="M18 13.3l-6.3 -6.3" />
</svg>`,highlight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-highlight"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M12.5 5.5l4 4" />
  <path d="M4.5 13.5l4 4" />
  <path d="M21 15v4h-8l4 -4l4 0" />
</svg>`,textColor:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-text-color"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15v-7a3 3 0 0 1 6 0v7" />
  <path d="M9 11h6" />
  <path d="M5 19h14" />
</svg>`,arrowsH:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 8l-4 4l4 4" />
  <path d="M17 8l4 4l-4 4" />
  <path d="M3 12l18 0" />
</svg>`},Vt=new Map,Ht=e=>e.replace(/\s(class|width|height)="[^"]*"/g,``).replace(`stroke-width="2"`,`stroke-width="1.8"`).replace(`<svg`,`<svg aria-hidden="true" focusable="false"`);function W({name:e,size:t}){let n=Vt.get(e);return n||(n=Ht(Bt[e]),Vt.set(e,n)),T(`span`,{class:`ic`,style:t?{width:t+`px`,height:t+`px`}:void 0,dangerouslySetInnerHTML:{__html:n}})}var G=o([]),Ut=0;function K(e,t={}){let n={id:++Ut,text:e,action:t.action,tone:t.tone??`normal`,ms:t.ms??(t.action?4500:2600),key:t.key};G.value=[...(t.key?G.value.filter(e=>e.key!==t.key):G.value).slice(-2),n],setTimeout(()=>{G.value=G.value.filter(e=>e.id!==n.id)},n.ms)}function Wt(){return T(`div`,{class:`toasts`,"aria-live":`polite`,children:G.value.map(e=>T(`div`,{class:`toast ${e.tone===`error`?`err`:``}`,children:[T(`span`,{class:`t`,children:e.text}),e.action&&T(`button`,{class:`tbtn`,onClick:()=>{e.action.run(),G.value=G.value.filter(t=>t.id!==e.id)},children:e.action.label})]},e.id))})}var Gt=o(null);function q(e){return new Promise(t=>{Gt.value={...e,resolve:t}})}function Kt(){let e=Gt.value;if(!e)return null;let t=t=>{Gt.value=null,e.resolve(t)};return T(`div`,{class:`dlg-back`,onClick:e=>{e.target===e.currentTarget&&t(!1)},children:T(`div`,{class:`dlg`,role:`dialog`,"aria-modal":`true`,children:[T(`h3`,{children:e.title}),e.body&&T(`div`,{class:`dlg-body`,children:e.body}),T(`div`,{class:`dlg-btns`,children:[T(`button`,{class:`btn`,onClick:()=>t(!1),children:e.cancel??`やめる`}),T(`button`,{class:`btn ${e.danger?`danger`:`primary`}`,onClick:()=>t(!0),children:e.ok})]})]})})}function qt(){let[e,t]=u(0);return l(()=>{let e=window.visualViewport;if(!e)return;let n=()=>t(Math.max(0,window.innerHeight-e.height-e.offsetTop));return e.addEventListener(`resize`,n),e.addEventListener(`scroll`,n),()=>{e.removeEventListener(`resize`,n),e.removeEventListener(`scroll`,n)}},[]),e}function J(t){let[n,r]=u(t.full?`full`:`half`),[i,a]=u(0),[o,s]=u(t.open),[c,d]=u(!1),f=e(null),p=qt();if(l(()=>{if(!t.open)return;let e=e=>{e.key===`Escape`&&t.onClose()};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[t.open,t.onClose]),l(()=>{if(t.open)s(!0),d(!1),r(t.full?`full`:`half`);else if(o){d(!0);let e=setTimeout(()=>{s(!1),d(!1)},220);return()=>clearTimeout(e)}},[t.open]),!o)return null;let m=e=>{f.current={y:e.clientY,t:performance.now()},e.currentTarget.setPointerCapture(e.pointerId)},h=e=>{f.current&&a(e.clientY-f.current.y)},g=e=>{if(!f.current)return;let i=e.clientY-f.current.y,o=i/Math.max(1,performance.now()-f.current.t);f.current=null,a(0),i>120||o>.6?n===`full`&&i<260&&o<1.2?r(`half`):t.onClose():(i<-60||o<-.5)&&r(`full`)};return T(`div`,{class:`sheet-layer ${c?`closing`:``}`,children:[T(`div`,{class:`sheet-back`,onClick:t.onClose}),T(`div`,{class:`sheet ${n} ${t.class??``}`,style:{transform:i?`translateY(${Math.max(i,n===`full`?0:-200)}px)`:void 0,transition:i?`none`:void 0,bottom:p?p+`px`:void 0},role:`dialog`,"aria-modal":`true`,"aria-label":t.title,children:[T(`div`,{class:`sheet-grab`,onPointerDown:m,onPointerMove:h,onPointerUp:g,onPointerCancel:g,children:T(`span`,{})}),t.title&&T(`div`,{class:`sheet-title`,onPointerDown:m,onPointerMove:h,onPointerUp:g,children:[T(`h3`,{children:t.title}),T(`button`,{class:`iconbtn`,"aria-label":`閉じる`,onClick:t.onClose,children:T(W,{name:`x`})})]}),T(`div`,{class:`sheet-body`,children:t.children})]})]})}var Jt=e=>{switch(e){case`memo`:return{text:``};case`board`:return{items:[]};case`table`:return{rows:4,cols:3,header:1,cells:Array.from({length:4},()=>Array.from({length:3},()=>({text:``})))};case`diagram`:return{nodes:[],edges:[],grid:24};case`chart`:return{chartType:`line`,xLabel:`年`,yLabel:``,unit:``,series:[{name:`系列1`,points:[]}]};default:return}},Yt={timeline:`年表`,table:`表`,diagram:`図`,chart:`グラフ`,memo:`メモ`,board:`比較ボード`},Xt=e=>Math.max(0,...h.list(e).map(e=>e.order??0))+1;function Zt(e,t,n={}){let r=Date.now(),i={id:N(`n`),createdAt:r,updatedAt:r,kind:e,name:t.trim()||Yt[e],tags:[],order:Xt(`notes`),folderId:n.folderId,lastOpenedAt:r,author:`me`,...e===`timeline`?{columns:L.columns.map(e=>({...e}))}:{content:n.content??Jt(e)},...n.when?{when:n.when}:{}};return h.tx(`${Yt[e]}「${i.name}」を作成`,e=>e.put(`notes`,i)),i}function Qt(e,t,n){let r=h.get(`notes`,e);r&&h.tx(n??`「${r.name}」を編集`,n=>{n.patch(`notes`,e,t)})}function $t(e){let t=h.get(`notes`,e);t&&h.tx(`開く`,e=>{e.put(`notes`,{...t,lastOpenedAt:Date.now()})},{history:!1})}function en(e,t,n=`中身を編集`){let r=h.get(`notes`,e);r&&h.tx(`「${r.name}」の${n}`,n=>{n.patch(`notes`,e,{content:t})})}function tn(e){let t=h.get(`notes`,e);if(!t)return null;let n=Date.now(),r={...structuredClone(t),id:N(`n`),name:`${t.name}のコピー`,createdAt:n,updatedAt:n,lastOpenedAt:n,pinned:!1,order:Xt(`notes`),author:`me`},i=new Map,a=[];for(let t of h.list(`terms`)){if(t.noteId!==e)continue;let o=N(`t`);i.set(t.id,o),a.push({...structuredClone(t),id:o,noteId:r.id,createdAt:n,updatedAt:n,author:`me`})}return h.tx(`「${t.name}」を複製`,t=>{t.put(`notes`,r);for(let e of a)t.put(`terms`,e);for(let a of h.list(`arrows`))a.noteId===e&&i.has(a.from)&&i.has(a.to)&&t.put(`arrows`,{...a,id:N(`a`),noteId:r.id,from:i.get(a.from),to:i.get(a.to),createdAt:n,updatedAt:n})}),r}function nn(e){let t=h.get(`notes`,e);return!t||e===`n-main`?null:P([{c:`notes`,id:e}],`「${t.name}」をゴミ箱へ`)}function rn(e,t){let n=Date.now(),r={id:N(`f`),createdAt:n,updatedAt:n,name:e.trim()||`フォルダ`,parentId:t,order:Xt(`folders`)};return h.tx(`フォルダ「${r.name}」を作成`,e=>e.put(`folders`,r)),r}function an(e,t){h.get(`folders`,e)&&t.trim()&&h.tx(`フォルダの名前を「${t.trim()}」に`,n=>{n.patch(`folders`,e,{name:t.trim()})})}function on(e){let t=h.get(`folders`,e);t&&h.tx(`フォルダ「${t.name}」を削除`,n=>{for(let r of h.list(`notes`))r.folderId===e&&n.patch(`notes`,r.id,{folderId:t.parentId});for(let r of h.list(`folders`))r.parentId===e&&n.patch(`folders`,r.id,{parentId:t.parentId});n.patch(`folders`,e,{deletedAt:Date.now(),trashGroup:N(`tg`)})})}function sn(e){let t=[],n=e?h.get(`folders`,e):void 0,r=0;for(;n&&r++<20;)t.unshift(n),n=n.parentId?h.get(`folders`,n.parentId):void 0;return t}function cn(e,t,n=`並べ替え`){h.tx(n,n=>{t.forEach((t,r)=>{let i=n.get(e,t);i&&i.order!==r&&n.patch(e,t,{order:r})})})}function ln(e,t){let n=Date.now(),r={id:N(`g`),createdAt:n,updatedAt:n,name:e.trim()||`グループ`,weakness:0,memo:``,members:t,order:Xt(`groups`),author:`me`};return h.tx(`グループ「${r.name}」を作成`,e=>e.put(`groups`,r)),r}function un(e,t,n){let r=h.get(`groups`,e);r&&h.tx(n??`グループ「${r.name}」を編集`,n=>{n.patch(`groups`,e,t)})}function dn(e,t){let n=h.get(`groups`,e);if(!n)return;let r=new Set(n.members.filter(e=>e.kind===`term`).map(e=>e.id)),i=t.filter(e=>!r.has(e)).map(e=>({kind:`term`,id:e}));i.length&&un(e,{members:[...n.members,...i]},`グループ「${n.name}」に${i.length}語を追加`)}function fn(e,t){let n=h.get(`groups`,e);n&&un(e,{members:n.members.filter(e=>e.kind!==`term`||e.id!==t)},`グループ「${n.name}」から外す`)}var pn=e=>h.list(`groups`).filter(t=>t.members.some(t=>t.kind===`term`&&t.id===e));function mn(e){let t=[];for(let n of e.members)if(n.kind===`term`){let e=h.get(`terms`,n.id);e&&!e.deletedAt&&t.push(e)}else for(let e of h.list(`terms`))e.noteId===n.noteId&&e.when.from>=n.from&&e.when.from<=n.to&&t.push(e);return t.sort((e,t)=>e.when.from-t.when.from)}function hn(e){let t=mn(e);if(!t.length)return e.when;let n=Math.min(...t.map(e=>e.when.from)),r=Math.max(...t.map(e=>e.when.to??e.when.from));return r>n?{from:n,to:r}:{from:n}}function gn(e={}){let t=Date.now(),n=Math.min(0,...h.list(`weakMemos`).map(e=>e.order)),r={id:N(`wm`),createdAt:t,updatedAt:t,title:``,body:``,causes:[],links:[],status:`open`,order:n-1,...e};return h.tx(`苦手メモを作成`,e=>e.put(`weakMemos`,r)),r}function _n(e,t,n=`苦手メモを編集`){h.get(`weakMemos`,e)&&h.tx(n,n=>{n.patch(`weakMemos`,e,t)})}var vn=e=>h.list(`weakMemos`).filter(t=>t.links.some(t=>t.kind===`term`&&t.id===e));function yn(e,t,n=`優先順位メモを編集`){h.get(`priorityMemos`,e)&&h.tx(n,n=>{n.patch(`priorityMemos`,e,t)})}var bn=(e,t)=>e.order-t.order;function xn(e,t,n){let r=e.map(e=>h.get(`terms`,e)).filter(e=>!!e&&!e.deletedAt);if(r.length<2)return null;r.sort((e,t)=>e.when.from-t.when.from);let i=[[`年`,e=>`${e.when.approx?`約`:``}${m(e.when.from)}${e.when.to!=null&&e.when.to!==e.when.from?`〜`+m(e.when.to):``}`],[`時代`,e=>b(e.when.from,L.eras).name],[`分野`,e=>h.get(`notes`,e.noteId)?.columns?.find(t=>t.id===e.col)?.name??``],[`政権担当`,e=>h.list(`terms`).filter(t=>t.noteId===e.noteId&&t.col===`ruler`&&t.shape===`span`&&t.when.from<=e.when.from&&(t.when.to??t.when.from)>=e.when.from).sort((e,t)=>t.importance-e.importance).slice(0,2).map(e=>e.name).join(`・`)],[`目的・背景`,()=>``],[`内容`,e=>e.desc],[`結果・影響`,()=>``],[`違い・見分け方`,()=>``],[`付箋`,e=>h.list(`stickies`).find(t=>t.anchor.kind===`term`&&t.anchor.termId===e.id)?.text??``]],a=[[{text:`項目`,bold:!0},...r.map(e=>({text:e.name,bold:!0,align:`center`}))],...i.map(([e,t])=>[{text:e,bold:!0,color:`gray`},...r.map(e=>({text:t(e)}))])],o={rows:a.length,cols:r.length+1,cells:a,header:1,headerCols:1},s=Math.min(...r.map(e=>e.when.from)),c=Math.max(...r.map(e=>e.when.to??e.when.from));return Zt(`table`,t??`比較：${r.map(e=>e.name).join(` × `)}`,{content:o,folderId:n,when:c>s?{from:s,to:c}:{from:s}})}var Sn=[`原因`,`結果`,`影響`,`反発`,`継承`,`対立`,`見直し`,`発展`,`契機`];function Cn(e,t,n,r){if(t===n)return null;let i=Date.now(),a={id:N(`a`),createdAt:i,updatedAt:i,noteId:e,from:t,to:n,label:r.trim()},o=h.get(`terms`,t)?.name,s=h.get(`terms`,n)?.name;return h.tx(`矢印「${o} → ${s}」を引く`,e=>e.put(`arrows`,a)),a}function wn(e,t,n=`矢印を編集`){h.get(`arrows`,e)&&h.tx(n,n=>{n.patch(`arrows`,e,t)})}function Tn(e){let t=h.get(`arrows`,e);t&&wn(e,{from:t.to,to:t.from},`矢印の向きを逆に`)}var En=e=>P([{c:`arrows`,id:e}],`矢印を削除`);function Dn(e,t,n,r=``,i=`yellow`){let a=Date.now(),o={id:N(`s`),createdAt:a,updatedAt:a,anchor:{kind:`timeline`,noteId:e,year:t,col:n},text:r,color:i,author:`me`};return h.tx(`表に付箋を貼る`,e=>e.put(`stickies`,o)),o}function On(e,t,n=`付箋を編集`){h.get(`stickies`,e)&&h.tx(n,n=>{n.patch(`stickies`,e,t)})}var kn=e=>P([{c:`stickies`,id:e}],`付箋を削除`),An=e=>h.list(`stickies`).filter(t=>t.anchor.kind===`timeline`&&t.anchor.noteId===e);function jn(e,t,n=`差し込みを変更`){h.get(`embeds`,e)&&h.tx(n,n=>{n.patch(`embeds`,e,t)})}var Mn=e=>P([{c:`embeds`,id:e}],`差し込みを外す`),Nn=e=>e.shape===`span`&&e.when.to!=null&&e.when.to>e.when.from,Pn=(e,t=!0)=>e.importance+(t&&e.weakness>0?1:0);function Fn(e,t,n=!0){return Pn(e,n)>=t.minImportance}var In=(e,t)=>t.importance-e.importance||e.when.from-t.when.from||e.name.localeCompare(t.name,`ja`),Ln=(e,t)=>e.when.from-t.when.from||t.importance-e.importance||e.name.localeCompare(t.name,`ja`);function Rn(e){let{terms:t,columns:n,level:r,eras:i,gengo:a}=e,o=new Set(n.map(e=>e.id)),s=r.bucket===`era`,c=s?0:r.bucket,l=e=>{let t=0;for(let n=0;n<i.length;n++)i[n].from<=e&&(t=n);return t},u=e=>s?l(e):S(e,c),d=new Map,f=e=>{let t=d.get(e);return t||(t={points:new Map},d.set(e,t)),t},p=[],h=0,g=0,_=new Map,v=new Set;for(let n of t){if(n.deletedAt||!o.has(n.col)||e.filter&&!e.filter(n))continue;if(!Fn(n,r,e.weakBonus??!0)){g++;continue}h++;let t=u(n.when.from),i=Nn(n)?u(n.when.to):t;if(i!==t)f(t),f(i),p.push({t:n,k0:t,k1:i});else{let e=f(t),r=e.points.get(n.col)??[];r.push(n),e.points.set(n.col,r)}c===1&&(n.when.approx&&n.when.label?_.has(t)||_.set(t,n.when.label):v.add(t))}let y=new Map;for(let t of e.embeds??[]){if(t.deletedAt||!o.has(t.col)||(t.importance??8)<r.minImportance)continue;let e=u(t.year);f(e);let n=y.get(e)??[];n.push(t),y.set(e,n)}for(let t of e.stickies??[])t.anchor.kind===`timeline`&&!t.deletedAt&&f(u(t.anchor.year));let x=[...d.keys()].sort((e,t)=>e-t),C=new Map(x.map((e,t)=>[e,t])),T={},ne=new Map,E=new Map;for(let e of p){let t=E.get(e.t.col)??[];t.push(e),E.set(e.t.col,t)}for(let[e,t]of E){t.sort((e,t)=>e.k0-t.k0||t.k1-e.k1||t.t.importance-e.t.importance);let n=[];for(let r of t){let t=C.get(r.k0),i=C.get(r.k1),a=n.findIndex(e=>e<t);if(a<0){if(n.length>=3){let t=d.get(r.k0),n=t.points.get(e)??[];n.push(r.t),t.points.set(e,n);continue}a=n.length,n.push(i)}else n[a]=i;for(let n=t;n<=i;n++){let o=x[n],s=ne.get(o);s||(s=new Map,ne.set(o,s));let c=s.get(e)??[];c.push({term:r.t,lane:a,start:n===t,end:n===i}),s.set(e,c)}}T[e]=n.length}let re=[],ie=null,D=null;for(let t of x){let o=d.get(t),l,u,f,p,h;if(s)h=i[t],l=h.from,u=h.to-1,f=h.name,p=h.label??`${m(h.from)}〜`;else{[l,u]=w(t,c),h=b(l,i);let n=te(t,c),o=!v.has(t)&&_.get(t);if(f=o?l<600?o:`${n.main}頃`:n.main,p=n.sub,r.gengo){let t=ee(l,a,e.gengoTo);t&&(p=c===1?t:`${t}〜`)}}let g=D==null;!s&&(!ie||ie.id!==h.id)&&(re.push({kind:`era`,key:`era:${h.id}:${t}`,era:h}),ie=h,g=!0);let x={},S=ne.get(t);if(g&&S)for(let e of S.values())for(let t of e)t.start||(t.cont=!0);let C=y.get(t)??[];for(let t of n){let n=(o.points.get(t.id)??[]).sort(In),i=r.maxPerCell??6,a=!!e.expanded?.has(`${t.id}|${l}`),s=a?1/0:i;x[t.id]={points:n.slice(0,s).sort(Ln),more:Math.max(0,n.length-s),less:a&&n.length>i,coarse:c!==1,spans:S?.get(t.id)??[],embeds:C.filter(e=>e.col===t.id&&e.display===`collapsed`)}}re.push({kind:`row`,key:`r:${t}`,bucket:t,from:l,to:u,label:f,sub:p,era:h,cells:x,gapBefore:D!=null&&!s&&t-D>1});for(let e of C)e.display===`expanded`&&re.push({kind:`embed`,key:`e:${e.id}`,embed:e,era:h,from:l});D=t}return{items:re,lanes:T,shown:h,hidden:g}}function zn(e,t){let n=-1;for(let r=0;r<e.length;r++){let i=e[r];if(i.kind===`row`){if(i.to>=Math.floor(t))return r;n=r}}return n}function Bn(e){return`${e.bucket===`era`?`時代ごと`:`${e.bucket}年刻み`}・重要度${e.minImportance}以上${e.gengo?`・元号`:``}`}var Y={HEAD_H:34,ERA_H:36,ROW_MIN:46,GAP_MARK:10,YEAR_W:68,CELL_PAD:6,GAP:4,CHIP_PAD_X:8,CHIP_PAD_Y:4,WEAK_EXTRA:5,LINE:20,MASK_W:84,LANE_W:8,YEAR_LABEL_LINE:20,YEAR_SMALL_SIZE:12,YEAR_SMALL_LINE:16,YEAR_SUB_LINE:14,YEAR_SUB_SIZE:10.5,YEAR_PAD_Y:8,CHIP_YEAR_LINE:14,BOTTOM_PAD:220,EMBED_H:300,CHIP_YEAR_SIZE:11,MORE_SIZE:13},Vn=[{tiers:[12.5,13,14,14.5,15],line:20,px:8,py:4,ys:11,yl:14,ms:13,mw:84,wk:5},{tiers:[11.5,12,12.5,13,13.5],line:18,px:7,py:3,ys:10.5,yl:13,ms:12,mw:74,wk:5},{tiers:[10.5,11,11.5,12,12],line:16,px:6,py:3,ys:10,yl:12,ms:11,mw:64,wk:4}],Hn=-1;function Un(e){if(e=Math.max(0,Math.min(Vn.length-1,e|0)),e===Hn)return;Hn=e;let t=Vn[e];Object.assign(Y,{LINE:t.line,CHIP_PAD_X:t.px,CHIP_PAD_Y:t.py,CHIP_YEAR_LINE:t.yl,MASK_W:t.mw,WEAK_EXTRA:t.wk,CHIP_YEAR_SIZE:t.ys,MORE_SIZE:t.ms}),t.tiers.forEach((e,t)=>{Yn[t+1]=[e,Yn[t+1][1]]}),ir.clear()}function Wn(){let e=Vn[Math.max(0,Hn)],t={"--lh":e.line+`px`,"--px":e.px+`px`,"--py":e.py+`px`,"--ys":e.ys+`px`,"--yl":e.yl+`px`,"--ms":e.ms+`px`,"--wk":e.wk+`px`};return e.tiers.forEach((e,n)=>{t[`--f${n+1}`]=e+`px`}),t}var Gn={ruler:140,event:150,policy:148,system:140,diplomacy:144,finance:132,society:136,industry:136,culture:148,situation:140,world:148},Kn=e=>e.width??Gn[e.id]??128;function qn(e,t){let n=new Map;for(let t of e){if(t.deletedAt)continue;let e=n.get(t.col)??[],[r,i]=Xn(Jn(Math.max(5,t.importance)));e.push(X(t.name,r,i)),n.set(t.col,e)}return t.map(e=>{if(e.width)return e.width;let t=(n.get(e.id)??[]).sort((e,t)=>e-t);if(t.length<5)return Gn[e.id]??140;let r=t[Math.min(t.length-1,Math.floor(t.length*.6))],i=Math.ceil(r+Y.CHIP_PAD_X*2+Y.CELL_PAD*2+Y.LANE_W+6),a=Y.LINE/20;return Math.max(Math.round(108*a),Math.min(Math.round(230*a),i))})}var Jn=e=>Math.max(1,Math.min(5,Math.ceil(e/2))),Yn={5:[15,800],4:[14.5,700],3:[14,500],2:[13,400],1:[12.5,400]},Xn=e=>Yn[e],Zn=null,Qn=`sans-serif`,$n=new Map;function er(e){Qn=e||`sans-serif`,$n.clear(),ir.clear()}function X(e,t,n){let r=`${t}|${n}|${e}`,i=$n.get(r);if(i!=null)return i;Zn||=(typeof document<`u`?document.createElement(`canvas`):null)?.getContext(`2d`)??null;let a;return Zn?(Zn.font=`${n} ${t}px ${Qn}`,a=Zn.measureText(e).width):a=[...e].length*t,$n.set(r,a),a}function tr(e,t,n,r){if(X(e,t,n)<=r)return 1;let i=1,a=0;for(let o of e){let e=X(o,t,n);a+e>r&&a>0?(i++,a=e):a+=e}return i}var nr=new Set([...`）)」』】〕〉》］]、。，．,.・：；！？!?ーぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ々〜～`]),rr=new Set([...`（(「『【〔〈《［[`]),ir=new Map;function ar(e,t,n,r){let i=[],a=[],o=0;for(let s of e){let e=X(s,t,n);if(o+e>r&&a.length>0){let e=[];for(nr.has(s)&&a.length>1&&(e=[a.pop()]);a.length>1&&rr.has(a[a.length-1]);)e.unshift(a.pop());i.push(a.join(``)),a=[...e,s],o=a.reduce((e,r)=>e+X(r,t,n),0)}else a.push(s),o+=e}return a.length&&i.push(a.join(``)),i}function or(e,t,n,r){if(X(e,t,n)<=r)return[e];let i=`${t}|${n}|${Math.round(r)}|${e}`,a=ir.get(i);if(a)return a;let o=[...e],s=ar(o,t,n,r);for(let e=1;e<o.length;e++){if(o[e]!==`（`&&o[e]!==`(`&&o[e-1]!==`・`&&o[e-1]!==`、`&&o[e-1]!==`＝`)continue;let i=o.slice(0,e).join(``);if(X(i,t,n)>r)continue;let a=[i,...or(o.slice(e).join(``),t,n,r)];a.length<=s.length&&(s=a)}let c=s.length;if(c>=2&&[...s[c-1]].length===1){let e=[...s[c-2]],t=e[e.length-1];e.length>2&&!nr.has(t)&&!rr.has(e[e.length-2])&&(s=[...s.slice(0,c-2),e.slice(0,-1).join(``),t+s[c-1]])}return ir.set(i,s),s}function sr(e,t,n=!1){return n||Nn(e)?ur(e):!t||e.when.approx?``:e.when.from<0?`前${-e.when.from}`:String(e.when.from)}function cr(e,t,n,r=``){let i=e.weakness?Y.WEAK_EXTRA:0;if(n)return{w:Y.MASK_W+i,h:Y.LINE+Y.CHIP_PAD_Y*2,years:!1};let[a,o]=Xn(Jn(e.importance)),s=Y.CHIP_PAD_X*2+i,c=t-s,l=X(e.name,a,o);if(r){let n=X(r,Y.CHIP_YEAR_SIZE,500);if(l+5+n<=c)return{w:Math.ceil(l+5+n+s+1),h:Y.LINE+Y.CHIP_PAD_Y*2,years:`inline`};let i=or(e.name,a,o,c);return{w:Math.min(t,Math.ceil(Math.max(lr(i,a,o),n)+s+1)),h:i.length*Y.LINE+Y.CHIP_YEAR_LINE+Y.CHIP_PAD_Y*2,years:`below`,lines:i}}if(l<=c)return{w:Math.ceil(l+s+1),h:Y.LINE+Y.CHIP_PAD_Y*2,years:!1};let u=or(e.name,a,o,c);return{w:Math.min(t,Math.ceil(lr(u,a,o)+s+1)),h:u.length*Y.LINE+Y.CHIP_PAD_Y*2,years:!1,lines:u}}var lr=(e,t,n)=>e.reduce((e,r)=>Math.max(e,X(r,t,n)),0),ur=e=>{let t=e.when.from,n=e.when.to??t,r=e=>e<0?`前${-e}`:String(e);return t>0&&n>0&&Math.floor(t/100)===Math.floor(n/100)?`${r(t)}–${String(n).slice(-2)}`:`${r(t)}–${r(n)}`},dr=e=>e.more?`＋${e.more}`:e.less?`閉じる`:``,fr=e=>({w:Math.ceil(X(e,Y.MORE_SIZE,700)+Y.CHIP_PAD_X*2+1),h:Y.LINE+Y.CHIP_PAD_Y*2,years:!1});function pr(e){let t=[];for(let n of e.spans)(n.start||n.cont)&&t.push({t:n.term,span:!0,cont:!n.start});for(let n of e.points)t.push({t:n,span:!1,cont:!1});return t.sort((e,t)=>Number(t.cont)-Number(e.cont)||e.t.when.from-t.t.when.from||t.t.importance-e.t.importance)}var mr=()=>`差し込み`;function hr(e){mr=e}var gr=e=>mr(e);function _r(e,t){let n=Math.ceil(X(mr(e),13,600)+16+20+1);return n<=t?{w:n,h:28,years:!1}:{w:t,h:tr(mr(e),13,600,t-16-20)*20+8,years:!1}}function vr(e,t,n){let r=[];for(let n of e.embeds){let e=_r(n,t);r.push({kind:`embed`,id:n.id,...e})}for(let i of pr(e)){let a=cr(i.t,t,n(i.t),sr(i.t,!!e.coarse,i.span));r.push({kind:i.span?`span`:`term`,id:i.t.id,...a})}let i=dr(e);if(i){let e=fr(i);r.push({kind:`more`,id:`more`,...e})}return r}function yr(e,t){let n=[];if(!e.length)return{pos:n,height:0};let r=0,i=0,a=0;for(let o of e)i>0&&i+Y.GAP+o.w>t&&(r+=a+Y.GAP,i=0,a=0),n.push({x:i>0?i+Y.GAP:0,y:r}),i+=(i>0?Y.GAP:0)+o.w,a=Math.max(a,o.h);return{pos:n,height:r+a}}function br(e,t){return e-Y.CELL_PAD*2-t-1}function xr(e){if(!e||!e.spans.length)return 0;let t=0;for(let n of e.spans)n.lane>t&&(t=n.lane);return(t+1)*Y.LANE_W+3}function Sr(e,t,n,r){let i=r??t.map(Kn),a=[],o=Y.YEAR_W;for(let e of i)a.push(o),o+=e;let s=e.items.length,c=new Float64Array(s+1),l=new Float64Array(s),u=0;for(let r=0;r<s;r++){let a=e.items[r],o=a.kind===`era`?Y.ERA_H:a.kind===`embed`?Y.EMBED_H:wr(a,t,i,n);c[r]=u,l[r]=o,u+=o}return c[s]=u,{offsets:c,heights:l,total:u,colX:a,colW:i,totalW:o}}function Cr(e){return X(e,15.5,800)>Y.YEAR_W-16}function wr(e,t,n,r){let i=Y.ROW_MIN,a=Cr(e.label)?tr(e.label,Y.YEAR_SMALL_SIZE,700,Y.YEAR_W-16)*Y.YEAR_SMALL_LINE:Y.YEAR_LABEL_LINE,o=e.sub?tr(e.sub,Y.YEAR_SUB_SIZE,500,Y.YEAR_W-16):0;return i=Math.max(i,Y.YEAR_PAD_Y*2+a+o*Y.YEAR_SUB_LINE),t.forEach((t,a)=>{let o=e.cells[t.id];if(!o)return;let s=br(n[a],xr(o)),c=yr(vr(o,s,r),s).height;c&&(i=Math.max(i,c+Y.CELL_PAD*2+1))}),i+(e.gapBefore?Y.GAP_MARK:0)}function Tr(e,t){let n=0,r=e.heights.length-1;if(r<0)return-1;for(;n<r;){let i=n+r+1>>1;e.offsets[i]<=t?n=i:r=i-1}return n}function Er(e,t,n,r){let i=r(e,n);if(i<0)return 0;let a=e[i],o=a.to-a.from+1,s=n>=a.from?Math.min(.999,(n-a.from)/o):0;return t.offsets[i]+s*t.heights[i]}function Dr(e,t,n){let r=Tr(t,Math.max(0,n));if(r<0)return null;for(;r<e.length&&e[r].kind!==`row`;)r++;if(r>=e.length){for(r=e.length-1;r>=0&&e[r].kind!==`row`;)r--;if(r<0)return null}let i=e[r],a=Math.max(0,Math.min(.999,(n-t.offsets[r])/t.heights[r]));return i.from+a*(i.to-i.from+1)}function Or(e,t,n,r,i){let a=new Map,o=e.gapBefore?Y.GAP_MARK:0;return n.forEach((n,s)=>{let c=e.cells[n.id];if(!c)return;let l=xr(c),u=br(r.colW[s],l),d=vr(c,u,i),{pos:f}=yr(d,u);d.forEach((e,n)=>{(e.kind===`span`||e.kind===`term`)&&a.set(e.id,{x:r.colX[s]+Y.CELL_PAD+l+f[n].x,y:t+o+Y.CELL_PAD+f[n].y,w:e.w,h:e.h})});for(let e of c.spans)a.has(e.term.id)||a.set(e.term.id,{x:r.colX[s]+Y.CELL_PAD+e.lane*Y.LANE_W+1,y:t+o+4,w:6,h:20})}),a}var kr=o(new Set),Ar=o(!1);function jr(e,t){return t.cols.length&&!t.cols.includes(e.col)?t.manual&&!!e.hide:!!(t.manual&&e.hide||t.minImportance>0&&e.importance>=t.minImportance||t.minWeakness>0&&e.weakness>=t.minWeakness)}function Mr(e,t,n,r){return!e||r?e=>!1:e=>jr(e,t)&&!n.has(e.id)}var Nr=new Map;function Pr(e){Nr.set(e,Date.now());let t=new Set(kr.value);t.add(e),kr.value=t}function Fr(){kr.value=new Set,Ar.value=!1}function Ir(){Ar.value=!0}function Lr(e,t){let n=[];e.minImportance>0&&n.push(`重要度${e.minImportance}以上`),e.minWeakness>0&&n.push(`苦手${e.minWeakness}以上`),e.manual&&n.push(`個別指定`);let r=e.cols.length?`（${e.cols.map(t).join(`・`)}）`:``;return(n.join(`・`)||`対象なし`)+r}function Rr(){let e=h.undo();e?K(`元に戻しました：${e}`,{action:{label:`やり直す`,run:zr},key:`undo`}):K(`元に戻せる操作がありません`)}function zr(){let e=h.redo();e&&K(`やり直しました：${e}`,{action:{label:`元に戻す`,run:Rr},key:`undo`})}function Z(e,t){K(e,{action:{label:`元に戻す`,run:Rr},key:t})}var Br={10:`最重要`,9:`共通テスト頻出`,8:`共通テストで出る`,7:`二次・私大で頻出`,6:`二次・私大で出る`,5:`標準`,4:`難関私大で時々`,3:`難関私大でたまに`,2:`難関私大でまれ`,1:`細かい知識`};function Vr({preset:t,onClose:n,columns:r,noteId:i=fe}){let[a,o]=u(``),[s,c]=u(`event`),[d,f]=u(``),[p,m]=u(``),[h,g]=u(5),[_,v]=u(``),y=e(null);l(()=>{t&&(o(``),m(``),v(``),c(t.col??localStorage.getItem(`nhnote.lastCol`)??`event`),f(t.year==null?``:String(t.year)),setTimeout(()=>y.current?.focus(),250))},[t]);let b=()=>{let e=parseInt(d,10),t=p.trim()?parseInt(p,10):void 0;if(!a.trim()){v(`名前を入れてください`);return}if(Number.isNaN(e)){v(`年を数字で入れてください（紀元前は -300 のように）`);return}if(t!=null&&(Number.isNaN(t)||t<e)){v(`終わりの年は始まりより後にしてください`);return}let r=he({name:a,col:s,when:t==null?{from:e}:{from:e,to:t},importance:h,noteId:i});try{localStorage.setItem(`nhnote.lastCol`,s)}catch{}n(),U(e,{termId:r.id}),Z(`「${r.name}」を追加しました`)};return T(J,{open:!!t,onClose:n,title:`用語を追加`,full:!0,children:T(`div`,{class:`form`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{ref:y,value:a,placeholder:`例：乙巳の変`,onInput:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&b()}})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`列`}),T(`select`,{value:s,onChange:e=>c(e.target.value),children:r.map(e=>T(`option`,{value:e.id,children:[e.name,e.visible?``:`（非表示の列）`]},e.id))})]}),T(`div`,{class:`fld-row`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`年`}),T(`input`,{inputMode:`numeric`,value:d,placeholder:`645`,onInput:e=>f(e.target.value)})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`終わり（期間なら）`}),T(`input`,{inputMode:`numeric`,value:p,placeholder:`なし`,onInput:e=>m(e.target.value)})]})]}),T(`div`,{class:`f-label`,children:[`重要度`,T(`small`,{children:Br[h]})]}),T(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(e=>T(`button`,{"aria-label":`重要度${e}`,class:e<=h?`on`:``,style:{height:10+e*2.2+`px`},onClick:()=>g(e)},e)),T(`div`,{class:`imp-txt`,children:T(`b`,{children:h})})]}),_&&T(`p`,{class:`err`,children:_}),T(`button`,{class:`btn primary wide`,onClick:b,children:[T(W,{name:`plus`}),`追加する`]}),T(`p`,{class:`hint`,children:`終わりの年を入れると「期間」として、年表に縦線で表示されます。表の空いたマスを長押ししても、その場所に追加できます。`})]})})}function Hr({open:e,onClose:t,level:n,onLevel:r,noteId:i=fe}){h.rev.value;let a=h.get(`notes`,i)?.columns??[],o=h.settings.zoomLevels,[s,l]=u(``),d=(e,t)=>{let n=[...a],r=e+t;r<0||r>=n.length||([n[e],n[r]]=[n[r],n[e]],ke(i,n,`列の並びを変更`))},f=e=>{let t=a.map((t,n)=>n===e?{...t,visible:!t.visible}:t);t.some(e=>e.visible)&&ke(i,t,`列「${a[e].name}」を${a[e].visible?`非表示`:`表示`}に`)},p=()=>{let e=s.trim();e&&(ke(i,[...a,{id:N(`col`),name:e,visible:!0}],`列「${e}」を追加`),l(``))};return T(J,{open:e,onClose:t,title:`表示`,full:!0,children:T(`div`,{class:`form`,children:[T(`div`,{class:`f-label`,children:[`ズーム`,T(`small`,{children:`ピンチでも変えられます`})]}),T(`input`,{type:`range`,class:`range`,min:0,max:o.length-1,step:1,value:o.length-1-n,onInput:e=>r(o.length-1-e.target.value),"aria-label":`ズームの段階`}),T(`div`,{class:`range-ends`,children:[T(`span`,{children:`粗く（時代ごと）`}),T(`span`,{children:`細かく（1年ごと）`})]}),T(`p`,{class:`now`,children:[`いま：`,Bn(o[n])]}),T(`div`,{class:`f-label`,children:[`文字の大きさ`,T(`small`,{children:`小さくすると横に多くの列が並びます`})]}),T(`div`,{class:`seg three`,children:[`標準`,`小さめ`,`最小`].map((e,t)=>T(`button`,{class:(h.settings.tlText??0)===t?`on`:``,onClick:()=>h.setSettings({tlText:t}),children:e},t))}),T(`div`,{class:`f-label`,children:`苦手で絞り込み`}),T(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>T(`button`,{class:B.value.weakFilter===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>H({weakFilter:e}),children:e?T(c,{children:[T(`i`,{}),e,`以上`]}):`すべて`},e))}),T(`label`,{class:`switch-row`,children:[T(`span`,{children:`苦手を付けた用語は、縮小しても少し長く残す`}),T(`input`,{type:`checkbox`,class:`switch`,checked:h.settings.weakBonus,onChange:e=>h.setSettings({weakBonus:e.target.checked})})]}),T(`div`,{class:`f-label`,children:[`列`,T(`small`,{children:`表示・並び替え・追加`})]}),T(`div`,{class:`list-box`,children:a.map((e,t)=>T(`div`,{class:`lrow`,children:[T(`input`,{type:`checkbox`,class:`switch sm`,checked:e.visible,onChange:()=>f(t),"aria-label":`${e.name}を表示`}),T(`span`,{class:`nm ${e.visible?``:`off`}`,children:e.name}),T(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>d(t,-1),disabled:t===0,children:T(W,{name:`chevronUp`})}),T(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>d(t,1),disabled:t===a.length-1,children:T(W,{name:`chevronDown`})})]},e.id))}),T(`div`,{class:`add-row`,children:[T(`input`,{value:s,placeholder:`新しい列の名前`,onInput:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&p()}}),T(`button`,{class:`btn`,onClick:p,children:[T(W,{name:`plus`}),`追加`]})]}),T(`p`,{class:`hint`,children:`「西暦・元号・時代」は左端に固定で表示されます。`})]})})}function Ur({open:e,onClose:t,columns:n}){h.rev.value;let r=h.settings.redSheet,i=e=>h.setSettings({redSheet:{...r,...e}});return T(J,{open:e,onClose:t,title:`赤シートで隠すもの`,full:!0,children:T(`div`,{class:`form`,children:[T(`div`,{class:`f-label`,children:[`重要度がこれ以上`,T(`small`,{children:r.minImportance?`${r.minImportance}以上`:`使わない`})]}),T(`div`,{class:`chips-row`,children:[0,10,9,8,7,6,5,4,3,1].map(e=>T(`button`,{class:`chip ${r.minImportance===e?`on`:``}`,onClick:()=>i({minImportance:e}),children:e?`${e}以上`:`なし`},e))}),T(`div`,{class:`f-label`,children:`苦手度がこれ以上`}),T(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>T(`button`,{class:r.minWeakness===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>i({minWeakness:e}),children:e?T(c,{children:[T(`i`,{}),e,`以上`]}):`なし`},e))}),T(`label`,{class:`switch-row`,children:[T(`span`,{children:`個別に指定した用語も隠す`}),T(`input`,{type:`checkbox`,class:`switch`,checked:r.manual,onChange:e=>i({manual:e.target.checked})})]}),T(`div`,{class:`f-label`,children:[`対象の列`,T(`small`,{children:r.cols.length?`${r.cols.length}列だけ`:`すべての列`})]}),T(`div`,{class:`chips-row`,children:n.map(e=>{let t=r.cols.includes(e.id);return T(`button`,{class:`chip ${t?`on`:``}`,onClick:()=>i({cols:t?r.cols.filter(t=>t!==e.id):[...r.cols,e.id]}),children:e.name},e.id)})}),T(`p`,{class:`hint`,children:`隠した語は、どれも同じ幅の赤い板になります（文字数や形から答えが分からないように）。板をタップすると1つずつめくれます。`})]})})}function Wr({items:t,getId:n,render:r,onReorder:i,class:a,gap:o=0}){let s=e(null),[c,d]=u(null),f=e({id:``,y0:0,from:0,tops:[],heights:[],timer:null,x0:0,active:!1,pid:0,el:null}),p=t.map(n),m=e(0);l(()=>{let e=s.current;if(!e)return;let t=e=>{f.current.active&&e.preventDefault()};e.addEventListener(`touchmove`,t,{passive:!1});let n=e=>{Date.now()-m.current<300&&(e.stopPropagation(),e.preventDefault())};return e.addEventListener(`click`,n,!0),()=>{e.removeEventListener(`touchmove`,t),e.removeEventListener(`click`,n,!0)}},[]);let h=(e,t)=>{if(t<0||t>=p.length||e===t)return;let n=[...p],[r]=n.splice(e,1);n.splice(t,0,r),i(n)},g=(e,t,n)=>{if(e.target.closest(`input, textarea, select, [contenteditable="true"], .no-drag`))return;let r=f.current;r.id=t,r.y0=e.clientY,r.x0=e.clientX,r.from=n,r.active=!1,r.pid=e.pointerId,r.el=e.currentTarget,r.timer&&clearTimeout(r.timer),r.timer=setTimeout(()=>{let e=[...s.current.querySelectorAll(`:scope > .sort-row`)];r.tops=e.map(e=>e.getBoundingClientRect().top),r.heights=e.map(e=>e.getBoundingClientRect().height),r.active=!0;try{r.el?.setPointerCapture(r.pid)}catch{}navigator.vibrate?.(12),d({id:t,dy:0,target:n})},400)},_=e=>{let t=f.current;if(!t.active){t.timer&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)>8&&(clearTimeout(t.timer),t.timer=null);return}let n=e.clientY-t.y0,r=t.tops[t.from]+t.heights[t.from]/2+n,i=t.from;for(let e=0;e<t.tops.length;e++){let n=t.tops[e]+t.heights[e]/2;if(e<t.from&&r<n){i=e;break}e>t.from&&r>n&&(i=e)}d({id:t.id,dy:n,target:i})},v=()=>{let e=f.current;e.timer&&=(clearTimeout(e.timer),null),e.active&&c&&(m.current=Date.now(),h(e.from,c.target)),e.active=!1,d(null)},y=e=>{if(!c)return 0;let t=f.current,n=(t.heights[t.from]??0)+o;return e>t.from&&e<=c.target?-n:e<t.from&&e>=c.target?n:0};return T(`div`,{class:`sortable ${a??``} ${c?`dragging`:``}`,ref:s,style:o?{display:`flex`,flexDirection:`column`,gap:o+`px`}:void 0,children:t.map((e,n)=>{let i=p[n],a=c?.id===i;return T(`div`,{class:`sort-row ${a?`lifted`:``}`,style:{transform:a?`translateY(${c.dy}px) scale(1.02)`:`translateY(${y(n)}px)`,transition:a?`none`:void 0},onPointerDown:e=>g(e,i,n),onPointerMove:_,onPointerUp:v,onPointerCancel:v,children:r(e,{index:n,count:t.length,dragging:a,up:()=>h(n,n-1),down:()=>h(n,n+1)})},i)})})}var Gr=()=>({text:``});function Kr(e){let t=Array.from({length:e.rows},(t,n)=>Array.from({length:e.cols},(t,r)=>({...e.cells[n]?.[r]??Gr()})));return{...e,cells:t,colW:e.colW?Array.from({length:e.cols},(t,n)=>e.colW[n]??120):void 0}}function qr(e,t,n,r){let i=Kr(e);i.cells[t][n]={...i.cells[t][n],...r};for(let e of Object.keys(i.cells[t][n]))i.cells[t][n][e]===void 0&&delete i.cells[t][n][e];return i}function Jr(e,t){let n=Kr(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e<t&&e+a>t&&(i.rs=a+1)}return n.cells.splice(t,0,Array.from({length:n.cols},Gr)),n.rows+=1,n.header&&t<n.header&&(n.header+=1),n}function Yr(e,t){if(e.rows<=1)return e;let n=Kr(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e===t&&a>1&&t+1<n.rows?n.cells[t+1][r]={...i,rs:a-1}:e<t&&e+a>t&&(i.rs=a-1)}return n.cells.splice(t,1),--n.rows,n.header&&t<n.header&&--n.header,ei(n)}function Xr(e,t){let n=Kr(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r<t&&r+a>t&&(i.cs=a+1)}for(let e of n.cells)e.splice(t,0,Gr());return n.cols+=1,n.colW&&n.colW.splice(t,0,120),n.headerCols&&t<n.headerCols&&(n.headerCols+=1),n}function Zr(e,t){if(e.cols<=1)return e;let n=Kr(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r===t&&a>1&&t+1<n.cols?n.cells[e][t+1]={...i,cs:a-1}:r<t&&r+a>t&&(i.cs=a-1)}for(let e of n.cells)e.splice(t,1);return--n.cols,n.colW&&n.colW.splice(t,1),n.headerCols&&t<n.headerCols&&--n.headerCols,ei(n)}function Qr(e,t,n,r){let i=Kr(e),a=i.cells[t][n],o=a.rs??1,s=a.cs??1,c=r===`right`?t:t+o,l=r===`right`?n+s:n;if(c>=i.rows||l>=i.cols)return null;let u=i.cells[c][l];if(r===`right`&&(u.rs??1)!==o||r===`down`&&(u.cs??1)!==s)return null;let d=[a.text,u.text].filter(e=>e.trim()).join(r===`right`?` `:`
`);return r===`right`?a.cs=s+(u.cs??1):a.rs=o+(u.rs??1),a.text=d,i.cells[c][l]=Gr(),i}function $r(e,t,n){return qr(e,t,n,{rs:void 0,cs:void 0})}function ei(e){for(let t=0;t<e.rows;t++)for(let n=0;n<e.cols;n++){let r=e.cells[t][n];r.rs&&t+r.rs>e.rows&&(r.rs=e.rows-t),r.cs&&n+r.cs>e.cols&&(r.cs=e.cols-n),r.rs===1&&delete r.rs,r.cs===1&&delete r.cs}return e}function ti(e){let t=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.startsWith(`|`)||e.includes(`|`)&&e.split(`|`).length>2);if(t.length<2)return null;let n=t.filter(e=>!/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(e)).map(e=>e.replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())),r=Math.max(...n.map(e=>e.length)),i=t.findIndex(e=>/^\|?\s*:?-{2,}/.test(e));return{rows:n.length,cols:r,cells:n.map(e=>Array.from({length:r},(t,n)=>({text:e[n]??``}))),header:i>0?i:1}}var ni=120,ri=e=>Array.from({length:e.cols},(t,n)=>e.colW?.[n]??ni);function ii(e,t){let n=Kr(e);return n.colW=ri(e).map(e=>Math.round(Math.max(48,Math.min(520,e*t)))),n}function ai(e){let t=0;for(let n of e)t+=/[\u0000-ÿ｡-ﾟ]/.test(n)?.55:1;return t}var oi={[-2]:.72,[-1]:.86,1:1.22,2:1.5};function si(e){let t=Kr(e);return Array.from({length:t.cols},(e,n)=>{let r=2;for(let e=0;e<t.rows;e++){let i=t.cells[e][n];if((i.cs??1)>1)continue;let a=[];if(i.runs?.length){let e={text:``,em:0};for(let t of i.runs)t.t.split(`
`).forEach((n,r)=>{r&&(a.push(e),e={text:``,em:0}),e.em+=ai(n)*(oi[t.s??0]??1)*(t.b?1.04:1)});a.push(e)}else for(let e of i.text.replace(/[〔〕]|\*\*/g,``).split(`
`))a.push({text:e,em:ai(e)*(i.bold?1.04:1)});let o=e<(t.header??0)||n<(t.headerCols??0);for(let e of a)r=Math.max(r,e.em*(o?1.05:1))}return Math.round(Math.max(64,Math.min(300,Math.min(16,r)*14.5+26)))})}var ci=[{key:`red`,name:`赤`,sheet:!0},{key:`orange`,name:`橙`,sheet:!0},{key:`pink`,name:`桃`,sheet:!0},{key:`brown`,name:`茶`},{key:`green`,name:`緑`},{key:`teal`,name:`青緑`},{key:`blue`,name:`青`},{key:`navy`,name:`紺`},{key:`purple`,name:`紫`},{key:`gray`,name:`灰`}],li=[{key:`yellow`,name:`黄`},{key:`orange`,name:`橙`},{key:`pink`,name:`桃`},{key:`red`,name:`赤`},{key:`purple`,name:`紫`},{key:`blue`,name:`青`},{key:`sky`,name:`水色`},{key:`green`,name:`緑`},{key:`lime`,name:`黄緑`},{key:`gray`,name:`灰`}],ui=[{s:-2,name:`極小`,em:.72},{s:-1,name:`小`,em:.86},{s:0,name:`標準`,em:1},{s:1,name:`大`,em:1.22},{s:2,name:`特大`,em:1.5}],di=new Set(ci.filter(e=>e.sheet).map(e=>e.key)),fi=e=>!!e.h||!!e.c&&di.has(e.c);function pi(e){let t={t:e.t};return e.b&&(t.b=!0),e.c&&(t.c=e.c),e.m&&(t.m=e.m),e.s&&(t.s=e.s),e.h&&(t.h=!0),t}var mi=e=>`${+!!e.b}|${e.c??``}|${e.m??``}|${e.s??0}|${+!!e.h}`;function hi(e){let t=[];for(let n of e){if(!n.t)continue;let e=pi(n),r=t[t.length-1];r&&mi(r)===mi(e)?r.t+=e.t:t.push(e)}return t}var gi=e=>e.reduce((e,t)=>e+t.t.length,0),_i=e=>e.map(e=>e.t).join(``),vi=e=>e.every(e=>!e.b&&!e.c&&!e.m&&!e.s&&!e.h);function yi(e){let t=``,n=!1;for(let r of hi(e)){let e=fi(r);e&&!n&&(t+=`〔`,n=!0),!e&&n&&(t+=`〕`,n=!1),t+=r.t}return n?t+`〕`:t}function bi(e,t=!1){let n=new Map,r=/〔[^〔〕]*〕/g,i;for(;i=r.exec(e);)n.set(i.index,`h`),n.set(i.index+i[0].length-1,`h`);let a=[],o=/\*\*/g;for(;i=o.exec(e);)n.has(i.index)||a.push(i.index);for(let e=0;e+1<a.length;e+=2)n.set(a[e],`b`),n.set(a[e+1],`b`);let s=[],c=!1,l=!1;for(let r=0;r<e.length;r++){let i=n.get(r);if(i===`h`){c=!c;continue}if(i===`b`){l=!l,r++;continue}s.push({t:e[r],b:l||t||void 0,h:c||void 0})}return hi(s)}function xi(e){return e.some(e=>/〔[^〔〕]*〕/.test(e.t))?hi(e.flatMap(e=>bi(e.t).map(t=>({...e,t:t.t,h:e.h||t.h})))):e}function Si(e,t){let n=[],r=0;for(let i of e){let e=r+i.t.length;t>r&&t<e?n.push({...i,t:i.t.slice(0,t-r)},{...i,t:i.t.slice(t-r)}):n.push({...i}),r=e}return n}function Ci(e,t,n,r){let i=0;return hi(Si(Si(e,t),n).map(e=>{let a=i;return i+=e.t.length,a>=t&&i<=n?r({...e}):e}))}function wi(e,t,n,r){let i=0,a=!1;for(let o of e){let e=i;if(i+=o.t.length,!(i<=t||e>=n||!o.t.replace(/\n/g,``))&&(a=!0,!r(o)))return!1}return a}function Ti(e,t,n,r){let i=0,a=null;for(let o of e){let e=i;if(i+=o.t.length,!(i<=t||e>=n)){if(a===null)a=o[r];else if(a!==o[r])return}}return a}function Ei(e,t,n,r){let i=0,a={};for(let n of e){let e=i+n.t.length;if(t>i&&t<=e||t===0&&i===0){let{t:e,...r}=n;if(a=r,t>i)break}i=e}let o=Si(Si(e,t),n),s=[],c=0,l=!1;for(let e of o){let i=c;c+=e.t.length,!l&&i>=t&&(s.push({...a,t:r}),l=!0),!(i>=t&&c<=n&&e.t)&&s.push(e)}return l||s.push({...a,t:r}),hi(s)}var Di={table:`この写真の表を、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "table",
  "title": "表の題名（写真に無ければ内容から短く）",
  "header": 1,
  "rows": [
    ["見出し1", "見出し2", "見出し3"],
    ["中身", "**太字の語**を含む文", "中身⋯中身"]
  ],
  "merges": [ { "r": 0, "c": 0, "rs": 1, "cs": 2 } ],
  "colors": [ { "r": 1, "c": 2, "color": "yellow" } ]
}

【決まり】
・rows は上の行から順に、各行は左から右へ。どの行も同じマスの数にする
・結合されたマスは、左上のマスに文字を入れ、結合で隠れるマスは "" にして、merges に書く（r＝行、c＝列。0から数える。rs＝縦に何マス、cs＝横に何マス）
・header は見出しの行の数
・文字は写真のとおりに（旧字体・送り仮名・記号もそのまま）。読めない字は「？」にし、推測で補わない
・マスの中で改行されている所は \\n で表す
・【太字】太く印刷された文字（ゴシック体の重要語など）は、太字の部分だけを ** と ** で正確に囲む（例：「**墾田永年私財法**を出す」）。1つのマスに太字が2か所あれば2か所とも囲む。マス全体が太字ならマス全体を囲む。太字でない文字は囲まない。見出しの行の文字は囲まなくてよい
・【三点リーダー】写真の「⋯」（文字の高さの真ん中に並ぶ点）は、必ず「⋯」（U+22EF）のまま書く。「…」（U+2026）や「...」に置きかえない。「‥」も写真のとおりに
・赤い文字で印刷された部分は 〔 と 〕 で囲む（アプリの赤シートで隠せるようになります）。それ以外の文字の色・マーカーは区別しなくてよい
・背景に色の付いたマスは colors に（yellow / pink / green / blue / gray / red のうち近いもの）。無ければ空の配列 []
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
・太く印刷された文字は、その部分だけを ** と ** で囲む。赤い文字で印刷された部分は 〔 と 〕 で囲む（アプリの赤シートで隠せるようになります）
・写真の「⋯」（真ん中に並ぶ点）は「⋯」のまま書く。「…」や「...」に置きかえない
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
・写真の「⋯」（真ん中に並ぶ点）は「⋯」のまま書く。「…」や「...」に置きかえない
・JSON 以外の説明は書かない`},Oi=e=>e.replace(/\u2026/g,`⋯`),Q=e=>e==null?``:Oi(String(e)).replace(/\r\n?/g,`
`);function ki(e,t=!1){if(!t&&!/\*\*|〔/.test(e))return{text:e};let n=bi(e,t);return vi(n)?{text:yi(n)}:{text:yi(n),runs:n}}function Ai(e){let t=[],n=Array.isArray(e.rows)?e.rows:[];if(!n.length)throw Error(`表の中身（rows）がありません`);let r=Math.max(...n.map(e=>Array.isArray(e)?e.length:0));n.some(e=>!Array.isArray(e)||e.length!==r)&&t.push(`行によってマスの数が違ったので、足りないマスを空にしました`);let i=n.map(e=>Array.from({length:r},(t,n)=>ki(Q(e?.[n]))));for(let n of e.merges??[])i[n.r]?.[n.c]?((n.rs??1)>1&&(i[n.r][n.c].rs=Math.min(n.rs,i.length-n.r)),(n.cs??1)>1&&(i[n.r][n.c].cs=Math.min(n.cs,r-n.c))):t.push(`結合 ${n.r}行${n.c}列 が表の外です`);for(let t of e.bold??[])if(i[t[0]]?.[t[1]]){let e=i[t[0]][t[1]];i[t[0]][t[1]]={...e,...ki(e.runs?Q(n[t[0]]?.[t[1]]):e.text,!0)}}for(let t of e.colors??[])i[t.r]?.[t.c]&&(i[t.r][t.c].color=[`yellow`,`pink`,`green`,`blue`,`gray`,`red`].includes(t.color)?t.color:`yellow`);let a={rows:i.length,cols:r,cells:i,header:typeof e.header==`number`?e.header:1};return a.colW=si(a),{kind:`table`,title:Q(e.title)||`取り込んだ表`,content:a,warnings:t}}function ji(e){let t=[],n=e.nodes??[];if(!n.length)throw Error(`図の箱（nodes）がありません`);let r=new Map,i=n.map((e,t)=>{let n=N(`dn`);r.set(Q(e.id??t),n);let i=Number(e.col??e.x??0),a=Number(e.row??e.y??0),o=Math.max(1,Number(e.w??3)),s=Math.max(1,Number(e.h??1));return{id:n,kind:[`box`,`text`,`frame`].includes(Q(e.kind))?Q(e.kind):`box`,x:Math.round(i*5),y:Math.round(a*3),w:Math.max(2,Math.round(o*5)-1),h:Math.max(1,Math.round(s*3)-1),text:Q(e.text)}}),a=(e.edges??[]).flatMap(e=>{let n=r.get(Q(e.from)),i=r.get(Q(e.to));if(!n||!i)return t.push(`つなぐ先が見つからない矢印を飛ばしました（${Q(e.from)} → ${Q(e.to)}）`),[];let a=[`arrow`,`line`,`double`].includes(Q(e.style))?Q(e.style):`arrow`;return[{id:N(`de`),from:n,to:i,label:Q(e.label)||void 0,style:a}]});return{kind:`diagram`,title:Q(e.title)||`取り込んだ図`,content:{nodes:i,edges:a,grid:24},warnings:t}}function Mi(e){let t=[],n=e.series??[];if(!n.length)throw Error(`グラフのデータ（series）がありません`);let r=n.map((e,n)=>{let r=(e.points??[]).flatMap(e=>{let n=Array.isArray(e)?e:[e?.x,e?.y],r=Number(n[0]),i=Number(String(n[1]).replace(/,/g,``));return Number.isNaN(r)||Number.isNaN(i)?(t.push(`数字として読めない点を飛ばしました（${JSON.stringify(e)}）`),[]):[[r,i]]});return{name:Q(e.name)||`系列${n+1}`,points:r.sort((e,t)=>e[0]-t[0])}}),i=(e.notes??[]).flatMap(e=>Number.isNaN(Number(e.x))?[]:[{x:Number(e.x),text:Q(e.text)}]);return{kind:`chart`,title:Q(e.title)||`取り込んだグラフ`,content:{chartType:e.chartType===`bar`?`bar`:`line`,xLabel:Q(e.xLabel)||`年`,yLabel:Q(e.yLabel),unit:Q(e.unit),series:r,notes:i,source:Q(e.source)||void 0},warnings:t}}function Ni(e,t){let n=e.trim();if(!n)throw Error(`貼り付けた内容が空です`);let r=null;try{r=de(n)}catch(e){let t=ti(n);if(t)return t.cells=t.cells.map(e=>e.map(e=>({...e,...ki(Oi(e.text))}))),t.colW=si(t),{kind:`table`,title:`取り込んだ表`,content:t,warnings:[`Markdownの表として読み取りました`]};throw e}Array.isArray(r)&&(r={type:t??`table`,rows:r});let i=Q(r.type)||t||(r.rows?`table`:r.nodes?`diagram`:r.series?`chart`:``);if(i===`table`)return Ai(r);if(i===`diagram`)return ji(r);if(i===`chart`)return Mi(r);throw Error(`表・図・グラフのどれか分かりませんでした（"type" を確認してください）`)}function Pi(e){let t=e.cells.map((t,n)=>t.map((t,r)=>{if(!t.runs||n<(e.header??0)||r<(e.headerCols??0)||!t.runs.some(e=>e.b))return t;let i=t.runs.map(e=>e.b?{...e,h:!0}:e);return{...t,runs:i,text:yi(i)}}));return{...e,cells:t}}var Fi=ie({BoardPickSheet:()=>Wi,EmbedSheet:()=>Hi,addToBoard:()=>Ui,addToBoardPrompt:()=>Bi,boardTarget:()=>Li,createEmbed:()=>Vi,embedPinPrompt:()=>zi,embedPrompt:()=>Ri,embedTarget:()=>Ii}),Ii=o(null),Li=o(null);function Ri(e){Ii.value={kind:`note`,id:e}}function zi(e){Ii.value={kind:`pin`,id:e}}function Bi(e){Li.value=e}function Vi(e){let t=Date.now(),n={id:N(`e`),createdAt:t,updatedAt:t,...e};return h.tx(`年表に差し込む`,e=>e.put(`embeds`,n)),n}function Hi(){let e=Ii.value,[t,n]=u(``),[r,i]=u(`event`),[a,o]=u(fe),[s,c]=u(`collapsed`),[d,f]=u(``);l(()=>{if(e){if(f(``),c(`collapsed`),e.kind===`note`){let t=h.get(`notes`,e.id),r=t?_a(t):void 0;n(String(r?.from??Math.floor(B.value.focusYear)))}else{let t=h.get(`pins`,e.id);n(String(t?.when?.from??Math.floor(B.value.focusYear)))}}},[e]);let p=()=>{Ii.value=null},m=h.list(`notes`).filter(e=>e.kind===`timeline`),g=h.get(`notes`,a)?.columns??[],_=e?e.kind===`note`?h.get(`notes`,e.id)?.name:h.get(`pins`,e.id)?.title:``;return T(J,{open:!!e,onClose:p,title:`年表に差し込む`,children:e&&T(`div`,{class:`form`,children:[T(`p`,{class:`hint`,children:[`「`,_,`」を、年表の好きな年・列に置きます。`,e.kind===`pin`?`地図のピンはボタンとして置かれ、タップすると地図が開きます。`:`最初はボタン（タップで開く）として置かれます。`]}),m.length>1&&T(`label`,{class:`fld`,children:[T(`span`,{children:`年表`}),T(`select`,{value:a,onChange:e=>o(e.target.value),children:m.map(e=>T(`option`,{value:e.id,children:e.name},e.id))})]}),T(`div`,{class:`fld-row`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`年`}),T(`input`,{inputMode:`numeric`,value:t,onInput:e=>n(e.target.value)})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`列`}),T(`select`,{value:r,onChange:e=>i(e.target.value),children:g.map(e=>T(`option`,{value:e.id,children:e.name},e.id))})]})]}),e.kind===`note`&&T(`div`,{class:`seg two`,children:[T(`button`,{class:s===`collapsed`?`on`:``,onClick:()=>c(`collapsed`),children:`ボタンで置く`}),T(`button`,{class:s===`expanded`?`on`:``,onClick:()=>c(`expanded`),children:`展開して置く`})]}),d&&T(`p`,{class:`err`,children:d}),T(`button`,{class:`btn primary wide`,onClick:()=>{let n=parseInt(t,10);if(Number.isNaN(n)){f(`年を数字で入れてください`);return}Vi({noteId:a,year:n,col:r,target:e,display:e.kind===`pin`?`collapsed`:s}),p(),K(`「${_}」を年表に差し込みました`,{action:{label:`年表で見る`,run:()=>{H({tab:a===`n-main`?`timeline`:`notes`,openNoteId:a===`n-main`?B.value.openNoteId:a}),U(n)}}})},children:[T(W,{name:`timelineEvent`}),`差し込む`]})]})})}function Ui(e,t){let n=h.get(`notes`,e);if(!n)return;let r=n.content??{items:[]};if(r.items.some(e=>e.kind===t.kind&&e.id===t.id)){K(`すでに入っています`);return}en(e,{...r,items:[...r.items,t]},`比較ボードに追加`)}function Wi(){let e=Li.value,[t,n]=u(``),r=()=>{Li.value=null},i=h.list(`notes`).filter(e=>e.kind===`board`),a=e?e.kind===`note`?h.get(`notes`,e.id)?.name:e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:`地図`:``;return T(J,{open:!!e,onClose:r,title:`比較ボードに追加`,children:e&&T(`div`,{class:`form`,children:[T(`p`,{class:`hint`,children:[`「`,a,`」を入れる比較ボードを選びます。`]}),T(`div`,{class:`list-box`,children:i.map(t=>T(`button`,{class:`lrow btnrow`,onClick:()=>{Ui(t.id,e),r(),Z(`「${t.name}」に追加しました`)},children:[T(W,{name:`board`}),T(`span`,{class:`nm`,children:t.name}),T(`span`,{class:`ct`,children:[(t.content?.items??[]).length,`件`]})]},t.id))}),T(`div`,{class:`add-row`,children:[T(`input`,{value:t,placeholder:`新しい比較ボードの名前`,onInput:e=>n(e.target.value)}),T(`button`,{class:`btn`,onClick:()=>{let n=Zt(`board`,t||`比較ボード`);Ui(n.id,e),r(),Z(`「${n.name}」を作って追加しました`)},children:[T(W,{name:`plus`}),`作る`]})]})]})})}var Gi=o(null);function Ki(e,t=null){Gi.value={a:e,b:t,sync:!0,ratio:.5}}function qi(){Gi.value=null}var Ji=o(!1);function Yi({target:e,onClose:t}){return T(J,{open:!!e,onClose:t,title:e?.startsWith(`folder:`)?`フォルダ`:`ノート`,children:e&&(e.startsWith(`folder:`)?T(Xi,{id:e.slice(7),onClose:t}):T(Zi,{id:e,onClose:t}))})}function Xi({id:e,onClose:t}){let n=h.get(`folders`,e),[r,i]=u(n?.name??``),[a,o]=u(``);return n?T(`div`,{class:`form`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>void Ca(e,`rename`,r)})]}),T(`div`,{class:`add-row`,children:[T(`input`,{value:a,placeholder:`中に作るフォルダの名前`,onInput:e=>o(e.target.value)}),T(`button`,{class:`btn`,onClick:()=>{a.trim()&&(rn(a,e),o(``),Z(`フォルダを作りました`))},children:[T(W,{name:`folderPlus`}),`作る`]})]}),T(`div`,{class:`action-list`,children:T(`button`,{class:`danger`,onClick:()=>{t(),Ca(e,`delete`)},children:[T(W,{name:`trash`}),`このフォルダを削除（中身は残す）`]})})]}):null}function Zi({id:e,onClose:t}){h.rev.value;let n=h.get(`notes`,e),[r,i]=u(n?.name??``),[a,o]=u(n?.tags.join(`、`)??``),[s,c]=u(n?.when?String(n.when.from):``),[d,f]=u(n?.when?.to==null?``:String(n.when.to));if(l(()=>{i(n?.name??``)},[n?.name]),!n)return null;let p=h.list(`folders`),m=e=>sn(e).map(e=>e.name).join(` › `),g=()=>{let t=[...new Set(a.split(/[、,，\s#]+/).map(e=>e.trim()).filter(Boolean))];t.join()!==n.tags.join()&&Qt(e,{tags:t},`タグを変更`)},_=()=>{let t=parseInt(s,10),r=parseInt(d,10);if(Number.isNaN(t)){n.when&&Qt(e,{when:void 0},`時期を消す`);return}Qt(e,{when:!Number.isNaN(r)&&r>t?{from:t,to:r}:{from:t}},`時期を設定`)},v=e===fe,y=n.kind===`table`?n.content:null,b=y?JSON.stringify(y.cells).split(`…`).length-1:0;return T(`div`,{class:`form`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r.trim()&&r!==n.name&&Qt(e,{name:r.trim()},`名前を変更`)}})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`タグ（、で区切る）`}),T(`input`,{value:a,placeholder:`土地制度、外交`,onInput:e=>o(e.target.value),onBlur:g})]}),T(`div`,{class:`fld-row`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`時期（年）`}),T(`input`,{inputMode:`numeric`,value:s,placeholder:`自動`,onInput:e=>c(e.target.value),onBlur:_})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`〜終わり`}),T(`input`,{inputMode:`numeric`,value:d,placeholder:``,onInput:e=>f(e.target.value),onBlur:_})]})]}),T(`p`,{class:`hint`,children:`時期を入れると「この時期のノート」に出て、比較のときに年でそろえられます（空なら中身から自動）。`}),!v&&T(`label`,{class:`fld`,children:[T(`span`,{children:`フォルダ`}),T(`select`,{value:n.folderId??``,onChange:t=>{let n=t.target.value;Qt(e,{folderId:n||void 0},`フォルダを移動`)},children:[T(`option`,{value:``,children:`（いちばん上）`}),p.map(e=>T(`option`,{value:e.id,children:m(e.id)},e.id))]})]}),T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>Qt(e,{pinned:!n.pinned},n.pinned?`ピン留めを外す`:`ピン留め`),children:[T(W,{name:`pinned`}),n.pinned?`ピン留めを外す`:`ピン留めする`]}),!v&&n.kind!==`timeline`&&n.kind!==`board`&&T(`button`,{onClick:()=>{t(),Ri(e)},children:[T(W,{name:`timelineEvent`}),`年表に差し込む`]}),T(`button`,{onClick:()=>{t(),Ki(n.kind===`timeline`?{kind:`timeline`,id:e}:{kind:`note`,id:e})},children:[T(W,{name:`splitRows`}),`並べて見る`]}),T(`button`,{onClick:()=>{t(),Bi({kind:`note`,id:e})},children:[T(W,{name:`board`}),`比較ボードに追加`]}),T(`button`,{onClick:()=>{let n=tn(e);n&&(t(),Z(`「${n.name}」を作りました`))},children:[T(W,{name:`copy`}),`複製する`]}),b>0&&T(`button`,{onClick:()=>{if(!y)return;let t=y.cells.map(e=>e.map(e=>({...e,text:Oi(e.text),...e.runs?{runs:e.runs.map(e=>({...e,t:Oi(e.t)}))}:{}})));en(e,{...y,cells:t},`「…」を「⋯」に`),Z(`${b}か所の「…」を「⋯」にしました`)},children:[T(W,{name:`refresh`}),`「…」を「⋯」に直す（`,b,`か所）`]}),!v&&T(`button`,{class:`danger`,onClick:()=>{nn(e),t(),B.value.openNoteId===e&&H({openNoteId:null}),Z(`「${n.name}」をゴミ箱に入れました`)},children:[T(W,{name:`trash`}),`ゴミ箱へ`]})]})]})}var Qi=[[`timeline`,`年表`,`table`,`自分専用の年表（例：室町の外交まとめ）`],[`table`,`表`,`cols3`,`マスの結合・色、1文字ずつの太字・文字色・マーカーができる表`],[`diagram`,`図`,`sitemap`,`箱・文字・矢印・囲み枠の図（流れ図・関係図・系図）`],[`chart`,`グラフ`,`chartLine`,`折れ線・棒グラフ（人口・貿易額・石高など）`],[`memo`,`メモ`,`fileText`,`自由に書くメモ（〔 〕で赤シート）`],[`board`,`比較ボード`,`board`,`比べたいものを集めておく場所`],[`folder`,`フォルダ`,`folder`,`ノートを分けて入れる`],[`import`,`画像から取り込む`,`photo`,`写真の表・図・グラフを、編集できる形に`]];function $i({mode:e,folderId:t,onClose:n,onMode:r}){let[i,a]=u(``);l(()=>{a(``)},[e]);let o=()=>{if(!e||e===`menu`||e===`import`)return;if(e===`folder`){rn(i||`フォルダ`,t),n(),Z(`フォルダを作りました`);return}let r=Zt(e,i||Yt[e],{folderId:t});n(),ba(r.id)},s=e&&e!==`menu`?Qi.find(t=>t[0]===e)?.[1]:``;return T(J,{open:!!e,onClose:n,title:e===`menu`?`新しく作る`:`${s}を作る`,children:[e===`menu`&&T(`div`,{class:`create-grid`,children:Qi.map(([e,t,i,a])=>T(`button`,{class:`create-item`,onClick:()=>{if(e===`import`){n(),H({tab:`notes`}),Ji.value=!0;return}r(e)},children:[T(`span`,{class:`fi`,"data-kind":e,children:T(W,{name:i})}),T(`b`,{children:t}),T(`small`,{children:a})]},e))}),e&&e!==`menu`&&e!==`import`&&T(`div`,{class:`form`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{value:i,placeholder:e===`folder`?`例：古代`:`例：${e===`timeline`?`室町の外交まとめ`:e===`table`?`江戸の三大改革`:e===`diagram`?`摂関政治の系図`:e===`chart`?`江戸時代の人口`:e===`board`?`土地制度の比較`:`覚え方メモ`}`,autoFocus:!0,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&o()}})]}),T(`button`,{class:`btn primary wide`,onClick:o,children:[T(W,{name:e===`folder`?`folderPlus`:ga[e]??`plus`}),`作る`]}),T(`button`,{class:`btn wide ghost`,onClick:()=>r(`menu`),children:`戻る`})]})]})}function ea(e){let t=[];return e.b&&t.push(`rb`),e.c&&t.push(`fc-`+e.c),e.m&&t.push(`mk-`+e.m),e.s&&t.push(`fs`+e.s),e.h&&t.push(`rr-h`),t.join(` `)}function ta({text:e}){let t=e.split(`
`);return T(c,{children:t.map((e,t)=>t?[T(`br`,{},`b`+t),e]:e)})}function na({runs:e,sheet:t}){let[n,r]=u(new Set),i=[];for(let t of e){let e=fi(t),n=i[i.length-1];n&&n.hidden===e?n.runs.push(t):i.push({hidden:e,runs:[t]})}return T(`span`,{class:`rt rr`,children:i.map((e,i)=>{if(e.hidden&&t&&!n.has(i))return T(`button`,{class:`rt-mask`,"aria-label":`隠れた語（タップでめくる）`,onClick:e=>{e.stopPropagation(),r(new Set([...n,i]))}},i);let a=e.runs.map((e,t)=>T(`span`,{class:ea(e),children:T(ta,{text:e.t})},t));return e.hidden&&t?T(`span`,{class:`rr-peeled`,children:a},i):a})})}function ra(e){let t=[],n=/〔([^〔〕]*)〕/g,r=0,i;for(;i=n.exec(e);)i.index>r&&t.push({text:e.slice(r,i.index),hidden:!1}),t.push({text:i[1],hidden:!0}),r=i.index+i[0].length;return r<e.length&&t.push({text:e.slice(r),hidden:!1}),t}function ia({text:e,sheet:t,class:n,placeholder:r}){let[i,a]=u(new Set);if(!e)return r?T(`span`,{class:`rt ${n??``} ph`,children:r}):null;if(e.includes(`**`))return T(`span`,{class:`rt ${n??``}`,children:T(na,{runs:bi(e),sheet:t})});let o=ra(e);return T(`span`,{class:`rt ${n??``}`,children:o.map((e,n)=>e.hidden?t&&!i.has(n)?T(`button`,{class:`rt-mask`,"aria-label":`隠れた語（タップでめくる）`,onClick:e=>{e.stopPropagation(),a(new Set([...i,n]))}},n):T(`mark`,{class:`rt-hid ${t?`peeled`:``}`,children:e.text},n):T(aa,{text:e.text},n))})}function aa({text:e}){let t=e.split(`
`);return T(c,{children:t.map((e,t)=>t?[T(`br`,{},`b`+t),e]:e)})}function oa({note:t}){let n=t.content??{text:``},[r,i]=u(n.text),[a,o]=u(!n.text),s=e(r);s.current=r;let c=()=>{let e=h.get(`notes`,t.id)?.content?.text??``;s.current!==e&&en(t.id,{text:s.current},`メモを編集`)};l(()=>{a||i(n.text)},[n.text]),l(()=>()=>c(),[]);let d=B.value.redSheet;return T(`div`,{class:`memo-note`,children:[T(`div`,{class:`memo-tools`,children:[T(`button`,{class:`tool ${d?`sheet-on`:``}`,onClick:()=>H({redSheet:!d}),children:[T(W,{name:`eyeOff`}),`赤シート`]}),T(`button`,{class:`tool ${a?`pen-on`:``}`,onClick:()=>{a&&c(),o(!a)},children:[T(W,{name:a?`check`:`pencil`}),a?`書き終わる`:`書く`]})]}),a?T(`textarea`,{class:`memo-area`,value:r,autoFocus:!0,placeholder:`自由に書けます。
〔 〕で囲んだ語は、赤シートで隠れます。
例：大宝律令は〔701〕年に制定。`,onInput:e=>i(e.target.value),onBlur:c}):T(`div`,{class:`memo-read`,onDblClick:()=>o(!0),children:T(ia,{text:n.text,sheet:d,placeholder:`（空のメモ）`})})]})}var sa=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),ca=function(e,t){return new URL(e,t).href},la={},ua=function(e){return e.pathname.endsWith(`.css`)},$=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ca(t,n);let r=s(t);if(r.href in la)return;la[r.href]=!0;let i=ua(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:sa,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},da=wt(()=>$(()=>import(`./TableNote.js`).then(e=>({default:e.TableNote})),[],import.meta.url)),fa=wt(()=>$(()=>import(`./DiagramNote.js`).then(e=>({default:e.DiagramNote})),[],import.meta.url)),pa=wt(()=>$(()=>import(`./ChartNote.js`).then(e=>({default:e.ChartNote})),[],import.meta.url)),ma=wt(()=>$(()=>import(`./BoardNote.js`).then(e=>({default:e.BoardNote})),[],import.meta.url));function ha({note:e}){let[t,n]=u(!1),r=()=>H({openNoteId:null,notesFolder:e.folderId??null});if(e.kind===`timeline`)return T(qa,{noteId:e.id,onBack:r});let i=sn(e.folderId);return T(`div`,{class:`view note-view`,children:[T(`header`,{class:`appbar`,children:[T(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:r,children:T(W,{name:`chevronLeft`})}),T(`div`,{class:`tt`,children:[T(`div`,{class:`crumb`,children:[`ノート`,i.map(e=>T(c,{children:[T(W,{name:`chevronRight`}),e.name]})),T(W,{name:`chevronRight`}),T(W,{name:ga[e.kind],size:13}),Yt[e.kind]]}),T(`h1`,{class:`title`,children:e.name})]}),T(`button`,{class:`iconbtn`,"aria-label":`ノートの操作`,onClick:()=>n(!0),children:T(W,{name:`dots`})})]}),T(Ct,{fallback:T(`div`,{class:`loading`,children:`読み込み中…`}),children:[e.kind===`memo`&&T(oa,{note:e}),e.kind===`table`&&T(da,{note:e}),e.kind===`diagram`&&T(fa,{note:e}),e.kind===`chart`&&T(pa,{note:e}),e.kind===`board`&&T(ma,{note:e})]}),T(Yi,{target:t?e.id:null,onClose:()=>n(!1)})]})}var ga={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function _a(e){if(e.when)return e.when;if(e.kind===`timeline`){let t=h.list(`terms`).filter(t=>t.noteId===e.id);return t.length?{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}:void 0}if(e.kind===`chart`){let t=(e.content?.series??[]).flatMap(e=>e.points.map(e=>e[0]));return t.length?{from:Math.min(...t),to:Math.max(...t)}:void 0}if(e.kind===`board`){let t=(e.content?.items??[]).map(e=>e.kind===`note`?h.get(`notes`,e.id):void 0).filter(Boolean).map(e=>_a(e)).filter(Boolean);return t.length?{from:Math.min(...t.map(e=>e.from)),to:Math.max(...t.map(e=>e.to??e.from))}:void 0}let t=h.list(`terms`).filter(t=>t.noteId===e.id);if(t.length)return{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}}var va=e=>e?`${m(e.from)}${e.to!=null&&e.to!==e.from?`〜`+m(e.to):``}`:``,ya=e=>{if(!e)return``;let t=Math.floor((Date.now()-e)/6e4);if(t<1)return`いま`;if(t<60)return`${t}分前`;let n=Math.floor(t/60);if(n<24)return`${n}時間前`;let r=Math.floor(n/24);return r<30?`${r}日前`:new Date(e).toLocaleDateString(`ja-JP`)};function ba(e){if($t(e),e===`n-main`){H({tab:`timeline`});return}H({tab:`notes`,openNoteId:e})}function xa(){h.rev.value;let e=B.value,t=e.openNoteId?h.get(`notes`,e.openNoteId):void 0;return t&&!t.deletedAt?T(ha,{note:t},t.id):T(Sa,{folderId:e.notesFolder&&h.get(`folders`,e.notesFolder)&&!h.get(`folders`,e.notesFolder).deletedAt?e.notesFolder:null})}function Sa({folderId:e}){h.rev.value;let[t,n]=u(null),[r,i]=u(null),[a,o]=u(null),l=h.list(`notes`),d=h.list(`folders`),f=l.filter(t=>(t.folderId??null)===e&&(!a||t.tags.includes(a))).sort(bn),p=d.filter(t=>(t.parentId??null)===e).sort(bn),m=s(()=>[...l].filter(e=>e.lastOpenedAt).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)).slice(0,8),[h.rev.value]),g=l.filter(e=>e.pinned).sort(bn),_=[...new Set(l.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,`ja`)),v=b(Math.floor(w()),L.eras),y=l.filter(e=>e.id!==fe).filter(e=>{let t=_a(e);return t&&t.from<v.to&&(t.to??t.from)>=v.from}),x=h.list(`groups`).sort(bn),S=sn(e),ee=e?h.get(`folders`,e):void 0,C=e=>T(`div`,{class:`nrow`,onClick:()=>ba(e.id),children:[T(`span`,{class:`fi`,"data-kind":e.kind,children:T(W,{name:ga[e.kind]})}),T(`span`,{class:`tx`,children:[T(`b`,{children:e.name}),T(`small`,{children:[Yt[e.kind],va(_a(e))&&`・`+va(_a(e)),e.tags.length?`・`+e.tags.map(e=>`#`+e).join(` `):``]})]}),e.pinned&&T(W,{name:`pinned`,size:16}),T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`メニュー`,onClick:t=>{t.stopPropagation(),n(e.id)},children:T(W,{name:`dots`})})]});return T(`div`,{class:`view notes`,children:[e?T(`header`,{class:`appbar`,children:[T(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:()=>H({notesFolder:ee?.parentId??null}),children:T(W,{name:`chevronLeft`})}),T(`div`,{class:`tt`,children:[T(`div`,{class:`crumb`,children:[`ノート`,S.slice(0,-1).map(e=>T(c,{children:[T(W,{name:`chevronRight`}),e.name]}))]}),T(`h1`,{class:`title`,children:ee?.name})]}),T(`button`,{class:`iconbtn`,"aria-label":`フォルダの操作`,onClick:()=>n(`folder:`+e),children:T(W,{name:`dots`})})]}):T(`header`,{class:`bigbar row`,children:T(`h1`,{class:`big-title`,children:`ノート`})}),T(`div`,{class:`scroll`,children:[!e&&T(c,{children:[T(`button`,{class:`searchbox big`,onClick:()=>Ta(),children:[T(W,{name:`search`}),T(`span`,{children:`ノート・用語・メモを検索`})]}),T(`div`,{class:`sec-title`,children:`最近開いた`}),T(`div`,{class:`cards`,children:[T(`button`,{class:`ncard`,style:{"--c":`var(--era-${v.id})`},onClick:()=>H({tab:`timeline`}),children:[T(`div`,{class:`band`}),T(`div`,{class:`cb`,children:[T(`div`,{class:`kind`,children:[T(W,{name:`table`}),`年表`]}),T(`div`,{class:`nm`,children:`全体年表`}),T(`div`,{class:`when`,children:[v.name,`を表示中`]})]})]}),m.filter(e=>e.id!==`n-main`).map(e=>{let t=_a(e),n=t?b(t.from,L.eras):void 0;return T(`button`,{class:`ncard`,style:{"--c":n?`var(--era-${n.id})`:`var(--accent)`},onClick:()=>ba(e.id),children:[T(`div`,{class:`band`}),T(`div`,{class:`cb`,children:[T(`div`,{class:`kind`,children:[T(W,{name:ga[e.kind]}),Yt[e.kind]]}),T(`div`,{class:`nm`,children:e.name}),T(`div`,{class:`when`,children:ya(e.lastOpenedAt)})]})]},e.id)})]}),y.length>0&&T(c,{children:[T(`div`,{class:`sec-title`,children:[`この時期のノート`,T(`small`,{style:{color:`var(--era-${v.id})`},children:v.name})]}),T(`div`,{class:`list`,children:y.slice(0,6).map(e=>T(`div`,{children:C(e)},e.id))})]}),g.length>0&&T(c,{children:[T(`div`,{class:`sec-title`,children:[`ピン留め`,T(`small`,{children:`長押しで並べ替え`})]}),T(Wr,{class:`list`,items:g,getId:e=>e.id,onReorder:e=>cn(`notes`,e,`ピン留めを並べ替え`),render:e=>C(e)})]}),x.length>0&&T(c,{children:[T(`div`,{class:`sec-title`,children:[`グループ`,T(`small`,{children:`長押しで並べ替え`})]}),T(Wr,{class:`list`,items:x,getId:e=>e.id,onReorder:e=>cn(`groups`,e,`グループを並べ替え`),render:e=>T(`div`,{class:`nrow`,onClick:()=>H({openGroupId:e.id}),children:[T(`span`,{class:`fi`,style:e.weakness?{"--c":`var(--w${e.weakness})`}:void 0,children:T(W,{name:`stack`})}),T(`span`,{class:`tx`,children:[T(`b`,{children:e.name}),T(`small`,{children:[mn(e).length,`語`,va(hn(e))&&`・`+va(hn(e)),e.weakness?`・苦手${e.weakness}`:``]})]}),T(W,{name:`chevronRight`})]})})]})]}),T(`div`,{class:`sec-title`,children:[e?`フォルダの中`:`フォルダとノート`,T(`small`,{children:a?T(`button`,{class:`linklike`,onClick:()=>o(null),children:[`#`,a,` ×`]}):`長押しで並べ替え`})]}),p.length>0&&T(Wr,{class:`list`,items:p,getId:e=>e.id,onReorder:e=>cn(`folders`,e,`フォルダを並べ替え`),render:e=>T(`div`,{class:`nrow`,onClick:()=>H({notesFolder:e.id}),children:[T(`span`,{class:`fi folder`,children:T(W,{name:`folder`})}),T(`span`,{class:`tx`,children:[T(`b`,{children:e.name}),T(`small`,{children:[l.filter(t=>t.folderId===e.id).length,`件`]})]}),T(W,{name:`chevronRight`})]})}),f.length>0&&T(Wr,{class:`list gap`,items:f,getId:e=>e.id,onReorder:e=>cn(`notes`,e,`ノートを並べ替え`),render:e=>C(e)}),!f.length&&!p.length&&T(`div`,{class:`empty`,children:[T(`div`,{class:`empty-ic`,children:T(W,{name:`notebook`,size:30})}),T(`p`,{children:`右下の＋から、年表・表・図・グラフ・メモ・比較ボード・フォルダを作れます。`})]}),!e&&_.length>0&&T(c,{children:[T(`div`,{class:`sec-title`,children:`タグ`}),T(`div`,{class:`tags`,children:_.map(e=>T(`button`,{class:a===e?`on`:``,onClick:()=>o(a===e?null:e),children:[`#`,e]},e))})]})]}),T(`button`,{class:`fab`,"aria-label":`新しく作る`,onClick:()=>i(`menu`),children:T(W,{name:`plus`})}),T(Yi,{target:t,onClose:()=>n(null)}),T($i,{mode:r,folderId:e??void 0,onClose:()=>i(null),onMode:i})]});function w(){return B.value.focusYear}}async function Ca(e,t,n){let r=h.get(`folders`,e);if(r&&(t===`rename`&&n&&an(e,n),t===`delete`)){if(!await q({title:`フォルダ「${r.name}」を削除しますか？`,body:`中のノートは消えずに、1つ上の場所に移ります。`,ok:`削除`,danger:!0}))return;on(e),H({notesFolder:r.parentId??null})}}var wa=o(!1);function Ta(){wa.value=!0}function Ea(){let t=wa.value,[n,r]=u(``),i=e(null);l(()=>{t&&(r(``),setTimeout(()=>i.current?.focus(),260))},[t]);let a=()=>{wa.value=!1},o=s(()=>{let e=n.trim();if(!e)return null;let t=/^-?\d{1,5}$/.test(e)?parseInt(e,10):null;return{terms:h.list(`terms`).filter(n=>t==null?n.name.includes(e)||(n.yomi??``).includes(e)||n.desc.includes(e):n.when.from===t||n.when.to!=null&&n.when.from<=t&&t<=n.when.to).sort((e,t)=>t.importance-e.importance||e.when.from-t.when.from).slice(0,50),notes:h.list(`notes`).filter(t=>t.name.includes(e)||t.tags.some(t=>t.includes(e.replace(/^#/,``)))||t.kind===`memo`&&(t.content?.text??``).includes(e)),groups:h.list(`groups`).filter(t=>t.name.includes(e)||t.memo.includes(e)),memos:h.list(`weakMemos`).filter(t=>t.title.includes(e)||t.body.includes(e)),prios:h.list(`priorityMemos`).filter(t=>t.text.includes(e))}},[n,h.rev.value]),c=e=>h.get(`notes`,e)?.name??``,d=o?o.terms.length+o.notes.length+o.groups.length+o.memos.length+o.prios.length:0;return T(J,{open:t,onClose:a,title:`検索`,full:!0,children:T(`div`,{class:`form`,children:[T(`div`,{class:`searchbox`,children:[T(W,{name:`search`}),T(`input`,{ref:i,value:n,placeholder:`用語・ノート・メモ・タグ・年（例：743）`,onInput:e=>r(e.target.value)})]}),o&&T(`div`,{class:`results`,children:[o.notes.length>0&&T(`div`,{class:`res-h`,children:`ノート`}),o.notes.map(e=>T(`button`,{class:`res`,onClick:()=>{a(),ba(e.id)},children:[T(W,{name:ga[e.kind]}),T(`span`,{class:`nm`,children:e.name}),T(`span`,{class:`sub`,children:Yt[e.kind]})]},e.id)),o.terms.length>0&&T(`div`,{class:`res-h`,children:`用語`}),o.terms.map(e=>T(`button`,{class:`res`,onClick:()=>{a(),e.noteId===`n-main`?(H({tab:`timeline`}),U(e.when.from,{termId:e.id})):(ba(e.noteId),setTimeout(()=>U(e.when.from,{termId:e.id}),60))},children:[T(`span`,{class:`w ${e.weakness?`wk`+e.weakness:``}`}),T(`span`,{class:`nm`,children:e.name}),T(`span`,{class:`sub`,children:[m(e.when.from),e.noteId===`n-main`?``:`・`+c(e.noteId)]})]},e.id)),o.groups.length>0&&T(`div`,{class:`res-h`,children:`グループ`}),o.groups.map(e=>T(`button`,{class:`res`,onClick:()=>{a(),H({openGroupId:e.id})},children:[T(W,{name:`stack`}),T(`span`,{class:`nm`,children:e.name})]},e.id)),o.memos.length>0&&T(`div`,{class:`res-h`,children:`苦手メモ`}),o.memos.map(e=>T(`button`,{class:`res`,onClick:()=>{a(),H({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[T(W,{name:`note`}),T(`span`,{class:`nm`,children:e.title||e.body.slice(0,30)})]},e.id)),o.prios.length>0&&T(`div`,{class:`res-h`,children:`優先順位メモ`}),o.prios.map(e=>T(`button`,{class:`res`,onClick:()=>{a(),H({tab:`weak`,weakSeg:`priority`})},children:[T(W,{name:`listCheck`}),T(`span`,{class:`nm`,children:e.text})]},e.id)),!d&&T(`p`,{class:`hint center`,children:`見つかりませんでした。`})]})]})})}var Da=o(null);function Oa(e,t,n={}){Da.value={title:e,onPick:t,...n}}var ka={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function Aa(){let e=Da.value,[t,n]=u(``);l(()=>{e&&n(``)},[e]);let r=()=>{Da.value=null},i=e?h.list(`notes`).filter(n=>(!e.kinds||e.kinds.includes(n.kind))&&(!t.trim()||n.name.includes(t.trim()))).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)):[];return T(J,{open:!!e,onClose:r,title:e?.title,full:!0,children:e&&T(`div`,{class:`form`,children:[T(`div`,{class:`searchbox`,children:[T(W,{name:`search`}),T(`input`,{value:t,placeholder:`ノートの名前で探す`,onInput:e=>n(e.target.value)})]}),T(`div`,{class:`results`,children:[e.extra?.map(t=>T(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[T(W,{name:t.icon}),T(`span`,{class:`nm`,children:t.label})]},t.id)),i.map(t=>T(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[T(W,{name:ka[t.kind]??`note`}),T(`span`,{class:`nm`,children:t.name}),T(`span`,{class:`sub`,children:Yt[t.kind]})]},t.id)),!i.length&&!e.extra?.length&&T(`p`,{class:`hint center`,children:`ノートがありません。ノートタブの＋から作れます。`})]})]})})}var ja=o(null),Ma=wt(()=>$(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url));function Na({at:e,noteId:t,onClose:n,onAdd:r}){let i=e?h.get(`notes`,t)?.columns?.find(t=>t.id===e.col)?.name:``;return T(J,{open:!!e,onClose:n,title:e?`${m(e.year)}・${i}`:``,children:e&&T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>r(e),children:[T(W,{name:`plus`}),`ここに用語を追加`]}),T(`button`,{onClick:()=>{Dn(t,e.year,e.col),n(),Z(`付箋を貼りました（タップで書けます）`)},children:[T(W,{name:`sticker`}),`ここに付箋を貼る`]}),T(`button`,{onClick:()=>{n(),Oa(`差し込むノートを選ぶ`,n=>{setTimeout(()=>Pa(n,e.year,e.col,t),50)})},children:[T(W,{name:`timelineEvent`}),`ここにノートを差し込む`]}),T(`button`,{onClick:()=>{n(),kt(e.year,`timeline`),H({tab:`map`})},children:[T(W,{name:`map2`}),`この年の地図を見る`]})]})})}function Pa(e,t,n,r){$(()=>Promise.resolve().then(()=>Fi).then(i=>{i.createEmbed({noteId:r,year:t,col:n,target:{kind:`note`,id:e},display:`collapsed`}),Z(`「${h.get(`notes`,e)?.name}」を差し込みました`)}),void 0,import.meta.url)}function Fa({open:e,onClose:t,noteId:n,onSelect:r,onMap:i,onCompare:a}){let o=h.list(`groups`),[s,c]=u(!1);return l(()=>{e||c(!1)},[e]),T(J,{open:e,onClose:t,title:`ほかの操作`,children:s?T(`div`,{class:`action-list`,children:[o.map(e=>T(`button`,{onClick:()=>{H({groupFilter:e.id}),t()},children:[T(W,{name:`stack`}),e.name]},e.id)),!o.length&&T(`p`,{class:`hint center`,children:`グループはまだありません。「選んで操作」→「グループ」で作れます。`})]}):T(`div`,{class:`action-list`,children:[T(`button`,{onClick:r,children:[T(W,{name:`handClick`}),`選んで操作（グループ・比較表・赤シート）`]}),T(`button`,{onClick:()=>c(!0),children:[T(W,{name:`filter`}),`グループで絞り込む`]}),T(`button`,{onClick:()=>H({showArrows:!B.value.showArrows}),children:[T(W,{name:`arrowRight`}),`矢印を`,B.value.showArrows?`隠す`:`表示する`]}),T(`button`,{onClick:a,children:[T(W,{name:`splitRows`}),`並べて見る`]}),T(`button`,{onClick:i,children:[T(W,{name:`map2`}),`この時期の地図を見る`]}),T(`p`,{class:`hint`,children:`付箋や差し込みは、表の空いたマスを長押しして置けます。矢印は、用語の詳細 →「矢印を引く」から。`}),n&&null]})})}function Ia({open:e,count:t,onClose:n,onCreate:r}){let[i,a]=u(``);return l(()=>{e&&a(``)},[e]),T(J,{open:e,onClose:n,title:`グループにする`,children:T(`div`,{class:`form`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:[`グループの名前（`,t,`語）`]}),T(`input`,{value:i,autoFocus:!0,placeholder:`例：享保の改革`,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&r(i)}})]}),T(`button`,{class:`btn primary wide`,onClick:()=>r(i),children:[T(W,{name:`stack`}),`作る`]})]})})}function La({pair:e,noteId:t,onClose:n}){let[r,i]=u(``);l(()=>{e&&i(``)},[e]);let a=e?h.get(`terms`,e.from):void 0,o=e?h.get(`terms`,e.to):void 0,s=r=>{e&&(Cn(t,e.from,e.to,r),n(),Z(`矢印を引きました`))};return T(J,{open:!!e,onClose:n,title:`矢印を引く`,children:e&&T(`div`,{class:`form`,children:[T(`p`,{class:`arrow-pair`,children:[T(`b`,{children:a?.name}),T(W,{name:`arrowRight`}),T(`b`,{children:o?.name})]}),T(`div`,{class:`f-label`,children:`ラベル（タップで決定）`}),T(`div`,{class:`chips-row`,children:Sn.map(e=>T(`button`,{class:`chip`,onClick:()=>s(e),children:e},e))}),T(`div`,{class:`add-row`,children:[T(`input`,{value:r,placeholder:`自分で書く（なしでもよい）`,onInput:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&s(r)}}),T(`button`,{class:`btn primary`,onClick:()=>s(r),children:`引く`})]})]})})}function Ra({id:e,onClose:t}){h.rev.value;let n=e?h.get(`arrows`,e):void 0,[r,i]=u(``);if(l(()=>{i(n?.label??``)},[e]),e&&(!n||n.deletedAt))return T(J,{open:!1,onClose:t,children:null});let a=n?h.get(`terms`,n.from):void 0,o=n?h.get(`terms`,n.to):void 0;return T(J,{open:!!n,onClose:t,title:`矢印`,children:n&&T(`div`,{class:`form`,children:[T(`p`,{class:`arrow-pair`,children:[T(`button`,{class:`linklike`,onClick:()=>H({openTermId:n.from}),children:a?.name}),T(W,{name:`arrowRight`}),T(`button`,{class:`linklike`,onClick:()=>H({openTermId:n.to}),children:o?.name})]}),T(`div`,{class:`chips-row`,children:Sn.map(e=>T(`button`,{class:`chip ${n.label===e?`on`:``}`,onClick:()=>{wn(n.id,{label:e},`矢印のラベルを変更`),i(e)},children:e},e))}),T(`label`,{class:`fld`,children:[T(`span`,{children:`ラベル`}),T(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r!==n.label&&wn(n.id,{label:r},`矢印のラベルを変更`)}})]}),T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>Tn(n.id),children:[T(W,{name:`leftRight`}),`向きを逆にする`]}),T(`button`,{class:`danger`,onClick:()=>{En(n.id),t(),Z(`矢印を削除しました`)},children:[T(W,{name:`trash`}),`削除`]})]})]})})}function za({id:e,onClose:t}){h.rev.value;let n=e?h.get(`stickies`,e):void 0,[r,i]=u(``);l(()=>{i(n?.text??``)},[e]);let a=()=>{n&&r!==n.text&&On(n.id,{text:r})};return l(()=>()=>{let t=e?h.get(`stickies`,e):void 0;t&&!t.deletedAt&&t.text!==r&&On(t.id,{text:r})},[e,r]),T(J,{open:!!n&&!n.deletedAt,onClose:()=>{a(),t()},title:`付箋`,children:n&&T(`div`,{class:`form`,children:[T(`div`,{class:`sticky-card c-${n.color}`,children:[T(`textarea`,{rows:4,value:r,autoFocus:!n.text,placeholder:`メモを書く（〔 〕で赤シート）`,onInput:e=>i(e.target.value),onBlur:a}),T(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(e=>T(`button`,{class:`c-${e} ${n.color===e?`on`:``}`,"aria-label":`色：${e}`,onClick:()=>On(n.id,{color:e},`付箋の色を変更`)},e))})]}),n.anchor.kind===`timeline`&&T(`div`,{class:`nudge`,children:[T(`span`,{children:`位置`}),T(`button`,{class:`iconbtn sm`,"aria-label":`左へ`,onClick:()=>On(n.id,{dx:(n.dx??0)-20},`付箋を動かす`),children:T(W,{name:`chevronLeft`})}),T(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>On(n.id,{dy:(n.dy??0)-20},`付箋を動かす`),children:T(W,{name:`chevronUp`})}),T(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>On(n.id,{dy:(n.dy??0)+20},`付箋を動かす`),children:T(W,{name:`chevronDown`})}),T(`button`,{class:`iconbtn sm`,"aria-label":`右へ`,onClick:()=>On(n.id,{dx:(n.dx??0)+20},`付箋を動かす`),children:T(W,{name:`chevronRight`})}),T(`button`,{class:`btn sm`,onClick:()=>On(n.id,{dx:0,dy:0},`付箋を元の位置に`),children:`元の位置`})]}),T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>{a(),On(n.id,{collapsed:!n.collapsed},n.collapsed?`付箋を開く`:`付箋を折りたたむ`),t()},children:[T(W,{name:n.collapsed?`note`:`minus`}),n.collapsed?`開いて表示する`:`小さく折りたたむ`]}),T(`button`,{class:`danger`,onClick:()=>{kn(n.id),t(),Z(`付箋を削除しました`)},children:[T(W,{name:`trash`}),`はがす（削除）`]})]})]})})}function Ba({id:e,onClose:t}){h.rev.value;let n=e?h.get(`embeds`,e):void 0;return T(J,{open:!!n&&!n.deletedAt,onClose:t,title:n?gr(n):``,children:n&&T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>{n&&(t(),n.target.kind===`note`?H({tab:`notes`,openNoteId:n.target.id}):(H({tab:`map`}),$(()=>import(`./mapState.js`).then(e=>e.focusPin(n.target.id)),[],import.meta.url)))},children:[T(W,{name:n.target.kind===`pin`?`map2`:`external`}),n.target.kind===`pin`?`地図で見る`:`開く`]}),n.target.kind===`note`&&T(`button`,{onClick:()=>{jn(n.id,{display:n.display===`expanded`?`collapsed`:`expanded`},n.display===`expanded`?`ボタンに戻す`:`展開して表示`),t()},children:[T(W,{name:n.display===`expanded`?`minus`:`arrowsMove`}),n.display===`expanded`?`ボタンに戻す`:`年表の中に展開する`]}),T(`button`,{onClick:()=>{t(),n.target.kind===`note`&&Ri(n.target.id),Mn(n.id)},children:[T(W,{name:`arrowsMove`}),`別の年・列へ移す`]}),T(`button`,{class:`danger`,onClick:()=>{Mn(n.id),t(),K(`差し込みを外しました（ノートは消えません）`)},children:[T(W,{name:`trash`}),`差し込みを外す`]})]})})}function Va({item:e,top:t,height:n}){let r=e.embed,i=r.target.kind===`note`?h.get(`notes`,r.target.id):void 0;return T(`div`,{class:`tl-embed`,style:{top:t+`px`,height:n+`px`,"--c":`var(--era-${e.era.id})`},children:T(`div`,{class:`emb-in`,children:[T(`div`,{class:`emb-h`,children:[T(W,{name:`timelineEvent`,size:16}),T(`b`,{children:gr(r)}),T(`small`,{children:m(r.year)}),T(`span`,{class:`sp`}),T(`button`,{class:`btn sm`,"data-eid":r.id,children:`操作`})]}),T(`div`,{class:`emb-body`,style:{height:n-52+`px`},children:i?T(Ct,{fallback:T(`div`,{class:`loading`,children:`読み込み中…`}),children:T(Ma,{note:i,sheet:B.value.redSheet})}):T(`p`,{class:`hint`,children:`ノートが見つかりません`})})]})})}Y.EMBED_H;var Ha=800,Ua=Y.HEAD_H+Y.ERA_H+2,Wa=1.3,Ga={table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`,timeline:`table`};hr(e=>(e.target.kind===`note`?h.get(`notes`,e.target.id)?.name:h.get(`pins`,e.target.id)?.title)??`（見つかりません）`);var Ka=e=>{kt(e,`timeline`),H({tab:`map`})};function qa({noteId:t=fe,onBack:n,pane:r}){let a=h.rev.value,o=B.value,d=h.get(`notes`,t),f=s(()=>(d?.columns??[]).filter(e=>e.visible),[d]),p=h.settings.zoomLevels,[m,g]=u(o.level),_=Math.max(0,Math.min(p.length-1,r?m:o.level)),v=e=>{r?g(e):H({level:e})},y=p[_],[x,S]=u(()=>new Set);l(()=>S(new Set),[_]);let ee=!r&&t===`n-main`?o.groupFilter:null,C=ee?h.get(`groups`,ee):void 0,w=s(()=>C?new Set(mn(C).map(e=>e.id)):null,[C,a]),te=s(()=>h.list(`terms`).filter(e=>e.noteId===t),[a,t]),ne=s(()=>h.list(`embeds`).filter(e=>e.noteId===t),[a,t]),E=s(()=>An(t),[a,t]),re=s(()=>o.showArrows?h.list(`arrows`).filter(e=>e.noteId===t):[],[a,t,o.showArrows]),ie=s(()=>new Set(h.list(`stickies`).flatMap(e=>e.anchor.kind===`term`?[e.anchor.termId]:[])),[a]),D=o.weakFilter,O=s(()=>Rn({terms:te,columns:f,level:y,eras:L.eras,gengo:L.gengo,gengoTo:L.gengoCoverage.to,weakBonus:h.settings.weakBonus,filter:D||w?e=>(!D||e.weakness>=D)&&(!w||w.has(e.id)):void 0,embeds:w?[]:ne,stickies:w?[]:E,expanded:x}),[te,f,y,D,h.settings.weakBonus,w,ne,E,x]),k=h.settings.redSheet,A=s(()=>{let e=new Set;for(let t of k.groups??[]){let n=h.get(`groups`,t);if(n&&!n.deletedAt)for(let t of mn(n))e.add(t.id)}return e},[k.groups,a]),ae=s(()=>{let e=Mr(o.redSheet,k,kr.value,Ar.value);return!o.redSheet||Ar.value||!A.size?e:t=>e(t)||A.has(t.id)&&!kr.value.has(t.id)},[o.redSheet,k,kr.value,Ar.value,A]),[oe,se]=u(0),ce=h.settings.tlText??0;Un(ce);let le=s(()=>qn(te,f),[te,f,oe,ce]),j=s(()=>Sr(O,f,ae,le),[O,f,ae,oe,le,ce]),M=e(null),ue=e(null),de=e(null),N=e(null),pe=e(null),me=e(null),he=e(null),_e=e(null),ye=e(null),be=e(null),xe=e(null),Se=()=>_e.current??me.current,Ce=()=>ye.current??he.current,P=e(0),we=e(null),Te=e(null),Ee=e(0),De=e(600),Oe=e([0,0]),[,ke]=u(0),Ae=e(j),je=e(O),F=e(_);Ae.current=j,je.current=O,F.current=_;let Me=r?r.initialYear:o.focusYear,I=e({year:Me,screenY:Ua}),[Ne,Pe]=u(null),[Fe,Ie]=u(null),[Le,R]=u(null),[Re,ze]=u(null),[z,Be]=u(null),[Ve,He]=u(!1),[Ue,We]=u(null),[Ge,Ke]=u(null),[qe,Je]=u(null),[Ye,Xe]=u(null);i(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue(`--sans`).trim();er(e),se(e=>e+1),document.fonts?.ready.then(()=>{er(e),se(e=>e+1)})},[]);let Ze=e(O.items.length>0);!Ze.current&&O.items.length>0&&(Ze.current=!0,I.current={year:r?r.initialYear:B.value.focusYear,screenY:Ua});let Qe=e(null);if(!I.current&&Qe.current&&Qe.current.geo!==j&&M.current){let e=Dr(Qe.current.items,Qe.current.geo,M.current.scrollTop+Ua-Y.HEAD_H);e!=null&&(I.current={year:e,screenY:Ua})}Qe.current={geo:j,items:O.items};let $e=e(r?.follow?.seq??0);if(r?.follow&&r.follow.seq!==$e.current&&($e.current=r.follow.seq,I.current={year:r.follow.year,screenY:Ua}),I.current){let e=I.current,t=Er(O.items,j,e.year,zn);Ee.current=Math.max(0,Math.min(Math.max(0,Y.HEAD_H+j.total+Y.BOTTOM_PAD-De.current),t-(e.screenY-Y.HEAD_H)))}let et=Math.max(0,Tr(j,Ee.current-Ha)),tt=Math.min(O.items.length-1,Tr(j,Ee.current+De.current+Ha));Oe.current=[et,tt];let nt=e(!1);i(()=>{let e=M.current;De.current=e.clientHeight,!P.current&&!r&&o.scrollX&&(P.current=o.scrollX);let t=Ce();t&&Math.abs(t.scrollLeft-P.current)>1&&(t.scrollLeft=P.current),de.current&&(de.current.style.transform=`translateX(${-P.current}px)`),I.current&&=(nt.current=!!r,e.scrollTop=Ee.current,null),ot(),rt()});function rt(){let e=we.current,t=Se(),n=N.current,r=ue.current;if(!e||!t||!n||!r||(we.current=null,matchMedia(`(prefers-reduced-motion: reduce)`).matches))return;let i=r.getBoundingClientRect(),a=e=>e.bottom>i.top-300&&e.top<i.bottom+300,o=new Set,s=[];t.classList.add(`morph`),t.querySelectorAll(`[data-tid]`).forEach(t=>{let n=t.getBoundingClientRect();if(!a(n))return;let r=e.chips.get(t.dataset.tid);if(t.style.transition=`none`,r){o.add(t.dataset.tid);let e=r.left-n.left,i=r.top-n.top;if(Math.abs(e)+Math.abs(i)<1)return;t.style.transform=`translate(${e}px, ${i}px)`}else t.style.opacity=`0`;s.push(t)}),t.querySelectorAll(`.tl-yrs .yr-in`).forEach(e=>{a(e.getBoundingClientRect())&&(e.style.transition=`none`,e.style.opacity=`0`,s.push(e))});let c=[],l=(e,t)=>{let r=e.cloneNode(!0);r.style.left=t.left-i.left+`px`,r.style.top=t.top-i.top+`px`,r.style.width=t.width+`px`,r.style.height=t.height+`px`,r.style.transform=``,r.style.opacity=`1`,n.appendChild(r),c.push(r)};for(let t of e.clones)o.has(t.id)||l(t.el,t.r);for(let t of e.yrs)l(t.el,t.r);t.offsetWidth;for(let e of s)e.style.transition=`transform 260ms cubic-bezier(.2,.8,.25,1), opacity 220ms ease-out`,e.style.transform=``,e.style.opacity=``;requestAnimationFrame(()=>{for(let e of c)e.style.opacity=`0`}),setTimeout(()=>{for(let e of c)e.remove();t.classList.remove(`morph`);for(let e of s)e.style.transition=``},300)}let it=e(null),at=e=>{let t=e.currentTarget;t===Ce()&&(P.current=t.scrollLeft,de.current&&(de.current.style.transform=`translateX(${-P.current}px)`),yt(),it.current&&clearTimeout(it.current),r||(it.current=setTimeout(()=>H({scrollX:P.current}),300)))};function ot(){let e=M.current,t=Te.current;if(!e||!t)return;let n=Ae.current,r=je.current.items,i=e.scrollTop,a=Tr(n,i);if(a<0){t.style.opacity=`0`;return}let o=a;for(;o<r.length&&r[o].kind===`era`;)o++;let s=(r[Math.min(o,r.length-1)]??r[a]).era,c=0;for(let e=a+1;e<Math.min(r.length,a+4);e++)if(r[e].kind===`era`){let t=n.offsets[e]-i;t<Y.ERA_H&&(c=t-Y.ERA_H);break}if(p[F.current].bucket===`era`){t.style.opacity=`0`;return}t.style.opacity=`1`,t.style.transform=`translateY(${c}px)`,t.style.setProperty(`--c`,`var(--era-${s.id})`),t.dataset.era!==s.id&&(t.dataset.era=s.id,t.querySelector(`b`).textContent=s.name,t.querySelector(`small`).textContent=s.label??`${s.from}〜${s.to<9999?s.to:``}`)}let st=e(null),ct=()=>{yt();let e=M.current;Ee.current=e.scrollTop,De.current=e.clientHeight;let t=Ae.current,n=Tr(t,Ee.current-Ha/2),i=Tr(t,Ee.current+De.current+Ha/2),[a,o]=Oe.current;(n<a||i>o)&&ke(e=>e+1),ot(),st.current&&clearTimeout(st.current),st.current=setTimeout(()=>{if(nt.current){nt.current=!1;return}let t=Dr(je.current.items,Ae.current,e.scrollTop+Ua-Y.HEAD_H);t!=null&&(r?r.onYear(t):kt(t,`timeline`))},120)};function lt(){let e=Se(),t=ue.current;if(!e||!t)return;let n=t.getBoundingClientRect(),r=e=>e.bottom>n.top+34&&e.top<n.bottom&&e.right>n.left&&e.left<n.right,i=new Map,a=[];e.querySelectorAll(`[data-tid]`).forEach(e=>{let t=e.getBoundingClientRect();r(t)&&(i.set(e.dataset.tid,t),a.push({id:e.dataset.tid,el:e,r:t}))});let o=[];e.querySelectorAll(`.tl-yrs .yr`).forEach(e=>{let t=e.getBoundingClientRect();r(t)&&o.push({el:e,r:t})}),we.current={chips:i,clones:a,yrs:o}}let ut=(e,t,n=!0)=>{let r=Math.max(0,Math.min(p.length-1,e));if(r===F.current)return;n&&lt();let i=M.current,a=Dr(je.current.items,Ae.current,i.scrollTop+t-Y.HEAD_H);a!=null&&(I.current={year:a,screenY:t}),F.current=r,v(r),Pe(Bn(p[r]))};l(()=>{if(!Ne)return;let e=setTimeout(()=>Pe(null),1400);return()=>clearTimeout(e)},[Ne]),l(()=>{let e=M.current,t=null,n=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY),r=()=>{let e=me.current;!be.current&&e&&xe.current&&(be.current=xe.current,e.style.position=`absolute`,e.style.top=`0`,e.style.left=`0`,e.style.right=`0`,e.style.visibility=`hidden`)},i=()=>{if(!be.current)return;be.current=null;let e=me.current;e&&(e.style.position=``,e.style.top=``,e.style.left=``,e.style.right=``,e.style.visibility=``),ke(e=>e+1)},a=e=>{let t=pe.current;if(!t)return;if(e==null){t.classList.remove(`on`);return}t.classList.add(`on`);let n=t.querySelector(`b`);n&&(n.style.top=`${Math.max(0,Math.min(p.length-1,e))/(p.length-1)*100}%`)},o=0,s=setInterval(()=>{!be.current||performance.now()-o<2e3||(t=null,a(null),i())},500),c=r=>{if(o=performance.now(),r.touches.length>=2&&yt(),r.touches.length!==2)return;let i=(ue.current??e).getBoundingClientRect(),a=(r.touches[0].clientX+r.touches[1].clientX)/2-i.left,s=(r.touches[0].clientY+r.touches[1].clientY)/2-i.top;t={d0:n(r.touches),mx:a,my:s,base:F.current,cur:F.current,t:performance.now(),dev:0}},l=e=>{if(o=performance.now(),!t||e.touches.length!==2)return;e.preventDefault();let i=n(e.touches)/t.d0;t.dev=Math.max(t.dev,Math.abs(i-1));let s=Math.log(i)/Math.log(Wa),c=s-(t.base-t.cur),l=t.cur;for(;c>.6&&l>0;)l--,--c;for(;c<-.6&&l<p.length-1;)l++,c+=1;a(t.base-s),l!==t.cur&&(lt(),r(),t.cur=l,ut(l,t.my,!1),navigator.vibrate?.(5))},u=e=>{if(o=performance.now(),t&&e.touches.length<2){let e=t;t=null,a(null),e.cur===e.base&&performance.now()-e.t<260&&e.dev<.05&&(lt(),r(),ut(F.current+1,e.my,!1))}e.touches.length===0&&i()},d=e=>e.preventDefault();e.addEventListener(`touchstart`,c,{passive:!0}),e.addEventListener(`touchmove`,l,{passive:!1}),e.addEventListener(`touchend`,u),e.addEventListener(`touchcancel`,u),document.addEventListener(`gesturestart`,d);let f=0,m=t=>{if(t.ctrlKey&&(t.preventDefault(),f+=t.deltaY,Math.abs(f)>40)){let n=(ue.current??e).getBoundingClientRect();ut(F.current+(f>0?1:-1),t.clientY-n.top),f=0}};return e.addEventListener(`wheel`,m,{passive:!1}),()=>{clearInterval(s),e.removeEventListener(`touchstart`,c),e.removeEventListener(`touchmove`,l),e.removeEventListener(`touchend`,u),e.removeEventListener(`touchcancel`,u),e.removeEventListener(`wheel`,m),document.removeEventListener(`gesturestart`,d)}},[]),l(()=>{let e=M.current,t=new ResizeObserver(()=>{De.current=e.clientHeight,ke(e=>e+1)});return t.observe(e),()=>t.disconnect()},[]),l(()=>{if(r)return;let e=At.value;if(!e)return;At.value=null;let t=e.level??F.current;if(e.termId){let n=h.get(`terms`,e.termId);if(n&&!Fn(n,p[t],h.settings.weakBonus))for(;t>0&&!Fn(n,p[t],h.settings.weakBonus);)t--;Mt.value=e.termId,setTimeout(()=>{Mt.value===e.termId&&(Mt.value=null)},2600)}I.current={year:e.year,screenY:Y.HEAD_H+Math.round(De.current*.35)},t===F.current?ke(e=>e+1):v(t)},[At.value]);let dt=e(null),ft=e(null),pt=e(null),mt=e=>e.clientY-(ue.current??M.current).getBoundingClientRect().top,ht=e=>{let t=e.target,n=t.closest(`[data-arrow]`);if(n){Ke(n.dataset.arrow);return}let r=t.closest(`[data-sticky]`);if(r){Je(r.dataset.sticky);return}let i=t.closest(`[data-eid]`);if(i){Xe(i.dataset.eid);return}let a=t.closest(`[data-tid]`);if(a){let e=a.dataset.tid,t=ja.value;if(t){t!==e&&(ja.value=null,We({from:t,to:e}));return}if(z){let t=new Set(z);t.has(e)?t.delete(e):t.add(e),Be(t);return}if(a.classList.contains(`mask`)){Pr(e);return}if(B.value.weakPen){let t=ve(e);K(t?`苦手度 ${t}`:`苦手度を解除`,{ms:1400,key:`pen`});return}H({openTermId:e});return}let o=t.closest(`[data-more],[data-less]`);if(o){let t=o.closest(`[data-cell]`)?.dataset.cell,n=p[F.current]?.bucket;t&&(o.dataset.less||typeof n==`number`&&n<=2)?S(e=>{let n=new Set(e);return o.dataset.less?n.delete(t):n.add(t),n}):ut(F.current-1,mt(e));return}let s=performance.now(),c=dt.current;c&&s-c.t<320&&Math.hypot(e.clientX-c.x,e.clientY-c.y)<30?(dt.current=null,ut(F.current-1,mt(e))):dt.current={t:s,x:e.clientX,y:e.clientY}},gt=e(new Set),_t=e=>{if(gt.current.add(e.pointerId),gt.current.size>1){yt();return}let t=e.target.closest(`[data-cell]`);t&&!e.target.closest(`[data-tid],[data-more],[data-less],[data-eid]`)&&(pt.current={x:e.clientX,y:e.clientY},ft.current&&clearTimeout(ft.current),ft.current=setTimeout(()=>{if(ft.current=null,gt.current.size>1)return;let[e,n]=t.dataset.cell.split(`|`);ze({col:e,year:+n}),navigator.vibrate?.(10)},550))},vt=e=>{gt.current.delete(e.pointerId),yt()},yt=e=>{e&&pt.current&&Math.hypot(e.clientX-pt.current.x,e.clientY-pt.current.y)<8&&e.type===`pointermove`||(ft.current&&=(clearTimeout(ft.current),null))},bt=e=>d?.columns?.find(t=>t.id===e)?.name??e,xt=r?r.follow?.year??r.initialYear:o.focusYear,St=b(Math.floor(xt),L.eras),Ct=s(()=>new Set(O.items.flatMap(e=>e.kind===`row`?[e.era.id]:[])),[O]),wt=e=>{let t=L.eras.find(t=>t.id===e);I.current={year:t.from,screenY:Ua},ke(e=>e+1),r?r.onYear(t.from):kt(t.from,`timeline`)},Tt=L.eras.findIndex(e=>e.id===St.id),Et=Math.max(0,Math.min(1,(xt-St.from)/Math.max(1,Math.min(St.to,2030)-St.from))),Dt=e(null);l(()=>{(Dt.current?.querySelector(`.era-chip.on`))?.scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`})},[St.id]);let V=O.items,Ot=[],jt=[],U=[];for(let e=et;e<=tt&&e<V.length;e++){let t=V[e];t.kind===`era`?U.push(T(Ya,{era:t.era,top:j.offsets[e]},t.key)):t.kind===`embed`?U.push(T(Va,{item:t,top:j.offsets[e],height:j.heights[e]},t.key)):(Ot.push(T(Xa,{item:t,top:j.offsets[e],height:j.heights[e]},t.key)),jt.push(T(Za,{item:t,top:j.offsets[e],height:j.heights[e],columns:f,geo:j,isMasked:ae,stickyIds:ie,hl:Mt.value,sel:z},t.key)))}let Nt=s(()=>{let e=new Map;return V.forEach((t,n)=>{if(t.kind===`row`)for(let r of Object.values(t.cells)){for(let t of r.points)e.set(t.id,n);for(let t of r.spans)(t.start||!e.has(t.term.id))&&e.set(t.term.id,n)}}),e},[O]),Pt=new Map,Ft=e=>{let t=Nt.get(e);if(t==null)return null;let n=Pt.get(t);return n||(n=Or(V[t],j.offsets[t],f,j,ae),Pt.set(t,n)),n.get(e)??null},It=[];for(let e of re){let t=Nt.get(e.from),n=Nt.get(e.to);if(t==null||n==null||Math.max(t,n)<et||Math.min(t,n)>tt)continue;let r=Ft(e.from),i=Ft(e.to);if(!r||!i)continue;let a={...r,x:r.x-Y.YEAR_W},o={...i,x:i.x-Y.YEAR_W};It.push({a:e,d:Ja(a,o),mid:{x:(a.x+a.w/2+o.x+o.w/2)/2,y:(a.y+a.h/2+o.y+o.h/2)/2}})}let Lt=[];for(let e of O.items.length?E:[]){if(e.anchor.kind!==`timeline`)continue;let t=f.findIndex(t=>t.id===e.anchor.col);if(t<0)continue;let n=zn(V,e.anchor.year);n<et||n>tt||Lt.push({s:e,x:j.colX[t]-Y.YEAR_W+10+(e.dx??0),y:j.offsets[n]+8+(e.dy??0)})}let Rt=t===`n-main`?`全体年表`:d?.name??`年表`,zt=sn(d?.folderId),Bt=z&&T(`div`,{class:`sel-bar`,children:[T(`span`,{class:`t`,children:[z.size,`語を選択`]}),T(`button`,{disabled:!z.size,onClick:()=>He(!0),children:[T(W,{name:`stack`}),`グループ`]}),T(`button`,{disabled:z.size<2,onClick:()=>{let e=xn([...z]);e&&(Be(null),H({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`))},children:[T(W,{name:`cols3`}),`比較表`]}),T(`button`,{disabled:!z.size,onClick:()=>{for(let e of z){let t=h.get(`terms`,e);t&&!t.hide&&ge(e,{hide:!0},`「${t.name}」を赤シートの対象に`)}K(`${z.size}語を赤シートの対象にしました`),Be(null)},children:[T(W,{name:`eyeOff`}),`赤シート`]}),T(`button`,{disabled:!z.size,onClick:()=>{let e=gn({links:[...z].map(e=>({kind:`term`,id:e}))});Be(null),H({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[T(W,{name:`note`}),`苦手メモ`]}),T(`button`,{class:`end`,onClick:()=>Be(null),children:`終わる`})]}),Vt=j.totalW-Y.YEAR_W,Ht=(e,n,r)=>T(`div`,{class:`tl-body ${o.weakPen?`pen`:``} ${z?`selecting`:``} ${ja.value?`picking`:``}`,ref:n,style:{height:j.total+Y.BOTTOM_PAD+`px`},children:[T(`div`,{class:`tl-h`,ref:r,onScroll:at,children:T(`div`,{class:`tl-hin`,style:{width:Vt+`px`,height:j.total+Y.BOTTOM_PAD+`px`},children:[jt,It.length>0&&T(`svg`,{class:`tl-arrows`,width:Vt,height:j.total,"aria-hidden":`true`,children:[T(`defs`,{children:T(`marker`,{id:`ah-${t}`,viewBox:`0 0 10 10`,refX:`8`,refY:`5`,markerWidth:`7`,markerHeight:`7`,orient:`auto-start-reverse`,children:T(`path`,{d:`M0 0 L10 5 L0 10 z`,class:`ah`})})}),It.map(({a:e,d:n})=>T(`g`,{children:[T(`path`,{d:n,class:`ar`,"marker-end":`url(#ah-${t})`}),T(`path`,{d:n,class:`ar-hit`,"data-arrow":e.id})]},e.id))]}),It.map(({a:e,mid:t})=>e.label?T(`button`,{class:`ar-label`,"data-arrow":e.id,style:{left:t.x+`px`,top:t.y+`px`},children:e.label},e.id):null),Lt.map(({s:e,x:t,y:n})=>T(`button`,{class:`tl-sticky c-${e.color} ${e.collapsed?`folded`:``}`,"data-sticky":e.id,style:{left:t+`px`,top:n+`px`},children:e.collapsed?T(W,{name:`sticker`,size:16}):T(c,{children:[T(`span`,{class:`sh`,children:[T(W,{name:`pin`,size:13}),`付箋`]}),T(`span`,{class:`tx`,children:e.text||`（空の付箋）`})]})},e.id))]})}),T(`div`,{class:`tl-yrs`,style:{height:j.total+`px`},children:Ot}),U]},e),G;if(be.current)G=[be.current,Ht(`live`,_e,ye)];else{let e=Ht(`body`,me,he);xe.current=e,G=[e]}return T(`div`,{class:`view tl-view ${r?`pane`:``}`,children:[T(`header`,{class:`appbar`,children:[n&&T(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:n,children:T(W,{name:`chevronLeft`})}),T(`div`,{class:`tt`,children:[!r&&T(`div`,{class:`crumb`,children:[`ノート`,zt.map(e=>T(c,{children:[T(W,{name:`chevronRight`}),e.name]})),T(W,{name:`chevronRight`}),`年表`]}),T(`h1`,{class:`title`,children:Rt})]}),!r&&T(`button`,{class:`iconbtn`,"aria-label":`検索`,onClick:()=>Ta(),children:T(W,{name:`search`})}),!r&&T(`button`,{class:`iconbtn`,"aria-label":`元に戻す`,disabled:!h.canUndo.value,onClick:Rr,children:T(W,{name:`undo`})}),!r&&T(`button`,{class:`iconbtn`,"aria-label":`やり直し`,disabled:!h.canRedo.value,onClick:zr,children:T(W,{name:`redo`})}),r&&T(`button`,{class:`tool zoom sm`,onClick:()=>R(`view`),children:[T(W,{name:`zoomIn`}),y.bucket===`era`?`時代`:`${y.bucket}年`]})]}),!r&&T(c,{children:[T(`div`,{class:`erarail`,ref:Dt,children:L.eras.filter(e=>e.id!==`reiwa`||Ct.has(`reiwa`)).map(e=>T(`button`,{class:`era-chip ${e.id===St.id?`on`:``} ${Ct.has(e.id)?``:`nodata`}`,style:{"--c":`var(--era-${e.id})`},onClick:()=>wt(e.id),children:e.name.replace(`時代`,``)},e.id))}),T(`div`,{class:`ruler`,"aria-hidden":`true`,children:[L.eras.map(e=>T(`span`,{class:e.id===St.id?`on`:``,style:{"--c":`var(--era-${e.id})`}},e.id)),T(`span`,{class:`mk`,style:{left:`calc(${(Tt+Et)/L.eras.length*100}% - 1px)`}})]}),T(`div`,{class:`tools`,children:[T(`button`,{class:`tool ${o.redSheet?`sheet-on`:``}`,onClick:()=>{H({redSheet:!o.redSheet}),Fr()},children:[T(W,{name:`eyeOff`}),`赤シート`]}),T(`button`,{class:`tool`,onClick:()=>R(`view`),children:[T(W,{name:`columns`}),`表示`,D?T(`small`,{children:[`苦手`,D,`+`]}):null]}),T(`button`,{class:`tool ${o.weakPen?`pen-on`:``}`,onClick:()=>H({weakPen:!o.weakPen}),children:[T(W,{name:`ballpen`}),`苦手ペン`]}),T(`button`,{class:`tool icon`,onClick:()=>R(`more`),"aria-label":`ほかの操作`,children:T(W,{name:`dots`})}),T(`button`,{class:`tool zoom`,onClick:()=>R(`view`),"aria-label":`ズームの段階`,children:[T(W,{name:`zoomIn`}),y.bucket===`era`?`時代`:`${y.bucket}年`]})]})]}),o.redSheet&&!r&&T(`div`,{class:`subbar rs`,children:[T(`span`,{class:`t`,children:[Lr(k,bt),(k.groups??[]).length?`・グループ`:``,`を隠す`]}),T(`button`,{onClick:Ir,children:`全部めくる`}),T(`button`,{onClick:Fr,children:`全部隠す`}),T(`button`,{onClick:()=>R(`red`),"aria-label":`隠す対象`,children:T(W,{name:`adjust`})})]}),o.weakPen&&!r&&T(`div`,{class:`subbar pen`,children:[T(`span`,{class:`t`,children:`苦手ペン：用語をタップするたびに なし→1→2→3`}),T(`button`,{onClick:()=>H({weakPen:!1}),children:`終わる`})]}),C&&T(`div`,{class:`subbar grp`,children:[T(W,{name:`stack`}),T(`span`,{class:`t`,children:[`グループ「`,C.name,`」だけ表示`]}),T(`button`,{onClick:()=>H({openGroupId:C.id}),children:`詳細`}),T(`button`,{onClick:()=>H({groupFilter:null}),children:`解除`})]}),ja.value&&!r&&T(`div`,{class:`subbar arrow`,children:[T(W,{name:`arrowRight`}),T(`span`,{class:`t`,children:[`矢印の行き先の用語をタップ（「`,h.get(`terms`,ja.value)?.name,`」から）`]}),T(`button`,{onClick:()=>{ja.value=null},children:`やめる`})]}),T(`div`,{class:`tl-wrap`,ref:ue,style:Wn(),children:[T(`div`,{class:`tl-v`,ref:M,onScroll:ct,onClick:ht,onDblClick:e=>{e.target.closest(`[data-tid],[data-more],[data-less],[data-sticky],[data-arrow],[data-eid]`)||ut(F.current-1,mt(e))},onPointerDown:_t,onPointerUp:vt,onPointerMove:yt,onPointerCancel:vt,onPointerLeave:vt,children:[G,!V.length&&T(`div`,{class:`tl-empty`,children:te.length?`この段階で表示する用語がありません。ピンチで拡大してください`:`用語がまだありません。右下の＋から追加できます`})]}),T(`div`,{class:`tl-head`,children:[T(`div`,{class:`cols`,ref:de,children:f.map((e,t)=>T(`div`,{style:{width:j.colW[t]+`px`},children:e.name},e.id))}),T(`div`,{class:`yr-h`,children:`年`})]}),T(`div`,{class:`era-sticky`,ref:Te,"aria-hidden":`true`,children:[T(`b`,{}),T(`small`,{})]}),T(`div`,{class:`tl-ghosts`,ref:N,"aria-hidden":`true`}),T(`div`,{class:`zoom-meter`,ref:pe,"aria-hidden":`true`,children:[p.map((e,t)=>T(`i`,{style:{top:`${t/Math.max(1,p.length-1)*100}%`}},t)),T(`b`,{})]}),Ne&&T(`div`,{class:`zoom-hint`,children:Ne})]}),z?Bt:!r&&T(`button`,{class:`fab`,"aria-label":`用語を追加`,onClick:()=>Ie({year:Math.floor(o.focusYear)}),children:T(W,{name:`plus`})}),T(Vr,{preset:Fe,onClose:()=>Ie(null),columns:d?.columns??[],noteId:t}),T(Hr,{open:Le===`view`,onClose:()=>R(null),level:_,onLevel:e=>ut(e,Ua),noteId:t}),T(Ur,{open:Le===`red`,onClose:()=>R(null),columns:d?.columns??[]}),T(Fa,{open:Le===`more`,onClose:()=>R(null),noteId:t,onSelect:()=>{Be(new Set),R(null)},onMap:()=>{R(null),Ka(Math.floor(o.focusYear))},onCompare:()=>{R(null),Ki({kind:`timeline`,id:t})}}),T(Na,{at:Re,noteId:t,onClose:()=>ze(null),onAdd:e=>{ze(null),Ie(e)}}),T(Ia,{open:Ve,count:z?.size??0,onClose:()=>He(!1),onCreate:e=>{let t=ln(e,[...z??[]].map(e=>({kind:`term`,id:e})));He(!1),Be(null),Z(`グループ「${t.name}」を作りました`)}}),T(La,{pair:Ue,noteId:t,onClose:()=>We(null)}),T(Ra,{id:Ge,onClose:()=>Ke(null)}),T(za,{id:qe,onClose:()=>Je(null)}),T(Ba,{id:Ye,onClose:()=>Xe(null)})]})}function Ja(e,t){let n={x:e.x+e.w/2,y:e.y+e.h/2},r={x:t.x+t.w/2,y:t.y+t.h/2};if(Math.abs(r.y-n.y)<10){let i=r.x>n.x,a=i?e.x+e.w:e.x,o=i?t.x-2:t.x+t.w+2,s=Math.min(40,Math.abs(o-a)/2+10);return`M${a} ${n.y} C ${a+(i?s:-s)} ${n.y-26}, ${o-(i?s:-s)} ${r.y-26}, ${o} ${r.y}`}let i=r.y>n.y,a=i?e.y+e.h:e.y,o=i?t.y-2:t.y+t.h+2,s=Math.min(80,Math.abs(o-a)*.45);return`M${n.x} ${a} C ${n.x} ${a+(i?s:-s)}, ${r.x} ${o-(i?s:-s)}, ${r.x} ${o}`}var Ya=dt(({era:e,top:t})=>T(`div`,{class:`tl-era`,"data-era":e.id,style:{top:t+`px`,"--c":`var(--era-${e.id})`},children:T(`div`,{class:`lbl`,children:[e.name,T(`span`,{class:`yrs`,children:e.label??`${e.from}〜${e.to<9999?e.to:``}`})]})})),Xa=dt(({item:e,top:t,height:n})=>T(`div`,{class:`yr ${e.gapBefore?`gap`:``}`,style:{top:t+`px`,height:n+`px`,"--c":`var(--era-${e.era.id})`},children:T(`div`,{class:`yr-in`,children:[T(`b`,{class:Cr(e.label)?`sm`:void 0,children:e.label}),e.sub&&T(`small`,{children:e.sub})]})})),Za=dt(({item:e,top:t,height:n,columns:r,geo:i,isMasked:a,stickyIds:o,hl:s,sel:c})=>T(`div`,{class:`tl-row ${e.gapBefore?`gap`:``}`,style:{top:t+`px`,height:n+`px`,width:i.totalW-Y.YEAR_W+`px`,"--c":`var(--era-${e.era.id})`},children:r.map((t,n)=>{let r=e.cells[t.id],l=xr(r),u=br(i.colW[n],l);return T(`div`,{class:`cell`,"data-cell":`${t.id}|${e.from}`,style:{width:i.colW[n]+`px`,paddingLeft:Y.CELL_PAD+l+`px`},children:[r?.spans.map(e=>T(Qa,{s:e},e.term.id)),r?.embeds.map(e=>T($a,{e,inner:u},e.id)),r&&pr(r).map(e=>T(eo,{t:e.t,inner:u,masked:a(e.t),sticky:o.has(e.t.id),span:e.span||Nn(e.t),cont:e.cont,yt:sr(e.t,!!r.coarse,e.span),hl:s===e.t.id,selected:!!c?.has(e.t.id)},e.t.id)),r?.more?T(`button`,{class:`more-chip`,"data-more":`1`,style:{width:fr(dr(r)).w+`px`},children:dr(r)}):r?.less?T(`button`,{class:`more-chip less`,"data-less":`1`,style:{width:fr(dr(r)).w+`px`},children:dr(r)}):null]},t.id)})}));function Qa({s:e}){let t=e.term,n=`ln ${e.start?`s`:``} ${e.end?`e`:``} t${Jn(t.importance)} ${t.weakness?`wk`+t.weakness:``}`;return T(`i`,{class:n,style:{left:Y.CELL_PAD+e.lane*Y.LANE_W+3+`px`}})}function $a({e,inner:t}){let n=_r(e,t),r=e.target.kind===`pin`?`pin`:h.get(`notes`,e.target.id)?.kind??`memo`;return T(`button`,{class:`embed-chip k-${r}`,"data-eid":e.id,style:{width:n.w+`px`,minHeight:n.h+`px`},children:[T(W,{name:r===`pin`?`mapPin`:Ga[r]??`note`,size:15}),T(`span`,{children:gr(e)})]})}function eo({t:e,inner:t,masked:n,sticky:r,span:i,cont:a,yt:o=``,hl:s,selected:c}){let l=cr(e,t,n,o),u=e.weakness?` wk${e.weakness}`:``;if(n)return T(`button`,{class:`mask${u}${c?` sel`:``}`,"data-tid":e.id,"aria-label":`隠れた用語（タップでめくる）`,style:{width:l.w+`px`}});let d=`term t${Jn(e.importance)}${u}${e.status===`unverified`?` unv`:``}${r?` has-sticky`:``}${i?` span-start`:``}${a?` cont`:``}${s?` hl`:``}${c?` sel`:``}${kr.value.has(e.id)?` peeled`:``}${Date.now()-(Nr.get(e.id)??0)<600?` peeling`:``}`;return T(`button`,{class:d,"data-tid":e.id,style:{width:l.w+`px`,minHeight:l.h+`px`},children:[T(`span`,{class:`tx`,children:l.lines?l.lines.map((e,t)=>t?[T(`br`,{}),e]:e):e.name}),l.years&&T(`small`,{class:`yrs ${l.years}`,children:o})]})}o(0);function to(){h.rev.value;let e=B.value.openTermId,t=e?h.get(`terms`,e):void 0,n=!!t&&!t.deletedAt,r=()=>H({openTermId:null});return l(()=>{e&&(!t||t.deletedAt)&&r()},[e,t]),T(J,{open:n,onClose:r,class:`term-sheet`,children:t&&T(ro,{t,onClose:r},t.id)})}var no=e=>{let t=`${m(e.from)}${e.from>0?`年`:``}`,n=ee(e.from,L.gengo,L.gengoCoverage.to),r=e.to!=null&&e.to!==e.from?`〜${m(e.to)}${e.to>0?`年`:``}`:``;return`${e.approx?`約`:``}${t}${r}${n&&!r?`・${n}`:``}`};function ro({t,onClose:n}){let r=h.get(`notes`,t.noteId??`n-main`)?.columns??[],i=r.find(e=>e.id===t.col),a=b(t.when.from,L.eras),o=xe(t.id),[s,d]=u(!1),[f,p]=u(t.name),[m,g]=u(t.yomi??``),[_,v]=u(t.desc),[y,x]=u(o?.text??``),[S,ee]=u(!t.desc),[C,w]=u(!1),[te,ne]=u(``),[E,re]=u(String(t.when.from)),[ie,D]=u(t.when.to==null?``:String(t.when.to));l(()=>{v(t.desc)},[t.desc]),l(()=>{x(xe(t.id)?.text??``)},[o?.text]);let O=()=>{let e=h.get(`terms`,t.id);e&&!e.deletedAt&&_!==e.desc&&ge(t.id,{desc:_},`「${t.name}」の説明を編集`)},k=()=>{let e=h.get(`terms`,t.id);e&&!e.deletedAt&&Se(t.id,y)},A=e({saveDesc:O,saveSticky:k});A.current={saveDesc:O,saveSticky:k},l(()=>()=>{A.current.saveDesc(),A.current.saveSticky()},[]);let ae=()=>{let e=parseInt(E,10),n=ie.trim()?parseInt(ie,10):void 0;if(!f.trim()||Number.isNaN(e)||n!=null&&(Number.isNaN(n)||n<e))return!1;let r={...t.when,from:e,to:n};return n??delete r.to,ge(t.id,{name:f,yomi:m.trim()||void 0,when:r,shape:n!=null&&n>e?t.shape===`point`?`span`:t.shape:`point`}),!0};return T(`div`,{class:`tsheet`,children:[T(`div`,{class:`sheet-top`,children:[T(`span`,{class:`pill era`,style:{"--c":`var(--era-${a.id})`},children:a.name}),T(`button`,{class:`pill`,onClick:()=>d(!s),children:no(t.when)}),T(`label`,{class:`pill sel`,children:[i?.name??t.col,T(`select`,{value:t.col,onChange:e=>ge(t.id,{col:e.target.value},`「${t.name}」を「${r.find(t=>t.id===e.target.value)?.name}」へ移動`),"aria-label":`列を変える（移動）`,children:r.map(e=>T(`option`,{value:e.id,children:e.name},e.id))})]}),T(`span`,{class:`sp`}),T(`button`,{class:`iconbtn`,"aria-label":`編集`,onClick:()=>d(!s),children:T(W,{name:s?`check`:`ballpen`})})]}),s?T(`div`,{class:`edit-basic`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{value:f,onInput:e=>p(e.target.value)})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`読み`}),T(`input`,{value:m,placeholder:`（なくてもよい）`,onInput:e=>g(e.target.value)})]}),T(`div`,{class:`fld-row`,children:[T(`label`,{class:`fld`,children:[T(`span`,{children:`年（始まり）`}),T(`input`,{inputMode:`numeric`,value:E,onInput:e=>re(e.target.value)})]}),T(`label`,{class:`fld`,children:[T(`span`,{children:`終わり（期間なら）`}),T(`input`,{inputMode:`numeric`,value:ie,placeholder:`なし`,onInput:e=>D(e.target.value)})]})]}),T(`p`,{class:`hint`,children:`紀元前は「-」を付けます（前300年 → -300）。`}),T(`button`,{class:`btn primary wide`,onClick:()=>{ae()&&d(!1)},children:`保存`})]}):T(c,{children:[T(`h2`,{class:`term-title`,children:t.name}),t.yomi&&T(`div`,{class:`yomi`,children:t.yomi})]}),T(`div`,{class:`verify`,children:t.status===`unverified`?T(c,{children:[T(`span`,{class:`unv-badge`,children:[T(W,{name:`sparkles`}),`AI作成・未確認`]}),T(`button`,{class:`linkbtn`,onClick:()=>be(t.id,!0),children:[T(W,{name:`circleCheck`}),`教科書で確認した`]})]}):T(c,{children:[T(`span`,{class:`ok-badge`,children:[T(W,{name:`circleCheck`}),t.author===`me`?`自分で作成`:`確認済み`]}),t.author===`ai`&&T(`button`,{class:`linkbtn sub`,onClick:()=>be(t.id,!1),children:`未確認に戻す`})]})}),T(`div`,{class:`f-label`,children:[`苦手度`,T(`small`,{children:`もう一度押すと解除`})]}),T(`div`,{class:`seg weak`,children:[0,1,2,3].map(e=>T(`button`,{class:t.weakness===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-4)`},onClick:()=>{let n=t.weakness===e?0:e;_e(t.id,n),Z(n?`苦手度を ${n} にしました`:`苦手度を解除しました`,`weak`)},children:e?T(c,{children:[T(`i`,{}),e]}):`なし`},e))}),T(`div`,{class:`f-label`,children:[`重要度`,T(`small`,{children:t.importanceBy===`ai`?`AIの初期値（変更できます）`:`自分で設定`})]}),T(`div`,{class:`imp10`,role:`radiogroup`,"aria-label":`重要度`,children:[Array.from({length:10},(e,t)=>t+1).map(e=>T(`button`,{role:`radio`,"aria-checked":t.importance===e,"aria-label":`重要度${e}`,class:e<=t.importance?`on`:``,style:{height:10+e*2.2+`px`},onClick:()=>ye(t.id,e)},e)),T(`div`,{class:`imp-txt`,children:[T(`b`,{children:t.importance}),Br[t.importance]]})]}),T(`div`,{class:`f-label`,children:`形`}),T(`div`,{class:`seg two`,children:[T(`button`,{class:t.shape===`point`?`on`:``,onClick:()=>ge(t.id,{shape:`point`},`「${t.name}」を単発に`),children:`単発（出来事）`}),T(`button`,{class:t.shape===`span`?`on`:``,onClick:()=>{if(t.when.to==null||t.when.to<=t.when.from){d(!0);return}ge(t.id,{shape:`span`},`「${t.name}」を期間に`)},children:`期間（線で表示）`})]}),t.shape===`span`&&t.when.to==null&&T(`p`,{class:`hint`,children:`期間にするには「終わり」の年を入れてください。`}),T(`div`,{class:`f-label`,children:[`説明`,T(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),S||!t.desc?T(`textarea`,{class:`desc`,rows:3,value:_,placeholder:`説明を書く…`,onInput:e=>v(e.target.value),onBlur:()=>{O(),_&&ee(!1)}}):T(`div`,{class:`desc view`,onClick:()=>ee(!0),children:T(ia,{text:t.desc,sheet:B.value.redSheet})}),T(`div`,{class:`f-label`,children:`付箋`}),T(`div`,{class:`sticky-card c-${o?.color??`yellow`}`,children:[T(`textarea`,{rows:2,value:y,placeholder:`短いメモ（表に印が付きます）`,onInput:e=>x(e.target.value),onBlur:k}),o&&T(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(e=>T(`button`,{class:`c-${e} ${o.color===e?`on`:``}`,"aria-label":`付箋の色：${e}`,onClick:()=>Se(t.id,y||o.text,e)},e))})]}),T(`div`,{class:`f-label`,children:`つながり`}),T(`div`,{class:`links`,children:[pn(t.id).map(e=>T(`button`,{class:`lk`,onClick:()=>H({openGroupId:e.id}),children:[T(W,{name:`stack`}),T(`span`,{class:`grow`,children:[e.name,T(`span`,{class:`sub`,children:`グループ`})]}),T(W,{name:`chevronRight`})]},e.id)),vn(t.id).map(e=>T(`button`,{class:`lk`,onClick:()=>H({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id}),children:[T(W,{name:`note`}),T(`span`,{class:`grow`,children:[e.title||`苦手メモ`,T(`span`,{class:`sub`,children:e.status===`done`?`解決`:e.status===`doing`?`取組中`:`未解決`})]}),T(W,{name:`chevronRight`})]},e.id)),h.list(`arrows`).filter(e=>e.from===t.id||e.to===t.id).map(e=>{let n=h.get(`terms`,e.from===t.id?e.to:e.from);return T(`button`,{class:`lk`,onClick:()=>n&&H({openTermId:n.id}),children:[T(W,{name:`arrowRight`}),T(`span`,{class:`grow`,children:[e.from===t.id?`→ `:`← `,n?.name,e.label&&T(`span`,{class:`sub`,children:[`〈`,e.label,`〉`]})]}),T(W,{name:`chevronRight`})]},e.id)})]}),C?T(`div`,{class:`group-pick`,children:[h.list(`groups`).map(e=>T(`button`,{class:`chip`,onClick:()=>{dn(e.id,[t.id]),w(!1),Z(`グループ「${e.name}」に入れました`)},children:e.name},e.id)),T(`div`,{class:`add-row`,children:[T(`input`,{value:te,placeholder:`新しいグループの名前`,onInput:e=>ne(e.target.value)}),T(`button`,{class:`btn`,onClick:()=>{let e=ln(te||t.name,[{kind:`term`,id:t.id}]);w(!1),ne(``),Z(`グループ「${e.name}」を作りました`)},children:[T(W,{name:`plus`}),`作る`]})]})]}):T(`div`,{class:`mini-actions`,children:[T(`button`,{onClick:()=>{ja.value=t.id,n(),t.noteId===`n-main`&&H({tab:`timeline`})},children:[T(W,{name:`arrowRight`}),`矢印を引く`]}),T(`button`,{onClick:()=>w(!0),children:[T(W,{name:`stack`}),`グループに入れる`]}),T(`button`,{onClick:()=>{let e=gn({title:t.name,links:[{kind:`term`,id:t.id}]});n(),H({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[T(W,{name:`note`}),`苦手メモ`]}),T(`button`,{onClick:()=>{n(),Bi({kind:`term`,id:t.id})},children:[T(W,{name:`board`}),`比較ボードへ`]})]}),T(`div`,{class:`f-label`,children:`赤シート`}),T(`label`,{class:`switch-row`,children:[T(`span`,{children:`この用語をいつも隠す（個別指定）`}),T(`input`,{type:`checkbox`,class:`switch`,checked:!!t.hide,onChange:e=>ge(t.id,{hide:e.target.checked},`「${t.name}」の赤シート指定`)})]}),T(`div`,{class:`meta-line`,children:[t.author===`ai`?`AIが作成`:`自分で作成`,`・更新 `,new Date(t.updatedAt).toLocaleDateString(`ja-JP`)]}),T(`div`,{class:`sheet-actions`,children:[T(`button`,{onClick:()=>{n(),H({tab:`timeline`}),U(t.when.from,{termId:t.id})},children:[T(W,{name:`table`}),`年表で見る`]}),T(`button`,{onClick:()=>{n(),kt(t.when.from,`term`),H({tab:`map`})},children:[T(W,{name:`map2`}),`地図で見る`]}),T(`button`,{onClick:()=>d(!0),children:[T(W,{name:`arrowsMove`}),`年を変える`]}),T(`button`,{class:`danger`,onClick:async()=>{await q({title:`「${t.name}」をゴミ箱に入れますか？`,body:`ゴミ箱からいつでも戻せます。`,ok:`ゴミ箱へ`,danger:!0})&&(we(t.id),n(),Z(`「${t.name}」をゴミ箱に入れました`))},children:[T(W,{name:`trash`}),`ゴミ箱へ`]})]})]})}var io=o([]),ao=864e5,oo=e=>{if(!e)return`まだありません`;let t=Math.floor((Date.now()-e)/ao);return t===0?`今日`:`${t}日前`},so={terms:`用語`,notes:`ノート`,stickies:`付箋`,groups:`グループ`,arrows:`矢印`,weakMemos:`苦手メモ`,priorityMemos:`優先順位メモ`,pins:`ピン`,folders:`フォルダ`,embeds:`差し込み`,images:`画像`};function co(){h.rev.value;let[t,n]=u(null),r=e(null),i=h.meta.lastBackupAt??0,a=Oe().length,o=async()=>{try{await rt()!==`cancelled`&&K(`バックアップを書き出しました`)}catch(e){K(`書き出せませんでした：`+e.message,{tone:`error`})}},s=async(e,t)=>{let n;try{n=it(e)}catch(e){await q({title:`読み込めませんでした`,body:e.message,ok:`OK`});return}if(n.issues.filter(e=>e.level===`error`).length){await q({title:`データに問題があります`,body:T(fo,{issues:n.issues}),ok:`OK`,cancel:`閉じる`});return}n.kind===`backup`?await l(n.dump,n.issues):n.plan&&await d(n.plan,n.issues,t)},l=async(e,t)=>{let n=st(e);if(await q({title:`バックアップから復元しますか？`,body:T(c,{children:[T(`p`,{children:[`いまのデータを、このバックアップ（`,new Date(e.exportedAt).toLocaleString(`ja-JP`),`）の内容に`,T(`b`,{children:`置き換えます`}),`。`]}),T(`p`,{class:`counts`,children:Object.entries(n).filter(([,e])=>e).map(([e,t])=>`${so[e]??e} ${t}`).join(`・`)||`（空）`}),T(`p`,{class:`hint`,children:`置き換える前のデータは「端末内の自動バックアップ」に控えを残すので、あとから戻せます。`}),t.length>0&&T(fo,{issues:t})]}),ok:`復元する`,danger:!0}))try{await at(e),K(`復元しました`)}catch(e){K(`復元できませんでした：`+e.message,{tone:`error`})}},d=async(e,t,n)=>{let r=Le(e);if(!r.add&&!r.update&&!r.trash){await q({title:`変更はありません`,body:r.skip?T(po,{plan:e}):`すでに同じ内容です。`,ok:`OK`});return}await q({title:`取り込みますか？`,body:T(c,{children:[T(`p`,{class:`counts big`,children:[`追加 `,r.add,`件・変更 `,r.update,`件`,r.trash?`・削除 ${r.trash}件`:``]}),r.skip>0&&T(c,{children:[T(`p`,{children:[`見送り `,r.skip,`件（あなたの編集を守るため など）`]}),T(po,{plan:e})]}),T(mo,{plan:e}),T(`p`,{class:`hint`,children:`取り込む前のデータは控えを残します。取り込んだあとも「元に戻す」で戻せます。`}),t.length>0&&T(fo,{issues:t})]}),ok:`取り込む`})&&(await ot(e,n),Z(`取り込みました（追加${r.add}・変更${r.update}）`))},f=async e=>{let t=e.target.files?.[0];e.target.value=``,t&&await s(await t.text(),t.name)},p=async()=>{try{let e=await Ke(io.value),t=e.reduce((e,t)=>e+t.plan.adds.length,0),n=e.reduce((e,t)=>e+t.plan.updates.length,0);if(!await q({title:`新しい初期データを取り込みますか？`,body:T(c,{children:[T(`p`,{class:`counts big`,children:[`追加 `,t,`件・変更 `,n,`件`]}),T(`p`,{children:e.map(e=>e.seed.title).join(`・`)}),T(`p`,{class:`hint`,children:`あなたが書いた説明・付箋、自分で変えた重要度・苦手度はそのままです。`})]}),ok:`取り込む`}))return;await qe(e),io.value=[],Z(`初期データを取り込みました`)}catch(e){K(`読み込めませんでした：`+e.message,{tone:`error`})}},m=Date.now()-Math.max(i,h.meta.createdAt??0)>h.settings.backupReminderDays*ao;return T(`div`,{class:`view more`,children:[T(`header`,{class:`bigbar`,children:T(`h1`,{class:`big-title`,children:`その他`})}),T(`div`,{class:`scroll`,children:[io.value.length>0&&T(lo,{icon:`cloudDown`,title:`新しい初期データがあります`,tone:`info`,children:[T(`p`,{children:io.value.map(e=>e.title).join(`・`)}),T(`button`,{class:`btn primary`,onClick:p,children:`内容を確認して取り込む`})]}),T(lo,{icon:`database`,title:`バックアップ`,tone:m?`warn`:void 0,children:[T(`p`,{children:[`最後のバックアップ：`,T(`b`,{children:oo(i)}),m&&T(`span`,{class:`due`,children:`（そろそろ書き出しておきましょう）`})]}),T(`div`,{class:`btns`,children:[T(`button`,{class:`btn primary`,onClick:o,children:[T(W,{name:`download`}),`書き出す`]}),T(`button`,{class:`btn`,onClick:()=>r.current?.click(),children:[T(W,{name:`upload`}),`ファイルから読み込む`]})]}),T(`p`,{class:`hint`,children:`書き出すと共有メニューが開くので「"ファイル"に保存」→ iCloud Drive などを選びます。読み込みは、バックアップ（復元）とAIの追加・修正データの両方に使えます。`}),T(`input`,{ref:r,type:`file`,accept:`application/json,.json,text/plain`,hidden:!0,onChange:f})]}),T(lo,{icon:`sparkles`,title:`AIの追加・修正データ`,children:[T(`p`,{children:`Claude が作った「追加・修正用データ」を取り込みます。IDで照合して、新しいものは追加、あるものは更新します。`}),T(`div`,{class:`btns`,children:[T(`button`,{class:`btn`,onClick:()=>r.current?.click(),children:[T(W,{name:`fileImport`}),`ファイルを選ぶ`]}),T(`button`,{class:`btn`,onClick:()=>n(`paste`),children:[T(W,{name:`clipboard`}),`貼り付ける`]})]})]}),T(`div`,{class:`menu`,children:[T(uo,{icon:`trash`,label:`ゴミ箱`,value:a?`${a}件`:`空`,onClick:()=>n(`trash`)}),T(uo,{icon:`history`,label:`端末内の自動バックアップ`,value:`毎日・取り込み前`,onClick:()=>n(`snaps`)})]}),T(lo,{icon:`settings`,title:`表示`,children:[T(`div`,{class:`seg three`,children:[[`auto`,`自動`,`auto`],[`light`,`ライト`,`sun`],[`dark`,`ダーク`,`moon`]].map(([e,t,n])=>T(`button`,{class:h.settings.theme===e?`on`:``,onClick:()=>h.setSettings({theme:e}),children:[T(W,{name:n}),t]},e))}),T(`label`,{class:`switch-row`,children:[T(`span`,{children:`バックアップのお知らせ（日数）`}),T(`select`,{value:h.settings.backupReminderDays,onChange:e=>h.setSettings({backupReminderDays:+e.target.value}),children:[3,7,14,30].map(e=>T(`option`,{value:e,children:[e,`日`]},e))})]})]}),T(vo,{})]}),T(ho,{open:t===`trash`,onClose:()=>n(null)}),T(go,{open:t===`snaps`,onClose:()=>n(null)}),T(_o,{open:t===`paste`,onClose:()=>n(null),onSubmit:e=>{n(null),s(e,`貼り付けたデータ`)}})]})}function lo({icon:e,title:t,tone:n,children:r}){return T(`section`,{class:`card ${n??``}`,children:[T(`h2`,{children:[T(W,{name:e}),t]}),r]})}function uo({icon:e,label:t,value:n,onClick:r}){return T(`button`,{class:`mrow`,onClick:r,children:[T(`span`,{class:`fi`,children:T(W,{name:e})}),T(`span`,{class:`nm`,children:t}),T(`span`,{class:`ct`,children:n}),T(W,{name:`chevronRight`})]})}function fo({issues:e}){return T(`ul`,{class:`issues`,children:[e.slice(0,12).map((e,t)=>T(`li`,{class:e.level,children:[e.level===`error`?`✕`:`！`,` `,e.msg]},t)),e.length>12&&T(`li`,{children:[`ほか `,e.length-12,`件`]})]})}function po({plan:e}){return T(`ul`,{class:`issues`,children:e.skipped.slice(0,6).map((e,t)=>T(`li`,{children:[`「`,e.name,`」：`,e.reason]},t))})}function mo({plan:e}){let t=[...e.adds.slice(0,5).map(e=>`＋ ${e.rec.name??e.rec.id}`),...e.updates.slice(0,5).map(e=>`↻ ${e.after.name??e.after.id}`)];return t.length?T(`ul`,{class:`issues ok`,children:[t.map((e,t)=>T(`li`,{children:e},t)),e.adds.length+e.updates.length>t.length&&T(`li`,{children:`…`})]}):null}function ho({open:e,onClose:t}){h.rev.value;let n=e?Oe():[],r=async(e,t)=>{await q({title:t?`ゴミ箱を空にしますか？`:`完全に削除しますか？`,body:`完全に削除したものは元に戻せません。`,ok:`完全に削除`,danger:!0})&&(De(e),K(`完全に削除しました`))};return T(J,{open:e,onClose:t,title:`ゴミ箱`,full:!0,children:T(`div`,{class:`form`,children:[!n.length&&T(`p`,{class:`hint center`,children:`ゴミ箱は空です。`}),n.map(e=>T(`div`,{class:`trash-row`,children:[T(`div`,{class:`tx`,children:[T(`b`,{children:e.title||`（名前なし）`}),T(`small`,{children:[new Date(e.deletedAt).toLocaleString(`ja-JP`),e.items.length>1?`・関係するもの ${e.items.length-1}件も一緒`:``]})]}),T(`button`,{class:`btn sm`,onClick:()=>{Ee(e.group,`「${e.title}」を戻す`),Z(`「${e.title}」を戻しました`)},children:`戻す`}),T(`button`,{class:`iconbtn sm danger`,"aria-label":`完全に削除`,onClick:()=>void r([e.group],!1),children:T(W,{name:`trash`})})]},e.group)),n.length>0&&T(`button`,{class:`btn danger wide`,onClick:()=>void r(n.map(e=>e.group),!0),children:`ゴミ箱を空にする`})]})})}function go({open:e,onClose:t}){let[n,r]=u([]);l(()=>{e&&Xe().then(r)},[e]);let i=async e=>{if(await q({title:`この時点に戻しますか？`,body:`${new Date(e.at).toLocaleString(`ja-JP`)} の状態に戻します。いまの状態も控えとして残します。`,ok:`戻す`,danger:!0}))try{await Ze(e.id),K(`戻しました`),t()}catch(e){K(`戻せませんでした：`+e.message,{tone:`error`})}};return T(J,{open:e,onClose:t,title:`端末内の自動バックアップ`,full:!0,children:T(`div`,{class:`form`,children:[T(`p`,{class:`hint`,children:`1日1回と、取り込み・復元・形式の変換の前に、自動で控えを作っています（最新7個）。iPhoneの中だけにあるので、機種変更などに備えて「書き出す」バックアップも取ってください。`}),!n.length&&T(`p`,{class:`hint center`,children:`まだありません。`}),n.map(e=>T(`div`,{class:`trash-row`,children:[T(`div`,{class:`tx`,children:[T(`b`,{children:new Date(e.at).toLocaleString(`ja-JP`)}),T(`small`,{children:[e.reason,e.size?`・${Math.round(e.size/1024)}KB`:``]})]}),T(`button`,{class:`btn sm`,onClick:()=>void i(e),children:`この時点に戻す`})]},e.id))]})})}function _o({open:e,onClose:t,onSubmit:n}){let[r,i]=u(``);return l(()=>{e&&i(``)},[e]),T(J,{open:e,onClose:t,title:`貼り付けて取り込む`,full:!0,children:T(`div`,{class:`form`,children:[T(`p`,{class:`hint`,children:"Claude の返事をそのまま貼り付けてかまいません（前後の説明文や ```json の囲みは自動で取り除きます）。"}),T(`textarea`,{class:`paste`,rows:10,value:r,placeholder:`ここに貼り付け`,onInput:e=>i(e.target.value)}),T(`button`,{class:`btn primary wide`,disabled:!r.trim(),onClick:()=>n(r),children:`内容を確認する`})]})})}function vo(){let[e,t]=u(``);return l(()=>{navigator.storage?.estimate?.().then(e=>{e.usage!=null&&t(`${(e.usage/1024/1024).toFixed(1)}MB 使用中`)})},[]),T(`section`,{class:`card about`,children:[T(`h2`,{children:[T(W,{name:`info`}),`このアプリについて`]}),T(`p`,{children:[`日本史ノート　版 `,R]}),T(`p`,{class:`hint`,children:[`データはこの端末の中（このアプリ専用の保存場所）にだけ保存されます。`,e]}),T(`p`,{class:`hint`,children:`アイコン：Tabler Icons（MIT）。`})]})}var yo={about:`苦手の原因と、原因ごとの解決策の提案ルール。AI・ユーザーが編集してよい。rank が小さいほど先に提案（1＝いちばん早く解決できそう）。action: copyPrompt（AIへの質問文をコピー）/ redsheet（赤シートで反復）/ compareTable（比較表を作る）/ orderQuiz（並べ替え練習）/ timeline（年表で前後を見る）/ map（地図で確認）/ none（説明だけ）。prompt の {terms} は対象の用語の一覧に置き換わる。`,version:1,causes:[{id:`flow`,label:`流れ（前後関係・因果）が分かっていない`,short:`流れ`},{id:`term`,label:`用語を覚えていないだけ`,short:`用語`},{id:`detail`,label:`付属知識（人物・場所・中身）が曖昧`,short:`付属知識`},{id:`year`,label:`年代・順番が覚えられない`,short:`年代・順番`},{id:`confuse`,label:`似た用語と混同している`,short:`混同`},{id:`source`,label:`史料・図版が読めない`,short:`史料・図版`},{id:`meaning`,label:`そもそも意味が理解できていない`,short:`意味`}],solutions:[{id:`ai-flow`,causes:[`flow`],rank:1,title:`AIに流れを説明してもらう`,detail:`原因 → 出来事 → 結果・影響を、時系列で説明してもらう`,action:`copyPrompt`,prompt:`次の用語について、前後の流れ（原因 → 出来事 → 結果・影響）を、大学受験日本史のレベルで時系列の箇条書きにして説明してください。最後に、流れを1行で要約してください。`},{id:`tl-flow`,causes:[`flow`,`year`],rank:2,title:`年表で前後を並べて見る`,detail:`その年の前後を1年刻みで見て、同じ時期の出来事を確認する`,action:`timeline`},{id:`book-flow`,causes:[`flow`,`meaning`],rank:3,title:`参考書の通史を読む`,detail:`教科書・通史の参考書で、その前後の見開きを通して読む`,action:`none`},{id:`yt-flow`,causes:[`flow`,`meaning`],rank:4,title:`YouTubeの解説を見る`,detail:`「{terms} 解説」で検索して、流れの解説動画を1本見る`,action:`none`},{id:`arrow-flow`,causes:[`flow`],rank:5,title:`年表に矢印で因果を書き込む`,detail:`用語の詳細 →「矢印を引く」で、原因・結果をつなぐ`,action:`none`},{id:`red-term`,causes:[`term`],rank:1,title:`赤シートで反復する`,detail:`この用語を赤シートの対象にして、年表でくり返し確認する`,action:`redsheet`},{id:`write-term`,causes:[`term`],rank:2,title:`書いて覚える`,detail:`漢字で3回書き、何も見ずに書けるか確かめる`,action:`none`},{id:`ai-quiz`,causes:[`term`,`detail`],rank:3,title:`AIに一問一答を作ってもらう`,detail:`その用語の一問一答を作ってもらい、解いてみる`,action:`copyPrompt`,prompt:`次の用語について、大学受験日本史レベルの一問一答を10問作ってください。答えは最後にまとめて書いてください。`},{id:`ai-detail`,causes:[`detail`],rank:1,title:`AIに人物・場所・中身を1枚にまとめてもらう`,detail:`関係する人物・場所・内容・結果を表に整理してもらう`,action:`copyPrompt`,prompt:`次の用語について、関係する人物・場所・内容・結果を「項目｜内容」の表に整理してください。入試で問われやすい点には★を付けてください。`},{id:`sticky-detail`,causes:[`detail`],rank:2,title:`付箋に要点を書く`,detail:`用語の付箋に、人物・場所・中身を1行ずつ書いておく`,action:`none`},{id:`map-detail`,causes:[`detail`],rank:3,title:`地図で場所を確認する`,detail:`その年の地図を開いて、場所と周りの国を確認する`,action:`map`},{id:`goro-year`,causes:[`year`],rank:1,title:`語呂合わせを作る`,detail:`年号の語呂合わせを作ってもらい、気に入ったものを付箋に書く`,action:`copyPrompt`,prompt:`次の出来事の年号について、覚えやすい語呂合わせを3つずつ作ってください。年号と出来事の対応も表にしてください。`},{id:`order-year`,causes:[`year`],rank:2,title:`並べ替え練習`,detail:`関係する用語を、起きた順に並べ替えてみる`,action:`orderQuiz`},{id:`compare-confuse`,causes:[`confuse`],rank:1,title:`比較表を作る`,detail:`混同している用語を並べて、時期・目的・内容・結果を比べる`,action:`compareTable`},{id:`ai-confuse`,causes:[`confuse`],rank:2,title:`AIに違いを説明してもらう`,detail:`違いと見分け方を説明してもらう`,action:`copyPrompt`,prompt:`次の用語の違いを、時期・目的・内容・結果の観点で比較表にしてください。混同しやすいポイントと、見分け方のコツも書いてください。`},{id:`ai-source`,causes:[`source`],rank:1,title:`史料の要点と現代語訳をAIに聞く`,detail:`入試でよく出る史料の、要点・現代語訳・読み取りのポイントを確認する`,action:`copyPrompt`,prompt:`次の用語に関係する史料（入試でよく出るもの）について、原文のキーワード・現代語訳・入試で問われる読み取りのポイントを教えてください。`},{id:`book-source`,causes:[`source`],rank:2,title:`資料集（図説）で確認する`,detail:`資料集で史料・図版と解説をセットで読む`,action:`none`},{id:`ai-meaning`,causes:[`meaning`],rank:1,title:`AIにかみ砕いて説明してもらう`,detail:`やさしい言葉で説明してから、入試レベルの説明に言い直してもらう`,action:`copyPrompt`,prompt:`次の用語の意味を、まず中学生にも分かる言葉で説明し、そのあと大学受験日本史で必要な説明に言い直してください。具体例も1つ挙げてください。`},{id:`text-meaning`,causes:[`meaning`],rank:2,title:`教科書の本文で前後の文脈を読む`,detail:`その用語が出てくる段落を、前後も含めて読む`,action:`none`}],question:{header:`日本史（大学受験：共通テスト〜国公立二次・難関私大、山川『詳説日本史』準拠）の質問です。`,footer:`最後に、覚えるべき要点を3行でまとめてください。`}};function bo(){let e=h.settings.rules;return e&&Array.isArray(e.causes)&&Array.isArray(e.solutions)?e:yo}function xo(e){return e.length?bo().solutions.map(t=>({s:t,hit:t.causes.filter(t=>e.includes(t)).length})).filter(e=>e.hit>0).sort((e,t)=>e.s.rank-t.s.rank||t.hit-e.hit).map(e=>e.s):[]}var So=(e,t)=>e.replace(/\{terms\}/g,t.map(e=>e.name).join(`・`)||`（用語）`);function Co(e){let t=(h.get(`notes`,e.noteId)?.columns??[]).find(t=>t.id===e.col)?.name??``,n=b(e.when.from,L.eras).name,r=`${e.when.approx?`約`:``}${m(e.when.from)}${e.when.to!=null&&e.when.to!==e.when.from?`〜${m(e.when.to)}`:``}${e.when.from>0?`年`:``}`;return`・${e.name}（${r}／${n}${t?`・`+t:``}）`}function wo(e){let t=bo(),n=[t.question.header,``];e.terms.length&&n.push(`【対象】`,...e.terms.map(Co),``);let r=e.memo;r&&(r.title.trim()||r.body.trim())&&n.push(`【分からないこと】`,[r.title.trim(),r.body.trim()].filter(Boolean).join(`
`),``),r?.causes.length&&n.push(`【自分で考えた原因】`,...r.causes.map(e=>`・`+(t.causes.find(t=>t.id===e)?.label??e)),``);let i=[];if(e.solution?.prompt)i.push(So(e.solution.prompt,e.terms));else for(let t of xo(r?.causes??[]))if(t.prompt&&!i.includes(So(t.prompt,e.terms))&&(i.push(So(t.prompt,e.terms)),i.length>=2))break;return i.length||i.push(`次の用語について、大学受験日本史で必要なことを分かりやすく説明してください。`),n.push(`【お願い】`,...i,``,t.question.footer),n.join(`
`)}var To=So;function Eo(){h.rev.value;let e=B.value.weakSeg,t=h.list(`terms`).filter(e=>e.weakness>0).length+h.list(`groups`).filter(e=>e.weakness>0).length,n=h.list(`weakMemos`).filter(e=>e.status!==`done`).length,r=h.list(`priorityMemos`).filter(e=>!e.done).length;return T(`div`,{class:`view weak`,children:[T(`header`,{class:`bigbar`,children:T(`h1`,{class:`big-title`,children:`苦手`})}),T(`div`,{class:`segtabs`,role:`tablist`,children:[T(`button`,{role:`tab`,class:e===`priority`?`on`:``,onClick:()=>H({weakSeg:`priority`}),children:[`優先順位`,r?T(`span`,{class:`n`,children:r}):null]}),T(`button`,{role:`tab`,class:e===`list`?`on`:``,onClick:()=>H({weakSeg:`list`}),children:[`苦手一覧`,t?T(`span`,{class:`n`,children:t}):null]}),T(`button`,{role:`tab`,class:e===`memos`?`on`:``,onClick:()=>H({weakSeg:`memos`}),children:[`苦手メモ`,n?T(`span`,{class:`n`,children:n}):null]})]}),e===`priority`&&T(Do,{}),e===`list`&&T(Oo,{}),e===`memos`&&T(Ao,{})]})}function Do(){let[t,n]=u(``),[r,i]=u(null),[a,o]=u(``),[s,l]=u(!1),d=e(null),f=h.list(`priorityMemos`).sort(bn),p=f.filter(e=>!e.done),m=f.filter(e=>e.done),g=()=>{t.trim()&&(Ae(t),n(``),d.current?.focus())},_=e=>{a.trim()&&a!==e.text&&yn(e.id,{text:a.trim()}),i(null)},v=(e,t)=>T(`div`,{class:`pm-row ${e.done?`done`:``}`,children:[T(`span`,{class:`rank`,children:e.done?``:t.index+1}),T(`button`,{class:`chk no-drag ${e.done?`on`:``}`,"aria-label":e.done?`済みを外す`:`済みにする`,onClick:()=>yn(e.id,{done:!e.done},e.done?`優先順位メモを戻す`:`優先順位メモを済みに`),children:T(W,{name:`check`})}),r===e.id?T(`input`,{class:`pm-edit`,value:a,autoFocus:!0,onInput:e=>o(e.target.value),onBlur:()=>_(e),onKeyDown:t=>{t.key===`Enter`&&_(e),t.key===`Escape`&&i(null)}}):T(`span`,{class:`tx`,onClick:()=>{i(e.id),o(e.text)},children:e.text}),!e.done&&T(c,{children:[T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:T(W,{name:`chevronUp`})}),T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:T(W,{name:`chevronDown`})})]}),T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`削除`,onClick:()=>{P([{c:`priorityMemos`,id:e.id}],`優先順位メモを削除`),Z(`削除しました`)},children:T(W,{name:`x`})})]});return T(`div`,{class:`scroll`,children:[T(`p`,{class:`lead`,children:`やることや優先順位を、ざっくり書いておく場所です。長押しで持ち上げて並べ替えられます。`}),T(`div`,{class:`add-row pad`,children:[T(`input`,{ref:d,value:t,placeholder:`例：江戸の三大改革を比較して整理する`,onInput:e=>n(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g()}}),T(`button`,{class:`btn primary`,onClick:g,children:[T(W,{name:`plus`}),`追加`]})]}),!p.length&&!m.length&&T(`div`,{class:`empty`,children:[T(`div`,{class:`empty-ic`,children:T(W,{name:`listCheck`,size:30})}),T(`p`,{children:`まだありません。上の欄に書いて「追加」を押してください。`})]}),T(Wr,{class:`pm-list`,items:p,getId:e=>e.id,onReorder:e=>cn(`priorityMemos`,[...e,...m.map(e=>e.id)],`優先順位メモを並べ替え`),render:(e,t)=>v(e,t)}),m.length>0&&T(c,{children:[T(`button`,{class:`show-done`,onClick:()=>l(!s),children:[T(W,{name:s?`chevronUp`:`chevronDown`}),`済み `,m.length,`件`]}),s&&T(`div`,{class:`pm-list`,children:m.map(e=>T(`div`,{children:v(e,{index:0,count:0,up:()=>{},down:()=>{}})},e.id))})]})]})}function Oo(){let e=h.rev.value,[t,n]=u(0),r=s(()=>h.list(`terms`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness||e.when.from-t.when.from),[e,t]),i=h.list(`groups`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness),a=e=>h.list(`terms`).filter(t=>t.weakness===e).length,o=(e,t)=>h.get(`notes`,e)?.columns?.find(e=>e.id===t)?.name??``;return T(`div`,{class:`scroll`,children:[T(`div`,{class:`metrics`,children:[3,2,1].map(e=>T(`div`,{class:`metric`,style:{"--mc":`var(--w${e})`},children:[T(`small`,{children:[`苦手 `,e]}),T(`b`,{children:a(e)})]},e))}),T(`div`,{class:`filters`,children:[0,3,2,1].map(e=>T(`button`,{class:t===e?`on`:``,style:{"--wc":`var(--w${e})`},onClick:()=>n(e),children:e?T(c,{children:[T(`i`,{}),e]}):`すべて`},e))}),T(`div`,{class:`wk-list`,children:[!r.length&&!i.length&&T(`div`,{class:`empty`,children:[T(`div`,{class:`empty-ic`,children:T(W,{name:`target`,size:30})}),T(`p`,{children:`まだありません。年表で用語をタップし、苦手度（1〜3）を付けるとここに並びます。`})]}),i.map(e=>T(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[T(`button`,{class:`row1`,onClick:()=>H({openGroupId:e.id}),children:[T(`span`,{class:`lv`,children:e.weakness}),T(`span`,{class:`nm`,children:e.name}),T(W,{name:`chevronRight`})]}),T(`div`,{class:`meta`,children:[T(W,{name:`stack`,size:13}),` グループ・`,mn(e).length,`語`]})]},e.id)),r.map(e=>{let t=b(e.when.from,L.eras);return T(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[T(`button`,{class:`row1`,onClick:()=>H({openTermId:e.id}),children:[T(`span`,{class:`lv`,children:e.weakness}),T(`span`,{class:`nm`,children:e.name}),T(W,{name:`chevronRight`})]}),T(`div`,{class:`meta`,children:[t.name.replace(`時代`,``),`・`,m(e.when.from),`・`,o(e.noteId,e.col)]}),T(`div`,{class:`ask`,children:[T(`button`,{onClick:()=>{H({tab:`timeline`}),U(e.when.from,{termId:e.id})},children:[T(W,{name:`table`}),`年表で見る`]}),T(`button`,{onClick:()=>{H({weakSeg:`memos`,openWeakMemoId:gn({title:e.name,links:[{kind:`term`,id:e.id}]}).id})},children:[T(W,{name:`note`}),`苦手メモ`]})]})]},e.id)})]})]})}var ko={open:`未解決`,doing:`取組中`,done:`解決`};function Ao(){let[e,t]=u(`active`),n=h.list(`weakMemos`).sort(bn),r=n.filter(t=>e===`all`?!0:e===`done`?t.status===`done`:t.status!==`done`),i=bo().causes,a=e=>e.links.map(e=>e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:e.kind===`note`?h.get(`notes`,e.id)?.name:``).filter(Boolean).join(`・`);return T(`div`,{class:`scroll`,children:[T(`div`,{class:`filters`,children:[[`active`,`done`,`all`].map(n=>T(`button`,{class:e===n?`on`:``,onClick:()=>t(n),children:n===`active`?`未解決・取組中`:n===`done`?`解決`:`すべて`},n)),T(`button`,{class:`add`,onClick:()=>{H({openWeakMemoId:gn().id})},children:[T(W,{name:`plus`}),`苦手メモ`]})]}),!r.length&&T(`div`,{class:`empty`,children:[T(`div`,{class:`empty-ic`,children:T(W,{name:`note`,size:30})}),T(`p`,{children:`苦手メモは、詳しく書きたいときだけ作ります。用語の詳細や苦手一覧の「苦手メモ」からも作れます。`})]}),T(Wr,{class:`wk-list`,gap:10,items:r,getId:e=>e.id,onReorder:e=>cn(`weakMemos`,[...e,...n.filter(t=>!e.includes(t.id)).map(e=>e.id)],`苦手メモを並べ替え`),render:(e,t)=>{let n=xo(e.causes)[0];return T(`div`,{class:`wk-item memo ${e.status}`,style:{"--wc":e.status===`done`?`#6BAF7A`:e.status===`doing`?`var(--accent)`:`var(--w2)`},onClick:()=>H({openWeakMemoId:e.id}),children:[T(`div`,{class:`row1`,children:[T(`span`,{class:`rank`,children:t.index+1}),T(`span`,{class:`nm`,children:e.title||a(e)||`（題名なし）`}),T(`span`,{class:`st ${e.status}`,children:ko[e.status]})]}),a(e)&&e.title&&T(`div`,{class:`meta`,children:a(e)}),e.body&&T(`div`,{class:`memo-body`,children:T(ia,{text:e.body.length>80?e.body.slice(0,80)+`…`:e.body,sheet:!1})}),e.causes.length>0&&T(`div`,{class:`causes`,children:e.causes.map(e=>T(`span`,{children:i.find(t=>t.id===e)?.short??e},e))}),n&&T(`div`,{class:`suggest`,children:[T(W,{name:`sparkles`}),T(`span`,{children:n.title})]}),T(`div`,{class:`ord no-drag`,onClick:e=>e.stopPropagation(),children:[T(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:T(W,{name:`chevronUp`})}),T(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:T(W,{name:`chevronDown`})})]})]})}})]})}function jo(){let t=Nt.value,[n,r]=u(``),[i,a]=u([]),o=e(null);l(()=>{t&&(r(``),a([]),setTimeout(()=>o.current?.focus(),260))},[t]);let c=s(()=>{if(!t)return[];let e=n.trim(),r=new Set(t.exclude??[]),i=/^-?\d{1,5}$/.test(e)?parseInt(e,10):null;return h.list(`terms`).filter(e=>!r.has(e.id)&&!e.refId).filter(t=>!e||(i==null?t.name.includes(e)||(t.yomi??``).includes(e):t.when.from===i)).sort((t,n)=>(e?n.importance-t.importance:0)||t.when.from-n.when.from).slice(0,80)},[n,t,h.rev.value]),d=()=>{Nt.value=null};if(!t)return T(J,{open:!1,onClose:d,children:null});let f=e=>{if(!t.multi){t.onPick([e]),d();return}a(i.includes(e)?i.filter(t=>t!==e):[...i,e])};return T(J,{open:!0,onClose:d,title:t.title,full:!0,children:T(`div`,{class:`form`,children:[T(`div`,{class:`searchbox`,children:[T(W,{name:`search`}),T(`input`,{ref:o,value:n,placeholder:`用語・読み・年で探す`,onInput:e=>r(e.target.value)})]}),T(`div`,{class:`results`,children:[c.map(e=>T(`button`,{class:`res ${i.includes(e.id)?`picked`:``}`,onClick:()=>f(e.id),children:[T(`span`,{class:`w ${e.weakness?`wk`+e.weakness:``}`}),T(`span`,{class:`nm`,children:e.name}),T(`span`,{class:`sub`,children:m(e.when.from)}),t.multi&&T(`span`,{class:`chk ${i.includes(e.id)?`on`:``}`,children:T(W,{name:`check`})})]},e.id)),!c.length&&T(`p`,{class:`hint center`,children:`見つかりません`})]}),t.multi&&T(`div`,{class:`pick-bar`,children:T(`button`,{class:`btn primary wide`,disabled:!i.length,onClick:()=>{t.onPick(i),d()},children:[i.length,`語を選ぶ`]})})]})})}function Mo(e,t,n={}){Nt.value={title:e,onPick:t,...n}}async function No(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.top=`-1000px`,t.style.fontSize=`16px`,document.body.append(t),t.select(),t.setSelectionRange(0,e.length);let n=document.execCommand(`copy`);return t.remove(),n}catch{return!1}}function Po(e){let t=new Map;for(let n of e.links){if(n.kind===`term`){let e=h.get(`terms`,n.id);e&&!e.deletedAt&&t.set(e.id,e)}if(n.kind===`group`){let e=h.get(`groups`,n.id);if(e)for(let n of mn(e))t.set(n.id,n)}}return[...t.values()].sort((e,t)=>e.when.from-t.when.from)}function Fo(){h.rev.value;let e=B.value.openWeakMemoId,t=e?h.get(`weakMemos`,e):void 0,n=()=>H({openWeakMemoId:null});return l(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),T(J,{open:!!t&&!t.deletedAt,onClose:n,full:!0,class:`memo-sheet`,children:t&&T(Lo,{id:t.id,onClose:n},t.id)})}var Io={copyPrompt:[`質問文をコピー`,`copy`],redsheet:[`赤シートで練習`,`eyeOff`],compareTable:[`比較表を作る`,`cols3`],orderQuiz:[`並べ替え練習`,`shuffle`],timeline:[`年表で見る`,`table`],map:[`地図で見る`,`map2`]};function Lo({id:e,onClose:t}){let n=h.get(`weakMemos`,e),r=bo(),i=Po(n),[a,o]=u(n.title),[d,f]=u(n.body),[p,m]=u(!n.body),g=s(()=>xo(n.causes),[n.causes.join(`,`)]),_=()=>{a!==n.title&&_n(e,{title:a})},v=()=>{d!==n.body&&_n(e,{body:d}),d&&m(!1)};l(()=>()=>{let t=h.get(`weakMemos`,e);t&&!t.deletedAt&&(a!==t.title||d!==t.body)&&_n(e,{title:a,body:d})},[a,d]);let y=t=>_n(e,{causes:n.causes.includes(t)?n.causes.filter(e=>e!==t):[...n.causes,t]},`原因を変更`),b=t=>{let r=new Set(n.links.map(e=>e.kind+`:`+e.id)),i=t.filter(e=>!r.has(e.kind+`:`+e.id));i.length&&_n(e,{links:[...n.links,...i]},`つながりを追加`)},x=e=>(e.kind===`term`?h.get(`terms`,e.id)?.name:e.kind===`group`?h.get(`groups`,e.id)?.name:e.kind===`note`?h.get(`notes`,e.id)?.name:``)??`（なし）`,S=async e=>{let t=await No(wo({terms:i,memo:{title:a,body:d,causes:n.causes},solution:e}));K(t?`質問文をコピーしました。Claude アプリに貼り付けてください`:`コピーできませんでした`,{tone:t?`normal`:`error`})},ee=async r=>{switch(r.action){case`copyPrompt`:await S(r);break;case`redsheet`:if(!i.length){K(`先に用語をつないでください`);return}for(let e of i)e.hide||ge(e.id,{hide:!0},`「${e.name}」を赤シートの対象に`);n.status===`open`&&_n(e,{status:`doing`},`取組中にする`),t(),H({tab:`timeline`,redSheet:!0}),U(i[0].when.from,{termId:i[0].id}),K(`赤シートの対象にしました。板をタップしてめくって確認しましょう`);break;case`compareTable`:{let e=xn(i.map(e=>e.id));if(!e){K(`比較表には2語以上をつないでください`);return}t(),H({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`);break}case`orderQuiz`:{let e=i.map(e=>e.id);if(e.length<3&&i[0]){let t=i[0],n=h.list(`terms`).filter(e=>e.noteId===t.noteId&&e.shape===`point`&&e.importance>=6&&Math.abs(e.when.from-t.when.from)<=30).sort((e,n)=>Math.abs(e.when.from-t.when.from)-Math.abs(n.when.from-t.when.from)).slice(0,6).map(e=>e.id);e=[...new Set([...e,...n])]}if(e.length<2){K(`並べ替えには2語以上が必要です`);return}Pt.value=e;break}case`timeline`:if(!i[0]){K(`先に用語をつないでください`);return}t(),H({tab:`timeline`,level:1}),U(i[0].when.from,{termId:i[0].id,level:1});break;case`map`:i[0]&&kt(i[0].when.from,`memo`),t(),H({tab:`map`})}};return T(`div`,{class:`tsheet`,children:[T(`input`,{class:`title-input`,value:a,placeholder:`何が苦手？（例：三世一身法と墾田永年私財法の違い）`,onInput:e=>o(e.target.value),onBlur:_}),T(`div`,{class:`seg three status`,children:[`open`,`doing`,`done`].map(t=>T(`button`,{class:n.status===t?`on`:``,onClick:()=>_n(e,{status:t},`解決状況を変更`),children:t===`open`?`未解決`:t===`doing`?`取組中`:`解決`},t))}),T(`div`,{class:`f-label`,children:`つながっている用語・グループ`}),T(`div`,{class:`chips-row`,children:[n.links.map(t=>T(`span`,{class:`chip link`,children:[T(`button`,{class:`nm`,onClick:()=>{t.kind===`term`?H({openTermId:t.id}):t.kind===`group`&&H({openGroupId:t.id})},children:[t.kind===`group`&&T(W,{name:`stack`,size:14}),x(t)]}),T(`button`,{class:`x`,"aria-label":`外す`,onClick:()=>_n(e,{links:n.links.filter(e=>e!==t)},`つながりを外す`),children:T(W,{name:`x`,size:14})})]},t.kind+t.id)),T(`button`,{class:`chip add`,onClick:()=>Mo(`つなぐ用語を選ぶ`,e=>b(e.map(e=>({kind:`term`,id:e}))),{multi:!0}),children:[T(W,{name:`plus`,size:15}),`用語`]})]}),T(`div`,{class:`f-label`,children:[`なぜ分からない？`,T(`small`,{children:`当てはまるものを選ぶ（いくつでも）`})]}),T(`div`,{class:`cause-list`,children:r.causes.map(e=>T(`button`,{class:`cause ${n.causes.includes(e.id)?`on`:``}`,onClick:()=>y(e.id),children:[T(`span`,{class:`box`,children:T(W,{name:`check`,size:15})}),e.label]},e.id))}),g.length>0&&T(c,{children:[T(`div`,{class:`f-label`,children:`解決策の提案`}),T(`div`,{class:`sol-list`,children:g.map((e,t)=>{let[n,r]=Io[e.action]??[``,`info`];return T(`div`,{class:`sol ${t===0?`best`:``}`,children:[t===0&&T(`div`,{class:`badge-best`,children:[T(W,{name:`sparkles`,size:14}),`いちばん早く解決できそう`]}),T(`b`,{children:e.title}),T(`p`,{children:To(e.detail,i)}),n&&T(`button`,{class:`btn sm`,onClick:()=>void ee(e),children:[T(W,{name:r}),n]})]},e.id)})})]}),T(`button`,{class:`btn primary wide`,onClick:()=>void S(),children:[T(W,{name:`clipboard`}),`AIに聞く質問文をコピー`]}),T(`p`,{class:`hint`,children:`対象の用語・分からないこと・原因から、Claude アプリに貼る質問文を作ります。`}),T(`div`,{class:`f-label`,children:[`メモ`,T(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),p?T(`textarea`,{class:`desc`,rows:5,value:d,placeholder:`分からない点・調べたこと・解決したことなど`,onInput:e=>f(e.target.value),onBlur:v}):T(`div`,{class:`desc view`,onClick:()=>m(!0),children:T(ia,{text:n.body,sheet:B.value.redSheet})}),T(`div`,{class:`meta-line`,children:[`作成 `,new Date(n.createdAt).toLocaleDateString(`ja-JP`),`・更新 `,new Date(n.updatedAt).toLocaleDateString(`ja-JP`)]}),T(`div`,{class:`sheet-actions`,children:T(`button`,{class:`danger`,onClick:async()=>{await q({title:`この苦手メモをゴミ箱に入れますか？`,ok:`ゴミ箱へ`,danger:!0})&&(P([{c:`weakMemos`,id:e}],`苦手メモをゴミ箱へ`),t(),Z(`苦手メモをゴミ箱に入れました`))},children:[T(W,{name:`trash`}),`ゴミ箱へ`]})})]})}function Ro(){let e=Pt.value,[t,n]=u([]),[r,i]=u(!1),a=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.join()===[...e].sort((e,t)=>o(e)-o(t)).join()&&t.length>1?[...t.slice(1),t[0]]:t},o=e=>h.get(`terms`,e)?.when.from??0;l(()=>{e&&(n(a(e)),i(!1))},[e]);let s=()=>{Pt.value=null},c=[...t].sort((e,t)=>o(e)-o(t)),d=t.filter((e,t)=>o(e)===o(c[t])).length;return T(J,{open:!!e,onClose:s,title:`並べ替え練習`,full:!0,children:T(`div`,{class:`form`,children:[T(`p`,{class:`hint`,children:`起きた順（古い順）に並べ替えてください。長押しで持ち上げるか、矢印ボタンで動かせます。`}),T(Wr,{class:`quiz-list`,items:t,getId:e=>e,onReorder:e=>{n(e),i(!1)},render:(e,t)=>{let n=h.get(`terms`,e),i=r&&o(e)===o(c[t.index]);return T(`div`,{class:`quiz-row ${r?i?`ok`:`ng`:``}`,children:[T(`span`,{class:`rank`,children:t.index+1}),T(`span`,{class:`nm`,children:n?.name}),r&&T(`span`,{class:`yr`,children:n?m(n.when.from):``}),T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:T(W,{name:`chevronUp`})}),T(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:T(W,{name:`chevronDown`})})]})}}),r&&T(`p`,{class:`quiz-score`,children:d===t.length?`全問正解！`:`${t.length}問中 ${d}問正解`}),T(`div`,{class:`btn-row`,children:[T(`button`,{class:`btn primary`,onClick:()=>i(!0),children:[T(W,{name:`check`}),`答え合わせ`]}),T(`button`,{class:`btn`,onClick:()=>{n(a(t)),i(!1)},children:[T(W,{name:`shuffle`}),`もう一度`]})]})]})})}function zo(){h.rev.value;let e=B.value.openGroupId,t=e?h.get(`groups`,e):void 0,n=()=>H({openGroupId:null});return l(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),T(J,{open:!!t&&!t.deletedAt,onClose:n,class:`group-sheet`,children:t&&T(Bo,{id:t.id,onClose:n},t.id)})}function Bo({id:e,onClose:t}){let n=h.get(`groups`,e),r=mn(n),i=hn(n),[a,o]=u(n.name),[s,l]=u(n.memo),[d,f]=u(!1),p=h.settings.redSheet,g=(p.groups??[]).includes(e);return T(`div`,{class:`tsheet`,children:[T(`div`,{class:`sheet-top`,children:[T(`span`,{class:`pill`,children:[T(W,{name:`stack`}),`グループ`]}),i&&T(`span`,{class:`pill`,children:[m(i.from),i.to?`〜`+m(i.to):``]}),T(`span`,{class:`pill`,children:[r.length,`語`]})]}),T(`input`,{class:`title-input`,value:a,onInput:e=>o(e.target.value),onBlur:()=>{a.trim()&&a!==n.name&&un(e,{name:a.trim()},`グループの名前を変更`)},"aria-label":`グループの名前`}),T(`div`,{class:`f-label`,children:`苦手度`}),T(`div`,{class:`seg weak`,children:[0,1,2,3].map(t=>T(`button`,{class:n.weakness===t?`on`:``,style:{"--wc":t?`var(--w${t})`:`var(--ink-4)`},onClick:()=>{let r=n.weakness===t?0:t;un(e,{weakness:r},r?`グループの苦手度を ${r} に`:`グループの苦手度を解除`)},children:t?T(c,{children:[T(`i`,{}),t]}):`なし`},t))}),T(`div`,{class:`f-label`,children:[`重要度`,T(`small`,{children:n.importance?Br[n.importance]:`付けない`})]}),T(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(t=>T(`button`,{"aria-label":`重要度${t}`,class:n.importance&&t<=n.importance?`on`:``,style:{height:10+t*2.2+`px`},onClick:()=>un(e,{importance:n.importance===t?void 0:t},`グループの重要度を変更`)},t)),T(`div`,{class:`imp-txt`,children:T(`b`,{children:n.importance??`−`})})]}),T(`div`,{class:`f-label`,children:[`メモ`,T(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),d?T(`textarea`,{class:`desc`,rows:4,value:s,onInput:e=>l(e.target.value),onBlur:()=>{s!==n.memo&&un(e,{memo:s},`グループのメモを編集`),f(!1)},autoFocus:!0}):T(`div`,{class:`desc view`,onClick:()=>f(!0),children:T(ia,{text:n.memo,sheet:B.value.redSheet,placeholder:`メモを書く…`})}),T(`div`,{class:`f-label`,children:[`中の用語`,T(`small`,{children:`タップで詳細`})]}),T(`div`,{class:`member-list`,children:[r.map(t=>T(`div`,{class:`mrow2`,children:[T(`span`,{class:`w ${t.weakness?`wk`+t.weakness:``}`}),T(`button`,{class:`nm`,onClick:()=>H({openTermId:t.id}),children:[t.name,T(`small`,{children:m(t.when.from)})]}),T(`button`,{class:`iconbtn sm`,"aria-label":`グループから外す`,onClick:()=>fn(e,t.id),children:T(W,{name:`x`})})]},t.id)),T(`button`,{class:`btn sm add`,onClick:()=>Mo(`グループに用語を追加`,t=>dn(e,t),{multi:!0,exclude:r.map(e=>e.id)}),children:[T(W,{name:`plus`}),`用語を追加`]})]}),T(`div`,{class:`action-list`,children:[T(`button`,{onClick:()=>{t(),H({groupFilter:e,tab:`timeline`}),i&&U(i.from)},children:[T(W,{name:`filter`}),`年表でこのグループだけ表示`]}),T(`button`,{onClick:()=>{let t=p.groups??[];h.setSettings({redSheet:{...p,groups:g?t.filter(t=>t!==e):[...t,e]}}),K(g?`赤シートの対象から外しました`:`赤シートの対象にしました（年表の「赤シート」で隠れます）`)},children:[T(W,{name:`eyeOff`}),g?`赤シートの対象から外す`:`赤シートで隠す`]}),T(`button`,{onClick:()=>{let e=xn(r.map(e=>e.id),`比較：${n.name}`);if(!e){K(`比較表には2語以上が必要です`);return}t(),H({tab:`notes`,openNoteId:e.id}),Z(`比較表を作りました`)},children:[T(W,{name:`columns`}),`比較表を作る`]}),T(`button`,{onClick:()=>{let r=gn({title:n.name,links:[{kind:`group`,id:e}]});t(),H({tab:`weak`,weakSeg:`memos`,openWeakMemoId:r.id})},children:[T(W,{name:`target`}),`苦手メモを書く`]}),T(`button`,{class:`danger`,onClick:async()=>{await q({title:`グループ「${n.name}」をゴミ箱に入れますか？`,body:`中の用語は消えません。`,ok:`ゴミ箱へ`,danger:!0})&&(P([{c:`groups`,id:e}],`グループ「${n.name}」をゴミ箱へ`),t(),Z(`グループをゴミ箱に入れました`))},children:[T(W,{name:`trash`}),`ゴミ箱へ`]})]})]})}var Vo=wt(()=>$(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url)),Ho=[[`table`,`表`,`cols3`],[`diagram`,`図`,`sitemap`],[`chart`,`グラフ`,`chartLine`]];function Uo(){let t=Ji.value,[n,r]=u(`table`),[i,a]=u(``),[o,s]=u(null),[d,f]=u(``),[p,m]=u(``),[g,_]=u(null),[v,y]=u(!0),b=e(null),x=e(null);l(()=>{t&&(a(``),s(null),f(``),_(null))},[t]);let S=()=>{Ji.value=!1},ee=async()=>{let e=await No(Di[n]);K(e?`指示文をコピーしました。Claude アプリで写真を添付して、貼り付けて送ってください`:`コピーできませんでした`,{tone:e?`normal`:`error`,ms:5e3})},C=(e=i)=>{f(``);try{let t=Ni(e,n);s(t),m(t.title),r(t.kind)}catch(e){s(null),f(e.message)}},w=async e=>{let t=e.target.files?.[0];if(e.target.value=``,!t)return;let n=await t.text();a(n),C(n)},te=()=>{if(!o)return;let e;if(g){let t=Date.now(),n={id:N(`img`),createdAt:t,updatedAt:t,name:g.name,type:g.type,blob:g};h.tx(`取り込み元の画像を保存`,e=>e.put(`images`,n)),e=n.id}let t=Zt(o.kind,p||o.title,{content:ne(o)});e&&h.tx(`画像をつなぐ`,n=>{n.patch(`notes`,t.id,{imageId:e})}),S(),H({tab:`notes`,openNoteId:t.id}),Z(`「${t.name}」を作りました。編集できます`)},ne=e=>e.kind===`table`&&v?Pi(e.content):e.content,E=!!o&&o.kind===`table`&&o.content.cells.some(e=>e.some(e=>e.runs?.some(e=>e.b))),re=o?{id:`draft`,createdAt:0,updatedAt:0,kind:o.kind,name:p,tags:[],order:0,content:ne(o)}:null;return T(J,{open:t,onClose:S,title:`画像から取り込む`,full:!0,children:T(`div`,{class:`form import`,children:[T(`div`,{class:`f-label`,children:`① 何を取り込む？`}),T(`div`,{class:`seg three`,children:Ho.map(([e,t,i])=>T(`button`,{class:n===e?`on`:``,onClick:()=>r(e),children:[T(W,{name:i}),t]},e))}),T(`button`,{class:`btn primary wide`,onClick:()=>void ee(),children:[T(W,{name:`clipboard`}),`指示文をコピー`]}),T(`ol`,{class:`steps`,children:[T(`li`,{children:[`iPhone の `,T(`b`,{children:`Claude アプリ`}),`を開き、新しいチャットで `,T(`b`,{children:`写真を添付`}),`する（教科書・参考書の表や図を撮ったもの）`]}),T(`li`,{children:[`コピーした`,T(`b`,{children:`指示文を貼り付けて送る`})]}),T(`li`,{children:[`返ってきた結果を`,T(`b`,{children:`長押し →「コピー」`}),`して、このアプリに戻る`]})]}),T(`p`,{class:`hint`,children:`コツ：Claude アプリの「プロジェクト」に指示文を登録しておくと、次からは写真と「表」の一言だけで送れます（手順書を参照）。`}),T(`div`,{class:`f-label`,children:`② 結果を貼り付ける`}),T(`textarea`,{class:`paste`,rows:6,value:i,placeholder:`ここに貼り付け（前後の説明文があっても大丈夫です）`,onInput:e=>a(e.target.value)}),T(`div`,{class:`btn-row`,children:[T(`button`,{class:`btn`,onClick:()=>C(),disabled:!i.trim(),children:[T(W,{name:`check`}),`内容を確認`]}),T(`button`,{class:`btn`,onClick:()=>b.current?.click(),children:[T(W,{name:`fileImport`}),`ファイルから`]})]}),T(`input`,{ref:b,type:`file`,accept:`.json,.txt,.md,application/json,text/plain,text/markdown`,hidden:!0,onChange:w}),d&&T(`p`,{class:`err`,children:d}),o&&re&&T(c,{children:[T(`div`,{class:`f-label`,children:`③ 確かめて作る`}),o.warnings.length>0&&T(`ul`,{class:`issues`,children:o.warnings.map((e,t)=>T(`li`,{children:[`！ `,e]},t))}),T(`div`,{class:`import-pv`,children:T(Ct,{fallback:T(`div`,{class:`loading`,children:`表示の準備中…`}),children:T(Vo,{note:re,sheet:!1,height:260},v?`h`:`n`)})}),T(`label`,{class:`fld`,children:[T(`span`,{children:`名前`}),T(`input`,{value:p,onInput:e=>m(e.target.value)})]}),E&&T(`label`,{class:`switch-row`,children:[T(`span`,{children:`太字の語も赤シートで隠す（太字のまま。赤シートをオンにすると隠れます）`}),T(`input`,{type:`checkbox`,class:`switch`,checked:v,onChange:e=>y(e.target.checked)})]}),T(`label`,{class:`switch-row`,children:[T(`span`,{children:`元の画像も一緒に保存する（見比べ用。データは重くなります）`}),T(`input`,{type:`checkbox`,class:`switch`,checked:!!g,onChange:e=>{e.target.checked?x.current?.click():_(null)}})]}),g&&T(`p`,{class:`hint`,children:[`画像：`,g.name,`（`,Math.round(g.size/1024),`KB）`]}),T(`input`,{ref:x,type:`file`,accept:`image/*`,hidden:!0,onChange:e=>{let t=e.target.files?.[0];t&&_(t)}}),T(`button`,{class:`btn primary wide`,onClick:te,children:[T(W,{name:`plus`}),`編集できる`,o.kind===`table`?`表`:o.kind===`diagram`?`図`:`グラフ`,`として作る`]}),T(`p`,{class:`hint`,children:`取り込んだ内容は、この iPhone の中だけに保存されます（GitHub には上がりません）。`})]})]})})}var Wo=wt(()=>$(()=>import(`./MapView.js`).then(e=>({default:e.MapView})),[],import.meta.url)),Go=wt(()=>$(()=>import(`./CompareView.js`).then(e=>({default:e.CompareView})),[],import.meta.url)),Ko=[{id:`timeline`,icon:`table`,label:`年表`},{id:`notes`,icon:`notebook`,label:`ノート`},{id:`weak`,icon:`target`,label:`苦手`},{id:`map`,icon:`map2`,label:`地図`},{id:`more`,icon:`dots`,label:`その他`}],qo=864e5;function Jo(){h.rev.value;let e=B.value.tab,t=h.list(`terms`).filter(e=>e.weakness>0).length,n=h.meta.lastBackupAt??0,r=h.meta.createdAt??Date.now(),i=Date.now()-Math.max(n,r)>h.settings.backupReminderDays*qo,[a]=u(zt),o=Gi.value;return l(()=>{let e=e=>{e.target.closest(`input,textarea,select`)||(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`z`&&(e.preventDefault(),e.shiftKey?zr():Rr())};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[]),T(`div`,{class:`app`,children:[a&&!B.value.dismissed.iosTab&&T(`div`,{class:`banner warn`,children:[T(W,{name:`homeShare`}),T(`span`,{children:[`Safariで直接開いています。共有ボタン →「ホーム画面に追加」で追加し、`,T(`b`,{children:`ホーム画面のアイコンから`}),`開いてください（ここで入れたデータは、アイコンから開いたアプリとは別扱いになります）。`]}),T(`button`,{class:`iconbtn sm`,"aria-label":`閉じる`,onClick:()=>H({dismissed:{...B.value.dismissed,iosTab:Date.now()}}),children:T(W,{name:`x`})})]}),Ft.value&&T(`div`,{class:`banner info`,children:[T(W,{name:`refresh`}),T(`span`,{children:`新しいバージョンがあります。`}),T(`button`,{class:`btn sm primary`,onClick:()=>void Rt(),children:`更新する`})]}),T(`main`,{class:`screen-area`,children:o?T(Ct,{fallback:T(`div`,{class:`loading`,children:`読み込み中…`}),children:T(Go,{})}):T(c,{children:[e===`timeline`&&T(qa,{}),e===`notes`&&T(xa,{}),e===`weak`&&T(Eo,{}),e===`map`&&T(Ct,{fallback:T(`div`,{class:`loading`,children:`地図を読み込み中…`}),children:T(Wo,{})}),e===`more`&&T(co,{})]})}),T(`nav`,{class:`tabbar`,children:Ko.map(n=>T(`button`,{class:`tab ${e===n.id&&!o?`on`:``}`,onClick:()=>{o&&(Gi.value=null),H({tab:n.id})},"aria-current":e===n.id?`page`:void 0,children:[T(W,{name:n.icon}),n.label,n.id===`weak`&&t>0&&T(`span`,{class:`badge`,children:t}),n.id===`more`&&(i||io.value.length>0)&&T(`span`,{class:`dot`})]},n.id))}),T(to,{}),T(zo,{}),T(Fo,{}),T(Ro,{}),T(Hi,{}),T(Wi,{}),T(Uo,{}),T(Ea,{}),T(Aa,{}),T(jo,{}),T(Wt,{}),T(Kt,{})]})}var Yo=document.getElementById(`app`),Xo=matchMedia(`(prefers-color-scheme: dark)`);function Zo(){h.rev.value;let e=h.settings.theme,t=e===`dark`||e===`auto`&&Xo.matches,n=document.documentElement;n.classList.toggle(`theme-dark`,t),n.classList.toggle(`theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?`#171513`:`#F4F0E6`);try{localStorage.setItem(`nhnote.theme`,e)}catch{}}d(Zo),Xo.addEventListener(`change`,Zo);var Qo=()=>{h.flush(),Ot()};document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Qo()}),addEventListener(`pagehide`,Qo),h.onError=e=>K(e,{tone:`error`,ms:6e3}),z().then(e=>{t(T(Jo,{}),Yo),document.getElementById(`splash`)?.remove();for(let t of e.notices)K(t,{ms:6e3});Lt(),Be().then(e=>{io.value=e.pending;for(let t of e.notices)K(t,{ms:6e3})})}).catch(e=>{document.getElementById(`splash`)?.remove(),Yo.innerHTML=``;let t=document.createElement(`div`);t.className=`fatal`,t.innerHTML=`<h1>起動できませんでした</h1><p></p><p class="hint">データは消えていません。アプリを閉じて開き直してください。直らない場合は、この画面のスクリーンショットを保存しておいてください。</p>`,t.querySelector(`p`).textContent=e instanceof Error?e.message:String(e),Yo.append(t),Lt()});export{Ct as $,Qr as A,Yt as B,bi as C,si as D,Ti as E,qr as F,q as G,mn as H,$r as I,U as J,K,Wr as L,Zr as M,Yr as N,Xr as O,ii as P,wt as Q,Z as R,Ei as S,yi as T,en as U,xn as V,J as W,H as X,kt as Y,B as Z,Ci as _,oa as a,_i as b,ea as c,Ki as d,L as et,zi as f,wi as g,ci as h,$ as i,Kr as j,Jr as k,qi as l,ui as m,qa as n,N as nt,ia as o,li as p,W as q,Oa as r,na as s,Mo as t,fe as tt,Gi as u,vi as v,gi as w,xi as x,hi as y,jr as z};