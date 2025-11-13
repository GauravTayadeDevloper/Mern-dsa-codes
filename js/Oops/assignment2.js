function Counter()
{
        this.count=0;
    
    
}

Counter.prototype.inc = function(){
    this.count+=1;
}
Counter.prototype.value=function(){
    return this.count;
}

let c1 = new Counter();
c1.inc();
c1.inc();
console.log(c1.value());