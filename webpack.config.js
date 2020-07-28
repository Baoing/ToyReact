module.exports = {
  module:{
    rules:[
      {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [[
                "@babel/plugin-transform-react-jsx",
                {pragma:"ToyReact.createElement"}
              ]]
            }
        },
      } 
    ]
  },
  mode:"development",
  entry: {
    main: './main.js'
  },
  optimization:{
    minimize: false
  }
}