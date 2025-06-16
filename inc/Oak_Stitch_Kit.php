<?php

namespace OakStitchKit;

defined( 'ABSPATH' ) || exit;

final class Oak_Stitch_Kit{

    private static ?self $instance = null;

    public static function init():void{
        if(null === self::$instance){
            self::$instance = new self();
            self::$instance->setup();
        }
    }

    private function __construct() {
        
    }

    private function setup():void{
        (new Assets) -> hook();
    }

}