import { Tree, generateFiles, joinPathFragments, logger } from '@nx/devkit';
import { ComponentGeneratorSchema } from './schema';
import { componentGenerator } from '@nx/angular/generators';
import { strings } from '@angular-devkit/core';

export default async function (tree: Tree, options: ComponentGeneratorSchema): Promise<void> {
  options.style = 'scss';
  options.standalone = true;
  options.skipTests = true;

  if (options.name.includes('/')) {
    logger.error(`Name can't contain '/'.`);
    return;
  }

  await componentGenerator(tree, options);

  // Create spec file and spectator
  const target = `${options.path}/${strings.dasherize(options.name)}`;
  generateFiles(tree, joinPathFragments(__dirname, 'files'), target, {
    ...strings,
    ...options,
    'name@dasherize': strings.dasherize(options.name),
    template: ''
  });
}
