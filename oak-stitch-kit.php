<?php
/*
 * Plugin Name: Oak & Stitch Kit    
 * Description: A kit for the Oak & Stitch theme.
 * Version: 0.0.1
 * Author: Cesar Correchel
 *
 */

defined( 'ABSPATH' ) || exit;

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

define( 'OAK_STITCH_KIT_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'OAK_STITCH_KIT_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'OAK_STITCH_KIT_VER', '0.0.1' );
define( 'OAK_STITCH_KIT_BASENAME', plugin_basename( __FILE__ ) );

if ( ! class_exists( OakStitchKit\Oak_Stitch_Kit::class ) ) {
    error_log( 'Oak_Stitch_Kit class not found!' );
}

add_action('plugins_loaded', [OakStitchKit\Oak_Stitch_Kit::class, 'init'] );