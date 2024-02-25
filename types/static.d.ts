/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
  declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
  }
  declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
  }
  declare module '*.module.styl' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  /* CSS */
  declare module '*.css';
  declare module '*.scss';
  declare module '*.sass';
  declare module '*.less';
  declare module '*.styl';

  /* JS MODULES */
  declare module '*.module.js';
  declare module '*.module.jsx';

  /* JS */
  declare module '*.js';
  declare module '*.jsx';

  /* TS MODULES */
  declare module '*.module.ts';
  declare module '*.module.tsx';

  /* TS */
  declare module '*.ts';
  declare module '*.tsx';

  /* ICONS */
  declare module '*.ico';
  declare module '*.webp';
  declare module '*.avif';
  declare module '*.gifv';
  declare module '*.pngv';
  declare module '*.svgv';
  declare module '*.jpgv';
  declare module '*.jpegv';
  declare module '*.bmpv';
  declare module '*.tif';
  declare module '*.tiff';
  declare module '*.icns';
  declare module '*.heic';
  declare module '*.heif';

  /* FONTS */
  declare module '*.woff';
  declare module '*.woff2';
  declare module '*.ttf';
  declare module '*.otf';
  declare module '*.eot';

  /* AUDIO */
  declare module '*.mp3';
  declare module '*.wav';
  declare module '*.ogg';
  declare module '*.aac';
  declare module '*.opus';
  declare module '*.flac';
  declare module '*.webm';
  declare module '*.m4a';
  declare module '*.mp4';
  declare module '*.mov';
  declare module '*.m3u';
  declare module '*.m3u8';
  declare module '*.wma';

  /* VIDEO */
  declare module '*.mp4';
  declare module '*.mov';
  declare module '*.webm';
  declare module '*.avi';
  declare module '*.wmv';
  declare module '*.mkv';
  declare module '*.flv';
  declare module '*.swf';
  declare module '*.tsv';
  declare module '*.mpeg';
  declare module '*.mpg';
  declare module '*.mpegts';
  declare module '*.m4v';

  /* OTHER */
  declare module '*.zip';
  declare module '*.doc';
  declare module '*.docx';
  declare module '*.xls';
  declare module '*.xlsx';
  declare module '*.ppt';
  declare module '*.pptx';
  declare module '*.rar';
  declare module '*.gz';
  declare module '*.iso';
  declare module '*.tar';
  declare module '*.txt';
  declare module '*.csv';
  declare module '*.md';
  declare module '*.yml';
  declare module '*.xml';
  declare module '*.json';
  declare module '*.ini';
  declare module '*.config';
  declare module '*.log';
  declare module '*.yaml';
  declare module '*.env';
  
  /* IMAGES */
  declare module '*.svg' {
    const ref: string;
    export default ref;
  }
  declare module '*.bmp' {
    const ref: string;
    export default ref;
  }
  declare module '*.gif' {
    const ref: string;
    export default ref;
  }
  declare module '*.jpg' {
    const ref: string;
    export default ref;
  }
  declare module '*.jpeg' {
    const ref: string;
    export default ref;
  }
  declare module '*.png' {
    const ref: string;
    export default ref;
  }
  declare module '*.pdf' {
    const ref: string;
    export default ref;
  }
  
  /* CUSTOM: ADD YOUR OWN HERE */

  declare module 'solid-js' {
    export * from 'solid-js';
  }
  declare module 'solid-js/web' {
    export * from 'solid-js/web';
  }
  declare module 'solid-js/store' {
    export * from 'solid-js/store';
  }
  declare module 'solid-js/jsx-runtime' {
    export * from 'solid-js/jsx-runtime';
  }
  declare module 'solid-js/jsx-dev-runtime' {
    export * from 'solid-js/jsx-dev-runtime';
  }
  declare module 'solid-js/router' {
    export * from 'solid-js/router';
  }
  declare module 'solid-js/server' {
    export * from 'solid-js/server';
  }
  declare module 'solid-js/dom' {
    export * from 'solid-js/dom';
  }
  declare module 'solid-js/html' {
    export * from 'solid-js/html';
  }
  declare module 'solid-js/compat' {
    export * from 'solid-js/compat';
  }
  declare module 'solid-js/devtools' {
    export * from 'solid-js/devtools';
  }
  declare module 'solid-js/webpack' {
    export * from 'solid-js/webpack';
  }
  declare module 'solid-js/prop-types' {
    export * from 'solid-js/prop-types';
  }
  declare module 'solid-js/rollup' {
    export * from 'solid-js/rollup';
  }
  declare module 'solid-js/rollup-plugin' {
    export * from 'solid-js/rollup-plugin';
  }
  declare module 'solid-js/rollup-plugin-solid' {
    export * from 'solid-js/rollup-plugin-solid';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx' {
    export * from 'solid-js/rollup-plugin-solid-jsx';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx-props' {
    export * from 'solid-js/rollup-plugin-solid-jsx-props';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx-style' {
    export * from 'solid-js/rollup-plugin-solid-jsx-style';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx-vite' {
    export * from 'solid-js/rollup-plugin-solid-jsx-vite';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx-vite-props' {
    export * from 'solid-js/rollup-plugin-solid-jsx-vite-props';
  }
  declare module 'solid-js/rollup-plugin-solid-jsx-vite-style' {
    export * from 'solid-js/rollup-plugin-solid-jsx-vite-style';
  }
  declare module 'solid-js/next' {
    export * from 'solid-js/next';
  }
  declare module 'solid-js/next/server' {
    export * from 'solid-js/next/server';
  }
  declare module 'solid-js/next/client' {
    export * from 'solid-js/next/client';
  }
  declare module 'solid-js/testing/server' {
    export * from 'solid-js/testing/server';
  }
  declare module 'solid-js/testing/client' {
    export * from 'solid-js/testing/client';
  }
  declare module 'solid-js/testing/with-solid-jsx' {
    export * from 'solid-js/testing/with-solid-jsx';
  }
  declare module 'solid-js/testing/with-solid-jsx-props' {
    export * from 'solid-js/testing/with-solid-jsx-props';
  }
  declare module 'solid-js/testing/with-solid-jsx-style' {
    export * from 'solid-js/testing/with-solid-jsx-style';
  }
  declare module 'solid-js/testing' {
    export * from 'solid-js/testing';
  }
  declare module 'solid-js/jsx' {
    export * from 'solid-js/jsx';
  }
  