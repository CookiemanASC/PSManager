var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    publicPath: __dirname
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      SideNav: 'app/components/SideNav.jsx',
      ImportStudents:  'app/components/ImportStudents.jsx',
      ExportStudents:  'app/components/ExportStudents.jsx',
      ViewStudents:  'app/components/ViewStudents.jsx',      
      ExportStudentProgress:  'app/components/ExportStudentProgress.jsx', 
      CreateWelcome:  'app/components/CreateWelcome.jsx',
      TopBarLogin:  'app/components/TopBarLogin.jsx',
      TeacherPanel: 'app/components/TeacherPanel.jsx',     
      StudentPanel: 'app/components/StudentPanel.jsx',
      StudentSideNav: 'app/components/StudentSideNav.jsx',
      PSPreviousVersions: 'app/components/PSPreviousVersions.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/app/images/[name].[ext]"
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
