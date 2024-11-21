import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HelpsComponent } from './components/helps/helps.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    HelpsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    SignupComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
