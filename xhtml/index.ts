// export module service{
//     export class ScreenModel{
//         paymentDate:KnockoutObservable<any>;
//         constructor ()
//         {
//             var seft=this;
//             seft.paymentDate=ko.observable("abc")
//         }
//     }
// }



const { service } = require(".");

var dfd=$.Deferred();
service.findAnnualHolidays(param).done(function(data:any){
  dfd.fail(function)
});


var promise=dfd.promise();
promise.done(function(data){
    console.log("123");
})
promise.fail(function(ex){
    console.log("ex")
})