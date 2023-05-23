import plugin from '../plugin.json';
const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');

class acodeMint {

  async init() {
    try{
      const mintDark = new ThemeBuilder('AcodeMint','dark');
      mintDark.primaryColor = '#152f1e';
      mintDark.darkenedPrimaryColor = '#152f1e';
      mintDark.primaryTextColor = '#ffffff';
      mintDark.secondaryColor = '#0d1a12';
      mintDark.secondaryTextColor = '#8b949e';
      mintDark.activeColor = '#00dc87';
      mintDark.activeIconColor = '#00cc7a';
      mintDark.linkTextColor = '#00cc7a';
      mintDark.errorTextColor = '#f97583';
      mintDark.borderColor = '#1a3523';
      mintDark.borderRadius = '6px';
      mintDark.popupBorderRadius = '6px';
      mintDark.popupIconColor = '#ffffff';
      mintDark.popupBackgroundColor = '#152f1e';
      mintDark.popupTextColor = '#ffffff';
      mintDark.popupActiveColor = '#00cc7a';
      mintDark.popupBorderColor = '#1a3523';
      mintDark.boxShadowColor = 'rgba(0, 0, 0, 0.2)';
      mintDark.scrollbarColor = '#1a3523';
      mintDark.buttonActiveColor = '#00cc7a';
      mintDark.buttonBackgroundColor = '#00cc7a';
      mintDark.buttonTextColor = '#ffffff';
      themes.add(mintDark);
    }catch(err){
      acode.alert("Error",err);
    }
  }

    async destroy() {
        
    }
}

if (window.acode) {
    const acodePlugin = new acodeMint();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}