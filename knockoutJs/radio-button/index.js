
var viewModel = {
    wantsSpam: ko.observable(true) // Initially checked
};
// viewModel.wantsSpam.subscribe (function(){
//     var status=viewModel.wantsSpam==true?viewModel.wantsSpam(false):viewModel.wantsSpam(true);
//     console.log(status);
//     return status;
// })
// console.log(viewModel.wantsSpam);
ko.applyBindings(viewModel);
// ... then later ...
// viewModel.wantsSpam(false);