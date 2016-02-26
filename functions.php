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
function spine_child_enqueue_scripts() {
	// This enqueues a script, located in this project's /js/ directory, and tells WordPress
	// that jQuery is also required. The final parameter - true - loads the script in the footer.
	wp_enqueue_script( 'iscroll-js', get_stylesheet_directory_uri() . '/js/iscroll.js', array( 'jquery' ), spine_get_script_version(), true );
	wp_enqueue_script( 'jquery-appear', get_stylesheet_directory_uri() . '/js/jquery.appear.js', array( 'jquery' ), spine_get_script_version(), true );
	wp_enqueue_script( 'jquery-inview', get_stylesheet_directory_uri() . '/js/jquery.inview.min.js', array( 'jquery' ), spine_get_script_version(), true );
	//wp_enqueue_script( 'progress-js', get_stylesheet_directory_uri() . '/js/progressbar.js', array( 'jquery' ), spine_get_script_version(), true );
    wp_enqueue_script( 'init-js', get_stylesheet_directory_uri() . '/js/init.js', array( 'jquery' ), spine_get_script_version(), true );
}
function spine_child_enqueue_styles() {
    /*wp_enqueue_style('fonts-css', get_stylesheet_directory_uri().'/css/fonts.css',array(), spine_get_script_version());
    wp_enqueue_style('buttons-css', get_stylesheet_directory_uri().'/css/buttons.css',array(), spine_get_script_version());
    wp_enqueue_style('forms-css', get_stylesheet_directory_uri().'/css/forms.css',array(), spine_get_script_version());
    wp_enqueue_style('animate-css', get_stylesheet_directory_uri().'/css/animate.css',array(), spine_get_script_version());
    wp_enqueue_style('main-modified-css', get_stylesheet_directory_uri().'/css/mainModified.css',array(), spine_get_script_version());
    wp_enqueue_style('styles-css', get_stylesheet_directory_uri().'/css/styles.css',array(), spine_get_script_version());*/
}
add_action('wp_enqueue_scripts', 'spine_child_enqueue_scripts');
add_action('wp_enqueue_scripts', 'spine_child_enqueue_styles');