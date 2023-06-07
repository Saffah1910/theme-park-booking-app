function parkTransactions(){

   var  points = {
    one : 100,
    two : 200,
    three : 300
   }

    function goOnRide(type){
        if(type == "one"){
            if(points.one >= 8){
                points.one -=8
            }
        }
        else if(type == "two"){
            if(points.two >= 8){
                points.two -=8
            }
        }
        else if(type == "three"){
            if(points.three >= 8){
                points.three -=8
            }
        }

    }
    function getPackageOne(){
        return points.one
    }

    function getPackageTwo(){
        return points.two
    }

    function getPackageThree(){
        return points.three
    }

    function buyMeal(type){
        if(type == "one"){
            if(points.one >= 4){
                points.one -=4
            }
        }
        if(type == "two"){
            if(points.two >= 4){
                points.two -=4
            }
        }
        if(type == "three"){
            if(points.three >= 4){
                points.three -=4
            }
        }
    }
    // function getMeal(){
    //     return points.one
    // }

    // function checkPackage(){
    //     type
    // }

    return {
        goOnRide,
        buyMeal,
        //checkPackage,
        getPackageOne,
        getPackageTwo,
        getPackageThree
       // getMeal
    }
}