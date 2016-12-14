function Bot() {
  this.cols = 0;
  this.rows = 0;
  this.s;
  
  function Bot(cols, rows, s) {
    this.cols = cols;
    this.rows = rows;
    this.s = s;
  }
  
  function setup() {
    while(this.s.x > 0) {
      this.s.dir(-1, 0);
    }
  }
}
