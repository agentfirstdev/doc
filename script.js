((key) => {
  if (!window.reb2b) {
    window.reb2b = { loaded: true };
    var s = document.createElement('script');
    s.async = true;
    s.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${key}/${key}.js.gz`;

    document
      .getElementsByTagName('script')[0]
      .parentNode.insertBefore(s, document.getElementsByTagName('script')[0]);
  }
})('QOQRJH921962');
