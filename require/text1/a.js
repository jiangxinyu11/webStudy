/**
 * Created by SAMSUNG on 2017/2/19.
 */
define(["b"],function (isArray) {
    function array(arr) {
        if(!isArray(arr)){
            return ;
        }else {
            arr.sort(function (a,b) {
                return a-b;
            })
        }
        return arr;
    }
    return array;
});
