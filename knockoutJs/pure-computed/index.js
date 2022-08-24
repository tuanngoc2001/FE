function AppData() {
    console.log("ádasdasd");
    this.firstName = ko.observable('John');
    this.lastName = ko.observable('Burns');
    this.prefix = ko.observable('Dr.');
    this.computedLog = ko.observable('Log: ');
    this.fullName = ko.pureComputed(function () {
        var value = this.prefix() + " " + this.firstName() + " " + this.lastName();
        // Normally, you should avoid writing to observables within a pure computed 
        // observable (avoiding side effects). But this example is meant to demonstrate 
        // its internal workings, and writing a log is a good way to do so.
        this.computedLog(this.computedLog.peek() + value + '; ');
        return value;
    }, this);
    //khởi tạo giá trị step =0
    this.step = ko.observable(0);
    this.next = function () {
        this.step(this.step() === 2 ? 0 : this.step() + 1);
    };
}
ko.applyBindings(new AppData());
