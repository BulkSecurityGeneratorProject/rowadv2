import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RowadSharedModule } from '../../shared';
import { RowadAdminModule } from '../../admin/admin.module';
import {
    TeamService,
    TeamPopupService,
    TeamComponent,
    TeamDetailComponent,
    TeamDialogComponent,
    TeamPopupComponent,
    TeamDeletePopupComponent,
    TeamDeleteDialogComponent,
    teamRoute,
    teamPopupRoute,
    TeamResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...teamRoute,
    ...teamPopupRoute,
];

@NgModule({
    imports: [
        RowadSharedModule,
        RowadAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TeamComponent,
        TeamDetailComponent,
        TeamDialogComponent,
        TeamDeleteDialogComponent,
        TeamPopupComponent,
        TeamDeletePopupComponent,
    ],
    entryComponents: [
        TeamComponent,
        TeamDialogComponent,
        TeamPopupComponent,
        TeamDeleteDialogComponent,
        TeamDeletePopupComponent,
    ],
    providers: [
        TeamService,
        TeamPopupService,
        TeamResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RowadTeamModule {}
