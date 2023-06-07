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
    // function buyMeal(){
    //     if(type == 1){
    //         snacks.one --
    //     }
    //     if(type == 2){
    //         snacks.two --
    //     }
    //     if(type == 3){
    //         snacks.three --
    //     }
    // }
    function checkPackage(){
        type
    }

    return {
        goOnRide,
        //buyMeal,
        checkPackage,
        getRides
    }
}