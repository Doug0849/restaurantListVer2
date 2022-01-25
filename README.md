# 美食網清單2.0

使用 Node.js + Express 打造的餐廳美食網站，考以管理自己的餐廳清單，達到CRUD的功能(如新增、修改、刪除餐廳資料等功能)，同時，不僅可依照餐廳名稱、地區、類別進行搜尋，還可以依照不同的條件排序餐廳資料。

## Features - 產品功能

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依照中文名稱、英文名稱與餐廳類別進行搜尋
3. 使用者可以新增一家餐廳
4. 使用者可以瀏覽一家餐廳的詳細資訊
5. 使用者可以瀏覽全部所有餐廳
6. 使用者可以修改一家餐廳的資訊
7. 使用者可以刪除一家餐廳

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)
3. [Exepress]
4. [Handlebars]
5. [Method-override]
6. [mongoose]
7. [nodemon]

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Doug0849/restaurant_2.0.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurantList_2.0
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件 (若已再globle安裝則不須重新安裝)

```
在 Terminal 輸入 npm install -g nodemon 指令
```

5. 匯入種子檔案

```
執行 npm run seed 匯入初始餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
mongodb connected
done
```

6. 執行npm腳本，啟動伺服器

```
在 Terminal 輸入 npm run dev 指令
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Server is started on http://localhost:3000 ...
mongodb connected
```

現在可以開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用美食網頁清單2.0囉！

## doug0849 - 專案開發練習人員
> [Doug](https://github.com/doug0849)
