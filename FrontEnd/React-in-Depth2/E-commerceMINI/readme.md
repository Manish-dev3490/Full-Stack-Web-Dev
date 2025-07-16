## In this i am going to show you what is functional component behind the scenes each information about this i am going to learmn in this project.

## SO jo render methd hota hai naah woh apne andar ek Component ko render krta hai aur component kya return krta hai peice of jsx and jsx jkya hota hai at the end of the day jsx is react.createElement and react.createElement end me ek object hota hai jisme kuch key values pairs hote hai like look at this example.


## $$typeof:Symbol.for('react.element),
## type:'h2',
## ref:null,
## props:{},
## key:null  jo rrReact.createElement hota hai woh at the end of the day ek object hee hota hai .



## So Jo React ka functional component hota hai naah woh jsx return krta hai aur jsx at the end of the converted into React.createElement by the transpiler babel and then React.createElememnt is converted into this above object.