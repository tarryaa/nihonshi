# 地図の境界・出典と利用条件

更新日：2026年11月3日

## 旧国（令制国）

『旧国・旧郡境界データセット』（CODH作成）
「幕末明治地勢地図境界データ」（人間文化研究機構作成）を加工。
doi:10.20676/00000454

- 配布元：https://geoshape.ex.nii.ac.jp/kg/
- 元の国別境界：`https://geoshape.ex.nii.ac.jp/kg/geojson/K01.geojson` 〜 `K85.geojson`
- 利用条件：**CC BY-NC 4.0（表示・非営利）** https://creativecommons.org/licenses/by-nc/4.0/
- この条件は `regions-kuni.json` の境界データに適用されます。アプリのコードとは別の利用条件です。個人の非営利の学習用に利用してください。商用に再利用する場合は配布元へ確認してください。

加工内容：形の簡略化、小さな破片の除去、整数差分による圧縮。古い字を一部現代表記にし、北海道の読み（胆振・後志・天塩）を現代の読みにしました。823年より前は加賀を越前へ、1869年より前は陸奥5国・出羽2国をそれぞれ一つに統合しています。陸奥・出羽の分割は旧暦明治元年12月7日（西暦1869年1月19日）。北海道11国は1869年以降のみです。琉球は令制国68国に含めていません。

**境界の元資料は幕末・明治初期です。平安時代等に表示する線は、後世資料に基づく行政区分の参考図です。古代の境界や朝廷の実際の支配域を正確に復元したものではありません。** 名称の切り替えは757年以降の主な区分を対象にし、8世紀前半の短期間の分置・併合は対象外です。選択年が対象外で旧国表示を手動で選んだ場合は、757年または1871年の区分を参照します。

年代・名称の参照：

- CODH 国・地域IDデータセット：https://codh.rois.ac.jp/province/
- 加賀の分置（823年）、金沢市図書館の史料翻刻：https://www2.lib.kanazawa.ishikawa.jp/reference/komonjo/komonjo_6.pdf
- 国名・読みは上記CODH一覧。胆振：https://www.iburi.pref.hokkaido.lg.jp/ 、後志：https://www.shiribeshi.pref.hokkaido.lg.jp/ 、天塩：https://www.teshiotown.hokkaido.jp/

## 藩領

iao (2025). **Edo Domains (c. 1862): Geospatial dataset (v0.1)**.
Zenodo. https://doi.org/10.5281/zenodo.17139791

- 配布元：https://github.com/geoiao/edo-domains
- 元データ：https://github.com/geoiao/edo-domains/releases/tag/v0.1
- 利用条件：**CC0 1.0** https://creativecommons.org/publicdomain/zero/1.0/
- この条件は `regions-han.json` の境界データに適用されます。

加工内容：村のポリゴンを領分ごとに結合し、領分内部の村境を取り除きました。飛び地と穴は保持し、軽量化のため形を簡略化しています。学習で使う別名（加賀藩・薩摩藩・土佐藩など）とひらがなを追加しました。

元資料は旧高旧領取調帳データベース等を、2015年農林業センサスの農業集落境界で近似した復元です。**1862年頃の断面を示す参考図であり、江戸時代全期間の境界の変化を再現したデータではありません。** 江戸時代の他の年に表示するときも、この資料年を画面に表示します。幕領・旗本領・社寺領をすべて埋めた図ではありません。空白を無主地として扱わないでください。元資料の欠落や推定誤差を含み、領分の重なりが残る場合があります。

## 背景地形・海岸線

Natural Earth（パブリックドメイン）https://www.naturalearthdata.com/about/terms-of-use/

ほかの日本・中国・朝鮮の政権領域は、学習用に作成した概略です。都道府県名の補助表示は現代の県庁所在地に置いた名称です。

## 再作成

開発用の `tools/regions/build-regions.py` と `han-readings.json` から同じ形式のファイルを作れます。必要なPythonライブラリは `tools/regions/requirements.txt` に記載しています。大きな元データ・Pythonライブラリは公開用フォルダには含まれません。
