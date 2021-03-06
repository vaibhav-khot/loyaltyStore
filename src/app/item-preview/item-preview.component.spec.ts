import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPreviewComponent } from './item-preview.component';

describe('ItemPreviewComponent', () => {
  let component: ItemPreviewComponent;
  let fixture: ComponentFixture<ItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
