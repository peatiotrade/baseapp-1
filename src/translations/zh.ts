import { LangType } from '.';

export const zh: LangType = {
    'page.header.navbar.signIn': '登录',
    'page.header.navbar.trade': '交易',
    'page.header.navbar.wallets':'钱包',
    'page.header.navbar.openOrders':'打开订单',
    'page.header.navbar.history':'历史',

    'page.header.navbar.profile': '个人资料',
    'page.header.navbar.kyc':'KYC',
    'page.header.navbar.logout':'退出',

    'page.body.trade.header.markets':'市场',
    'page.body.trade.header.markets.content.pair':'配对',
    'page.body.trade.header.markets.content.price':'价格',
    'page.body.trade.header.markets.content.change': '24h 更改',
    'page.body.trade.header.markets.content.search':'搜索',

    'page.body.trade.header.newOrder':'插入新订单',
    'page.body.trade.header.newOrder.content.tabs.buy': '购买',
    'page.body.trade.header.newOrder.content.tabs.sell': '卖',
    'page.body.trade.header.newOrder.content.orderType':'订单类型',
    'page.body.trade.header.newOrder.content.orderType.limit':'限制',
    'page.body.trade.header.newOrder.content.orderType.market':'市场',
    'page.body.trade.header.newOrder.content.price': '价格',
    'page.body.trade.header.newOrder.content.amount': '金额',
    'page.body.trade.header.newOrder.content.total': '总计',
    'page.body.trade.header.newOrder.content.available': '可用',
    'page.body.trade.header.newOrder.content.estimatedFee': '预估费',

    'page.body.trade.header.marketDepths': '市场深度',
    'page.body.trade.header.marketDepths.content.price': '价格',
    'page.body.trade.header.marketDepths.content.volume': 'Volume:',
    'page.body.trade.header.marketDepths.content.cumulativeVolume': '累积量:',
    'page.body.trade.header.marketDepths.content.cumulativeValue': '累积值:',

    'page.body.trade.header.asks': '问',
    'page.body.trade.header.bids': '出价',
    'page.body.trade.orderbook.header.price': '价格',
    'page.body.trade.orderbook.header.amount': '金额',
    'page.body.trade.orderbook.header.volume': '音量',

    'page.body.trade.header.recentTrades': '近期交易',
    'page.body.trade.header.recentTrades.content.time': '时间',
    'page.body.trade.header.recentTrades.content.price': '价格',
    'page.body.trade.header.recentTrades.content.amount': '金额',

    'page.body.trade.header.openOrders':'打开订单',
    'page.body.trade.header.openOrders.content.date':'日期',
    'page.body.trade.header.openOrders.content.action':'行动',
    'page.body.trade.header.openOrders.content.state':'状态',
    'page.body.trade.header.openOrders.content.state.wait': '等',
    'page.body.trade.header.openOrders.content.price': '价格',
    'page.body.trade.header.openOrders.content.amount': '金额',
    'page.body.trade.header.openOrders.content.total': '总计',
    'page.body.trade.header.openOrders.content.filled': '填充',
    'page.body.trade.header.openOrders.content.ask': '问',
    'page.body.trade.header.openOrders.content.bid': '出价',

    'page.body.wallets.locked':'已锁定',
    'page.body.wallets.balance': '平衡',
    'page.body.wallets.tabs.deposit':'存款',
    'page.body.wallets.tabs.deposit.ccy.message.submit':'请使用其中一个提交存款付款以下选项。您的存款将反映在您的6号帐户确认中',
    'page.body.wallets.tabs.deposit.ccy.message.address':'钱包地址存款',
    'page.body.wallets.tabs.deposit.ccy.message.button': '复制',

    'page.body.wallets.tabs.deposit.fiat.message1': '你可以在银行存入此凭证',
    'page.body.wallets.tabs.deposit.fiat.message2': '请使用以下信息完成银行付款。您的存款将在两个工作日内反映在您的帐户中。.',
    'page.body.wallets.tabs.deposit.fiat.bankName': '银行名称',
    'page.body.wallets.tabs.deposit.fiat.accountNumber': '帐号',
    'page.body.wallets.tabs.deposit.fiat.accountName': '帐户名称',
    'page.body.wallets.tabs.deposit.fiat.phoneNumber': '电话号码',
    'page.body.wallets.tabs.deposit.fiat.referenceCode': '您的参考代码',
    'page.body.wallets.table.pending': 'Pending',
    'page.body.wallets.tabs.deposit.fiat.admin': ' 如果你想让菲亚特退出，请联系管理员！',

    'page.body.wallets.tabs.withdraw':'撤回',
    'page.body.wallets.tabs.withdraw.content.address':'撤回地址',
    'page.body.wallets.tabs.withdraw.content.amount':'提款金额',
    'page.body.wallets.tabs.withdraw.content.code2fa': '6 位数 GAuthenticator 代码',
    'page.body.wallets.tabs.withdraw.content.fee':'费用',
    'page.body.wallets.tabs.withdraw.content.total':'总提款金额',
    'page.body.wallets.tabs.withdraw.content.button':'撤回',
    'page.body.wallets.tabs.withdraw.content.addressPlaceholder': '地址',

    'page.body.wallets.tabs.withdraw.modal.confirmation': '确认',
    'page.body.wallets.tabs.withdraw.modal.message1': '你正在退出',
    'page.body.wallets.tabs.withdraw.modal.message2': '在地址上。你确定吗？',
    'page.body.wallets.tabs.withdraw.modal.button.cancel': '取消',
    'page.body.wallets.tabs.withdraw.modal.button.withdraw':'撤回',

    'page.body.wallets.tabs.withdraw.content.enable2fa': '你应该启用2fa以便退出！',
    'page.body.wallets.tabs.withdraw.content.enable2faButton': '启用2fa',

    'page.body.openOrders.tab.all': '全',
    'page.body.openOrders.tab.open': '打开',
    'page.body.openOrders.header.orderType':'订单类型',
    'page.body.openOrders.header.orderType.buy.market': '买 / 市场',
    'page.body.openOrders.header.orderType.buy.limit': '买 / 限制',
    'page.body.openOrders.header.orderType.sell.market': '卖 / 市场',
    'page.body.openOrders.header.orderType.sell.limit': '卖 / 限制',
    'page.body.openOrders.header.pair': '配对',
    'page.body.openOrders.header.amount': '金额',
    'page.body.openOrders.header.price': '价格',
    'page.body.openOrders.header.executed': '价格',
    'page.body.openOrders.header.remaining': '剩余',
    'page.body.openOrders.header.costRemaining': '剩余成',
    'page.body.openOrders.header.status':'状态',
    'page.body.openOrders.content.status.done': '完成',
    'page.body.openOrders.content.status.wait': '等等',
    'page.body.openOrders.content.status.cancel': '已取消',
    'page.body.openOrders.header.button.cancelAll': '全部取消',

    'page.body.history.deposit': '存款历史',
    'page.body.history.deposit.header.txid': 'txID',
    'page.body.history.deposit.header.date':'日期',
    'page.body.history.deposit.header.currency': '货币',
    'page.body.history.deposit.header.amount': '金额',
    'page.body.history.deposit.header.status':'状态',
    'page.body.history.deposit.content.status.accepted': '已接受',
    'page.body.history.deposit.content.status.collected': '收集',
    'page.body.history.deposit.content.status.submitted': '已提交',
    'page.body.history.deposit.content.status.canceled': '已取消',
    'page.body.history.deposit.content.status.rejected': '拒绝',
    'page.body.history.deposit.content.status.skipped': '跳过',

    'page.body.history.withdraw': '提取历史',
    'page.body.history.withdraw.header.id': 'ID',
    'page.body.history.withdraw.header.date':'日期',
    'page.body.history.withdraw.header.currency': '货币',
    'page.body.history.withdraw.header.address': '地址',
    'page.body.history.withdraw.header.amount': '金额',
    'page.body.history.withdraw.header.fee':'费用',
    'page.body.history.withdraw.header.status':'状态',
    'page.body.history.withdraw.content.status.prepared': '准备',
    'page.body.history.withdraw.content.status.submitted': '已提交',
    'page.body.history.withdraw.content.status.canceled': '已取消',
    'page.body.history.withdraw.content.status.accepted': '已接受',
    'page.body.history.withdraw.content.status.suspected': '被怀疑',
    'page.body.history.withdraw.content.status.rejected': '拒绝',
    'page.body.history.withdraw.content.status.processing': '处理',
    'page.body.history.withdraw.content.status.succeed': '成功',
    'page.body.history.withdraw.content.status.failed': '失败',
    'page.body.history.withdraw.content.status.confirming': '确认',

    'page.body.history.trade': '贸易历史',
    'page.body.history.trade.header.id': 'ID',
    'page.body.history.trade.header.date':'日期',
    'page.body.history.trade.header.side': '侧',

    'page.body.history.trade.content.side.buy': '购买',
    'page.body.history.trade.content.side.sell': '卖',

    'page.body.history.trade.header.market':'市场',
    'page.body.history.trade.header.price': '价格',
    'page.body.history.trade.header.funds': '基金',
    'page.body.history.trade.header.amount': '金额',
    'page.body.history.trade.header.balance': '平衡',

    'page.body.profile.header.account': '帐号',

    'page.body.profile.header.account.content.password': '密码',
    'page.body.profile.header.account.content.password.button.change': '改变',
    'page.body.profile.header.account.content.password.old': '旧密码',
    'page.body.profile.header.account.content.password.new': '新密码',
    'page.body.profile.header.account.content.password.button.save': '保存',
    'page.body.profile.header.account.content.password.button.cancel': '取消',

    'page.body.profile.header.account.content.twoFactorAuthentication': '双因素身份验证',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.enable': '已启用',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.disable': '已禁用',
    'page.body.profile.header.account.content.twoFactorAuthentication.header': '启用双因素身份验证',
    'page.body.profile.header.account.content.twoFactorAuthentication.subHeader': '6位Google身份验证器代码',
    'page.body.profile.header.account.content.twoFactorAuthentication.enable': '启用 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.disable': '禁用 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalBody': '请联系管理员禁用它。',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalHeader': '启用双因素身份验证',
    'page.body.profile.header.account.content.twoFactorAuthentication.info': '这是您的密码，可用于访问您的 ' +
        '来自不同设备的2fa代码，并在您的设备丢失时恢复访问权限。 ' +
        '一定要保存代码',

    'page.body.profile.header.account.profile': '个人资料验证',
    'page.body.profile.header.account.profile.email.title': '经过电子邮件验证',
    'page.body.profile.header.account.profile.email.message': '不允许存款和取款',
    'page.body.profile.header.account.profile.phone.unverified.title': '手机验证',
    'page.body.profile.header.account.profile.phone.title': '手机已验证',
    'page.body.profile.header.account.profile.phone.message': '允许存款和交易',
    'page.body.profile.header.account.profile.identity.unverified.title': '手机验证',
    'page.body.profile.header.account.profile.identity.title': '身份验证',
    'page.body.profile.header.account.profile.identity.message': '允许提款',

    'page.body.profile.header.referralProgram': '推荐计划',
    'page.body.profile.content.copyLink': '复制链接',

    'page.body.profile.header.accountActivity': '帐户活动',
    'page.body.profile.header.accountActivity.content.date':'日期',
    'page.body.profile.header.accountActivity.content.addressip': '地址IP',
    'page.body.profile.header.accountActivity.content.action':'行动',
    'page.body.profile.header.accountActivity.content.result': '结果',
    'page.body.profile.header.accountActivity.content.userAgent': '用户代理',

    'page.body.profile.content.action.login': '登录',
    'page.body.profile.content.action.logout': '退出',
    'page.body.profile.content.action.request2fa': '申请2FA的QR码',
    'page.body.profile.content.action.enable2fa': '启用2FA',
    'page.body.profile.content.action.login.2fa': '使用2FA登录',
    'page.body.profile.content.action.requestPasswordReset': '请求密码重置',
    'page.body.profile.content.action.passwordReset': '密码重置',

    'page.body.profile.content.result.succeed': '成功',
    'page.body.profile.content.result.failed': '失败',

    'page.body.kyc.phone.head': '让我们验证你的手机',
    'page.body.kyc.phone.enterPhone': '输入您的电话号码',
    'page.body.kyc.phone.phoneNumber': '电话号码',
    'page.body.kyc.phone.enterCode': '输入您收到的代码',
    'page.body.kyc.phone.code': '短信代码',
    'page.body.kyc.phone.send': '发送代码',
    'page.body.kyc.phone.resend': '重新发送代码',
    'page.body.kyc.identity.firstName': '名字',
    'page.body.kyc.identity.lastName': '姓氏',
    'page.body.kyc.identity.dateOfBirth': '出生日期 DD/MM/YYYY',
    'page.body.kyc.identity.residentialAddress': '住址',
    'page.body.kyc.identity.city': '城市',
    'page.body.kyc.identity.postcode': '邮政编码',
    'page.body.kyc.documents.expiryDate': '到期日 DD/MM/YYYY',
    'page.body.kyc.documents.drag': '拖放或浏览文件',
    'page.body.kyc.documents.maxFile': '最大文件大小为20MB',
    'page.body.kyc.documents.maxNum': '最大文件数为5',
    'page.body.kyc.documents.upload': '上传您的身份证照片',
    'page.body.kyc.documents.select.passport': '护照',
    'page.body.kyc.documents.select.identityCard': '身份证',
    'page.body.kyc.documents.select.driverLicense': '驾驶执照',
    'page.body.kyc.documents.select.utilityBill': '效用法案',
    'page.body.kyc.documents.number': ': 数字',

    'page.body.kyc.next': '下一步',
    'page.body.kyc.submit': 'Submit',
    'page.body.kyc.head.phone': '手机验证',
    'page.body.kyc.head.identity': '身份验证',
    'page.body.kyc.head.document': '文件验证',

    'page.footer.legalDocuments':'法律文件',
    'page.footer.faq':'常见问题',
    'page.footer.language':'语言',

    'page.header.signIn': '登录',
    'page.header.signIn.email': '电子邮件',
    'page.header.signIn.password': '密码',
    'page.header.signIn.receiveConfirmation': '没有收到您的确认电子邮件',
    'page.header.signIn.forgotPassword': '忘记密码？',
    'page.header.signIn.createAccount': '创建一个帐户？',

    'page.header.signUp': '注册',
    'page.header.signUp.email': '电子邮件',
    'page.header.signUp.password': '密码',
    'page.header.signUp.confirmPassword': '确认密码',
    'page.header.signUp.referalCode': '可选的引荐代码',
    'page.header.signUp.terms': '我同意服务方面的所有陈述',
    'page.header.signUp.modal.header': '验证您的电子邮件地址',
    'page.header.signUp.modal.body': '要完成注册，请查找 ' +
        '收件箱中的电子邮件，提供更多 ' +
        '指令。如果您找不到该电子邮件，请输入 ' +
        '请查看您的垃圾邮件',

    'page.resendConfirmation': '重新发送确认',
    'page.forgotPassword': '忘记密码',
    'page.forgotPassword.email': '电子邮件',
    'page.forgotPassword.send': '发送',
    'page.noDataToShow':'没有要显示的数据...',

    'page.modal.withdraw.success':'成功！',
    'page.modal.withdraw.success.message.content': '您的提款已成功提交。 请等待接收' +
        ' 很少有强制确认完成此次交易。',
    'page.modal.withdraw.success.button': '确定',
};