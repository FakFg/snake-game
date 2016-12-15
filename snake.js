// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/AaGK-fj-BAM

function Snake() {
  this.x = width/2;
  this.y = height/2;
  this.xdestiny = 0;
  this.ydestiny = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.goto = function() {
      if (this.xdestiny < this.x) {
        this.dir(-1, 0);
      } else if (this.xdestiny > this.x) {
        this.dir(1, 0);
      } else if (this.ydestiny < this.y) {
        this.dir(0, -1);
      } else if (this.ydestiny > this.y) {
        this.dir(0, 1);
      } else {
        this.dir(0, 0);
      }
      var d = dist(this.x, this.y, this.xdestiny, this.ydestiny);
      if (d < 1) {
        if (((this.y / scl) % 2) == 0) {
          console.log('par');
          if (this.x == (height - scl)) {
            this.ydestiny = this.y + scl;
          } else {
            this.xdestiny = (height - scl);
          }
        } else if (((this.y / scl) % 2) == 1) {
          console.log('impar');
          if (this.x == (0 + scl)) {
            this.ydestiny = this.y + scl;
          } else {
            this.xdestiny = (0 + scl);
          }
        }
      }
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.x = width/2;
        this.y = height/2;
        this.xdestiny = 0;
        this.ydestiny = 0;
        this.dir(0, 0);
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    fill(150);
    rect(this.x, this.y, scl, scl);

  }
}
