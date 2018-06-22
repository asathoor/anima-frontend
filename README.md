Anima-petj WordPress Theme
===

## A theme for experiments

This theme is prepared for frontend developers. It is a theme for experiments. You can use jQuery out of the box in this theme.


## Install

* Download the zip from this repo
* Install the file via the WordPress Dashboard

Alternatively you can fork the repo and clone to your local WordPress folders.


## CSS layout

In layouts you find two files:

* content-sidebar.css
* sidebar-content.css

You can copy-paste the content to style.css. In this theme I have made a copy of sidebar-content.css and placed it at the end of the main WordPress theme stylesheet: style.css. Feel free to remove it and use something more handy, such as Flexbox or other grid systems.

Either add the code to style.css or add it to the "Cutom CSS" feature on the Dashboard Customize panel.

The content of the two files will give you an idea of the classes and id's you have to style in order to control your layout:

~~~~
.content-area {
	float: left;
	margin: 0 -25% 0 0;
	width: 100%;
}
.site-main {
	margin: 0 25% 0 0;
}
.site-content .widget-area {
	float: right;
	overflow: hidden;
	width: 25%;
}
.site-footer {
	clear: both;
	width: 100%;
}

.no-sidebar .content-area {
	float: none;
	margin-left: auto;
	margin-right: auto;
}
.no-sidebar .site-main {
	margin-right: 0;
}
~~~~

Or you could use something like Flexbox. Here you could do something along these lines for a 920px wide design:

~~~~
/* wrapper */
#page {
	width: 920px;
	margin: auto;
}

/* LAYOUT */

/* content container */
#content {
	display: flex;
}

/* content */
#primary {
  width: 500px;
	overflow: hidden;
}

/* sidebar */
#secondary .widget {
  width: 400px;
	overflow: hidden;
	margin-left: 20px;
}
~~~~

This is enough to give you the basic idea of the drill. Of course the next step would be to add a few breakpoints in order to create a responsive layout.



## JavaScript

You can add your own script and snibbets in the file: `js/myScript.js`.


----

## Original Introduction to _S

[![Build Status](https://travis-ci.org/Automattic/_s.svg?branch=master)](https://travis-ci.org/Automattic/_s)

Baseed on _s
===

Hi. I'm a starter theme called `_s`, or `underscores`, if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A custom header implementation in `inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
Note: `.no-sidebar` styles are not automatically loaded.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

If you want to keep it simple, head over to https://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.

If you want to set things up manually, download `_s` from GitHub. The first thing you want to do is copy the `_s` directory and change the name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain.
2. Search for `_s_` to capture all the function names.
3. Search for `Text Domain: _s` in `style.css`.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_s-` to capture prefixed handles.

OR

1. Search for: `'_s'` and replace with: `'megatherium-is-awesome'`
2. Search for: `_s_` and replace with: `megatherium_is_awesome_`
3. Search for: `Text Domain: _s` and replace with: `Text Domain: megatherium-is-awesome` in `style.css`.
4. Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Megatherium_is_Awesome</code>
5. Search for: `_s-` and replace with: `megatherium-is-awesome-`

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
