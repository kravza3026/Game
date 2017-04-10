var test= function(){
    function getTest(){
        return alert('test');
    };
    return{
        getTest:getTest
    }
}();