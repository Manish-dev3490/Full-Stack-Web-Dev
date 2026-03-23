## We are going to create a e-commerce application with using current frontend tech stack html , css ,js,react and after this project hum dekhenge without redux toolkit kya issues aare the unko samajh kar redux toolkit krenge and new project banayege and then backend par move kr jayege.

## Lets do High level design for our application and discuss what are the feautures we are going to implement in our application just look at the following:

1 Our first feautures is going to be form page jisme hum authentication use karenge by firebase apis and jab user sign up hojayega toh usko main page par redirect kardenge yah agar already sign up hai toh uska username password leke main page par redirect kardenge.

2 Main page par aajao hamara jo whole app component hoga usme ek header component , body component , footer component honge .

Header component --> Iske andar ek logo + ek navigation bar hoga jisme About Contact Cart and ek user ka name show hoga and logout button hoga jispar click karke hum vaapis form page par aajayege.

Body Component -->Iske andar hum pehle ek search bar hoga input and button search ke liye uske nicche initially 30 products items show karenge and 30 items ke nicche ek button hoga show more ka and search bar ke side me ek filter button button hoga search / filter / showmore functionality add krenge + kisi bhi product par click kro toh ek naya component khul jaye jisme header ho header ke nicche us product ki image information ho add to cart button ho title description image rating aur unke nicche footer ho Add to cart par click kre toh cart me items add hojaye yeh bhi functionality banani hai .

so searching,filtering,add to cart,delete from cart ,form validation,autehntication,protected routes,night day feauture,show more functionality,product detail ,buy items fake payment page hoga buss itna hee yeh sab practice ke liye iske bad redux toolkit karenge then main project and fhir backend par move .

