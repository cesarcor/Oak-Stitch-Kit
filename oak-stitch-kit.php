<?php
/*
 * Plugin Name: Oak & Stitch Kit    
 * Description: A kit for the Oak & Stitch theme.
 * Version: 0.0.1
 * Author: Cesar Correchel
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

wp_register_script(
    'osk-blocks',
    plugins_url( 'dist/js/blocks.js', __FILE__ ),
    [ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-block-editor', 'wp-data', 'wp-hooks', 'wp-server-side-render' ],
    filemtime( plugin_dir_path( __FILE__ ) . 'dist/js/blocks.js' ),
    true
);

wp_register_style(
    'osk-editor',
    plugins_url( 'dist/css/editor.css', __FILE__ ),
    [],
    filemtime( plugin_dir_path( __FILE__ ) . 'dist/css/editor.css' )
);
