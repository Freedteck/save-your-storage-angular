import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonClass: 'raised' | 'flat' | 'stroked' = 'flat';
  @Input() buttonText = 'Request Demo';
  @Input() color = 'primary';
  @Input() showArrow = false;
}
