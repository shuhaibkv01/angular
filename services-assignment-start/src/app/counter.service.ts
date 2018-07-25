import { EventEmitter } from "@angular/core";

export class CounterService {
    toInactiveCount = new EventEmitter();
    toActiveCount = new EventEmitter();
    incrimentToInactiveCount() {
        this.toInactiveCount.emit();
    }

    incrimentToActiveCount() {
        this.toActiveCount.emit();
    }
}