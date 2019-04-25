// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => { 
  let conlist=[];
  const content = await db.collection(event.dbBook).limit(100).get();
  for (let i = 0; i < content.data[content.data.length - 1].unit; i++) {
    conlist[i] = content.data.filter(object => object.unit == (i + 1));
  }
  return conlist;
}