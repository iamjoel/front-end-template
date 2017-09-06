import Mock from 'mockjs'
import {urls} from '@/setting'
var currUrl = urls.song

var Random = Mock.Random
Mock.mock(new RegExp(currUrl.list), ({ url, body }) => {
  var randomNum = (function () {
    return Math.floor(Math.random() * 10)
  })()
  var data = []
  for (var i = 0; i < randomNum; i++) {
    data.push(makeItem())
  }
  return {
    msgbody: {
      data,
      total: randomNum * 10 + 10,
    },
    'errcode': 0,
    'errmsg': ''
  }
})

Mock.mock(new RegExp(currUrl.query), ({ url, body }) => {
  return {
    msgbody: {
      data: makeItem(),
    },
    'errcode': 0,
    'errmsg': ''
  }
})

Mock.mock(new RegExp(currUrl.del), ({ url, body }) => {
   return {
    "errcode": 0
  }
})

Mock.mock(new RegExp(currUrl.add), ({ url, body }) => {
   return {
    "errcode": 0
  }
})

Mock.mock(new RegExp(currUrl.edit), ({ url, body }) => {
   return {
    "errcode": 0
  }
})

function makeItem() {
  return {
    id: Math.floor(Math.random() * 10000),
    name: Random.cword(5),
    singer: Random.cname(),
  }
}

