const fetchmenu=async (id)=>{
    const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5376318&lng=77.2282863&restaurantId=${id}&catalog_qa=undefined&query=Noodles&submitAction=ENTER`);
    const json= await data.json();
    console.log(json);
    
  }
  export default fetchmenu;