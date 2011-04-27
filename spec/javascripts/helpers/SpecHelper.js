beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong && player.isPlaying;
    },
    toBeDraggabled: function () {
      this.actual.hasClass("ui-dra:ggable");
    }
  });
});

var context = describe;

var DATA = [];

safari = {
  self : {
    addEventListener: function (type, fn, bol) { return [type, fn, bol]; },
    tab: {
      dispatchMessage: function (name, data) {
      }
    }
  },
  application: {
    addEventListener: function (type, fn, bol){ return [type, fn, bol]; },
    activeBrowserWindow: {
      activeTab: {
        page: {
          dispatchMessage: function(name, data){ return [name, data]; }
        },
        url: "http://google.com"
      }
    }
  },
  extension:{
    settings:{
              token: "avbc1231"
             }
  }
};
