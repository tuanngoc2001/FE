export class Staff{
    private _name:string;
    private _email:string;
    private _age:number;
    constructor(name:string,email:string,age:number)
    {
        this._name=name;
        this._email=email;
        this._age=age;
    }
    getName():string{
        return this._name;
    }
    getEmail():string{
        return this._email
    }
    getAge():number{
       return this._age;
    }
    setName(name:string)
    {
        this._name=name;
    }
    setEmail(email:string)
    {
        this._email=email;
    }
    setAge(age:number)
    {
        this._age=age;
    }
    
}