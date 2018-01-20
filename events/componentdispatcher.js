import EventBus from './eventbus.js';

export default class {
    constructor(scope) {
        this._bus = new EventBus();
        this._scope = scope;
    }

    /**
     * passthrough for HTMLElement's dispatchEvent
     * hit the eventbus and do the normal Web Component dispatch
     * @param customevent
     */
    dispatchEvent(customevent) {
        this._bus.triggerEvent(customevent);
        this._scope.dispatchEvent(customevent);
    }

    get eventBus() {
        return this._bus;
    }

}