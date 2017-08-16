# Password Strength Estimator
**A Dynamic Action Plugin for Oracle Application Express**

When prompting your users to change their password, give them immediate feedback on how strong it (probably) is.

![](https://raw.githubusercontent.com/jeffreykemp/jk64-plugin-passwordstrength/master/src/preview.png)

Based on the [Low-Budget Password Strength Estimator](https://github.com/dropbox/zxcvbn)

## DEMO ##

[https://apex.oracle.com/pls/apex/f?p=ZXCVBN&c=JK64](https://apex.oracle.com/pls/apex/f?p=ZXCVBN&c=JK64)

## PRE-REQUISITES ##

* [Oracle Application Express 5.0.2](https://apex.oracle.com)

## INSTALLATION ##

1. Download the **[latest release](https://github.com/jeffreykemp/jk64-plugin-passwordstrength/releases/latest)**
2. Import plugin **dynamic_action_plugin_com_zxcvbn_password_strength.sql** to your Apex app
3. On the page with the password input item, add a Dynamic Action:
      * **Event** = Page Load
      * **True Action** = Password Strength Estimator [Plug-In]
      * Set **Affected Elements** (e.g. item name(s), or a jQuery selector)

## LINKS ##

* **[Home Page](http://jeffreykemp.github.io/jk64-plugin-passwordstrength/)**

* For more info refer to the **[WIKI](https://github.com/jeffreykemp/jk64-plugin-passwordstrength/wiki)**
