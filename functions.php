<?php
/**
 * Custom functionality required by your child theme can go here. Use this
 * to override any defaults provided by the Spine parent theme through
 * the provided actions and filters.
 */

// Uncomment this line and replace the spine_child prefix with one of your own.
//add_action( 'wp_enqueue_scripts', 'spine_child_enqueue_scripts', 11 );
/**
 * Hooking into wp_enqueue_scripts allows you to add custom Javascript to every front
 * end page view. Using available APIs in WordPress, you can restrict this to
 * limited page views as well.
 *
 * As with the action above, change the prefix of this function from spine_child
 */
add_action('wp_enqueue_scripts', 'spine_child_enqueue_scripts');
function spine_child_enqueue_scripts() {
	// This enqueues a script, located in this project's /js/ directory, and tells WordPress
	// that jQuery is also required. The final parameter - true - loads the script in the footer.
	wp_enqueue_script( 'iscroll-js', get_stylesheet_directory_uri() . '/js/iscroll.js', array( 'jquery' ), spine_get_script_version(), true );
	wp_enqueue_script( 'jquery-appear', get_stylesheet_directory_uri() . '/js/jquery.appear.js', array( 'jquery' ), spine_get_script_version(), true );
	wp_enqueue_script( 'jquery-inview', get_stylesheet_directory_uri() . '/js/jquery.inview.min.js', array( 'jquery' ), spine_get_script_version(), true );
    wp_enqueue_script( 'jquery-move', get_stylesheet_directory_uri() . '/js/jquery.event.move.js', array( 'jquery' ), spine_get_script_version(), true );
    wp_enqueue_script( 'jquery-swipe', get_stylesheet_directory_uri() . '/js/jquery.event.swipe.js', array( 'jquery' ), spine_get_script_version(), true );
    wp_enqueue_script( 'init-js', get_stylesheet_directory_uri() . '/js/init.js', array( 'jquery' ), spine_get_script_version(), true );
}

add_action( 'gform_enqueue_scripts', 'gform_dequeue_script_list' );
function gform_dequeue_script_list() { 
    global $wp_styles; 
    if( isset($wp_styles->registered['gforms_reset_css']) ) {
        unset( $wp_styles->registered['gforms_reset_css'] );
    } 
    if( isset($wp_styles->registered['gforms_datepicker_css']) ) {
        unset( $wp_styles->registered['gforms_datepicker_css'] );
    } 
    if( isset($wp_styles->registered['gforms_formsmain_css']) ) {
        unset( $wp_styles->registered['gforms_formsmain_css'] );
    } 
    if( isset($wp_styles->registered['gforms_ready_class_css']) ) {
        unset( $wp_styles->registered['gforms_ready_class_css'] );
    } 
    if( isset($wp_styles->registered['gforms_browsers_css']) ) {
        unset( $wp_styles->registered['gforms_browsers_css'] );
    } 
}

/*add_filter('wp_kses_allowed_html', 'allow_factor_attribute', 1);
function allow_factor_attributes( $tags ){
    $tags['div']['data-factor']= true;
    return $tags;   
}*/