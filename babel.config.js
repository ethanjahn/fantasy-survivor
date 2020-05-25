module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src/"],
        alias: {
          "_assets": "./src/assets",
          "_components": "./src/components",
          "_atoms": "./src/components/atoms",
          "_molecules": "./src/components/molecules",
          "_organisms": "./src/components/organisms",
          "_navigations": "./src/navigations",
          "_scenes": "./src/scenes",
          "_services": "./src/services",
          "_styles": "./src/styles",
          "_utils": "./src/utils"
        }
      }
      
    ]
  ];

  return {
    presets,
    plugins
  };
};

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "_assets": "./src/assets",
        "_components": "./src/components",
        "_atoms": "./src/components/atoms",
        "_molecules": "./src/components/molecules",
        "_organisms": "./src/components/organisms",
        "_navigations": "./src/navigations",
        "_scenes": "./src/scenes",
        "_services": "./src/services",
        "_styles": "./src/styles",
        "_utils": "./src/utils"
      }
    }
    
  ]

];