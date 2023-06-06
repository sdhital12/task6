import'./App.css'
function App(){
 const names= ['Harry', 'Bob', 'Charlie', 'David'];
let participants =[];
for (let i =0;i<names.length; i++){
  participants[i]=<li>{names[i]}</li>

}
console.log(participants)

return(
  <>
  
  <header>
     <h1> Baltimore Marathon</h1>
     </header>
     
 <div className ="banner">
  <div className ="banner_img">
    <img src="https://hips.hearstapps.com/hmg-prod/images/runners-compete-during-the-2022-new-york-city-marathon-in-news-photo-1678903310.jpg?crop=0.813xw:0.842xh;0.124xw,0.158xh&resize=1200:*" alt="" />
</div>

<div>
  <p>Have your signs set on a fall marathon, like New York City or Chicago? Then it’s time to find a marathon training plan. Thankfully, we’ve got you covered with plans for different fitness levels and goals. Plus, we have the advice you need to get to the starting line feeling strong, as well as how to pick the right race for you, tips for fueling up, and more. Let this guide to marathon training lead you to your best race yet—whether it’s your first or 50th!

</p>
<p>Have your signs set on a fall marathon, like New York City or Chicago? Then it’s time to find a marathon training plan. Thankfully, we’ve got you covered with plans for different fitness levels and goals. Plus, we have the advice you need to get to the starting line feeling strong, as well as how to pick the right race for you, tips for fueling up, and more. Let this guide to marathon training lead you to your best race yet—whether it’s your first or 50th!

</p>

</div>
 </div>
  
  <div><h2>Name of Pariticipants</h2></div>
  <div>{participants}</div>
  
  </>
)





}
export default App
