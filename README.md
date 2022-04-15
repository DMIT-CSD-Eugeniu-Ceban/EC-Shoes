# :writing_hand: <span style="color: lightcoral;"> **Assignment 5**</span>  <span style="color: turquoise;">*(Next.js Storefront)*</span>
 :calendar: 22th, April 2022 <br/>
 :clock11: 15:59pm <br/>
 :package: <span style="color: red; font-weight:700">20%</span>

  - [General Info about project](#general-info)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Conclusion](#conclusion)


##  :books: <span style="color:FFF3E0; font-weight:500" id="general-info">General Info</span>

&nbsp;&nbsp;&nbsp;&nbsp;This project aims to create in &nbsp; <span style="color: green; font-weight:600; font-size: 1.2rem"> <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" width="25" title="react logo"> *Node.Js* &nbsp;</span> an online footwear dashboard store for men, women, and children. The name of this store is <span style="color:#EF5350; font-weight:600"><img src="./static/../static/logo.png" width="25" title="EC logo"> *"Shoes EC"*</span>. The purpose of this project is to create storefront page which will contain a minimum of 3 products that my company wishes to sell.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;More than that, I will use the REST API provided by the
Real-Time Database to connect my product data to my store. For my store, I used &nbsp;<img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" width="25" title="react logo"></span>&nbsp; which provided me with a full stack (client/server) react framework. I used in this project **Stripe.js** which is a JavaScript library for building my payment flows. Stripe Checkout to take payments for our products.<br/>
This project is launched on &nbsp; <span style="color: lightseagreen; font-weight:600; font-size: 1.2rem"> <img src="https://logovtor.com/wp-content/uploads/2020/10/vercel-inc-logo-vector.png" width="40" title="react logo"> </span>, uses the &nbsp; <span style="color: #FF9C0B; font-weight:600; font-size: 1.2rem"> <img src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png" width="30" title="react logo">*Firebase* &nbsp;</span> database storage system, and the repository can be found on the *Github* link and *Vercel*.<br/>
Good Luck !!!

##  :computer: <span style="color:78909C; font-weight:500" id="installation">Installation</span>
1.  Install all packages/dependencies:
    - Open VSCode command line. View > Terminal
    - In the command line issue the following terminal command
```
  npm install
```
2. Run the server
     - Run the server before can be used
  ```
    npx next dev
  ```
3. Server will run in console:
   - wait a few seconds, the first time the server needs more time than usual, just click on 
```
  http://localhost:3000
```

## :gear: <span style="color:81C784; font-weight:500" id="setup">Setup</span>

&nbsp;&nbsp;&nbsp;&nbsp;In elaborating this task, I fulfilled all the conditions required by the teacher. At the time of launching the page, the customer will receive the `"Dashboard"` page with 3 products that have been read from the `"Firebase"` database. Each product will contain the name of the product, its price, a description of the product, and a `"Buy"` button to give the customer the opportunity to purchase that product. The next step is to scale and transfer the product selected by the customer to the payment process stage.
  Here the customer will have the opportunity to enter personal and bank details to complete the payment process. After entering the correct data in all the fields required by our store, the client will appear the `"Buy"` button. At this time the bank and personal data will be transmitted to the `"Stripe"` server where they will be processed.<br/>
<br/>

>## :hammer_and_wrench: New Implementation
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;In this assessment 5, I completed the product write functionality and implement the read functionality to view minimum 3 products panes. The first step is to read the data from <span style="color: #FF9C0B; font-weight:600; font-size: 1.2rem"> <img src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png" width="27" title="react logo">Firebase &nbsp;</span> virtual database to present to the client. This theft and presentation of products will only be possible via "UID". Thanks to this unique id we can identify each product without having conflict with other cards. Data processing and theft takes place at a relative speed and is protected by a single secure key that is not published anywhere.
The main purpose of this payment process is to offer the customer the opportunity to easily and easily access all the products of our online store. We want our licenses to be fully satisfied and to recommend our products to other new members.
<br/>
<br/>

## :pencil: <span style="color:CE93D8; font-weight:500" id="conclusion">Conclusion</span>
Finally, we can mention that this project is a successful one. Website offers more opportunities to our clients. This product is easy to use, navigate and has a high-quality standard.
Everything presented here aims to accomplish the mission offered to the <span style="color:#3F51B5; font-weight:700">NAIT</span> higher education institution. All copyrights are legally reserved, and the purpose of this product is to show how we can use the Firebase database.

&nbsp; 

## :label: [![Generic badge](https://img.shields.io/badge/<Assignment2>-<Open>-<COLOR>.svg)](https://app.netlify.com/sites/ec-shoes-assessment1-eugeniuceban/overview) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/) [![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg) [![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)


[![made-with-html](https://img.shields.io/badge/Made%20with-HTML-1f425f.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![made-with-css](https://img.shields.io/badge/Made%20with-CSS-1f425f.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![made-with-Sass](https://img.shields.io/badge/Made%20with-SASS-1f425f.svg)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
[![made-with-npm](https://img.shields.io/badge/Made%20with-NPM-1f425f.svg)](https://www.npmjs.com/)

[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)



[![GitHub forks](https://img.shields.io/github/forks/Naereen/StrapDown.js.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Naereen/StrapDown.js/network/)
&ensp;

### 	:link: Connection
![gmail](https://aleen42.github.io/badges/src/google_plus.svg)
![reddit](https://aleen42.github.io/badges/src/reddit.svg)
![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![windows10](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
&ensp;

### :mortar_board: Skills
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=whit)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SAAS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

&ensp;

&ensp;

#### *Personal icons*
:mortar_board:
:computer:
:lock_with_ink_pen:
:bulb:
:hammer:
:wrench:
:email:
:key:
:lock:
:mailbox_with_mail:
:black_nib:
:pencil2:
:pushpin:
:file_folder:
:calendar:
:open_file_folder:
:paperclip:
:hammer_and_wrench:
