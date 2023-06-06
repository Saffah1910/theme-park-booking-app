function parkTransactions(type){

   var  rides = {
    one : 100,
    two : 200,
    three : 300
   }

    var  snacks = {
    one : 10,
    two : 20,
    three : 30
   }

    function goOnRide(){
        if(type == 1){
            rides.one --
        }
        if(type == 2){
            rides.two --
        }
        if(type == 3){
            rides.three --
        }

    }
    function buyMeal(){
        if(type == 1){
            snacks.one --
        }
        if(type == 2){
            snacks.two --
        }
        if(type == 3){
            snacks.three --
        }
    }
    function checkPackage(){
        type
    }

    return {
        goOnRide,
        buyMeal,
        checkPackage
    }
}