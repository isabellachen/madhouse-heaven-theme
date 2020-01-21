<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package madhouse-heaven
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'madhouse-heaven'); ?></a>

    <header id="masthead" class="site_header">
      <div class="site-branding">
        <?php
        the_custom_logo();
        ?>
      </div><!-- .site-branding -->

      <nav id="site-navigation" class="site_header-navigation">
        <div class="primary-menu-wrapper">
          <button class="primary-menu-button">DESTINATIONS</button>
          <button class="primary-menu-button--mobile"><img src="<?php echo get_template_directory_uri(); ?>/assets/earth.svg"></button>
          <?php
          wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id'        => 'primary-menu',
            'container_class' => 'primary-menu-container',
            'menu_class' => 'primary-menu',
          ));
          ?>
        </div>
        <div class="secondary-menu-wrapper">
          <div class="secondary-menu-title">
            <button class="hamburger hamburger--squeeze" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <?php
          wp_nav_menu(array(
            'theme_location' => 'secondary',
            'menu_id'        => 'secondary-menu',
            'container_class' => 'secondary-menu-container',
            'menu_class' => 'secondary-menu'
          ));
          ?>
        </div>
        <?php
        ?>
      </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

    <div id="content" class="site-content">