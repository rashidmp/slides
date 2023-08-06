import { $, cd, argv } from 'zx';

$.env.FORCE_COLOR = '1';

const [slide] = argv._;

if (slide) {
  await cd(`${slide}/src`);
}

await $`slidev slides.md`;
