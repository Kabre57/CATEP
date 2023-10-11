import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { EventsComponent } from './pages/events/events.component';
import { EventSingleComponent } from './pages/event-single/event-single.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SingleComponent } from './pages/single/single.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    AboutUsComponent,
    ContactComponent,
    ServiceComponent,
    AppointmentComponent,
    EventsComponent,
    EventSingleComponent,
    GalleryComponent,
    SingleComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
