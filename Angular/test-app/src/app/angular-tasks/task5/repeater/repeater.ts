import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'repeater',
  imports: [CommonModule],
  templateUrl: './repeater.html',
  styleUrl: './repeater.scss',
  standalone: true,
})
export class Repeater  {
  @Input() option: Array<{ name: string }> = [];
  @ContentChild(TemplateRef) template: TemplateRef<any> | null = null;
}
