import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';

export function mockObject(obj){
    var keys = [];
    for (var i in obj.prototype){
        keys.push(i);
    }
    var name = obj.name;
    return jasmine.createSpyObj(obj.constructor.name, keys);

}

export function mockObservable(data?: any){
    return Observable.create((obs)=>{
        obs.next(data);
        obs.complete();
    });
}

export function mockComponent(selector){
    @Component({
        template: 'We are '+selector,
        selector: selector
    })
    class test{

    }
    return test;
}
