# 美食網清單2.0

使用 Node.js + Express 打造的餐廳美食網站，可以註冊擁有自己的帳號，透過登入自己的帳號來管理自己的餐廳清單，達到CRUD的功能(如新增、修改、刪除餐廳資料等功能)，同時可依照餐廳名稱、地區、類別進行搜尋，還可以依照不同的條件排序餐廳資料。

## Features - 產品功能

1. 使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。
2. 使用者也可以透過 Facebook Login 直接登入
3. 使用者的密碼使用 bcrypt 來處理
4. 使用者必須登入才能使用餐廳清單
5. 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息
6. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
7. 使用者可以依照中文名稱、英文名稱與餐廳類別進行搜尋
8. 使用者可以新增一家餐廳
9. 使用者可以瀏覽一家餐廳的詳細資訊
10. 使用者可以瀏覽全部所有餐廳
11. 使用者可以修改一家餐廳的資訊
12. 使用者可以刪除一家餐廳

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Doug0849/restaurantListVer2.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurantListVer2
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件 (若已再globle安裝則不須重新安裝)

```
在 Terminal 輸入 npm install -g nodemon 指令
```

5. 修改.env檔
```
將.env.sample檔的副檔名拿掉改為.env檔
```

6. 匯入種子檔案

```
執行 npm run seed 匯入初始餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增完成

```
mongodb connected
seeds create finished.
```

7. 執行npm腳本，啟動伺服器

```
在 Terminal 輸入 npm run dev 指令
```

8. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Server is started on http://localhost:3000 ...
mongodb connected
```

9. 現在可以開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用美食網頁清單2.0囉！

10. 可以使用種子帳號來做測試：
  email: user1@example.com 密碼:12345678
  email: user2@example.com 密碼:12345678
  
11. 目前登入後的餐廳查詢功能尚未建置完成

## doug0849 - 專案開發練習人員
> [Doug](https://github.com/doug0849)
