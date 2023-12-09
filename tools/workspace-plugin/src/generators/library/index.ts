import { Tree, logger } from '@nx/devkit';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/angular/generators';

export default async function (tree: Tree, options: MyGeneratorGeneratorSchema): Promise<void> {
  if (
    !options.directory?.includes(options.type) &&
    !options.name.match(new RegExp(options.type + '($|[-].*)'))
  ) {
    options.name = `${options.type}-${options.name}`;
  }

  if (options.name.includes('/')) {
    logger.error(`Name can't contain '/'.`);
    return;
  }

  options.style = 'scss';
  options.strict = true;
  options.setParserOptionsProject = true;
  options.directory = options.directory?.replace('libs/', '');

  const domain = options.directory?.split('/')[0];
  if (!domain) {
    logger.error(`A library should be created inside a domain folder`);
    return;
  }

  const domainName = options.type === 'api' ? options.name : domain;

  options.tags = `type:${options.type},domain:${domainName}`;

  await libraryGenerator(tree, options);
}
