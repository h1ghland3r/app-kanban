import { Tree, readProjectConfiguration } from '@nx/devkit';
import { StoryGeneratorSchema } from './schema';
import { componentStoryGenerator as nrwlComponentStoryGenerator } from '@nx/angular/generators';
import { strings } from '@angular-devkit/core';

export default async function componentStoryGenerator(
  tree: Tree,
  options: StoryGeneratorSchema
): Promise<void> {
  const project = readProjectConfiguration(tree, options.project);
  const componentPath = options.path?.replace(project.root, '') ?? '';
  const componentFileName = `${strings.dasherize(options.name)}.component`;
  const componentName = `${strings.classify(options.name)}Component`;

  nrwlComponentStoryGenerator(tree, {
    projectPath: project.root,
    componentName,
    componentPath,
    componentFileName
  });
}
