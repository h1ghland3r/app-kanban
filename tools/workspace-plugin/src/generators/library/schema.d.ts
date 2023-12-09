import { UnitTestRunner } from '@nx/angular/generators';

export interface MyGeneratorGeneratorSchema {
  directory?: string;
  name: string;
  strict?: boolean;
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
  tags?: string;
  type:
    | 'api'
    | 'application'
    | 'data-access'
    | 'domain'
    | 'feature'
    | 'shell'
    | 'testing'
    | 'ui'
    | 'util';
  setParserOptionsProject?: boolean;
  skipModule?: boolean;
  unitTestRunner?: UnitTestRunner;
}
