module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://uochi-backend.camilymayumi.repl.co',
        ws: true,
        changeOrigin: true
      },
    }    
  }
};