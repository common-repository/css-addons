=== Custom CSS Addons ===
Contributors: bastho, agencenous
Tags: css, style, theme, customization, custom css, addons, customizer, reset, stylesheet, template, framework, bootstrap, grid
Requires at least: 4.9  
Tested up to: 6.2
Donate link: https://apps.avecnous.eu/produit/addons-css-personnalises/?mtm_campaign=wp-plugin&mtm_kwd=css-addons&mtm_medium=wp-repo&mtm_source=donate
Stable tag: 1.9.1
License: GPLv2
Author URI: https://apps.avecnous.eu/?mtm_campaign=wp-plugin&mtm_kwd=css-addons&mtm_medium=wp-repo&mtm_source=author
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Description: Lets administrator add CSS addons to any theme

== Description ==

This plugin is for you if :

* You know CSS, but don't have legitimacy to apply it
* You manage a multisite network
* You work with webmasters which want to customize WP but think that "CSS" means "Custom Super Style"
* You just want to use predefined styles on your blog

This plugin works as well for standard single site or multisite network.

Checkout full examples and documentation on [css-addons.avecnous.eu](http://css-addons.avecnous.eu/)

The power user can create a set of CSS rules readable for humans with :

* Slug
* Name
* Theme
* Descrition
* CSS code

It adds the list of addons in the customizer view (under appearance) and webmaster just have to check the ones they want with live preview.
That's it.
For coder webmasters, a free field let them put there own CSS in a code-highlighted editor.

Predefined librairies are also available:

* Bootstrap 3/4
* GithubCSS
* Knacss
* MarkdownCSS
* Normalize
* Skeleton
* YUI 3


== Installation ==

1. Upload `css-addons` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress admin


== Screenshots ==

1. Settings page
2. Customizer view
3. New editor (since 1.5)

== Changelog ==

= 1.9.1 =
* Fix crash in WP-CLI context

= 1.9 =
* Do not change column width anymore in customizer
* Add help before editor
* Let i18n be managed by default source

= 1.8 =
* Add version to static file URL
* Fix static URL in subdirectory installs
* Add bootstap 4 lib

= 1.7 =
* Integration in new "Custom CSS" section in customizer

= 1.6 =

Killer features

* Change name to "CSS Custom addons"
* Restrict addons to a theme
* Larger editor
* Better manager UI
* Add libs:
    * GithubCSS
    * Knacss
    * MarkdownCSS
    * Normalize
    * Skeleton
    * YUI 3

Fixed bugs

* Required double saving for custom CSS
* Preview not updated in manager
* Force correction for addon's slug

= 1.5.1 =
* Bug fix in thickbox
* Added .pot file

= 1.5.0 =
* Add CSS highligthing in editor
* Add customizer preview support

= 1.4.0 =
* Remove favicon feature since it's natively supported by WP 4.3+
* Update french localization

= 1.3.3 =
* WP 4.3 compliant

= 1.3.2 =
* Fix: Remove some PHP warnings

= 1.3.1 =
* Fix: Later load of script

= 1.3.0 =
* Add: Librairies, started with bootsrap

= 1.2.1 =
* Fix: Correct URL when domain mapping is active

= 1.2.0 =
* add: Custom favicon support
* fix: Improve tests before loading or not admin scripts

= 1.1.0 =
* add: alphabetical sort of addons
* add: delete button in addons list
* fix: remove slashes when saving addons
* fix: stylesheet was not loaded if at least one of addons or custom CSS was empty

= 1.0.0 =
* Initial release

== Upgrade notice ==

= 1.6 =
CSS addons will be reintialized, due to conflict in WordpRess settings name

= 1.4.0 =
The favicon feature is removed, WordPress now has it's own.

== Languages ==

* en	: 100%
* fr_FR : 100%
