import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		build: {
			outDir: 'dist',
			emptyOutDir: true,
			sourcemap: isDev,
			minify: !isDev,
			rollupOptions: {
				input: path.resolve(__dirname, 'src/blocks/index.js'),
				external: [
					'@wordpress/blocks',
					'@wordpress/block-editor',
					'@wordpress/components',
					'@wordpress/element',
					'@wordpress/i18n',
					'@wordpress/data',
					'@wordpress/hooks',
					'@wordpress/server-side-render',
				],
				output: {
					entryFileNames: 'js/[name].js',
					chunkFileNames: 'js/[name].js',
					assetFileNames: ({ name }) => {
						if (name && name.endsWith('.css')) {
							return 'css/[name].[ext]';
						}
						return 'assets/[name].[ext]';
					},
					globals: {
						'@wordpress/blocks': 'wp.blocks',
						'@wordpress/block-editor': 'wp.blockEditor',
						'@wordpress/components': 'wp.components',
						'@wordpress/element': 'wp.element',
						'@wordpress/i18n': 'wp.i18n',
						'@wordpress/data': 'wp.data',
						'@wordpress/hooks': 'wp.hooks',
						'@wordpress/server-side-render': 'wp.serverSideRender',
					},
				},
			},
		},
	};
});
