
cc.Class({
    
    extends: cc.Component,

    properties: {
        pickRadios:{
            default: 60,
            tooltip:'星星和主角之间距离小于此数值，则收集完成', 
        },
        starPrefab: cc.Prefab,
    },


    onCollisionEnter: function (other, self) {
        console.log("other.name = ", other.node.name, other.node.group, other.node.groupIndex);
        if (other.node.groupIndex === 2) { // 与道具相撞
            this.onPicked();
            this.node.destroy();

        }
    },
  
    getPlayerDistance: function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.player.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(playerPos).mag();
      //  console.log(dist);
        return dist;
    },

    onPicked: function() {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        // 然后销毁当前星星节点
        //this.node.destroy();
    },

   

   
    
});
