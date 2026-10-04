# kamikaze 提案用デモ 制作ノート

## 事前調査と採用方針（2026-10-04）
- OLD ROCK（松本）https://pub-oldrock.com/ ：FVは大型のセリフ体店名・店内写真・予約導線。主要部は紹介→ビール→料理→季節→パーティー→人物→地域ビール→空間→ニュース→営業時間→アクセスの約11区画。深緑・金色、大きな英字と広い余白。観光公式サイト https://visitmatsumoto.com/article/detail_2.html の紹介を選定根拠とした。雰囲気と飲食の分離、アクセス案内を採用し、当案では予約・プラン・経歴を載せず電話を主導線にした。
- 松本ハイボールバー https://highballbar-matsumoto.com/ ：FVはドリンクの大写真、電話・予約。主要部はヒーロー→紹介→ブログ→問い合わせ→店舗情報の5区画。白地・琥珀色、本文はゴシック、写真を大きく使用。営業時間・駅からの経路・料金・席・支払いをまとめる実用性を採用し、当案では口コミ由来の紹介に絞り、未確認の時間・料金・経路は要確認表示。https://www.hotpepper.jp/strJ001233591/ に掲載された来店者の肯定的な口コミ（種類や価格について）も選定時に確認。総合評点の断定はしていない。
- Bar BenFiddich（東京）https://benfiddich.tokyo/ ：FVは店名と言語・住所・電話・予約枠。住所→電話→予約/注意事項→月別カレンダー→グッズ→SNSの6区画。白と灰色、素直なサンセリフ、情報ブロック間に余白。https://www.the50.com/bars/best-in-the-world/the-list/bar-benfiddich.html の掲載を選定根拠とした。来店前の必要情報を明快に示す考え方を採用し、カレンダー・予約・グッズは設けず電話・地図・Instagramへ集約。
- 共通して訪問者が探すのは営業時間/閉店時刻、休み、一人やグループの利用、料金/チャージ、所在地/経路、連絡方法。完成版はヒーロー→所在地/電話→雰囲気と3特徴→お酒/料理→営業時間/地図→問い合わせの順。写真・文章・ロゴ・固有レイアウトの流用はせず、焦げ茶・真鍮色、独立したグラス写真と余白で新規構成。MAIN BAR COATも検索したが公式サイトがタイムアウトし、視覚参照には含めていない。

## 内容の扱い
- 店名・住所・電話・Instagram・GoogleマップURLはユーザー指定値を使用。
- 店舗紹介はユーザーが提示した「Googleマップの口コミの傾向」を要約。今回Google口コミ本文を直接取得・引用したものではない。
- 営業時間・定休日、メニュー名/価格、ウイスキー銘柄、チャージ、駐車場/道順は店舗未確認のため【要確認】表示。営業時間の確定値、徒歩分数、席数、経歴、受賞歴、貸切可否は推定していない。
- 提案用で正式な店舗依頼ではないことを上部とフッターに明記。noindexあり。連絡先は実際の店舗につながる電話・Instagram・地図のみでフォームなし。

## Pexels素材
すべてイメージ写真。店舗の実写真ではなく、各写真にキャプションを重ねた。Pexels素材の利用条件 https://www.pexels.com/license/ に基づく素材で、Googleマップ/SNSの写真は使用していない。

| ファイル | Pexels ID | 出典 | ダウンロードURL |
|---|---|---|---|
| img/whisky.jpg | 10747957 | https://www.pexels.com/photo/alcohol-with-ice-in-glass-10747957/ | https://images.pexels.com/photos/10747957/pexels-photo-10747957.jpeg?auto=compress&cs=tinysrgb&w=1200&q=75 |
| img/bottles.jpg | 3355400 | https://www.pexels.com/photo/selective-focus-photo-of-alcohol-bottles-3355400/ | https://images.pexels.com/photos/3355400/pexels-photo-3355400.jpeg?auto=compress&cs=tinysrgb&w=1200&q=75 |
| img/pouring.jpg | 17205258 | https://www.pexels.com/photo/man-hand-pouring-drink-to-glass-through-sieve-17205258/ | https://images.pexels.com/photos/17205258/pexels-photo-17205258.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=max |

写真はすべて200KB未満。Google Fonts（Playfair Display / Noto Serif JP / Noto Sans JP）はオンライン読み込み。フォント不通時はシステムフォントにフォールバック。

## 公開設定
GitHub public repository: `tetsu0619hira/kamikaze-kamikaze-pygjnq`。GitHub Pages: `main` ブランチのルート。
公開URL: https://tetsu0619hira.github.io/kamikaze-kamikaze-pygjnq/

## 差し替え時
店舗確認後に要確認文言を確定情報へ変更し、実際の店舗写真に差し替える。正式公開の際は店舗許可、デモ表記、検索公開設定を別途確認する。

## 検証結果（2026-10-04）
- 375pxスマホ／1440px PCでブラウザ表示を確認。横はみ出しなし。スマホ下部固定バー・キャプション・電話導線を確認。主要本文16px以上。
- 公開ページで住所検索のGoogleマップ描画を確認。ローカル確認時の地図描画待ちも公開版では解消。
- 全画像の読み込み、各200KB未満、指定の地図URL完全一致、noindex、viewport-fit=cover、フォームなし、telリンクを検証。実際の発信や店舗への連絡は実施していない。
- GitHub Pages status=built、PUBLIC、main /、HTTPS有効、公開URLでサイト表示を確認。
