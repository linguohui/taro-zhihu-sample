<template>
  <view>
        <view class='search flex-wrp'>
          <view class='search-left flex-item'>
            <view class='flex-wrp'>
              <view class='flex1'><image src='../../asset/images/search.png'></image></view>
              <view class='flex6'><input type='text' placeholder='搜索话题, 问题或人' placeholderClass='search-placeholder' /></view>
            </view>
          </view>
          <view class='search-right flex-item'>
            <image @tap='updateList' src='../../asset/images/lighting.png'></image>
          </view>
        </view>
        <scroll-view class='container'
          scrollY
          scroll-with-animation
          scrollTop='0'
          lower-threshold='10'
          upper-threshold='10'
          @scroll-to-upper='updateList'
          @scroll-to-lower='appendNextPageList'
        >
        <view class='txcenter' v-if="loading">加载中</view>
        <feed
          v-else
          v-for='item in list'
          :key="item.item"
          :feed-source-img='item.feed_source_img'
          :feed-source-name='item.feed_source_name'
          :feed-source-txt='item.feed_source_txt'
          :question='item.question'
          :answer-ctnt='item.good_num'
          :good-num='item.comment_num'
          :comment-num='item.commentNum'
        />
      </scroll-view>
  </view>
</template>

<script>
import './index.scss'
import Feed from '../../components/feed/feed.vue'
import img4 from '../../asset/images/icon1.jpeg'
import img5 from '../../asset/images/icon8.jpg'
import img6 from '../../asset/images/icon9.jpeg'

export default {
  components: {
    'feed': Feed
  },
  data () {
    return {
      loading: false,
      list: [{
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }]
    }
  },
  methods: {
    updateList() {
      this.list = [
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }
      ]
      // if (this.loading) {
      //   return
      // }
      // this.loading = true
      // Taro.showLoading({title: '加载中'})
      // Taro.request({
      //   url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      // }).then(res => {
      //   Taro.hideLoading()
      //   if (res.data.success) {
      //     this.loading = false
      //     this.list = res.data.data
      //   }
      // })
    },
    appendNextPageList() {
      this.list.push(...[
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }
      ])
      // if (this.state.loading) {
      //   return
      // }
      // this.loading = true
      // Taro.showLoading({title: '加载中'})
      // Taro.request({
      //   url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      // }).then(res => {
      //   Taro.hideLoading()
      //   if (res.data.success) {
      //     this.list.push(...res.data.data)
      //     this.loading = false
      //   }
      // })
    }
  }
}
</script>
