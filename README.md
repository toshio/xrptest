# xrptest

XRPを扱うための基本的なサンプルプログラムです。テストネット環境での動作を想定しています。

プログラム中のアドレスやシークレットは適宜変更のうえ実行してください。

## サンプル

|章構成                         |ソースファイル                                                                                            |概要                                       |
|:------------------------------|:---------------------------------------------------------------------------------------------------------|:------------------------------------------|
|2.1 残高照会                   |[balance.js](https://github.com/toshio/xrptest/blob/master/balance.js)                                    |指定アドレスの残高照会                     |
|2.2 アドレス生成               |[createAccount.js](https://github.com/toshio/xrptest/blob/master/createAccount.js)                        |XRPアドレスの生成                          |
|2.3 送金                       |[payment.js](https://github.com/toshio/xrptest/blob/master/payment.js)                                    |XRP送金                                    |
|2.4 履歴                       |[transaction.js](https://github.com/toshio/xrptest/blob/master/transaction.js)                            |トランザクションID指定                     |
|                               |[transactions.js](https://github.com/toshio/xrptest/blob/master/transactions.js)                          |アドレス指定                               |
|2.5 Subscribe                  |[subscribe.js](https://github.com/toshio/xrptest/blob/master/subscribe.js)                                |トランザクション通知                       |
|2.6 公開鍵と秘密鍵             |[key.js](https://github.com/toshio/xrptest/blob/master/key.js)                                            |シークレットからの公開鍵と秘密鍵の取得     |
|2.7 アカウントの設定           |[getSettings.js](https://github.com/toshio/xrptest/blob/master/getSettings.js)                            |設定の取得                                 |
|                               |[setRequireTag.js](https://github.com/toshio/xrptest/blob/master/setRequireTag.js)                        |宛先タグの設定                             |
|                               |[setRegularKey.js](https://github.com/toshio/xrptest/blob/master/setRegularKey.js)                        |Regular keyの設定                          |
|                               |[disableMasterKey.js](https://github.com/toshio/xrptest/blob/master/disableMasterKey.js)                  |Master keyの無効化                         |
|                               |[setMultisignatureKeys.js](https://github.com/toshio/xrptest/blob/master/setMultisignatureKeys.js)        |複数署名の設定                             |
|                               |[multiSignaturePayment.js](https://github.com/toshio/xrptest/blob/master/multiSignaturePayment.js)        |複数署名による送金                         |
|3.1 Webページ上でのアドレス生成|[address.html](https://github.com/toshio/xrptest/blob/master/address.html)                                |XRPアドレスの生成 (Webページ)              |
|3.2 Webページ上での残高照会    |[balance.html](https://github.com/toshio/xrptest/blob/master/balance.html)                                |指定アドレスの残高照会 (Webページ)         |
|3.3 Webページ上での送金        |[payment.html](https://github.com/toshio/xrptest/blob/master/payment.html)                                |XRP送金 (Webページ)                        |
|4.2 Genesis Address            |[genesisAddress.js](https://github.com/toshio/xrptest/blob/master/genesisAddress.js)                      |スタンドアローンRippledサーバへの残高照会  |
|4.3 送金とバリデーション       |[genesisPayment.js](https://github.com/toshio/xrptest/blob/master/genesisPayment.js)                      |スタンドアローンRippledサーバでの送金      |
|5.3 Xpring SDKを使った残高照会 |[xpringBalance.js](https://github.com/toshio/xrptest/blob/master/xpringBalance.js)                        |残高照会  (Xpring SDK)                     |
|5.4 Xpring SDKを使った送金     |[xpringPayment.js](https://github.com/toshio/xrptest/blob/master/xpringPayment.js)                        |送金 (Xpring SDK)                          |
|                               |[xpringXAddress.js](https://github.com/toshio/xrptest/blob/master/xpringXAddress.js)                      |宛先タグを含むX-Addressの生成 (Xpring SDK) |
|5.5 署名                       |[xpringSign.js](https://github.com/toshio/xrptest/blob/master/xpringSign.js)                              |署名 (Xpring SDK)                          |
|                               |[xpringVerify.js](https://github.com/toshio/xrptest/blob/master/xpringVerify.js)                          |署名のチェック (Xpring SDK)                |
|                               |[xpringVerifyWithPublicKey.js](https://github.com/toshio/xrptest/blob/master/xpringVerifyWithPublicKey.js)|公開鍵を用いた署名のチェック               |
|6.1 Express                    |[helloworld.js](https://github.com/toshio/xrptest/blob/master/helloworld.js)                              |Expressを用いたWebサーバのサンプル         |
|                               |[template.js](https://github.com/toshio/xrptest/blob/master/template.js)                                  |テンプレートエンジンejsの使用例            |
|                               |[views/template.ejs](https://github.com/toshio/xrptest/blob/master/views/template.ejs)                    |テンプレートエンジンejsの使用例            |
|6.2 SQLite                     |[database.js](https://github.com/toshio/xrptest/blob/master/database.js)                                  |SQLiteの使用例                             |
|6.3 QRCode                     |[qrcode.html](https://github.com/toshio/xrptest/blob/master/qrcode.html)                                  |QRコード生成 (Webページ)                   |
|6.4 Web API                    |[price.js](https://github.com/toshio/xrptest/blob/master/price.js)                                        |CoinMarketCap APIの使用例                  |
|                               |[bithomp.js](https://github.com/toshio/xrptest/blob/master/bithomp.js)                                    |Bithomp APIの使用例                        |

## 参照ライブラリ

上記サンプルでは、以下のnpmライブラリを参照していますので、必要に応じて適宜インストールしてください。

- ripple-lib
- xpring-js
- express
- ejs
- sqlite3

