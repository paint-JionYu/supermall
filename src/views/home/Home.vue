<template>
  <div class="home">
    <nav-bar class="home-nav"><h4 slot="center">购物街</h4></nav-bar>
    <home-swiper :banners="banners"/>
    <Recommend :recommends="recommends"/>
    <feature/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar';
import TabControl from 'content/TabControl';

import HomeSwiper from './childrenCompon/HomeSwiper';
import Recommend from './childrenCompon/Recommend';
import Feature from './childrenCompon/Feature';

import { getHomeMultidata, getHomeGoods } from 'network/home';


export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
    }
  },
  created() {
    // 获取首页轮播图，推荐数据
    this.getHomeMultidata();

    // 获取商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = ++this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      });
    }
  }
}
</script>

<style>
  .home {
    padding-top: 44px;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
    background: var(--color-pink);
    color: #fefefe;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    left: 0;
  }
</style>
