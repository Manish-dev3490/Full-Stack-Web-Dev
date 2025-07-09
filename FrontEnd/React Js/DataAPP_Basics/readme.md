We are going to learn react js and its basic nitty gritty and advanced concepts like parcel,bundlers,babel ,package.json and all others things that need to ignite our application and make it production ready let us move ahead .

1 -->So start react js application needs so much dependancy packages to make it production ready application many tutorials just starts with create react app in which application is automatically set up for production but i am going to learn how to make our application production ready. so we need a bundler which spark pur application which plays very important role to make our application powerful and ignite.there are many bundlers available in the market webpack,vite parcel let us start with the parcel

2 --> Package.json-is a file which have approx version of our depandancy packages which we have installed as normal dependancy or dev dependancy and other configuratin it stores .

3 -->Now i have in stalled parcel as a dev dependancy and there is node_modules foler is installed with the package-lock.json file now i am going to tell you what is this...

4 --> Node_modules is a folder in which all the packages dependancy code is stored which parcel needs to work . assume our appklucation react need bundler parcel to be production ready s parcel is a dependancy so as similar parcel also needs some packages to work and make our react application powerful i heaerd many people say react js is fast but at the end of the day react js is converted into plain javascript react js is not fast but bundler is a superpower which react js use to make react js appluication faster and production ready .

5 -->Package-lock.json is file which have configuration of all the transitive dependancy which are installed for the depandancy package which we have installed and have the exact version for all the packages.

6 --> Now i have installed react and react dom which we need to start with the react .React library give us core react feautures like create element and react-dom library give us functionality to append react element into the root

7 -->For excecuting or starting parcel we need to write command npx parcel and enrtry point of the applicastion but by doing some changes in the package.json file we also start application with the npm start

8-->Now my application is production ready and you dont know parcel is such a beast it is doing a lot of things for us behind the scene

9 -->Now i am going to tell you what is parcel doing in our application so parcel is a superpower package which is doing alot of following things for us .

---> Creating a local server on the port and minifiying our whole application into two three files and hosting that on local server and providing us dev build enviorment and storing those files in the dist folder

--> parcel is also doing hmr hot module replcement which means we are doing any update it is automagically updating that on the server without reloading the browser it is done by file watching algorithum

--> As fast we are updating or doing any changes in our code it is automatically giving faster build because it also caching code for us and storing cached code into .parcel-cahche folder for faster developer expeericne

--> Doing code optimization on its level if it need to improvement in our files

--> Earlier days of react we used to create react element by React.createelement which takes 3 parameters type of the element , propertes of the element and content of the element and React.createElement convert that into the object .but that was very hectic task if we have to build big large scale application so jsx was used to create react elements.

--> JSX is a javascript xml language which is a html like syntax we used to create react elements in react js application and jsx need a transpiler to convert its code into the core react which is done by the transpiler babel which is under parcel

-->babel is a transpiler which is used to tranform the jsx into the core react element and then react.createelement convert it into the object .these all things are done by the parcel

-->Give beautiful diagnostic if we face any error it convert error into beautiful interface which increase productivity of the developer

-->Diffrentaiate bundles like dev bundle and production bundle into the dist folder and also make our apllication ready to serve in older version of the browser by using a package browser-list.

-->Tree shaking if we have 50 function in our application and we are only using 5 from them it automatically remove unused code from our dev build files

--> This is all the parcel is doing for our application so react is fast because of parcel and bundlers

10 --> We have created a basic react js aplication which is calling a api of products and returing us a list of products and we are rendering that array in our root element


11 --> Now when we are iterting through map over products data which is coming from api and calling a makeCard function and makeCard function is return jsx which is card all the cards will return through map function into variable and then we will render those cards into root 

12 --> Introduction to react components 