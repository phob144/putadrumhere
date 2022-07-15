import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTimelineComponent } from './channel-timeline.component';

describe('ChannelTimelineComponent', () => {
  let component: ChannelTimelineComponent;
  let fixture: ComponentFixture<ChannelTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
