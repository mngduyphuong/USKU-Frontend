# USKU Analytics
USKU delivery service Australia || Vendor and client analytics platform


# Install dependencies

#### installing npm dependencies
*cmdline: cd to /frontend*

```$ npm install```

**Don't be tempted to run ```npm audit``` or ```npm update```. This won't work and you'll spend ages figuring out why nothing works**

*You need to update your babel for some reason*

```$ npm install @babel/preset-env@7.9.0```


# To run frontend:
### cmdline: nav to frontend
*run as you go dev mode*

```$ npm run dev```

*build an app that is stored and ready to be opened without loading client and server everytime*

```$ npm run build```

*open most recent built version*

```$ npm run start```


# Code Formatter

eslint & prettier configured.

One flaw of auto save is it undo spliting a long line into multi lines (eslint & prettier conflict).
Quick fix with ``ctrl + . &`` add a ``prettier-ignore`` comment before any exception. Works with VSCode & Webstorm.


# Recommended extensions if using VSCode
*Install by coping the cmd or find them in Extensions tab*

### For auto code formatting whenever save (Ctrl + s) to work:

```code --install-extension esbenp.prettier-vscode```
```code --install-extension dbaeumer.vscode-eslint```

### For better displaying your code so easier working with them:

```code --install-extension oderwat.indent-rainbow```
```code --install-extension CoenraadS.bracket-pair-colorizer-2```
```code --install-extension aaron-bond.better-comments```
```code --install-extension eamodio.gitlens```

### For working with HTML/JSX, Vue & Node in general:

```code --install-extension christian-kohler.npm-intellisense```
```code --install-extension formulahendry.auto-rename-tag```
```code --install-extension formulahendry.auto-close-tag```
```code --install-extension octref.vetur```
```code --install-extension jcbuisson.vue```


# Resources
https://vuejs.org/ <br/>
https://vuetifyjs.com/en/ <br/>
