import html from "./main.component.html";
import css from "./main.component.css";
import {
    ValueEvent,
    BindCheckedToBoolean,
    Change,
    EzComponent,
    Click,
    BindValue,
} from "@gsilber/webez";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    @BindCheckedToBoolean("the-check-box")
    @BindValue("the-check-box-status", (c: boolean) => c.toString())
    private checkBox: boolean = false;

    constructor() {
        super(html, css);
    }

    @Change("the-check-box")
    onChecked(event: ValueEvent) {
        this.checkBox = event.value === "on";
    }

    @Click("turn-off")
    turnOff() {
        this.checkBox = false;
    }

    @Click("turn-on")
    turnOn() {
        this.checkBox = true;
    }
}
