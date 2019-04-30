// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  env: 'tsdx-e4b587'
})

// 云函数入口函数
exports.main = async (event, context) => {
  let collectArr = [];
  let collectObj = {};
  let collect = [];
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  const res = await db.collection('userCollectList').where({
    _openid: openid
  }).limit(100).get();

  for (let i = 0; i < res.data.length; i ++) {
    collectArr = collectArr.concat(res.data[i].collect);
  }
  for (let i = 0, l = collectArr.length; i < l; i++) {
    let item = collectArr[i];
    collectObj[item] = (collectObj[item] + 1) || 1;
  }
  for (let i in collectObj) {
    let o = {};
    o['count'] = collectObj[i];
    o['name'] = i;
    collect.push(o);
  }
  return collect;
}