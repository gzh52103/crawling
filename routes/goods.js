var express = require("express");
var router = express.Router();
const goods = require("../sql/goods");

router.get("/", function (req, res, next) {
  goods.find({}, (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    }
    res.send({
      data: data,
    });
  });
});

// 增加
router.post("/addAction", function (req, res, next) {
    let obj = req.body.params;
    goods.insertMany(obj, (err, data) => {
      if (err) {
        console.log("没有添加成功");
      }
      res.send({
        data: data,
      });
    });
  });

// 删除
router.get("/delete", function (req, res, next) {
  goods.deleteOne(
    {
      _id: req.query._id,
    },
    (err, data) => {
      if (err) {
        console.log("删除失败");
      }
      console.log(data);
      res.send({
        data: data,
      });
    }
  );
});

// 改
router.post('/updateAction',function(req,res,next){
    console.log('来到修改里面了');
    let obj = req.body.params;
    goods.findByIdAndUpdate(obj._id,obj,(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send({
            data:data
        })
    })
})


// 搜索
 router.get("/search", (req, res, next) => {
    console.log("/search 用户搜索路由 搜索数据")
    const obj = req.query.params;
    // obj {search:}
    // 正则的包装对象
    let reg = new RegExp(obj.search);
    console.log(reg);
    goods.find({
      name: reg
    }, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)

        res.send({
            data: data
        })
    })
});


module.exports = router;