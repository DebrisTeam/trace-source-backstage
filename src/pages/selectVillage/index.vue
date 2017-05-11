<template>
    <div class="select-village">
        <div class="font22">切换村庄</div>
        <div class="select-village-content">
            <div class="search-bar">
                <div class="select-search">
                    <label class="font13 txt-info">按条件搜索:</label>
                    <el-cascader
                        style="height: 28px;"
                        size="small"
                        :options="selectOptions"
                        @active-item-change="handleItemChange"
                        :props="props"
                    ></el-cascader>
                    <el-button size="small">确定</el-button>
                </div>
                <div class="just-search">
                    <label class="font13 txt-info">直接搜索:</label>
                    <input v-model="justSearch" type="text" placeholder="请输入内容">
                    <el-button size="small">确定</el-button>
                </div>
            </div>
            <!--常用城市-->
            <div class="common-city">
                <label>常用村庄：</label>
                <ul class="txt-info">
                    <li>五福村</li>
                    <li>龙凤村</li>
                    <li>大庆村</li>
                    <li>南宁</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>南宁</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>南宁</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>南宁</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>南宁</li>
                </ul>
            </div>
            
            <!--最近访问-->
            <div class="common-city">
                <label>最近访问：</label>
                <ul class="txt-info">
                    <li>五福村</li>
                    <li>龙凤村</li>
                </ul>
            </div>
            
            <!--按拼音首字母选择-->
            <div class="search-result">
                <div class="title">按拼音首字母选择</div>
                <div class="search-item">
                    <label>A</label>
                    <ul class="txt-info font13">
                        <li>五福村</li>
                        <li>龙凤村</li>
                        <li>大庆村</li>
                        <li>南宁</li>
                        <li>北京</li>
                        <li>上海</li>
                        <li>五福村</li>
                        <li>龙凤村</li>
                        <li>大庆村</li>
                        <li>南宁</li>
                        <li>北京</li>
                        <li>上海</li>
                        <li>五福村</li>
                        <li>龙凤村</li>
                        <li>大庆村</li>
                        <li>南宁</li>
                        <li>北京</li>
                        <li>上海</li>
                    </ul>
                </div>
                <div class="search-item">
                    <label>B</label>
                    <ul class="txt-info font13">
                        <li>五福村</li>
                        <li>龙凤村</li>
                        <li>大庆村</li>
                        <li>南宁</li>
                        <li>北京</li>
                        <li>上海</li>
                    </ul>
                </div>
                <div class="search-item">
                    <label>C</label>
                    <ul class="txt-info font13">
                        <li>五福村</li>
                        <li>龙凤村</li>
                        <li>大庆村</li>
                        <li>南宁</li>
                        <li>北京</li>
                        <li>上海</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                selectOptions: [{
                    label: '江苏',
                    cities: []
                }, {
                    label: '浙江',
                    cities: []
                }],
                props: {
                    value: 'label',
                    children: 'cities'
                },
                justSearch: '',
            };
        },
        
        methods: {
            handleItemChange(val) {
                console.log('active item:', val);
                setTimeout(_ => {
                    if (val.indexOf('江苏') > -1 && !this.selectOptions[0].cities.length) {
                        this.selectOptions[0].cities = [{
                            label: '南京'
                        }];
                    } else if (val.indexOf('浙江') > -1 && !this.selectOptions[1].cities.length) {
                        this.selectOptions[1].cities = [{
                            label: '杭州'
                        }];
                    }
                }, 300);
            }
        }
    }
</script>

<style>
    .select-village {
        padding: 40px 20px;
    }
    .select-village-content {
        margin-top: 20px;
        border: 1px solid #ccc;
    }
    .search-bar {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 15px;
        background-color: rgb(244,244,244);
    }
    .select-search {
        margin-right: 30px;
    }

    .just-search input {
        width: 200px;
        height: 30px;
        padding: 5px 10px;
        line-height: 30px;
        font-size: 13px;
        border: 1px solid #bfcbd9;
        background: #fff;
        border-radius: 5px;
    }
    .common-city {
        display: flex;
        font-size: 13px;
        padding: 15px 20px;
        border-bottom: 1px solid #ccc;
    }
    .common-city label {
        width: 65px;
    }
    .common-city ul {
        flex: 1;
    }
    .common-city ul li {
        float: left;
        padding-bottom: 4px;
        padding-right: 15px;
        margin-right: 15px;
        cursor: pointer;
    }
    .common-city ul li:hover {
        color: #20A0FF;
    }
    .search-result {
        height: 500px;
        padding: 15px 20px;
        overflow: auto;
    }
    .search-result .title {
        display: inline-block;
        padding: 8px 10px;
        margin-bottom: 15px;
        line-height: 1;
        color: #fff;
        font-size: 13px;
        background: rgb(153,153,153);
        border-radius: 2px;
    }
    .search-item {
        display: flex;
        padding-bottom: 15px;
    }
    .search-item label {
        display: inline-block;
        width: 26px;
        height: 26px;
        line-height: 24px;
        text-align: center;
        background: rgb(239,239,239);
        border: 1px solid rgb(230,230,230);
    }
    .search-item ul {
        flex: 1;
        padding-left: 20px;
        margin-top: 3px;
    }
    .search-item ul li {
        float: left;
        padding-right: 15px;
        margin-right: 10px;
        margin-bottom: 8px;
        cursor: pointer;
    }
    .search-item ul li:hover {
        color: #20A0FF;
    }
</style>