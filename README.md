# Orange landing page
an implementation of a basic [bootstrap-powered](https://getbootstrap.com/) landing page without using bootstrap, the main goal behind building this basic page is to pragmatically analyze the [BEM methodology](http://getbem.com/introduction/) and compare it to bootstrap's approach for CSS architecture, my final conclusions were quite similar to those found in this [article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

https://orange-landing.surge.sh/

## Installation and building

[gulp](https://gulpjs.com/) is used to automate the build process, run the following commands to install gulp CLI and build the project:
```bash
npm install -g gulp-cli
git clone https://github.com/muubar/orange-landing.git
npm install
gulp build
```
you should find a new directory named `dist` in the project's directory.
