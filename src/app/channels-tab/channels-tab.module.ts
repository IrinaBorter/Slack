import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsTabComponent } from './channels-tab.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ChannelsTabComponent],
    exports: [ChannelsTabComponent],
})

export class ChannelsTabModule {}