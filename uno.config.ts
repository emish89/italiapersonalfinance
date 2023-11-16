import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
  rules: [
    [
      'drop-shadow-custom-1',
      { filter: 'drop-shadow(3px 3px 0 rgb(0 0 0 / 1))' },
    ],
    [
      'drop-shadow-custom-2',
      { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' },
    ],
  ],
  shortcuts: [
    {
      'brutal-card':
        'p-4 bg-white border-2 border-black drop-shadow-custom-2 transition-all	duration-500 my-4',
    },
    {
      'brutal-btn':
        'bg-white drop-shadow-custom-1 hover:outline-none hover:drop-shadow-custom-2 sanchez inline-block px-2 border-2 border-black transition-all ease-in-out duration-150',
    },
  ],
});
