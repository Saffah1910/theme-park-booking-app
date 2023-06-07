function parkTransactions(){

   var  rides = {
    one : 100,
    two : 200,
    three : 300
   }

//     var  snacks = {
//     one : 10,
//     two : 20,
//     three : 30
//    }

    function goOnRide(type){
        if(type == "one"){
            if(rides.one >= 8){
                rides.one -=8
            }
        }
        else if(type == "two"){
            if(rides.two >= 8){
                rides.two -=8
            }
        }
        else if(type == "three"){
            if(rides.three >= 8){
                rides.three -=8
            }
        }

    }
    function getRides(){
        return rides.one
    }
    function buyMeal(){
        if(type == "one"){
            if(snacks.one >= 4){
                snacks.one -=4
            }
        }
        if(type == "two"){
            if(snacks.two >= 4){
                snacks.two -=4
            }
        }
        if(type == "three"){
            if(snacks.three >= 4){
                snacks.three -=4
            }
        }
    }
    function checkPackage(){
        type
    }

    return {
        goOnRide,
        buyMeal,
        checkPackage,
        getRides
    }
}