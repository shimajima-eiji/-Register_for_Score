// 大体はサンプルコードをそのままにちょっと手を加えている。
// unitaroJSでないと使えない（と思われる）

/* TODO
絵を書き終わるまでのシーンと、
書き終わった事をシーンに伝えるボタン？的なもの

GameScene.updateにライフゲームロジックを埋め込む
*/

var GameScene={
  block_w: 16,
  block_h: 25,
  block:[],
  mx:0,
  my:0,
  edit: 1,
  mode: 0,
  init:function(){
    for (var y=0;y<this.block_h;y++){
      for (var x=0;x<this.block_w;x++){
        var i=x+y*this.block_w;
        this.block[i]=0;
      }
    }
  },
  update:function(){
    if(this.mode == 0) {
      this.drawBlock();
      Canvas.textout(50,20,"Canvas sample:"+this.mx+":"+this.my,"yellow",100);
    } else {
      // TODO: 進行速度を制御
    }
  },
  drawBlock: function(){
    var w=~~(app.WIDTH/this.block_w);
    var h=~~(app.HEIGHT/this.block_h);
    for (var y=0;y<this.block_h;y++){
      for (var x=0;x<this.block_w;x++){
        var color=this.block[x+y*this.block_w];
        color = color==1 ? "white":"#000";
        Canvas.box(x*w,y*h,w,h,color);
      }
    }
  },
  onclick:function(x,y){
    var w=~~(app.WIDTH/this.block_w);
    var h=~~(app.HEIGHT/this.block_h);
    this.mx=x;
    this.my=y;
    var x=~~(x/w);
    var y=~~(y/h);
    if (x<0){
      x=0;
    }
    if (y<0){
      y=0;
    }
    if (x>=this.block_w){
      x=this.block_w-1;
    }
    if (y>=this.block_h){
      y=this.block_h-1;
    }
    var i=x+y*this.block_w;
    //反転
    this.edit = 1-this.block[i];
    this.block[i]=this.edit;
  },
  onmove:function(x,y,is_click){
    //押している時しか処理しない
    if (!is_click){
      return;
    }
    var w=~~(app.WIDTH/this.block_w);
    var h=~~(app.HEIGHT/this.block_h);
    this.mx=x;
    this.my=y;
    var x=~~(x/w);
    var y=~~(y/h);
    if (x<0){
      x=0;
    }
    if (y<0){
      y=0;
    }
    if (x>=this.block_w){
      x=this.block_w-1;
    }
    if (y>=this.block_h){
      y=this.block_h-1;
    }
    var i=x+y*this.block_w;
    //反転
    this.block[i]=1-this.block[i];

    //必ず1を入れる
    this.block[i]=this.edit;
  }
};

var APP = {
  WIDTH: 320,
  HEIGHT: 500,
  init: function(){
    new Scene(GameScene);
  },
  update: function(age){
  },
  onclick: function(x,y){
    //クリックされた時に呼ばれる関数
  },
  onclickend: function(){
    //クリックを離した時に呼ばれる関数
  },
  onmove: function(x,y,is_click){
    //マウス/タッチ移動中に呼ばれる関数
    //マウスの場合のみ、クリックしなくても呼ばれる
  }
};
