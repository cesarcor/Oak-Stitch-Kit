<?php
namespace OakStitchKit;

defined( 'ABSPATH' ) || exit;

class Assets {
	public function hook(): void {
        add_action( 'init', [ $this, 'register_blocks' ] );
	}

	public function register_blocks(): void {
		$blocks_dir = OAK_STITCH_KIT_DIR . 'build/blocks/';

		foreach ( glob( $blocks_dir . '*', GLOB_ONLYDIR ) as $block_path ) {
			$block_json = $block_path . '/block.json';

			if ( file_exists( $block_json ) ) {
				register_block_type_from_metadata( $block_path );
			}
		}
	}


}