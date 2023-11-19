<?php
/*
Plugin Name: Sample Size Calculator by www.calculator.io
Plugin URI: https://www.calculator.io/sample-size-calculator/
Description: This sample size calculator enables you to calculate the minimum sample size and the margin of error. Learn about sample size, the margin of error, & confidence interval.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_sample_size_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Sample Size Calculator by Calculator.iO";

function display_ci_sample_size_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Sample Size Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_sample_size_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_sample_size_calculator', 'display_ci_sample_size_calculator' );