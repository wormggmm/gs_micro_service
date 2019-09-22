# gs_micro_service
Based of rabbitMQ

微服务
servicerMgr：
1、提供对外接口
2、创建管理servicer
3、servicer更新功能后，广播
4、接收其他servicerMgr的广播，创建和维护servicer的功能和状态。

servicer：
1、注册服务
2、调用服务
3、*注销服务