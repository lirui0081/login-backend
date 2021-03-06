# -*- coding:utf-8 -*-


C_STATUS = (
    ('zk', u'在库'),
    ('zg', u'在柜'),
    ('ys', u'已售'),
    )


C_CHECK_STATUS = (
    (0, u'未开始'),
    (1, u'盘点中'),
    (2, u'盘点暂停'),
    (20, u'盘点结束'),
    (21, u'任务取消'),
    )

C_CHECK_TYPE = (
    (0, u'每日盘点'),
    (1, u'每月盘点'),
    (2, u'季度盘点'),
    (3, u'事件性盘点'),
    )


C_CHECK_ERROR = (
    (0, u'盘亏'),
    (1, u'盘盈'),
    (2, u'信息不符'),
    )


C_GENDER = (
    (0, u'未知'),
    (1, u'男'),
    (2, u'女'),
    )
