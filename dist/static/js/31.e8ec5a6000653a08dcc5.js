webpackJsonp([31],{1032:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),t._v("兑换商品")]),t._v(" "),t.paramsId<0?a("el-breadcrumb-item",[t._v("商品新增")]):a("el-breadcrumb-item",[t._v("商品修改")])],1)],1),t._v(" "),a("div",{staticClass:"form-box",staticStyle:{width:"100%"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"奖品名称："}},[a("el-input",{attrs:{placeholder:"请输入奖品名称"},model:{value:t.form.Name,callback:function(e){t.$set(t.form,"Name",e)},expression:"form.Name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所需积分："}},[a("el-input",{attrs:{placeholder:"请输入所需积分"},model:{value:t.form.Score,callback:function(e){t.$set(t.form,"Score",e)},expression:"form.Score"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"奖品介绍："}},[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入奖品介绍"},model:{value:t.form.Description,callback:function(e){t.$set(t.form,"Description",e)},expression:"form.Description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"输入提示："}},[a("el-input",{attrs:{placeholder:"请输入提示内容"},model:{value:t.form.Message,callback:function(e){t.$set(t.form,"Message",e)},expression:"form.Message"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"奖品图片："}},[a("el-upload",{attrs:{action:t.HOST+"/Upload/Save",data:{path:"Product"},"show-file-list":!1,"list-type":"picture-card","on-success":t.handleAvatarSuccess}},[t.form.ShowImage?a("img",{staticClass:"avatar",staticStyle:{width:"148px",height:"148px"},attrs:{src:t.form.ShowImage}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)])},staticRenderFns:[]}},510:function(t,e,a){var r=a(200)(a(578),a(1032),null,null);t.exports=r.exports},578:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{paramsId:"",form:{}}},watch:{$route:function(){this.paramsId=this.$route.params.id,this.myaxios()}},created:function(){this.paramsId=this.$route.params.id,this.myaxios()},update:function(){this.paramsId=this.$route.params.id,this.myaxios()},methods:{myaxios:function(){var t=this;if(this.paramsId<0)var e="";else var e=this.paramsId;this.$http.get(this.HOST+"/Product/Get",{params:{Id:e}}).then(function(e){t.form=e.data},function(t){})},onSubmit:function(){var t=this;this.$http.post(this.HOST+"/Product/Save",this.form).then(function(e){t.$message.success("提交成功！"),t.$router.back()},function(e){t.$message.error("提交失败！")})},cancel:function(){this.$router.back()},handleAvatarSuccess:function(t){0==t.error?(this.form.ShowImage=t.view,this.form.Image=t.url):this.$message.error(t.msg)}}}}});