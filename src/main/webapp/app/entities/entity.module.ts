import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FfmRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { FfmCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { FfmLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { FfmDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { FfmTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { FfmEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { FfmJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { FfmJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FfmRegionMySuffixModule,
        FfmCountryMySuffixModule,
        FfmLocationMySuffixModule,
        FfmDepartmentMySuffixModule,
        FfmTaskMySuffixModule,
        FfmEmployeeMySuffixModule,
        FfmJobMySuffixModule,
        FfmJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FfmEntityModule {}
