import { Observable, Subscriber } from 'rxjs';

export class MainClass{
    
    availabilityThreshold: number = 30;
    
    constructor(){
        console.log('Constructor called.');
    }

    monitoringCallback(callback: (error:string | null, result?:string) => void): void {
        setTimeout(()=> {
            const randAvailability = Math.random()*100;
            if(randAvailability>=this.availabilityThreshold){
                callback(null, 'Successful request');
            } else {
                callback('Error availability is low');
            }
        },3000);
    }

    monitoringPromise(): Promise<string>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const randAvailability = Math.random()*100;
            if(randAvailability>=this.availabilityThreshold){
                resolve('Successful request');
            } else {
                reject('Error availability is low');
            }
            }, 3000);
        });
    }

    monitoringObservable(): Observable<string> {
        return new Observable((subscriber:Subscriber<string>)=> {
            let counter=0;
           const interval = setInterval(()=>{
                const randAvailability = Math.random()*100;
                if(randAvailability>=this.availabilityThreshold){
                    subscriber.next('Successful request');
                } else {
                    subscriber.error('Error availability is low');
                }
                counter++;
                if(counter==5){
                    clearInterval(interval);
                    subscriber.complete();
                }
            }, 2000)
        })
    }

}