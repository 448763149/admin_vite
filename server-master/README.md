<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-01 14:45:33
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 11:42:35
 * @detail: 
 * @change: 
-->
# baseAdmin

### 启动项目
npm i
npm start


#### 数据库说明  
|-- server-master
    |-- README.md
    |-- api         接口逻辑
    |-- config      数据库配置公钥与私钥
    |-- logs        日志目录
    |-- models      数据库表的映射关系
        |-- sysdept            部门表
        |-- sysdeptrolerel     部门与角色的关联
        |-- sysmenu            菜单表
        |-- sysoper            会员表
        |-- sysoperrolerel     会员角色表
        |-- sysrole            角色表


##### 本示例使用的公钥与私钥可自己生成，操作如下：
1. 打开命令行工具，输入openssl，打开openssl;
2. 生成私钥：genrsa -out rsa_private_key.pem 2048
3. 生成公钥： rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem


