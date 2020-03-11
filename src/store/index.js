import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '疫情测试', 
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [{
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "1、疫情期间如何用餐",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 1,
			"answer_name": "不使用一次性餐具，在店里吃",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"answer_name": "打包带走，偷偷吃不让同事看到",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 3,
			"answer_name": "大家一起扎堆吃，交流感情",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"answer_name": "不吃了，减肥。",
			"is_standard_answer": 1
		}]
	}, {
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "2、室内如何保持通风",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 5,
			"answer_name": "不通风，病毒飞不进来",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 6,
			"answer_name": "一般开着窗子，一直通风",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"answer_name": "每天三次，每次30分钟",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"answer_name": "每天六次，每次15分钟",
			"is_standard_answer": 0
		}]
	}, {
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "3.参加集体活动注意什么",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 9,
			"answer_name": "大家戴好口罩出门准没事",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"answer_name": "选择KTV，影院比较密闭的地方",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"answer_name": "去点人多热闹的，疫情憋太久了",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"answer_name": "一个人挺好，不参加",
			"is_standard_answer": 0
		}]
	}, {
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "4.疫情期间如何开会",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 13,
			"answer_name": "少开会，少集中，可选择视频会议",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"answer_name": "不开会了，微信上面说就好",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"answer_name": "给我发邮件就好",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"answer_name": "不开会对公司也没啥事",
			"is_standard_answer": 0
		}]
	}, {
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "5.什么情况不用洗手",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 17,
			"answer_name": "饭前便后",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 18,
			"answer_name": "刚洗完手",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 19,
			"answer_name": "回家或回公司",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"answer_name": "咳嗽打喷嚏",
			"is_standard_answer": 0
		}]
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})