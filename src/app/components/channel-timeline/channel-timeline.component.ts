import { Component, OnInit } from '@angular/core';

interface Tick {
    time: number;
}

@Component({
    selector: 'app-channel-timeline',
    templateUrl: './channel-timeline.component.html',
    styleUrls: ['./channel-timeline.component.scss'],
})
export class ChannelTimelineComponent implements OnInit {
    stepLength = 100;
    ticks: Tick[] = [];

    constructor() {}

    ngOnInit(): void {
        // mock data
        this.ticks = this.getTicks(0, 120000, this.stepLength);
    }

    getTicks(startTime: number, endTime: number, stepLength: number): Tick[] {
        const ticks: Tick[] = [];

        const stepCount = Math.floor((endTime - startTime) / stepLength);

        for (let i = 0; i < stepCount; i++) {
            const time = startTime + i * stepLength;
            ticks.push({ time });
        }

        return ticks;
    }
}
