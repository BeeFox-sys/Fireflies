class Firefly{

  constructor(){
    this.pos = createVector(random(width),random(height));
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
    this.light = false;
    this.flashtime = 0;
    this.clock = floor(random(clockLength)/10)*10
    this.clocked = false;
  }

  flash(){
    this.light = true;
    for(var i = 0; i < fireflies.length; i++){
      if(dist(fireflies[i].pos.x,fireflies[i].pos.y,this.pos.x,this.pos.y)<=range&&!fireflies[i] != this&&!fireflies[i].clocked&&!fireflies[i].light){
        fireflies[i].nudge();
        this.clocked = true
      }
    }

  }

  nudge(){
    this.clock += 10;
    this.clocked = true;
  }

  update(){
    if(frameCount % 20 == 0){
      this.acc.add(random(-.5,.5),random(-.5,.5));
    }
    if(this.pos.x > width-10 || this.pos.x < 10){
      this.vel.set(-this.vel.x, this.vel.y);
    }
    if(this.pos.y > height-10 || this.pos.y < 10){
      this.vel.set(this.vel.x, -this.vel.y);
    }
    if(this.clock > clockLength){
      this.flash();
      this.clock = 0
    }
    this.vel.limit(1,1)
    this.clock += 1;
    this.vel.add(this.acc);
    this.acc.set(0,0);
    this.pos.add(this.vel);
    this.clocked=false;
  }

  draw(){
    fill(50);
    if(this.light){
      fill(200,200,0);
      this.flashtime += 1;
    }
    if(this.flashtime >= 10){
      this.light = false;
      this.flashtime = 0;
    }
    stroke(25);
    strokeWeight(3);
    ellipse(this.pos.x,this.pos.y,10)
    if(drawRange){
    noFill();
    ellipse(this.pos.x,this.pos.y,range)
  }
  }

}
